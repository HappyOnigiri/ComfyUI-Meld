import { api as le } from "/scripts/api.js";
import { app as wc } from "/scripts/app.js";
function Nm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xc = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el = Symbol.for("react.element"), Em = Symbol.for("react.portal"), Mm = Symbol.for("react.fragment"), Im = Symbol.for("react.strict_mode"), Tm = Symbol.for("react.profiler"), Lm = Symbol.for("react.provider"), Dm = Symbol.for("react.context"), Pm = Symbol.for("react.forward_ref"), Rm = Symbol.for("react.suspense"), Om = Symbol.for("react.memo"), Am = Symbol.for("react.lazy"), li = Symbol.iterator;
function zm(e) {
  return e === null || typeof e != "object" ? null : (e = li && e[li] || e["@@iterator"], typeof e == "function" ? e : null);
}
var _c = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, kc = Object.assign, Sc = {};
function lr(e, t, n) {
  this.props = e, this.context = t, this.refs = Sc, this.updater = n || _c;
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jc() {
}
jc.prototype = lr.prototype;
function no(e, t, n) {
  this.props = e, this.context = t, this.refs = Sc, this.updater = n || _c;
}
var ro = no.prototype = new jc();
ro.constructor = no;
kc(ro, lr.prototype);
ro.isPureReactComponent = !0;
var si = Array.isArray, bc = Object.prototype.hasOwnProperty, lo = { current: null }, Cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nc(e, t, n) {
  var r, s = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) bc.call(t, r) && !Cc.hasOwnProperty(r) && (s[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    for (var i = Array(c), d = 0; d < c; d++) i[d] = arguments[d + 2];
    s.children = i;
  }
  if (e && e.defaultProps) for (r in c = e.defaultProps, c) s[r] === void 0 && (s[r] = c[r]);
  return { $$typeof: el, type: e, key: a, ref: o, props: s, _owner: lo.current };
}
function Fm(e, t) {
  return { $$typeof: el, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function so(e) {
  return typeof e == "object" && e !== null && e.$$typeof === el;
}
function Wm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ai = /\/+/g;
function Ls(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Wm("" + e.key) : t.toString(36);
}
function Ml(e, t, n, r, s) {
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
        case el:
        case Em:
          o = !0;
      }
  }
  if (o) return o = e, s = s(o), e = r === "" ? "." + Ls(o, 0) : r, si(s) ? (n = "", e != null && (n = e.replace(ai, "$&/") + "/"), Ml(s, t, n, "", function(d) {
    return d;
  })) : s != null && (so(s) && (s = Fm(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(ai, "$&/") + "/") + e)), t.push(s)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", si(e)) for (var c = 0; c < e.length; c++) {
    a = e[c];
    var i = r + Ls(a, c);
    o += Ml(a, t, n, i, s);
  }
  else if (i = zm(e), typeof i == "function") for (e = i.call(e), c = 0; !(a = e.next()).done; ) a = a.value, i = r + Ls(a, c++), o += Ml(a, t, n, i, s);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function cl(e, t, n) {
  if (e == null) return e;
  var r = [], s = 0;
  return Ml(e, r, "", "", function(a) {
    return t.call(n, a, s++);
  }), r;
}
function $m(e) {
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
var He = { current: null }, Il = { transition: null }, Um = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: Il, ReactCurrentOwner: lo };
function Ec() {
  throw Error("act(...) is not supported in production builds of React.");
}
ie.Children = { map: cl, forEach: function(e, t, n) {
  cl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return cl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return cl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!so(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ie.Component = lr;
ie.Fragment = Mm;
ie.Profiler = Tm;
ie.PureComponent = no;
ie.StrictMode = Im;
ie.Suspense = Rm;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um;
ie.act = Ec;
ie.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = kc({}, e.props), s = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = lo.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
    for (i in t) bc.call(t, i) && !Cc.hasOwnProperty(i) && (r[i] = t[i] === void 0 && c !== void 0 ? c[i] : t[i]);
  }
  var i = arguments.length - 2;
  if (i === 1) r.children = n;
  else if (1 < i) {
    c = Array(i);
    for (var d = 0; d < i; d++) c[d] = arguments[d + 2];
    r.children = c;
  }
  return { $$typeof: el, type: e.type, key: s, ref: a, props: r, _owner: o };
};
ie.createContext = function(e) {
  return e = { $$typeof: Dm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Lm, _context: e }, e.Consumer = e;
};
ie.createElement = Nc;
ie.createFactory = function(e) {
  var t = Nc.bind(null, e);
  return t.type = e, t;
};
ie.createRef = function() {
  return { current: null };
};
ie.forwardRef = function(e) {
  return { $$typeof: Pm, render: e };
};
ie.isValidElement = so;
ie.lazy = function(e) {
  return { $$typeof: Am, _payload: { _status: -1, _result: e }, _init: $m };
};
ie.memo = function(e, t) {
  return { $$typeof: Om, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function(e) {
  var t = Il.transition;
  Il.transition = {};
  try {
    e();
  } finally {
    Il.transition = t;
  }
};
ie.unstable_act = Ec;
ie.useCallback = function(e, t) {
  return He.current.useCallback(e, t);
};
ie.useContext = function(e) {
  return He.current.useContext(e);
};
ie.useDebugValue = function() {
};
ie.useDeferredValue = function(e) {
  return He.current.useDeferredValue(e);
};
ie.useEffect = function(e, t) {
  return He.current.useEffect(e, t);
};
ie.useId = function() {
  return He.current.useId();
};
ie.useImperativeHandle = function(e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
ie.useInsertionEffect = function(e, t) {
  return He.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function(e, t) {
  return He.current.useLayoutEffect(e, t);
};
ie.useMemo = function(e, t) {
  return He.current.useMemo(e, t);
};
ie.useReducer = function(e, t, n) {
  return He.current.useReducer(e, t, n);
};
ie.useRef = function(e) {
  return He.current.useRef(e);
};
ie.useState = function(e) {
  return He.current.useState(e);
};
ie.useSyncExternalStore = function(e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
ie.useTransition = function() {
  return He.current.useTransition();
};
ie.version = "18.3.1";
xc.exports = ie;
var m = xc.exports;
const qt = /* @__PURE__ */ Nm(m);
var Mc = { exports: {} }, at = {}, Ic = { exports: {} }, Tc = {};
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
      var M = Q - 1 >>> 1, V = C[M];
      if (0 < s(V, D)) C[M] = D, C[Q] = V, Q = M;
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
      e: for (var M = 0, V = C.length, de = V >>> 1; M < de; ) {
        var B = 2 * (M + 1) - 1, ae = C[B], q = B + 1, me = C[q];
        if (0 > s(ae, Q)) q < V && 0 > s(me, ae) ? (C[M] = me, C[q] = Q, M = q) : (C[M] = ae, C[B] = Q, M = B);
        else if (q < V && 0 > s(me, Q)) C[M] = me, C[q] = Q, M = q;
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
    var o = Date, c = o.now();
    e.unstable_now = function() {
      return o.now() - c;
    };
  }
  var i = [], d = [], p = 1, g = null, w = 3, x = !1, y = !1, k = !1, S = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(C) {
    for (var D = n(d); D !== null; ) {
      if (D.callback === null) r(d);
      else if (D.startTime <= C) r(d), D.sortIndex = D.expirationTime, t(i, D);
      else break;
      D = n(d);
    }
  }
  function v(C) {
    if (k = !1, h(C), !y) if (n(i) !== null) y = !0, A(_);
    else {
      var D = n(d);
      D !== null && L(v, D.startTime - C);
    }
  }
  function _(C, D) {
    y = !1, k && (k = !1, f(N), N = -1), x = !0;
    var Q = w;
    try {
      for (h(D), g = n(i); g !== null && (!(g.expirationTime > D) || C && !T()); ) {
        var M = g.callback;
        if (typeof M == "function") {
          g.callback = null, w = g.priorityLevel;
          var V = M(g.expirationTime <= D);
          D = e.unstable_now(), typeof V == "function" ? g.callback = V : g === n(i) && r(i), h(D);
        } else r(i);
        g = n(i);
      }
      if (g !== null) var de = !0;
      else {
        var B = n(d);
        B !== null && L(v, B.startTime - D), de = !1;
      }
      return de;
    } finally {
      g = null, w = Q, x = !1;
    }
  }
  var j = !1, b = null, N = -1, R = 5, P = -1;
  function T() {
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
        D ? J() : (j = !1, b = null);
      }
    } else j = !1;
  }
  var J;
  if (typeof u == "function") J = function() {
    u(U);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), O = E.port2;
    E.port1.onmessage = U, J = function() {
      O.postMessage(null);
    };
  } else J = function() {
    S(U, 0);
  };
  function A(C) {
    b = C, j || (j = !0, J());
  }
  function L(C, D) {
    N = S(function() {
      C(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    y || x || (y = !0, A(_));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(i);
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
    var M = e.unstable_now();
    switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? M + Q : M) : Q = M, C) {
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
    return V = Q + V, C = { id: p++, callback: D, priorityLevel: C, startTime: Q, expirationTime: V, sortIndex: -1 }, Q > M ? (C.sortIndex = Q, t(d, C), n(i) === null && C === n(d) && (k ? (f(N), N = -1) : k = !0, L(v, Q - M))) : (C.sortIndex = V, t(i, C), y || x || (y = !0, A(_))), C;
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(C) {
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
})(Tc);
Ic.exports = Tc;
var Qm = Ic.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vm = m, st = Qm;
function W(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Lc = /* @__PURE__ */ new Set(), Dr = {};
function Cn(e, t) {
  Yn(e, t), Yn(e + "Capture", t);
}
function Yn(e, t) {
  for (Dr[e] = t, e = 0; e < t.length; e++) Lc.add(t[e]);
}
var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), sa = Object.prototype.hasOwnProperty, Bm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oi = {}, ii = {};
function Hm(e) {
  return sa.call(ii, e) ? !0 : sa.call(oi, e) ? !1 : Bm.test(e) ? ii[e] = !0 : (oi[e] = !0, !1);
}
function Km(e, t, n, r) {
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
function Gm(e, t, n, r) {
  if (t === null || typeof t > "u" || Km(e, t, n, r)) return !0;
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
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Fe[e] = new Ke(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Fe[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Fe[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Fe[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Fe[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Fe[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Fe[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Fe[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Fe[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ao = /[\-:]([a-z])/g;
function oo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ao,
    oo
  );
  Fe[t] = new Ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ao, oo);
  Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ao, oo);
  Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function io(e, t, n, r) {
  var s = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gm(t, n, s, r) && (n = null), r || s === null ? Hm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dl = Symbol.for("react.element"), Ln = Symbol.for("react.portal"), Dn = Symbol.for("react.fragment"), co = Symbol.for("react.strict_mode"), aa = Symbol.for("react.profiler"), Dc = Symbol.for("react.provider"), Pc = Symbol.for("react.context"), uo = Symbol.for("react.forward_ref"), oa = Symbol.for("react.suspense"), ia = Symbol.for("react.suspense_list"), mo = Symbol.for("react.memo"), Bt = Symbol.for("react.lazy"), Rc = Symbol.for("react.offscreen"), ci = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object" ? null : (e = ci && e[ci] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ce = Object.assign, Ds;
function xr(e) {
  if (Ds === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ds = t && t[1] || "";
  }
  return `
` + Ds + e;
}
var Ps = !1;
function Rs(e, t) {
  if (!e || Ps) return "";
  Ps = !0;
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
`), o = s.length - 1, c = a.length - 1; 1 <= o && 0 <= c && s[o] !== a[c]; ) c--;
      for (; 1 <= o && 0 <= c; o--, c--) if (s[o] !== a[c]) {
        if (o !== 1 || c !== 1)
          do
            if (o--, c--, 0 > c || s[o] !== a[c]) {
              var i = `
` + s[o].replace(" at new ", " at ");
              return e.displayName && i.includes("<anonymous>") && (i = i.replace("<anonymous>", e.displayName)), i;
            }
          while (1 <= o && 0 <= c);
        break;
      }
    }
  } finally {
    Ps = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? xr(e) : "";
}
function qm(e) {
  switch (e.tag) {
    case 5:
      return xr(e.type);
    case 16:
      return xr("Lazy");
    case 13:
      return xr("Suspense");
    case 19:
      return xr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Rs(e.type, !1), e;
    case 11:
      return e = Rs(e.type.render, !1), e;
    case 1:
      return e = Rs(e.type, !0), e;
    default:
      return "";
  }
}
function ca(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case Ln:
      return "Portal";
    case aa:
      return "Profiler";
    case co:
      return "StrictMode";
    case oa:
      return "Suspense";
    case ia:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Pc:
      return (e.displayName || "Context") + ".Consumer";
    case Dc:
      return (e._context.displayName || "Context") + ".Provider";
    case uo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case mo:
      return t = e.displayName || null, t !== null ? t : ca(e.type) || "Memo";
    case Bt:
      t = e._payload, e = e._init;
      try {
        return ca(e(t));
      } catch {
      }
  }
  return null;
}
function Ym(e) {
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
      return ca(t);
    case 8:
      return t === co ? "StrictMode" : "Mode";
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
function Oc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Xm(e) {
  var t = Oc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ul(e) {
  e._valueTracker || (e._valueTracker = Xm(e));
}
function Ac(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Oc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ul(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function da(e, t) {
  var n = t.checked;
  return Ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function di(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = an(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function zc(e, t) {
  t = t.checked, t != null && io(e, "checked", t, !1);
}
function ua(e, t) {
  zc(e, t);
  var n = an(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ma(e, t.type, n) : t.hasOwnProperty("defaultValue") && ma(e, t.type, an(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ui(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ma(e, t, n) {
  (t !== "number" || Ul(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;
function Vn(e, t, n, r) {
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
function fa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return Ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function mi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(W(92));
      if (_r(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: an(n) };
}
function Fc(e, t) {
  var n = an(t.value), r = an(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function fi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Wc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ml, $c = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, s);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ml = ml || document.createElement("div"), ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ml.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
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
}, Zm = ["Webkit", "ms", "Moz", "O"];
Object.keys(jr).forEach(function(e) {
  Zm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jr[t] = jr[e];
  });
});
function Uc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jr.hasOwnProperty(e) && jr[e] ? ("" + t).trim() : t + "px";
}
function Qc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, s = Uc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
  }
}
var Jm = Ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ha(e, t) {
  if (t) {
    if (Jm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function ga(e, t) {
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
var ya = null;
function fo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var va = null, Bn = null, Hn = null;
function pi(e) {
  if (e = rl(e)) {
    if (typeof va != "function") throw Error(W(280));
    var t = e.stateNode;
    t && (t = vs(t), va(e.stateNode, e.type, t));
  }
}
function Vc(e) {
  Bn ? Hn ? Hn.push(e) : Hn = [e] : Bn = e;
}
function Bc() {
  if (Bn) {
    var e = Bn, t = Hn;
    if (Hn = Bn = null, pi(e), t) for (e = 0; e < t.length; e++) pi(t[e]);
  }
}
function Hc(e, t) {
  return e(t);
}
function Kc() {
}
var Os = !1;
function Gc(e, t, n) {
  if (Os) return e(t, n);
  Os = !0;
  try {
    return Hc(e, t, n);
  } finally {
    Os = !1, (Bn !== null || Hn !== null) && (Kc(), Bc());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vs(n);
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
var wa = !1;
if (At) try {
  var fr = {};
  Object.defineProperty(fr, "passive", { get: function() {
    wa = !0;
  } }), window.addEventListener("test", fr, fr), window.removeEventListener("test", fr, fr);
} catch {
  wa = !1;
}
function ef(e, t, n, r, s, a, o, c, i) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (p) {
    this.onError(p);
  }
}
var br = !1, Ql = null, Vl = !1, xa = null, tf = { onError: function(e) {
  br = !0, Ql = e;
} };
function nf(e, t, n, r, s, a, o, c, i) {
  br = !1, Ql = null, ef.apply(tf, arguments);
}
function rf(e, t, n, r, s, a, o, c, i) {
  if (nf.apply(this, arguments), br) {
    if (br) {
      var d = Ql;
      br = !1, Ql = null;
    } else throw Error(W(198));
    Vl || (Vl = !0, xa = d);
  }
}
function Nn(e) {
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
function qc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function hi(e) {
  if (Nn(e) !== e) throw Error(W(188));
}
function lf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nn(e), t === null) throw Error(W(188));
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
        if (a === n) return hi(s), e;
        if (a === r) return hi(s), t;
        a = a.sibling;
      }
      throw Error(W(188));
    }
    if (n.return !== r.return) n = s, r = a;
    else {
      for (var o = !1, c = s.child; c; ) {
        if (c === n) {
          o = !0, n = s, r = a;
          break;
        }
        if (c === r) {
          o = !0, r = s, n = a;
          break;
        }
        c = c.sibling;
      }
      if (!o) {
        for (c = a.child; c; ) {
          if (c === n) {
            o = !0, n = a, r = s;
            break;
          }
          if (c === r) {
            o = !0, r = a, n = s;
            break;
          }
          c = c.sibling;
        }
        if (!o) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? e : t;
}
function Yc(e) {
  return e = lf(e), e !== null ? Xc(e) : null;
}
function Xc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zc = st.unstable_scheduleCallback, gi = st.unstable_cancelCallback, sf = st.unstable_shouldYield, af = st.unstable_requestPaint, Ie = st.unstable_now, of = st.unstable_getCurrentPriorityLevel, po = st.unstable_ImmediatePriority, Jc = st.unstable_UserBlockingPriority, Bl = st.unstable_NormalPriority, cf = st.unstable_LowPriority, ed = st.unstable_IdlePriority, ps = null, Mt = null;
function df(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
    Mt.onCommitFiberRoot(ps, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var _t = Math.clz32 ? Math.clz32 : ff, uf = Math.log, mf = Math.LN2;
function ff(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (uf(e) / mf | 0) | 0;
}
var fl = 64, pl = 4194304;
function kr(e) {
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
function Hl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, s = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var c = o & ~s;
    c !== 0 ? r = kr(c) : (a &= o, a !== 0 && (r = kr(a)));
  } else o = n & ~s, o !== 0 ? r = kr(o) : a !== 0 && (r = kr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & s) && (s = r & -r, a = t & -t, s >= a || s === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - _t(t), s = 1 << n, r |= e[n], t &= ~s;
  return r;
}
function pf(e, t) {
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
function hf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - _t(a), c = 1 << o, i = s[o];
    i === -1 ? (!(c & n) || c & r) && (s[o] = pf(c, t)) : i <= t && (e.expiredLanes |= c), a &= ~c;
  }
}
function _a(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function td() {
  var e = fl;
  return fl <<= 1, !(fl & 4194240) && (fl = 64), e;
}
function As(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _t(t), e[t] = n;
}
function gf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - _t(n), a = 1 << s;
    t[s] = 0, r[s] = -1, e[s] = -1, n &= ~a;
  }
}
function ho(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - _t(n), s = 1 << r;
    s & t | e[r] & t && (e[r] |= t), n &= ~s;
  }
}
var fe = 0;
function nd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var rd, go, ld, sd, ad, ka = !1, hl = [], Zt = null, Jt = null, en = null, Or = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), Kt = [], yf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function yi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ar.delete(t.pointerId);
  }
}
function pr(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [s] }, t !== null && (t = rl(t), t !== null && go(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function vf(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return Zt = pr(Zt, e, t, n, r, s), !0;
    case "dragenter":
      return Jt = pr(Jt, e, t, n, r, s), !0;
    case "mouseover":
      return en = pr(en, e, t, n, r, s), !0;
    case "pointerover":
      var a = s.pointerId;
      return Or.set(a, pr(Or.get(a) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return a = s.pointerId, Ar.set(a, pr(Ar.get(a) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function od(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = qc(n), t !== null) {
          e.blockedOn = t, ad(e.priority, function() {
            ld(n);
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
function Tl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ya = r, n.target.dispatchEvent(r), ya = null;
    } else return t = rl(n), t !== null && go(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function vi(e, t, n) {
  Tl(e) && n.delete(t);
}
function wf() {
  ka = !1, Zt !== null && Tl(Zt) && (Zt = null), Jt !== null && Tl(Jt) && (Jt = null), en !== null && Tl(en) && (en = null), Or.forEach(vi), Ar.forEach(vi);
}
function hr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ka || (ka = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, wf)));
}
function zr(e) {
  function t(s) {
    return hr(s, e);
  }
  if (0 < hl.length) {
    hr(hl[0], e);
    for (var n = 1; n < hl.length; n++) {
      var r = hl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Zt !== null && hr(Zt, e), Jt !== null && hr(Jt, e), en !== null && hr(en, e), Or.forEach(t), Ar.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) od(n), n.blockedOn === null && Kt.shift();
}
var Kn = Ut.ReactCurrentBatchConfig, Kl = !0;
function xf(e, t, n, r) {
  var s = fe, a = Kn.transition;
  Kn.transition = null;
  try {
    fe = 1, yo(e, t, n, r);
  } finally {
    fe = s, Kn.transition = a;
  }
}
function _f(e, t, n, r) {
  var s = fe, a = Kn.transition;
  Kn.transition = null;
  try {
    fe = 4, yo(e, t, n, r);
  } finally {
    fe = s, Kn.transition = a;
  }
}
function yo(e, t, n, r) {
  if (Kl) {
    var s = Sa(e, t, n, r);
    if (s === null) Ks(e, t, r, Gl, n), yi(e, r);
    else if (vf(s, e, t, n, r)) r.stopPropagation();
    else if (yi(e, r), t & 4 && -1 < yf.indexOf(e)) {
      for (; s !== null; ) {
        var a = rl(s);
        if (a !== null && rd(a), a = Sa(e, t, n, r), a === null && Ks(e, t, r, Gl, n), a === s) break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else Ks(e, t, r, null, n);
  }
}
var Gl = null;
function Sa(e, t, n, r) {
  if (Gl = null, e = fo(r), e = hn(e), e !== null) if (t = Nn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = qc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Gl = e, null;
}
function id(e) {
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
      switch (of()) {
        case po:
          return 1;
        case Jc:
          return 4;
        case Bl:
        case cf:
          return 16;
        case ed:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null, vo = null, Ll = null;
function cd() {
  if (Ll) return Ll;
  var e, t = vo, n = t.length, r, s = "value" in Yt ? Yt.value : Yt.textContent, a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[a - r]; r++) ;
  return Ll = s.slice(e, 1 < r ? 1 - r : void 0);
}
function Dl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gl() {
  return !0;
}
function wi() {
  return !1;
}
function ot(e) {
  function t(n, r, s, a, o) {
    this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(a) : a[c]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? gl : wi, this.isPropagationStopped = wi, this;
  }
  return Ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gl);
  }, persist: function() {
  }, isPersistent: gl }), t;
}
var sr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, wo = ot(sr), nl = Ce({}, sr, { view: 0, detail: 0 }), kf = ot(nl), zs, Fs, gr, hs = Ce({}, nl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== gr && (gr && e.type === "mousemove" ? (zs = e.screenX - gr.screenX, Fs = e.screenY - gr.screenY) : Fs = zs = 0, gr = e), zs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fs;
} }), xi = ot(hs), Sf = Ce({}, hs, { dataTransfer: 0 }), jf = ot(Sf), bf = Ce({}, nl, { relatedTarget: 0 }), Ws = ot(bf), Cf = Ce({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nf = ot(Cf), Ef = Ce({}, sr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Mf = ot(Ef), If = Ce({}, sr, { data: 0 }), _i = ot(If), Tf = {
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
}, Lf = {
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
}, Df = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Df[e]) ? !!t[e] : !1;
}
function xo() {
  return Pf;
}
var Rf = Ce({}, nl, { key: function(e) {
  if (e.key) {
    var t = Tf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Dl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xo, charCode: function(e) {
  return e.type === "keypress" ? Dl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Of = ot(Rf), Af = Ce({}, hs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ki = ot(Af), zf = Ce({}, nl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xo }), Ff = ot(zf), Wf = Ce({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $f = ot(Wf), Uf = Ce({}, hs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Qf = ot(Uf), Vf = [9, 13, 27, 32], _o = At && "CompositionEvent" in window, Cr = null;
At && "documentMode" in document && (Cr = document.documentMode);
var Bf = At && "TextEvent" in window && !Cr, dd = At && (!_o || Cr && 8 < Cr && 11 >= Cr), Si = " ", ji = !1;
function ud(e, t) {
  switch (e) {
    case "keyup":
      return Vf.indexOf(t.keyCode) !== -1;
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
function md(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Pn = !1;
function Hf(e, t) {
  switch (e) {
    case "compositionend":
      return md(t);
    case "keypress":
      return t.which !== 32 ? null : (ji = !0, Si);
    case "textInput":
      return e = t.data, e === Si && ji ? null : e;
    default:
      return null;
  }
}
function Kf(e, t) {
  if (Pn) return e === "compositionend" || !_o && ud(e, t) ? (e = cd(), Ll = vo = Yt = null, Pn = !1, e) : null;
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
      return dd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function bi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gf[e.type] : t === "textarea";
}
function fd(e, t, n, r) {
  Vc(r), t = ql(t, "onChange"), 0 < t.length && (n = new wo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Nr = null, Fr = null;
function qf(e) {
  jd(e, 0);
}
function gs(e) {
  var t = An(e);
  if (Ac(t)) return e;
}
function Yf(e, t) {
  if (e === "change") return t;
}
var pd = !1;
if (At) {
  var $s;
  if (At) {
    var Us = "oninput" in document;
    if (!Us) {
      var Ci = document.createElement("div");
      Ci.setAttribute("oninput", "return;"), Us = typeof Ci.oninput == "function";
    }
    $s = Us;
  } else $s = !1;
  pd = $s && (!document.documentMode || 9 < document.documentMode);
}
function Ni() {
  Nr && (Nr.detachEvent("onpropertychange", hd), Fr = Nr = null);
}
function hd(e) {
  if (e.propertyName === "value" && gs(Fr)) {
    var t = [];
    fd(t, Fr, e, fo(e)), Gc(qf, t);
  }
}
function Xf(e, t, n) {
  e === "focusin" ? (Ni(), Nr = t, Fr = n, Nr.attachEvent("onpropertychange", hd)) : e === "focusout" && Ni();
}
function Zf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return gs(Fr);
}
function Jf(e, t) {
  if (e === "click") return gs(t);
}
function ep(e, t) {
  if (e === "input" || e === "change") return gs(t);
}
function tp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : tp;
function Wr(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!sa.call(t, s) || !St(e[s], t[s])) return !1;
  }
  return !0;
}
function Ei(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mi(e, t) {
  var n = Ei(e);
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
    n = Ei(n);
  }
}
function gd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function yd() {
  for (var e = window, t = Ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ul(e.document);
  }
  return t;
}
function ko(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function np(e) {
  var t = yd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && gd(n.ownerDocument.documentElement, n)) {
    if (r !== null && ko(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = n.textContent.length, a = Math.min(r.start, s);
        r = r.end === void 0 ? a : Math.min(r.end, s), !e.extend && a > r && (s = r, r = a, a = s), s = Mi(n, a);
        var o = Mi(
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
var rp = At && "documentMode" in document && 11 >= document.documentMode, Rn = null, ja = null, Er = null, ba = !1;
function Ii(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ba || Rn == null || Rn !== Ul(r) || (r = Rn, "selectionStart" in r && ko(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Er && Wr(Er, r) || (Er = r, r = ql(ja, "onSelect"), 0 < r.length && (t = new wo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Rn)));
}
function yl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var On = { animationend: yl("Animation", "AnimationEnd"), animationiteration: yl("Animation", "AnimationIteration"), animationstart: yl("Animation", "AnimationStart"), transitionend: yl("Transition", "TransitionEnd") }, Qs = {}, vd = {};
At && (vd = document.createElement("div").style, "AnimationEvent" in window || (delete On.animationend.animation, delete On.animationiteration.animation, delete On.animationstart.animation), "TransitionEvent" in window || delete On.transitionend.transition);
function ys(e) {
  if (Qs[e]) return Qs[e];
  if (!On[e]) return e;
  var t = On[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in vd) return Qs[e] = t[n];
  return e;
}
var wd = ys("animationend"), xd = ys("animationiteration"), _d = ys("animationstart"), kd = ys("transitionend"), Sd = /* @__PURE__ */ new Map(), Ti = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, t) {
  Sd.set(e, t), Cn(t, [e]);
}
for (var Vs = 0; Vs < Ti.length; Vs++) {
  var Bs = Ti[Vs], lp = Bs.toLowerCase(), sp = Bs[0].toUpperCase() + Bs.slice(1);
  cn(lp, "on" + sp);
}
cn(wd, "onAnimationEnd");
cn(xd, "onAnimationIteration");
cn(_d, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(kd, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
Cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ap = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
function Li(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, rf(r, t, void 0, e), e.currentTarget = null;
}
function jd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var c = r[o], i = c.instance, d = c.currentTarget;
        if (c = c.listener, i !== a && s.isPropagationStopped()) break e;
        Li(s, c, d), a = i;
      }
      else for (o = 0; o < r.length; o++) {
        if (c = r[o], i = c.instance, d = c.currentTarget, c = c.listener, i !== a && s.isPropagationStopped()) break e;
        Li(s, c, d), a = i;
      }
    }
  }
  if (Vl) throw e = xa, Vl = !1, xa = null, e;
}
function we(e, t) {
  var n = t[Ia];
  n === void 0 && (n = t[Ia] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (bd(t, e, 2, !1), n.add(r));
}
function Hs(e, t, n) {
  var r = 0;
  t && (r |= 4), bd(n, e, r, t);
}
var vl = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[vl]) {
    e[vl] = !0, Lc.forEach(function(n) {
      n !== "selectionchange" && (ap.has(n) || Hs(n, !1, e), Hs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vl] || (t[vl] = !0, Hs("selectionchange", !1, t));
  }
}
function bd(e, t, n, r) {
  switch (id(t)) {
    case 1:
      var s = xf;
      break;
    case 4:
      s = _f;
      break;
    default:
      s = yo;
  }
  n = s.bind(null, t, n, e), s = void 0, !wa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
}
function Ks(e, t, n, r, s) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var c = r.stateNode.containerInfo;
      if (c === s || c.nodeType === 8 && c.parentNode === s) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var i = o.tag;
        if ((i === 3 || i === 4) && (i = o.stateNode.containerInfo, i === s || i.nodeType === 8 && i.parentNode === s)) return;
        o = o.return;
      }
      for (; c !== null; ) {
        if (o = hn(c), o === null) return;
        if (i = o.tag, i === 5 || i === 6) {
          r = a = o;
          continue e;
        }
        c = c.parentNode;
      }
    }
    r = r.return;
  }
  Gc(function() {
    var d = a, p = fo(n), g = [];
    e: {
      var w = Sd.get(e);
      if (w !== void 0) {
        var x = wo, y = e;
        switch (e) {
          case "keypress":
            if (Dl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Of;
            break;
          case "focusin":
            y = "focus", x = Ws;
            break;
          case "focusout":
            y = "blur", x = Ws;
            break;
          case "beforeblur":
          case "afterblur":
            x = Ws;
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
            x = xi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = jf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Ff;
            break;
          case wd:
          case xd:
          case _d:
            x = Nf;
            break;
          case kd:
            x = $f;
            break;
          case "scroll":
            x = kf;
            break;
          case "wheel":
            x = Qf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ki;
        }
        var k = (t & 4) !== 0, S = !k && e === "scroll", f = k ? w !== null ? w + "Capture" : null : w;
        k = [];
        for (var u = d, h; u !== null; ) {
          h = u;
          var v = h.stateNode;
          if (h.tag === 5 && v !== null && (h = v, f !== null && (v = Rr(u, f), v != null && k.push(Ur(u, v, h)))), S) break;
          u = u.return;
        }
        0 < k.length && (w = new x(w, y, null, n, p), g.push({ event: w, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", w && n !== ya && (y = n.relatedTarget || n.fromElement) && (hn(y) || y[zt])) break e;
        if ((x || w) && (w = p.window === p ? p : (w = p.ownerDocument) ? w.defaultView || w.parentWindow : window, x ? (y = n.relatedTarget || n.toElement, x = d, y = y ? hn(y) : null, y !== null && (S = Nn(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (x = null, y = d), x !== y)) {
          if (k = xi, v = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (k = ki, v = "onPointerLeave", f = "onPointerEnter", u = "pointer"), S = x == null ? w : An(x), h = y == null ? w : An(y), w = new k(v, u + "leave", x, n, p), w.target = S, w.relatedTarget = h, v = null, hn(p) === d && (k = new k(f, u + "enter", y, n, p), k.target = h, k.relatedTarget = S, v = k), S = v, x && y) t: {
            for (k = x, f = y, u = 0, h = k; h; h = Tn(h)) u++;
            for (h = 0, v = f; v; v = Tn(v)) h++;
            for (; 0 < u - h; ) k = Tn(k), u--;
            for (; 0 < h - u; ) f = Tn(f), h--;
            for (; u--; ) {
              if (k === f || f !== null && k === f.alternate) break t;
              k = Tn(k), f = Tn(f);
            }
            k = null;
          }
          else k = null;
          x !== null && Di(g, w, x, k, !1), y !== null && S !== null && Di(g, S, y, k, !0);
        }
      }
      e: {
        if (w = d ? An(d) : window, x = w.nodeName && w.nodeName.toLowerCase(), x === "select" || x === "input" && w.type === "file") var _ = Yf;
        else if (bi(w)) if (pd) _ = ep;
        else {
          _ = Zf;
          var j = Xf;
        }
        else (x = w.nodeName) && x.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (_ = Jf);
        if (_ && (_ = _(e, d))) {
          fd(g, _, n, p);
          break e;
        }
        j && j(e, w, d), e === "focusout" && (j = w._wrapperState) && j.controlled && w.type === "number" && ma(w, "number", w.value);
      }
      switch (j = d ? An(d) : window, e) {
        case "focusin":
          (bi(j) || j.contentEditable === "true") && (Rn = j, ja = d, Er = null);
          break;
        case "focusout":
          Er = ja = Rn = null;
          break;
        case "mousedown":
          ba = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ba = !1, Ii(g, n, p);
          break;
        case "selectionchange":
          if (rp) break;
        case "keydown":
        case "keyup":
          Ii(g, n, p);
      }
      var b;
      if (_o) e: {
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
      else Pn ? ud(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (dd && n.locale !== "ko" && (Pn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Pn && (b = cd()) : (Yt = p, vo = "value" in Yt ? Yt.value : Yt.textContent, Pn = !0)), j = ql(d, N), 0 < j.length && (N = new _i(N, e, null, n, p), g.push({ event: N, listeners: j }), b ? N.data = b : (b = md(n), b !== null && (N.data = b)))), (b = Bf ? Hf(e, n) : Kf(e, n)) && (d = ql(d, "onBeforeInput"), 0 < d.length && (p = new _i("onBeforeInput", "beforeinput", null, n, p), g.push({ event: p, listeners: d }), p.data = b));
    }
    jd(g, t);
  });
}
function Ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ql(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e, a = s.stateNode;
    s.tag === 5 && a !== null && (s = a, a = Rr(e, n), a != null && r.unshift(Ur(e, a, s)), a = Rr(e, t), a != null && r.push(Ur(e, a, s))), e = e.return;
  }
  return r;
}
function Tn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Di(e, t, n, r, s) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var c = n, i = c.alternate, d = c.stateNode;
    if (i !== null && i === r) break;
    c.tag === 5 && d !== null && (c = d, s ? (i = Rr(n, a), i != null && o.unshift(Ur(n, i, c))) : s || (i = Rr(n, a), i != null && o.push(Ur(n, i, c)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var op = /\r\n?/g, ip = /\u0000|\uFFFD/g;
function Pi(e) {
  return (typeof e == "string" ? e : "" + e).replace(op, `
`).replace(ip, "");
}
function wl(e, t, n) {
  if (t = Pi(t), Pi(e) !== t && n) throw Error(W(425));
}
function Yl() {
}
var Ca = null, Na = null;
function Ea(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ma = typeof setTimeout == "function" ? setTimeout : void 0, cp = typeof clearTimeout == "function" ? clearTimeout : void 0, Ri = typeof Promise == "function" ? Promise : void 0, dp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ri < "u" ? function(e) {
  return Ri.resolve(null).then(e).catch(up);
} : Ma;
function up(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gs(e, t) {
  var n = t, r = 0;
  do {
    var s = n.nextSibling;
    if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
      if (r === 0) {
        e.removeChild(s), zr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = s;
  } while (n);
  zr(t);
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
function Oi(e) {
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
var ar = Math.random().toString(36).slice(2), Et = "__reactFiber$" + ar, Qr = "__reactProps$" + ar, zt = "__reactContainer$" + ar, Ia = "__reactEvents$" + ar, mp = "__reactListeners$" + ar, fp = "__reactHandles$" + ar;
function hn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[zt] || n[Et]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Oi(e); e !== null; ) {
        if (n = e[Et]) return n;
        e = Oi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function rl(e) {
  return e = e[Et] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function vs(e) {
  return e[Qr] || null;
}
var Ta = [], zn = -1;
function dn(e) {
  return { current: e };
}
function xe(e) {
  0 > zn || (e.current = Ta[zn], Ta[zn] = null, zn--);
}
function ge(e, t) {
  zn++, Ta[zn] = e.current, e.current = t;
}
var on = {}, Qe = dn(on), Ye = dn(!1), xn = on;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var s = {}, a;
  for (a in n) s[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
}
function Xe(e) {
  return e = e.childContextTypes, e != null;
}
function Xl() {
  xe(Ye), xe(Qe);
}
function Ai(e, t, n) {
  if (Qe.current !== on) throw Error(W(168));
  ge(Qe, t), ge(Ye, n);
}
function Cd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(W(108, Ym(e) || "Unknown", s));
  return Ce({}, n, r);
}
function Zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, xn = Qe.current, ge(Qe, e), ge(Ye, Ye.current), !0;
}
function zi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(W(169));
  n ? (e = Cd(e, t, xn), r.__reactInternalMemoizedMergedChildContext = e, xe(Ye), xe(Qe), ge(Qe, e)) : xe(Ye), ge(Ye, n);
}
var Dt = null, ws = !1, qs = !1;
function Nd(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function pp(e) {
  ws = !0, Nd(e);
}
function un() {
  if (!qs && Dt !== null) {
    qs = !0;
    var e = 0, t = fe;
    try {
      var n = Dt;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dt = null, ws = !1;
    } catch (s) {
      throw Dt !== null && (Dt = Dt.slice(e + 1)), Zc(po, un), s;
    } finally {
      fe = t, qs = !1;
    }
  }
  return null;
}
var Fn = [], Wn = 0, Jl = null, es = 0, dt = [], ut = 0, _n = null, Pt = 1, Rt = "";
function fn(e, t) {
  Fn[Wn++] = es, Fn[Wn++] = Jl, Jl = e, es = t;
}
function Ed(e, t, n) {
  dt[ut++] = Pt, dt[ut++] = Rt, dt[ut++] = _n, _n = e;
  var r = Pt;
  e = Rt;
  var s = 32 - _t(r) - 1;
  r &= ~(1 << s), n += 1;
  var a = 32 - _t(t) + s;
  if (30 < a) {
    var o = s - s % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, s -= o, Pt = 1 << 32 - _t(t) + s | n << s | r, Rt = a + e;
  } else Pt = 1 << a | n << s | r, Rt = e;
}
function So(e) {
  e.return !== null && (fn(e, 1), Ed(e, 1, 0));
}
function jo(e) {
  for (; e === Jl; ) Jl = Fn[--Wn], Fn[Wn] = null, es = Fn[--Wn], Fn[Wn] = null;
  for (; e === _n; ) _n = dt[--ut], dt[ut] = null, Rt = dt[--ut], dt[ut] = null, Pt = dt[--ut], dt[ut] = null;
}
var lt = null, rt = null, Se = !1, wt = null;
function Md(e, t) {
  var n = mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Fi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = tn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, rt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _n !== null ? { id: Pt, overflow: Rt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, rt = null, !0) : !1;
    default:
      return !1;
  }
}
function La(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Da(e) {
  if (Se) {
    var t = rt;
    if (t) {
      var n = t;
      if (!Fi(e, t)) {
        if (La(e)) throw Error(W(418));
        t = tn(n.nextSibling);
        var r = lt;
        t && Fi(e, t) ? Md(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, lt = e);
      }
    } else {
      if (La(e)) throw Error(W(418));
      e.flags = e.flags & -4097 | 2, Se = !1, lt = e;
    }
  }
}
function Wi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function xl(e) {
  if (e !== lt) return !1;
  if (!Se) return Wi(e), Se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ea(e.type, e.memoizedProps)), t && (t = rt)) {
    if (La(e)) throw Id(), Error(W(418));
    for (; t; ) Md(e, t), t = tn(t.nextSibling);
  }
  if (Wi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              rt = tn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      rt = null;
    }
  } else rt = lt ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function Id() {
  for (var e = rt; e; ) e = tn(e.nextSibling);
}
function Zn() {
  rt = lt = null, Se = !1;
}
function bo(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var hp = Ut.ReactCurrentBatchConfig;
function yr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, e));
      var s = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var c = s.refs;
        o === null ? delete c[a] : c[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, e));
  }
  return e;
}
function _l(e, t) {
  throw e = Object.prototype.toString.call(t), Error(W(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function $i(e) {
  var t = e._init;
  return t(e._payload);
}
function Td(e) {
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
  function c(f, u, h, v) {
    return u === null || u.tag !== 6 ? (u = na(h, f.mode, v), u.return = f, u) : (u = s(u, h), u.return = f, u);
  }
  function i(f, u, h, v) {
    var _ = h.type;
    return _ === Dn ? p(f, u, h.props.children, v, h.key) : u !== null && (u.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Bt && $i(_) === u.type) ? (v = s(u, h.props), v.ref = yr(f, u, h), v.return = f, v) : (v = Wl(h.type, h.key, h.props, null, f.mode, v), v.ref = yr(f, u, h), v.return = f, v);
  }
  function d(f, u, h, v) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== h.containerInfo || u.stateNode.implementation !== h.implementation ? (u = ra(h, f.mode, v), u.return = f, u) : (u = s(u, h.children || []), u.return = f, u);
  }
  function p(f, u, h, v, _) {
    return u === null || u.tag !== 7 ? (u = wn(h, f.mode, v, _), u.return = f, u) : (u = s(u, h), u.return = f, u);
  }
  function g(f, u, h) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = na("" + u, f.mode, h), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case dl:
          return h = Wl(u.type, u.key, u.props, null, f.mode, h), h.ref = yr(f, null, u), h.return = f, h;
        case Ln:
          return u = ra(u, f.mode, h), u.return = f, u;
        case Bt:
          var v = u._init;
          return g(f, v(u._payload), h);
      }
      if (_r(u) || mr(u)) return u = wn(u, f.mode, h, null), u.return = f, u;
      _l(f, u);
    }
    return null;
  }
  function w(f, u, h, v) {
    var _ = u !== null ? u.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return _ !== null ? null : c(f, u, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case dl:
          return h.key === _ ? i(f, u, h, v) : null;
        case Ln:
          return h.key === _ ? d(f, u, h, v) : null;
        case Bt:
          return _ = h._init, w(
            f,
            u,
            _(h._payload),
            v
          );
      }
      if (_r(h) || mr(h)) return _ !== null ? null : p(f, u, h, v, null);
      _l(f, h);
    }
    return null;
  }
  function x(f, u, h, v, _) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(h) || null, c(u, f, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case dl:
          return f = f.get(v.key === null ? h : v.key) || null, i(u, f, v, _);
        case Ln:
          return f = f.get(v.key === null ? h : v.key) || null, d(u, f, v, _);
        case Bt:
          var j = v._init;
          return x(f, u, h, j(v._payload), _);
      }
      if (_r(v) || mr(v)) return f = f.get(h) || null, p(u, f, v, _, null);
      _l(u, v);
    }
    return null;
  }
  function y(f, u, h, v) {
    for (var _ = null, j = null, b = u, N = u = 0, R = null; b !== null && N < h.length; N++) {
      b.index > N ? (R = b, b = null) : R = b.sibling;
      var P = w(f, b, h[N], v);
      if (P === null) {
        b === null && (b = R);
        break;
      }
      e && b && P.alternate === null && t(f, b), u = a(P, u, N), j === null ? _ = P : j.sibling = P, j = P, b = R;
    }
    if (N === h.length) return n(f, b), Se && fn(f, N), _;
    if (b === null) {
      for (; N < h.length; N++) b = g(f, h[N], v), b !== null && (u = a(b, u, N), j === null ? _ = b : j.sibling = b, j = b);
      return Se && fn(f, N), _;
    }
    for (b = r(f, b); N < h.length; N++) R = x(b, f, N, h[N], v), R !== null && (e && R.alternate !== null && b.delete(R.key === null ? N : R.key), u = a(R, u, N), j === null ? _ = R : j.sibling = R, j = R);
    return e && b.forEach(function(T) {
      return t(f, T);
    }), Se && fn(f, N), _;
  }
  function k(f, u, h, v) {
    var _ = mr(h);
    if (typeof _ != "function") throw Error(W(150));
    if (h = _.call(h), h == null) throw Error(W(151));
    for (var j = _ = null, b = u, N = u = 0, R = null, P = h.next(); b !== null && !P.done; N++, P = h.next()) {
      b.index > N ? (R = b, b = null) : R = b.sibling;
      var T = w(f, b, P.value, v);
      if (T === null) {
        b === null && (b = R);
        break;
      }
      e && b && T.alternate === null && t(f, b), u = a(T, u, N), j === null ? _ = T : j.sibling = T, j = T, b = R;
    }
    if (P.done) return n(
      f,
      b
    ), Se && fn(f, N), _;
    if (b === null) {
      for (; !P.done; N++, P = h.next()) P = g(f, P.value, v), P !== null && (u = a(P, u, N), j === null ? _ = P : j.sibling = P, j = P);
      return Se && fn(f, N), _;
    }
    for (b = r(f, b); !P.done; N++, P = h.next()) P = x(b, f, N, P.value, v), P !== null && (e && P.alternate !== null && b.delete(P.key === null ? N : P.key), u = a(P, u, N), j === null ? _ = P : j.sibling = P, j = P);
    return e && b.forEach(function(U) {
      return t(f, U);
    }), Se && fn(f, N), _;
  }
  function S(f, u, h, v) {
    if (typeof h == "object" && h !== null && h.type === Dn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case dl:
          e: {
            for (var _ = h.key, j = u; j !== null; ) {
              if (j.key === _) {
                if (_ = h.type, _ === Dn) {
                  if (j.tag === 7) {
                    n(f, j.sibling), u = s(j, h.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (j.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Bt && $i(_) === j.type) {
                  n(f, j.sibling), u = s(j, h.props), u.ref = yr(f, j, h), u.return = f, f = u;
                  break e;
                }
                n(f, j);
                break;
              } else t(f, j);
              j = j.sibling;
            }
            h.type === Dn ? (u = wn(h.props.children, f.mode, v, h.key), u.return = f, f = u) : (v = Wl(h.type, h.key, h.props, null, f.mode, v), v.ref = yr(f, u, h), v.return = f, f = v);
          }
          return o(f);
        case Ln:
          e: {
            for (j = h.key; u !== null; ) {
              if (u.key === j) if (u.tag === 4 && u.stateNode.containerInfo === h.containerInfo && u.stateNode.implementation === h.implementation) {
                n(f, u.sibling), u = s(u, h.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = ra(h, f.mode, v), u.return = f, f = u;
          }
          return o(f);
        case Bt:
          return j = h._init, S(f, u, j(h._payload), v);
      }
      if (_r(h)) return y(f, u, h, v);
      if (mr(h)) return k(f, u, h, v);
      _l(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, u !== null && u.tag === 6 ? (n(f, u.sibling), u = s(u, h), u.return = f, f = u) : (n(f, u), u = na(h, f.mode, v), u.return = f, f = u), o(f)) : n(f, u);
  }
  return S;
}
var Jn = Td(!0), Ld = Td(!1), ts = dn(null), ns = null, $n = null, Co = null;
function No() {
  Co = $n = ns = null;
}
function Eo(e) {
  var t = ts.current;
  xe(ts), e._currentValue = t;
}
function Pa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Gn(e, t) {
  ns = e, Co = $n = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (Co !== e) if (e = { context: e, memoizedValue: t, next: null }, $n === null) {
    if (ns === null) throw Error(W(308));
    $n = e, ns.dependencies = { lanes: 0, firstContext: e };
  } else $n = $n.next = e;
  return t;
}
var gn = null;
function Mo(e) {
  gn === null ? gn = [e] : gn.push(e);
}
function Dd(e, t, n, r) {
  var s = t.interleaved;
  return s === null ? (n.next = n, Mo(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function Io(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Pd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ue & 2) {
    var s = r.pending;
    return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Ft(e, n);
  }
  return s = r.interleaved, s === null ? (t.next = t, Mo(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Ft(e, n);
}
function Pl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ho(e, n);
  }
}
function Ui(e, t) {
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
function rs(e, t, n, r) {
  var s = e.updateQueue;
  Ht = !1;
  var a = s.firstBaseUpdate, o = s.lastBaseUpdate, c = s.shared.pending;
  if (c !== null) {
    s.shared.pending = null;
    var i = c, d = i.next;
    i.next = null, o === null ? a = d : o.next = d, o = i;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, c = p.lastBaseUpdate, c !== o && (c === null ? p.firstBaseUpdate = d : c.next = d, p.lastBaseUpdate = i));
  }
  if (a !== null) {
    var g = s.baseState;
    o = 0, p = d = i = null, c = a;
    do {
      var w = c.lane, x = c.eventTime;
      if ((r & w) === w) {
        p !== null && (p = p.next = {
          eventTime: x,
          lane: 0,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        });
        e: {
          var y = e, k = c;
          switch (w = t, x = n, k.tag) {
            case 1:
              if (y = k.payload, typeof y == "function") {
                g = y.call(x, g, w);
                break e;
              }
              g = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = k.payload, w = typeof y == "function" ? y.call(x, g, w) : y, w == null) break e;
              g = Ce({}, g, w);
              break e;
            case 2:
              Ht = !0;
          }
        }
        c.callback !== null && c.lane !== 0 && (e.flags |= 64, w = s.effects, w === null ? s.effects = [c] : w.push(c));
      } else x = { eventTime: x, lane: w, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, p === null ? (d = p = x, i = g) : p = p.next = x, o |= w;
      if (c = c.next, c === null) {
        if (c = s.shared.pending, c === null) break;
        w = c, c = w.next, w.next = null, s.lastBaseUpdate = w, s.shared.pending = null;
      }
    } while (!0);
    if (p === null && (i = g), s.baseState = i, s.firstBaseUpdate = d, s.lastBaseUpdate = p, t = s.shared.interleaved, t !== null) {
      s = t;
      do
        o |= s.lane, s = s.next;
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    Sn |= o, e.lanes = o, e.memoizedState = g;
  }
}
function Qi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], s = r.callback;
    if (s !== null) {
      if (r.callback = null, r = n, typeof s != "function") throw Error(W(191, s));
      s.call(r);
    }
  }
}
var ll = {}, It = dn(ll), Vr = dn(ll), Br = dn(ll);
function yn(e) {
  if (e === ll) throw Error(W(174));
  return e;
}
function To(e, t) {
  switch (ge(Br, t), ge(Vr, e), ge(It, ll), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pa(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = pa(t, e);
  }
  xe(It), ge(It, t);
}
function er() {
  xe(It), xe(Vr), xe(Br);
}
function Rd(e) {
  yn(Br.current);
  var t = yn(It.current), n = pa(t, e.type);
  t !== n && (ge(Vr, e), ge(It, n));
}
function Lo(e) {
  Vr.current === e && (xe(It), xe(Vr));
}
var je = dn(0);
function ls(e) {
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
var Ys = [];
function Do() {
  for (var e = 0; e < Ys.length; e++) Ys[e]._workInProgressVersionPrimary = null;
  Ys.length = 0;
}
var Rl = Ut.ReactCurrentDispatcher, Xs = Ut.ReactCurrentBatchConfig, kn = 0, be = null, Le = null, Re = null, ss = !1, Mr = !1, Hr = 0, gp = 0;
function We() {
  throw Error(W(321));
}
function Po(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function Ro(e, t, n, r, s, a) {
  if (kn = a, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Rl.current = e === null || e.memoizedState === null ? xp : _p, e = n(r, s), Mr) {
    a = 0;
    do {
      if (Mr = !1, Hr = 0, 25 <= a) throw Error(W(301));
      a += 1, Re = Le = null, t.updateQueue = null, Rl.current = kp, e = n(r, s);
    } while (Mr);
  }
  if (Rl.current = as, t = Le !== null && Le.next !== null, kn = 0, Re = Le = be = null, ss = !1, t) throw Error(W(300));
  return e;
}
function Oo() {
  var e = Hr !== 0;
  return Hr = 0, e;
}
function Nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? be.memoizedState = Re = e : Re = Re.next = e, Re;
}
function ht() {
  if (Le === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Le.next;
  var t = Re === null ? be.memoizedState : Re.next;
  if (t !== null) Re = t, Le = e;
  else {
    if (e === null) throw Error(W(310));
    Le = e, e = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, Re === null ? be.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zs(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = Le, s = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (s !== null) {
      var o = s.next;
      s.next = a.next, a.next = o;
    }
    r.baseQueue = s = a, n.pending = null;
  }
  if (s !== null) {
    a = s.next, r = r.baseState;
    var c = o = null, i = null, d = a;
    do {
      var p = d.lane;
      if ((kn & p) === p) i !== null && (i = i.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var g = {
          lane: p,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        i === null ? (c = i = g, o = r) : i = i.next = g, be.lanes |= p, Sn |= p;
      }
      d = d.next;
    } while (d !== null && d !== a);
    i === null ? o = r : i.next = c, St(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = i, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    s = e;
    do
      a = s.lane, be.lanes |= a, Sn |= a, s = s.next;
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Js(e) {
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
function Od() {
}
function Ad(e, t) {
  var n = be, r = ht(), s = t(), a = !St(r.memoizedState, s);
  if (a && (r.memoizedState = s, qe = !0), r = r.queue, Ao(Wd.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Gr(9, Fd.bind(null, n, r, s, t), void 0, null), Oe === null) throw Error(W(349));
    kn & 30 || zd(n, t, s);
  }
  return s;
}
function zd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Fd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, $d(t) && Ud(e);
}
function Wd(e, t, n) {
  return n(function() {
    $d(t) && Ud(e);
  });
}
function $d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Ud(e) {
  var t = Ft(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Vi(e) {
  var t = Nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = wp.bind(null, be, e), [t.memoizedState, e];
}
function Gr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Qd() {
  return ht().memoizedState;
}
function Ol(e, t, n, r) {
  var s = Nt();
  be.flags |= e, s.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r);
}
function xs(e, t, n, r) {
  var s = ht();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (a = o.destroy, r !== null && Po(r, o.deps)) {
      s.memoizedState = Gr(t, n, a, r);
      return;
    }
  }
  be.flags |= e, s.memoizedState = Gr(1 | t, n, a, r);
}
function Bi(e, t) {
  return Ol(8390656, 8, e, t);
}
function Ao(e, t) {
  return xs(2048, 8, e, t);
}
function Vd(e, t) {
  return xs(4, 2, e, t);
}
function Bd(e, t) {
  return xs(4, 4, e, t);
}
function Hd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Kd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, xs(4, 4, Hd.bind(null, t, e), n);
}
function zo() {
}
function Gd(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Po(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function qd(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Po(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Yd(e, t, n) {
  return kn & 21 ? (St(n, t) || (n = td(), be.lanes |= n, Sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function yp(e, t) {
  var n = fe;
  fe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Xs.transition;
  Xs.transition = {};
  try {
    e(!1), t();
  } finally {
    fe = n, Xs.transition = r;
  }
}
function Xd() {
  return ht().memoizedState;
}
function vp(e, t, n) {
  var r = ln(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Zd(e)) Jd(t, n);
  else if (n = Dd(e, t, n, r), n !== null) {
    var s = Be();
    kt(n, e, r, s), eu(n, t, r);
  }
}
function wp(e, t, n) {
  var r = ln(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zd(e)) Jd(t, s);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, c = a(o, n);
      if (s.hasEagerState = !0, s.eagerState = c, St(c, o)) {
        var i = t.interleaved;
        i === null ? (s.next = s, Mo(t)) : (s.next = i.next, i.next = s), t.interleaved = s;
        return;
      }
    } catch {
    } finally {
    }
    n = Dd(e, t, s, r), n !== null && (s = Be(), kt(n, e, r, s), eu(n, t, r));
  }
}
function Zd(e) {
  var t = e.alternate;
  return e === be || t !== null && t === be;
}
function Jd(e, t) {
  Mr = ss = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function eu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ho(e, n);
  }
}
var as = { readContext: pt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, xp = { readContext: pt, useCallback: function(e, t) {
  return Nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: Bi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ol(
    4194308,
    4,
    Hd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ol(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ol(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = vp.bind(null, be, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Vi, useDebugValue: zo, useDeferredValue: function(e) {
  return Nt().memoizedState = e;
}, useTransition: function() {
  var e = Vi(!1), t = e[0];
  return e = yp.bind(null, e[1]), Nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = be, s = Nt();
  if (Se) {
    if (n === void 0) throw Error(W(407));
    n = n();
  } else {
    if (n = t(), Oe === null) throw Error(W(349));
    kn & 30 || zd(r, t, n);
  }
  s.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return s.queue = a, Bi(Wd.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Gr(9, Fd.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Nt(), t = Oe.identifierPrefix;
  if (Se) {
    var n = Rt, r = Pt;
    n = (r & ~(1 << 32 - _t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = gp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, _p = {
  readContext: pt,
  useCallback: Gd,
  useContext: pt,
  useEffect: Ao,
  useImperativeHandle: Kd,
  useInsertionEffect: Vd,
  useLayoutEffect: Bd,
  useMemo: qd,
  useReducer: Zs,
  useRef: Qd,
  useState: function() {
    return Zs(Kr);
  },
  useDebugValue: zo,
  useDeferredValue: function(e) {
    var t = ht();
    return Yd(t, Le.memoizedState, e);
  },
  useTransition: function() {
    var e = Zs(Kr)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: Od,
  useSyncExternalStore: Ad,
  useId: Xd,
  unstable_isNewReconciler: !1
}, kp = { readContext: pt, useCallback: Gd, useContext: pt, useEffect: Ao, useImperativeHandle: Kd, useInsertionEffect: Vd, useLayoutEffect: Bd, useMemo: qd, useReducer: Js, useRef: Qd, useState: function() {
  return Js(Kr);
}, useDebugValue: zo, useDeferredValue: function(e) {
  var t = ht();
  return Le === null ? t.memoizedState = e : Yd(t, Le.memoizedState, e);
}, useTransition: function() {
  var e = Js(Kr)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: Od, useSyncExternalStore: Ad, useId: Xd, unstable_isNewReconciler: !1 };
function yt(e, t) {
  if (e && e.defaultProps) {
    t = Ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ra(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _s = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), s = ln(e), a = Ot(r, s);
  a.payload = t, n != null && (a.callback = n), t = nn(e, a, s), t !== null && (kt(t, e, s, r), Pl(t, e, s));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), s = ln(e), a = Ot(r, s);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = nn(e, a, s), t !== null && (kt(t, e, s, r), Pl(t, e, s));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = ln(e), s = Ot(n, r);
  s.tag = 2, t != null && (s.callback = t), t = nn(e, s, r), t !== null && (kt(t, e, r, n), Pl(t, e, r));
} };
function Hi(e, t, n, r, s, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Wr(n, r) || !Wr(s, a) : !0;
}
function tu(e, t, n) {
  var r = !1, s = on, a = t.contextType;
  return typeof a == "object" && a !== null ? a = pt(a) : (s = Xe(t) ? xn : Qe.current, r = t.contextTypes, a = (r = r != null) ? Xn(e, s) : on), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _s, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function Ki(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _s.enqueueReplaceState(t, t.state, null);
}
function Oa(e, t, n, r) {
  var s = e.stateNode;
  s.props = n, s.state = e.memoizedState, s.refs = {}, Io(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? s.context = pt(a) : (a = Xe(t) ? xn : Qe.current, s.context = Xn(e, a)), s.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ra(e, t, a, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && _s.enqueueReplaceState(s, s.state, null), rs(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t) {
  try {
    var n = "", r = t;
    do
      n += qm(r), r = r.return;
    while (r);
    var s = n;
  } catch (a) {
    s = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function ea(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Aa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Sp = typeof WeakMap == "function" ? WeakMap : Map;
function nu(e, t, n) {
  n = Ot(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    is || (is = !0, Ka = r), Aa(e, t);
  }, n;
}
function ru(e, t, n) {
  n = Ot(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    n.payload = function() {
      return r(s);
    }, n.callback = function() {
      Aa(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Aa(e, t), typeof r != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Gi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sp();
    var s = /* @__PURE__ */ new Set();
    r.set(t, s);
  } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
  s.has(n) || (s.add(n), e = Ap.bind(null, e, t, n), t.then(e, e));
}
function qi(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yi(e, t, n, r, s) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ot(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e);
}
var jp = Ut.ReactCurrentOwner, qe = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? Ld(t, null, n, r) : Jn(t, e.child, n, r);
}
function Xi(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return Gn(t, s), r = Ro(e, t, n, r, a, s), n = Oo(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Wt(e, t, s)) : (Se && n && So(t), t.flags |= 1, Ve(e, t, r, s), t.child);
}
function Zi(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Ho(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, lu(e, t, a, r, s)) : (e = Wl(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & s)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wr, n(o, r) && e.ref === t.ref) return Wt(e, t, s);
  }
  return t.flags |= 1, e = sn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function lu(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Wr(a, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = a, (e.lanes & s) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, Wt(e, t, s);
  }
  return za(e, t, n, r, s);
}
function su(e, t, n) {
  var r = t.pendingProps, s = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ge(Qn, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ge(Qn, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ge(Qn, nt), nt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ge(Qn, nt), nt |= r;
  return Ve(e, t, s, n), t.child;
}
function au(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function za(e, t, n, r, s) {
  var a = Xe(n) ? xn : Qe.current;
  return a = Xn(t, a), Gn(t, s), n = Ro(e, t, n, r, a, s), r = Oo(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Wt(e, t, s)) : (Se && r && So(t), t.flags |= 1, Ve(e, t, n, s), t.child);
}
function Ji(e, t, n, r, s) {
  if (Xe(n)) {
    var a = !0;
    Zl(t);
  } else a = !1;
  if (Gn(t, s), t.stateNode === null) Al(e, t), tu(t, n, r), Oa(t, n, r, s), r = !0;
  else if (e === null) {
    var o = t.stateNode, c = t.memoizedProps;
    o.props = c;
    var i = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Xe(n) ? xn : Qe.current, d = Xn(t, d));
    var p = n.getDerivedStateFromProps, g = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (c !== r || i !== d) && Ki(t, o, r, d), Ht = !1;
    var w = t.memoizedState;
    o.state = w, rs(t, r, o, s), i = t.memoizedState, c !== r || w !== i || Ye.current || Ht ? (typeof p == "function" && (Ra(t, n, p, r), i = t.memoizedState), (c = Ht || Hi(t, n, c, r, w, i, d)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = i), o.props = r, o.state = i, o.context = d, r = c) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Pd(e, t), c = t.memoizedProps, d = t.type === t.elementType ? c : yt(t.type, c), o.props = d, g = t.pendingProps, w = o.context, i = n.contextType, typeof i == "object" && i !== null ? i = pt(i) : (i = Xe(n) ? xn : Qe.current, i = Xn(t, i));
    var x = n.getDerivedStateFromProps;
    (p = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (c !== g || w !== i) && Ki(t, o, r, i), Ht = !1, w = t.memoizedState, o.state = w, rs(t, r, o, s);
    var y = t.memoizedState;
    c !== g || w !== y || Ye.current || Ht ? (typeof x == "function" && (Ra(t, n, x, r), y = t.memoizedState), (d = Ht || Hi(t, n, d, r, w, y, i) || !1) ? (p || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, i), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, i)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || c === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = i, r = d) : (typeof o.componentDidUpdate != "function" || c === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Fa(e, t, n, r, a, s);
}
function Fa(e, t, n, r, s, a) {
  au(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && zi(t, n, !1), Wt(e, t, a);
  r = t.stateNode, jp.current = t;
  var c = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Jn(t, e.child, null, a), t.child = Jn(t, null, c, a)) : Ve(e, t, c, a), t.memoizedState = r.state, s && zi(t, n, !0), t.child;
}
function ou(e) {
  var t = e.stateNode;
  t.pendingContext ? Ai(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ai(e, t.context, !1), To(e, t.containerInfo);
}
function ec(e, t, n, r, s) {
  return Zn(), bo(s), t.flags |= 256, Ve(e, t, n, r), t.child;
}
var Wa = { dehydrated: null, treeContext: null, retryLane: 0 };
function $a(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function iu(e, t, n) {
  var r = t.pendingProps, s = je.current, a = !1, o = (t.flags & 128) !== 0, c;
  if ((c = o) || (c = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), c ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), ge(je, s & 1), e === null)
    return Da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = js(o, r, 0, null), e = wn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = $a(n), t.memoizedState = Wa, e) : Fo(t, o));
  if (s = e.memoizedState, s !== null && (c = s.dehydrated, c !== null)) return bp(e, t, o, r, c, s, n);
  if (a) {
    a = r.fallback, o = t.mode, s = e.child, c = s.sibling;
    var i = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = i, t.deletions = null) : (r = sn(s, i), r.subtreeFlags = s.subtreeFlags & 14680064), c !== null ? a = sn(c, a) : (a = wn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? $a(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Wa, r;
  }
  return a = e.child, e = a.sibling, r = sn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Fo(e, t) {
  return t = js({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function kl(e, t, n, r) {
  return r !== null && bo(r), Jn(t, e.child, null, n), e = Fo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function bp(e, t, n, r, s, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ea(Error(W(422))), kl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, s = t.mode, r = js({ mode: "visible", children: r.children }, s, 0, null), a = wn(a, s, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Jn(t, e.child, null, o), t.child.memoizedState = $a(o), t.memoizedState = Wa, a);
  if (!(t.mode & 1)) return kl(e, t, o, null);
  if (s.data === "$!") {
    if (r = s.nextSibling && s.nextSibling.dataset, r) var c = r.dgst;
    return r = c, a = Error(W(419)), r = ea(a, r, void 0), kl(e, t, o, r);
  }
  if (c = (o & e.childLanes) !== 0, qe || c) {
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
      s = s & (r.suspendedLanes | o) ? 0 : s, s !== 0 && s !== a.retryLane && (a.retryLane = s, Ft(e, s), kt(r, e, s, -1));
    }
    return Bo(), r = ea(Error(W(421))), kl(e, t, o, r);
  }
  return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zp.bind(null, e), s._reactRetry = t, null) : (e = a.treeContext, rt = tn(s.nextSibling), lt = t, Se = !0, wt = null, e !== null && (dt[ut++] = Pt, dt[ut++] = Rt, dt[ut++] = _n, Pt = e.id, Rt = e.overflow, _n = t), t = Fo(t, r.children), t.flags |= 4096, t);
}
function tc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pa(e.return, t, n);
}
function ta(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = s);
}
function cu(e, t, n) {
  var r = t.pendingProps, s = r.revealOrder, a = r.tail;
  if (Ve(e, t, r.children, n), r = je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && tc(e, n, t);
      else if (e.tag === 19) tc(e, n, t);
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
  if (ge(je, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (s) {
    case "forwards":
      for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && ls(e) === null && (s = n), n = n.sibling;
      n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), ta(t, !1, s, n, a);
      break;
    case "backwards":
      for (n = null, s = t.child, t.child = null; s !== null; ) {
        if (e = s.alternate, e !== null && ls(e) === null) {
          t.child = s;
          break;
        }
        e = s.sibling, s.sibling = n, n = s, s = e;
      }
      ta(t, !0, n, null, a);
      break;
    case "together":
      ta(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Al(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Wt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Sn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = sn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Cp(e, t, n) {
  switch (t.tag) {
    case 3:
      ou(t), Zn();
      break;
    case 5:
      Rd(t);
      break;
    case 1:
      Xe(t.type) && Zl(t);
      break;
    case 4:
      To(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, s = t.memoizedProps.value;
      ge(ts, r._currentValue), r._currentValue = s;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ge(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? iu(e, t, n) : (ge(je, je.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
      ge(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return cu(e, t, n);
        t.flags |= 128;
      }
      if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ge(je, je.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, su(e, t, n);
  }
  return Wt(e, t, n);
}
var du, Ua, uu, mu;
du = function(e, t) {
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
Ua = function() {
};
uu = function(e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    e = t.stateNode, yn(It.current);
    var a = null;
    switch (n) {
      case "input":
        s = da(e, s), r = da(e, r), a = [];
        break;
      case "select":
        s = Ce({}, s, { value: void 0 }), r = Ce({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        s = fa(e, s), r = fa(e, r), a = [];
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yl);
    }
    ha(n, r);
    var o;
    n = null;
    for (d in s) if (!r.hasOwnProperty(d) && s.hasOwnProperty(d) && s[d] != null) if (d === "style") {
      var c = s[d];
      for (o in c) c.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Dr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var i = r[d];
      if (c = s != null ? s[d] : void 0, r.hasOwnProperty(d) && i !== c && (i != null || c != null)) if (d === "style") if (c) {
        for (o in c) !c.hasOwnProperty(o) || i && i.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in i) i.hasOwnProperty(o) && c[o] !== i[o] && (n || (n = {}), n[o] = i[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = i;
      else d === "dangerouslySetInnerHTML" ? (i = i ? i.__html : void 0, c = c ? c.__html : void 0, i != null && c !== i && (a = a || []).push(d, i)) : d === "children" ? typeof i != "string" && typeof i != "number" || (a = a || []).push(d, "" + i) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Dr.hasOwnProperty(d) ? (i != null && d === "onScroll" && we("scroll", e), a || c === i || (a = [])) : (a = a || []).push(d, i));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
mu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vr(e, t) {
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
function Np(e, t, n) {
  var r = t.pendingProps;
  switch (jo(t), t.tag) {
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
      return Xe(t.type) && Xl(), $e(t), null;
    case 3:
      return r = t.stateNode, er(), xe(Ye), xe(Qe), Do(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Ya(wt), wt = null))), Ua(e, t), $e(t), null;
    case 5:
      Lo(t);
      var s = yn(Br.current);
      if (n = t.type, e !== null && t.stateNode != null) uu(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166));
          return $e(t), null;
        }
        if (e = yn(It.current), xl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Et] = t, r[Qr] = a, e = (t.mode & 1) !== 0, n) {
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
              for (s = 0; s < Sr.length; s++) we(Sr[s], r);
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
              di(r, a), we("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, we("invalid", r);
              break;
            case "textarea":
              mi(r, a), we("invalid", r);
          }
          ha(n, a), s = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var c = a[o];
            o === "children" ? typeof c == "string" ? r.textContent !== c && (a.suppressHydrationWarning !== !0 && wl(r.textContent, c, e), s = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (a.suppressHydrationWarning !== !0 && wl(
              r.textContent,
              c,
              e
            ), s = ["children", "" + c]) : Dr.hasOwnProperty(o) && c != null && o === "onScroll" && we("scroll", r);
          }
          switch (n) {
            case "input":
              ul(r), ui(r, a, !0);
              break;
            case "textarea":
              ul(r), fi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Yl);
          }
          r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Wc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Et] = t, e[Qr] = r, du(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ga(n, r), n) {
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
                for (s = 0; s < Sr.length; s++) we(Sr[s], e);
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
                di(e, r), s = da(e, r), we("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, s = Ce({}, r, { value: void 0 }), we("invalid", e);
                break;
              case "textarea":
                mi(e, r), s = fa(e, r), we("invalid", e);
                break;
              default:
                s = r;
            }
            ha(n, s), c = s;
            for (a in c) if (c.hasOwnProperty(a)) {
              var i = c[a];
              a === "style" ? Qc(e, i) : a === "dangerouslySetInnerHTML" ? (i = i ? i.__html : void 0, i != null && $c(e, i)) : a === "children" ? typeof i == "string" ? (n !== "textarea" || i !== "") && Pr(e, i) : typeof i == "number" && Pr(e, "" + i) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Dr.hasOwnProperty(a) ? i != null && a === "onScroll" && we("scroll", e) : i != null && io(e, a, i, o));
            }
            switch (n) {
              case "input":
                ul(e), ui(e, r, !1);
                break;
              case "textarea":
                ul(e), fi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Vn(e, !!r.multiple, a, !1) : r.defaultValue != null && Vn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Yl);
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
      if (e && t.stateNode != null) mu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(W(166));
        if (n = yn(Br.current), yn(It.current), xl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Et] = t, (a = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
            case 3:
              wl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && wl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Et] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (xe(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Se && rt !== null && t.mode & 1 && !(t.flags & 128)) Id(), Zn(), t.flags |= 98560, a = !1;
        else if (a = xl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(W(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(W(317));
            a[Et] = t;
          } else Zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), a = !1;
        } else wt !== null && (Ya(wt), wt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? De === 0 && (De = 3) : Bo())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return er(), Ua(e, t), e === null && $r(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return Eo(t.type._context), $e(t), null;
    case 17:
      return Xe(t.type) && Xl(), $e(t), null;
    case 19:
      if (xe(je), a = t.memoizedState, a === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) vr(a, !1);
      else {
        if (De !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ls(e), o !== null) {
            for (t.flags |= 128, vr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ge(je, je.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ie() > nr && (t.flags |= 128, r = !0, vr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ls(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), vr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !Se) return $e(t), null;
        } else 2 * Ie() - a.renderingStartTime > nr && n !== 1073741824 && (t.flags |= 128, r = !0, vr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ie(), t.sibling = null, n = je.current, ge(je, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return Vo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function Ep(e, t) {
  switch (jo(t), t.tag) {
    case 1:
      return Xe(t.type) && Xl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return er(), xe(Ye), xe(Qe), Do(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Lo(t), null;
    case 13:
      if (xe(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(W(340));
        Zn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return xe(je), null;
    case 4:
      return er(), null;
    case 10:
      return Eo(t.type._context), null;
    case 22:
    case 23:
      return Vo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sl = !1, Ue = !1, Mp = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ee(e, t, r);
  }
  else n.current = null;
}
function Qa(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var nc = !1;
function Ip(e, t) {
  if (Ca = Kl, e = yd(), ko(e)) {
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
        var o = 0, c = -1, i = -1, d = 0, p = 0, g = e, w = null;
        t: for (; ; ) {
          for (var x; g !== n || s !== 0 && g.nodeType !== 3 || (c = o + s), g !== a || r !== 0 && g.nodeType !== 3 || (i = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (x = g.firstChild) !== null; )
            w = g, g = x;
          for (; ; ) {
            if (g === e) break t;
            if (w === n && ++d === s && (c = o), w === a && ++p === r && (i = o), (x = g.nextSibling) !== null) break;
            g = w, w = g.parentNode;
          }
          g = x;
        }
        n = c === -1 || i === -1 ? null : { start: c, end: i };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Na = { focusedElem: e, selectionRange: n }, Kl = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
  else for (; G !== null; ) {
    t = G;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var k = y.memoizedProps, S = y.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : yt(t.type, k), S);
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
          throw Error(W(163));
      }
    } catch (v) {
      Ee(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return y = nc, nc = !1, y;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var s = r = r.next;
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        s.destroy = void 0, a !== void 0 && Qa(t, n, a);
      }
      s = s.next;
    } while (s !== r);
  }
}
function ks(e, t) {
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
function Va(e) {
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
function fu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, fu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[Qr], delete t[Ia], delete t[mp], delete t[fp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function pu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || pu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ba(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ba(e, t, n), e = e.sibling; e !== null; ) Ba(e, t, n), e = e.sibling;
}
function Ha(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ha(e, t, n), e = e.sibling; e !== null; ) Ha(e, t, n), e = e.sibling;
}
var Ae = null, vt = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) hu(e, t, n), n = n.sibling;
}
function hu(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
    Mt.onCommitFiberUnmount(ps, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ue || Un(n, t);
    case 6:
      var r = Ae, s = vt;
      Ae = null, Vt(e, t, n), Ae = r, vt = s, Ae !== null && (vt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null && (vt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? Gs(e.parentNode, n) : e.nodeType === 1 && Gs(e, n), zr(e)) : Gs(Ae, n.stateNode));
      break;
    case 4:
      r = Ae, s = vt, Ae = n.stateNode.containerInfo, vt = !0, Vt(e, t, n), Ae = r, vt = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        s = r = r.next;
        do {
          var a = s, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Qa(n, t, o), s = s.next;
        } while (s !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (!Ue && (Un(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (c) {
        Ee(n, t, c);
      }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Vt(e, t, n), Ue = r) : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function lc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mp()), t.forEach(function(r) {
      var s = Fp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(s, s));
    });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var s = n[r];
    try {
      var a = e, o = t, c = o;
      e: for (; c !== null; ) {
        switch (c.tag) {
          case 5:
            Ae = c.stateNode, vt = !1;
            break e;
          case 3:
            Ae = c.stateNode.containerInfo, vt = !0;
            break e;
          case 4:
            Ae = c.stateNode.containerInfo, vt = !0;
            break e;
        }
        c = c.return;
      }
      if (Ae === null) throw Error(W(160));
      hu(a, o, s), Ae = null, vt = !1;
      var i = s.alternate;
      i !== null && (i.return = null), s.return = null;
    } catch (d) {
      Ee(s, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) gu(t, e), t = t.sibling;
}
function gu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (gt(t, e), Ct(e), r & 4) {
        try {
          Ir(3, e, e.return), ks(3, e);
        } catch (k) {
          Ee(e, e.return, k);
        }
        try {
          Ir(5, e, e.return);
        } catch (k) {
          Ee(e, e.return, k);
        }
      }
      break;
    case 1:
      gt(t, e), Ct(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (gt(t, e), Ct(e), r & 512 && n !== null && Un(n, n.return), e.flags & 32) {
        var s = e.stateNode;
        try {
          Pr(s, "");
        } catch (k) {
          Ee(e, e.return, k);
        }
      }
      if (r & 4 && (s = e.stateNode, s != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, c = e.type, i = e.updateQueue;
        if (e.updateQueue = null, i !== null) try {
          c === "input" && a.type === "radio" && a.name != null && zc(s, a), ga(c, o);
          var d = ga(c, a);
          for (o = 0; o < i.length; o += 2) {
            var p = i[o], g = i[o + 1];
            p === "style" ? Qc(s, g) : p === "dangerouslySetInnerHTML" ? $c(s, g) : p === "children" ? Pr(s, g) : io(s, p, g, d);
          }
          switch (c) {
            case "input":
              ua(s, a);
              break;
            case "textarea":
              Fc(s, a);
              break;
            case "select":
              var w = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Vn(s, !!a.multiple, x, !1) : w !== !!a.multiple && (a.defaultValue != null ? Vn(
                s,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Vn(s, !!a.multiple, a.multiple ? [] : "", !1));
          }
          s[Qr] = a;
        } catch (k) {
          Ee(e, e.return, k);
        }
      }
      break;
    case 6:
      if (gt(t, e), Ct(e), r & 4) {
        if (e.stateNode === null) throw Error(W(162));
        s = e.stateNode, a = e.memoizedProps;
        try {
          s.nodeValue = a;
        } catch (k) {
          Ee(e, e.return, k);
        }
      }
      break;
    case 3:
      if (gt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        zr(t.containerInfo);
      } catch (k) {
        Ee(e, e.return, k);
      }
      break;
    case 4:
      gt(t, e), Ct(e);
      break;
    case 13:
      gt(t, e), Ct(e), s = e.child, s.flags & 8192 && (a = s.memoizedState !== null, s.stateNode.isHidden = a, !a || s.alternate !== null && s.alternate.memoizedState !== null || (Uo = Ie())), r & 4 && lc(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (d = Ue) || p, gt(t, e), Ue = d) : gt(t, e), Ct(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !p && e.mode & 1) for (G = e, p = e.child; p !== null; ) {
          for (g = G = p; G !== null; ) {
            switch (w = G, x = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ir(4, w, w.return);
                break;
              case 1:
                Un(w, w.return);
                var y = w.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (k) {
                    Ee(r, n, k);
                  }
                }
                break;
              case 5:
                Un(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  ac(g);
                  continue;
                }
            }
            x !== null ? (x.return = w, G = x) : ac(g);
          }
          p = p.sibling;
        }
        e: for (p = null, g = e; ; ) {
          if (g.tag === 5) {
            if (p === null) {
              p = g;
              try {
                s = g.stateNode, d ? (a = s.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (c = g.stateNode, i = g.memoizedProps.style, o = i != null && i.hasOwnProperty("display") ? i.display : null, c.style.display = Uc("display", o));
              } catch (k) {
                Ee(e, e.return, k);
              }
            }
          } else if (g.tag === 6) {
            if (p === null) try {
              g.stateNode.nodeValue = d ? "" : g.memoizedProps;
            } catch (k) {
              Ee(e, e.return, k);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            p === g && (p = null), g = g.return;
          }
          p === g && (p = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      gt(t, e), Ct(e), r & 4 && lc(e);
      break;
    case 21:
      break;
    default:
      gt(
        t,
        e
      ), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pu(n)) {
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
          r.flags & 32 && (Pr(s, ""), r.flags &= -33);
          var a = rc(e);
          Ha(e, a, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, c = rc(e);
          Ba(e, c, o);
          break;
        default:
          throw Error(W(161));
      }
    } catch (i) {
      Ee(e, e.return, i);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Tp(e, t, n) {
  G = e, yu(e);
}
function yu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var s = G, a = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Sl;
      if (!o) {
        var c = s.alternate, i = c !== null && c.memoizedState !== null || Ue;
        c = Sl;
        var d = Ue;
        if (Sl = o, (Ue = i) && !d) for (G = s; G !== null; ) o = G, i = o.child, o.tag === 22 && o.memoizedState !== null ? oc(s) : i !== null ? (i.return = o, G = i) : oc(s);
        for (; a !== null; ) G = a, yu(a), a = a.sibling;
        G = s, Sl = c, Ue = d;
      }
      sc(e);
    } else s.subtreeFlags & 8772 && a !== null ? (a.return = s, G = a) : sc(e);
  }
}
function sc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ue || ks(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
            else {
              var s = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
              r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Qi(t, a, r);
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
              Qi(t, o, n);
            }
            break;
          case 5:
            var c = t.stateNode;
            if (n === null && t.flags & 4) {
              n = c;
              var i = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i.autoFocus && n.focus();
                  break;
                case "img":
                  i.src && (n.src = i.src);
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
                var p = d.memoizedState;
                if (p !== null) {
                  var g = p.dehydrated;
                  g !== null && zr(g);
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
        Ue || t.flags & 512 && Va(t);
      } catch (w) {
        Ee(t, t.return, w);
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
function ac(e) {
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
function oc(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ks(4, t);
          } catch (i) {
            Ee(t, n, i);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (i) {
              Ee(t, s, i);
            }
          }
          var a = t.return;
          try {
            Va(t);
          } catch (i) {
            Ee(t, a, i);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Va(t);
          } catch (i) {
            Ee(t, o, i);
          }
      }
    } catch (i) {
      Ee(t, t.return, i);
    }
    if (t === e) {
      G = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      c.return = t.return, G = c;
      break;
    }
    G = t.return;
  }
}
var Lp = Math.ceil, os = Ut.ReactCurrentDispatcher, Wo = Ut.ReactCurrentOwner, ft = Ut.ReactCurrentBatchConfig, ue = 0, Oe = null, Te = null, ze = 0, nt = 0, Qn = dn(0), De = 0, qr = null, Sn = 0, Ss = 0, $o = 0, Tr = null, Ge = null, Uo = 0, nr = 1 / 0, Lt = null, is = !1, Ka = null, rn = null, jl = !1, Xt = null, cs = 0, Lr = 0, Ga = null, zl = -1, Fl = 0;
function Be() {
  return ue & 6 ? Ie() : zl !== -1 ? zl : zl = Ie();
}
function ln(e) {
  return e.mode & 1 ? ue & 2 && ze !== 0 ? ze & -ze : hp.transition !== null ? (Fl === 0 && (Fl = td()), Fl) : (e = fe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : id(e.type)), e) : 1;
}
function kt(e, t, n, r) {
  if (50 < Lr) throw Lr = 0, Ga = null, Error(W(185));
  tl(e, n, r), (!(ue & 2) || e !== Oe) && (e === Oe && (!(ue & 2) && (Ss |= n), De === 4 && Gt(e, ze)), Ze(e, r), n === 1 && ue === 0 && !(t.mode & 1) && (nr = Ie() + 500, ws && un()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  hf(e, t);
  var r = Hl(e, e === Oe ? ze : 0);
  if (r === 0) n !== null && gi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && gi(n), t === 1) e.tag === 0 ? pp(ic.bind(null, e)) : Nd(ic.bind(null, e)), dp(function() {
      !(ue & 6) && un();
    }), n = null;
    else {
      switch (nd(r)) {
        case 1:
          n = po;
          break;
        case 4:
          n = Jc;
          break;
        case 16:
          n = Bl;
          break;
        case 536870912:
          n = ed;
          break;
        default:
          n = Bl;
      }
      n = bu(n, vu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function vu(e, t) {
  if (zl = -1, Fl = 0, ue & 6) throw Error(W(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = Hl(e, e === Oe ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ds(e, r);
  else {
    t = r;
    var s = ue;
    ue |= 2;
    var a = xu();
    (Oe !== e || ze !== t) && (Lt = null, nr = Ie() + 500, vn(e, t));
    do
      try {
        Rp();
        break;
      } catch (c) {
        wu(e, c);
      }
    while (!0);
    No(), os.current = a, ue = s, Te !== null ? t = 0 : (Oe = null, ze = 0, t = De);
  }
  if (t !== 0) {
    if (t === 2 && (s = _a(e), s !== 0 && (r = s, t = qa(e, s))), t === 1) throw n = qr, vn(e, 0), Gt(e, r), Ze(e, Ie()), n;
    if (t === 6) Gt(e, r);
    else {
      if (s = e.current.alternate, !(r & 30) && !Dp(s) && (t = ds(e, r), t === 2 && (a = _a(e), a !== 0 && (r = a, t = qa(e, a))), t === 1)) throw n = qr, vn(e, 0), Gt(e, r), Ze(e, Ie()), n;
      switch (e.finishedWork = s, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          pn(e, Ge, Lt);
          break;
        case 3:
          if (Gt(e, r), (r & 130023424) === r && (t = Uo + 500 - Ie(), 10 < t)) {
            if (Hl(e, 0) !== 0) break;
            if (s = e.suspendedLanes, (s & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }
            e.timeoutHandle = Ma(pn.bind(null, e, Ge, Lt), t);
            break;
          }
          pn(e, Ge, Lt);
          break;
        case 4:
          if (Gt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - _t(r);
            a = 1 << o, o = t[o], o > s && (s = o), r &= ~a;
          }
          if (r = s, r = Ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Lp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ma(pn.bind(null, e, Ge, Lt), r);
            break;
          }
          pn(e, Ge, Lt);
          break;
        case 5:
          pn(e, Ge, Lt);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return Ze(e, Ie()), e.callbackNode === n ? vu.bind(null, e) : null;
}
function qa(e, t) {
  var n = Tr;
  return e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256), e = ds(e, t), e !== 2 && (t = Ge, Ge = n, t !== null && Ya(t)), e;
}
function Ya(e) {
  Ge === null ? Ge = e : Ge.push.apply(Ge, e);
}
function Dp(e) {
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
function Gt(e, t) {
  for (t &= ~$o, t &= ~Ss, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - _t(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ic(e) {
  if (ue & 6) throw Error(W(327));
  qn();
  var t = Hl(e, 0);
  if (!(t & 1)) return Ze(e, Ie()), null;
  var n = ds(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _a(e);
    r !== 0 && (t = r, n = qa(e, r));
  }
  if (n === 1) throw n = qr, vn(e, 0), Gt(e, t), Ze(e, Ie()), n;
  if (n === 6) throw Error(W(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, Ge, Lt), Ze(e, Ie()), null;
}
function Qo(e, t) {
  var n = ue;
  ue |= 1;
  try {
    return e(t);
  } finally {
    ue = n, ue === 0 && (nr = Ie() + 500, ws && un());
  }
}
function jn(e) {
  Xt !== null && Xt.tag === 0 && !(ue & 6) && qn();
  var t = ue;
  ue |= 1;
  var n = ft.transition, r = fe;
  try {
    if (ft.transition = null, fe = 1, e) return e();
  } finally {
    fe = r, ft.transition = n, ue = t, !(ue & 6) && un();
  }
}
function Vo() {
  nt = Qn.current, xe(Qn);
}
function vn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, cp(n)), Te !== null) for (n = Te.return; n !== null; ) {
    var r = n;
    switch (jo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Xl();
        break;
      case 3:
        er(), xe(Ye), xe(Qe), Do();
        break;
      case 5:
        Lo(r);
        break;
      case 4:
        er();
        break;
      case 13:
        xe(je);
        break;
      case 19:
        xe(je);
        break;
      case 10:
        Eo(r.type._context);
        break;
      case 22:
      case 23:
        Vo();
    }
    n = n.return;
  }
  if (Oe = e, Te = e = sn(e.current, null), ze = nt = t, De = 0, qr = null, $o = Ss = Sn = 0, Ge = Tr = null, gn !== null) {
    for (t = 0; t < gn.length; t++) if (n = gn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var s = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = s, r.next = o;
      }
      n.pending = r;
    }
    gn = null;
  }
  return e;
}
function wu(e, t) {
  do {
    var n = Te;
    try {
      if (No(), Rl.current = as, ss) {
        for (var r = be.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), r = r.next;
        }
        ss = !1;
      }
      if (kn = 0, Re = Le = be = null, Mr = !1, Hr = 0, Wo.current = null, n === null || n.return === null) {
        De = 1, qr = t, Te = null;
        break;
      }
      e: {
        var a = e, o = n.return, c = n, i = t;
        if (t = ze, c.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
          var d = i, p = c, g = p.tag;
          if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var w = p.alternate;
            w ? (p.updateQueue = w.updateQueue, p.memoizedState = w.memoizedState, p.lanes = w.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var x = qi(o);
          if (x !== null) {
            x.flags &= -257, Yi(x, o, c, a, t), x.mode & 1 && Gi(a, d, t), t = x, i = d;
            var y = t.updateQueue;
            if (y === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(i), t.updateQueue = k;
            } else y.add(i);
            break e;
          } else {
            if (!(t & 1)) {
              Gi(a, d, t), Bo();
              break e;
            }
            i = Error(W(426));
          }
        } else if (Se && c.mode & 1) {
          var S = qi(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Yi(S, o, c, a, t), bo(tr(i, c));
            break e;
          }
        }
        a = i = tr(i, c), De !== 4 && (De = 2), Tr === null ? Tr = [a] : Tr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = nu(a, i, t);
              Ui(a, f);
              break e;
            case 1:
              c = i;
              var u = a.type, h = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (rn === null || !rn.has(h)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var v = ru(a, c, t);
                Ui(a, v);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      ku(n);
    } catch (_) {
      t = _, Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xu() {
  var e = os.current;
  return os.current = as, e === null ? as : e;
}
function Bo() {
  (De === 0 || De === 3 || De === 2) && (De = 4), Oe === null || !(Sn & 268435455) && !(Ss & 268435455) || Gt(Oe, ze);
}
function ds(e, t) {
  var n = ue;
  ue |= 2;
  var r = xu();
  (Oe !== e || ze !== t) && (Lt = null, vn(e, t));
  do
    try {
      Pp();
      break;
    } catch (s) {
      wu(e, s);
    }
  while (!0);
  if (No(), ue = n, os.current = r, Te !== null) throw Error(W(261));
  return Oe = null, ze = 0, De;
}
function Pp() {
  for (; Te !== null; ) _u(Te);
}
function Rp() {
  for (; Te !== null && !sf(); ) _u(Te);
}
function _u(e) {
  var t = ju(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? ku(e) : Te = t, Wo.current = null;
}
function ku(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ep(n, t), n !== null) {
        n.flags &= 32767, Te = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        De = 6, Te = null;
        return;
      }
    } else if (n = Np(n, t, nt), n !== null) {
      Te = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function pn(e, t, n) {
  var r = fe, s = ft.transition;
  try {
    ft.transition = null, fe = 1, Op(e, t, n, r);
  } finally {
    ft.transition = s, fe = r;
  }
  return null;
}
function Op(e, t, n, r) {
  do
    qn();
  while (Xt !== null);
  if (ue & 6) throw Error(W(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(W(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (gf(e, a), e === Oe && (Te = Oe = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jl || (jl = !0, bu(Bl, function() {
    return qn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = fe;
    fe = 1;
    var c = ue;
    ue |= 4, Wo.current = null, Ip(e, n), gu(n, e), np(Na), Kl = !!Ca, Na = Ca = null, e.current = n, Tp(n), af(), ue = c, fe = o, ft.transition = a;
  } else e.current = n;
  if (jl && (jl = !1, Xt = e, cs = s), a = e.pendingLanes, a === 0 && (rn = null), df(n.stateNode), Ze(e, Ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
  if (is) throw is = !1, e = Ka, Ka = null, e;
  return cs & 1 && e.tag !== 0 && qn(), a = e.pendingLanes, a & 1 ? e === Ga ? Lr++ : (Lr = 0, Ga = e) : Lr = 0, un(), null;
}
function qn() {
  if (Xt !== null) {
    var e = nd(cs), t = ft.transition, n = fe;
    try {
      if (ft.transition = null, fe = 16 > e ? 16 : e, Xt === null) var r = !1;
      else {
        if (e = Xt, Xt = null, cs = 0, ue & 6) throw Error(W(331));
        var s = ue;
        for (ue |= 4, G = e.current; G !== null; ) {
          var a = G, o = a.child;
          if (G.flags & 16) {
            var c = a.deletions;
            if (c !== null) {
              for (var i = 0; i < c.length; i++) {
                var d = c[i];
                for (G = d; G !== null; ) {
                  var p = G;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, p, a);
                  }
                  var g = p.child;
                  if (g !== null) g.return = p, G = g;
                  else for (; G !== null; ) {
                    p = G;
                    var w = p.sibling, x = p.return;
                    if (fu(p), p === d) {
                      G = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = x, G = w;
                      break;
                    }
                    G = x;
                  }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var k = y.child;
                if (k !== null) {
                  y.child = null;
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
                Ir(9, a, a.return);
            }
            var f = a.sibling;
            if (f !== null) {
              f.return = a.return, G = f;
              break e;
            }
            G = a.return;
          }
        }
        var u = e.current;
        for (G = u; G !== null; ) {
          o = G;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) h.return = o, G = h;
          else e: for (o = u; G !== null; ) {
            if (c = G, c.flags & 2048) try {
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                  ks(9, c);
              }
            } catch (_) {
              Ee(c, c.return, _);
            }
            if (c === o) {
              G = null;
              break e;
            }
            var v = c.sibling;
            if (v !== null) {
              v.return = c.return, G = v;
              break e;
            }
            G = c.return;
          }
        }
        if (ue = s, un(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
          Mt.onPostCommitFiberRoot(ps, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      fe = n, ft.transition = t;
    }
  }
  return !1;
}
function cc(e, t, n) {
  t = tr(n, t), t = nu(e, t, 1), e = nn(e, t, 1), t = Be(), e !== null && (tl(e, 1, t), Ze(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) cc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      cc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
        e = tr(n, e), e = ru(t, e, 1), t = nn(t, e, 1), e = Be(), t !== null && (tl(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ap(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Oe === e && (ze & n) === n && (De === 4 || De === 3 && (ze & 130023424) === ze && 500 > Ie() - Uo ? vn(e, 0) : $o |= n), Ze(e, t);
}
function Su(e, t) {
  t === 0 && (e.mode & 1 ? (t = pl, pl <<= 1, !(pl & 130023424) && (pl = 4194304)) : t = 1);
  var n = Be();
  e = Ft(e, t), e !== null && (tl(e, t, n), Ze(e, n));
}
function zp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Su(e, n);
}
function Fp(e, t) {
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
  r !== null && r.delete(t), Su(e, n);
}
var ju;
ju = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ye.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, Cp(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, Se && t.flags & 1048576 && Ed(t, es, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Al(e, t), e = t.pendingProps;
      var s = Xn(t, Qe.current);
      Gn(t, n), s = Ro(null, t, r, e, s, n);
      var a = Oo();
      return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (a = !0, Zl(t)) : a = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Io(t), s.updater = _s, t.stateNode = s, s._reactInternals = t, Oa(t, r, e, n), t = Fa(null, t, r, !0, a, n)) : (t.tag = 0, Se && a && So(t), Ve(null, t, s, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Al(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = $p(r), e = yt(r, e), s) {
          case 0:
            t = za(null, t, r, e, n);
            break e;
          case 1:
            t = Ji(null, t, r, e, n);
            break e;
          case 11:
            t = Xi(null, t, r, e, n);
            break e;
          case 14:
            t = Zi(null, t, r, yt(r.type, e), n);
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
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), za(e, t, r, s, n);
    case 1:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), Ji(e, t, r, s, n);
    case 3:
      e: {
        if (ou(t), e === null) throw Error(W(387));
        r = t.pendingProps, a = t.memoizedState, s = a.element, Pd(e, t), rs(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          s = tr(Error(W(423)), t), t = ec(e, t, r, n, s);
          break e;
        } else if (r !== s) {
          s = tr(Error(W(424)), t), t = ec(e, t, r, n, s);
          break e;
        } else for (rt = tn(t.stateNode.containerInfo.firstChild), lt = t, Se = !0, wt = null, n = Ld(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Zn(), r === s) {
            t = Wt(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Rd(t), e === null && Da(t), r = t.type, s = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = s.children, Ea(r, s) ? o = null : a !== null && Ea(r, a) && (t.flags |= 32), au(e, t), Ve(e, t, o, n), t.child;
    case 6:
      return e === null && Da(t), null;
    case 13:
      return iu(e, t, n);
    case 4:
      return To(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jn(t, null, r, n) : Ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), Xi(e, t, r, s, n);
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, s = t.pendingProps, a = t.memoizedProps, o = s.value, ge(ts, r._currentValue), r._currentValue = o, a !== null) if (St(a.value, o)) {
          if (a.children === s.children && !Ye.current) {
            t = Wt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var c = a.dependencies;
          if (c !== null) {
            o = a.child;
            for (var i = c.firstContext; i !== null; ) {
              if (i.context === r) {
                if (a.tag === 1) {
                  i = Ot(-1, n & -n), i.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var p = d.pending;
                    p === null ? i.next = i : (i.next = p.next, p.next = i), d.pending = i;
                  }
                }
                a.lanes |= n, i = a.alternate, i !== null && (i.lanes |= n), Pa(
                  a.return,
                  n,
                  t
                ), c.lanes |= n;
                break;
              }
              i = i.next;
            }
          } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (o = a.return, o === null) throw Error(W(341));
            o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Pa(o, n, t), o = a.sibling;
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
      return s = t.type, r = t.pendingProps.children, Gn(t, n), s = pt(s), r = r(s), t.flags |= 1, Ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, s = yt(r, t.pendingProps), s = yt(r.type, s), Zi(e, t, r, s, n);
    case 15:
      return lu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yt(r, s), Al(e, t), t.tag = 1, Xe(r) ? (e = !0, Zl(t)) : e = !1, Gn(t, n), tu(t, r, s), Oa(t, r, s, n), Fa(null, t, r, !0, e, n);
    case 19:
      return cu(e, t, n);
    case 22:
      return su(e, t, n);
  }
  throw Error(W(156, t.tag));
};
function bu(e, t) {
  return Zc(e, t);
}
function Wp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function mt(e, t, n, r) {
  return new Wp(e, t, n, r);
}
function Ho(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function $p(e) {
  if (typeof e == "function") return Ho(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === uo) return 11;
    if (e === mo) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wl(e, t, n, r, s, a) {
  var o = 2;
  if (r = e, typeof e == "function") Ho(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Dn:
      return wn(n.children, s, a, t);
    case co:
      o = 8, s |= 8;
      break;
    case aa:
      return e = mt(12, n, t, s | 2), e.elementType = aa, e.lanes = a, e;
    case oa:
      return e = mt(13, n, t, s), e.elementType = oa, e.lanes = a, e;
    case ia:
      return e = mt(19, n, t, s), e.elementType = ia, e.lanes = a, e;
    case Rc:
      return js(n, s, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Dc:
          o = 10;
          break e;
        case Pc:
          o = 9;
          break e;
        case uo:
          o = 11;
          break e;
        case mo:
          o = 14;
          break e;
        case Bt:
          o = 16, r = null;
          break e;
      }
      throw Error(W(130, e == null ? e : typeof e, ""));
  }
  return t = mt(o, n, t, s), t.elementType = e, t.type = r, t.lanes = a, t;
}
function wn(e, t, n, r) {
  return e = mt(7, e, r, t), e.lanes = n, e;
}
function js(e, t, n, r) {
  return e = mt(22, e, r, t), e.elementType = Rc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function na(e, t, n) {
  return e = mt(6, e, null, t), e.lanes = n, e;
}
function ra(e, t, n) {
  return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Up(e, t, n, r, s) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = As(0), this.expirationTimes = As(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = As(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}
function Ko(e, t, n, r, s, a, o, c, i) {
  return e = new Up(e, t, n, c, i), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = mt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Io(a), e;
}
function Qp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ln, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Cu(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(W(170));
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
    if (Xe(n)) return Cd(e, n, t);
  }
  return t;
}
function Nu(e, t, n, r, s, a, o, c, i) {
  return e = Ko(n, r, !0, e, s, a, o, c, i), e.context = Cu(null), n = e.current, r = Be(), s = ln(n), a = Ot(r, s), a.callback = t ?? null, nn(n, a, s), e.current.lanes = s, tl(e, s, r), Ze(e, r), e;
}
function bs(e, t, n, r) {
  var s = t.current, a = Be(), o = ln(s);
  return n = Cu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ot(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(s, t, o), e !== null && (kt(e, s, o, a), Pl(e, s, o)), o;
}
function us(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Go(e, t) {
  dc(e, t), (e = e.alternate) && dc(e, t);
}
function Vp() {
  return null;
}
var Eu = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qo(e) {
  this._internalRoot = e;
}
Cs.prototype.render = qo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  bs(e, t, null, null);
};
Cs.prototype.unmount = qo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jn(function() {
      bs(null, e, null, null);
    }), t[zt] = null;
  }
};
function Cs(e) {
  this._internalRoot = e;
}
Cs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = sd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && od(e);
  }
};
function Yo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ns(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function uc() {
}
function Bp(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = us(o);
        a.call(d);
      };
    }
    var o = Nu(t, r, e, 0, null, !1, !1, "", uc);
    return e._reactRootContainer = o, e[zt] = o.current, $r(e.nodeType === 8 ? e.parentNode : e), jn(), o;
  }
  for (; s = e.lastChild; ) e.removeChild(s);
  if (typeof r == "function") {
    var c = r;
    r = function() {
      var d = us(i);
      c.call(d);
    };
  }
  var i = Ko(e, 0, !1, null, null, !1, !1, "", uc);
  return e._reactRootContainer = i, e[zt] = i.current, $r(e.nodeType === 8 ? e.parentNode : e), jn(function() {
    bs(t, i, n, r);
  }), i;
}
function Es(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof s == "function") {
      var c = s;
      s = function() {
        var i = us(o);
        c.call(i);
      };
    }
    bs(t, o, e, s);
  } else o = Bp(n, t, e, s, r);
  return us(o);
}
rd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kr(t.pendingLanes);
        n !== 0 && (ho(t, n | 1), Ze(t, Ie()), !(ue & 6) && (nr = Ie() + 500, un()));
      }
      break;
    case 13:
      jn(function() {
        var r = Ft(e, 1);
        if (r !== null) {
          var s = Be();
          kt(r, e, 1, s);
        }
      }), Go(e, 1);
  }
};
go = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Be();
      kt(t, e, 134217728, n);
    }
    Go(e, 134217728);
  }
};
ld = function(e) {
  if (e.tag === 13) {
    var t = ln(e), n = Ft(e, t);
    if (n !== null) {
      var r = Be();
      kt(n, e, t, r);
    }
    Go(e, t);
  }
};
sd = function() {
  return fe;
};
ad = function(e, t) {
  var n = fe;
  try {
    return fe = e, t();
  } finally {
    fe = n;
  }
};
va = function(e, t, n) {
  switch (t) {
    case "input":
      if (ua(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = vs(r);
            if (!s) throw Error(W(90));
            Ac(r), ua(r, s);
          }
        }
      }
      break;
    case "textarea":
      Fc(e, n);
      break;
    case "select":
      t = n.value, t != null && Vn(e, !!n.multiple, t, !1);
  }
};
Hc = Qo;
Kc = jn;
var Hp = { usingClientEntryPoint: !1, Events: [rl, An, vs, Vc, Bc, Qo] }, wr = { findFiberByHostInstance: hn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Kp = { bundleType: wr.bundleType, version: wr.version, rendererPackageName: wr.rendererPackageName, rendererConfig: wr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Yc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: wr.findFiberByHostInstance || Vp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bl.isDisabled && bl.supportsFiber) try {
    ps = bl.inject(Kp), Mt = bl;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hp;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yo(t)) throw Error(W(200));
  return Qp(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!Yo(e)) throw Error(W(299));
  var n = !1, r = "", s = Eu;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Ko(e, 1, !1, null, null, n, !1, r, s), e[zt] = t.current, $r(e.nodeType === 8 ? e.parentNode : e), new qo(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(W(188)) : (e = Object.keys(e).join(","), Error(W(268, e)));
  return e = Yc(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return jn(e);
};
at.hydrate = function(e, t, n) {
  if (!Ns(t)) throw Error(W(200));
  return Es(null, e, t, !0, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!Yo(e)) throw Error(W(405));
  var r = n != null && n.hydratedSources || null, s = !1, a = "", o = Eu;
  if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Nu(t, null, e, 1, n ?? null, s, !1, a, o), e[zt] = t.current, $r(e), r) for (e = 0; e < r.length; e++) n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
    n,
    s
  );
  return new Cs(t);
};
at.render = function(e, t, n) {
  if (!Ns(t)) throw Error(W(200));
  return Es(null, e, t, !1, n);
};
at.unmountComponentAtNode = function(e) {
  if (!Ns(e)) throw Error(W(40));
  return e._reactRootContainer ? (jn(function() {
    Es(null, null, e, !1, function() {
      e._reactRootContainer = null, e[zt] = null;
    });
  }), !0) : !1;
};
at.unstable_batchedUpdates = Qo;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ns(n)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return Es(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function Mu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mu);
    } catch (e) {
      console.error(e);
    }
}
Mu(), Mc.exports = at;
var he = Mc.exports, Iu, mc = he;
Iu = mc.createRoot, mc.hydrateRoot;
var Tu = { exports: {} }, Ms = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gp = m, qp = Symbol.for("react.element"), Yp = Symbol.for("react.fragment"), Xp = Object.prototype.hasOwnProperty, Zp = Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Jp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lu(e, t, n) {
  var r, s = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Xp.call(t, r) && !Jp.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: qp, type: e, key: a, ref: o, props: s, _owner: Zp.current };
}
Ms.Fragment = Yp;
Ms.jsx = Lu;
Ms.jsxs = Lu;
Tu.exports = Ms;
var l = Tu.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var eh = {
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
const th = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ne = (e, t) => {
  const n = m.forwardRef(
    ({
      color: r = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: c = "",
      children: i,
      ...d
    }, p) => m.createElement(
      "svg",
      {
        ref: p,
        ...eh,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(s) : a,
        className: ["lucide", `lucide-${th(e)}`, c].join(" "),
        ...d
      },
      [
        ...t.map(([g, w]) => m.createElement(g, w)),
        ...Array.isArray(i) ? i : [i]
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
const Du = ne("AlertCircle", [
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
const nh = ne("AlertTriangle", [
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
const Pu = ne("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = ne("ArrowUpDown", [
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
const Ru = ne("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = ne("Box", [
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
const sh = ne("Calendar", [
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
const ah = ne("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = ne("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = ne("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ou = ne("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = ne("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ih = ne("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = ne("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = ne("Download", [
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
const dh = ne("Eraser", [
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
const Jo = ne("FileJson", [
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
const uh = ne("FileText", [
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
const mh = ne("Folder", [
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
const fh = ne("Info", [
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
const ph = ne("Lasso", [
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
const Au = ne("LayoutGrid", [
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
const hh = ne("LayoutList", [
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
const gh = ne("Link2Off", [
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
const yh = ne("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = ne("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = ne("Maximize", [
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
const wh = ne("Menu", [
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
const xh = ne("Minimize", [
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
const _h = ne("MoreVertical", [
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
const kh = ne("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zu = ne("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = ne("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = ne("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = ne("RefreshCw", [
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
const Sh = ne("ScanLine", [
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
const bn = ne("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fu = ne("Settings", [
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
const Wu = ne("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = ne("Star", [
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
const jh = ne("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = ne("Tag", [
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
const $t = ne("Trash2", [
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
const bh = ne("Trash", [
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
const Ch = ne("Type", [
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
const Nh = ne("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = ne("Upload", [
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
const Mh = ne("Workflow", [
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
const ye = ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = ne("ZoomIn", [
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
const Th = ne("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = le;
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
const Lh = async () => {
  const e = await le.fetchApi("/meld/home-dir");
  return (await ce(e)).home;
}, et = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  m.useEffect(() => {
    if (!t) return;
    const r = (s) => {
      s.key === "Escape" && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let ms = !1;
const Dh = (e) => {
  ms = e, ms && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Ph = (...e) => {
  ms && console.log("[Meld]", ...e);
}, Rh = (...e) => {
  ms && console.warn("[Meld]", ...e);
}, Oh = (...e) => {
  console.error("[Meld]", ...e);
}, te = {
  log: Ph,
  warn: Rh,
  error: Oh,
  init: Dh
}, $l = async (e = 0, t = 30, n = "", r = "default", s = !1) => {
  const a = await le.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${s ? "&minimal=true" : ""}`
  );
  return ce(a);
}, $u = async (e) => {
  const t = await le.fetchApi(`/meld/image/${e}/details`);
  return ce(t);
}, Ah = async (e, t = !1) => {
  const n = await le.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ce(n);
}, ei = async (e) => {
  const t = await le.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ce(t);
}, Uu = async (e) => {
  const t = await le.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ce(t);
}, pc = async (e, t) => {
  const n = await le.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ce(n);
}, zh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await le.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await ce(r);
  } catch {
    return [];
  }
}, Xa = async (e) => {
  const t = await le.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ce(t);
  } catch {
    return [];
  }
}, Fh = async (e, t) => {
  const n = await le.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ce(n);
}, Wh = async (e, t) => {
  const n = await le.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return ce(n);
}, Za = async (e, t, n) => {
  const r = await le.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ce(r);
}, $h = async (e) => {
  const t = await le.fetchApi(`/meld/image/${e}/workflow`);
  return ce(t);
}, Uh = async (e) => {
  const t = await le.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ce(t);
}, Qh = async (e, t) => {
  const n = await le.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), s = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = s, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(s), document.body.removeChild(a);
}, Vh = async (e, t) => {
  const n = await le.fetchApi("/meld/api/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error(`Failed to download image ${e}`);
  const r = n.headers.get("Content-Disposition");
  let s = `image_${e}.png`;
  if (r != null && r.includes("filename=")) {
    const i = r.match(/filename="?([^"]+)"?/);
    i != null && i[1] && (s = i[1]);
  }
  const a = await n.blob(), o = window.URL.createObjectURL(a), c = document.createElement("a");
  c.href = o, c.download = s, document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(o), document.body.removeChild(c);
}, Bh = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await le.fetchApi(n);
  return ce(r);
}, Hh = async () => {
  const e = await le.fetchApi("/meld/search-suggestions");
  return ce(e);
}, Kh = async () => {
  const e = await le.fetchApi("/meld/search-keywords");
  return ce(e);
}, Gh = async () => {
  const e = await le.fetchApi("/meld/search-config");
  return ce(e);
}, qh = async () => {
  const e = await le.fetchApi("/meld/favorites");
  return ce(e);
}, Yh = async (e, t) => {
  const n = await le.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ce(n);
}, hc = async (e) => {
  const t = await le.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ce(t);
}, Xh = async (e, t, n) => {
  const r = await le.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ce(r);
}, Zh = {
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
}, Qu = async () => {
  let e;
  try {
    const t = await le.fetchApi("/meld/settings");
    e = await ce(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Zh;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Jh = async (e, t) => {
  const n = await le.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ce(n);
}, gc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, p) => {
    const g = typeof d == "function" ? d(t) : d;
    if (!Object.is(g, t)) {
      const w = t;
      t = p ?? (typeof g != "object" || g === null) ? g : Object.assign({}, t, g), n.forEach((x) => x(t, w));
    }
  }, s = () => t, c = { setState: r, getState: s, getInitialState: () => i, subscribe: (d) => (n.add(d), () => n.delete(d)) }, i = t = e(r, s, c);
  return c;
}, eg = (e) => e ? gc(e) : gc, tg = (e) => e;
function ng(e, t = tg) {
  const n = qt.useSyncExternalStore(
    e.subscribe,
    qt.useCallback(() => t(e.getState()), [e, t]),
    qt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return qt.useDebugValue(n), n;
}
const rg = (e) => {
  const t = eg(e), n = (r) => ng(t, r);
  return Object.assign(n, t), n;
}, lg = (e) => rg;
function sg(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var a;
      const o = (i) => i === null ? null : JSON.parse(i, void 0), c = (a = n.getItem(s)) != null ? a : null;
      return c instanceof Promise ? c.then(o) : o(c);
    },
    setItem: (s, a) => n.setItem(s, JSON.stringify(a, void 0)),
    removeItem: (s) => n.removeItem(s)
  };
}
const Ja = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return Ja(r)(n);
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
        return Ja(r)(n);
      }
    };
  }
}, ag = (e, t) => (n, r, s) => {
  let a = {
    storage: sg(() => window.localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, f) => ({
      ...f,
      ...S
    }),
    ...t
  }, o = !1, c = 0;
  const i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let p = a.storage;
  if (!p)
    return e(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...S);
      },
      r,
      s
    );
  const g = () => {
    const S = a.partialize({ ...r() });
    return p.setItem(a.name, {
      state: S,
      version: a.version
    });
  }, w = s.setState;
  s.setState = (S, f) => (w(S, f), g());
  const x = e(
    (...S) => (n(...S), g()),
    r,
    s
  );
  s.getInitialState = () => x;
  let y;
  const k = () => {
    var S, f;
    if (!p) return;
    const u = ++c;
    o = !1, i.forEach((v) => {
      var _;
      return v((_ = r()) != null ? _ : x);
    });
    const h = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (S = r()) != null ? S : x)) || void 0;
    return Ja(p.getItem.bind(p))(a.name).then((v) => {
      if (v)
        if (typeof v.version == "number" && v.version !== a.version) {
          if (a.migrate) {
            const _ = a.migrate(
              v.state,
              v.version
            );
            return _ instanceof Promise ? _.then((j) => [!0, j]) : [!0, _];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, v.state];
      return [!1, void 0];
    }).then((v) => {
      var _;
      if (u !== c)
        return;
      const [j, b] = v;
      if (y = a.merge(
        b,
        (_ = r()) != null ? _ : x
      ), n(y, !0), j)
        return g();
    }).then(() => {
      u === c && (h == null || h(y, void 0), y = r(), o = !0, d.forEach((v) => v(y)));
    }).catch((v) => {
      u === c && (h == null || h(void 0, v));
    });
  };
  return s.persist = {
    setOptions: (S) => {
      a = {
        ...a,
        ...S
      }, S.storage && (p = S.storage);
    },
    clearStorage: () => {
      p == null || p.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => k(),
    hasHydrated: () => o,
    onHydrate: (S) => (i.add(S), () => {
      i.delete(S);
    }),
    onFinishHydration: (S) => (d.add(S), () => {
      d.delete(S);
    })
  }, a.skipHydration || k(), y || x;
}, og = ag, ig = [
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
let Cl = null;
const pe = lg()(
  og(
    (e) => ({
      isOpen: !1,
      slots: ig,
      buckets: {},
      images: {},
      toastMessage: null,
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((s) => {
        const a = { ...s.buckets };
        for (const c in a)
          a[c] = a[c].filter((i) => i !== n);
        a[t] || (a[t] = []), a[t].includes(n) || (a[t] = [...a[t], n]);
        const o = { ...s.images };
        return r && (o[n] = r), { buckets: a, images: o };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var c;
        const s = {
          ...r.buckets,
          [t]: ((c = r.buckets[t]) == null ? void 0 : c.filter((i) => i !== n)) || []
        }, a = Object.values(s).some(
          (i) => i.includes(n)
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
        const r = n.slots.filter((c) => c.id !== t), s = { ...n.buckets };
        delete s[t];
        const a = new Set(Object.values(s).flat()), o = { ...n.images };
        for (const c of Object.keys(o))
          a.has(c) || delete o[c];
        return {
          slots: r,
          buckets: s,
          images: o
        };
      }),
      removeImages: (t) => e((n) => {
        const r = t.map(String), s = new Set(r), a = { ...n.buckets };
        let o = !1;
        for (const [i, d] of Object.entries(a)) {
          const p = d.filter((g) => !s.has(g));
          p.length !== d.length && (a[i] = p, o = !0);
        }
        if (!o) return n;
        const c = { ...n.images };
        for (const i of r)
          delete c[i];
        return { buckets: a, images: c };
      }),
      /**
       * Show toast message for 2.5 seconds.
       * If called multiple times, the latest message overwrites the previous one.
       */
      showToast: (t) => {
        Cl && clearTimeout(Cl), e({ toastMessage: t }), Cl = setTimeout(() => {
          e({ toastMessage: null }), Cl = null;
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
), cg = {
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
function dg(e, t) {
  var n, r, s;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const a = new Set(t.payload), o = e.images.filter((i) => !a.has(i.id)), c = new Set(e.selectedIds);
      for (const i of t.payload)
        c.delete(i);
      return {
        ...e,
        images: o,
        selectedIds: c,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const a = t.payload, o = [...e.images, ...a], c = Array.from(
        new Map(o.map((i) => [i.id, i])).values()
      ).sort((i, d) => d.created_at - i.created_at);
      return {
        ...e,
        images: c,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + a.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const a = t.payload, o = e.images.map(
        (i) => i.id === a.id ? a : i
      ), c = e.lineageImages.map(
        (i) => i.id === a.id ? a : i
      );
      return {
        ...e,
        images: o,
        lineageImages: c
      };
    }
    case "SET_IMAGES": {
      const { images: a, total: o, offset: c } = t.payload;
      let i = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && i !== null && !a.some((p) => p.id === i)) {
        const p = e.images.find((g) => g.id === i) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === i ? e.viewerFallbackImage : void 0);
        p ? d = p : i = null;
      }
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        viewerImageId: i,
        viewerFallbackImage: d,
        pagination: {
          total: o,
          offset: c,
          limit: e.pagination.limit,
          hasMore: c + a.length < o
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: a, total: o, offset: c } = t.payload, i = [...e.images, ...a], d = Array.from(
        new Map(i.map((p) => [p.id, p])).values()
      );
      return {
        ...e,
        images: d,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: o,
          offset: c,
          hasMore: c + a.length < o
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
      const a = new Set(e.selectedIds);
      let o = e.lastSelectedId;
      return a.has(t.payload) ? (a.delete(t.payload), o === t.payload && (o = null)) : (a.add(t.payload), o = t.payload), {
        ...e,
        selectedIds: a,
        lastSelectedId: o
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const p = new Set(e.selectedIds);
        return p.add(t.payload), {
          ...e,
          selectedIds: p,
          lastSelectedId: t.payload
        };
      }
      const a = e.images.findIndex(
        (p) => p.id === e.lastSelectedId
      ), o = e.images.findIndex(
        (p) => p.id === t.payload
      );
      if (a === -1 || o === -1) return e;
      const [c, i] = [
        Math.min(a, o),
        Math.max(a, o)
      ], d = new Set(e.selectedIds);
      for (let p = c; p <= i; p++)
        d.add(e.images[p].id);
      return {
        ...e,
        selectedIds: d,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(
          e.images.map((a) => a.id)
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
      const a = t.payload, o = typeof a == "number" ? a : a.id, c = typeof a == "number" ? "gallery" : a.mode, i = typeof a != "number" && a.mode === "lighttable" ? a.slotId : null;
      let d = !1;
      if (typeof a != "number" && a.initialMaskMode && (typeof a.initialMaskMode == "string" ? d = a.initialMaskMode : d = "run"), d)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: o,
            mode: d
          }
        };
      const p = e.viewerMode === "lineage" && c === "lineage" && e.lineageImages.some((g) => g.id === o);
      return {
        ...e,
        viewerImageId: o,
        viewerMode: c,
        viewerLightTableSlotId: i,
        viewerInitialMaskMode: d,
        lineageImages: p ? e.lineageImages : []
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
      const o = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], c = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
      let i = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (pe.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const y = Number.parseInt(x, 10);
        return e.images.find((k) => k.id === y) || e.lineageImages.find((k) => k.id === y) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (g) => g.exists !== !1 && (e.settings["gallery.show_parent_images"] || !g.has_children || c)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const d = i.findIndex(
        (g) => g.id === e.viewerImageId
      );
      if (d === -1 || d === i.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || d === i.length - 1 && !o)
        return e;
      const p = (d + 1) % i.length;
      return {
        ...e,
        viewerImageId: i[p].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const o = ((s = t.payload) == null ? void 0 : s.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], c = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
      let i = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? i = (pe.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const y = Number.parseInt(x, 10);
        return e.images.find((k) => k.id === y) || e.lineageImages.find((k) => k.id === y) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? i = e.lineageImages : i = e.images.filter(
        (g) => g.exists !== !1 && (e.settings["gallery.show_parent_images"] || !g.has_children || c)
      ), e.viewerImageId === null || i.length === 0)
        return e;
      const d = i.findIndex(
        (g) => g.id === e.viewerImageId
      );
      if (d === -1 || d === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || d === 0 && !o)
        return e;
      const p = (d - 1 + i.length) % i.length;
      return {
        ...e,
        viewerImageId: i[p].id
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
      const a = {
        ...e.settings,
        ...t.payload
      }, o = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (o.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: a,
        pagination: o
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
const Vu = m.createContext(void 0), ug = ({
  children: e
}) => {
  const [t, n] = m.useReducer(dg, cg), r = m.useRef(t.images.length), s = m.useRef(0), a = m.useRef(/* @__PURE__ */ new Map());
  m.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = m.useCallback(
    async (y, k, S) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let h = y;
      for (; h < Math.min(k, f) && S === s.current; )
        try {
          const v = Math.min(u, f - h);
          te.log("Background fetch: starting chunk", {
            offset: h,
            limit: v
          });
          const _ = await $l(
            h,
            v,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== s.current || (n({ type: "APPEND_IMAGES", payload: _ }), h += _.images.length, _.images.length === 0 || h >= _.total))
            break;
          await new Promise((j) => setTimeout(j, 300));
        } catch (v) {
          te.error("Background fetch failed", v);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), c = m.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), k = ++s.current;
    try {
      const S = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      te.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await $l(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), h = performance.now() - y;
      te.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: h.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, k);
    } catch (S) {
      te.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    o
  ]), i = m.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now();
    try {
      const k = r.current, S = t.searchQuery.trim() !== "", f = t.pagination.limit;
      te.log("loadMoreImages: starting fetch", {
        nextOffset: k,
        fetchLimit: f,
        isSearch: S
      });
      const u = await $l(
        k,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), h = performance.now() - y;
      te.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: h.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (k) {
      te.error("loadMoreImages: fetch failed", k), n({
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
  ]), d = m.useCallback(async () => {
    try {
      const y = await qh();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      te.error("Failed to load favorites", y);
    }
  }, []), p = m.useCallback(async () => {
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
  }, [t.selectedIds, t.images, t.viewScope]), g = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await ei(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (k) {
      n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    }
  }, [t.selectedIds, t.viewScope]), w = m.useCallback(
    async (y, k) => {
      try {
        await Jh(y, k), n({ type: "SET_SETTINGS", payload: { [y]: k } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), x = m.useCallback(
    async (y) => {
      const k = t.images.find((h) => h.id === y);
      if (k && !k.is_minimal)
        return k;
      const S = t.lineageImages.find((h) => h.id === y);
      if (S && !S.is_minimal)
        return S;
      const f = a.current.get(y);
      if (f)
        return f;
      const u = (async () => {
        try {
          te.log("fetchFullImageDetails: fetching full data", { id: y });
          const h = await $u(y);
          return n({ type: "UPDATE_IMAGE", payload: h }), h;
        } finally {
          a.current.delete(y);
        }
      })();
      return a.current.set(y, u), u;
    },
    [t.images, t.lineageImages]
  );
  return m.useEffect(() => {
    (async () => {
      try {
        const k = await Qu();
        n({ type: "SET_SETTINGS", payload: k });
      } catch (k) {
        te.error("Failed to load settings", k);
      }
    })();
  }, []), m.useEffect(() => {
    d();
  }, [d]), m.useEffect(() => {
    const y = () => {
      c();
    }, k = (f) => {
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
      }), c();
    };
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", k), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", k), window.removeEventListener("meld-scan-finished", S);
    };
  }, [c, t.scanStatus.progress.total]), m.useEffect(() => {
    c();
  }, [c]), /* @__PURE__ */ l.jsx(
    Vu.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: c,
        loadMoreImages: i,
        refreshFavorites: d,
        deleteSelected: p,
        restoreSelected: g,
        updateSetting: w,
        fetchFullImageDetails: x
      },
      children: e
    }
  );
}, _e = () => {
  const e = m.useContext(Vu);
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
}, ti = async () => {
  const e = await le.fetchApi("/meld/tags");
  return ce(e);
}, mg = async (e) => {
  const t = await le.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ce(t);
}, fg = async (e) => {
  const t = await le.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ce(t);
}, pg = async (e, t) => {
  const n = await le.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ce(n);
}, hg = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await le.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, gg = async (e, t, n = !1, r) => {
  const s = await le.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ce(s);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, yg = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const s = await le.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ce(s);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, vg = async (e, t, n) => {
  const r = await le.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ce(r)).count;
  } catch {
    return 0;
  }
}, wg = async (e) => {
  const t = await le.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ce(t);
}, xg = async () => {
  const e = await le.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ce(e);
}, Bu = () => {
  const { dispatch: e } = _e(), [t, n] = m.useState(() => {
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
        const A = JSON.parse(E);
        return { ...O, ...A, tags: [] };
      } catch {
        return O;
      }
    return O;
  });
  m.useEffect(() => {
    const { tags: E, ...O } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(O));
  }, [t]);
  const [r, s] = m.useState([]), [a, o] = m.useState([]), [c, i] = m.useState(0), [d, p] = m.useState(!1), [g, w] = m.useState([]), [x, y] = m.useState(""), [k, S] = m.useState(!1), [f, u] = m.useState(null), h = m.useRef(!1), v = (E) => {
    E.target === E.currentTarget && (h.current = !0);
  }, _ = (E) => {
    E.target === E.currentTarget && h.current && e({ type: "CLOSE_MODAL" }), h.current = !1;
  };
  m.useEffect(() => {
    (async () => {
      try {
        const O = await Lh();
        n((A) => A.custom_path ? A : { ...A, custom_path: O });
      } catch (O) {
        te.error("Failed to fetch home directory:", O);
      }
    })();
  }, []), m.useEffect(() => {
    const E = new AbortController();
    return (async () => {
      const A = t.type === "custom" ? t.custom_path : t.subfolder;
      if (te.log(
        `loadFolders started. Path: "${A}", Type: "${t.type}"`
      ), t.type === "custom" && !A) {
        te.log("Custom path is empty, skipping load."), s([]), o([]), i(0);
        return;
      }
      p(!0);
      const L = A, C = t.type;
      try {
        te.log("Step 1: Fast load starting...");
        const D = await gg(
          t.type,
          A,
          !0,
          E.signal
        );
        if (E.signal.aborted) {
          te.log("Step 1: Aborted.");
          return;
        }
        te.log(
          `Step 1 complete. Found ${D.folders.length} folders, ${D.images.length} images.`
        ), s(D.folders), o(D.images), i(null);
        const Q = D.folders.map((M) => M.name);
        Q.length > 0 && (te.log(
          `Step 2: Metadata fetch starting for ${Q.length} folders...`
        ), yg(
          C,
          L,
          Q,
          E.signal
        ).then((M) => {
          if (E.signal.aborted) {
            te.log("Step 2: Aborted.");
            return;
          }
          te.log("Step 2: Metadata fetch complete."), s(
            (V) => V.map((de) => {
              const B = M[de.name];
              return B ? { ...de, count: B.count, preview: B.preview } : de;
            })
          );
        }).catch((M) => {
          M.name !== "AbortError" && te.error("Step 2: Metadata fetch failed:", M);
        })), te.log("Step 3: Path image count starting..."), vg(C, L, E.signal).then((M) => {
          if (E.signal.aborted) {
            te.log("Step 3: Aborted.");
            return;
          }
          te.log(`Step 3: Path image count complete: ${M}`), i(M);
        }).catch((M) => {
          M.name !== "AbortError" && te.error("Step 3: Path image count failed:", M);
        });
      } catch (D) {
        if (D.name === "AbortError") {
          te.log("Request aborted.");
          return;
        }
        te.error("Failed to load folders:", D), s([]), o([]), i(0);
      } finally {
        E.signal.aborted || p(!1);
      }
    })(), () => {
      E.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const j = m.useCallback(async () => {
    S(!0);
    try {
      const E = await ti();
      w(E);
    } catch (E) {
      te.error("Failed to fetch tags:", E);
    } finally {
      S(!1);
    }
  }, []);
  m.useEffect(() => {
    j();
  }, [j]), et({
    onEscape: m.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const b = m.useMemo(() => g.filter(
    (E) => E.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(E.name)
  ), [g, x, t.tags]), N = (E) => {
    const O = E.trim();
    O && !t.tags.includes(O) && (n({ ...t, tags: [...t.tags, O] }), y(""));
  }, R = (E) => {
    n({ ...t, tags: t.tags.filter((O) => O !== E) });
  }, P = (E) => {
    E.key === "Enter" && x.trim() && (E.preventDefault(), N(x.trim()));
  }, T = async () => {
    try {
      await wg(t), e({
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
      te.error("Failed to start scan:", E), alert(`Failed to start scan: ${E}`);
    }
  }, U = (E) => {
    if (t.type === "custom") {
      const O = t.custom_path.includes("\\") ? "\\" : "/", A = t.custom_path.endsWith(O) ? `${t.custom_path}${E}` : `${t.custom_path}${O}${E}`;
      n({ ...t, custom_path: A });
    } else {
      const O = t.subfolder ? `${t.subfolder}/${E}` : E;
      n({ ...t, subfolder: O });
    }
  }, J = () => {
    if (t.type === "custom") {
      const E = t.custom_path.includes("\\") ? "\\" : "/", O = t.custom_path.split(E);
      if (O.length > 1) {
        O.pop();
        let A = O.join(E);
        A === "" && E === "/" && (A = "/"), n({ ...t, custom_path: A });
      }
    } else {
      const E = t.subfolder.split("/");
      E.pop(), n({ ...t, subfolder: E.join("/") });
    }
  };
  return he.createPortal(
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
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
                      children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
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
                      /* @__PURE__ */ l.jsx("div", { className: "meld-path-count", children: c === null ? /* @__PURE__ */ l.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${c} images` })
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
                            children: /* @__PURE__ */ l.jsx(ye, { size: 12 })
                          }
                        )
                      ] }, E)) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ l.jsx(bn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ l.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (E) => y(E.target.value),
                            onKeyDown: P
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ l.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(x),
                            children: /* @__PURE__ */ l.jsx(Is, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: k ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? x && /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
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
                        onClick: T,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ l.jsx(Xr, { size: 16 }),
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
                          onClick: J,
                          children: [
                            /* @__PURE__ */ l.jsx(Ou, { size: 16 }),
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
                            ) : /* @__PURE__ */ l.jsx(mh, { size: 16 }) }),
                            /* @__PURE__ */ l.jsx("span", { className: "meld-folder-name", children: E.name }),
                            /* @__PURE__ */ l.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${E.count === null ? "meld-folder-count--loading" : ""}`,
                                children: E.count !== null ? `${E.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ l.jsx(Zo, { size: 14 })
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
                          children: /* @__PURE__ */ l.jsx(ye, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        "img",
                        {
                          src: Je(f),
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
}, _g = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, s] = m.useState("zip"), [a, o] = m.useState(!1), [c, i] = m.useState(!1), d = m.useRef(!1), p = (x) => {
    x.target === x.currentTarget && (d.current = !0);
  }, g = (x) => {
    x.target === x.currentTarget && d.current && (c || n()), d.current = !1;
  };
  et({
    onEscape: () => {
      c || n();
    }
  });
  const w = async () => {
    i(!0);
    try {
      if (r === "zip")
        await Qh(e, a);
      else
        for (const x of e)
          await Vh(x, a), await new Promise((y) => setTimeout(y, 200));
      n(), t == null || t();
    } catch (x) {
      console.error("Download failed:", x), alert("Failed to download images.");
    } finally {
      i(!1);
    }
  };
  return he.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: p,
        onMouseUp: g,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(Yr, { size: 18 }),
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
                disabled: c,
                children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
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
                          disabled: c
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
                          disabled: c
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
                        disabled: c
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
                disabled: c,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: w,
                disabled: c,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: c ? "Downloading..." : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                  /* @__PURE__ */ l.jsx(Yr, { size: 16 }),
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
}, Hu = async () => {
  const e = await le.fetchApi("/meld/workflows");
  return ce(e);
}, Ku = async (e) => {
  const t = await le.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return ce(t);
}, ni = () => ({ executeWorkflow: m.useCallback(
  async (t, n, r, s) => {
    var x, y, k, S, f, u, h;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: s
    });
    const a = await Ku(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = s || null, c = null, i = !1;
    const d = (v) => {
      if (!v) return !1;
      const _ = v.replace(/\s+/g, "");
      return _ === "MeldImageLoader" || _ === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (i = !0, !o) {
        const _ = a.nodes.find(
          (j) => d(j.type)
        );
        _ && (o = String(_.id));
      }
      const v = a.nodes.find(
        (_) => {
          var j;
          return ((j = _.type) == null ? void 0 : j.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      v && (c = String(v.id));
    } else {
      if (!o)
        for (const v in a) {
          const _ = a[v];
          if (d(_.class_type)) {
            o = v;
            break;
          }
        }
      for (const v in a)
        if (((x = a[v].class_type) == null ? void 0 : x.replace(/\s+/g, "")) === "LoadImageMask") {
          c = v;
          break;
        }
    }
    if (console.log("[Meld] Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: c,
      isUIFormat: i
    }), !o)
      throw new Error(
        "Meld Image Loader or Load Image node not found in the selected workflow."
      );
    if (r && !c)
      throw console.warn(
        "[Meld] Mask filename provided but no mask node found in workflow JSON"
      ), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let p = n.filename;
    if (n.subfolder && (p = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (p = `${p} [${n.type}]`), i) {
      const v = window.app, _ = t.replace(/\.json$/i, "");
      let j = !1;
      const b = document.querySelectorAll(".workflow-tab");
      for (const P of Array.from(b)) {
        const T = P.querySelector(".workflow-label"), U = ((y = T == null ? void 0 : T.textContent) == null ? void 0 : y.trim()) || ((k = P.textContent) == null ? void 0 : k.trim()) || "";
        if (U === _ || U === t || U.startsWith(`${_} `) || U.startsWith(`${_}•`)) {
          P.click(), j = !0;
          break;
        }
      }
      j || await v.loadGraphData(a, !0, !0, t), await new Promise((P) => setTimeout(P, 200));
      const N = v.graph._nodes;
      console.log("[Meld] Active graph nodes count:", N.length);
      const R = N.find(
        (P) => String(P.id) === o || d(P.type)
      );
      if (R) {
        const P = (S = R.widgets) == null ? void 0 : S.find((T) => T.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: R.id,
          type: R.type,
          imagePath: p
        }), P && (P.value = p, typeof P.callback == "function" && P.callback(p));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const P = N.find(
          (T) => {
            var U;
            return String(T.id) === c || ((U = T.type) == null ? void 0 : U.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: P == null ? void 0 : P.id,
          maskFilename: r
        }), P) {
          const T = (f = P.widgets) == null ? void 0 : f.find(
            (J) => J.name === "image"
          );
          T && (T.value = `${r} [temp]`);
          const U = (u = P.widgets) == null ? void 0 : u.find(
            (J) => J.name === "channel"
          );
          U && (U.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      v.graph.setDirtyCanvas(!0, !0);
      try {
        await v.queuePrompt(0);
        return;
      } catch (P) {
        throw console.error("Failed to queue workflow:", P), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const g = JSON.parse(JSON.stringify(a));
    g[o].inputs.image = p, r && c && (g[c].inputs.image = `${r} [temp]`, g[c].inputs.channel = "red");
    const w = await le.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: g,
        client_id: le.clientId
      })
    });
    if (!w.ok) {
      const v = await w.json();
      throw new Error(((h = v.error) == null ? void 0 : h.message) || "Failed to queue workflow");
    }
    return await w.json();
  },
  []
) });
function kg(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function Jr(e, t) {
  var i, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = kg(e), s = (p) => {
    if (!p) return !1;
    const g = p.replace(/\s+/g, "").toLowerCase();
    return g === "meldimageloader" || g === "loadimage";
  }, a = n.graph._nodes.filter(
    (p) => s(p.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const p = a.find(
      (g) => String(g.id) === t
    );
    p && (o = p);
  }
  const c = o.widgets.find(
    (p) => p.name === "image"
  );
  return c && (c.value = r, typeof c.callback == "function" && c.callback(r)), (d = (i = n.graph).afterChange) == null || d.call(i), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const Sg = () => {
  const { dispatch: e } = _e();
  return { injectMaskToGraph: m.useCallback(
    (n, r) => {
      var p, g;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), Jr(n);
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
      const o = a[0], c = o.widgets.find(
        (w) => w.name === "image"
      ), i = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        i
      ), c && (c.value = i, typeof c.callback == "function" && c.callback(i));
      const d = o.widgets.find(
        (w) => w.name === "channel"
      );
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (g = (p = s.graph).afterChange) == null || g.call(p), s.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function la(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function jg(e, t, n = 255) {
  const { width: r, height: s } = e, a = document.createElement("canvas");
  a.width = r, a.height = s;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const c = eo(e, [255, 255, 255], 255);
  o.putImageData(c, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const i = o.getImageData(0, 0, r, s), d = new Uint8ClampedArray(r * s);
  for (let p = 0; p < r * s; p++)
    d[p] = i.data[p * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function eo(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: s, height: a } = e, o = new ImageData(s, a), c = o.data;
  for (let i = 0; i < r.length; i++) {
    const d = r[i], p = i * 4;
    d > 0 ? (c[p] = t[0], c[p + 1] = t[1], c[p + 2] = t[2], c[p + 3] = n) : (c[p] = 0, c[p + 1] = 0, c[p + 2] = 0, c[p + 3] = 0);
  }
  return o;
}
function bg(e) {
  return e.data.every((t) => t === 0);
}
const yc = (e) => e === "rect" || e === "ellipse" || e === "lasso", fs = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: s
}) => {
  const { state: a, dispatch: o } = _e(), c = a.images.find(($) => $.id === e), { injectMaskToGraph: i } = Sg(), { executeWorkflow: d } = ni();
  et({ onEscape: s });
  const p = m.useRef(null), g = m.useRef(null), w = m.useRef(null), x = m.useRef(null), [y, k] = m.useState(!1), [S, f] = m.useState(() => {
    const $ = localStorage.getItem("meld-mask-tool");
    return yc($) ? $ : "rect";
  });
  m.useEffect(() => {
    yc(S) && localStorage.setItem("meld-mask-tool", S);
  }, [S]);
  const [u, h] = m.useState({ x: 0, y: 0 }), [v, _] = m.useState({ x: 0, y: 0 }), [j, b] = m.useState([]), [N, R] = m.useState(null), [P, T] = m.useState(!1), [U, J] = m.useState(1), [E, O] = m.useState({ x: 0, y: 0 }), [A, L] = m.useState(!1), [C, D] = m.useState(!1), Q = m.useRef(null), M = m.useCallback(() => {
    const $ = w.current, X = g.current;
    if (!$ || !X) return null;
    const F = X.getBoundingClientRect(), z = $.naturalWidth, I = $.naturalHeight;
    if (!z || !I) return null;
    const K = z / I, H = F.width / F.height;
    let Y, se, oe = 0, Ne = 0;
    return K > H ? (Y = F.width, se = F.width / K, Ne = (F.height - se) / 2) : (se = F.height, Y = F.height * K, oe = (F.width - Y) / 2), {
      left: oe,
      top: Ne,
      width: Y,
      height: se
    };
  }, []), V = m.useCallback(
    ($, X, F, z) => {
      if (!$) return X;
      const I = $.getBoundingClientRect(), K = I.width / 2, H = I.height / 2, Y = {
        x: (K - X.x) / F,
        y: (H - X.y) / F
      };
      return { x: K - Y.x * z, y: H - Y.y * z };
    },
    []
  ), de = m.useCallback(() => {
    J(($) => {
      const X = Math.min($ * 1.2, 20);
      return O(
        (F) => V(g.current, F, $, X)
      ), X;
    });
  }, [V]), B = m.useCallback(() => {
    J(($) => {
      const X = Math.max(0.1, $ / 1.2);
      return O(
        (F) => V(g.current, F, $, X)
      ), X;
    });
  }, [V]), ae = m.useCallback(() => {
    const $ = p.current;
    if (!$) return;
    const X = $.getContext("2d");
    if (!X) return;
    X.clearRect(0, 0, $.width, $.height);
    const F = getComputedStyle(document.documentElement), z = F.getPropertyValue("--comfy-input-bg-active") || F.getPropertyValue("--comfy-input-bg") || F.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", I = M();
    if (x.current && I && (X.save(), X.globalAlpha = 0.5, X.drawImage(
      x.current,
      I.left,
      I.top,
      I.width,
      I.height
    ), X.restore()), y) {
      const K = Math.min(u.x, v.x), H = Math.min(u.y, v.y), Y = Math.abs(u.x - v.x), se = Math.abs(u.y - v.y);
      if (X.save(), X.globalAlpha = 0.3, X.fillStyle = z, X.strokeStyle = "white", X.lineWidth = 2, X.setLineDash([5, 5]), X.beginPath(), S === "rect")
        X.rect(K, H, Y, se);
      else if (S === "ellipse") {
        const oe = K + Y / 2, Ne = H + se / 2;
        X.ellipse(oe, Ne, Y / 2, se / 2, 0, 0, 2 * Math.PI);
      } else if (S === "lasso" && j.length > 1) {
        X.moveTo(j[0].x, j[0].y);
        for (let oe = 1; oe < j.length; oe++)
          X.lineTo(j[oe].x, j[oe].y);
        X.closePath();
      }
      X.fill(), X.globalAlpha = 1, X.stroke(), X.restore();
    }
  }, [
    y,
    u,
    v,
    S,
    j,
    M
  ]), [q, me] = m.useState([]), Me = m.useMemo(() => q.length > 0 ? q[q.length - 1] : w.current ? la(
    w.current.naturalWidth,
    w.current.naturalHeight
  ) : null, [q]);
  m.useEffect(() => {
    var $;
    ($ = w.current) != null && $.naturalWidth && q.length === 0 && me([
      la(
        w.current.naturalWidth,
        w.current.naturalHeight
      )
    ]);
  }, [q.length]);
  const re = m.useRef(!1), ee = m.useRef(0), tt = ($) => {
    $.target === $.currentTarget && (re.current = !0);
  }, Pe = ($) => {
    $.target === $.currentTarget && re.current && !y && s(), re.current = !1;
  };
  m.useEffect(() => {
    if (!Me) return;
    x.current || (x.current = document.createElement("canvas"));
    const $ = x.current;
    $.width = Me.width, $.height = Me.height;
    const X = $.getContext("2d");
    if (!X) return;
    const F = eo(Me, [255, 255, 255], 255);
    X.putImageData(F, 0, 0), ae();
  }, [Me, ae]), m.useEffect(() => {
    const $ = g.current;
    if (!$) return;
    const X = (F) => {
      F.preventDefault();
      const z = F.deltaY > 0 ? 1 / 1.1 : 1.1;
      J((I) => {
        const K = Math.min(Math.max(0.1, I * z), 20);
        return O((H) => {
          const Y = $.getBoundingClientRect(), se = F.clientX - Y.left, oe = F.clientY - Y.top, Ne = {
            x: (se - H.x) / I,
            y: (oe - H.y) / I
          };
          return {
            x: se - Ne.x * K,
            y: oe - Ne.y * K
          };
        }), K;
      });
    };
    return $.addEventListener("wheel", X, { passive: !1 }), () => $.removeEventListener("wheel", X);
  }, []), m.useEffect(() => {
    if (!C) return;
    const $ = (F) => {
      if (Q.current) {
        const z = F.clientX - Q.current.clientX, I = F.clientY - Q.current.clientY;
        O({
          x: Q.current.panX + z,
          y: Q.current.panY + I
        });
      }
    }, X = () => {
      D(!1), Q.current = null;
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", X), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", X);
    };
  }, [C]), m.useEffect(() => {
    const $ = () => {
      g.current && p.current && (p.current.width = g.current.clientWidth, p.current.height = g.current.clientHeight, ae());
    }, X = new ResizeObserver($);
    return g.current && X.observe(g.current), $(), () => X.disconnect();
  }, [ae]);
  const it = ($) => {
    var oe;
    const X = $.button === 2, F = $.button === 1, z = A && $.button === 0;
    if (X || F || z) {
      $.preventDefault(), $.stopPropagation(), Q.current = {
        panX: E.x,
        panY: E.y,
        clientX: $.clientX,
        clientY: $.clientY
      }, D(!0);
      return;
    }
    if ($.button !== 0 || y || P || Date.now() - ee.current < 100)
      return;
    $.preventDefault();
    const I = M(), K = (oe = g.current) == null ? void 0 : oe.getBoundingClientRect();
    if (!I || !K) return;
    k(!0);
    const H = {
      x: ($.clientX - K.left - E.x) / U,
      y: ($.clientY - K.top - E.y) / U
    }, Y = Math.max(
      I.left,
      Math.min(H.x, I.left + I.width)
    ), se = Math.max(
      I.top,
      Math.min(H.y, I.top + I.height)
    );
    h({ x: Y, y: se }), _({ x: Y, y: se }), b(S === "lasso" ? [{ x: Y, y: se }] : []), R(null);
  };
  m.useEffect(() => {
    if (!y) return;
    const $ = (F) => {
      var se;
      const z = M(), I = (se = g.current) == null ? void 0 : se.getBoundingClientRect();
      if (!z || !I) return;
      const K = {
        x: (F.clientX - I.left - E.x) / U,
        y: (F.clientY - I.top - E.y) / U
      }, H = Math.max(
        z.left,
        Math.min(K.x, z.left + z.width)
      ), Y = Math.max(
        z.top,
        Math.min(K.y, z.top + z.height)
      );
      _({ x: H, y: Y }), S === "lasso" && b((oe) => [...oe, { x: H, y: Y }]);
    }, X = (F) => {
      var K;
      const z = M(), I = (K = g.current) == null ? void 0 : K.getBoundingClientRect();
      if (z && I && Me && w.current) {
        const H = {
          x: (F.clientX - I.left - E.x) / U,
          y: (F.clientY - I.top - E.y) / U
        }, Y = Math.max(
          z.left,
          Math.min(H.x, z.left + z.width)
        ), se = Math.max(
          z.top,
          Math.min(H.y, z.top + z.height)
        ), oe = Math.min(u.x, Y), Ne = Math.min(u.y, se), ke = Math.abs(u.x - Y), ve = Math.abs(u.y - se), bt = S === "lasso";
        if (ke > 5 || ve > 5 || bt && j.length > 2) {
          const km = w.current.naturalWidth, Sm = w.current.naturalHeight, En = km / z.width, Mn = Sm / z.height, jm = jg(Me, (mn) => {
            if (S === "rect") {
              const In = (oe - z.left) * En, Qt = (Ne - z.top) * Mn, ol = ke * En, il = ve * Mn;
              mn.rect(In, Qt, ol, il);
            } else if (S === "ellipse") {
              const In = (oe - z.left) * En, Qt = (Ne - z.top) * Mn, ol = ke * En, il = ve * Mn, bm = In + ol / 2, Cm = Qt + il / 2;
              mn.ellipse(
                bm,
                Cm,
                ol / 2,
                il / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (S === "lasso" && j.length > 2) {
              const In = j[0];
              mn.moveTo(
                (In.x - z.left) * En,
                (In.y - z.top) * Mn
              );
              for (let Qt = 1; Qt < j.length; Qt++)
                mn.lineTo(
                  (j[Qt].x - z.left) * En,
                  (j[Qt].y - z.top) * Mn
                );
              mn.closePath();
            }
          });
          me((mn) => [...mn, jm]);
        }
      }
      ee.current = Date.now(), k(!1), b([]);
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", X), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", X);
    };
  }, [
    y,
    u.x,
    u.y,
    M,
    Me,
    S,
    j,
    E.x,
    E.y,
    U
  ]);
  const jt = m.useCallback(() => {
    q.length > 1 && me(($) => $.slice(0, -1));
  }, [q.length]);
  m.useEffect(() => {
    const $ = (z) => {
      if (!z) return !1;
      const I = z, K = I.tagName;
      return K === "INPUT" || K === "TEXTAREA" || K === "BUTTON" || K === "SELECT" || K === "A" || I.isContentEditable || I.tabIndex != null && I.tabIndex >= 0;
    }, X = (z) => {
      z.code === "Space" && !z.repeat && ($(z.target) || (z.preventDefault(), L(!0))), (z.metaKey || z.ctrlKey) && z.key.toLowerCase() === "z" && !z.shiftKey ? (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), jt()) : z.key === "Escape" && (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), s(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, F = (z) => {
      z.code === "Space" && ($(z.target) || (z.preventDefault(), L(!1)));
    };
    return window.addEventListener("keydown", X, { capture: !0 }), window.addEventListener("keyup", F, { capture: !0 }), () => {
      window.removeEventListener("keydown", X, { capture: !0 }), window.removeEventListener("keyup", F, { capture: !0 });
    };
  }, [jt, s]);
  const ir = () => {
    if (w.current) {
      const $ = la(
        w.current.naturalWidth,
        w.current.naturalHeight
      );
      me((X) => [...X, $]);
    }
  }, cr = async () => {
    if (!Me || !w.current) return null;
    T(!0);
    try {
      const { width: $, height: X } = Me, F = document.createElement("canvas");
      F.width = $, F.height = X;
      const z = F.getContext("2d");
      if (!z) return null;
      const I = eo(Me, [255, 255, 255], 255);
      z.putImageData(I, 0, 0);
      const K = await new Promise(
        (ke) => F.toBlob(ke, "image/png")
      );
      if (!K) return null;
      const Y = `meld_mask_${Date.now()}.png`, se = new File([K], Y, { type: "image/png" }), oe = new FormData();
      oe.append("image", se), oe.append("type", "temp"), oe.append("overwrite", "true");
      const Ne = await le.fetchApi("/upload/image", {
        method: "POST",
        body: oe
      });
      return Ne.ok ? (await Ne.json()).name : null;
    } catch ($) {
      return console.error("[Meld] Error uploading mask:", $), null;
    } finally {
      T(!1);
    }
  }, dr = async () => {
    if (!c) return;
    const $ = await cr();
    $ && i(c, $) && (s(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, sl = async () => {
    if (!c) return;
    const $ = await cr();
    $ && (t === "run_sequence" && n ? (await d(
      n.workflowName,
      c,
      $,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [c],
        maskFilename: $,
        onSuccess: r
      }
    }));
  }, ur = m.useMemo(
    () => Me && !bg(Me),
    [Me]
  );
  return c ? /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: tt,
      onMouseUp: Pe,
      role: "presentation",
      children: /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: ($) => $.stopPropagation(),
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ l.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ l.jsx("button", { className: "meld-modal-close", onClick: s, type: "button", children: /* @__PURE__ */ l.jsx(ye, { size: 20 }) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "rect" ? "active" : ""}`,
                    onClick: () => f("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(Wu, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "ellipse" ? "active" : ""}`,
                    onClick: () => f("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(ih, { size: 18 }),
                      /* @__PURE__ */ l.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "lasso" ? "active" : ""}`,
                    onClick: () => f("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ l.jsx(ph, { size: 18 }),
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
                    onClick: B,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ l.jsx(Th, { size: 18 })
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      J(1), O({ x: 0, y: 0 });
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
                      Math.round(U * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: de,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ l.jsx(Ih, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  ref: g,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: it,
                  onContextMenu: ($) => $.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: C ? "grabbing" : A ? "grab" : "crosshair"
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
                            src: Je(c),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: ($) => $.preventDefault()
                          }
                        ),
                        /* @__PURE__ */ l.jsx(
                          "canvas",
                          {
                            ref: p,
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
                      onClick: dr,
                      disabled: !ur || P,
                      type: "button",
                      children: [
                        P ? /* @__PURE__ */ l.jsx(fc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Xo, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: sl,
                      disabled: !ur || P,
                      type: "button",
                      children: [
                        P ? /* @__PURE__ */ l.jsx(fc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ l.jsx(Xr, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: jt,
                      disabled: q.length <= 1 || P,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ l.jsx(Nh, { size: 16 }),
                        /* @__PURE__ */ l.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: ir,
                      disabled: !ur || P,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ l.jsx(ye, { size: 16 }),
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
}, Cg = () => {
  const { state: e, dispatch: t, updateSetting: n } = _e(), [r, s] = m.useState("Gallery"), [a, o] = m.useState({
    ...e.settings
  }), [c, i] = m.useState(
    {}
  ), [d, p] = m.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [g, w] = m.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, y] = m.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [k, S] = m.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, u] = m.useState(e.settings["gallery.trash_retention_days"].toString()), [h, v] = m.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [_, j] = m.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, N] = m.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [R, P] = m.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    T,
    U
  ] = m.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    J,
    E
  ] = m.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [O, A] = m.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: s,
    localSettings: a,
    setLocalSettings: o,
    shortcutErrors: c,
    setShortcutErrors: i,
    handleClose: async () => {
      const B = Object.keys(a).filter(
        (ae) => a[ae] !== e.settings[ae] && !c[ae]
      );
      if (B.length > 0)
        for (const ae of B)
          await n(ae, a[ae]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (B, ae) => {
      o((q) => ({
        ...q,
        [B]: !ae
      }));
    },
    handleNumberChange: (B, ae, q, me) => {
      B === "gallery.initial_load_count" ? p(ae) : B === "gallery.max_load_count" ? w(ae) : B === "gallery.lineage_max_depth" ? y(ae) : B === "viewer.thumbnail_window_size" ? S(ae) : B === "gallery.trash_retention_days" ? u(ae) : B === "gallery.auto_link_phash_threshold" ? v(ae) : B === "gallery.suggest_phash_threshold" ? j(ae) : B === "viewer.details.max_positive_prompt_lines" ? N(ae) : B === "viewer.details.max_negative_prompt_lines" ? P(ae) : B === "fullscreen.details.max_positive_prompt_lines" ? U(ae) : B === "fullscreen.details.max_negative_prompt_lines" ? E(ae) : B === "sidebar.thumbnail_size" && A(ae);
      const Me = Number.parseInt(ae, 10);
      if (!Number.isNaN(Me)) {
        let re = Me;
        q !== void 0 && re < q && (re = q), me !== void 0 && re > me && (re = me), o((ee) => ({
          ...ee,
          [B]: re
        }));
      }
    },
    handleNumberBlur: (B) => {
      B.key === "gallery.initial_load_count" ? p(
        a["gallery.initial_load_count"].toString()
      ) : B.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : B.key === "gallery.lineage_max_depth" ? y(
        a["gallery.lineage_max_depth"].toString()
      ) : B.key === "viewer.thumbnail_window_size" ? S(
        a["viewer.thumbnail_window_size"].toString()
      ) : B.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : B.key === "gallery.auto_link_phash_threshold" ? v(
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
      ) : B.key === "sidebar.thumbnail_size" && A(a["sidebar.thumbnail_size"].toString());
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
      })), i({});
    },
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    validateShortcut: (B) => B.trim() ? B.trim().split(/\s+/).every((q) => !!(q === "next" || q === "prev" || q === "delete" || q.startsWith("tag:") && q.length > 4 || q.startsWith("-tag:") && q.length > 5 || q.startsWith("tag-toggle:") && q.length > 11)) : !0,
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: g,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: k,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: h,
    suggestPhashThresholdInput: _,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: R,
    fullscreenMaxPositivePromptLinesInput: T,
    fullscreenMaxNegativePromptLinesInput: J,
    thumbnailSizeInput: O
  };
}, Z = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ l.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Ng = ({
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
      Z,
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
      Z,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (c) => t((i) => ({
              ...i,
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
      Z,
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
      Z,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (c) => t((i) => ({
              ...i,
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
      Z,
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
      Z,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (c) => t((i) => ({
              ...i,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (c) => t((i) => ({
              ...i,
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
      Z,
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
    /* @__PURE__ */ l.jsx(
      Z,
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
function Tt({
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
function Gu() {
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
function qu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Yu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Xu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Zu(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ l.jsx(Gu, {})
  ] });
}
function Ju(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function em(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ l.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ l.jsx(Gu, {})
  ] });
}
function tm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ l.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function nm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function rm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ l.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 15h6" })
  ] });
}
function lm(e) {
  return /* @__PURE__ */ l.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ l.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ l.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ l.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ l.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const sm = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: qu
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Ju
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: em
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Xu },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Zu
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Yu
  },
  { id: "edit_tags", label: "Edit Tags", icon: nm },
  { id: "edit_notes", label: "Edit Notes", icon: rm },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: tm
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: lm
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: $t }
], Eg = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  thumbnailSizeInput: a,
  initialLoadCountInput: o,
  maxLoadCountInput: c
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ l.jsx(
      Z,
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
            onChange: (i) => r(
              "sidebar.thumbnail_size",
              i.target.value,
              50,
              500
            ),
            onBlur: () => s({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Z,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (i) => t((d) => ({
              ...d,
              "sidebar.show_filename": i.target.value
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
      {
        label: "Show User Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_user_notes"],
            onChange: (i) => t((d) => ({
              ...d,
              "sidebar.show_user_notes": i.target.value
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
    /* @__PURE__ */ l.jsx(Z, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ l.jsxs("label", { className: "meld-switch", children: [
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
      Z,
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
      Z,
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
      Z,
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
            onChange: (i) => r(
              "gallery.initial_load_count",
              i.target.value,
              10,
              1e3
            ),
            onBlur: () => s({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Z,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 10,
            max: 1e6,
            onChange: (i) => r(
              "gallery.max_load_count",
              i.target.value,
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
    [1, 2, 3].map((i) => /* @__PURE__ */ l.jsx(
      Z,
      {
        label: `Quick Shortcut Slot ${i}`,
        description: `Choose an action for shortcut slot ${i}.`,
        children: /* @__PURE__ */ l.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${i}`],
            onChange: (d) => t((p) => ({
              ...p,
              [`gallery.quick_shortcut.${i}`]: d.target.value
            })),
            children: sm.map((d) => /* @__PURE__ */ l.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      i
    ))
  ] })
] }), Mg = () => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
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
] }), Ig = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: s,
  handleToggle: a,
  handleResetShortcuts: o
}) => {
  const c = [
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
      c.map((i, d) => /* @__PURE__ */ l.jsx(
        Z,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[i] ? "meld-text-input--error" : ""}`,
              value: e[i] || "",
              onChange: (p) => {
                t((g) => ({
                  ...g,
                  [i]: p.target.value
                }));
              },
              onBlur: () => {
                const p = s(
                  e[i] || ""
                );
                r((g) => ({
                  ...g,
                  [i]: !p
                }));
              }
            }
          )
        },
        i
      )),
      /* @__PURE__ */ l.jsx(
        Z,
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
      Z,
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
}, Tg = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: s,
  handleViewTrash: a,
  lineageMaxDepthInput: o,
  trashRetentionDaysInput: c,
  autoLinkPhashThresholdInput: i,
  suggestPhashThresholdInput: d
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ l.jsx(
      Z,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (p) => s((g) => ({
              ...g,
              "gallery.matching_strategy": p.target.value
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
      Z,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 0,
            max: 100,
            onChange: (p) => t(
              "gallery.auto_link_phash_threshold",
              p.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Z,
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
            onChange: (p) => t(
              "gallery.suggest_phash_threshold",
              p.target.value,
              0,
              100
            ),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Z,
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
      Z,
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
            onChange: (p) => t(
              "gallery.lineage_max_depth",
              p.target.value,
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
      Z,
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
            onChange: (p) => t(
              "gallery.trash_retention_days",
              p.target.value,
              0,
              365
            ),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Z,
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
] }), Lg = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: s,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: o,
  maxNegativePromptLinesInput: c
}) => /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ l.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ l.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ l.jsx(
      Z,
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
      Z,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (i) => t((d) => ({
              ...d,
              "viewer.small_image_mode": i.target.value
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
      Z,
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
      Z,
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
      Z,
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
            onChange: (i) => r(
              "viewer.thumbnail_window_size",
              i.target.value,
              1,
              1e4
            ),
            onBlur: () => s({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx(
      Z,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (i) => t((d) => ({
              ...d,
              "viewer.delete_mode": i.target.value
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
      Z,
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
      Z,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (i) => t((d) => ({
              ...d,
              "viewer.details.show_filename": i.target.value
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
      Z,
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
            onChange: (i) => r(
              "viewer.details.max_positive_prompt_lines",
              i.target.value,
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
      Z,
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
      Z,
      {
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ l.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_user_notes"],
            onChange: (i) => t((d) => ({
              ...d,
              "viewer.details.show_user_notes": i.target.value
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
      Z,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 1,
            max: 100,
            onChange: (i) => r(
              "viewer.details.max_negative_prompt_lines",
              i.target.value,
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
      Z,
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
] }), am = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: s,
    setShortcutErrors: a,
    handleClose: o,
    handleToggle: c,
    handleNumberChange: i,
    handleNumberBlur: d,
    handleResetShortcuts: p,
    handleViewTrash: g,
    validateShortcut: w,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: y,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: h,
    maxPositivePromptLinesInput: v,
    maxNegativePromptLinesInput: _,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: b,
    thumbnailSizeInput: N
  } = Cg();
  et({ onEscape: o });
  const R = m.useRef(!1), P = (E) => {
    E.target === E.currentTarget && (R.current = !0);
  }, T = (E) => {
    E.target === E.currentTarget && R.current && o(), R.current = !1;
  }, U = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], J = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ l.jsx(
          Tg,
          {
            localSettings: n,
            handleNumberChange: i,
            handleNumberBlur: d,
            handleToggle: c,
            setLocalSettings: r,
            handleViewTrash: g,
            lineageMaxDepthInput: k,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: h
          }
        );
      case "Gallery":
        return /* @__PURE__ */ l.jsx(
          Eg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: c,
            handleNumberChange: i,
            handleNumberBlur: d,
            thumbnailSizeInput: N,
            initialLoadCountInput: x,
            maxLoadCountInput: y
          }
        );
      case "View":
        return /* @__PURE__ */ l.jsx(
          Lg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: c,
            handleNumberChange: i,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: S,
            maxPositivePromptLinesInput: v,
            maxNegativePromptLinesInput: _
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ l.jsx(
          Ng,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: c,
            handleNumberChange: i,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: b
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ l.jsx(
          Ig,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: s,
            setShortcutErrors: a,
            validateShortcut: w,
            handleToggle: c,
            handleResetShortcuts: p
          }
        );
      case "Information":
        return /* @__PURE__ */ l.jsx(Mg, {});
      default:
        return null;
    }
  };
  return he.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: P,
        onMouseUp: T,
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
                    children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
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
                /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: J() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, xt = "none", om = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: s, refreshImages: a } = _e(), [o, c] = m.useState([]), [i, d] = m.useState(t), [p, g] = m.useState(""), [w, x] = m.useState(!0), [y, k] = m.useState(!1), S = m.useRef(null), f = e.length > 1, u = m.useRef(!1), h = (T) => {
    T.target === T.currentTarget && (u.current = !0);
  }, v = (T) => {
    T.target === T.currentTarget && u.current && n(), u.current = !1;
  }, _ = m.useCallback(async () => {
    x(!0);
    try {
      const T = await ti();
      c(T);
    } catch (T) {
      console.error("Failed to fetch tags:", T);
    } finally {
      x(!1);
    }
  }, []);
  m.useEffect(() => {
    _();
  }, [_]), m.useEffect(() => {
    S.current && S.current.focus();
  }, []), et({ onEscape: n });
  const j = m.useMemo(() => o.filter(
    (T) => T.name.toLowerCase().includes(p.toLowerCase()) && !i.includes(T.name)
  ), [o, p, i]), b = (T) => {
    const U = T.trim();
    if (U.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    U && !i.includes(U) && (d([...i, U]), g(""));
  }, N = (T) => {
    d(i.filter((U) => U !== T));
  }, R = async () => {
    k(!0);
    try {
      if (f) {
        const T = i.filter((J) => !t.includes(J)), U = t.filter(
          (J) => !i.includes(J)
        );
        await Za(e, T, U);
      } else
        await Fh(e[0], i);
      await a(), s({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (T) {
      console.error("Failed to update tags:", T), alert("Failed to update tags.");
    } finally {
      k(!1);
    }
  }, P = (T) => {
    T.key === "Enter" && p.trim() && (T.preventDefault(), T.stopPropagation(), b(p.trim()));
  };
  return he.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: h,
        onMouseUp: v,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (T) => T.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(or, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(ye, { size: 20 }) })
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
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-selected", children: i.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : i.map((T) => /* @__PURE__ */ l.jsxs("span", { className: "meld-tag-edit-badge", children: [
                T,
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => N(T),
                    children: /* @__PURE__ */ l.jsx(ye, { size: 12 })
                  }
                )
              ] }, T)) })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ l.jsx(bn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: p,
                    onChange: (T) => g(T.target.value),
                    onKeyDown: P
                  }
                ),
                p.trim() && !i.includes(p.trim()) && /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(p),
                    children: [
                      /* @__PURE__ */ l.jsx(Is, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? p ? /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : j.map((T) => /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => b(T.name),
                  children: T.name
                },
                T.id
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
}, Ts = (e, t) => {
  const n = m.useCallback(async (x) => {
    try {
      const y = await $h(x.id);
      return y.workflow ? (await window.app.loadGraphData(
        y.workflow
      ), te.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (y) {
      return te.error("Error restoring workflow:", y), alert("Failed to restore workflow."), !1;
    }
  }, []), r = m.useCallback(async (x) => {
    try {
      const y = await Uh(x.id), k = y.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", S = window.app, u = window.LiteGraph.createNode(k);
      if (!u)
        return console.error(`Node type ${k} not found.`), alert(
          `Node type ${k} not found. Please make sure the Meld Unified Loader node is installed.`
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
        for (const [b, N] of Object.entries(h)) {
          const R = y[b];
          if (R != null && R !== "") {
            const P = u.widgets.find(
              (T) => T.name === N
            );
            P && (P.value = R);
          }
        }
        const j = u.widgets.find(
          (b) => b.name === "control_after_generate"
        );
        j && (j.value = "fixed");
      }
      const v = S.canvas.ds.offset, _ = S.canvas.ds.scale;
      return u.pos = [(-v[0] + 400) / _, (-v[1] + 300) / _], S.graph.add(u), S.canvas.selectNode(u), S.canvas.centerOnNode(u), !0;
    } catch (y) {
      return console.error("Error adding Unified Loader:", y), alert("Failed to load settings."), !1;
    }
  }, []), s = m.useCallback(
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
  ), a = m.useCallback(
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
  ), o = m.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), c = m.useCallback(
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
      const k = (u) => {
        if (!u) return !1;
        const h = u.replace(/\s+/g, "").toLowerCase();
        return h === "meldimageloader" || h === "loadimage";
      }, S = y.graph._nodes.filter(
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
            image: x,
            nodes: S.map(
              (u) => ({
                id: String(u.id),
                type: u.type,
                title: u.title
              })
            ),
            onSelect: (u) => {
              Jr(x, u);
            }
          }
        }), !0;
      const f = Jr(x);
      return f.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: f.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), i = m.useCallback(
    (x) => {
      const y = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: y }
      });
    },
    [t]
  ), d = m.useCallback(
    async (x, y = "run") => {
      var S;
      console.log("[Meld] handleRunWithMask called", x, y);
      const k = Array.isArray(x) ? x : [x];
      if (y === "apply") {
        const f = window.app, u = ((S = f == null ? void 0 : f.graph) == null ? void 0 : S._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          u.map((_) => ({
            id: _.id,
            type: _.type
          }))
        );
        const h = u.some(
          (_) => _.type === "LoadImageMask"
        ), v = u.some(
          (_) => _.type === "MeldImageLoader" || _.type === "LoadImage" || _.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: h, hasLoaderNode: v }), !h || !v) {
          const _ = [];
          v || _.push("'Meld Image Loader'"), h || _.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${_.join(" and ")}. Please add them to use the Mask Tool.`
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
          payload: { type: "mask_editor", imageId: k[0].id, mode: y }
        });
        return;
      }
      try {
        if (!(await Hu()).some(
          (h) => h.valid && h.mask_count >= 1
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
      } catch (f) {
        console.error("[Meld] Error checking workflows:", f);
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
  ), p = m.useCallback(
    async (x, y) => {
      try {
        const k = x.id, f = (await ei([k])).restored_ids || [k];
        t({ type: "REMOVE_IMAGES", payload: f }), y == null || y();
      } catch (k) {
        t({
          type: "SET_ERROR",
          payload: k instanceof Error ? k.message : String(k)
        });
      }
    },
    [t]
  ), g = m.useCallback(
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
  ), w = m.useCallback(
    async (x, y) => {
      try {
        const k = await Wh(
          x,
          y
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
    handleSendToWorkflow: c,
    handleRunWithWorkflow: i,
    handleRunWithMask: d,
    handleRestore: p,
    handleDelete: g,
    handleEditNotes: a,
    handleUpdateUserNotes: w
  };
}, im = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: s } = _e(), { handleUpdateUserNotes: a } = Ts(r, s), [o, c] = m.useState(t), [i, d] = m.useState(!1), p = m.useRef(null), g = m.useRef(!1), w = (k) => {
    k.target === k.currentTarget && (g.current = !0);
  }, x = (k) => {
    k.target === k.currentTarget && g.current && n(), g.current = !1;
  };
  m.useEffect(() => {
    p.current && p.current.focus();
  }, []);
  const y = m.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (k) {
      console.error("Failed to update notes:", k), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return m.useEffect(() => {
    const k = (S) => {
      S.key === "Enter" && (S.ctrlKey || S.metaKey) && S.target === p.current && (S.preventDefault(), S.stopPropagation(), S.stopImmediatePropagation(), y());
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => {
      window.removeEventListener("keydown", k, {
        capture: !0
      });
    };
  }, [y]), et({ onEscape: n }), he.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ l.jsx(jh, { size: 18 }),
              /* @__PURE__ */ l.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ l.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ l.jsx(ye, { size: 20 }) })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ l.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ l.jsx(
              "textarea",
              {
                ref: p,
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
                onChange: (k) => c(k.target.value)
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
                disabled: i,
                children: i ? "Saving..." : "Save Notes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, cm = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = _e(), s = m.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  et({ onEscape: s });
  const a = m.useRef(!1), o = m.useCallback((i) => {
    i.target === i.currentTarget && (a.current = !0);
  }, []), c = m.useCallback(
    (i) => {
      i.target === i.currentTarget && a.current && s(), a.current = !1;
    },
    [s]
  );
  return he.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: o,
        onMouseUp: c,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (i) => i.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsx("h2", { children: "Select Target Node" }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: s,
                    children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
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
                /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: t.map((i) => /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-workflow-node-item",
                    onClick: () => {
                      n(i.id), s();
                    },
                    children: [
                      /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                        /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: i.title || i.type }),
                        /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                          "#",
                          i.id
                        ] })
                      ] }),
                      /* @__PURE__ */ l.jsx(Xr, { size: 12 })
                    ]
                  },
                  i.id
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
}, dm = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var A;
  const { dispatch: s } = _e(), [a, o] = m.useState([]), [c, i] = m.useState(!0), [d, p] = m.useState(null), [g, w] = m.useState(!1), [x, y] = m.useState(null), [k, S] = m.useState({}), [f, u] = m.useState({}), [h, v] = m.useState(""), _ = m.useRef(null), j = m.useMemo(() => a.map((L) => {
    let C = L.valid, D = L.reason;
    return r && L.mask_count === 0 && (C = !1, D = "No 'Load Image (as Mask)' node found."), { ...L, valid: C, reason: D };
  }).sort((L, C) => L.valid !== C.valid ? L.valid ? -1 : 1 : L.name.localeCompare(C.name)), [a, r]), b = m.useMemo(() => {
    if (!h.trim()) return j;
    const L = h.toLowerCase();
    return j.filter(
      (C) => C.name.toLowerCase().includes(L)
    );
  }, [j, h]), N = m.useCallback(async () => {
    try {
      i(!0);
      const L = await Hu();
      o(L), p(null);
    } catch (L) {
      p(L instanceof Error ? L.message : String(L));
    } finally {
      i(!1);
    }
  }, []);
  m.useEffect(() => {
    N();
  }, [N]), m.useEffect(() => {
    !c && _.current && _.current.focus();
  }, [c]);
  const R = m.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]);
  et({ onEscape: R });
  const P = m.useRef(!1), T = m.useCallback((L) => {
    L.target === L.currentTarget && (P.current = !0);
  }, []), U = m.useCallback(
    (L) => {
      L.target === L.currentTarget && P.current && R(), P.current = !1;
    },
    [R]
  ), J = async (L, C) => {
    if (!g)
      try {
        w(!0);
        const D = await t(L, C);
        n == null || n(), D !== !1 && R();
      } catch (D) {
        p(D instanceof Error ? D.message : String(D)), w(!1);
      }
  }, E = async (L) => {
    if (!(k[L] || f[L]))
      try {
        u((M) => ({ ...M, [L]: !0 }));
        const C = await Ku(L), D = [], Q = (M) => {
          if (!M) return !1;
          const V = M.replace(/\s+/g, "").toLowerCase();
          return r ? V === "loadimagemask" : V === "meldimageloader" || V === "loadimage";
        };
        if (C.nodes && Array.isArray(C.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            C.nodes.length
          );
          for (const M of C.nodes)
            Q(M.type) && (console.log(
              "[Meld] Found target node (UI):",
              M.id,
              M.type,
              M.title
            ), D.push({
              id: String(M.id),
              type: M.type || "",
              title: M.title
            }));
        } else {
          console.log("[Meld] Extracting nodes from API format workflow");
          for (const M in C) {
            const V = C[M];
            V && typeof V == "object" && Q(V.class_type) && (console.log(
              "[Meld] Found target node (API):",
              M,
              V.class_type
            ), D.push({
              id: M,
              type: V.class_type || ""
            }));
          }
        }
        D.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), S((M) => ({ ...M, [L]: D }));
      } catch (C) {
        console.error("Failed to fetch workflow nodes:", C);
      } finally {
        u((C) => ({ ...C, [L]: !1 }));
      }
  }, O = (L) => {
    if (!L.valid || g) return;
    if ((r ? L.mask_count : L.loader_count + L.load_image_count) <= 1) {
      J(L.name);
      return;
    }
    x === L.name ? y(null) : (y(L.name), E(L.name));
  };
  return he.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: T,
        onMouseUp: U,
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (L) => L.stopPropagation(),
            children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ l.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ l.jsx(Jo, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: R,
                    children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: c ? /* @__PURE__ */ l.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ l.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ l.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ l.jsx(Du, { size: 20 }),
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
                      /* @__PURE__ */ l.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (A = e[0]) == null ? void 0 : A.filename }),
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
                      /* @__PURE__ */ l.jsx(bn, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ l.jsx(
                        "input",
                        {
                          ref: _,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: h,
                          onChange: (L) => v(L.target.value)
                        }
                      ),
                      h && /* @__PURE__ */ l.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var L;
                            v(""), (L = _.current) == null || L.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ l.jsx(ye, { size: 14 })
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
                ) : b.map((L) => {
                  const C = r ? L.mask_count : L.loader_count + L.load_image_count, D = x === L.name, Q = k[L.name] || [], M = f[L.name];
                  return /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ l.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${L.valid ? "" : "meld-workflow-item--invalid"} ${D ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => O(L),
                        title: L.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__name", children: L.name }),
                            !L.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__reason", children: L.reason }),
                            L.valid && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-item__supports", children: C > 1 ? `Multiple loaders found (${C})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${L.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          L.valid && C <= 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: g,
                              onClick: (V) => {
                                V.stopPropagation(), J(L.name);
                              },
                              children: [
                                /* @__PURE__ */ l.jsx(Xr, { size: 14 }),
                                g ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          L.valid && C > 1 && /* @__PURE__ */ l.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: g,
                              onClick: (V) => {
                                V.stopPropagation(), O(L);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                D ? "Close" : "Select Node",
                                /* @__PURE__ */ l.jsx(
                                  Zo,
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
                    D && /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker", children: M ? /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ l.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ l.jsx("div", { className: "meld-workflow-node-picker__list", children: Q.map((V) => /* @__PURE__ */ l.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: g,
                          onClick: () => J(L.name, V.id),
                          children: [
                            /* @__PURE__ */ l.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ l.jsx("span", { className: "meld-workflow-node-item__title", children: V.title || V.type }),
                              /* @__PURE__ */ l.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                V.id
                              ] })
                            ] }),
                            /* @__PURE__ */ l.jsx(Xr, { size: 12 })
                          ]
                        },
                        V.id
                      )) })
                    ] }) })
                  ] }, L.name);
                })
              ] }) }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: R,
                  disabled: g,
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
}, to = async (e, t) => {
  await Ah(e, t), pe.getState().removeImages(e);
}, um = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: s, dispatch: a } = _e(), o = m.useRef(!0);
  m.useEffect(() => () => {
    o.current = !1;
  }, []);
  const c = m.useMemo(
    () => s.searchQuery.toLowerCase().includes("has_derivatives:yes") || s.searchQuery.toLowerCase().includes("has_derivatives:true") || s.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [s.searchQuery]
  ), i = m.useMemo(
    () => s.viewerMode === "lineage" && s.lineageImages.length > 0 ? s.lineageImages : s.images.filter(
      (f) => f.exists !== !1 && (s.settings["gallery.show_parent_images"] || !f.has_children || c)
    ),
    [
      s.viewerMode,
      s.lineageImages,
      s.images,
      s.settings,
      c
    ]
  ), d = m.useRef(s.viewerImageId);
  m.useEffect(() => {
    d.current = s.viewerImageId;
  }, [s.viewerImageId]);
  const p = m.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  et({ onEscape: p });
  const g = m.useRef(!1), w = m.useCallback((f) => {
    f.target === f.currentTarget && (g.current = !0);
  }, []), x = m.useCallback(
    (f) => {
      f.target === f.currentTarget && g.current && p(), g.current = !1;
    },
    [p]
  ), y = m.useCallback(
    (f) => {
      if (!o.current) return;
      const u = d.current;
      if (u === null || !f.has(u))
        return;
      const h = i.findIndex(
        (_) => _.id === u
      );
      if (h === -1) return;
      let v = !1;
      for (let _ = h + 1; _ < i.length; _++)
        if (!f.has(i[_].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: i[_].id, mode: s.viewerMode }
          }), v = !0;
          break;
        }
      if (!v) {
        for (let _ = h - 1; _ >= 0; _--)
          if (!f.has(i[_].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: i[_].id, mode: s.viewerMode }
            }), v = !0;
            break;
          }
      }
      v || a({ type: "CLOSE_VIEWER" });
    },
    [s.viewerMode, i, a]
  ), k = async () => {
    var f, u;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const h = new Set(e), v = i.filter(
        (_) => h.has(_.id)
      );
      if (y(h), await to(e, n), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((u = (f = s.activeModal).onSuccess) == null || u.call(f)), !n && r && r(v), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
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
      for (const _ of e) {
        const j = await Xa(_);
        if (!o.current) return;
        for (const b of j)
          h.add(b.id);
      }
      const v = i.filter(
        (_) => h.has(_.id)
      );
      if (y(h), await to(
        Array.from(h),
        n
      ), !o.current) return;
      s.activeModal.type === "delete_confirm" && ((u = (f = s.activeModal).onSuccess) == null || u.call(f)), !n && r && r(v), a({
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
  return he.createPortal(
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
                  /* @__PURE__ */ l.jsx($t, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: p,
                    children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
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
                            nh,
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
                    onClick: p,
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
}, mm = ({ message: e }) => {
  const { dispatch: t } = _e(), n = m.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return et({ onEscape: n }), /* @__PURE__ */ l.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(Du, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ l.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
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
}, fm = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = _e(), [s, a] = m.useState([]), [o, c] = m.useState(!0), [i, d] = m.useState(!1), p = m.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  et({ onEscape: p });
  const g = m.useRef(!1), w = (j) => {
    j.target === j.currentTarget && (g.current = !0);
  }, x = (j) => {
    j.target === j.currentTarget && g.current && p(), g.current = !1;
  }, y = t.images.find((j) => j.id === e), k = m.useCallback(async () => {
    c(!0);
    try {
      const j = t.settings["gallery.suggest_phash_threshold"], b = await zh(e, j);
      a(b);
    } catch (j) {
      console.error("Failed to load suggestions:", j);
    } finally {
      c(!1);
    }
  }, [e, t.settings]);
  m.useEffect(() => {
    k();
  }, [k]);
  const S = async (j) => {
    if (j == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || j === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await pc(e, j), await $u(e), await r(), p();
      } catch (b) {
        console.error("Failed to link parent:", b);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await pc(e, null), await r(), p();
      } catch (j) {
        console.error("Failed to remove source:", j), alert("Failed to remove source image.");
      }
  }, u = async (j) => {
    c(!0);
    try {
      const b = await hg(j), { id: N } = await Uu({
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
      c(!1);
    }
  }, h = (j) => {
    j.preventDefault(), j.stopPropagation(), d(!1);
    const b = j.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && u(b);
  };
  if (!y) return null;
  const v = s.filter((j) => j.is_source_match), _ = s.filter((j) => !j.is_source_match);
  return he.createPortal(
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: x,
        children: /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-content", onClick: (j) => j.stopPropagation(), children: [
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
                onClick: p,
                children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
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
                        /* @__PURE__ */ l.jsx(yh, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        src: Je({
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
                      children: /* @__PURE__ */ l.jsx(gh, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-drop-zone ${i ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (j) => {
                  j.preventDefault(), j.stopPropagation(), d(!0);
                },
                onDragOver: (j) => {
                  j.preventDefault(), j.stopPropagation(), j.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (j) => {
                  j.preventDefault(), j.stopPropagation(), d(!1);
                },
                onDrop: h,
                children: [
                  /* @__PURE__ */ l.jsx(Eh, { size: 32 }),
                  /* @__PURE__ */ l.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ l.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-suggestions-container", children: [
              v.length > 0 && /* @__PURE__ */ l.jsxs("section", { children: [
                /* @__PURE__ */ l.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: v.map((j) => {
                  const b = j.id === y.parent_id;
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
                _.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-suggestion-grid", children: _.map((j) => {
                  const b = j.id === y.parent_id;
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
}, Dg = () => {
  const { state: e, dispatch: t } = _e(), { executeWorkflow: n } = ni();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
      dm,
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
            for (const c of e.activeModal.images)
              await n(
                r,
                c,
                a,
                s
              );
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
      cm,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && Jr(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && he.createPortal(
      /* @__PURE__ */ l.jsx(fm, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && he.createPortal(/* @__PURE__ */ l.jsx(Bu, {}), document.body),
    e.activeModal.type === "settings" && he.createPortal(/* @__PURE__ */ l.jsx(am, {}), document.body),
    e.activeModal.type === "tag_edit" && he.createPortal(
      /* @__PURE__ */ l.jsx(
        om,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && he.createPortal(
      /* @__PURE__ */ l.jsx(mm, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && he.createPortal(
      /* @__PURE__ */ l.jsx(
        um,
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
    e.activeModal.type === "mask_editor" && he.createPortal(
      /* @__PURE__ */ l.jsx(
        fs,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && he.createPortal(
      /* @__PURE__ */ l.jsx(
        fs,
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
    e.activeModal.type === "note_edit" && he.createPortal(
      /* @__PURE__ */ l.jsx(
        im,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && he.createPortal(
      /* @__PURE__ */ l.jsx(
        _g,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, pm = (e, t) => {
  const n = m.useCallback(
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
      let c = null;
      if (o ? c = Je(o) : c = Je({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !c) return [];
      const i = {
        id: a || null,
        imgSrc: c
      };
      if (o && s > 1) {
        const d = n(o);
        return [i, ...d].slice(0, s);
      }
      return [i];
    },
    [t, e]
  );
  return { getParentChain: n };
}, hm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = _e(), s = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: c,
    handleEditSource: i,
    handleEditTags: d,
    handleSendToWorkflow: p,
    handleRunWithWorkflow: g,
    handleRunWithMask: w,
    handleRestore: x,
    handleDelete: y,
    handleEditNotes: k,
    handleUpdateUserNotes: S
  } = Ts(t, n), { getParentChain: f } = pm(t.images, t.settings), [u, h] = m.useState(null), [v, _] = m.useState(!1), [j, b] = m.useState(null), [N, R] = m.useState(!1), P = m.useRef(null), T = async (ee, tt, Pe = !1) => {
    try {
      await navigator.clipboard.writeText(ee), Pe ? (R(!0), setTimeout(() => R(!1), 2e3)) : (b(tt), setTimeout(() => b(null), 2e3));
    } catch (it) {
      console.error("Failed to copy text: ", it);
    }
  };
  m.useEffect(() => {
    const ee = (Pe) => {
      Pe.key === "Escape" && (u ? h(null) : _(!1));
    }, tt = (Pe) => {
      P.current && !P.current.contains(Pe.target) && _(!1);
    };
    return window.addEventListener("keydown", ee), v && document.addEventListener("mousedown", tt), () => {
      window.removeEventListener("keydown", ee), document.removeEventListener("mousedown", tt);
    };
  }, [v, u]);
  const U = f(e), E = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, O = Je(e);
  return {
    state: t,
    dispatch: n,
    isSelected: s,
    viewMode: a,
    popupContent: u,
    setPopupContent: h,
    isMenuOpen: v,
    setIsMenuOpen: _,
    copiedLabel: j,
    popupCopied: N,
    menuRef: P,
    parentChain: U,
    displayFilename: E,
    imgSrc: O,
    handleCopy: T,
    handleClick: (ee) => {
      ee.shiftKey ? (ee.preventDefault(), ee.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : ee.ctrlKey || ee.metaKey || t.selectedIds.size > 0 ? (ee.preventDefault(), ee.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (ee) => {
      ee.preventDefault(), ee.stopPropagation(), ee.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (ee) => {
      ee.shiftKey ? (ee.preventDefault(), ee.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : ee.ctrlKey || ee.metaKey || t.selectedIds.size > 0 ? (ee.preventDefault(), ee.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (ee.preventDefault(), ee.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (ee) => {
      ee.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !ee.shiftKey && !ee.ctrlKey && !ee.metaKey && s || (ee.shiftKey || ee.ctrlKey || ee.metaKey || t.selectedIds.size > 0) && ee.preventDefault();
    },
    handleKeyDown: (ee) => {
      var Pe, it, jt;
      ((Pe = document.activeElement) == null ? void 0 : Pe.tagName) === "INPUT" || ((it = document.activeElement) == null ? void 0 : it.tagName) === "TEXTAREA" || (jt = document.activeElement) != null && jt.isContentEditable || (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await o(e);
    },
    handleAddUnifiedLoader: async () => {
      await c(e);
    },
    handleEditSource: () => {
      i(e);
    },
    handleEditTags: () => {
      d(e);
    },
    handleEditNotes: () => {
      k(e);
    },
    handleSendToWorkflow: () => {
      p(e);
    },
    handleRestore: () => {
      x(e);
    },
    handleDelete: () => {
      y(e);
    },
    handleRunWithWorkflow: () => {
      g(e);
    },
    handleRunWithMask: (ee = "run") => w(e, ee),
    handleUpdateUserNotes: (ee) => S(e.id, ee),
    fetchFullImageDetails: r
  };
}, ri = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: s,
  onRestoreWorkflow: a,
  onSendToWorkflow: o,
  onRunWithWorkflow: c,
  onRunWithMask: i,
  onEditSource: d,
  onEditTags: p,
  onEditNotes: g,
  onDelete: w,
  onRestore: x,
  showRestore: y,
  deleteLabel: k,
  showQuickShortcuts: S = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: h = ""
}) => {
  const [v, _] = m.useState("left");
  m.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? _("right") : _("left"));
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
        return c;
      case "send_to_workflow_mask":
        return () => i("apply");
      case "queue_workflow_mask":
        return () => i("run");
      case "edit_source_image":
        return d;
      case "edit_tags":
        return p;
      case "edit_notes":
        return g;
      case "restore_image":
        return x;
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
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsxs("div", { className: N, ref: n, children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${h}`,
        onClick: (R) => {
          R.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ l.jsx(_h, { size: u })
      }
    ),
    S && b.map((R, P) => {
      const T = sm.find((E) => E.id === R);
      if (!T || !T.icon) return null;
      const U = T.icon, J = j(R);
      return !J || R === "restore_image" && !y ? null : /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${h}`,
          onClick: (E) => {
            E.stopPropagation(), J();
          },
          title: T.label,
          children: /* @__PURE__ */ l.jsx(U, { size: u })
        },
        `${R}-${P}`
      );
    }),
    e && /* @__PURE__ */ l.jsx(
      "div",
      {
        className: `meld-image-card__menu ${v === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: qu,
            handler: s
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Ju,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: em,
            handler: () => i("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Xu,
            handler: c
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: Zu,
            handler: () => i("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Yu,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: nm,
            handler: p
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: rm,
            handler: g
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: tm,
            handler: d
          },
          ...y ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: lm,
              handler: x,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: k,
            icon: $t,
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
}, Pg = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: s
}) => he.createPortal(
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
                s ? /* @__PURE__ */ l.jsx(Xo, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ l.jsx(
                  ch,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  ye,
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
), gm = qt.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: s,
      setPopupContent: a,
      isMenuOpen: o,
      setIsMenuOpen: c,
      copiedLabel: i,
      popupCopied: d,
      menuRef: p,
      parentChain: g,
      displayFilename: w,
      imgSrc: x,
      handleCopy: y,
      handleClick: k,
      handleSelectToggle: S,
      handleContainerClick: f,
      handleMouseDown: u,
      handleKeyDown: h,
      handleRestoreWorkflow: v,
      handleAddUnifiedLoader: _,
      handleEditSource: j,
      handleEditTags: b,
      handleEditNotes: N,
      handleSendToWorkflow: R,
      handleRestore: P,
      handleDelete: T,
      handleRunWithWorkflow: U,
      handleRunWithMask: J,
      fetchFullImageDetails: E
    } = hm(e), [O, A] = m.useState("idle");
    m.useEffect(() => {
      e.user_notes && O === "saving" && A("idle");
    }, [e.user_notes, O]);
    const L = (C) => {
      C.stopPropagation();
      let D = String(e.id);
      r && t.selectedIds.size > 0 && (D = Array.from(t.selectedIds).join(",")), C.dataTransfer.setData("text/plain", D), pe.getState().setIsOpen(!0);
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
        onDragStart: L,
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
            t.settings["gallery.show_parent_image"] && g.length > 0 && /* @__PURE__ */ l.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ l.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ l.jsx("div", { className: "meld-lineage-thumbs", children: g.map(
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
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${i === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const D = await E(e.id);
                        y(D.model_name || "-", "Model");
                      },
                      children: i === "Model" ? "Copied!" : "Model"
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
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${i === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const D = await E(e.id);
                        y(
                          D.positive_prompt || D.positive || "-",
                          "Positive"
                        );
                      },
                      children: i === "Positive" ? "Copied!" : "Positive"
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
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${i === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const D = await E(e.id);
                        y(
                          D.negative_prompt || D.negative || "-",
                          "Negative"
                        );
                      },
                      children: i === "Negative" ? "Copied!" : "Negative"
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
            ri,
            {
              isMenuOpen: o,
              setIsMenuOpen: c,
              menuRef: p,
              settings: t.settings,
              onAddUnifiedLoader: _,
              onRestoreWorkflow: v,
              onSendToWorkflow: R,
              onRunWithWorkflow: U,
              onRunWithMask: (C) => J(C),
              onEditSource: j,
              onEditTags: b,
              onEditNotes: N,
              onRestore: P,
              showRestore: t.viewScope === "trash",
              onDelete: T,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          s && /* @__PURE__ */ l.jsx(
            Pg,
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
gm.displayName = "DetailedImageCard";
const ym = qt.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: s,
      handleKeyDown: a,
      handleClick: o,
      handleSelectToggle: c,
      isMenuOpen: i,
      setIsMenuOpen: d,
      menuRef: p,
      state: g,
      handleAddUnifiedLoader: w,
      handleRestoreWorkflow: x,
      handleSendToWorkflow: y,
      handleRunWithWorkflow: k,
      handleRunWithMask: S,
      handleEditSource: f,
      handleEditTags: u,
      handleEditNotes: h,
      handleDelete: v,
      handleRestore: _
    } = hm(e), j = g.viewScope === "trash", b = j ? "Delete Permanently" : "Move to Trash", N = (R) => {
      R.stopPropagation();
      let P = String(e.id);
      t && g.selectedIds.size > 0 && (P = Array.from(g.selectedIds).join(",")), R.dataTransfer.setData("text/plain", P), pe.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""} ${i ? "meld-image-card--menu-open" : ""}`,
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
                onClick: c,
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
            ri,
            {
              isMenuOpen: i,
              setIsMenuOpen: d,
              menuRef: p,
              settings: g.settings,
              onAddUnifiedLoader: w,
              onRestoreWorkflow: x,
              onSendToWorkflow: y,
              onRunWithWorkflow: k,
              onRunWithMask: S,
              onEditSource: f,
              onEditTags: u,
              onEditNotes: h,
              onDelete: v,
              onRestore: _,
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
ym.displayName = "SimpleImageCard";
const Rg = ({ image: e }) => {
  const { state: t } = _e();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ l.jsx(ym, { image: e }) : /* @__PURE__ */ l.jsx(gm, { image: e });
}, Og = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: s
}) => {
  const [a, o] = m.useState(!1), c = m.useRef(null);
  return m.useEffect(() => {
    const i = new IntersectionObserver(
      ([p]) => {
        p.isIntersecting && o(!0);
      },
      { rootMargin: n }
    ), d = c.current;
    return d && i.observe(d), () => {
      d && i.unobserve(d);
    };
  }, [n]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: c,
      className: r,
      style: {
        minHeight: `${t}px`,
        ...s
      },
      children: a ? e : null
    }
  );
}, Ag = () => {
  const { state: e, dispatch: t } = _e(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await xg(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (p) {
      console.error("Failed to cancel scan:", p);
    }
  }, s = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: c } = n.progress, i = c > 0 ? o / c : 0, d = a ? 50 + Math.round(i * 50) : Math.round(i * 50);
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
        children: /* @__PURE__ */ l.jsx(Wu, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ l.jsx(ah, { size: 14, className: "meld-success-icon" }),
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
}, zg = () => {
  const { state: e } = _e(), { slots: t, addToBucket: n } = pe();
  m.useEffect(() => {
    const r = (s) => {
      var c, i, d;
      if (((c = document.activeElement) == null ? void 0 : c.tagName) === "INPUT" || ((i = document.activeElement) == null ? void 0 : i.tagName) === "TEXTAREA" || (d = document.activeElement) != null && d.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (p) => p.shortcutKey.toLowerCase() === s.key.toLowerCase()
      );
      o && (s.preventDefault(), a.forEach((p) => {
        n(o.id, String(p));
      }), console.log(`Added ${a.size} images to slot ${o.label}`));
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, e.selectedIds]);
}, vm = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (m.useEffect(() => {
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
)), Fg = (e, t, n, r, s) => {
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
            for (const c of o.tags)
              a.add(c);
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
}, Wg = ({ config: e }) => {
  var E;
  const { buckets: t, slots: n, images: r } = pe(), s = n.length, { state: a, dispatch: o } = _e(), [c, i] = m.useState(!1), [d, p] = m.useState(!1), [g, w] = m.useState(!1), [x, y] = m.useState(e.label), [k, S] = m.useState(e.color), f = m.useRef(null), u = m.useRef(null), h = t[e.id] || [], v = h.length;
  m.useEffect(() => {
    const O = (A) => {
      u.current && !u.current.contains(A.target) && i(!1), f.current && !f.current.contains(A.target) && w(!1);
    };
    return (c || g) && document.addEventListener("mousedown", O), () => {
      document.removeEventListener("mousedown", O);
    };
  }, [c, g]);
  const _ = h.map((O) => {
    const A = Number(O);
    let L = a.images.find((C) => C.id === A);
    return L || (L = a.lineageImages.find((C) => C.id === A)), L || (L = r[O]), L;
  }).filter(Boolean), j = (O) => {
    O.preventDefault(), O.stopPropagation(), O.currentTarget.classList.add("drag-over");
  }, b = (O) => {
    O.currentTarget.classList.remove("drag-over");
  }, N = (O) => {
    O.preventDefault(), O.stopPropagation(), O.currentTarget.classList.remove("drag-over");
    const A = O.dataTransfer.getData("text/plain");
    A && A.split(",").forEach((C) => {
      if (C) {
        const D = C.trim(), Q = Number(D);
        let M = a.images.find((V) => V.id === Q);
        M || (M = a.lineageImages.find(
          (V) => V.id === Q
        )), pe.getState().addToBucket(e.id, D, M);
      }
    });
  }, R = (O, A) => {
    O.stopPropagation(), O.dataTransfer.setData("text/plain", String(A)), O.dataTransfer.setData("application/meld-lt-source-slot", e.id), O.dataTransfer.effectAllowed = "move";
  }, P = (O, A) => {
    O.dataTransfer.dropEffect === "none" && pe.getState().removeFromBucket(e.id, String(A));
  }, T = (O) => {
    if (v === 0) return;
    const A = {
      type: O
    }, L = h.map((Q) => Number(Q)), C = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Fg(
      A,
      L,
      _,
      o,
      () => {
        pe.getState().showToast(C[O] ?? "Done");
      }
    );
  }, U = () => {
    pe.getState().clearBucket(e.id), pe.getState().showToast(`Tab "${e.label}" cleared`), p(!1);
  }, J = () => {
    const O = pe.getState();
    O.slots.length <= 1 || (O.removeSlot(e.id), pe.getState().showToast(`Tab "${e.label}" deleted`));
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
        /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__images", children: v === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : _.map((O) => {
          const A = "type" in O ? O.type : "output", L = `/api/view?filename=${encodeURIComponent(O.filename)}&type=${A}&subfolder=${encodeURIComponent(O.subfolder || "")}`;
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
              children: /* @__PURE__ */ l.jsx("img", { src: L, alt: O.filename, draggable: !1 })
            },
            O.id
          );
        }) }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: f, children: [
            /* @__PURE__ */ l.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => w(!g),
                disabled: v === 0,
                title: "Actions",
                children: [
                  "Action",
                  /* @__PURE__ */ l.jsx(oh, { size: 12 })
                ]
              }
            ),
            g && /* @__PURE__ */ l.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: or
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: Jo
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: Mh
              },
              {
                type: "download",
                label: "Download",
                icon: Yr
              },
              {
                type: "delete",
                label: "Delete",
                icon: $t,
                danger: !0
              }
            ].map((O) => /* @__PURE__ */ l.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${O.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in O && O.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (A) => A.stopPropagation(),
                onClick: () => {
                  "disabled" in O && O.disabled || (w(!1), setTimeout(() => T(O.type), 0));
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
              onClick: () => p(!0),
              title: "Clear Tab",
              disabled: v === 0,
              children: /* @__PURE__ */ l.jsx(dh, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: u, children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => i(!c),
                title: "Tab Settings",
                children: /* @__PURE__ */ l.jsx(Fu, { size: 14 })
              }
            ),
            c && /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ l.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ l.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: x,
                    onChange: (O) => y(O.target.value),
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
                    pe.getState().updateSlot(e.id, {
                      label: x,
                      color: k
                    }), i(!1), pe.getState().showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              s > 1 && /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: J,
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
          vm,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: U,
            onCancel: () => p(!1)
          }
        )
      ]
    }
  );
}, $g = () => {
  const e = pe((t) => t.toastMessage);
  return e ? /* @__PURE__ */ l.jsx("div", { className: "meld-toast", role: "status", "aria-live": "polite", children: e }) : null;
}, Ug = () => {
  var x;
  zg();
  const { isOpen: e, slots: t, buckets: n, setIsOpen: r } = pe(), { state: s } = _e(), [a, o] = m.useState(((x = t[0]) == null ? void 0 : x.id) || "keep"), c = m.useRef(null), [i, d] = m.useState(!1);
  if (m.useEffect(() => {
    let y = document.getElementById(
      "meld-light-table-portal"
    );
    if (!y) {
      y = document.createElement("div"), y.id = "meld-light-table-portal";
      const k = document.querySelector(".comfyui-body-bottom");
      k ? k.appendChild(y) : document.body.appendChild(y);
    }
    return c.current = y, () => {
    };
  }, []), !e || !c.current) return null;
  const p = () => {
    const y = `slot_${Date.now().toString(36)}`;
    pe.getState().addSlot({
      id: y,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(y);
  }, g = () => {
    t.forEach((y) => {
      pe.getState().clearBucket(y.id);
    }), pe.getState().showToast("All tabs cleared"), d(!1);
  }, w = /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((y) => {
        var k;
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
                  const v = h.trim(), _ = s.images.find(
                    (j) => String(j.id) === v
                  );
                  pe.getState().addToBucket(y.id, v, _);
                }
              });
            },
            children: [
              y.label,
              "  (",
              ((k = n[y.id]) == null ? void 0 : k.length) || 0,
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
          onClick: p,
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
          children: /* @__PURE__ */ l.jsx(Is, { size: 16 })
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
            /* @__PURE__ */ l.jsx(bh, { size: 14 }),
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
          children: /* @__PURE__ */ l.jsx(ye, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "meld-light-table__content", children: t.map((y) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === y.id ? "block" : "none" },
        children: /* @__PURE__ */ l.jsx(Wg, { config: y })
      },
      y.id
    )) }),
    i && /* @__PURE__ */ l.jsx(
      vm,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: g,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ l.jsx($g, {})
  ] });
  return he.createPortal(w, c.current);
}, wm = () => {
  const { state: e, refreshFavorites: t } = _e(), [n, r] = m.useState(!1), [s, a] = m.useState(null), [o, c] = m.useState(null), [i, d] = m.useState(""), [p, g] = m.useState("");
  m.useEffect(() => {
    if (s) {
      const S = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(S);
    }
  }, [s]);
  const w = m.useCallback(
    async (S, f, u) => {
      S.stopPropagation();
      const h = `Are you sure you want to delete the favorite "${u}"?`;
      if (window.confirm(h))
        try {
          await hc(f), await t();
        } catch (v) {
          te.error("Failed to delete favorite", v);
        }
    },
    [t]
  ), x = m.useCallback(
    (S, f) => {
      S.stopPropagation(), c(f), d(f.name), g(f.query);
    },
    []
  ), y = m.useCallback(async () => {
    if (!(!o || !i.trim() || !p.trim()))
      try {
        r(!0), await Xh(
          o.id,
          i,
          p
        ), await t(), c(null);
      } catch (S) {
        te.error("Failed to update favorite", S), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [o, i, p, t]), k = m.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (f) => f.query === e.searchQuery
    )) {
      const f = e.favorites.find((u) => u.query === e.searchQuery);
      if (f) {
        r(!0);
        try {
          await hc(f.id), await t();
        } catch (u) {
          te.error("Failed to delete favorite:", u);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Yh(e.searchQuery, e.searchQuery), await t();
    } catch (f) {
      te.error("Failed to save favorite:", f);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: s,
    editingFavorite: o,
    setEditingFavorite: c,
    editFavoriteName: i,
    setEditFavoriteName: d,
    editFavoriteQuery: p,
    setEditFavoriteQuery: g,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: y,
    handleSaveFavorite: k,
    setToastMessage: a
  };
}, xm = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [s, a] = m.useState(!1), [o, c] = m.useState(!1), [i, d] = m.useState(!1);
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
                  onClick: (p) => n(p, e),
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
                  onMouseEnter: () => c(!0),
                  onMouseLeave: () => c(!1),
                  title: "Edit favorite",
                  children: /* @__PURE__ */ l.jsx(zu, { size: 14 })
                }
              ),
              /* @__PURE__ */ l.jsx(
                "button",
                {
                  type: "button",
                  onClick: (p) => r(p, e.id, e.name),
                  style: {
                    background: "none",
                    border: "none",
                    color: i ? "var(--meld-danger-color)" : "var(--meld-text-secondary)",
                    backgroundColor: i ? "var(--comfy-input-bg-active, rgba(255,0,0,0.1))" : "transparent",
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
                  children: /* @__PURE__ */ l.jsx($t, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Qg = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = _e(), {
    isSaving: s,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: c,
    editFavoriteName: i,
    setEditFavoriteName: d,
    editFavoriteQuery: p,
    setEditFavoriteQuery: g,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: y
  } = wm(), [k, S] = m.useState({ top: 0, left: 0 }), f = m.useRef(null), u = m.useRef(null);
  if (et({
    onEscape: () => {
      o ? c(null) : t();
    },
    enabled: !0
  }), m.useEffect(() => {
    if (e) {
      let b = e.left;
      const N = e.bottom + 5;
      b + 300 > window.innerWidth - 10 && (b = window.innerWidth - 300 - 10), b < 10 && (b = 10), S({ top: N, left: b });
    }
  }, [e]), m.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), !e) return null;
  const h = (_) => {
    _.stopPropagation(), _.preventDefault();
  }, v = (_) => {
    _.stopPropagation();
  };
  return he.createPortal(
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
          onMouseDown: (_) => _.stopPropagation()
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: f,
          onClick: h,
          onMouseDown: v,
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
                          rr,
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
                children: r.favorites.map((_) => /* @__PURE__ */ l.jsx(
                  xm,
                  {
                    fav: _,
                    onSelect: (j) => {
                      n(j), t();
                    },
                    onEdit: x,
                    onDelete: w
                  },
                  _.id
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
          onMouseDown: (_) => {
            _.target === _.currentTarget && c(null);
          },
          children: /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (_) => _.stopPropagation(),
              children: [
                /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ l.jsxs(
                    "h2",
                    {
                      style: { display: "flex", alignItems: "center", gap: "10px" },
                      children: [
                        /* @__PURE__ */ l.jsx(rr, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ]
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => c(null),
                      children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
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
                                value: i,
                                onChange: (_) => d(_.target.value),
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
                                onKeyDown: (_) => {
                                  _.key === "Enter" && y(), _.key === "Escape" && c(null);
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
                                value: p,
                                onChange: (_) => g(_.target.value),
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
                                onKeyDown: (_) => {
                                  _.key === "Enter" && !_.shiftKey && (_.preventDefault(), y()), _.key === "Escape" && c(null);
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
                      onClick: () => c(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-primary",
                      onClick: y,
                      disabled: s || !i.trim() || !p.trim(),
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
}, Nl = (e) => {
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
}, Vg = () => {
  const { state: e, dispatch: t, updateSetting: n } = _e(), [r, s] = m.useState(e.searchQuery), [a, o] = m.useState([]), [c, i] = m.useState(!1), [d, p] = m.useState([]), [g, w] = m.useState([]), x = e.settings["search.show_all_keywords"], [y, k] = m.useState(-1), [S, f] = m.useState(null), u = m.useRef(null), h = m.useRef(e.searchQuery), v = m.useCallback(async () => {
    if (g.length > 0) return;
    const A = await Kh();
    w(A);
  }, [g.length]);
  m.useEffect(() => {
    Gh().then((A) => {
      f(A);
    }), x && v();
  }, [v, x]);
  const _ = m.useMemo(() => {
    if (!S) return null;
    const A = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${A}):(.*)$`, "i");
  }, [S]), j = m.useCallback(() => {
    const A = !x;
    A && v(), n("search.show_all_keywords", A);
  }, [x, v, n]), b = r !== h.current;
  m.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      p([]);
      return;
    }
    Hh().then((A) => {
      p(A);
    });
  }, [e.settings["search.quick_suggestions"]]), m.useEffect(() => {
    s(e.searchQuery), h.current = e.searchQuery;
  }, [e.searchQuery]), m.useEffect(() => {
    var A;
    (A = u.current) == null || A.focus();
  }, []);
  const N = m.useCallback(
    (A, L = !0) => {
      h.current !== A && (te.log("SearchBar: triggering search", { query: A }), t({ type: "SET_SEARCH_QUERY", payload: A }), L && i(!1), h.current = A);
    },
    [t]
  );
  m.useEffect(() => {
    const A = setTimeout(async () => {
      if (r === h.current)
        return;
      if (!e.settings["search.input_suggest"] || !_) {
        o([]), i(!1);
        return;
      }
      const L = Nl(r), C = L[L.length - 1];
      if (C) {
        const D = C.match(_);
        if (D) {
          const Q = D[1].toLowerCase();
          let M = D[2];
          M.startsWith('"') && (M = M.substring(1)), M.endsWith('"') && (M = M.substring(0, M.length - 1));
          const V = await Bh(M, Q);
          o(V), i(V.length > 0), k(-1);
        } else {
          const Q = C.replace(/^([-!])/, "").toLowerCase();
          if (Q && S) {
            const M = S.all_prefixes.filter((V) => V.startsWith(Q)).map((V) => ({
              type: V,
              value: "",
              count: 0
            }));
            if (M.length > 0) {
              o(M), i(!0), k(-1);
              return;
            }
          }
          o([]), i(!1);
        }
      } else
        o([]), i(!1);
    }, 300);
    return () => clearTimeout(A);
  }, [
    r,
    e.settings["search.input_suggest"],
    _,
    S
  ]);
  const R = m.useCallback(
    (A) => {
      var de;
      const L = Nl(r), D = (L.pop() || "").match(/^([-!])/), Q = D ? D[1] : "", V = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(A.type);
      if (A.value === "") {
        const B = `${[...L, `${Q}${A.type}:`].join(" ").trim()}`;
        s(B);
      } else {
        const B = V ? A.value : `"${A.value}"`, ae = `${[
          ...L,
          `${Q}${A.type}:${B}`
        ].join(" ").trim()} `;
        s(ae), o([]), i(!1);
      }
      (de = u.current) == null || de.focus();
    },
    [r, S]
  ), P = (A) => {
    A.key === "Enter" ? N(r) : A.key === "Tab" ? c && y >= 0 && (R(a[y]), A.preventDefault()) : A.key === "ArrowDown" ? c && (k((L) => Math.min(L + 1, a.length - 1)), A.preventDefault()) : A.key === "ArrowUp" ? c && (k((L) => Math.max(L - 1, -1)), A.preventDefault()) : A.key === "Escape" && i(!1);
  }, T = m.useCallback(() => {
    s(""), N("");
  }, [N]), U = m.useCallback(
    (A, L, C = !1) => {
      var ee;
      const D = Nl(r), Q = D[D.length - 1] || "";
      let M = !1;
      const V = Q.replace(/^([-!])/, "").toLowerCase();
      V && A.toLowerCase().startsWith(V) && (M = !0);
      const de = Q.match(/^([-!])/), B = M && de ? de[1] : "";
      if (M && D.pop(), C) {
        const tt = [...D, `${B}${A}:`].filter(Boolean).join(" ");
        s(tt), (ee = u.current) == null || ee.focus();
        return;
      }
      const me = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(A) ? L : `"${L}"`, Me = `${B}${A}:${me}`, re = [...D, Me].filter(Boolean).join(" ");
      s(re), N(re);
    },
    [r, N, S]
  ), J = m.useCallback(
    (A) => {
      s(A), A || N("");
    },
    [N]
  ), E = m.useCallback(() => {
    if (r === h.current || !_)
      return;
    const A = Nl(r), L = A[A.length - 1];
    if (!L) return;
    const C = !!L.match(_), D = L.replace(/^([-!])/, "").toLowerCase(), Q = D && (S == null ? void 0 : S.all_prefixes.some((M) => M.startsWith(D)));
    (C || Q) && i(!0);
  }, [r, _, S]), O = m.useCallback(() => {
    setTimeout(() => i(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: s,
    suggestions: a,
    showSuggestions: c,
    setShowSuggestions: i,
    searchSuggestions: d,
    allKeywords: g,
    showAllKeywords: x,
    toggleShowAllKeywords: j,
    selectedIndex: y,
    setSelectedIndex: k,
    inputRef: u,
    isQueryChanged: b,
    handleSearch: N,
    handleKeyDown: P,
    applySuggestion: R,
    clearSearch: T,
    applySearchSuggestion: U,
    handleInputChange: J,
    handleInputFocus: E,
    handleInputBlur: O
  };
}, vc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ l.jsx(or, { size: 12 });
    case "model":
      return /* @__PURE__ */ l.jsx(lh, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ l.jsx(Ch, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ l.jsx(sh, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ l.jsx(Ru, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ l.jsx(Pu, { size: 12 });
    case "note":
      return /* @__PURE__ */ l.jsx(uh, { size: 12 });
    case "sort":
      return /* @__PURE__ */ l.jsx(rh, { size: 12 });
    default:
      return null;
  }
}, Bg = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: s,
  inputValue: a,
  searchQuery: o,
  searchSuggestions: c,
  allKeywords: i,
  showAllKeywords: d,
  toggleShowAllKeywords: p,
  applySearchSuggestion: g,
  favorites: w,
  onSelectFavorite: x,
  onEditFavorite: y,
  onDeleteFavorite: k
}) => {
  const S = (v, _, j) => /* @__PURE__ */ l.jsxs(
    "button",
    {
      type: "button",
      onClick: () => g(v.type, v.value, j === "all"),
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
            children: vc(v.type)
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
            children: v.type
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
            children: v.value
          }
        )
      ]
    },
    `${j}-${v.type}:${v.value}:${_}`
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
      children: t.map((v, _) => /* @__PURE__ */ l.jsx(
        "div",
        {
          onMouseDown: (j) => {
            j.preventDefault(), s(v);
          },
          onMouseEnter: () => r(_),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: _ === n ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                children: vc(v.type)
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
                  width: v.type.length > 8 ? "auto" : "60px",
                  flexShrink: 0
                },
                children: [
                  v.type,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ l.jsx(
              "span",
              {
                style: {
                  color: v.value === xt ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: v.value === xt ? "bold" : "normal"
                },
                children: v.value === xt ? v.type === "tag" ? `Untagged (${xt})` : `No ${v.type} (${xt})` : v.value
              }
            )
          ] })
        },
        `${v.type}:${v.value}`
      ))
    }
  ), u = () => c.length === 0 || a && a === o ? null : /* @__PURE__ */ l.jsxs(
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
            children: c.map(
              (v, _) => S(v, _, "quick")
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
                        onClick: p,
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
                  children: Array.from(new Set(i.map((v) => v.type))).map(
                    (v, _) => S({ type: v, value: "" }, _, "all")
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
              /* @__PURE__ */ l.jsx(rr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: w.map((v) => /* @__PURE__ */ l.jsx(
              xm,
              {
                fav: v,
                onSelect: x,
                onEdit: y,
                onDelete: k
              },
              v.id
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
      onMouseDown: (v) => {
        v.preventDefault();
      },
      children: [
        f(),
        u(),
        h()
      ]
    }
  );
}, Hg = () => {
  const { state: e } = _e(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: s,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: c,
    toggleShowAllKeywords: i,
    selectedIndex: d,
    setSelectedIndex: p,
    inputRef: g,
    isQueryChanged: w,
    handleSearch: x,
    handleKeyDown: y,
    applySuggestion: k,
    clearSearch: S,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: h,
    handleInputBlur: v
  } = Vg(), {
    isSaving: _,
    toastMessage: j,
    editingFavorite: b,
    setEditingFavorite: N,
    editFavoriteName: R,
    setEditFavoriteName: P,
    editFavoriteQuery: T,
    setEditFavoriteQuery: U,
    handleDeleteFavorite: J,
    handleEditFavorite: E,
    handleSaveEditFavorite: O,
    handleSaveFavorite: A
  } = wm();
  et({
    onEscape: () => N(null),
    enabled: !!b
  });
  const L = m.useRef(null), C = m.useRef(!1);
  m.useEffect(() => {
    b && L.current && L.current.focus();
  }, [b]);
  const D = (M) => {
    M.target === M.currentTarget && (C.current = !0);
  }, Q = (M) => {
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
                            bn,
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
                        ref: g,
                        type: "text",
                        value: t,
                        onChange: (M) => u(M.target.value),
                        onKeyDown: y,
                        onBlur: v,
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
                        onClick: A,
                        disabled: _,
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
                          rr,
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
                        children: /* @__PURE__ */ l.jsx(ye, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ l.jsx(
                Bg,
                {
                  showSuggestions: s,
                  suggestions: r,
                  selectedIndex: d,
                  setSelectedIndex: p,
                  applySuggestion: k,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: o,
                  showAllKeywords: c,
                  toggleShowAllKeywords: i,
                  applySearchSuggestion: f,
                  favorites: e.favorites,
                  onSelectFavorite: (M) => {
                    n(M), x(M);
                  },
                  onEditFavorite: E,
                  onDeleteFavorite: J
                }
              )
            ]
          }
        ),
        b && he.createPortal(
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
                  onClick: (M) => M.stopPropagation(),
                  children: [
                    /* @__PURE__ */ l.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ l.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ l.jsx(rr, { size: 20, color: "var(--meld-accent-color)" }),
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
                          children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
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
                                    ref: L,
                                    type: "text",
                                    value: R,
                                    onChange: (M) => P(M.target.value),
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
                                      M.key === "Enter" && O(), M.key === "Escape" && N(null);
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
                                    value: T,
                                    onChange: (M) => U(M.target.value),
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
                                      M.key === "Enter" && !M.shiftKey && (M.preventDefault(), O()), M.key === "Escape" && N(null);
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
                          disabled: _ || !R.trim() || !T.trim(),
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
}, Kg = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = m.useState([]), [s, a] = m.useState(!0), [o, c] = m.useState(""), [i, d] = m.useState(""), [p, g] = m.useState(!1), [w, x] = m.useState(null), [y, k] = m.useState(""), [S, f] = m.useState(!1), u = m.useRef(null), h = m.useCallback(async () => {
    a(!0);
    try {
      const T = await ti();
      r(T);
    } catch (T) {
      console.error("Failed to fetch tags:", T);
    } finally {
      a(!1);
    }
  }, []);
  m.useEffect(() => {
    h();
  }, [h]), m.useEffect(() => {
    w !== null && u.current && (u.current.focus(), u.current.select());
  }, [w]);
  const v = async (T) => {
    T.preventDefault();
    const U = i.trim();
    if (!(!U || p)) {
      if (U.toLowerCase() === xt) {
        alert(
          `Tag name '${xt}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((J) => J.name.toLowerCase() === U.toLowerCase())) {
        alert(`Tag "${U}" already exists.`);
        return;
      }
      g(!0);
      try {
        await mg(U), d(""), await h();
      } catch (J) {
        console.error("Failed to add tag:", J);
      } finally {
        g(!1);
      }
    }
  }, _ = async (T, U) => {
    if (confirm(`Are you sure you want to delete tag "${U}"?`))
      try {
        await fg(T), await h();
      } catch (J) {
        console.error("Failed to delete tag:", J);
      }
  }, j = (T) => {
    x(T.id), k(T.name);
  }, b = () => {
    x(null), k("");
  }, N = async (T) => {
    T.preventDefault();
    const U = y.trim();
    if (!U || w === null || S) return;
    if (U.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const J = n.find((E) => E.id === w);
    if (J && J.name === U) {
      b();
      return;
    }
    if (n.some(
      (E) => E.id !== w && E.name.toLowerCase() === U.toLowerCase()
    )) {
      alert(`Tag "${U}" already exists.`);
      return;
    }
    f(!0);
    try {
      await pg(w, U), b(), await h();
    } catch (E) {
      console.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, R = (T) => {
    t(`tag:${T}`);
  }, P = m.useMemo(() => n.filter(
    (T) => T.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ l.jsx(or, { size: 16 }),
        /* @__PURE__ */ l.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ l.jsx(ye, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ l.jsxs("form", { className: "meld-tag-add-form", onSubmit: v, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: i,
            onChange: (T) => d(T.target.value),
            disabled: p
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !i.trim() || p,
            children: [
              /* @__PURE__ */ l.jsx(Is, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ l.jsx(bn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (T) => c(T.target.value)
          }
        )
      ] }),
      s ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ l.jsx("div", { className: "meld-tag-list", children: P.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : P.map((T) => /* @__PURE__ */ l.jsx("div", { className: "meld-tag-item", children: w === T.id ? /* @__PURE__ */ l.jsxs(
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
                disabled: S || !y.trim(),
                children: /* @__PURE__ */ l.jsx(Xo, { size: 14 })
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
                children: /* @__PURE__ */ l.jsx(ye, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("span", { className: "meld-tag-item__name", children: T.name }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => R(T.name),
              children: /* @__PURE__ */ l.jsx(bn, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => j(T),
              children: /* @__PURE__ */ l.jsx(zu, { size: 14 })
            }
          ),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => _(T.id, T.name),
              children: /* @__PURE__ */ l.jsx($t, { size: 14 })
            }
          )
        ] })
      ] }) }, T.id)) })
    ] })
  ] });
};
function Gg(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: s } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, c = n === t.length - 1 ? s || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? s || !r ? null : t[t.length - 1] : t[n - 1], nextId: c };
}
const qg = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var X;
  const { viewerImageId: s, images: a, viewerMode: o, lineageImages: c, settings: i } = e, {
    handleEditTags: d,
    handleEditNotes: p,
    handleRestore: g,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: y,
    handleSendToWorkflow: k,
    handleRunWithWorkflow: S,
    handleRunWithMask: f,
    handleEditSource: u
  } = Ts(e, t), { getParentChain: h } = pm(a, i), [v, _] = m.useState(!1), [j, b] = m.useState(!1), [N, R] = m.useState(
    i["viewer.show_details_by_default"]
  ), [P, T] = m.useState(null), U = P ?? i["viewer.show_thumbnails"], [J, E] = m.useState(!1), [O, A] = m.useState(!1), [L, C] = m.useState(null), [D, Q] = m.useState(null), [M, V] = m.useState(
    null
  ), de = m.useRef(null), B = m.useRef(!0);
  m.useEffect(() => (B.current = !0, () => {
    B.current = !1;
  }), []);
  const ae = m.useRef(s);
  m.useEffect(() => {
    ae.current = s;
  }, [s]);
  const q = m.useMemo(() => {
    const F = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return o === "lighttable" && e.viewerLightTableSlotId ? (pe.getState().buckets[e.viewerLightTableSlotId] || []).map((H) => {
      const Y = Number.parseInt(H, 10);
      return a.find((se) => se.id === Y) || c.find((se) => se.id === Y) || null;
    }).filter((H) => H !== null) : o === "lineage" ? c : a.filter(
      (z) => z.exists !== !1 && (i["gallery.show_parent_images"] || !z.has_children || F)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    c,
    a,
    i,
    e.searchQuery
  ]), me = s === null ? -1 : q.findIndex((F) => F.id === s), re = (o === "lineage" && c.length > 0 ? c : o === "lighttable" ? q : a).find((F) => F.id === s) || (s === ((X = e.viewerFallbackImage) == null ? void 0 : X.id) ? e.viewerFallbackImage : void 0), ee = m.useCallback(
    async (F = !1) => {
      if (!re) return;
      const z = v ? i["fullscreen.delete_mode"] : i["viewer.delete_mode"];
      if (!F && z === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [re.id],
            hasLineage: !!(re.parent_id || re.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const I = e.viewScope === "trash", K = /* @__PURE__ */ new Set([re.id]);
        if (z === "lineage") {
          const H = await Xa(re.id);
          for (const Y of H)
            K.add(Y.id);
        }
        if (!B.current || ae.current === null) return;
        if (q.length > K.size) {
          let H = !1;
          for (let Y = me + 1; Y < q.length; Y++)
            if (!K.has(q[Y].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: q[Y].id, mode: o }
              }), H = !0;
              break;
            }
          if (!H) {
            for (let Y = me - 1; Y >= 0; Y--)
              if (!K.has(q[Y].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: q[Y].id, mode: o }
                }), H = !0;
                break;
              }
          }
          H || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await to(
          Array.from(K),
          I
        ), !I) {
          const H = q.filter(
            (Y) => K.has(Y.id)
          );
          C(H), Q(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(K) });
      } catch (I) {
        t({
          type: "SET_ERROR",
          payload: I instanceof Error ? I.message : String(I)
        });
      }
    },
    [
      re,
      v,
      i,
      e.viewScope,
      q,
      me,
      o,
      t
    ]
  ), tt = m.useCallback(() => {
    re && d(re);
  }, [re, d]), Pe = m.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: v } });
  }, [t, v]), it = m.useCallback(async () => {
    const F = v ? i["fullscreen.loop"] : i["viewer.loop"];
    if (me === 0 && o === "gallery" && e.pagination.hasMore && !O && F) {
      A(!0);
      try {
        const z = e.pagination.limit, I = e.pagination.total, K = Math.max(0, I - z), H = await $l(
          K,
          z,
          e.searchQuery
        );
        if (!B.current || (t({ type: "APPEND_IMAGES", payload: H }), ae.current === null)) return;
        if (H.images.length > 0) {
          const Y = H.images[H.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: Y.id, mode: "gallery" }
          });
        }
      } catch (z) {
        console.error("Failed to jump to end:", z);
      } finally {
        A(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: v } });
  }, [
    me,
    o,
    e.pagination,
    e.searchQuery,
    i,
    t,
    O,
    v
  ]), jt = m.useCallback(
    (F) => {
      F && "stopPropagation" in F && F.stopPropagation();
      const z = de.current;
      z && (document.fullscreenElement ? document.exitFullscreen() : z.requestFullscreen().catch((I) => {
        console.error(
          `Error attempting to enable full-screen mode: ${I.message}`
        );
      }));
    },
    []
  ), ir = m.useCallback(async () => {
    re && (q.length > 1 ? Pe() : t({ type: "CLOSE_VIEWER" }), await g(re));
  }, [re, q.length, Pe, g, t]), cr = m.useCallback(async () => {
    if (!L || L.length === 0) return;
    const F = L.map((I) => I.id), z = F[0];
    try {
      const I = await ei(F);
      if (!B.current) return;
      if (t({ type: "ADD_IMAGES", payload: L }), e.viewScope === "trash") {
        const K = I.restored_ids || F;
        t({ type: "REMOVE_IMAGES", payload: K });
      }
      if (C(null), !B.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: z, mode: o }
      });
    } catch (I) {
      t({
        type: "SET_ERROR",
        payload: I instanceof Error ? I.message : String(I)
      });
    }
  }, [L, t, o, e.viewScope]), dr = m.useCallback(async () => {
    if (L && L.length > 0)
      await cr();
    else if (D && D.type === "tags") {
      const { imageId: F, addTags: z, removeTags: I } = D;
      try {
        await Za([F], z, I);
        const K = (o === "lineage" ? c : a).find((H) => H.id === F);
        if (K) {
          const H = [...K.tags];
          for (const se of z)
            H.includes(se) || H.push(se);
          const Y = H.filter((se) => !I.includes(se));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...K, tags: Y }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: F, mode: o }
          });
        }
        Q(null);
      } catch (K) {
        t({
          type: "SET_ERROR",
          payload: K instanceof Error ? K.message : String(K)
        });
      }
    }
  }, [
    L,
    D,
    cr,
    a,
    c,
    o,
    t
  ]), sl = m.useCallback(
    async (F) => {
      if (!F || !re) return;
      const z = re.id, I = [...re.tags], K = F.split(/\s+/), H = [], Y = [];
      let se = !1, oe = !1, Ne = !1;
      for (const ke of K)
        if (ke.startsWith("tag:")) {
          const ve = ke.substring(4);
          ve && !I.includes(ve) && !H.includes(ve) && H.push(ve);
        } else if (ke.startsWith("-tag:")) {
          const ve = ke.substring(5);
          ve && I.includes(ve) && !Y.includes(ve) && Y.push(ve);
        } else if (ke.startsWith("tag-toggle:")) {
          const ve = ke.substring(11);
          ve && (I.includes(ve) ? Y.includes(ve) || Y.push(ve) : H.includes(ve) || H.push(ve));
        } else ke === "next" ? se = !0 : ke === "prev" ? oe = !0 : ke === "delete" && (Ne = !0);
      if (H.length > 0 || Y.length > 0)
        try {
          await Za(
            [z],
            H,
            Y
          );
          const ke = [...I];
          for (const bt of H)
            ke.includes(bt) || ke.push(bt);
          const ve = ke.filter((bt) => !Y.includes(bt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...re, id: z, tags: ve }
          }), Q({
            type: "tags",
            imageId: z,
            addTags: [...Y],
            removeTags: [...H]
          }), C(null);
        } catch (ke) {
          console.error("Failed to update tags via shortcut:", ke);
        }
      Ne ? ee(!0) : se ? Pe() : oe && it();
    },
    [re, t, Pe, it, ee]
  );
  m.useEffect(() => {
    const F = (I) => {
      const K = I.target, H = K.tagName === "INPUT" || K.tagName === "TEXTAREA" || K.isContentEditable;
      if (H && I.key !== "Escape") {
        I.key === "Enter" && (I.ctrlKey || I.metaKey) && I.preventDefault();
        return;
      }
      if (s === null || e.activeModal.type !== "none")
        return;
      const Y = I.key === "Delete" || I.key === "Backspace", se = I.key === "ArrowRight" || I.key === "ArrowLeft" || I.key === "ArrowDown" || I.key === "ArrowUp", oe = [
        "f",
        "F",
        "i",
        "I",
        "t",
        "T",
        "r",
        "R",
        "Enter"
      ].includes(I.key), Ne = I.key === "Escape", ke = (I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z" || I.code === "KeyZ"), ve = /^[0-9]$/.test(I.key) && !I.ctrlKey && !I.metaKey && !I.altKey && I.code !== "KeyZ";
      if (Y || se || oe || Ne || ke || ve)
        if (!H)
          I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
        else if (Ne)
          I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
        else
          return;
      else
        return;
      if (I.key === "Escape")
        document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (I.key === "ArrowRight" || I.key === "ArrowDown")
        Pe();
      else if (I.key === "ArrowLeft" || I.key === "ArrowUp")
        it();
      else if (I.key === "f" || I.key === "F" || I.key === "Enter")
        jt(I);
      else if (I.key === "i" || I.key === "I")
        R((bt) => !bt);
      else if (I.key === "t" || I.key === "T")
        tt();
      else if ((I.key === "r" || I.key === "R") && e.viewScope === "trash")
        ir();
      else if (I.key === "Delete")
        ee();
      else if ((I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z"))
        dr();
      else if (ve && !H) {
        const bt = `viewer.shortcut.${I.key}`, al = i[bt];
        typeof al == "string" && al && (V(I.key), setTimeout(() => {
          B.current && V(null);
        }, 500), sl(al));
      }
    };
    window.addEventListener("keydown", F, { capture: !0 });
    const z = () => {
      const I = !!document.fullscreenElement;
      _(I), R(I ? i["fullscreen.show_details_by_default"] : i["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", z), () => {
      window.removeEventListener("keydown", F, { capture: !0 }), document.removeEventListener("fullscreenchange", z);
    };
  }, [
    s,
    t,
    jt,
    Pe,
    it,
    i,
    ee,
    e.activeModal.type,
    dr,
    tt,
    ir,
    e.viewScope,
    sl
  ]), m.useEffect(() => {
    s !== null && r(s).catch((F) => {
      console.error("Failed to fetch full image details for viewer:", F);
    });
  }, [s, r]), m.useEffect(() => {
    o === "lineage" && s !== null && c.length === 0 && (E(!0), Xa(s).then((F) => {
      B.current && t({ type: "SET_LINEAGE", payload: F });
    }).catch((F) => {
      console.error("Failed to fetch lineage:", F);
    }).finally(() => {
      B.current && E(!1);
    }));
  }, [o, s, c.length, t]), m.useEffect(() => {
    o !== "gallery" || s === null || e.isLoading || !e.pagination.hasMore || me !== -1 && me >= q.length - 15 && n();
  }, [
    s,
    q.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    me
  ]);
  const ur = m.useMemo(() => {
    if (!U || me === -1) return [];
    const F = i["viewer.thumbnail_window_size"], z = Math.floor(F / 2);
    let I = Math.max(0, me - z);
    const K = Math.min(q.length, I + F);
    return K === q.length && (I = Math.max(0, K - F)), q.slice(I, K).map((H, Y) => ({
      img: H,
      absIndex: I + Y
    }));
  }, [q, me, i, U]), $ = m.useMemo(() => re ? h(re) : [], [re, h]);
  return m.useEffect(() => {
    var F, z;
    if (s !== null) {
      if (U) {
        const I = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        I && I.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((F = document.activeElement) == null ? void 0 : F.tagName) === "CANVAS" && document.activeElement.blur(), (z = de.current) == null || z.focus();
    }
  }, [s, U]), m.useEffect(() => {
    if (s === null || q.length === 0) return;
    const F = q.map((se) => se.id), z = F.indexOf(s);
    if (z === -1) return;
    const I = v ? i["fullscreen.loop"] : i["viewer.loop"], { prevId: K, nextId: H } = Gg({
      ids: F,
      index: z,
      loopEnabled: I,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), Y = setTimeout(() => {
      const se = [K, H].filter(
        (oe) => oe !== null && oe !== s
      );
      se.length !== 0 && Promise.allSettled(se.map((oe) => r(oe))).then(
        (oe) => {
          for (const Ne of oe)
            Ne.status === "rejected" && te.warn(
              "Prefetching adjacent image details failed",
              Ne.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(Y);
  }, [
    s,
    q,
    v,
    i,
    e.pagination.hasMore,
    o,
    r
  ]), m.useEffect(() => {
    if (s === null || q.length === 0) return;
    const F = q.findIndex(
      (H) => H.id === s
    );
    if (F === -1) return;
    const z = (H) => Je(H), I = [
      F + 1,
      F + 2,
      F - 1
    ], K = setTimeout(() => {
      for (const H of I)
        if (H >= 0 && H < q.length) {
          const Y = q[H], se = new Image();
          se.src = z(Y);
        }
    }, 150);
    return () => clearTimeout(K);
  }, [s, q]), {
    isFullscreen: v,
    showDetails: N,
    setShowDetails: R,
    showThumbnails: U,
    setShowThumbnailsOverride: T,
    isLoadingLineage: J,
    isJumping: O,
    isMenuOpen: j,
    setIsMenuOpen: b,
    activeShortcutKey: M,
    lastDeletedImages: L,
    setLastDeletedImages: C,
    overlayRef: de,
    handleNext: Pe,
    handlePrevious: it,
    handleDelete: ee,
    handleUpdateUserNotes: w,
    handleEditNotes: () => re && p(re),
    handleTagEdit: tt,
    handleRestore: ir,
    handleUndo: dr,
    handleRestoreWorkflow: async () => {
      if (!re) return;
      await x(re) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!re) return;
      await y(re) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!re) return;
      k(re) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => re && S(re),
    handleRunWithMask: (F) => re && f(re, F),
    handleEditSource: () => re && u(re),
    toggleFullscreen: jt,
    currentIndex: me,
    currentThumbnails: q,
    image: re,
    windowedThumbnails: ur,
    parentChain: $
  };
}, Yg = ({
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
}) }) : null, Xg = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: s,
  dispatch: a,
  onEditNotes: o
}) => {
  const [c, i] = m.useState("idle");
  m.useEffect(() => {
    i("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], p = d === "always" || d === "if_present" && e.user_notes;
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
            (g, w) => g.imgSrc && /* @__PURE__ */ l.jsx(
              "img",
              {
                src: g.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (x) => {
                  x.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: g.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: w === 0 ? "Source" : w === 1 ? "Grand-Source" : `Ancestor (S${w + 1})`,
                alt: "source thumb"
              },
              g.id || w
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
          /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((g) => /* @__PURE__ */ l.jsx("span", { className: "meld-viewer-details-tag", children: g }, g)) })
        ] }),
        p && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            c === "saving" && /* @__PURE__ */ l.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-viewer-notes-preview",
              onClick: (g) => {
                g.stopPropagation(), o == null || o();
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
}, _m = m.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const s = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, o = typeof e.parent_id == "number" && e.parent_id === n.id, c = Je(e);
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
          /* @__PURE__ */ l.jsx("img", { src: c, alt: e.filename }),
          (a || o) && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${a ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: a ? "Source Image" : "Derivative Image",
              children: a ? /* @__PURE__ */ l.jsx(Ru, { size: 12 }) : /* @__PURE__ */ l.jsx(Pu, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
_m.displayName = "ThumbnailItem";
const Zg = ({
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
  ) : e.map(({ img: c }) => /* @__PURE__ */ l.jsx(
    _m,
    {
      thumb: c,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    c.id
  )),
  o === "gallery" && a && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ l.jsx(Zr, { className: "animate-spin", size: 20 }) })
] }) });
function Jg() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = _e(), {
    isFullscreen: s,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: c,
    setShowThumbnailsOverride: i,
    isLoadingLineage: d,
    isJumping: p,
    isMenuOpen: g,
    setIsMenuOpen: w,
    activeShortcutKey: x,
    setLastDeletedImages: y,
    overlayRef: k,
    handleNext: S,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: h,
    handleRestore: v,
    handleRestoreWorkflow: _,
    handleAddUnifiedLoader: j,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: N,
    handleRunWithMask: R,
    handleEditSource: P,
    handleDelete: T,
    toggleFullscreen: U,
    image: J,
    windowedThumbnails: E,
    parentChain: O
  } = qg({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), A = m.useRef(null), L = m.useRef(null), { executeWorkflow: C } = ni(), D = m.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!J) return null;
  const { viewerImageId: Q, viewerMode: M } = e, V = s ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return he.createPortal(
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
              className: `meld-viewer-content ${s ? "meld-viewer-content--fullscreen" : ""} ${c ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (de) => de.stopPropagation(),
              children: [
                V && /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: v,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ l.jsx(Zr, { size: 20 })
                    }
                  ),
                  !s && /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => i(!c),
                      type: "button",
                      title: c ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ l.jsx(Au, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ l.jsx(fh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: U,
                      type: "button",
                      title: s ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: s ? /* @__PURE__ */ l.jsx(xh, { size: 20 }) : /* @__PURE__ */ l.jsx(vh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    ri,
                    {
                      isMenuOpen: g,
                      setIsMenuOpen: w,
                      menuRef: L,
                      settings: e.settings,
                      onAddUnifiedLoader: j,
                      onRestoreWorkflow: _,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: N,
                      onRunWithMask: R,
                      onEditSource: P,
                      onEditTags: u,
                      onEditNotes: h,
                      onDelete: T,
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
                      children: /* @__PURE__ */ l.jsx(ye, { size: 20 })
                    }
                  )
                ] }),
                V && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: p,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ l.jsx(Ou, { size: 32 })
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { className: "meld-viewer-image-container", children: [
                  p && /* @__PURE__ */ l.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ l.jsx(Zr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      ref: A,
                      src: Je(J),
                      alt: J.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[s ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${p ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                V && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: S,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ l.jsx(Zo, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ l.jsx(
                  Xg,
                  {
                    image: J,
                    isFullscreen: s,
                    settings: e.settings,
                    showIcons: V,
                    parentChain: O,
                    dispatch: t,
                    onEditNotes: h
                  }
                ),
                !s && c && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ l.jsx(
                  Zg,
                  {
                    windowedThumbnails: E,
                    viewerImageId: Q,
                    currentImage: J,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: M
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  Yg,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ l.jsx(
            dm,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (de, B) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: de,
                        targetLoaderNodeId: B
                      }
                    }), !1;
                  const ae = e.activeModal.maskFilename;
                  for (const q of e.activeModal.images)
                    await C(
                      de,
                      q,
                      ae,
                      B
                    );
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ l.jsx(
            cm,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (de) => {
                e.activeModal.type === "node_selection" && Jr(e.activeModal.image, de);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ l.jsx(mm, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ l.jsx(
            um,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: y
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ l.jsx(fm, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ l.jsx(Bu, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ l.jsx(am, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ l.jsx(
            om,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ l.jsx(
            fs,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ l.jsx(
            fs,
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
                  const de = e.activeModal.currentIndex + 1;
                  de < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: de
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            },
            e.activeModal.images[e.activeModal.currentIndex].id
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ l.jsx(
            im,
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
const ey = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: s } = _e(), [a, o] = m.useState("gallery"), [c, i] = m.useState(""), [d, p] = m.useState(e.pagination.limit);
  m.useEffect(() => {
    p(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const g = e.searchQuery.trim() !== "", w = m.useRef(null), x = m.useRef(null), y = pe((u) => u.buckets), k = m.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    for (const h of Object.values(y))
      for (const v of h)
        u.add(Number(v));
    return u;
  }, [y]), S = m.useMemo(() => {
    const u = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((h) => k.has(h.id) ? !1 : e.viewScope === "trash" ? h.exists !== !1 || e.settings["gallery.trash.show_missing"] : h.exists !== !1 && (e.settings["gallery.show_parent_images"] || !h.has_children || u));
  }, [
    e.images,
    e.settings,
    e.viewScope,
    e.searchQuery,
    k
  ]), f = m.useMemo(
    () => S.slice(0, d),
    [S, d]
  );
  return m.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && S.length === 0 && (te.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    S.length,
    r
  ]), m.useEffect(() => {
    const u = (h) => {
      h.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), h.preventDefault(), h.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), h.preventDefault(), h.stopPropagation()));
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [e.activeModal.type, e.selectedIds.size, t]), m.useEffect(() => {
    const u = new IntersectionObserver(
      (v) => {
        if (v[0].isIntersecting) {
          if (e.isLoading) {
            te.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < S.length ? (te.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                S.length
              ),
              totalAvailableLocally: S.length
            }
          ), p((_) => _ + e.pagination.limit)) : e.pagination.hasMore ? (te.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : te.log(
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
  ]), m.useEffect(() => {
    const u = e.viewerImageId ?? x.current;
    if (u !== null && S.some((v) => v.id === u)) {
      const v = S.findIndex((j) => j.id === u);
      if (v >= d) {
        p(
          Math.ceil((v + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const _ = document.querySelector(
        `[data-image-id="${u}"]`
      );
      _ && (_.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (x.current = null));
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
    lastSearchQuery: c,
    setLastSearchQuery: i,
    localLimit: d,
    displayedImages: S,
    visibleImages: f,
    isSearchActive: g,
    loadMoreRef: w
  };
}, ty = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = _e(), { handleRunWithWorkflow: s, handleRunWithMask: a } = Ts(
    e,
    t
  ), o = e.selectedIds.size, [c, i] = m.useState(!1), [d, p] = m.useState(null), g = m.useRef(null), [w, x] = m.useState(
    null
  );
  if (m.useEffect(() => {
    const b = document.getElementById("meld-bulk-bar-portal");
    let N = b instanceof HTMLDivElement ? b : null;
    if (!N) {
      N = document.createElement("div"), N.id = "meld-bulk-bar-portal", N.dataset.mountCount = "0";
      const P = document.querySelector(".comfyui-body-bottom");
      P ? P.appendChild(N) : document.body.appendChild(N);
    }
    const R = Number.parseInt(N.dataset.mountCount || "0", 10);
    return N.dataset.mountCount = (R + 1).toString(), x(N), () => {
      if (N) {
        const T = Number.parseInt(
          N.dataset.mountCount || "1",
          10
        ) - 1;
        N.dataset.mountCount = T.toString(), T <= 0 && N.remove();
      }
    };
  }, []), et({
    onEscape: () => i(!1),
    enabled: c
  }), o === 0 || !w) return null;
  const y = e.viewScope === "trash", k = () => e.images.filter((b) => e.selectedIds.has(b.id)), S = () => {
    g.current && (p(g.current.getBoundingClientRect()), i(!0));
  }, f = (b) => {
    b(), i(!1);
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
  }, h = () => {
    const b = k();
    s(b);
  }, v = () => {
    const b = k();
    b.length > 0 && a(b, "run");
  }, _ = () => {
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
      className: `meld-bulk-bar ${y ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ l.jsxs("span", { className: "meld-bulk-bar__info", children: [
          o,
          " items selected"
        ] }),
        /* @__PURE__ */ l.jsxs(
          "button",
          {
            ref: g,
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--action",
            onClick: S,
            children: [
              /* @__PURE__ */ l.jsx(
                wh,
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
              /* @__PURE__ */ l.jsx(ye, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        ),
        c && d && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu-overlay",
              onClick: () => i(!1),
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
              children: y ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
                    onClick: () => f(r),
                    children: [
                      /* @__PURE__ */ l.jsx(Zr, { size: 14 }),
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
                      /* @__PURE__ */ l.jsx($t, { size: 14 }),
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
                      /* @__PURE__ */ l.jsx(or, { size: 14 }),
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
                      /* @__PURE__ */ l.jsx(Jo, { size: 14 }),
                      " Queue Workflow"
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => f(v),
                    children: [
                      /* @__PURE__ */ l.jsx(Sh, { size: 14 }),
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
                      /* @__PURE__ */ l.jsx(Yr, { size: 14 }),
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
                      /* @__PURE__ */ l.jsx($t, { size: 14 }),
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
  return he.createPortal(j, w);
}, ny = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: s,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: c,
    localLimit: i,
    displayedImages: d,
    visibleImages: p,
    isSearchActive: g,
    loadMoreRef: w
  } = ey(), { isOpen: x, setIsOpen: y } = pe(), k = pe((N) => N.buckets), S = Object.values(k).some((N) => N && N.length > 0);
  te.log("GalleryPanel: isLightTableOpen =", x);
  const [f, u] = m.useState(!1), [h, v] = m.useState(null), _ = m.useRef(null), j = m.useCallback(() => {
    _.current && (v(
      _.current.getBoundingClientRect()
    ), u(!0));
  }, []), b = m.useCallback(
    (N) => {
      t({ type: "SET_SEARCH_QUERY", payload: N }), c(N), a("search"), u(!1);
    },
    [t, c, a]
  );
  return te.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: p.length,
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
            U && pe.getState().removeFromBucket(R, U.trim());
          });
        }
      },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ l.jsx($t, { size: 14 }),
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
                  /* @__PURE__ */ l.jsx(ye, { size: 14 }),
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
                  s === "search" ? (c(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: g ? "var(--meld-success-color)" : s === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: g ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ l.jsx(bn, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ l.jsx(
              "button",
              {
                ref: _,
                type: "button",
                onClick: j,
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
                  rr,
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
                children: /* @__PURE__ */ l.jsx(or, { size: 14 })
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ l.jsx(hh, { size: 14 }) : /* @__PURE__ */ l.jsx(Au, { size: 14 })
              }
            ),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  te.log(
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
                    kh,
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
                children: /* @__PURE__ */ l.jsx(Yr, { size: 14 })
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
                  Zr,
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
                children: /* @__PURE__ */ l.jsx(Fu, { size: 14 })
              }
            )
          ] }),
          s === "search" && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ l.jsx(Hg, {}) })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ l.jsx(Ag, {}),
          e.error && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__error", children: e.error }),
          s === "tags" ? /* @__PURE__ */ l.jsx(
            Kg,
            {
              onClose: () => a("gallery"),
              onSearch: (N) => {
                t({ type: "SET_SEARCH_QUERY", payload: N }), a("search");
              }
            }
          ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : p.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsx(
              "div",
              {
                className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
                style: {
                  "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
                },
                children: p.map((N) => {
                  const R = e.settings["sidebar.thumbnail_size"] || 100, P = e.settings["gallery.view_mode"] === "grid_only", T = P && N.width && N.height ? Math.min(
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
                        Og,
                        {
                          height: P ? R + 10 : Math.max(R, 150),
                          style: {
                            width: typeof T == "number" ? `${T}px` : T,
                            minWidth: typeof T == "number" ? `${T}px` : T,
                            display: P ? "inline-block" : "block"
                          },
                          children: /* @__PURE__ */ l.jsx(Rg, { image: N })
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
                  i >= d.length && !e.pagination.hasMore && p.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ l.jsx(ty, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ l.jsx(Jg, {}),
        /* @__PURE__ */ l.jsx(Dg, {}),
        f && /* @__PURE__ */ l.jsx(
          Qg,
          {
            anchorRect: h,
            onClose: () => u(!1),
            onSelect: b
          }
        ),
        /* @__PURE__ */ l.jsx(Ug, {})
      ]
    }
  );
};
wc.registerExtension({
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
const ry = document.getElementById(
  "meld-gallery-style"
);
if (!ry) {
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
let El = null, ct = null;
wc.registerExtension({
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
      const n = await Qu();
      te.init(n.dev_mode), te.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), te.init(!1);
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
      }, le.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), le.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), le.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), te.log("Import completed.");
      }), le.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const s of n.output.images)
              if (s.type === "output")
                try {
                  await Uu({
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
            te.log("render called", {
              el: n,
              galleryRoot: El,
              galleryContainer: ct
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), ct || (te.log("galleryContainer not found, creating new one"), ct = document.createElement("div"), ct.id = "meld-gallery-container", ct.style.height = "100%", ct.style.width = "100%", ct.style.display = "flex", ct.style.flexDirection = "column", ct.style.overflow = "hidden"), n.contains(ct) || (te.log("Appending galleryContainer to el"), n.appendChild(ct)), El ? te.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (te.log("Creating new gallery root"), El = Iu(ct), El.render(
              qt.createElement(
                ug,
                null,
                qt.createElement(ny)
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
