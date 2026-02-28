import { api as le } from "/scripts/api.js";
import { app as Cc } from "/scripts/app.js";
function Om(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nc = { exports: {} }, ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tl = Symbol.for("react.element"), zm = Symbol.for("react.portal"), Am = Symbol.for("react.fragment"), Fm = Symbol.for("react.strict_mode"), Wm = Symbol.for("react.profiler"), $m = Symbol.for("react.provider"), Um = Symbol.for("react.context"), Vm = Symbol.for("react.forward_ref"), Qm = Symbol.for("react.suspense"), Bm = Symbol.for("react.memo"), Hm = Symbol.for("react.lazy"), ai = Symbol.iterator;
function Km(e) {
  return e === null || typeof e != "object" ? null : (e = ai && e[ai] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Mc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ic = Object.assign, Tc = {};
function sr(e, t, n) {
  this.props = e, this.context = t, this.refs = Tc, this.updater = n || Mc;
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
sr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lc() {
}
Lc.prototype = sr.prototype;
function lo(e, t, n) {
  this.props = e, this.context = t, this.refs = Tc, this.updater = n || Mc;
}
var so = lo.prototype = new Lc();
so.constructor = lo;
Ic(so, sr.prototype);
so.isPureReactComponent = !0;
var oi = Array.isArray, Dc = Object.prototype.hasOwnProperty, ao = { current: null }, Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rc(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Dc.call(t, r) && !Pc.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: tl, type: e, key: a, ref: o, props: l, _owner: ao.current };
}
function Gm(e, t) {
  return { $$typeof: tl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function oo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tl;
}
function qm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ii = /\/+/g;
function Ps(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? qm("" + e.key) : t.toString(36);
}
function Tl(e, t, n, r, l) {
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
        case tl:
        case zm:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Ps(o, 0) : r, oi(l) ? (n = "", e != null && (n = e.replace(ii, "$&/") + "/"), Tl(l, t, n, "", function(d) {
    return d;
  })) : l != null && (oo(l) && (l = Gm(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(ii, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", oi(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Ps(a, i);
    o += Tl(a, t, n, c, l);
  }
  else if (c = Km(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Ps(a, i++), o += Tl(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function dl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Tl(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function Ym(e) {
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
var He = { current: null }, Ll = { transition: null }, Xm = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: Ll, ReactCurrentOwner: ao };
function Oc() {
  throw Error("act(...) is not supported in production builds of React.");
}
ie.Children = { map: dl, forEach: function(e, t, n) {
  dl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return dl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return dl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!oo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ie.Component = sr;
ie.Fragment = Am;
ie.Profiler = Wm;
ie.PureComponent = lo;
ie.StrictMode = Fm;
ie.Suspense = Qm;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xm;
ie.act = Oc;
ie.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ic({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = ao.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) Dc.call(t, c) && !Pc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: tl, type: e.type, key: l, ref: a, props: r, _owner: o };
};
ie.createContext = function(e) {
  return e = { $$typeof: Um, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: $m, _context: e }, e.Consumer = e;
};
ie.createElement = Rc;
ie.createFactory = function(e) {
  var t = Rc.bind(null, e);
  return t.type = e, t;
};
ie.createRef = function() {
  return { current: null };
};
ie.forwardRef = function(e) {
  return { $$typeof: Vm, render: e };
};
ie.isValidElement = oo;
ie.lazy = function(e) {
  return { $$typeof: Hm, _payload: { _status: -1, _result: e }, _init: Ym };
};
ie.memo = function(e, t) {
  return { $$typeof: Bm, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function(e) {
  var t = Ll.transition;
  Ll.transition = {};
  try {
    e();
  } finally {
    Ll.transition = t;
  }
};
ie.unstable_act = Oc;
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
Nc.exports = ie;
var f = Nc.exports;
const qt = /* @__PURE__ */ Om(f);
var zc = { exports: {} }, at = {}, Ac = { exports: {} }, Fc = {};
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
  function t(E, L) {
    var V = E.length;
    E.push(L);
    e: for (; 0 < V; ) {
      var M = V - 1 >>> 1, Q = E[M];
      if (0 < l(Q, L)) E[M] = L, E[V] = Q, V = M;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var L = E[0], V = E.pop();
    if (V !== L) {
      E[0] = V;
      e: for (var M = 0, Q = E.length, de = Q >>> 1; M < de; ) {
        var B = 2 * (M + 1) - 1, ae = E[B], q = B + 1, me = E[q];
        if (0 > l(ae, V)) q < Q && 0 > l(me, ae) ? (E[M] = me, E[q] = V, M = q) : (E[M] = ae, E[B] = V, M = B);
        else if (q < Q && 0 > l(me, V)) E[M] = me, E[q] = V, M = q;
        else break e;
      }
    }
    return L;
  }
  function l(E, L) {
    var V = E.sortIndex - L.sortIndex;
    return V !== 0 ? V : E.id - L.id;
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
  var c = [], d = [], m = 1, g = null, v = 3, x = !1, w = !1, _ = !1, S = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var L = n(d); L !== null; ) {
      if (L.callback === null) r(d);
      else if (L.startTime <= E) r(d), L.sortIndex = L.expirationTime, t(c, L);
      else break;
      L = n(d);
    }
  }
  function y(E) {
    if (_ = !1, p(E), !w) if (n(c) !== null) w = !0, z(k);
    else {
      var L = n(d);
      L !== null && T(y, L.startTime - E);
    }
  }
  function k(E, L) {
    w = !1, _ && (_ = !1, h(C), C = -1), x = !0;
    var V = v;
    try {
      for (p(L), g = n(c); g !== null && (!(g.expirationTime > L) || E && !D()); ) {
        var M = g.callback;
        if (typeof M == "function") {
          g.callback = null, v = g.priorityLevel;
          var Q = M(g.expirationTime <= L);
          L = e.unstable_now(), typeof Q == "function" ? g.callback = Q : g === n(c) && r(c), p(L);
        } else r(c);
        g = n(c);
      }
      if (g !== null) var de = !0;
      else {
        var B = n(d);
        B !== null && T(y, B.startTime - L), de = !1;
      }
      return de;
    } finally {
      g = null, v = V, x = !1;
    }
  }
  var j = !1, b = null, C = -1, O = 5, P = -1;
  function D() {
    return !(e.unstable_now() - P < O);
  }
  function U() {
    if (b !== null) {
      var E = e.unstable_now();
      P = E;
      var L = !0;
      try {
        L = b(!0, E);
      } finally {
        L ? J() : (j = !1, b = null);
      }
    } else j = !1;
  }
  var J;
  if (typeof u == "function") J = function() {
    u(U);
  };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(), R = N.port2;
    N.port1.onmessage = U, J = function() {
      R.postMessage(null);
    };
  } else J = function() {
    S(U, 0);
  };
  function z(E) {
    b = E, j || (j = !0, J());
  }
  function T(E, L) {
    C = S(function() {
      E(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    w || x || (w = !0, z(k));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(E) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = v;
    }
    var V = v;
    v = L;
    try {
      return E();
    } finally {
      v = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, L) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var V = v;
    v = E;
    try {
      return L();
    } finally {
      v = V;
    }
  }, e.unstable_scheduleCallback = function(E, L, V) {
    var M = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? M + V : M) : V = M, E) {
      case 1:
        var Q = -1;
        break;
      case 2:
        Q = 250;
        break;
      case 5:
        Q = 1073741823;
        break;
      case 4:
        Q = 1e4;
        break;
      default:
        Q = 5e3;
    }
    return Q = V + Q, E = { id: m++, callback: L, priorityLevel: E, startTime: V, expirationTime: Q, sortIndex: -1 }, V > M ? (E.sortIndex = V, t(d, E), n(c) === null && E === n(d) && (_ ? (h(C), C = -1) : _ = !0, T(y, V - M))) : (E.sortIndex = Q, t(c, E), w || x || (w = !0, z(k))), E;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(E) {
    var L = v;
    return function() {
      var V = v;
      v = L;
      try {
        return E.apply(this, arguments);
      } finally {
        v = V;
      }
    };
  };
})(Fc);
Ac.exports = Fc;
var Zm = Ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jm = f, st = Zm;
function W(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Wc = /* @__PURE__ */ new Set(), Pr = {};
function En(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Pr[e] = t, e = 0; e < t.length; e++) Wc.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oa = Object.prototype.hasOwnProperty, ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ci = {}, di = {};
function tf(e) {
  return oa.call(di, e) ? !0 : oa.call(ci, e) ? !1 : ef.test(e) ? di[e] = !0 : (ci[e] = !0, !1);
}
function nf(e, t, n, r) {
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
function rf(e, t, n, r) {
  if (t === null || typeof t > "u" || nf(e, t, n, r)) return !0;
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
function Ke(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
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
var io = /[\-:]([a-z])/g;
function co(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    io,
    co
  );
  Fe[t] = new Ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(io, co);
  Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(io, co);
  Fe[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Fe[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uo(e, t, n, r) {
  var l = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rf(t, n, l, r) && (n = null), r || l === null ? tf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ut = Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ul = Symbol.for("react.element"), Dn = Symbol.for("react.portal"), Pn = Symbol.for("react.fragment"), mo = Symbol.for("react.strict_mode"), ia = Symbol.for("react.profiler"), $c = Symbol.for("react.provider"), Uc = Symbol.for("react.context"), fo = Symbol.for("react.forward_ref"), ca = Symbol.for("react.suspense"), da = Symbol.for("react.suspense_list"), po = Symbol.for("react.memo"), Bt = Symbol.for("react.lazy"), Vc = Symbol.for("react.offscreen"), ui = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != "object" ? null : (e = ui && e[ui] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ee = Object.assign, Rs;
function _r(e) {
  if (Rs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Rs = t && t[1] || "";
  }
  return `
` + Rs + e;
}
var Os = !1;
function zs(e, t) {
  if (!e || Os) return "";
  Os = !0;
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
      for (var l = d.stack.split(`
`), a = r.stack.split(`
`), o = l.length - 1, i = a.length - 1; 1 <= o && 0 <= i && l[o] !== a[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== a[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || l[o] !== a[i]) {
              var c = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    Os = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? _r(e) : "";
}
function lf(e) {
  switch (e.tag) {
    case 5:
      return _r(e.type);
    case 16:
      return _r("Lazy");
    case 13:
      return _r("Suspense");
    case 19:
      return _r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = zs(e.type, !1), e;
    case 11:
      return e = zs(e.type.render, !1), e;
    case 1:
      return e = zs(e.type, !0), e;
    default:
      return "";
  }
}
function ua(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Pn:
      return "Fragment";
    case Dn:
      return "Portal";
    case ia:
      return "Profiler";
    case mo:
      return "StrictMode";
    case ca:
      return "Suspense";
    case da:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Uc:
      return (e.displayName || "Context") + ".Consumer";
    case $c:
      return (e._context.displayName || "Context") + ".Provider";
    case fo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case po:
      return t = e.displayName || null, t !== null ? t : ua(e.type) || "Memo";
    case Bt:
      t = e._payload, e = e._init;
      try {
        return ua(e(t));
      } catch {
      }
  }
  return null;
}
function sf(e) {
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
      return ua(t);
    case 8:
      return t === mo ? "StrictMode" : "Mode";
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
function Qc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function af(e) {
  var t = Qc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
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
function ml(e) {
  e._valueTracker || (e._valueTracker = af(e));
}
function Bc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Qc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ql(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ma(e, t) {
  var n = t.checked;
  return Ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function mi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = an(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Hc(e, t) {
  t = t.checked, t != null && uo(e, "checked", t, !1);
}
function fa(e, t) {
  Hc(e, t);
  var n = an(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? pa(e, t.type, n) : t.hasOwnProperty("defaultValue") && pa(e, t.type, an(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function fi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function pa(e, t, n) {
  (t !== "number" || Ql(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kr = Array.isArray;
function Bn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ha(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return Ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function pi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(W(92));
      if (kr(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: an(n) };
}
function Kc(e, t) {
  var n = an(t.value), r = an(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function hi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ga(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Gc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fl, qc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (fl = fl || document.createElement("div"), fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Rr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var br = {
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
}, of = ["Webkit", "ms", "Moz", "O"];
Object.keys(br).forEach(function(e) {
  of.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), br[t] = br[e];
  });
});
function Yc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || br.hasOwnProperty(e) && br[e] ? ("" + t).trim() : t + "px";
}
function Xc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Yc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var cf = Ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ya(e, t) {
  if (t) {
    if (cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function va(e, t) {
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
var wa = null;
function ho(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var xa = null, Hn = null, Kn = null;
function gi(e) {
  if (e = ll(e)) {
    if (typeof xa != "function") throw Error(W(280));
    var t = e.stateNode;
    t && (t = xs(t), xa(e.stateNode, e.type, t));
  }
}
function Zc(e) {
  Hn ? Kn ? Kn.push(e) : Kn = [e] : Hn = e;
}
function Jc() {
  if (Hn) {
    var e = Hn, t = Kn;
    if (Kn = Hn = null, gi(e), t) for (e = 0; e < t.length; e++) gi(t[e]);
  }
}
function ed(e, t) {
  return e(t);
}
function td() {
}
var As = !1;
function nd(e, t, n) {
  if (As) return e(t, n);
  As = !0;
  try {
    return ed(e, t, n);
  } finally {
    As = !1, (Hn !== null || Kn !== null) && (td(), Jc());
  }
}
function Or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xs(n);
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
var _a = !1;
if (zt) try {
  var pr = {};
  Object.defineProperty(pr, "passive", { get: function() {
    _a = !0;
  } }), window.addEventListener("test", pr, pr), window.removeEventListener("test", pr, pr);
} catch {
  _a = !1;
}
function df(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var Er = !1, Bl = null, Hl = !1, ka = null, uf = { onError: function(e) {
  Er = !0, Bl = e;
} };
function mf(e, t, n, r, l, a, o, i, c) {
  Er = !1, Bl = null, df.apply(uf, arguments);
}
function ff(e, t, n, r, l, a, o, i, c) {
  if (mf.apply(this, arguments), Er) {
    if (Er) {
      var d = Bl;
      Er = !1, Bl = null;
    } else throw Error(W(198));
    Hl || (Hl = !0, ka = d);
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
function rd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function yi(e) {
  if (Cn(e) !== e) throw Error(W(188));
}
function pf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Cn(e), t === null) throw Error(W(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var a = l.alternate;
    if (a === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === n) return yi(l), e;
        if (a === r) return yi(l), t;
        a = a.sibling;
      }
      throw Error(W(188));
    }
    if (n.return !== r.return) n = l, r = a;
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === n) {
          o = !0, n = l, r = a;
          break;
        }
        if (i === r) {
          o = !0, r = l, n = a;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = a.child; i; ) {
          if (i === n) {
            o = !0, n = a, r = l;
            break;
          }
          if (i === r) {
            o = !0, r = a, n = l;
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
function ld(e) {
  return e = pf(e), e !== null ? sd(e) : null;
}
function sd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ad = st.unstable_scheduleCallback, vi = st.unstable_cancelCallback, hf = st.unstable_shouldYield, gf = st.unstable_requestPaint, Ie = st.unstable_now, yf = st.unstable_getCurrentPriorityLevel, go = st.unstable_ImmediatePriority, od = st.unstable_UserBlockingPriority, Kl = st.unstable_NormalPriority, vf = st.unstable_LowPriority, id = st.unstable_IdlePriority, gs = null, Mt = null;
function wf(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
    Mt.onCommitFiberRoot(gs, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var _t = Math.clz32 ? Math.clz32 : kf, xf = Math.log, _f = Math.LN2;
function kf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (xf(e) / _f | 0) | 0;
}
var pl = 64, hl = 4194304;
function Sr(e) {
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
function Gl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Sr(i) : (a &= o, a !== 0 && (r = Sr(a)));
  } else o = n & ~l, o !== 0 ? r = Sr(o) : a !== 0 && (r = Sr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - _t(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Sf(e, t) {
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
function jf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - _t(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = Sf(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Sa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function cd() {
  var e = pl;
  return pl <<= 1, !(pl & 4194240) && (pl = 64), e;
}
function Fs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _t(t), e[t] = n;
}
function bf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - _t(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function yo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - _t(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var fe = 0;
function dd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ud, vo, md, fd, pd, ja = !1, gl = [], Zt = null, Jt = null, en = null, zr = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), Kt = [], Ef = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wi(e, t) {
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
      zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ar.delete(t.pointerId);
  }
}
function hr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = ll(t), t !== null && vo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Cf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Zt = hr(Zt, e, t, n, r, l), !0;
    case "dragenter":
      return Jt = hr(Jt, e, t, n, r, l), !0;
    case "mouseover":
      return en = hr(en, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return zr.set(a, hr(zr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Ar.set(a, hr(Ar.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function hd(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = rd(n), t !== null) {
          e.blockedOn = t, pd(e.priority, function() {
            md(n);
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
function Dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      wa = r, n.target.dispatchEvent(r), wa = null;
    } else return t = ll(n), t !== null && vo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function xi(e, t, n) {
  Dl(e) && n.delete(t);
}
function Nf() {
  ja = !1, Zt !== null && Dl(Zt) && (Zt = null), Jt !== null && Dl(Jt) && (Jt = null), en !== null && Dl(en) && (en = null), zr.forEach(xi), Ar.forEach(xi);
}
function gr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ja || (ja = !0, st.unstable_scheduleCallback(st.unstable_NormalPriority, Nf)));
}
function Fr(e) {
  function t(l) {
    return gr(l, e);
  }
  if (0 < gl.length) {
    gr(gl[0], e);
    for (var n = 1; n < gl.length; n++) {
      var r = gl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Zt !== null && gr(Zt, e), Jt !== null && gr(Jt, e), en !== null && gr(en, e), zr.forEach(t), Ar.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) hd(n), n.blockedOn === null && Kt.shift();
}
var Gn = Ut.ReactCurrentBatchConfig, ql = !0;
function Mf(e, t, n, r) {
  var l = fe, a = Gn.transition;
  Gn.transition = null;
  try {
    fe = 1, wo(e, t, n, r);
  } finally {
    fe = l, Gn.transition = a;
  }
}
function If(e, t, n, r) {
  var l = fe, a = Gn.transition;
  Gn.transition = null;
  try {
    fe = 4, wo(e, t, n, r);
  } finally {
    fe = l, Gn.transition = a;
  }
}
function wo(e, t, n, r) {
  if (ql) {
    var l = ba(e, t, n, r);
    if (l === null) qs(e, t, r, Yl, n), wi(e, r);
    else if (Cf(l, e, t, n, r)) r.stopPropagation();
    else if (wi(e, r), t & 4 && -1 < Ef.indexOf(e)) {
      for (; l !== null; ) {
        var a = ll(l);
        if (a !== null && ud(a), a = ba(e, t, n, r), a === null && qs(e, t, r, Yl, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else qs(e, t, r, null, n);
  }
}
var Yl = null;
function ba(e, t, n, r) {
  if (Yl = null, e = ho(r), e = hn(e), e !== null) if (t = Cn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = rd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yl = e, null;
}
function gd(e) {
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
      switch (yf()) {
        case go:
          return 1;
        case od:
          return 4;
        case Kl:
        case vf:
          return 16;
        case id:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null, xo = null, Pl = null;
function yd() {
  if (Pl) return Pl;
  var e, t = xo, n = t.length, r, l = "value" in Yt ? Yt.value : Yt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return Pl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Rl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function yl() {
  return !0;
}
function _i() {
  return !1;
}
function ot(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? yl : _i, this.isPropagationStopped = _i, this;
  }
  return Ee(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yl);
  }, persist: function() {
  }, isPersistent: yl }), t;
}
var ar = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _o = ot(ar), rl = Ee({}, ar, { view: 0, detail: 0 }), Tf = ot(rl), Ws, $s, yr, ys = Ee({}, rl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ko, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== yr && (yr && e.type === "mousemove" ? (Ws = e.screenX - yr.screenX, $s = e.screenY - yr.screenY) : $s = Ws = 0, yr = e), Ws);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : $s;
} }), ki = ot(ys), Lf = Ee({}, ys, { dataTransfer: 0 }), Df = ot(Lf), Pf = Ee({}, rl, { relatedTarget: 0 }), Us = ot(Pf), Rf = Ee({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Of = ot(Rf), zf = Ee({}, ar, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Af = ot(zf), Ff = Ee({}, ar, { data: 0 }), Si = ot(Ff), Wf = {
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
}, $f = {
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
}, Uf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Vf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Uf[e]) ? !!t[e] : !1;
}
function ko() {
  return Vf;
}
var Qf = Ee({}, rl, { key: function(e) {
  if (e.key) {
    var t = Wf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Rl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $f[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ko, charCode: function(e) {
  return e.type === "keypress" ? Rl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Bf = ot(Qf), Hf = Ee({}, ys, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ji = ot(Hf), Kf = Ee({}, rl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ko }), Gf = ot(Kf), qf = Ee({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yf = ot(qf), Xf = Ee({}, ys, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zf = ot(Xf), Jf = [9, 13, 27, 32], So = zt && "CompositionEvent" in window, Cr = null;
zt && "documentMode" in document && (Cr = document.documentMode);
var ep = zt && "TextEvent" in window && !Cr, vd = zt && (!So || Cr && 8 < Cr && 11 >= Cr), bi = " ", Ei = !1;
function wd(e, t) {
  switch (e) {
    case "keyup":
      return Jf.indexOf(t.keyCode) !== -1;
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
function xd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Rn = !1;
function tp(e, t) {
  switch (e) {
    case "compositionend":
      return xd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ei = !0, bi);
    case "textInput":
      return e = t.data, e === bi && Ei ? null : e;
    default:
      return null;
  }
}
function np(e, t) {
  if (Rn) return e === "compositionend" || !So && wd(e, t) ? (e = yd(), Pl = xo = Yt = null, Rn = !1, e) : null;
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
      return vd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ci(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rp[e.type] : t === "textarea";
}
function _d(e, t, n, r) {
  Zc(r), t = Xl(t, "onChange"), 0 < t.length && (n = new _o("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Nr = null, Wr = null;
function lp(e) {
  Ld(e, 0);
}
function vs(e) {
  var t = An(e);
  if (Bc(t)) return e;
}
function sp(e, t) {
  if (e === "change") return t;
}
var kd = !1;
if (zt) {
  var Vs;
  if (zt) {
    var Qs = "oninput" in document;
    if (!Qs) {
      var Ni = document.createElement("div");
      Ni.setAttribute("oninput", "return;"), Qs = typeof Ni.oninput == "function";
    }
    Vs = Qs;
  } else Vs = !1;
  kd = Vs && (!document.documentMode || 9 < document.documentMode);
}
function Mi() {
  Nr && (Nr.detachEvent("onpropertychange", Sd), Wr = Nr = null);
}
function Sd(e) {
  if (e.propertyName === "value" && vs(Wr)) {
    var t = [];
    _d(t, Wr, e, ho(e)), nd(lp, t);
  }
}
function ap(e, t, n) {
  e === "focusin" ? (Mi(), Nr = t, Wr = n, Nr.attachEvent("onpropertychange", Sd)) : e === "focusout" && Mi();
}
function op(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return vs(Wr);
}
function ip(e, t) {
  if (e === "click") return vs(t);
}
function cp(e, t) {
  if (e === "input" || e === "change") return vs(t);
}
function dp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : dp;
function $r(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!oa.call(t, l) || !St(e[l], t[l])) return !1;
  }
  return !0;
}
function Ii(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ti(e, t) {
  var n = Ii(e);
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
    n = Ii(n);
  }
}
function jd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function bd() {
  for (var e = window, t = Ql(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ql(e.document);
  }
  return t;
}
function jo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function up(e) {
  var t = bd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && jd(n.ownerDocument.documentElement, n)) {
    if (r !== null && jo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Ti(n, a);
        var o = Ti(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var mp = zt && "documentMode" in document && 11 >= document.documentMode, On = null, Ea = null, Mr = null, Ca = !1;
function Li(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ca || On == null || On !== Ql(r) || (r = On, "selectionStart" in r && jo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mr && $r(Mr, r) || (Mr = r, r = Xl(Ea, "onSelect"), 0 < r.length && (t = new _o("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = On)));
}
function vl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var zn = { animationend: vl("Animation", "AnimationEnd"), animationiteration: vl("Animation", "AnimationIteration"), animationstart: vl("Animation", "AnimationStart"), transitionend: vl("Transition", "TransitionEnd") }, Bs = {}, Ed = {};
zt && (Ed = document.createElement("div").style, "AnimationEvent" in window || (delete zn.animationend.animation, delete zn.animationiteration.animation, delete zn.animationstart.animation), "TransitionEvent" in window || delete zn.transitionend.transition);
function ws(e) {
  if (Bs[e]) return Bs[e];
  if (!zn[e]) return e;
  var t = zn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ed) return Bs[e] = t[n];
  return e;
}
var Cd = ws("animationend"), Nd = ws("animationiteration"), Md = ws("animationstart"), Id = ws("transitionend"), Td = /* @__PURE__ */ new Map(), Di = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, t) {
  Td.set(e, t), En(t, [e]);
}
for (var Hs = 0; Hs < Di.length; Hs++) {
  var Ks = Di[Hs], fp = Ks.toLowerCase(), pp = Ks[0].toUpperCase() + Ks.slice(1);
  cn(fp, "on" + pp);
}
cn(Cd, "onAnimationEnd");
cn(Nd, "onAnimationIteration");
cn(Md, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Id, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
En("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
En("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hp = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function Pi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ff(r, t, void 0, e), e.currentTarget = null;
}
function Ld(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Pi(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Pi(l, i, d), a = c;
      }
    }
  }
  if (Hl) throw e = ka, Hl = !1, ka = null, e;
}
function we(e, t) {
  var n = t[La];
  n === void 0 && (n = t[La] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Dd(t, e, 2, !1), n.add(r));
}
function Gs(e, t, n) {
  var r = 0;
  t && (r |= 4), Dd(n, e, r, t);
}
var wl = "_reactListening" + Math.random().toString(36).slice(2);
function Ur(e) {
  if (!e[wl]) {
    e[wl] = !0, Wc.forEach(function(n) {
      n !== "selectionchange" && (hp.has(n) || Gs(n, !1, e), Gs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wl] || (t[wl] = !0, Gs("selectionchange", !1, t));
  }
}
function Dd(e, t, n, r) {
  switch (gd(t)) {
    case 1:
      var l = Mf;
      break;
    case 4:
      l = If;
      break;
    default:
      l = wo;
  }
  n = l.bind(null, t, n, e), l = void 0, !_a || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function qs(e, t, n, r, l) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var i = r.stateNode.containerInfo;
      if (i === l || i.nodeType === 8 && i.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var c = o.tag;
        if ((c === 3 || c === 4) && (c = o.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = hn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  nd(function() {
    var d = a, m = ho(n), g = [];
    e: {
      var v = Td.get(e);
      if (v !== void 0) {
        var x = _o, w = e;
        switch (e) {
          case "keypress":
            if (Rl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Bf;
            break;
          case "focusin":
            w = "focus", x = Us;
            break;
          case "focusout":
            w = "blur", x = Us;
            break;
          case "beforeblur":
          case "afterblur":
            x = Us;
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
            x = ki;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Df;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Gf;
            break;
          case Cd:
          case Nd:
          case Md:
            x = Of;
            break;
          case Id:
            x = Yf;
            break;
          case "scroll":
            x = Tf;
            break;
          case "wheel":
            x = Zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Af;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ji;
        }
        var _ = (t & 4) !== 0, S = !_ && e === "scroll", h = _ ? v !== null ? v + "Capture" : null : v;
        _ = [];
        for (var u = d, p; u !== null; ) {
          p = u;
          var y = p.stateNode;
          if (p.tag === 5 && y !== null && (p = y, h !== null && (y = Or(u, h), y != null && _.push(Vr(u, y, p)))), S) break;
          u = u.return;
        }
        0 < _.length && (v = new x(v, w, null, n, m), g.push({ event: v, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", v && n !== wa && (w = n.relatedTarget || n.fromElement) && (hn(w) || w[At])) break e;
        if ((x || v) && (v = m.window === m ? m : (v = m.ownerDocument) ? v.defaultView || v.parentWindow : window, x ? (w = n.relatedTarget || n.toElement, x = d, w = w ? hn(w) : null, w !== null && (S = Cn(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null, w = d), x !== w)) {
          if (_ = ki, y = "onMouseLeave", h = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (_ = ji, y = "onPointerLeave", h = "onPointerEnter", u = "pointer"), S = x == null ? v : An(x), p = w == null ? v : An(w), v = new _(y, u + "leave", x, n, m), v.target = S, v.relatedTarget = p, y = null, hn(m) === d && (_ = new _(h, u + "enter", w, n, m), _.target = p, _.relatedTarget = S, y = _), S = y, x && w) t: {
            for (_ = x, h = w, u = 0, p = _; p; p = Tn(p)) u++;
            for (p = 0, y = h; y; y = Tn(y)) p++;
            for (; 0 < u - p; ) _ = Tn(_), u--;
            for (; 0 < p - u; ) h = Tn(h), p--;
            for (; u--; ) {
              if (_ === h || h !== null && _ === h.alternate) break t;
              _ = Tn(_), h = Tn(h);
            }
            _ = null;
          }
          else _ = null;
          x !== null && Ri(g, v, x, _, !1), w !== null && S !== null && Ri(g, S, w, _, !0);
        }
      }
      e: {
        if (v = d ? An(d) : window, x = v.nodeName && v.nodeName.toLowerCase(), x === "select" || x === "input" && v.type === "file") var k = sp;
        else if (Ci(v)) if (kd) k = cp;
        else {
          k = op;
          var j = ap;
        }
        else (x = v.nodeName) && x.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (k = ip);
        if (k && (k = k(e, d))) {
          _d(g, k, n, m);
          break e;
        }
        j && j(e, v, d), e === "focusout" && (j = v._wrapperState) && j.controlled && v.type === "number" && pa(v, "number", v.value);
      }
      switch (j = d ? An(d) : window, e) {
        case "focusin":
          (Ci(j) || j.contentEditable === "true") && (On = j, Ea = d, Mr = null);
          break;
        case "focusout":
          Mr = Ea = On = null;
          break;
        case "mousedown":
          Ca = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ca = !1, Li(g, n, m);
          break;
        case "selectionchange":
          if (mp) break;
        case "keydown":
        case "keyup":
          Li(g, n, m);
      }
      var b;
      if (So) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else Rn ? wd(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (vd && n.locale !== "ko" && (Rn || C !== "onCompositionStart" ? C === "onCompositionEnd" && Rn && (b = yd()) : (Yt = m, xo = "value" in Yt ? Yt.value : Yt.textContent, Rn = !0)), j = Xl(d, C), 0 < j.length && (C = new Si(C, e, null, n, m), g.push({ event: C, listeners: j }), b ? C.data = b : (b = xd(n), b !== null && (C.data = b)))), (b = ep ? tp(e, n) : np(e, n)) && (d = Xl(d, "onBeforeInput"), 0 < d.length && (m = new Si("onBeforeInput", "beforeinput", null, n, m), g.push({ event: m, listeners: d }), m.data = b));
    }
    Ld(g, t);
  });
}
function Vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Or(e, n), a != null && r.unshift(Vr(e, a, l)), a = Or(e, t), a != null && r.push(Vr(e, a, l))), e = e.return;
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
function Ri(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Or(n, a), c != null && o.unshift(Vr(n, c, i))) : l || (c = Or(n, a), c != null && o.push(Vr(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var gp = /\r\n?/g, yp = /\u0000|\uFFFD/g;
function Oi(e) {
  return (typeof e == "string" ? e : "" + e).replace(gp, `
`).replace(yp, "");
}
function xl(e, t, n) {
  if (t = Oi(t), Oi(e) !== t && n) throw Error(W(425));
}
function Zl() {
}
var Na = null, Ma = null;
function Ia(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ta = typeof setTimeout == "function" ? setTimeout : void 0, vp = typeof clearTimeout == "function" ? clearTimeout : void 0, zi = typeof Promise == "function" ? Promise : void 0, wp = typeof queueMicrotask == "function" ? queueMicrotask : typeof zi < "u" ? function(e) {
  return zi.resolve(null).then(e).catch(xp);
} : Ta;
function xp(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ys(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Fr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Fr(t);
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
function Ai(e) {
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
var or = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + or, Qr = "__reactProps$" + or, At = "__reactContainer$" + or, La = "__reactEvents$" + or, _p = "__reactListeners$" + or, kp = "__reactHandles$" + or;
function hn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[At] || n[Nt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ai(e); e !== null; ) {
        if (n = e[Nt]) return n;
        e = Ai(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ll(e) {
  return e = e[Nt] || e[At], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function xs(e) {
  return e[Qr] || null;
}
var Da = [], Fn = -1;
function dn(e) {
  return { current: e };
}
function xe(e) {
  0 > Fn || (e.current = Da[Fn], Da[Fn] = null, Fn--);
}
function ge(e, t) {
  Fn++, Da[Fn] = e.current, e.current = t;
}
var on = {}, Ve = dn(on), Ye = dn(!1), xn = on;
function Zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Xe(e) {
  return e = e.childContextTypes, e != null;
}
function Jl() {
  xe(Ye), xe(Ve);
}
function Fi(e, t, n) {
  if (Ve.current !== on) throw Error(W(168));
  ge(Ve, t), ge(Ye, n);
}
function Pd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(W(108, sf(e) || "Unknown", l));
  return Ee({}, n, r);
}
function es(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, xn = Ve.current, ge(Ve, e), ge(Ye, Ye.current), !0;
}
function Wi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(W(169));
  n ? (e = Pd(e, t, xn), r.__reactInternalMemoizedMergedChildContext = e, xe(Ye), xe(Ve), ge(Ve, e)) : xe(Ye), ge(Ye, n);
}
var Dt = null, _s = !1, Xs = !1;
function Rd(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function Sp(e) {
  _s = !0, Rd(e);
}
function un() {
  if (!Xs && Dt !== null) {
    Xs = !0;
    var e = 0, t = fe;
    try {
      var n = Dt;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dt = null, _s = !1;
    } catch (l) {
      throw Dt !== null && (Dt = Dt.slice(e + 1)), ad(go, un), l;
    } finally {
      fe = t, Xs = !1;
    }
  }
  return null;
}
var Wn = [], $n = 0, ts = null, ns = 0, dt = [], ut = 0, _n = null, Pt = 1, Rt = "";
function fn(e, t) {
  Wn[$n++] = ns, Wn[$n++] = ts, ts = e, ns = t;
}
function Od(e, t, n) {
  dt[ut++] = Pt, dt[ut++] = Rt, dt[ut++] = _n, _n = e;
  var r = Pt;
  e = Rt;
  var l = 32 - _t(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - _t(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Pt = 1 << 32 - _t(t) + l | n << l | r, Rt = a + e;
  } else Pt = 1 << a | n << l | r, Rt = e;
}
function bo(e) {
  e.return !== null && (fn(e, 1), Od(e, 1, 0));
}
function Eo(e) {
  for (; e === ts; ) ts = Wn[--$n], Wn[$n] = null, ns = Wn[--$n], Wn[$n] = null;
  for (; e === _n; ) _n = dt[--ut], dt[ut] = null, Rt = dt[--ut], dt[ut] = null, Pt = dt[--ut], dt[ut] = null;
}
var lt = null, rt = null, Se = !1, wt = null;
function zd(e, t) {
  var n = mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function $i(e, t) {
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
function Pa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ra(e) {
  if (Se) {
    var t = rt;
    if (t) {
      var n = t;
      if (!$i(e, t)) {
        if (Pa(e)) throw Error(W(418));
        t = tn(n.nextSibling);
        var r = lt;
        t && $i(e, t) ? zd(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, lt = e);
      }
    } else {
      if (Pa(e)) throw Error(W(418));
      e.flags = e.flags & -4097 | 2, Se = !1, lt = e;
    }
  }
}
function Ui(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  lt = e;
}
function _l(e) {
  if (e !== lt) return !1;
  if (!Se) return Ui(e), Se = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ia(e.type, e.memoizedProps)), t && (t = rt)) {
    if (Pa(e)) throw Ad(), Error(W(418));
    for (; t; ) zd(e, t), t = tn(t.nextSibling);
  }
  if (Ui(e), e.tag === 13) {
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
function Ad() {
  for (var e = rt; e; ) e = tn(e.nextSibling);
}
function Jn() {
  rt = lt = null, Se = !1;
}
function Co(e) {
  wt === null ? wt = [e] : wt.push(e);
}
var jp = Ut.ReactCurrentBatchConfig;
function vr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, e));
  }
  return e;
}
function kl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(W(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Vi(e) {
  var t = e._init;
  return t(e._payload);
}
function Fd(e) {
  function t(h, u) {
    if (e) {
      var p = h.deletions;
      p === null ? (h.deletions = [u], h.flags |= 16) : p.push(u);
    }
  }
  function n(h, u) {
    if (!e) return null;
    for (; u !== null; ) t(h, u), u = u.sibling;
    return null;
  }
  function r(h, u) {
    for (h = /* @__PURE__ */ new Map(); u !== null; ) u.key !== null ? h.set(u.key, u) : h.set(u.index, u), u = u.sibling;
    return h;
  }
  function l(h, u) {
    return h = sn(h, u), h.index = 0, h.sibling = null, h;
  }
  function a(h, u, p) {
    return h.index = p, e ? (p = h.alternate, p !== null ? (p = p.index, p < u ? (h.flags |= 2, u) : p) : (h.flags |= 2, u)) : (h.flags |= 1048576, u);
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function i(h, u, p, y) {
    return u === null || u.tag !== 6 ? (u = la(p, h.mode, y), u.return = h, u) : (u = l(u, p), u.return = h, u);
  }
  function c(h, u, p, y) {
    var k = p.type;
    return k === Pn ? m(h, u, p.props.children, y, p.key) : u !== null && (u.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Bt && Vi(k) === u.type) ? (y = l(u, p.props), y.ref = vr(h, u, p), y.return = h, y) : (y = Ul(p.type, p.key, p.props, null, h.mode, y), y.ref = vr(h, u, p), y.return = h, y);
  }
  function d(h, u, p, y) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== p.containerInfo || u.stateNode.implementation !== p.implementation ? (u = sa(p, h.mode, y), u.return = h, u) : (u = l(u, p.children || []), u.return = h, u);
  }
  function m(h, u, p, y, k) {
    return u === null || u.tag !== 7 ? (u = wn(p, h.mode, y, k), u.return = h, u) : (u = l(u, p), u.return = h, u);
  }
  function g(h, u, p) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = la("" + u, h.mode, p), u.return = h, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case ul:
          return p = Ul(u.type, u.key, u.props, null, h.mode, p), p.ref = vr(h, null, u), p.return = h, p;
        case Dn:
          return u = sa(u, h.mode, p), u.return = h, u;
        case Bt:
          var y = u._init;
          return g(h, y(u._payload), p);
      }
      if (kr(u) || fr(u)) return u = wn(u, h.mode, p, null), u.return = h, u;
      kl(h, u);
    }
    return null;
  }
  function v(h, u, p, y) {
    var k = u !== null ? u.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return k !== null ? null : i(h, u, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ul:
          return p.key === k ? c(h, u, p, y) : null;
        case Dn:
          return p.key === k ? d(h, u, p, y) : null;
        case Bt:
          return k = p._init, v(
            h,
            u,
            k(p._payload),
            y
          );
      }
      if (kr(p) || fr(p)) return k !== null ? null : m(h, u, p, y, null);
      kl(h, p);
    }
    return null;
  }
  function x(h, u, p, y, k) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return h = h.get(p) || null, i(u, h, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ul:
          return h = h.get(y.key === null ? p : y.key) || null, c(u, h, y, k);
        case Dn:
          return h = h.get(y.key === null ? p : y.key) || null, d(u, h, y, k);
        case Bt:
          var j = y._init;
          return x(h, u, p, j(y._payload), k);
      }
      if (kr(y) || fr(y)) return h = h.get(p) || null, m(u, h, y, k, null);
      kl(u, y);
    }
    return null;
  }
  function w(h, u, p, y) {
    for (var k = null, j = null, b = u, C = u = 0, O = null; b !== null && C < p.length; C++) {
      b.index > C ? (O = b, b = null) : O = b.sibling;
      var P = v(h, b, p[C], y);
      if (P === null) {
        b === null && (b = O);
        break;
      }
      e && b && P.alternate === null && t(h, b), u = a(P, u, C), j === null ? k = P : j.sibling = P, j = P, b = O;
    }
    if (C === p.length) return n(h, b), Se && fn(h, C), k;
    if (b === null) {
      for (; C < p.length; C++) b = g(h, p[C], y), b !== null && (u = a(b, u, C), j === null ? k = b : j.sibling = b, j = b);
      return Se && fn(h, C), k;
    }
    for (b = r(h, b); C < p.length; C++) O = x(b, h, C, p[C], y), O !== null && (e && O.alternate !== null && b.delete(O.key === null ? C : O.key), u = a(O, u, C), j === null ? k = O : j.sibling = O, j = O);
    return e && b.forEach(function(D) {
      return t(h, D);
    }), Se && fn(h, C), k;
  }
  function _(h, u, p, y) {
    var k = fr(p);
    if (typeof k != "function") throw Error(W(150));
    if (p = k.call(p), p == null) throw Error(W(151));
    for (var j = k = null, b = u, C = u = 0, O = null, P = p.next(); b !== null && !P.done; C++, P = p.next()) {
      b.index > C ? (O = b, b = null) : O = b.sibling;
      var D = v(h, b, P.value, y);
      if (D === null) {
        b === null && (b = O);
        break;
      }
      e && b && D.alternate === null && t(h, b), u = a(D, u, C), j === null ? k = D : j.sibling = D, j = D, b = O;
    }
    if (P.done) return n(
      h,
      b
    ), Se && fn(h, C), k;
    if (b === null) {
      for (; !P.done; C++, P = p.next()) P = g(h, P.value, y), P !== null && (u = a(P, u, C), j === null ? k = P : j.sibling = P, j = P);
      return Se && fn(h, C), k;
    }
    for (b = r(h, b); !P.done; C++, P = p.next()) P = x(b, h, C, P.value, y), P !== null && (e && P.alternate !== null && b.delete(P.key === null ? C : P.key), u = a(P, u, C), j === null ? k = P : j.sibling = P, j = P);
    return e && b.forEach(function(U) {
      return t(h, U);
    }), Se && fn(h, C), k;
  }
  function S(h, u, p, y) {
    if (typeof p == "object" && p !== null && p.type === Pn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ul:
          e: {
            for (var k = p.key, j = u; j !== null; ) {
              if (j.key === k) {
                if (k = p.type, k === Pn) {
                  if (j.tag === 7) {
                    n(h, j.sibling), u = l(j, p.props.children), u.return = h, h = u;
                    break e;
                  }
                } else if (j.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Bt && Vi(k) === j.type) {
                  n(h, j.sibling), u = l(j, p.props), u.ref = vr(h, j, p), u.return = h, h = u;
                  break e;
                }
                n(h, j);
                break;
              } else t(h, j);
              j = j.sibling;
            }
            p.type === Pn ? (u = wn(p.props.children, h.mode, y, p.key), u.return = h, h = u) : (y = Ul(p.type, p.key, p.props, null, h.mode, y), y.ref = vr(h, u, p), y.return = h, h = y);
          }
          return o(h);
        case Dn:
          e: {
            for (j = p.key; u !== null; ) {
              if (u.key === j) if (u.tag === 4 && u.stateNode.containerInfo === p.containerInfo && u.stateNode.implementation === p.implementation) {
                n(h, u.sibling), u = l(u, p.children || []), u.return = h, h = u;
                break e;
              } else {
                n(h, u);
                break;
              }
              else t(h, u);
              u = u.sibling;
            }
            u = sa(p, h.mode, y), u.return = h, h = u;
          }
          return o(h);
        case Bt:
          return j = p._init, S(h, u, j(p._payload), y);
      }
      if (kr(p)) return w(h, u, p, y);
      if (fr(p)) return _(h, u, p, y);
      kl(h, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, u !== null && u.tag === 6 ? (n(h, u.sibling), u = l(u, p), u.return = h, h = u) : (n(h, u), u = la(p, h.mode, y), u.return = h, h = u), o(h)) : n(h, u);
  }
  return S;
}
var er = Fd(!0), Wd = Fd(!1), rs = dn(null), ls = null, Un = null, No = null;
function Mo() {
  No = Un = ls = null;
}
function Io(e) {
  var t = rs.current;
  xe(rs), e._currentValue = t;
}
function Oa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function qn(e, t) {
  ls = e, No = Un = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (No !== e) if (e = { context: e, memoizedValue: t, next: null }, Un === null) {
    if (ls === null) throw Error(W(308));
    Un = e, ls.dependencies = { lanes: 0, firstContext: e };
  } else Un = Un.next = e;
  return t;
}
var gn = null;
function To(e) {
  gn === null ? gn = [e] : gn.push(e);
}
function $d(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, To(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function Lo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ud(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ue & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ft(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, To(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ft(e, n);
}
function Ol(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yo(e, n);
  }
}
function Qi(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? l = a = o : a = a.next = o, n = n.next;
      } while (n !== null);
      a === null ? l = a = t : a = a.next = t;
    } else l = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ss(e, t, n, r) {
  var l = e.updateQueue;
  Ht = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== o && (i === null ? m.firstBaseUpdate = d : i.next = d, m.lastBaseUpdate = c));
  }
  if (a !== null) {
    var g = l.baseState;
    o = 0, m = d = c = null, i = a;
    do {
      var v = i.lane, x = i.eventTime;
      if ((r & v) === v) {
        m !== null && (m = m.next = {
          eventTime: x,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, _ = i;
          switch (v = t, x = n, _.tag) {
            case 1:
              if (w = _.payload, typeof w == "function") {
                g = w.call(x, g, v);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = _.payload, v = typeof w == "function" ? w.call(x, g, v) : w, v == null) break e;
              g = Ee({}, g, v);
              break e;
            case 2:
              Ht = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [i] : v.push(i));
      } else x = { eventTime: x, lane: v, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (d = m = x, c = g) : m = m.next = x, o |= v;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        v = i, i = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (c = g), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    Sn |= o, e.lanes = o, e.memoizedState = g;
  }
}
function Bi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(W(191, l));
      l.call(r);
    }
  }
}
var sl = {}, It = dn(sl), Br = dn(sl), Hr = dn(sl);
function yn(e) {
  if (e === sl) throw Error(W(174));
  return e;
}
function Do(e, t) {
  switch (ge(Hr, t), ge(Br, e), ge(It, sl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ga(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ga(t, e);
  }
  xe(It), ge(It, t);
}
function tr() {
  xe(It), xe(Br), xe(Hr);
}
function Vd(e) {
  yn(Hr.current);
  var t = yn(It.current), n = ga(t, e.type);
  t !== n && (ge(Br, e), ge(It, n));
}
function Po(e) {
  Br.current === e && (xe(It), xe(Br));
}
var je = dn(0);
function as(e) {
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
var Zs = [];
function Ro() {
  for (var e = 0; e < Zs.length; e++) Zs[e]._workInProgressVersionPrimary = null;
  Zs.length = 0;
}
var zl = Ut.ReactCurrentDispatcher, Js = Ut.ReactCurrentBatchConfig, kn = 0, be = null, Le = null, Re = null, os = !1, Ir = !1, Kr = 0, bp = 0;
function We() {
  throw Error(W(321));
}
function Oo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function zo(e, t, n, r, l, a) {
  if (kn = a, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zl.current = e === null || e.memoizedState === null ? Mp : Ip, e = n(r, l), Ir) {
    a = 0;
    do {
      if (Ir = !1, Kr = 0, 25 <= a) throw Error(W(301));
      a += 1, Re = Le = null, t.updateQueue = null, zl.current = Tp, e = n(r, l);
    } while (Ir);
  }
  if (zl.current = is, t = Le !== null && Le.next !== null, kn = 0, Re = Le = be = null, os = !1, t) throw Error(W(300));
  return e;
}
function Ao() {
  var e = Kr !== 0;
  return Kr = 0, e;
}
function Ct() {
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
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ea(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = Le, l = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = a.next, a.next = o;
    }
    r.baseQueue = l = a, n.pending = null;
  }
  if (l !== null) {
    a = l.next, r = r.baseState;
    var i = o = null, c = null, d = a;
    do {
      var m = d.lane;
      if ((kn & m) === m) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var g = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = g, o = r) : c = c.next = g, be.lanes |= m, Sn |= m;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, St(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, be.lanes |= a, Sn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ta(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    St(a, t.memoizedState) || (qe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function Qd() {
}
function Bd(e, t) {
  var n = be, r = ht(), l = t(), a = !St(r.memoizedState, l);
  if (a && (r.memoizedState = l, qe = !0), r = r.queue, Fo(Gd.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, qr(9, Kd.bind(null, n, r, l, t), void 0, null), Oe === null) throw Error(W(349));
    kn & 30 || Hd(n, t, l);
  }
  return l;
}
function Hd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Kd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, qd(t) && Yd(e);
}
function Gd(e, t, n) {
  return n(function() {
    qd(t) && Yd(e);
  });
}
function qd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Yd(e) {
  var t = Ft(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function Hi(e) {
  var t = Ct();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Np.bind(null, be, e), [t.memoizedState, e];
}
function qr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Xd() {
  return ht().memoizedState;
}
function Al(e, t, n, r) {
  var l = Ct();
  be.flags |= e, l.memoizedState = qr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ks(e, t, n, r) {
  var l = ht();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (a = o.destroy, r !== null && Oo(r, o.deps)) {
      l.memoizedState = qr(t, n, a, r);
      return;
    }
  }
  be.flags |= e, l.memoizedState = qr(1 | t, n, a, r);
}
function Ki(e, t) {
  return Al(8390656, 8, e, t);
}
function Fo(e, t) {
  return ks(2048, 8, e, t);
}
function Zd(e, t) {
  return ks(4, 2, e, t);
}
function Jd(e, t) {
  return ks(4, 4, e, t);
}
function eu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function tu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ks(4, 4, eu.bind(null, t, e), n);
}
function Wo() {
}
function nu(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ru(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function lu(e, t, n) {
  return kn & 21 ? (St(n, t) || (n = cd(), be.lanes |= n, Sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function Ep(e, t) {
  var n = fe;
  fe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Js.transition;
  Js.transition = {};
  try {
    e(!1), t();
  } finally {
    fe = n, Js.transition = r;
  }
}
function su() {
  return ht().memoizedState;
}
function Cp(e, t, n) {
  var r = ln(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, au(e)) ou(t, n);
  else if (n = $d(e, t, n, r), n !== null) {
    var l = Be();
    kt(n, e, r, l), iu(n, t, r);
  }
}
function Np(e, t, n) {
  var r = ln(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (au(e)) ou(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, St(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, To(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = $d(e, t, l, r), n !== null && (l = Be(), kt(n, e, r, l), iu(n, t, r));
  }
}
function au(e) {
  var t = e.alternate;
  return e === be || t !== null && t === be;
}
function ou(e, t) {
  Ir = os = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function iu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yo(e, n);
  }
}
var is = { readContext: pt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, Mp = { readContext: pt, useCallback: function(e, t) {
  return Ct().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: Ki, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Al(
    4194308,
    4,
    eu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Al(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Al(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ct();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ct();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Cp.bind(null, be, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ct();
  return e = { current: e }, t.memoizedState = e;
}, useState: Hi, useDebugValue: Wo, useDeferredValue: function(e) {
  return Ct().memoizedState = e;
}, useTransition: function() {
  var e = Hi(!1), t = e[0];
  return e = Ep.bind(null, e[1]), Ct().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = be, l = Ct();
  if (Se) {
    if (n === void 0) throw Error(W(407));
    n = n();
  } else {
    if (n = t(), Oe === null) throw Error(W(349));
    kn & 30 || Hd(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, Ki(Gd.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, qr(9, Kd.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Ct(), t = Oe.identifierPrefix;
  if (Se) {
    var n = Rt, r = Pt;
    n = (r & ~(1 << 32 - _t(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = bp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ip = {
  readContext: pt,
  useCallback: nu,
  useContext: pt,
  useEffect: Fo,
  useImperativeHandle: tu,
  useInsertionEffect: Zd,
  useLayoutEffect: Jd,
  useMemo: ru,
  useReducer: ea,
  useRef: Xd,
  useState: function() {
    return ea(Gr);
  },
  useDebugValue: Wo,
  useDeferredValue: function(e) {
    var t = ht();
    return lu(t, Le.memoizedState, e);
  },
  useTransition: function() {
    var e = ea(Gr)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: Qd,
  useSyncExternalStore: Bd,
  useId: su,
  unstable_isNewReconciler: !1
}, Tp = { readContext: pt, useCallback: nu, useContext: pt, useEffect: Fo, useImperativeHandle: tu, useInsertionEffect: Zd, useLayoutEffect: Jd, useMemo: ru, useReducer: ta, useRef: Xd, useState: function() {
  return ta(Gr);
}, useDebugValue: Wo, useDeferredValue: function(e) {
  var t = ht();
  return Le === null ? t.memoizedState = e : lu(t, Le.memoizedState, e);
}, useTransition: function() {
  var e = ta(Gr)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: Qd, useSyncExternalStore: Bd, useId: su, unstable_isNewReconciler: !1 };
function yt(e, t) {
  if (e && e.defaultProps) {
    t = Ee({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function za(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ss = { isMounted: function(e) {
  return (e = e._reactInternals) ? Cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), l = ln(e), a = Ot(r, l);
  a.payload = t, n != null && (a.callback = n), t = nn(e, a, l), t !== null && (kt(t, e, l, r), Ol(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), l = ln(e), a = Ot(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = nn(e, a, l), t !== null && (kt(t, e, l, r), Ol(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = ln(e), l = Ot(n, r);
  l.tag = 2, t != null && (l.callback = t), t = nn(e, l, r), t !== null && (kt(t, e, r, n), Ol(t, e, r));
} };
function Gi(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !$r(n, r) || !$r(l, a) : !0;
}
function cu(e, t, n) {
  var r = !1, l = on, a = t.contextType;
  return typeof a == "object" && a !== null ? a = pt(a) : (l = Xe(t) ? xn : Ve.current, r = t.contextTypes, a = (r = r != null) ? Zn(e, l) : on), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ss, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function qi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ss.enqueueReplaceState(t, t.state, null);
}
function Aa(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Lo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = pt(a) : (a = Xe(t) ? xn : Ve.current, l.context = Zn(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (za(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ss.enqueueReplaceState(l, l.state, null), ss(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nr(e, t) {
  try {
    var n = "", r = t;
    do
      n += lf(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function na(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Lp = typeof WeakMap == "function" ? WeakMap : Map;
function du(e, t, n) {
  n = Ot(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ds || (ds = !0, qa = r), Fa(e, t);
  }, n;
}
function uu(e, t, n) {
  n = Ot(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Fa(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Fa(e, t), typeof r != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Yi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Hp.bind(null, e, t, n), t.then(e, e));
}
function Xi(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zi(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ot(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e);
}
var Dp = Ut.ReactCurrentOwner, qe = !1;
function Qe(e, t, n, r) {
  t.child = e === null ? Wd(t, null, n, r) : er(t, e.child, n, r);
}
function Ji(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return qn(t, l), r = zo(e, t, n, r, a, l), n = Ao(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Wt(e, t, l)) : (Se && n && bo(t), t.flags |= 1, Qe(e, t, r, l), t.child);
}
function ec(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Go(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, mu(e, t, a, r, l)) : (e = Ul(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $r, n(o, r) && e.ref === t.ref) return Wt(e, t, l);
  }
  return t.flags |= 1, e = sn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function mu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if ($r(a, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (qe = !0);
    else return t.lanes = e.lanes, Wt(e, t, l);
  }
  return Wa(e, t, n, r, l);
}
function fu(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ge(Qn, nt), nt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ge(Qn, nt), nt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ge(Qn, nt), nt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ge(Qn, nt), nt |= r;
  return Qe(e, t, l, n), t.child;
}
function pu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wa(e, t, n, r, l) {
  var a = Xe(n) ? xn : Ve.current;
  return a = Zn(t, a), qn(t, l), n = zo(e, t, n, r, a, l), r = Ao(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Wt(e, t, l)) : (Se && r && bo(t), t.flags |= 1, Qe(e, t, n, l), t.child);
}
function tc(e, t, n, r, l) {
  if (Xe(n)) {
    var a = !0;
    es(t);
  } else a = !1;
  if (qn(t, l), t.stateNode === null) Fl(e, t), cu(t, n, r), Aa(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Xe(n) ? xn : Ve.current, d = Zn(t, d));
    var m = n.getDerivedStateFromProps, g = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && qi(t, o, r, d), Ht = !1;
    var v = t.memoizedState;
    o.state = v, ss(t, r, o, l), c = t.memoizedState, i !== r || v !== c || Ye.current || Ht ? (typeof m == "function" && (za(t, n, m, r), c = t.memoizedState), (i = Ht || Gi(t, n, i, r, v, c, d)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Ud(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : yt(t.type, i), o.props = d, g = t.pendingProps, v = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = pt(c) : (c = Xe(n) ? xn : Ve.current, c = Zn(t, c));
    var x = n.getDerivedStateFromProps;
    (m = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || v !== c) && qi(t, o, r, c), Ht = !1, v = t.memoizedState, o.state = v, ss(t, r, o, l);
    var w = t.memoizedState;
    i !== g || v !== w || Ye.current || Ht ? (typeof x == "function" && (za(t, n, x, r), w = t.memoizedState), (d = Ht || Gi(t, n, d, r, v, w, c) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return $a(e, t, n, r, a, l);
}
function $a(e, t, n, r, l, a) {
  pu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Wi(t, n, !1), Wt(e, t, a);
  r = t.stateNode, Dp.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = er(t, e.child, null, a), t.child = er(t, null, i, a)) : Qe(e, t, i, a), t.memoizedState = r.state, l && Wi(t, n, !0), t.child;
}
function hu(e) {
  var t = e.stateNode;
  t.pendingContext ? Fi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fi(e, t.context, !1), Do(e, t.containerInfo);
}
function nc(e, t, n, r, l) {
  return Jn(), Co(l), t.flags |= 256, Qe(e, t, n, r), t.child;
}
var Ua = { dehydrated: null, treeContext: null, retryLane: 0 };
function Va(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gu(e, t, n) {
  var r = t.pendingProps, l = je.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ge(je, l & 1), e === null)
    return Ra(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Es(o, r, 0, null), e = wn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Va(n), t.memoizedState = Ua, e) : $o(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return Pp(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = sn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = sn(i, a) : (a = wn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Va(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ua, r;
  }
  return a = e.child, e = a.sibling, r = sn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function $o(e, t) {
  return t = Es({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Sl(e, t, n, r) {
  return r !== null && Co(r), er(t, e.child, null, n), e = $o(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Pp(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = na(Error(W(422))), Sl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Es({ mode: "visible", children: r.children }, l, 0, null), a = wn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && er(t, e.child, null, o), t.child.memoizedState = Va(o), t.memoizedState = Ua, a);
  if (!(t.mode & 1)) return Sl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(W(419)), r = na(a, r, void 0), Sl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, qe || i) {
    if (r = Oe, r !== null) {
      switch (o & -o) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Ft(e, l), kt(r, e, l, -1));
    }
    return Ko(), r = na(Error(W(421))), Sl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Kp.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, rt = tn(l.nextSibling), lt = t, Se = !0, wt = null, e !== null && (dt[ut++] = Pt, dt[ut++] = Rt, dt[ut++] = _n, Pt = e.id, Rt = e.overflow, _n = t), t = $o(t, r.children), t.flags |= 4096, t);
}
function rc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Oa(e.return, t, n);
}
function ra(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function yu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Qe(e, t, r.children, n), r = je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && rc(e, n, t);
      else if (e.tag === 19) rc(e, n, t);
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
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && as(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ra(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && as(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ra(t, !0, n, null, a);
      break;
    case "together":
      ra(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Fl(e, t) {
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
function Rp(e, t, n) {
  switch (t.tag) {
    case 3:
      hu(t), Jn();
      break;
    case 5:
      Vd(t);
      break;
    case 1:
      Xe(t.type) && es(t);
      break;
    case 4:
      Do(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ge(rs, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ge(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? gu(e, t, n) : (ge(je, je.current & 1), e = Wt(e, t, n), e !== null ? e.sibling : null);
      ge(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return yu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ge(je, je.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, fu(e, t, n);
  }
  return Wt(e, t, n);
}
var vu, Qa, wu, xu;
vu = function(e, t) {
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
Qa = function() {
};
wu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, yn(It.current);
    var a = null;
    switch (n) {
      case "input":
        l = ma(e, l), r = ma(e, r), a = [];
        break;
      case "select":
        l = Ee({}, l, { value: void 0 }), r = Ee({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = ha(e, l), r = ha(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zl);
    }
    ya(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Pr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Pr.hasOwnProperty(d) ? (c != null && d === "onScroll" && we("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
xu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wr(e, t) {
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
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Op(e, t, n) {
  var r = t.pendingProps;
  switch (Eo(t), t.tag) {
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
      return Xe(t.type) && Jl(), $e(t), null;
    case 3:
      return r = t.stateNode, tr(), xe(Ye), xe(Ve), Ro(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_l(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Za(wt), wt = null))), Qa(e, t), $e(t), null;
    case 5:
      Po(t);
      var l = yn(Hr.current);
      if (n = t.type, e !== null && t.stateNode != null) wu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166));
          return $e(t), null;
        }
        if (e = yn(It.current), _l(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Nt] = t, r[Qr] = a, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < jr.length; l++) we(jr[l], r);
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
              mi(r, a), we("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, we("invalid", r);
              break;
            case "textarea":
              pi(r, a), we("invalid", r);
          }
          ya(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && xl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && xl(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Pr.hasOwnProperty(o) && i != null && o === "onScroll" && we("scroll", r);
          }
          switch (n) {
            case "input":
              ml(r), fi(r, a, !0);
              break;
            case "textarea":
              ml(r), hi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Zl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Gc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Nt] = t, e[Qr] = r, vu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = va(n, r), n) {
              case "dialog":
                we("cancel", e), we("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < jr.length; l++) we(jr[l], e);
                l = r;
                break;
              case "source":
                we("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                we(
                  "error",
                  e
                ), we("load", e), l = r;
                break;
              case "details":
                we("toggle", e), l = r;
                break;
              case "input":
                mi(e, r), l = ma(e, r), we("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Ee({}, r, { value: void 0 }), we("invalid", e);
                break;
              case "textarea":
                pi(e, r), l = ha(e, r), we("invalid", e);
                break;
              default:
                l = r;
            }
            ya(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? Xc(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && qc(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Rr(e, c) : typeof c == "number" && Rr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Pr.hasOwnProperty(a) ? c != null && a === "onScroll" && we("scroll", e) : c != null && uo(e, a, c, o));
            }
            switch (n) {
              case "input":
                ml(e), fi(e, r, !1);
                break;
              case "textarea":
                ml(e), hi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Bn(e, !!r.multiple, a, !1) : r.defaultValue != null && Bn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zl);
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
      if (e && t.stateNode != null) xu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(W(166));
        if (n = yn(Hr.current), yn(It.current), _l(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nt] = t, (a = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
            case 3:
              xl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && xl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nt] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (xe(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Se && rt !== null && t.mode & 1 && !(t.flags & 128)) Ad(), Jn(), t.flags |= 98560, a = !1;
        else if (a = _l(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(W(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(W(317));
            a[Nt] = t;
          } else Jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), a = !1;
        } else wt !== null && (Za(wt), wt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? De === 0 && (De = 3) : Ko())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return tr(), Qa(e, t), e === null && Ur(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return Io(t.type._context), $e(t), null;
    case 17:
      return Xe(t.type) && Jl(), $e(t), null;
    case 19:
      if (xe(je), a = t.memoizedState, a === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) wr(a, !1);
      else {
        if (De !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = as(e), o !== null) {
            for (t.flags |= 128, wr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ge(je, je.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ie() > rr && (t.flags |= 128, r = !0, wr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = as(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !Se) return $e(t), null;
        } else 2 * Ie() - a.renderingStartTime > rr && n !== 1073741824 && (t.flags |= 128, r = !0, wr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ie(), t.sibling = null, n = je.current, ge(je, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return Ho(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function zp(e, t) {
  switch (Eo(t), t.tag) {
    case 1:
      return Xe(t.type) && Jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return tr(), xe(Ye), xe(Ve), Ro(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Po(t), null;
    case 13:
      if (xe(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(W(340));
        Jn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return xe(je), null;
    case 4:
      return tr(), null;
    case 10:
      return Io(t.type._context), null;
    case 22:
    case 23:
      return Ho(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jl = !1, Ue = !1, Ap = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ne(e, t, r);
  }
  else n.current = null;
}
function Ba(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var lc = !1;
function Fp(e, t) {
  if (Na = ql, e = bd(), jo(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, a = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, a.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, c = -1, d = 0, m = 0, g = e, v = null;
        t: for (; ; ) {
          for (var x; g !== n || l !== 0 && g.nodeType !== 3 || (i = o + l), g !== a || r !== 0 && g.nodeType !== 3 || (c = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (x = g.firstChild) !== null; )
            v = g, g = x;
          for (; ; ) {
            if (g === e) break t;
            if (v === n && ++d === l && (i = o), v === a && ++m === r && (c = o), (x = g.nextSibling) !== null) break;
            g = v, v = g.parentNode;
          }
          g = x;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ma = { focusedElem: e, selectionRange: n }, ql = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
  else for (; G !== null; ) {
    t = G;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var _ = w.memoizedProps, S = w.memoizedState, h = t.stateNode, u = h.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : yt(t.type, _), S);
            h.__reactInternalSnapshotBeforeUpdate = u;
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
  return w = lc, lc = !1, w;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && Ba(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function js(e, t) {
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
function Ha(e) {
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
function _u(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, _u(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nt], delete t[Qr], delete t[La], delete t[_p], delete t[kp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ku(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ku(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ka(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ka(e, t, n), e = e.sibling; e !== null; ) Ka(e, t, n), e = e.sibling;
}
function Ga(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ga(e, t, n), e = e.sibling; e !== null; ) Ga(e, t, n), e = e.sibling;
}
var ze = null, vt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) Su(e, t, n), n = n.sibling;
}
function Su(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
    Mt.onCommitFiberUnmount(gs, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ue || Vn(n, t);
    case 6:
      var r = ze, l = vt;
      ze = null, Qt(e, t, n), ze = r, vt = l, ze !== null && (vt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null && (vt ? (e = ze, n = n.stateNode, e.nodeType === 8 ? Ys(e.parentNode, n) : e.nodeType === 1 && Ys(e, n), Fr(e)) : Ys(ze, n.stateNode));
      break;
    case 4:
      r = ze, l = vt, ze = n.stateNode.containerInfo, vt = !0, Qt(e, t, n), ze = r, vt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && Ba(n, t, o), l = l.next;
        } while (l !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (!Ue && (Vn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
function ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ap()), t.forEach(function(r) {
      var l = Gp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            ze = i.stateNode, vt = !1;
            break e;
          case 3:
            ze = i.stateNode.containerInfo, vt = !0;
            break e;
          case 4:
            ze = i.stateNode.containerInfo, vt = !0;
            break e;
        }
        i = i.return;
      }
      if (ze === null) throw Error(W(160));
      Su(a, o, l), ze = null, vt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ne(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ju(t, e), t = t.sibling;
}
function ju(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (gt(t, e), Et(e), r & 4) {
        try {
          Tr(3, e, e.return), js(3, e);
        } catch (_) {
          Ne(e, e.return, _);
        }
        try {
          Tr(5, e, e.return);
        } catch (_) {
          Ne(e, e.return, _);
        }
      }
      break;
    case 1:
      gt(t, e), Et(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (gt(t, e), Et(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Rr(l, "");
        } catch (_) {
          Ne(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && Hc(l, a), va(i, o);
          var d = va(i, a);
          for (o = 0; o < c.length; o += 2) {
            var m = c[o], g = c[o + 1];
            m === "style" ? Xc(l, g) : m === "dangerouslySetInnerHTML" ? qc(l, g) : m === "children" ? Rr(l, g) : uo(l, m, g, d);
          }
          switch (i) {
            case "input":
              fa(l, a);
              break;
            case "textarea":
              Kc(l, a);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var x = a.value;
              x != null ? Bn(l, !!a.multiple, x, !1) : v !== !!a.multiple && (a.defaultValue != null ? Bn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Bn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Qr] = a;
        } catch (_) {
          Ne(e, e.return, _);
        }
      }
      break;
    case 6:
      if (gt(t, e), Et(e), r & 4) {
        if (e.stateNode === null) throw Error(W(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (_) {
          Ne(e, e.return, _);
        }
      }
      break;
    case 3:
      if (gt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Fr(t.containerInfo);
      } catch (_) {
        Ne(e, e.return, _);
      }
      break;
    case 4:
      gt(t, e), Et(e);
      break;
    case 13:
      gt(t, e), Et(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Qo = Ie())), r & 4 && ac(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (d = Ue) || m, gt(t, e), Ue = d) : gt(t, e), Et(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (G = e, m = e.child; m !== null; ) {
          for (g = G = m; G !== null; ) {
            switch (v = G, x = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Tr(4, v, v.return);
                break;
              case 1:
                Vn(v, v.return);
                var w = v.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (_) {
                    Ne(r, n, _);
                  }
                }
                break;
              case 5:
                Vn(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  ic(g);
                  continue;
                }
            }
            x !== null ? (x.return = v, G = x) : ic(g);
          }
          m = m.sibling;
        }
        e: for (m = null, g = e; ; ) {
          if (g.tag === 5) {
            if (m === null) {
              m = g;
              try {
                l = g.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = g.stateNode, c = g.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = Yc("display", o));
              } catch (_) {
                Ne(e, e.return, _);
              }
            }
          } else if (g.tag === 6) {
            if (m === null) try {
              g.stateNode.nodeValue = d ? "" : g.memoizedProps;
            } catch (_) {
              Ne(e, e.return, _);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            m === g && (m = null), g = g.return;
          }
          m === g && (m = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      gt(t, e), Et(e), r & 4 && ac(e);
      break;
    case 21:
      break;
    default:
      gt(
        t,
        e
      ), Et(e);
  }
}
function Et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ku(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rr(l, ""), r.flags &= -33);
          var a = sc(e);
          Ga(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = sc(e);
          Ka(e, i, o);
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
function Wp(e, t, n) {
  G = e, bu(e);
}
function bu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var l = G, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jl;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || Ue;
        i = jl;
        var d = Ue;
        if (jl = o, (Ue = c) && !d) for (G = l; G !== null; ) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null ? cc(l) : c !== null ? (c.return = o, G = c) : cc(l);
        for (; a !== null; ) G = a, bu(a), a = a.sibling;
        G = l, jl = i, Ue = d;
      }
      oc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, G = a) : oc(e);
  }
}
function oc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ue || js(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && Bi(t, a, r);
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
              Bi(t, o, n);
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
                  var g = m.dehydrated;
                  g !== null && Fr(g);
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
        Ue || t.flags & 512 && Ha(t);
      } catch (v) {
        Ne(t, t.return, v);
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
function ic(e) {
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
function cc(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            js(4, t);
          } catch (c) {
            Ne(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ne(t, l, c);
            }
          }
          var a = t.return;
          try {
            Ha(t);
          } catch (c) {
            Ne(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ha(t);
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
var $p = Math.ceil, cs = Ut.ReactCurrentDispatcher, Uo = Ut.ReactCurrentOwner, ft = Ut.ReactCurrentBatchConfig, ue = 0, Oe = null, Te = null, Ae = 0, nt = 0, Qn = dn(0), De = 0, Yr = null, Sn = 0, bs = 0, Vo = 0, Lr = null, Ge = null, Qo = 0, rr = 1 / 0, Lt = null, ds = !1, qa = null, rn = null, bl = !1, Xt = null, us = 0, Dr = 0, Ya = null, Wl = -1, $l = 0;
function Be() {
  return ue & 6 ? Ie() : Wl !== -1 ? Wl : Wl = Ie();
}
function ln(e) {
  return e.mode & 1 ? ue & 2 && Ae !== 0 ? Ae & -Ae : jp.transition !== null ? ($l === 0 && ($l = cd()), $l) : (e = fe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : gd(e.type)), e) : 1;
}
function kt(e, t, n, r) {
  if (50 < Dr) throw Dr = 0, Ya = null, Error(W(185));
  nl(e, n, r), (!(ue & 2) || e !== Oe) && (e === Oe && (!(ue & 2) && (bs |= n), De === 4 && Gt(e, Ae)), Ze(e, r), n === 1 && ue === 0 && !(t.mode & 1) && (rr = Ie() + 500, _s && un()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  jf(e, t);
  var r = Gl(e, e === Oe ? Ae : 0);
  if (r === 0) n !== null && vi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && vi(n), t === 1) e.tag === 0 ? Sp(dc.bind(null, e)) : Rd(dc.bind(null, e)), wp(function() {
      !(ue & 6) && un();
    }), n = null;
    else {
      switch (dd(r)) {
        case 1:
          n = go;
          break;
        case 4:
          n = od;
          break;
        case 16:
          n = Kl;
          break;
        case 536870912:
          n = id;
          break;
        default:
          n = Kl;
      }
      n = Du(n, Eu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Eu(e, t) {
  if (Wl = -1, $l = 0, ue & 6) throw Error(W(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n) return null;
  var r = Gl(e, e === Oe ? Ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ms(e, r);
  else {
    t = r;
    var l = ue;
    ue |= 2;
    var a = Nu();
    (Oe !== e || Ae !== t) && (Lt = null, rr = Ie() + 500, vn(e, t));
    do
      try {
        Qp();
        break;
      } catch (i) {
        Cu(e, i);
      }
    while (!0);
    Mo(), cs.current = a, ue = l, Te !== null ? t = 0 : (Oe = null, Ae = 0, t = De);
  }
  if (t !== 0) {
    if (t === 2 && (l = Sa(e), l !== 0 && (r = l, t = Xa(e, l))), t === 1) throw n = Yr, vn(e, 0), Gt(e, r), Ze(e, Ie()), n;
    if (t === 6) Gt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Up(l) && (t = ms(e, r), t === 2 && (a = Sa(e), a !== 0 && (r = a, t = Xa(e, a))), t === 1)) throw n = Yr, vn(e, 0), Gt(e, r), Ze(e, Ie()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          pn(e, Ge, Lt);
          break;
        case 3:
          if (Gt(e, r), (r & 130023424) === r && (t = Qo + 500 - Ie(), 10 < t)) {
            if (Gl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ta(pn.bind(null, e, Ge, Lt), t);
            break;
          }
          pn(e, Ge, Lt);
          break;
        case 4:
          if (Gt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - _t(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $p(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ta(pn.bind(null, e, Ge, Lt), r);
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
  return Ze(e, Ie()), e.callbackNode === n ? Eu.bind(null, e) : null;
}
function Xa(e, t) {
  var n = Lr;
  return e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256), e = ms(e, t), e !== 2 && (t = Ge, Ge = n, t !== null && Za(t)), e;
}
function Za(e) {
  Ge === null ? Ge = e : Ge.push.apply(Ge, e);
}
function Up(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!St(a(), l)) return !1;
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
  for (t &= ~Vo, t &= ~bs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - _t(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function dc(e) {
  if (ue & 6) throw Error(W(327));
  Yn();
  var t = Gl(e, 0);
  if (!(t & 1)) return Ze(e, Ie()), null;
  var n = ms(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Sa(e);
    r !== 0 && (t = r, n = Xa(e, r));
  }
  if (n === 1) throw n = Yr, vn(e, 0), Gt(e, t), Ze(e, Ie()), n;
  if (n === 6) throw Error(W(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, Ge, Lt), Ze(e, Ie()), null;
}
function Bo(e, t) {
  var n = ue;
  ue |= 1;
  try {
    return e(t);
  } finally {
    ue = n, ue === 0 && (rr = Ie() + 500, _s && un());
  }
}
function jn(e) {
  Xt !== null && Xt.tag === 0 && !(ue & 6) && Yn();
  var t = ue;
  ue |= 1;
  var n = ft.transition, r = fe;
  try {
    if (ft.transition = null, fe = 1, e) return e();
  } finally {
    fe = r, ft.transition = n, ue = t, !(ue & 6) && un();
  }
}
function Ho() {
  nt = Qn.current, xe(Qn);
}
function vn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, vp(n)), Te !== null) for (n = Te.return; n !== null; ) {
    var r = n;
    switch (Eo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jl();
        break;
      case 3:
        tr(), xe(Ye), xe(Ve), Ro();
        break;
      case 5:
        Po(r);
        break;
      case 4:
        tr();
        break;
      case 13:
        xe(je);
        break;
      case 19:
        xe(je);
        break;
      case 10:
        Io(r.type._context);
        break;
      case 22:
      case 23:
        Ho();
    }
    n = n.return;
  }
  if (Oe = e, Te = e = sn(e.current, null), Ae = nt = t, De = 0, Yr = null, Vo = bs = Sn = 0, Ge = Lr = null, gn !== null) {
    for (t = 0; t < gn.length; t++) if (n = gn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    gn = null;
  }
  return e;
}
function Cu(e, t) {
  do {
    var n = Te;
    try {
      if (Mo(), zl.current = is, os) {
        for (var r = be.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        os = !1;
      }
      if (kn = 0, Re = Le = be = null, Ir = !1, Kr = 0, Uo.current = null, n === null || n.return === null) {
        De = 1, Yr = t, Te = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Ae, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, m = i, g = m.tag;
          if (!(m.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var v = m.alternate;
            v ? (m.updateQueue = v.updateQueue, m.memoizedState = v.memoizedState, m.lanes = v.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var x = Xi(o);
          if (x !== null) {
            x.flags &= -257, Zi(x, o, i, a, t), x.mode & 1 && Yi(a, d, t), t = x, c = d;
            var w = t.updateQueue;
            if (w === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(c), t.updateQueue = _;
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Yi(a, d, t), Ko();
              break e;
            }
            c = Error(W(426));
          }
        } else if (Se && i.mode & 1) {
          var S = Xi(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Zi(S, o, i, a, t), Co(nr(c, i));
            break e;
          }
        }
        a = c = nr(c, i), De !== 4 && (De = 2), Lr === null ? Lr = [a] : Lr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var h = du(a, c, t);
              Qi(a, h);
              break e;
            case 1:
              i = c;
              var u = a.type, p = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (rn === null || !rn.has(p)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var y = uu(a, i, t);
                Qi(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Iu(n);
    } catch (k) {
      t = k, Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nu() {
  var e = cs.current;
  return cs.current = is, e === null ? is : e;
}
function Ko() {
  (De === 0 || De === 3 || De === 2) && (De = 4), Oe === null || !(Sn & 268435455) && !(bs & 268435455) || Gt(Oe, Ae);
}
function ms(e, t) {
  var n = ue;
  ue |= 2;
  var r = Nu();
  (Oe !== e || Ae !== t) && (Lt = null, vn(e, t));
  do
    try {
      Vp();
      break;
    } catch (l) {
      Cu(e, l);
    }
  while (!0);
  if (Mo(), ue = n, cs.current = r, Te !== null) throw Error(W(261));
  return Oe = null, Ae = 0, De;
}
function Vp() {
  for (; Te !== null; ) Mu(Te);
}
function Qp() {
  for (; Te !== null && !hf(); ) Mu(Te);
}
function Mu(e) {
  var t = Lu(e.alternate, e, nt);
  e.memoizedProps = e.pendingProps, t === null ? Iu(e) : Te = t, Uo.current = null;
}
function Iu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = zp(n, t), n !== null) {
        n.flags &= 32767, Te = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        De = 6, Te = null;
        return;
      }
    } else if (n = Op(n, t, nt), n !== null) {
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
  var r = fe, l = ft.transition;
  try {
    ft.transition = null, fe = 1, Bp(e, t, n, r);
  } finally {
    ft.transition = l, fe = r;
  }
  return null;
}
function Bp(e, t, n, r) {
  do
    Yn();
  while (Xt !== null);
  if (ue & 6) throw Error(W(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(W(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (bf(e, a), e === Oe && (Te = Oe = null, Ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || bl || (bl = !0, Du(Kl, function() {
    return Yn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = fe;
    fe = 1;
    var i = ue;
    ue |= 4, Uo.current = null, Fp(e, n), ju(n, e), up(Ma), ql = !!Na, Ma = Na = null, e.current = n, Wp(n), gf(), ue = i, fe = o, ft.transition = a;
  } else e.current = n;
  if (bl && (bl = !1, Xt = e, us = l), a = e.pendingLanes, a === 0 && (rn = null), wf(n.stateNode), Ze(e, Ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ds) throw ds = !1, e = qa, qa = null, e;
  return us & 1 && e.tag !== 0 && Yn(), a = e.pendingLanes, a & 1 ? e === Ya ? Dr++ : (Dr = 0, Ya = e) : Dr = 0, un(), null;
}
function Yn() {
  if (Xt !== null) {
    var e = dd(us), t = ft.transition, n = fe;
    try {
      if (ft.transition = null, fe = 16 > e ? 16 : e, Xt === null) var r = !1;
      else {
        if (e = Xt, Xt = null, us = 0, ue & 6) throw Error(W(331));
        var l = ue;
        for (ue |= 4, G = e.current; G !== null; ) {
          var a = G, o = a.child;
          if (G.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (G = d; G !== null; ) {
                  var m = G;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, m, a);
                  }
                  var g = m.child;
                  if (g !== null) g.return = m, G = g;
                  else for (; G !== null; ) {
                    m = G;
                    var v = m.sibling, x = m.return;
                    if (_u(m), m === d) {
                      G = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = x, G = v;
                      break;
                    }
                    G = x;
                  }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var _ = w.child;
                if (_ !== null) {
                  w.child = null;
                  do {
                    var S = _.sibling;
                    _.sibling = null, _ = S;
                  } while (_ !== null);
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
                Tr(9, a, a.return);
            }
            var h = a.sibling;
            if (h !== null) {
              h.return = a.return, G = h;
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
                  js(9, i);
              }
            } catch (k) {
              Ne(i, i.return, k);
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
        if (ue = l, un(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
          Mt.onPostCommitFiberRoot(gs, e);
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
function uc(e, t, n) {
  t = nr(n, t), t = du(e, t, 1), e = nn(e, t, 1), t = Be(), e !== null && (nl(e, 1, t), Ze(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3) uc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      uc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
        e = nr(n, e), e = uu(t, e, 1), t = nn(t, e, 1), e = Be(), t !== null && (nl(t, 1, e), Ze(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Hp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, Oe === e && (Ae & n) === n && (De === 4 || De === 3 && (Ae & 130023424) === Ae && 500 > Ie() - Qo ? vn(e, 0) : Vo |= n), Ze(e, t);
}
function Tu(e, t) {
  t === 0 && (e.mode & 1 ? (t = hl, hl <<= 1, !(hl & 130023424) && (hl = 4194304)) : t = 1);
  var n = Be();
  e = Ft(e, t), e !== null && (nl(e, t, n), Ze(e, n));
}
function Kp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Tu(e, n);
}
function Gp(e, t) {
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
      throw Error(W(314));
  }
  r !== null && r.delete(t), Tu(e, n);
}
var Lu;
Lu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ye.current) qe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, Rp(e, t, n);
    qe = !!(e.flags & 131072);
  }
  else qe = !1, Se && t.flags & 1048576 && Od(t, ns, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fl(e, t), e = t.pendingProps;
      var l = Zn(t, Ve.current);
      qn(t, n), l = zo(null, t, r, e, l, n);
      var a = Ao();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (a = !0, es(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Lo(t), l.updater = Ss, t.stateNode = l, l._reactInternals = t, Aa(t, r, e, n), t = $a(null, t, r, !0, a, n)) : (t.tag = 0, Se && a && bo(t), Qe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Yp(r), e = yt(r, e), l) {
          case 0:
            t = Wa(null, t, r, e, n);
            break e;
          case 1:
            t = tc(null, t, r, e, n);
            break e;
          case 11:
            t = Ji(null, t, r, e, n);
            break e;
          case 14:
            t = ec(null, t, r, yt(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : yt(r, l), Wa(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : yt(r, l), tc(e, t, r, l, n);
    case 3:
      e: {
        if (hu(t), e === null) throw Error(W(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, Ud(e, t), ss(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = nr(Error(W(423)), t), t = nc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = nr(Error(W(424)), t), t = nc(e, t, r, n, l);
          break e;
        } else for (rt = tn(t.stateNode.containerInfo.firstChild), lt = t, Se = !0, wt = null, n = Wd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Jn(), r === l) {
            t = Wt(e, t, n);
            break e;
          }
          Qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Vd(t), e === null && Ra(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Ia(r, l) ? o = null : a !== null && Ia(r, a) && (t.flags |= 32), pu(e, t), Qe(e, t, o, n), t.child;
    case 6:
      return e === null && Ra(t), null;
    case 13:
      return gu(e, t, n);
    case 4:
      return Do(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = er(t, null, r, n) : Qe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : yt(r, l), Ji(e, t, r, l, n);
    case 7:
      return Qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, ge(rs, r._currentValue), r._currentValue = o, a !== null) if (St(a.value, o)) {
          if (a.children === l.children && !Ye.current) {
            t = Wt(e, t, n);
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
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Oa(
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
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Oa(o, n, t), o = a.sibling;
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
        Qe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, qn(t, n), l = pt(l), r = r(l), t.flags |= 1, Qe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = yt(r, t.pendingProps), l = yt(r.type, l), ec(e, t, r, l, n);
    case 15:
      return mu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : yt(r, l), Fl(e, t), t.tag = 1, Xe(r) ? (e = !0, es(t)) : e = !1, qn(t, n), cu(t, r, l), Aa(t, r, l, n), $a(null, t, r, !0, e, n);
    case 19:
      return yu(e, t, n);
    case 22:
      return fu(e, t, n);
  }
  throw Error(W(156, t.tag));
};
function Du(e, t) {
  return ad(e, t);
}
function qp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function mt(e, t, n, r) {
  return new qp(e, t, n, r);
}
function Go(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Yp(e) {
  if (typeof e == "function") return Go(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fo) return 11;
    if (e === po) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ul(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") Go(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Pn:
      return wn(n.children, l, a, t);
    case mo:
      o = 8, l |= 8;
      break;
    case ia:
      return e = mt(12, n, t, l | 2), e.elementType = ia, e.lanes = a, e;
    case ca:
      return e = mt(13, n, t, l), e.elementType = ca, e.lanes = a, e;
    case da:
      return e = mt(19, n, t, l), e.elementType = da, e.lanes = a, e;
    case Vc:
      return Es(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case $c:
          o = 10;
          break e;
        case Uc:
          o = 9;
          break e;
        case fo:
          o = 11;
          break e;
        case po:
          o = 14;
          break e;
        case Bt:
          o = 16, r = null;
          break e;
      }
      throw Error(W(130, e == null ? e : typeof e, ""));
  }
  return t = mt(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function wn(e, t, n, r) {
  return e = mt(7, e, r, t), e.lanes = n, e;
}
function Es(e, t, n, r) {
  return e = mt(22, e, r, t), e.elementType = Vc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function la(e, t, n) {
  return e = mt(6, e, null, t), e.lanes = n, e;
}
function sa(e, t, n) {
  return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Xp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fs(0), this.expirationTimes = Fs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fs(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function qo(e, t, n, r, l, a, o, i, c) {
  return e = new Xp(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = mt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lo(a), e;
}
function Zp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Pu(e) {
  if (!e) return on;
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
    if (Xe(n)) return Pd(e, n, t);
  }
  return t;
}
function Ru(e, t, n, r, l, a, o, i, c) {
  return e = qo(n, r, !0, e, l, a, o, i, c), e.context = Pu(null), n = e.current, r = Be(), l = ln(n), a = Ot(r, l), a.callback = t ?? null, nn(n, a, l), e.current.lanes = l, nl(e, l, r), Ze(e, r), e;
}
function Cs(e, t, n, r) {
  var l = t.current, a = Be(), o = ln(l);
  return n = Pu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ot(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(l, t, o), e !== null && (kt(e, l, o, a), Ol(e, l, o)), o;
}
function fs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yo(e, t) {
  mc(e, t), (e = e.alternate) && mc(e, t);
}
function Jp() {
  return null;
}
var Ou = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Xo(e) {
  this._internalRoot = e;
}
Ns.prototype.render = Xo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  Cs(e, t, null, null);
};
Ns.prototype.unmount = Xo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jn(function() {
      Cs(null, e, null, null);
    }), t[At] = null;
  }
};
function Ns(e) {
  this._internalRoot = e;
}
Ns.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = fd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
    Kt.splice(n, 0, e), n === 0 && hd(e);
  }
};
function Zo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ms(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function fc() {
}
function eh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = fs(o);
        a.call(d);
      };
    }
    var o = Ru(t, r, e, 0, null, !1, !1, "", fc);
    return e._reactRootContainer = o, e[At] = o.current, Ur(e.nodeType === 8 ? e.parentNode : e), jn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = fs(c);
      i.call(d);
    };
  }
  var c = qo(e, 0, !1, null, null, !1, !1, "", fc);
  return e._reactRootContainer = c, e[At] = c.current, Ur(e.nodeType === 8 ? e.parentNode : e), jn(function() {
    Cs(t, c, n, r);
  }), c;
}
function Is(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = fs(o);
        i.call(c);
      };
    }
    Cs(t, o, e, l);
  } else o = eh(n, t, e, l, r);
  return fs(o);
}
ud = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 && (yo(t, n | 1), Ze(t, Ie()), !(ue & 6) && (rr = Ie() + 500, un()));
      }
      break;
    case 13:
      jn(function() {
        var r = Ft(e, 1);
        if (r !== null) {
          var l = Be();
          kt(r, e, 1, l);
        }
      }), Yo(e, 1);
  }
};
vo = function(e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Be();
      kt(t, e, 134217728, n);
    }
    Yo(e, 134217728);
  }
};
md = function(e) {
  if (e.tag === 13) {
    var t = ln(e), n = Ft(e, t);
    if (n !== null) {
      var r = Be();
      kt(n, e, t, r);
    }
    Yo(e, t);
  }
};
fd = function() {
  return fe;
};
pd = function(e, t) {
  var n = fe;
  try {
    return fe = e, t();
  } finally {
    fe = n;
  }
};
xa = function(e, t, n) {
  switch (t) {
    case "input":
      if (fa(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xs(r);
            if (!l) throw Error(W(90));
            Bc(r), fa(r, l);
          }
        }
      }
      break;
    case "textarea":
      Kc(e, n);
      break;
    case "select":
      t = n.value, t != null && Bn(e, !!n.multiple, t, !1);
  }
};
ed = Bo;
td = jn;
var th = { usingClientEntryPoint: !1, Events: [ll, An, xs, Zc, Jc, Bo] }, xr = { findFiberByHostInstance: hn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, nh = { bundleType: xr.bundleType, version: xr.version, rendererPackageName: xr.rendererPackageName, rendererConfig: xr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ld(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xr.findFiberByHostInstance || Jp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var El = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!El.isDisabled && El.supportsFiber) try {
    gs = El.inject(nh), Mt = El;
  } catch {
  }
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = th;
at.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zo(t)) throw Error(W(200));
  return Zp(e, t, null, n);
};
at.createRoot = function(e, t) {
  if (!Zo(e)) throw Error(W(299));
  var n = !1, r = "", l = Ou;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = qo(e, 1, !1, null, null, n, !1, r, l), e[At] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new Xo(t);
};
at.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(W(188)) : (e = Object.keys(e).join(","), Error(W(268, e)));
  return e = ld(t), e = e === null ? null : e.stateNode, e;
};
at.flushSync = function(e) {
  return jn(e);
};
at.hydrate = function(e, t, n) {
  if (!Ms(t)) throw Error(W(200));
  return Is(null, e, t, !0, n);
};
at.hydrateRoot = function(e, t, n) {
  if (!Zo(e)) throw Error(W(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = Ou;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Ru(t, null, e, 1, n ?? null, l, !1, a, o), e[At] = t.current, Ur(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ns(t);
};
at.render = function(e, t, n) {
  if (!Ms(t)) throw Error(W(200));
  return Is(null, e, t, !1, n);
};
at.unmountComponentAtNode = function(e) {
  if (!Ms(e)) throw Error(W(40));
  return e._reactRootContainer ? (jn(function() {
    Is(null, null, e, !1, function() {
      e._reactRootContainer = null, e[At] = null;
    });
  }), !0) : !1;
};
at.unstable_batchedUpdates = Bo;
at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ms(n)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return Is(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function zu() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zu);
    } catch (e) {
      console.error(e);
    }
}
zu(), zc.exports = at;
var pe = zc.exports, Au, pc = pe;
Au = pc.createRoot, pc.hydrateRoot;
var Fu = { exports: {} }, Ts = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rh = f, lh = Symbol.for("react.element"), sh = Symbol.for("react.fragment"), ah = Object.prototype.hasOwnProperty, oh = rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ih = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wu(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) ah.call(t, r) && !ih.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: lh, type: e, key: a, ref: o, props: l, _owner: oh.current };
}
Ts.Fragment = sh;
Ts.jsx = Wu;
Ts.jsxs = Wu;
Fu.exports = Ts;
var s = Fu.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ch = {
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
const dh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ne = (e, t) => {
  const n = f.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, m) => f.createElement(
      "svg",
      {
        ref: m,
        ...ch,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${dh(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([g, v]) => f.createElement(g, v)),
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
const $u = ne("AlertCircle", [
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
const uh = ne("AlertTriangle", [
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
const Uu = ne("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mh = ne("ArrowUpDown", [
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
const Vu = ne("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fh = ne("Box", [
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
const ph = ne("Calendar", [
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
const hh = ne("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = ne("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gh = ne("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = ne("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ei = ne("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yh = ne("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = ne("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = ne("Download", [
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
const wh = ne("Eraser", [
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
const ti = ne("FileJson", [
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
const xh = ne("FileText", [
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
const _h = ne("Folder", [
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
const kh = ne("Info", [
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
const Sh = ne("Lasso", [
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
const Bu = ne("LayoutGrid", [
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
const jh = ne("LayoutList", [
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
const bh = ne("Link2Off", [
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
const Eh = ne("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = ne("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = ne("Maximize", [
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
const Nh = ne("Menu", [
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
const Mh = ne("Minimize", [
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
const Ih = ne("MoreVertical", [
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
const Th = ne("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hu = ne("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = ne("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = ne("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = ne("RefreshCw", [
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
const Lh = ne("ScanLine", [
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
const Ku = ne("Settings", [
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
const Gu = ne("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = ne("Star", [
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
const Dh = ne("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = ne("Tag", [
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
const Ph = ne("Trash", [
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
const Rh = ne("Type", [
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
const Oh = ne("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zh = ne("Upload", [
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
const Ah = ne("Workflow", [
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
const Fh = ne("ZoomIn", [
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
const Wh = ne("ZoomOut", [
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
const $h = async () => {
  const e = await le.fetchApi("/meld/home-dir");
  return (await ce(e)).home;
}, et = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  f.useEffect(() => {
    if (!t) return;
    const r = (l) => {
      l.key === "Escape" && (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let ps = !1;
const Uh = (e) => {
  ps = e, ps && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Vh = (...e) => {
  ps && console.log("[Meld]", ...e);
}, Qh = (...e) => {
  ps && console.warn("[Meld]", ...e);
}, Bh = (...e) => {
  console.error("[Meld]", ...e);
}, te = {
  log: Vh,
  warn: Qh,
  error: Bh,
  init: Uh
}, Vl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await le.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return ce(a);
}, qu = async (e) => {
  const t = await le.fetchApi(`/meld/image/${e}/details`);
  return ce(t);
}, Hh = async (e, t = !1) => {
  const n = await le.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ce(n);
}, ni = async (e) => {
  const t = await le.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ce(t);
}, Yu = async (e) => {
  const t = await le.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ce(t);
}, gc = async (e, t) => {
  const n = await le.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ce(n);
}, Kh = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await le.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await ce(r);
  } catch {
    return [];
  }
}, Ja = async (e) => {
  const t = await le.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ce(t);
  } catch {
    return [];
  }
}, Gh = async (e, t) => {
  const n = await le.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ce(n);
}, qh = async (e, t) => {
  const n = await le.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return ce(n);
}, eo = async (e, t, n) => {
  const r = await le.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ce(r);
}, Yh = async (e) => {
  const t = await le.fetchApi(`/meld/image/${e}/workflow`);
  return ce(t);
}, Xh = async (e) => {
  const t = await le.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ce(t);
}, Zh = async (e, t) => {
  const n = await le.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), l = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = l, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(l), document.body.removeChild(a);
}, Jh = async (e, t) => {
  const n = await le.fetchApi("/meld/api/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error(`Failed to download image ${e}`);
  const r = n.headers.get("Content-Disposition");
  let l = `image_${e}.png`;
  if (r != null && r.includes("filename=")) {
    const c = r.match(/filename="?([^"]+)"?/);
    c != null && c[1] && (l = c[1]);
  }
  const a = await n.blob(), o = window.URL.createObjectURL(a), i = document.createElement("a");
  i.href = o, i.download = l, document.body.appendChild(i), i.click(), window.URL.revokeObjectURL(o), document.body.removeChild(i);
}, eg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await le.fetchApi(n);
  return ce(r);
}, tg = async () => {
  const e = await le.fetchApi("/meld/search-suggestions");
  return ce(e);
}, ng = async () => {
  const e = await le.fetchApi("/meld/search-keywords");
  return ce(e);
}, rg = async () => {
  const e = await le.fetchApi("/meld/search-config");
  return ce(e);
}, lg = async () => {
  const e = await le.fetchApi("/meld/favorites");
  return ce(e);
}, sg = async (e, t) => {
  const n = await le.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ce(n);
}, yc = async (e) => {
  const t = await le.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ce(t);
}, ag = async (e, t, n) => {
  const r = await le.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ce(r);
}, og = {
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
}, Xu = async () => {
  let e;
  try {
    const t = await le.fetchApi("/meld/settings");
    e = await ce(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), og;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, ig = async (e, t) => {
  const n = await le.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ce(n);
}, vc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, m) => {
    const g = typeof d == "function" ? d(t) : d;
    if (!Object.is(g, t)) {
      const v = t;
      t = m ?? (typeof g != "object" || g === null) ? g : Object.assign({}, t, g), n.forEach((x) => x(t, v));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, cg = (e) => e ? vc(e) : vc, dg = (e) => e;
function ug(e, t = dg) {
  const n = qt.useSyncExternalStore(
    e.subscribe,
    qt.useCallback(() => t(e.getState()), [e, t]),
    qt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return qt.useDebugValue(n), n;
}
const mg = (e) => {
  const t = cg(e), n = (r) => ug(t, r);
  return Object.assign(n, t), n;
}, fg = (e) => mg;
function pg(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (l) => {
      var a;
      const o = (c) => c === null ? null : JSON.parse(c, void 0), i = (a = n.getItem(l)) != null ? a : null;
      return i instanceof Promise ? i.then(o) : o(i);
    },
    setItem: (l, a) => n.setItem(l, JSON.stringify(a, void 0)),
    removeItem: (l) => n.removeItem(l)
  };
}
const to = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return to(r)(n);
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
        return to(r)(n);
      }
    };
  }
}, hg = (e, t) => (n, r, l) => {
  let a = {
    storage: pg(() => window.localStorage),
    partialize: (S) => S,
    version: 0,
    merge: (S, h) => ({
      ...h,
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
      l
    );
  const g = () => {
    const S = a.partialize({ ...r() });
    return m.setItem(a.name, {
      state: S,
      version: a.version
    });
  }, v = l.setState;
  l.setState = (S, h) => (v(S, h), g());
  const x = e(
    (...S) => (n(...S), g()),
    r,
    l
  );
  l.getInitialState = () => x;
  let w;
  const _ = () => {
    var S, h;
    if (!m) return;
    const u = ++i;
    o = !1, c.forEach((y) => {
      var k;
      return y((k = r()) != null ? k : x);
    });
    const p = ((h = a.onRehydrateStorage) == null ? void 0 : h.call(a, (S = r()) != null ? S : x)) || void 0;
    return to(m.getItem.bind(m))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate) {
            const k = a.migrate(
              y.state,
              y.version
            );
            return k instanceof Promise ? k.then((j) => [!0, j]) : [!0, k];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var k;
      if (u !== i)
        return;
      const [j, b] = y;
      if (w = a.merge(
        b,
        (k = r()) != null ? k : x
      ), n(w, !0), j)
        return g();
    }).then(() => {
      u === i && (p == null || p(w, void 0), w = r(), o = !0, d.forEach((y) => y(w)));
    }).catch((y) => {
      u === i && (p == null || p(void 0, y));
    });
  };
  return l.persist = {
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
  }, a.skipHydration || _(), w || x;
}, gg = hg, yg = [
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
const he = fg()(
  gg(
    (e) => ({
      isOpen: !1,
      slots: yg,
      buckets: {},
      images: {},
      toastMessage: null,
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((l) => {
        const a = { ...l.buckets };
        for (const i in a)
          a[i] = a[i].filter((c) => c !== n);
        a[t] || (a[t] = []), a[t].includes(n) || (a[t] = [...a[t], n]);
        const o = { ...l.images };
        return r && (o[n] = r), { buckets: a, images: o };
      }),
      removeFromBucket: (t, n) => e((r) => {
        var i;
        const l = {
          ...r.buckets,
          [t]: ((i = r.buckets[t]) == null ? void 0 : i.filter((c) => c !== n)) || []
        }, a = Object.values(l).some(
          (c) => c.includes(n)
        ), o = { ...r.images };
        return a || delete o[n], { buckets: l, images: o };
      }),
      clearBucket: (t) => e((n) => {
        const r = {
          ...n.buckets,
          [t]: []
        }, l = new Set(Object.values(r).flat()), a = { ...n.images };
        for (const o of Object.keys(a))
          l.has(o) || delete a[o];
        return { buckets: r, images: a };
      }),
      updateSlot: (t, n) => e((r) => ({
        slots: r.slots.map(
          (l) => l.id === t ? { ...l, ...n } : l
        )
      })),
      addSlot: (t) => e((n) => ({
        slots: [...n.slots, t]
      })),
      removeSlot: (t) => e((n) => {
        const r = n.slots.filter((i) => i.id !== t), l = { ...n.buckets };
        delete l[t];
        const a = new Set(Object.values(l).flat()), o = { ...n.images };
        for (const i of Object.keys(o))
          a.has(i) || delete o[i];
        return {
          slots: r,
          buckets: l,
          images: o
        };
      }),
      removeImages: (t) => e((n) => {
        const r = t.map(String), l = new Set(r), a = { ...n.buckets };
        let o = !1;
        for (const [c, d] of Object.entries(a)) {
          const m = d.filter((g) => !l.has(g));
          m.length !== d.length && (a[c] = m, o = !0);
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
), vg = {
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
function wg(e, t) {
  var n, r, l;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const a = new Set(t.payload), o = e.images.filter((c) => !a.has(c.id)), i = new Set(e.selectedIds);
      for (const c of t.payload)
        i.delete(c);
      return {
        ...e,
        images: o,
        selectedIds: i,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const a = t.payload, o = [...e.images, ...a], i = Array.from(
        new Map(o.map((c) => [c.id, c])).values()
      ).sort((c, d) => d.created_at - c.created_at);
      return {
        ...e,
        images: i,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + a.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const a = t.payload, o = e.images.map(
        (c) => c.id === a.id ? a : c
      ), i = e.lineageImages.map(
        (c) => c.id === a.id ? a : c
      );
      return {
        ...e,
        images: o,
        lineageImages: i
      };
    }
    case "SET_IMAGES": {
      const { images: a, total: o, offset: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !a.some((m) => m.id === c)) {
        const m = e.images.find((g) => g.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        m ? d = m : c = null;
      }
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        viewerImageId: c,
        viewerFallbackImage: d,
        pagination: {
          total: o,
          offset: i,
          limit: e.pagination.limit,
          hasMore: i + a.length < o
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: a, total: o, offset: i } = t.payload, c = [...e.images, ...a], d = Array.from(
        new Map(c.map((m) => [m.id, m])).values()
      );
      return {
        ...e,
        images: d,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: o,
          offset: i,
          hasMore: i + a.length < o
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
        const m = new Set(e.selectedIds);
        return m.add(t.payload), {
          ...e,
          selectedIds: m,
          lastSelectedId: t.payload
        };
      }
      const a = e.images.findIndex(
        (m) => m.id === e.lastSelectedId
      ), o = e.images.findIndex(
        (m) => m.id === t.payload
      );
      if (a === -1 || o === -1) return e;
      const [i, c] = [
        Math.min(a, o),
        Math.max(a, o)
      ], d = new Set(e.selectedIds);
      for (let m = i; m <= c; m++)
        d.add(e.images[m].id);
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
      const a = t.payload, o = typeof a == "number" ? a : a.id, i = typeof a == "number" ? "gallery" : a.mode, c = typeof a != "number" && a.mode === "lighttable" ? a.slotId : null;
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
      const m = e.viewerMode === "lineage" && i === "lineage" && e.lineageImages.some((g) => g.id === o);
      return {
        ...e,
        viewerImageId: o,
        viewerMode: i,
        viewerLightTableSlotId: c,
        viewerInitialMaskMode: d,
        lineageImages: m ? e.lineageImages : []
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
      const o = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.trim() !== "";
      let c = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (he.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const w = Number.parseInt(x, 10);
        return e.images.find((_) => _.id === w) || e.lineageImages.find((_) => _.id === w) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (g) => g.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !g.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (g) => g.id === e.viewerImageId
      );
      if (d === -1 || d === c.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || d === c.length - 1 && !o)
        return e;
      const m = (d + 1) % c.length;
      return {
        ...e,
        viewerImageId: c[m].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const o = ((l = t.payload) == null ? void 0 : l.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.trim() !== "";
      let c = [];
      if (e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? c = (he.getState().buckets[e.viewerLightTableSlotId] || []).map((x) => {
        const w = Number.parseInt(x, 10);
        return e.images.find((_) => _.id === w) || e.lineageImages.find((_) => _.id === w) || null;
      }).filter((x) => x !== null) : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? c = e.lineageImages : c = e.images.filter(
        (g) => g.exists !== !1 && (e.settings["gallery.show_parent_images"] || i || !g.has_children)
      ), e.viewerImageId === null || c.length === 0)
        return e;
      const d = c.findIndex(
        (g) => g.id === e.viewerImageId
      );
      if (d === -1 || d === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || d === 0 && !o)
        return e;
      const m = (d - 1 + c.length) % c.length;
      return {
        ...e,
        viewerImageId: c[m].id
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
const Zu = f.createContext(void 0), xg = ({
  children: e
}) => {
  const [t, n] = f.useReducer(wg, vg), r = f.useRef(t.images.length), l = f.useRef(0), a = f.useRef(/* @__PURE__ */ new Map());
  f.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = f.useCallback(
    async (w, _, S) => {
      const h = t.settings["gallery.max_load_count"], u = 200;
      let p = w;
      for (; p < Math.min(_, h) && S === l.current; )
        try {
          const y = Math.min(u, h - p);
          te.log("Background fetch: starting chunk", {
            offset: p,
            limit: y
          });
          const k = await Vl(
            p,
            y,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== l.current || (n({ type: "APPEND_IMAGES", payload: k }), p += k.images.length, k.images.length === 0 || p >= k.total))
            break;
          await new Promise((j) => setTimeout(j, 300));
        } catch (y) {
          te.error("Background fetch failed", y);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = f.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now(), _ = ++l.current;
    try {
      const S = t.searchQuery.trim() !== "", h = t.settings["gallery.initial_load_count"];
      te.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: h,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Vl(
        0,
        h,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), p = performance.now() - w;
      te.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > h && o(h, u.total, _);
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
  ]), c = f.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now();
    try {
      const _ = r.current, S = t.searchQuery.trim() !== "", h = t.pagination.limit;
      te.log("loadMoreImages: starting fetch", {
        nextOffset: _,
        fetchLimit: h,
        isSearch: S
      });
      const u = await Vl(
        _,
        h,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), p = performance.now() - w;
      te.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (_) {
      te.error("loadMoreImages: fetch failed", _), n({
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
  ]), d = f.useCallback(async () => {
    try {
      const w = await lg();
      n({ type: "SET_FAVORITES", payload: w });
    } catch (w) {
      te.error("Failed to load favorites", w);
    }
  }, []), m = f.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds), S = t.images.filter(
      (h) => t.selectedIds.has(h.id)
    ).some(
      (h) => h.parent_id || h.has_children
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
  }, [t.selectedIds, t.images, t.viewScope]), g = f.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await ni(w)).restored_ids || w;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (_) {
      n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.selectedIds, t.viewScope]), v = f.useCallback(
    async (w, _) => {
      try {
        await ig(w, _), n({ type: "SET_SETTINGS", payload: { [w]: _ } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), x = f.useCallback(
    async (w) => {
      const _ = t.images.find((p) => p.id === w);
      if (_ && !_.is_minimal)
        return _;
      const S = t.lineageImages.find((p) => p.id === w);
      if (S && !S.is_minimal)
        return S;
      const h = a.current.get(w);
      if (h)
        return h;
      const u = (async () => {
        try {
          te.log("fetchFullImageDetails: fetching full data", { id: w });
          const p = await qu(w);
          return n({ type: "UPDATE_IMAGE", payload: p }), p;
        } finally {
          a.current.delete(w);
        }
      })();
      return a.current.set(w, u), u;
    },
    [t.images, t.lineageImages]
  );
  return f.useEffect(() => {
    (async () => {
      try {
        const _ = await Xu();
        n({ type: "SET_SETTINGS", payload: _ });
      } catch (_) {
        te.error("Failed to load settings", _);
      }
    })();
  }, []), f.useEffect(() => {
    d();
  }, [d]), f.useEffect(() => {
    const w = () => {
      i();
    }, _ = (h) => {
      const u = h.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, S = (h) => {
      const u = h.detail;
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
    return window.addEventListener("meld-refresh", w), window.addEventListener("meld-scan-progress", _), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", w), window.removeEventListener("meld-scan-progress", _), window.removeEventListener("meld-scan-finished", S);
    };
  }, [i, t.scanStatus.progress.total]), f.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    Zu.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: m,
        restoreSelected: g,
        updateSetting: v,
        fetchFullImageDetails: x
      },
      children: e
    }
  );
}, _e = () => {
  const e = f.useContext(Zu);
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
}, ri = async () => {
  const e = await le.fetchApi("/meld/tags");
  return ce(e);
}, _g = async (e) => {
  const t = await le.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ce(t);
}, kg = async (e) => {
  const t = await le.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ce(t);
}, Sg = async (e, t) => {
  const n = await le.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ce(n);
}, jg = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await le.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, bg = async (e, t, n = !1, r) => {
  const l = await le.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ce(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Eg = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await le.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ce(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, Cg = async (e, t, n) => {
  const r = await le.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ce(r)).count;
  } catch {
    return 0;
  }
}, Ng = async (e) => {
  const t = await le.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ce(t);
}, Mg = async () => {
  const e = await le.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ce(e);
}, Ju = () => {
  const { dispatch: e } = _e(), [t, n] = f.useState(() => {
    const N = localStorage.getItem("meld-import-config"), R = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (N)
      try {
        const z = JSON.parse(N);
        return { ...R, ...z, tags: [] };
      } catch {
        return R;
      }
    return R;
  });
  f.useEffect(() => {
    const { tags: N, ...R } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(R));
  }, [t]);
  const [r, l] = f.useState([]), [a, o] = f.useState([]), [i, c] = f.useState(0), [d, m] = f.useState(!1), [g, v] = f.useState([]), [x, w] = f.useState(""), [_, S] = f.useState(!1), [h, u] = f.useState(null), p = f.useRef(!1), y = (N) => {
    N.target === N.currentTarget && (p.current = !0);
  }, k = (N) => {
    N.target === N.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  f.useEffect(() => {
    (async () => {
      try {
        const R = await $h();
        n((z) => z.custom_path ? z : { ...z, custom_path: R });
      } catch (R) {
        te.error("Failed to fetch home directory:", R);
      }
    })();
  }, []), f.useEffect(() => {
    const N = new AbortController();
    return (async () => {
      const z = t.type === "custom" ? t.custom_path : t.subfolder;
      if (te.log(
        `loadFolders started. Path: "${z}", Type: "${t.type}"`
      ), t.type === "custom" && !z) {
        te.log("Custom path is empty, skipping load."), l([]), o([]), c(0);
        return;
      }
      m(!0);
      const T = z, E = t.type;
      try {
        te.log("Step 1: Fast load starting...");
        const L = await bg(
          t.type,
          z,
          !0,
          N.signal
        );
        if (N.signal.aborted) {
          te.log("Step 1: Aborted.");
          return;
        }
        te.log(
          `Step 1 complete. Found ${L.folders.length} folders, ${L.images.length} images.`
        ), l(L.folders), o(L.images), c(null);
        const V = L.folders.map((M) => M.name);
        V.length > 0 && (te.log(
          `Step 2: Metadata fetch starting for ${V.length} folders...`
        ), Eg(
          E,
          T,
          V,
          N.signal
        ).then((M) => {
          if (N.signal.aborted) {
            te.log("Step 2: Aborted.");
            return;
          }
          te.log("Step 2: Metadata fetch complete."), l(
            (Q) => Q.map((de) => {
              const B = M[de.name];
              return B ? { ...de, count: B.count, preview: B.preview } : de;
            })
          );
        }).catch((M) => {
          M.name !== "AbortError" && te.error("Step 2: Metadata fetch failed:", M);
        })), te.log("Step 3: Path image count starting..."), Cg(E, T, N.signal).then((M) => {
          if (N.signal.aborted) {
            te.log("Step 3: Aborted.");
            return;
          }
          te.log(`Step 3: Path image count complete: ${M}`), c(M);
        }).catch((M) => {
          M.name !== "AbortError" && te.error("Step 3: Path image count failed:", M);
        });
      } catch (L) {
        if (L.name === "AbortError") {
          te.log("Request aborted.");
          return;
        }
        te.error("Failed to load folders:", L), l([]), o([]), c(0);
      } finally {
        N.signal.aborted || m(!1);
      }
    })(), () => {
      N.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const j = f.useCallback(async () => {
    S(!0);
    try {
      const N = await ri();
      v(N);
    } catch (N) {
      te.error("Failed to fetch tags:", N);
    } finally {
      S(!1);
    }
  }, []);
  f.useEffect(() => {
    j();
  }, [j]), et({
    onEscape: f.useCallback(() => {
      h ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [h, e])
  });
  const b = f.useMemo(() => g.filter(
    (N) => N.name.toLowerCase().includes(x.toLowerCase()) && !t.tags.includes(N.name)
  ), [g, x, t.tags]), C = (N) => {
    const R = N.trim();
    R && !t.tags.includes(R) && (n({ ...t, tags: [...t.tags, R] }), w(""));
  }, O = (N) => {
    n({ ...t, tags: t.tags.filter((R) => R !== N) });
  }, P = (N) => {
    N.key === "Enter" && x.trim() && (N.preventDefault(), C(x.trim()));
  }, D = async () => {
    try {
      await Ng(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (N) {
      te.error("Failed to start scan:", N), alert(`Failed to start scan: ${N}`);
    }
  }, U = (N) => {
    if (t.type === "custom") {
      const R = t.custom_path.includes("\\") ? "\\" : "/", z = t.custom_path.endsWith(R) ? `${t.custom_path}${N}` : `${t.custom_path}${R}${N}`;
      n({ ...t, custom_path: z });
    } else {
      const R = t.subfolder ? `${t.subfolder}/${N}` : N;
      n({ ...t, subfolder: R });
    }
  }, J = () => {
    if (t.type === "custom") {
      const N = t.custom_path.includes("\\") ? "\\" : "/", R = t.custom_path.split(N);
      if (R.length > 1) {
        R.pop();
        let z = R.join(N);
        z === "" && N === "/" && (z = "/"), n({ ...t, custom_path: z });
      }
    } else {
      const N = t.subfolder.split("/");
      N.pop(), n({ ...t, subfolder: N.join("/") });
    }
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: k,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (N) => N.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
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
                          onChange: (N) => n({
                            ...t,
                            type: N.target.value,
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-path-count", children: i === null ? /* @__PURE__ */ s.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${i} images` })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (N) => n({ ...t, recursive: N.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "link-strategy", children: "Source Linking" }),
                      /* @__PURE__ */ s.jsxs(
                        "select",
                        {
                          id: "link-strategy",
                          value: t.link_strategy,
                          onChange: (N) => n({
                            ...t,
                            link_strategy: N.target.value,
                            auto_link_parent: N.target.value !== "none"
                          }),
                          children: [
                            /* @__PURE__ */ s.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ s.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ s.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ s.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((N) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        N,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => O(N),
                            children: /* @__PURE__ */ s.jsx(ye, { size: 12 })
                          }
                        )
                      ] }, N)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(bn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: x,
                            onChange: (N) => w(N.target.value),
                            onKeyDown: P
                          }
                        ),
                        x.trim() && !t.tags.includes(x.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => C(x),
                            children: /* @__PURE__ */ s.jsx(Ls, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? x && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        x
                      ] }) : b.map((N) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => C(N.name),
                          children: N.name
                        },
                        N.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: D,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(Zr, { size: 16 }),
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
                          onClick: J,
                          children: [
                            /* @__PURE__ */ s.jsx(Qu, { size: 16 }),
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
                          onChange: (N) => n({ ...t, custom_path: N.target.value }),
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((N) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => U(N.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: N.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Je(N.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(_h, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: N.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${N.count === null ? "meld-folder-count--loading" : ""}`,
                                children: N.count !== null ? `${N.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(ei, { size: 14 })
                          ]
                        },
                        N.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((N) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(N),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: Je(N),
                              alt: N.filename,
                              title: N.filename
                            }
                          )
                        },
                        N.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          h && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (N) => {
                N.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (N) => N.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => u(null),
                          children: /* @__PURE__ */ s.jsx(ye, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: Je(h),
                          alt: h.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: h.filename })
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
}, Ig = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, l] = f.useState("zip"), [a, o] = f.useState(!1), [i, c] = f.useState(!1), d = f.useRef(!1), m = (x) => {
    x.target === x.currentTarget && (d.current = !0);
  }, g = (x) => {
    x.target === x.currentTarget && d.current && (i || n()), d.current = !1;
  };
  et({
    onEscape: () => {
      i || n();
    }
  });
  const v = async () => {
    c(!0);
    try {
      if (r === "zip")
        await Zh(e, a);
      else
        for (const x of e)
          await Jh(x, a), await new Promise((w) => setTimeout(w, 200));
      n(), t == null || t();
    } catch (x) {
      console.error("Download failed:", x), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: g,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Xr, { size: 18 }),
              /* @__PURE__ */ s.jsxs("h3", { style: { margin: 0 }, children: [
                "Download (",
                e.length,
                " image",
                e.length > 1 ? "s" : "",
                ")"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: n,
                disabled: i,
                children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", style: { padding: "20px" }, children: [
            /* @__PURE__ */ s.jsxs("div", { style: { marginBottom: "20px" }, children: [
              /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
                /* @__PURE__ */ s.jsxs(
                  "label",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "format",
                          value: "zip",
                          checked: r === "zip",
                          onChange: () => l("zip"),
                          disabled: i
                        }
                      ),
                      "ZIP (Single File)"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "label",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "format",
                          value: "raw",
                          checked: r === "raw",
                          onChange: () => l("raw"),
                          disabled: i
                        }
                      ),
                      "Raw (Multiple Files)"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsxs(
                "label",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer"
                  },
                  children: [
                    /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                disabled: i,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: v,
                disabled: i,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: i ? "Downloading..." : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx(Xr, { size: 16 }),
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
}, em = async () => {
  const e = await le.fetchApi("/meld/workflows");
  return ce(e);
}, tm = async (e) => {
  const t = await le.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return ce(t);
}, li = () => ({ executeWorkflow: f.useCallback(
  async (t, n, r, l) => {
    var x, w, _, S, h, u, p;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await tm(t);
    console.log("[Meld] Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    const d = (y) => {
      if (!y) return !1;
      const k = y.replace(/\s+/g, "");
      return k === "MeldImageLoader" || k === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const k = a.nodes.find(
          (j) => d(j.type)
        );
        k && (o = String(k.id));
      }
      const y = a.nodes.find(
        (k) => {
          var j;
          return ((j = k.type) == null ? void 0 : j.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      y && (i = String(y.id));
    } else {
      if (!o)
        for (const y in a) {
          const k = a[y];
          if (d(k.class_type)) {
            o = y;
            break;
          }
        }
      for (const y in a)
        if (((x = a[y].class_type) == null ? void 0 : x.replace(/\s+/g, "")) === "LoadImageMask") {
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
    let m = n.filename;
    if (n.subfolder && (m = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (m = `${m} [${n.type}]`), c) {
      const y = window.app, k = t.replace(/\.json$/i, "");
      let j = !1;
      const b = document.querySelectorAll(".workflow-tab");
      for (const P of Array.from(b)) {
        const D = P.querySelector(".workflow-label"), U = ((w = D == null ? void 0 : D.textContent) == null ? void 0 : w.trim()) || ((_ = P.textContent) == null ? void 0 : _.trim()) || "";
        if (U === k || U === t || U.startsWith(`${k} `) || U.startsWith(`${k}•`)) {
          P.click(), j = !0;
          break;
        }
      }
      j || await y.loadGraphData(a, !0, !0, t), await new Promise((P) => setTimeout(P, 200));
      const C = y.graph._nodes;
      console.log("[Meld] Active graph nodes count:", C.length);
      const O = C.find(
        (P) => String(P.id) === o || d(P.type)
      );
      if (O) {
        const P = (S = O.widgets) == null ? void 0 : S.find((D) => D.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: O.id,
          type: O.type,
          imagePath: m
        }), P && (P.value = m, typeof P.callback == "function" && P.callback(m));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const P = C.find(
          (D) => {
            var U;
            return String(D.id) === i || ((U = D.type) == null ? void 0 : U.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: P == null ? void 0 : P.id,
          maskFilename: r
        }), P) {
          const D = (h = P.widgets) == null ? void 0 : h.find(
            (J) => J.name === "image"
          );
          D && (D.value = `${r} [temp]`);
          const U = (u = P.widgets) == null ? void 0 : u.find(
            (J) => J.name === "channel"
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
    const g = JSON.parse(JSON.stringify(a));
    g[o].inputs.image = m, r && i && (g[i].inputs.image = `${r} [temp]`, g[i].inputs.channel = "red");
    const v = await le.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: g,
        client_id: le.clientId
      })
    });
    if (!v.ok) {
      const y = await v.json();
      throw new Error(((p = y.error) == null ? void 0 : p.message) || "Failed to queue workflow");
    }
    return await v.json();
  },
  []
) });
function Tg(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function el(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = Tg(e), l = (m) => {
    if (!m) return !1;
    const g = m.replace(/\s+/g, "").toLowerCase();
    return g === "meldimageloader" || g === "loadimage";
  }, a = n.graph._nodes.filter(
    (m) => l(m.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const m = a.find(
      (g) => String(g.id) === t
    );
    m && (o = m);
  }
  const i = o.widgets.find(
    (m) => m.name === "image"
  );
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const Lg = () => {
  const { dispatch: e } = _e();
  return { injectMaskToGraph: f.useCallback(
    (n, r) => {
      var m, g;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r), el(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = l.graph._nodes.filter(
        (v) => v.type === "LoadImageMask"
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
        (v) => v.name === "image"
      ), c = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find(
        (v) => v.name === "channel"
      );
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (g = (m = l.graph).afterChange) == null || g.call(m), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function aa(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Dg(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = no(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let m = 0; m < r * l; m++)
    d[m] = c.data[m * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function no(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], m = c * 4;
    d > 0 ? (i[m] = t[0], i[m + 1] = t[1], i[m + 2] = t[2], i[m + 3] = n) : (i[m] = 0, i[m + 1] = 0, i[m + 2] = 0, i[m + 3] = 0);
  }
  return o;
}
function Pg(e) {
  return e.data.every((t) => t === 0);
}
const wc = (e) => e === "rect" || e === "ellipse" || e === "lasso", hs = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = _e(), i = a.images.find(($) => $.id === e), { injectMaskToGraph: c } = Lg(), { executeWorkflow: d } = li();
  et({ onEscape: l });
  const m = f.useRef(null), g = f.useRef(null), v = f.useRef(null), x = f.useRef(null), [w, _] = f.useState(!1), [S, h] = f.useState(() => {
    const $ = localStorage.getItem("meld-mask-tool");
    return wc($) ? $ : "rect";
  });
  f.useEffect(() => {
    wc(S) && localStorage.setItem("meld-mask-tool", S);
  }, [S]);
  const [u, p] = f.useState({ x: 0, y: 0 }), [y, k] = f.useState({ x: 0, y: 0 }), [j, b] = f.useState([]), [C, O] = f.useState(null), [P, D] = f.useState(!1), [U, J] = f.useState(1), [N, R] = f.useState({ x: 0, y: 0 }), [z, T] = f.useState(!1), [E, L] = f.useState(!1), V = f.useRef(null), M = f.useCallback(() => {
    const $ = v.current, X = g.current;
    if (!$ || !X) return null;
    const F = X.getBoundingClientRect(), A = $.naturalWidth, I = $.naturalHeight;
    if (!A || !I) return null;
    const K = A / I, H = F.width / F.height;
    let Y, se, oe = 0, Ce = 0;
    return K > H ? (Y = F.width, se = F.width / K, Ce = (F.height - se) / 2) : (se = F.height, Y = F.height * K, oe = (F.width - Y) / 2), {
      left: oe,
      top: Ce,
      width: Y,
      height: se
    };
  }, []), Q = f.useCallback(
    ($, X, F, A) => {
      if (!$) return X;
      const I = $.getBoundingClientRect(), K = I.width / 2, H = I.height / 2, Y = {
        x: (K - X.x) / F,
        y: (H - X.y) / F
      };
      return { x: K - Y.x * A, y: H - Y.y * A };
    },
    []
  ), de = f.useCallback(() => {
    J(($) => {
      const X = Math.min($ * 1.2, 20);
      return R(
        (F) => Q(g.current, F, $, X)
      ), X;
    });
  }, [Q]), B = f.useCallback(() => {
    J(($) => {
      const X = Math.max(0.1, $ / 1.2);
      return R(
        (F) => Q(g.current, F, $, X)
      ), X;
    });
  }, [Q]), ae = f.useCallback(() => {
    const $ = m.current;
    if (!$) return;
    const X = $.getContext("2d");
    if (!X) return;
    X.clearRect(0, 0, $.width, $.height);
    const F = getComputedStyle(document.documentElement), A = F.getPropertyValue("--comfy-input-bg-active") || F.getPropertyValue("--comfy-input-bg") || F.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", I = M();
    if (x.current && I && (X.save(), X.globalAlpha = 0.5, X.drawImage(
      x.current,
      I.left,
      I.top,
      I.width,
      I.height
    ), X.restore()), w) {
      const K = Math.min(u.x, y.x), H = Math.min(u.y, y.y), Y = Math.abs(u.x - y.x), se = Math.abs(u.y - y.y);
      if (X.save(), X.globalAlpha = 0.3, X.fillStyle = A, X.strokeStyle = "white", X.lineWidth = 2, X.setLineDash([5, 5]), X.beginPath(), S === "rect")
        X.rect(K, H, Y, se);
      else if (S === "ellipse") {
        const oe = K + Y / 2, Ce = H + se / 2;
        X.ellipse(oe, Ce, Y / 2, se / 2, 0, 0, 2 * Math.PI);
      } else if (S === "lasso" && j.length > 1) {
        X.moveTo(j[0].x, j[0].y);
        for (let oe = 1; oe < j.length; oe++)
          X.lineTo(j[oe].x, j[oe].y);
        X.closePath();
      }
      X.fill(), X.globalAlpha = 1, X.stroke(), X.restore();
    }
  }, [
    w,
    u,
    y,
    S,
    j,
    M
  ]), [q, me] = f.useState([]), Me = f.useMemo(() => q.length > 0 ? q[q.length - 1] : v.current ? aa(
    v.current.naturalWidth,
    v.current.naturalHeight
  ) : null, [q]);
  f.useEffect(() => {
    var $;
    ($ = v.current) != null && $.naturalWidth && q.length === 0 && me([
      aa(
        v.current.naturalWidth,
        v.current.naturalHeight
      )
    ]);
  }, [q.length]);
  const re = f.useRef(!1), ee = f.useRef(0), tt = ($) => {
    $.target === $.currentTarget && (re.current = !0);
  }, Pe = ($) => {
    $.target === $.currentTarget && re.current && !w && l(), re.current = !1;
  };
  f.useEffect(() => {
    if (!Me) return;
    x.current || (x.current = document.createElement("canvas"));
    const $ = x.current;
    $.width = Me.width, $.height = Me.height;
    const X = $.getContext("2d");
    if (!X) return;
    const F = no(Me, [255, 255, 255], 255);
    X.putImageData(F, 0, 0), ae();
  }, [Me, ae]), f.useEffect(() => {
    const $ = g.current;
    if (!$) return;
    const X = (F) => {
      F.preventDefault();
      const A = F.deltaY > 0 ? 1 / 1.1 : 1.1;
      J((I) => {
        const K = Math.min(Math.max(0.1, I * A), 20);
        return R((H) => {
          const Y = $.getBoundingClientRect(), se = F.clientX - Y.left, oe = F.clientY - Y.top, Ce = {
            x: (se - H.x) / I,
            y: (oe - H.y) / I
          };
          return {
            x: se - Ce.x * K,
            y: oe - Ce.y * K
          };
        }), K;
      });
    };
    return $.addEventListener("wheel", X, { passive: !1 }), () => $.removeEventListener("wheel", X);
  }, []), f.useEffect(() => {
    if (!E) return;
    const $ = (F) => {
      if (V.current) {
        const A = F.clientX - V.current.clientX, I = F.clientY - V.current.clientY;
        R({
          x: V.current.panX + A,
          y: V.current.panY + I
        });
      }
    }, X = () => {
      L(!1), V.current = null;
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", X), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", X);
    };
  }, [E]), f.useEffect(() => {
    const $ = () => {
      g.current && m.current && (m.current.width = g.current.clientWidth, m.current.height = g.current.clientHeight, ae());
    }, X = new ResizeObserver($);
    return g.current && X.observe(g.current), $(), () => X.disconnect();
  }, [ae]);
  const it = ($) => {
    var oe;
    const X = $.button === 2, F = $.button === 1, A = z && $.button === 0;
    if (X || F || A) {
      $.preventDefault(), $.stopPropagation(), V.current = {
        panX: N.x,
        panY: N.y,
        clientX: $.clientX,
        clientY: $.clientY
      }, L(!0);
      return;
    }
    if ($.button !== 0 || w || P || Date.now() - ee.current < 100)
      return;
    $.preventDefault();
    const I = M(), K = (oe = g.current) == null ? void 0 : oe.getBoundingClientRect();
    if (!I || !K) return;
    _(!0);
    const H = {
      x: ($.clientX - K.left - N.x) / U,
      y: ($.clientY - K.top - N.y) / U
    }, Y = Math.max(
      I.left,
      Math.min(H.x, I.left + I.width)
    ), se = Math.max(
      I.top,
      Math.min(H.y, I.top + I.height)
    );
    p({ x: Y, y: se }), k({ x: Y, y: se }), b(S === "lasso" ? [{ x: Y, y: se }] : []), O(null);
  };
  f.useEffect(() => {
    if (!w) return;
    const $ = (F) => {
      var se;
      const A = M(), I = (se = g.current) == null ? void 0 : se.getBoundingClientRect();
      if (!A || !I) return;
      const K = {
        x: (F.clientX - I.left - N.x) / U,
        y: (F.clientY - I.top - N.y) / U
      }, H = Math.max(
        A.left,
        Math.min(K.x, A.left + A.width)
      ), Y = Math.max(
        A.top,
        Math.min(K.y, A.top + A.height)
      );
      k({ x: H, y: Y }), S === "lasso" && b((oe) => [...oe, { x: H, y: Y }]);
    }, X = (F) => {
      var K;
      const A = M(), I = (K = g.current) == null ? void 0 : K.getBoundingClientRect();
      if (A && I && Me && v.current) {
        const H = {
          x: (F.clientX - I.left - N.x) / U,
          y: (F.clientY - I.top - N.y) / U
        }, Y = Math.max(
          A.left,
          Math.min(H.x, A.left + A.width)
        ), se = Math.max(
          A.top,
          Math.min(H.y, A.top + A.height)
        ), oe = Math.min(u.x, Y), Ce = Math.min(u.y, se), ke = Math.abs(u.x - Y), ve = Math.abs(u.y - se), bt = S === "lasso";
        if (ke > 5 || ve > 5 || bt && j.length > 2) {
          const Tm = v.current.naturalWidth, Lm = v.current.naturalHeight, Nn = Tm / A.width, Mn = Lm / A.height, Dm = Dg(Me, (mn) => {
            if (S === "rect") {
              const In = (oe - A.left) * Nn, Vt = (Ce - A.top) * Mn, il = ke * Nn, cl = ve * Mn;
              mn.rect(In, Vt, il, cl);
            } else if (S === "ellipse") {
              const In = (oe - A.left) * Nn, Vt = (Ce - A.top) * Mn, il = ke * Nn, cl = ve * Mn, Pm = In + il / 2, Rm = Vt + cl / 2;
              mn.ellipse(
                Pm,
                Rm,
                il / 2,
                cl / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (S === "lasso" && j.length > 2) {
              const In = j[0];
              mn.moveTo(
                (In.x - A.left) * Nn,
                (In.y - A.top) * Mn
              );
              for (let Vt = 1; Vt < j.length; Vt++)
                mn.lineTo(
                  (j[Vt].x - A.left) * Nn,
                  (j[Vt].y - A.top) * Mn
                );
              mn.closePath();
            }
          });
          me((mn) => [...mn, Dm]);
        }
      }
      ee.current = Date.now(), _(!1), b([]);
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", X), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", X);
    };
  }, [
    w,
    u.x,
    u.y,
    M,
    Me,
    S,
    j,
    N.x,
    N.y,
    U
  ]);
  const jt = f.useCallback(() => {
    q.length > 1 && me(($) => $.slice(0, -1));
  }, [q.length]);
  f.useEffect(() => {
    const $ = (A) => {
      if (!A) return !1;
      const I = A, K = I.tagName;
      return K === "INPUT" || K === "TEXTAREA" || K === "BUTTON" || K === "SELECT" || K === "A" || I.isContentEditable || I.tabIndex != null && I.tabIndex >= 0;
    }, X = (A) => {
      A.code === "Space" && !A.repeat && ($(A.target) || (A.preventDefault(), T(!0))), (A.metaKey || A.ctrlKey) && A.key.toLowerCase() === "z" && !A.shiftKey ? (A.preventDefault(), A.stopPropagation(), A.stopImmediatePropagation(), jt()) : A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), A.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, F = (A) => {
      A.code === "Space" && ($(A.target) || (A.preventDefault(), T(!1)));
    };
    return window.addEventListener("keydown", X, { capture: !0 }), window.addEventListener("keyup", F, { capture: !0 }), () => {
      window.removeEventListener("keydown", X, { capture: !0 }), window.removeEventListener("keyup", F, { capture: !0 });
    };
  }, [jt, l]);
  const cr = () => {
    if (v.current) {
      const $ = aa(
        v.current.naturalWidth,
        v.current.naturalHeight
      );
      me((X) => [...X, $]);
    }
  }, dr = async () => {
    if (!Me || !v.current) return null;
    D(!0);
    try {
      const { width: $, height: X } = Me, F = document.createElement("canvas");
      F.width = $, F.height = X;
      const A = F.getContext("2d");
      if (!A) return null;
      const I = no(Me, [255, 255, 255], 255);
      A.putImageData(I, 0, 0);
      const K = await new Promise(
        (ke) => F.toBlob(ke, "image/png")
      );
      if (!K) return null;
      const Y = `meld_mask_${Date.now()}.png`, se = new File([K], Y, { type: "image/png" }), oe = new FormData();
      oe.append("image", se), oe.append("type", "temp"), oe.append("overwrite", "true");
      const Ce = await le.fetchApi("/upload/image", {
        method: "POST",
        body: oe
      });
      return Ce.ok ? (await Ce.json()).name : null;
    } catch ($) {
      return console.error("[Meld] Error uploading mask:", $), null;
    } finally {
      D(!1);
    }
  }, ur = async () => {
    if (!i) return;
    const $ = await dr();
    $ && c(i, $) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, al = async () => {
    if (!i) return;
    const $ = await dr();
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
  }, mr = f.useMemo(
    () => Me && !Pg(Me),
    [Me]
  );
  return i ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: tt,
      onMouseUp: Pe,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: ($) => $.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(ye, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "rect" ? "active" : ""}`,
                    onClick: () => h("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Gu, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "ellipse" ? "active" : ""}`,
                    onClick: () => h("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(yh, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${S === "lasso" ? "active" : ""}`,
                    onClick: () => h("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Sh, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Lasso" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      width: 1,
                      backgroundColor: "var(--meld-border-color)",
                      margin: "0 4px"
                    }
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: B,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ s.jsx(Wh, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      J(1), R({ x: 0, y: 0 });
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
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: de,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ s.jsx(Fh, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: g,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: it,
                  onContextMenu: ($) => $.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: E ? "grabbing" : z ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${N.x}px, ${N.y}px) scale(${U})`,
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
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            ref: v,
                            src: Je(i),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: ($) => $.preventDefault()
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: m,
                            className: "meld-mask-editor-canvas",
                            onDragStart: ($) => $.preventDefault()
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-mask-editor-hint", children: "Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: ur,
                      disabled: !mr || P,
                      type: "button",
                      children: [
                        P ? /* @__PURE__ */ s.jsx(hc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Jo, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: al,
                      disabled: !mr || P,
                      type: "button",
                      children: [
                        P ? /* @__PURE__ */ s.jsx(hc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Zr, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: jt,
                      disabled: q.length <= 1 || P,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(Oh, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: cr,
                      disabled: !mr || P,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(ye, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Clear" })
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
}, Rg = () => {
  const { state: e, dispatch: t, updateSetting: n } = _e(), [r, l] = f.useState("Gallery"), [a, o] = f.useState({
    ...e.settings
  }), [i, c] = f.useState(
    {}
  ), [d, m] = f.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [g, v] = f.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [x, w] = f.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, S] = f.useState(e.settings["viewer.thumbnail_window_size"].toString()), [h, u] = f.useState(e.settings["gallery.trash_retention_days"].toString()), [p, y] = f.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [k, j] = f.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, C] = f.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [O, P] = f.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    D,
    U
  ] = f.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    J,
    N
  ] = f.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [R, z] = f.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: a,
    setLocalSettings: o,
    shortcutErrors: i,
    setShortcutErrors: c,
    handleClose: async () => {
      const B = Object.keys(a).filter(
        (ae) => a[ae] !== e.settings[ae] && !i[ae]
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
      B === "gallery.initial_load_count" ? m(ae) : B === "gallery.max_load_count" ? v(ae) : B === "gallery.lineage_max_depth" ? w(ae) : B === "viewer.thumbnail_window_size" ? S(ae) : B === "gallery.trash_retention_days" ? u(ae) : B === "gallery.auto_link_phash_threshold" ? y(ae) : B === "gallery.suggest_phash_threshold" ? j(ae) : B === "viewer.details.max_positive_prompt_lines" ? C(ae) : B === "viewer.details.max_negative_prompt_lines" ? P(ae) : B === "fullscreen.details.max_positive_prompt_lines" ? U(ae) : B === "fullscreen.details.max_negative_prompt_lines" ? N(ae) : B === "sidebar.thumbnail_size" && z(ae);
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
      B.key === "gallery.initial_load_count" ? m(
        a["gallery.initial_load_count"].toString()
      ) : B.key === "gallery.max_load_count" ? v(a["gallery.max_load_count"].toString()) : B.key === "gallery.lineage_max_depth" ? w(
        a["gallery.lineage_max_depth"].toString()
      ) : B.key === "viewer.thumbnail_window_size" ? S(
        a["viewer.thumbnail_window_size"].toString()
      ) : B.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : B.key === "gallery.auto_link_phash_threshold" ? y(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : B.key === "gallery.suggest_phash_threshold" ? j(
        a["gallery.suggest_phash_threshold"].toString()
      ) : B.key === "viewer.details.max_positive_prompt_lines" ? C(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : B.key === "viewer.details.max_negative_prompt_lines" ? P(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : B.key === "fullscreen.details.max_positive_prompt_lines" ? U(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : B.key === "fullscreen.details.max_negative_prompt_lines" ? N(
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
    validateShortcut: (B) => B.trim() ? B.trim().split(/\s+/).every((q) => !!(q === "next" || q === "prev" || q === "delete" || q.startsWith("tag:") && q.length > 4 || q.startsWith("-tag:") && q.length > 5 || q.startsWith("tag-toggle:") && q.length > 11)) : !0,
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: g,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: h,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: k,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: O,
    fullscreenMaxPositivePromptLinesInput: D,
    fullscreenMaxNegativePromptLinesInput: J,
    thumbnailSizeInput: R
  };
}, Z = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Og = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.delete_mode": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ s.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ s.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.small_image_mode": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ s.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when entering fullscreen.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_filename": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ s.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Dimensions",
        description: "Display dimensions in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Created At",
        description: "Display generation date/time in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Source Info",
        description: "Display source image information in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Model",
        description: "Display model name in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Positive",
        description: "Display positive prompt in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
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
            onBlur: () => l({
              key: "fullscreen.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Negative",
        description: "Display negative prompt in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show User Notes",
        description: "Display user notes in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_user_notes"],
            onChange: (i) => t((c) => ({
              ...c,
              "fullscreen.details.show_user_notes": i.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
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
            onBlur: () => l({
              key: "fullscreen.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Tags",
        description: "Display tags in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
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
  return /* @__PURE__ */ s.jsx(
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
function nm() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M18 16.6v2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ s.jsx(
      "path",
      {
        d: "M16.6 18h2.8",
        stroke: "var(--meld-icon-halo, transparent)",
        strokeWidth: 4
      }
    ),
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function rm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function lm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function sm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function am(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(nm, {})
  ] });
}
function om(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function im(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(nm, {})
  ] });
}
function cm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function dm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function um(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function mm(e) {
  return /* @__PURE__ */ s.jsxs(Tt, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const fm = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: rm
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: om
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: im
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: sm },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: am
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: lm
  },
  { id: "edit_tags", label: "Edit Tags", icon: dm },
  { id: "edit_notes", label: "Edit Notes", icon: um },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: cm
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: mm
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: $t }
], zg = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: a,
  initialLoadCountInput: o,
  maxLoadCountInput: i
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Thumbnail Size",
        description: "Size of the image thumbnails in the sidebar (50-500px).",
        children: /* @__PURE__ */ s.jsx(
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
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ s.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources). (Note: This setting is ignored during searches)",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Source Info",
        description: "Display source image information and lineage link on image cards.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Model",
        description: "Display the model name on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Positive",
        description: "Display the positive prompt on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Negative",
        description: "Display the negative prompt on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show User Notes",
        description: "Display user notes on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "sidebar.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(Z, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "List Behavior" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ s.jsx(
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
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ s.jsx(
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
            onBlur: () => l({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((c) => /* @__PURE__ */ s.jsx(
      Z,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ s.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((m) => ({
              ...m,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: fm.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), Ag = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "ComfyUI Meld" }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Version" }),
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "0.4.0" })
    ] }) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Author & Links" }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: "Author" }),
      /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "HappyOnigiri" })
    ] }) }),
    /* @__PURE__ */ s.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "GitHub Repository"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Star the project or fork it" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "a",
      {
        href: "https://github.com/HappyOnigiri/ComfyUI-Meld/issues/new/choose",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "Bug Tracker"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Report issues or suggest features" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "a",
      {
        href: "https://x.com/H_OnigiriWorks",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "meld-settings-item meld-settings-item--link",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-settings-item__label",
              style: { color: "var(--meld-accent-color)" },
              children: "X (Twitter)"
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: "Follow for updates and news" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs(
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
] }), Fg = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: l,
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
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-help", children: [
      /* @__PURE__ */ s.jsx("p", { children: "These shortcuts are available in both View and Full Screen modes." }),
      /* @__PURE__ */ s.jsxs("p", { children: [
        "You can combine multiple commands with spaces.",
        /* @__PURE__ */ s.jsx("br", {}),
        "Example: ",
        /* @__PURE__ */ s.jsx("code", { children: "tag:favorite next" }),
        " (Add tag and move to next)"
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-help__commands", children: [
        /* @__PURE__ */ s.jsx("strong", { children: "Available commands:" }),
        /* @__PURE__ */ s.jsxs("ul", { children: [
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "tag:NAME" }),
            " - Add a tag"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "-tag:NAME" }),
            " - Remove a tag"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "tag-toggle:NAME" }),
            " - Toggle a tag"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "next" }),
            " / ",
            /* @__PURE__ */ s.jsx("code", { children: "prev" }),
            " - Navigate images"
          ] }),
          /* @__PURE__ */ s.jsxs("li", { children: [
            /* @__PURE__ */ s.jsx("code", { children: "delete" }),
            " - Delete image immediately (No confirm)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
      i.map((c, d) => /* @__PURE__ */ s.jsx(
        Z,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[c] ? "meld-text-input--error" : ""}`,
              value: e[c] || "",
              onChange: (m) => {
                t((g) => ({
                  ...g,
                  [c]: m.target.value
                }));
              },
              onBlur: () => {
                const m = l(
                  e[c] || ""
                );
                r((g) => ({
                  ...g,
                  [c]: !m
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ s.jsx(
        Z,
        {
          label: "Show Cheat Sheet",
          description: "Display shortcut key guide in View/Full Screen mode.",
          children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
            /* @__PURE__ */ s.jsx(
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
            /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ s.jsx(
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
}, Wg = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: a,
  lineageMaxDepthInput: o,
  trashRetentionDaysInput: i,
  autoLinkPhashThresholdInput: c,
  suggestPhashThresholdInput: d
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (m) => l((g) => ({
              ...g,
              "gallery.matching_strategy": m.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "phash_created", children: "pHash & Created Time" }),
              /* @__PURE__ */ s.jsx("option", { value: "filename_phash", children: "Filename -> pHash" }),
              /* @__PURE__ */ s.jsx("option", { value: "phash_only", children: "pHash Only" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Lineage" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ s.jsx(
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
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Trash Management",
        description: "View and manage items currently in the trash bin.",
        children: /* @__PURE__ */ s.jsx(
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
] }), $g = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: o,
  maxNegativePromptLinesInput: i
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in the viewer.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.loop"],
              onChange: () => n("viewer.loop", e["viewer.loop"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.small_image_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ s.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Thumbnail Window Size",
        description: "Number of thumbnails to keep in the viewer (1-10000).",
        children: /* @__PURE__ */ s.jsx(
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
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.delete_mode": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ s.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ s.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when opening the viewer.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_filename": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ s.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ s.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Dimensions",
        description: "Display dimensions in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Created At",
        description: "Display generation date/time in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Source Info",
        description: "Display source image information in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Model",
        description: "Display model name in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Positive",
        description: "Display positive prompt in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ s.jsx(
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
            onBlur: () => l({
              key: "viewer.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Negative",
        description: "Display negative prompt in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show User Notes",
        description: "Display user notes in the details panel.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_user_notes"],
            onChange: (c) => t((d) => ({
              ...d,
              "viewer.details.show_user_notes": c.target.value
            })),
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "always", children: "Always show" }),
              /* @__PURE__ */ s.jsx("option", { value: "if_present", children: "Show only when present" }),
              /* @__PURE__ */ s.jsx("option", { value: "hidden", children: "Always hide" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ s.jsx(
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
            onBlur: () => l({
              key: "viewer.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Z,
      {
        label: "Show Tags",
        description: "Display tags in the details panel.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] }), pm = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: a,
    handleClose: o,
    handleToggle: i,
    handleNumberChange: c,
    handleNumberBlur: d,
    handleResetShortcuts: m,
    handleViewTrash: g,
    validateShortcut: v,
    // Input states
    initialLoadCountInput: x,
    maxLoadCountInput: w,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: h,
    autoLinkPhashThresholdInput: u,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: y,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: b,
    thumbnailSizeInput: C
  } = Rg();
  et({ onEscape: o });
  const O = f.useRef(!1), P = (N) => {
    N.target === N.currentTarget && (O.current = !0);
  }, D = (N) => {
    N.target === N.currentTarget && O.current && o(), O.current = !1;
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
        return /* @__PURE__ */ s.jsx(
          Wg,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: g,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: h,
            autoLinkPhashThresholdInput: u,
            suggestPhashThresholdInput: p
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          zg,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: C,
            initialLoadCountInput: x,
            maxLoadCountInput: w
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          $g,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: S,
            maxPositivePromptLinesInput: y,
            maxNegativePromptLinesInput: k
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          Og,
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
        return /* @__PURE__ */ s.jsx(
          Fg,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: v,
            handleToggle: i,
            handleResetShortcuts: m
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(Ag, {});
      default:
        return null;
    }
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: P,
        onMouseUp: D,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (N) => N.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: U.map((N) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === N.id ? "active" : ""}`,
                    onClick: () => t(N.id),
                    children: N.label
                  },
                  N.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: J() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, xt = "none", hm = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = _e(), [o, i] = f.useState([]), [c, d] = f.useState(t), [m, g] = f.useState(""), [v, x] = f.useState(!0), [w, _] = f.useState(!1), S = f.useRef(null), h = e.length > 1, u = f.useRef(!1), p = (D) => {
    D.target === D.currentTarget && (u.current = !0);
  }, y = (D) => {
    D.target === D.currentTarget && u.current && n(), u.current = !1;
  }, k = f.useCallback(async () => {
    x(!0);
    try {
      const D = await ri();
      i(D);
    } catch (D) {
      console.error("Failed to fetch tags:", D);
    } finally {
      x(!1);
    }
  }, []);
  f.useEffect(() => {
    k();
  }, [k]), f.useEffect(() => {
    S.current && S.current.focus();
  }, []), et({ onEscape: n });
  const j = f.useMemo(() => o.filter(
    (D) => D.name.toLowerCase().includes(m.toLowerCase()) && !c.includes(D.name)
  ), [o, m, c]), b = (D) => {
    const U = D.trim();
    if (U.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    U && !c.includes(U) && (d([...c, U]), g(""));
  }, C = (D) => {
    d(c.filter((U) => U !== D));
  }, O = async () => {
    _(!0);
    try {
      if (h) {
        const D = c.filter((J) => !t.includes(J)), U = t.filter(
          (J) => !c.includes(J)
        );
        await eo(e, D, U);
      } else
        await Gh(e[0], c);
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (D) {
      console.error("Failed to update tags:", D), alert("Failed to update tags.");
    } finally {
      _(!1);
    }
  }, P = (D) => {
    D.key === "Enter" && m.trim() && (D.preventDefault(), D.stopPropagation(), b(m.trim()));
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: p,
        onMouseUp: y,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (D) => D.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(ir, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: h ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(ye, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            h && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: h ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((D) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                D,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => C(D),
                    children: /* @__PURE__ */ s.jsx(ye, { size: 12 })
                  }
                )
              ] }, D)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(bn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: m,
                    onChange: (D) => g(D.target.value),
                    onKeyDown: P
                  }
                ),
                m.trim() && !c.includes(m.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(m),
                    children: [
                      /* @__PURE__ */ s.jsx(Ls, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: v ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? m ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : j.map((D) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => b(D.name),
                  children: D.name
                },
                D.id
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
                onClick: O,
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
}, Ds = (e, t) => {
  const n = f.useCallback(async (x) => {
    try {
      const w = await Yh(x.id);
      return w.workflow ? (await window.app.loadGraphData(
        w.workflow
      ), te.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (w) {
      return te.error("Error restoring workflow:", w), alert("Failed to restore workflow."), !1;
    }
  }, []), r = f.useCallback(async (x) => {
    try {
      const w = await Xh(x.id), _ = w.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", S = window.app, u = window.LiteGraph.createNode(_);
      if (!u)
        return console.error(`Node type ${_} not found.`), alert(
          `Node type ${_} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const p = w.is_flux ? {
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
        for (const [b, C] of Object.entries(p)) {
          const O = w[b];
          if (O != null && O !== "") {
            const P = u.widgets.find(
              (D) => D.name === C
            );
            P && (P.value = O);
          }
        }
        const j = u.widgets.find(
          (b) => b.name === "control_after_generate"
        );
        j && (j.value = "fixed");
      }
      const y = S.canvas.ds.offset, k = S.canvas.ds.scale;
      return u.pos = [(-y[0] + 400) / k, (-y[1] + 300) / k], S.graph.add(u), S.canvas.selectNode(u), S.canvas.centerOnNode(u), !0;
    } catch (w) {
      return console.error("Error adding Unified Loader:", w), alert("Failed to load settings."), !1;
    }
  }, []), l = f.useCallback(
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
  ), a = f.useCallback(
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
  ), o = f.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), i = f.useCallback(
    (x) => {
      const w = window.app;
      if (!(w != null && w.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const _ = (u) => {
        if (!u) return !1;
        const p = u.replace(/\s+/g, "").toLowerCase();
        return p === "meldimageloader" || p === "loadimage";
      }, S = w.graph._nodes.filter(
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
              el(x, u);
            }
          }
        }), !0;
      const h = el(x);
      return h.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: h.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), c = f.useCallback(
    (x) => {
      const w = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: w }
      });
    },
    [t]
  ), d = f.useCallback(
    async (x, w = "run") => {
      var S;
      console.log("[Meld] handleRunWithMask called", x, w);
      const _ = Array.isArray(x) ? x : [x];
      if (w === "apply") {
        const h = window.app, u = ((S = h == null ? void 0 : h.graph) == null ? void 0 : S._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          u.map((k) => ({
            id: k.id,
            type: k.type
          }))
        );
        const p = u.some(
          (k) => k.type === "LoadImageMask"
        ), y = u.some(
          (k) => k.type === "MeldImageLoader" || k.type === "LoadImage" || k.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: p, hasLoaderNode: y }), !p || !y) {
          const k = [];
          y || k.push("'Meld Image Loader'"), p || k.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${k.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (_.length > 1) {
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
          payload: { type: "mask_editor", imageId: _[0].id, mode: w }
        });
        return;
      }
      try {
        if (!(await em()).some(
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
      } catch (h) {
        console.error("[Meld] Error checking workflows:", h);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: _,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), m = f.useCallback(
    async (x, w) => {
      try {
        const _ = x.id, h = (await ni([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: h }), w == null || w();
      } catch (_) {
        t({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    [t]
  ), g = f.useCallback(
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
  ), v = f.useCallback(
    async (x, w) => {
      try {
        const _ = await qh(
          x,
          w
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
    handleEditTags: l,
    handleEditSource: o,
    handleSendToWorkflow: i,
    handleRunWithWorkflow: c,
    handleRunWithMask: d,
    handleRestore: m,
    handleDelete: g,
    handleEditNotes: a,
    handleUpdateUserNotes: v
  };
}, gm = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = _e(), { handleUpdateUserNotes: a } = Ds(r, l), [o, i] = f.useState(t), [c, d] = f.useState(!1), m = f.useRef(null), g = f.useRef(!1), v = (_) => {
    _.target === _.currentTarget && (g.current = !0);
  }, x = (_) => {
    _.target === _.currentTarget && g.current && n(), g.current = !1;
  };
  f.useEffect(() => {
    m.current && m.current.focus();
  }, []);
  const w = f.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (_) {
      console.error("Failed to update notes:", _), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return f.useEffect(() => {
    const _ = (S) => {
      S.key === "Enter" && (S.ctrlKey || S.metaKey) && S.target === m.current && (S.preventDefault(), S.stopPropagation(), S.stopImmediatePropagation(), w());
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => {
      window.removeEventListener("keydown", _, {
        capture: !0
      });
    };
  }, [w]), et({ onEscape: n }), pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(Dh, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(ye, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
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
            /* @__PURE__ */ s.jsx(
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
                onClick: w,
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
}, ym = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = _e(), l = f.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  et({ onEscape: l });
  const a = f.useRef(!1), o = f.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = f.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: o,
        onMouseUp: i,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (c) => c.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Select Target Node" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: l,
                    children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      marginBottom: "15px",
                      fontSize: "14px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: [
                      "Multiple loader nodes found in the current workflow. Select which one to use for ",
                      /* @__PURE__ */ s.jsx("strong", { children: e.filename }),
                      ":"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: t.map((c) => /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-workflow-node-item",
                    onClick: () => {
                      n(c.id), l();
                    },
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: c.title || c.type }),
                        /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                          "#",
                          c.id
                        ] })
                      ] }),
                      /* @__PURE__ */ s.jsx(Zr, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: l,
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
}, vm = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var z;
  const { dispatch: l } = _e(), [a, o] = f.useState([]), [i, c] = f.useState(!0), [d, m] = f.useState(null), [g, v] = f.useState(!1), [x, w] = f.useState(null), [_, S] = f.useState({}), [h, u] = f.useState({}), [p, y] = f.useState(""), k = f.useRef(null), j = f.useMemo(() => a.map((T) => {
    let E = T.valid, L = T.reason;
    return r && T.mask_count === 0 && (E = !1, L = "No 'Load Image (as Mask)' node found."), { ...T, valid: E, reason: L };
  }).sort((T, E) => T.valid !== E.valid ? T.valid ? -1 : 1 : T.name.localeCompare(E.name)), [a, r]), b = f.useMemo(() => {
    if (!p.trim()) return j;
    const T = p.toLowerCase();
    return j.filter(
      (E) => E.name.toLowerCase().includes(T)
    );
  }, [j, p]), C = f.useCallback(async () => {
    try {
      c(!0);
      const T = await em();
      o(T), m(null);
    } catch (T) {
      m(T instanceof Error ? T.message : String(T));
    } finally {
      c(!1);
    }
  }, []);
  f.useEffect(() => {
    C();
  }, [C]), f.useEffect(() => {
    !i && k.current && k.current.focus();
  }, [i]);
  const O = f.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  et({ onEscape: O });
  const P = f.useRef(!1), D = f.useCallback((T) => {
    T.target === T.currentTarget && (P.current = !0);
  }, []), U = f.useCallback(
    (T) => {
      T.target === T.currentTarget && P.current && O(), P.current = !1;
    },
    [O]
  ), J = async (T, E) => {
    if (!g)
      try {
        v(!0);
        const L = await t(T, E);
        n == null || n(), L !== !1 && O();
      } catch (L) {
        m(L instanceof Error ? L.message : String(L)), v(!1);
      }
  }, N = async (T) => {
    if (!(_[T] || h[T]))
      try {
        u((M) => ({ ...M, [T]: !0 }));
        const E = await tm(T), L = [], V = (M) => {
          if (!M) return !1;
          const Q = M.replace(/\s+/g, "").toLowerCase();
          return r ? Q === "loadimagemask" : Q === "meldimageloader" || Q === "loadimage";
        };
        if (E.nodes && Array.isArray(E.nodes)) {
          console.log(
            "[Meld] Extracting nodes from UI format workflow",
            E.nodes.length
          );
          for (const M of E.nodes)
            V(M.type) && (console.log(
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
          for (const M in E) {
            const Q = E[M];
            Q && typeof Q == "object" && V(Q.class_type) && (console.log(
              "[Meld] Found target node (API):",
              M,
              Q.class_type
            ), L.push({
              id: M,
              type: Q.class_type || ""
            }));
          }
        }
        L.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), S((M) => ({ ...M, [T]: L }));
      } catch (E) {
        console.error("Failed to fetch workflow nodes:", E);
      } finally {
        u((E) => ({ ...E, [T]: !1 }));
      }
  }, R = (T) => {
    if (!T.valid || g) return;
    if ((r ? T.mask_count : T.loader_count + T.load_image_count) <= 1) {
      J(T.name);
      return;
    }
    x === T.name ? w(null) : (w(T.name), N(T.name));
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: D,
        onMouseUp: U,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (T) => T.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(ti, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: O,
                    children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx($u, { size: 20 }),
                /* @__PURE__ */ s.jsx("span", { children: d })
              ] }) : a.length === 0 ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  style: {
                    padding: "40px",
                    textAlign: "center",
                    color: "var(--meld-text-secondary)"
                  },
                  children: "No workflows found in ComfyUI/user/default/workflows"
                }
              ) : /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-list", children: [
                /* @__PURE__ */ s.jsxs(
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (z = e[0]) == null ? void 0 : z.filename }),
                      ". Workflows must have at least one",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Meld Image Loader" }),
                      " or",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Load Image" }),
                      " node",
                      r && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        " ",
                        "and one ",
                        /* @__PURE__ */ s.jsx("strong", { children: "Load Image (as Mask)" }),
                        " node"
                      ] }),
                      "."
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-tag-search-container",
                    style: { marginBottom: "12px" },
                    children: [
                      /* @__PURE__ */ s.jsx(bn, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          ref: k,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: p,
                          onChange: (T) => y(T.target.value)
                        }
                      ),
                      p && /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var T;
                            y(""), (T = k.current) == null || T.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ s.jsx(ye, { size: 14 })
                        }
                      )
                    ]
                  }
                ),
                b.length === 0 ? /* @__PURE__ */ s.jsx(
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
                  const E = r ? T.mask_count : T.loader_count + T.load_image_count, L = x === T.name, V = _[T.name] || [], M = h[T.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${T.valid ? "" : "meld-workflow-item--invalid"} ${L ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => R(T),
                        title: T.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: T.name }),
                            !T.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: T.reason }),
                            T.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: E > 1 ? `Multiple loaders found (${E})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${T.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          T.valid && E <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: g,
                              onClick: (Q) => {
                                Q.stopPropagation(), J(T.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(Zr, { size: 14 }),
                                g ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          T.valid && E > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: g,
                              onClick: (Q) => {
                                Q.stopPropagation(), R(T);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                L ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  ei,
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
                    L && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: M ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: V.map((Q) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: g,
                          onClick: () => J(T.name, Q.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: Q.title || Q.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                Q.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(Zr, { size: 12 })
                          ]
                        },
                        Q.id
                      )) })
                    ] }) })
                  ] }, T.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: O,
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
}, ro = async (e, t) => {
  await Hh(e, t), he.getState().removeImages(e);
}, wm = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = _e(), o = f.useRef(!0);
  f.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = f.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = f.useMemo(
    () => l.searchQuery.trim() !== "",
    [l.searchQuery]
  ), d = f.useMemo(
    () => l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
      (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
    ),
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      c,
      i
    ]
  ), m = f.useRef(l.viewerImageId);
  f.useEffect(() => {
    m.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const g = f.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  et({ onEscape: g });
  const v = f.useRef(!1), x = f.useCallback((u) => {
    u.target === u.currentTarget && (v.current = !0);
  }, []), w = f.useCallback(
    (u) => {
      u.target === u.currentTarget && v.current && g(), v.current = !1;
    },
    [g]
  ), _ = f.useCallback(
    (u) => {
      if (!o.current) return;
      const p = m.current;
      if (p === null || !u.has(p))
        return;
      const y = d.findIndex(
        (j) => j.id === p
      );
      if (y === -1) return;
      let k = !1;
      for (let j = y + 1; j < d.length; j++)
        if (!u.has(d[j].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: d[j].id, mode: l.viewerMode }
          }), k = !0;
          break;
        }
      if (!k) {
        for (let j = y - 1; j >= 0; j--)
          if (!u.has(d[j].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: d[j].id, mode: l.viewerMode }
            }), k = !0;
            break;
          }
      }
      k || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, d, a]
  ), S = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const y = new Set(e), k = d.filter(
        (j) => y.has(j.id)
      );
      if (_(y), await ro(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(k), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (y) {
      a({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, h = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const y = new Set(e);
      for (const j of e) {
        const b = await Ja(j);
        if (!o.current) return;
        for (const C of b)
          y.add(C.id);
      }
      const k = d.filter(
        (j) => y.has(j.id)
      );
      if (_(y), await ro(
        Array.from(y),
        n
      ), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(k), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(y)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (y) {
      a({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: x,
        onMouseUp: w,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx($t, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: g,
                    children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
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
                            uh,
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
                          " or derivatives. You can choose to delete just the selected items or all related items (lineage)."
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
                    onClick: g,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: S,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: h,
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
}, xm = ({ message: e }) => {
  const { dispatch: t } = _e(), n = f.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return et({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx($u, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx(
      "div",
      {
        style: { padding: "20px 0", textAlign: "center", fontSize: "14px" },
        children: e
      }
    ) }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "meld-btn meld-btn-primary",
        onClick: n,
        type: "button",
        children: "OK"
      }
    ) })
  ] }) });
}, _m = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = _e(), [l, a] = f.useState([]), [o, i] = f.useState(!0), [c, d] = f.useState(!1), m = f.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  et({ onEscape: m });
  const g = f.useRef(!1), v = (j) => {
    j.target === j.currentTarget && (g.current = !0);
  }, x = (j) => {
    j.target === j.currentTarget && g.current && m(), g.current = !1;
  }, w = t.images.find((j) => j.id === e), _ = f.useCallback(async () => {
    i(!0);
    try {
      const j = t.settings["gallery.suggest_phash_threshold"], b = await Kh(e, j);
      a(b);
    } catch (j) {
      console.error("Failed to load suggestions:", j);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  f.useEffect(() => {
    _();
  }, [_]);
  const S = async (j) => {
    if (j == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!w || j === w.parent_id) && !(w.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await gc(e, j), await qu(e), await r(), m();
      } catch (b) {
        console.error("Failed to link parent:", b);
      }
  }, h = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await gc(e, null), await r(), m();
      } catch (j) {
        console.error("Failed to remove source:", j), alert("Failed to remove source image.");
      }
  }, u = async (j) => {
    i(!0);
    try {
      const b = await jg(j), { id: C } = await Yu({
        filename: b.name,
        subfolder: b.subfolder || "",
        type: b.type || "input"
      });
      if (C === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await S(C);
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
  if (!w) return null;
  const y = l.filter((j) => j.is_source_match), k = l.filter((j) => !j.is_source_match);
  return pe.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: x,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (j) => j.stopPropagation(), children: [
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
                onClick: m,
                children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            w.parent_id && /* @__PURE__ */ s.jsxs(
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
                  /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        minWidth: 0
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(Eh, { size: 16, color: "var(--meld-accent-color)" }),
                        /* @__PURE__ */ s.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ s.jsx(
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
                              /* @__PURE__ */ s.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    minWidth: 0
                                  },
                                  children: [
                                    w.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: Je({
                                          filename: w.parent_filename,
                                          subfolder: w.parent_subfolder || "",
                                          type: w.parent_type || "output"
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
                                    /* @__PURE__ */ s.jsxs(
                                      "div",
                                      {
                                        style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          minWidth: 0
                                        },
                                        children: [
                                          /* @__PURE__ */ s.jsx(
                                            "span",
                                            {
                                              style: {
                                                fontWeight: "bold",
                                                fontSize: "0.95em",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                              },
                                              children: w.parent_filename || "Unknown Image"
                                            }
                                          ),
                                          /* @__PURE__ */ s.jsxs(
                                            "span",
                                            {
                                              style: {
                                                color: "var(--meld-text-secondary)",
                                                fontSize: "0.85em"
                                              },
                                              children: [
                                                "#",
                                                w.parent_id
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
                  /* @__PURE__ */ s.jsx(
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
                      onClick: h,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(bh, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
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
                  /* @__PURE__ */ s.jsx(zh, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              y.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: y.map((j) => {
                  const b = j.id === w.parent_id;
                  return /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx("img", { src: Je(j), alt: j.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
                          b && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                k.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: k.map((j) => {
                  const b = j.id === w.parent_id;
                  return /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx("img", { src: Je(j), alt: j.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: j.filename }),
                          /* @__PURE__ */ s.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "2px"
                              },
                              children: [
                                /* @__PURE__ */ s.jsxs("span", { className: "meld-suggestion-distance", children: [
                                  "Match:",
                                  " ",
                                  Math.round((64 - j.distance) / 64 * 100),
                                  "%"
                                ] }),
                                b && /* @__PURE__ */ s.jsx(
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
                }) }) : /* @__PURE__ */ s.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, Ug = () => {
  const { state: e, dispatch: t } = _e(), { executeWorkflow: n } = li();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      vm,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
        onExecute: async (r, l) => {
          if (e.activeModal.type === "workflow_selection") {
            if (e.activeModal.isMaskSequence)
              return t({
                type: "OPEN_MODAL",
                payload: {
                  type: "mask_sequence_step",
                  images: e.activeModal.images,
                  currentIndex: 0,
                  workflowName: r,
                  targetLoaderNodeId: l
                }
              }), !1;
            const a = e.activeModal.maskFilename, o = e.activeModal.onSuccess;
            for (const i of e.activeModal.images)
              await n(
                r,
                i,
                a,
                l
              );
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
      ym,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && el(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && pe.createPortal(
      /* @__PURE__ */ s.jsx(_m, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && pe.createPortal(/* @__PURE__ */ s.jsx(Ju, {}), document.body),
    e.activeModal.type === "settings" && pe.createPortal(/* @__PURE__ */ s.jsx(pm, {}), document.body),
    e.activeModal.type === "tag_edit" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        hm,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && pe.createPortal(
      /* @__PURE__ */ s.jsx(xm, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        wm,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent,
          onSuccess: () => {
            var r, l;
            e.activeModal.type === "delete_confirm" && ((l = (r = e.activeModal).onSuccess) == null || l.call(r));
          }
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        hs,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        hs,
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
    e.activeModal.type === "note_edit" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        gm,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && pe.createPortal(
      /* @__PURE__ */ s.jsx(
        Ig,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, Vg = () => {
  const { state: e, dispatch: t } = _e(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Mg(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (m) {
      console.error("Failed to cancel scan:", m);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
  return /* @__PURE__ */ s.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : a ? /* @__PURE__ */ s.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning..." }) }),
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
        style: { width: `${d}%` }
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
        children: /* @__PURE__ */ s.jsx(Gu, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(hh, { size: 14, className: "meld-success-icon" }),
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
}, Qg = () => {
  const { state: e } = _e(), { slots: t, addToBucket: n } = he();
  f.useEffect(() => {
    const r = (l) => {
      var i, c, d;
      if (((i = document.activeElement) == null ? void 0 : i.tagName) === "INPUT" || ((c = document.activeElement) == null ? void 0 : c.tagName) === "TEXTAREA" || (d = document.activeElement) != null && d.isContentEditable)
        return;
      const a = e.selectedIds;
      if (!a || a.size === 0) return;
      const o = t.find(
        (m) => m.shortcutKey.toLowerCase() === l.key.toLowerCase()
      );
      o && (l.preventDefault(), a.forEach((m) => {
        n(o.id, String(m));
      }), console.log(`Added ${a.size} images to slot ${o.label}`));
    };
    return window.addEventListener("keydown", r), () => {
      window.removeEventListener("keydown", r);
    };
  }, [t, n, e.selectedIds]);
}, km = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (f.useEffect(() => {
  const r = (l) => {
    l.key === "Escape" && n();
  };
  return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
}, [n]), /* @__PURE__ */ s.jsx(
  "div",
  {
    className: "meld-confirm-modal__overlay",
    onClick: n,
    onKeyDown: (r) => {
      r.key === "Enter" && n();
    },
    role: "presentation",
    children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-confirm-modal__dialog",
        onClick: (r) => r.stopPropagation(),
        onKeyDown: (r) => r.stopPropagation(),
        role: "alertdialog",
        "aria-modal": "true",
        "aria-label": e,
        children: [
          /* @__PURE__ */ s.jsx("p", { className: "meld-confirm-modal__message", children: e }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-confirm-modal__actions", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-confirm-modal__btn meld-confirm-modal__btn--cancel",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
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
)), Bg = (e, t, n, r, l) => {
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
            onSuccess: l
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
            onSuccess: l
          }
        });
        break;
      }
      case "move_folder":
        console.warn("move_folder action is not yet implemented"), l == null || l();
        break;
      case "queue_workflow":
        r({
          type: "OPEN_MODAL",
          payload: { type: "workflow_selection", images: n, onSuccess: l }
        });
        break;
      case "run_with_mask":
        t.length > 0 && r({
          type: "OPEN_MODAL",
          payload: {
            type: "workflow_selection",
            images: n.filter((a) => t.includes(a.id)),
            isMaskSequence: !0,
            onSuccess: l
          }
        });
        break;
      case "download":
        r({
          type: "OPEN_MODAL",
          payload: { type: "download_options", imageIds: t, onSuccess: l }
        });
        break;
      default:
        console.log(
          `Action ${e.type} executed on ${t.length} images`
        );
        break;
    }
}, Hg = ({ config: e }) => {
  var N;
  const { buckets: t, slots: n, images: r } = he(), l = n.length, { state: a, dispatch: o } = _e(), [i, c] = f.useState(!1), [d, m] = f.useState(!1), [g, v] = f.useState(!1), [x, w] = f.useState(e.label), [_, S] = f.useState(e.color), h = f.useRef(null), u = f.useRef(null), p = t[e.id] || [], y = p.length;
  f.useEffect(() => {
    const R = (z) => {
      u.current && !u.current.contains(z.target) && c(!1), h.current && !h.current.contains(z.target) && v(!1);
    };
    return (i || g) && document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [i, g]);
  const k = p.map((R) => {
    const z = Number(R);
    let T = a.images.find((E) => E.id === z);
    return T || (T = a.lineageImages.find((E) => E.id === z)), T || (T = r[R]), T;
  }).filter(Boolean), j = (R) => {
    R.preventDefault(), R.stopPropagation(), R.currentTarget.classList.add("drag-over");
  }, b = (R) => {
    R.currentTarget.classList.remove("drag-over");
  }, C = (R) => {
    R.preventDefault(), R.stopPropagation(), R.currentTarget.classList.remove("drag-over");
    const z = R.dataTransfer.getData("text/plain");
    z && z.split(",").forEach((E) => {
      if (E) {
        const L = E.trim(), V = Number(L);
        let M = a.images.find((Q) => Q.id === V);
        M || (M = a.lineageImages.find(
          (Q) => Q.id === V
        )), he.getState().addToBucket(e.id, L, M);
      }
    });
  }, O = (R, z) => {
    R.stopPropagation(), R.dataTransfer.setData("text/plain", String(z)), R.dataTransfer.setData("application/meld-lt-source-slot", e.id), R.dataTransfer.effectAllowed = "move";
  }, P = (R, z) => {
    R.dataTransfer.dropEffect === "none" && he.getState().removeFromBucket(e.id, String(z));
  }, D = (R) => {
    if (y === 0) return;
    const z = {
      type: R
    }, T = p.map((V) => Number(V)), E = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Bg(
      z,
      T,
      k,
      o,
      () => {
        he.getState().showToast(E[R] ?? "Done");
      }
    );
  }, U = () => {
    he.getState().clearBucket(e.id), he.getState().showToast(`Tab "${e.label}" cleared`), m(!1);
  }, J = () => {
    const R = he.getState();
    R.slots.length <= 1 || (R.removeSlot(e.id), he.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: j,
      onDragLeave: b,
      onDrop: C,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: y === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : k.map((R) => {
          const z = "type" in R ? R.type : "output", T = `/api/view?filename=${encodeURIComponent(R.filename)}&type=${z}&subfolder=${encodeURIComponent(R.subfolder || "")}`;
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-lt-slot-panel__image-wrapper",
              draggable: !0,
              onClick: () => {
                o({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: R.id,
                    mode: "lighttable",
                    slotId: e.id
                  }
                });
              },
              onDragStart: (E) => O(E, R.id),
              onDragEnd: (E) => P(E, R.id),
              children: /* @__PURE__ */ s.jsx("img", { src: T, alt: R.filename, draggable: !1 })
            },
            R.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: h, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => v(!g),
                disabled: y === 0,
                title: "Actions",
                children: [
                  "Action",
                  /* @__PURE__ */ s.jsx(gh, { size: 12 })
                ]
              }
            ),
            g && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: ir
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: ti
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: Ah
              },
              {
                type: "download",
                label: "Download",
                icon: Xr
              },
              {
                type: "delete",
                label: "Delete",
                icon: $t,
                danger: !0
              }
            ].map((R) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${R.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in R && R.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (z) => z.stopPropagation(),
                onClick: () => {
                  "disabled" in R && R.disabled || (v(!1), setTimeout(() => D(R.type), 0));
                },
                children: [
                  /* @__PURE__ */ s.jsx(R.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: R.label })
                ]
              },
              R.type
            )) })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => m(!0),
              title: "Clear Tab",
              disabled: y === 0,
              children: /* @__PURE__ */ s.jsx(wh, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: u, children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ s.jsx(Ku, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: x,
                    onChange: (R) => w(R.target.value),
                    placeholder: "e.g. Keep"
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-color-${e.id}`, children: "Tab Color:" }),
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flex: 1
                    },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          id: `slot-color-${e.id}`,
                          type: "color",
                          value: _.startsWith("var") ? ((N = _.match(
                            /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
                          )) == null ? void 0 : N[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(_) ? _ : "#9ca3af",
                          onChange: (R) => S(R.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: _,
                          onChange: (R) => S(R.target.value),
                          placeholder: "#hex or CSS var",
                          style: { flex: 1, minWidth: 0 }
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-save",
                  onClick: () => {
                    he.getState().updateSlot(e.id, {
                      label: x,
                      color: _
                    }), c(!1), he.getState().showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
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
        d && /* @__PURE__ */ s.jsx(
          km,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: U,
            onCancel: () => m(!1)
          }
        )
      ]
    }
  );
}, Kg = () => {
  const e = he((t) => t.toastMessage);
  return e ? /* @__PURE__ */ s.jsx("div", { className: "meld-toast", role: "status", "aria-live": "polite", children: e }) : null;
}, Gg = () => {
  var x;
  Qg();
  const { isOpen: e, slots: t, buckets: n, setIsOpen: r } = he(), { state: l } = _e(), [a, o] = f.useState(((x = t[0]) == null ? void 0 : x.id) || "keep"), i = f.useRef(null), [c, d] = f.useState(!1);
  if (f.useEffect(() => {
    let w = document.getElementById(
      "meld-light-table-portal"
    );
    if (!w) {
      w = document.createElement("div"), w.id = "meld-light-table-portal";
      const _ = document.querySelector(".comfyui-body-bottom");
      _ ? _.appendChild(w) : document.body.appendChild(w);
    }
    return i.current = w, () => {
    };
  }, []), !e || !i.current) return null;
  const m = () => {
    const w = `slot_${Date.now().toString(36)}`;
    he.getState().addSlot({
      id: w,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(w);
  }, g = () => {
    t.forEach((w) => {
      he.getState().clearBucket(w.id);
    }), he.getState().showToast("All tabs cleared"), d(!1);
  }, v = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((w) => {
        var _;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${a === w.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => o(w.id),
            style: { "--tab-color": w.color },
            onDragOver: (S) => {
              S.preventDefault(), o(w.id);
            },
            onDrop: (S) => {
              S.preventDefault();
              const h = S.dataTransfer.getData("text/plain");
              h && h.split(",").forEach((p) => {
                if (p) {
                  const y = p.trim(), k = l.images.find(
                    (j) => String(j.id) === y
                  );
                  he.getState().addToBucket(w.id, y, k);
                }
              });
            },
            children: [
              w.label,
              "  (",
              ((_ = n[w.id]) == null ? void 0 : _.length) || 0,
              ")"
            ]
          },
          w.id
        );
      }),
      /* @__PURE__ */ s.jsx(
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
          children: /* @__PURE__ */ s.jsx(Ls, { size: 16 })
        }
      ),
      /* @__PURE__ */ s.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => d(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ s.jsx(Ph, { size: 14 }),
            /* @__PURE__ */ s.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
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
          children: /* @__PURE__ */ s.jsx(ye, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: t.map((w) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === w.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(Hg, { config: w })
      },
      w.id
    )) }),
    c && /* @__PURE__ */ s.jsx(
      km,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: g,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(Kg, {})
  ] });
  return pe.createPortal(v, i.current);
}, Sm = () => {
  const { state: e, refreshFavorites: t } = _e(), [n, r] = f.useState(!1), [l, a] = f.useState(null), [o, i] = f.useState(null), [c, d] = f.useState(""), [m, g] = f.useState("");
  f.useEffect(() => {
    if (l) {
      const S = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(S);
    }
  }, [l]);
  const v = f.useCallback(
    async (S, h, u) => {
      S.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${u}"?`;
      if (window.confirm(p))
        try {
          await yc(h), await t();
        } catch (y) {
          te.error("Failed to delete favorite", y);
        }
    },
    [t]
  ), x = f.useCallback(
    (S, h) => {
      S.stopPropagation(), i(h), d(h.name), g(h.query);
    },
    []
  ), w = f.useCallback(async () => {
    if (!(!o || !c.trim() || !m.trim()))
      try {
        r(!0), await ag(
          o.id,
          c,
          m
        ), await t(), i(null);
      } catch (S) {
        te.error("Failed to update favorite", S), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [o, c, m, t]), _ = f.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (h) => h.query === e.searchQuery
    )) {
      const h = e.favorites.find((u) => u.query === e.searchQuery);
      if (h) {
        r(!0);
        try {
          await yc(h.id), await t();
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
      await sg(e.searchQuery, e.searchQuery), await t();
    } catch (h) {
      te.error("Failed to save favorite:", h);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: m,
    setEditFavoriteQuery: g,
    handleDeleteFavorite: v,
    handleEditFavorite: x,
    handleSaveEditFavorite: w,
    handleSaveFavorite: _,
    setToastMessage: a
  };
}, jm = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = f.useState(!1), [o, i] = f.useState(!1), [c, d] = f.useState(!1);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: l ? "var(--comfy-menu-bg, #333)" : "var(--comfy-input-bg, #2a2a2a)",
        border: "1px solid",
        borderColor: l ? "var(--meld-accent-color)" : "var(--comfy-menu-border, #333)",
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
                  children: e.name
                }
              ),
              e.name !== e.query && /* @__PURE__ */ s.jsx(
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
                  children: /* @__PURE__ */ s.jsx(Hu, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
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
                  children: /* @__PURE__ */ s.jsx($t, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, qg = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = _e(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: m,
    setEditFavoriteQuery: g,
    handleDeleteFavorite: v,
    handleEditFavorite: x,
    handleSaveEditFavorite: w
  } = Sm(), [_, S] = f.useState({ top: 0, left: 0 }), h = f.useRef(null), u = f.useRef(null);
  if (et({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), f.useEffect(() => {
    if (e) {
      let b = e.left;
      const C = e.bottom + 5;
      b + 300 > window.innerWidth - 10 && (b = window.innerWidth - 300 - 10), b < 10 && (b = 10), S({ top: C, left: b });
    }
  }, [e]), f.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), !e) return null;
  const p = (k) => {
    k.stopPropagation(), k.preventDefault();
  }, y = (k) => {
    k.stopPropagation();
  };
  return pe.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: h,
          onClick: p,
          onMouseDown: y,
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
            /* @__PURE__ */ s.jsxs(
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
                  /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(
                          lr,
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
                  /* @__PURE__ */ s.jsxs(
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
            /* @__PURE__ */ s.jsx(
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
                children: r.favorites.map((k) => /* @__PURE__ */ s.jsx(
                  jm,
                  {
                    fav: k,
                    onSelect: (j) => {
                      n(j), t();
                    },
                    onEdit: x,
                    onDelete: v
                  },
                  k.id
                ))
              }
            ),
            a && /* @__PURE__ */ s.jsx(
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
      o && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "meld-modal-overlay",
          style: { zIndex: 3e3 },
          onMouseDown: (k) => {
            k.target === k.currentTarget && i(null);
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsxs(
                    "h2",
                    {
                      style: { display: "flex", alignItems: "center", gap: "10px" },
                      children: [
                        /* @__PURE__ */ s.jsx(lr, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      padding: "8px 0"
                    },
                    children: [
                      /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px"
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(
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
                            /* @__PURE__ */ s.jsx(
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
                                  k.key === "Enter" && w(), k.key === "Escape" && i(null);
                                }
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
                            flexDirection: "column",
                            gap: "6px"
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(
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
                            /* @__PURE__ */ s.jsx(
                              "textarea",
                              {
                                id: "edit-favorite-query-ctx",
                                value: m,
                                onChange: (k) => g(k.target.value),
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
                                  k.key === "Enter" && !k.shiftKey && (k.preventDefault(), w()), k.key === "Escape" && i(null);
                                }
                              }
                            )
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
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-primary",
                      onClick: w,
                      disabled: l || !c.trim() || !m.trim(),
                      children: l ? "Saving..." : "Save Changes"
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
  for (let l = 0; l < e.length; l++) {
    const a = e[l];
    if (a === '"')
      r = !r, n += a;
    else if (a === " " && !r)
      for (t.push(n), n = ""; l + 1 < e.length && e[l + 1] === " "; )
        l++;
    else
      n += a;
  }
  return t.push(n), t;
}, Yg = () => {
  const { state: e, dispatch: t, updateSetting: n } = _e(), [r, l] = f.useState(e.searchQuery), [a, o] = f.useState([]), [i, c] = f.useState(!1), [d, m] = f.useState([]), [g, v] = f.useState([]), x = e.settings["search.show_all_keywords"], [w, _] = f.useState(-1), [S, h] = f.useState(null), u = f.useRef(null), p = f.useRef(e.searchQuery), y = f.useCallback(async () => {
    if (g.length > 0) return;
    const z = await ng();
    v(z);
  }, [g.length]);
  f.useEffect(() => {
    rg().then((z) => {
      h(z);
    }), x && y();
  }, [y, x]);
  const k = f.useMemo(() => {
    if (!S) return null;
    const z = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${z}):(.*)$`, "i");
  }, [S]), j = f.useCallback(() => {
    const z = !x;
    z && y(), n("search.show_all_keywords", z);
  }, [x, y, n]), b = r !== p.current;
  f.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      m([]);
      return;
    }
    tg().then((z) => {
      m(z);
    });
  }, [e.settings["search.quick_suggestions"]]), f.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), f.useEffect(() => {
    var z;
    (z = u.current) == null || z.focus();
  }, []);
  const C = f.useCallback(
    (z, T = !0) => {
      p.current !== z && (te.log("SearchBar: triggering search", { query: z }), t({ type: "SET_SEARCH_QUERY", payload: z }), T && c(!1), p.current = z);
    },
    [t]
  );
  f.useEffect(() => {
    const z = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !k) {
        o([]), c(!1);
        return;
      }
      const T = Nl(r), E = T[T.length - 1];
      if (E) {
        const L = E.match(k);
        if (L) {
          const V = L[1].toLowerCase();
          let M = L[2];
          M.startsWith('"') && (M = M.substring(1)), M.endsWith('"') && (M = M.substring(0, M.length - 1));
          const Q = await eg(M, V);
          o(Q), c(Q.length > 0), _(-1);
        } else {
          const V = E.replace(/^([-!])/, "").toLowerCase();
          if (V && S) {
            const M = S.all_prefixes.filter((Q) => Q.startsWith(V)).map((Q) => ({
              type: Q,
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
    return () => clearTimeout(z);
  }, [
    r,
    e.settings["search.input_suggest"],
    k,
    S
  ]);
  const O = f.useCallback(
    (z) => {
      var de;
      const T = Nl(r), L = (T.pop() || "").match(/^([-!])/), V = L ? L[1] : "", Q = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(z.type);
      if (z.value === "") {
        const B = `${[...T, `${V}${z.type}:`].join(" ").trim()}`;
        l(B);
      } else {
        const B = Q ? z.value : `"${z.value}"`, ae = `${[
          ...T,
          `${V}${z.type}:${B}`
        ].join(" ").trim()} `;
        l(ae), o([]), c(!1);
      }
      (de = u.current) == null || de.focus();
    },
    [r, S]
  ), P = (z) => {
    z.key === "Enter" ? C(r) : z.key === "Tab" ? i && w >= 0 && (O(a[w]), z.preventDefault()) : z.key === "ArrowDown" ? i && (_((T) => Math.min(T + 1, a.length - 1)), z.preventDefault()) : z.key === "ArrowUp" ? i && (_((T) => Math.max(T - 1, -1)), z.preventDefault()) : z.key === "Escape" && c(!1);
  }, D = f.useCallback(() => {
    l(""), C("");
  }, [C]), U = f.useCallback(
    (z, T, E = !1) => {
      var ee;
      const L = Nl(r), V = L[L.length - 1] || "";
      let M = !1;
      const Q = V.replace(/^([-!])/, "").toLowerCase();
      Q && z.toLowerCase().startsWith(Q) && (M = !0);
      const de = V.match(/^([-!])/), B = M && de ? de[1] : "";
      if (M && L.pop(), E) {
        const tt = [...L, `${B}${z}:`].filter(Boolean).join(" ");
        l(tt), (ee = u.current) == null || ee.focus();
        return;
      }
      const me = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(z) ? T : `"${T}"`, Me = `${B}${z}:${me}`, re = [...L, Me].filter(Boolean).join(" ");
      l(re), C(re);
    },
    [r, C, S]
  ), J = f.useCallback(
    (z) => {
      l(z), z || C("");
    },
    [C]
  ), N = f.useCallback(() => {
    if (r === p.current || !k)
      return;
    const z = Nl(r), T = z[z.length - 1];
    if (!T) return;
    const E = !!T.match(k), L = T.replace(/^([-!])/, "").toLowerCase(), V = L && (S == null ? void 0 : S.all_prefixes.some((M) => M.startsWith(L)));
    (E || V) && c(!0);
  }, [r, k, S]), R = f.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: g,
    showAllKeywords: x,
    toggleShowAllKeywords: j,
    selectedIndex: w,
    setSelectedIndex: _,
    inputRef: u,
    isQueryChanged: b,
    handleSearch: C,
    handleKeyDown: P,
    applySuggestion: O,
    clearSearch: D,
    applySearchSuggestion: U,
    handleInputChange: J,
    handleInputFocus: N,
    handleInputBlur: R
  };
}, xc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(ir, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(fh, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Rh, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(ph, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(Vu, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(Uu, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(xh, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(mh, { size: 12 });
    default:
      return null;
  }
}, Xg = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: a,
  searchQuery: o,
  searchSuggestions: i,
  allKeywords: c,
  showAllKeywords: d,
  toggleShowAllKeywords: m,
  applySearchSuggestion: g,
  favorites: v,
  onSelectFavorite: x,
  onEditFavorite: w,
  onDeleteFavorite: _
}) => {
  const S = (y, k, j) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => g(y.type, y.value, j === "all"),
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
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: xc(y.type)
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
            children: y.type
          }
        ),
        j !== "all" && /* @__PURE__ */ s.jsx(
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
    `${j}-${y.type}:${y.value}:${k}`
  ), h = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
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
      children: t.map((y, k) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (j) => {
            j.preventDefault(), l(y);
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
          children: /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: xc(y.type)
              }
            ),
            /* @__PURE__ */ s.jsxs(
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
            /* @__PURE__ */ s.jsx(
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
  ), u = () => i.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
        /* @__PURE__ */ s.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: i.map(
              (y, k) => S(y, k, "quick")
            )
          }
        ),
        /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 4px"
                  },
                  children: [
                    /* @__PURE__ */ s.jsx(
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
                    /* @__PURE__ */ s.jsx(
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
              d && /* @__PURE__ */ s.jsx(
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
                    (y, k) => S({ type: y, value: "" }, k, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), p = () => v.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(lr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: v.map((y) => /* @__PURE__ */ s.jsx(
              jm,
              {
                fav: y,
                onSelect: x,
                onEdit: w,
                onDelete: _
              },
              y.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      style: { position: "relative" },
      onMouseDown: (y) => {
        y.preventDefault();
      },
      children: [
        h(),
        u(),
        p()
      ]
    }
  );
}, Zg = () => {
  const { state: e } = _e(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: m,
    inputRef: g,
    isQueryChanged: v,
    handleSearch: x,
    handleKeyDown: w,
    applySuggestion: _,
    clearSearch: S,
    applySearchSuggestion: h,
    handleInputChange: u,
    handleInputFocus: p,
    handleInputBlur: y
  } = Yg(), {
    isSaving: k,
    toastMessage: j,
    editingFavorite: b,
    setEditingFavorite: C,
    editFavoriteName: O,
    setEditFavoriteName: P,
    editFavoriteQuery: D,
    setEditFavoriteQuery: U,
    handleDeleteFavorite: J,
    handleEditFavorite: N,
    handleSaveEditFavorite: R,
    handleSaveFavorite: z
  } = Sm();
  et({
    onEscape: () => C(null),
    enabled: !!b
  });
  const T = f.useRef(null), E = f.useRef(!1);
  f.useEffect(() => {
    b && T.current && T.current.focus();
  }, [b]);
  const L = (M) => {
    M.target === M.currentTarget && (E.current = !0);
  }, V = (M) => {
    M.target === M.currentTarget && E.current && C(null), E.current = !1;
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
              j && /* @__PURE__ */ s.jsx(
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
                        onClick: () => x(t),
                        style: {
                          background: v ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: v ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: v ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (M) => {
                          M.currentTarget.style.transform = "translateY(-1px)", v ? (M.currentTarget.style.filter = "brightness(1.15)", M.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : M.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (M) => {
                          M.currentTarget.style.transform = "none", v ? (M.currentTarget.style.filter = "none", M.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : M.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (M) => {
                          M.currentTarget.style.transform = "translateY(1px)", M.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (M) => {
                          M.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            bn,
                            {
                              size: 16,
                              color: v ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: v ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          v && /* @__PURE__ */ s.jsx(
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
                        ref: g,
                        type: "text",
                        value: t,
                        onChange: (M) => u(M.target.value),
                        onKeyDown: w,
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
                    e.searchQuery && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: z,
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
                        children: /* @__PURE__ */ s.jsx(
                          lr,
                          {
                            size: 16,
                            color: e.favorites.some((M) => M.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((M) => M.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ s.jsx(
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
                        children: /* @__PURE__ */ s.jsx(ye, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                Xg,
                {
                  showSuggestions: l,
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
                  applySearchSuggestion: h,
                  favorites: e.favorites,
                  onSelectFavorite: (M) => {
                    n(M), x(M);
                  },
                  onEditFavorite: N,
                  onDeleteFavorite: J
                }
              )
            ]
          }
        ),
        b && pe.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: L,
              onMouseUp: V,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (M) => M.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(lr, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => C(null),
                          children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                          padding: "8px 0"
                        },
                        children: [
                          /* @__PURE__ */ s.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(
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
                                /* @__PURE__ */ s.jsx(
                                  "input",
                                  {
                                    id: "edit-favorite-name",
                                    ref: T,
                                    type: "text",
                                    value: O,
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
                                      M.key === "Enter" && R(), M.key === "Escape" && C(null);
                                    }
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
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(
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
                                /* @__PURE__ */ s.jsx(
                                  "textarea",
                                  {
                                    id: "edit-favorite-query",
                                    value: D,
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
                                      M.key === "Enter" && !M.shiftKey && (M.preventDefault(), R()), M.key === "Escape" && C(null);
                                    }
                                  }
                                )
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
                          onClick: () => C(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: R,
                          disabled: k || !O.trim() || !D.trim(),
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
}, Jg = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = f.useState([]), [l, a] = f.useState(!0), [o, i] = f.useState(""), [c, d] = f.useState(""), [m, g] = f.useState(!1), [v, x] = f.useState(null), [w, _] = f.useState(""), [S, h] = f.useState(!1), u = f.useRef(null), p = f.useCallback(async () => {
    a(!0);
    try {
      const D = await ri();
      r(D);
    } catch (D) {
      console.error("Failed to fetch tags:", D);
    } finally {
      a(!1);
    }
  }, []);
  f.useEffect(() => {
    p();
  }, [p]), f.useEffect(() => {
    v !== null && u.current && (u.current.focus(), u.current.select());
  }, [v]);
  const y = async (D) => {
    D.preventDefault();
    const U = c.trim();
    if (!(!U || m)) {
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
        await _g(U), d(""), await p();
      } catch (J) {
        console.error("Failed to add tag:", J);
      } finally {
        g(!1);
      }
    }
  }, k = async (D, U) => {
    if (confirm(`Are you sure you want to delete tag "${U}"?`))
      try {
        await kg(D), await p();
      } catch (J) {
        console.error("Failed to delete tag:", J);
      }
  }, j = (D) => {
    x(D.id), _(D.name);
  }, b = () => {
    x(null), _("");
  }, C = async (D) => {
    D.preventDefault();
    const U = w.trim();
    if (!U || v === null || S) return;
    if (U.toLowerCase() === xt) {
      alert(
        `Tag name '${xt}' is reserved for search and cannot be used.`
      );
      return;
    }
    const J = n.find((N) => N.id === v);
    if (J && J.name === U) {
      b();
      return;
    }
    if (n.some(
      (N) => N.id !== v && N.name.toLowerCase() === U.toLowerCase()
    )) {
      alert(`Tag "${U}" already exists.`);
      return;
    }
    h(!0);
    try {
      await Sg(v, U), b(), await p();
    } catch (N) {
      console.error("Failed to rename tag:", N), alert(N instanceof Error ? N.message : "Failed to rename tag");
    } finally {
      h(!1);
    }
  }, O = (D) => {
    t(`tag:${D}`);
  }, P = f.useMemo(() => n.filter(
    (D) => D.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(ir, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(ye, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: y, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: c,
            onChange: (D) => d(D.target.value),
            disabled: m
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || m,
            children: [
              /* @__PURE__ */ s.jsx(Ls, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(bn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (D) => i(D.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: P.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : P.map((D) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: v === D.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: C,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: u,
                className: "meld-tag-rename-input",
                value: w,
                onChange: (U) => _(U.target.value),
                onKeyDown: (U) => U.key === "Escape" && b()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: S || !w.trim(),
                children: /* @__PURE__ */ s.jsx(Jo, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: b,
                disabled: S,
                children: /* @__PURE__ */ s.jsx(ye, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: D.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => O(D.name),
              children: /* @__PURE__ */ s.jsx(bn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => j(D),
              children: /* @__PURE__ */ s.jsx(Hu, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(D.id, D.name),
              children: /* @__PURE__ */ s.jsx($t, { size: 14 })
            }
          )
        ] })
      ] }) }, D.id)) })
    ] })
  ] });
}, bm = (e, t) => {
  const n = f.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((d) => ({
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
      if (o && l > 1) {
        const d = n(o);
        return [c, ...d].slice(0, l);
      }
      return [c];
    },
    [t, e]
  );
  return { getParentChain: n };
};
function ey(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? l || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const ty = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var X;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    handleEditTags: d,
    handleEditNotes: m,
    handleRestore: g,
    handleUpdateUserNotes: v,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: w,
    handleSendToWorkflow: _,
    handleRunWithWorkflow: S,
    handleRunWithMask: h,
    handleEditSource: u
  } = Ds(e, t), { getParentChain: p } = bm(a, c), [y, k] = f.useState(!1), [j, b] = f.useState(!1), [C, O] = f.useState(
    c["viewer.show_details_by_default"]
  ), [P, D] = f.useState(null), U = P ?? c["viewer.show_thumbnails"], [J, N] = f.useState(!1), [R, z] = f.useState(!1), [T, E] = f.useState(null), [L, V] = f.useState(null), [M, Q] = f.useState(
    null
  ), de = f.useRef(null), B = f.useRef(!0);
  f.useEffect(() => (B.current = !0, () => {
    B.current = !1;
  }), []);
  const ae = f.useRef(l);
  f.useEffect(() => {
    ae.current = l;
  }, [l]);
  const q = f.useMemo(() => {
    const F = e.searchQuery.trim() !== "";
    return o === "lighttable" && e.viewerLightTableSlotId ? (he.getState().buckets[e.viewerLightTableSlotId] || []).map((H) => {
      const Y = Number.parseInt(H, 10);
      return a.find((se) => se.id === Y) || i.find((se) => se.id === Y) || null;
    }).filter((H) => H !== null) : o === "lineage" ? i : a.filter(
      (A) => A.exists !== !1 && (c["gallery.show_parent_images"] || F || !A.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), me = l === null ? -1 : q.findIndex((F) => F.id === l), re = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? q : a).find((F) => F.id === l) || (l === ((X = e.viewerFallbackImage) == null ? void 0 : X.id) ? e.viewerFallbackImage : void 0), ee = f.useCallback(
    async (F = !1) => {
      if (!re) return;
      const A = y ? c["fullscreen.delete_mode"] : c["viewer.delete_mode"];
      if (!F && A === "confirm") {
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
        if (A === "lineage") {
          const H = await Ja(re.id);
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
        if (await ro(
          Array.from(K),
          I
        ), !I) {
          const H = q.filter(
            (Y) => K.has(Y.id)
          );
          E(H), V(null);
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
      y,
      c,
      e.viewScope,
      q,
      me,
      o,
      t
    ]
  ), tt = f.useCallback(() => {
    re && d(re);
  }, [re, d]), Pe = f.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: y } });
  }, [t, y]), it = f.useCallback(async () => {
    const F = y ? c["fullscreen.loop"] : c["viewer.loop"];
    if (me === 0 && o === "gallery" && e.pagination.hasMore && !R && F) {
      z(!0);
      try {
        const A = e.pagination.limit, I = e.pagination.total, K = Math.max(0, I - A), H = await Vl(
          K,
          A,
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
      } catch (A) {
        console.error("Failed to jump to end:", A);
      } finally {
        z(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: y } });
  }, [
    me,
    o,
    e.pagination,
    e.searchQuery,
    c,
    t,
    R,
    y
  ]), jt = f.useCallback(
    (F) => {
      F && "stopPropagation" in F && F.stopPropagation();
      const A = de.current;
      A && (document.fullscreenElement ? document.exitFullscreen() : A.requestFullscreen().catch((I) => {
        console.error(
          `Error attempting to enable full-screen mode: ${I.message}`
        );
      }));
    },
    []
  ), cr = f.useCallback(async () => {
    re && (q.length > 1 ? Pe() : t({ type: "CLOSE_VIEWER" }), await g(re));
  }, [re, q.length, Pe, g, t]), dr = f.useCallback(async () => {
    if (!T || T.length === 0) return;
    const F = T.map((I) => I.id), A = F[0];
    try {
      const I = await ni(F);
      if (!B.current) return;
      if (t({ type: "ADD_IMAGES", payload: T }), e.viewScope === "trash") {
        const K = I.restored_ids || F;
        t({ type: "REMOVE_IMAGES", payload: K });
      }
      if (E(null), !B.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: A, mode: o }
      });
    } catch (I) {
      t({
        type: "SET_ERROR",
        payload: I instanceof Error ? I.message : String(I)
      });
    }
  }, [T, t, o, e.viewScope]), ur = f.useCallback(async () => {
    if (T && T.length > 0)
      await dr();
    else if (L && L.type === "tags") {
      const { imageId: F, addTags: A, removeTags: I } = L;
      try {
        await eo([F], A, I);
        const K = (o === "lineage" ? i : a).find((H) => H.id === F);
        if (K) {
          const H = [...K.tags];
          for (const se of A)
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
        V(null);
      } catch (K) {
        t({
          type: "SET_ERROR",
          payload: K instanceof Error ? K.message : String(K)
        });
      }
    }
  }, [
    T,
    L,
    dr,
    a,
    i,
    o,
    t
  ]), al = f.useCallback(
    async (F) => {
      if (!F || !re) return;
      const A = re.id, I = [...re.tags], K = F.split(/\s+/), H = [], Y = [];
      let se = !1, oe = !1, Ce = !1;
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
        } else ke === "next" ? se = !0 : ke === "prev" ? oe = !0 : ke === "delete" && (Ce = !0);
      if (H.length > 0 || Y.length > 0)
        try {
          await eo(
            [A],
            H,
            Y
          );
          const ke = [...I];
          for (const bt of H)
            ke.includes(bt) || ke.push(bt);
          const ve = ke.filter((bt) => !Y.includes(bt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...re, id: A, tags: ve }
          }), V({
            type: "tags",
            imageId: A,
            addTags: [...Y],
            removeTags: [...H]
          }), E(null);
        } catch (ke) {
          console.error("Failed to update tags via shortcut:", ke);
        }
      Ce ? ee(!0) : se ? Pe() : oe && it();
    },
    [re, t, Pe, it, ee]
  );
  f.useEffect(() => {
    const F = (I) => {
      const K = I.target, H = K.tagName === "INPUT" || K.tagName === "TEXTAREA" || K.isContentEditable;
      if (H && I.key !== "Escape") {
        I.key === "Enter" && (I.ctrlKey || I.metaKey) && I.preventDefault();
        return;
      }
      if (l === null || e.activeModal.type !== "none")
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
      ].includes(I.key), Ce = I.key === "Escape", ke = (I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z" || I.code === "KeyZ"), ve = /^[0-9]$/.test(I.key) && !I.ctrlKey && !I.metaKey && !I.altKey && I.code !== "KeyZ";
      if (Y || se || oe || Ce || ke || ve)
        if (!H)
          I.preventDefault(), I.stopPropagation(), I.stopImmediatePropagation();
        else if (Ce)
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
        O((bt) => !bt);
      else if (I.key === "t" || I.key === "T")
        tt();
      else if ((I.key === "r" || I.key === "R") && e.viewScope === "trash")
        cr();
      else if (I.key === "Delete")
        ee();
      else if ((I.ctrlKey || I.metaKey) && (I.key === "z" || I.key === "Z"))
        ur();
      else if (ve && !H) {
        const bt = `viewer.shortcut.${I.key}`, ol = c[bt];
        typeof ol == "string" && ol && (Q(I.key), setTimeout(() => {
          B.current && Q(null);
        }, 500), al(ol));
      }
    };
    window.addEventListener("keydown", F, { capture: !0 });
    const A = () => {
      const I = !!document.fullscreenElement;
      k(I), O(I ? c["fullscreen.show_details_by_default"] : c["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", A), () => {
      window.removeEventListener("keydown", F, { capture: !0 }), document.removeEventListener("fullscreenchange", A);
    };
  }, [
    l,
    t,
    jt,
    Pe,
    it,
    c,
    ee,
    e.activeModal.type,
    ur,
    tt,
    cr,
    e.viewScope,
    al
  ]), f.useEffect(() => {
    l !== null && r(l).catch((F) => {
      console.error("Failed to fetch full image details for viewer:", F);
    });
  }, [l, r]), f.useEffect(() => {
    o === "lineage" && l !== null && i.length === 0 && (N(!0), Ja(l).then((F) => {
      B.current && t({ type: "SET_LINEAGE", payload: F });
    }).catch((F) => {
      console.error("Failed to fetch lineage:", F);
    }).finally(() => {
      B.current && N(!1);
    }));
  }, [o, l, i.length, t]), f.useEffect(() => {
    o !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || me !== -1 && me >= q.length - 15 && n();
  }, [
    l,
    q.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    me
  ]);
  const mr = f.useMemo(() => {
    if (!U || me === -1) return [];
    const F = c["viewer.thumbnail_window_size"], A = Math.floor(F / 2);
    let I = Math.max(0, me - A);
    const K = Math.min(q.length, I + F);
    return K === q.length && (I = Math.max(0, K - F)), q.slice(I, K).map((H, Y) => ({
      img: H,
      absIndex: I + Y
    }));
  }, [q, me, c, U]), $ = f.useMemo(() => re ? p(re) : [], [re, p]);
  return f.useEffect(() => {
    var F, A;
    if (l !== null) {
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
      ((F = document.activeElement) == null ? void 0 : F.tagName) === "CANVAS" && document.activeElement.blur(), (A = de.current) == null || A.focus();
    }
  }, [l, U]), f.useEffect(() => {
    if (l === null || q.length === 0) return;
    const F = q.map((se) => se.id), A = F.indexOf(l);
    if (A === -1) return;
    const I = y ? c["fullscreen.loop"] : c["viewer.loop"], { prevId: K, nextId: H } = ey({
      ids: F,
      index: A,
      loopEnabled: I,
      hasMore: e.pagination.hasMore && o === "gallery"
    }), Y = setTimeout(() => {
      const se = [K, H].filter(
        (oe) => oe !== null && oe !== l
      );
      se.length !== 0 && Promise.allSettled(se.map((oe) => r(oe))).then(
        (oe) => {
          for (const Ce of oe)
            Ce.status === "rejected" && te.warn(
              "Prefetching adjacent image details failed",
              Ce.reason
            );
        }
      );
    }, 50);
    return () => clearTimeout(Y);
  }, [
    l,
    q,
    y,
    c,
    e.pagination.hasMore,
    o,
    r
  ]), f.useEffect(() => {
    if (l === null || q.length === 0) return;
    const F = q.findIndex(
      (H) => H.id === l
    );
    if (F === -1) return;
    const A = (H) => Je(H), I = [
      F + 1,
      F + 2,
      F - 1
    ], K = setTimeout(() => {
      for (const H of I)
        if (H >= 0 && H < q.length) {
          const Y = q[H], se = new Image();
          se.src = A(Y);
        }
    }, 150);
    return () => clearTimeout(K);
  }, [l, q]), {
    isFullscreen: y,
    showDetails: C,
    setShowDetails: O,
    showThumbnails: U,
    setShowThumbnailsOverride: D,
    isLoadingLineage: J,
    isJumping: R,
    isMenuOpen: j,
    setIsMenuOpen: b,
    activeShortcutKey: M,
    lastDeletedImages: T,
    setLastDeletedImages: E,
    overlayRef: de,
    handleNext: Pe,
    handlePrevious: it,
    handleDelete: ee,
    handleUpdateUserNotes: v,
    handleEditNotes: () => re && m(re),
    handleTagEdit: tt,
    handleRestore: cr,
    handleUndo: ur,
    handleRestoreWorkflow: async () => {
      if (!re) return;
      await x(re) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!re) return;
      await w(re) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!re) return;
      _(re) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => re && S(re),
    handleRunWithMask: (F) => re && h(re, F),
    handleEditSource: () => re && u(re),
    toggleFullscreen: jt,
    currentIndex: me,
    currentThumbnails: q,
    image: re,
    windowedThumbnails: mr,
    parentChain: $
  };
}, si = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  settings: r,
  onAddUnifiedLoader: l,
  onRestoreWorkflow: a,
  onSendToWorkflow: o,
  onRunWithWorkflow: i,
  onRunWithMask: c,
  onEditSource: d,
  onEditTags: m,
  onEditNotes: g,
  onDelete: v,
  onRestore: x,
  showRestore: w,
  deleteLabel: _,
  showQuickShortcuts: S = !0,
  variant: h = "default",
  iconSize: u = 16,
  buttonClassName: p = ""
}) => {
  const [y, k] = f.useState("left");
  f.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? k("right") : k("left"));
  }, [e, n]);
  const j = (O) => {
    switch (O) {
      case "add_unified_loader":
        return l;
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
        return g;
      case "restore_image":
        return x;
      case "delete_or_trash":
        return v;
      default:
        return null;
    }
  }, b = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((O) => O && O !== ""), C = [
    "meld-image-card__menu-container",
    h === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: C, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${p}`,
        onClick: (O) => {
          O.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(Ih, { size: u })
      }
    ),
    S && b.map((O, P) => {
      const D = fm.find((N) => N.id === O);
      if (!D || !D.icon) return null;
      const U = D.icon, J = j(O);
      return !J || O === "restore_image" && !w ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${p}`,
          onClick: (N) => {
            N.stopPropagation(), J();
          },
          title: D.label,
          children: /* @__PURE__ */ s.jsx(U, { size: u })
        },
        `${O}-${P}`
      );
    }),
    e && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card__menu ${y === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: rm,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: om,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: im,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: sm,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: am,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: lm,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: dm,
            handler: m
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: um,
            handler: g
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: cm,
            handler: d
          },
          ...w ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: mm,
              handler: x,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: _,
            icon: $t,
            handler: v,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((O) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${O.className || ""}`,
            onMouseDown: (P) => P.stopPropagation(),
            onClick: (P) => {
              P.preventDefault(), P.stopPropagation(), t(!1), setTimeout(() => O.handler(), 0);
            },
            children: [
              /* @__PURE__ */ s.jsx(O.icon, { size: 14, color: O.color }),
              /* @__PURE__ */ s.jsx("span", { children: O.label })
            ]
          },
          O.id
        ))
      }
    )
  ] });
}, ny = ({
  settings: e,
  activeShortcutKey: t
}) => e["viewer.shortcut.show_cheat_sheet"] ? /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => {
  const r = String(n), l = e[`viewer.shortcut.${r}`];
  return typeof l == "string" && l ? /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-viewer-cheat-sheet__item ${t === r ? "meld-viewer-cheat-sheet__item--active" : ""}`,
      children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: n }),
        /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: l.replace("tag-toggle:", "+/- ") })
      ]
    },
    n
  ) : null;
}) }) : null, ry = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = f.useState("idle");
  f.useEffect(() => {
    c("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], m = d === "always" || d === "if_present" && e.user_notes;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
      children: [
        (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
        ] }),
        (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-value", children: [
            e.width,
            " x ",
            e.height,
            " px"
          ] })
        ] }),
        (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
        ] }),
        e.deleted_at && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
        ] }),
        (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
        ] }),
        (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && l.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: l.map(
            (g, v) => g.imgSrc && /* @__PURE__ */ s.jsx(
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
                title: v === 0 ? "Source" : v === 1 ? "Grand-Source" : `Ancestor (S${v + 1})`,
                alt: "source thumb"
              },
              g.id || v
            )
          ) }) })
        ] }),
        (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
          /* @__PURE__ */ s.jsx(
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
        (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
          /* @__PURE__ */ s.jsx(
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
        (t ? n["fullscreen.details.show_tags"] : n["viewer.details.show_tags"]) && e.tags && e.tags.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item", children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((g) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: g }, g)) })
        ] }),
        m && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            i === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ s.jsx(
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
              children: e.user_notes || /* @__PURE__ */ s.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, Em = f.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, o = typeof e.parent_id == "number" && e.parent_id === n.id, i = Je(e);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${a ? "meld-viewer-thumbnail--parent" : ""} ${o ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: i, alt: e.filename }),
          (a || o) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${a ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: a ? "Source Image" : "Derivative Image",
              children: a ? /* @__PURE__ */ s.jsx(Vu, { size: 12 }) : /* @__PURE__ */ s.jsx(Uu, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Em.displayName = "ThumbnailItem";
const ly = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: a,
  viewerMode: o
}) => /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-thumbnails", children: [
  l ? /* @__PURE__ */ s.jsx(
    "div",
    {
      style: {
        padding: "10px",
        color: "var(--meld-text-secondary)"
      },
      children: "Loading lineage..."
    }
  ) : e.map(({ img: i }) => /* @__PURE__ */ s.jsx(
    Em,
    {
      thumb: i,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    i.id
  )),
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Jr, { className: "animate-spin", size: 20 }) })
] }) });
function sy() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = _e(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: m,
    isMenuOpen: g,
    setIsMenuOpen: v,
    activeShortcutKey: x,
    setLastDeletedImages: w,
    overlayRef: _,
    handleNext: S,
    handlePrevious: h,
    handleTagEdit: u,
    handleEditNotes: p,
    handleRestore: y,
    handleRestoreWorkflow: k,
    handleAddUnifiedLoader: j,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: C,
    handleRunWithMask: O,
    handleEditSource: P,
    handleDelete: D,
    toggleFullscreen: U,
    image: J,
    windowedThumbnails: N,
    parentChain: R
  } = ty({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), z = f.useRef(null), T = f.useRef(null), { executeWorkflow: E } = li(), L = f.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!J) return null;
  const { viewerImageId: V, viewerMode: M } = e, Q = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return pe.createPortal(
    /* @__PURE__ */ s.jsxs(
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
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${i ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (de) => de.stopPropagation(),
              children: [
                Q && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: y,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(Jr, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(Bu, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(kh, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: U,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(Mh, { size: 20 }) : /* @__PURE__ */ s.jsx(Ch, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    si,
                    {
                      isMenuOpen: g,
                      setIsMenuOpen: v,
                      menuRef: T,
                      settings: e.settings,
                      onAddUnifiedLoader: j,
                      onRestoreWorkflow: k,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: C,
                      onRunWithMask: O,
                      onEditSource: P,
                      onEditTags: u,
                      onEditNotes: p,
                      onDelete: D,
                      deleteLabel: L,
                      showQuickShortcuts: !1,
                      iconSize: 20,
                      buttonClassName: "meld-viewer-action-btn"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(ye, { size: 20 })
                    }
                  )
                ] }),
                Q && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: h,
                    type: "button",
                    disabled: m,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(Qu, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Jr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: z,
                      src: Je(J),
                      alt: J.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                Q && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: S,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(ei, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  ry,
                  {
                    image: J,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: Q,
                    parentChain: R,
                    dispatch: t,
                    onEditNotes: p
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  ly,
                  {
                    windowedThumbnails: N,
                    viewerImageId: V,
                    currentImage: J,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: M
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  ny,
                  {
                    settings: e.settings,
                    activeShortcutKey: x
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            vm,
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
                    await E(
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
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            ym,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (de) => {
                e.activeModal.type === "node_selection" && el(e.activeModal.image, de);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(xm, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            wm,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: w
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(_m, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Ju, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(pm, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            hm,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            hs,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            hs,
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
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            gm,
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
const ay = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = _e(), [a, o] = f.useState("gallery"), [i, c] = f.useState(""), [d, m] = f.useState(e.pagination.limit);
  f.useEffect(() => {
    m(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const g = e.searchQuery.trim() !== "", v = f.useRef(null), x = f.useRef(null), w = he((u) => u.buckets), _ = f.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    for (const p of Object.values(w))
      for (const y of p)
        u.add(Number(y));
    return u;
  }, [w]), S = f.useMemo(() => e.images.filter((u) => _.has(u.id) ? !1 : e.viewScope === "trash" ? u.exists !== !1 || e.settings["gallery.trash.show_missing"] : u.exists !== !1 && (e.settings["gallery.show_parent_images"] || g || !u.has_children)), [
    e.images,
    e.settings,
    e.viewScope,
    _,
    g
  ]), h = f.useMemo(
    () => S.slice(0, d),
    [S, d]
  );
  return f.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && S.length === 0 && (te.log(
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
          ), m((k) => k + e.pagination.limit)) : e.pagination.hasMore ? (te.log(
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
    ), p = v.current;
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
    const u = e.viewerImageId ?? x.current;
    if (u !== null && S.some((y) => y.id === u)) {
      const y = S.findIndex((k) => k.id === u);
      y >= d && m(
        Math.ceil((y + 1) / e.pagination.limit) * e.pagination.limit
      );
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
    updateSetting: l,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: d,
    displayedImages: S,
    visibleImages: h,
    isSearchActive: g,
    loadMoreRef: v
  };
}, oy = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = _e(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Ds(
    e,
    t
  ), o = e.selectedIds.size, [i, c] = f.useState(!1), [d, m] = f.useState(null), g = f.useRef(null), [v, x] = f.useState(
    null
  );
  if (f.useEffect(() => {
    const b = document.getElementById("meld-bulk-bar-portal");
    let C = b instanceof HTMLDivElement ? b : null;
    if (!C) {
      C = document.createElement("div"), C.id = "meld-bulk-bar-portal", C.dataset.mountCount = "0";
      const P = document.querySelector(".comfyui-body-bottom");
      P ? P.appendChild(C) : document.body.appendChild(C);
    }
    const O = Number.parseInt(C.dataset.mountCount || "0", 10);
    return C.dataset.mountCount = (O + 1).toString(), x(C), () => {
      if (C) {
        const D = Number.parseInt(
          C.dataset.mountCount || "1",
          10
        ) - 1;
        C.dataset.mountCount = D.toString(), D <= 0 && C.remove();
      }
    };
  }, []), et({
    onEscape: () => c(!1),
    enabled: i
  }), o === 0 || !v) return null;
  const w = e.viewScope === "trash", _ = () => e.images.filter((b) => e.selectedIds.has(b.id)), S = () => {
    g.current && (m(g.current.getBoundingClientRect()), c(!0));
  }, h = (b) => {
    b(), c(!1);
  }, u = () => {
    const b = _(), C = /* @__PURE__ */ new Set();
    for (const O of b)
      if (O.tags)
        for (const P of O.tags)
          C.add(P);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(C)
      }
    });
  }, p = () => {
    const b = _();
    l(b);
  }, y = () => {
    const b = _();
    b.length > 0 && a(b, "run");
  }, k = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, j = /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${w ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          o,
          " items selected"
        ] }),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            ref: g,
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--action",
            onClick: S,
            children: [
              /* @__PURE__ */ s.jsx(
                Nh,
                {
                  size: 16,
                  style: { marginRight: "8px", verticalAlign: "middle" }
                }
              ),
              "Action"
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ s.jsx(ye, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        ),
        i && d && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu-overlay",
              onClick: () => c(!1),
              onMouseDown: (b) => b.stopPropagation()
            }
          ),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-bulk-bar-menu",
              style: {
                bottom: window.innerHeight - d.top + 5,
                left: d.left
              },
              onClick: (b) => b.stopPropagation(),
              children: w ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
                    onClick: () => h(r),
                    children: [
                      /* @__PURE__ */ s.jsx(Jr, { size: 14 }),
                      " Restore"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                    onClick: () => h(n),
                    children: [
                      /* @__PURE__ */ s.jsx($t, { size: 14 }),
                      " Delete Permanently"
                    ]
                  }
                )
              ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => h(u),
                    children: [
                      /* @__PURE__ */ s.jsx(ir, { size: 14 }),
                      " Edit Tags"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => h(p),
                    children: [
                      /* @__PURE__ */ s.jsx(ti, { size: 14 }),
                      " Queue Workflow"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => h(y),
                    children: [
                      /* @__PURE__ */ s.jsx(Lh, { size: 14 }),
                      " Queue Workflow (Mask)"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item",
                    onClick: () => h(k),
                    children: [
                      /* @__PURE__ */ s.jsx(Xr, { size: 14 }),
                      " Download"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx("div", { className: "meld-bulk-bar-menu__divider" }),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
                    onClick: () => h(n),
                    children: [
                      /* @__PURE__ */ s.jsx($t, { size: 14 }),
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
  return pe.createPortal(j, v);
};
function Ln(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let m;
    n.key && ((i = n.debug) != null && i.call(n)) && (m = Date.now());
    const g = e();
    if (!(g.length !== r.length || g.some((w, _) => r[_] !== w)))
      return l;
    r = g;
    let x;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (x = Date.now()), l = t(...g), n.key && ((d = n.debug) != null && d.call(n))) {
      const w = Math.round((Date.now() - m) * 100) / 100, _ = Math.round((Date.now() - x) * 100) / 100, S = _ / 16, h = (u, p) => {
        for (u = String(u); u.length < p; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${h(_, 5)} /${h(w, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * S, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return n != null && n.onChange && !(a && n.skipInitialOnChange) && n.onChange(l), a = !1, l;
  }
  return o.updateDeps = (i) => {
    r = i;
  }, o;
}
function _c(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const iy = (e, t) => Math.abs(e - t) < 1.01, cy = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, kc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, dy = (e) => e, uy = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, my = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const l = (o) => {
    const { width: i, height: c } = o;
    t({ width: Math.round(i), height: Math.round(c) });
  };
  if (l(kc(n)), !r.ResizeObserver)
    return () => {
    };
  const a = new r.ResizeObserver((o) => {
    const i = () => {
      const c = o[0];
      if (c != null && c.borderBoxSize) {
        const d = c.borderBoxSize[0];
        if (d) {
          l({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      l(kc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Sc = {
  passive: !0
}, jc = typeof window > "u" ? !0 : "onscrollend" in window, fy = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && jc ? () => {
  } : cy(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (m) => () => {
    const { horizontal: g, isRtl: v } = e.options;
    l = g ? n.scrollLeft * (v && -1 || 1) : n.scrollTop, a(), t(l, m);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Sc);
  const d = e.options.useScrollendEvent && jc;
  return d && n.addEventListener("scrollend", c, Sc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, py = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, hy = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var l, a;
  const o = e + t;
  (a = (l = r.scrollElement) == null ? void 0 : l.scrollTo) == null || a.call(l, {
    [r.options.horizontal ? "left" : "top"]: o,
    behavior: n
  });
};
class gy {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((a) => {
          const o = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var l;
          (l = r()) == null || l.disconnect(), n = null;
        },
        observe: (l) => {
          var a;
          return (a = r()) == null ? void 0 : a.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var a;
          return (a = r()) == null ? void 0 : a.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, l]) => {
        typeof l > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: dy,
        rangeExtractor: uy,
        onChange: () => {
        },
        measureElement: py,
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
      var r, l;
      (l = (r = this.options).onChange) == null || l.call(r, this, n);
    }, this.maybeNotify = Ln(
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
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((l) => {
          this.observer.observe(l);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (l) => {
            this.scrollRect = l, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (l, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < l ? "forward" : "backward" : null, this.scrollOffset = l, this.isScrolling = a, this.maybeNotify();
          })
        ), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let o = r - 1; o >= 0; o--) {
        const i = n[o];
        if (l.has(i.lane))
          continue;
        const c = a.get(
          i.lane
        );
        if (c == null || i.end > c.end ? a.set(i.lane, i) : i.end < c.end && l.set(i.lane, !0), l.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((o, i) => o.end === i.end ? o.index - i.index : o.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = Ln(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ],
      (n, r, l, a, o, i) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: l,
        getItemKey: a,
        enabled: o,
        lanes: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Ln(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: l, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const v of this.laneAssignments.keys())
            v >= n && this.laneAssignments.delete(v);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((v) => {
          this.itemSizeCache.set(v.key, v.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const m = this.measurementsCache.slice(0, d), g = new Array(i).fill(
          void 0
        );
        for (let v = 0; v < d; v++) {
          const x = m[v];
          x && (g[x.lane] = v);
        }
        for (let v = d; v < n; v++) {
          const x = a(v), w = this.laneAssignments.get(v);
          let _, S;
          if (w !== void 0 && this.options.lanes > 1) {
            _ = w;
            const y = g[_], k = y !== void 0 ? m[y] : void 0;
            S = k ? k.end + this.options.gap : r + l;
          } else {
            const y = this.options.lanes === 1 ? m[v - 1] : this.getFurthestMeasurement(m, v);
            S = y ? y.end + this.options.gap : r + l, _ = y ? y.lane : v % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(v, _);
          }
          const h = c.get(x), u = typeof h == "number" ? h : this.options.estimateSize(v), p = S + u;
          m[v] = {
            index: v,
            start: S,
            size: u,
            end: p,
            key: x,
            lane: _
          }, g[_] = v;
        }
        return this.measurementsCache = m, m;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ln(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? yy({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ln(
      () => {
        let n = null, r = null;
        const l = this.calculateRange();
        return l && (n = l.startIndex, r = l.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, l, a, o) => a === null || o === null ? [] : n({
        startIndex: a,
        endIndex: o,
        overscan: r,
        count: l
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, l = n.getAttribute(r);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const l = this.indexFromElement(n), a = this.measurementsCache[l];
      if (!a)
        return;
      const o = a.key, i = this.elementsCache.get(o);
      i !== n && (i && this.observer.unobserve(i), this.observer.observe(n), this.elementsCache.set(o, n)), n.isConnected && this.resizeItem(l, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const l = this.measurementsCache[n];
      if (!l)
        return;
      const a = this.itemSizeCache.get(l.key) ?? l.size, o = r - a;
      o !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(l, o, this) : l.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(l.index), this.itemSizeCache = new Map(this.itemSizeCache.set(l.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, l) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(l));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = Ln(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const l = [];
        for (let a = 0, o = n.length; a < o; a++) {
          const i = n[a], c = r[i];
          l.push(c);
        }
        return l;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return _c(
          r[Cm(
            0,
            r.length - 1,
            (l) => _c(r[l]).start,
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
    }, this.getOffsetForAlignment = (n, r, l = 0) => {
      if (!this.scrollElement) return 0;
      const a = this.getSize(), o = this.getScrollOffset();
      r === "auto" && (r = n >= o + a ? "end" : "start"), r === "center" ? n += (l - a) / 2 : r === "end" && (n -= a);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const l = this.measurementsCache[n];
      if (!l)
        return;
      const a = this.getSize(), o = this.getScrollOffset();
      if (r === "auto")
        if (l.end >= o + a - this.options.scrollPaddingEnd)
          r = "end";
        else if (l.start <= o + this.options.scrollPaddingStart)
          r = "start";
        else
          return [o, r];
      if (r === "end" && n === this.options.count - 1)
        return [this.getMaxScrollOffset(), r];
      const i = r === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, r, l.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: l } = {}) => {
      l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: l
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: l } = {}) => {
      l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), n = Math.max(0, Math.min(n, this.options.count - 1)), this.currentScrollToIndex = n;
      let a = 0;
      const o = 10, i = (d) => {
        if (!this.targetWindow) return;
        const m = this.getOffsetForIndex(n, d);
        if (!m) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [g, v] = m;
        this._scrollToOffset(g, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const x = () => {
            if (this.currentScrollToIndex !== n) return;
            const w = this.getScrollOffset(), _ = this.getOffsetForIndex(n, v);
            if (!_) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            iy(_[0], w) || c(v);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(x) : x();
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
      let l;
      if (r.length === 0)
        l = this.options.paddingStart;
      else if (this.options.lanes === 1)
        l = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let o = r.length - 1;
        for (; o >= 0 && a.some((i) => i === null); ) {
          const i = r[o];
          a[i.lane] === null && (a[i.lane] = i.end), o--;
        }
        l = Math.max(...a.filter((i) => i !== null));
      }
      return Math.max(
        l - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: l
    }) => {
      this.options.scrollToFn(n, { behavior: l, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const Cm = (e, t, n, r) => {
  for (; e <= t; ) {
    const l = (e + t) / 2 | 0, a = n(l);
    if (a < r)
      e = l + 1;
    else if (a > r)
      t = l - 1;
    else
      return l;
  }
  return e > 0 ? e - 1 : 0;
};
function yy({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const l = e.length - 1, a = (c) => e[c].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: l
    };
  let o = Cm(
    0,
    l,
    a,
    n
  ), i = o;
  if (r === 1)
    for (; i < l && e[i].end < n + t; )
      i++;
  else if (r > 1) {
    const c = Array(r).fill(0);
    for (; i < l && c.some((m) => m < n + t); ) {
      const m = e[i];
      c[m.lane] = m.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((m) => m >= n); ) {
      const m = e[o];
      d[m.lane] = m.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(l, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const bc = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function vy({
  useFlushSync: e = !0,
  ...t
}) {
  const n = f.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? pe.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = f.useState(
    () => new gy(r)
  );
  return l.setOptions(r), bc(() => l._didMount(), []), bc(() => l._willUpdate()), l;
}
function wy(e) {
  return vy({
    observeElementRect: my,
    observeElementOffset: fy,
    scrollToFn: hy,
    ...e
  });
}
const Nm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = _e(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: m,
    handleRunWithWorkflow: g,
    handleRunWithMask: v,
    handleRestore: x,
    handleDelete: w,
    handleEditNotes: _,
    handleUpdateUserNotes: S
  } = Ds(t, n), { getParentChain: h } = bm(t.images, t.settings), [u, p] = f.useState(null), [y, k] = f.useState(!1), [j, b] = f.useState(null), [C, O] = f.useState(!1), P = f.useRef(null), D = async (ee, tt, Pe = !1) => {
    try {
      await navigator.clipboard.writeText(ee), Pe ? (O(!0), setTimeout(() => O(!1), 2e3)) : (b(tt), setTimeout(() => b(null), 2e3));
    } catch (it) {
      console.error("Failed to copy text: ", it);
    }
  };
  f.useEffect(() => {
    const ee = (Pe) => {
      Pe.key === "Escape" && (u ? p(null) : k(!1));
    }, tt = (Pe) => {
      P.current && !P.current.contains(Pe.target) && k(!1);
    };
    return window.addEventListener("keydown", ee), y && document.addEventListener("mousedown", tt), () => {
      window.removeEventListener("keydown", ee), document.removeEventListener("mousedown", tt);
    };
  }, [y, u]);
  const U = h(e), N = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, R = Je(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: p,
    isMenuOpen: y,
    setIsMenuOpen: k,
    copiedLabel: j,
    popupCopied: C,
    menuRef: P,
    parentChain: U,
    displayFilename: N,
    imgSrc: R,
    handleCopy: D,
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
      ) || !ee.shiftKey && !ee.ctrlKey && !ee.metaKey && l || (ee.shiftKey || ee.ctrlKey || ee.metaKey || t.selectedIds.size > 0) && ee.preventDefault();
    },
    handleKeyDown: (ee) => {
      var Pe, it, jt;
      ((Pe = document.activeElement) == null ? void 0 : Pe.tagName) === "INPUT" || ((it = document.activeElement) == null ? void 0 : it.tagName) === "TEXTAREA" || (jt = document.activeElement) != null && jt.isContentEditable || (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      w(e);
    },
    handleRunWithWorkflow: () => {
      g(e);
    },
    handleRunWithMask: (ee = "run") => v(e, ee),
    handleUpdateUserNotes: (ee) => S(e.id, ee),
    fetchFullImageDetails: r
  };
}, xy = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => pe.createPortal(
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-prompt-popup-overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-prompt-popup-content",
          onClick: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
              /* @__PURE__ */ s.jsx("span", { children: e }),
              /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                l ? /* @__PURE__ */ s.jsx(Jo, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  vh,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  ye,
                  {
                    className: "meld-prompt-popup-close",
                    size: 18,
                    onClick: n
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup-text", children: t })
          ]
        }
      )
    }
  ),
  document.body
), Mm = qt.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: a,
      isMenuOpen: o,
      setIsMenuOpen: i,
      copiedLabel: c,
      popupCopied: d,
      menuRef: m,
      parentChain: g,
      displayFilename: v,
      imgSrc: x,
      handleCopy: w,
      handleClick: _,
      handleSelectToggle: S,
      handleContainerClick: h,
      handleMouseDown: u,
      handleKeyDown: p,
      handleRestoreWorkflow: y,
      handleAddUnifiedLoader: k,
      handleEditSource: j,
      handleEditTags: b,
      handleEditNotes: C,
      handleSendToWorkflow: O,
      handleRestore: P,
      handleDelete: D,
      handleRunWithWorkflow: U,
      handleRunWithMask: J,
      fetchFullImageDetails: N
    } = Nm(e), [R, z] = f.useState("idle");
    f.useEffect(() => {
      e.user_notes && R === "saving" && z("idle");
    }, [e.user_notes, R]);
    const T = (E) => {
      E.stopPropagation();
      let L = String(e.id);
      r && t.selectedIds.size > 0 && (L = Array.from(t.selectedIds).join(",")), E.dataTransfer.setData("text/plain", L), he.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
        onClick: h,
        onMouseDown: u,
        onKeyDown: p,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: T,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: S,
                "aria-label": "Toggle selection",
                role: "checkbox",
                "aria-checked": r,
                children: r && /* @__PURE__ */ s.jsxs(
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
                      /* @__PURE__ */ s.jsx("title", { children: "Selected" }),
                      /* @__PURE__ */ s.jsx("polyline", { points: "20 6 9 17 4 12" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
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
                onClick: (E) => {
                  E.stopPropagation(), _(E);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && v,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && g.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: g.map(
                (E, L) => E.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: E.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (V) => {
                      V.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: E.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: L === 0 ? "Source" : L === 1 ? "Grand-Source" : `Ancestor (S${L + 1})`,
                    alt: "source thumb"
                  },
                  E.id || L
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
                onClick: async (E) => {
                  E.stopPropagation();
                  const L = await N(e.id);
                  a({
                    title: "Model",
                    text: L.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const L = await N(e.id);
                        w(L.model_name || "-", "Model");
                      },
                      children: c === "Model" ? "Copied!" : "Model"
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
                onClick: async (E) => {
                  E.stopPropagation();
                  const L = await N(e.id);
                  a({
                    title: "Positive Prompt",
                    text: L.positive_prompt || L.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const L = await N(e.id);
                        w(
                          L.positive_prompt || L.positive || "-",
                          "Positive"
                        );
                      },
                      children: c === "Positive" ? "Copied!" : "Positive"
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
                onClick: async (E) => {
                  E.stopPropagation();
                  const L = await N(e.id);
                  a({
                    title: "Negative Prompt",
                    text: L.negative_prompt || L.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const L = await N(e.id);
                        w(
                          L.negative_prompt || L.negative || "-",
                          "Negative"
                        );
                      },
                      children: c === "Negative" ? "Copied!" : "Negative"
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
                onClick: (E) => {
                  E.stopPropagation(), b();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((E, L) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: E
                    },
                    `${E}-${L}`
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
            ),
            (t.settings["sidebar.show_user_notes"] === "always" || t.settings["sidebar.show_user_notes"] === "if_present" && e.user_notes) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-item meld-image-card__meta-item--notes", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__meta-label", children: [
                "Notes",
                R === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "meld-image-card__meta-content",
                  onClick: (E) => {
                    E.stopPropagation(), C();
                  },
                  children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsx(
            si,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: m,
              settings: t.settings,
              onAddUnifiedLoader: k,
              onRestoreWorkflow: y,
              onSendToWorkflow: O,
              onRunWithWorkflow: U,
              onRunWithMask: (E) => J(E),
              onEditSource: j,
              onEditTags: b,
              onEditNotes: C,
              onRestore: P,
              showRestore: t.viewScope === "trash",
              onDelete: D,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            xy,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (E) => w(E, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
Mm.displayName = "DetailedImageCard";
const Im = qt.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: a,
      handleClick: o,
      handleSelectToggle: i,
      isMenuOpen: c,
      setIsMenuOpen: d,
      menuRef: m,
      state: g,
      handleAddUnifiedLoader: v,
      handleRestoreWorkflow: x,
      handleSendToWorkflow: w,
      handleRunWithWorkflow: _,
      handleRunWithMask: S,
      handleEditSource: h,
      handleEditTags: u,
      handleEditNotes: p,
      handleDelete: y,
      handleRestore: k
    } = Nm(e), j = g.viewScope === "trash", b = j ? "Delete Permanently" : "Move to Trash", C = (O) => {
      O.stopPropagation();
      let P = String(e.id);
      t && g.selectedIds.size > 0 && (P = Array.from(g.selectedIds).join(",")), O.dataTransfer.setData("text/plain", P), he.getState().setIsOpen(!0);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""} ${c ? "meld-image-card--menu-open" : ""}`,
        onClick: r,
        onMouseDown: l,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: C,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-image-card__select-checkbox ${t ? "meld-image-card__select-checkbox--checked" : ""}`,
                onClick: i,
                "aria-label": "Toggle selection",
                role: "checkbox",
                "aria-checked": t,
                children: t && /* @__PURE__ */ s.jsxs(
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
                      /* @__PURE__ */ s.jsx("title", { children: "Selected" }),
                      /* @__PURE__ */ s.jsx("polyline", { points: "20 6 9 17 4 12" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "img",
              {
                src: n,
                className: "meld-image-card__thumbnail",
                alt: e.filename,
                loading: "lazy",
                draggable: !1,
                width: e.width || void 0,
                height: e.height || void 0,
                onMouseDown: l,
                onClick: (O) => {
                  O.stopPropagation(), o(O);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            si,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: m,
              settings: g.settings,
              onAddUnifiedLoader: v,
              onRestoreWorkflow: x,
              onSendToWorkflow: w,
              onRunWithWorkflow: _,
              onRunWithMask: S,
              onEditSource: h,
              onEditTags: u,
              onEditNotes: p,
              onDelete: y,
              onRestore: k,
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
Im.displayName = "SimpleImageCard";
const Ec = ({ image: e }) => {
  const { state: t } = _e();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Im, { image: e }) : /* @__PURE__ */ s.jsx(Mm, { image: e });
}, Ml = 6, _y = 20, ky = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  localLimit: a,
  displayedImagesLength: o,
  hasMore: i
}) => {
  const c = f.useRef(null), [d, m] = f.useState(300), g = t["sidebar.thumbnail_size"] || 100, v = t["gallery.view_mode"] === "grid_only";
  f.useEffect(() => {
    const p = c.current;
    if (!p) return;
    const y = () => {
      m(p.clientWidth);
    };
    y();
    const k = new ResizeObserver(y);
    return k.observe(p), () => k.disconnect();
  }, []);
  const x = g + 10, w = v ? Math.max(
    1,
    Math.floor(
      (d - _y * 2 + Ml) / (x + Ml)
    )
  ) : 1, _ = v ? Math.ceil(e.length / w) : e.length, S = v ? g + 10 + Ml : Math.max(g, 150) + 20, h = wy({
    count: _,
    getScrollElement: () => c.current,
    estimateSize: () => S,
    overscan: 5,
    getItemKey: (p) => {
      var y;
      return v ? `row-${p}-${w}` : ((y = e[p]) == null ? void 0 : y.id) ?? p;
    }
  });
  f.useEffect(() => {
    if (r === null) return;
    const p = e.findIndex((k) => k.id === r);
    if (p < 0) return;
    const y = v ? Math.floor(p / w) : p;
    h.scrollToIndex(y, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, v, w, h]);
  const u = h.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: c,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${g}px`
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `meld-gallery__list ${v ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${h.getTotalSize()}px`,
              width: "100%",
              position: "relative"
            },
            children: u.map((p) => {
              if (v) {
                const k = p.index * w, j = Math.min(
                  k + w,
                  e.length
                ), b = e.slice(k, j);
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: "meld-gallery__virtual-grid-row",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${p.start}px)`,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: Ml,
                      alignItems: "flex-start"
                    },
                    children: b.map((C) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": C.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: C.width && C.height ? Math.min(
                                g,
                                g * C.width / C.height
                              ) + 10 : g + 10,
                              minWidth: g + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Ec, { image: C })
                          }
                        )
                      },
                      C.id
                    ))
                  },
                  p.key
                );
              }
              const y = e[p.index];
              return y ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  "data-image-id": y.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${p.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(Ec, { image: y })
                },
                p.key
              ) : null;
            })
          }
        ),
        /* @__PURE__ */ s.jsxs(
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
              l && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
              a >= o && !i && e.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
            ]
          }
        )
      ]
    }
  );
}, Sy = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    localLimit: c,
    displayedImages: d,
    visibleImages: m,
    isSearchActive: g,
    loadMoreRef: v
  } = ay(), { isOpen: x, setIsOpen: w } = he(), _ = he((C) => C.buckets), S = Object.values(_).some((C) => C && C.length > 0);
  te.log("GalleryPanel: isLightTableOpen =", x);
  const [h, u] = f.useState(!1), [p, y] = f.useState(null), k = f.useRef(null), j = f.useCallback(() => {
    k.current && (y(
      k.current.getBoundingClientRect()
    ), u(!0));
  }, []), b = f.useCallback(
    (C) => {
      t({ type: "SET_SEARCH_QUERY", payload: C }), i(C), a("search"), u(!1);
    },
    [t, i, a]
  );
  return te.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: m.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (C) => {
        C.dataTransfer.types.includes(
          "application/meld-lt-source-slot"
        ) && (C.preventDefault(), C.dataTransfer.dropEffect = "move");
      },
      onDrop: (C) => {
        const O = C.dataTransfer.getData(
          "application/meld-lt-source-slot"
        );
        if (O) {
          C.preventDefault();
          const P = C.dataTransfer.getData("text/plain");
          P && P.split(",").forEach((U) => {
            U && he.getState().removeFromBucket(O, U.trim());
          });
        }
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx($t, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (C) => r("gallery.trash.show_missing", C.target.checked)
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
                  /* @__PURE__ */ s.jsx(ye, { size: 14 }),
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
                  l === "search" ? (i(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && o && t({
                    type: "SET_SEARCH_QUERY",
                    payload: o
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: g ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: g ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(bn, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: k,
                type: "button",
                onClick: j,
                style: {
                  background: "none",
                  border: "none",
                  color: h ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(
                  lr,
                  {
                    size: 14,
                    fill: h ? "var(--brand-yellow, #ffd700)" : "none"
                  }
                )
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(l === "tags" ? "gallery" : "tags"),
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
                children: /* @__PURE__ */ s.jsx(ir, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(jh, { size: 14 }) : /* @__PURE__ */ s.jsx(Bu, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  te.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    x,
                    "to",
                    !x
                  ), w(!x);
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
                children: /* @__PURE__ */ s.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ s.jsx(
                    Th,
                    {
                      size: 14,
                      fill: x ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: x ? 1 : 0.8 }
                    }
                  ),
                  !x && S && /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(Xr, { size: 14 })
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
                  Jr,
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
                children: /* @__PURE__ */ s.jsx(Ku, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Zg, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Vg, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "tags" ? /* @__PURE__ */ s.jsx(
            Jg,
            {
              onClose: () => a("gallery"),
              onSearch: (C) => {
                t({ type: "SET_SEARCH_QUERY", payload: C }), a("search");
              }
            }
          ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : m.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ s.jsx(
                ky,
                {
                  visibleImages: m,
                  settings: e.settings,
                  loadMoreRef: v,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  localLimit: c,
                  displayedImagesLength: d.length,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(oy, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(sy, {}),
        /* @__PURE__ */ s.jsx(Ug, {}),
        h && /* @__PURE__ */ s.jsx(
          qg,
          {
            anchorRect: p,
            onClose: () => u(!1),
            onSelect: b
          }
        ),
        /* @__PURE__ */ s.jsx(Gg, {})
      ]
    }
  );
};
Cc.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, a;
      const n = (l = e.widgets) == null ? void 0 : l.find((o) => o.name === "positive"), r = (a = e.widgets) == null ? void 0 : a.find((o) => o.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const jy = document.getElementById(
  "meld-gallery-style"
);
if (!jy) {
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
let Il = null, ct = null;
Cc.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const a = n.ui.meld;
        a != null && a.isVisible() && a.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await Xu();
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
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Yu({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
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
              galleryRoot: Il,
              galleryContainer: ct
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), ct || (te.log("galleryContainer not found, creating new one"), ct = document.createElement("div"), ct.id = "meld-gallery-container", ct.style.height = "100%", ct.style.width = "100%", ct.style.display = "flex", ct.style.flexDirection = "column", ct.style.overflow = "hidden"), n.contains(ct) || (te.log("Appending galleryContainer to el"), n.appendChild(ct)), Il ? te.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (te.log("Creating new gallery root"), Il = Au(ct), Il.render(
              qt.createElement(
                xg,
                null,
                qt.createElement(Sy)
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
