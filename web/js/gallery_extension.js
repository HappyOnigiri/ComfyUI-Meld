import { api as se } from "/scripts/api.js";
import { app as yc } from "/scripts/app.js";
function bm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vc = { exports: {} }, oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr = Symbol.for("react.element"), Cm = Symbol.for("react.portal"), Nm = Symbol.for("react.fragment"), Em = Symbol.for("react.strict_mode"), Mm = Symbol.for("react.profiler"), Im = Symbol.for("react.provider"), Lm = Symbol.for("react.context"), Tm = Symbol.for("react.forward_ref"), Dm = Symbol.for("react.suspense"), Pm = Symbol.for("react.memo"), Rm = Symbol.for("react.lazy"), ni = Symbol.iterator;
function Om(e) {
  return e === null || typeof e != "object" ? null : (e = ni && e[ni] || e["@@iterator"], typeof e == "function" ? e : null);
}
var wc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, xc = Object.assign, _c = {};
function rr(e, t, n) {
  this.props = e, this.context = t, this.refs = _c, this.updater = n || wc;
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kc() {
}
kc.prototype = rr.prototype;
function eo(e, t, n) {
  this.props = e, this.context = t, this.refs = _c, this.updater = n || wc;
}
var to = eo.prototype = new kc();
to.constructor = eo;
xc(to, rr.prototype);
to.isPureReactComponent = !0;
var ri = Array.isArray, Sc = Object.prototype.hasOwnProperty, no = { current: null }, jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function bc(e, t, n) {
  var r, s = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Sc.call(t, r) && !jc.hasOwnProperty(r) && (s[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) s.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    s.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) s[r] === void 0 && (s[r] = i[r]);
  return { $$typeof: Jr, type: e, key: a, ref: o, props: s, _owner: no.current };
}
function Am(e, t) {
  return { $$typeof: Jr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ro(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jr;
}
function zm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var li = /\/+/g;
function Is(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? zm("" + e.key) : t.toString(36);
}
function Nl(e, t, n, r, s) {
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
        case Jr:
        case Cm:
          o = !0;
      }
  }
  if (o) return o = e, s = s(o), e = r === "" ? "." + Is(o, 0) : r, ri(s) ? (n = "", e != null && (n = e.replace(li, "$&/") + "/"), Nl(s, t, n, "", function(d) {
    return d;
  })) : s != null && (ro(s) && (s = Am(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(li, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", ri(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Is(a, i);
    o += Nl(a, t, n, c, s);
  }
  else if (c = Om(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Is(a, i++), o += Nl(a, t, n, c, s);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ol(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return Nl(e, r, "", "", function(a) {
    return t.call(n, a, s++);
  }), r;
}
function Fm(e) {
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
var He = { current: null }, El = { transition: null }, Wm = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: El, ReactCurrentOwner: no };
function Cc() {
  throw Error("act(...) is not supported in production builds of React.");
}
oe.Children = { map: ol, forEach: function(e, t, n) {
  ol(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ol(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ol(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ro(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
oe.Component = rr;
oe.Fragment = Nm;
oe.Profiler = Mm;
oe.PureComponent = eo;
oe.StrictMode = Em;
oe.Suspense = Dm;
oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wm;
oe.act = Cc;
oe.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = xc({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = no.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) Sc.call(t, c) && !jc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: Jr, type: e.type, key: s, ref: a, props: r, _owner: o };
};
oe.createContext = function(e) {
  return e = { $$typeof: Lm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Im, _context: e }, e.Consumer = e;
};
oe.createElement = bc;
oe.createFactory = function(e) {
  var t = bc.bind(null, e);
  return t.type = e, t;
};
oe.createRef = function() {
  return { current: null };
};
oe.forwardRef = function(e) {
  return { $$typeof: Tm, render: e };
};
oe.isValidElement = ro;
oe.lazy = function(e) {
  return { $$typeof: Rm, _payload: { _status: -1, _result: e }, _init: Fm };
};
oe.memo = function(e, t) {
  return { $$typeof: Pm, type: e, compare: t === void 0 ? null : t };
};
oe.startTransition = function(e) {
  var t = El.transition;
  El.transition = {};
  try {
    e();
  } finally {
    El.transition = t;
  }
};
oe.unstable_act = Cc;
oe.useCallback = function(e, t) {
  return He.current.useCallback(e, t);
};
oe.useContext = function(e) {
  return He.current.useContext(e);
};
oe.useDebugValue = function() {
};
oe.useDeferredValue = function(e) {
  return He.current.useDeferredValue(e);
};
oe.useEffect = function(e, t) {
  return He.current.useEffect(e, t);
};
oe.useId = function() {
  return He.current.useId();
};
oe.useImperativeHandle = function(e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
oe.useInsertionEffect = function(e, t) {
  return He.current.useInsertionEffect(e, t);
};
oe.useLayoutEffect = function(e, t) {
  return He.current.useLayoutEffect(e, t);
};
oe.useMemo = function(e, t) {
  return He.current.useMemo(e, t);
};
oe.useReducer = function(e, t, n) {
  return He.current.useReducer(e, t, n);
};
oe.useRef = function(e) {
  return He.current.useRef(e);
};
oe.useState = function(e) {
  return He.current.useState(e);
};
oe.useSyncExternalStore = function(e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
oe.useTransition = function() {
  return He.current.useTransition();
};
oe.version = "18.3.1";
vc.exports = oe;
var f = vc.exports;
const Gt = /* @__PURE__ */ bm(f);
var Nc = { exports: {} }, st = {}, Ec = { exports: {} }, Mc = {};
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
  function t(C, D) {
    var Q = C.length;
    C.push(D);
    e: for (; 0 < Q; ) {
      var I = Q - 1 >>> 1, K = C[I];
      if (0 < s(K, D)) C[I] = D, C[Q] = K, Q = I;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var D = C[0], Q = C.pop();
    if (Q !== D) {
      C[0] = Q;
      e: for (var I = 0, K = C.length, ue = K >>> 1; I < ue; ) {
        var B = 2 * (I + 1) - 1, re = C[B], Y = B + 1, ae = C[Y];
        if (0 > s(re, Q)) Y < K && 0 > s(ae, re) ? (C[I] = ae, C[Y] = Q, I = Y) : (C[I] = re, C[B] = Q, I = B);
        else if (Y < K && 0 > s(ae, Q)) C[I] = ae, C[Y] = Q, I = Y;
        else break e;
      }
    }
    return D;
  }
  function s(C, D) {
    var Q = C.sortIndex - D.sortIndex;
    return Q !== 0 ? Q : C.id - D.id;
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
  var c = [], d = [], h = 1, v = null, w = 3, _ = !1, g = !1, k = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var D = n(d); D !== null; ) {
      if (D.callback === null) r(d);
      else if (D.startTime <= C) r(d), D.sortIndex = D.expirationTime, t(c, D);
      else break;
      D = n(d);
    }
  }
  function y(C) {
    if (k = !1, p(C), !g) if (n(c) !== null) g = !0, z(x);
    else {
      var D = n(d);
      D !== null && T(y, D.startTime - C);
    }
  }
  function x(C, D) {
    g = !1, k && (k = !1, m(N), N = -1), _ = !0;
    var Q = w;
    try {
      for (p(D), v = n(c); v !== null && (!(v.expirationTime > D) || C && !L()); ) {
        var I = v.callback;
        if (typeof I == "function") {
          v.callback = null, w = v.priorityLevel;
          var K = I(v.expirationTime <= D);
          D = e.unstable_now(), typeof K == "function" ? v.callback = K : v === n(c) && r(c), p(D);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var ue = !0;
      else {
        var B = n(d);
        B !== null && T(y, B.startTime - D), ue = !1;
      }
      return ue;
    } finally {
      v = null, w = Q, _ = !1;
    }
  }
  var j = !1, b = null, N = -1, R = 5, P = -1;
  function L() {
    return !(e.unstable_now() - P < R);
  }
  function U() {
    if (b !== null) {
      var C = e.unstable_now();
      P = C;
      var D = !0;
      try {
        D = b(!0, C);
      } finally {
        D ? Z() : (j = !1, b = null);
      }
    } else j = !1;
  }
  var Z;
  if (typeof u == "function") Z = function() {
    u(U);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), O = E.port2;
    E.port1.onmessage = U, Z = function() {
      O.postMessage(null);
    };
  } else Z = function() {
    S(U, 0);
  };
  function z(C) {
    b = C, j || (j = !0, Z());
  }
  function T(C, D) {
    N = S(function() {
      C(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    g || _ || (g = !0, z(x));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(C) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = w;
    }
    var Q = w;
    w = D;
    try {
      return C();
    } finally {
      w = Q;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, D) {
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
    var Q = w;
    w = C;
    try {
      return D();
    } finally {
      w = Q;
    }
  }, e.unstable_scheduleCallback = function(C, D, Q) {
    var I = e.unstable_now();
    switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? I + Q : I) : Q = I, C) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = Q + K, C = { id: h++, callback: D, priorityLevel: C, startTime: Q, expirationTime: K, sortIndex: -1 }, Q > I ? (C.sortIndex = Q, t(d, C), n(c) === null && C === n(d) && (k ? (m(N), N = -1) : k = !0, T(y, Q - I))) : (C.sortIndex = K, t(c, C), g || _ || (g = !0, z(x))), C;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(C) {
    var D = w;
    return function() {
      var Q = w;
      w = D;
      try {
        return C.apply(this, arguments);
      } finally {
        w = Q;
      }
    };
  };
})(Mc);
Ec.exports = Mc;
var $m = Ec.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Um = f, lt = $m;
function W(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ic = /* @__PURE__ */ new Set(), Tr = {};
function bn(e, t) {
  qn(e, t), qn(e + "Capture", t);
}
function qn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) Ic.add(t[e]);
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ra = Object.prototype.hasOwnProperty, Qm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, si = {}, ai = {};
function Vm(e) {
  return ra.call(ai, e) ? !0 : ra.call(si, e) ? !1 : Qm.test(e) ? ai[e] = !0 : (si[e] = !0, !1);
}
function Bm(e, t, n, r) {
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
function Hm(e, t, n, r) {
  if (t === null || typeof t > "u" || Bm(e, t, n, r)) return !0;
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
function Ke(e, t, n, r, s, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ze[e] = new Ke(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ze[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ze[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ze[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ze[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ze[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ze[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ze[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ze[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lo = /[\-:]([a-z])/g;
function so(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    lo,
    so
  );
  ze[t] = new Ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(lo, so);
  ze[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(lo, so);
  ze[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ze[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ze[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ao(e, t, n, r) {
  var s = ze.hasOwnProperty(t) ? ze[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Hm(t, n, s, r) && (n = null), r || s === null ? Vm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wt = Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, il = Symbol.for("react.element"), Ln = Symbol.for("react.portal"), Tn = Symbol.for("react.fragment"), oo = Symbol.for("react.strict_mode"), la = Symbol.for("react.profiler"), Lc = Symbol.for("react.provider"), Tc = Symbol.for("react.context"), io = Symbol.for("react.forward_ref"), sa = Symbol.for("react.suspense"), aa = Symbol.for("react.suspense_list"), co = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), Dc = Symbol.for("react.offscreen"), oi = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object" ? null : (e = oi && e[oi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ce = Object.assign, Ls;
function wr(e) {
  if (Ls === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ls = t && t[1] || "";
  }
  return `
` + Ls + e;
}
var Ts = !1;
function Ds(e, t) {
  if (!e || Ts) return "";
  Ts = !0;
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
    Ts = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function Km(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ds(e.type, !1), e;
    case 11:
      return e = Ds(e.type.render, !1), e;
    case 1:
      return e = Ds(e.type, !0), e;
    default:
      return "";
  }
}
function oa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Ln:
      return "Portal";
    case la:
      return "Profiler";
    case oo:
      return "StrictMode";
    case sa:
      return "Suspense";
    case aa:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Tc:
      return (e.displayName || "Context") + ".Consumer";
    case Lc:
      return (e._context.displayName || "Context") + ".Provider";
    case io:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case co:
      return t = e.displayName || null, t !== null ? t : oa(e.type) || "Memo";
    case Vt:
      t = e._payload, e = e._init;
      try {
        return oa(e(t));
      } catch {
      }
  }
  return null;
}
function Gm(e) {
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
      return oa(t);
    case 8:
      return t === oo ? "StrictMode" : "Mode";
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
function sn(e) {
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
function Pc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function qm(e) {
  var t = Pc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function cl(e) {
  e._valueTracker || (e._valueTracker = qm(e));
}
function Rc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Pc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Wl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ia(e, t) {
  var n = t.checked;
  return Ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ii(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = sn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Oc(e, t) {
  t = t.checked, t != null && ao(e, "checked", t, !1);
}
function ca(e, t) {
  Oc(e, t);
  var n = sn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? da(e, t.type, n) : t.hasOwnProperty("defaultValue") && da(e, t.type, sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ci(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function da(e, t, n) {
  (t !== "number" || Wl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xr = Array.isArray;
function Qn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        e[s].selected = !0, r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ua(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return Ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function di(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(W(92));
      if (xr(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: sn(n) };
}
function Ac(e, t) {
  var n = sn(t.value), r = sn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ui(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ma(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? zc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var dl, Fc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (dl = dl || document.createElement("div"), dl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sr = {
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
}, Ym = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sr).forEach(function(e) {
  Ym.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Sr[t] = Sr[e];
  });
});
function Wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Sr.hasOwnProperty(e) && Sr[e] ? ("" + t).trim() : t + "px";
}
function $c(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = Wc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var Xm = Ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function fa(e, t) {
  if (t) {
    if (Xm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function pa(e, t) {
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
var ha = null;
function uo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ga = null, Vn = null, Bn = null;
function mi(e) {
  if (e = nl(e)) {
    if (typeof ga != "function") throw Error(W(280));
    var t = e.stateNode;
    t && (t = gs(t), ga(e.stateNode, e.type, t));
  }
}
function Uc(e) {
  Vn ? Bn ? Bn.push(e) : Bn = [e] : Vn = e;
}
function Qc() {
  if (Vn) {
    var e = Vn, t = Bn;
    if (Bn = Vn = null, mi(e), t) for (e = 0; e < t.length; e++) mi(t[e]);
  }
}
function Vc(e, t) {
  return e(t);
}
function Bc() {
}
var Ps = !1;
function Hc(e, t, n) {
  if (Ps) return e(t, n);
  Ps = !0;
  try {
    return Vc(e, t, n);
  } finally {
    Ps = !1, (Vn !== null || Bn !== null) && (Bc(), Qc());
  }
}
function Pr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gs(n);
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
  if (n && typeof n != "function") throw Error(W(231, t, typeof n));
  return n;
}
var ya = !1;
if (Rt) try {
  var mr = {};
  Object.defineProperty(mr, "passive", { get: function() {
    ya = !0;
  } }), window.addEventListener("test", mr, mr), window.removeEventListener("test", mr, mr);
} catch {
  ya = !1;
}
function Zm(e, t, n, r, s, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var jr = !1, $l = null, Ul = !1, va = null, Jm = { onError: function(e) {
  jr = !0, $l = e;
} };
function ef(e, t, n, r, s, a, o, i, c) {
  jr = !1, $l = null, Zm.apply(Jm, arguments);
}
function tf(e, t, n, r, s, a, o, i, c) {
  if (ef.apply(this, arguments), jr) {
    if (jr) {
      var d = $l;
      jr = !1, $l = null;
    } else throw Error(W(198));
    Ul || (Ul = !0, va = d);
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
function Kc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function fi(e) {
  if (Cn(e) !== e) throw Error(W(188));
}
function nf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Cn(e), t === null) throw Error(W(188));
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
        if (a === n) return fi(s), e;
        if (a === r) return fi(s), t;
        a = a.sibling;
      }
      throw Error(W(188));
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
        if (!o) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? e : t;
}
function Gc(e) {
  return e = nf(e), e !== null ? qc(e) : null;
}
function qc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yc = lt.unstable_scheduleCallback, pi = lt.unstable_cancelCallback, rf = lt.unstable_shouldYield, lf = lt.unstable_requestPaint, Ee = lt.unstable_now, sf = lt.unstable_getCurrentPriorityLevel, mo = lt.unstable_ImmediatePriority, Xc = lt.unstable_UserBlockingPriority, Ql = lt.unstable_NormalPriority, af = lt.unstable_LowPriority, Zc = lt.unstable_IdlePriority, ms = null, Nt = null;
function of(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
    Nt.onCommitFiberRoot(ms, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var _t = Math.clz32 ? Math.clz32 : uf, cf = Math.log, df = Math.LN2;
function uf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (cf(e) / df | 0) | 0;
}
var ul = 64, ml = 4194304;
function _r(e) {
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
function Vl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~s;
    i !== 0 ? r = _r(i) : (a &= o, a !== 0 && (r = _r(a)));
  } else o = n & ~s, o !== 0 ? r = _r(o) : a !== 0 && (r = _r(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - _t(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function mf(e, t) {
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
function ff(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - _t(a), i = 1 << o, c = s[o];
    c === -1 ? (!(i & n) || i & r) && (s[o] = mf(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function wa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Jc() {
  var e = ul;
  return ul <<= 1, !(ul & 4194240) && (ul = 64), e;
}
function Rs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function el(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _t(t), e[t] = n;
}
function pf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - _t(n), a = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
  }
}
function fo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - _t(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var pe = 0;
function ed(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var td, po, nd, rd, ld, xa = !1, fl = [], Xt = null, Zt = null, Jt = null, Rr = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Map(), Ht = [], hf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function fr(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = nl(t), t !== null && po(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function gf(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return Xt = fr(Xt, e, t, n, r, s), !0;
    case "dragenter":
      return Zt = fr(Zt, e, t, n, r, s), !0;
    case "mouseover":
      return Jt = fr(Jt, e, t, n, r, s), !0;
    case "pointerover":
      var a = s.pointerId;
      return Rr.set(a, fr(Rr.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return a = s.pointerId, Or.set(a, fr(Or.get(a) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function sd(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Kc(n), t !== null) {
          e.blockedOn = t, ld(e.priority, function() {
            nd(n);
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
function Ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _a(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ha = r, n.target.dispatchEvent(r), ha = null;
    } else return t = nl(n), t !== null && po(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function gi(e, t, n) {
  Ml(e) && n.delete(t);
}
function yf() {
  xa = !1, Xt !== null && Ml(Xt) && (Xt = null), Zt !== null && Ml(Zt) && (Zt = null), Jt !== null && Ml(Jt) && (Jt = null), Rr.forEach(gi), Or.forEach(gi);
}
function pr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, xa || (xa = !0, lt.unstable_scheduleCallback(lt.unstable_NormalPriority, yf)));
}
function Ar(e) {
  function t(s) {
    return pr(s, e);
  }
  if (0 < fl.length) {
    pr(fl[0], e);
    for (var n = 1; n < fl.length; n++) {
      var r = fl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Xt !== null && pr(Xt, e), Zt !== null && pr(Zt, e), Jt !== null && pr(Jt, e), Rr.forEach(t), Or.forEach(t), n = 0; n < Ht.length; n++) r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); ) sd(n), n.blockedOn === null && Ht.shift();
}
var Hn = Wt.ReactCurrentBatchConfig, Bl = !0;
function vf(e, t, n, r) {
  var s = pe, a = Hn.transition;
  Hn.transition = null;
  try {
    pe = 1, ho(e, t, n, r);
  } finally {
    pe = s, Hn.transition = a;
  }
}
function wf(e, t, n, r) {
  var s = pe, a = Hn.transition;
  Hn.transition = null;
  try {
    pe = 4, ho(e, t, n, r);
  } finally {
    pe = s, Hn.transition = a;
  }
}
function ho(e, t, n, r) {
  if (Bl) {
    var s = _a(e, t, n, r);
    if (s === null) Bs(e, t, r, Hl, n), hi(e, r);
    else if (gf(s, e, t, n, r)) r.stopPropagation();
    else if (hi(e, r), t & 4 && -1 < hf.indexOf(e)) {
      for (; s !== null; ) {
        var a = nl(s);
        if (a !== null && td(a), a = _a(e, t, n, r), a === null && Bs(e, t, r, Hl, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else Bs(e, t, r, null, n);
  }
}
var Hl = null;
function _a(e, t, n, r) {
  if (Hl = null, e = uo(r), e = pn(e), e !== null) if (t = Cn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Kc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Hl = e, null;
}
function ad(e) {
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
      switch (sf()) {
        case mo:
          return 1;
        case Xc:
          return 4;
        case Ql:
        case af:
          return 16;
        case Zc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null, go = null, Il = null;
function od() {
  if (Il) return Il;
  var e, t = go, n = t.length, r, s = "value" in qt ? qt.value : qt.textContent, a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++) ;
  return Il = s.slice(e, 1 < r ? 1 - r : void 0);
}
function Ll(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function pl() {
  return !0;
}
function yi() {
  return !1;
}
function at(e) {
  function t(n, r, s, a, o) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? pl : yi, this.isPropagationStopped = yi, this;
  }
  return Ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pl);
  }, persist: function() {
  }, isPersistent: pl }), t;
}
var lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, yo = at(lr), tl = Ce({}, lr, { view: 0, detail: 0 }), xf = at(tl), Os, As, hr, fs = Ce({}, tl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== hr && (hr && e.type === "mousemove" ? (Os = e.screenX - hr.screenX, As = e.screenY - hr.screenY) : As = Os = 0, hr = e), Os);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : As;
} }), vi = at(fs), _f = Ce({}, fs, { dataTransfer: 0 }), kf = at(_f), Sf = Ce({}, tl, { relatedTarget: 0 }), zs = at(Sf), jf = Ce({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bf = at(jf), Cf = Ce({}, lr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Nf = at(Cf), Ef = Ce({}, lr, { data: 0 }), wi = at(Ef), Mf = {
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
}, If = {
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
}, Lf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Tf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lf[e]) ? !!t[e] : !1;
}
function vo() {
  return Tf;
}
var Df = Ce({}, tl, { key: function(e) {
  if (e.key) {
    var t = Mf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? If[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vo, charCode: function(e) {
  return e.type === "keypress" ? Ll(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Pf = at(Df), Rf = Ce({}, fs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xi = at(Rf), Of = Ce({}, tl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vo }), Af = at(Of), zf = Ce({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ff = at(zf), Wf = Ce({}, fs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $f = at(Wf), Uf = [9, 13, 27, 32], wo = Rt && "CompositionEvent" in window, br = null;
Rt && "documentMode" in document && (br = document.documentMode);
var Qf = Rt && "TextEvent" in window && !br, id = Rt && (!wo || br && 8 < br && 11 >= br), _i = " ", ki = !1;
function cd(e, t) {
  switch (e) {
    case "keyup":
      return Uf.indexOf(t.keyCode) !== -1;
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
function dd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function Vf(e, t) {
  switch (e) {
    case "compositionend":
      return dd(t);
    case "keypress":
      return t.which !== 32 ? null : (ki = !0, _i);
    case "textInput":
      return e = t.data, e === _i && ki ? null : e;
    default:
      return null;
  }
}
function Bf(e, t) {
  if (Dn) return e === "compositionend" || !wo && cd(e, t) ? (e = od(), Il = go = qt = null, Dn = !1, e) : null;
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
      return id && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Si(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hf[e.type] : t === "textarea";
}
function ud(e, t, n, r) {
  Uc(r), t = Kl(t, "onChange"), 0 < t.length && (n = new yo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Cr = null, zr = null;
function Kf(e) {
  kd(e, 0);
}
function ps(e) {
  var t = On(e);
  if (Rc(t)) return e;
}
function Gf(e, t) {
  if (e === "change") return t;
}
var md = !1;
if (Rt) {
  var Fs;
  if (Rt) {
    var Ws = "oninput" in document;
    if (!Ws) {
      var ji = document.createElement("div");
      ji.setAttribute("oninput", "return;"), Ws = typeof ji.oninput == "function";
    }
    Fs = Ws;
  } else Fs = !1;
  md = Fs && (!document.documentMode || 9 < document.documentMode);
}
function bi() {
  Cr && (Cr.detachEvent("onpropertychange", fd), zr = Cr = null);
}
function fd(e) {
  if (e.propertyName === "value" && ps(zr)) {
    var t = [];
    ud(t, zr, e, uo(e)), Hc(Kf, t);
  }
}
function qf(e, t, n) {
  e === "focusin" ? (bi(), Cr = t, zr = n, Cr.attachEvent("onpropertychange", fd)) : e === "focusout" && bi();
}
function Yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ps(zr);
}
function Xf(e, t) {
  if (e === "click") return ps(t);
}
function Zf(e, t) {
  if (e === "input" || e === "change") return ps(t);
}
function Jf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : Jf;
function Fr(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!ra.call(t, s) || !St(e[s], t[s])) return !1;
  }
  return !0;
}
function Ci(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ni(e, t) {
  var n = Ci(e);
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
    n = Ci(n);
  }
}
function pd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function hd() {
  for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wl(e.document);
  }
  return t;
}
function xo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ep(e) {
  var t = hd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && pd(n.ownerDocument.documentElement, n)) {
    if (r !== null && xo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, a = Math.min(r.start, s);
        r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = Ni(n, a);
        var o = Ni(
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
var tp = Rt && "documentMode" in document && 11 >= document.documentMode, Pn = null, ka = null, Nr = null, Sa = !1;
function Ei(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sa || Pn == null || Pn !== Wl(r) || (r = Pn, "selectionStart" in r && xo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nr && Fr(Nr, r) || (Nr = r, r = Kl(ka, "onSelect"), 0 < r.length && (t = new yo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Pn)));
}
function hl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Rn = { animationend: hl("Animation", "AnimationEnd"), animationiteration: hl("Animation", "AnimationIteration"), animationstart: hl("Animation", "AnimationStart"), transitionend: hl("Transition", "TransitionEnd") }, $s = {}, gd = {};
Rt && (gd = document.createElement("div").style, "AnimationEvent" in window || (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation), "TransitionEvent" in window || delete Rn.transitionend.transition);
function hs(e) {
  if ($s[e]) return $s[e];
  if (!Rn[e]) return e;
  var t = Rn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in gd) return $s[e] = t[n];
  return e;
}
var yd = hs("animationend"), vd = hs("animationiteration"), wd = hs("animationstart"), xd = hs("transitionend"), _d = /* @__PURE__ */ new Map(), Mi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function on(e, t) {
  _d.set(e, t), bn(t, [e]);
}
for (var Us = 0; Us < Mi.length; Us++) {
  var Qs = Mi[Us], np = Qs.toLowerCase(), rp = Qs[0].toUpperCase() + Qs.slice(1);
  on(np, "on" + rp);
}
on(yd, "onAnimationEnd");
on(vd, "onAnimationIteration");
on(wd, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(xd, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lp = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function Ii(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, tf(r, t, void 0, e), e.currentTarget = null;
}
function kd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && s.isPropagationStopped()) break e;
        Ii(s, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && s.isPropagationStopped()) break e;
        Ii(s, i, d), a = c;
      }
    }
  }
  if (Ul) throw e = va, Ul = !1, va = null, e;
}
function xe(e, t) {
  var n = t[Ea];
  n === void 0 && (n = t[Ea] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Sd(t, e, 2, !1), n.add(r));
}
function Vs(e, t, n) {
  var r = 0;
  t && (r |= 4), Sd(n, e, r, t);
}
var gl = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
  if (!e[gl]) {
    e[gl] = !0, Ic.forEach(function(n) {
      n !== "selectionchange" && (lp.has(n) || Vs(n, !1, e), Vs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gl] || (t[gl] = !0, Vs("selectionchange", !1, t));
  }
}
function Sd(e, t, n, r) {
  switch (ad(t)) {
    case 1:
      var s = vf;
      break;
    case 4:
      s = wf;
      break;
    default:
      s = ho;
  }
  n = s.bind(null, t, n, e), s = void 0, !ya || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function Bs(e, t, n, r, s) {
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
  Hc(function() {
    var d = a, h = uo(n), v = [];
    e: {
      var w = _d.get(e);
      if (w !== void 0) {
        var _ = yo, g = e;
        switch (e) {
          case "keypress":
            if (Ll(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = Pf;
            break;
          case "focusin":
            g = "focus", _ = zs;
            break;
          case "focusout":
            g = "blur", _ = zs;
            break;
          case "beforeblur":
          case "afterblur":
            _ = zs;
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
            _ = vi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = kf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = Af;
            break;
          case yd:
          case vd:
          case wd:
            _ = bf;
            break;
          case xd:
            _ = Ff;
            break;
          case "scroll":
            _ = xf;
            break;
          case "wheel":
            _ = $f;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = Nf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = xi;
        }
        var k = (t & 4) !== 0, S = !k && e === "scroll", m = k ? w !== null ? w + "Capture" : null : w;
        k = [];
        for (var u = d, p; u !== null; ) {
          p = u;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, m !== null && (y = Pr(u, m), y != null && k.push($r(u, y, p)))), S) break;
          u = u.return;
        }
        0 < k.length && (w = new _(w, g, null, n, h), v.push({ event: w, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", w && n !== ha && (g = n.relatedTarget || n.fromElement) && (pn(g) || g[Ot])) break e;
        if ((_ || w) && (w = h.window === h ? h : (w = h.ownerDocument) ? w.defaultView || w.parentWindow : window, _ ? (g = n.relatedTarget || n.toElement, _ = d, g = g ? pn(g) : null, g !== null && (S = Cn(g), g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (_ = null, g = d), _ !== g)) {
          if (k = vi, y = "onMouseLeave", m = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (k = xi, y = "onPointerLeave", m = "onPointerEnter", u = "pointer"), S = _ == null ? w : On(_), p = g == null ? w : On(g), w = new k(y, u + "leave", _, n, h), w.target = S, w.relatedTarget = p, y = null, pn(h) === d && (k = new k(m, u + "enter", g, n, h), k.target = p, k.relatedTarget = S, y = k), S = y, _ && g) t: {
            for (k = _, m = g, u = 0, p = k; p; p = In(p)) u++;
            for (p = 0, y = m; y; y = In(y)) p++;
            for (; 0 < u - p; ) k = In(k), u--;
            for (; 0 < p - u; ) m = In(m), p--;
            for (; u--; ) {
              if (k === m || m !== null && k === m.alternate) break t;
              k = In(k), m = In(m);
            }
            k = null;
          }
          else k = null;
          _ !== null && Li(v, w, _, k, !1), g !== null && S !== null && Li(v, S, g, k, !0);
        }
      }
      e: {
        if (w = d ? On(d) : window, _ = w.nodeName && w.nodeName.toLowerCase(), _ === "select" || _ === "input" && w.type === "file") var x = Gf;
        else if (Si(w)) if (md) x = Zf;
        else {
          x = Yf;
          var j = qf;
        }
        else (_ = w.nodeName) && _.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (x = Xf);
        if (x && (x = x(e, d))) {
          ud(v, x, n, h);
          break e;
        }
        j && j(e, w, d), e === "focusout" && (j = w._wrapperState) && j.controlled && w.type === "number" && da(w, "number", w.value);
      }
      switch (j = d ? On(d) : window, e) {
        case "focusin":
          (Si(j) || j.contentEditable === "true") && (Pn = j, ka = d, Nr = null);
          break;
        case "focusout":
          Nr = ka = Pn = null;
          break;
        case "mousedown":
          Sa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sa = !1, Ei(v, n, h);
          break;
        case "selectionchange":
          if (tp) break;
        case "keydown":
        case "keyup":
          Ei(v, n, h);
      }
      var b;
      if (wo) e: {
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
      else Dn ? cd(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (id && n.locale !== "ko" && (Dn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Dn && (b = od()) : (qt = h, go = "value" in qt ? qt.value : qt.textContent, Dn = !0)), j = Kl(d, N), 0 < j.length && (N = new wi(N, e, null, n, h), v.push({ event: N, listeners: j }), b ? N.data = b : (b = dd(n), b !== null && (N.data = b)))), (b = Qf ? Vf(e, n) : Bf(e, n)) && (d = Kl(d, "onBeforeInput"), 0 < d.length && (h = new wi("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: d }), h.data = b));
    }
    kd(v, t);
  });
}
function $r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Kl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, a = s.stateNode;
    s.tag === 5 && a !== null && (s = a, a = Pr(e, n), a != null && r.unshift($r(e, a, s)), a = Pr(e, t), a != null && r.push($r(e, a, s))), e = e.return;
  }
  return r;
}
function In(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Li(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, s ? (c = Pr(n, a), c != null && o.unshift($r(n, c, i))) : s || (c = Pr(n, a), c != null && o.push($r(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var sp = /\r\n?/g, ap = /\u0000|\uFFFD/g;
function Ti(e) {
  return (typeof e == "string" ? e : "" + e).replace(sp, `
`).replace(ap, "");
}
function yl(e, t, n) {
  if (t = Ti(t), Ti(e) !== t && n) throw Error(W(425));
}
function Gl() {
}
var ja = null, ba = null;
function Ca(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Na = typeof setTimeout == "function" ? setTimeout : void 0, op = typeof clearTimeout == "function" ? clearTimeout : void 0, Di = typeof Promise == "function" ? Promise : void 0, ip = typeof queueMicrotask == "function" ? queueMicrotask : typeof Di < "u" ? function(e) {
  return Di.resolve(null).then(e).catch(cp);
} : Na;
function cp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Hs(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), Ar(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  Ar(t);
}
function en(e) {
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
function Pi(e) {
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
var sr = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + sr, Ur = "__reactProps$" + sr, Ot = "__reactContainer$" + sr, Ea = "__reactEvents$" + sr, dp = "__reactListeners$" + sr, up = "__reactHandles$" + sr;
function pn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ot] || n[Ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Pi(e); e !== null; ) {
        if (n = e[Ct]) return n;
        e = Pi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function nl(e) {
  return e = e[Ct] || e[Ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function On(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function gs(e) {
  return e[Ur] || null;
}
var Ma = [], An = -1;
function cn(e) {
  return { current: e };
}
function _e(e) {
  0 > An || (e.current = Ma[An], Ma[An] = null, An--);
}
function ve(e, t) {
  An++, Ma[An] = e.current, e.current = t;
}
var an = {}, Qe = cn(an), Ye = cn(!1), wn = an;
function Yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function Xe(e) {
  return e = e.childContextTypes, e != null;
}
function ql() {
  _e(Ye), _e(Qe);
}
function Ri(e, t, n) {
  if (Qe.current !== an) throw Error(W(168));
  ve(Qe, t), ve(Ye, n);
}
function jd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(W(108, Gm(e) || "Unknown", s));
  return Ce({}, n, r);
}
function Yl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, wn = Qe.current, ve(Qe, e), ve(Ye, Ye.current), !0;
}
function Oi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(W(169));
  n ? (e = jd(e, t, wn), r.__reactInternalMemoizedMergedChildContext = e, _e(Ye), _e(Qe), ve(Qe, e)) : _e(Ye), ve(Ye, n);
}
var Lt = null, ys = !1, Ks = !1;
function bd(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function mp(e) {
  ys = !0, bd(e);
}
function dn() {
  if (!Ks && Lt !== null) {
    Ks = !0;
    var e = 0, t = pe;
    try {
      var n = Lt;
      for (pe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Lt = null, ys = !1;
    } catch (s) {
      throw Lt !== null && (Lt = Lt.slice(e + 1)), Yc(mo, dn), s;
    } finally {
      pe = t, Ks = !1;
    }
  }
  return null;
}
var zn = [], Fn = 0, Xl = null, Zl = 0, dt = [], ut = 0, xn = null, Tt = 1, Dt = "";
function mn(e, t) {
  zn[Fn++] = Zl, zn[Fn++] = Xl, Xl = e, Zl = t;
}
function Cd(e, t, n) {
  dt[ut++] = Tt, dt[ut++] = Dt, dt[ut++] = xn, xn = e;
  var r = Tt;
  e = Dt;
  var s = 32 - _t(r) - 1;
  r &= ~(1 << s), n += 1;
  var a = 32 - _t(t) + s;
  if (30 < a) {
    var o = s - s % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, Tt = 1 << 32 - _t(t) + s | n << s | r, Dt = a + e;
  } else Tt = 1 << a | n << s | r, Dt = e;
}
function _o(e) {
  e.return !== null && (mn(e, 1), Cd(e, 1, 0));
}
function ko(e) {
  for (; e === Xl; ) Xl = zn[--Fn], zn[Fn] = null, Zl = zn[--Fn], zn[Fn] = null;
  for (; e === xn; ) xn = dt[--ut], dt[ut] = null, Dt = dt[--ut], dt[ut] = null, Tt = dt[--ut], dt[ut] = null;
}
var rt = null, nt = null, Se = !1, wt = null;
function Nd(e, t) {
  var n = mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ai(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = en(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = xn !== null ? { id: Tt, overflow: Dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, rt = e, nt = null, !0) : !1;
    default:
      return !1;
  }
}
function Ia(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function La(e) {
  if (Se) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Ai(e, t)) {
        if (Ia(e)) throw Error(W(418));
        t = en(n.nextSibling);
        var r = rt;
        t && Ai(e, t) ? Nd(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, rt = e);
      }
    } else {
      if (Ia(e)) throw Error(W(418));
      e.flags = e.flags & -4097 | 2, Se = !1, rt = e;
    }
  }
}
function zi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  rt = e;
}
function vl(e) {
  if (e !== rt) return !1;
  if (!Se) return zi(e), Se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ca(e.type, e.memoizedProps)), t && (t = nt)) {
    if (Ia(e)) throw Ed(), Error(W(418));
    for (; t; ) Nd(e, t), t = en(t.nextSibling);
  }
  if (zi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = en(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function Ed() {
  for (var e = nt; e; ) e = en(e.nextSibling);
}
function Xn() {
  nt = rt = null, Se = !1;
}
function So(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var fp = Wt.ReactCurrentBatchConfig;
function gr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, e));
      var s = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = s.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, e));
  }
  return e;
}
function wl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(W(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Fi(e) {
  var t = e._init;
  return t(e._payload);
}
function Md(e) {
  function t(m, u) {
    if (e) {
      var p = m.deletions;
      p === null ? (m.deletions = [u], m.flags |= 16) : p.push(u);
    }
  }
  function n(m, u) {
    if (!e) return null;
    for (; u !== null; ) t(m, u), u = u.sibling;
    return null;
  }
  function r(m, u) {
    for (m = /* @__PURE__ */ new Map(); u !== null; ) u.key !== null ? m.set(u.key, u) : m.set(u.index, u), u = u.sibling;
    return m;
  }
  function s(m, u) {
    return m = ln(m, u), m.index = 0, m.sibling = null, m;
  }
  function a(m, u, p) {
    return m.index = p, e ? (p = m.alternate, p !== null ? (p = p.index, p < u ? (m.flags |= 2, u) : p) : (m.flags |= 2, u)) : (m.flags |= 1048576, u);
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function i(m, u, p, y) {
    return u === null || u.tag !== 6 ? (u = ea(p, m.mode, y), u.return = m, u) : (u = s(u, p), u.return = m, u);
  }
  function c(m, u, p, y) {
    var x = p.type;
    return x === Tn ? h(m, u, p.props.children, y, p.key) : u !== null && (u.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Vt && Fi(x) === u.type) ? (y = s(u, p.props), y.ref = gr(m, u, p), y.return = m, y) : (y = zl(p.type, p.key, p.props, null, m.mode, y), y.ref = gr(m, u, p), y.return = m, y);
  }
  function d(m, u, p, y) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== p.containerInfo || u.stateNode.implementation !== p.implementation ? (u = ta(p, m.mode, y), u.return = m, u) : (u = s(u, p.children || []), u.return = m, u);
  }
  function h(m, u, p, y, x) {
    return u === null || u.tag !== 7 ? (u = vn(p, m.mode, y, x), u.return = m, u) : (u = s(u, p), u.return = m, u);
  }
  function v(m, u, p) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = ea("" + u, m.mode, p), u.return = m, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case il:
          return p = zl(u.type, u.key, u.props, null, m.mode, p), p.ref = gr(m, null, u), p.return = m, p;
        case Ln:
          return u = ta(u, m.mode, p), u.return = m, u;
        case Vt:
          var y = u._init;
          return v(m, y(u._payload), p);
      }
      if (xr(u) || ur(u)) return u = vn(u, m.mode, p, null), u.return = m, u;
      wl(m, u);
    }
    return null;
  }
  function w(m, u, p, y) {
    var x = u !== null ? u.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return x !== null ? null : i(m, u, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case il:
          return p.key === x ? c(m, u, p, y) : null;
        case Ln:
          return p.key === x ? d(m, u, p, y) : null;
        case Vt:
          return x = p._init, w(
            m,
            u,
            x(p._payload),
            y
          );
      }
      if (xr(p) || ur(p)) return x !== null ? null : h(m, u, p, y, null);
      wl(m, p);
    }
    return null;
  }
  function _(m, u, p, y, x) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return m = m.get(p) || null, i(u, m, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case il:
          return m = m.get(y.key === null ? p : y.key) || null, c(u, m, y, x);
        case Ln:
          return m = m.get(y.key === null ? p : y.key) || null, d(u, m, y, x);
        case Vt:
          var j = y._init;
          return _(m, u, p, j(y._payload), x);
      }
      if (xr(y) || ur(y)) return m = m.get(p) || null, h(u, m, y, x, null);
      wl(u, y);
    }
    return null;
  }
  function g(m, u, p, y) {
    for (var x = null, j = null, b = u, N = u = 0, R = null; b !== null && N < p.length; N++) {
      b.index > N ? (R = b, b = null) : R = b.sibling;
      var P = w(m, b, p[N], y);
      if (P === null) {
        b === null && (b = R);
        break;
      }
      e && b && P.alternate === null && t(m, b), u = a(P, u, N), j === null ? x = P : j.sibling = P, j = P, b = R;
    }
    if (N === p.length) return n(m, b), Se && mn(m, N), x;
    if (b === null) {
      for (; N < p.length; N++) b = v(m, p[N], y), b !== null && (u = a(b, u, N), j === null ? x = b : j.sibling = b, j = b);
      return Se && mn(m, N), x;
    }
    for (b = r(m, b); N < p.length; N++) R = _(b, m, N, p[N], y), R !== null && (e && R.alternate !== null && b.delete(R.key === null ? N : R.key), u = a(R, u, N), j === null ? x = R : j.sibling = R, j = R);
    return e && b.forEach(function(L) {
      return t(m, L);
    }), Se && mn(m, N), x;
  }
  function k(m, u, p, y) {
    var x = ur(p);
    if (typeof x != "function") throw Error(W(150));
    if (p = x.call(p), p == null) throw Error(W(151));
    for (var j = x = null, b = u, N = u = 0, R = null, P = p.next(); b !== null && !P.done; N++, P = p.next()) {
      b.index > N ? (R = b, b = null) : R = b.sibling;
      var L = w(m, b, P.value, y);
      if (L === null) {
        b === null && (b = R);
        break;
      }
      e && b && L.alternate === null && t(m, b), u = a(L, u, N), j === null ? x = L : j.sibling = L, j = L, b = R;
    }
    if (P.done) return n(
      m,
      b
    ), Se && mn(m, N), x;
    if (b === null) {
      for (; !P.done; N++, P = p.next()) P = v(m, P.value, y), P !== null && (u = a(P, u, N), j === null ? x = P : j.sibling = P, j = P);
      return Se && mn(m, N), x;
    }
    for (b = r(m, b); !P.done; N++, P = p.next()) P = _(b, m, N, P.value, y), P !== null && (e && P.alternate !== null && b.delete(P.key === null ? N : P.key), u = a(P, u, N), j === null ? x = P : j.sibling = P, j = P);
    return e && b.forEach(function(U) {
      return t(m, U);
    }), Se && mn(m, N), x;
  }
  function S(m, u, p, y) {
    if (typeof p == "object" && p !== null && p.type === Tn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case il:
          e: {
            for (var x = p.key, j = u; j !== null; ) {
              if (j.key === x) {
                if (x = p.type, x === Tn) {
                  if (j.tag === 7) {
                    n(m, j.sibling), u = s(j, p.props.children), u.return = m, m = u;
                    break e;
                  }
                } else if (j.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Vt && Fi(x) === j.type) {
                  n(m, j.sibling), u = s(j, p.props), u.ref = gr(m, j, p), u.return = m, m = u;
                  break e;
                }
                n(m, j);
                break;
              } else t(m, j);
              j = j.sibling;
            }
            p.type === Tn ? (u = vn(p.props.children, m.mode, y, p.key), u.return = m, m = u) : (y = zl(p.type, p.key, p.props, null, m.mode, y), y.ref = gr(m, u, p), y.return = m, m = y);
          }
          return o(m);
        case Ln:
          e: {
            for (j = p.key; u !== null; ) {
              if (u.key === j) if (u.tag === 4 && u.stateNode.containerInfo === p.containerInfo && u.stateNode.implementation === p.implementation) {
                n(m, u.sibling), u = s(u, p.children || []), u.return = m, m = u;
                break e;
              } else {
                n(m, u);
                break;
              }
              else t(m, u);
              u = u.sibling;
            }
            u = ta(p, m.mode, y), u.return = m, m = u;
          }
          return o(m);
        case Vt:
          return j = p._init, S(m, u, j(p._payload), y);
      }
      if (xr(p)) return g(m, u, p, y);
      if (ur(p)) return k(m, u, p, y);
      wl(m, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, u !== null && u.tag === 6 ? (n(m, u.sibling), u = s(u, p), u.return = m, m = u) : (n(m, u), u = ea(p, m.mode, y), u.return = m, m = u), o(m)) : n(m, u);
  }
  return S;
}
var Zn = Md(!0), Id = Md(!1), Jl = cn(null), es = null, Wn = null, jo = null;
function bo() {
  jo = Wn = es = null;
}
function Co(e) {
  var t = Jl.current;
  _e(Jl), e._currentValue = t;
}
function Ta(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Kn(e, t) {
  es = e, jo = Wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (jo !== e) if (e = { context: e, memoizedValue: t, next: null }, Wn === null) {
    if (es === null) throw Error(W(308));
    Wn = e, es.dependencies = { lanes: 0, firstContext: e };
  } else Wn = Wn.next = e;
  return t;
}
var hn = null;
function No(e) {
  hn === null ? hn = [e] : hn.push(e);
}
function Ld(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, No(t)) : (n.next = s.next, s.next = n), t.interleaved = n, At(e, r);
}
function At(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function Eo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Td(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, me & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, At(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, No(r)) : (t.next = s.next, s.next = t), r.interleaved = t, At(e, n);
}
function Tl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fo(e, n);
  }
}
function Wi(e, t) {
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
function ts(e, t, n, r) {
  var s = e.updateQueue;
  Bt = !1;
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
      var w = i.lane, _ = i.eventTime;
      if ((r & w) === w) {
        h !== null && (h = h.next = {
          eventTime: _,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var g = e, k = i;
          switch (w = t, _ = n, k.tag) {
            case 1:
              if (g = k.payload, typeof g == "function") {
                v = g.call(_, v, w);
                break e;
              }
              v = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = k.payload, w = typeof g == "function" ? g.call(_, v, w) : g, w == null) break e;
              v = Ce({}, v, w);
              break e;
            case 2:
              Bt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, w = s.effects, w === null ? s.effects = [i] : w.push(i));
      } else _ = { eventTime: _, lane: w, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = _, c = v) : h = h.next = _, o |= w;
      if (i = i.next, i === null) {
        if (i = s.shared.pending, i === null) break;
        w = i, i = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = v), s.baseState = c, s.firstBaseUpdate = d, s.lastBaseUpdate = h, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    kn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function $i(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(W(191, s));
      s.call(r);
    }
  }
}
var rl = {}, Et = cn(rl), Qr = cn(rl), Vr = cn(rl);
function gn(e) {
  if (e === rl) throw Error(W(174));
  return e;
}
function Mo(e, t) {
  switch (ve(Vr, t), ve(Qr, e), ve(Et, rl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ma(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ma(t, e);
  }
  _e(Et), ve(Et, t);
}
function Jn() {
  _e(Et), _e(Qr), _e(Vr);
}
function Dd(e) {
  gn(Vr.current);
  var t = gn(Et.current), n = ma(t, e.type);
  t !== n && (ve(Qr, e), ve(Et, n));
}
function Io(e) {
  Qr.current === e && (_e(Et), _e(Qr));
}
var je = cn(0);
function ns(e) {
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
var Gs = [];
function Lo() {
  for (var e = 0; e < Gs.length; e++) Gs[e]._workInProgressVersionPrimary = null;
  Gs.length = 0;
}
var Dl = Wt.ReactCurrentDispatcher, qs = Wt.ReactCurrentBatchConfig, _n = 0, be = null, Ie = null, De = null, rs = !1, Er = !1, Br = 0, pp = 0;
function We() {
  throw Error(W(321));
}
function To(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function Do(e, t, n, r, s, a) {
  if (_n = a, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Dl.current = e === null || e.memoizedState === null ? vp : wp, e = n(r, s), Er) {
    a = 0;
    do {
      if (Er = !1, Br = 0, 25 <= a) throw Error(W(301));
      a += 1, De = Ie = null, t.updateQueue = null, Dl.current = xp, e = n(r, s);
    } while (Er);
  }
  if (Dl.current = ls, t = Ie !== null && Ie.next !== null, _n = 0, De = Ie = be = null, rs = !1, t) throw Error(W(300));
  return e;
}
function Po() {
  var e = Br !== 0;
  return Br = 0, e;
}
function bt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? be.memoizedState = De = e : De = De.next = e, De;
}
function ht() {
  if (Ie === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = De === null ? be.memoizedState : De.next;
  if (t !== null) De = t, Ie = e;
  else {
    if (e === null) throw Error(W(310));
    Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, De === null ? be.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function Hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ys(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = Ie, s = r.baseQueue, a = n.pending;
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
      if ((_n & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, be.lanes |= h, kn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, St(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, be.lanes |= a, kn |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xs(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, s = n.pending, a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = s = s.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== s);
    St(a, t.memoizedState) || (qe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function Pd() {
}
function Rd(e, t) {
  var n = be, r = ht(), s = t(), a = !St(r.memoizedState, s);
  if (a && (r.memoizedState = s, qe = !0), r = r.queue, Ro(zd.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, Kr(9, Ad.bind(null, n, r, s, t), void 0, null), Pe === null) throw Error(W(349));
    _n & 30 || Od(n, t, s);
  }
  return s;
}
function Od(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ad(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Fd(t) && Wd(e);
}
function zd(e, t, n) {
  return n(function() {
    Fd(t) && Wd(e);
  });
}
function Fd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Wd(e) {
  var t = At(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Ui(e) {
  var t = bt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hr, lastRenderedState: e }, t.queue = e, e = e.dispatch = yp.bind(null, be, e), [t.memoizedState, e];
}
function Kr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function $d() {
  return ht().memoizedState;
}
function Pl(e, t, n, r) {
  var s = bt();
  be.flags |= e, s.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r);
}
function vs(e, t, n, r) {
  var s = ht();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ie !== null) {
    var o = Ie.memoizedState;
    if (a = o.destroy, r !== null && To(r, o.deps)) {
      s.memoizedState = Kr(t, n, a, r);
      return;
    }
  }
  be.flags |= e, s.memoizedState = Kr(1 | t, n, a, r);
}
function Qi(e, t) {
  return Pl(8390656, 8, e, t);
}
function Ro(e, t) {
  return vs(2048, 8, e, t);
}
function Ud(e, t) {
  return vs(4, 2, e, t);
}
function Qd(e, t) {
  return vs(4, 4, e, t);
}
function Vd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Bd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vs(4, 4, Vd.bind(null, t, e), n);
}
function Oo() {
}
function Hd(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && To(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Kd(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && To(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Gd(e, t, n) {
  return _n & 21 ? (St(n, t) || (n = Jc(), be.lanes |= n, kn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function hp(e, t) {
  var n = pe;
  pe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = qs.transition;
  qs.transition = {};
  try {
    e(!1), t();
  } finally {
    pe = n, qs.transition = r;
  }
}
function qd() {
  return ht().memoizedState;
}
function gp(e, t, n) {
  var r = rn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Yd(e)) Xd(t, n);
  else if (n = Ld(e, t, n, r), n !== null) {
    var s = Be();
    kt(n, e, r, s), Zd(n, t, r);
  }
}
function yp(e, t, n) {
  var r = rn(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yd(e)) Xd(t, s);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (s.hasEagerState = !0, s.eagerState = i, St(i, o)) {
        var c = t.interleaved;
        c === null ? (s.next = s, No(t)) : (s.next = c.next, c.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = Ld(e, t, s, r), n !== null && (s = Be(), kt(n, e, r, s), Zd(n, t, r));
  }
}
function Yd(e) {
  var t = e.alternate;
  return e === be || t !== null && t === be;
}
function Xd(e, t) {
  Er = rs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fo(e, n);
  }
}
var ls = { readContext: pt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, vp = { readContext: pt, useCallback: function(e, t) {
  return bt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: Qi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pl(
    4194308,
    4,
    Vd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Pl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Pl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = bt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = bt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = gp.bind(null, be, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = bt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ui, useDebugValue: Oo, useDeferredValue: function(e) {
  return bt().memoizedState = e;
}, useTransition: function() {
  var e = Ui(!1), t = e[0];
  return e = hp.bind(null, e[1]), bt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = be, s = bt();
  if (Se) {
    if (n === void 0) throw Error(W(407));
    n = n();
  } else {
    if (n = t(), Pe === null) throw Error(W(349));
    _n & 30 || Od(r, t, n);
  }
  s.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return s.queue = a, Qi(zd.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Kr(9, Ad.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = bt(), t = Pe.identifierPrefix;
  if (Se) {
    var n = Dt, r = Tt;
    n = (r & ~(1 << 32 - _t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Br++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = pp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wp = {
  readContext: pt,
  useCallback: Hd,
  useContext: pt,
  useEffect: Ro,
  useImperativeHandle: Bd,
  useInsertionEffect: Ud,
  useLayoutEffect: Qd,
  useMemo: Kd,
  useReducer: Ys,
  useRef: $d,
  useState: function() {
    return Ys(Hr);
  },
  useDebugValue: Oo,
  useDeferredValue: function(e) {
    var t = ht();
    return Gd(t, Ie.memoizedState, e);
  },
  useTransition: function() {
    var e = Ys(Hr)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: Pd,
  useSyncExternalStore: Rd,
  useId: qd,
  unstable_isNewReconciler: !1
}, xp = { readContext: pt, useCallback: Hd, useContext: pt, useEffect: Ro, useImperativeHandle: Bd, useInsertionEffect: Ud, useLayoutEffect: Qd, useMemo: Kd, useReducer: Xs, useRef: $d, useState: function() {
  return Xs(Hr);
}, useDebugValue: Oo, useDeferredValue: function(e) {
  var t = ht();
  return Ie === null ? t.memoizedState = e : Gd(t, Ie.memoizedState, e);
}, useTransition: function() {
  var e = Xs(Hr)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: Pd, useSyncExternalStore: Rd, useId: qd, unstable_isNewReconciler: !1 };
function yt(e, t) {
  if (e && e.defaultProps) {
    t = Ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Da(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ws = { isMounted: function(e) {
  return (e = e._reactInternals) ? Cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), s = rn(e), a = Pt(r, s);
  a.payload = t, n != null && (a.callback = n), t = tn(e, a, s), t !== null && (kt(t, e, s, r), Tl(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), s = rn(e), a = Pt(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = tn(e, a, s), t !== null && (kt(t, e, s, r), Tl(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = rn(e), s = Pt(n, r);
  s.tag = 2, t != null && (s.callback = t), t = tn(e, s, r), t !== null && (kt(t, e, r, n), Tl(t, e, r));
} };
function Vi(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(s, a) : !0;
}
function Jd(e, t, n) {
  var r = !1, s = an, a = t.contextType;
  return typeof a == "object" && a !== null ? a = pt(a) : (s = Xe(t) ? wn : Qe.current, r = t.contextTypes, a = (r = r != null) ? Yn(e, s) : an), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ws, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Bi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ws.enqueueReplaceState(t, t.state, null);
}
function Pa(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, Eo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = pt(a) : (a = Xe(t) ? wn : Qe.current, s.context = Yn(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Da(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && ws.enqueueReplaceState(s, s.state, null), ts(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function er(e, t) {
  try {
    var n = "", r = t;
    do
      n += Km(r), r = r.return;
    while (r);
    var s = n;
  } catch (a) {
    s = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Zs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ra(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var _p = typeof WeakMap == "function" ? WeakMap : Map;
function eu(e, t, n) {
  n = Pt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    as || (as = !0, Ba = r), Ra(e, t);
  }, n;
}
function tu(e, t, n) {
  n = Pt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      Ra(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Ra(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Hi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _p();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = Rp.bind(null, e, t, n), t.then(e, e));
}
function Ki(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gi(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
}
var kp = Wt.ReactCurrentOwner, qe = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? Id(t, null, n, r) : Zn(t, e.child, n, r);
}
function qi(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return Kn(t, s), r = Do(e, t, n, r, a, s), n = Po(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, zt(e, t, s)) : (Se && n && _o(t), t.flags |= 1, Ve(e, t, r, s), t.child);
}
function Yi(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Vo(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, nu(e, t, a, r, s)) : (e = zl(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & s)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Fr, n(o, r) && e.ref === t.ref) return zt(e, t, s);
  }
  return t.flags |= 1, e = ln(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function nu(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Fr(a, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, zt(e, t, s);
  }
  return Oa(e, t, n, r, s);
}
function ru(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve(Un, tt), tt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve(Un, tt), tt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ve(Un, tt), tt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ve(Un, tt), tt |= r;
  return Ve(e, t, s, n), t.child;
}
function lu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Oa(e, t, n, r, s) {
  var a = Xe(n) ? wn : Qe.current;
  return a = Yn(t, a), Kn(t, s), n = Do(e, t, n, r, a, s), r = Po(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, zt(e, t, s)) : (Se && r && _o(t), t.flags |= 1, Ve(e, t, n, s), t.child);
}
function Xi(e, t, n, r, s) {
  if (Xe(n)) {
    var a = !0;
    Yl(t);
  } else a = !1;
  if (Kn(t, s), t.stateNode === null) Rl(e, t), Jd(t, n, r), Pa(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Xe(n) ? wn : Qe.current, d = Yn(t, d));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && Bi(t, o, r, d), Bt = !1;
    var w = t.memoizedState;
    o.state = w, ts(t, r, o, s), c = t.memoizedState, i !== r || w !== c || Ye.current || Bt ? (typeof h == "function" && (Da(t, n, h, r), c = t.memoizedState), (i = Bt || Vi(t, n, i, r, w, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Td(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : yt(t.type, i), o.props = d, v = t.pendingProps, w = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = pt(c) : (c = Xe(n) ? wn : Qe.current, c = Yn(t, c));
    var _ = n.getDerivedStateFromProps;
    (h = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || w !== c) && Bi(t, o, r, c), Bt = !1, w = t.memoizedState, o.state = w, ts(t, r, o, s);
    var g = t.memoizedState;
    i !== v || w !== g || Ye.current || Bt ? (typeof _ == "function" && (Da(t, n, _, r), g = t.memoizedState), (d = Bt || Vi(t, n, d, r, w, g, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Aa(e, t, n, r, a, s);
}
function Aa(e, t, n, r, s, a) {
  lu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && Oi(t, n, !1), zt(e, t, a);
  r = t.stateNode, kp.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Zn(t, e.child, null, a), t.child = Zn(t, null, i, a)) : Ve(e, t, i, a), t.memoizedState = r.state, s && Oi(t, n, !0), t.child;
}
function su(e) {
  var t = e.stateNode;
  t.pendingContext ? Ri(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ri(e, t.context, !1), Mo(e, t.containerInfo);
}
function Zi(e, t, n, r, s) {
  return Xn(), So(s), t.flags |= 256, Ve(e, t, n, r), t.child;
}
var za = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function au(e, t, n) {
  var r = t.pendingProps, s = je.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), ve(je, s & 1), e === null)
    return La(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = ks(o, r, 0, null), e = vn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Fa(n), t.memoizedState = za, e) : Ao(t, o));
  if (s = e.memoizedState, s !== null && (i = s.dehydrated, i !== null)) return Sp(e, t, o, r, i, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, i = s.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = ln(s, c), r.subtreeFlags = s.subtreeFlags & 14680064), i !== null ? a = ln(i, a) : (a = vn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Fa(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = za, r;
  }
  return a = e.child, e = a.sibling, r = ln(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ao(e, t) {
  return t = ks({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function xl(e, t, n, r) {
  return r !== null && So(r), Zn(t, e.child, null, n), e = Ao(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Sp(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Zs(Error(W(422))), xl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = ks({ mode: "visible", children: r.children }, s, 0, null), a = vn(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Zn(t, e.child, null, o), t.child.memoizedState = Fa(o), t.memoizedState = za, a);
  if (!(t.mode & 1)) return xl(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(W(419)), r = Zs(a, r, void 0), xl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, qe || i) {
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
      s = s & (r.suspendedLanes | o) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, At(e, s), kt(r, e, s, -1));
    }
    return Qo(), r = Zs(Error(W(421))), xl(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Op.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, nt = en(s.nextSibling), rt = t, Se = !0, wt = null, e !== null && (dt[ut++] = Tt, dt[ut++] = Dt, dt[ut++] = xn, Tt = e.id, Dt = e.overflow, xn = t), t = Ao(t, r.children), t.flags |= 4096, t);
}
function Ji(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ta(e.return, t, n);
}
function Js(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function ou(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (Ve(e, t, r.children, n), r = je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ji(e, n, t);
      else if (e.tag === 19) Ji(e, n, t);
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
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && ns(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Js(t, !1, s, n, a);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && ns(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      Js(t, !0, n, null, a);
      break;
    case "together":
      Js(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Rl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function zt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), kn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jp(e, t, n) {
  switch (t.tag) {
    case 3:
      su(t), Xn();
      break;
    case 5:
      Dd(t);
      break;
    case 1:
      Xe(t.type) && Yl(t);
      break;
    case 4:
      Mo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      ve(Jl, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ve(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? au(e, t, n) : (ve(je, je.current & 1), e = zt(e, t, n), e !== null ? e.sibling : null);
      ve(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ou(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ve(je, je.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ru(e, t, n);
  }
  return zt(e, t, n);
}
var iu, Wa, cu, du;
iu = function(e, t) {
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
Wa = function() {
};
cu = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, gn(Et.current);
    var a = null;
    switch (n) {
      case "input":
        s = ia(e, s), r = ia(e, r), a = [];
        break;
      case "select":
        s = Ce({}, s, { value: void 0 }), r = Ce({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = ua(e, s), r = ua(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Gl);
    }
    fa(n, r);
    var o;
    n = null;
    for (d in s) if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && s[d] != null) if (d === "style") {
      var i = s[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Tr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = s != null ? s[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Tr.hasOwnProperty(d) ? (c != null && d === "onScroll" && xe("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
du = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!Se) switch (e.tailMode) {
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
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
  else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function bp(e, t, n) {
  var r = t.pendingProps;
  switch (ko(t), t.tag) {
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
      return $e(t), null;
    case 1:
      return Xe(t.type) && ql(), $e(t), null;
    case 3:
      return r = t.stateNode, Jn(), _e(Ye), _e(Qe), Lo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Ga(wt), wt = null))), Wa(e, t), $e(t), null;
    case 5:
      Io(t);
      var s = gn(Vr.current);
      if (n = t.type, e !== null && t.stateNode != null) cu(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166));
          return $e(t), null;
        }
        if (e = gn(Et.current), vl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Ct] = t, r[Ur] = a, e = (t.mode & 1) !== 0, n) {
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
              for (s = 0; s < kr.length; s++) xe(kr[s], r);
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
              ii(r, a), xe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, xe("invalid", r);
              break;
            case "textarea":
              di(r, a), xe("invalid", r);
          }
          fa(n, a), s = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && yl(r.textContent, i, e), s = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && yl(
              r.textContent,
              i,
              e
            ), s = ["children", "" + i]) : Tr.hasOwnProperty(o) && i != null && o === "onScroll" && xe("scroll", r);
          }
          switch (n) {
            case "input":
              cl(r), ci(r, a, !0);
              break;
            case "textarea":
              cl(r), ui(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Gl);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ct] = t, e[Ur] = r, iu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = pa(n, r), n) {
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
                for (s = 0; s < kr.length; s++) xe(kr[s], e);
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
                ii(e, r), s = ia(e, r), xe("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = Ce({}, r, { value: void 0 }), xe("invalid", e);
                break;
              case "textarea":
                di(e, r), s = ua(e, r), xe("invalid", e);
                break;
              default:
                s = r;
            }
            fa(n, s), i = s;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? $c(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Fc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Dr(e, c) : typeof c == "number" && Dr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Tr.hasOwnProperty(a) ? c != null && a === "onScroll" && xe("scroll", e) : c != null && ao(e, a, c, o));
            }
            switch (n) {
              case "input":
                cl(e), ci(e, r, !1);
                break;
              case "textarea":
                cl(e), ui(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Qn(e, !!r.multiple, a, !1) : r.defaultValue != null && Qn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Gl);
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
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) du(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(W(166));
        if (n = gn(Vr.current), gn(Et.current), vl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (a = r.nodeValue !== n) && (e = rt, e !== null)) switch (e.tag) {
            case 3:
              yl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && yl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (_e(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Se && nt !== null && t.mode & 1 && !(t.flags & 128)) Ed(), Xn(), t.flags |= 98560, a = !1;
        else if (a = vl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(W(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(W(317));
            a[Ct] = t;
          } else Xn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), a = !1;
        } else wt !== null && (Ga(wt), wt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? Le === 0 && (Le = 3) : Qo())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return Jn(), Wa(e, t), e === null && Wr(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return Co(t.type._context), $e(t), null;
    case 17:
      return Xe(t.type) && ql(), $e(t), null;
    case 19:
      if (_e(je), a = t.memoizedState, a === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) yr(a, !1);
      else {
        if (Le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ns(e), o !== null) {
            for (t.flags |= 128, yr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ve(je, je.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ee() > tr && (t.flags |= 128, r = !0, yr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ns(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !Se) return $e(t), null;
        } else 2 * Ee() - a.renderingStartTime > tr && n !== 1073741824 && (t.flags |= 128, r = !0, yr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ee(), t.sibling = null, n = je.current, ve(je, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return Uo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? tt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function Cp(e, t) {
  switch (ko(t), t.tag) {
    case 1:
      return Xe(t.type) && ql(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Jn(), _e(Ye), _e(Qe), Lo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Io(t), null;
    case 13:
      if (_e(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(W(340));
        Xn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return _e(je), null;
    case 4:
      return Jn(), null;
    case 10:
      return Co(t.type._context), null;
    case 22:
    case 23:
      return Uo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _l = !1, Ue = !1, Np = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function $n(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ne(e, t, r);
  }
  else n.current = null;
}
function $a(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var ec = !1;
function Ep(e, t) {
  if (ja = Bl, e = hd(), xo(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, h = 0, v = e, w = null;
        t: for (; ; ) {
          for (var _; v !== n || s !== 0 && v.nodeType !== 3 || (i = o + s), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (_ = v.firstChild) !== null; )
            w = v, v = _;
          for (; ; ) {
            if (v === e) break t;
            if (w === n && ++d === s && (i = o), w === a && ++h === r && (c = o), (_ = v.nextSibling) !== null) break;
            v = w, w = v.parentNode;
          }
          v = _;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ba = { focusedElem: e, selectionRange: n }, Bl = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
  else for (; G !== null; ) {
    t = G;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var k = g.memoizedProps, S = g.memoizedState, m = t.stateNode, u = m.getSnapshotBeforeUpdate(t.elementType === t.type ? k : yt(t.type, k), S);
            m.__reactInternalSnapshotBeforeUpdate = u;
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
          throw Error(W(163));
      }
    } catch (y) {
      Ne(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return g = ec, ec = !1, g;
}
function Mr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        s.destroy = void 0, a !== void 0 && $a(t, n, a);
      }
      s = s.next;
    } while (s !== r);
  }
}
function xs(e, t) {
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
function Ua(e) {
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
function uu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, uu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Ur], delete t[Ea], delete t[dp], delete t[up])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function mu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || mu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Qa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Qa(e, t, n), e = e.sibling; e !== null; ) Qa(e, t, n), e = e.sibling;
}
function Va(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Va(e, t, n), e = e.sibling; e !== null; ) Va(e, t, n), e = e.sibling;
}
var Oe = null, vt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) fu(e, t, n), n = n.sibling;
}
function fu(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
    Nt.onCommitFiberUnmount(ms, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ue || $n(n, t);
    case 6:
      var r = Oe, s = vt;
      Oe = null, Qt(e, t, n), Oe = r, vt = s, Oe !== null && (vt ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null && (vt ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? Hs(e.parentNode, n) : e.nodeType === 1 && Hs(e, n), Ar(e)) : Hs(Oe, n.stateNode));
      break;
    case 4:
      r = Oe, s = vt, Oe = n.stateNode.containerInfo, vt = !0, Qt(e, t, n), Oe = r, vt = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var a = s, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && $a(n, t, o), s = s.next;
        } while (s !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (!Ue && ($n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ne(n, t, i);
      }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Qt(e, t, n), Ue = r) : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function nc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Np()), t.forEach(function(r) {
      var s = Ap.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Oe = i.stateNode, vt = !1;
            break e;
          case 3:
            Oe = i.stateNode.containerInfo, vt = !0;
            break e;
          case 4:
            Oe = i.stateNode.containerInfo, vt = !0;
            break e;
        }
        i = i.return;
      }
      if (Oe === null) throw Error(W(160));
      fu(a, o, s), Oe = null, vt = !1;
      var c = s.alternate;
      c !== null && (c.return = null), s.return = null;
    } catch (d) {
      Ne(s, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) pu(t, e), t = t.sibling;
}
function pu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (gt(t, e), jt(e), r & 4) {
        try {
          Mr(3, e, e.return), xs(3, e);
        } catch (k) {
          Ne(e, e.return, k);
        }
        try {
          Mr(5, e, e.return);
        } catch (k) {
          Ne(e, e.return, k);
        }
      }
      break;
    case 1:
      gt(t, e), jt(e), r & 512 && n !== null && $n(n, n.return);
      break;
    case 5:
      if (gt(t, e), jt(e), r & 512 && n !== null && $n(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Dr(s, "");
        } catch (k) {
          Ne(e, e.return, k);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && Oc(s, a), pa(i, o);
          var d = pa(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], v = c[o + 1];
            h === "style" ? $c(s, v) : h === "dangerouslySetInnerHTML" ? Fc(s, v) : h === "children" ? Dr(s, v) : ao(s, h, v, d);
          }
          switch (i) {
            case "input":
              ca(s, a);
              break;
            case "textarea":
              Ac(s, a);
              break;
            case "select":
              var w = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var _ = a.value;
              _ != null ? Qn(s, !!a.multiple, _, !1) : w !== !!a.multiple && (a.defaultValue != null ? Qn(
                s,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Qn(s, !!a.multiple, a.multiple ? [] : "", !1));
          }
          s[Ur] = a;
        } catch (k) {
          Ne(e, e.return, k);
        }
      }
      break;
    case 6:
      if (gt(t, e), jt(e), r & 4) {
        if (e.stateNode === null) throw Error(W(162));
        s = e.stateNode, a = e.memoizedProps;
        try {
          s.nodeValue = a;
        } catch (k) {
          Ne(e, e.return, k);
        }
      }
      break;
    case 3:
      if (gt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ar(t.containerInfo);
      } catch (k) {
        Ne(e, e.return, k);
      }
      break;
    case 4:
      gt(t, e), jt(e);
      break;
    case 13:
      gt(t, e), jt(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (Wo = Ee())), r & 4 && nc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (d = Ue) || h, gt(t, e), Ue = d) : gt(t, e), jt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (G = e, h = e.child; h !== null; ) {
          for (v = G = h; G !== null; ) {
            switch (w = G, _ = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Mr(4, w, w.return);
                break;
              case 1:
                $n(w, w.return);
                var g = w.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (k) {
                    Ne(r, n, k);
                  }
                }
                break;
              case 5:
                $n(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  lc(v);
                  continue;
                }
            }
            _ !== null ? (_.return = w, G = _) : lc(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                s = v.stateNode, d ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Wc("display", o));
              } catch (k) {
                Ne(e, e.return, k);
              }
            }
          } else if (v.tag === 6) {
            if (h === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (k) {
              Ne(e, e.return, k);
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
      gt(t, e), jt(e), r & 4 && nc(e);
      break;
    case 21:
      break;
    default:
      gt(
        t,
        e
      ), jt(e);
  }
}
function jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Dr(s, ""), r.flags &= -33);
          var a = tc(e);
          Va(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = tc(e);
          Qa(e, i, o);
          break;
        default:
          throw Error(W(161));
      }
    } catch (c) {
      Ne(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mp(e, t, n) {
  G = e, hu(e);
}
function hu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var s = G, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || _l;
      if (!o) {
        var i = s.alternate, c = i !== null && i.memoizedState !== null || Ue;
        i = _l;
        var d = Ue;
        if (_l = o, (Ue = c) && !d) for (G = s; G !== null; ) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null ? sc(s) : c !== null ? (c.return = o, G = c) : sc(s);
        for (; a !== null; ) G = a, hu(a), a = a.sibling;
        G = s, _l = i, Ue = d;
      }
      rc(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, G = a) : rc(e);
  }
}
function rc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ue || xs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && $i(t, a, r);
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
              $i(t, o, n);
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
                  v !== null && Ar(v);
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
            throw Error(W(163));
        }
        Ue || t.flags & 512 && Ua(t);
      } catch (w) {
        Ne(t, t.return, w);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, G = n;
      break;
    }
    G = t.return;
  }
}
function lc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, G = n;
      break;
    }
    G = t.return;
  }
}
function sc(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xs(4, t);
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
            Ua(t);
          } catch (c) {
            Ne(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ua(t);
          } catch (c) {
            Ne(t, o, c);
          }
      }
    } catch (c) {
      Ne(t, t.return, c);
    }
    if (t === e) {
      G = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, G = i;
      break;
    }
    G = t.return;
  }
}
var Ip = Math.ceil, ss = Wt.ReactCurrentDispatcher, zo = Wt.ReactCurrentOwner, ft = Wt.ReactCurrentBatchConfig, me = 0, Pe = null, Me = null, Ae = 0, tt = 0, Un = cn(0), Le = 0, Gr = null, kn = 0, _s = 0, Fo = 0, Ir = null, Ge = null, Wo = 0, tr = 1 / 0, It = null, as = !1, Ba = null, nn = null, kl = !1, Yt = null, os = 0, Lr = 0, Ha = null, Ol = -1, Al = 0;
function Be() {
  return me & 6 ? Ee() : Ol !== -1 ? Ol : Ol = Ee();
}
function rn(e) {
  return e.mode & 1 ? me & 2 && Ae !== 0 ? Ae & -Ae : fp.transition !== null ? (Al === 0 && (Al = Jc()), Al) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ad(e.type)), e) : 1;
}
function kt(e, t, n, r) {
  if (50 < Lr) throw Lr = 0, Ha = null, Error(W(185));
  el(e, n, r), (!(me & 2) || e !== Pe) && (e === Pe && (!(me & 2) && (_s |= n), Le === 4 && Kt(e, Ae)), Ze(e, r), n === 1 && me === 0 && !(t.mode & 1) && (tr = Ee() + 500, ys && dn()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  ff(e, t);
  var r = Vl(e, e === Pe ? Ae : 0);
  if (r === 0) n !== null && pi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && pi(n), t === 1) e.tag === 0 ? mp(ac.bind(null, e)) : bd(ac.bind(null, e)), ip(function() {
      !(me & 6) && dn();
    }), n = null;
    else {
      switch (ed(r)) {
        case 1:
          n = mo;
          break;
        case 4:
          n = Xc;
          break;
        case 16:
          n = Ql;
          break;
        case 536870912:
          n = Zc;
          break;
        default:
          n = Ql;
      }
      n = Su(n, gu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function gu(e, t) {
  if (Ol = -1, Al = 0, me & 6) throw Error(W(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = Vl(e, e === Pe ? Ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = is(e, r);
  else {
    t = r;
    var s = me;
    me |= 2;
    var a = vu();
    (Pe !== e || Ae !== t) && (It = null, tr = Ee() + 500, yn(e, t));
    do
      try {
        Dp();
        break;
      } catch (i) {
        yu(e, i);
      }
    while (!0);
    bo(), ss.current = a, me = s, Me !== null ? t = 0 : (Pe = null, Ae = 0, t = Le);
  }
  if (t !== 0) {
    if (t === 2 && (s = wa(e), s !== 0 && (r = s, t = Ka(e, s))), t === 1) throw n = Gr, yn(e, 0), Kt(e, r), Ze(e, Ee()), n;
    if (t === 6) Kt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !Lp(s) && (t = is(e, r), t === 2 && (a = wa(e), a !== 0 && (r = a, t = Ka(e, a))), t === 1)) throw n = Gr, yn(e, 0), Kt(e, r), Ze(e, Ee()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          fn(e, Ge, It);
          break;
        case 3:
          if (Kt(e, r), (r & 130023424) === r && (t = Wo + 500 - Ee(), 10 < t)) {
            if (Vl(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = Na(fn.bind(null, e, Ge, It), t);
            break;
          }
          fn(e, Ge, It);
          break;
        case 4:
          if (Kt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - _t(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ip(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Na(fn.bind(null, e, Ge, It), r);
            break;
          }
          fn(e, Ge, It);
          break;
        case 5:
          fn(e, Ge, It);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return Ze(e, Ee()), e.callbackNode === n ? gu.bind(null, e) : null;
}
function Ka(e, t) {
  var n = Ir;
  return e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256), e = is(e, t), e !== 2 && (t = Ge, Ge = n, t !== null && Ga(t)), e;
}
function Ga(e) {
  Ge === null ? Ge = e : Ge.push.apply(Ge, e);
}
function Lp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var s = n[r], a = s.getSnapshot;
        s = s.value;
        try {
          if (!St(a(), s)) return !1;
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
function Kt(e, t) {
  for (t &= ~Fo, t &= ~_s, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - _t(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ac(e) {
  if (me & 6) throw Error(W(327));
  Gn();
  var t = Vl(e, 0);
  if (!(t & 1)) return Ze(e, Ee()), null;
  var n = is(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wa(e);
    r !== 0 && (t = r, n = Ka(e, r));
  }
  if (n === 1) throw n = Gr, yn(e, 0), Kt(e, t), Ze(e, Ee()), n;
  if (n === 6) throw Error(W(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, Ge, It), Ze(e, Ee()), null;
}
function $o(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    me = n, me === 0 && (tr = Ee() + 500, ys && dn());
  }
}
function Sn(e) {
  Yt !== null && Yt.tag === 0 && !(me & 6) && Gn();
  var t = me;
  me |= 1;
  var n = ft.transition, r = pe;
  try {
    if (ft.transition = null, pe = 1, e) return e();
  } finally {
    pe = r, ft.transition = n, me = t, !(me & 6) && dn();
  }
}
function Uo() {
  tt = Un.current, _e(Un);
}
function yn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, op(n)), Me !== null) for (n = Me.return; n !== null; ) {
    var r = n;
    switch (ko(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ql();
        break;
      case 3:
        Jn(), _e(Ye), _e(Qe), Lo();
        break;
      case 5:
        Io(r);
        break;
      case 4:
        Jn();
        break;
      case 13:
        _e(je);
        break;
      case 19:
        _e(je);
        break;
      case 10:
        Co(r.type._context);
        break;
      case 22:
      case 23:
        Uo();
    }
    n = n.return;
  }
  if (Pe = e, Me = e = ln(e.current, null), Ae = tt = t, Le = 0, Gr = null, Fo = _s = kn = 0, Ge = Ir = null, hn !== null) {
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
function yu(e, t) {
  do {
    var n = Me;
    try {
      if (bo(), Dl.current = ls, rs) {
        for (var r = be.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        rs = !1;
      }
      if (_n = 0, De = Ie = be = null, Er = !1, Br = 0, zo.current = null, n === null || n.return === null) {
        Le = 1, Gr = t, Me = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Ae, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = i, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var w = h.alternate;
            w ? (h.updateQueue = w.updateQueue, h.memoizedState = w.memoizedState, h.lanes = w.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var _ = Ki(o);
          if (_ !== null) {
            _.flags &= -257, Gi(_, o, i, a, t), _.mode & 1 && Hi(a, d, t), t = _, c = d;
            var g = t.updateQueue;
            if (g === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(c), t.updateQueue = k;
            } else g.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Hi(a, d, t), Qo();
              break e;
            }
            c = Error(W(426));
          }
        } else if (Se && i.mode & 1) {
          var S = Ki(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Gi(S, o, i, a, t), So(er(c, i));
            break e;
          }
        }
        a = c = er(c, i), Le !== 4 && (Le = 2), Ir === null ? Ir = [a] : Ir.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var m = eu(a, c, t);
              Wi(a, m);
              break e;
            case 1:
              i = c;
              var u = a.type, p = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (nn === null || !nn.has(p)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var y = tu(a, i, t);
                Wi(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      xu(n);
    } catch (x) {
      t = x, Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vu() {
  var e = ss.current;
  return ss.current = ls, e === null ? ls : e;
}
function Qo() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4), Pe === null || !(kn & 268435455) && !(_s & 268435455) || Kt(Pe, Ae);
}
function is(e, t) {
  var n = me;
  me |= 2;
  var r = vu();
  (Pe !== e || Ae !== t) && (It = null, yn(e, t));
  do
    try {
      Tp();
      break;
    } catch (s) {
      yu(e, s);
    }
  while (!0);
  if (bo(), me = n, ss.current = r, Me !== null) throw Error(W(261));
  return Pe = null, Ae = 0, Le;
}
function Tp() {
  for (; Me !== null; ) wu(Me);
}
function Dp() {
  for (; Me !== null && !rf(); ) wu(Me);
}
function wu(e) {
  var t = ku(e.alternate, e, tt);
  e.memoizedProps = e.pendingProps, t === null ? xu(e) : Me = t, zo.current = null;
}
function xu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Cp(n, t), n !== null) {
        n.flags &= 32767, Me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Le = 6, Me = null;
        return;
      }
    } else if (n = bp(n, t, tt), n !== null) {
      Me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function fn(e, t, n) {
  var r = pe, s = ft.transition;
  try {
    ft.transition = null, pe = 1, Pp(e, t, n, r);
  } finally {
    ft.transition = s, pe = r;
  }
  return null;
}
function Pp(e, t, n, r) {
  do
    Gn();
  while (Yt !== null);
  if (me & 6) throw Error(W(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(W(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (pf(e, a), e === Pe && (Me = Pe = null, Ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kl || (kl = !0, Su(Ql, function() {
    return Gn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = pe;
    pe = 1;
    var i = me;
    me |= 4, zo.current = null, Ep(e, n), pu(n, e), ep(ba), Bl = !!ja, ba = ja = null, e.current = n, Mp(n), lf(), me = i, pe = o, ft.transition = a;
  } else e.current = n;
  if (kl && (kl = !1, Yt = e, os = s), a = e.pendingLanes, a === 0 && (nn = null), of(n.stateNode), Ze(e, Ee()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (as) throw as = !1, e = Ba, Ba = null, e;
  return os & 1 && e.tag !== 0 && Gn(), a = e.pendingLanes, a & 1 ? e === Ha ? Lr++ : (Lr = 0, Ha = e) : Lr = 0, dn(), null;
}
function Gn() {
  if (Yt !== null) {
    var e = ed(os), t = ft.transition, n = pe;
    try {
      if (ft.transition = null, pe = 16 > e ? 16 : e, Yt === null) var r = !1;
      else {
        if (e = Yt, Yt = null, os = 0, me & 6) throw Error(W(331));
        var s = me;
        for (me |= 4, G = e.current; G !== null; ) {
          var a = G, o = a.child;
          if (G.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (G = d; G !== null; ) {
                  var h = G;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(8, h, a);
                  }
                  var v = h.child;
                  if (v !== null) v.return = h, G = v;
                  else for (; G !== null; ) {
                    h = G;
                    var w = h.sibling, _ = h.return;
                    if (uu(h), h === d) {
                      G = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = _, G = w;
                      break;
                    }
                    G = _;
                  }
                }
              }
              var g = a.alternate;
              if (g !== null) {
                var k = g.child;
                if (k !== null) {
                  g.child = null;
                  do {
                    var S = k.sibling;
                    k.sibling = null, k = S;
                  } while (k !== null);
                }
              }
              G = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, G = o;
          else e: for (; G !== null; ) {
            if (a = G, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Mr(9, a, a.return);
            }
            var m = a.sibling;
            if (m !== null) {
              m.return = a.return, G = m;
              break e;
            }
            G = a.return;
          }
        }
        var u = e.current;
        for (G = u; G !== null; ) {
          o = G;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, G = p;
          else e: for (o = u; G !== null; ) {
            if (i = G, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  xs(9, i);
              }
            } catch (x) {
              Ne(i, i.return, x);
            }
            if (i === o) {
              G = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, G = y;
              break e;
            }
            G = i.return;
          }
        }
        if (me = s, dn(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
          Nt.onPostCommitFiberRoot(ms, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      pe = n, ft.transition = t;
    }
  }
  return !1;
}
function oc(e, t, n) {
  t = er(n, t), t = eu(e, t, 1), e = tn(e, t, 1), t = Be(), e !== null && (el(e, 1, t), Ze(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3) oc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      oc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
        e = er(n, e), e = tu(t, e, 1), t = tn(t, e, 1), e = Be(), t !== null && (el(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Rp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (Ae & n) === n && (Le === 4 || Le === 3 && (Ae & 130023424) === Ae && 500 > Ee() - Wo ? yn(e, 0) : Fo |= n), Ze(e, t);
}
function _u(e, t) {
  t === 0 && (e.mode & 1 ? (t = ml, ml <<= 1, !(ml & 130023424) && (ml = 4194304)) : t = 1);
  var n = Be();
  e = At(e, t), e !== null && (el(e, t, n), Ze(e, n));
}
function Op(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), _u(e, n);
}
function Ap(e, t) {
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
      throw Error(W(314));
  }
  r !== null && r.delete(t), _u(e, n);
}
var ku;
ku = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ye.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, jp(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, Se && t.flags & 1048576 && Cd(t, Zl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Rl(e, t), e = t.pendingProps;
      var s = Yn(t, Qe.current);
      Kn(t, n), s = Do(null, t, r, e, s, n);
      var a = Po();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (a = !0, Yl(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Eo(t), s.updater = ws, t.stateNode = s, s._reactInternals = t, Pa(t, r, e, n), t = Aa(null, t, r, !0, a, n)) : (t.tag = 0, Se && a && _o(t), Ve(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Rl(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = Fp(r), e = yt(r, e), s) {
          case 0:
            t = Oa(null, t, r, e, n);
            break e;
          case 1:
            t = Xi(null, t, r, e, n);
            break e;
          case 11:
            t = qi(null, t, r, e, n);
            break e;
          case 14:
            t = Yi(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(W(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), Oa(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), Xi(e, t, r, s, n);
    case 3:
      e: {
        if (su(t), e === null) throw Error(W(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, Td(e, t), ts(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = er(Error(W(423)), t), t = Zi(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = er(Error(W(424)), t), t = Zi(e, t, r, n, s);
          break e;
        } else for (nt = en(t.stateNode.containerInfo.firstChild), rt = t, Se = !0, wt = null, n = Id(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Xn(), r === s) {
            t = zt(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Dd(t), e === null && La(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, Ca(r, s) ? o = null : a !== null && Ca(r, a) && (t.flags |= 32), lu(e, t), Ve(e, t, o, n), t.child;
    case 6:
      return e === null && La(t), null;
    case 13:
      return au(e, t, n);
    case 4:
      return Mo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Zn(t, null, r, n) : Ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), qi(e, t, r, s, n);
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, ve(Jl, r._currentValue), r._currentValue = o, a !== null) if (St(a.value, o)) {
          if (a.children === s.children && !Ye.current) {
            t = zt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = Pt(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Ta(
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
            if (o = a.return, o === null) throw Error(W(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ta(o, n, t), o = a.sibling;
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
        Ve(e, t, s.children, n), t = t.child;
      }
      return t;
    case 9:
      return s = t.type, r = t.pendingProps.children, Kn(t, n), s = pt(s), r = r(s), t.flags |= 1, Ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = yt(r, t.pendingProps), s = yt(r.type, s), Yi(e, t, r, s, n);
    case 15:
      return nu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), Rl(e, t), t.tag = 1, Xe(r) ? (e = !0, Yl(t)) : e = !1, Kn(t, n), Jd(t, r, s), Pa(t, r, s, n), Aa(null, t, r, !0, e, n);
    case 19:
      return ou(e, t, n);
    case 22:
      return ru(e, t, n);
  }
  throw Error(W(156, t.tag));
};
function Su(e, t) {
  return Yc(e, t);
}
function zp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function mt(e, t, n, r) {
  return new zp(e, t, n, r);
}
function Vo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fp(e) {
  if (typeof e == "function") return Vo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === io) return 11;
    if (e === co) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function zl(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") Vo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Tn:
      return vn(n.children, s, a, t);
    case oo:
      o = 8, s |= 8;
      break;
    case la:
      return e = mt(12, n, t, s | 2), e.elementType = la, e.lanes = a, e;
    case sa:
      return e = mt(13, n, t, s), e.elementType = sa, e.lanes = a, e;
    case aa:
      return e = mt(19, n, t, s), e.elementType = aa, e.lanes = a, e;
    case Dc:
      return ks(n, s, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Lc:
          o = 10;
          break e;
        case Tc:
          o = 9;
          break e;
        case io:
          o = 11;
          break e;
        case co:
          o = 14;
          break e;
        case Vt:
          o = 16, r = null;
          break e;
      }
      throw Error(W(130, e == null ? e : typeof e, ""));
  }
  return t = mt(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function vn(e, t, n, r) {
  return e = mt(7, e, r, t), e.lanes = n, e;
}
function ks(e, t, n, r) {
  return e = mt(22, e, r, t), e.elementType = Dc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ea(e, t, n) {
  return e = mt(6, e, null, t), e.lanes = n, e;
}
function ta(e, t, n) {
  return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Wp(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Rs(0), this.expirationTimes = Rs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Rs(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Bo(e, t, n, r, s, a, o, i, c) {
  return e = new Wp(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = mt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Eo(a), e;
}
function $p(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ln, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ju(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(W(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(W(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return jd(e, n, t);
  }
  return t;
}
function bu(e, t, n, r, s, a, o, i, c) {
  return e = Bo(n, r, !0, e, s, a, o, i, c), e.context = ju(null), n = e.current, r = Be(), s = rn(n), a = Pt(r, s), a.callback = t ?? null, tn(n, a, s), e.current.lanes = s, el(e, s, r), Ze(e, r), e;
}
function Ss(e, t, n, r) {
  var s = t.current, a = Be(), o = rn(s);
  return n = ju(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(s, t, o), e !== null && (kt(e, s, o, a), Tl(e, s, o)), o;
}
function cs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ic(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ho(e, t) {
  ic(e, t), (e = e.alternate) && ic(e, t);
}
function Up() {
  return null;
}
var Cu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ko(e) {
  this._internalRoot = e;
}
js.prototype.render = Ko.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  Ss(e, t, null, null);
};
js.prototype.unmount = Ko.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sn(function() {
      Ss(null, e, null, null);
    }), t[Ot] = null;
  }
};
function js(e) {
  this._internalRoot = e;
}
js.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = rd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++) ;
    Ht.splice(n, 0, e), n === 0 && sd(e);
  }
};
function Go(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function cc() {
}
function Qp(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = cs(o);
        a.call(d);
      };
    }
    var o = bu(t, r, e, 0, null, !1, !1, "", cc);
    return e._reactRootContainer = o, e[Ot] = o.current, Wr(e.nodeType === 8 ? e.parentNode : e), Sn(), o;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = cs(c);
      i.call(d);
    };
  }
  var c = Bo(e, 0, !1, null, null, !1, !1, "", cc);
  return e._reactRootContainer = c, e[Ot] = c.current, Wr(e.nodeType === 8 ? e.parentNode : e), Sn(function() {
    Ss(t, c, n, r);
  }), c;
}
function Cs(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof s == "function") {
      var i = s;
      s = function() {
        var c = cs(o);
        i.call(c);
      };
    }
    Ss(t, o, e, s);
  } else o = Qp(n, t, e, s, r);
  return cs(o);
}
td = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 && (fo(t, n | 1), Ze(t, Ee()), !(me & 6) && (tr = Ee() + 500, dn()));
      }
      break;
    case 13:
      Sn(function() {
        var r = At(e, 1);
        if (r !== null) {
          var s = Be();
          kt(r, e, 1, s);
        }
      }), Ho(e, 1);
  }
};
po = function(e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = Be();
      kt(t, e, 134217728, n);
    }
    Ho(e, 134217728);
  }
};
nd = function(e) {
  if (e.tag === 13) {
    var t = rn(e), n = At(e, t);
    if (n !== null) {
      var r = Be();
      kt(n, e, t, r);
    }
    Ho(e, t);
  }
};
rd = function() {
  return pe;
};
ld = function(e, t) {
  var n = pe;
  try {
    return pe = e, t();
  } finally {
    pe = n;
  }
};
ga = function(e, t, n) {
  switch (t) {
    case "input":
      if (ca(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = gs(r);
            if (!s) throw Error(W(90));
            Rc(r), ca(r, s);
          }
        }
      }
      break;
    case "textarea":
      Ac(e, n);
      break;
    case "select":
      t = n.value, t != null && Qn(e, !!n.multiple, t, !1);
  }
};
Vc = $o;
Bc = Sn;
var Vp = { usingClientEntryPoint: !1, Events: [nl, On, gs, Uc, Qc, $o] }, vr = { findFiberByHostInstance: pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Bp = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Gc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: vr.findFiberByHostInstance || Up, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sl.isDisabled && Sl.supportsFiber) try {
    ms = Sl.inject(Bp), Nt = Sl;
  } catch {
  }
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vp;
st.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Go(t)) throw Error(W(200));
  return $p(e, t, null, n);
};
st.createRoot = function(e, t) {
  if (!Go(e)) throw Error(W(299));
  var n = !1, r = "", s = Cu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Bo(e, 1, !1, null, null, n, !1, r, s), e[Ot] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new Ko(t);
};
st.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(W(188)) : (e = Object.keys(e).join(","), Error(W(268, e)));
  return e = Gc(t), e = e === null ? null : e.stateNode, e;
};
st.flushSync = function(e) {
  return Sn(e);
};
st.hydrate = function(e, t, n) {
  if (!bs(t)) throw Error(W(200));
  return Cs(null, e, t, !0, n);
};
st.hydrateRoot = function(e, t, n) {
  if (!Go(e)) throw Error(W(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = Cu;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = bu(t, null, e, 1, n ?? null, s, !1, a, o), e[Ot] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new js(t);
};
st.render = function(e, t, n) {
  if (!bs(t)) throw Error(W(200));
  return Cs(null, e, t, !1, n);
};
st.unmountComponentAtNode = function(e) {
  if (!bs(e)) throw Error(W(40));
  return e._reactRootContainer ? (Sn(function() {
    Cs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ot] = null;
    });
  }), !0) : !1;
};
st.unstable_batchedUpdates = $o;
st.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bs(n)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return Cs(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function Nu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nu);
    } catch (e) {
      console.error(e);
    }
}
Nu(), Nc.exports = st;
var ye = Nc.exports, Eu, dc = ye;
Eu = dc.createRoot, dc.hydrateRoot;
var Mu = { exports: {} }, Ns = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hp = f, Kp = Symbol.for("react.element"), Gp = Symbol.for("react.fragment"), qp = Object.prototype.hasOwnProperty, Yp = Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Iu(e, t, n) {
  var r, s = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) qp.call(t, r) && !Xp.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Kp, type: e, key: a, ref: o, props: s, _owner: Yp.current };
}
Ns.Fragment = Gp;
Ns.jsx = Iu;
Ns.jsxs = Iu;
Mu.exports = Ns;
var l = Mu.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zp = {
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
const Jp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), te = (e, t) => {
  const n = f.forwardRef(
    ({
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, h) => f.createElement(
      "svg",
      {
        ref: h,
        ...Zp,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${Jp(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, w]) => f.createElement(v, w)),
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
const Lu = te("AlertCircle", [
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
const eh = te("AlertTriangle", [
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
const Tu = te("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const th = te("ArrowUpDown", [
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
const Du = te("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = te("Box", [
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
const rh = te("Calendar", [
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
const lh = te("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = te("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sh = te("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = te("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = te("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ah = te("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = te("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = te("Download", [
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
const ih = te("Eraser", [
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
const Xo = te("FileJson", [
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
const ch = te("FileText", [
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
const dh = te("Folder", [
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
const uh = te("Info", [
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
const mh = te("Lasso", [
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
const Ru = te("LayoutGrid", [
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
const fh = te("LayoutList", [
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
const ph = te("Link2Off", [
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
const hh = te("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = te("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gh = te("Maximize", [
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
const yh = te("Menu", [
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
const vh = te("Minimize", [
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
const wh = te("MoreVertical", [
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
const xh = te("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ou = te("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = te("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = te("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = te("RefreshCw", [
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
const _h = te("ScanLine", [
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
const jn = te("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Au = te("Settings", [
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
const zu = te("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = te("Star", [
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
const kh = te("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = te("Tag", [
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
const Ft = te("Trash2", [
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
const Sh = te("Trash", [
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
const jh = te("Type", [
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
const bh = te("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = te("Upload", [
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
const Nh = te("Workflow", [
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
const we = te("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = te("ZoomIn", [
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
const Mh = te("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = se;
async function ce(e) {
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
const Ih = async () => {
  const e = await se.fetchApi("/meld/home-dir");
  return (await ce(e)).home;
}, et = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  f.useEffect(() => {
    if (!t) return;
    const r = (s) => {
      s.key === "Escape" && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let ds = !1;
const Lh = (e) => {
  ds = e, ds && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Th = (...e) => {
  ds && console.log("[Meld]", ...e);
}, Dh = (...e) => {
  ds && console.warn("[Meld]", ...e);
}, Ph = (...e) => {
  console.error("[Meld]", ...e);
}, ee = {
  log: Th,
  warn: Dh,
  error: Ph,
  init: Lh
}, Fl = async (e = 0, t = 30, n = "", r = "default", s = !1) => {
  const a = await se.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return ce(a);
}, Fu = async (e) => {
  const t = await se.fetchApi(`/meld/image/${e}/details`);
  return ce(t);
}, Rh = async (e, t = !1) => {
  const n = await se.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ce(n);
}, Zo = async (e) => {
  const t = await se.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ce(t);
}, Wu = async (e) => {
  const t = await se.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ce(t);
}, mc = async (e, t) => {
  const n = await se.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ce(n);
}, Oh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await se.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await ce(r);
  } catch {
    return [];
  }
}, qa = async (e) => {
  const t = await se.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ce(t);
  } catch {
    return [];
  }
}, Ah = async (e, t) => {
  const n = await se.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ce(n);
}, zh = async (e, t) => {
  const n = await se.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return ce(n);
}, Ya = async (e, t, n) => {
  const r = await se.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ce(r);
}, Fh = async (e) => {
  const t = await se.fetchApi(`/meld/image/${e}/workflow`);
  return ce(t);
}, Wh = async (e) => {
  const t = await se.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ce(t);
}, $h = async (e, t) => {
  const n = await se.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), s = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = s, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(s), document.body.removeChild(a);
}, Uh = async (e, t) => {
  const n = await se.fetchApi("/meld/api/download/raw", {
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
}, Qh = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await se.fetchApi(n);
  return ce(r);
}, Vh = async () => {
  const e = await se.fetchApi("/meld/search-suggestions");
  return ce(e);
}, Bh = async () => {
  const e = await se.fetchApi("/meld/search-keywords");
  return ce(e);
}, Hh = async () => {
  const e = await se.fetchApi("/meld/search-config");
  return ce(e);
}, Kh = async () => {
  const e = await se.fetchApi("/meld/favorites");
  return ce(e);
}, Gh = async (e, t) => {
  const n = await se.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ce(n);
}, fc = async (e) => {
  const t = await se.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ce(t);
}, qh = async (e, t, n) => {
  const r = await se.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ce(r);
}, Yh = {
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
}, $u = async () => {
  let e;
  try {
    const t = await se.fetchApi("/meld/settings");
    e = await ce(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Yh;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Xh = async (e, t) => {
  const n = await se.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ce(n);
}, pc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, h) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const w = t;
      t = h ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((_) => _(t, w));
    }
  }, s = () => t, i = { setState: r, getState: s, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, s, i);
  return i;
}, Zh = (e) => e ? pc(e) : pc, Jh = (e) => e;
function eg(e, t = Jh) {
  const n = Gt.useSyncExternalStore(
    e.subscribe,
    Gt.useCallback(() => t(e.getState()), [e, t]),
    Gt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Gt.useDebugValue(n), n;
}
const tg = (e) => {
  const t = Zh(e), n = (r) => eg(t, r);
  return Object.assign(n, t), n;
}, ng = (e) => tg;
function rg(e, t) {
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
const Xa = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return Xa(r)(n);
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
        return Xa(r)(n);
      }
    };
  }
}, lg = (e, t) => (n, r, s) => {
  let a = {
    storage: rg(() => window.localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, m) => ({
      ...m,
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
  }, w = s.setState;
  s.setState = (S, m) => (w(S, m), v());
  const _ = e(
    (...S) => (n(...S), v()),
    r,
    s
  );
  s.getInitialState = () => _;
  let g;
  const k = () => {
    var S, m;
    if (!h) return;
    const u = ++i;
    o = !1, c.forEach((y) => {
      var x;
      return y((x = r()) != null ? x : _);
    });
    const p = ((m = a.onRehydrateStorage) == null ? void 0 : m.call(a, (S = r()) != null ? S : _)) || void 0;
    return Xa(h.getItem.bind(h))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate) {
            const x = a.migrate(
              y.state,
              y.version
            );
            return x instanceof Promise ? x.then((j) => [!0, j]) : [!0, x];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var x;
      if (u !== i)
        return;
      const [j, b] = y;
      if (g = a.merge(
        b,
        (x = r()) != null ? x : _
      ), n(g, !0), j)
        return v();
    }).then(() => {
      u === i && (p == null || p(g, void 0), g = r(), o = !0, d.forEach((y) => y(g)));
    }).catch((y) => {
      u === i && (p == null || p(void 0, y));
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
    rehydrate: () => k(),
    hasHydrated: () => o,
    onHydrate: (S) => (c.add(S), () => {
      c.delete(S);
    }),
    onFinishHydration: (S) => (d.add(S), () => {
      d.delete(S);
    })
  }, a.skipHydration || k(), g || _;
}, sg = lg, ag = [
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
let jl = null;
const ge = ng()(
  sg(
    (e) => ({
      isOpen: !1,
      slots: ag,
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
      showToast: (t) => {
        jl && clearTimeout(jl), e({ toastMessage: t }), jl = setTimeout(() => {
          e({ toastMessage: null }), jl = null;
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
), og = {
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
function ig(e, t) {
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
      let i = e.viewerImageId, c = s;
      if (e.viewerMode === "gallery" && i !== null && !s.some((d) => d.id === i)) {
        const d = e.images.find(
          (h) => h.id === i
        );
        d ? c = [...s, d] : i = null;
      }
      return {
        ...e,
        images: c,
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
      const d = e.viewerMode === "lineage" && o === "lineage" && e.lineageImages.some((h) => h.id === a);
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
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (ge.getState().buckets[e.viewerLightTableSlotId] || []).map((w) => {
        const _ = Number.parseInt(w, 10);
        return e.images.find((g) => g.id === _) || e.lineageImages.find((g) => g.id === _) || null;
      }).filter((w) => w !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || o)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (h) => h.id === e.viewerImageId
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
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (ge.getState().buckets[e.viewerLightTableSlotId] || []).map((w) => {
        const _ = Number.parseInt(w, 10);
        return e.images.find((g) => g.id === _) || e.lineageImages.find((g) => g.id === _) || null;
      }).filter((w) => w !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (h) => h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || o)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const c = i.findIndex(
        (h) => h.id === e.viewerImageId
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
const Uu = f.createContext(void 0), cg = ({
  children: e
}) => {
  const [t, n] = f.useReducer(ig, og), r = f.useRef(t.images.length), s = f.useRef(0), a = f.useRef(/* @__PURE__ */ new Map());
  f.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = f.useCallback(
    async (g, k, S) => {
      const m = t.settings["gallery.max_load_count"], u = 200;
      let p = g;
      for (; p < Math.min(k, m) && S === s.current; )
        try {
          const y = Math.min(u, m - p);
          ee.log("Background fetch: starting chunk", {
            offset: p,
            limit: y
          });
          const x = await Fl(
            p,
            y,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== s.current || (n({ type: "APPEND_IMAGES", payload: x }), p += x.images.length, x.images.length === 0 || p >= x.total))
            break;
          await new Promise((j) => setTimeout(j, 300));
        } catch (y) {
          ee.error("Background fetch failed", y);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = f.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now(), k = ++s.current;
    try {
      const S = t.searchQuery.trim() !== "", m = t.settings["gallery.initial_load_count"];
      ee.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: m,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Fl(
        0,
        m,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), p = performance.now() - g;
      ee.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > m && o(m, u.total, k);
    } catch (S) {
      ee.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    o
  ]), c = f.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now();
    try {
      const k = r.current, S = t.searchQuery.trim() !== "", m = t.pagination.limit;
      ee.log("loadMoreImages: starting fetch", {
        nextOffset: k,
        fetchLimit: m,
        isSearch: S
      });
      const u = await Fl(
        k,
        m,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), p = performance.now() - g;
      ee.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (k) {
      ee.error("loadMoreImages: fetch failed", k), n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), d = f.useCallback(async () => {
    try {
      const g = await Kh();
      n({ type: "SET_FAVORITES", payload: g });
    } catch (g) {
      ee.error("Failed to load favorites", g);
    }
  }, []), h = f.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds), S = t.images.filter(
      (m) => t.selectedIds.has(m.id)
    ).some(
      (m) => m.parent_id || m.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: g,
        hasLineage: S,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = f.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await Zo(g)).restored_ids || g;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (k) {
      n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = f.useCallback(
    async (g, k) => {
      try {
        await Xh(g, k), n({ type: "SET_SETTINGS", payload: { [g]: k } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), _ = f.useCallback(
    async (g) => {
      const k = t.images.find((p) => p.id === g);
      if (k && !k.is_minimal)
        return k;
      const S = t.lineageImages.find((p) => p.id === g);
      if (S && !S.is_minimal)
        return S;
      const m = a.current.get(g);
      if (m)
        return m;
      const u = (async () => {
        try {
          ee.log("fetchFullImageDetails: fetching full data", { id: g });
          const p = await Fu(g);
          return n({ type: "UPDATE_IMAGE", payload: p }), p;
        } finally {
          a.current.delete(g);
        }
      })();
      return a.current.set(g, u), u;
    },
    [t.images, t.lineageImages]
  );
  return f.useEffect(() => {
    (async () => {
      try {
        const k = await $u();
        n({ type: "SET_SETTINGS", payload: k });
      } catch (k) {
        ee.error("Failed to load settings", k);
      }
    })();
  }, []), f.useEffect(() => {
    d();
  }, [d]), f.useEffect(() => {
    const g = () => {
      i();
    }, k = (m) => {
      const u = m.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, S = (m) => {
      const u = m.detail;
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
    return window.addEventListener("meld-refresh", g), window.addEventListener("meld-scan-progress", k), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", g), window.removeEventListener("meld-scan-progress", k), window.removeEventListener("meld-scan-finished", S);
    };
  }, [i, t.scanStatus.progress.total]), f.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ l.jsx(
    Uu.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: h,
        restoreSelected: v,
        updateSetting: w,
        fetchFullImageDetails: _
      },
      children: e
    }
  );
}, ke = () => {
  const e = f.useContext(Uu);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Je = (e) => {
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
}, Jo = async () => {
  const e = await se.fetchApi("/meld/tags");
  return ce(e);
}, dg = async (e) => {
  const t = await se.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ce(t);
}, ug = async (e) => {
  const t = await se.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ce(t);
}, mg = async (e, t) => {
  const n = await se.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ce(n);
}, fg = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await se.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, pg = async (e, t, n = !1, r) => {
  const s = await se.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ce(s);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, hg = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await se.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ce(s);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, gg = async (e, t, n) => {
  const r = await se.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ce(r)).count;
  } catch {
    return 0;
  }
}, yg = async (e) => {
  const t = await se.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ce(t);
}, vg = async () => {
  const e = await se.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ce(e);
}, Qu = () => {
  const { dispatch: e } = ke(), [t, n] = f.useState(() => {
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
        const z = JSON.parse(E);
        return { ...O, ...z, tags: [] };
      } catch {
        return O;
      }
    return O;
  });
  f.useEffect(() => {
    const { tags: E, ...O } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(O));
  }, [t]);
  const [r, s] = f.useState([]), [a, o] = f.useState([]), [i, c] = f.useState(0), [d, h] = f.useState(!1), [v, w] = f.useState([]), [_, g] = f.useState(""), [k, S] = f.useState(!1), [m, u] = f.useState(null), p = f.useRef(!1), y = (E) => {
    E.target === E.currentTarget && (p.current = !0);
  }, x = (E) => {
    E.target === E.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  f.useEffect(() => {
    (async () => {
      try {
        const O = await Ih();
        n((z) => z.custom_path ? z : { ...z, custom_path: O });
      } catch (O) {
        ee.error("Failed to fetch home directory:", O);
      }
    })();
  }, []), f.useEffect(() => {
    const E = new AbortController();
    return (async () => {
      const z = t.type === "custom" ? t.custom_path : t.subfolder;
      if (ee.log(
        `loadFolders started. Path: "${z}", Type: "${t.type}"`
      ), t.type === "custom" && !z) {
        ee.log("Custom path is empty, skipping load."), s([]), o([]), c(0);
        return;
      }
      h(!0);
      const T = z, C = t.type;
      try {
        ee.log("Step 1: Fast load starting...");
        const D = await pg(
          t.type,
          z,
          !0,
          E.signal
        );
        if (E.signal.aborted) {
          ee.log("Step 1: Aborted.");
          return;
        }
        ee.log(
          `Step 1 complete. Found ${D.folders.length} folders, ${D.images.length} images.`
        ), s(D.folders), o(D.images), c(null);
        const Q = D.folders.map((I) => I.name);
        Q.length > 0 && (ee.log(
          `Step 2: Metadata fetch starting for ${Q.length} folders...`
        ), hg(
          C,
          T,
          Q,
          E.signal
        ).then((I) => {
          if (E.signal.aborted) {
            ee.log("Step 2: Aborted.");
            return;
          }
          ee.log("Step 2: Metadata fetch complete."), s(
            (K) => K.map((ue) => {
              const B = I[ue.name];
              return B ? { ...ue, count: B.count, preview: B.preview } : ue;
            })
          );
        }).catch((I) => {
          I.name !== "AbortError" && ee.error("Step 2: Metadata fetch failed:", I);
        })), ee.log("Step 3: Path image count starting..."), gg(C, T, E.signal).then((I) => {
          if (E.signal.aborted) {
            ee.log("Step 3: Aborted.");
            return;
          }
          ee.log(`Step 3: Path image count complete: ${I}`), c(I);
        }).catch((I) => {
          I.name !== "AbortError" && ee.error("Step 3: Path image count failed:", I);
        });
      } catch (D) {
        if (D.name === "AbortError") {
          ee.log("Request aborted.");
          return;
        }
        ee.error("Failed to load folders:", D), s([]), o([]), c(0);
      } finally {
        E.signal.aborted || h(!1);
      }
    })(), () => {
      E.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const j = f.useCallback(async () => {
    S(!0);
    try {
      const E = await Jo();
      w(E);
    } catch (E) {
      ee.error("Failed to fetch tags:", E);
    } finally {
      S(!1);
    }
  }, []);
  f.useEffect(() => {
    j();
  }, [j]), et({
    onEscape: f.useCallback(() => {
      m ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [m, e])
  });
  const b = f.useMemo(() => v.filter(
    (E) => E.name.toLowerCase().includes(_.toLowerCase()) && !t.tags.includes(E.name)
  ), [v, _, t.tags]), N = (E) => {
    const O = E.trim();
    O && !t.tags.includes(O) && (n({ ...t, tags: [...t.tags, O] }), g(""));
  }, R = (E) => {
    n({ ...t, tags: t.tags.filter((O) => O !== E) });
  }, P = (E) => {
    E.key === "Enter" && _.trim() && (E.preventDefault(), N(_.trim()));
  }, L = async () => {
    try {
      await yg(t), e({
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
      ee.error("Failed to start scan:", E), alert(`Failed to start scan: ${E}`);
    }
  }, U = (E) => {
    if (t.type === "custom") {
      const O = t.custom_path.includes("\\") ? "\\" : "/", z = t.custom_path.endsWith(O) ? `${t.custom_path}${E}` : `${t.custom_path}${O}${E}`;
      n({ ...t, custom_path: z });
    } else {
      const O = t.subfolder ? `${t.subfolder}/${E}` : E;
      n({ ...t, subfolder: O });
    }
  }, Z = () => {
    if (t.type === "custom") {
      const E = t.custom_path.includes("\\") ? "\\" : "/", O = t.custom_path.split(E);
      if (O.length > 1) {
        O.pop();
        let z = O.join(E);
        z === "" && E === "/" && (z = "/"), n({ ...t, custom_path: z });
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
        onMouseDown: y,
        onMouseUp: x,
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
                      children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                            onClick: () => R(E),
                            children: /* @__PURE__ */ l.jsx(we, { size: 12 })
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
                            value: _,
                            onChange: (E) => g(E.target.value),
                            onKeyDown: P
                          }
                        ),
                        _.trim() && !t.tags.includes(_.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(_),
                            children: /* @__PURE__ */ l.jsx(Es, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: k ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? _ && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        _
                      ] }) : b.map((E) => /* @__PURE__ */ l.jsx(
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
                        onClick: L,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ l.jsx(Yr, { size: 16 }),
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
                          onClick: Z,
                          children: [
                            /* @__PURE__ */ l.jsx(Pu, { size: 16 }),
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
                          onClick: () => U(E.name),
                          children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-folder-icon-wrapper", children: E.preview ? /* @__PURE__ */ l.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Je(E.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ l.jsx(dh, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: E.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${E.count === null ? "meld-folder-count--loading" : ""}`,
                                children: E.count !== null ? `${E.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx(Yo, { size: 14 })
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
                              src: Je(E),
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
                          children: /* @__PURE__ */ l.jsx(we, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "img",
                        {
                          src: Je(m),
                          alt: m.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx("div", { className: "meld-import-preview-info", children: m.filename })
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
}, wg = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, s] = f.useState("zip"), [a, o] = f.useState(!1), [i, c] = f.useState(!1), d = f.useRef(!1), h = (_) => {
    _.target === _.currentTarget && (d.current = !0);
  }, v = (_) => {
    _.target === _.currentTarget && d.current && (i || n()), d.current = !1;
  };
  et({
    onEscape: () => {
      i || n();
    }
  });
  const w = async () => {
    c(!0);
    try {
      if (r === "zip")
        await $h(e, a);
      else
        for (const _ of e)
          await Uh(_, a), await new Promise((g) => setTimeout(g, 200));
      n(), t == null || t();
    } catch (_) {
      console.error("Download failed:", _), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: h,
        onMouseUp: v,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(qr, { size: 18 }),
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
                children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                        onChange: (_) => o(_.target.checked),
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
                  /* @__PURE__ */ l.jsx(qr, { size: 16 }),
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
}, Vu = async () => {
  const e = await se.fetchApi("/meld/workflows");
  return ce(e);
}, Bu = async (e) => {
  const t = await se.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return ce(t);
}, ei = () => ({ executeWorkflow: f.useCallback(
  async (t, n, r, s) => {
    var _, g, k, S, m, u, p;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: s
    });
    const a = await Bu(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = s || null, i = null, c = !1;
    const d = (y) => {
      if (!y) return !1;
      const x = y.replace(/\s+/g, "");
      return x === "MeldImageLoader" || x === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const x = a.nodes.find(
          (j) => d(j.type)
        );
        x && (o = String(x.id));
      }
      const y = a.nodes.find(
        (x) => {
          var j;
          return ((j = x.type) == null ? void 0 : j.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      y && (i = String(y.id));
    } else {
      if (!o)
        for (const y in a) {
          const x = a[y];
          if (d(x.class_type)) {
            o = y;
            break;
          }
        }
      for (const y in a)
        if (((_ = a[y].class_type) == null ? void 0 : _.replace(/\s+/g, "")) === "LoadImageMask") {
          i = y;
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
    let h = n.filename;
    if (n.subfolder && (h = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (h = `${h} [${n.type}]`), c) {
      const y = window.app, x = t.replace(/\.json$/i, "");
      let j = !1;
      const b = document.querySelectorAll(".workflow-tab");
      for (const P of Array.from(b)) {
        const L = P.querySelector(".workflow-label"), U = ((g = L == null ? void 0 : L.textContent) == null ? void 0 : g.trim()) || ((k = P.textContent) == null ? void 0 : k.trim()) || "";
        if (U === x || U === t || U.startsWith(`${x} `) || U.startsWith(`${x}•`)) {
          P.click(), j = !0;
          break;
        }
      }
      j || await y.loadGraphData(a, !0, !0, t), await new Promise((P) => setTimeout(P, 200));
      const N = y.graph._nodes;
      console.log("[Meld] Active graph nodes count:", N.length);
      const R = N.find(
        (P) => String(P.id) === o || d(P.type)
      );
      if (R) {
        const P = (S = R.widgets) == null ? void 0 : S.find((L) => L.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: R.id,
          type: R.type,
          imagePath: h
        }), P && (P.value = h, typeof P.callback == "function" && P.callback(h));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const P = N.find(
          (L) => {
            var U;
            return String(L.id) === i || ((U = L.type) == null ? void 0 : U.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: P == null ? void 0 : P.id,
          maskFilename: r
        }), P) {
          const L = (m = P.widgets) == null ? void 0 : m.find(
            (Z) => Z.name === "image"
          );
          L && (L.value = `${r} [temp]`);
          const U = (u = P.widgets) == null ? void 0 : u.find(
            (Z) => Z.name === "channel"
          );
          U && (U.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      y.graph.setDirtyCanvas(!0, !0);
      try {
        await y.queuePrompt(0);
        return;
      } catch (P) {
        throw console.error("Failed to queue workflow:", P), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const v = JSON.parse(JSON.stringify(a));
    v[o].inputs.image = h, r && i && (v[i].inputs.image = `${r} [temp]`, v[i].inputs.channel = "red");
    const w = await se.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: se.clientId
      })
    });
    if (!w.ok) {
      const y = await w.json();
      throw new Error(((p = y.error) == null ? void 0 : p.message) || "Failed to queue workflow");
    }
    return await w.json();
  },
  []
) });
function xg(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Zr(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = xg(e), s = (h) => {
    if (!h) return !1;
    const v = h.replace(/\s+/g, "").toLowerCase();
    return v === "meldimageloader" || v === "loadimage";
  }, a = n.graph._nodes.filter(
    (h) => s(h.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const h = a.find(
      (v) => String(v.id) === t
    );
    h && (o = h);
  }
  const i = o.widgets.find(
    (h) => h.name === "image"
  );
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const _g = () => {
  const { dispatch: e } = ke();
  return { injectMaskToGraph: f.useCallback(
    (n, r) => {
      var h, v;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), Zr(n);
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
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (h = s.graph).afterChange) == null || v.call(h), s.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function na(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function kg(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = Za(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, s), d = new Uint8ClampedArray(r * s);
  for (let h = 0; h < r * s; h++)
    d[h] = c.data[h * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function Za(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: s, height: a } = e, o = new ImageData(s, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], h = c * 4;
    d > 0 ? (i[h] = t[0], i[h + 1] = t[1], i[h + 2] = t[2], i[h + 3] = n) : (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0);
  }
  return o;
}
function Sg(e) {
  return e.data.every((t) => t === 0);
}
const hc = (e) => e === "rect" || e === "ellipse" || e === "lasso", us = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: s
}) => {
  const { state: a, dispatch: o } = ke(), i = a.images.find(($) => $.id === e), { injectMaskToGraph: c } = _g(), { executeWorkflow: d } = ei();
  et({ onEscape: s });
  const h = f.useRef(null), v = f.useRef(null), w = f.useRef(null), _ = f.useRef(null), [g, k] = f.useState(!1), [S, m] = f.useState(() => {
    const $ = localStorage.getItem("meld-mask-tool");
    return hc($) ? $ : "rect";
  });
  f.useEffect(() => {
    hc(S) && localStorage.setItem("meld-mask-tool", S);
  }, [S]);
  const [u, p] = f.useState({ x: 0, y: 0 }), [y, x] = f.useState({ x: 0, y: 0 }), [j, b] = f.useState([]), [N, R] = f.useState(null), [P, L] = f.useState(!1), [U, Z] = f.useState(1), [E, O] = f.useState({ x: 0, y: 0 }), [z, T] = f.useState(!1), [C, D] = f.useState(!1), Q = f.useRef(null), I = f.useCallback(() => {
    const $ = w.current, A = v.current;
    if (!$ || !A) return null;
    const F = A.getBoundingClientRect(), M = $.naturalWidth, H = $.naturalHeight;
    if (!M || !H) return null;
    const V = M / H, q = F.width / F.height;
    let ne, ie, de = 0, fe = 0;
    return V > q ? (ne = F.width, ie = F.width / V, fe = (F.height - ie) / 2) : (ie = F.height, ne = F.height * V, de = (F.width - ne) / 2), {
      left: de,
      top: fe,
      width: ne,
      height: ie
    };
  }, []), K = f.useCallback(() => {
    Z(($) => {
      const A = Math.min($ * 1.2, 20), F = v.current;
      return F && O((M) => {
        const H = F.getBoundingClientRect(), V = H.width / 2, q = H.height / 2, ne = {
          x: (V - M.x) / $,
          y: (q - M.y) / $
        };
        return { x: V - ne.x * A, y: q - ne.y * A };
      }), A;
    });
  }, []), ue = f.useCallback(() => {
    Z(($) => {
      const A = Math.max(0.1, $ / 1.2), F = v.current;
      return F && O((M) => {
        const H = F.getBoundingClientRect(), V = H.width / 2, q = H.height / 2, ne = {
          x: (V - M.x) / $,
          y: (q - M.y) / $
        };
        return { x: V - ne.x * A, y: q - ne.y * A };
      }), A;
    });
  }, []), B = f.useCallback(() => {
    const $ = h.current;
    if (!$) return;
    const A = $.getContext("2d");
    if (!A) return;
    A.clearRect(0, 0, $.width, $.height);
    const F = getComputedStyle(document.documentElement), M = F.getPropertyValue("--comfy-input-bg-active") || F.getPropertyValue("--comfy-input-bg") || F.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", H = I();
    if (_.current && H && (A.save(), A.globalAlpha = 0.5, A.drawImage(
      _.current,
      H.left,
      H.top,
      H.width,
      H.height
    ), A.restore()), g) {
      const V = Math.min(u.x, y.x), q = Math.min(u.y, y.y), ne = Math.abs(u.x - y.x), ie = Math.abs(u.y - y.y);
      if (A.save(), A.globalAlpha = 0.3, A.fillStyle = M, A.strokeStyle = "white", A.lineWidth = 2, A.setLineDash([5, 5]), A.beginPath(), S === "rect")
        A.rect(V, q, ne, ie);
      else if (S === "ellipse") {
        const de = V + ne / 2, fe = q + ie / 2;
        A.ellipse(de, fe, ne / 2, ie / 2, 0, 0, 2 * Math.PI);
      } else if (S === "lasso" && j.length > 1) {
        A.moveTo(j[0].x, j[0].y);
        for (let de = 1; de < j.length; de++)
          A.lineTo(j[de].x, j[de].y);
        A.closePath();
      }
      A.fill(), A.globalAlpha = 1, A.stroke(), A.restore();
    }
  }, [
    g,
    u,
    y,
    S,
    j,
    I
  ]), [re, Y] = f.useState([]), ae = f.useMemo(() => re.length > 0 ? re[re.length - 1] : w.current ? na(
    w.current.naturalWidth,
    w.current.naturalHeight
  ) : null, [re]);
  f.useEffect(() => {
    var $;
    ($ = w.current) != null && $.naturalWidth && re.length === 0 && Y([
      na(
        w.current.naturalWidth,
        w.current.naturalHeight
      )
    ]);
  }, [re.length]);
  const le = f.useRef(!1), Te = f.useRef(0), J = ($) => {
    $.target === $.currentTarget && (le.current = !0);
  }, Re = ($) => {
    $.target === $.currentTarget && le.current && !g && s(), le.current = !1;
  };
  f.useEffect(() => {
    if (!ae) return;
    _.current || (_.current = document.createElement("canvas"));
    const $ = _.current;
    $.width = ae.width, $.height = ae.height;
    const A = $.getContext("2d");
    if (!A) return;
    const F = Za(ae, [255, 255, 255], 255);
    A.putImageData(F, 0, 0), B();
  }, [ae, B]), f.useEffect(() => {
    const $ = v.current;
    if (!$) return;
    const A = (F) => {
      F.preventDefault();
      const M = F.deltaY > 0 ? 1 / 1.1 : 1.1;
      Z((H) => {
        const V = Math.min(Math.max(0.1, H * M), 20);
        return O((q) => {
          const ne = $.getBoundingClientRect(), ie = F.clientX - ne.left, de = F.clientY - ne.top, fe = {
            x: (ie - q.x) / H,
            y: (de - q.y) / H
          };
          return {
            x: ie - fe.x * V,
            y: de - fe.y * V
          };
        }), V;
      });
    };
    return $.addEventListener("wheel", A, { passive: !1 }), () => $.removeEventListener("wheel", A);
  }, []), f.useEffect(() => {
    if (!C) return;
    const $ = (F) => {
      if (Q.current) {
        const M = F.clientX - Q.current.clientX, H = F.clientY - Q.current.clientY;
        O({
          x: Q.current.panX + M,
          y: Q.current.panY + H
        });
      }
    }, A = () => {
      D(!1), Q.current = null;
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", A), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", A);
    };
  }, [C]), f.useEffect(() => {
    const $ = () => {
      v.current && h.current && (h.current.width = v.current.clientWidth, h.current.height = v.current.clientHeight, B());
    }, A = new ResizeObserver($);
    return v.current && A.observe(v.current), $(), () => A.disconnect();
  }, [B]);
  const Fe = ($) => {
    var de;
    const A = $.button === 2, F = $.button === 1, M = z && $.button === 0;
    if (A || F || M) {
      $.preventDefault(), $.stopPropagation(), Q.current = {
        panX: E.x,
        panY: E.y,
        clientX: $.clientX,
        clientY: $.clientY
      }, D(!0);
      return;
    }
    if ($.button !== 0 || g || P || Date.now() - Te.current < 100)
      return;
    $.preventDefault();
    const H = I(), V = (de = v.current) == null ? void 0 : de.getBoundingClientRect();
    if (!H || !V) return;
    k(!0);
    const q = {
      x: ($.clientX - V.left - E.x) / U,
      y: ($.clientY - V.top - E.y) / U
    }, ne = Math.max(
      H.left,
      Math.min(q.x, H.left + H.width)
    ), ie = Math.max(
      H.top,
      Math.min(q.y, H.top + H.height)
    );
    p({ x: ne, y: ie }), x({ x: ne, y: ie }), b(S === "lasso" ? [{ x: ne, y: ie }] : []), R(null);
  };
  f.useEffect(() => {
    if (!g) return;
    const $ = (F) => {
      var ie;
      const M = I(), H = (ie = v.current) == null ? void 0 : ie.getBoundingClientRect();
      if (!M || !H) return;
      const V = {
        x: (F.clientX - H.left - E.x) / U,
        y: (F.clientY - H.top - E.y) / U
      }, q = Math.max(
        M.left,
        Math.min(V.x, M.left + M.width)
      ), ne = Math.max(
        M.top,
        Math.min(V.y, M.top + M.height)
      );
      x({ x: q, y: ne }), S === "lasso" && b((de) => [...de, { x: q, y: ne }]);
    }, A = (F) => {
      var V;
      const M = I(), H = (V = v.current) == null ? void 0 : V.getBoundingClientRect();
      if (M && H && ae && w.current) {
        const q = {
          x: (F.clientX - H.left - E.x) / U,
          y: (F.clientY - H.top - E.y) / U
        }, ne = Math.max(
          M.left,
          Math.min(q.x, M.left + M.width)
        ), ie = Math.max(
          M.top,
          Math.min(q.y, M.top + M.height)
        ), de = Math.min(u.x, ne), fe = Math.min(u.y, ie), he = Math.abs(u.x - ne), it = Math.abs(u.y - ie), dr = S === "lasso";
        if (he > 5 || it > 5 || dr && j.length > 2) {
          const xm = w.current.naturalWidth, _m = w.current.naturalHeight, Nn = xm / M.width, En = _m / M.height, km = kg(ae, (un) => {
            if (S === "rect") {
              const Mn = (de - M.left) * Nn, Ut = (fe - M.top) * En, sl = he * Nn, al = it * En;
              un.rect(Mn, Ut, sl, al);
            } else if (S === "ellipse") {
              const Mn = (de - M.left) * Nn, Ut = (fe - M.top) * En, sl = he * Nn, al = it * En, Sm = Mn + sl / 2, jm = Ut + al / 2;
              un.ellipse(
                Sm,
                jm,
                sl / 2,
                al / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (S === "lasso" && j.length > 2) {
              const Mn = j[0];
              un.moveTo(
                (Mn.x - M.left) * Nn,
                (Mn.y - M.top) * En
              );
              for (let Ut = 1; Ut < j.length; Ut++)
                un.lineTo(
                  (j[Ut].x - M.left) * Nn,
                  (j[Ut].y - M.top) * En
                );
              un.closePath();
            }
          });
          Y((un) => [...un, km]);
        }
      }
      Te.current = Date.now(), k(!1), b([]);
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", A), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", A);
    };
  }, [
    g,
    u.x,
    u.y,
    I,
    ae,
    S,
    j,
    E.x,
    E.y,
    U
  ]);
  const ot = f.useCallback(() => {
    re.length > 1 && Y(($) => $.slice(0, -1));
  }, [re.length]);
  f.useEffect(() => {
    const $ = (F) => {
      F.code === "Space" && !F.repeat && T(!0), (F.metaKey || F.ctrlKey) && F.key.toLowerCase() === "z" && !F.shiftKey ? (F.preventDefault(), F.stopPropagation(), F.stopImmediatePropagation(), ot()) : F.key === "Escape" && (F.preventDefault(), F.stopPropagation(), F.stopImmediatePropagation(), s(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, A = (F) => {
      F.code === "Space" && T(!1);
    };
    return window.addEventListener("keydown", $, { capture: !0 }), window.addEventListener("keyup", A, { capture: !0 }), () => {
      window.removeEventListener("keydown", $, { capture: !0 }), window.removeEventListener("keyup", A, { capture: !0 });
    };
  }, [ot, s]);
  const $t = () => {
    if (w.current) {
      const $ = na(
        w.current.naturalWidth,
        w.current.naturalHeight
      );
      Y((A) => [...A, $]);
    }
  }, or = async () => {
    if (!ae || !w.current) return null;
    L(!0);
    try {
      const { width: $, height: A } = ae, F = document.createElement("canvas");
      F.width = $, F.height = A;
      const M = F.getContext("2d");
      if (!M) return null;
      const H = Za(ae, [255, 255, 255], 255);
      M.putImageData(H, 0, 0);
      const V = await new Promise(
        (he) => F.toBlob(he, "image/png")
      );
      if (!V) return null;
      const ne = `meld_mask_${Date.now()}.png`, ie = new File([V], ne, { type: "image/png" }), de = new FormData();
      de.append("image", ie), de.append("type", "temp"), de.append("overwrite", "true");
      const fe = await se.fetchApi("/upload/image", {
        method: "POST",
        body: de
      });
      return fe.ok ? (await fe.json()).name : null;
    } catch ($) {
      return console.error("[Meld] Error uploading mask:", $), null;
    } finally {
      L(!1);
    }
  }, ir = async () => {
    if (!i) return;
    const $ = await or();
    $ && c(i, $) && (s(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, ll = async () => {
    if (!i) return;
    const $ = await or();
    $ && (t === "run_sequence" && n ? (await d(
      n.workflowName,
      i,
      $,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [i],
        maskFilename: $,
        onSuccess: r
      }
    }));
  }, cr = f.useMemo(
    () => ae && !Sg(ae),
    [ae]
  );
  return i ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: J,
      onMouseUp: Re,
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: ($) => $.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ l.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: s, type: "button", children: /* @__PURE__ */ l.jsx(we, { size: 20 }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "rect" ? "active" : ""}`,
                    onClick: () => m("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(zu, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "ellipse" ? "active" : ""}`,
                    onClick: () => m("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(ah, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "lasso" ? "active" : ""}`,
                    onClick: () => m("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(mh, { size: 18 }),
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
                    onClick: ue,
                    type: "button",
                    title: "Zoom Out",
                    children: /* @__PURE__ */ l.jsx(Mh, { size: 18 })
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      Z(1), O({ x: 0, y: 0 });
                    },
                    type: "button",
                    title: "Reset Zoom",
                    style: {
                      minWidth: "48px",
                      justifyContent: "center",
                      fontSize: "11px"
                    },
                    children: [
                      Math.round(U * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: K,
                    type: "button",
                    title: "Zoom In",
                    children: /* @__PURE__ */ l.jsx(Eh, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  ref: v,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: Fe,
                  onContextMenu: ($) => $.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: C ? "grabbing" : z ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${E.x}px, ${E.y}px) scale(${U})`,
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
                            src: Je(i),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: ($) => $.preventDefault()
                          }
                        ),
                        /* @__PURE__ */ l.jsx(
                          "canvas",
                          {
                            ref: h,
                            className: "meld-mask-editor-canvas",
                            onDragStart: ($) => $.preventDefault()
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
                      onClick: ir,
                      disabled: !cr || P,
                      type: "button",
                      children: [
                        P ? /* @__PURE__ */ l.jsx(uc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(qo, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: ll,
                      disabled: !cr || P,
                      type: "button",
                      children: [
                        P ? /* @__PURE__ */ l.jsx(uc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Yr, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: ot,
                      disabled: re.length <= 1 || P,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ l.jsx(bh, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: $t,
                      disabled: !cr || P,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ l.jsx(we, { size: 16 }),
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
}, jg = () => {
  const { state: e, dispatch: t, updateSetting: n } = ke(), [r, s] = f.useState("Gallery"), [a, o] = f.useState({
    ...e.settings
  }), [i, c] = f.useState(
    {}
  ), [d, h] = f.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, w] = f.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [_, g] = f.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [k, S] = f.useState(e.settings["viewer.thumbnail_window_size"].toString()), [m, u] = f.useState(e.settings["gallery.trash_retention_days"].toString()), [p, y] = f.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [x, j] = f.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, N] = f.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [R, P] = f.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    L,
    U
  ] = f.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    Z,
    E
  ] = f.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [O, z] = f.useState(
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
      const B = Object.keys(a).filter(
        (re) => a[re] !== e.settings[re] && !i[re]
      );
      if (B.length > 0)
        for (const re of B)
          await n(re, a[re]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (B, re) => {
      o((Y) => ({
        ...Y,
        [B]: !re
      }));
    },
    handleNumberChange: (B, re, Y, ae) => {
      B === "gallery.initial_load_count" ? h(re) : B === "gallery.max_load_count" ? w(re) : B === "gallery.lineage_max_depth" ? g(re) : B === "viewer.thumbnail_window_size" ? S(re) : B === "gallery.trash_retention_days" ? u(re) : B === "gallery.auto_link_phash_threshold" ? y(re) : B === "gallery.suggest_phash_threshold" ? j(re) : B === "viewer.details.max_positive_prompt_lines" ? N(re) : B === "viewer.details.max_negative_prompt_lines" ? P(re) : B === "fullscreen.details.max_positive_prompt_lines" ? U(re) : B === "fullscreen.details.max_negative_prompt_lines" ? E(re) : B === "sidebar.thumbnail_size" && z(re);
      const le = Number.parseInt(re, 10);
      if (!Number.isNaN(le)) {
        let Te = le;
        Y !== void 0 && Te < Y && (Te = Y), ae !== void 0 && Te > ae && (Te = ae), o((J) => ({
          ...J,
          [B]: Te
        }));
      }
    },
    handleNumberBlur: (B) => {
      B.key === "gallery.initial_load_count" ? h(
        a["gallery.initial_load_count"].toString()
      ) : B.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : B.key === "gallery.lineage_max_depth" ? g(
        a["gallery.lineage_max_depth"].toString()
      ) : B.key === "viewer.thumbnail_window_size" ? S(
        a["viewer.thumbnail_window_size"].toString()
      ) : B.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : B.key === "gallery.auto_link_phash_threshold" ? y(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : B.key === "gallery.suggest_phash_threshold" ? j(
        a["gallery.suggest_phash_threshold"].toString()
      ) : B.key === "viewer.details.max_positive_prompt_lines" ? N(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : B.key === "viewer.details.max_negative_prompt_lines" ? P(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : B.key === "fullscreen.details.max_positive_prompt_lines" ? U(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : B.key === "fullscreen.details.max_negative_prompt_lines" ? E(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : B.key === "sidebar.thumbnail_size" && z(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o((B) => ({
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
      })), c({});
    },
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    validateShortcut: (B) => B.trim() ? B.trim().split(/\s+/).every((Y) => !!(Y === "next" || Y === "prev" || Y === "delete" || Y.startsWith("tag:") && Y.length > 4 || Y.startsWith("-tag:") && Y.length > 5 || Y.startsWith("tag-toggle:") && Y.length > 11)) : !0,
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: k,
    trashRetentionDaysInput: m,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: x,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: R,
    fullscreenMaxPositivePromptLinesInput: L,
    fullscreenMaxNegativePromptLinesInput: Z,
    thumbnailSizeInput: O
  };
}, X = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), bg = ({
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
      X,
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
      X,
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
    /* @__PURE__ */ l.jsx(
      X,
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
      X,
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
function Mt({
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
function Hu() {
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
function Ku(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Gu(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function qu(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Yu(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx(Hu, {})
  ] });
}
function Xu(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Zu(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ l.jsx(Hu, {})
  ] });
}
function Ju(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function em(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function tm(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 15h6" })
  ] });
}
function nm(e) {
  return /* @__PURE__ */ l.jsxs(Mt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const rm = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Ku
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Xu
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Zu
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: qu },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Yu
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Gu
  },
  { id: "edit_tags", label: "Edit Tags", icon: em },
  { id: "edit_notes", label: "Edit Notes", icon: tm },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Ju
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: nm
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Ft }
], Cg = ({
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
      X,
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
    /* @__PURE__ */ l.jsx(
      X,
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
      X,
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
      X,
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
      X,
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
    /* @__PURE__ */ l.jsx(X, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
            children: rm.map((d) => /* @__PURE__ */ l.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), Ng = () => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "ComfyUI Meld" }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: "Version" }),
      /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: "0.3.0" })
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
] }), Eg = ({
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
                const h = s(
                  e[c] || ""
                );
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
}, Mg = ({
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
      X,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (h) => s((v) => ({
              ...v,
              "gallery.matching_strategy": h.target.value
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
            value: c,
            min: 0,
            max: 100,
            onChange: (h) => t(
              "gallery.auto_link_phash_threshold",
              h.target.value,
              0,
              100
            ),
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
            value: d,
            min: 0,
            max: 100,
            onChange: (h) => t(
              "gallery.suggest_phash_threshold",
              h.target.value,
              0,
              100
            ),
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
      X,
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
            onChange: (h) => t(
              "gallery.lineage_max_depth",
              h.target.value,
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
      X,
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
            onChange: (h) => t(
              "gallery.trash_retention_days",
              h.target.value,
              0,
              365
            ),
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
] }), Ig = ({
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
      X,
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
      X,
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
    /* @__PURE__ */ l.jsx(
      X,
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
    /* @__PURE__ */ l.jsx(
      X,
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
      X,
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
] }), lm = () => {
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
    validateShortcut: w,
    // Input states
    initialLoadCountInput: _,
    maxLoadCountInput: g,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: m,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: y,
    maxNegativePromptLinesInput: x,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: b,
    thumbnailSizeInput: N
  } = jg();
  et({ onEscape: o });
  const R = f.useRef(!1), P = (E) => {
    E.target === E.currentTarget && (R.current = !0);
  }, L = (E) => {
    E.target === E.currentTarget && R.current && o(), R.current = !1;
  }, U = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], Z = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          Mg,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            lineageMaxDepthInput: k,
            trashRetentionDaysInput: m,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: p
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          Cg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: N,
            initialLoadCountInput: _,
            maxLoadCountInput: g
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          Ig,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: S,
            maxPositivePromptLinesInput: y,
            maxNegativePromptLinesInput: x
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          bg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: b
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          Eg,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: s,
            setShortcutErrors: a,
            validateShortcut: w,
            handleToggle: i,
            handleResetShortcuts: h
          }
        );
      case "Information":
        return /* @__PURE__ */ l.jsx(Ng, {});
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
        onMouseUp: L,
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
                    children: /* @__PURE__ */ l.jsx(we, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ l.jsx("div", { className: "meld-tabs", children: U.map((E) => /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === E.id ? "active" : ""}`,
                    onClick: () => t(E.id),
                    children: E.label
                  },
                  E.id
                )) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: Z() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, xt = "none", sm = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: s, refreshImages: a } = ke(), [o, i] = f.useState([]), [c, d] = f.useState(t), [h, v] = f.useState(""), [w, _] = f.useState(!0), [g, k] = f.useState(!1), S = f.useRef(null), m = e.length > 1, u = f.useRef(!1), p = (L) => {
    L.target === L.currentTarget && (u.current = !0);
  }, y = (L) => {
    L.target === L.currentTarget && u.current && n(), u.current = !1;
  }, x = f.useCallback(async () => {
    _(!0);
    try {
      const L = await Jo();
      i(L);
    } catch (L) {
      console.error("Failed to fetch tags:", L);
    } finally {
      _(!1);
    }
  }, []);
  f.useEffect(() => {
    x();
  }, [x]), f.useEffect(() => {
    S.current && S.current.focus();
  }, []), et({ onEscape: n });
  const j = f.useMemo(() => o.filter(
    (L) => L.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(L.name)
  ), [o, h, c]), b = (L) => {
    const U = L.trim();
    if (U.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    U && !c.includes(U) && (d([...c, U]), v(""));
  }, N = (L) => {
    d(c.filter((U) => U !== L));
  }, R = async () => {
    k(!0);
    try {
      if (m) {
        const L = c.filter((Z) => !t.includes(Z)), U = t.filter(
          (Z) => !c.includes(Z)
        );
        await Ya(e, L, U);
      } else
        await Ah(e[0], c);
      await a(), s({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (L) {
      console.error("Failed to update tags:", L), alert("Failed to update tags.");
    } finally {
      k(!1);
    }
  }, P = (L) => {
    L.key === "Enter" && h.trim() && (L.preventDefault(), L.stopPropagation(), b(h.trim()));
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: p,
        onMouseUp: y,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (L) => L.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(ar, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: m ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(we, { size: 20 }) })
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
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((L) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                L,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => N(L),
                    children: /* @__PURE__ */ l.jsx(we, { size: 12 })
                  }
                )
              ] }, L)) })
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
                    value: h,
                    onChange: (L) => v(L.target.value),
                    onKeyDown: P
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(h),
                    children: [
                      /* @__PURE__ */ l.jsx(Es, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? h ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : j.map((L) => /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => b(L.name),
                  children: L.name
                },
                L.id
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
                onClick: R,
                disabled: g,
                children: g ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ms = (e, t) => {
  const n = f.useCallback(async (_) => {
    try {
      const g = await Fh(_.id);
      return g.workflow ? (await window.app.loadGraphData(
        g.workflow
      ), ee.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (g) {
      return ee.error("Error restoring workflow:", g), alert("Failed to restore workflow."), !1;
    }
  }, []), r = f.useCallback(async (_) => {
    try {
      const g = await Wh(_.id), k = g.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", S = window.app, u = window.LiteGraph.createNode(k);
      if (!u)
        return console.error(`Node type ${k} not found.`), alert(
          `Node type ${k} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const p = g.is_flux ? {
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
        for (const [b, N] of Object.entries(p)) {
          const R = g[b];
          if (R != null && R !== "") {
            const P = u.widgets.find(
              (L) => L.name === N
            );
            P && (P.value = R);
          }
        }
        const j = u.widgets.find(
          (b) => b.name === "control_after_generate"
        );
        j && (j.value = "fixed");
      }
      const y = S.canvas.ds.offset, x = S.canvas.ds.scale;
      return u.pos = [(-y[0] + 400) / x, (-y[1] + 300) / x], S.graph.add(u), S.canvas.selectNode(u), S.canvas.centerOnNode(u), !0;
    } catch (g) {
      return console.error("Error adding Unified Loader:", g), alert("Failed to load settings."), !1;
    }
  }, []), s = f.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [_.id],
          tags: _.tags || []
        }
      });
    },
    [t]
  ), a = f.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "note_edit",
          imageId: _.id,
          notes: _.user_notes || ""
        }
      });
    },
    [t]
  ), o = f.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: _.id }
      });
    },
    [t]
  ), i = f.useCallback(
    (_) => {
      const g = window.app;
      if (!(g != null && g.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const k = (u) => {
        if (!u) return !1;
        const p = u.replace(/\s+/g, "").toLowerCase();
        return p === "meldimageloader" || p === "loadimage";
      }, S = g.graph._nodes.filter(
        (u) => k(u.type)
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
            image: _,
            nodes: S.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              Zr(_, u);
            }
          }
        }), !0;
      const m = Zr(_);
      return m.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: m.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = f.useCallback(
    (_) => {
      const g = Array.isArray(_) ? _ : [_];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: g }
      });
    },
    [t]
  ), d = f.useCallback(
    async (_, g = "run") => {
      var S;
      console.log("[Meld] handleRunWithMask called", _, g);
      const k = Array.isArray(_) ? _ : [_];
      if (g === "apply") {
        const m = window.app, u = ((S = m == null ? void 0 : m.graph) == null ? void 0 : S._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          u.map((x) => ({
            id: x.id,
            type: x.type
          }))
        );
        const p = u.some(
          (x) => x.type === "LoadImageMask"
        ), y = u.some(
          (x) => x.type === "MeldImageLoader" || x.type === "LoadImage" || x.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: p, hasLoaderNode: y }), !p || !y) {
          const x = [];
          y || x.push("'Meld Image Loader'"), p || x.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${x.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (k.length > 1) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "'Apply' mode without queueing only supports single image selection."
            }
          });
          return;
        }
        t({
          type: "OPEN_MODAL",
          payload: { type: "mask_editor", imageId: k[0].id, mode: g }
        });
        return;
      }
      try {
        if (!(await Vu()).some(
          (p) => p.valid && p.mask_count >= 1
        )) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "No workflows found with at least one 'Load Image (as Mask)' node. Please save a compatible workflow first."
            }
          });
          return;
        }
      } catch (m) {
        console.error("[Meld] Error checking workflows:", m);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: k,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), h = f.useCallback(
    async (_, g) => {
      try {
        const k = _.id, m = (await Zo([k])).restored_ids || [k];
        t({ type: "REMOVE_IMAGES", payload: m }), g == null || g();
      } catch (k) {
        t({
          type: "SET_ERROR",
          payload: k instanceof Error ? k.message : String(k)
        });
      }
    },
    [t]
  ), v = f.useCallback(
    (_) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "delete_confirm",
          imageIds: [_.id],
          hasLineage: !!(_.parent_id || _.has_children),
          isPermanent: e.viewScope === "trash"
        }
      });
    },
    [e.viewScope, t]
  ), w = f.useCallback(
    async (_, g) => {
      try {
        const k = await zh(
          _,
          g
        );
        t({ type: "UPDATE_IMAGE", payload: k });
      } catch (k) {
        t({
          type: "SET_ERROR",
          payload: k instanceof Error ? k.message : String(k)
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
    handleRestore: h,
    handleDelete: v,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, am = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = ke(), { handleUpdateUserNotes: a } = Ms(r, s), [o, i] = f.useState(t), [c, d] = f.useState(!1), h = f.useRef(null), v = f.useRef(!1), w = (k) => {
    k.target === k.currentTarget && (v.current = !0);
  }, _ = (k) => {
    k.target === k.currentTarget && v.current && n(), v.current = !1;
  };
  f.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const g = f.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (k) {
      console.error("Failed to update notes:", k), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return f.useEffect(() => {
    const k = (S) => {
      S.key === "Enter" && (S.ctrlKey || S.metaKey) && S.target === h.current && (S.preventDefault(), S.stopPropagation(), S.stopImmediatePropagation(), g());
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => {
      window.removeEventListener("keydown", k, {
        capture: !0
      });
    };
  }, [g]), et({ onEscape: n }), ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: _,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(kh, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(we, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ l.jsx(
              "textarea",
              {
                ref: h,
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
                onClick: g,
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
}, om = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ke(), s = f.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  et({ onEscape: s });
  const a = f.useRef(!1), o = f.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = f.useCallback(
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
                    children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                      /* @__PURE__ */ l.jsx(Yr, { size: 12 })
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
}, im = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var z;
  const { dispatch: s } = ke(), [a, o] = f.useState([]), [i, c] = f.useState(!0), [d, h] = f.useState(null), [v, w] = f.useState(!1), [_, g] = f.useState(null), [k, S] = f.useState({}), [m, u] = f.useState({}), [p, y] = f.useState(""), x = f.useRef(null), j = f.useMemo(() => a.map((T) => {
    let C = T.valid, D = T.reason;
    return r && T.mask_count === 0 && (C = !1, D = "No 'Load Image (as Mask)' node found."), { ...T, valid: C, reason: D };
  }).sort((T, C) => T.valid !== C.valid ? T.valid ? -1 : 1 : T.name.localeCompare(C.name)), [a, r]), b = f.useMemo(() => {
    if (!p.trim()) return j;
    const T = p.toLowerCase();
    return j.filter(
      (C) => C.name.toLowerCase().includes(T)
    );
  }, [j, p]), N = f.useCallback(async () => {
    try {
      c(!0);
      const T = await Vu();
      o(T), h(null);
    } catch (T) {
      h(T instanceof Error ? T.message : String(T));
    } finally {
      c(!1);
    }
  }, []);
  f.useEffect(() => {
    N();
  }, [N]), f.useEffect(() => {
    !i && x.current && x.current.focus();
  }, [i]);
  const R = f.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]);
  et({ onEscape: R });
  const P = f.useRef(!1), L = f.useCallback((T) => {
    T.target === T.currentTarget && (P.current = !0);
  }, []), U = f.useCallback(
    (T) => {
      T.target === T.currentTarget && P.current && R(), P.current = !1;
    },
    [R]
  ), Z = async (T, C) => {
    if (!v)
      try {
        w(!0);
        const D = await t(T, C);
        n == null || n(), D !== !1 && R();
      } catch (D) {
        h(D instanceof Error ? D.message : String(D)), w(!1);
      }
  }, E = async (T) => {
    if (!(k[T] || m[T]))
      try {
        u((I) => ({ ...I, [T]: !0 }));
        const C = await Bu(T), D = [], Q = (I) => {
          if (!I) return !1;
          const K = I.replace(/\s+/g, "").toLowerCase();
          return r ? K === "loadimagemask" : K === "meldimageloader" || K === "loadimage";
        };
        if (C.nodes && Array.isArray(C.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            C.nodes.length
          );
          for (const I of C.nodes)
            Q(I.type) && (console.log(
              "[Meld] Found target node (UI):",
              I.id,
              I.type,
              I.title
            ), D.push({
              id: String(I.id),
              type: I.type || "",
              title: I.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const I in C) {
            const K = C[I];
            K && typeof K == "object" && Q(K.class_type) && (console.log(
              "[Meld] Found target node (API):",
              I,
              K.class_type
            ), D.push({
              id: I,
              type: K.class_type || ""
            }));
          }
        }
        D.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), S((I) => ({ ...I, [T]: D }));
      } catch (C) {
        console.error("Failed to fetch workflow nodes:", C);
      } finally {
        u((C) => ({ ...C, [T]: !1 }));
      }
  }, O = (T) => {
    if (!T.valid || v) return;
    if ((r ? T.mask_count : T.loader_count + T.load_image_count) <= 1) {
      Z(T.name);
      return;
    }
    _ === T.name ? g(null) : (g(T.name), E(T.name));
  };
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: L,
        onMouseUp: U,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (T) => T.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Xo, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: R,
                    children: /* @__PURE__ */ l.jsx(we, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ l.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ l.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ l.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ l.jsx(Lu, { size: 20 }),
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
                          ref: x,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: p,
                          onChange: (T) => y(T.target.value)
                        }
                      ),
                      p && /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var T;
                            y(""), (T = x.current) == null || T.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ l.jsx(we, { size: 14 })
                        }
                      )
                    ]
                  }
                ),
                b.length === 0 ? /* @__PURE__ */ l.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : b.map((T) => {
                  const C = r ? T.mask_count : T.loader_count + T.load_image_count, D = _ === T.name, Q = k[T.name] || [], I = m[T.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${T.valid ? "" : "meld-workflow-item--invalid"} ${D ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => O(T),
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
                              onClick: (K) => {
                                K.stopPropagation(), Z(T.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(Yr, { size: 14 }),
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
                              onClick: (K) => {
                                K.stopPropagation(), O(T);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                D ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  Yo,
                                  {
                                    size: 14,
                                    style: {
                                      transform: D ? "rotate(90deg)" : "rotate(0deg)",
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
                    D && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: I ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: Q.map((K) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => Z(T.name, K.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: K.title || K.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                K.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(Yr, { size: 12 })
                          ]
                        },
                        K.id
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
                  onClick: R,
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
}, Ja = async (e, t) => {
  await Rh(e, t), ge.getState().removeImages(e);
}, cm = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: s, dispatch: a } = ke(), o = f.useRef(!0);
  f.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = f.useMemo(
    () => s.searchQuery.toLowerCase().includes("has_derivatives:yes") || s.searchQuery.toLowerCase().includes("has_derivatives:true") || s.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [s.searchQuery]
  ), c = f.useMemo(
    () => s.viewerMode === "lineage" && s.lineageImages.length > 0 ? s.lineageImages : s.images.filter(
      (m) => m.exists !== !1 && (s.settings["gallery.show_parent_images"] || !m.has_children || i)
    ),
    [
      s.viewerMode,
      s.lineageImages,
      s.images,
      s.settings,
      i
    ]
  ), d = f.useRef(s.viewerImageId);
  f.useEffect(() => {
    d.current = s.viewerImageId;
  }, [s.viewerImageId]);
  const h = f.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  et({ onEscape: h });
  const v = f.useRef(!1), w = f.useCallback((m) => {
    m.target === m.currentTarget && (v.current = !0);
  }, []), _ = f.useCallback(
    (m) => {
      m.target === m.currentTarget && v.current && h(), v.current = !1;
    },
    [h]
  ), g = f.useCallback(
    (m) => {
      if (!o.current) return;
      const u = d.current;
      if (u === null || !m.has(u))
        return;
      const p = c.findIndex(
        (x) => x.id === u
      );
      if (p === -1) return;
      let y = !1;
      for (let x = p + 1; x < c.length; x++)
        if (!m.has(c[x].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: c[x].id, mode: s.viewerMode }
          }), y = !0;
          break;
        }
      if (!y) {
        for (let x = p - 1; x >= 0; x--)
          if (!m.has(c[x].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: c[x].id, mode: s.viewerMode }
            }), y = !0;
            break;
          }
      }
      y || a({ type: "CLOSE_VIEWER" });
    },
    [s.viewerMode, c, a]
  ), k = async () => {
    var m, u;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const p = new Set(e), y = c.filter(
        (x) => p.has(x.id)
      );
      if (g(p), await Ja(e, n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((u = (m = s.activeModal).onSuccess) == null || u.call(m)), !n && r && r(y), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (p) {
      a({
        type: "SET_ERROR",
        payload: p instanceof Error ? p.message : String(p)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, S = async () => {
    var m, u;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const p = new Set(e);
      for (const x of e) {
        const j = await qa(x);
        if (!o.current) return;
        for (const b of j)
          p.add(b.id);
      }
      const y = c.filter(
        (x) => p.has(x.id)
      );
      if (g(p), await Ja(
        Array.from(p),
        n
      ), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((u = (m = s.activeModal).onSuccess) == null || u.call(m)), !n && r && r(y), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(p)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (p) {
      a({
        type: "SET_ERROR",
        payload: p instanceof Error ? p.message : String(p)
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
        onMouseUp: _,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (m) => m.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Ft, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                            eh,
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
                    onClick: h,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: k,
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
}, dm = ({ message: e }) => {
  const { dispatch: t } = ke(), n = f.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return et({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(Lu, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ l.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
}, um = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = ke(), [s, a] = f.useState([]), [o, i] = f.useState(!0), [c, d] = f.useState(!1), h = f.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  et({ onEscape: h });
  const v = f.useRef(!1), w = (j) => {
    j.target === j.currentTarget && (v.current = !0);
  }, _ = (j) => {
    j.target === j.currentTarget && v.current && h(), v.current = !1;
  }, g = t.images.find((j) => j.id === e), k = f.useCallback(async () => {
    i(!0);
    try {
      const j = t.settings["gallery.suggest_phash_threshold"], b = await Oh(e, j);
      a(b);
    } catch (j) {
      console.error("Failed to load suggestions:", j);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  f.useEffect(() => {
    k();
  }, [k]);
  const S = async (j) => {
    if (j == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!g || j === g.parent_id) && !(g.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await mc(e, j), await Fu(e), await r(), h();
      } catch (b) {
        console.error("Failed to link parent:", b);
      }
  }, m = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await mc(e, null), await r(), h();
      } catch (j) {
        console.error("Failed to remove source:", j), alert("Failed to remove source image.");
      }
  }, u = async (j) => {
    i(!0);
    try {
      const b = await fg(j), { id: N } = await Wu({
        filename: b.name,
        subfolder: b.subfolder || "",
        type: b.type || "input"
      });
      if (N === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await S(N);
    } catch (b) {
      console.error("Failed to upload/register image:", b);
    } finally {
      i(!1);
    }
  }, p = (j) => {
    j.preventDefault(), j.stopPropagation(), d(!1);
    const b = j.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && u(b);
  };
  if (!g) return null;
  const y = s.filter((j) => j.is_source_match), x = s.filter((j) => !j.is_source_match);
  return ye.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: _,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (j) => j.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("h2", { children: [
              "Select Source for #",
              g.id
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: h,
                children: /* @__PURE__ */ l.jsx(we, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
            g.parent_id && /* @__PURE__ */ l.jsxs(
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
                        /* @__PURE__ */ l.jsx(hh, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    g.parent_filename && /* @__PURE__ */ l.jsx(
                                      "img",
                                      {
                                        src: Je({
                                          filename: g.parent_filename,
                                          subfolder: g.parent_subfolder || "",
                                          type: g.parent_type || "output"
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
                                              children: g.parent_filename || "Unknown Image"
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
                                                g.parent_id
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
                      onClick: m,
                      title: "Remove Source",
                      children: /* @__PURE__ */ l.jsx(ph, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (j) => {
                  j.preventDefault(), j.stopPropagation(), d(!0);
                },
                onDragOver: (j) => {
                  j.preventDefault(), j.stopPropagation(), j.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (j) => {
                  j.preventDefault(), j.stopPropagation(), d(!1);
                },
                onDrop: p,
                children: [
                  /* @__PURE__ */ l.jsx(Ch, { size: 32 }),
                  /* @__PURE__ */ l.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ l.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestions-container", children: [
              y.length > 0 && /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: y.map((j) => {
                  const b = j.id === g.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && S(j.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: Je(j), alt: j.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
                          b && /* @__PURE__ */ l.jsx(
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
                    j.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Visual Matches (pHash)" }),
                x.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: x.map((j) => {
                  const b = j.id === g.parent_id;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && S(j.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("img", { src: Je(j), alt: j.filename }),
                        /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ l.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
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
                                  Math.round((64 - j.distance) / 64 * 100),
                                  "%"
                                ] }),
                                b && /* @__PURE__ */ l.jsx(
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
                    j.id
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
}, Lg = () => {
  const { state: e, dispatch: t } = ke(), { executeWorkflow: n } = ei();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
      im,
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
      om,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && Zr(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && ye.createPortal(
      /* @__PURE__ */ l.jsx(um, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && ye.createPortal(/* @__PURE__ */ l.jsx(Qu, {}), document.body),
    e.activeModal.type === "settings" && ye.createPortal(/* @__PURE__ */ l.jsx(lm, {}), document.body),
    e.activeModal.type === "tag_edit" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        sm,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ye.createPortal(
      /* @__PURE__ */ l.jsx(dm, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        cm,
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
        us,
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
        us,
        {
          imageId: e.activeModal.images[e.activeModal.currentIndex].id,
          mode: "run_sequence",
          sequenceData: {
            workflowName: e.activeModal.workflowName,
            targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
            currentIndex: e.activeModal.currentIndex,
            totalCount: e.activeModal.images.length
          },
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
        },
        e.activeModal.images[e.activeModal.currentIndex].id
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && ye.createPortal(
      /* @__PURE__ */ l.jsx(
        am,
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
        wg,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, mm = (e, t) => {
  const n = f.useCallback(
    (r) => {
      const s = t["gallery.lineage_max_depth"];
      if (s === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, s).map((d) => ({
          id: d.id,
          imgSrc: Je(d)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const o = e.find((d) => d.id === a);
      let i = null;
      if (o ? i = Je(o) : i = Je({
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
}, fm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ke(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: v,
    handleRunWithMask: w,
    handleRestore: _,
    handleDelete: g,
    handleEditNotes: k,
    handleUpdateUserNotes: S
  } = Ms(t, n), { getParentChain: m } = mm(t.images, t.settings), [u, p] = f.useState(null), [y, x] = f.useState(!1), [j, b] = f.useState(null), [N, R] = f.useState(!1), P = f.useRef(null), L = async (J, Re, Fe = !1) => {
    try {
      await navigator.clipboard.writeText(J), Fe ? (R(!0), setTimeout(() => R(!1), 2e3)) : (b(Re), setTimeout(() => b(null), 2e3));
    } catch (ot) {
      console.error("Failed to copy text: ", ot);
    }
  };
  f.useEffect(() => {
    const J = (Fe) => {
      Fe.key === "Escape" && (u ? p(null) : x(!1));
    }, Re = (Fe) => {
      P.current && !P.current.contains(Fe.target) && x(!1);
    };
    return window.addEventListener("keydown", J), y && document.addEventListener("mousedown", Re), () => {
      window.removeEventListener("keydown", J), document.removeEventListener("mousedown", Re);
    };
  }, [y, u]);
  const U = m(e), E = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, O = Je(e);
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: u,
    setPopupContent: p,
    isMenuOpen: y,
    setIsMenuOpen: x,
    copiedLabel: j,
    popupCopied: N,
    menuRef: P,
    parentChain: U,
    displayFilename: E,
    imgSrc: O,
    handleCopy: L,
    handleClick: (J) => {
      J.shiftKey ? (J.preventDefault(), J.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : J.ctrlKey || J.metaKey || t.selectedIds.size > 0 ? (J.preventDefault(), J.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (J) => {
      J.preventDefault(), J.stopPropagation(), J.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (J) => {
      J.shiftKey ? (J.preventDefault(), J.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : J.ctrlKey || J.metaKey || t.selectedIds.size > 0 ? (J.preventDefault(), J.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (J.preventDefault(), J.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (J) => {
      J.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !J.shiftKey && !J.ctrlKey && !J.metaKey && s || (J.shiftKey || J.ctrlKey || J.metaKey || t.selectedIds.size > 0) && J.preventDefault();
    },
    handleKeyDown: (J) => {
      var Fe, ot, $t;
      ((Fe = document.activeElement) == null ? void 0 : Fe.tagName) === "INPUT" || ((ot = document.activeElement) == null ? void 0 : ot.tagName) === "TEXTAREA" || ($t = document.activeElement) != null && $t.isContentEditable || (J.key === "Enter" || J.key === " ") && (J.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      _(e);
    },
    handleDelete: () => {
      g(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (J = "run") => w(e, J),
    handleUpdateUserNotes: (J) => S(e.id, J),
    fetchFullImageDetails: r
  };
}, ti = ({
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
  onDelete: w,
  onRestore: _,
  showRestore: g,
  deleteLabel: k,
  showQuickShortcuts: S = !0,
  variant: m = "default",
  iconSize: u = 16,
  buttonClassName: p = ""
}) => {
  const [y, x] = f.useState("left");
  f.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? x("right") : x("left"));
  }, [e, n]);
  const j = (R) => {
    switch (R) {
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
        return _;
      case "delete_or_trash":
        return w;
      default:
        return null;
    }
  }, b = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((R) => R && R !== ""), N = [
    "meld-image-card__menu-container",
    m === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: N, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${p}`,
        onClick: (R) => {
          R.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(wh, { size: u })
      }
    ),
    S && b.map((R, P) => {
      const L = rm.find((E) => E.id === R);
      if (!L || !L.icon) return null;
      const U = L.icon, Z = j(R);
      return !Z || R === "restore_image" && !g ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${p}`,
          onClick: (E) => {
            E.stopPropagation(), Z();
          },
          title: L.label,
          children: /* @__PURE__ */ l.jsx(U, { size: u })
        },
        `${R}-${P}`
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
            icon: Ku,
            handler: s
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Xu,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Zu,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: qu,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: Yu,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Gu,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: em,
            handler: h
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: tm,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Ju,
            handler: d
          },
          ...g ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: nm,
              handler: _,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: k,
            icon: Ft,
            handler: w,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((R) => /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${R.className || ""}`,
            onMouseDown: (P) => P.stopPropagation(),
            onClick: (P) => {
              P.preventDefault(), P.stopPropagation(), t(!1), setTimeout(() => R.handler(), 0);
            },
            children: [
              /* @__PURE__ */ l.jsx(R.icon, { size: 14, color: R.color }),
              /* @__PURE__ */ l.jsx("span", { children: R.label })
            ]
          },
          R.id
        ))
      }
    )
  ] });
}, Tg = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: s
}) => ye.createPortal(
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
                s ? /* @__PURE__ */ l.jsx(qo, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ l.jsx(
                  oh,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  we,
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
), pm = Gt.memo(
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
      menuRef: h,
      parentChain: v,
      displayFilename: w,
      imgSrc: _,
      handleCopy: g,
      handleClick: k,
      handleSelectToggle: S,
      handleContainerClick: m,
      handleMouseDown: u,
      handleKeyDown: p,
      handleRestoreWorkflow: y,
      handleAddUnifiedLoader: x,
      handleEditSource: j,
      handleEditTags: b,
      handleEditNotes: N,
      handleSendToWorkflow: R,
      handleRestore: P,
      handleDelete: L,
      handleRunWithWorkflow: U,
      handleRunWithMask: Z,
      fetchFullImageDetails: E
    } = fm(e), [O, z] = f.useState("idle");
    f.useEffect(() => {
      e.user_notes && O === "saving" && z("idle");
    }, [e.user_notes, O]);
    const T = (C) => {
      C.stopPropagation();
      let D = String(e.id);
      r && t.selectedIds.size > 0 && (D = Array.from(t.selectedIds).join(",")), C.dataTransfer.setData("text/plain", D), ge.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: m,
        onMouseDown: u,
        onKeyDown: p,
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
                src: _,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: u,
                onClick: (C) => {
                  C.stopPropagation(), k(C);
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
                (C, D) => C.imgSrc && /* @__PURE__ */ l.jsx(
                  "img",
                  {
                    src: C.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (Q) => {
                      Q.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: C.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: D === 0 ? "Source" : D === 1 ? "Grand-Source" : `Ancestor (S${D + 1})`,
                    alt: "source thumb"
                  },
                  C.id || D
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
                  const D = await E(e.id);
                  a({
                    title: "Model",
                    text: D.model_name || "-"
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
                        const D = await E(e.id);
                        g(D.model_name || "-", "Model");
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
                  const D = await E(e.id);
                  a({
                    title: "Positive Prompt",
                    text: D.positive_prompt || D.positive || "-"
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
                        const D = await E(e.id);
                        g(
                          D.positive_prompt || D.positive || "-",
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
                  const D = await E(e.id);
                  a({
                    title: "Negative Prompt",
                    text: D.negative_prompt || D.negative || "-"
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
                        const D = await E(e.id);
                        g(
                          D.negative_prompt || D.negative || "-",
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
                  C.stopPropagation(), b();
                },
                children: [
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((C, D) => /* @__PURE__ */ l.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: C
                    },
                    `${C}-${D}`
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
                O === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes-status", children: "Saving..." })
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
            ti,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: h,
              settings: t.settings,
              onAddUnifiedLoader: x,
              onRestoreWorkflow: y,
              onSendToWorkflow: R,
              onRunWithWorkflow: U,
              onRunWithMask: (C) => Z(C),
              onEditSource: j,
              onEditTags: b,
              onEditNotes: N,
              onRestore: P,
              showRestore: t.viewScope === "trash",
              onDelete: L,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          s && /* @__PURE__ */ l.jsx(
            Tg,
            {
              title: s.title,
              text: s.text,
              onClose: () => a(null),
              onCopy: (C) => g(C, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
pm.displayName = "DetailedImageCard";
const hm = Gt.memo(
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
      menuRef: h,
      state: v,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: _,
      handleSendToWorkflow: g,
      handleRunWithWorkflow: k,
      handleRunWithMask: S,
      handleEditSource: m,
      handleEditTags: u,
      handleEditNotes: p,
      handleDelete: y,
      handleRestore: x
    } = fm(e), j = v.viewScope === "trash", b = j ? "Delete Permanently" : "Move to Trash", N = (R) => {
      R.stopPropagation();
      let P = String(e.id);
      t && v.selectedIds.size > 0 && (P = Array.from(v.selectedIds).join(",")), R.dataTransfer.setData("text/plain", P), ge.getState().setIsOpen(!0);
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
                onClick: (R) => {
                  R.stopPropagation(), o(R);
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(
            ti,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: h,
              settings: v.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: _,
              onSendToWorkflow: g,
              onRunWithWorkflow: k,
              onRunWithMask: S,
              onEditSource: m,
              onEditTags: u,
              onEditNotes: p,
              onDelete: y,
              onRestore: x,
              showRestore: j,
              deleteLabel: b,
              showQuickShortcuts: !1,
              variant: "thumbnail_overlay_top_right"
            }
          )
        ]
      }
    );
  }
);
hm.displayName = "SimpleImageCard";
const Dg = ({ image: e }) => {
  const { state: t } = ke();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(hm, { image: e }) : /* @__PURE__ */ l.jsx(pm, { image: e });
}, Pg = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: s
}) => {
  const [a, o] = f.useState(!1), i = f.useRef(null);
  return f.useEffect(() => {
    const c = new IntersectionObserver(
      ([h]) => {
        h.isIntersecting && o(!0);
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
}, Rg = () => {
  const { state: e, dispatch: t } = ke(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await vg(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
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
        children: /* @__PURE__ */ l.jsx(zu, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ l.jsx(lh, { size: 14, className: "meld-success-icon" }),
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
}, Og = () => {
  const { state: e } = ke(), { slots: t, addToBucket: n } = ge();
  f.useEffect(() => {
    const r = (s) => {
      var i, c, d;
      if (((i = document.activeElement) == null ? void 0 : i.tagName) === "INPUT" || ((c = document.activeElement) == null ? void 0 : c.tagName) === "TEXTAREA" || (d = document.activeElement) != null && d.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (h) => h.shortcutKey.toLowerCase() === s.key.toLowerCase()
      );
      o && (s.preventDefault(), a.forEach((h) => {
        n(o.id, String(h));
      }), console.log(`Added ${a.size} images to slot ${o.label}`));
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, e.selectedIds]);
}, gm = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (f.useEffect(() => {
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
)), Ag = (e, t, n, r, s) => {
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
        console.log(
          `Action ${e.type} executed on ${t.length} images`
        );
        break;
    }
}, zg = ({ config: e }) => {
  var E;
  const { buckets: t, slots: n, images: r } = ge(), s = n.length, { state: a, dispatch: o } = ke(), [i, c] = f.useState(!1), [d, h] = f.useState(!1), [v, w] = f.useState(!1), [_, g] = f.useState(e.label), [k, S] = f.useState(e.color), m = f.useRef(null), u = f.useRef(null), p = t[e.id] || [], y = p.length;
  f.useEffect(() => {
    const O = (z) => {
      u.current && !u.current.contains(z.target) && c(!1), m.current && !m.current.contains(z.target) && w(!1);
    };
    return (i || v) && document.addEventListener("mousedown", O), () => {
      document.removeEventListener("mousedown", O);
    };
  }, [i, v]);
  const x = p.map((O) => {
    const z = Number(O);
    let T = a.images.find((C) => C.id === z);
    return T || (T = a.lineageImages.find((C) => C.id === z)), T || (T = r[O]), T;
  }).filter(Boolean), j = (O) => {
    O.preventDefault(), O.stopPropagation(), O.currentTarget.classList.add("drag-over");
  }, b = (O) => {
    O.currentTarget.classList.remove("drag-over");
  }, N = (O) => {
    O.preventDefault(), O.stopPropagation(), O.currentTarget.classList.remove("drag-over");
    const z = O.dataTransfer.getData("text/plain");
    z && z.split(",").forEach((C) => {
      if (C) {
        const D = C.trim(), Q = Number(D);
        let I = a.images.find((K) => K.id === Q);
        I || (I = a.lineageImages.find(
          (K) => K.id === Q
        )), ge.getState().addToBucket(e.id, D, I);
      }
    });
  }, R = (O, z) => {
    O.stopPropagation(), O.dataTransfer.setData("text/plain", String(z)), O.dataTransfer.setData("application/meld-lt-source-slot", e.id), O.dataTransfer.effectAllowed = "move";
  }, P = (O, z) => {
    O.dataTransfer.dropEffect === "none" && ge.getState().removeFromBucket(e.id, String(z));
  }, L = (O) => {
    if (y === 0) return;
    const z = {
      type: O
    }, T = p.map((Q) => Number(Q)), C = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Ag(
      z,
      T,
      x,
      o,
      () => {
        ge.getState().showToast(C[O] ?? "Done");
      }
    );
  }, U = () => {
    ge.getState().clearBucket(e.id), ge.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, Z = () => {
    const O = ge.getState();
    O.slots.length <= 1 || (O.removeSlot(e.id), ge.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: j,
      onDragLeave: b,
      onDrop: N,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__images", children: y === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : x.map((O) => {
          const z = "type" in O ? O.type : "output", T = `/api/view?filename=${encodeURIComponent(O.filename)}&type=${z}&subfolder=${encodeURIComponent(O.subfolder || "")}`;
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-lt-slot-panel__image-wrapper",
              draggable: !0,
              onClick: () => {
                o({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: O.id,
                    mode: "lighttable",
                    slotId: e.id
                  }
                });
              },
              onDragStart: (C) => R(C, O.id),
              onDragEnd: (C) => P(C, O.id),
              children: /* @__PURE__ */ l.jsx("img", { src: T, alt: O.filename, draggable: !1 })
            },
            O.id
          );
        }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: m, children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => w(!v),
                disabled: y === 0,
                title: "Actions",
                children: [
                  "Action",
                  /* @__PURE__ */ l.jsx(sh, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: ar
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: Xo
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: Nh
              },
              {
                type: "download",
                label: "Download",
                icon: qr
              },
              {
                type: "delete",
                label: "Delete",
                icon: Ft,
                danger: !0
              }
            ].map((O) => /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${O.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in O && O.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (z) => z.stopPropagation(),
                onClick: () => {
                  "disabled" in O && O.disabled || (w(!1), setTimeout(() => L(O.type), 0));
                },
                children: [
                  /* @__PURE__ */ l.jsx(O.icon, { size: 13 }),
                  /* @__PURE__ */ l.jsx("span", { children: O.label })
                ]
              },
              O.type
            )) })
          ] }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => h(!0),
              title: "Clear Tab",
              disabled: y === 0,
              children: /* @__PURE__ */ l.jsx(ih, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(Au, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: _,
                    onChange: (O) => g(O.target.value),
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
                          value: k.startsWith("var") ? ((E = k.match(
                            /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
                          )) == null ? void 0 : E[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(k) ? k : "#9ca3af",
                          onChange: (O) => S(O.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          value: k,
                          onChange: (O) => S(O.target.value),
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
                    ge.getState().updateSlot(e.id, {
                      label: _,
                      color: k
                    }), c(!1), ge.getState().showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              s > 1 && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: Z,
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
            onConfirm: U,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, Fg = () => {
  const e = ge((t) => t.toastMessage);
  return e ? /* @__PURE__ */ l.jsx("div", { className: "meld-toast", role: "status", "aria-live": "polite", children: e }) : null;
}, Wg = () => {
  var _;
  Og();
  const { isOpen: e, slots: t, buckets: n, setIsOpen: r } = ge(), { state: s } = ke(), [a, o] = f.useState(((_ = t[0]) == null ? void 0 : _.id) || "keep"), i = f.useRef(null), [c, d] = f.useState(!1);
  if (f.useEffect(() => {
    let g = document.getElementById(
      "meld-light-table-portal"
    );
    if (!g) {
      g = document.createElement("div"), g.id = "meld-light-table-portal";
      const k = document.querySelector(".comfyui-body-bottom");
      k ? k.appendChild(g) : document.body.appendChild(g);
    }
    return i.current = g, () => {
    };
  }, []), !e || !i.current) return null;
  const h = () => {
    const g = `slot_${Date.now().toString(36)}`;
    ge.getState().addSlot({
      id: g,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(g);
  }, v = () => {
    t.forEach((g) => {
      ge.getState().clearBucket(g.id);
    }), ge.getState().showToast("All tabs cleared"), d(!1);
  }, w = /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((g) => {
        var k;
        return /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${a === g.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => o(g.id),
            style: { "--tab-color": g.color },
            onDragOver: (S) => {
              S.preventDefault(), o(g.id);
            },
            onDrop: (S) => {
              S.preventDefault();
              const m = S.dataTransfer.getData("text/plain");
              m && m.split(",").forEach((p) => {
                if (p) {
                  const y = p.trim(), x = s.images.find(
                    (j) => String(j.id) === y
                  );
                  ge.getState().addToBucket(g.id, y, x);
                }
              });
            },
            children: [
              g.label,
              "  (",
              ((k = n[g.id]) == null ? void 0 : k.length) || 0,
              ")"
            ]
          },
          g.id
        );
      }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__add-tab-btn",
          onClick: h,
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
          children: /* @__PURE__ */ l.jsx(Es, { size: 16 })
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
            /* @__PURE__ */ l.jsx(Sh, { size: 14 }),
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
          children: /* @__PURE__ */ l.jsx(we, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-light-table__content", children: t.map((g) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === g.id ? "block" : "none" },
        children: /* @__PURE__ */ l.jsx(zg, { config: g })
      },
      g.id
    )) }),
    c && /* @__PURE__ */ l.jsx(
      gm,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ l.jsx(Fg, {})
  ] });
  return ye.createPortal(w, i.current);
}, ym = () => {
  const { state: e, refreshFavorites: t } = ke(), [n, r] = f.useState(!1), [s, a] = f.useState(null), [o, i] = f.useState(null), [c, d] = f.useState(""), [h, v] = f.useState("");
  f.useEffect(() => {
    if (s) {
      const S = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(S);
    }
  }, [s]);
  const w = f.useCallback(
    async (S, m, u) => {
      S.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${u}"?`;
      if (window.confirm(p))
        try {
          await fc(m), await t();
        } catch (y) {
          ee.error("Failed to delete favorite", y);
        }
    },
    [t]
  ), _ = f.useCallback(
    (S, m) => {
      S.stopPropagation(), i(m), d(m.name), v(m.query);
    },
    []
  ), g = f.useCallback(async () => {
    if (!(!o || !c.trim() || !h.trim()))
      try {
        r(!0), await qh(
          o.id,
          c,
          h
        ), await t(), i(null);
      } catch (S) {
        ee.error("Failed to update favorite", S), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [o, c, h, t]), k = f.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (m) => m.query === e.searchQuery
    )) {
      const m = e.favorites.find((u) => u.query === e.searchQuery);
      if (m) {
        r(!0);
        try {
          await fc(m.id), await t();
        } catch (u) {
          ee.error("Failed to delete favorite:", u);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Gh(e.searchQuery, e.searchQuery), await t();
    } catch (m) {
      ee.error("Failed to save favorite:", m);
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
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: _,
    handleSaveEditFavorite: g,
    handleSaveFavorite: k,
    setToastMessage: a
  };
}, vm = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [s, a] = f.useState(!1), [o, i] = f.useState(!1), [c, d] = f.useState(!1);
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
                  children: /* @__PURE__ */ l.jsx(Ou, { size: 14 })
                }
              ),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  onClick: (h) => r(h, e.id, e.name),
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
                  children: /* @__PURE__ */ l.jsx(Ft, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, $g = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = ke(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: w,
    handleEditFavorite: _,
    handleSaveEditFavorite: g
  } = ym(), [k, S] = f.useState({ top: 0, left: 0 }), m = f.useRef(null), u = f.useRef(null);
  if (et({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), f.useEffect(() => {
    if (e) {
      let b = e.left;
      const N = e.bottom + 5;
      b + 300 > window.innerWidth - 10 && (b = window.innerWidth - 300 - 10), b < 10 && (b = 10), S({ top: N, left: b });
    }
  }, [e]), f.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), !e) return null;
  const p = (x) => {
    x.stopPropagation(), x.preventDefault();
  }, y = (x) => {
    x.stopPropagation();
  };
  return ye.createPortal(
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
          onMouseDown: (x) => x.stopPropagation()
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: m,
          onClick: p,
          onMouseDown: y,
          style: {
            position: "fixed",
            top: k.top,
            left: k.left,
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
                          nr,
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
                children: r.favorites.map((x) => /* @__PURE__ */ l.jsx(
                  vm,
                  {
                    fav: x,
                    onSelect: (j) => {
                      n(j), t();
                    },
                    onEdit: _,
                    onDelete: w
                  },
                  x.id
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
          onMouseDown: (x) => {
            x.target === x.currentTarget && i(null);
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (x) => x.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsxs(
                    "h2",
                    {
                      style: { display: "flex", alignItems: "center", gap: "10px" },
                      children: [
                        /* @__PURE__ */ l.jsx(nr, { size: 20, color: "var(--meld-accent-color)" }),
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
                      children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                                onChange: (x) => d(x.target.value),
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
                                onKeyDown: (x) => {
                                  x.key === "Enter" && g(), x.key === "Escape" && i(null);
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
                                value: h,
                                onChange: (x) => v(x.target.value),
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
                                onKeyDown: (x) => {
                                  x.key === "Enter" && !x.shiftKey && (x.preventDefault(), g()), x.key === "Escape" && i(null);
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
                      onClick: g,
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
  );
}, bl = (e) => {
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
}, Ug = () => {
  const { state: e, dispatch: t, updateSetting: n } = ke(), [r, s] = f.useState(e.searchQuery), [a, o] = f.useState([]), [i, c] = f.useState(!1), [d, h] = f.useState([]), [v, w] = f.useState([]), _ = e.settings["search.show_all_keywords"], [g, k] = f.useState(-1), [S, m] = f.useState(null), u = f.useRef(null), p = f.useRef(e.searchQuery), y = f.useCallback(async () => {
    if (v.length > 0) return;
    const z = await Bh();
    w(z);
  }, [v.length]);
  f.useEffect(() => {
    Hh().then((z) => {
      m(z);
    }), _ && y();
  }, [y, _]);
  const x = f.useMemo(() => {
    if (!S) return null;
    const z = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${z}):(.*)$`, "i");
  }, [S]), j = f.useCallback(() => {
    const z = !_;
    z && y(), n("search.show_all_keywords", z);
  }, [_, y, n]), b = r !== p.current;
  f.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    Vh().then((z) => {
      h(z);
    });
  }, [e.settings["search.quick_suggestions"]]), f.useEffect(() => {
    s(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), f.useEffect(() => {
    var z;
    (z = u.current) == null || z.focus();
  }, []);
  const N = f.useCallback(
    (z, T = !0) => {
      p.current !== z && (ee.log("SearchBar: triggering search", { query: z }), t({ type: "SET_SEARCH_QUERY", payload: z }), T && c(!1), p.current = z);
    },
    [t]
  );
  f.useEffect(() => {
    const z = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !x) {
        o([]), c(!1);
        return;
      }
      const T = bl(r), C = T[T.length - 1];
      if (C) {
        const D = C.match(x);
        if (D) {
          const Q = D[1].toLowerCase();
          let I = D[2];
          I.startsWith('"') && (I = I.substring(1)), I.endsWith('"') && (I = I.substring(0, I.length - 1));
          const K = await Qh(I, Q);
          o(K), c(K.length > 0), k(-1);
        } else {
          const Q = C.replace(/^([-!])/, "").toLowerCase();
          if (Q && S) {
            const I = S.all_prefixes.filter((K) => K.startsWith(Q)).map((K) => ({
              type: K,
              value: "",
              count: 0
            }));
            if (I.length > 0) {
              o(I), c(!0), k(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(z);
  }, [
    r,
    e.settings["search.input_suggest"],
    x,
    S
  ]);
  const R = f.useCallback(
    (z) => {
      var ue;
      const T = bl(r), D = (T.pop() || "").match(/^([-!])/), Q = D ? D[1] : "", K = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(z.type);
      if (z.value === "") {
        const B = `${[...T, `${Q}${z.type}:`].join(" ").trim()}`;
        s(B);
      } else {
        const B = K ? z.value : `"${z.value}"`, re = `${[
          ...T,
          `${Q}${z.type}:${B}`
        ].join(" ").trim()} `;
        s(re), o([]), c(!1);
      }
      (ue = u.current) == null || ue.focus();
    },
    [r, S]
  ), P = (z) => {
    z.key === "Enter" ? N(r) : z.key === "Tab" ? i && g >= 0 && (R(a[g]), z.preventDefault()) : z.key === "ArrowDown" ? i && (k((T) => Math.min(T + 1, a.length - 1)), z.preventDefault()) : z.key === "ArrowUp" ? i && (k((T) => Math.max(T - 1, -1)), z.preventDefault()) : z.key === "Escape" && c(!1);
  }, L = f.useCallback(() => {
    s(""), N("");
  }, [N]), U = f.useCallback(
    (z, T, C = !1) => {
      var J;
      const D = bl(r), Q = D[D.length - 1] || "";
      let I = !1;
      const K = Q.replace(/^([-!])/, "").toLowerCase();
      K && z.toLowerCase().startsWith(K) && (I = !0);
      const ue = Q.match(/^([-!])/), B = I && ue ? ue[1] : "";
      if (I && D.pop(), C) {
        const Re = [...D, `${B}${z}:`].filter(Boolean).join(" ");
        s(Re), (J = u.current) == null || J.focus();
        return;
      }
      const ae = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(z) ? T : `"${T}"`, le = `${B}${z}:${ae}`, Te = [...D, le].filter(Boolean).join(" ");
      s(Te), N(Te);
    },
    [r, N, S]
  ), Z = f.useCallback(
    (z) => {
      s(z), z || N("");
    },
    [N]
  ), E = f.useCallback(() => {
    if (r === p.current || !x)
      return;
    const z = bl(r), T = z[z.length - 1];
    if (!T) return;
    const C = !!T.match(x), D = T.replace(/^([-!])/, "").toLowerCase(), Q = D && (S == null ? void 0 : S.all_prefixes.some((I) => I.startsWith(D)));
    (C || Q) && c(!0);
  }, [r, x, S]), O = f.useCallback(() => {
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
    showAllKeywords: _,
    toggleShowAllKeywords: j,
    selectedIndex: g,
    setSelectedIndex: k,
    inputRef: u,
    isQueryChanged: b,
    handleSearch: N,
    handleKeyDown: P,
    applySuggestion: R,
    clearSearch: L,
    applySearchSuggestion: U,
    handleInputChange: Z,
    handleInputFocus: E,
    handleInputBlur: O
  };
}, gc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ l.jsx(ar, { size: 12 });
    case "model":
      return /* @__PURE__ */ l.jsx(nh, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ l.jsx(jh, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ l.jsx(rh, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ l.jsx(Du, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ l.jsx(Tu, { size: 12 });
    case "note":
      return /* @__PURE__ */ l.jsx(ch, { size: 12 });
    case "sort":
      return /* @__PURE__ */ l.jsx(th, { size: 12 });
    default:
      return null;
  }
}, Qg = ({
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
  favorites: w,
  onSelectFavorite: _,
  onEditFavorite: g,
  onDeleteFavorite: k
}) => {
  const S = (y, x, j) => /* @__PURE__ */ l.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(y.type, y.value, j === "all"),
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
      onMouseEnter: (b) => {
        b.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", b.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", b.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (b) => {
        b.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", b.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", b.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: gc(y.type)
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
        j !== "all" && /* @__PURE__ */ l.jsx(
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
    `${j}-${y.type}:${y.value}:${x}`
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
        zIndex: 1e3,
        marginTop: "8px",
        maxHeight: "400px",
        overflowY: "auto",
        boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
      },
      children: t.map((y, x) => /* @__PURE__ */ l.jsx(
        "div",
        {
          onMouseDown: (j) => {
            j.preventDefault(), s(y);
          },
          onMouseEnter: () => r(x),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: x === n ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                children: gc(y.type)
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
                  color: y.value === xt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: y.value === xt ? "bold" : "normal"
                },
                children: y.value === xt ? y.type === "tag" ? `Untagged (${xt})` : `No ${y.type} (${xt})` : y.value
              }
            )
          ] })
        },
        `${y.type}:${y.value}`
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
              (y, x) => S(y, x, "quick")
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
                    (y, x) => S({ type: y, value: "" }, x, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), p = () => w.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsx(nr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: w.map((y) => /* @__PURE__ */ l.jsx(
              vm,
              {
                fav: y,
                onSelect: _,
                onEdit: g,
                onDelete: k
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
        m(),
        u(),
        p()
      ]
    }
  );
}, Vg = () => {
  const { state: e } = ke(), {
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
    isQueryChanged: w,
    handleSearch: _,
    handleKeyDown: g,
    applySuggestion: k,
    clearSearch: S,
    applySearchSuggestion: m,
    handleInputChange: u,
    handleInputFocus: p,
    handleInputBlur: y
  } = Ug(), {
    isSaving: x,
    toastMessage: j,
    editingFavorite: b,
    setEditingFavorite: N,
    editFavoriteName: R,
    setEditFavoriteName: P,
    editFavoriteQuery: L,
    setEditFavoriteQuery: U,
    handleDeleteFavorite: Z,
    handleEditFavorite: E,
    handleSaveEditFavorite: O,
    handleSaveFavorite: z
  } = ym();
  et({
    onEscape: () => N(null),
    enabled: !!b
  });
  const T = f.useRef(null), C = f.useRef(!1);
  f.useEffect(() => {
    b && T.current && T.current.focus();
  }, [b]);
  const D = (I) => {
    I.target === I.currentTarget && (C.current = !0);
  }, Q = (I) => {
    I.target === I.currentTarget && C.current && N(null), C.current = !1;
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
              j && /* @__PURE__ */ l.jsx(
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
                        onClick: () => _(t),
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
                        onMouseEnter: (I) => {
                          I.currentTarget.style.transform = "translateY(-1px)", w ? (I.currentTarget.style.filter = "brightness(1.15)", I.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (I) => {
                          I.currentTarget.style.transform = "none", w ? (I.currentTarget.style.filter = "none", I.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : I.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (I) => {
                          I.currentTarget.style.transform = "translateY(1px)", I.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (I) => {
                          I.currentTarget.style.transform = "translateY(-1px)";
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
                        onChange: (I) => u(I.target.value),
                        onKeyDown: g,
                        onBlur: y,
                        onFocus: p,
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
                        onClick: z,
                        disabled: x,
                        title: e.favorites.some((I) => I.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          nr,
                          {
                            size: 16,
                            color: e.favorites.some((I) => I.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((I) => I.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ l.jsx(we, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                Qg,
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
                  onSelectFavorite: (I) => {
                    n(I), _(I);
                  },
                  onEditFavorite: E,
                  onDeleteFavorite: Z
                }
              )
            ]
          }
        ),
        b && ye.createPortal(
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: D,
              onMouseUp: Q,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (I) => I.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ l.jsx(nr, { size: 20, color: "var(--meld-accent-color)" }),
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
                          children: /* @__PURE__ */ l.jsx(we, { size: 20 })
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
                                    value: R,
                                    onChange: (I) => P(I.target.value),
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
                                    onKeyDown: (I) => {
                                      I.key === "Enter" && O(), I.key === "Escape" && N(null);
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
                                    value: L,
                                    onChange: (I) => U(I.target.value),
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
                                    onKeyDown: (I) => {
                                      I.key === "Enter" && !I.shiftKey && (I.preventDefault(), O()), I.key === "Escape" && N(null);
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
                          onClick: O,
                          disabled: x || !R.trim() || !L.trim(),
                          children: x ? "Saving..." : "Save Changes"
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
}, Bg = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = f.useState([]), [s, a] = f.useState(!0), [o, i] = f.useState(""), [c, d] = f.useState(""), [h, v] = f.useState(!1), [w, _] = f.useState(null), [g, k] = f.useState(""), [S, m] = f.useState(!1), u = f.useRef(null), p = f.useCallback(async () => {
    a(!0);
    try {
      const L = await Jo();
      r(L);
    } catch (L) {
      console.error("Failed to fetch tags:", L);
    } finally {
      a(!1);
    }
  }, []);
  f.useEffect(() => {
    p();
  }, [p]), f.useEffect(() => {
    w !== null && u.current && (u.current.focus(), u.current.select());
  }, [w]);
  const y = async (L) => {
    L.preventDefault();
    const U = c.trim();
    if (!(!U || h)) {
      if (U.toLowerCase() === xt) {
        alert(
          `Tag name '${xt}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((Z) => Z.name.toLowerCase() === U.toLowerCase())) {
        alert(`Tag "${U}" already exists.`);
        return;
      }
      v(!0);
      try {
        await dg(U), d(""), await p();
      } catch (Z) {
        console.error("Failed to add tag:", Z);
      } finally {
        v(!1);
      }
    }
  }, x = async (L, U) => {
    if (confirm(`Are you sure you want to delete tag "${U}"?`))
      try {
        await ug(L), await p();
      } catch (Z) {
        console.error("Failed to delete tag:", Z);
      }
  }, j = (L) => {
    _(L.id), k(L.name);
  }, b = () => {
    _(null), k("");
  }, N = async (L) => {
    L.preventDefault();
    const U = g.trim();
    if (!U || w === null || S) return;
    if (U.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const Z = n.find((E) => E.id === w);
    if (Z && Z.name === U) {
      b();
      return;
    }
    if (n.some(
      (E) => E.id !== w && E.name.toLowerCase() === U.toLowerCase()
    )) {
      alert(`Tag "${U}" already exists.`);
      return;
    }
    m(!0);
    try {
      await mg(w, U), b(), await p();
    } catch (E) {
      console.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      m(!1);
    }
  }, R = (L) => {
    t(`tag:${L}`);
  }, P = f.useMemo(() => n.filter(
    (L) => L.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(ar, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ l.jsx(we, { size: 16 })
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
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || h,
            children: [
              /* @__PURE__ */ l.jsx(Es, { size: 14 }),
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
            onChange: (L) => i(L.target.value)
          }
        )
      ] }),
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: P.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : P.map((L) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: w === L.id ? /* @__PURE__ */ l.jsxs(
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
                value: g,
                onChange: (U) => k(U.target.value),
                onKeyDown: (U) => U.key === "Escape" && b()
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: S || !g.trim(),
                children: /* @__PURE__ */ l.jsx(qo, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: b,
                disabled: S,
                children: /* @__PURE__ */ l.jsx(we, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-tag-item__name", children: L.name }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => R(L.name),
              children: /* @__PURE__ */ l.jsx(jn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => j(L),
              children: /* @__PURE__ */ l.jsx(Ou, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => x(L.id, L.name),
              children: /* @__PURE__ */ l.jsx(Ft, { size: 14 })
            }
          )
        ] })
      ] }) }, L.id)) })
    ] })
  ] });
};
function Hg(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: s } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? s || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? s || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const Kg = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: s, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: d,
    handleEditNotes: h,
    handleRestore: v,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: _,
    handleAddUnifiedLoader: g,
    handleSendToWorkflow: k,
    handleRunWithWorkflow: S,
    handleRunWithMask: m,
    handleEditSource: u
  } = Ms(e, t), { getParentChain: p } = mm(a, c), [y, x] = f.useState(!1), [j, b] = f.useState(!1), [N, R] = f.useState(
    c["viewer.show_details_by_default"]
  ), [P, L] = f.useState(null), U = P ?? c["viewer.show_thumbnails"], [Z, E] = f.useState(!1), [O, z] = f.useState(!1), [T, C] = f.useState(null), [D, Q] = f.useState(null), [I, K] = f.useState(
    null
  ), ue = f.useRef(null), B = f.useRef(!0);
  f.useEffect(() => (B.current = !0, () => {
    B.current = !1;
  }), []);
  const re = f.useRef(s);
  f.useEffect(() => {
    re.current = s;
  }, [s]);
  const Y = f.useMemo(() => {
    const A = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return o === "lighttable" && e.viewerLightTableSlotId ? (ge.getState().buckets[e.viewerLightTableSlotId] || []).map((V) => {
      const q = Number.parseInt(V, 10);
      return a.find((ne) => ne.id === q) || i.find((ne) => ne.id === q) || null;
    }).filter((V) => V !== null) : o === "lineage" ? i : a.filter(
      (F) => F.exists !== !1 && (c["gallery.show_parent_images"] || !F.has_children || A)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), ae = s === null ? -1 : Y.findIndex((A) => A.id === s), le = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? Y : a).find((A) => A.id === s), Te = f.useCallback(
    async (A = !1) => {
      if (!le) return;
      const F = y ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!A && F === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [le.id],
            hasLineage: !!(le.parent_id || le.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const M = e.viewScope === "trash", H = /* @__PURE__ */ new Set([le.id]);
        if (F === "lineage") {
          const V = await qa(le.id);
          for (const q of V)
            H.add(q.id);
        }
        if (!B.current || re.current === null) return;
        if (Y.length > H.size) {
          let V = !1;
          for (let q = ae + 1; q < Y.length; q++)
            if (!H.has(Y[q].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: Y[q].id, mode: o }
              }), V = !0;
              break;
            }
          if (!V) {
            for (let q = ae - 1; q >= 0; q--)
              if (!H.has(Y[q].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: Y[q].id, mode: o }
                }), V = !0;
                break;
              }
          }
          V || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await Ja(
          Array.from(H),
          M
        ), !M) {
          const V = Y.filter(
            (q) => H.has(q.id)
          );
          C(V), Q(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(H) });
      } catch (M) {
        t({
          type: "SET_ERROR",
          payload: M instanceof Error ? M.message : String(M)
        });
      }
    },
    [
      le,
      y,
      c,
      e.viewScope,
      Y,
      ae,
      o,
      t
    ]
  ), J = f.useCallback(() => {
    le && d(le);
  }, [le, d]), Re = f.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: y } });
  }, [t, y]), Fe = f.useCallback(async () => {
    const A = y ? c["fullscreen.loop"] : c["viewer.loop"];
    if (ae === 0 && o === "gallery" && e.pagination.hasMore && !O && A) {
      z(!0);
      try {
        const F = e.pagination.limit, M = e.pagination.total, H = Math.max(0, M - F), V = await Fl(
          H,
          F,
          e.searchQuery
        );
        if (!B.current || (t({ type: "APPEND_IMAGES", payload: V }), re.current === null)) return;
        if (V.images.length > 0) {
          const q = V.images[V.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: q.id, mode: "gallery" }
          });
        }
      } catch (F) {
        console.error("Failed to jump to end:", F);
      } finally {
        z(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: y } });
  }, [
    ae,
    o,
    e.pagination,
    e.searchQuery,
    c,
    t,
    O,
    y
  ]), ot = f.useCallback(
    (A) => {
      A && "stopPropagation" in A && A.stopPropagation();
      const F = ue.current;
      F && (document.fullscreenElement ? document.exitFullscreen() : F.requestFullscreen().catch((M) => {
        console.error(
          `Error attempting to enable full-screen mode: ${M.message}`
        );
      }));
    },
    []
  ), $t = f.useCallback(async () => {
    le && (Y.length > 1 ? Re() : t({ type: "CLOSE_VIEWER" }), await v(le));
  }, [le, Y.length, Re, v, t]), or = f.useCallback(async () => {
    if (!T || T.length === 0) return;
    const A = T.map((M) => M.id), F = A[0];
    try {
      const M = await Zo(A);
      if (!B.current) return;
      if (t({ type: "ADD_IMAGES", payload: T }), e.viewScope === "trash") {
        const H = M.restored_ids || A;
        t({ type: "REMOVE_IMAGES", payload: H });
      }
      if (C(null), !B.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: F, mode: o }
      });
    } catch (M) {
      t({
        type: "SET_ERROR",
        payload: M instanceof Error ? M.message : String(M)
      });
    }
  }, [T, t, o, e.viewScope]), ir = f.useCallback(async () => {
    if (T && T.length > 0)
      await or();
    else if (D && D.type === "tags") {
      const { imageId: A, addTags: F, removeTags: M } = D;
      try {
        await Ya([A], F, M);
        const H = (o === "lineage" ? i : a).find((V) => V.id === A);
        if (H) {
          const V = [...H.tags];
          for (const ne of F)
            V.includes(ne) || V.push(ne);
          const q = V.filter((ne) => !M.includes(ne));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...H, tags: q }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: A, mode: o }
          });
        }
        Q(null);
      } catch (H) {
        t({
          type: "SET_ERROR",
          payload: H instanceof Error ? H.message : String(H)
        });
      }
    }
  }, [
    T,
    D,
    or,
    a,
    i,
    o,
    t
  ]), ll = f.useCallback(
    async (A) => {
      if (!A || !le) return;
      const F = le.id, M = [...le.tags], H = A.split(/\s+/), V = [], q = [];
      let ne = !1, ie = !1, de = !1;
      for (const fe of H)
        if (fe.startsWith("tag:")) {
          const he = fe.substring(4);
          he && !M.includes(he) && !V.includes(he) && V.push(he);
        } else if (fe.startsWith("-tag:")) {
          const he = fe.substring(5);
          he && M.includes(he) && !q.includes(he) && q.push(he);
        } else if (fe.startsWith("tag-toggle:")) {
          const he = fe.substring(11);
          he && (M.includes(he) ? q.includes(he) || q.push(he) : V.includes(he) || V.push(he));
        } else fe === "next" ? ne = !0 : fe === "prev" ? ie = !0 : fe === "delete" && (de = !0);
      if (V.length > 0 || q.length > 0)
        try {
          await Ya(
            [F],
            V,
            q
          );
          const fe = [...M];
          for (const it of V)
            fe.includes(it) || fe.push(it);
          const he = fe.filter((it) => !q.includes(it));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...le, id: F, tags: he }
          }), Q({
            type: "tags",
            imageId: F,
            addTags: [...q],
            removeTags: [...V]
          }), C(null);
        } catch (fe) {
          console.error("Failed to update tags via shortcut:", fe);
        }
      de ? Te(!0) : ne ? Re() : ie && Fe();
    },
    [le, t, Re, Fe, Te]
  );
  f.useEffect(() => {
    const A = (M) => {
      const H = M.target, V = H.tagName === "INPUT" || H.tagName === "TEXTAREA" || H.isContentEditable;
      if (V && M.key !== "Escape") {
        M.key === "Enter" && (M.ctrlKey || M.metaKey) && M.preventDefault();
        return;
      }
      if (s === null || e.activeModal.type !== "none")
        return;
      const q = M.key === "Delete" || M.key === "Backspace", ne = M.key === "ArrowRight" || M.key === "ArrowLeft" || M.key === "ArrowDown" || M.key === "ArrowUp", ie = [
        "f",
        "F",
        "i",
        "I",
        "t",
        "T",
        "r",
        "R",
        "Enter"
      ].includes(M.key), de = M.key === "Escape", fe = (M.ctrlKey || M.metaKey) && (M.key === "z" || M.key === "Z" || M.code === "KeyZ"), he = /^[0-9]$/.test(M.key) && !M.ctrlKey && !M.metaKey && !M.altKey && M.code !== "KeyZ";
      if (q || ne || ie || de || fe || he)
        if (!V)
          M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation();
        else if (de)
          M.preventDefault(), M.stopPropagation(), M.stopImmediatePropagation();
        else
          return;
      else
        return;
      if (M.key === "Escape")
        document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (M.key === "ArrowRight" || M.key === "ArrowDown")
        Re();
      else if (M.key === "ArrowLeft" || M.key === "ArrowUp")
        Fe();
      else if (M.key === "f" || M.key === "F" || M.key === "Enter")
        ot(M);
      else if (M.key === "i" || M.key === "I")
        R((it) => !it);
      else if (M.key === "t" || M.key === "T")
        J();
      else if ((M.key === "r" || M.key === "R") && e.viewScope === "trash")
        $t();
      else if (M.key === "Delete")
        Te();
      else if ((M.ctrlKey || M.metaKey) && (M.key === "z" || M.key === "Z"))
        ir();
      else if (he && !V) {
        const it = `viewer.shortcut.${M.key}`, dr = c[it];
        typeof dr == "string" && dr && (K(M.key), setTimeout(() => {
          B.current && K(null);
        }, 500), ll(dr));
      }
    };
    window.addEventListener("keydown", A, { capture: !0 });
    const F = () => {
      const M = !!document.fullscreenElement;
      x(M), R(M ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", F), () => {
      window.removeEventListener("keydown", A, { capture: !0 }), document.removeEventListener("fullscreenchange", F);
    };
  }, [
    s,
    t,
    ot,
    Re,
    Fe,
    c,
    Te,
    e.activeModal.type,
    ir,
    J,
    $t,
    e.viewScope,
    ll
  ]), f.useEffect(() => {
    s !== null && r(s).catch((A) => {
      console.error("Failed to fetch full image details for viewer:", A);
    });
  }, [s, r]), f.useEffect(() => {
    o === "lineage" && s !== null && i.length === 0 && (E(!0), qa(s).then((A) => {
      B.current && t({ type: "SET_LINEAGE", payload: A });
    }).catch((A) => {
      console.error("Failed to fetch lineage:", A);
    }).finally(() => {
      B.current && E(!1);
    }));
  }, [o, s, i.length, t]), f.useEffect(() => {
    o !== "gallery" || s === null || e.isLoading || !e.pagination.hasMore || ae !== -1 && ae >= Y.length - 15 && n();
  }, [
    s,
    Y.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    ae
  ]);
  const cr = f.useMemo(() => {
    if (!U || ae === -1) return [];
    const A = c["viewer.thumbnail_window_size"], F = Math.floor(A / 2);
    let M = Math.max(0, ae - F);
    const H = Math.min(Y.length, M + A);
    return H === Y.length && (M = Math.max(0, H - A)), Y.slice(M, H).map((V, q) => ({
      img: V,
      absIndex: M + q
    }));
  }, [Y, ae, c, U]), $ = f.useMemo(() => le ? p(le) : [], [le, p]);
  return f.useEffect(() => {
    var A, F;
    if (s !== null) {
      if (U) {
        const M = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        M && M.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((A = document.activeElement) == null ? void 0 : A.tagName) === "CANVAS" && document.activeElement.blur(), (F = ue.current) == null || F.focus();
    }
  }, [s, U]), f.useEffect(() => {
    if (s === null || Y.length === 0) return;
    const A = Y.map((ne) => ne.id), F = A.indexOf(s);
    if (F === -1) return;
    const M = y ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: H, nextId: V } = Hg({
      ids: A,
      index: F,
      loopEnabled: M,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), q = setTimeout(() => {
      const ne = [H, V].filter(
        (ie) => ie !== null && ie !== s
      );
      ne.length !== 0 && Promise.allSettled(ne.map((ie) => r(ie))).then(
        (ie) => {
          for (const de of ie)
            de.status === "rejected" && ee.warn(
              "Prefetching adjacent image details failed",
              de.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(q);
  }, [
    s,
    Y,
    y,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), f.useEffect(() => {
    if (s === null || Y.length === 0) return;
    const A = Y.findIndex(
      (V) => V.id === s
    );
    if (A === -1) return;
    const F = (V) => Je(V), M = [
      A + 1,
      A + 2,
      A - 1
    ], H = setTimeout(() => {
      for (const V of M)
        if (V >= 0 && V < Y.length) {
          const q = Y[V], ne = new Image();
          ne.src = F(q);
        }
    }, 150);
    return () => clearTimeout(H);
  }, [s, Y]), {
    isFullscreen: y,
    showDetails: N,
    setShowDetails: R,
    showThumbnails: U,
    setShowThumbnailsOverride: L,
    isLoadingLineage: Z,
    isJumping: O,
    isMenuOpen: j,
    setIsMenuOpen: b,
    activeShortcutKey: I,
    lastDeletedImages: T,
    setLastDeletedImages: C,
    overlayRef: ue,
    handleNext: Re,
    handlePrevious: Fe,
    handleDelete: Te,
    handleUpdateUserNotes: w,
    handleEditNotes: () => le && h(le),
    handleTagEdit: J,
    handleRestore: $t,
    handleUndo: ir,
    handleRestoreWorkflow: async () => {
      if (!le) return;
      await _(le) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!le) return;
      await g(le) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!le) return;
      k(le) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => le && S(le),
    handleRunWithMask: (A) => le && m(le, A),
    handleEditSource: () => le && u(le),
    toggleFullscreen: ot,
    currentIndex: ae,
    currentThumbnails: Y,
    image: le,
    windowedThumbnails: cr,
    parentChain: $
  };
}, Gg = ({
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
}) }) : null, qg = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: s,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = f.useState("idle");
  f.useEffect(() => {
    c("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], h = d === "always" || d === "if_present" && e.user_notes;
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
                onClick: (_) => {
                  _.stopPropagation(), a({
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
        h && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
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
}, wm = f.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const s = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, o = typeof e.parent_id == "number" && e.parent_id === n.id, i = Je(e);
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
              children: a ? /* @__PURE__ */ l.jsx(Du, { size: 12 }) : /* @__PURE__ */ l.jsx(Tu, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
wm.displayName = "ThumbnailItem";
const Yg = ({
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
    wm,
    {
      thumb: i,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    i.id
  )),
  o === "gallery" && a && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ l.jsx(Xr, { className: "animate-spin", size: 20 }) })
] }) });
function Xg() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ke(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: v,
    setIsMenuOpen: w,
    activeShortcutKey: _,
    setLastDeletedImages: g,
    overlayRef: k,
    handleNext: S,
    handlePrevious: m,
    handleTagEdit: u,
    handleEditNotes: p,
    handleRestore: y,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: j,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: N,
    handleRunWithMask: R,
    handleEditSource: P,
    handleDelete: L,
    toggleFullscreen: U,
    image: Z,
    windowedThumbnails: E,
    parentChain: O
  } = Kg({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), z = f.useRef(null), T = f.useRef(null), { executeWorkflow: C } = ei(), D = f.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!Z) return null;
  const { viewerImageId: Q, viewerMode: I } = e, K = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ye.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: k,
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
              onClick: (ue) => ue.stopPropagation(),
              children: [
                K && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: y,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ l.jsx(Xr, { size: 20 })
                    }
                  ),
                  !s && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ l.jsx(Ru, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ l.jsx(uh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: U,
                      type: "button",
                      title: s ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: s ? /* @__PURE__ */ l.jsx(vh, { size: 20 }) : /* @__PURE__ */ l.jsx(gh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    ti,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: w,
                      menuRef: T,
                      settings: e.settings,
                      onAddUnifiedLoader: j,
                      onRestoreWorkflow: x,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: N,
                      onRunWithMask: R,
                      onEditSource: P,
                      onEditTags: u,
                      onEditNotes: p,
                      onDelete: L,
                      deleteLabel: D,
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
                      children: /* @__PURE__ */ l.jsx(we, { size: 20 })
                    }
                  )
                ] }),
                K && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: m,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ l.jsx(Pu, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(Xr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: z,
                      src: Je(Z),
                      alt: Z.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                K && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: S,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ l.jsx(Yo, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  qg,
                  {
                    image: Z,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: K,
                    parentChain: O,
                    dispatch: t,
                    onEditNotes: p
                  }
                ),
                !s && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  Yg,
                  {
                    windowedThumbnails: E,
                    viewerImageId: Q,
                    currentImage: Z,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: I
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  Gg,
                  {
                    settings: e.settings,
                    activeShortcutKey: _
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
            im,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (ue, B) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: ue,
                        targetLoaderNodeId: B
                      }
                    }), !1;
                  const re = e.activeModal.maskFilename;
                  for (const Y of e.activeModal.images)
                    await C(
                      ue,
                      Y,
                      re,
                      B
                    );
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
            om,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (ue) => {
                e.activeModal.type === "node_selection" && Zr(e.activeModal.image, ue);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ l.jsx(dm, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ l.jsx(
            cm,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: g
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(um, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Qu, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx(lm, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ l.jsx(
            sm,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ l.jsx(
            us,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ l.jsx(
            us,
            {
              imageId: e.activeModal.images[e.activeModal.currentIndex].id,
              mode: "run_sequence",
              sequenceData: {
                workflowName: e.activeModal.workflowName,
                targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
                currentIndex: e.activeModal.currentIndex,
                totalCount: e.activeModal.images.length
              },
              onSuccess: () => {
                if (e.activeModal.type === "mask_sequence_step") {
                  const ue = e.activeModal.currentIndex + 1;
                  ue < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: ue
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            },
            e.activeModal.images[e.activeModal.currentIndex].id
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ l.jsx(
            am,
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
const Zg = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = ke(), [a, o] = f.useState("gallery"), [i, c] = f.useState(""), [d, h] = f.useState(e.pagination.limit);
  f.useEffect(() => {
    h(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const v = e.searchQuery.trim() !== "", w = f.useRef(null), _ = f.useRef(null), g = ge((u) => u.buckets), k = f.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    for (const p of Object.values(g))
      for (const y of p)
        u.add(Number(y));
    return u;
  }, [g]), S = f.useMemo(() => {
    const u = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((p) => k.has(p.id) ? !1 : e.viewScope === "trash" ? p.exists !== !1 || e.settings["gallery.trash.show_missing"] : p.exists !== !1 && (e.settings["gallery.show_parent_images"] || !p.has_children || u));
  }, [
    e.images,
    e.settings,
    e.viewScope,
    e.searchQuery,
    k
  ]), m = f.useMemo(
    () => S.slice(0, d),
    [S, d]
  );
  return f.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && S.length === 0 && (ee.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    S.length,
    r
  ]), f.useEffect(() => {
    const u = (p) => {
      p.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), p.preventDefault(), p.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), p.preventDefault(), p.stopPropagation()));
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [e.activeModal.type, e.selectedIds.size, t]), f.useEffect(() => {
    const u = new IntersectionObserver(
      (y) => {
        if (y[0].isIntersecting) {
          if (e.isLoading) {
            ee.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < S.length ? (ee.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                S.length
              ),
              totalAvailableLocally: S.length
            }
          ), h((x) => x + e.pagination.limit)) : e.pagination.hasMore ? (ee.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : ee.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: S.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), p = w.current;
    return p && u.observe(p), () => {
      p && u.unobserve(p);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    d,
    S.length,
    e.pagination.limit,
    e.images.length
  ]), f.useEffect(() => {
    const u = e.viewerImageId ?? _.current;
    if (u !== null && S.some((y) => y.id === u)) {
      const y = S.findIndex((j) => j.id === u);
      if (y >= d) {
        h(
          Math.ceil((y + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const x = document.querySelector(
        `[data-image-id="${u}"]`
      );
      x && (x.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (_.current = null));
    }
    e.viewerImageId !== null && (_.current = e.viewerImageId);
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
    visibleImages: m,
    isSearchActive: v,
    loadMoreRef: w
  };
}, Jg = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ke(), { handleRunWithWorkflow: s, handleRunWithMask: a } = Ms(
    e,
    t
  ), o = e.selectedIds.size, [i, c] = f.useState(!1), [d, h] = f.useState(null), v = f.useRef(null), [w, _] = f.useState(
    null
  );
  if (f.useEffect(() => {
    const b = document.getElementById("meld-bulk-bar-portal");
    let N = b instanceof HTMLDivElement ? b : null;
    if (!N) {
      N = document.createElement("div"), N.id = "meld-bulk-bar-portal", N.dataset.mountCount = "0";
      const P = document.querySelector(".comfyui-body-bottom");
      P ? P.appendChild(N) : document.body.appendChild(N);
    }
    const R = Number.parseInt(N.dataset.mountCount || "0", 10);
    return N.dataset.mountCount = (R + 1).toString(), _(N), () => {
      if (N) {
        const L = Number.parseInt(
          N.dataset.mountCount || "1",
          10
        ) - 1;
        N.dataset.mountCount = L.toString(), L <= 0 && N.remove();
      }
    };
  }, []), et({
    onEscape: () => c(!1),
    enabled: i
  }), o === 0 || !w) return null;
  const g = e.viewScope === "trash", k = () => e.images.filter((b) => e.selectedIds.has(b.id)), S = () => {
    v.current && (h(v.current.getBoundingClientRect()), c(!0));
  }, m = (b) => {
    b(), c(!1);
  }, u = () => {
    const b = k(), N = /* @__PURE__ */ new Set();
    for (const R of b)
      if (R.tags)
        for (const P of R.tags)
          N.add(P);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(N)
      }
    });
  }, p = () => {
    const b = k();
    s(b);
  }, y = () => {
    const b = k();
    b.length > 0 && a(b, "run");
  }, x = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, j = /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${g ? "meld-bulk-bar--trash" : ""}`,
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
                yh,
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
              /* @__PURE__ */ l.jsx(we, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
              onMouseDown: (b) => b.stopPropagation()
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
              onClick: (b) => b.stopPropagation(),
              children: g ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
                    onClick: () => m(r),
                    children: [
                      /* @__PURE__ */ l.jsx(Xr, { size: 14 }),
                      " Restore"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                    onClick: () => m(n),
                    children: [
                      /* @__PURE__ */ l.jsx(Ft, { size: 14 }),
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
                    onClick: () => m(u),
                    children: [
                      /* @__PURE__ */ l.jsx(ar, { size: 14 }),
                      " Edit Tags"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => m(p),
                    children: [
                      /* @__PURE__ */ l.jsx(Xo, { size: 14 }),
                      " Queue Workflow"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => m(y),
                    children: [
                      /* @__PURE__ */ l.jsx(_h, { size: 14 }),
                      " Queue Workflow (Mask)"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => m(x),
                    children: [
                      /* @__PURE__ */ l.jsx(qr, { size: 14 }),
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
                    onClick: () => m(n),
                    children: [
                      /* @__PURE__ */ l.jsx(Ft, { size: 14 }),
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
  return ye.createPortal(j, w);
}, ey = () => {
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
    visibleImages: h,
    isSearchActive: v,
    loadMoreRef: w
  } = Zg(), { isOpen: _, setIsOpen: g } = ge(), k = ge((N) => N.buckets), S = Object.values(k).some((N) => N && N.length > 0);
  ee.log("GalleryPanel: isLightTableOpen =", _);
  const [m, u] = f.useState(!1), [p, y] = f.useState(null), x = f.useRef(null), j = f.useCallback(() => {
    x.current && (y(
      x.current.getBoundingClientRect()
    ), u(!0));
  }, []), b = f.useCallback(
    (N) => {
      t({ type: "SET_SEARCH_QUERY", payload: N }), i(N), a("search"), u(!1);
    },
    [t, i, a]
  );
  return ee.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: h.length,
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
        const R = N.dataTransfer.getData(
          "application/meld-lt-source-slot"
        );
        if (R) {
          N.preventDefault();
          const P = N.dataTransfer.getData("text/plain");
          P && P.split(",").forEach((U) => {
            U && ge.getState().removeFromBucket(R, U.trim());
          });
        }
      },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ l.jsx(Ft, { size: 14 }),
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
                  /* @__PURE__ */ l.jsx(we, { size: 14 }),
                  /* @__PURE__ */ l.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__actions", children: [
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
            e.favorites.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                ref: x,
                type: "button",
                onClick: j,
                style: {
                  background: "none",
                  border: "none",
                  color: m ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ l.jsx(
                  nr,
                  {
                    size: 14,
                    fill: m ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
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
                children: /* @__PURE__ */ l.jsx(ar, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const R = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", R);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ l.jsx(fh, { size: 14 }) : /* @__PURE__ */ l.jsx(Ru, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  ee.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    _,
                    "to",
                    !_
                  ), g(!_);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: _ ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ l.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ l.jsx(
                    xh,
                    {
                      size: 14,
                      fill: _ ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: _ ? 1 : 0.8 }
                    }
                  ),
                  !_ && S && /* @__PURE__ */ l.jsx(
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
                children: /* @__PURE__ */ l.jsx(qr, { size: 14 })
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
                  Xr,
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
                children: /* @__PURE__ */ l.jsx(Au, { size: 14 })
              }
            )
          ] }),
          s === "search" && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ l.jsx(Vg, {}) })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ l.jsx(Rg, {}),
          e.error && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__error", children: e.error }),
          s === "tags" ? /* @__PURE__ */ l.jsx(
            Bg,
            {
              onClose: () => a("gallery"),
              onSearch: (N) => {
                t({ type: "SET_SEARCH_QUERY", payload: N }), a("search");
              }
            }
          ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : h.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
                style: {
                  "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
                },
                children: h.map((N) => {
                  const R = e.settings["sidebar.thumbnail_size"] || 100, P = e.settings["gallery.view_mode"] === "grid_only", L = P && N.width && N.height ? Math.min(
                    R,
                    R * N.width / N.height
                  ) + 10 : P ? R + 10 : "100%";
                  return /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      "data-image-id": N.id,
                      style: {
                        width: P ? "auto" : "100%",
                        flexShrink: 0,
                        display: P ? "inline-block" : "block"
                      },
                      children: /* @__PURE__ */ l.jsx(
                        Pg,
                        {
                          height: P ? R + 10 : Math.max(R, 150),
                          style: {
                            width: typeof L == "number" ? `${L}px` : L,
                            minWidth: typeof L == "number" ? `${L}px` : L,
                            display: P ? "inline-block" : "block"
                          },
                          children: /* @__PURE__ */ l.jsx(Dg, { image: N })
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
                  c >= d.length && !e.pagination.hasMore && h.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(Jg, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(Xg, {}),
        /* @__PURE__ */ l.jsx(Lg, {}),
        m && /* @__PURE__ */ l.jsx(
          $g,
          {
            anchorRect: p,
            onClose: () => u(!1),
            onSelect: b
          }
        ),
        /* @__PURE__ */ l.jsx(Wg, {})
      ]
    }
  );
};
yc.registerExtension({
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
const ty = document.getElementById(
  "meld-gallery-style"
);
if (!ty) {
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
let Cl = null, ct = null;
yc.registerExtension({
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
      const n = await $u();
      ee.init(n.dev_mode), ee.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), ee.init(!1);
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
      }, se.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), se.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), se.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), ee.log("Import completed.");
      }), se.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const s of n.output.images)
              if (s.type === "output")
                try {
                  await Wu({
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
            ee.log("render called", {
              el: n,
              galleryRoot: Cl,
              galleryContainer: ct
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), ct || (ee.log("galleryContainer not found, creating new one"), ct = document.createElement("div"), ct.id = "meld-gallery-container", ct.style.height = "100%", ct.style.width = "100%", ct.style.display = "flex", ct.style.flexDirection = "column", ct.style.overflow = "hidden"), n.contains(ct) || (ee.log("Appending galleryContainer to el"), n.appendChild(ct)), Cl ? ee.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (ee.log("Creating new gallery root"), Cl = Eu(ct), Cl.render(
              Gt.createElement(
                cg,
                null,
                Gt.createElement(ey)
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
