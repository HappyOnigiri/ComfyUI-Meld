import { api as te } from "/scripts/api.js";
import { app as oc } from "/scripts/app.js";
function mf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ic = { exports: {} }, ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr = Symbol.for("react.element"), pf = Symbol.for("react.portal"), hf = Symbol.for("react.fragment"), gf = Symbol.for("react.strict_mode"), yf = Symbol.for("react.profiler"), vf = Symbol.for("react.provider"), wf = Symbol.for("react.context"), xf = Symbol.for("react.forward_ref"), _f = Symbol.for("react.suspense"), kf = Symbol.for("react.memo"), Sf = Symbol.for("react.lazy"), Ko = Symbol.iterator;
function jf(e) {
  return e === null || typeof e != "object" ? null : (e = Ko && e[Ko] || e["@@iterator"], typeof e == "function" ? e : null);
}
var cc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, dc = Object.assign, uc = {};
function er(e, t, n) {
  this.props = e, this.context = t, this.refs = uc, this.updater = n || cc;
}
er.prototype.isReactComponent = {};
er.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
er.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fc() {
}
fc.prototype = er.prototype;
function Ba(e, t, n) {
  this.props = e, this.context = t, this.refs = uc, this.updater = n || cc;
}
var Ha = Ba.prototype = new fc();
Ha.constructor = Ba;
dc(Ha, er.prototype);
Ha.isPureReactComponent = !0;
var Go = Array.isArray, mc = Object.prototype.hasOwnProperty, Ka = { current: null }, pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r, s = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) mc.call(t, r) && !pc.hasOwnProperty(r) && (s[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) s.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) s[r] === void 0 && (s[r] = i[r]);
  return { $$typeof: Hr, type: e, key: a, ref: o, props: s, _owner: Ka.current };
}
function bf(e, t) {
  return { $$typeof: Hr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ga(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hr;
}
function Cf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var qo = /\/+/g;
function _s(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Cf("" + e.key) : t.toString(36);
}
function yl(e, t, n, r, s) {
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
        case Hr:
        case pf:
          o = !0;
      }
  }
  if (o) return o = e, s = s(o), e = r === "" ? "." + _s(o, 0) : r, Go(s) ? (n = "", e != null && (n = e.replace(qo, "$&/") + "/"), yl(s, t, n, "", function(d) {
    return d;
  })) : s != null && (Ga(s) && (s = bf(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(qo, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Go(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + _s(a, i);
    o += yl(a, t, n, c, s);
  }
  else if (c = jf(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + _s(a, i++), o += yl(a, t, n, c, s);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Xr(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return yl(e, r, "", "", function(a) {
    return t.call(n, a, s++);
  }), r;
}
function Nf(e) {
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
var Ge = { current: null }, vl = { transition: null }, Ef = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: vl, ReactCurrentOwner: Ka };
function gc() {
  throw Error("act(...) is not supported in production builds of React.");
}
ae.Children = { map: Xr, forEach: function(e, t, n) {
  Xr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Xr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Xr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ga(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ae.Component = er;
ae.Fragment = hf;
ae.Profiler = yf;
ae.PureComponent = Ba;
ae.StrictMode = gf;
ae.Suspense = _f;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef;
ae.act = gc;
ae.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = dc({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = Ka.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) mc.call(t, c) && !pc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: Hr, type: e.type, key: s, ref: a, props: r, _owner: o };
};
ae.createContext = function(e) {
  return e = { $$typeof: wf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vf, _context: e }, e.Consumer = e;
};
ae.createElement = hc;
ae.createFactory = function(e) {
  var t = hc.bind(null, e);
  return t.type = e, t;
};
ae.createRef = function() {
  return { current: null };
};
ae.forwardRef = function(e) {
  return { $$typeof: xf, render: e };
};
ae.isValidElement = Ga;
ae.lazy = function(e) {
  return { $$typeof: Sf, _payload: { _status: -1, _result: e }, _init: Nf };
};
ae.memo = function(e, t) {
  return { $$typeof: kf, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function(e) {
  var t = vl.transition;
  vl.transition = {};
  try {
    e();
  } finally {
    vl.transition = t;
  }
};
ae.unstable_act = gc;
ae.useCallback = function(e, t) {
  return Ge.current.useCallback(e, t);
};
ae.useContext = function(e) {
  return Ge.current.useContext(e);
};
ae.useDebugValue = function() {
};
ae.useDeferredValue = function(e) {
  return Ge.current.useDeferredValue(e);
};
ae.useEffect = function(e, t) {
  return Ge.current.useEffect(e, t);
};
ae.useId = function() {
  return Ge.current.useId();
};
ae.useImperativeHandle = function(e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n);
};
ae.useInsertionEffect = function(e, t) {
  return Ge.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function(e, t) {
  return Ge.current.useLayoutEffect(e, t);
};
ae.useMemo = function(e, t) {
  return Ge.current.useMemo(e, t);
};
ae.useReducer = function(e, t, n) {
  return Ge.current.useReducer(e, t, n);
};
ae.useRef = function(e) {
  return Ge.current.useRef(e);
};
ae.useState = function(e) {
  return Ge.current.useState(e);
};
ae.useSyncExternalStore = function(e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n);
};
ae.useTransition = function() {
  return Ge.current.useTransition();
};
ae.version = "18.3.1";
ic.exports = ae;
var p = ic.exports;
const qt = /* @__PURE__ */ mf(p);
var yc = { exports: {} }, it = {}, vc = { exports: {} }, wc = {};
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
    var $ = C.length;
    C.push(L);
    e: for (; 0 < $; ) {
      var M = $ - 1 >>> 1, B = C[M];
      if (0 < s(B, L)) C[M] = L, C[$] = B, $ = M;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0], $ = C.pop();
    if ($ !== L) {
      C[0] = $;
      e: for (var M = 0, B = C.length, de = B >>> 1; M < de; ) {
        var V = 2 * (M + 1) - 1, re = C[V], P = V + 1, U = C[P];
        if (0 > s(re, $)) P < B && 0 > s(U, re) ? (C[M] = U, C[P] = $, M = P) : (C[M] = re, C[V] = $, M = V);
        else if (P < B && 0 > s(U, $)) C[M] = U, C[P] = $, M = P;
        else break e;
      }
    }
    return L;
  }
  function s(C, L) {
    var $ = C.sortIndex - L.sortIndex;
    return $ !== 0 ? $ : C.id - L.id;
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
  var c = [], d = [], m = 1, v = null, w = 3, x = !1, y = !1, _ = !1, S = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(C) {
    for (var L = n(d); L !== null; ) {
      if (L.callback === null) r(d);
      else if (L.startTime <= C) r(d), L.sortIndex = L.expirationTime, t(c, L);
      else break;
      L = n(d);
    }
  }
  function g(C) {
    if (_ = !1, h(C), !y) if (n(c) !== null) y = !0, R(k);
    else {
      var L = n(d);
      L !== null && T(g, L.startTime - C);
    }
  }
  function k(C, L) {
    y = !1, _ && (_ = !1, f(N), N = -1), x = !0;
    var $ = w;
    try {
      for (h(L), v = n(c); v !== null && (!(v.expirationTime > L) || C && !I()); ) {
        var M = v.callback;
        if (typeof M == "function") {
          v.callback = null, w = v.priorityLevel;
          var B = M(v.expirationTime <= L);
          L = e.unstable_now(), typeof B == "function" ? v.callback = B : v === n(c) && r(c), h(L);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var de = !0;
      else {
        var V = n(d);
        V !== null && T(g, V.startTime - L), de = !1;
      }
      return de;
    } finally {
      v = null, w = $, x = !1;
    }
  }
  var b = !1, j = null, N = -1, O = 5, D = -1;
  function I() {
    return !(e.unstable_now() - D < O);
  }
  function W() {
    if (j !== null) {
      var C = e.unstable_now();
      D = C;
      var L = !0;
      try {
        L = j(!0, C);
      } finally {
        L ? X() : (b = !1, j = null);
      }
    } else b = !1;
  }
  var X;
  if (typeof u == "function") X = function() {
    u(W);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), z = E.port2;
    E.port1.onmessage = W, X = function() {
      z.postMessage(null);
    };
  } else X = function() {
    S(W, 0);
  };
  function R(C) {
    j = C, b || (b = !0, X());
  }
  function T(C, L) {
    N = S(function() {
      C(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    y || x || (y = !0, R(k));
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
    var $ = w;
    w = L;
    try {
      return C();
    } finally {
      w = $;
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
    var $ = w;
    w = C;
    try {
      return L();
    } finally {
      w = $;
    }
  }, e.unstable_scheduleCallback = function(C, L, $) {
    var M = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? M + $ : M) : $ = M, C) {
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
    return B = $ + B, C = { id: m++, callback: L, priorityLevel: C, startTime: $, expirationTime: B, sortIndex: -1 }, $ > M ? (C.sortIndex = $, t(d, C), n(c) === null && C === n(d) && (_ ? (f(N), N = -1) : _ = !0, T(g, $ - M))) : (C.sortIndex = B, t(c, C), y || x || (y = !0, R(k))), C;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(C) {
    var L = w;
    return function() {
      var $ = w;
      w = L;
      try {
        return C.apply(this, arguments);
      } finally {
        w = $;
      }
    };
  };
})(wc);
vc.exports = wc;
var Mf = vc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var If = p, ot = Mf;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var xc = /* @__PURE__ */ new Set(), br = {};
function bn(e, t) {
  Hn(e, t), Hn(e + "Capture", t);
}
function Hn(e, t) {
  for (br[e] = t, e = 0; e < t.length; e++) xc.add(t[e]);
}
var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gs = Object.prototype.hasOwnProperty, Tf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Yo = {}, Xo = {};
function Lf(e) {
  return Gs.call(Xo, e) ? !0 : Gs.call(Yo, e) ? !1 : Tf.test(e) ? Xo[e] = !0 : (Yo[e] = !0, !1);
}
function Df(e, t, n, r) {
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
function Pf(e, t, n, r) {
  if (t === null || typeof t > "u" || Df(e, t, n, r)) return !0;
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
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  We[e] = new qe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  We[t] = new qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  We[e] = new qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  We[e] = new qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  We[e] = new qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  We[e] = new qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  We[e] = new qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  We[e] = new qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  We[e] = new qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qa = /[\-:]([a-z])/g;
function Ya(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    qa,
    Ya
  );
  We[t] = new qe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(qa, Ya);
  We[t] = new qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(qa, Ya);
  We[t] = new qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  We[e] = new qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
We.xlinkHref = new qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  We[e] = new qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xa(e, t, n, r) {
  var s = We.hasOwnProperty(t) ? We[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pf(t, n, s, r) && (n = null), r || s === null ? Lf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Qt = If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Jr = Symbol.for("react.element"), En = Symbol.for("react.portal"), Mn = Symbol.for("react.fragment"), Ja = Symbol.for("react.strict_mode"), qs = Symbol.for("react.profiler"), _c = Symbol.for("react.provider"), kc = Symbol.for("react.context"), Za = Symbol.for("react.forward_ref"), Ys = Symbol.for("react.suspense"), Xs = Symbol.for("react.suspense_list"), eo = Symbol.for("react.memo"), Bt = Symbol.for("react.lazy"), Sc = Symbol.for("react.offscreen"), Jo = Symbol.iterator;
function lr(e) {
  return e === null || typeof e != "object" ? null : (e = Jo && e[Jo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var be = Object.assign, ks;
function fr(e) {
  if (ks === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ks = t && t[1] || "";
  }
  return `
` + ks + e;
}
var Ss = !1;
function js(e, t) {
  if (!e || Ss) return "";
  Ss = !0;
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
    Ss = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function Rf(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = js(e.type, !1), e;
    case 11:
      return e = js(e.type.render, !1), e;
    case 1:
      return e = js(e.type, !0), e;
    default:
      return "";
  }
}
function Js(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case En:
      return "Portal";
    case qs:
      return "Profiler";
    case Ja:
      return "StrictMode";
    case Ys:
      return "Suspense";
    case Xs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case kc:
      return (e.displayName || "Context") + ".Consumer";
    case _c:
      return (e._context.displayName || "Context") + ".Provider";
    case Za:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case eo:
      return t = e.displayName || null, t !== null ? t : Js(e.type) || "Memo";
    case Bt:
      t = e._payload, e = e._init;
      try {
        return Js(e(t));
      } catch {
      }
  }
  return null;
}
function zf(e) {
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
      return Js(t);
    case 8:
      return t === Ja ? "StrictMode" : "Mode";
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
function an(e) {
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
function jc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Of(e) {
  var t = jc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Zr(e) {
  e._valueTracker || (e._valueTracker = Of(e));
}
function bc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = jc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Il(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zs(e, t) {
  var n = t.checked;
  return be({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Zo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = an(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Cc(e, t) {
  t = t.checked, t != null && Xa(e, "checked", t, !1);
}
function ea(e, t) {
  Cc(e, t);
  var n = an(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ta(e, t.type, n) : t.hasOwnProperty("defaultValue") && ta(e, t.type, an(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ei(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ta(e, t, n) {
  (t !== "number" || Il(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mr = Array.isArray;
function Wn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function na(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return be({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ti(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(F(92));
      if (mr(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: an(n) };
}
function Nc(e, t) {
  var n = an(t.value), r = an(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ni(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ec(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ra(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ec(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var el, Mc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (el = el || document.createElement("div"), el.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = el.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var gr = {
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
}, Af = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function(e) {
  Af.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), gr[t] = gr[e];
  });
});
function Ic(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gr.hasOwnProperty(e) && gr[e] ? ("" + t).trim() : t + "px";
}
function Tc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = Ic(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var Ff = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function la(e, t) {
  if (t) {
    if (Ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function sa(e, t) {
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
var aa = null;
function to(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var oa = null, $n = null, Un = null;
function ri(e) {
  if (e = qr(e)) {
    if (typeof oa != "function") throw Error(F(280));
    var t = e.stateNode;
    t && (t = ss(t), oa(e.stateNode, e.type, t));
  }
}
function Lc(e) {
  $n ? Un ? Un.push(e) : Un = [e] : $n = e;
}
function Dc() {
  if ($n) {
    var e = $n, t = Un;
    if (Un = $n = null, ri(e), t) for (e = 0; e < t.length; e++) ri(t[e]);
  }
}
function Pc(e, t) {
  return e(t);
}
function Rc() {
}
var bs = !1;
function zc(e, t, n) {
  if (bs) return e(t, n);
  bs = !0;
  try {
    return Pc(e, t, n);
  } finally {
    bs = !1, ($n !== null || Un !== null) && (Rc(), Dc());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ss(n);
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
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var ia = !1;
if (At) try {
  var sr = {};
  Object.defineProperty(sr, "passive", { get: function() {
    ia = !0;
  } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
} catch {
  ia = !1;
}
function Wf(e, t, n, r, s, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var yr = !1, Tl = null, Ll = !1, ca = null, $f = { onError: function(e) {
  yr = !0, Tl = e;
} };
function Uf(e, t, n, r, s, a, o, i, c) {
  yr = !1, Tl = null, Wf.apply($f, arguments);
}
function Qf(e, t, n, r, s, a, o, i, c) {
  if (Uf.apply(this, arguments), yr) {
    if (yr) {
      var d = Tl;
      yr = !1, Tl = null;
    } else throw Error(F(198));
    Ll || (Ll = !0, ca = d);
  }
}
function Cn(e) {
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
function Oc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function li(e) {
  if (Cn(e) !== e) throw Error(F(188));
}
function Vf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Cn(e), t === null) throw Error(F(188));
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
        if (a === n) return li(s), e;
        if (a === r) return li(s), t;
        a = a.sibling;
      }
      throw Error(F(188));
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
        if (!o) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function Ac(e) {
  return e = Vf(e), e !== null ? Fc(e) : null;
}
function Fc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wc = ot.unstable_scheduleCallback, si = ot.unstable_cancelCallback, Bf = ot.unstable_shouldYield, Hf = ot.unstable_requestPaint, Te = ot.unstable_now, Kf = ot.unstable_getCurrentPriorityLevel, no = ot.unstable_ImmediatePriority, $c = ot.unstable_UserBlockingPriority, Dl = ot.unstable_NormalPriority, Gf = ot.unstable_LowPriority, Uc = ot.unstable_IdlePriority, ts = null, It = null;
function qf(e) {
  if (It && typeof It.onCommitFiberRoot == "function") try {
    It.onCommitFiberRoot(ts, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var St = Math.clz32 ? Math.clz32 : Jf, Yf = Math.log, Xf = Math.LN2;
function Jf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Yf(e) / Xf | 0) | 0;
}
var tl = 64, nl = 4194304;
function pr(e) {
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
function Pl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~s;
    i !== 0 ? r = pr(i) : (a &= o, a !== 0 && (r = pr(a)));
  } else o = n & ~s, o !== 0 ? r = pr(o) : a !== 0 && (r = pr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function Zf(e, t) {
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
function em(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - St(a), i = 1 << o, c = s[o];
    c === -1 ? (!(i & n) || i & r) && (s[o] = Zf(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function da(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Qc() {
  var e = tl;
  return tl <<= 1, !(tl & 4194240) && (tl = 64), e;
}
function Cs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
}
function tm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - St(n), a = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
  }
}
function ro(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var ue = 0;
function Vc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Bc, lo, Hc, Kc, Gc, ua = !1, rl = [], Jt = null, Zt = null, en = null, Er = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Kt = [], nm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ai(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      Er.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mr.delete(t.pointerId);
  }
}
function ar(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = qr(t), t !== null && lo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function rm(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return Jt = ar(Jt, e, t, n, r, s), !0;
    case "dragenter":
      return Zt = ar(Zt, e, t, n, r, s), !0;
    case "mouseover":
      return en = ar(en, e, t, n, r, s), !0;
    case "pointerover":
      var a = s.pointerId;
      return Er.set(a, ar(Er.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return a = s.pointerId, Mr.set(a, ar(Mr.get(a) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function qc(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Oc(n), t !== null) {
          e.blockedOn = t, Gc(e.priority, function() {
            Hc(n);
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
function wl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      aa = r, n.target.dispatchEvent(r), aa = null;
    } else return t = qr(n), t !== null && lo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function oi(e, t, n) {
  wl(e) && n.delete(t);
}
function lm() {
  ua = !1, Jt !== null && wl(Jt) && (Jt = null), Zt !== null && wl(Zt) && (Zt = null), en !== null && wl(en) && (en = null), Er.forEach(oi), Mr.forEach(oi);
}
function or(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ua || (ua = !0, ot.unstable_scheduleCallback(ot.unstable_NormalPriority, lm)));
}
function Ir(e) {
  function t(s) {
    return or(s, e);
  }
  if (0 < rl.length) {
    or(rl[0], e);
    for (var n = 1; n < rl.length; n++) {
      var r = rl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Jt !== null && or(Jt, e), Zt !== null && or(Zt, e), en !== null && or(en, e), Er.forEach(t), Mr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) qc(n), n.blockedOn === null && Kt.shift();
}
var Qn = Qt.ReactCurrentBatchConfig, Rl = !0;
function sm(e, t, n, r) {
  var s = ue, a = Qn.transition;
  Qn.transition = null;
  try {
    ue = 1, so(e, t, n, r);
  } finally {
    ue = s, Qn.transition = a;
  }
}
function am(e, t, n, r) {
  var s = ue, a = Qn.transition;
  Qn.transition = null;
  try {
    ue = 4, so(e, t, n, r);
  } finally {
    ue = s, Qn.transition = a;
  }
}
function so(e, t, n, r) {
  if (Rl) {
    var s = fa(e, t, n, r);
    if (s === null) zs(e, t, r, zl, n), ai(e, r);
    else if (rm(s, e, t, n, r)) r.stopPropagation();
    else if (ai(e, r), t & 4 && -1 < nm.indexOf(e)) {
      for (; s !== null; ) {
        var a = qr(s);
        if (a !== null && Bc(a), a = fa(e, t, n, r), a === null && zs(e, t, r, zl, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else zs(e, t, r, null, n);
  }
}
var zl = null;
function fa(e, t, n, r) {
  if (zl = null, e = to(r), e = pn(e), e !== null) if (t = Cn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Oc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return zl = e, null;
}
function Yc(e) {
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
      switch (Kf()) {
        case no:
          return 1;
        case $c:
          return 4;
        case Dl:
        case Gf:
          return 16;
        case Uc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null, ao = null, xl = null;
function Xc() {
  if (xl) return xl;
  var e, t = ao, n = t.length, r, s = "value" in Yt ? Yt.value : Yt.textContent, a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++) ;
  return xl = s.slice(e, 1 < r ? 1 - r : void 0);
}
function _l(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ll() {
  return !0;
}
function ii() {
  return !1;
}
function ct(e) {
  function t(n, r, s, a, o) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? ll : ii, this.isPropagationStopped = ii, this;
  }
  return be(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ll);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ll);
  }, persist: function() {
  }, isPersistent: ll }), t;
}
var tr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, oo = ct(tr), Gr = be({}, tr, { view: 0, detail: 0 }), om = ct(Gr), Ns, Es, ir, ns = be({}, Gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: io, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (Ns = e.screenX - ir.screenX, Es = e.screenY - ir.screenY) : Es = Ns = 0, ir = e), Ns);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Es;
} }), ci = ct(ns), im = be({}, ns, { dataTransfer: 0 }), cm = ct(im), dm = be({}, Gr, { relatedTarget: 0 }), Ms = ct(dm), um = be({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fm = ct(um), mm = be({}, tr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), pm = ct(mm), hm = be({}, tr, { data: 0 }), di = ct(hm), gm = {
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
}, ym = {
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
}, vm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function wm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vm[e]) ? !!t[e] : !1;
}
function io() {
  return wm;
}
var xm = be({}, Gr, { key: function(e) {
  if (e.key) {
    var t = gm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = _l(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ym[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: io, charCode: function(e) {
  return e.type === "keypress" ? _l(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? _l(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), _m = ct(xm), km = be({}, ns, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ui = ct(km), Sm = be({}, Gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: io }), jm = ct(Sm), bm = be({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cm = ct(bm), Nm = be({}, ns, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Em = ct(Nm), Mm = [9, 13, 27, 32], co = At && "CompositionEvent" in window, vr = null;
At && "documentMode" in document && (vr = document.documentMode);
var Im = At && "TextEvent" in window && !vr, Jc = At && (!co || vr && 8 < vr && 11 >= vr), fi = " ", mi = !1;
function Zc(e, t) {
  switch (e) {
    case "keyup":
      return Mm.indexOf(t.keyCode) !== -1;
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
function ed(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var In = !1;
function Tm(e, t) {
  switch (e) {
    case "compositionend":
      return ed(t);
    case "keypress":
      return t.which !== 32 ? null : (mi = !0, fi);
    case "textInput":
      return e = t.data, e === fi && mi ? null : e;
    default:
      return null;
  }
}
function Lm(e, t) {
  if (In) return e === "compositionend" || !co && Zc(e, t) ? (e = Xc(), xl = ao = Yt = null, In = !1, e) : null;
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
      return Jc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Dm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function pi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Dm[e.type] : t === "textarea";
}
function td(e, t, n, r) {
  Lc(r), t = Ol(t, "onChange"), 0 < t.length && (n = new oo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var wr = null, Tr = null;
function Pm(e) {
  fd(e, 0);
}
function rs(e) {
  var t = Dn(e);
  if (bc(t)) return e;
}
function Rm(e, t) {
  if (e === "change") return t;
}
var nd = !1;
if (At) {
  var Is;
  if (At) {
    var Ts = "oninput" in document;
    if (!Ts) {
      var hi = document.createElement("div");
      hi.setAttribute("oninput", "return;"), Ts = typeof hi.oninput == "function";
    }
    Is = Ts;
  } else Is = !1;
  nd = Is && (!document.documentMode || 9 < document.documentMode);
}
function gi() {
  wr && (wr.detachEvent("onpropertychange", rd), Tr = wr = null);
}
function rd(e) {
  if (e.propertyName === "value" && rs(Tr)) {
    var t = [];
    td(t, Tr, e, to(e)), zc(Pm, t);
  }
}
function zm(e, t, n) {
  e === "focusin" ? (gi(), wr = t, Tr = n, wr.attachEvent("onpropertychange", rd)) : e === "focusout" && gi();
}
function Om(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return rs(Tr);
}
function Am(e, t) {
  if (e === "click") return rs(t);
}
function Fm(e, t) {
  if (e === "input" || e === "change") return rs(t);
}
function Wm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var bt = typeof Object.is == "function" ? Object.is : Wm;
function Lr(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Gs.call(t, s) || !bt(e[s], t[s])) return !1;
  }
  return !0;
}
function yi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vi(e, t) {
  var n = yi(e);
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
    n = yi(n);
  }
}
function ld(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ld(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function sd() {
  for (var e = window, t = Il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Il(e.document);
  }
  return t;
}
function uo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function $m(e) {
  var t = sd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ld(n.ownerDocument.documentElement, n)) {
    if (r !== null && uo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, a = Math.min(r.start, s);
        r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = vi(n, a);
        var o = vi(
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
var Um = At && "documentMode" in document && 11 >= document.documentMode, Tn = null, ma = null, xr = null, pa = !1;
function wi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pa || Tn == null || Tn !== Il(r) || (r = Tn, "selectionStart" in r && uo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), xr && Lr(xr, r) || (xr = r, r = Ol(ma, "onSelect"), 0 < r.length && (t = new oo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Tn)));
}
function sl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ln = { animationend: sl("Animation", "AnimationEnd"), animationiteration: sl("Animation", "AnimationIteration"), animationstart: sl("Animation", "AnimationStart"), transitionend: sl("Transition", "TransitionEnd") }, Ls = {}, ad = {};
At && (ad = document.createElement("div").style, "AnimationEvent" in window || (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation), "TransitionEvent" in window || delete Ln.transitionend.transition);
function ls(e) {
  if (Ls[e]) return Ls[e];
  if (!Ln[e]) return e;
  var t = Ln[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ad) return Ls[e] = t[n];
  return e;
}
var od = ls("animationend"), id = ls("animationiteration"), cd = ls("animationstart"), dd = ls("transitionend"), ud = /* @__PURE__ */ new Map(), xi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, t) {
  ud.set(e, t), bn(t, [e]);
}
for (var Ds = 0; Ds < xi.length; Ds++) {
  var Ps = xi[Ds], Qm = Ps.toLowerCase(), Vm = Ps[0].toUpperCase() + Ps.slice(1);
  cn(Qm, "on" + Vm);
}
cn(od, "onAnimationEnd");
cn(id, "onAnimationIteration");
cn(cd, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(dd, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function _i(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Qf(r, t, void 0, e), e.currentTarget = null;
}
function fd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && s.isPropagationStopped()) break e;
        _i(s, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && s.isPropagationStopped()) break e;
        _i(s, i, d), a = c;
      }
    }
  }
  if (Ll) throw e = ca, Ll = !1, ca = null, e;
}
function ye(e, t) {
  var n = t[wa];
  n === void 0 && (n = t[wa] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (md(t, e, 2, !1), n.add(r));
}
function Rs(e, t, n) {
  var r = 0;
  t && (r |= 4), md(n, e, r, t);
}
var al = "_reactListening" + Math.random().toString(36).slice(2);
function Dr(e) {
  if (!e[al]) {
    e[al] = !0, xc.forEach(function(n) {
      n !== "selectionchange" && (Bm.has(n) || Rs(n, !1, e), Rs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[al] || (t[al] = !0, Rs("selectionchange", !1, t));
  }
}
function md(e, t, n, r) {
  switch (Yc(t)) {
    case 1:
      var s = sm;
      break;
    case 4:
      s = am;
      break;
    default:
      s = so;
  }
  n = s.bind(null, t, n, e), s = void 0, !ia || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function zs(e, t, n, r, s) {
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
        if (o = pn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  zc(function() {
    var d = a, m = to(n), v = [];
    e: {
      var w = ud.get(e);
      if (w !== void 0) {
        var x = oo, y = e;
        switch (e) {
          case "keypress":
            if (_l(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = _m;
            break;
          case "focusin":
            y = "focus", x = Ms;
            break;
          case "focusout":
            y = "blur", x = Ms;
            break;
          case "beforeblur":
          case "afterblur":
            x = Ms;
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
            x = ci;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = cm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = jm;
            break;
          case od:
          case id:
          case cd:
            x = fm;
            break;
          case dd:
            x = Cm;
            break;
          case "scroll":
            x = om;
            break;
          case "wheel":
            x = Em;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = pm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ui;
        }
        var _ = (t & 4) !== 0, S = !_ && e === "scroll", f = _ ? w !== null ? w + "Capture" : null : w;
        _ = [];
        for (var u = d, h; u !== null; ) {
          h = u;
          var g = h.stateNode;
          if (h.tag === 5 && g !== null && (h = g, f !== null && (g = Nr(u, f), g != null && _.push(Pr(u, g, h)))), S) break;
          u = u.return;
        }
        0 < _.length && (w = new x(w, y, null, n, m), v.push({ event: w, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", w && n !== aa && (y = n.relatedTarget || n.fromElement) && (pn(y) || y[Ft])) break e;
        if ((x || w) && (w = m.window === m ? m : (w = m.ownerDocument) ? w.defaultView || w.parentWindow : window, x ? (y = n.relatedTarget || n.toElement, x = d, y = y ? pn(y) : null, y !== null && (S = Cn(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (x = null, y = d), x !== y)) {
          if (_ = ci, g = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (_ = ui, g = "onPointerLeave", f = "onPointerEnter", u = "pointer"), S = x == null ? w : Dn(x), h = y == null ? w : Dn(y), w = new _(g, u + "leave", x, n, m), w.target = S, w.relatedTarget = h, g = null, pn(m) === d && (_ = new _(f, u + "enter", y, n, m), _.target = h, _.relatedTarget = S, g = _), S = g, x && y) t: {
            for (_ = x, f = y, u = 0, h = _; h; h = Nn(h)) u++;
            for (h = 0, g = f; g; g = Nn(g)) h++;
            for (; 0 < u - h; ) _ = Nn(_), u--;
            for (; 0 < h - u; ) f = Nn(f), h--;
            for (; u--; ) {
              if (_ === f || f !== null && _ === f.alternate) break t;
              _ = Nn(_), f = Nn(f);
            }
            _ = null;
          }
          else _ = null;
          x !== null && ki(v, w, x, _, !1), y !== null && S !== null && ki(v, S, y, _, !0);
        }
      }
      e: {
        if (w = d ? Dn(d) : window, x = w.nodeName && w.nodeName.toLowerCase(), x === "select" || x === "input" && w.type === "file") var k = Rm;
        else if (pi(w)) if (nd) k = Fm;
        else {
          k = Om;
          var b = zm;
        }
        else (x = w.nodeName) && x.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (k = Am);
        if (k && (k = k(e, d))) {
          td(v, k, n, m);
          break e;
        }
        b && b(e, w, d), e === "focusout" && (b = w._wrapperState) && b.controlled && w.type === "number" && ta(w, "number", w.value);
      }
      switch (b = d ? Dn(d) : window, e) {
        case "focusin":
          (pi(b) || b.contentEditable === "true") && (Tn = b, ma = d, xr = null);
          break;
        case "focusout":
          xr = ma = Tn = null;
          break;
        case "mousedown":
          pa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          pa = !1, wi(v, n, m);
          break;
        case "selectionchange":
          if (Um) break;
        case "keydown":
        case "keyup":
          wi(v, n, m);
      }
      var j;
      if (co) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else In ? Zc(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Jc && n.locale !== "ko" && (In || N !== "onCompositionStart" ? N === "onCompositionEnd" && In && (j = Xc()) : (Yt = m, ao = "value" in Yt ? Yt.value : Yt.textContent, In = !0)), b = Ol(d, N), 0 < b.length && (N = new di(N, e, null, n, m), v.push({ event: N, listeners: b }), j ? N.data = j : (j = ed(n), j !== null && (N.data = j)))), (j = Im ? Tm(e, n) : Lm(e, n)) && (d = Ol(d, "onBeforeInput"), 0 < d.length && (m = new di("onBeforeInput", "beforeinput", null, n, m), v.push({ event: m, listeners: d }), m.data = j));
    }
    fd(v, t);
  });
}
function Pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, a = s.stateNode;
    s.tag === 5 && a !== null && (s = a, a = Nr(e, n), a != null && r.unshift(Pr(e, a, s)), a = Nr(e, t), a != null && r.push(Pr(e, a, s))), e = e.return;
  }
  return r;
}
function Nn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ki(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, s ? (c = Nr(n, a), c != null && o.unshift(Pr(n, c, i))) : s || (c = Nr(n, a), c != null && o.push(Pr(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Hm = /\r\n?/g, Km = /\u0000|\uFFFD/g;
function Si(e) {
  return (typeof e == "string" ? e : "" + e).replace(Hm, `
`).replace(Km, "");
}
function ol(e, t, n) {
  if (t = Si(t), Si(e) !== t && n) throw Error(F(425));
}
function Al() {
}
var ha = null, ga = null;
function ya(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var va = typeof setTimeout == "function" ? setTimeout : void 0, Gm = typeof clearTimeout == "function" ? clearTimeout : void 0, ji = typeof Promise == "function" ? Promise : void 0, qm = typeof queueMicrotask == "function" ? queueMicrotask : typeof ji < "u" ? function(e) {
  return ji.resolve(null).then(e).catch(Ym);
} : va;
function Ym(e) {
  setTimeout(function() {
    throw e;
  });
}
function Os(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), Ir(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  Ir(t);
}
function tn(e) {
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
function bi(e) {
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
var nr = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + nr, Rr = "__reactProps$" + nr, Ft = "__reactContainer$" + nr, wa = "__reactEvents$" + nr, Xm = "__reactListeners$" + nr, Jm = "__reactHandles$" + nr;
function pn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[Mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = bi(e); e !== null; ) {
        if (n = e[Mt]) return n;
        e = bi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function qr(e) {
  return e = e[Mt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function ss(e) {
  return e[Rr] || null;
}
var xa = [], Pn = -1;
function dn(e) {
  return { current: e };
}
function we(e) {
  0 > Pn || (e.current = xa[Pn], xa[Pn] = null, Pn--);
}
function he(e, t) {
  Pn++, xa[Pn] = e.current, e.current = t;
}
var on = {}, Ve = dn(on), Ze = dn(!1), wn = on;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function et(e) {
  return e = e.childContextTypes, e != null;
}
function Fl() {
  we(Ze), we(Ve);
}
function Ci(e, t, n) {
  if (Ve.current !== on) throw Error(F(168));
  he(Ve, t), he(Ze, n);
}
function pd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(F(108, zf(e) || "Unknown", s));
  return be({}, n, r);
}
function Wl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, wn = Ve.current, he(Ve, e), he(Ze, Ze.current), !0;
}
function Ni(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n ? (e = pd(e, t, wn), r.__reactInternalMemoizedMergedChildContext = e, we(Ze), we(Ve), he(Ve, e)) : we(Ze), he(Ze, n);
}
var Pt = null, as = !1, As = !1;
function hd(e) {
  Pt === null ? Pt = [e] : Pt.push(e);
}
function Zm(e) {
  as = !0, hd(e);
}
function un() {
  if (!As && Pt !== null) {
    As = !0;
    var e = 0, t = ue;
    try {
      var n = Pt;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Pt = null, as = !1;
    } catch (s) {
      throw Pt !== null && (Pt = Pt.slice(e + 1)), Wc(no, un), s;
    } finally {
      ue = t, As = !1;
    }
  }
  return null;
}
var Rn = [], zn = 0, $l = null, Ul = 0, ut = [], ft = 0, xn = null, Rt = 1, zt = "";
function fn(e, t) {
  Rn[zn++] = Ul, Rn[zn++] = $l, $l = e, Ul = t;
}
function gd(e, t, n) {
  ut[ft++] = Rt, ut[ft++] = zt, ut[ft++] = xn, xn = e;
  var r = Rt;
  e = zt;
  var s = 32 - St(r) - 1;
  r &= ~(1 << s), n += 1;
  var a = 32 - St(t) + s;
  if (30 < a) {
    var o = s - s % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, Rt = 1 << 32 - St(t) + s | n << s | r, zt = a + e;
  } else Rt = 1 << a | n << s | r, zt = e;
}
function fo(e) {
  e.return !== null && (fn(e, 1), gd(e, 1, 0));
}
function mo(e) {
  for (; e === $l; ) $l = Rn[--zn], Rn[zn] = null, Ul = Rn[--zn], Rn[zn] = null;
  for (; e === xn; ) xn = ut[--ft], ut[ft] = null, zt = ut[--ft], ut[ft] = null, Rt = ut[--ft], ut[ft] = null;
}
var at = null, st = null, _e = !1, _t = null;
function yd(e, t) {
  var n = mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ei(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, at = e, st = tn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, at = e, st = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = xn !== null ? { id: Rt, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, at = e, st = null, !0) : !1;
    default:
      return !1;
  }
}
function _a(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ka(e) {
  if (_e) {
    var t = st;
    if (t) {
      var n = t;
      if (!Ei(e, t)) {
        if (_a(e)) throw Error(F(418));
        t = tn(n.nextSibling);
        var r = at;
        t && Ei(e, t) ? yd(r, n) : (e.flags = e.flags & -4097 | 2, _e = !1, at = e);
      }
    } else {
      if (_a(e)) throw Error(F(418));
      e.flags = e.flags & -4097 | 2, _e = !1, at = e;
    }
  }
}
function Mi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  at = e;
}
function il(e) {
  if (e !== at) return !1;
  if (!_e) return Mi(e), _e = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ya(e.type, e.memoizedProps)), t && (t = st)) {
    if (_a(e)) throw vd(), Error(F(418));
    for (; t; ) yd(e, t), t = tn(t.nextSibling);
  }
  if (Mi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              st = tn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      st = null;
    }
  } else st = at ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function vd() {
  for (var e = st; e; ) e = tn(e.nextSibling);
}
function Gn() {
  st = at = null, _e = !1;
}
function po(e) {
  _t === null ? _t = [e] : _t.push(e);
}
var ep = Qt.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var s = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = s.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function cl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ii(e) {
  var t = e._init;
  return t(e._payload);
}
function wd(e) {
  function t(f, u) {
    if (e) {
      var h = f.deletions;
      h === null ? (f.deletions = [u], f.flags |= 16) : h.push(u);
    }
  }
  function n(f, u) {
    if (!e) return null;
    for (; u !== null; ) t(f, u), u = u.sibling;
    return null;
  }
  function r(f, u) {
    for (f = /* @__PURE__ */ new Map(); u !== null; ) u.key !== null ? f.set(u.key, u) : f.set(u.index, u), u = u.sibling;
    return f;
  }
  function s(f, u) {
    return f = sn(f, u), f.index = 0, f.sibling = null, f;
  }
  function a(f, u, h) {
    return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < u ? (f.flags |= 2, u) : h) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, h, g) {
    return u === null || u.tag !== 6 ? (u = Bs(h, f.mode, g), u.return = f, u) : (u = s(u, h), u.return = f, u);
  }
  function c(f, u, h, g) {
    var k = h.type;
    return k === Mn ? m(f, u, h.props.children, g, h.key) : u !== null && (u.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Bt && Ii(k) === u.type) ? (g = s(u, h.props), g.ref = cr(f, u, h), g.return = f, g) : (g = El(h.type, h.key, h.props, null, f.mode, g), g.ref = cr(f, u, h), g.return = f, g);
  }
  function d(f, u, h, g) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== h.containerInfo || u.stateNode.implementation !== h.implementation ? (u = Hs(h, f.mode, g), u.return = f, u) : (u = s(u, h.children || []), u.return = f, u);
  }
  function m(f, u, h, g, k) {
    return u === null || u.tag !== 7 ? (u = vn(h, f.mode, g, k), u.return = f, u) : (u = s(u, h), u.return = f, u);
  }
  function v(f, u, h) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = Bs("" + u, f.mode, h), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Jr:
          return h = El(u.type, u.key, u.props, null, f.mode, h), h.ref = cr(f, null, u), h.return = f, h;
        case En:
          return u = Hs(u, f.mode, h), u.return = f, u;
        case Bt:
          var g = u._init;
          return v(f, g(u._payload), h);
      }
      if (mr(u) || lr(u)) return u = vn(u, f.mode, h, null), u.return = f, u;
      cl(f, u);
    }
    return null;
  }
  function w(f, u, h, g) {
    var k = u !== null ? u.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return k !== null ? null : i(f, u, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Jr:
          return h.key === k ? c(f, u, h, g) : null;
        case En:
          return h.key === k ? d(f, u, h, g) : null;
        case Bt:
          return k = h._init, w(
            f,
            u,
            k(h._payload),
            g
          );
      }
      if (mr(h) || lr(h)) return k !== null ? null : m(f, u, h, g, null);
      cl(f, h);
    }
    return null;
  }
  function x(f, u, h, g, k) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(h) || null, i(u, f, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Jr:
          return f = f.get(g.key === null ? h : g.key) || null, c(u, f, g, k);
        case En:
          return f = f.get(g.key === null ? h : g.key) || null, d(u, f, g, k);
        case Bt:
          var b = g._init;
          return x(f, u, h, b(g._payload), k);
      }
      if (mr(g) || lr(g)) return f = f.get(h) || null, m(u, f, g, k, null);
      cl(u, g);
    }
    return null;
  }
  function y(f, u, h, g) {
    for (var k = null, b = null, j = u, N = u = 0, O = null; j !== null && N < h.length; N++) {
      j.index > N ? (O = j, j = null) : O = j.sibling;
      var D = w(f, j, h[N], g);
      if (D === null) {
        j === null && (j = O);
        break;
      }
      e && j && D.alternate === null && t(f, j), u = a(D, u, N), b === null ? k = D : b.sibling = D, b = D, j = O;
    }
    if (N === h.length) return n(f, j), _e && fn(f, N), k;
    if (j === null) {
      for (; N < h.length; N++) j = v(f, h[N], g), j !== null && (u = a(j, u, N), b === null ? k = j : b.sibling = j, b = j);
      return _e && fn(f, N), k;
    }
    for (j = r(f, j); N < h.length; N++) O = x(j, f, N, h[N], g), O !== null && (e && O.alternate !== null && j.delete(O.key === null ? N : O.key), u = a(O, u, N), b === null ? k = O : b.sibling = O, b = O);
    return e && j.forEach(function(I) {
      return t(f, I);
    }), _e && fn(f, N), k;
  }
  function _(f, u, h, g) {
    var k = lr(h);
    if (typeof k != "function") throw Error(F(150));
    if (h = k.call(h), h == null) throw Error(F(151));
    for (var b = k = null, j = u, N = u = 0, O = null, D = h.next(); j !== null && !D.done; N++, D = h.next()) {
      j.index > N ? (O = j, j = null) : O = j.sibling;
      var I = w(f, j, D.value, g);
      if (I === null) {
        j === null && (j = O);
        break;
      }
      e && j && I.alternate === null && t(f, j), u = a(I, u, N), b === null ? k = I : b.sibling = I, b = I, j = O;
    }
    if (D.done) return n(
      f,
      j
    ), _e && fn(f, N), k;
    if (j === null) {
      for (; !D.done; N++, D = h.next()) D = v(f, D.value, g), D !== null && (u = a(D, u, N), b === null ? k = D : b.sibling = D, b = D);
      return _e && fn(f, N), k;
    }
    for (j = r(f, j); !D.done; N++, D = h.next()) D = x(j, f, N, D.value, g), D !== null && (e && D.alternate !== null && j.delete(D.key === null ? N : D.key), u = a(D, u, N), b === null ? k = D : b.sibling = D, b = D);
    return e && j.forEach(function(W) {
      return t(f, W);
    }), _e && fn(f, N), k;
  }
  function S(f, u, h, g) {
    if (typeof h == "object" && h !== null && h.type === Mn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Jr:
          e: {
            for (var k = h.key, b = u; b !== null; ) {
              if (b.key === k) {
                if (k = h.type, k === Mn) {
                  if (b.tag === 7) {
                    n(f, b.sibling), u = s(b, h.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (b.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Bt && Ii(k) === b.type) {
                  n(f, b.sibling), u = s(b, h.props), u.ref = cr(f, b, h), u.return = f, f = u;
                  break e;
                }
                n(f, b);
                break;
              } else t(f, b);
              b = b.sibling;
            }
            h.type === Mn ? (u = vn(h.props.children, f.mode, g, h.key), u.return = f, f = u) : (g = El(h.type, h.key, h.props, null, f.mode, g), g.ref = cr(f, u, h), g.return = f, f = g);
          }
          return o(f);
        case En:
          e: {
            for (b = h.key; u !== null; ) {
              if (u.key === b) if (u.tag === 4 && u.stateNode.containerInfo === h.containerInfo && u.stateNode.implementation === h.implementation) {
                n(f, u.sibling), u = s(u, h.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = Hs(h, f.mode, g), u.return = f, f = u;
          }
          return o(f);
        case Bt:
          return b = h._init, S(f, u, b(h._payload), g);
      }
      if (mr(h)) return y(f, u, h, g);
      if (lr(h)) return _(f, u, h, g);
      cl(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, u !== null && u.tag === 6 ? (n(f, u.sibling), u = s(u, h), u.return = f, f = u) : (n(f, u), u = Bs(h, f.mode, g), u.return = f, f = u), o(f)) : n(f, u);
  }
  return S;
}
var qn = wd(!0), xd = wd(!1), Ql = dn(null), Vl = null, On = null, ho = null;
function go() {
  ho = On = Vl = null;
}
function yo(e) {
  var t = Ql.current;
  we(Ql), e._currentValue = t;
}
function Sa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Vn(e, t) {
  Vl = e, ho = On = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Je = !0), e.firstContext = null);
}
function ht(e) {
  var t = e._currentValue;
  if (ho !== e) if (e = { context: e, memoizedValue: t, next: null }, On === null) {
    if (Vl === null) throw Error(F(308));
    On = e, Vl.dependencies = { lanes: 0, firstContext: e };
  } else On = On.next = e;
  return t;
}
var hn = null;
function vo(e) {
  hn === null ? hn = [e] : hn.push(e);
}
function _d(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, vo(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Wt(e, r);
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function wo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function kd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ce & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Wt(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, vo(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Wt(e, n);
}
function kl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ro(e, n);
  }
}
function Ti(e, t) {
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
function Bl(e, t, n, r) {
  var s = e.updateQueue;
  Ht = !1;
  var a = s.firstBaseUpdate, o = s.lastBaseUpdate, i = s.shared.pending;
  if (i !== null) {
    s.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== o && (i === null ? m.firstBaseUpdate = d : i.next = d, m.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = s.baseState;
    o = 0, m = d = c = null, i = a;
    do {
      var w = i.lane, x = i.eventTime;
      if ((r & w) === w) {
        m !== null && (m = m.next = {
          eventTime: x,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var y = e, _ = i;
          switch (w = t, x = n, _.tag) {
            case 1:
              if (y = _.payload, typeof y == "function") {
                v = y.call(x, v, w);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = _.payload, w = typeof y == "function" ? y.call(x, v, w) : y, w == null) break e;
              v = be({}, v, w);
              break e;
            case 2:
              Ht = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = s.effects, w === null ? s.effects = [i] : w.push(i));
      } else x = { eventTime: x, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (d = m = x, c = v) : m = m.next = x, o |= w;
      if (i = i.next, i === null) {
        if (i = s.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
      }
    } while (!0);
    if (m === null && (c = v), s.baseState = c, s.firstBaseUpdate = d, s.lastBaseUpdate = m, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    kn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function Li(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(F(191, s));
      s.call(r);
    }
  }
}
var Yr = {}, Tt = dn(Yr), zr = dn(Yr), Or = dn(Yr);
function gn(e) {
  if (e === Yr) throw Error(F(174));
  return e;
}
function xo(e, t) {
  switch (he(Or, t), he(zr, e), he(Tt, Yr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ra(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ra(t, e);
  }
  we(Tt), he(Tt, t);
}
function Yn() {
  we(Tt), we(zr), we(Or);
}
function Sd(e) {
  gn(Or.current);
  var t = gn(Tt.current), n = ra(t, e.type);
  t !== n && (he(zr, e), he(Tt, n));
}
function _o(e) {
  zr.current === e && (we(Tt), we(zr));
}
var Se = dn(0);
function Hl(e) {
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
var Fs = [];
function ko() {
  for (var e = 0; e < Fs.length; e++) Fs[e]._workInProgressVersionPrimary = null;
  Fs.length = 0;
}
var Sl = Qt.ReactCurrentDispatcher, Ws = Qt.ReactCurrentBatchConfig, _n = 0, je = null, Pe = null, ze = null, Kl = !1, _r = !1, Ar = 0, tp = 0;
function $e() {
  throw Error(F(321));
}
function So(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!bt(e[n], t[n])) return !1;
  return !0;
}
function jo(e, t, n, r, s, a) {
  if (_n = a, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Sl.current = e === null || e.memoizedState === null ? sp : ap, e = n(r, s), _r) {
    a = 0;
    do {
      if (_r = !1, Ar = 0, 25 <= a) throw Error(F(301));
      a += 1, ze = Pe = null, t.updateQueue = null, Sl.current = op, e = n(r, s);
    } while (_r);
  }
  if (Sl.current = Gl, t = Pe !== null && Pe.next !== null, _n = 0, ze = Pe = je = null, Kl = !1, t) throw Error(F(300));
  return e;
}
function bo() {
  var e = Ar !== 0;
  return Ar = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ze === null ? je.memoizedState = ze = e : ze = ze.next = e, ze;
}
function gt() {
  if (Pe === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = ze === null ? je.memoizedState : ze.next;
  if (t !== null) ze = t, Pe = e;
  else {
    if (e === null) throw Error(F(310));
    Pe = e, e = { memoizedState: Pe.memoizedState, baseState: Pe.baseState, baseQueue: Pe.baseQueue, queue: Pe.queue, next: null }, ze === null ? je.memoizedState = ze = e : ze = ze.next = e;
  }
  return ze;
}
function Fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $s(e) {
  var t = gt(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Pe, s = r.baseQueue, a = n.pending;
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
      var m = d.lane;
      if ((_n & m) === m) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, je.lanes |= m, kn |= m;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, bt(r, t.memoizedState) || (Je = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, je.lanes |= a, kn |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Us(e) {
  var t = gt(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = s = s.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== s);
    bt(a, t.memoizedState) || (Je = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function jd() {
}
function bd(e, t) {
  var n = je, r = gt(), s = t(), a = !bt(r.memoizedState, s);
  if (a && (r.memoizedState = s, Je = !0), r = r.queue, Co(Ed.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || ze !== null && ze.memoizedState.tag & 1) {
    if (n.flags |= 2048, Wr(9, Nd.bind(null, n, r, s, t), void 0, null), Oe === null) throw Error(F(349));
    _n & 30 || Cd(n, t, s);
  }
  return s;
}
function Cd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Nd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Md(t) && Id(e);
}
function Ed(e, t, n) {
  return n(function() {
    Md(t) && Id(e);
  });
}
function Md(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function Id(e) {
  var t = Wt(e, 1);
  t !== null && jt(t, e, 1, -1);
}
function Di(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = lp.bind(null, je, e), [t.memoizedState, e];
}
function Wr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Td() {
  return gt().memoizedState;
}
function jl(e, t, n, r) {
  var s = Et();
  je.flags |= e, s.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r);
}
function os(e, t, n, r) {
  var s = gt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Pe !== null) {
    var o = Pe.memoizedState;
    if (a = o.destroy, r !== null && So(r, o.deps)) {
      s.memoizedState = Wr(t, n, a, r);
      return;
    }
  }
  je.flags |= e, s.memoizedState = Wr(1 | t, n, a, r);
}
function Pi(e, t) {
  return jl(8390656, 8, e, t);
}
function Co(e, t) {
  return os(2048, 8, e, t);
}
function Ld(e, t) {
  return os(4, 2, e, t);
}
function Dd(e, t) {
  return os(4, 4, e, t);
}
function Pd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Rd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, os(4, 4, Pd.bind(null, t, e), n);
}
function No() {
}
function zd(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && So(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Od(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && So(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ad(e, t, n) {
  return _n & 21 ? (bt(n, t) || (n = Qc(), je.lanes |= n, kn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Je = !0), e.memoizedState = n);
}
function np(e, t) {
  var n = ue;
  ue = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ws.transition;
  Ws.transition = {};
  try {
    e(!1), t();
  } finally {
    ue = n, Ws.transition = r;
  }
}
function Fd() {
  return gt().memoizedState;
}
function rp(e, t, n) {
  var r = ln(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wd(e)) $d(t, n);
  else if (n = _d(e, t, n, r), n !== null) {
    var s = Ke();
    jt(n, e, r, s), Ud(n, t, r);
  }
}
function lp(e, t, n) {
  var r = ln(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wd(e)) $d(t, s);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (s.hasEagerState = !0, s.eagerState = i, bt(i, o)) {
        var c = t.interleaved;
        c === null ? (s.next = s, vo(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = _d(e, t, s, r), n !== null && (s = Ke(), jt(n, e, r, s), Ud(n, t, r));
  }
}
function Wd(e) {
  var t = e.alternate;
  return e === je || t !== null && t === je;
}
function $d(e, t) {
  _r = Kl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ud(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ro(e, n);
  }
}
var Gl = { readContext: ht, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, sp = { readContext: ht, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ht, useEffect: Pi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, jl(
    4194308,
    4,
    Pd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return jl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return jl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = rp.bind(null, je, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: Di, useDebugValue: No, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = Di(!1), t = e[0];
  return e = np.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = je, s = Et();
  if (_e) {
    if (n === void 0) throw Error(F(407));
    n = n();
  } else {
    if (n = t(), Oe === null) throw Error(F(349));
    _n & 30 || Cd(r, t, n);
  }
  s.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return s.queue = a, Pi(Ed.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Wr(9, Nd.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = Oe.identifierPrefix;
  if (_e) {
    var n = zt, r = Rt;
    n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = tp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ap = {
  readContext: ht,
  useCallback: zd,
  useContext: ht,
  useEffect: Co,
  useImperativeHandle: Rd,
  useInsertionEffect: Ld,
  useLayoutEffect: Dd,
  useMemo: Od,
  useReducer: $s,
  useRef: Td,
  useState: function() {
    return $s(Fr);
  },
  useDebugValue: No,
  useDeferredValue: function(e) {
    var t = gt();
    return Ad(t, Pe.memoizedState, e);
  },
  useTransition: function() {
    var e = $s(Fr)[0], t = gt().memoizedState;
    return [e, t];
  },
  useMutableSource: jd,
  useSyncExternalStore: bd,
  useId: Fd,
  unstable_isNewReconciler: !1
}, op = { readContext: ht, useCallback: zd, useContext: ht, useEffect: Co, useImperativeHandle: Rd, useInsertionEffect: Ld, useLayoutEffect: Dd, useMemo: Od, useReducer: Us, useRef: Td, useState: function() {
  return Us(Fr);
}, useDebugValue: No, useDeferredValue: function(e) {
  var t = gt();
  return Pe === null ? t.memoizedState = e : Ad(t, Pe.memoizedState, e);
}, useTransition: function() {
  var e = Us(Fr)[0], t = gt().memoizedState;
  return [e, t];
}, useMutableSource: jd, useSyncExternalStore: bd, useId: Fd, unstable_isNewReconciler: !1 };
function wt(e, t) {
  if (e && e.defaultProps) {
    t = be({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ja(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : be({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var is = { isMounted: function(e) {
  return (e = e._reactInternals) ? Cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), s = ln(e), a = Ot(r, s);
  a.payload = t, n != null && (a.callback = n), t = nn(e, a, s), t !== null && (jt(t, e, s, r), kl(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ke(), s = ln(e), a = Ot(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = nn(e, a, s), t !== null && (jt(t, e, s, r), kl(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ke(), r = ln(e), s = Ot(n, r);
  s.tag = 2, t != null && (s.callback = t), t = nn(e, s, r), t !== null && (jt(t, e, r, n), kl(t, e, r));
} };
function Ri(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(s, a) : !0;
}
function Qd(e, t, n) {
  var r = !1, s = on, a = t.contextType;
  return typeof a == "object" && a !== null ? a = ht(a) : (s = et(t) ? wn : Ve.current, r = t.contextTypes, a = (r = r != null) ? Kn(e, s) : on), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = is, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function zi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && is.enqueueReplaceState(t, t.state, null);
}
function ba(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, wo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = ht(a) : (a = et(t) ? wn : Ve.current, s.context = Kn(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ja(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && is.enqueueReplaceState(s, s.state, null), Bl(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Rf(r), r = r.return;
    while (r);
    var s = n;
  } catch (a) {
    s = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Qs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ca(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ip = typeof WeakMap == "function" ? WeakMap : Map;
function Vd(e, t, n) {
  n = Ot(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Yl || (Yl = !0, za = r), Ca(e, t);
  }, n;
}
function Bd(e, t, n) {
  n = Ot(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      Ca(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Ca(e, t), typeof r != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Oi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ip();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = kp.bind(null, e, t, n), t.then(e, e));
}
function Ai(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fi(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ot(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e);
}
var cp = Qt.ReactCurrentOwner, Je = !1;
function He(e, t, n, r) {
  t.child = e === null ? xd(t, null, n, r) : qn(t, e.child, n, r);
}
function Wi(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return Vn(t, s), r = jo(e, t, n, r, a, s), n = bo(), e !== null && !Je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, $t(e, t, s)) : (_e && n && fo(t), t.flags |= 1, He(e, t, r, s), t.child);
}
function $i(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Ro(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Hd(e, t, a, r, s)) : (e = El(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & s)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Lr, n(o, r) && e.ref === t.ref) return $t(e, t, s);
  }
  return t.flags |= 1, e = sn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Hd(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Lr(a, r) && e.ref === t.ref) if (Je = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (Je = !0);
    else return t.lanes = e.lanes, $t(e, t, s);
  }
  return Na(e, t, n, r, s);
}
function Kd(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, he(Fn, lt), lt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, he(Fn, lt), lt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, he(Fn, lt), lt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, he(Fn, lt), lt |= r;
  return He(e, t, s, n), t.child;
}
function Gd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Na(e, t, n, r, s) {
  var a = et(n) ? wn : Ve.current;
  return a = Kn(t, a), Vn(t, s), n = jo(e, t, n, r, a, s), r = bo(), e !== null && !Je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, $t(e, t, s)) : (_e && r && fo(t), t.flags |= 1, He(e, t, n, s), t.child);
}
function Ui(e, t, n, r, s) {
  if (et(n)) {
    var a = !0;
    Wl(t);
  } else a = !1;
  if (Vn(t, s), t.stateNode === null) bl(e, t), Qd(t, n, r), ba(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = ht(d) : (d = et(n) ? wn : Ve.current, d = Kn(t, d));
    var m = n.getDerivedStateFromProps, v = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && zi(t, o, r, d), Ht = !1;
    var w = t.memoizedState;
    o.state = w, Bl(t, r, o, s), c = t.memoizedState, i !== r || w !== c || Ze.current || Ht ? (typeof m == "function" && (ja(t, n, m, r), c = t.memoizedState), (i = Ht || Ri(t, n, i, r, w, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, kd(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : wt(t.type, i), o.props = d, v = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = ht(c) : (c = et(n) ? wn : Ve.current, c = Kn(t, c));
    var x = n.getDerivedStateFromProps;
    (m = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || w !== c) && zi(t, o, r, c), Ht = !1, w = t.memoizedState, o.state = w, Bl(t, r, o, s);
    var y = t.memoizedState;
    i !== v || w !== y || Ze.current || Ht ? (typeof x == "function" && (ja(t, n, x, r), y = t.memoizedState), (d = Ht || Ri(t, n, d, r, w, y, c) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ea(e, t, n, r, a, s);
}
function Ea(e, t, n, r, s, a) {
  Gd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && Ni(t, n, !1), $t(e, t, a);
  r = t.stateNode, cp.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = qn(t, e.child, null, a), t.child = qn(t, null, i, a)) : He(e, t, i, a), t.memoizedState = r.state, s && Ni(t, n, !0), t.child;
}
function qd(e) {
  var t = e.stateNode;
  t.pendingContext ? Ci(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ci(e, t.context, !1), xo(e, t.containerInfo);
}
function Qi(e, t, n, r, s) {
  return Gn(), po(s), t.flags |= 256, He(e, t, n, r), t.child;
}
var Ma = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ia(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yd(e, t, n) {
  var r = t.pendingProps, s = Se.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), he(Se, s & 1), e === null)
    return ka(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = us(o, r, 0, null), e = vn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Ia(n), t.memoizedState = Ma, e) : Eo(t, o));
  if (s = e.memoizedState, s !== null && (i = s.dehydrated, i !== null)) return dp(e, t, o, r, i, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, i = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = sn(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), i !== null ? a = sn(i, a) : (a = vn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Ia(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ma, r;
  }
  return a = e.child, e = a.sibling, r = sn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Eo(e, t) {
  return t = us({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function dl(e, t, n, r) {
  return r !== null && po(r), qn(t, e.child, null, n), e = Eo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dp(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Qs(Error(F(422))), dl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = us({ mode: "visible", children: r.children }, s, 0, null), a = vn(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && qn(t, e.child, null, o), t.child.memoizedState = Ia(o), t.memoizedState = Ma, a);
  if (!(t.mode & 1)) return dl(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(F(419)), r = Qs(a, r, void 0), dl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Je || i) {
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
      s = s & (r.suspendedLanes | o) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, Wt(e, s), jt(r, e, s, -1));
    }
    return Po(), r = Qs(Error(F(421))), dl(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Sp.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, st = tn(s.nextSibling), at = t, _e = !0, _t = null, e !== null && (ut[ft++] = Rt, ut[ft++] = zt, ut[ft++] = xn, Rt = e.id, zt = e.overflow, xn = t), t = Eo(t, r.children), t.flags |= 4096, t);
}
function Vi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sa(e.return, t, n);
}
function Vs(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function Xd(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (He(e, t, r.children, n), r = Se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Vi(e, n, t);
      else if (e.tag === 19) Vi(e, n, t);
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
  if (he(Se, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && Hl(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Vs(t, !1, s, n, a);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && Hl(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      Vs(t, !0, n, null, a);
      break;
    case "together":
      Vs(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function bl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), kn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = sn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function up(e, t, n) {
  switch (t.tag) {
    case 3:
      qd(t), Gn();
      break;
    case 5:
      Sd(t);
      break;
    case 1:
      et(t.type) && Wl(t);
      break;
    case 4:
      xo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      he(Ql, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (he(Se, Se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Yd(e, t, n) : (he(Se, Se.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      he(Se, Se.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Xd(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), he(Se, Se.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Kd(e, t, n);
  }
  return $t(e, t, n);
}
var Jd, Ta, Zd, eu;
Jd = function(e, t) {
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
Ta = function() {
};
Zd = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, gn(Tt.current);
    var a = null;
    switch (n) {
      case "input":
        s = Zs(e, s), r = Zs(e, r), a = [];
        break;
      case "select":
        s = be({}, s, { value: void 0 }), r = be({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = na(e, s), r = na(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Al);
    }
    la(n, r);
    var o;
    n = null;
    for (d in s) if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && s[d] != null) if (d === "style") {
      var i = s[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (br.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = s != null ? s[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (br.hasOwnProperty(d) ? (c != null && d === "onScroll" && ye("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
eu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
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
function Ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function fp(e, t, n) {
  var r = t.pendingProps;
  switch (mo(t), t.tag) {
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
      return et(t.type) && Fl(), Ue(t), null;
    case 3:
      return r = t.stateNode, Yn(), we(Ze), we(Ve), ko(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (il(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, _t !== null && (Fa(_t), _t = null))), Ta(e, t), Ue(t), null;
    case 5:
      _o(t);
      var s = gn(Or.current);
      if (n = t.type, e !== null && t.stateNode != null) Zd(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return Ue(t), null;
        }
        if (e = gn(Tt.current), il(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Mt] = t, r[Rr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < hr.length; s++) ye(hr[s], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye(
                "error",
                r
              ), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              Zo(r, a), ye("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ye("invalid", r);
              break;
            case "textarea":
              ti(r, a), ye("invalid", r);
          }
          la(n, a), s = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && ol(r.textContent, i, e), s = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && ol(
              r.textContent,
              i,
              e
            ), s = ["children", "" + i]) : br.hasOwnProperty(o) && i != null && o === "onScroll" && ye("scroll", r);
          }
          switch (n) {
            case "input":
              Zr(r), ei(r, a, !0);
              break;
            case "textarea":
              Zr(r), ni(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Al);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ec(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Mt] = t, e[Rr] = r, Jd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = sa(n, r), n) {
              case "dialog":
                ye("cancel", e), ye("close", e), s = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", e), s = r;
                break;
              case "video":
              case "audio":
                for (s = 0; s < hr.length; s++) ye(hr[s], e);
                s = r;
                break;
              case "source":
                ye("error", e), s = r;
                break;
              case "img":
              case "image":
              case "link":
                ye(
                  "error",
                  e
                ), ye("load", e), s = r;
                break;
              case "details":
                ye("toggle", e), s = r;
                break;
              case "input":
                Zo(e, r), s = Zs(e, r), ye("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = be({}, r, { value: void 0 }), ye("invalid", e);
                break;
              case "textarea":
                ti(e, r), s = na(e, r), ye("invalid", e);
                break;
              default:
                s = r;
            }
            la(n, s), i = s;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? Tc(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Mc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Cr(e, c) : typeof c == "number" && Cr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (br.hasOwnProperty(a) ? c != null && a === "onScroll" && ye("scroll", e) : c != null && Xa(e, a, c, o));
            }
            switch (n) {
              case "input":
                Zr(e), ei(e, r, !1);
                break;
              case "textarea":
                Zr(e), ni(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Wn(e, !!r.multiple, a, !1) : r.defaultValue != null && Wn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Al);
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
      if (e && t.stateNode != null) eu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (n = gn(Or.current), gn(Tt.current), il(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (a = r.nodeValue !== n) && (e = at, e !== null)) switch (e.tag) {
            case 3:
              ol(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ol(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r;
      }
      return Ue(t), null;
    case 13:
      if (we(Se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (_e && st !== null && t.mode & 1 && !(t.flags & 128)) vd(), Gn(), t.flags |= 98560, a = !1;
        else if (a = il(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(F(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(F(317));
            a[Mt] = t;
          } else Gn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ue(t), a = !1;
        } else _t !== null && (Fa(_t), _t = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Se.current & 1 ? Re === 0 && (Re = 3) : Po())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
    case 4:
      return Yn(), Ta(e, t), e === null && Dr(t.stateNode.containerInfo), Ue(t), null;
    case 10:
      return yo(t.type._context), Ue(t), null;
    case 17:
      return et(t.type) && Fl(), Ue(t), null;
    case 19:
      if (we(Se), a = t.memoizedState, a === null) return Ue(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) dr(a, !1);
      else {
        if (Re !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Hl(e), o !== null) {
            for (t.flags |= 128, dr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return he(Se, Se.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Te() > Jn && (t.flags |= 128, r = !0, dr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Hl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !_e) return Ue(t), null;
        } else 2 * Te() - a.renderingStartTime > Jn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Te(), t.sibling = null, n = Se.current, he(Se, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
    case 22:
    case 23:
      return Do(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? lt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function mp(e, t) {
  switch (mo(t), t.tag) {
    case 1:
      return et(t.type) && Fl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Yn(), we(Ze), we(Ve), ko(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return _o(t), null;
    case 13:
      if (we(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(F(340));
        Gn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return we(Se), null;
    case 4:
      return Yn(), null;
    case 10:
      return yo(t.type._context), null;
    case 22:
    case 23:
      return Do(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ul = !1, Qe = !1, pp = typeof WeakSet == "function" ? WeakSet : Set, K = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ie(e, t, r);
  }
  else n.current = null;
}
function La(e, t, n) {
  try {
    n();
  } catch (r) {
    Ie(e, t, r);
  }
}
var Bi = !1;
function hp(e, t) {
  if (ha = Rl, e = sd(), uo(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, m = 0, v = e, w = null;
        t: for (; ; ) {
          for (var x; v !== n || s !== 0 && v.nodeType !== 3 || (i = o + s), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (x = v.firstChild) !== null; )
            w = v, v = x;
          for (; ; ) {
            if (v === e) break t;
            if (w === n && ++d === s && (i = o), w === a && ++m === r && (c = o), (x = v.nextSibling) !== null) break;
            v = w, w = v.parentNode;
          }
          v = x;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ga = { focusedElem: e, selectionRange: n }, Rl = !1, K = t; K !== null; ) if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
  else for (; K !== null; ) {
    t = K;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var _ = y.memoizedProps, S = y.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : wt(t.type, _), S);
            f.__reactInternalSnapshotBeforeUpdate = u;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(F(163));
      }
    } catch (g) {
      Ie(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, K = e;
      break;
    }
    K = t.return;
  }
  return y = Bi, Bi = !1, y;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        s.destroy = void 0, a !== void 0 && La(t, n, a);
      }
      s = s.next;
    } while (s !== r);
  }
}
function cs(e, t) {
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
function Da(e) {
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
function tu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, tu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[Rr], delete t[wa], delete t[Xm], delete t[Jm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function nu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || nu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Al));
  else if (r !== 4 && (e = e.child, e !== null)) for (Pa(e, t, n), e = e.sibling; e !== null; ) Pa(e, t, n), e = e.sibling;
}
function Ra(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ra(e, t, n), e = e.sibling; e !== null; ) Ra(e, t, n), e = e.sibling;
}
var Ae = null, xt = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) ru(e, t, n), n = n.sibling;
}
function ru(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function") try {
    It.onCommitFiberUnmount(ts, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Qe || An(n, t);
    case 6:
      var r = Ae, s = xt;
      Ae = null, Vt(e, t, n), Ae = r, xt = s, Ae !== null && (xt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null && (xt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? Os(e.parentNode, n) : e.nodeType === 1 && Os(e, n), Ir(e)) : Os(Ae, n.stateNode));
      break;
    case 4:
      r = Ae, s = xt, Ae = n.stateNode.containerInfo, xt = !0, Vt(e, t, n), Ae = r, xt = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var a = s, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && La(n, t, o), s = s.next;
        } while (s !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (!Qe && (An(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ie(n, t, i);
      }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Qe = (r = Qe) || n.memoizedState !== null, Vt(e, t, n), Qe = r) : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function Ki(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pp()), t.forEach(function(r) {
      var s = jp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Ae = i.stateNode, xt = !1;
            break e;
          case 3:
            Ae = i.stateNode.containerInfo, xt = !0;
            break e;
          case 4:
            Ae = i.stateNode.containerInfo, xt = !0;
            break e;
        }
        i = i.return;
      }
      if (Ae === null) throw Error(F(160));
      ru(a, o, s), Ae = null, xt = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (d) {
      Ie(s, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) lu(t, e), t = t.sibling;
}
function lu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (yt(t, e), Nt(e), r & 4) {
        try {
          kr(3, e, e.return), cs(3, e);
        } catch (_) {
          Ie(e, e.return, _);
        }
        try {
          kr(5, e, e.return);
        } catch (_) {
          Ie(e, e.return, _);
        }
      }
      break;
    case 1:
      yt(t, e), Nt(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (yt(t, e), Nt(e), r & 512 && n !== null && An(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Cr(s, "");
        } catch (_) {
          Ie(e, e.return, _);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && Cc(s, a), sa(i, o);
          var d = sa(i, a);
          for (o = 0; o < c.length; o += 2) {
            var m = c[o], v = c[o + 1];
            m === "style" ? Tc(s, v) : m === "dangerouslySetInnerHTML" ? Mc(s, v) : m === "children" ? Cr(s, v) : Xa(s, m, v, d);
          }
          switch (i) {
            case "input":
              ea(s, a);
              break;
            case "textarea":
              Nc(s, a);
              break;
            case "select":
              var w = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Wn(s, !!a.multiple, x, !1) : w !== !!a.multiple && (a.defaultValue != null ? Wn(
                s,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Wn(s, !!a.multiple, a.multiple ? [] : "", !1));
          }
          s[Rr] = a;
        } catch (_) {
          Ie(e, e.return, _);
        }
      }
      break;
    case 6:
      if (yt(t, e), Nt(e), r & 4) {
        if (e.stateNode === null) throw Error(F(162));
        s = e.stateNode, a = e.memoizedProps;
        try {
          s.nodeValue = a;
        } catch (_) {
          Ie(e, e.return, _);
        }
      }
      break;
    case 3:
      if (yt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ir(t.containerInfo);
      } catch (_) {
        Ie(e, e.return, _);
      }
      break;
    case 4:
      yt(t, e), Nt(e);
      break;
    case 13:
      yt(t, e), Nt(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (To = Te())), r & 4 && Ki(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Qe = (d = Qe) || m, yt(t, e), Qe = d) : yt(t, e), Nt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (K = e, m = e.child; m !== null; ) {
          for (v = K = m; K !== null; ) {
            switch (w = K, x = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                kr(4, w, w.return);
                break;
              case 1:
                An(w, w.return);
                var y = w.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (_) {
                    Ie(r, n, _);
                  }
                }
                break;
              case 5:
                An(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  qi(v);
                  continue;
                }
            }
            x !== null ? (x.return = w, K = x) : qi(v);
          }
          m = m.sibling;
        }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                s = v.stateNode, d ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Ic("display", o));
              } catch (_) {
                Ie(e, e.return, _);
              }
            }
          } else if (v.tag === 6) {
            if (m === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (_) {
              Ie(e, e.return, _);
            }
          } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
            v.child.return = v, v = v.child;
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            m === v && (m = null), v = v.return;
          }
          m === v && (m = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      yt(t, e), Nt(e), r & 4 && Ki(e);
      break;
    case 21:
      break;
    default:
      yt(
        t,
        e
      ), Nt(e);
  }
}
function Nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Cr(s, ""), r.flags &= -33);
          var a = Hi(e);
          Ra(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Hi(e);
          Pa(e, i, o);
          break;
        default:
          throw Error(F(161));
      }
    } catch (c) {
      Ie(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gp(e, t, n) {
  K = e, su(e);
}
function su(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var s = K, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || ul;
      if (!o) {
        var i = s.alternate, c = i !== null && i.memoizedState !== null || Qe;
        i = ul;
        var d = Qe;
        if (ul = o, (Qe = c) && !d) for (K = s; K !== null; ) o = K, c = o.child, o.tag === 22 && o.memoizedState !== null ? Yi(s) : c !== null ? (c.return = o, K = c) : Yi(s);
        for (; a !== null; ) K = a, su(a), a = a.sibling;
        K = s, ul = i, Qe = d;
      }
      Gi(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, K = a) : Gi(e);
  }
}
function Gi(e) {
  for (; K !== null; ) {
    var t = K;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Qe || cs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Qe) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Li(t, a, r);
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
              Li(t, o, n);
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
                var m = d.memoizedState;
                if (m !== null) {
                  var v = m.dehydrated;
                  v !== null && Ir(v);
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
            throw Error(F(163));
        }
        Qe || t.flags & 512 && Da(t);
      } catch (w) {
        Ie(t, t.return, w);
      }
    }
    if (t === e) {
      K = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, K = n;
      break;
    }
    K = t.return;
  }
}
function qi(e) {
  for (; K !== null; ) {
    var t = K;
    if (t === e) {
      K = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, K = n;
      break;
    }
    K = t.return;
  }
}
function Yi(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cs(4, t);
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
            Da(t);
          } catch (c) {
            Ie(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Da(t);
          } catch (c) {
            Ie(t, o, c);
          }
      }
    } catch (c) {
      Ie(t, t.return, c);
    }
    if (t === e) {
      K = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, K = i;
      break;
    }
    K = t.return;
  }
}
var yp = Math.ceil, ql = Qt.ReactCurrentDispatcher, Mo = Qt.ReactCurrentOwner, pt = Qt.ReactCurrentBatchConfig, ce = 0, Oe = null, De = null, Fe = 0, lt = 0, Fn = dn(0), Re = 0, $r = null, kn = 0, ds = 0, Io = 0, Sr = null, Xe = null, To = 0, Jn = 1 / 0, Dt = null, Yl = !1, za = null, rn = null, fl = !1, Xt = null, Xl = 0, jr = 0, Oa = null, Cl = -1, Nl = 0;
function Ke() {
  return ce & 6 ? Te() : Cl !== -1 ? Cl : Cl = Te();
}
function ln(e) {
  return e.mode & 1 ? ce & 2 && Fe !== 0 ? Fe & -Fe : ep.transition !== null ? (Nl === 0 && (Nl = Qc()), Nl) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yc(e.type)), e) : 1;
}
function jt(e, t, n, r) {
  if (50 < jr) throw jr = 0, Oa = null, Error(F(185));
  Kr(e, n, r), (!(ce & 2) || e !== Oe) && (e === Oe && (!(ce & 2) && (ds |= n), Re === 4 && Gt(e, Fe)), tt(e, r), n === 1 && ce === 0 && !(t.mode & 1) && (Jn = Te() + 500, as && un()));
}
function tt(e, t) {
  var n = e.callbackNode;
  em(e, t);
  var r = Pl(e, e === Oe ? Fe : 0);
  if (r === 0) n !== null && si(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && si(n), t === 1) e.tag === 0 ? Zm(Xi.bind(null, e)) : hd(Xi.bind(null, e)), qm(function() {
      !(ce & 6) && un();
    }), n = null;
    else {
      switch (Vc(r)) {
        case 1:
          n = no;
          break;
        case 4:
          n = $c;
          break;
        case 16:
          n = Dl;
          break;
        case 536870912:
          n = Uc;
          break;
        default:
          n = Dl;
      }
      n = mu(n, au.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function au(e, t) {
  if (Cl = -1, Nl = 0, ce & 6) throw Error(F(327));
  var n = e.callbackNode;
  if (Bn() && e.callbackNode !== n) return null;
  var r = Pl(e, e === Oe ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Jl(e, r);
  else {
    t = r;
    var s = ce;
    ce |= 2;
    var a = iu();
    (Oe !== e || Fe !== t) && (Dt = null, Jn = Te() + 500, yn(e, t));
    do
      try {
        xp();
        break;
      } catch (i) {
        ou(e, i);
      }
    while (!0);
    go(), ql.current = a, ce = s, De !== null ? t = 0 : (Oe = null, Fe = 0, t = Re);
  }
  if (t !== 0) {
    if (t === 2 && (s = da(e), s !== 0 && (r = s, t = Aa(e, s))), t === 1) throw n = $r, yn(e, 0), Gt(e, r), tt(e, Te()), n;
    if (t === 6) Gt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !vp(s) && (t = Jl(e, r), t === 2 && (a = da(e), a !== 0 && (r = a, t = Aa(e, a))), t === 1)) throw n = $r, yn(e, 0), Gt(e, r), tt(e, Te()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          mn(e, Xe, Dt);
          break;
        case 3:
          if (Gt(e, r), (r & 130023424) === r && (t = To + 500 - Te(), 10 < t)) {
            if (Pl(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              Ke(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = va(mn.bind(null, e, Xe, Dt), t);
            break;
          }
          mn(e, Xe, Dt);
          break;
        case 4:
          if (Gt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - St(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = Te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = va(mn.bind(null, e, Xe, Dt), r);
            break;
          }
          mn(e, Xe, Dt);
          break;
        case 5:
          mn(e, Xe, Dt);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return tt(e, Te()), e.callbackNode === n ? au.bind(null, e) : null;
}
function Aa(e, t) {
  var n = Sr;
  return e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256), e = Jl(e, t), e !== 2 && (t = Xe, Xe = n, t !== null && Fa(t)), e;
}
function Fa(e) {
  Xe === null ? Xe = e : Xe.push.apply(Xe, e);
}
function vp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], a = s.getSnapshot;
        s = s.value;
        try {
          if (!bt(a(), s)) return !1;
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
function Gt(e, t) {
  for (t &= ~Io, t &= ~ds, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - St(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Xi(e) {
  if (ce & 6) throw Error(F(327));
  Bn();
  var t = Pl(e, 0);
  if (!(t & 1)) return tt(e, Te()), null;
  var n = Jl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = da(e);
    r !== 0 && (t = r, n = Aa(e, r));
  }
  if (n === 1) throw n = $r, yn(e, 0), Gt(e, t), tt(e, Te()), n;
  if (n === 6) throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, mn(e, Xe, Dt), tt(e, Te()), null;
}
function Lo(e, t) {
  var n = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    ce = n, ce === 0 && (Jn = Te() + 500, as && un());
  }
}
function Sn(e) {
  Xt !== null && Xt.tag === 0 && !(ce & 6) && Bn();
  var t = ce;
  ce |= 1;
  var n = pt.transition, r = ue;
  try {
    if (pt.transition = null, ue = 1, e) return e();
  } finally {
    ue = r, pt.transition = n, ce = t, !(ce & 6) && un();
  }
}
function Do() {
  lt = Fn.current, we(Fn);
}
function yn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Gm(n)), De !== null) for (n = De.return; n !== null; ) {
    var r = n;
    switch (mo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Fl();
        break;
      case 3:
        Yn(), we(Ze), we(Ve), ko();
        break;
      case 5:
        _o(r);
        break;
      case 4:
        Yn();
        break;
      case 13:
        we(Se);
        break;
      case 19:
        we(Se);
        break;
      case 10:
        yo(r.type._context);
        break;
      case 22:
      case 23:
        Do();
    }
    n = n.return;
  }
  if (Oe = e, De = e = sn(e.current, null), Fe = lt = t, Re = 0, $r = null, Io = ds = kn = 0, Xe = Sr = null, hn !== null) {
    for (t = 0; t < hn.length; t++) if (n = hn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = s, r.next = o;
      }
      n.pending = r;
    }
    hn = null;
  }
  return e;
}
function ou(e, t) {
  do {
    var n = De;
    try {
      if (go(), Sl.current = Gl, Kl) {
        for (var r = je.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        Kl = !1;
      }
      if (_n = 0, ze = Pe = je = null, _r = !1, Ar = 0, Mo.current = null, n === null || n.return === null) {
        Re = 1, $r = t, De = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Fe, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, m = i, v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var w = m.alternate;
            w ? (m.updateQueue = w.updateQueue, m.memoizedState = w.memoizedState, m.lanes = w.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var x = Ai(o);
          if (x !== null) {
            x.flags &= -257, Fi(x, o, i, a, t), x.mode & 1 && Oi(a, d, t), t = x, c = d;
            var y = t.updateQueue;
            if (y === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(c), t.updateQueue = _;
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Oi(a, d, t), Po();
              break e;
            }
            c = Error(F(426));
          }
        } else if (_e && i.mode & 1) {
          var S = Ai(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Fi(S, o, i, a, t), po(Xn(c, i));
            break e;
          }
        }
        a = c = Xn(c, i), Re !== 4 && (Re = 2), Sr === null ? Sr = [a] : Sr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Vd(a, c, t);
              Ti(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, h = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (rn === null || !rn.has(h)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Bd(a, i, t);
                Ti(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      du(n);
    } catch (k) {
      t = k, De === n && n !== null && (De = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function iu() {
  var e = ql.current;
  return ql.current = Gl, e === null ? Gl : e;
}
function Po() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4), Oe === null || !(kn & 268435455) && !(ds & 268435455) || Gt(Oe, Fe);
}
function Jl(e, t) {
  var n = ce;
  ce |= 2;
  var r = iu();
  (Oe !== e || Fe !== t) && (Dt = null, yn(e, t));
  do
    try {
      wp();
      break;
    } catch (s) {
      ou(e, s);
    }
  while (!0);
  if (go(), ce = n, ql.current = r, De !== null) throw Error(F(261));
  return Oe = null, Fe = 0, Re;
}
function wp() {
  for (; De !== null; ) cu(De);
}
function xp() {
  for (; De !== null && !Bf(); ) cu(De);
}
function cu(e) {
  var t = fu(e.alternate, e, lt);
  e.memoizedProps = e.pendingProps, t === null ? du(e) : De = t, Mo.current = null;
}
function du(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = mp(n, t), n !== null) {
        n.flags &= 32767, De = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Re = 6, De = null;
        return;
      }
    } else if (n = fp(n, t, lt), n !== null) {
      De = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      De = t;
      return;
    }
    De = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function mn(e, t, n) {
  var r = ue, s = pt.transition;
  try {
    pt.transition = null, ue = 1, _p(e, t, n, r);
  } finally {
    pt.transition = s, ue = r;
  }
  return null;
}
function _p(e, t, n, r) {
  do
    Bn();
  while (Xt !== null);
  if (ce & 6) throw Error(F(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(F(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (tm(e, a), e === Oe && (De = Oe = null, Fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fl || (fl = !0, mu(Dl, function() {
    return Bn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = pt.transition, pt.transition = null;
    var o = ue;
    ue = 1;
    var i = ce;
    ce |= 4, Mo.current = null, hp(e, n), lu(n, e), $m(ga), Rl = !!ha, ga = ha = null, e.current = n, gp(n), Hf(), ce = i, ue = o, pt.transition = a;
  } else e.current = n;
  if (fl && (fl = !1, Xt = e, Xl = s), a = e.pendingLanes, a === 0 && (rn = null), qf(n.stateNode), tt(e, Te()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Yl) throw Yl = !1, e = za, za = null, e;
  return Xl & 1 && e.tag !== 0 && Bn(), a = e.pendingLanes, a & 1 ? e === Oa ? jr++ : (jr = 0, Oa = e) : jr = 0, un(), null;
}
function Bn() {
  if (Xt !== null) {
    var e = Vc(Xl), t = pt.transition, n = ue;
    try {
      if (pt.transition = null, ue = 16 > e ? 16 : e, Xt === null) var r = !1;
      else {
        if (e = Xt, Xt = null, Xl = 0, ce & 6) throw Error(F(331));
        var s = ce;
        for (ce |= 4, K = e.current; K !== null; ) {
          var a = K, o = a.child;
          if (K.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (K = d; K !== null; ) {
                  var m = K;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, m, a);
                  }
                  var v = m.child;
                  if (v !== null) v.return = m, K = v;
                  else for (; K !== null; ) {
                    m = K;
                    var w = m.sibling, x = m.return;
                    if (tu(m), m === d) {
                      K = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = x, K = w;
                      break;
                    }
                    K = x;
                  }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var _ = y.child;
                if (_ !== null) {
                  y.child = null;
                  do {
                    var S = _.sibling;
                    _.sibling = null, _ = S;
                  } while (_ !== null);
                }
              }
              K = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, K = o;
          else e: for (; K !== null; ) {
            if (a = K, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                kr(9, a, a.return);
            }
            var f = a.sibling;
            if (f !== null) {
              f.return = a.return, K = f;
              break e;
            }
            K = a.return;
          }
        }
        var u = e.current;
        for (K = u; K !== null; ) {
          o = K;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) h.return = o, K = h;
          else e: for (o = u; K !== null; ) {
            if (i = K, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  cs(9, i);
              }
            } catch (k) {
              Ie(i, i.return, k);
            }
            if (i === o) {
              K = null;
              break e;
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, K = g;
              break e;
            }
            K = i.return;
          }
        }
        if (ce = s, un(), It && typeof It.onPostCommitFiberRoot == "function") try {
          It.onPostCommitFiberRoot(ts, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ue = n, pt.transition = t;
    }
  }
  return !1;
}
function Ji(e, t, n) {
  t = Xn(n, t), t = Vd(e, t, 1), e = nn(e, t, 1), t = Ke(), e !== null && (Kr(e, 1, t), tt(e, t));
}
function Ie(e, t, n) {
  if (e.tag === 3) Ji(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ji(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
        e = Xn(n, e), e = Bd(t, e, 1), t = nn(t, e, 1), e = Ke(), t !== null && (Kr(t, 1, e), tt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function kp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ke(), e.pingedLanes |= e.suspendedLanes & n, Oe === e && (Fe & n) === n && (Re === 4 || Re === 3 && (Fe & 130023424) === Fe && 500 > Te() - To ? yn(e, 0) : Io |= n), tt(e, t);
}
function uu(e, t) {
  t === 0 && (e.mode & 1 ? (t = nl, nl <<= 1, !(nl & 130023424) && (nl = 4194304)) : t = 1);
  var n = Ke();
  e = Wt(e, t), e !== null && (Kr(e, t, n), tt(e, n));
}
function Sp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), uu(e, n);
}
function jp(e, t) {
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
      throw Error(F(314));
  }
  r !== null && r.delete(t), uu(e, n);
}
var fu;
fu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) Je = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Je = !1, up(e, t, n);
    Je = !!(e.flags & 131072);
  }
  else Je = !1, _e && t.flags & 1048576 && gd(t, Ul, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      bl(e, t), e = t.pendingProps;
      var s = Kn(t, Ve.current);
      Vn(t, n), s = jo(null, t, r, e, s, n);
      var a = bo();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (a = !0, Wl(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, wo(t), s.updater = is, t.stateNode = s, s._reactInternals = t, ba(t, r, e, n), t = Ea(null, t, r, !0, a, n)) : (t.tag = 0, _e && a && fo(t), He(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (bl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Cp(r), e = wt(r, e), s) {
          case 0:
            t = Na(null, t, r, e, n);
            break e;
          case 1:
            t = Ui(null, t, r, e, n);
            break e;
          case 11:
            t = Wi(null, t, r, e, n);
            break e;
          case 14:
            t = $i(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(F(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : wt(r, s), Na(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : wt(r, s), Ui(e, t, r, s, n);
    case 3:
      e: {
        if (qd(t), e === null) throw Error(F(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, kd(e, t), Bl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = Xn(Error(F(423)), t), t = Qi(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = Xn(Error(F(424)), t), t = Qi(e, t, r, n, s);
          break e;
        } else for (st = tn(t.stateNode.containerInfo.firstChild), at = t, _e = !0, _t = null, n = xd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Gn(), r === s) {
            t = $t(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Sd(t), e === null && ka(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, ya(r, s) ? o = null : a !== null && ya(r, a) && (t.flags |= 32), Gd(e, t), He(e, t, o, n), t.child;
    case 6:
      return e === null && ka(t), null;
    case 13:
      return Yd(e, t, n);
    case 4:
      return xo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = qn(t, null, r, n) : He(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : wt(r, s), Wi(e, t, r, s, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, he(Ql, r._currentValue), r._currentValue = o, a !== null) if (bt(a.value, o)) {
          if (a.children === s.children && !Ze.current) {
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
                  c = Ot(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var m = d.pending;
                    m === null ? c.next = c : (c.next = m.next, m.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Sa(
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
            if (o = a.return, o === null) throw Error(F(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Sa(o, n, t), o = a.sibling;
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
      return s = t.type, r = t.pendingProps.children, Vn(t, n), s = ht(s), r = r(s), t.flags |= 1, He(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = wt(r, t.pendingProps), s = wt(r.type, s), $i(e, t, r, s, n);
    case 15:
      return Hd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : wt(r, s), bl(e, t), t.tag = 1, et(r) ? (e = !0, Wl(t)) : e = !1, Vn(t, n), Qd(t, r, s), ba(t, r, s, n), Ea(null, t, r, !0, e, n);
    case 19:
      return Xd(e, t, n);
    case 22:
      return Kd(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function mu(e, t) {
  return Wc(e, t);
}
function bp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function mt(e, t, n, r) {
  return new bp(e, t, n, r);
}
function Ro(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Cp(e) {
  if (typeof e == "function") return Ro(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Za) return 11;
    if (e === eo) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function El(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") Ro(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Mn:
      return vn(n.children, s, a, t);
    case Ja:
      o = 8, s |= 8;
      break;
    case qs:
      return e = mt(12, n, t, s | 2), e.elementType = qs, e.lanes = a, e;
    case Ys:
      return e = mt(13, n, t, s), e.elementType = Ys, e.lanes = a, e;
    case Xs:
      return e = mt(19, n, t, s), e.elementType = Xs, e.lanes = a, e;
    case Sc:
      return us(n, s, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case _c:
          o = 10;
          break e;
        case kc:
          o = 9;
          break e;
        case Za:
          o = 11;
          break e;
        case eo:
          o = 14;
          break e;
        case Bt:
          o = 16, r = null;
          break e;
      }
      throw Error(F(130, e == null ? e : typeof e, ""));
  }
  return t = mt(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function vn(e, t, n, r) {
  return e = mt(7, e, r, t), e.lanes = n, e;
}
function us(e, t, n, r) {
  return e = mt(22, e, r, t), e.elementType = Sc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Bs(e, t, n) {
  return e = mt(6, e, null, t), e.lanes = n, e;
}
function Hs(e, t, n) {
  return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Np(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cs(0), this.expirationTimes = Cs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cs(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function zo(e, t, n, r, s, a, o, i, c) {
  return e = new Np(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = mt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wo(a), e;
}
function Ep(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: En, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function pu(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (et(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (et(n)) return pd(e, n, t);
  }
  return t;
}
function hu(e, t, n, r, s, a, o, i, c) {
  return e = zo(n, r, !0, e, s, a, o, i, c), e.context = pu(null), n = e.current, r = Ke(), s = ln(n), a = Ot(r, s), a.callback = t ?? null, nn(n, a, s), e.current.lanes = s, Kr(e, s, r), tt(e, r), e;
}
function fs(e, t, n, r) {
  var s = t.current, a = Ke(), o = ln(s);
  return n = pu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ot(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(s, t, o), e !== null && (jt(e, s, o, a), kl(e, s, o)), o;
}
function Zl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zi(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oo(e, t) {
  Zi(e, t), (e = e.alternate) && Zi(e, t);
}
function Mp() {
  return null;
}
var gu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ao(e) {
  this._internalRoot = e;
}
ms.prototype.render = Ao.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  fs(e, t, null, null);
};
ms.prototype.unmount = Ao.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sn(function() {
      fs(null, e, null, null);
    }), t[Ft] = null;
  }
};
function ms(e) {
  this._internalRoot = e;
}
ms.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Kc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && qc(e);
  }
};
function Fo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ps(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ec() {
}
function Ip(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = Zl(o);
        a.call(d);
      };
    }
    var o = hu(t, r, e, 0, null, !1, !1, "", ec);
    return e._reactRootContainer = o, e[Ft] = o.current, Dr(e.nodeType === 8 ? e.parentNode : e), Sn(), o;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = Zl(c);
      i.call(d);
    };
  }
  var c = zo(e, 0, !1, null, null, !1, !1, "", ec);
  return e._reactRootContainer = c, e[Ft] = c.current, Dr(e.nodeType === 8 ? e.parentNode : e), Sn(function() {
    fs(t, c, n, r);
  }), c;
}
function hs(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof s == "function") {
      var i = s;
      s = function() {
        var c = Zl(o);
        i.call(c);
      };
    }
    fs(t, o, e, s);
  } else o = Ip(n, t, e, s, r);
  return Zl(o);
}
Bc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 && (ro(t, n | 1), tt(t, Te()), !(ce & 6) && (Jn = Te() + 500, un()));
      }
      break;
    case 13:
      Sn(function() {
        var r = Wt(e, 1);
        if (r !== null) {
          var s = Ke();
          jt(r, e, 1, s);
        }
      }), Oo(e, 1);
  }
};
lo = function(e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = Ke();
      jt(t, e, 134217728, n);
    }
    Oo(e, 134217728);
  }
};
Hc = function(e) {
  if (e.tag === 13) {
    var t = ln(e), n = Wt(e, t);
    if (n !== null) {
      var r = Ke();
      jt(n, e, t, r);
    }
    Oo(e, t);
  }
};
Kc = function() {
  return ue;
};
Gc = function(e, t) {
  var n = ue;
  try {
    return ue = e, t();
  } finally {
    ue = n;
  }
};
oa = function(e, t, n) {
  switch (t) {
    case "input":
      if (ea(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = ss(r);
            if (!s) throw Error(F(90));
            bc(r), ea(r, s);
          }
        }
      }
      break;
    case "textarea":
      Nc(e, n);
      break;
    case "select":
      t = n.value, t != null && Wn(e, !!n.multiple, t, !1);
  }
};
Pc = Lo;
Rc = Sn;
var Tp = { usingClientEntryPoint: !1, Events: [qr, Dn, ss, Lc, Dc, Lo] }, ur = { findFiberByHostInstance: pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Lp = { bundleType: ur.bundleType, version: ur.version, rendererPackageName: ur.rendererPackageName, rendererConfig: ur.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ac(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ur.findFiberByHostInstance || Mp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ml.isDisabled && ml.supportsFiber) try {
    ts = ml.inject(Lp), It = ml;
  } catch {
  }
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tp;
it.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fo(t)) throw Error(F(200));
  return Ep(e, t, null, n);
};
it.createRoot = function(e, t) {
  if (!Fo(e)) throw Error(F(299));
  var n = !1, r = "", s = gu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = zo(e, 1, !1, null, null, n, !1, r, s), e[Ft] = t.current, Dr(e.nodeType === 8 ? e.parentNode : e), new Ao(t);
};
it.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = Ac(t), e = e === null ? null : e.stateNode, e;
};
it.flushSync = function(e) {
  return Sn(e);
};
it.hydrate = function(e, t, n) {
  if (!ps(t)) throw Error(F(200));
  return hs(null, e, t, !0, n);
};
it.hydrateRoot = function(e, t, n) {
  if (!Fo(e)) throw Error(F(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = gu;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = hu(t, null, e, 1, n ?? null, s, !1, a, o), e[Ft] = t.current, Dr(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new ms(t);
};
it.render = function(e, t, n) {
  if (!ps(t)) throw Error(F(200));
  return hs(null, e, t, !1, n);
};
it.unmountComponentAtNode = function(e) {
  if (!ps(e)) throw Error(F(40));
  return e._reactRootContainer ? (Sn(function() {
    hs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
it.unstable_batchedUpdates = Lo;
it.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ps(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return hs(e, t, n, !1, r);
};
it.version = "18.3.1-next-f1338f8080-20240426";
function yu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yu);
    } catch (e) {
      console.error(e);
    }
}
yu(), yc.exports = it;
var ve = yc.exports, vu, tc = ve;
vu = tc.createRoot, tc.hydrateRoot;
var wu = { exports: {} }, gs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dp = p, Pp = Symbol.for("react.element"), Rp = Symbol.for("react.fragment"), zp = Object.prototype.hasOwnProperty, Op = Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function xu(e, t, n) {
  var r, s = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) zp.call(t, r) && !Ap.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Pp, type: e, key: a, ref: o, props: s, _owner: Op.current };
}
gs.Fragment = Rp;
gs.jsx = xu;
gs.jsxs = xu;
wu.exports = gs;
var l = wu.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fp = {
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
const Wp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ee = (e, t) => {
  const n = p.forwardRef(
    ({
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, m) => p.createElement(
      "svg",
      {
        ref: m,
        ...Fp,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${Wp(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, w]) => p.createElement(v, w)),
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
const _u = ee("AlertCircle", [
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
const $p = ee("AlertTriangle", [
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
const ku = ee("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = ee("ArrowUpDown", [
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
const Su = ee("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = ee("Box", [
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
const Vp = ee("Calendar", [
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
const Bp = ee("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = ee("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = ee("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ju = ee("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = ee("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = ee("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = ee("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = ee("Download", [
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
const qp = ee("Eraser", [
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
const Uo = ee("FileJson", [
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
const Yp = ee("FileText", [
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
const Xp = ee("Folder", [
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
const Jp = ee("Info", [
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
const Zp = ee("Lasso", [
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
const bu = ee("LayoutGrid", [
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
const eh = ee("LayoutList", [
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
const th = ee("Link2Off", [
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
const nh = ee("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = ee("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = ee("Maximize", [
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
const lh = ee("Menu", [
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
const sh = ee("Minimize", [
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
const ah = ee("MoreVertical", [
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
const oh = ee("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = ee("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = ee("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = ee("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = ee("RefreshCw", [
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
const ih = ee("ScanLine", [
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
const jn = ee("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nu = ee("Settings", [
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
const Eu = ee("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = ee("Star", [
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
const ch = ee("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = ee("Tag", [
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
const Ut = ee("Trash2", [
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
const dh = ee("Trash", [
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
const uh = ee("Type", [
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
const fh = ee("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mh = ee("Upload", [
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
const ph = ee("Workflow", [
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
const ge = ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = te;
async function oe(e) {
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
const hh = async () => {
  const e = await te.fetchApi("/meld/home-dir");
  return (await oe(e)).home;
}, rt = ({
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
let es = !1;
const gh = (e) => {
  es = e, es && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, yh = (...e) => {
  es && console.log("[Meld]", ...e);
}, vh = (...e) => {
  es && console.warn("[Meld]", ...e);
}, wh = (...e) => {
  console.error("[Meld]", ...e);
}, J = {
  log: yh,
  warn: vh,
  error: wh,
  init: gh
}, Ml = async (e = 0, t = 30, n = "", r = "default", s = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return oe(a);
}, Mu = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return oe(t);
}, Wa = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await oe(n);
}, Qo = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return oe(t);
}, Iu = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return oe(t);
}, rc = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await oe(n);
}, xh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await oe(r);
  } catch {
    return [];
  }
}, $a = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await oe(t);
  } catch {
    return [];
  }
}, _h = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await oe(n);
}, kh = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return oe(n);
}, Ua = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await oe(r);
}, Sh = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return oe(t);
}, jh = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return oe(t);
}, bh = async (e, t) => {
  const n = await te.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), s = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = s, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(s), document.body.removeChild(a);
}, Ch = async (e, t) => {
  const n = await te.fetchApi("/meld/api/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error(`Failed to download image ${e}`);
  const r = n.headers.get("Content-Disposition");
  let s = `image_${e}.png`;
  if (r != null && r.includes("filename=")) {
    const c = r.match(/filename="?([^"]+)"?/);
    c != null && c[1] && (s = c[1]);
  }
  const a = await n.blob(), o = window.URL.createObjectURL(a), i = document.createElement("a");
  i.href = o, i.download = s, document.body.appendChild(i), i.click(), window.URL.revokeObjectURL(o), document.body.removeChild(i);
}, Nh = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return oe(r);
}, Eh = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return oe(e);
}, Mh = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return oe(e);
}, Ih = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return oe(e);
}, Th = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return oe(e);
}, Lh = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await oe(n);
}, lc = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await oe(t);
}, Dh = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await oe(r);
}, Ph = {
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
}, Tu = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await oe(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Ph;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Rh = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await oe(n);
}, sc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, m) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const w = t;
      t = m ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((x) => x(t, w));
    }
  }, s = () => t, i = { setState: r, getState: s, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, s, i);
  return i;
}, zh = (e) => e ? sc(e) : sc, Oh = (e) => e;
function Ah(e, t = Oh) {
  const n = qt.useSyncExternalStore(
    e.subscribe,
    qt.useCallback(() => t(e.getState()), [e, t]),
    qt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return qt.useDebugValue(n), n;
}
const Fh = (e) => {
  const t = zh(e), n = (r) => Ah(t, r);
  return Object.assign(n, t), n;
}, Wh = (e) => Fh;
function $h(e, t) {
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
const Qa = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return Qa(r)(n);
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
        return Qa(r)(n);
      }
    };
  }
}, Uh = (e, t) => (n, r, s) => {
  let a = {
    storage: $h(() => window.localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, f) => ({
      ...f,
      ...S
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let m = a.storage;
  if (!m)
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
    return m.setItem(a.name, {
      state: S,
      version: a.version
    });
  }, w = s.setState;
  s.setState = (S, f) => (w(S, f), v());
  const x = e(
    (...S) => (n(...S), v()),
    r,
    s
  );
  s.getInitialState = () => x;
  let y;
  const _ = () => {
    var S, f;
    if (!m) return;
    const u = ++i;
    o = !1, c.forEach((g) => {
      var k;
      return g((k = r()) != null ? k : x);
    });
    const h = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (S = r()) != null ? S : x)) || void 0;
    return Qa(m.getItem.bind(m))(a.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== a.version) {
          if (a.migrate) {
            const k = a.migrate(
              g.state,
              g.version
            );
            return k instanceof Promise ? k.then((b) => [!0, b]) : [!0, k];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var k;
      if (u !== i)
        return;
      const [b, j] = g;
      if (y = a.merge(
        j,
        (k = r()) != null ? k : x
      ), n(y, !0), b)
        return v();
    }).then(() => {
      u === i && (h == null || h(y, void 0), y = r(), o = !0, d.forEach((g) => g(y)));
    }).catch((g) => {
      u === i && (h == null || h(void 0, g));
    });
  };
  return s.persist = {
    setOptions: (S) => {
      a = {
        ...a,
        ...S
      }, S.storage && (m = S.storage);
    },
    clearStorage: () => {
      m == null || m.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => _(),
    hasHydrated: () => o,
    onHydrate: (S) => (c.add(S), () => {
      c.delete(S);
    }),
    onFinishHydration: (S) => (d.add(S), () => {
      d.delete(S);
    })
  }, a.skipHydration || _(), y || x;
}, Qh = Uh, Vh = [
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
let pl = null;
const pe = Wh()(
  Qh(
    (e) => ({
      isOpen: !1,
      slots: Vh,
      buckets: {},
      images: {},
      toastMessage: null,
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((s) => {
        const a = { ...s.buckets };
        for (const i in a)
          a[i] = a[i].filter((c) => c !== n);
        a[t] || (a[t] = []), a[t].includes(n) || (a[t] = [...a[t], n]);
        const o = { ...s.images };
        return r && (o[n] = r), { buckets: a, images: o };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var i;
        const s = {
          ...r.buckets,
          [t]: ((i = r.buckets[t]) == null ? void 0 : i.filter((c) => c !== n)) || []
        }, a = Object.values(s).some(
          (c) => c.includes(n)
        ), o = { ...r.images };
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
        slots: r.slots.map(
          (s) => s.id === t ? { ...s, ...n } : s
        )
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
      /**
       * Show toast message for 2.5 seconds.
       * If called multiple times, the latest message overwrites the previous one.
       */
      showToast: (t) => {
        pl && clearTimeout(pl), e({ toastMessage: t }), pl = setTimeout(() => {
          e({ toastMessage: null }), pl = null;
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
), Bh = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  viewScope: "default",
  viewerImageId: null,
  viewerMode: "gallery",
  viewerLightTableSlotId: null,
  viewerInitialMaskMode: !1,
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
  favorites: []
};
function Hh(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const s = new Set(t.payload), a = e.images.filter((i) => !s.has(i.id)), o = new Set(e.selectedIds);
      for (const i of t.payload)
        o.delete(i);
      return {
        ...e,
        images: a,
        selectedIds: o,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const s = t.payload, a = [...e.images, ...s], o = Array.from(
        new Map(a.map((i) => [i.id, i])).values()
      ).sort((i, c) => c.created_at - i.created_at);
      return {
        ...e,
        images: o,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + s.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const s = t.payload, a = e.images.map(
        (i) => i.id === s.id ? s : i
      ), o = e.lineageImages.map(
        (i) => i.id === s.id ? s : i
      );
      return {
        ...e,
        images: a,
        lineageImages: o
      };
    }
    case "SET_IMAGES": {
      const { images: s, total: a, offset: o } = t.payload;
      let i = e.viewerImageId;
      return e.viewerMode === "gallery" && i !== null && !s.some((c) => c.id === i) && (i = null), {
        ...e,
        images: s,
        isLoading: !1,
        error: null,
        viewerImageId: i,
        pagination: {
          total: a,
          offset: o,
          limit: e.pagination.limit,
          hasMore: o + s.length < a
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: s, total: a, offset: o } = t.payload, i = [...e.images, ...s], c = Array.from(
        new Map(i.map((d) => [d.id, d])).values()
      );
      return {
        ...e,
        images: c,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: a,
          offset: o,
          hasMore: o + s.length < a
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
      const s = new Set(e.selectedIds);
      let a = e.lastSelectedId;
      return s.has(t.payload) ? (s.delete(t.payload), a === t.payload && (a = null)) : (s.add(t.payload), a = t.payload), {
        ...e,
        selectedIds: s,
        lastSelectedId: a
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
      const s = e.images.findIndex(
        (d) => d.id === e.lastSelectedId
      ), a = e.images.findIndex(
        (d) => d.id === t.payload
      );
      if (s === -1 || a === -1) return e;
      const [o, i] = [
        Math.min(s, a),
        Math.max(s, a)
      ], c = new Set(e.selectedIds);
      for (let d = o; d <= i; d++)
        c.add(e.images[d].id);
      return {
        ...e,
        selectedIds: c,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((s) => s.id)
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
      const s = t.payload, a = typeof s == "number" ? s : s.id, o = typeof s == "number" ? "gallery" : s.mode, i = typeof s != "number" && s.mode === "lighttable" ? s.slotId : null;
      let c = !1;
      if (typeof s != "number" && s.initialMaskMode && (typeof s.initialMaskMode == "string" ? c = s.initialMaskMode : c = "run"), c)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: a,
            mode: c
          }
        };
      const d = e.viewerMode === "lineage" && o === "lineage" && e.lineageImages.some((m) => m.id === a);
      return {
        ...e,
        viewerImageId: a,
        viewerMode: o,
        viewerLightTableSlotId: i,
        viewerInitialMaskMode: c,
        lineageImages: d ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        viewerLightTableSlotId: null,
        viewerInitialMaskMode: !1,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const a = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], o = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
      let i = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (pe.getState().buckets[e.viewerLightTableSlotId] || []).map((w) => {
        const x = Number.parseInt(w, 10);
        return e.images.find((y) => y.id === x) || e.lineageImages.find((y) => y.id === x) || null;
      }).filter((w) => w !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (m) => m.exists !== !1 && (e.settings["gallery.show_parent_images"] || !m.has_children || o)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (m) => m.id === e.viewerImageId
      );
      if (c === -1 || c === i.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || c === i.length - 1 && !a)
        return e;
      const d = (c + 1) % i.length;
      return {
        ...e,
        viewerImageId: i[d].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const a = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], o = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
      let i = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (pe.getState().buckets[e.viewerLightTableSlotId] || []).map((w) => {
        const x = Number.parseInt(w, 10);
        return e.images.find((y) => y.id === x) || e.lineageImages.find((y) => y.id === x) || null;
      }).filter((w) => w !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (m) => m.exists !== !1 && (e.settings["gallery.show_parent_images"] || !m.has_children || o)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (m) => m.id === e.viewerImageId
      );
      if (c === -1 || c === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || c === 0 && !a)
        return e;
      const d = (c - 1 + i.length) % i.length;
      return {
        ...e,
        viewerImageId: i[d].id
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
      const s = {
        ...e.settings,
        ...t.payload
      }, a = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (a.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: s,
        pagination: a
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
const Lu = p.createContext(void 0), Kh = ({
  children: e
}) => {
  const [t, n] = p.useReducer(Hh, Bh), r = p.useRef(t.images.length), s = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (y, _, S) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let h = y;
      for (; h < Math.min(_, f) && S === s.current; )
        try {
          const g = Math.min(u, f - h);
          J.log("Background fetch: starting chunk", {
            offset: h,
            limit: g
          });
          const k = await Ml(
            h,
            g,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== s.current || (n({ type: "APPEND_IMAGES", payload: k }), h += k.images.length, k.images.length === 0 || h >= k.total))
            break;
          await new Promise((b) => setTimeout(b, 300));
        } catch (g) {
          J.error("Background fetch failed", g);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), _ = ++s.current;
    try {
      const S = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      J.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Ml(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), h = performance.now() - y;
      J.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: h.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, _);
    } catch (S) {
      J.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    o
  ]), c = p.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now();
    try {
      const _ = r.current, S = t.searchQuery.trim() !== "", f = t.pagination.limit;
      J.log("loadMoreImages: starting fetch", {
        nextOffset: _,
        fetchLimit: f,
        isSearch: S
      });
      const u = await Ml(
        _,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), h = performance.now() - y;
      J.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: h.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (_) {
      J.error("loadMoreImages: fetch failed", _), n({
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
  ]), d = p.useCallback(async () => {
    try {
      const y = await Th();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      J.error("Failed to load favorites", y);
    }
  }, []), m = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), S = t.images.filter(
      (f) => t.selectedIds.has(f.id)
    ).some(
      (f) => f.parent_id || f.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await Qo(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (_) {
      n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = p.useCallback(
    async (y, _) => {
      try {
        await Rh(y, _), n({ type: "SET_SETTINGS", payload: { [y]: _ } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), x = p.useCallback(
    async (y) => {
      const _ = t.images.find((h) => h.id === y);
      if (_ && !_.is_minimal)
        return _;
      const S = t.lineageImages.find((h) => h.id === y);
      if (S && !S.is_minimal)
        return S;
      const f = a.current.get(y);
      if (f)
        return f;
      const u = (async () => {
        try {
          J.log("fetchFullImageDetails: fetching full data", { id: y });
          const h = await Mu(y);
          return n({ type: "UPDATE_IMAGE", payload: h }), h;
        } finally {
          a.current.delete(y);
        }
      })();
      return a.current.set(y, u), u;
    },
    [t.images, t.lineageImages]
  );
  return p.useEffect(() => {
    (async () => {
      try {
        const _ = await Tu();
        n({ type: "SET_SETTINGS", payload: _ });
      } catch (_) {
        J.error("Failed to load settings", _);
      }
    })();
  }, []), p.useEffect(() => {
    d();
  }, [d]), p.useEffect(() => {
    const y = () => {
      i();
    }, _ = (f) => {
      const u = f.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, S = (f) => {
      const u = f.detail;
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
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", _), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", _), window.removeEventListener("meld-scan-finished", S);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ l.jsx(
    Lu.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: m,
        restoreSelected: v,
        updateSetting: w,
        fetchFullImageDetails: x
      },
      children: e
    }
  );
}, xe = () => {
  const e = p.useContext(Lu);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, nt = (e) => {
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
}, Vo = async () => {
  const e = await te.fetchApi("/meld/tags");
  return oe(e);
}, Gh = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return oe(t);
}, qh = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await oe(t);
}, Yh = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await oe(n);
}, Xh = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Jh = async (e, t, n = !1, r) => {
  const s = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await oe(s);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Zh = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await oe(s);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, eg = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await oe(r)).count;
  } catch {
    return 0;
  }
}, tg = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await oe(t);
}, ng = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await oe(e);
}, Du = () => {
  const { dispatch: e } = xe(), [t, n] = p.useState(() => {
    const E = localStorage.getItem("meld-import-config"), z = {
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
        const R = JSON.parse(E);
        return { ...z, ...R, tags: [] };
      } catch {
        return z;
      }
    return z;
  });
  p.useEffect(() => {
    const { tags: E, ...z } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(z));
  }, [t]);
  const [r, s] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [d, m] = p.useState(!1), [v, w] = p.useState([]), [x, y] = p.useState(""), [_, S] = p.useState(!1), [f, u] = p.useState(null), h = p.useRef(!1), g = (E) => {
    E.target === E.currentTarget && (h.current = !0);
  }, k = (E) => {
    E.target === E.currentTarget && h.current && e({ type: "CLOSE_MODAL" }), h.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const z = await hh();
        n((R) => R.custom_path ? R : { ...R, custom_path: z });
      } catch (z) {
        J.error("Failed to fetch home directory:", z);
      }
    })();
  }, []), p.useEffect(() => {
    const E = new AbortController();
    return (async () => {
      const R = t.type === "custom" ? t.custom_path : t.subfolder;
      if (J.log(
        `loadFolders started. Path: "${R}", Type: "${t.type}"`
      ), t.type === "custom" && !R) {
        J.log("Custom path is empty, skipping load."), s([]), o([]), c(0);
        return;
      }
      m(!0);
      const T = R, C = t.type;
      try {
        J.log("Step 1: Fast load starting...");
        const L = await Jh(
          t.type,
          R,
          !0,
          E.signal
        );
        if (E.signal.aborted) {
          J.log("Step 1: Aborted.");
          return;
        }
        J.log(
          `Step 1 complete. Found ${L.folders.length} folders, ${L.images.length} images.`
        ), s(L.folders), o(L.images), c(null);
        const $ = L.folders.map((M) => M.name);
        $.length > 0 && (J.log(
          `Step 2: Metadata fetch starting for ${$.length} folders...`
        ), Zh(
          C,
          T,
          $,
          E.signal
        ).then((M) => {
          if (E.signal.aborted) {
            J.log("Step 2: Aborted.");
            return;
          }
          J.log("Step 2: Metadata fetch complete."), s(
            (B) => B.map((de) => {
              const V = M[de.name];
              return V ? { ...de, count: V.count, preview: V.preview } : de;
            })
          );
        }).catch((M) => {
          M.name !== "AbortError" && J.error("Step 2: Metadata fetch failed:", M);
        })), J.log("Step 3: Path image count starting..."), eg(C, T, E.signal).then((M) => {
          if (E.signal.aborted) {
            J.log("Step 3: Aborted.");
            return;
          }
          J.log(`Step 3: Path image count complete: ${M}`), c(M);
        }).catch((M) => {
          M.name !== "AbortError" && J.error("Step 3: Path image count failed:", M);
        });
      } catch (L) {
        if (L.name === "AbortError") {
          J.log("Request aborted.");
          return;
        }
        J.error("Failed to load folders:", L), s([]), o([]), c(0);
      } finally {
        E.signal.aborted || m(!1);
      }
    })(), () => {
      E.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const b = p.useCallback(async () => {
    S(!0);
    try {
      const E = await Vo();
      w(E);
    } catch (E) {
      J.error("Failed to fetch tags:", E);
    } finally {
      S(!1);
    }
  }, []);
  p.useEffect(() => {
    b();
  }, [b]), rt({
    onEscape: p.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const j = p.useMemo(() => v.filter(
    (E) => E.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(E.name)
  ), [v, x, t.tags]), N = (E) => {
    const z = E.trim();
    z && !t.tags.includes(z) && (n({ ...t, tags: [...t.tags, z] }), y(""));
  }, O = (E) => {
    n({ ...t, tags: t.tags.filter((z) => z !== E) });
  }, D = (E) => {
    E.key === "Enter" && x.trim() && (E.preventDefault(), N(x.trim()));
  }, I = async () => {
    try {
      await tg(t), e({
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
      J.error("Failed to start scan:", E), alert(`Failed to start scan: ${E}`);
    }
  }, W = (E) => {
    if (t.type === "custom") {
      const z = t.custom_path.includes("\\") ? "\\" : "/", R = t.custom_path.endsWith(z) ? `${t.custom_path}${E}` : `${t.custom_path}${z}${E}`;
      n({ ...t, custom_path: R });
    } else {
      const z = t.subfolder ? `${t.subfolder}/${E}` : E;
      n({ ...t, subfolder: z });
    }
  }, X = () => {
    if (t.type === "custom") {
      const E = t.custom_path.includes("\\") ? "\\" : "/", z = t.custom_path.split(E);
      if (z.length > 1) {
        z.pop();
        let R = z.join(E);
        R === "" && E === "/" && (R = "/"), n({ ...t, custom_path: R });
      }
    } else {
      const E = t.subfolder.split("/");
      E.pop(), n({ ...t, subfolder: E.join("/") });
    }
  };
  return ve.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: k,
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
                      children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
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
                    /* @__PURE__ */ l.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ l.jsxs("label", { children: [
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
                            onClick: () => O(E),
                            children: /* @__PURE__ */ l.jsx(ge, { size: 12 })
                          }
                        )
                      ] }, E)) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ l.jsx(jn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (E) => y(E.target.value),
                            onKeyDown: D
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(x),
                            children: /* @__PURE__ */ l.jsx(ys, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? x && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
                      ] }) : j.map((E) => /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => N(E.name),
                          children: E.name
                        },
                        E.id
                      )) })
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ l.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: I,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ l.jsx(Qr, { size: 16 }),
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
                          onClick: X,
                          children: [
                            /* @__PURE__ */ l.jsx(ju, { size: 16 }),
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
                          className: "meld-folder-item",
                          onClick: () => W(E.name),
                          children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-folder-icon-wrapper", children: E.preview ? /* @__PURE__ */ l.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: nt(E.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ l.jsx(Xp, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: E.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${E.count === null ? "meld-folder-count--loading" : ""}`,
                                children: E.count !== null ? `${E.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx($o, { size: 14 })
                          ]
                        },
                        E.name
                      )),
                      a.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-browser-image-grid", children: a.map((E) => /* @__PURE__ */ l.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(E),
                          children: /* @__PURE__ */ l.jsx(
                            "img",
                            {
                              src: nt(E),
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
          f && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (E) => {
                E.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (E) => E.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => u(null),
                          children: /* @__PURE__ */ l.jsx(ge, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "img",
                        {
                          src: nt(f),
                          alt: f.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-import-preview-info", children: f.filename })
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
}, rg = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, s] = p.useState("zip"), [a, o] = p.useState(!1), [i, c] = p.useState(!1), d = p.useRef(!1), m = (x) => {
    x.target === x.currentTarget && (d.current = !0);
  }, v = (x) => {
    x.target === x.currentTarget && d.current && (i || n()), d.current = !1;
  };
  rt({
    onEscape: () => {
      i || n();
    }
  });
  const w = async () => {
    c(!0);
    try {
      if (r === "zip")
        await bh(e, a);
      else
        for (const x of e)
          await Ch(x, a), await new Promise((y) => setTimeout(y, 200));
      n(), t == null || t();
    } catch (x) {
      console.error("Download failed:", x), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return ve.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: v,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(Ur, { size: 18 }),
              /* @__PURE__ */ l.jsxs("h3", { style: { margin: 0 }, children: [
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
                disabled: i,
                children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
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
                          checked: r === "zip",
                          onChange: () => s("zip"),
                          disabled: i
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
                          checked: r === "raw",
                          onChange: () => s("raw"),
                          disabled: i
                        }
                      ),
                      "Raw (Multiple Files)"
                    ]
                  }
                )
              ] })
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
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                disabled: i,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: w,
                disabled: i,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: i ? "Downloading..." : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  /* @__PURE__ */ l.jsx(Ur, { size: 16 }),
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
};
function lg(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Br(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = lg(e), s = (m) => {
    if (!m) return !1;
    const v = m.replace(/\s+/g, "").toLowerCase();
    return v === "meldimageloader" || v === "loadimage";
  }, a = n.graph._nodes.filter(
    (m) => s(m.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const m = a.find(
      (v) => String(v.id) === t
    );
    m && (o = m);
  }
  const i = o.widgets.find(
    (m) => m.name === "image"
  );
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const sg = () => {
  const { dispatch: e } = xe();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var m, v;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), Br(n);
      const s = window.app;
      if (!(s != null && s.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = s.graph._nodes.filter(
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
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (m = s.graph).afterChange) == null || v.call(m), s.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Ks(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function ag(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = Va(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, s), d = new Uint8ClampedArray(r * s);
  for (let m = 0; m < r * s; m++)
    d[m] = c.data[m * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function Va(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: s, height: a } = e, o = new ImageData(s, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], m = c * 4;
    d > 0 ? (i[m] = t[0], i[m + 1] = t[1], i[m + 2] = t[2], i[m + 3] = n) : (i[m] = 0, i[m + 1] = 0, i[m + 2] = 0, i[m + 3] = 0);
  }
  return o;
}
function og(e) {
  return e.data.every((t) => t === 0);
}
const Pu = ({
  imageId: e,
  mode: t,
  onSuccess: n,
  onClose: r
}) => {
  const { state: s, dispatch: a } = xe(), o = s.images.find((P) => P.id === e), { injectMaskToGraph: i } = sg();
  rt({ onEscape: r });
  const c = p.useRef(null), d = p.useRef(null), m = p.useRef(null), v = p.useRef(null), [w, x] = p.useState(!1), [y, _] = p.useState("rect"), [S, f] = p.useState({ x: 0, y: 0 }), [u, h] = p.useState({ x: 0, y: 0 }), [g, k] = p.useState([]), [b, j] = p.useState(null), [N, O] = p.useState(!1), D = p.useCallback(() => {
    const P = m.current, U = d.current;
    if (!P || !U) return null;
    const H = U.getBoundingClientRect(), G = P.getBoundingClientRect(), Q = P.naturalWidth, ie = P.naturalHeight;
    if (!Q || !ie) return null;
    const fe = Q / ie, Ce = G.width / G.height;
    let Ne, Ee, Be = 0, dt = 0;
    return fe > Ce ? (Ne = G.width, Ee = G.width / fe, dt = (G.height - Ee) / 2) : (Ee = G.height, Ne = G.height * fe, Be = (G.width - Ne) / 2), {
      left: G.left - H.left + Be,
      top: G.top - H.top + dt,
      width: Ne,
      height: Ee
    };
  }, []), I = p.useCallback(() => {
    const P = c.current;
    if (!P) return;
    const U = P.getContext("2d");
    if (!U) return;
    U.clearRect(0, 0, P.width, P.height);
    const H = getComputedStyle(document.documentElement), G = H.getPropertyValue("--comfy-input-bg-active") || H.getPropertyValue("--comfy-input-bg") || H.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", Q = D();
    if (v.current && Q && (U.save(), U.globalAlpha = 0.5, U.drawImage(
      v.current,
      Q.left,
      Q.top,
      Q.width,
      Q.height
    ), U.restore()), w) {
      const ie = Math.min(S.x, u.x), fe = Math.min(S.y, u.y), Ce = Math.abs(S.x - u.x), Ne = Math.abs(S.y - u.y);
      if (U.save(), U.globalAlpha = 0.3, U.fillStyle = G, U.strokeStyle = "white", U.lineWidth = 2, U.setLineDash([5, 5]), U.beginPath(), y === "rect")
        U.rect(ie, fe, Ce, Ne);
      else if (y === "ellipse") {
        const Ee = ie + Ce / 2, Be = fe + Ne / 2;
        U.ellipse(Ee, Be, Ce / 2, Ne / 2, 0, 0, 2 * Math.PI);
      } else if (y === "lasso" && g.length > 1) {
        U.moveTo(g[0].x, g[0].y);
        for (let Ee = 1; Ee < g.length; Ee++)
          U.lineTo(g[Ee].x, g[Ee].y);
        U.closePath();
      }
      U.fill(), U.globalAlpha = 1, U.stroke(), U.restore();
    }
  }, [w, S, u, y, g, D]), [W, X] = p.useState([]), E = p.useMemo(() => W.length > 0 ? W[W.length - 1] : m.current ? Ks(
    m.current.naturalWidth,
    m.current.naturalHeight
  ) : null, [W]);
  p.useEffect(() => {
    var P;
    (P = m.current) != null && P.naturalWidth && W.length === 0 && X([
      Ks(
        m.current.naturalWidth,
        m.current.naturalHeight
      )
    ]);
  }, [W.length]);
  const z = p.useRef(!1), R = p.useRef(0), T = (P) => {
    P.target === P.currentTarget && (z.current = !0);
  }, C = (P) => {
    P.target === P.currentTarget && z.current && !w && r(), z.current = !1;
  };
  p.useEffect(() => {
    if (!E) return;
    v.current || (v.current = document.createElement("canvas"));
    const P = v.current;
    P.width = E.width, P.height = E.height;
    const U = P.getContext("2d");
    if (!U) return;
    const H = Va(E, [255, 255, 255], 255);
    U.putImageData(H, 0, 0), I();
  }, [E, I]), p.useEffect(() => {
    const P = () => {
      d.current && c.current && (c.current.width = d.current.clientWidth, c.current.height = d.current.clientHeight, I());
    }, U = new ResizeObserver(P);
    return d.current && U.observe(d.current), P(), () => U.disconnect();
  }, [I]);
  const L = (P) => {
    var ie;
    if (P.button !== 0 || w || N || Date.now() - R.current < 100)
      return;
    P.preventDefault();
    const U = D(), H = (ie = d.current) == null ? void 0 : ie.getBoundingClientRect();
    if (!U || !H) return;
    x(!0);
    const G = Math.max(
      U.left,
      Math.min(P.clientX - H.left, U.left + U.width)
    ), Q = Math.max(
      U.top,
      Math.min(P.clientY - H.top, U.top + U.height)
    );
    f({ x: G, y: Q }), h({ x: G, y: Q }), k(y === "lasso" ? [{ x: G, y: Q }] : []), j(null);
  };
  p.useEffect(() => {
    if (!w) return;
    const P = (H) => {
      var Ce;
      const G = D(), Q = (Ce = d.current) == null ? void 0 : Ce.getBoundingClientRect();
      if (!G || !Q) return;
      const ie = Math.max(
        G.left,
        Math.min(H.clientX - Q.left, G.left + G.width)
      ), fe = Math.max(
        G.top,
        Math.min(H.clientY - Q.top, G.top + G.height)
      );
      h({ x: ie, y: fe }), y === "lasso" && k((Ne) => [...Ne, { x: ie, y: fe }]);
    }, U = (H) => {
      var ie;
      const G = D(), Q = (ie = d.current) == null ? void 0 : ie.getBoundingClientRect();
      if (G && Q && E && m.current) {
        const fe = Math.max(
          G.left,
          Math.min(H.clientX - Q.left, G.left + G.width)
        ), Ce = Math.max(
          G.top,
          Math.min(H.clientY - Q.top, G.top + G.height)
        ), Ne = Math.min(S.x, fe), Ee = Math.min(S.y, Ce), Be = Math.abs(S.x - fe), dt = Math.abs(S.y - Ce), ws = y === "lasso";
        if (Be > 5 || dt > 5 || ws && g.length > 2) {
          const Y = m.current.naturalWidth, se = m.current.naturalHeight, A = Y / G.width, le = se / G.height, Z = ag(E, (ne) => {
            if (y === "rect") {
              const me = (Ne - G.left) * A, Le = (Ee - G.top) * le, Ye = Be * A, Me = dt * le;
              ne.rect(me, Le, Ye, Me);
            } else if (y === "ellipse") {
              const me = (Ne - G.left) * A, Le = (Ee - G.top) * le, Ye = Be * A, Me = dt * le, ke = me + Ye / 2, Ct = Le + Me / 2;
              ne.ellipse(
                ke,
                Ct,
                Ye / 2,
                Me / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (y === "lasso" && g.length > 2) {
              const me = g[0];
              ne.moveTo(
                (me.x - G.left) * A,
                (me.y - G.top) * le
              );
              for (let Le = 1; Le < g.length; Le++)
                ne.lineTo(
                  (g[Le].x - G.left) * A,
                  (g[Le].y - G.top) * le
                );
              ne.closePath();
            }
          });
          X((ne) => [...ne, Z]);
        }
      }
      R.current = Date.now(), x(!1), k([]);
    };
    return window.addEventListener("mousemove", P), window.addEventListener("mouseup", U), () => {
      window.removeEventListener("mousemove", P), window.removeEventListener("mouseup", U);
    };
  }, [
    w,
    S.x,
    S.y,
    D,
    E,
    y,
    g
  ]);
  const $ = p.useCallback(() => {
    W.length > 1 && X((P) => P.slice(0, -1));
  }, [W.length]);
  p.useEffect(() => {
    const P = (U) => {
      (U.metaKey || U.ctrlKey) && U.key === "z" ? (U.preventDefault(), $()) : U.key === "Escape" && (U.preventDefault(), U.stopPropagation(), U.stopImmediatePropagation(), r(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", P, { capture: !0 }), () => window.removeEventListener("keydown", P, { capture: !0 });
  }, [$, r]);
  const M = () => {
    if (m.current) {
      const P = Ks(
        m.current.naturalWidth,
        m.current.naturalHeight
      );
      X((U) => [...U, P]);
    }
  }, B = async () => {
    if (!E || !m.current) return null;
    O(!0);
    try {
      const { width: P, height: U } = E, H = document.createElement("canvas");
      H.width = P, H.height = U;
      const G = H.getContext("2d");
      if (!G) return null;
      const Q = Va(E, [255, 255, 255], 255);
      G.putImageData(Q, 0, 0);
      const ie = await new Promise(
        (dt) => H.toBlob(dt, "image/png")
      );
      if (!ie) return null;
      const Ce = `meld_mask_${Date.now()}.png`, Ne = new File([ie], Ce, { type: "image/png" }), Ee = new FormData();
      Ee.append("image", Ne), Ee.append("type", "temp"), Ee.append("overwrite", "true");
      const Be = await te.fetchApi("/upload/image", {
        method: "POST",
        body: Ee
      });
      return Be.ok ? (await Be.json()).name : null;
    } catch (P) {
      return console.error("[Meld] Error uploading mask:", P), null;
    } finally {
      O(!1);
    }
  }, de = async () => {
    if (!o) return;
    const P = await B();
    P && i(o, P) && (r(), a({ type: "CLOSE_VIEWER" }), n == null || n());
  }, V = async () => {
    if (!o) return;
    const P = await B();
    P && a({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [o],
        maskFilename: P,
        onSuccess: n
      }
    });
  }, re = p.useMemo(
    () => E && !og(E),
    [E]
  );
  return o ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: T,
      onMouseUp: C,
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (P) => P.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ l.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: r, type: "button", children: /* @__PURE__ */ l.jsx(ge, { size: 20 }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${y === "rect" ? "active" : ""}`,
                    onClick: () => _("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Eu, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${y === "ellipse" ? "active" : ""}`,
                    onClick: () => _("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Kp, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${y === "lasso" ? "active" : ""}`,
                    onClick: () => _("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Zp, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Lasso" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  ref: d,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: L,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ l.jsx(
                      "img",
                      {
                        ref: m,
                        src: nt(o),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (P) => P.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ l.jsx(
                      "canvas",
                      {
                        ref: c,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (P) => P.preventDefault()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-mask-editor-hint", children: "Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: de,
                      disabled: !re || N,
                      type: "button",
                      children: [
                        N ? /* @__PURE__ */ l.jsx(nc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Wo, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: V,
                      disabled: !re || N,
                      type: "button",
                      children: [
                        N ? /* @__PURE__ */ l.jsx(nc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Qr, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: $,
                      disabled: W.length <= 1 || N,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ l.jsx(fh, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: M,
                      disabled: !re || N,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ l.jsx(ge, { size: 16 }),
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
}, ig = () => {
  const { state: e, dispatch: t, updateSetting: n } = xe(), [r, s] = p.useState("Gallery"), [a, o] = p.useState({
    ...e.settings
  }), [i, c] = p.useState(
    {}
  ), [d, m] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, w] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, y] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, S] = p.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, u] = p.useState(e.settings["gallery.trash_retention_days"].toString()), [h, g] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [k, b] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [j, N] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [O, D] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    I,
    W
  ] = p.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    X,
    E
  ] = p.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [z, R] = p.useState(
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
      const V = Object.keys(a).filter(
        (re) => a[re] !== e.settings[re] && !i[re]
      );
      if (V.length > 0)
        for (const re of V)
          await n(re, a[re]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (V, re) => {
      o((P) => ({
        ...P,
        [V]: !re
      }));
    },
    handleNumberChange: (V, re, P, U) => {
      V === "gallery.initial_load_count" ? m(re) : V === "gallery.max_load_count" ? w(re) : V === "gallery.lineage_max_depth" ? y(re) : V === "viewer.thumbnail_window_size" ? S(re) : V === "gallery.trash_retention_days" ? u(re) : V === "gallery.auto_link_phash_threshold" ? g(re) : V === "gallery.suggest_phash_threshold" ? b(re) : V === "viewer.details.max_positive_prompt_lines" ? N(re) : V === "viewer.details.max_negative_prompt_lines" ? D(re) : V === "fullscreen.details.max_positive_prompt_lines" ? W(re) : V === "fullscreen.details.max_negative_prompt_lines" ? E(re) : V === "sidebar.thumbnail_size" && R(re);
      const H = Number.parseInt(re, 10);
      if (!Number.isNaN(H)) {
        let G = H;
        P !== void 0 && G < P && (G = P), U !== void 0 && G > U && (G = U), o((Q) => ({
          ...Q,
          [V]: G
        }));
      }
    },
    handleNumberBlur: (V) => {
      V.key === "gallery.initial_load_count" ? m(
        a["gallery.initial_load_count"].toString()
      ) : V.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : V.key === "gallery.lineage_max_depth" ? y(
        a["gallery.lineage_max_depth"].toString()
      ) : V.key === "viewer.thumbnail_window_size" ? S(
        a["viewer.thumbnail_window_size"].toString()
      ) : V.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : V.key === "gallery.auto_link_phash_threshold" ? g(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : V.key === "gallery.suggest_phash_threshold" ? b(
        a["gallery.suggest_phash_threshold"].toString()
      ) : V.key === "viewer.details.max_positive_prompt_lines" ? N(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : V.key === "viewer.details.max_negative_prompt_lines" ? D(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_positive_prompt_lines" ? W(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : V.key === "fullscreen.details.max_negative_prompt_lines" ? E(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : V.key === "sidebar.thumbnail_size" && R(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o((V) => ({
        ...V,
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
    validateShortcut: (V) => V.trim() ? V.trim().split(/\s+/).every((P) => !!(P === "next" || P === "prev" || P === "delete" || P.startsWith("tag:") && P.length > 4 || P.startsWith("-tag:") && P.length > 5 || P.startsWith("tag-toggle:") && P.length > 11)) : !0,
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: h,
    suggestPhashThresholdInput: k,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: O,
    fullscreenMaxPositivePromptLinesInput: I,
    fullscreenMaxNegativePromptLinesInput: X,
    thumbnailSizeInput: z
  };
}, q = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), cg = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.delete_mode": i.target.value
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
      q,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.small_image_mode": i.target.value
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
      q,
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
      q,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_filename": i.target.value
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
      q,
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
      q,
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
      q,
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
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Model",
        description: "Display model name in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
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
      q,
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
            onChange: (i) => r(
              "fullscreen.details.max_positive_prompt_lines",
              i.target.value,
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
      q,
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
      q,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_user_notes": i.target.value
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
      q,
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
            onChange: (i) => r(
              "fullscreen.details.max_negative_prompt_lines",
              i.target.value,
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
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Tags",
        description: "Display tags in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
function Ru() {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      "path",
      {
        d: "M18 16.6v2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ l.jsx(
      "path",
      {
        d: "M16.6 18h2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ l.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function zu(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Ou(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Au(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Fu(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx(Ru, {})
  ] });
}
function Wu(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function $u(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ l.jsx(Ru, {})
  ] });
}
function Uu(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Qu(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Vu(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 15h6" })
  ] });
}
function Bu(e) {
  return /* @__PURE__ */ l.jsxs(Lt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Hu = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: zu
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Wu
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: $u
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Au },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Fu
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Ou
  },
  { id: "edit_tags", label: "Edit Tags", icon: Qu },
  { id: "edit_notes", label: "Edit Notes", icon: Vu },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Uu
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Bu
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Ut }
], dg = ({
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
      q,
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
            onChange: (c) => r(
              "sidebar.thumbnail_size",
              c.target.value,
              50,
              500
            ),
            onBlur: () => s({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
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
      q,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources).",
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
      q,
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
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Model",
        description: "Display the model name on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Positive",
        description: "Display the positive prompt on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Negative",
        description: "Display the negative prompt on the card.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show User Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ l.jsxs(
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
        )
      }
    ),
    /* @__PURE__ */ l.jsx(q, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "List Behavior" }),
    /* @__PURE__ */ l.jsx(
      q,
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
            onChange: (c) => r(
              "gallery.initial_load_count",
              c.target.value,
              10,
              1e3
            ),
            onBlur: () => s({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
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
            onChange: (c) => r(
              "gallery.max_load_count",
              c.target.value,
              10,
              1e6
            ),
            onBlur: () => s({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((c) => /* @__PURE__ */ l.jsx(
      q,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ l.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((m) => ({
              ...m,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Hu.map((d) => /* @__PURE__ */ l.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), ug = ({
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
        " (Add tag and move to next)"
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
        q,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[c] ? "meld-text-input--error" : ""}`,
              value: e[c] || "",
              onChange: (m) => {
                t((v) => ({
                  ...v,
                  [c]: m.target.value
                }));
              },
              onBlur: () => {
                const m = s(
                  e[c] || ""
                );
                r((v) => ({
                  ...v,
                  [c]: !m
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ l.jsx(
        q,
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
      q,
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
}, fg = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: s,
  handleViewTrash: a,
  lineageMaxDepthInput: o,
  trashRetentionDaysInput: i,
  autoLinkPhashThresholdInput: c,
  suggestPhashThresholdInput: d
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (m) => s((v) => ({
              ...v,
              "gallery.matching_strategy": m.target.value
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
      q,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 0,
            max: 100,
            onChange: (m) => t(
              "gallery.auto_link_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: d,
            min: 0,
            max: 100,
            onChange: (m) => t(
              "gallery.suggest_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Lineage" }),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 10,
            onChange: (m) => t(
              "gallery.lineage_max_depth",
              m.target.value,
              1,
              10
            ),
            onBlur: () => n({ key: "gallery.lineage_max_depth" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 0,
            max: 365,
            onChange: (m) => t(
              "gallery.trash_retention_days",
              m.target.value,
              0,
              365
            ),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
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
] }), mg = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: o,
  maxNegativePromptLinesInput: i
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ l.jsx(
      q,
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
      q,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.small_image_mode": c.target.value
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
      q,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
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
            onChange: (c) => r(
              "viewer.thumbnail_window_size",
              c.target.value,
              1,
              1e4
            ),
            onBlur: () => s({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.delete_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ l.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ l.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ l.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ l.jsx(
      q,
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
      q,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_filename": c.target.value
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
      q,
      {
        label: "Show Dimensions",
        description: "Display dimensions in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
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
      q,
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
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Model",
        description: "Display model name in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
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
      q,
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
            onChange: (c) => r(
              "viewer.details.max_positive_prompt_lines",
              c.target.value,
              1,
              100
            ),
            onBlur: () => s({
              key: "viewer.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
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
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_user_notes": c.target.value
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
      q,
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
            onChange: (c) => r(
              "viewer.details.max_negative_prompt_lines",
              c.target.value,
              1,
              100
            ),
            onBlur: () => s({
              key: "viewer.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      q,
      {
        label: "Show Tags",
        description: "Display tags in the details panel.",
        children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ l.jsx(
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
          /* @__PURE__ */ l.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] }), Ku = () => {
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
    handleResetShortcuts: m,
    handleViewTrash: v,
    validateShortcut: w,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: y,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: h,
    maxPositivePromptLinesInput: g,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: b,
    fullscreenMaxNegativePromptLinesInput: j,
    thumbnailSizeInput: N
  } = ig();
  rt({ onEscape: o });
  const O = p.useRef(!1), D = (E) => {
    E.target === E.currentTarget && (O.current = !0);
  }, I = (E) => {
    E.target === E.currentTarget && O.current && o(), O.current = !1;
  }, W = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], X = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          fg,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: h
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          dg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: N,
            initialLoadCountInput: x,
            maxLoadCountInput: y
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          mg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: S,
            maxPositivePromptLinesInput: g,
            maxNegativePromptLinesInput: k
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          cg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: b,
            maxNegativePromptLinesInput: j
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          ug,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: s,
            setShortcutErrors: a,
            validateShortcut: w,
            handleToggle: i,
            handleResetShortcuts: m
          }
        );
      default:
        return null;
    }
  };
  return ve.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: D,
        onMouseUp: I,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (E) => E.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ l.jsx("div", { className: "meld-tabs", children: W.map((E) => /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === E.id ? "active" : ""}`,
                    onClick: () => t(E.id),
                    children: E.label
                  },
                  E.id
                )) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: X() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, kt = "none", Gu = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: s, refreshImages: a } = xe(), [o, i] = p.useState([]), [c, d] = p.useState(t), [m, v] = p.useState(""), [w, x] = p.useState(!0), [y, _] = p.useState(!1), S = p.useRef(null), f = e.length > 1, u = p.useRef(!1), h = (I) => {
    I.target === I.currentTarget && (u.current = !0);
  }, g = (I) => {
    I.target === I.currentTarget && u.current && n(), u.current = !1;
  }, k = p.useCallback(async () => {
    x(!0);
    try {
      const I = await Vo();
      i(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      x(!1);
    }
  }, []);
  p.useEffect(() => {
    k();
  }, [k]), p.useEffect(() => {
    S.current && S.current.focus();
  }, []), rt({ onEscape: n });
  const b = p.useMemo(() => o.filter(
    (I) => I.name.toLowerCase().includes(m.toLowerCase()) && !c.includes(I.name)
  ), [o, m, c]), j = (I) => {
    const W = I.trim();
    if (W.toLowerCase() === kt) {
      alert(
        `Tag name '${kt}' is reserved for search and cannot be used.`
      );
      return;
    }
    W && !c.includes(W) && (d([...c, W]), v(""));
  }, N = (I) => {
    d(c.filter((W) => W !== I));
  }, O = async () => {
    _(!0);
    try {
      if (f) {
        const I = c.filter((X) => !t.includes(X)), W = t.filter(
          (X) => !c.includes(X)
        );
        await Ua(e, I, W);
      } else
        await _h(e[0], c);
      await a(), s({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (I) {
      console.error("Failed to update tags:", I), alert("Failed to update tags.");
    } finally {
      _(!1);
    }
  }, D = (I) => {
    I.key === "Enter" && m.trim() && (I.preventDefault(), I.stopPropagation(), j(m.trim()));
  };
  return ve.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: h,
        onMouseUp: g,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (I) => I.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(rr, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(ge, { size: 20 }) })
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
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((I) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                I,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => N(I),
                    children: /* @__PURE__ */ l.jsx(ge, { size: 12 })
                  }
                )
              ] }, I)) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ l.jsx(jn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: m,
                    onChange: (I) => v(I.target.value),
                    onKeyDown: D
                  }
                ),
                m.trim() && !c.includes(m.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => j(m),
                    children: [
                      /* @__PURE__ */ l.jsx(ys, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? m ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : b.map((I) => /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => j(I.name),
                  children: I.name
                },
                I.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: O,
                disabled: y,
                children: y ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, qu = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return oe(e);
}, Yu = async (e) => {
  const t = await te.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return oe(t);
}, vs = (e, t) => {
  const n = p.useCallback(async (x) => {
    try {
      const y = await Sh(x.id);
      return y.workflow ? (await window.app.loadGraphData(
        y.workflow
      ), J.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (y) {
      return J.error("Error restoring workflow:", y), alert("Failed to restore workflow."), !1;
    }
  }, []), r = p.useCallback(async (x) => {
    try {
      const y = await jh(x.id), _ = y.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", S = window.app, u = window.LiteGraph.createNode(_);
      if (!u)
        return console.error(`Node type ${_} not found.`), alert(
          `Node type ${_} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const h = y.is_flux ? {
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
        for (const [j, N] of Object.entries(h)) {
          const O = y[j];
          if (O != null && O !== "") {
            const D = u.widgets.find(
              (I) => I.name === N
            );
            D && (D.value = O);
          }
        }
        const b = u.widgets.find(
          (j) => j.name === "control_after_generate"
        );
        b && (b.value = "fixed");
      }
      const g = S.canvas.ds.offset, k = S.canvas.ds.scale;
      return u.pos = [(-g[0] + 400) / k, (-g[1] + 300) / k], S.graph.add(u), S.canvas.selectNode(u), S.canvas.centerOnNode(u), !0;
    } catch (y) {
      return console.error("Error adding Unified Loader:", y), alert("Failed to load settings."), !1;
    }
  }, []), s = p.useCallback(
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
  ), a = p.useCallback(
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
  ), o = p.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), i = p.useCallback(
    (x) => {
      const y = window.app;
      if (!(y != null && y.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const _ = (u) => {
        if (!u) return !1;
        const h = u.replace(/\s+/g, "").toLowerCase();
        return h === "meldimageloader" || h === "loadimage";
      }, S = y.graph._nodes.filter(
        (u) => _(u.type)
      );
      if (S.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (S.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: x,
            nodes: S.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              Br(x, u);
            }
          }
        }), !0;
      const f = Br(x);
      return f.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: f.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = p.useCallback(
    (x) => {
      const y = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: y }
      });
    },
    [t]
  ), d = p.useCallback(
    async (x, y = "run") => {
      var _;
      if (console.log("[Meld] handleRunWithMask called", x, y), y === "apply") {
        const S = window.app, f = ((_ = S == null ? void 0 : S.graph) == null ? void 0 : _._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          f.map((g) => ({
            id: g.id,
            type: g.type
          }))
        );
        const u = f.some(
          (g) => g.type === "LoadImageMask"
        ), h = f.some(
          (g) => g.type === "MeldImageLoader" || g.type === "LoadImage" || g.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: u, hasLoaderNode: h }), !u || !h) {
          const g = [];
          h || g.push("'Meld Image Loader'"), u || g.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${g.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else
        try {
          if (!(await qu()).some(
            (u) => u.valid && u.mask_count === 1
          )) {
            t({
              type: "OPEN_MODAL",
              payload: {
                type: "error",
                message: "No workflows found with exactly one 'Load Image (as Mask)' node. Please save a compatible workflow first."
              }
            });
            return;
          }
        } catch (S) {
          console.error("[Meld] Error checking workflows:", S);
        }
      t({
        type: "OPEN_MODAL",
        payload: { type: "mask_editor", imageId: x.id, mode: y }
      });
    },
    [t]
  ), m = p.useCallback(
    async (x, y) => {
      try {
        const _ = x.id, f = (await Qo([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: f }), y == null || y();
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    [t]
  ), v = p.useCallback(
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
    async (x, y) => {
      try {
        const _ = await kh(
          x,
          y
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
    handleEditTags: s,
    handleEditSource: o,
    handleSendToWorkflow: i,
    handleRunWithWorkflow: c,
    handleRunWithMask: d,
    handleRestore: m,
    handleDelete: v,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, Xu = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = xe(), { handleUpdateUserNotes: a } = vs(r, s), [o, i] = p.useState(t), [c, d] = p.useState(!1), m = p.useRef(null), v = p.useRef(!1), w = (_) => {
    _.target === _.currentTarget && (v.current = !0);
  }, x = (_) => {
    _.target === _.currentTarget && v.current && n(), v.current = !1;
  };
  p.useEffect(() => {
    m.current && m.current.focus();
  }, []);
  const y = p.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (_) {
      console.error("Failed to update notes:", _), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return p.useEffect(() => {
    const _ = (S) => {
      S.key === "Enter" && (S.ctrlKey || S.metaKey) && S.target === m.current && (S.preventDefault(), S.stopPropagation(), S.stopImmediatePropagation(), y());
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => {
      window.removeEventListener("keydown", _, {
        capture: !0
      });
    };
  }, [y]), rt({ onEscape: n }), ve.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(ch, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(ge, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ l.jsx(
              "textarea",
              {
                ref: m,
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
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: y,
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
}, Ju = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = xe(), s = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  rt({ onEscape: s });
  const a = p.useRef(!1), o = p.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = p.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && s(), a.current = !1;
    },
    [s]
  );
  return ve.createPortal(
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
                    children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
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
                      "Multiple loader nodes found in the current workflow. Select which one to use for ",
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
                      /* @__PURE__ */ l.jsx(Qr, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: s,
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
}, Zu = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var R;
  const { dispatch: s } = xe(), [a, o] = p.useState([]), [i, c] = p.useState(!0), [d, m] = p.useState(null), [v, w] = p.useState(!1), [x, y] = p.useState(null), [_, S] = p.useState({}), [f, u] = p.useState({}), [h, g] = p.useState(""), k = p.useRef(null), b = p.useMemo(() => a.map((T) => {
    let C = T.valid, L = T.reason;
    return r && T.mask_count === 0 && (C = !1, L = "No 'Load Image (as Mask)' node found."), { ...T, valid: C, reason: L };
  }).sort((T, C) => T.valid !== C.valid ? T.valid ? -1 : 1 : T.name.localeCompare(C.name)), [a, r]), j = p.useMemo(() => {
    if (!h.trim()) return b;
    const T = h.toLowerCase();
    return b.filter(
      (C) => C.name.toLowerCase().includes(T)
    );
  }, [b, h]), N = p.useCallback(async () => {
    try {
      c(!0);
      const T = await qu();
      o(T), m(null);
    } catch (T) {
      m(T instanceof Error ? T.message : String(T));
    } finally {
      c(!1);
    }
  }, []);
  p.useEffect(() => {
    N();
  }, [N]), p.useEffect(() => {
    !i && k.current && k.current.focus();
  }, [i]);
  const O = p.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]);
  rt({ onEscape: O });
  const D = p.useRef(!1), I = p.useCallback((T) => {
    T.target === T.currentTarget && (D.current = !0);
  }, []), W = p.useCallback(
    (T) => {
      T.target === T.currentTarget && D.current && O(), D.current = !1;
    },
    [O]
  ), X = async (T, C) => {
    if (!v)
      try {
        w(!0), await t(T, C), n == null || n(), O();
      } catch (L) {
        m(L instanceof Error ? L.message : String(L)), w(!1);
      }
  }, E = async (T) => {
    if (!(_[T] || f[T]))
      try {
        u((M) => ({ ...M, [T]: !0 }));
        const C = await Yu(T), L = [], $ = (M) => {
          if (!M) return !1;
          const B = M.replace(/\s+/g, "").toLowerCase();
          return r ? B === "loadimagemask" : B === "meldimageloader" || B === "loadimage";
        };
        if (C.nodes && Array.isArray(C.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            C.nodes.length
          );
          for (const M of C.nodes)
            $(M.type) && (console.log(
              "[Meld] Found target node (UI):",
              M.id,
              M.type,
              M.title
            ), L.push({
              id: String(M.id),
              type: M.type || "",
              title: M.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const M in C) {
            const B = C[M];
            B && typeof B == "object" && $(B.class_type) && (console.log(
              "[Meld] Found target node (API):",
              M,
              B.class_type
            ), L.push({
              id: M,
              type: B.class_type || ""
            }));
          }
        }
        L.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), S((M) => ({ ...M, [T]: L }));
      } catch (C) {
        console.error("Failed to fetch workflow nodes:", C);
      } finally {
        u((C) => ({ ...C, [T]: !1 }));
      }
  }, z = (T) => {
    if (!T.valid || v) return;
    if ((r ? T.mask_count : T.loader_count + T.load_image_count) <= 1) {
      X(T.name);
      return;
    }
    x === T.name ? y(null) : (y(T.name), E(T.name));
  };
  return ve.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: W,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (T) => T.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Uo, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: O,
                    children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ l.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ l.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ l.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ l.jsx(_u, { size: 20 }),
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
                      /* @__PURE__ */ l.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (R = e[0]) == null ? void 0 : R.filename }),
                      ". Workflows must have at least one",
                      " ",
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
                /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    className: "meld-tag-search-container",
                    style: { marginBottom: "12px" },
                    children: [
                      /* @__PURE__ */ l.jsx(jn, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          ref: k,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: h,
                          onChange: (T) => g(T.target.value)
                        }
                      ),
                      h && /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var T;
                            g(""), (T = k.current) == null || T.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ l.jsx(ge, { size: 14 })
                        }
                      )
                    ]
                  }
                ),
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
                ) : j.map((T) => {
                  const C = r ? T.mask_count : T.loader_count + T.load_image_count, L = x === T.name, $ = _[T.name] || [], M = f[T.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${T.valid ? "" : "meld-workflow-item--invalid"} ${L ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => z(T),
                        title: T.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__name", children: T.name }),
                            !T.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__reason", children: T.reason }),
                            T.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__supports", children: C > 1 ? `Multiple loaders found (${C})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${T.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          T.valid && C <= 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (B) => {
                                B.stopPropagation(), X(T.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(Qr, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          T.valid && C > 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (B) => {
                                B.stopPropagation(), z(T);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                L ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  $o,
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
                    L && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: M ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: $.map((B) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => X(T.name, B.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: B.title || B.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                B.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(Qr, { size: 12 })
                          ]
                        },
                        B.id
                      )) })
                    ] }) })
                  ] }, T.name);
                })
              ] }) }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: O,
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
}, ef = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, s) => {
    var x, y, _, S, f, u, h;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: s
    });
    const a = await Yu(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = s || null, i = null, c = !1;
    const d = (g) => {
      if (!g) return !1;
      const k = g.replace(/\s+/g, "");
      return k === "MeldImageLoader" || k === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const k = a.nodes.find(
          (b) => d(b.type)
        );
        k && (o = String(k.id));
      }
      const g = a.nodes.find(
        (k) => {
          var b;
          return ((b = k.type) == null ? void 0 : b.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      g && (i = String(g.id));
    } else {
      if (!o)
        for (const g in a) {
          const k = a[g];
          if (d(k.class_type)) {
            o = g;
            break;
          }
        }
      for (const g in a)
        if (((x = a[g].class_type) == null ? void 0 : x.replace(/\s+/g, "")) === "LoadImageMask") {
          i = g;
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
    let m = n.filename;
    if (n.subfolder && (m = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (m = `${m} [${n.type}]`), c) {
      const g = window.app, k = t.replace(/\.json$/i, "");
      let b = !1;
      const j = document.querySelectorAll(".workflow-tab");
      for (const D of Array.from(j)) {
        const I = D.querySelector(".workflow-label"), W = ((y = I == null ? void 0 : I.textContent) == null ? void 0 : y.trim()) || ((_ = D.textContent) == null ? void 0 : _.trim()) || "";
        if (W === k || W === t || W.startsWith(`${k} `) || W.startsWith(`${k}•`)) {
          D.click(), b = !0;
          break;
        }
      }
      b || await g.loadGraphData(a, !0, !0, t), await new Promise((D) => setTimeout(D, 200));
      const N = g.graph._nodes;
      console.log("[Meld] Active graph nodes count:", N.length);
      const O = N.find(
        (D) => String(D.id) === o || d(D.type)
      );
      if (O) {
        const D = (S = O.widgets) == null ? void 0 : S.find((I) => I.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: O.id,
          type: O.type,
          imagePath: m
        }), D && (D.value = m, typeof D.callback == "function" && D.callback(m));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const D = N.find(
          (I) => {
            var W;
            return String(I.id) === i || ((W = I.type) == null ? void 0 : W.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: D == null ? void 0 : D.id,
          maskFilename: r
        }), D) {
          const I = (f = D.widgets) == null ? void 0 : f.find(
            (X) => X.name === "image"
          );
          I && (I.value = `${r} [temp]`);
          const W = (u = D.widgets) == null ? void 0 : u.find(
            (X) => X.name === "channel"
          );
          W && (W.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      g.graph.setDirtyCanvas(!0, !0);
      try {
        await g.queuePrompt(0);
        return;
      } catch (D) {
        throw console.error("Failed to queue workflow:", D), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const v = JSON.parse(JSON.stringify(a));
    v[o].inputs.image = m, r && i && (v[i].inputs.image = `${r} [temp]`, v[i].inputs.channel = "red");
    const w = await te.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: te.clientId
      })
    });
    if (!w.ok) {
      const g = await w.json();
      throw new Error(((h = g.error) == null ? void 0 : h.message) || "Failed to queue workflow");
    }
    return await w.json();
  },
  []
) }), tf = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: s, dispatch: a } = xe(), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = p.useMemo(
    () => s.searchQuery.toLowerCase().includes("has_derivatives:yes") || s.searchQuery.toLowerCase().includes("has_derivatives:true") || s.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [s.searchQuery]
  ), c = p.useMemo(
    () => s.viewerMode === "lineage" && s.lineageImages.length > 0 ? s.lineageImages : s.images.filter(
      (f) => f.exists !== !1 && (s.settings["gallery.show_parent_images"] || !f.has_children || i)
    ),
    [
      s.viewerMode,
      s.lineageImages,
      s.images,
      s.settings,
      i
    ]
  ), d = p.useRef(s.viewerImageId);
  p.useEffect(() => {
    d.current = s.viewerImageId;
  }, [s.viewerImageId]);
  const m = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  rt({ onEscape: m });
  const v = p.useRef(!1), w = p.useCallback((f) => {
    f.target === f.currentTarget && (v.current = !0);
  }, []), x = p.useCallback(
    (f) => {
      f.target === f.currentTarget && v.current && m(), v.current = !1;
    },
    [m]
  ), y = p.useCallback(
    (f) => {
      if (!o.current) return;
      const u = d.current;
      if (u === null || !f.has(u))
        return;
      const h = c.findIndex(
        (k) => k.id === u
      );
      if (h === -1) return;
      let g = !1;
      for (let k = h + 1; k < c.length; k++)
        if (!f.has(c[k].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: c[k].id, mode: s.viewerMode }
          }), g = !0;
          break;
        }
      if (!g) {
        for (let k = h - 1; k >= 0; k--)
          if (!f.has(c[k].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: c[k].id, mode: s.viewerMode }
            }), g = !0;
            break;
          }
      }
      g || a({ type: "CLOSE_VIEWER" });
    },
    [s.viewerMode, c, a]
  ), _ = async () => {
    var f, u;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const h = new Set(e), g = c.filter(
        (k) => h.has(k.id)
      );
      if (y(h), await Wa(e, n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((u = (f = s.activeModal).onSuccess) == null || u.call(f)), !n && r && r(g), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (h) {
      a({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, S = async () => {
    var f, u;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const h = new Set(e);
      for (const k of e) {
        const b = await $a(k);
        if (!o.current) return;
        for (const j of b)
          h.add(j.id);
      }
      const g = c.filter(
        (k) => h.has(k.id)
      );
      if (y(h), await Wa(Array.from(h), n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((u = (f = s.activeModal).onSuccess) == null || u.call(f)), !n && r && r(g), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(h)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (h) {
      a({
        type: "SET_ERROR",
        payload: h instanceof Error ? h.message : String(h)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return ve.createPortal(
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
            onClick: (f) => f.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Ut, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: m,
                    children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
                  }
                )
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
                      "Are you sure you want to",
                      " ",
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
                            $p,
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
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn-secondary",
                    onClick: m,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: _,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: S,
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
}, nf = ({ message: e }) => {
  const { dispatch: t } = xe(), n = p.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return rt({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(_u, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ l.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsx(
      "div",
      {
        style: { padding: "20px 0", textAlign: "center", fontSize: "14px" },
        children: e
      }
    ) }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
      "button",
      {
        className: "meld-btn meld-btn-primary",
        onClick: n,
        type: "button",
        children: "OK"
      }
    ) })
  ] }) });
}, rf = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = xe(), [s, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(!1), m = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  rt({ onEscape: m });
  const v = p.useRef(!1), w = (b) => {
    b.target === b.currentTarget && (v.current = !0);
  }, x = (b) => {
    b.target === b.currentTarget && v.current && m(), v.current = !1;
  }, y = t.images.find((b) => b.id === e), _ = p.useCallback(async () => {
    i(!0);
    try {
      const b = t.settings["gallery.suggest_phash_threshold"], j = await xh(e, b);
      a(j);
    } catch (b) {
      console.error("Failed to load suggestions:", b);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  p.useEffect(() => {
    _();
  }, [_]);
  const S = async (b) => {
    if (b == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || b === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await rc(e, b), await Mu(e), await r(), m();
      } catch (j) {
        console.error("Failed to link parent:", j);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await rc(e, null), await r(), m();
      } catch (b) {
        console.error("Failed to remove source:", b), alert("Failed to remove source image.");
      }
  }, u = async (b) => {
    i(!0);
    try {
      const j = await Xh(b), { id: N } = await Iu({
        filename: j.name,
        subfolder: j.subfolder || "",
        type: j.type || "input"
      });
      if (N === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await S(N);
    } catch (j) {
      console.error("Failed to upload/register image:", j);
    } finally {
      i(!1);
    }
  }, h = (b) => {
    b.preventDefault(), b.stopPropagation(), d(!1);
    const j = b.dataTransfer.files[0];
    j != null && j.type.startsWith("image/") && u(j);
  };
  if (!y) return null;
  const g = s.filter((b) => b.is_source_match), k = s.filter((b) => !b.is_source_match);
  return ve.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (b) => b.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("h2", { children: [
              "Select Source for #",
              y.id
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: m,
                children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            y.parent_id && /* @__PURE__ */ l.jsxs(
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
                        /* @__PURE__ */ l.jsx(nh, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    y.parent_filename && /* @__PURE__ */ l.jsx(
                                      "img",
                                      {
                                        src: nt({
                                          filename: y.parent_filename,
                                          subfolder: y.parent_subfolder || "",
                                          type: y.parent_type || "output"
                                        }),
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
                                              children: y.parent_filename || "Unknown Image"
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
                                                y.parent_id
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
                      onClick: f,
                      title: "Remove Source",
                      children: /* @__PURE__ */ l.jsx(th, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (b) => {
                  b.preventDefault(), b.stopPropagation(), d(!0);
                },
                onDragOver: (b) => {
                  b.preventDefault(), b.stopPropagation(), b.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (b) => {
                  b.preventDefault(), b.stopPropagation(), d(!1);
                },
                onDrop: h,
                children: [
                  /* @__PURE__ */ l.jsx(mh, { size: 32 }),
                  /* @__PURE__ */ l.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ l.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestions-container", children: [
              g.length > 0 && /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: g.map((b) => {
                  const j = b.id === y.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${j ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !j && S(b.id),
                      style: {
                        cursor: j ? "default" : "pointer",
                        ...j ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: nt(b), alt: b.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: b.filename }),
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
                    b.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Visual Matches (pHash)" }),
                k.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: k.map((b) => {
                  const j = b.id === y.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${j ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !j && S(b.id),
                      style: {
                        cursor: j ? "default" : "pointer",
                        ...j ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: nt(b), alt: b.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: b.filename }),
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
                                  "Match:",
                                  " ",
                                  Math.round((64 - b.distance) / 64 * 100),
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
                    b.id
                  );
                }) }) : /* @__PURE__ */ l.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, pg = () => {
  const { state: e, dispatch: t } = xe(), { executeWorkflow: n } = ef();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
      Zu,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename,
        onExecute: async (r, s) => {
          if (e.activeModal.type === "workflow_selection") {
            const a = e.activeModal.maskFilename, o = e.activeModal.onSuccess;
            for (const i of e.activeModal.images)
              await n(
                r,
                i,
                a,
                s
              );
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
      Ju,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && Br(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && ve.createPortal(
      /* @__PURE__ */ l.jsx(rf, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && ve.createPortal(/* @__PURE__ */ l.jsx(Du, {}), document.body),
    e.activeModal.type === "settings" && ve.createPortal(/* @__PURE__ */ l.jsx(Ku, {}), document.body),
    e.activeModal.type === "tag_edit" && ve.createPortal(
      /* @__PURE__ */ l.jsx(
        Gu,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ve.createPortal(
      /* @__PURE__ */ l.jsx(nf, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && ve.createPortal(
      /* @__PURE__ */ l.jsx(
        tf,
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
    e.activeModal.type === "mask_editor" && ve.createPortal(
      /* @__PURE__ */ l.jsx(
        Pu,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && ve.createPortal(
      /* @__PURE__ */ l.jsx(
        Xu,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && ve.createPortal(
      /* @__PURE__ */ l.jsx(
        rg,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, lf = (e, t) => {
  const n = p.useCallback(
    (r) => {
      const s = t["gallery.lineage_max_depth"];
      if (s === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, s).map((d) => ({
          id: d.id,
          imgSrc: nt(d)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((d) => d.id === a);
      let i = null;
      if (o ? i = nt(o) : i = nt({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !i) return [];
      const c = {
        id: a || null,
        imgSrc: i
      };
      if (o && s > 1) {
        const d = n(o);
        return [c, ...d].slice(0, s);
      }
      return [c];
    },
    [t, e]
  );
  return { getParentChain: n };
}, sf = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = xe(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: m,
    handleRunWithWorkflow: v,
    handleRunWithMask: w,
    handleRestore: x,
    handleDelete: y,
    handleEditNotes: _,
    handleUpdateUserNotes: S
  } = vs(t, n), { getParentChain: f } = lf(t.images, t.settings), [u, h] = p.useState(null), [g, k] = p.useState(!1), [b, j] = p.useState(null), [N, O] = p.useState(!1), D = p.useRef(null), I = async (Q, ie, fe = !1) => {
    try {
      await navigator.clipboard.writeText(Q), fe ? (O(!0), setTimeout(() => O(!1), 2e3)) : (j(ie), setTimeout(() => j(null), 2e3));
    } catch (Ce) {
      console.error("Failed to copy text: ", Ce);
    }
  };
  p.useEffect(() => {
    const Q = (fe) => {
      fe.key === "Escape" && (u ? h(null) : k(!1));
    }, ie = (fe) => {
      D.current && !D.current.contains(fe.target) && k(!1);
    };
    return window.addEventListener("keydown", Q), g && document.addEventListener("mousedown", ie), () => {
      window.removeEventListener("keydown", Q), document.removeEventListener("mousedown", ie);
    };
  }, [g, u]);
  const W = f(e), E = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, z = nt(e);
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: u,
    setPopupContent: h,
    isMenuOpen: g,
    setIsMenuOpen: k,
    copiedLabel: b,
    popupCopied: N,
    menuRef: D,
    parentChain: W,
    displayFilename: E,
    imgSrc: z,
    handleCopy: I,
    handleClick: (Q) => {
      Q.shiftKey ? (Q.preventDefault(), Q.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Q.ctrlKey || Q.metaKey || t.selectedIds.size > 0 ? (Q.preventDefault(), Q.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (Q) => {
      Q.preventDefault(), Q.stopPropagation(), Q.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (Q) => {
      Q.shiftKey ? (Q.preventDefault(), Q.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Q.ctrlKey || Q.metaKey || t.selectedIds.size > 0 ? (Q.preventDefault(), Q.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (Q.preventDefault(), Q.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (Q) => {
      Q.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !Q.shiftKey && !Q.ctrlKey && !Q.metaKey && s || (Q.shiftKey || Q.ctrlKey || Q.metaKey || t.selectedIds.size > 0) && Q.preventDefault();
    },
    handleKeyDown: (Q) => {
      var fe, Ce, Ne;
      ((fe = document.activeElement) == null ? void 0 : fe.tagName) === "INPUT" || ((Ce = document.activeElement) == null ? void 0 : Ce.tagName) === "TEXTAREA" || (Ne = document.activeElement) != null && Ne.isContentEditable || (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      m(e);
    },
    handleRestore: () => {
      x(e);
    },
    handleDelete: () => {
      y(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (Q = "run") => w(e, Q),
    handleUpdateUserNotes: (Q) => S(e.id, Q),
    fetchFullImageDetails: r
  };
}, Bo = ({
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
  onEditTags: m,
  onEditNotes: v,
  onDelete: w,
  onRestore: x,
  showRestore: y,
  deleteLabel: _,
  showQuickShortcuts: S = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: h = ""
}) => {
  const g = (j) => {
    switch (j) {
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
        return m;
      case "edit_notes":
        return v;
      case "restore_image":
        return x;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, k = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((j) => j && j !== ""), b = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: b, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${h}`,
        onClick: (j) => {
          j.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(ah, { size: u })
      }
    ),
    S && k.map((j, N) => {
      const O = Hu.find((W) => W.id === j);
      if (!O || !O.icon) return null;
      const D = O.icon, I = g(j);
      return !I || j === "restore_image" && !y ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${h}`,
          onClick: (W) => {
            W.stopPropagation(), I();
          },
          title: O.label,
          children: /* @__PURE__ */ l.jsx(D, { size: u })
        },
        `${j}-${N}`
      );
    }),
    e && /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__menu", children: [
      {
        id: "add_unified_loader",
        label: "Add Unified Loader",
        icon: zu,
        handler: s
      },
      {
        id: "send_to_workflow",
        label: "Send to Workflow",
        icon: Wu,
        handler: o
      },
      {
        id: "send_to_workflow_mask",
        label: "Send to Workflow (Mask)",
        icon: $u,
        handler: () => c("apply")
      },
      {
        id: "queue_workflow",
        label: "Queue Workflow",
        icon: Au,
        handler: i
      },
      {
        id: "queue_workflow_mask",
        label: "Queue Workflow (Mask)",
        icon: Fu,
        handler: () => c("run")
      },
      {
        id: "restore_full_workflow",
        label: "Restore Full Workflow",
        icon: Ou,
        handler: a
      },
      {
        id: "edit_tags",
        label: "Edit Tags",
        icon: Qu,
        handler: m
      },
      {
        id: "edit_notes",
        label: "Edit Notes",
        icon: Vu,
        handler: v
      },
      {
        id: "edit_source_image",
        label: "Edit Source Image",
        icon: Uu,
        handler: d
      },
      ...y ? [
        {
          id: "restore_image",
          label: "Restore Image",
          icon: Bu,
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
    ].map((j) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card__menu-item ${j.className || ""}`,
        onMouseDown: (N) => N.stopPropagation(),
        onClick: (N) => {
          N.preventDefault(), N.stopPropagation(), t(!1), setTimeout(() => j.handler(), 0);
        },
        children: [
          /* @__PURE__ */ l.jsx(j.icon, { size: 14, color: j.color }),
          /* @__PURE__ */ l.jsx("span", { children: j.label })
        ]
      },
      j.id
    )) })
  ] });
}, hg = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: s
}) => ve.createPortal(
  /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-prompt-popup-overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-prompt-popup-content",
          onClick: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-prompt-popup-header", children: [
              /* @__PURE__ */ l.jsx("span", { children: e }),
              /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                s ? /* @__PURE__ */ l.jsx(Wo, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ l.jsx(
                  Gp,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  ge,
                  {
                    className: "meld-prompt-popup-close",
                    size: 18,
                    onClick: n
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ l.jsx("div", { className: "meld-prompt-popup-text", children: t })
          ]
        }
      )
    }
  ),
  document.body
), af = qt.memo(
  ({ image: e }) => {
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
      menuRef: m,
      parentChain: v,
      displayFilename: w,
      imgSrc: x,
      handleCopy: y,
      handleClick: _,
      handleSelectToggle: S,
      handleContainerClick: f,
      handleMouseDown: u,
      handleKeyDown: h,
      handleRestoreWorkflow: g,
      handleAddUnifiedLoader: k,
      handleEditSource: b,
      handleEditTags: j,
      handleEditNotes: N,
      handleSendToWorkflow: O,
      handleRestore: D,
      handleDelete: I,
      handleRunWithWorkflow: W,
      handleRunWithMask: X,
      fetchFullImageDetails: E
    } = sf(e), [z, R] = p.useState("idle");
    p.useEffect(() => {
      e.user_notes && z === "saving" && R("idle");
    }, [e.user_notes, z]);
    const T = (C) => {
      C.stopPropagation();
      let L = String(e.id);
      r && t.selectedIds.size > 0 && (L = Array.from(t.selectedIds).join(",")), C.dataTransfer.setData("text/plain", L), pe.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: f,
        onMouseDown: u,
        onKeyDown: h,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: T,
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
                src: x,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: u,
                onClick: (C) => {
                  C.stopPropagation(), _(C);
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && w,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
                (C, L) => C.imgSrc && /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    src: C.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: ($) => {
                      $.stopPropagation(), n({
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
                  const L = await E(e.id);
                  a({
                    title: "Model",
                    text: L.model_name || "-"
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
                        const L = await E(e.id);
                        y(L.model_name || "-", "Model");
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
                  const L = await E(e.id);
                  a({
                    title: "Positive Prompt",
                    text: L.positive_prompt || L.positive || "-"
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
                        const L = await E(e.id);
                        y(
                          L.positive_prompt || L.positive || "-",
                          "Positive"
                        );
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
                  const L = await E(e.id);
                  a({
                    title: "Negative Prompt",
                    text: L.negative_prompt || L.negative || "-"
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
                        const L = await E(e.id);
                        y(
                          L.negative_prompt || L.negative || "-",
                          "Negative"
                        );
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
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((C, L) => /* @__PURE__ */ l.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: C
                    },
                    `${C}-${L}`
                  )) : /* @__PURE__ */ l.jsx(
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
                z === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (C) => {
                    C.stopPropagation(), N();
                  },
                  children: /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ l.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(
            Bo,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: m,
              settings: t.settings,
              onAddUnifiedLoader: k,
              onRestoreWorkflow: g,
              onSendToWorkflow: O,
              onRunWithWorkflow: W,
              onRunWithMask: (C) => X(C),
              onEditSource: b,
              onEditTags: j,
              onEditNotes: N,
              onRestore: D,
              showRestore: t.viewScope === "trash",
              onDelete: I,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          s && /* @__PURE__ */ l.jsx(
            hg,
            {
              title: s.title,
              text: s.text,
              onClose: () => a(null),
              onCopy: (C) => y(C, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
af.displayName = "DetailedImageCard";
const of = qt.memo(
  ({ image: e }) => {
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
      menuRef: m,
      state: v,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: x,
      handleSendToWorkflow: y,
      handleRunWithWorkflow: _,
      handleRunWithMask: S,
      handleEditSource: f,
      handleEditTags: u,
      handleEditNotes: h,
      handleDelete: g,
      handleRestore: k
    } = sf(e), b = v.viewScope === "trash", j = b ? "Delete Permanently" : "Move to Trash", N = (O) => {
      O.stopPropagation();
      let D = String(e.id);
      t && v.selectedIds.size > 0 && (D = Array.from(v.selectedIds).join(",")), O.dataTransfer.setData("text/plain", D), pe.getState().setIsOpen(!0);
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
        onDragStart: N,
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
                onMouseDown: s,
                onClick: (O) => {
                  O.stopPropagation(), o(O);
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
            Bo,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: m,
              settings: v.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: x,
              onSendToWorkflow: y,
              onRunWithWorkflow: _,
              onRunWithMask: S,
              onEditSource: f,
              onEditTags: u,
              onEditNotes: h,
              onDelete: g,
              onRestore: k,
              showRestore: b,
              deleteLabel: j,
              showQuickShortcuts: !1,
              variant: "thumbnail_overlay_top_right"
            }
          )
        ]
      }
    );
  }
);
of.displayName = "SimpleImageCard";
const gg = ({ image: e }) => {
  const { state: t } = xe();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(of, { image: e }) : /* @__PURE__ */ l.jsx(af, { image: e });
}, yg = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: s
}) => {
  const [a, o] = p.useState(!1), i = p.useRef(null);
  return p.useEffect(() => {
    const c = new IntersectionObserver(
      ([m]) => {
        m.isIntersecting && o(!0);
      },
      { rootMargin: n }
    ), d = i.current;
    return d && c.observe(d), () => {
      d && c.unobserve(d);
    };
  }, [n]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: i,
      className: r,
      style: {
        minHeight: `${t}px`,
        ...s
      },
      children: a ? e : null
    }
  );
}, vg = () => {
  const { state: e, dispatch: t } = xe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await ng(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (m) {
      console.error("Failed to cancel scan:", m);
    }
  }, s = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
  return /* @__PURE__ */ l.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ l.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : a ? /* @__PURE__ */ l.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ l.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${d}%` }
      }
    ) }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ l.jsx(Eu, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ l.jsx(Bp, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ l.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: s,
        children: "OK"
      }
    )
  ] }) });
}, wg = () => {
  const { state: e } = xe(), { slots: t, addToBucket: n } = pe();
  p.useEffect(() => {
    const r = (s) => {
      var i, c, d;
      if (((i = document.activeElement) == null ? void 0 : i.tagName) === "INPUT" || ((c = document.activeElement) == null ? void 0 : c.tagName) === "TEXTAREA" || (d = document.activeElement) != null && d.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (m) => m.shortcutKey.toLowerCase() === s.key.toLowerCase()
      );
      o && (s.preventDefault(), a.forEach((m) => {
        n(o.id, String(m));
      }), console.log(`Added ${a.size} images to slot ${o.label}`));
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, e.selectedIds]);
}, cf = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (p.useEffect(() => {
  const r = (s) => {
    s.key === "Escape" && n();
  };
  return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
}, [n]), /* @__PURE__ */ l.jsx(
  "div",
  {
    className: "meld-confirm-modal__overlay",
    onClick: n,
    onKeyDown: (r) => {
      r.key === "Enter" && n();
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
)), xg = (e, t, n, r, s) => {
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
        console.warn("move_folder action is not yet implemented"), s == null || s();
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
            type: "mask_editor",
            imageId: t[0],
            mode: "run",
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
        console.log(
          `Action ${e.type} executed on ${t.length} images`
        );
        break;
    }
}, _g = ({ config: e }) => {
  var E;
  const { buckets: t, slots: n, images: r } = pe(), s = n.length, { state: a, dispatch: o } = xe(), [i, c] = p.useState(!1), [d, m] = p.useState(!1), [v, w] = p.useState(!1), [x, y] = p.useState(e.label), [_, S] = p.useState(e.color), f = p.useRef(null), u = p.useRef(null), h = t[e.id] || [], g = h.length;
  p.useEffect(() => {
    const z = (R) => {
      u.current && !u.current.contains(R.target) && c(!1), f.current && !f.current.contains(R.target) && w(!1);
    };
    return (i || v) && document.addEventListener("mousedown", z), () => {
      document.removeEventListener("mousedown", z);
    };
  }, [i, v]);
  const k = h.map((z) => {
    const R = Number(z);
    let T = a.images.find((C) => C.id === R);
    return T || (T = a.lineageImages.find((C) => C.id === R)), T || (T = r[z]), T;
  }).filter(Boolean), b = (z) => {
    z.preventDefault(), z.stopPropagation(), z.currentTarget.classList.add("drag-over");
  }, j = (z) => {
    z.currentTarget.classList.remove("drag-over");
  }, N = (z) => {
    z.preventDefault(), z.stopPropagation(), z.currentTarget.classList.remove("drag-over");
    const R = z.dataTransfer.getData("text/plain");
    R && R.split(",").forEach((C) => {
      if (C) {
        const L = C.trim(), $ = Number(L);
        let M = a.images.find((B) => B.id === $);
        M || (M = a.lineageImages.find(
          (B) => B.id === $
        )), pe.getState().addToBucket(e.id, L, M);
      }
    });
  }, O = (z, R) => {
    z.stopPropagation(), z.dataTransfer.setData("text/plain", String(R)), z.dataTransfer.setData("application/meld-lt-source-slot", e.id), z.dataTransfer.effectAllowed = "move";
  }, D = (z, R) => {
    z.dataTransfer.dropEffect === "none" && pe.getState().removeFromBucket(e.id, String(R));
  }, I = (z) => {
    if (g === 0) return;
    const R = {
      type: z
    }, T = h.map(($) => Number($)), C = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    xg(
      R,
      T,
      k,
      o,
      () => {
        pe.getState().showToast(C[z] ?? "Done");
      }
    );
  }, W = () => {
    pe.getState().clearBucket(e.id), pe.getState().showToast(`Tab "${e.label}" cleared`), m(!1);
  }, X = () => {
    const z = pe.getState();
    z.slots.length <= 1 || (z.removeSlot(e.id), pe.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: b,
      onDragLeave: j,
      onDrop: N,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__images", children: g === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : k.map((z) => {
          const R = "type" in z ? z.type : "output", T = `/api/view?filename=${encodeURIComponent(z.filename)}&type=${R}&subfolder=${encodeURIComponent(z.subfolder || "")}`;
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-lt-slot-panel__image-wrapper",
              draggable: !0,
              onClick: () => {
                o({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: z.id,
                    mode: "lighttable",
                    slotId: e.id
                  }
                });
              },
              onDragStart: (C) => O(C, z.id),
              onDragEnd: (C) => D(C, z.id),
              children: /* @__PURE__ */ l.jsx("img", { src: T, alt: z.filename, draggable: !1 })
            },
            z.id
          );
        }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: f, children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => w(!v),
                disabled: g === 0,
                title: "Actions",
                children: [
                  "Action",
                  /* @__PURE__ */ l.jsx(Hp, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: rr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: Uo
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: ph
              },
              {
                type: "download",
                label: "Download",
                icon: Ur
              },
              {
                type: "delete",
                label: "Delete",
                icon: Ut,
                danger: !0
              }
            ].map((z) => /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${z.danger ? " meld-lt-slot__action-menu-item--danger" : ""}`,
                onMouseDown: (R) => R.stopPropagation(),
                onClick: () => {
                  w(!1), setTimeout(() => I(z.type), 0);
                },
                children: [
                  /* @__PURE__ */ l.jsx(z.icon, { size: 13 }),
                  /* @__PURE__ */ l.jsx("span", { children: z.label })
                ]
              },
              z.type
            )) })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => m(!0),
              title: "Clear Tab",
              disabled: g === 0,
              children: /* @__PURE__ */ l.jsx(qp, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: u, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ l.jsx(Nu, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: x,
                    onChange: (z) => y(z.target.value),
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
                          value: _.startsWith("var") ? ((E = _.match(
                            /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
                          )) == null ? void 0 : E[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(_) ? _ : "#9ca3af",
                          onChange: (z) => S(z.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          value: _,
                          onChange: (z) => S(z.target.value),
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
                    pe.getState().updateSlot(e.id, {
                      label: x,
                      color: _
                    }), c(!1), pe.getState().showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              s > 1 && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: X,
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
          cf,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: W,
            onCancel: () => m(!1)
          }
        )
      ]
    }
  );
}, kg = () => {
  const e = pe((t) => t.toastMessage);
  return e ? /* @__PURE__ */ l.jsx("div", { className: "meld-toast", role: "status", "aria-live": "polite", children: e }) : null;
}, Sg = () => {
  var x;
  wg();
  const { isOpen: e, slots: t, buckets: n, setIsOpen: r } = pe(), { state: s } = xe(), [a, o] = p.useState(((x = t[0]) == null ? void 0 : x.id) || "keep"), i = p.useRef(null), [c, d] = p.useState(!1);
  if (p.useEffect(() => {
    let y = document.getElementById(
      "meld-light-table-portal"
    );
    if (!y) {
      y = document.createElement("div"), y.id = "meld-light-table-portal";
      const _ = document.querySelector(".comfyui-body-bottom");
      _ ? _.appendChild(y) : document.body.appendChild(y);
    }
    return i.current = y, () => {
    };
  }, []), !e || !i.current) return null;
  const m = () => {
    const y = `slot_${Date.now().toString(36)}`;
    pe.getState().addSlot({
      id: y,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(y);
  }, v = () => {
    t.forEach((y) => {
      pe.getState().clearBucket(y.id);
    }), pe.getState().showToast("All tabs cleared"), d(!1);
  }, w = /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((y) => {
        var _;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${a === y.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => o(y.id),
            style: { "--tab-color": y.color },
            onDragOver: (S) => {
              S.preventDefault(), o(y.id);
            },
            onDrop: (S) => {
              S.preventDefault();
              const f = S.dataTransfer.getData("text/plain");
              f && f.split(",").forEach((h) => {
                if (h) {
                  const g = h.trim(), k = s.images.find(
                    (b) => String(b.id) === g
                  );
                  pe.getState().addToBucket(y.id, g, k);
                }
              });
            },
            children: [
              y.label,
              "  (",
              ((_ = n[y.id]) == null ? void 0 : _.length) || 0,
              ")"
            ]
          },
          y.id
        );
      }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__add-tab-btn",
          onClick: m,
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
          children: /* @__PURE__ */ l.jsx(ys, { size: 16 })
        }
      ),
      /* @__PURE__ */ l.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => d(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ l.jsx(dh, { size: 14 }),
            /* @__PURE__ */ l.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
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
          children: /* @__PURE__ */ l.jsx(ge, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-light-table__content", children: t.map((y) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === y.id ? "block" : "none" },
        children: /* @__PURE__ */ l.jsx(_g, { config: y })
      },
      y.id
    )) }),
    c && /* @__PURE__ */ l.jsx(
      cf,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ l.jsx(kg, {})
  ] });
  return ve.createPortal(w, i.current);
}, df = () => {
  const { state: e, refreshFavorites: t } = xe(), [n, r] = p.useState(!1), [s, a] = p.useState(null), [o, i] = p.useState(null), [c, d] = p.useState(""), [m, v] = p.useState("");
  p.useEffect(() => {
    if (s) {
      const S = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(S);
    }
  }, [s]);
  const w = p.useCallback(
    async (S, f, u) => {
      S.stopPropagation();
      const h = `Are you sure you want to delete the favorite "${u}"?`;
      if (window.confirm(h))
        try {
          await lc(f), await t();
        } catch (g) {
          J.error("Failed to delete favorite", g);
        }
    },
    [t]
  ), x = p.useCallback(
    (S, f) => {
      S.stopPropagation(), i(f), d(f.name), v(f.query);
    },
    []
  ), y = p.useCallback(async () => {
    if (!(!o || !c.trim() || !m.trim()))
      try {
        r(!0), await Dh(
          o.id,
          c,
          m
        ), await t(), i(null);
      } catch (S) {
        J.error("Failed to update favorite", S), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [o, c, m, t]), _ = p.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (f) => f.query === e.searchQuery
    )) {
      const f = e.favorites.find((u) => u.query === e.searchQuery);
      if (f) {
        r(!0);
        try {
          await lc(f.id), await t();
        } catch (u) {
          J.error("Failed to delete favorite:", u);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Lh(e.searchQuery, e.searchQuery), await t();
    } catch (f) {
      J.error("Failed to save favorite:", f);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: s,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: m,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: y,
    handleSaveFavorite: _,
    setToastMessage: a
  };
}, uf = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
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
                  onClick: (m) => n(m, e),
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
                  children: /* @__PURE__ */ l.jsx(Cu, { size: 14 })
                }
              ),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  onClick: (m) => r(m, e.id, e.name),
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
                  children: /* @__PURE__ */ l.jsx(Ut, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, jg = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = xe(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: m,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: y
  } = df(), [_, S] = p.useState({ top: 0, left: 0 }), f = p.useRef(null), u = p.useRef(null);
  if (rt({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), p.useEffect(() => {
    if (e) {
      let j = e.left;
      const N = e.bottom + 5;
      j + 300 > window.innerWidth - 10 && (j = window.innerWidth - 300 - 10), j < 10 && (j = 10), S({ top: N, left: j });
    }
  }, [e]), p.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), !e) return null;
  const h = (k) => {
    k.stopPropagation(), k.preventDefault();
  }, g = (k) => {
    k.stopPropagation();
  };
  return ve.createPortal(
    /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: f,
          onClick: h,
          onMouseDown: g,
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
            /* @__PURE__ */ l.jsxs(
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
                  /* @__PURE__ */ l.jsxs(
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
                        /* @__PURE__ */ l.jsx(
                          Zn,
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
                  /* @__PURE__ */ l.jsxs(
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
            /* @__PURE__ */ l.jsx(
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
                children: r.favorites.map((k) => /* @__PURE__ */ l.jsx(
                  uf,
                  {
                    fav: k,
                    onSelect: (b) => {
                      n(b), t();
                    },
                    onEdit: x,
                    onDelete: w
                  },
                  k.id
                ))
              }
            ),
            a && /* @__PURE__ */ l.jsx(
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
      o && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "meld-modal-overlay",
          style: { zIndex: 3e3 },
          onMouseDown: (k) => {
            k.target === k.currentTarget && i(null);
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsxs(
                    "h2",
                    {
                      style: { display: "flex", alignItems: "center", gap: "10px" },
                      children: [
                        /* @__PURE__ */ l.jsx(Zn, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
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
                                htmlFor: "edit-favorite-name-ctx",
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
                                  k.key === "Enter" && y(), k.key === "Escape" && i(null);
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
                                htmlFor: "edit-favorite-query-ctx",
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
                                id: "edit-favorite-query-ctx",
                                value: m,
                                onChange: (k) => v(k.target.value),
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
                                  k.key === "Enter" && !k.shiftKey && (k.preventDefault(), y()), k.key === "Escape" && i(null);
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
                      className: "meld-btn meld-btn-secondary",
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-primary",
                      onClick: y,
                      disabled: s || !c.trim() || !m.trim(),
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
  );
}, hl = (e) => {
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
}, bg = () => {
  const { state: e, dispatch: t, updateSetting: n } = xe(), [r, s] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [d, m] = p.useState([]), [v, w] = p.useState([]), x = e.settings["search.show_all_keywords"], [y, _] = p.useState(-1), [S, f] = p.useState(null), u = p.useRef(null), h = p.useRef(e.searchQuery), g = p.useCallback(async () => {
    if (v.length > 0) return;
    const R = await Mh();
    w(R);
  }, [v.length]);
  p.useEffect(() => {
    Ih().then((R) => {
      f(R);
    }), x && g();
  }, [g, x]);
  const k = p.useMemo(() => {
    if (!S) return null;
    const R = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${R}):(.*)$`, "i");
  }, [S]), b = p.useCallback(() => {
    const R = !x;
    R && g(), n("search.show_all_keywords", R);
  }, [x, g, n]), j = r !== h.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      m([]);
      return;
    }
    Eh().then((R) => {
      m(R);
    });
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    s(e.searchQuery), h.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var R;
    (R = u.current) == null || R.focus();
  }, []);
  const N = p.useCallback(
    (R, T = !0) => {
      h.current !== R && (J.log("SearchBar: triggering search", { query: R }), t({ type: "SET_SEARCH_QUERY", payload: R }), T && c(!1), h.current = R);
    },
    [t]
  );
  p.useEffect(() => {
    const R = setTimeout(async () => {
      if (r === h.current)
        return;
      if (!e.settings["search.input_suggest"] || !k) {
        o([]), c(!1);
        return;
      }
      const T = hl(r), C = T[T.length - 1];
      if (C) {
        const L = C.match(k);
        if (L) {
          const $ = L[1].toLowerCase();
          let M = L[2];
          M.startsWith('"') && (M = M.substring(1)), M.endsWith('"') && (M = M.substring(0, M.length - 1));
          const B = await Nh(M, $);
          o(B), c(B.length > 0), _(-1);
        } else {
          const $ = C.replace(/^([-!])/, "").toLowerCase();
          if ($ && S) {
            const M = S.all_prefixes.filter((B) => B.startsWith($)).map((B) => ({
              type: B,
              value: "",
              count: 0
            }));
            if (M.length > 0) {
              o(M), c(!0), _(-1);
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
    S
  ]);
  const O = p.useCallback(
    (R) => {
      var de;
      const T = hl(r), L = (T.pop() || "").match(/^([-!])/), $ = L ? L[1] : "", B = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(R.type);
      if (R.value === "") {
        const V = `${[...T, `${$}${R.type}:`].join(" ").trim()}`;
        s(V);
      } else {
        const V = B ? R.value : `"${R.value}"`, re = `${[
          ...T,
          `${$}${R.type}:${V}`
        ].join(" ").trim()} `;
        s(re), o([]), c(!1);
      }
      (de = u.current) == null || de.focus();
    },
    [r, S]
  ), D = (R) => {
    R.key === "Enter" ? N(r) : R.key === "Tab" ? i && y >= 0 && (O(a[y]), R.preventDefault()) : R.key === "ArrowDown" ? i && (_((T) => Math.min(T + 1, a.length - 1)), R.preventDefault()) : R.key === "ArrowUp" ? i && (_((T) => Math.max(T - 1, -1)), R.preventDefault()) : R.key === "Escape" && c(!1);
  }, I = p.useCallback(() => {
    s(""), N("");
  }, [N]), W = p.useCallback(
    (R, T, C = !1) => {
      var Q;
      const L = hl(r), $ = L[L.length - 1] || "";
      let M = !1;
      const B = $.replace(/^([-!])/, "").toLowerCase();
      B && R.toLowerCase().startsWith(B) && (M = !0);
      const de = $.match(/^([-!])/), V = M && de ? de[1] : "";
      if (M && L.pop(), C) {
        const ie = [...L, `${V}${R}:`].filter(Boolean).join(" ");
        s(ie), (Q = u.current) == null || Q.focus();
        return;
      }
      const U = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(R) ? T : `"${T}"`, H = `${V}${R}:${U}`, G = [...L, H].filter(Boolean).join(" ");
      s(G), N(G);
    },
    [r, N, S]
  ), X = p.useCallback(
    (R) => {
      s(R), R || N("");
    },
    [N]
  ), E = p.useCallback(() => {
    if (r === h.current || !k)
      return;
    const R = hl(r), T = R[R.length - 1];
    if (!T) return;
    const C = !!T.match(k), L = T.replace(/^([-!])/, "").toLowerCase(), $ = L && (S == null ? void 0 : S.all_prefixes.some((M) => M.startsWith(L)));
    (C || $) && c(!0);
  }, [r, k, S]), z = p.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: s,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: v,
    showAllKeywords: x,
    toggleShowAllKeywords: b,
    selectedIndex: y,
    setSelectedIndex: _,
    inputRef: u,
    isQueryChanged: j,
    handleSearch: N,
    handleKeyDown: D,
    applySuggestion: O,
    clearSearch: I,
    applySearchSuggestion: W,
    handleInputChange: X,
    handleInputFocus: E,
    handleInputBlur: z
  };
}, ac = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ l.jsx(rr, { size: 12 });
    case "model":
      return /* @__PURE__ */ l.jsx(Qp, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ l.jsx(uh, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ l.jsx(Vp, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ l.jsx(Su, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ l.jsx(ku, { size: 12 });
    case "note":
      return /* @__PURE__ */ l.jsx(Yp, { size: 12 });
    case "sort":
      return /* @__PURE__ */ l.jsx(Up, { size: 12 });
    default:
      return null;
  }
}, Cg = ({
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
  toggleShowAllKeywords: m,
  applySearchSuggestion: v,
  favorites: w,
  onSelectFavorite: x,
  onEditFavorite: y,
  onDeleteFavorite: _
}) => {
  const S = (g, k, b) => /* @__PURE__ */ l.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(g.type, g.value, b === "all"),
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
        j.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", j.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", j.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: ac(g.type)
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
        b !== "all" && /* @__PURE__ */ l.jsx(
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
    `${b}-${g.type}:${g.value}:${k}`
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
        zIndex: 1e3,
        marginTop: "8px",
        maxHeight: "400px",
        overflowY: "auto",
        boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
      },
      children: t.map((g, k) => /* @__PURE__ */ l.jsx(
        "div",
        {
          onMouseDown: (b) => {
            b.preventDefault(), s(g);
          },
          onMouseEnter: () => r(k),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: k === n ? "var(--comfy-menu-bg, #333)" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
          },
          children: /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: ac(g.type)
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
                  color: g.value === kt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: g.value === kt ? "bold" : "normal"
                },
                children: g.value === kt ? g.type === "tag" ? `Untagged (${kt})` : `No ${g.type} (${kt})` : g.value
              }
            )
          ] })
        },
        `${g.type}:${g.value}`
      ))
    }
  ), u = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
            children: i.map(
              (g, k) => S(g, k, "quick")
            )
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
                        onClick: m,
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
                    (g, k) => S({ type: g, value: "" }, k, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), h = () => w.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsx(Zn, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: w.map((g) => /* @__PURE__ */ l.jsx(
              uf,
              {
                fav: g,
                onSelect: x,
                onEdit: y,
                onDelete: _
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
        f(),
        u(),
        h()
      ]
    }
  );
}, Ng = () => {
  const { state: e } = xe(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: s,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: m,
    inputRef: v,
    isQueryChanged: w,
    handleSearch: x,
    handleKeyDown: y,
    applySuggestion: _,
    clearSearch: S,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: h,
    handleInputBlur: g
  } = bg(), {
    isSaving: k,
    toastMessage: b,
    editingFavorite: j,
    setEditingFavorite: N,
    editFavoriteName: O,
    setEditFavoriteName: D,
    editFavoriteQuery: I,
    setEditFavoriteQuery: W,
    handleDeleteFavorite: X,
    handleEditFavorite: E,
    handleSaveEditFavorite: z,
    handleSaveFavorite: R
  } = df();
  rt({
    onEscape: () => N(null),
    enabled: !!j
  });
  const T = p.useRef(null), C = p.useRef(!1);
  p.useEffect(() => {
    j && T.current && T.current.focus();
  }, [j]);
  const L = (M) => {
    M.target === M.currentTarget && (C.current = !0);
  }, $ = (M) => {
    M.target === M.currentTarget && C.current && N(null), C.current = !1;
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              b && /* @__PURE__ */ l.jsx(
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
                  children: b
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
                        onMouseEnter: (M) => {
                          M.currentTarget.style.transform = "translateY(-1px)", w ? (M.currentTarget.style.filter = "brightness(1.15)", M.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : M.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (M) => {
                          M.currentTarget.style.transform = "none", w ? (M.currentTarget.style.filter = "none", M.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : M.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (M) => {
                          M.currentTarget.style.transform = "translateY(1px)", M.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (M) => {
                          M.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ l.jsx(
                            jn,
                            {
                              size: 16,
                              color: w ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: w ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          w && /* @__PURE__ */ l.jsx(
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
                        onChange: (M) => u(M.target.value),
                        onKeyDown: y,
                        onBlur: g,
                        onFocus: h,
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
                        onClick: R,
                        disabled: k,
                        title: e.favorites.some((M) => M.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          Zn,
                          {
                            size: 16,
                            color: e.favorites.some((M) => M.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((M) => M.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ l.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: S,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ l.jsx(ge, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                Cg,
                {
                  showSuggestions: s,
                  suggestions: r,
                  selectedIndex: d,
                  setSelectedIndex: m,
                  applySuggestion: _,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: i,
                  toggleShowAllKeywords: c,
                  applySearchSuggestion: f,
                  favorites: e.favorites,
                  onSelectFavorite: (M) => {
                    n(M), x(M);
                  },
                  onEditFavorite: E,
                  onDeleteFavorite: X
                }
              )
            ]
          }
        ),
        j && ve.createPortal(
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: L,
              onMouseUp: $,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (M) => M.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ l.jsx(Zn, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => N(null),
                          children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
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
                                    ref: T,
                                    type: "text",
                                    value: O,
                                    onChange: (M) => D(M.target.value),
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
                                    onKeyDown: (M) => {
                                      M.key === "Enter" && z(), M.key === "Escape" && N(null);
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
                                    value: I,
                                    onChange: (M) => W(M.target.value),
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
                                    onKeyDown: (M) => {
                                      M.key === "Enter" && !M.shiftKey && (M.preventDefault(), z()), M.key === "Escape" && N(null);
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
                          className: "meld-btn meld-btn-secondary",
                          onClick: () => N(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: z,
                          disabled: k || !O.trim() || !I.trim(),
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
}, Eg = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = p.useState([]), [s, a] = p.useState(!0), [o, i] = p.useState(""), [c, d] = p.useState(""), [m, v] = p.useState(!1), [w, x] = p.useState(null), [y, _] = p.useState(""), [S, f] = p.useState(!1), u = p.useRef(null), h = p.useCallback(async () => {
    a(!0);
    try {
      const I = await Vo();
      r(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      a(!1);
    }
  }, []);
  p.useEffect(() => {
    h();
  }, [h]), p.useEffect(() => {
    w !== null && u.current && (u.current.focus(), u.current.select());
  }, [w]);
  const g = async (I) => {
    I.preventDefault();
    const W = c.trim();
    if (!(!W || m)) {
      if (W.toLowerCase() === kt) {
        alert(
          `Tag name '${kt}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((X) => X.name.toLowerCase() === W.toLowerCase())) {
        alert(`Tag "${W}" already exists.`);
        return;
      }
      v(!0);
      try {
        await Gh(W), d(""), await h();
      } catch (X) {
        console.error("Failed to add tag:", X);
      } finally {
        v(!1);
      }
    }
  }, k = async (I, W) => {
    if (confirm(`Are you sure you want to delete tag "${W}"?`))
      try {
        await qh(I), await h();
      } catch (X) {
        console.error("Failed to delete tag:", X);
      }
  }, b = (I) => {
    x(I.id), _(I.name);
  }, j = () => {
    x(null), _("");
  }, N = async (I) => {
    I.preventDefault();
    const W = y.trim();
    if (!W || w === null || S) return;
    if (W.toLowerCase() === kt) {
      alert(
        `Tag name '${kt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const X = n.find((E) => E.id === w);
    if (X && X.name === W) {
      j();
      return;
    }
    if (n.some(
      (E) => E.id !== w && E.name.toLowerCase() === W.toLowerCase()
    )) {
      alert(`Tag "${W}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Yh(w, W), j(), await h();
    } catch (E) {
      console.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, O = (I) => {
    t(`tag:${I}`);
  }, D = p.useMemo(() => n.filter(
    (I) => I.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(rr, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ l.jsx(ge, { size: 16 })
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
            onChange: (I) => d(I.target.value),
            disabled: m
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || m,
            children: [
              /* @__PURE__ */ l.jsx(ys, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ l.jsx(jn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (I) => i(I.target.value)
          }
        )
      ] }),
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: D.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : D.map((I) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: w === I.id ? /* @__PURE__ */ l.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: N,
          children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "text",
                ref: u,
                className: "meld-tag-rename-input",
                value: y,
                onChange: (W) => _(W.target.value),
                onKeyDown: (W) => W.key === "Escape" && j()
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: S || !y.trim(),
                children: /* @__PURE__ */ l.jsx(Wo, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(ge, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-tag-item__name", children: I.name }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => O(I.name),
              children: /* @__PURE__ */ l.jsx(jn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => b(I),
              children: /* @__PURE__ */ l.jsx(Cu, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(I.id, I.name),
              children: /* @__PURE__ */ l.jsx(Ut, { size: 14 })
            }
          )
        ] })
      ] }) }, I.id)) })
    ] })
  ] });
};
function Mg(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: s } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? s || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? s || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const Ig = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: s, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: d,
    handleEditNotes: m,
    handleRestore: v,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: y,
    handleSendToWorkflow: _,
    handleRunWithWorkflow: S,
    handleRunWithMask: f,
    handleEditSource: u
  } = vs(e, t), { getParentChain: h } = lf(a, c), [g, k] = p.useState(!1), [b, j] = p.useState(!1), [N, O] = p.useState(
    c["viewer.show_details_by_default"]
  ), [D, I] = p.useState(null), W = D ?? c["viewer.show_thumbnails"], [X, E] = p.useState(!1), [z, R] = p.useState(!1), [T, C] = p.useState(null), [L, $] = p.useState(null), [M, B] = p.useState(
    null
  ), de = p.useRef(null), V = p.useRef(!0);
  p.useEffect(() => (V.current = !0, () => {
    V.current = !1;
  }), []);
  const re = p.useRef(s);
  p.useEffect(() => {
    re.current = s;
  }, [s]);
  const P = p.useMemo(() => {
    const Y = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return o === "lighttable" && e.viewerLightTableSlotId ? (pe.getState().buckets[e.viewerLightTableSlotId] || []).map((Z) => {
      const ne = Number.parseInt(Z, 10);
      return a.find((me) => me.id === ne) || i.find((me) => me.id === ne) || null;
    }).filter((Z) => Z !== null) : o === "lineage" ? i : a.filter(
      (se) => se.exists !== !1 && (c["gallery.show_parent_images"] || !se.has_children || Y)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), U = s === null ? -1 : P.findIndex((Y) => Y.id === s), H = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? P : a).find((Y) => Y.id === s), G = p.useCallback(
    async (Y = !1) => {
      if (!H) return;
      const se = g ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!Y && se === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [H.id],
            hasLineage: !!(H.parent_id || H.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const A = e.viewScope === "trash", le = /* @__PURE__ */ new Set([H.id]);
        if (se === "lineage") {
          const Z = await $a(H.id);
          for (const ne of Z)
            le.add(ne.id);
        }
        if (!V.current || re.current === null) return;
        if (P.length > le.size) {
          let Z = !1;
          for (let ne = U + 1; ne < P.length; ne++)
            if (!le.has(P[ne].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: P[ne].id, mode: o }
              }), Z = !0;
              break;
            }
          if (!Z) {
            for (let ne = U - 1; ne >= 0; ne--)
              if (!le.has(P[ne].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: P[ne].id, mode: o }
                }), Z = !0;
                break;
              }
          }
          Z || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await Wa(Array.from(le), A), !A) {
          const Z = P.filter(
            (ne) => le.has(ne.id)
          );
          C(Z), $(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(le) });
      } catch (A) {
        t({
          type: "SET_ERROR",
          payload: A instanceof Error ? A.message : String(A)
        });
      }
    },
    [
      H,
      g,
      c,
      e.viewScope,
      P,
      U,
      o,
      t
    ]
  ), Q = p.useCallback(() => {
    H && d(H);
  }, [H, d]), ie = p.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: g } });
  }, [t, g]), fe = p.useCallback(async () => {
    const Y = g ? c["fullscreen.loop"] : c["viewer.loop"];
    if (U === 0 && o === "gallery" && e.pagination.hasMore && !z && Y) {
      R(!0);
      try {
        const se = e.pagination.limit, A = e.pagination.total, le = Math.max(0, A - se), Z = await Ml(
          le,
          se,
          e.searchQuery
        );
        if (!V.current || (t({ type: "APPEND_IMAGES", payload: Z }), re.current === null)) return;
        if (Z.images.length > 0) {
          const ne = Z.images[Z.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: ne.id, mode: "gallery" }
          });
        }
      } catch (se) {
        console.error("Failed to jump to end:", se);
      } finally {
        R(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: g } });
  }, [
    U,
    o,
    e.pagination,
    e.searchQuery,
    c,
    t,
    z,
    g
  ]), Ce = p.useCallback(
    (Y) => {
      Y && "stopPropagation" in Y && Y.stopPropagation();
      const se = de.current;
      se && (document.fullscreenElement ? document.exitFullscreen() : se.requestFullscreen().catch((A) => {
        console.error(
          `Error attempting to enable full-screen mode: ${A.message}`
        );
      }));
    },
    []
  ), Ne = p.useCallback(async () => {
    H && (P.length > 1 ? ie() : t({ type: "CLOSE_VIEWER" }), await v(H));
  }, [H, P.length, ie, v, t]), Ee = p.useCallback(async () => {
    if (!T || T.length === 0) return;
    const Y = T.map((A) => A.id), se = Y[0];
    try {
      const A = await Qo(Y);
      if (!V.current) return;
      if (t({ type: "ADD_IMAGES", payload: T }), e.viewScope === "trash") {
        const le = A.restored_ids || Y;
        t({ type: "REMOVE_IMAGES", payload: le });
      }
      if (C(null), !V.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: se, mode: o }
      });
    } catch (A) {
      t({
        type: "SET_ERROR",
        payload: A instanceof Error ? A.message : String(A)
      });
    }
  }, [T, t, o, e.viewScope]), Be = p.useCallback(async () => {
    if (T && T.length > 0)
      await Ee();
    else if (L && L.type === "tags") {
      const { imageId: Y, addTags: se, removeTags: A } = L;
      try {
        await Ua([Y], se, A);
        const le = (o === "lineage" ? i : a).find((Z) => Z.id === Y);
        if (le) {
          const Z = [...le.tags];
          for (const me of se)
            Z.includes(me) || Z.push(me);
          const ne = Z.filter((me) => !A.includes(me));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...le, tags: ne }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: Y, mode: o }
          });
        }
        $(null);
      } catch (le) {
        t({
          type: "SET_ERROR",
          payload: le instanceof Error ? le.message : String(le)
        });
      }
    }
  }, [
    T,
    L,
    Ee,
    a,
    i,
    o,
    t
  ]), dt = p.useCallback(
    async (Y) => {
      if (!Y || !H) return;
      const se = H.id, A = [...H.tags], le = Y.split(/\s+/), Z = [], ne = [];
      let me = !1, Le = !1, Ye = !1;
      for (const Me of le)
        if (Me.startsWith("tag:")) {
          const ke = Me.substring(4);
          ke && !A.includes(ke) && !Z.includes(ke) && Z.push(ke);
        } else if (Me.startsWith("-tag:")) {
          const ke = Me.substring(5);
          ke && A.includes(ke) && !ne.includes(ke) && ne.push(ke);
        } else if (Me.startsWith("tag-toggle:")) {
          const ke = Me.substring(11);
          ke && (A.includes(ke) ? ne.includes(ke) || ne.push(ke) : Z.includes(ke) || Z.push(ke));
        } else Me === "next" ? me = !0 : Me === "prev" ? Le = !0 : Me === "delete" && (Ye = !0);
      if (Z.length > 0 || ne.length > 0)
        try {
          await Ua(
            [se],
            Z,
            ne
          );
          const Me = [...A];
          for (const Ct of Z)
            Me.includes(Ct) || Me.push(Ct);
          const ke = Me.filter((Ct) => !ne.includes(Ct));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...H, id: se, tags: ke }
          }), $({
            type: "tags",
            imageId: se,
            addTags: [...ne],
            removeTags: [...Z]
          }), C(null);
        } catch (Me) {
          console.error("Failed to update tags via shortcut:", Me);
        }
      Ye ? G(!0) : me ? ie() : Le && fe();
    },
    [H, t, ie, fe, G]
  );
  p.useEffect(() => {
    const Y = (A) => {
      const le = A.target, Z = le.tagName === "INPUT" || le.tagName === "TEXTAREA" || le.isContentEditable;
      if (Z && A.key !== "Escape") {
        A.key === "Enter" && (A.ctrlKey || A.metaKey) && A.preventDefault();
        return;
      }
      if (s === null) return;
      const ne = A.key === "Delete" || A.key === "Backspace", me = A.key === "ArrowRight" || A.key === "ArrowLeft", Le = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        A.key
      ), Ye = A.key === "Escape", Me = (A.ctrlKey || A.metaKey) && (A.key === "z" || A.key === "Z" || A.code === "KeyZ"), ke = /^[0-9]$/.test(A.key) && !A.ctrlKey && !A.metaKey && !A.altKey && A.code !== "KeyZ";
      if (ne || me || Le || Ye || Me || ke)
        if (Z)
          if (Ye) {
            if (e.activeModal.type !== "none") {
              A.preventDefault(), A.stopPropagation();
              return;
            }
            A.preventDefault(), A.stopPropagation(), A.stopImmediatePropagation();
          } else
            return;
        else {
          if (Ye && e.activeModal.type !== "none") {
            A.preventDefault(), A.stopPropagation();
            return;
          }
          A.preventDefault(), A.stopPropagation(), A.stopImmediatePropagation();
        }
      else
        return;
      if (A.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (A.key === "ArrowRight")
        ie();
      else if (A.key === "ArrowLeft")
        fe();
      else if (A.key === "f" || A.key === "F")
        Ce(A);
      else if (A.key === "i" || A.key === "I")
        O((Ct) => !Ct);
      else if (A.key === "t" || A.key === "T")
        Q();
      else if ((A.key === "r" || A.key === "R") && e.viewScope === "trash")
        Ne();
      else if (A.key === "Delete")
        G();
      else if ((A.ctrlKey || A.metaKey) && (A.key === "z" || A.key === "Z"))
        Be();
      else if (ke && !Z) {
        const Ct = `viewer.shortcut.${A.key}`, xs = c[Ct];
        typeof xs == "string" && xs && (B(A.key), setTimeout(() => {
          V.current && B(null);
        }, 500), dt(xs));
      }
    };
    window.addEventListener("keydown", Y, { capture: !0 });
    const se = () => {
      const A = !!document.fullscreenElement;
      k(A), O(A ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", se), () => {
      window.removeEventListener("keydown", Y, { capture: !0 }), document.removeEventListener("fullscreenchange", se);
    };
  }, [
    s,
    t,
    Ce,
    ie,
    fe,
    c,
    G,
    e.activeModal.type,
    Be,
    Q,
    Ne,
    e.viewScope,
    dt
  ]), p.useEffect(() => {
    s !== null && r(s).catch((Y) => {
      console.error("Failed to fetch full image details for viewer:", Y);
    });
  }, [s, r]), p.useEffect(() => {
    o === "lineage" && s !== null && i.length === 0 && (E(!0), $a(s).then((Y) => {
      V.current && t({ type: "SET_LINEAGE", payload: Y });
    }).catch((Y) => {
      console.error("Failed to fetch lineage:", Y);
    }).finally(() => {
      V.current && E(!1);
    }));
  }, [o, s, i.length, t]), p.useEffect(() => {
    o !== "gallery" || s === null || e.isLoading || !e.pagination.hasMore || U !== -1 && U >= P.length - 15 && n();
  }, [
    s,
    P.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    U
  ]);
  const ws = p.useMemo(() => {
    if (!W || U === -1) return [];
    const Y = c["viewer.thumbnail_window_size"], se = Math.floor(Y / 2);
    let A = Math.max(0, U - se);
    const le = Math.min(P.length, A + Y);
    return le === P.length && (A = Math.max(0, le - Y)), P.slice(A, le).map((Z, ne) => ({
      img: Z,
      absIndex: A + ne
    }));
  }, [P, U, c, W]), Ho = p.useMemo(() => H ? h(H) : [], [H, h]);
  return p.useEffect(() => {
    var Y, se;
    if (s !== null) {
      if (W) {
        const A = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        A && A.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((Y = document.activeElement) == null ? void 0 : Y.tagName) === "CANVAS" && document.activeElement.blur(), (se = de.current) == null || se.focus();
    }
  }, [s, W]), p.useEffect(() => {
    if (s === null || P.length === 0) return;
    const Y = P.map((me) => me.id), se = Y.indexOf(s);
    if (se === -1) return;
    const A = g ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: le, nextId: Z } = Mg({
      ids: Y,
      index: se,
      loopEnabled: A,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), ne = setTimeout(() => {
      const me = [le, Z].filter(
        (Le) => Le !== null && Le !== s
      );
      me.length !== 0 && Promise.allSettled(me.map((Le) => r(Le))).then(
        (Le) => {
          for (const Ye of Le)
            Ye.status === "rejected" && J.warn(
              "Prefetching adjacent image details failed",
              Ye.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(ne);
  }, [
    s,
    P,
    g,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), p.useEffect(() => {
    if (s === null || P.length === 0) return;
    const Y = P.findIndex(
      (Z) => Z.id === s
    );
    if (Y === -1) return;
    const se = (Z) => nt(Z), A = [
      Y + 1,
      Y + 2,
      Y - 1
    ], le = setTimeout(() => {
      for (const Z of A)
        if (Z >= 0 && Z < P.length) {
          const ne = P[Z], me = new Image();
          me.src = se(ne);
        }
    }, 150);
    return () => clearTimeout(le);
  }, [s, P]), {
    isFullscreen: g,
    showDetails: N,
    setShowDetails: O,
    showThumbnails: W,
    setShowThumbnailsOverride: I,
    isLoadingLineage: X,
    isJumping: z,
    isMenuOpen: b,
    setIsMenuOpen: j,
    activeShortcutKey: M,
    lastDeletedImages: T,
    setLastDeletedImages: C,
    overlayRef: de,
    handleNext: ie,
    handlePrevious: fe,
    handleDelete: G,
    handleUpdateUserNotes: w,
    handleEditNotes: () => H && m(H),
    handleTagEdit: Q,
    handleRestore: Ne,
    handleUndo: Be,
    handleRestoreWorkflow: async () => {
      if (!H) return;
      await x(H) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!H) return;
      await y(H) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!H) return;
      _(H) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => H && S(H),
    handleRunWithMask: (Y) => H && f(H, Y),
    handleEditSource: () => H && u(H),
    toggleFullscreen: Ce,
    currentIndex: U,
    currentThumbnails: P,
    image: H,
    windowedThumbnails: ws,
    parentChain: Ho
  };
}, Tg = ({
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
}) }) : null, Lg = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: s,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = p.useState("idle");
  p.useEffect(() => {
    c("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], m = d === "always" || d === "if_present" && e.user_notes;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
      children: [
        (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
        ] }),
        (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-value", children: [
            e.width,
            " x ",
            e.height,
            " px"
          ] })
        ] }),
        (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
        ] }),
        e.deleted_at && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
        ] }),
        (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && s.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: s.map(
            (v, w) => v.imgSrc && /* @__PURE__ */ l.jsx(
              "img",
              {
                src: v.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (x) => {
                  x.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: v.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: w === 0 ? "Source" : w === 1 ? "Grand-Source" : `Ancestor (S${w + 1})`,
                alt: "source thumb"
              },
              v.id || w
            )
          ) }) })
        ] }),
        (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
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
        (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
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
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((v) => /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-details-tag", children: v }, v)) })
        ] }),
        m && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            i === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-viewer-notes-preview",
              onClick: (v) => {
                v.stopPropagation(), o == null || o();
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
              children: e.user_notes || /* @__PURE__ */ l.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, ff = p.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const s = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, o = typeof e.parent_id == "number" && e.parent_id === n.id, i = nt(e);
    return /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${s ? "meld-viewer-thumbnail--active" : ""} ${a ? "meld-viewer-thumbnail--parent" : ""} ${o ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ l.jsx("img", { src: i, alt: e.filename }),
          (a || o) && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${a ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: a ? "Source Image" : "Derivative Image",
              children: a ? /* @__PURE__ */ l.jsx(Su, { size: 12 }) : /* @__PURE__ */ l.jsx(ku, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
ff.displayName = "ThumbnailItem";
const Dg = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: s,
  isLoading: a,
  viewerMode: o
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
  ) : e.map(({ img: i }) => /* @__PURE__ */ l.jsx(
    ff,
    {
      thumb: i,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    i.id
  )),
  o === "gallery" && a && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ l.jsx(Vr, { className: "animate-spin", size: 20 }) })
] }) });
function Pg() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = xe(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: m,
    isMenuOpen: v,
    setIsMenuOpen: w,
    activeShortcutKey: x,
    setLastDeletedImages: y,
    overlayRef: _,
    handleNext: S,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: h,
    handleRestore: g,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: b,
    handleSendToWorkflow: j,
    handleRunWithWorkflow: N,
    handleRunWithMask: O,
    handleEditSource: D,
    handleDelete: I,
    toggleFullscreen: W,
    image: X,
    windowedThumbnails: E,
    parentChain: z
  } = Ig({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), R = p.useRef(null), T = p.useRef(null), { executeWorkflow: C } = ef(), L = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!X) return null;
  const { viewerImageId: $, viewerMode: M } = e, B = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ve.createPortal(
    /* @__PURE__ */ l.jsxs(
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
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: `meld-viewer-content ${s ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (de) => de.stopPropagation(),
              children: [
                B && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: g,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ l.jsx(Vr, { size: 20 })
                    }
                  ),
                  !s && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ l.jsx(bu, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ l.jsx(Jp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: W,
                      type: "button",
                      title: s ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: s ? /* @__PURE__ */ l.jsx(sh, { size: 20 }) : /* @__PURE__ */ l.jsx(rh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Bo,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: w,
                      menuRef: T,
                      settings: e.settings,
                      onAddUnifiedLoader: b,
                      onRestoreWorkflow: k,
                      onSendToWorkflow: j,
                      onRunWithWorkflow: N,
                      onRunWithMask: O,
                      onEditSource: D,
                      onEditTags: u,
                      onEditNotes: h,
                      onDelete: I,
                      deleteLabel: L,
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
                      children: /* @__PURE__ */ l.jsx(ge, { size: 20 })
                    }
                  )
                ] }),
                B && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: m,
                    children: /* @__PURE__ */ l.jsx(ju, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(Vr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: R,
                      src: nt(X),
                      alt: X.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                B && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: S,
                    type: "button",
                    children: /* @__PURE__ */ l.jsx($o, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  Lg,
                  {
                    image: X,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: B,
                    parentChain: z,
                    dispatch: t,
                    onEditNotes: h
                  }
                ),
                !s && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  Dg,
                  {
                    windowedThumbnails: E,
                    viewerImageId: $,
                    currentImage: X,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: M
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  Tg,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
            Zu,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (de, V) => {
                if (e.activeModal.type === "workflow_selection") {
                  const re = e.activeModal.maskFilename;
                  for (const P of e.activeModal.images)
                    await C(
                      de,
                      P,
                      re,
                      V
                    );
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
            Ju,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (de) => {
                e.activeModal.type === "node_selection" && Br(e.activeModal.image, de);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ l.jsx(nf, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ l.jsx(
            tf,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: y
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(rf, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Du, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx(Ku, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ l.jsx(
            Gu,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ l.jsx(
            Pu,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ l.jsx(
            Xu,
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
const Rg = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = xe(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), [d, m] = p.useState(e.pagination.limit);
  p.useEffect(() => {
    m(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const v = e.searchQuery.trim() !== "", w = p.useRef(null), x = p.useRef(null), y = pe((u) => u.buckets), _ = p.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    for (const h of Object.values(y))
      for (const g of h)
        u.add(Number(g));
    return u;
  }, [y]), S = p.useMemo(() => {
    const u = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((h) => _.has(h.id) ? !1 : e.viewScope === "trash" ? h.exists !== !1 || e.settings["gallery.trash.show_missing"] : h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || u));
  }, [
    e.images,
    e.settings,
    e.viewScope,
    e.searchQuery,
    _
  ]), f = p.useMemo(
    () => S.slice(0, d),
    [S, d]
  );
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && S.length === 0 && (J.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    S.length,
    r
  ]), p.useEffect(() => {
    const u = (h) => {
      h.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), h.preventDefault(), h.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), h.preventDefault(), h.stopPropagation()));
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [e.activeModal.type, e.selectedIds.size, t]), p.useEffect(() => {
    const u = new IntersectionObserver(
      (g) => {
        if (g[0].isIntersecting) {
          if (e.isLoading) {
            J.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < S.length ? (J.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                S.length
              ),
              totalAvailableLocally: S.length
            }
          ), m((k) => k + e.pagination.limit)) : e.pagination.hasMore ? (J.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : J.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: S.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), h = w.current;
    return h && u.observe(h), () => {
      h && u.unobserve(h);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    d,
    S.length,
    e.pagination.limit,
    e.images.length
  ]), p.useEffect(() => {
    const u = e.viewerImageId ?? x.current;
    if (u !== null && S.some((g) => g.id === u)) {
      const g = S.findIndex((b) => b.id === u);
      if (g >= d) {
        m(
          Math.ceil((g + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const k = document.querySelector(
        `[data-image-id="${u}"]`
      );
      k && (k.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (x.current = null));
    }
    e.viewerImageId !== null && (x.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    S,
    d,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: s,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: d,
    displayedImages: S,
    visibleImages: f,
    isSearchActive: v,
    loadMoreRef: w
  };
}, zg = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = xe(), { handleRunWithWorkflow: s, handleRunWithMask: a } = vs(
    e,
    t
  ), o = e.selectedIds.size, [i, c] = p.useState(!1), [d, m] = p.useState(null), v = p.useRef(null), [w, x] = p.useState(null);
  if (p.useEffect(() => {
    let j = document.getElementById(
      "meld-bulk-bar-portal"
    );
    if (!j) {
      j = document.createElement("div"), j.id = "meld-bulk-bar-portal", j.dataset.mountCount = "0";
      const O = document.querySelector(".comfyui-body-bottom");
      O ? O.appendChild(j) : document.body.appendChild(j);
    }
    const N = Number.parseInt(j.dataset.mountCount || "0", 10);
    return j.dataset.mountCount = (N + 1).toString(), x(j), () => {
      if (j) {
        const D = Number.parseInt(
          j.dataset.mountCount || "1",
          10
        ) - 1;
        j.dataset.mountCount = D.toString(), D <= 0 && j.remove();
      }
    };
  }, []), rt({
    onEscape: () => c(!1),
    enabled: i
  }), o === 0 || !w) return null;
  const y = e.viewScope === "trash", _ = () => e.images.filter((j) => e.selectedIds.has(j.id)), S = () => {
    v.current && (m(v.current.getBoundingClientRect()), c(!0));
  }, f = (j) => {
    j(), c(!1);
  }, u = () => {
    const j = _(), N = /* @__PURE__ */ new Set();
    for (const O of j)
      if (O.tags)
        for (const D of O.tags)
          N.add(D);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(N)
      }
    });
  }, h = () => {
    const j = _();
    s(j);
  }, g = () => {
    const j = _();
    j.length > 0 && a(j[0], "run");
  }, k = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, b = /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${y ? "meld-bulk-bar--trash" : ""}`,
      children: [
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
              /* @__PURE__ */ l.jsx(
                lh,
                {
                  size: 16,
                  style: { marginRight: "8px", verticalAlign: "middle" }
                }
              ),
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
              /* @__PURE__ */ l.jsx(ge, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        ),
        i && d && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu-overlay",
              onClick: () => c(!1),
              onMouseDown: (j) => j.stopPropagation()
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu",
              style: {
                bottom: window.innerHeight - d.top + 5,
                left: d.left
              },
              onClick: (j) => j.stopPropagation(),
              children: y ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
                    onClick: () => f(r),
                    children: [
                      /* @__PURE__ */ l.jsx(Vr, { size: 14 }),
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
                      /* @__PURE__ */ l.jsx(Ut, { size: 14 }),
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
                    onClick: () => f(u),
                    children: [
                      /* @__PURE__ */ l.jsx(rr, { size: 14 }),
                      " Edit Tags"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => f(h),
                    children: [
                      /* @__PURE__ */ l.jsx(Uo, { size: 14 }),
                      " Queue Workflow"
                    ]
                  }
                ),
                o === 1 && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => f(g),
                    children: [
                      /* @__PURE__ */ l.jsx(ih, { size: 14 }),
                      " Queue Workflow (Mask)"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => f(k),
                    children: [
                      /* @__PURE__ */ l.jsx(Ur, { size: 14 }),
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
                      /* @__PURE__ */ l.jsx(Ut, { size: 14 }),
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
  return ve.createPortal(b, w);
}, Og = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: s,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    localLimit: c,
    displayedImages: d,
    visibleImages: m,
    isSearchActive: v,
    loadMoreRef: w
  } = Rg(), { isOpen: x, setIsOpen: y } = pe(), _ = pe((N) => N.buckets), S = Object.values(_).some((N) => N && N.length > 0);
  J.log("GalleryPanel: isLightTableOpen =", x);
  const [f, u] = p.useState(!1), [h, g] = p.useState(null), k = p.useRef(null), b = p.useCallback(() => {
    k.current && (g(
      k.current.getBoundingClientRect()
    ), u(!0));
  }, []), j = p.useCallback(
    (N) => {
      t({ type: "SET_SEARCH_QUERY", payload: N }), i(N), a("search"), u(!1);
    },
    [t, i, a]
  );
  return J.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: m.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (N) => {
        N.dataTransfer.types.includes(
          "application/meld-lt-source-slot"
        ) && (N.preventDefault(), N.dataTransfer.dropEffect = "move");
      },
      onDrop: (N) => {
        const O = N.dataTransfer.getData(
          "application/meld-lt-source-slot"
        );
        if (O) {
          N.preventDefault();
          const D = N.dataTransfer.getData("text/plain");
          D && D.split(",").forEach((W) => {
            W && pe.getState().removeFromBucket(O, W.trim());
          });
        }
      },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ l.jsx(Ut, { size: 14 }),
              /* @__PURE__ */ l.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ l.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (N) => r("gallery.trash.show_missing", N.target.checked)
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
                  /* @__PURE__ */ l.jsx(ge, { size: 14 }),
                  /* @__PURE__ */ l.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__actions", children: [
            e.favorites.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                ref: k,
                type: "button",
                onClick: b,
                style: {
                  background: "none",
                  border: "none",
                  color: f ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ l.jsx(
                  Zn,
                  {
                    size: 14,
                    fill: f ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  J.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    x,
                    "to",
                    !x
                  ), y(!x);
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
                children: /* @__PURE__ */ l.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ l.jsx(
                    oh,
                    {
                      size: 14,
                      fill: x ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: x ? 1 : 0.8 }
                    }
                  ),
                  !x && S && /* @__PURE__ */ l.jsx(
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
                onClick: () => {
                  s === "search" ? (i(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: v ? "var(--meld-success-color)" : s === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: v ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ l.jsx(jn, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ l.jsx(eh, { size: 14 }) : /* @__PURE__ */ l.jsx(bu, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(rr, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(Ur, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(
                  Vr,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                )
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
                children: /* @__PURE__ */ l.jsx(Nu, { size: 14 })
              }
            )
          ] }),
          s === "search" && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ l.jsx(Ng, {}) })
        ] }),
        /* @__PURE__ */ l.jsx(vg, {}),
        e.error && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__error", children: e.error }),
        s === "tags" ? /* @__PURE__ */ l.jsx(
          Eg,
          {
            onClose: () => a("gallery"),
            onSearch: (N) => {
              t({ type: "SET_SEARCH_QUERY", payload: N }), a("search");
            }
          }
        ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : m.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: m.map((N) => {
                const O = e.settings["sidebar.thumbnail_size"] || 100, D = e.settings["gallery.view_mode"] === "grid_only", I = D && N.width && N.height ? Math.min(
                  O,
                  O * N.width / N.height
                ) + 10 : D ? O + 10 : "100%";
                return /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    "data-image-id": N.id,
                    style: {
                      width: D ? "auto" : "100%",
                      flexShrink: 0,
                      display: D ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ l.jsx(
                      yg,
                      {
                        height: D ? O + 10 : Math.max(O, 150),
                        style: {
                          width: typeof I == "number" ? `${I}px` : I,
                          minWidth: typeof I == "number" ? `${I}px` : I,
                          display: D ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ l.jsx(gg, { image: N })
                      }
                    )
                  },
                  N.id
                );
              })
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              ref: w,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                c >= d.length && !e.pagination.hasMore && m.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(zg, {}),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(Pg, {}),
        /* @__PURE__ */ l.jsx(pg, {}),
        f && /* @__PURE__ */ l.jsx(
          jg,
          {
            anchorRect: h,
            onClose: () => u(!1),
            onSelect: j
          }
        ),
        /* @__PURE__ */ l.jsx(Sg, {})
      ]
    }
  );
};
oc.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var s, a;
      const n = (s = e.widgets) == null ? void 0 : s.find((o) => o.name === "positive"), r = (a = e.widgets) == null ? void 0 : a.find((o) => o.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const Ag = document.getElementById(
  "meld-gallery-style"
);
if (!Ag) {
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
let gl = null, vt = null;
oc.registerExtension({
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
    var t;
    try {
      const n = await Tu();
      J.init(n.dev_mode), J.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), J.init(!1);
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
      }, te.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), te.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), te.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), J.log("Import completed.");
      }), te.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const s of n.output.images)
              if (s.type === "output")
                try {
                  await Iu({
                    filename: s.filename,
                    subfolder: s.subfolder,
                    type: s.type
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
            J.log("render called", {
              el: n,
              galleryRoot: gl,
              galleryContainer: vt
            }), vt || (J.log("galleryContainer not found, creating new one"), vt = document.createElement("div"), vt.id = "meld-gallery-container", vt.style.height = "100%", vt.style.width = "100%", vt.style.display = "flex", vt.style.flexDirection = "column"), n.contains(vt) || (J.log("Appending galleryContainer to el"), n.appendChild(vt)), gl ? J.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (J.log("Creating new gallery root"), gl = vu(vt), gl.render(
              qt.createElement(
                Kh,
                null,
                qt.createElement(Og)
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
