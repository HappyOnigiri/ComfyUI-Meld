import { api as U } from "../../../scripts/api.js";
import { app as da } from "../../../scripts/app.js";
function Mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fa = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir = Symbol.for("react.element"), Rc = Symbol.for("react.portal"), Fc = Symbol.for("react.fragment"), Oc = Symbol.for("react.strict_mode"), Dc = Symbol.for("react.profiler"), Ac = Symbol.for("react.provider"), $c = Symbol.for("react.context"), Uc = Symbol.for("react.forward_ref"), Vc = Symbol.for("react.suspense"), Qc = Symbol.for("react.memo"), Wc = Symbol.for("react.lazy"), Ji = Symbol.iterator;
function Bc(e) {
  return e === null || typeof e != "object" ? null : (e = Ji && e[Ji] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ma = Object.assign, ha = {};
function vn(e, t, n) {
  this.props = e, this.context = t, this.refs = ha, this.updater = n || pa;
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ga() {
}
ga.prototype = vn.prototype;
function ei(e, t, n) {
  this.props = e, this.context = t, this.refs = ha, this.updater = n || pa;
}
var ti = ei.prototype = new ga();
ti.constructor = ei;
ma(ti, vn.prototype);
ti.isPureReactComponent = !0;
var Zi = Array.isArray, ya = Object.prototype.hasOwnProperty, ni = { current: null }, va = { key: !0, ref: !0, __self: !0, __source: !0 };
function wa(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ya.call(t, r) && !va.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), f = 0; f < a; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: ir, type: e, key: o, ref: i, props: l, _owner: ni.current };
}
function Hc(e, t) {
  return { $$typeof: ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ri(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ir;
}
function Gc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var qi = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Gc("" + e.key) : t.toString(36);
}
function zr(e, t, n, r, l) {
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
        case ir:
        case Rc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Rl(i, 0) : r, Zi(l) ? (n = "", e != null && (n = e.replace(qi, "$&/") + "/"), zr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (ri(l) && (l = Hc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(qi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Zi(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var u = r + Rl(o, a);
    i += zr(o, t, n, u, l);
  }
  else if (u = Bc(e), typeof u == "function") for (e = u.call(e), a = 0; !(o = e.next()).done; ) o = o.value, u = r + Rl(o, a++), i += zr(o, t, n, u, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function mr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return zr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Kc(e) {
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
var ve = { current: null }, Mr = { transition: null }, bc = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: Mr, ReactCurrentOwner: ni };
function xa() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: mr, forEach: function(e, t, n) {
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
  if (!ri(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = vn;
A.Fragment = Fc;
A.Profiler = Dc;
A.PureComponent = ei;
A.StrictMode = Oc;
A.Suspense = Vc;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bc;
A.act = xa;
A.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ma({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ni.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) ya.call(t, u) && !va.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var f = 0; f < u; f++) a[f] = arguments[f + 2];
    r.children = a;
  }
  return { $$typeof: ir, type: e.type, key: l, ref: o, props: r, _owner: i };
};
A.createContext = function(e) {
  return e = { $$typeof: $c, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ac, _context: e }, e.Consumer = e;
};
A.createElement = wa;
A.createFactory = function(e) {
  var t = wa.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: Uc, render: e };
};
A.isValidElement = ri;
A.lazy = function(e) {
  return { $$typeof: Wc, _payload: { _status: -1, _result: e }, _init: Kc };
};
A.memo = function(e, t) {
  return { $$typeof: Qc, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
A.unstable_act = xa;
A.useCallback = function(e, t) {
  return ve.current.useCallback(e, t);
};
A.useContext = function(e) {
  return ve.current.useContext(e);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(e) {
  return ve.current.useDeferredValue(e);
};
A.useEffect = function(e, t) {
  return ve.current.useEffect(e, t);
};
A.useId = function() {
  return ve.current.useId();
};
A.useImperativeHandle = function(e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function(e, t) {
  return ve.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function(e, t) {
  return ve.current.useLayoutEffect(e, t);
};
A.useMemo = function(e, t) {
  return ve.current.useMemo(e, t);
};
A.useReducer = function(e, t, n) {
  return ve.current.useReducer(e, t, n);
};
A.useRef = function(e) {
  return ve.current.useRef(e);
};
A.useState = function(e) {
  return ve.current.useState(e);
};
A.useSyncExternalStore = function(e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function() {
  return ve.current.useTransition();
};
A.version = "18.3.1";
fa.exports = A;
var S = fa.exports;
const es = /* @__PURE__ */ Mc(S);
var Sa = { exports: {} }, Ie = {}, ka = { exports: {} }, _a = {};
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
  function t(z, O) {
    var D = z.length;
    z.push(O);
    e: for (; 0 < D; ) {
      var K = D - 1 >>> 1, oe = z[K];
      if (0 < l(oe, O)) z[K] = O, z[D] = oe, D = K;
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var O = z[0], D = z.pop();
    if (D !== O) {
      z[0] = D;
      e: for (var K = 0, oe = z.length, fr = oe >>> 1; K < fr; ) {
        var Tt = 2 * (K + 1) - 1, Ml = z[Tt], It = Tt + 1, pr = z[It];
        if (0 > l(Ml, D)) It < oe && 0 > l(pr, Ml) ? (z[K] = pr, z[It] = D, K = It) : (z[K] = Ml, z[Tt] = D, K = Tt);
        else if (It < oe && 0 > l(pr, D)) z[K] = pr, z[It] = D, K = It;
        else break e;
      }
    }
    return O;
  }
  function l(z, O) {
    var D = z.sortIndex - O.sortIndex;
    return D !== 0 ? D : z.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, a = i.now();
    e.unstable_now = function() {
      return i.now() - a;
    };
  }
  var u = [], f = [], y = 1, g = null, m = 3, E = !1, x = !1, k = !1, P = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(z) {
    for (var O = n(f); O !== null; ) {
      if (O.callback === null) r(f);
      else if (O.startTime <= z) r(f), O.sortIndex = O.expirationTime, t(u, O);
      else break;
      O = n(f);
    }
  }
  function w(z) {
    if (k = !1, p(z), !x) if (n(u) !== null) x = !0, ee(I);
    else {
      var O = n(f);
      O !== null && ne(w, O.startTime - z);
    }
  }
  function I(z, O) {
    x = !1, k && (k = !1, c(h), h = -1), E = !0;
    var D = m;
    try {
      for (p(O), g = n(u); g !== null && (!(g.expirationTime > O) || z && !R()); ) {
        var K = g.callback;
        if (typeof K == "function") {
          g.callback = null, m = g.priorityLevel;
          var oe = K(g.expirationTime <= O);
          O = e.unstable_now(), typeof oe == "function" ? g.callback = oe : g === n(u) && r(u), p(O);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var fr = !0;
      else {
        var Tt = n(f);
        Tt !== null && ne(w, Tt.startTime - O), fr = !1;
      }
      return fr;
    } finally {
      g = null, m = D, E = !1;
    }
  }
  var v = !1, j = null, h = -1, F = 5, L = -1;
  function R() {
    return !(e.unstable_now() - L < F);
  }
  function C() {
    if (j !== null) {
      var z = e.unstable_now();
      L = z;
      var O = !0;
      try {
        O = j(!0, z);
      } finally {
        O ? _() : (v = !1, j = null);
      }
    } else v = !1;
  }
  var _;
  if (typeof d == "function") _ = function() {
    d(C);
  };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(), Z = T.port2;
    T.port1.onmessage = C, _ = function() {
      Z.postMessage(null);
    };
  } else _ = function() {
    P(C, 0);
  };
  function ee(z) {
    j = z, v || (v = !0, _());
  }
  function ne(z, O) {
    h = P(function() {
      z(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_continueExecution = function() {
    x || E || (x = !0, ee(I));
  }, e.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < z ? Math.floor(1e3 / z) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(z) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = m;
    }
    var D = m;
    m = O;
    try {
      return z();
    } finally {
      m = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(z, O) {
    switch (z) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        z = 3;
    }
    var D = m;
    m = z;
    try {
      return O();
    } finally {
      m = D;
    }
  }, e.unstable_scheduleCallback = function(z, O, D) {
    var K = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? K + D : K) : D = K, z) {
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
    return oe = D + oe, z = { id: y++, callback: O, priorityLevel: z, startTime: D, expirationTime: oe, sortIndex: -1 }, D > K ? (z.sortIndex = D, t(f, z), n(u) === null && z === n(f) && (k ? (c(h), h = -1) : k = !0, ne(w, D - K))) : (z.sortIndex = oe, t(u, z), x || E || (x = !0, ee(I))), z;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(z) {
    var O = m;
    return function() {
      var D = m;
      m = O;
      try {
        return z.apply(this, arguments);
      } finally {
        m = D;
      }
    };
  };
})(_a);
ka.exports = _a;
var Yc = ka.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xc = S, Te = Yc;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ea = /* @__PURE__ */ new Set(), Wn = {};
function Qt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) Ea.add(t[e]);
}
var nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), io = Object.prototype.hasOwnProperty, Jc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ts = {}, ns = {};
function Zc(e) {
  return io.call(ns, e) ? !0 : io.call(ts, e) ? !1 : Jc.test(e) ? ns[e] = !0 : (ts[e] = !0, !1);
}
function qc(e, t, n, r) {
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
function ed(e, t, n, r) {
  if (t === null || typeof t > "u" || qc(e, t, n, r)) return !0;
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
var li = /[\-:]([a-z])/g;
function oi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    li,
    oi
  );
  ce[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(li, oi);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(li, oi);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ii(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ed(t, n, l, r) && (n = null), r || l === null ? Zc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var it = Xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, hr = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), so = Symbol.for("react.profiler"), Ca = Symbol.for("react.provider"), Na = Symbol.for("react.context"), ai = Symbol.for("react.forward_ref"), ao = Symbol.for("react.suspense"), uo = Symbol.for("react.suspense_list"), ui = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), ja = Symbol.for("react.offscreen"), rs = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object" ? null : (e = rs && e[rs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var X = Object.assign, Fl;
function Ln(e) {
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
function Dl(e, t) {
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
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a]; ) a--;
      for (; 1 <= i && 0 <= a; i--, a--) if (l[i] !== o[a]) {
        if (i !== 1 || a !== 1)
          do
            if (i--, a--, 0 > a || l[i] !== o[a]) {
              var u = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= i && 0 <= a);
        break;
      }
    }
  } finally {
    Ol = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ln(e) : "";
}
function td(e) {
  switch (e.tag) {
    case 5:
      return Ln(e.type);
    case 16:
      return Ln("Lazy");
    case 13:
      return Ln("Suspense");
    case 19:
      return Ln("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Dl(e.type, !1), e;
    case 11:
      return e = Dl(e.type.render, !1), e;
    case 1:
      return e = Dl(e.type, !0), e;
    default:
      return "";
  }
}
function co(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Ht:
      return "Portal";
    case so:
      return "Profiler";
    case si:
      return "StrictMode";
    case ao:
      return "Suspense";
    case uo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Na:
      return (e.displayName || "Context") + ".Consumer";
    case Ca:
      return (e._context.displayName || "Context") + ".Provider";
    case ai:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ui:
      return t = e.displayName || null, t !== null ? t : co(e.type) || "Memo";
    case ut:
      t = e._payload, e = e._init;
      try {
        return co(e(t));
      } catch {
      }
  }
  return null;
}
function nd(e) {
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
      return co(t);
    case 8:
      return t === si ? "StrictMode" : "Mode";
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
function Ta(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function rd(e) {
  var t = Ta(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = rd(e));
}
function Ia(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ta(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Br(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fo(e, t) {
  var n = t.checked;
  return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ls(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = _t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function La(e, t) {
  t = t.checked, t != null && ii(e, "checked", t, !1);
}
function po(e, t) {
  La(e, t);
  var n = _t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? mo(e, t.type, n) : t.hasOwnProperty("defaultValue") && mo(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function os(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function mo(e, t, n) {
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
function ho(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function is(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(N(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: _t(n) };
}
function Pa(e, t) {
  var n = _t(t.value), r = _t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ss(e) {
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
function go(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? za(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
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
function Bn(e, t) {
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
}, ld = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function(e) {
  ld.forEach(function(t) {
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
var od = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function yo(e, t) {
  if (t) {
    if (od[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function vo(e, t) {
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
var wo = null;
function ci(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var xo = null, ln = null, on = null;
function as(e) {
  if (e = ur(e)) {
    if (typeof xo != "function") throw Error(N(280));
    var t = e.stateNode;
    t && (t = xl(t), xo(e.stateNode, e.type, t));
  }
}
function Oa(e) {
  ln ? on ? on.push(e) : on = [e] : ln = e;
}
function Da() {
  if (ln) {
    var e = ln, t = on;
    if (on = ln = null, as(e), t) for (e = 0; e < t.length; e++) as(t[e]);
  }
}
function Aa(e, t) {
  return e(t);
}
function $a() {
}
var Al = !1;
function Ua(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return Aa(e, t, n);
  } finally {
    Al = !1, (ln !== null || on !== null) && ($a(), Da());
  }
}
function Hn(e, t) {
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var So = !1;
if (nt) try {
  var _n = {};
  Object.defineProperty(_n, "passive", { get: function() {
    So = !0;
  } }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
} catch {
  So = !1;
}
function id(e, t, n, r, l, o, i, a, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (y) {
    this.onError(y);
  }
}
var Fn = !1, Hr = null, Gr = !1, ko = null, sd = { onError: function(e) {
  Fn = !0, Hr = e;
} };
function ad(e, t, n, r, l, o, i, a, u) {
  Fn = !1, Hr = null, id.apply(sd, arguments);
}
function ud(e, t, n, r, l, o, i, a, u) {
  if (ad.apply(this, arguments), Fn) {
    if (Fn) {
      var f = Hr;
      Fn = !1, Hr = null;
    } else throw Error(N(198));
    Gr || (Gr = !0, ko = f);
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
function Va(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function us(e) {
  if (Wt(e) !== e) throw Error(N(188));
}
function cd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wt(e), t === null) throw Error(N(188));
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
        if (o === n) return us(l), e;
        if (o === r) return us(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (a === r) {
          i = !0, r = l, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (a === r) {
            i = !0, r = o, n = l;
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Qa(e) {
  return e = cd(e), e !== null ? Wa(e) : null;
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
var Ba = Te.unstable_scheduleCallback, cs = Te.unstable_cancelCallback, dd = Te.unstable_shouldYield, fd = Te.unstable_requestPaint, q = Te.unstable_now, pd = Te.unstable_getCurrentPriorityLevel, di = Te.unstable_ImmediatePriority, Ha = Te.unstable_UserBlockingPriority, Kr = Te.unstable_NormalPriority, md = Te.unstable_LowPriority, Ga = Te.unstable_IdlePriority, gl = null, Ye = null;
function hd(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
    Ye.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var We = Math.clz32 ? Math.clz32 : vd, gd = Math.log, yd = Math.LN2;
function vd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (gd(e) / yd | 0) | 0;
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
function br(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? r = zn(a) : (o &= i, o !== 0 && (r = zn(o)));
  } else i = n & ~l, i !== 0 ? r = zn(i) : o !== 0 && (r = zn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - We(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function wd(e, t) {
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
function xd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - We(o), a = 1 << i, u = l[i];
    u === -1 ? (!(a & n) || a & r) && (l[i] = wd(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function _o(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ka() {
  var e = vr;
  return vr <<= 1, !(vr & 4194240) && (vr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - We(t), e[t] = n;
}
function Sd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - We(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function fi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var V = 0;
function ba(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ya, pi, Xa, Ja, Za, Eo = !1, xr = [], ht = null, gt = null, yt = null, Gn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), dt = [], kd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ds(e, t) {
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
function En(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = ur(t), t !== null && pi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function _d(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ht = En(ht, e, t, n, r, l), !0;
    case "dragenter":
      return gt = En(gt, e, t, n, r, l), !0;
    case "mouseover":
      return yt = En(yt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gn.set(o, En(Gn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Kn.set(o, En(Kn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function qa(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Va(n), t !== null) {
          e.blockedOn = t, Za(e.priority, function() {
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
    var n = Co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      wo = r, n.target.dispatchEvent(r), wo = null;
    } else return t = ur(n), t !== null && pi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function fs(e, t, n) {
  Rr(e) && n.delete(t);
}
function Ed() {
  Eo = !1, ht !== null && Rr(ht) && (ht = null), gt !== null && Rr(gt) && (gt = null), yt !== null && Rr(yt) && (yt = null), Gn.forEach(fs), Kn.forEach(fs);
}
function Cn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Eo || (Eo = !0, Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Ed)));
}
function bn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < xr.length) {
    Cn(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ht !== null && Cn(ht, e), gt !== null && Cn(gt, e), yt !== null && Cn(yt, e), Gn.forEach(t), Kn.forEach(t), n = 0; n < dt.length; n++) r = dt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dt.length && (n = dt[0], n.blockedOn === null); ) qa(n), n.blockedOn === null && dt.shift();
}
var sn = it.ReactCurrentBatchConfig, Yr = !0;
function Cd(e, t, n, r) {
  var l = V, o = sn.transition;
  sn.transition = null;
  try {
    V = 1, mi(e, t, n, r);
  } finally {
    V = l, sn.transition = o;
  }
}
function Nd(e, t, n, r) {
  var l = V, o = sn.transition;
  sn.transition = null;
  try {
    V = 4, mi(e, t, n, r);
  } finally {
    V = l, sn.transition = o;
  }
}
function mi(e, t, n, r) {
  if (Yr) {
    var l = Co(e, t, n, r);
    if (l === null) Yl(e, t, r, Xr, n), ds(e, r);
    else if (_d(l, e, t, n, r)) r.stopPropagation();
    else if (ds(e, r), t & 4 && -1 < kd.indexOf(e)) {
      for (; l !== null; ) {
        var o = ur(l);
        if (o !== null && Ya(o), o = Co(e, t, n, r), o === null && Yl(e, t, r, Xr, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Yl(e, t, r, null, n);
  }
}
var Xr = null;
function Co(e, t, n, r) {
  if (Xr = null, e = ci(r), e = zt(e), e !== null) if (t = Wt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Va(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xr = e, null;
}
function eu(e) {
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
      switch (pd()) {
        case di:
          return 1;
        case Ha:
          return 4;
        case Kr:
        case md:
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
var pt = null, hi = null, Fr = null;
function tu() {
  if (Fr) return Fr;
  var e, t = hi, n = t.length, r, l = "value" in pt ? pt.value : pt.textContent, o = l.length;
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
function ps() {
  return !1;
}
function Le(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Sr : ps, this.isPropagationStopped = ps, this;
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
var wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, gi = Le(wn), ar = X({}, wn, { view: 0, detail: 0 }), jd = Le(ar), Ul, Vl, Nn, yl = X({}, ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Nn && (Nn && e.type === "mousemove" ? (Ul = e.screenX - Nn.screenX, Vl = e.screenY - Nn.screenY) : Vl = Ul = 0, Nn = e), Ul);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Vl;
} }), ms = Le(yl), Td = X({}, yl, { dataTransfer: 0 }), Id = Le(Td), Ld = X({}, ar, { relatedTarget: 0 }), Ql = Le(Ld), Pd = X({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), zd = Le(Pd), Md = X({}, wn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Rd = Le(Md), Fd = X({}, wn, { data: 0 }), hs = Le(Fd), Od = {
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
}, Dd = {
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
}, Ad = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function $d(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ad[e]) ? !!t[e] : !1;
}
function yi() {
  return $d;
}
var Ud = X({}, ar, { key: function(e) {
  if (e.key) {
    var t = Od[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yi, charCode: function(e) {
  return e.type === "keypress" ? Or(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Vd = Le(Ud), Qd = X({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gs = Le(Qd), Wd = X({}, ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yi }), Bd = Le(Wd), Hd = X({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = Le(Hd), Kd = X({}, yl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), bd = Le(Kd), Yd = [9, 13, 27, 32], vi = nt && "CompositionEvent" in window, On = null;
nt && "documentMode" in document && (On = document.documentMode);
var Xd = nt && "TextEvent" in window && !On, nu = nt && (!vi || On && 8 < On && 11 >= On), ys = " ", vs = !1;
function ru(e, t) {
  switch (e) {
    case "keyup":
      return Yd.indexOf(t.keyCode) !== -1;
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
function lu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Jd(e, t) {
  switch (e) {
    case "compositionend":
      return lu(t);
    case "keypress":
      return t.which !== 32 ? null : (vs = !0, ys);
    case "textInput":
      return e = t.data, e === ys && vs ? null : e;
    default:
      return null;
  }
}
function Zd(e, t) {
  if (Kt) return e === "compositionend" || !vi && ru(e, t) ? (e = tu(), Fr = hi = pt = null, Kt = !1, e) : null;
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
      return nu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ws(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qd[e.type] : t === "textarea";
}
function ou(e, t, n, r) {
  Oa(r), t = Jr(t, "onChange"), 0 < t.length && (n = new gi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Dn = null, Yn = null;
function ef(e) {
  gu(e, 0);
}
function vl(e) {
  var t = Xt(e);
  if (Ia(t)) return e;
}
function tf(e, t) {
  if (e === "change") return t;
}
var iu = !1;
if (nt) {
  var Wl;
  if (nt) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var xs = document.createElement("div");
      xs.setAttribute("oninput", "return;"), Bl = typeof xs.oninput == "function";
    }
    Wl = Bl;
  } else Wl = !1;
  iu = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Ss() {
  Dn && (Dn.detachEvent("onpropertychange", su), Yn = Dn = null);
}
function su(e) {
  if (e.propertyName === "value" && vl(Yn)) {
    var t = [];
    ou(t, Yn, e, ci(e)), Ua(ef, t);
  }
}
function nf(e, t, n) {
  e === "focusin" ? (Ss(), Dn = t, Yn = n, Dn.attachEvent("onpropertychange", su)) : e === "focusout" && Ss();
}
function rf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return vl(Yn);
}
function lf(e, t) {
  if (e === "click") return vl(t);
}
function of(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function sf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var He = typeof Object.is == "function" ? Object.is : sf;
function Xn(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!io.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function ks(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _s(e, t) {
  var n = ks(e);
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
    n = ks(n);
  }
}
function au(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? au(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function uu() {
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
function wi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function af(e) {
  var t = uu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && au(n.ownerDocument.documentElement, n)) {
    if (r !== null && wi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = _s(n, o);
        var i = _s(
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
var uf = nt && "documentMode" in document && 11 >= document.documentMode, bt = null, No = null, An = null, jo = !1;
function Es(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jo || bt == null || bt !== Br(r) || (r = bt, "selectionStart" in r && wi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), An && Xn(An, r) || (An = r, r = Jr(No, "onSelect"), 0 < r.length && (t = new gi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bt)));
}
function kr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yt = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, Hl = {}, cu = {};
nt && (cu = document.createElement("div").style, "AnimationEvent" in window || (delete Yt.animationend.animation, delete Yt.animationiteration.animation, delete Yt.animationstart.animation), "TransitionEvent" in window || delete Yt.transitionend.transition);
function wl(e) {
  if (Hl[e]) return Hl[e];
  if (!Yt[e]) return e;
  var t = Yt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in cu) return Hl[e] = t[n];
  return e;
}
var du = wl("animationend"), fu = wl("animationiteration"), pu = wl("animationstart"), mu = wl("transitionend"), hu = /* @__PURE__ */ new Map(), Cs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ct(e, t) {
  hu.set(e, t), Qt(t, [e]);
}
for (var Gl = 0; Gl < Cs.length; Gl++) {
  var Kl = Cs[Gl], cf = Kl.toLowerCase(), df = Kl[0].toUpperCase() + Kl.slice(1);
  Ct(cf, "on" + df);
}
Ct(du, "onAnimationEnd");
Ct(fu, "onAnimationIteration");
Ct(pu, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(mu, "onTransitionEnd");
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
var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ff = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function Ns(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ud(r, t, void 0, e), e.currentTarget = null;
}
function gu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], u = a.instance, f = a.currentTarget;
        if (a = a.listener, u !== o && l.isPropagationStopped()) break e;
        Ns(l, a, f), o = u;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], u = a.instance, f = a.currentTarget, a = a.listener, u !== o && l.isPropagationStopped()) break e;
        Ns(l, a, f), o = u;
      }
    }
  }
  if (Gr) throw e = ko, Gr = !1, ko = null, e;
}
function B(e, t) {
  var n = t[zo];
  n === void 0 && (n = t[zo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (yu(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), yu(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function Jn(e) {
  if (!e[_r]) {
    e[_r] = !0, Ea.forEach(function(n) {
      n !== "selectionchange" && (ff.has(n) || bl(n, !1, e), bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || (t[_r] = !0, bl("selectionchange", !1, t));
  }
}
function yu(e, t, n, r) {
  switch (eu(t)) {
    case 1:
      var l = Cd;
      break;
    case 4:
      l = Nd;
      break;
    default:
      l = mi;
  }
  n = l.bind(null, t, n, e), l = void 0, !So || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Yl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var a = r.stateNode.containerInfo;
      if (a === l || a.nodeType === 8 && a.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var u = i.tag;
        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        i = i.return;
      }
      for (; a !== null; ) {
        if (i = zt(a), i === null) return;
        if (u = i.tag, u === 5 || u === 6) {
          r = o = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Ua(function() {
    var f = o, y = ci(n), g = [];
    e: {
      var m = hu.get(e);
      if (m !== void 0) {
        var E = gi, x = e;
        switch (e) {
          case "keypress":
            if (Or(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = Vd;
            break;
          case "focusin":
            x = "focus", E = Ql;
            break;
          case "focusout":
            x = "blur", E = Ql;
            break;
          case "beforeblur":
          case "afterblur":
            E = Ql;
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
            E = ms;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Id;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Bd;
            break;
          case du:
          case fu:
          case pu:
            E = zd;
            break;
          case mu:
            E = Gd;
            break;
          case "scroll":
            E = jd;
            break;
          case "wheel":
            E = bd;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Rd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = gs;
        }
        var k = (t & 4) !== 0, P = !k && e === "scroll", c = k ? m !== null ? m + "Capture" : null : m;
        k = [];
        for (var d = f, p; d !== null; ) {
          p = d;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, c !== null && (w = Hn(d, c), w != null && k.push(Zn(d, w, p)))), P) break;
          d = d.return;
        }
        0 < k.length && (m = new E(m, x, null, n, y), g.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", m && n !== wo && (x = n.relatedTarget || n.fromElement) && (zt(x) || x[rt])) break e;
        if ((E || m) && (m = y.window === y ? y : (m = y.ownerDocument) ? m.defaultView || m.parentWindow : window, E ? (x = n.relatedTarget || n.toElement, E = f, x = x ? zt(x) : null, x !== null && (P = Wt(x), x !== P || x.tag !== 5 && x.tag !== 6) && (x = null)) : (E = null, x = f), E !== x)) {
          if (k = ms, w = "onMouseLeave", c = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (k = gs, w = "onPointerLeave", c = "onPointerEnter", d = "pointer"), P = E == null ? m : Xt(E), p = x == null ? m : Xt(x), m = new k(w, d + "leave", E, n, y), m.target = P, m.relatedTarget = p, w = null, zt(y) === f && (k = new k(c, d + "enter", x, n, y), k.target = p, k.relatedTarget = P, w = k), P = w, E && x) t: {
            for (k = E, c = x, d = 0, p = k; p; p = Bt(p)) d++;
            for (p = 0, w = c; w; w = Bt(w)) p++;
            for (; 0 < d - p; ) k = Bt(k), d--;
            for (; 0 < p - d; ) c = Bt(c), p--;
            for (; d--; ) {
              if (k === c || c !== null && k === c.alternate) break t;
              k = Bt(k), c = Bt(c);
            }
            k = null;
          }
          else k = null;
          E !== null && js(g, m, E, k, !1), x !== null && P !== null && js(g, P, x, k, !0);
        }
      }
      e: {
        if (m = f ? Xt(f) : window, E = m.nodeName && m.nodeName.toLowerCase(), E === "select" || E === "input" && m.type === "file") var I = tf;
        else if (ws(m)) if (iu) I = of;
        else {
          I = rf;
          var v = nf;
        }
        else (E = m.nodeName) && E.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (I = lf);
        if (I && (I = I(e, f))) {
          ou(g, I, n, y);
          break e;
        }
        v && v(e, m, f), e === "focusout" && (v = m._wrapperState) && v.controlled && m.type === "number" && mo(m, "number", m.value);
      }
      switch (v = f ? Xt(f) : window, e) {
        case "focusin":
          (ws(v) || v.contentEditable === "true") && (bt = v, No = f, An = null);
          break;
        case "focusout":
          An = No = bt = null;
          break;
        case "mousedown":
          jo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          jo = !1, Es(g, n, y);
          break;
        case "selectionchange":
          if (uf) break;
        case "keydown":
        case "keyup":
          Es(g, n, y);
      }
      var j;
      if (vi) e: {
        switch (e) {
          case "compositionstart":
            var h = "onCompositionStart";
            break e;
          case "compositionend":
            h = "onCompositionEnd";
            break e;
          case "compositionupdate":
            h = "onCompositionUpdate";
            break e;
        }
        h = void 0;
      }
      else Kt ? ru(e, n) && (h = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (h = "onCompositionStart");
      h && (nu && n.locale !== "ko" && (Kt || h !== "onCompositionStart" ? h === "onCompositionEnd" && Kt && (j = tu()) : (pt = y, hi = "value" in pt ? pt.value : pt.textContent, Kt = !0)), v = Jr(f, h), 0 < v.length && (h = new hs(h, e, null, n, y), g.push({ event: h, listeners: v }), j ? h.data = j : (j = lu(n), j !== null && (h.data = j)))), (j = Xd ? Jd(e, n) : Zd(e, n)) && (f = Jr(f, "onBeforeInput"), 0 < f.length && (y = new hs("onBeforeInput", "beforeinput", null, n, y), g.push({ event: y, listeners: f }), y.data = j));
    }
    gu(g, t);
  });
}
function Zn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Hn(e, n), o != null && r.unshift(Zn(e, o, l)), o = Hn(e, t), o != null && r.push(Zn(e, o, l))), e = e.return;
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
function js(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, u = a.alternate, f = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && f !== null && (a = f, l ? (u = Hn(n, o), u != null && i.unshift(Zn(n, u, a))) : l || (u = Hn(n, o), u != null && i.push(Zn(n, u, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var pf = /\r\n?/g, mf = /\u0000|\uFFFD/g;
function Ts(e) {
  return (typeof e == "string" ? e : "" + e).replace(pf, `
`).replace(mf, "");
}
function Er(e, t, n) {
  if (t = Ts(t), Ts(e) !== t && n) throw Error(N(425));
}
function Zr() {
}
var To = null, Io = null;
function Lo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Po = typeof setTimeout == "function" ? setTimeout : void 0, hf = typeof clearTimeout == "function" ? clearTimeout : void 0, Is = typeof Promise == "function" ? Promise : void 0, gf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Is < "u" ? function(e) {
  return Is.resolve(null).then(e).catch(yf);
} : Po;
function yf(e) {
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
        e.removeChild(l), bn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  bn(t);
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
function Ls(e) {
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
var xn = Math.random().toString(36).slice(2), be = "__reactFiber$" + xn, qn = "__reactProps$" + xn, rt = "__reactContainer$" + xn, zo = "__reactEvents$" + xn, vf = "__reactListeners$" + xn, wf = "__reactHandles$" + xn;
function zt(e) {
  var t = e[be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[rt] || n[be]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ls(e); e !== null; ) {
        if (n = e[be]) return n;
        e = Ls(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ur(e) {
  return e = e[be] || e[rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function xl(e) {
  return e[qn] || null;
}
var Mo = [], Jt = -1;
function Nt(e) {
  return { current: e };
}
function H(e) {
  0 > Jt || (e.current = Mo[Jt], Mo[Jt] = null, Jt--);
}
function W(e, t) {
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
function qr() {
  H(ke), H(me);
}
function Ps(e, t, n) {
  if (me.current !== Et) throw Error(N(168));
  W(me, t), W(ke, n);
}
function vu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, nd(e) || "Unknown", l));
  return X({}, n, r);
}
function el(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Et, Dt = me.current, W(me, e), W(ke, ke.current), !0;
}
function zs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? (e = vu(e, t, Dt), r.__reactInternalMemoizedMergedChildContext = e, H(ke), H(me), W(me, e)) : H(ke), W(ke, n);
}
var Ze = null, Sl = !1, Jl = !1;
function wu(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
function xf(e) {
  Sl = !0, wu(e);
}
function jt() {
  if (!Jl && Ze !== null) {
    Jl = !0;
    var e = 0, t = V;
    try {
      var n = Ze;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ze = null, Sl = !1;
    } catch (l) {
      throw Ze !== null && (Ze = Ze.slice(e + 1)), Ba(di, jt), l;
    } finally {
      V = t, Jl = !1;
    }
  }
  return null;
}
var Zt = [], qt = 0, tl = null, nl = 0, Pe = [], ze = 0, At = null, qe = 1, et = "";
function Lt(e, t) {
  Zt[qt++] = nl, Zt[qt++] = tl, tl = e, nl = t;
}
function xu(e, t, n) {
  Pe[ze++] = qe, Pe[ze++] = et, Pe[ze++] = At, At = e;
  var r = qe;
  e = et;
  var l = 32 - We(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - We(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, qe = 1 << 32 - We(t) + l | n << l | r, et = o + e;
  } else qe = 1 << o | n << l | r, et = e;
}
function xi(e) {
  e.return !== null && (Lt(e, 1), xu(e, 1, 0));
}
function Si(e) {
  for (; e === tl; ) tl = Zt[--qt], Zt[qt] = null, nl = Zt[--qt], Zt[qt] = null;
  for (; e === At; ) At = Pe[--ze], Pe[ze] = null, et = Pe[--ze], Pe[ze] = null, qe = Pe[--ze], Pe[ze] = null;
}
var je = null, Ne = null, G = !1, Qe = null;
function Su(e, t) {
  var n = Me(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ms(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = vt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, Ne = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = At !== null ? { id: qe, overflow: et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Me(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, Ne = null, !0) : !1;
    default:
      return !1;
  }
}
function Ro(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fo(e) {
  if (G) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!Ms(e, t)) {
        if (Ro(e)) throw Error(N(418));
        t = vt(n.nextSibling);
        var r = je;
        t && Ms(e, t) ? Su(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, je = e);
      }
    } else {
      if (Ro(e)) throw Error(N(418));
      e.flags = e.flags & -4097 | 2, G = !1, je = e;
    }
  }
}
function Rs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  je = e;
}
function Cr(e) {
  if (e !== je) return !1;
  if (!G) return Rs(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Lo(e.type, e.memoizedProps)), t && (t = Ne)) {
    if (Ro(e)) throw ku(), Error(N(418));
    for (; t; ) Su(e, t), t = vt(t.nextSibling);
  }
  if (Rs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
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
  Ne = je = null, G = !1;
}
function ki(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
var Sf = it.ReactCurrentBatchConfig;
function jn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var a = l.refs;
        i === null ? delete a[o] : a[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Nr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Fs(e) {
  var t = e._init;
  return t(e._payload);
}
function _u(e) {
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
  function a(c, d, p, w) {
    return d === null || d.tag !== 6 ? (d = lo(p, c.mode, w), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function u(c, d, p, w) {
    var I = p.type;
    return I === Gt ? y(c, d, p.props.children, w, p.key) : d !== null && (d.elementType === I || typeof I == "object" && I !== null && I.$$typeof === ut && Fs(I) === d.type) ? (w = l(d, p.props), w.ref = jn(c, d, p), w.return = c, w) : (w = Wr(p.type, p.key, p.props, null, c.mode, w), w.ref = jn(c, d, p), w.return = c, w);
  }
  function f(c, d, p, w) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = oo(p, c.mode, w), d.return = c, d) : (d = l(d, p.children || []), d.return = c, d);
  }
  function y(c, d, p, w, I) {
    return d === null || d.tag !== 7 ? (d = Ot(p, c.mode, w, I), d.return = c, d) : (d = l(d, p), d.return = c, d);
  }
  function g(c, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = lo("" + d, c.mode, p), d.return = c, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case hr:
          return p = Wr(d.type, d.key, d.props, null, c.mode, p), p.ref = jn(c, null, d), p.return = c, p;
        case Ht:
          return d = oo(d, c.mode, p), d.return = c, d;
        case ut:
          var w = d._init;
          return g(c, w(d._payload), p);
      }
      if (Pn(d) || kn(d)) return d = Ot(d, c.mode, p, null), d.return = c, d;
      Nr(c, d);
    }
    return null;
  }
  function m(c, d, p, w) {
    var I = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return I !== null ? null : a(c, d, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          return p.key === I ? u(c, d, p, w) : null;
        case Ht:
          return p.key === I ? f(c, d, p, w) : null;
        case ut:
          return I = p._init, m(
            c,
            d,
            I(p._payload),
            w
          );
      }
      if (Pn(p) || kn(p)) return I !== null ? null : y(c, d, p, w, null);
      Nr(c, p);
    }
    return null;
  }
  function E(c, d, p, w, I) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return c = c.get(p) || null, a(d, c, "" + w, I);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case hr:
          return c = c.get(w.key === null ? p : w.key) || null, u(d, c, w, I);
        case Ht:
          return c = c.get(w.key === null ? p : w.key) || null, f(d, c, w, I);
        case ut:
          var v = w._init;
          return E(c, d, p, v(w._payload), I);
      }
      if (Pn(w) || kn(w)) return c = c.get(p) || null, y(d, c, w, I, null);
      Nr(d, w);
    }
    return null;
  }
  function x(c, d, p, w) {
    for (var I = null, v = null, j = d, h = d = 0, F = null; j !== null && h < p.length; h++) {
      j.index > h ? (F = j, j = null) : F = j.sibling;
      var L = m(c, j, p[h], w);
      if (L === null) {
        j === null && (j = F);
        break;
      }
      e && j && L.alternate === null && t(c, j), d = o(L, d, h), v === null ? I = L : v.sibling = L, v = L, j = F;
    }
    if (h === p.length) return n(c, j), G && Lt(c, h), I;
    if (j === null) {
      for (; h < p.length; h++) j = g(c, p[h], w), j !== null && (d = o(j, d, h), v === null ? I = j : v.sibling = j, v = j);
      return G && Lt(c, h), I;
    }
    for (j = r(c, j); h < p.length; h++) F = E(j, c, h, p[h], w), F !== null && (e && F.alternate !== null && j.delete(F.key === null ? h : F.key), d = o(F, d, h), v === null ? I = F : v.sibling = F, v = F);
    return e && j.forEach(function(R) {
      return t(c, R);
    }), G && Lt(c, h), I;
  }
  function k(c, d, p, w) {
    var I = kn(p);
    if (typeof I != "function") throw Error(N(150));
    if (p = I.call(p), p == null) throw Error(N(151));
    for (var v = I = null, j = d, h = d = 0, F = null, L = p.next(); j !== null && !L.done; h++, L = p.next()) {
      j.index > h ? (F = j, j = null) : F = j.sibling;
      var R = m(c, j, L.value, w);
      if (R === null) {
        j === null && (j = F);
        break;
      }
      e && j && R.alternate === null && t(c, j), d = o(R, d, h), v === null ? I = R : v.sibling = R, v = R, j = F;
    }
    if (L.done) return n(
      c,
      j
    ), G && Lt(c, h), I;
    if (j === null) {
      for (; !L.done; h++, L = p.next()) L = g(c, L.value, w), L !== null && (d = o(L, d, h), v === null ? I = L : v.sibling = L, v = L);
      return G && Lt(c, h), I;
    }
    for (j = r(c, j); !L.done; h++, L = p.next()) L = E(j, c, h, L.value, w), L !== null && (e && L.alternate !== null && j.delete(L.key === null ? h : L.key), d = o(L, d, h), v === null ? I = L : v.sibling = L, v = L);
    return e && j.forEach(function(C) {
      return t(c, C);
    }), G && Lt(c, h), I;
  }
  function P(c, d, p, w) {
    if (typeof p == "object" && p !== null && p.type === Gt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          e: {
            for (var I = p.key, v = d; v !== null; ) {
              if (v.key === I) {
                if (I = p.type, I === Gt) {
                  if (v.tag === 7) {
                    n(c, v.sibling), d = l(v, p.props.children), d.return = c, c = d;
                    break e;
                  }
                } else if (v.elementType === I || typeof I == "object" && I !== null && I.$$typeof === ut && Fs(I) === v.type) {
                  n(c, v.sibling), d = l(v, p.props), d.ref = jn(c, v, p), d.return = c, c = d;
                  break e;
                }
                n(c, v);
                break;
              } else t(c, v);
              v = v.sibling;
            }
            p.type === Gt ? (d = Ot(p.props.children, c.mode, w, p.key), d.return = c, c = d) : (w = Wr(p.type, p.key, p.props, null, c.mode, w), w.ref = jn(c, d, p), w.return = c, c = w);
          }
          return i(c);
        case Ht:
          e: {
            for (v = p.key; d !== null; ) {
              if (d.key === v) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(c, d.sibling), d = l(d, p.children || []), d.return = c, c = d;
                break e;
              } else {
                n(c, d);
                break;
              }
              else t(c, d);
              d = d.sibling;
            }
            d = oo(p, c.mode, w), d.return = c, c = d;
          }
          return i(c);
        case ut:
          return v = p._init, P(c, d, v(p._payload), w);
      }
      if (Pn(p)) return x(c, d, p, w);
      if (kn(p)) return k(c, d, p, w);
      Nr(c, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(c, d.sibling), d = l(d, p), d.return = c, c = d) : (n(c, d), d = lo(p, c.mode, w), d.return = c, c = d), i(c)) : n(c, d);
  }
  return P;
}
var pn = _u(!0), Eu = _u(!1), rl = Nt(null), ll = null, en = null, _i = null;
function Ei() {
  _i = en = ll = null;
}
function Ci(e) {
  var t = rl.current;
  H(rl), e._currentValue = t;
}
function Oo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  ll = e, _i = en = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Fe(e) {
  var t = e._currentValue;
  if (_i !== e) if (e = { context: e, memoizedValue: t, next: null }, en === null) {
    if (ll === null) throw Error(N(308));
    en = e, ll.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var Mt = null;
function Ni(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function Cu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ni(t)) : (n.next = l.next, l.next = n), t.interleaved = n, lt(e, r);
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function ji(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Nu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, $ & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, lt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ni(r)) : (t.next = l.next, l.next = t), r.interleaved = t, lt(e, n);
}
function Dr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fi(e, n);
  }
}
function Os(e, t) {
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
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a, f = u.next;
    u.next = null, i === null ? o = f : i.next = f, i = u;
    var y = e.alternate;
    y !== null && (y = y.updateQueue, a = y.lastBaseUpdate, a !== i && (a === null ? y.firstBaseUpdate = f : a.next = f, y.lastBaseUpdate = u));
  }
  if (o !== null) {
    var g = l.baseState;
    i = 0, y = f = u = null, a = o;
    do {
      var m = a.lane, E = a.eventTime;
      if ((r & m) === m) {
        y !== null && (y = y.next = {
          eventTime: E,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var x = e, k = a;
          switch (m = t, E = n, k.tag) {
            case 1:
              if (x = k.payload, typeof x == "function") {
                g = x.call(E, g, m);
                break e;
              }
              g = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = k.payload, m = typeof x == "function" ? x.call(E, g, m) : x, m == null) break e;
              g = X({}, g, m);
              break e;
            case 2:
              ct = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [a] : m.push(a));
      } else E = { eventTime: E, lane: m, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, y === null ? (f = y = E, u = g) : y = y.next = E, i |= m;
      if (a = a.next, a === null) {
        if (a = l.shared.pending, a === null) break;
        m = a, a = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (y === null && (u = g), l.baseState = u, l.firstBaseUpdate = f, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Ut |= i, e.lanes = i, e.memoizedState = g;
  }
}
function Ds(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(N(191, l));
      l.call(r);
    }
  }
}
var cr = {}, Xe = Nt(cr), er = Nt(cr), tr = Nt(cr);
function Rt(e) {
  if (e === cr) throw Error(N(174));
  return e;
}
function Ti(e, t) {
  switch (W(tr, t), W(er, e), W(Xe, cr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : go(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = go(t, e);
  }
  H(Xe), W(Xe, t);
}
function mn() {
  H(Xe), H(er), H(tr);
}
function ju(e) {
  Rt(tr.current);
  var t = Rt(Xe.current), n = go(t, e.type);
  t !== n && (W(er, e), W(Xe, n));
}
function Ii(e) {
  er.current === e && (H(Xe), H(er));
}
var b = Nt(0);
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
var Zl = [];
function Li() {
  for (var e = 0; e < Zl.length; e++) Zl[e]._workInProgressVersionPrimary = null;
  Zl.length = 0;
}
var Ar = it.ReactCurrentDispatcher, ql = it.ReactCurrentBatchConfig, $t = 0, Y = null, re = null, ie = null, sl = !1, $n = !1, nr = 0, kf = 0;
function de() {
  throw Error(N(321));
}
function Pi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!He(e[n], t[n])) return !1;
  return !0;
}
function zi(e, t, n, r, l, o) {
  if ($t = o, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ar.current = e === null || e.memoizedState === null ? Nf : jf, e = n(r, l), $n) {
    o = 0;
    do {
      if ($n = !1, nr = 0, 25 <= o) throw Error(N(301));
      o += 1, ie = re = null, t.updateQueue = null, Ar.current = Tf, e = n(r, l);
    } while ($n);
  }
  if (Ar.current = al, t = re !== null && re.next !== null, $t = 0, ie = re = Y = null, sl = !1, t) throw Error(N(300));
  return e;
}
function Mi() {
  var e = nr !== 0;
  return nr = 0, e;
}
function Ke() {
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
    if (e === null) throw Error(N(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, ie === null ? Y.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function eo(e) {
  var t = Oe(), n = t.queue;
  if (n === null) throw Error(N(311));
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
    var a = i = null, u = null, f = o;
    do {
      var y = f.lane;
      if (($t & y) === y) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var g = {
          lane: y,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (a = u = g, i = r) : u = u.next = g, Y.lanes |= y, Ut |= y;
      }
      f = f.next;
    } while (f !== null && f !== o);
    u === null ? i = r : u.next = a, He(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Y.lanes |= o, Ut |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function to(e) {
  var t = Oe(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    He(o, t.memoizedState) || (Se = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Tu() {
}
function Iu(e, t) {
  var n = Y, r = Oe(), l = t(), o = !He(r.memoizedState, l);
  if (o && (r.memoizedState = l, Se = !0), r = r.queue, Ri(zu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, lr(9, Pu.bind(null, n, r, l, t), void 0, null), se === null) throw Error(N(349));
    $t & 30 || Lu(n, t, l);
  }
  return l;
}
function Lu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Pu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Mu(t) && Ru(e);
}
function zu(e, t, n) {
  return n(function() {
    Mu(t) && Ru(e);
  });
}
function Mu(e) {
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
  var t = lt(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function As(e) {
  var t = Ke();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Cf.bind(null, Y, e), [t.memoizedState, e];
}
function lr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Fu() {
  return Oe().memoizedState;
}
function $r(e, t, n, r) {
  var l = Ke();
  Y.flags |= e, l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r);
}
function kl(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (o = i.destroy, r !== null && Pi(r, i.deps)) {
      l.memoizedState = lr(t, n, o, r);
      return;
    }
  }
  Y.flags |= e, l.memoizedState = lr(1 | t, n, o, r);
}
function $s(e, t) {
  return $r(8390656, 8, e, t);
}
function Ri(e, t) {
  return kl(2048, 8, e, t);
}
function Ou(e, t) {
  return kl(4, 2, e, t);
}
function Du(e, t) {
  return kl(4, 4, e, t);
}
function Au(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function $u(e, t, n) {
  return n = n != null ? n.concat([e]) : null, kl(4, 4, Au.bind(null, t, e), n);
}
function Fi() {
}
function Uu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Vu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Qu(e, t, n) {
  return $t & 21 ? (He(n, t) || (n = Ka(), Y.lanes |= n, Ut |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function _f(e, t) {
  var n = V;
  V = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    V = n, ql.transition = r;
  }
}
function Wu() {
  return Oe().memoizedState;
}
function Ef(e, t, n) {
  var r = St(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bu(e)) Hu(t, n);
  else if (n = Cu(e, t, n, r), n !== null) {
    var l = ye();
    Be(n, e, r, l), Gu(n, t, r);
  }
}
function Cf(e, t, n) {
  var r = St(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bu(e)) Hu(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, a = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = a, He(a, i)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Ni(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Cu(e, t, l, r), n !== null && (l = ye(), Be(n, e, r, l), Gu(n, t, r));
  }
}
function Bu(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y;
}
function Hu(e, t) {
  $n = sl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Gu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fi(e, n);
  }
}
var al = { readContext: Fe, useCallback: de, useContext: de, useEffect: de, useImperativeHandle: de, useInsertionEffect: de, useLayoutEffect: de, useMemo: de, useReducer: de, useRef: de, useState: de, useDebugValue: de, useDeferredValue: de, useTransition: de, useMutableSource: de, useSyncExternalStore: de, useId: de, unstable_isNewReconciler: !1 }, Nf = { readContext: Fe, useCallback: function(e, t) {
  return Ke().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Fe, useEffect: $s, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, $r(
    4194308,
    4,
    Au.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return $r(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return $r(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ke();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ke();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ef.bind(null, Y, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ke();
  return e = { current: e }, t.memoizedState = e;
}, useState: As, useDebugValue: Fi, useDeferredValue: function(e) {
  return Ke().memoizedState = e;
}, useTransition: function() {
  var e = As(!1), t = e[0];
  return e = _f.bind(null, e[1]), Ke().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Y, l = Ke();
  if (G) {
    if (n === void 0) throw Error(N(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(N(349));
    $t & 30 || Lu(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, $s(zu.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, lr(9, Pu.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ke(), t = se.identifierPrefix;
  if (G) {
    var n = et, r = qe;
    n = (r & ~(1 << 32 - We(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = nr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = kf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, jf = {
  readContext: Fe,
  useCallback: Uu,
  useContext: Fe,
  useEffect: Ri,
  useImperativeHandle: $u,
  useInsertionEffect: Ou,
  useLayoutEffect: Du,
  useMemo: Vu,
  useReducer: eo,
  useRef: Fu,
  useState: function() {
    return eo(rr);
  },
  useDebugValue: Fi,
  useDeferredValue: function(e) {
    var t = Oe();
    return Qu(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = eo(rr)[0], t = Oe().memoizedState;
    return [e, t];
  },
  useMutableSource: Tu,
  useSyncExternalStore: Iu,
  useId: Wu,
  unstable_isNewReconciler: !1
}, Tf = { readContext: Fe, useCallback: Uu, useContext: Fe, useEffect: Ri, useImperativeHandle: $u, useInsertionEffect: Ou, useLayoutEffect: Du, useMemo: Vu, useReducer: to, useRef: Fu, useState: function() {
  return to(rr);
}, useDebugValue: Fi, useDeferredValue: function(e) {
  var t = Oe();
  return re === null ? t.memoizedState = e : Qu(t, re.memoizedState, e);
}, useTransition: function() {
  var e = to(rr)[0], t = Oe().memoizedState;
  return [e, t];
}, useMutableSource: Tu, useSyncExternalStore: Iu, useId: Wu, unstable_isNewReconciler: !1 };
function Ue(e, t) {
  if (e && e.defaultProps) {
    t = X({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Do(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _l = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = St(e), o = tt(r, l);
  o.payload = t, n != null && (o.callback = n), t = wt(e, o, l), t !== null && (Be(t, e, l, r), Dr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), l = St(e), o = tt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = wt(e, o, l), t !== null && (Be(t, e, l, r), Dr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = St(e), l = tt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = wt(e, l, r), t !== null && (Be(t, e, r, n), Dr(t, e, r));
} };
function Us(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Xn(n, r) || !Xn(l, o) : !0;
}
function Ku(e, t, n) {
  var r = !1, l = Et, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Fe(o) : (l = _e(t) ? Dt : me.current, r = t.contextTypes, o = (r = r != null) ? dn(e, l) : Et), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _l, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Vs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _l.enqueueReplaceState(t, t.state, null);
}
function Ao(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ji(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Fe(o) : (o = _e(t) ? Dt : me.current, l.context = dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Do(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && _l.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += td(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function no(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $o(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var If = typeof WeakMap == "function" ? WeakMap : Map;
function bu(e, t, n) {
  n = tt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    cl || (cl = !0, Yo = r), $o(e, t);
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
      $o(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    $o(e, t), typeof r != "function" && (xt === null ? xt = /* @__PURE__ */ new Set([this]) : xt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Qs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new If();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Wf.bind(null, e, t, n), t.then(e, e));
}
function Ws(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bs(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tt(-1, 1), t.tag = 2, wt(n, t, 1))), n.lanes |= 1), e);
}
var Lf = it.ReactCurrentOwner, Se = !1;
function he(e, t, n, r) {
  t.child = e === null ? Eu(t, null, n, r) : pn(t, e.child, n, r);
}
function Hs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return an(t, l), r = zi(e, t, n, r, o, l), n = Mi(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (G && n && xi(t), t.flags |= 1, he(e, t, r, l), t.child);
}
function Gs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Wi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Xu(e, t, o, r, l)) : (e = Wr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Xn, n(i, r) && e.ref === t.ref) return ot(e, t, l);
  }
  return t.flags |= 1, e = kt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Xu(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xn(o, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, ot(e, t, l);
  }
  return Uo(e, t, n, r, l);
}
function Ju(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(nn, Ce), Ce |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(nn, Ce), Ce |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, W(nn, Ce), Ce |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, W(nn, Ce), Ce |= r;
  return he(e, t, l, n), t.child;
}
function Zu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Uo(e, t, n, r, l) {
  var o = _e(n) ? Dt : me.current;
  return o = dn(t, o), an(t, l), n = zi(e, t, n, r, o, l), r = Mi(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (G && r && xi(t), t.flags |= 1, he(e, t, n, l), t.child);
}
function Ks(e, t, n, r, l) {
  if (_e(n)) {
    var o = !0;
    el(t);
  } else o = !1;
  if (an(t, l), t.stateNode === null) Ur(e, t), Ku(t, n, r), Ao(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var u = i.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Fe(f) : (f = _e(n) ? Dt : me.current, f = dn(t, f));
    var y = n.getDerivedStateFromProps, g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    g || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== f) && Vs(t, i, r, f), ct = !1;
    var m = t.memoizedState;
    i.state = m, ol(t, r, i, l), u = t.memoizedState, a !== r || m !== u || ke.current || ct ? (typeof y == "function" && (Do(t, n, y, r), u = t.memoizedState), (a = ct || Us(t, n, a, r, m, u, f)) ? (g || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = f, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Nu(e, t), a = t.memoizedProps, f = t.type === t.elementType ? a : Ue(t.type, a), i.props = f, g = t.pendingProps, m = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Fe(u) : (u = _e(n) ? Dt : me.current, u = dn(t, u));
    var E = n.getDerivedStateFromProps;
    (y = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== g || m !== u) && Vs(t, i, r, u), ct = !1, m = t.memoizedState, i.state = m, ol(t, r, i, l);
    var x = t.memoizedState;
    a !== g || m !== x || ke.current || ct ? (typeof E == "function" && (Do(t, n, E, r), x = t.memoizedState), (f = ct || Us(t, n, f, r, m, x, u) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = u, r = f) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vo(e, t, n, r, o, l);
}
function Vo(e, t, n, r, l, o) {
  Zu(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && zs(t, n, !1), ot(e, t, o);
  r = t.stateNode, Lf.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = pn(t, e.child, null, o), t.child = pn(t, null, a, o)) : he(e, t, a, o), t.memoizedState = r.state, l && zs(t, n, !0), t.child;
}
function qu(e) {
  var t = e.stateNode;
  t.pendingContext ? Ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ps(e, t.context, !1), Ti(e, t.containerInfo);
}
function bs(e, t, n, r, l) {
  return fn(), ki(l), t.flags |= 256, he(e, t, n, r), t.child;
}
var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ec(e, t, n) {
  var r = t.pendingProps, l = b.current, o = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), W(b, l & 1), e === null)
    return Fo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Nl(i, r, 0, null), e = Ot(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Wo(n), t.memoizedState = Qo, e) : Oi(t, i));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Pf(e, t, i, r, a, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = kt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = kt(a, o) : (o = Ot(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Wo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Qo, r;
  }
  return o = e.child, e = o.sibling, r = kt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Oi(e, t) {
  return t = Nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function jr(e, t, n, r) {
  return r !== null && ki(r), pn(t, e.child, null, n), e = Oi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Pf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = no(Error(N(422))), jr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Nl({ mode: "visible", children: r.children }, l, 0, null), o = Ot(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && pn(t, e.child, null, i), t.child.memoizedState = Wo(i), t.memoizedState = Qo, o);
  if (!(t.mode & 1)) return jr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(N(419)), r = no(o, r, void 0), jr(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Se || a) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, lt(e, l), Be(r, e, l, -1));
    }
    return Qi(), r = no(Error(N(421))), jr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ne = vt(l.nextSibling), je = t, G = !0, Qe = null, e !== null && (Pe[ze++] = qe, Pe[ze++] = et, Pe[ze++] = At, qe = e.id, et = e.overflow, At = t), t = Oi(t, r.children), t.flags |= 4096, t);
}
function Ys(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Oo(e.return, t, n);
}
function ro(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function tc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (he(e, t, r.children, n), r = b.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ys(e, n, t);
      else if (e.tag === 19) Ys(e, n, t);
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
  if (W(b, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && il(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ro(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && il(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ro(t, !0, n, null, o);
      break;
    case "together":
      ro(t, !1, null, null, void 0);
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
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function zf(e, t, n) {
  switch (t.tag) {
    case 3:
      qu(t), fn();
      break;
    case 5:
      ju(t);
      break;
    case 1:
      _e(t.type) && el(t);
      break;
    case 4:
      Ti(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      W(rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(b, b.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ec(e, t, n) : (W(b, b.current & 1), e = ot(e, t, n), e !== null ? e.sibling : null);
      W(b, b.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return tc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W(b, b.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ju(e, t, n);
  }
  return ot(e, t, n);
}
var nc, Bo, rc, lc;
nc = function(e, t) {
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
Bo = function() {
};
rc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Rt(Xe.current);
    var o = null;
    switch (n) {
      case "input":
        l = fo(e, l), r = fo(e, r), o = [];
        break;
      case "select":
        l = X({}, l, { value: void 0 }), r = X({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ho(e, l), r = ho(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zr);
    }
    yo(n, r);
    var i;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var a = l[f];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Wn.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (a = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== a && (u != null || a != null)) if (f === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
      } else n || (o || (o = []), o.push(
        f,
        n
      )), n = u;
      else f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Wn.hasOwnProperty(f) ? (u != null && f === "onScroll" && B("scroll", e), o || a === u || (o = [])) : (o = o || []).push(f, u));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
lc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!G) switch (e.tailMode) {
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
function Mf(e, t, n) {
  var r = t.pendingProps;
  switch (Si(t), t.tag) {
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
      return _e(t.type) && qr(), fe(t), null;
    case 3:
      return r = t.stateNode, mn(), H(ke), H(me), Li(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Cr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qe !== null && (Zo(Qe), Qe = null))), Bo(e, t), fe(t), null;
    case 5:
      Ii(t);
      var l = Rt(tr.current);
      if (n = t.type, e !== null && t.stateNode != null) rc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return fe(t), null;
        }
        if (e = Rt(Xe.current), Cr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[be] = t, r[qn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Mn.length; l++) B(Mn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              ls(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              is(r, o), B("invalid", r);
          }
          yo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var a = o[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Er(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Er(
              r.textContent,
              a,
              e
            ), l = ["children", "" + a]) : Wn.hasOwnProperty(i) && a != null && i === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              gr(r), os(r, o, !0);
              break;
            case "textarea":
              gr(r), ss(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = za(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[be] = t, e[qn] = r, nc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = vo(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Mn.length; l++) B(Mn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), l = r;
                break;
              case "details":
                B("toggle", e), l = r;
                break;
              case "input":
                ls(e, r), l = fo(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = X({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                is(e, r), l = ho(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            yo(n, l), a = l;
            for (o in a) if (a.hasOwnProperty(o)) {
              var u = a[o];
              o === "style" ? Fa(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ma(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Bn(e, u) : typeof u == "number" && Bn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Wn.hasOwnProperty(o) ? u != null && o === "onScroll" && B("scroll", e) : u != null && ii(e, o, u, i));
            }
            switch (n) {
              case "input":
                gr(e), os(e, r, !1);
                break;
              case "textarea":
                gr(e), ss(e);
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
                typeof l.onClick == "function" && (e.onclick = Zr);
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
      if (e && t.stateNode != null) lc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (n = Rt(tr.current), Rt(Xe.current), Cr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[be] = t, (o = r.nodeValue !== n) && (e = je, e !== null)) switch (e.tag) {
            case 3:
              Er(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Er(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[be] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (H(b), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Ne !== null && t.mode & 1 && !(t.flags & 128)) ku(), fn(), t.flags |= 98560, o = !1;
        else if (o = Cr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(N(317));
            o[be] = t;
          } else fn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), o = !1;
        } else Qe !== null && (Zo(Qe), Qe = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || b.current & 1 ? le === 0 && (le = 3) : Qi())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return mn(), Bo(e, t), e === null && Jn(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return Ci(t.type._context), fe(t), null;
    case 17:
      return _e(t.type) && qr(), fe(t), null;
    case 19:
      if (H(b), o = t.memoizedState, o === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Tn(o, !1);
      else {
        if (le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = il(e), i !== null) {
            for (t.flags |= 128, Tn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return W(b, b.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && q() > gn && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = il(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !G) return fe(t), null;
        } else 2 * q() - o.renderingStartTime > gn && n !== 1073741824 && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = q(), t.sibling = null, n = b.current, W(b, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Vi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Rf(e, t) {
  switch (Si(t), t.tag) {
    case 1:
      return _e(t.type) && qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mn(), H(ke), H(me), Li(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ii(t), null;
    case 13:
      if (H(b), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(N(340));
        fn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(b), null;
    case 4:
      return mn(), null;
    case 10:
      return Ci(t.type._context), null;
    case 22:
    case 23:
      return Vi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tr = !1, pe = !1, Ff = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    J(e, t, r);
  }
  else n.current = null;
}
function Ho(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Xs = !1;
function Of(e, t) {
  if (To = Yr, e = uu(), wi(e)) {
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
        var i = 0, a = -1, u = -1, f = 0, y = 0, g = e, m = null;
        t: for (; ; ) {
          for (var E; g !== n || l !== 0 && g.nodeType !== 3 || (a = i + l), g !== o || r !== 0 && g.nodeType !== 3 || (u = i + r), g.nodeType === 3 && (i += g.nodeValue.length), (E = g.firstChild) !== null; )
            m = g, g = E;
          for (; ; ) {
            if (g === e) break t;
            if (m === n && ++f === l && (a = i), m === o && ++y === r && (u = i), (E = g.nextSibling) !== null) break;
            g = m, m = g.parentNode;
          }
          g = E;
        }
        n = a === -1 || u === -1 ? null : { start: a, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Io = { focusedElem: e, selectionRange: n }, Yr = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
  else for (; M !== null; ) {
    t = M;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var k = x.memoizedProps, P = x.memoizedState, c = t.stateNode, d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Ue(t.type, k), P);
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
          throw Error(N(163));
      }
    } catch (w) {
      J(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return x = Xs, Xs = !1, x;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Ho(t, n, o);
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
function Go(e) {
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
function oc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, oc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[be], delete t[qn], delete t[zo], delete t[vf], delete t[wf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ic(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Js(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ic(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ko(e, t, n), e = e.sibling; e !== null; ) Ko(e, t, n), e = e.sibling;
}
function bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (bo(e, t, n), e = e.sibling; e !== null; ) bo(e, t, n), e = e.sibling;
}
var ae = null, Ve = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) sc(e, t, n), n = n.sibling;
}
function sc(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
    Ye.onCommitFiberUnmount(gl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || tn(n, t);
    case 6:
      var r = ae, l = Ve;
      ae = null, at(e, t, n), ae = r, Ve = l, ae !== null && (Ve ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Ve ? (e = ae, n = n.stateNode, e.nodeType === 8 ? Xl(e.parentNode, n) : e.nodeType === 1 && Xl(e, n), bn(e)) : Xl(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Ve, ae = n.stateNode.containerInfo, Ve = !0, at(e, t, n), ae = r, Ve = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ho(n, t, i), l = l.next;
        } while (l !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (!pe && (tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        J(n, t, a);
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
    n === null && (n = e.stateNode = new Ff()), t.forEach(function(r) {
      var l = Hf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            ae = a.stateNode, Ve = !1;
            break e;
          case 3:
            ae = a.stateNode.containerInfo, Ve = !0;
            break e;
          case 4:
            ae = a.stateNode.containerInfo, Ve = !0;
            break e;
        }
        a = a.return;
      }
      if (ae === null) throw Error(N(160));
      sc(o, i, l), ae = null, Ve = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      J(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ac(t, e), t = t.sibling;
}
function ac(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ae(t, e), Ge(e), r & 4) {
        try {
          Un(3, e, e.return), El(3, e);
        } catch (k) {
          J(e, e.return, k);
        }
        try {
          Un(5, e, e.return);
        } catch (k) {
          J(e, e.return, k);
        }
      }
      break;
    case 1:
      Ae(t, e), Ge(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (Ae(t, e), Ge(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Bn(l, "");
        } catch (k) {
          J(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && o.type === "radio" && o.name != null && La(l, o), vo(a, i);
          var f = vo(a, o);
          for (i = 0; i < u.length; i += 2) {
            var y = u[i], g = u[i + 1];
            y === "style" ? Fa(l, g) : y === "dangerouslySetInnerHTML" ? Ma(l, g) : y === "children" ? Bn(l, g) : ii(l, y, g, f);
          }
          switch (a) {
            case "input":
              po(l, o);
              break;
            case "textarea":
              Pa(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var E = o.value;
              E != null ? rn(l, !!o.multiple, E, !1) : m !== !!o.multiple && (o.defaultValue != null ? rn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : rn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[qn] = o;
        } catch (k) {
          J(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Ae(t, e), Ge(e), r & 4) {
        if (e.stateNode === null) throw Error(N(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          J(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Ae(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        bn(t.containerInfo);
      } catch (k) {
        J(e, e.return, k);
      }
      break;
    case 4:
      Ae(t, e), Ge(e);
      break;
    case 13:
      Ae(t, e), Ge(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || ($i = q())), r & 4 && Zs(e);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (f = pe) || y, Ae(t, e), pe = f) : Ae(t, e), Ge(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !y && e.mode & 1) for (M = e, y = e.child; y !== null; ) {
          for (g = M = y; M !== null; ) {
            switch (m = M, E = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Un(4, m, m.return);
                break;
              case 1:
                tn(m, m.return);
                var x = m.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (k) {
                    J(r, n, k);
                  }
                }
                break;
              case 5:
                tn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  ea(g);
                  continue;
                }
            }
            E !== null ? (E.return = m, M = E) : ea(g);
          }
          y = y.sibling;
        }
        e: for (y = null, g = e; ; ) {
          if (g.tag === 5) {
            if (y === null) {
              y = g;
              try {
                l = g.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = g.stateNode, u = g.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Ra("display", i));
              } catch (k) {
                J(e, e.return, k);
              }
            }
          } else if (g.tag === 6) {
            if (y === null) try {
              g.stateNode.nodeValue = f ? "" : g.memoizedProps;
            } catch (k) {
              J(e, e.return, k);
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
      Ae(t, e), Ge(e), r & 4 && Zs(e);
      break;
    case 21:
      break;
    default:
      Ae(
        t,
        e
      ), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ic(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ""), r.flags &= -33);
          var o = Js(e);
          bo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = Js(e);
          Ko(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      J(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Df(e, t, n) {
  M = e, uc(e);
}
function uc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Tr;
      if (!i) {
        var a = l.alternate, u = a !== null && a.memoizedState !== null || pe;
        a = Tr;
        var f = pe;
        if (Tr = i, (pe = u) && !f) for (M = l; M !== null; ) i = M, u = i.child, i.tag === 22 && i.memoizedState !== null ? ta(l) : u !== null ? (u.return = i, M = u) : ta(l);
        for (; o !== null; ) M = o, uc(o), o = o.sibling;
        M = l, Tr = a, pe = f;
      }
      qs(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, M = o) : qs(e);
  }
}
function qs(e) {
  for (; M !== null; ) {
    var t = M;
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
              var l = t.elementType === t.type ? n.memoizedProps : Ue(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Ds(t, o, r);
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
              Ds(t, i, n);
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
              var f = t.alternate;
              if (f !== null) {
                var y = f.memoizedState;
                if (y !== null) {
                  var g = y.dehydrated;
                  g !== null && bn(g);
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
            throw Error(N(163));
        }
        pe || t.flags & 512 && Go(t);
      } catch (m) {
        J(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function ea(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function ta(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
          } catch (u) {
            J(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              J(t, l, u);
            }
          }
          var o = t.return;
          try {
            Go(t);
          } catch (u) {
            J(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Go(t);
          } catch (u) {
            J(t, i, u);
          }
      }
    } catch (u) {
      J(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, M = a;
      break;
    }
    M = t.return;
  }
}
var Af = Math.ceil, ul = it.ReactCurrentDispatcher, Di = it.ReactCurrentOwner, Re = it.ReactCurrentBatchConfig, $ = 0, se = null, te = null, ue = 0, Ce = 0, nn = Nt(0), le = 0, or = null, Ut = 0, Cl = 0, Ai = 0, Vn = null, xe = null, $i = 0, gn = 1 / 0, Je = null, cl = !1, Yo = null, xt = null, Ir = !1, mt = null, dl = 0, Qn = 0, Xo = null, Vr = -1, Qr = 0;
function ye() {
  return $ & 6 ? q() : Vr !== -1 ? Vr : Vr = q();
}
function St(e) {
  return e.mode & 1 ? $ & 2 && ue !== 0 ? ue & -ue : Sf.transition !== null ? (Qr === 0 && (Qr = Ka()), Qr) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : eu(e.type)), e) : 1;
}
function Be(e, t, n, r) {
  if (50 < Qn) throw Qn = 0, Xo = null, Error(N(185));
  sr(e, n, r), (!($ & 2) || e !== se) && (e === se && (!($ & 2) && (Cl |= n), le === 4 && ft(e, ue)), Ee(e, r), n === 1 && $ === 0 && !(t.mode & 1) && (gn = q() + 500, Sl && jt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  xd(e, t);
  var r = br(e, e === se ? ue : 0);
  if (r === 0) n !== null && cs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && cs(n), t === 1) e.tag === 0 ? xf(na.bind(null, e)) : wu(na.bind(null, e)), gf(function() {
      !($ & 6) && jt();
    }), n = null;
    else {
      switch (ba(r)) {
        case 1:
          n = di;
          break;
        case 4:
          n = Ha;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = Ga;
          break;
        default:
          n = Kr;
      }
      n = yc(n, cc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function cc(e, t) {
  if (Vr = -1, Qr = 0, $ & 6) throw Error(N(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = br(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = $;
    $ |= 2;
    var o = fc();
    (se !== e || ue !== t) && (Je = null, gn = q() + 500, Ft(e, t));
    do
      try {
        Vf();
        break;
      } catch (a) {
        dc(e, a);
      }
    while (!0);
    Ei(), ul.current = o, $ = l, te !== null ? t = 0 : (se = null, ue = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (l = _o(e), l !== 0 && (r = l, t = Jo(e, l))), t === 1) throw n = or, Ft(e, 0), ft(e, r), Ee(e, q()), n;
    if (t === 6) ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !$f(l) && (t = fl(e, r), t === 2 && (o = _o(e), o !== 0 && (r = o, t = Jo(e, o))), t === 1)) throw n = or, Ft(e, 0), ft(e, r), Ee(e, q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Pt(e, xe, Je);
          break;
        case 3:
          if (ft(e, r), (r & 130023424) === r && (t = $i + 500 - q(), 10 < t)) {
            if (br(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Po(Pt.bind(null, e, xe, Je), t);
            break;
          }
          Pt(e, xe, Je);
          break;
        case 4:
          if (ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - We(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Af(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Po(Pt.bind(null, e, xe, Je), r);
            break;
          }
          Pt(e, xe, Je);
          break;
        case 5:
          Pt(e, xe, Je);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ee(e, q()), e.callbackNode === n ? cc.bind(null, e) : null;
}
function Jo(e, t) {
  var n = Vn;
  return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = xe, xe = n, t !== null && Zo(t)), e;
}
function Zo(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function $f(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!He(o(), l)) return !1;
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
  for (t &= ~Ai, t &= ~Cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - We(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function na(e) {
  if ($ & 6) throw Error(N(327));
  un();
  var t = br(e, 0);
  if (!(t & 1)) return Ee(e, q()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _o(e);
    r !== 0 && (t = r, n = Jo(e, r));
  }
  if (n === 1) throw n = or, Ft(e, 0), ft(e, t), Ee(e, q()), n;
  if (n === 6) throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pt(e, xe, Je), Ee(e, q()), null;
}
function Ui(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    $ = n, $ === 0 && (gn = q() + 500, Sl && jt());
  }
}
function Vt(e) {
  mt !== null && mt.tag === 0 && !($ & 6) && un();
  var t = $;
  $ |= 1;
  var n = Re.transition, r = V;
  try {
    if (Re.transition = null, V = 1, e) return e();
  } finally {
    V = r, Re.transition = n, $ = t, !($ & 6) && jt();
  }
}
function Vi() {
  Ce = nn.current, H(nn);
}
function Ft(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, hf(n)), te !== null) for (n = te.return; n !== null; ) {
    var r = n;
    switch (Si(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && qr();
        break;
      case 3:
        mn(), H(ke), H(me), Li();
        break;
      case 5:
        Ii(r);
        break;
      case 4:
        mn();
        break;
      case 13:
        H(b);
        break;
      case 19:
        H(b);
        break;
      case 10:
        Ci(r.type._context);
        break;
      case 22:
      case 23:
        Vi();
    }
    n = n.return;
  }
  if (se = e, te = e = kt(e.current, null), ue = Ce = t, le = 0, or = null, Ai = Cl = Ut = 0, xe = Vn = null, Mt !== null) {
    for (t = 0; t < Mt.length; t++) if (n = Mt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Mt = null;
  }
  return e;
}
function dc(e, t) {
  do {
    var n = te;
    try {
      if (Ei(), Ar.current = al, sl) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        sl = !1;
      }
      if ($t = 0, ie = re = Y = null, $n = !1, nr = 0, Di.current = null, n === null || n.return === null) {
        le = 1, or = t, te = null;
        break;
      }
      e: {
        var o = e, i = n.return, a = n, u = t;
        if (t = ue, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, y = a, g = y.tag;
          if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = y.alternate;
            m ? (y.updateQueue = m.updateQueue, y.memoizedState = m.memoizedState, y.lanes = m.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var E = Ws(i);
          if (E !== null) {
            E.flags &= -257, Bs(E, i, a, o, t), E.mode & 1 && Qs(o, f, t), t = E, u = f;
            var x = t.updateQueue;
            if (x === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(u), t.updateQueue = k;
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Qs(o, f, t), Qi();
              break e;
            }
            u = Error(N(426));
          }
        } else if (G && a.mode & 1) {
          var P = Ws(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), Bs(P, i, a, o, t), ki(hn(u, a));
            break e;
          }
        }
        o = u = hn(u, a), le !== 4 && (le = 2), Vn === null ? Vn = [o] : Vn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var c = bu(o, u, t);
              Os(o, c);
              break e;
            case 1:
              a = u;
              var d = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (xt === null || !xt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Yu(o, a, t);
                Os(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      mc(n);
    } catch (I) {
      t = I, te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fc() {
  var e = ul.current;
  return ul.current = al, e === null ? al : e;
}
function Qi() {
  (le === 0 || le === 3 || le === 2) && (le = 4), se === null || !(Ut & 268435455) && !(Cl & 268435455) || ft(se, ue);
}
function fl(e, t) {
  var n = $;
  $ |= 2;
  var r = fc();
  (se !== e || ue !== t) && (Je = null, Ft(e, t));
  do
    try {
      Uf();
      break;
    } catch (l) {
      dc(e, l);
    }
  while (!0);
  if (Ei(), $ = n, ul.current = r, te !== null) throw Error(N(261));
  return se = null, ue = 0, le;
}
function Uf() {
  for (; te !== null; ) pc(te);
}
function Vf() {
  for (; te !== null && !dd(); ) pc(te);
}
function pc(e) {
  var t = gc(e.alternate, e, Ce);
  e.memoizedProps = e.pendingProps, t === null ? mc(e) : te = t, Di.current = null;
}
function mc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Rf(n, t), n !== null) {
        n.flags &= 32767, te = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, te = null;
        return;
      }
    } else if (n = Mf(n, t, Ce), n !== null) {
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
function Pt(e, t, n) {
  var r = V, l = Re.transition;
  try {
    Re.transition = null, V = 1, Qf(e, t, n, r);
  } finally {
    Re.transition = l, V = r;
  }
  return null;
}
function Qf(e, t, n, r) {
  do
    un();
  while (mt !== null);
  if ($ & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Sd(e, o), e === se && (te = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ir || (Ir = !0, yc(Kr, function() {
    return un(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Re.transition, Re.transition = null;
    var i = V;
    V = 1;
    var a = $;
    $ |= 4, Di.current = null, Of(e, n), ac(n, e), af(Io), Yr = !!To, Io = To = null, e.current = n, Df(n), fd(), $ = a, V = i, Re.transition = o;
  } else e.current = n;
  if (Ir && (Ir = !1, mt = e, dl = l), o = e.pendingLanes, o === 0 && (xt = null), hd(n.stateNode), Ee(e, q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw cl = !1, e = Yo, Yo = null, e;
  return dl & 1 && e.tag !== 0 && un(), o = e.pendingLanes, o & 1 ? e === Xo ? Qn++ : (Qn = 0, Xo = e) : Qn = 0, jt(), null;
}
function un() {
  if (mt !== null) {
    var e = ba(dl), t = Re.transition, n = V;
    try {
      if (Re.transition = null, V = 16 > e ? 16 : e, mt === null) var r = !1;
      else {
        if (e = mt, mt = null, dl = 0, $ & 6) throw Error(N(331));
        var l = $;
        for ($ |= 4, M = e.current; M !== null; ) {
          var o = M, i = o.child;
          if (M.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var f = a[u];
                for (M = f; M !== null; ) {
                  var y = M;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, y, o);
                  }
                  var g = y.child;
                  if (g !== null) g.return = y, M = g;
                  else for (; M !== null; ) {
                    y = M;
                    var m = y.sibling, E = y.return;
                    if (oc(y), y === f) {
                      M = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = E, M = m;
                      break;
                    }
                    M = E;
                  }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var P = k.sibling;
                    k.sibling = null, k = P;
                  } while (k !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, M = i;
          else e: for (; M !== null; ) {
            if (o = M, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Un(9, o, o.return);
            }
            var c = o.sibling;
            if (c !== null) {
              c.return = o.return, M = c;
              break e;
            }
            M = o.return;
          }
        }
        var d = e.current;
        for (M = d; M !== null; ) {
          i = M;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, M = p;
          else e: for (i = d; M !== null; ) {
            if (a = M, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  El(9, a);
              }
            } catch (I) {
              J(a, a.return, I);
            }
            if (a === i) {
              M = null;
              break e;
            }
            var w = a.sibling;
            if (w !== null) {
              w.return = a.return, M = w;
              break e;
            }
            M = a.return;
          }
        }
        if ($ = l, jt(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
          Ye.onPostCommitFiberRoot(gl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      V = n, Re.transition = t;
    }
  }
  return !1;
}
function ra(e, t, n) {
  t = hn(n, t), t = bu(e, t, 1), e = wt(e, t, 1), t = ye(), e !== null && (sr(e, 1, t), Ee(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) ra(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ra(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
        e = hn(n, e), e = Yu(t, e, 1), t = wt(t, e, 1), e = ye(), t !== null && (sr(t, 1, e), Ee(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Wf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (le === 4 || le === 3 && (ue & 130023424) === ue && 500 > q() - $i ? Ft(e, 0) : Ai |= n), Ee(e, t);
}
function hc(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = ye();
  e = lt(e, t), e !== null && (sr(e, t, n), Ee(e, n));
}
function Bf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), hc(e, n);
}
function Hf(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), hc(e, n);
}
var gc;
gc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, zf(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, G && t.flags & 1048576 && xu(t, nl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ur(e, t), e = t.pendingProps;
      var l = dn(t, me.current);
      an(t, n), l = zi(null, t, r, e, l, n);
      var o = Mi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (o = !0, el(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ji(t), l.updater = _l, t.stateNode = l, l._reactInternals = t, Ao(t, r, e, n), t = Vo(null, t, r, !0, o, n)) : (t.tag = 0, G && o && xi(t), he(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ur(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Kf(r), e = Ue(r, e), l) {
          case 0:
            t = Uo(null, t, r, e, n);
            break e;
          case 1:
            t = Ks(null, t, r, e, n);
            break e;
          case 11:
            t = Hs(null, t, r, e, n);
            break e;
          case 14:
            t = Gs(null, t, r, Ue(r.type, e), n);
            break e;
        }
        throw Error(N(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Uo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Ks(e, t, r, l, n);
    case 3:
      e: {
        if (qu(t), e === null) throw Error(N(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Nu(e, t), ol(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = hn(Error(N(423)), t), t = bs(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(N(424)), t), t = bs(e, t, r, n, l);
          break e;
        } else for (Ne = vt(t.stateNode.containerInfo.firstChild), je = t, G = !0, Qe = null, n = Eu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return ju(t), e === null && Fo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Lo(r, l) ? i = null : o !== null && Lo(r, o) && (t.flags |= 32), Zu(e, t), he(e, t, i, n), t.child;
    case 6:
      return e === null && Fo(t), null;
    case 13:
      return ec(e, t, n);
    case 4:
      return Ti(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : he(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Hs(e, t, r, l, n);
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, W(rl, r._currentValue), r._currentValue = i, o !== null) if (He(o.value, i)) {
          if (o.children === l.children && !ke.current) {
            t = ot(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            i = o.child;
            for (var u = a.firstContext; u !== null; ) {
              if (u.context === r) {
                if (o.tag === 1) {
                  u = tt(-1, n & -n), u.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var y = f.pending;
                    y === null ? u.next = u : (u.next = y.next, y.next = u), f.pending = u;
                  }
                }
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Oo(
                  o.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(N(341));
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Oo(i, n, t), i = o.sibling;
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
      return r = t.type, l = Ue(r, t.pendingProps), l = Ue(r.type, l), Gs(e, t, r, l, n);
    case 15:
      return Xu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Ur(e, t), t.tag = 1, _e(r) ? (e = !0, el(t)) : e = !1, an(t, n), Ku(t, r, l), Ao(t, r, l, n), Vo(null, t, r, !0, e, n);
    case 19:
      return tc(e, t, n);
    case 22:
      return Ju(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function yc(e, t) {
  return Ba(e, t);
}
function Gf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Me(e, t, n, r) {
  return new Gf(e, t, n, r);
}
function Wi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Kf(e) {
  if (typeof e == "function") return Wi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ai) return 11;
    if (e === ui) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Me(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Wi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Gt:
      return Ot(n.children, l, o, t);
    case si:
      i = 8, l |= 8;
      break;
    case so:
      return e = Me(12, n, t, l | 2), e.elementType = so, e.lanes = o, e;
    case ao:
      return e = Me(13, n, t, l), e.elementType = ao, e.lanes = o, e;
    case uo:
      return e = Me(19, n, t, l), e.elementType = uo, e.lanes = o, e;
    case ja:
      return Nl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ca:
          i = 10;
          break e;
        case Na:
          i = 9;
          break e;
        case ai:
          i = 11;
          break e;
        case ui:
          i = 14;
          break e;
        case ut:
          i = 16, r = null;
          break e;
      }
      throw Error(N(130, e == null ? e : typeof e, ""));
  }
  return t = Me(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ot(e, t, n, r) {
  return e = Me(7, e, r, t), e.lanes = n, e;
}
function Nl(e, t, n, r) {
  return e = Me(22, e, r, t), e.elementType = ja, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function lo(e, t, n) {
  return e = Me(6, e, null, t), e.lanes = n, e;
}
function oo(e, t, n) {
  return t = Me(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function bf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $l(0), this.expirationTimes = $l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Bi(e, t, n, r, l, o, i, a, u) {
  return e = new bf(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Me(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ji(o), e;
}
function Yf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function vc(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(N(170));
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
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return vu(e, n, t);
  }
  return t;
}
function wc(e, t, n, r, l, o, i, a, u) {
  return e = Bi(n, r, !0, e, l, o, i, a, u), e.context = vc(null), n = e.current, r = ye(), l = St(n), o = tt(r, l), o.callback = t ?? null, wt(n, o, l), e.current.lanes = l, sr(e, l, r), Ee(e, r), e;
}
function jl(e, t, n, r) {
  var l = t.current, o = ye(), i = St(l);
  return n = vc(n), t.context === null ? t.context = n : t.pendingContext = n, t = tt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = wt(l, t, i), e !== null && (Be(e, l, i, o), Dr(e, l, i)), i;
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
function Hi(e, t) {
  la(e, t), (e = e.alternate) && la(e, t);
}
function Xf() {
  return null;
}
var xc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Gi(e) {
  this._internalRoot = e;
}
Tl.prototype.render = Gi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  jl(e, t, null, null);
};
Tl.prototype.unmount = Gi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vt(function() {
      jl(null, e, null, null);
    }), t[rt] = null;
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
    dt.splice(n, 0, e), n === 0 && qa(e);
  }
};
function Ki(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Il(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function oa() {
}
function Jf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = pl(i);
        o.call(f);
      };
    }
    var i = wc(t, r, e, 0, null, !1, !1, "", oa);
    return e._reactRootContainer = i, e[rt] = i.current, Jn(e.nodeType === 8 ? e.parentNode : e), Vt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var f = pl(u);
      a.call(f);
    };
  }
  var u = Bi(e, 0, !1, null, null, !1, !1, "", oa);
  return e._reactRootContainer = u, e[rt] = u.current, Jn(e.nodeType === 8 ? e.parentNode : e), Vt(function() {
    jl(t, u, n, r);
  }), u;
}
function Ll(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var u = pl(i);
        a.call(u);
      };
    }
    jl(t, i, e, l);
  } else i = Jf(n, t, e, l, r);
  return pl(i);
}
Ya = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 && (fi(t, n | 1), Ee(t, q()), !($ & 6) && (gn = q() + 500, jt()));
      }
      break;
    case 13:
      Vt(function() {
        var r = lt(e, 1);
        if (r !== null) {
          var l = ye();
          Be(r, e, 1, l);
        }
      }), Hi(e, 1);
  }
};
pi = function(e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Be(t, e, 134217728, n);
    }
    Hi(e, 134217728);
  }
};
Xa = function(e) {
  if (e.tag === 13) {
    var t = St(e), n = lt(e, t);
    if (n !== null) {
      var r = ye();
      Be(n, e, t, r);
    }
    Hi(e, t);
  }
};
Ja = function() {
  return V;
};
Za = function(e, t) {
  var n = V;
  try {
    return V = e, t();
  } finally {
    V = n;
  }
};
xo = function(e, t, n) {
  switch (t) {
    case "input":
      if (po(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xl(r);
            if (!l) throw Error(N(90));
            Ia(r), po(r, l);
          }
        }
      }
      break;
    case "textarea":
      Pa(e, n);
      break;
    case "select":
      t = n.value, t != null && rn(e, !!n.multiple, t, !1);
  }
};
Aa = Ui;
$a = Vt;
var Zf = { usingClientEntryPoint: !1, Events: [ur, Xt, xl, Oa, Da, Ui] }, In = { findFiberByHostInstance: zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qf = { bundleType: In.bundleType, version: In.version, rendererPackageName: In.rendererPackageName, rendererConfig: In.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: it.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: In.findFiberByHostInstance || Xf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lr.isDisabled && Lr.supportsFiber) try {
    gl = Lr.inject(qf), Ye = Lr;
  } catch {
  }
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zf;
Ie.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ki(t)) throw Error(N(200));
  return Yf(e, t, null, n);
};
Ie.createRoot = function(e, t) {
  if (!Ki(e)) throw Error(N(299));
  var n = !1, r = "", l = xc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Bi(e, 1, !1, null, null, n, !1, r, l), e[rt] = t.current, Jn(e.nodeType === 8 ? e.parentNode : e), new Gi(t);
};
Ie.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = Qa(t), e = e === null ? null : e.stateNode, e;
};
Ie.flushSync = function(e) {
  return Vt(e);
};
Ie.hydrate = function(e, t, n) {
  if (!Il(t)) throw Error(N(200));
  return Ll(null, e, t, !0, n);
};
Ie.hydrateRoot = function(e, t, n) {
  if (!Ki(e)) throw Error(N(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = xc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = wc(t, null, e, 1, n ?? null, l, !1, o, i), e[rt] = t.current, Jn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Tl(t);
};
Ie.render = function(e, t, n) {
  if (!Il(t)) throw Error(N(200));
  return Ll(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function(e) {
  if (!Il(e)) throw Error(N(40));
  return e._reactRootContainer ? (Vt(function() {
    Ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rt] = null;
    });
  }), !0) : !1;
};
Ie.unstable_batchedUpdates = Ui;
Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Il(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Ll(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function Sc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc);
    } catch (e) {
      console.error(e);
    }
}
Sc(), Sa.exports = Ie;
var dr = Sa.exports, kc, ia = dr;
kc = ia.createRoot, ia.hydrateRoot;
window.api = U;
const qo = async (e = 0, t = 30, n = "") => {
  const r = await U.fetchApi(
    `/meld-nexus/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}`
  );
  if (!r.ok)
    throw new Error(`Failed to fetch images: ${r.statusText}`);
  return await r.json();
}, ep = async (e, t) => {
  const n = `/meld-nexus/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await U.fetchApi(n);
  return r.ok ? await r.json() : [];
}, tp = async () => {
  const e = await U.fetchApi("/meld-nexus/search-suggestions");
  return e.ok ? await e.json() : [];
}, _c = async () => {
  const e = await U.fetchApi("/meld-nexus/settings");
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
    "viewer.loop": !0,
    "fullscreen.show_filename": !0,
    "fullscreen.loop": !0,
    "gallery.page_size": 30,
    "viewer.thumbnail_window_size": 15
  };
}, np = async (e, t) => {
  if (!(await U.fetchApi("/meld-nexus/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, rp = async (e, t) => {
  if (!(await U.fetchApi("/meld-nexus/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, lp = async (e, t = 12) => {
  const n = await U.fetchApi(
    `/meld-nexus/suggest-parents?id=${e}&threshold=${t}`
  );
  return n.ok ? await n.json() : [];
}, op = async (e) => {
  const t = await U.fetchApi(`/meld-nexus/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, ip = async (e) => {
  const t = new FormData();
  t.append("image", e), t.append("overwrite", "true");
  const n = await U.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, sp = async (e, t = !0) => {
  const n = await U.fetchApi("/meld-nexus/bulk-delete", {
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
}, Ec = async (e) => {
  const t = await U.fetchApi("/meld-nexus/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return await t.json();
}, ap = async (e, t) => {
  const n = await U.fetchApi(
    `/meld-nexus/folders?type=${e}&path=${encodeURIComponent(t)}`
  );
  return n.ok ? await n.json() : [];
}, up = async (e) => {
  const t = await U.fetchApi("/meld-nexus/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, cp = async () => {
  if (!(await U.fetchApi("/meld-nexus/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, dp = async () => {
  const e = await U.fetchApi("/meld-nexus/favorites");
  return e.ok ? await e.json() : [];
}, fp = async (e, t) => {
  if (!(await U.fetchApi("/meld-nexus/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, sa = async (e) => {
  if (!(await U.fetchApi("/meld-nexus/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, pp = async (e, t) => {
  if (!(await U.fetchApi("/meld-nexus/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  })).ok)
    throw new Error("Failed to update favorite");
}, bi = async () => {
  const e = await U.fetchApi("/meld-nexus/tags");
  return e.ok ? await e.json() : [];
}, mp = async (e) => {
  const t = await U.fetchApi("/meld-nexus/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, hp = async (e) => {
  if (!(await U.fetchApi(`/meld-nexus/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, gp = async (e, t) => {
  const n = await U.fetchApi("/meld-nexus/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, yp = async (e, t) => {
  if (!(await U.fetchApi("/meld-nexus/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, vp = async (e, t, n) => {
  if (!(await U.fetchApi("/meld-nexus/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, wp = async (e) => {
  const t = await U.fetchApi(`/meld-nexus/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, xp = async (e) => {
  const t = await U.fetchApi(`/meld-nexus/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Cc = { exports: {} }, Pl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp = S, kp = Symbol.for("react.element"), _p = Symbol.for("react.fragment"), Ep = Object.prototype.hasOwnProperty, Cp = Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Np = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Ep.call(t, r) && !Np.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: kp, type: e, key: o, ref: i, props: l, _owner: Cp.current };
}
Pl.Fragment = _p;
Pl.jsx = Nc;
Pl.jsxs = Nc;
Cc.exports = Pl;
var s = Cc.exports;
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
const Tp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Q = (e, t) => {
  const n = S.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: a = "",
      children: u,
      ...f
    }, y) => S.createElement(
      "svg",
      {
        ref: y,
        ...jp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${Tp(e)}`, a].join(" "),
        ...f
      },
      [
        ...t.map(([g, m]) => S.createElement(g, m)),
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
const Ip = Q("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = Q("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = Q("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = Q("Box", [
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
const zp = Q("Calendar", [
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
const Mp = Q("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = Q("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = Q("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = Q("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = Q("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = Q("Download", [
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
const ua = Q("Folder", [
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
const Op = Q("Maximize", [
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
const Dp = Q("Minimize", [
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
const Ap = Q("MoreVertical", [
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
const Lc = Q("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = Q("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = Q("PlusCircle", [
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
const Yi = Q("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = Q("RefreshCw", [
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
const yn = Q("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = Q("Settings", [
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
const Qp = Q("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = Q("Star", [
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
const Sn = Q("Tag", [
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
const Xi = Q("Trash2", [
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
const Wp = Q("Type", [
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
const Bp = Q("Upload", [
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
const De = Q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let hl = !1;
const Hp = (e) => {
  hl = e, hl && console.log("[Meld-Flow] Logger initialized in DEV mode.");
}, Gp = (...e) => {
  hl && console.log("[Meld-Flow]", ...e);
}, Kp = (...e) => {
  hl && console.warn("[Meld-Flow]", ...e);
}, bp = (...e) => {
  console.error("[Meld-Flow]", ...e);
}, ge = {
  log: Gp,
  warn: Kp,
  error: bp,
  init: Hp
}, Yp = {
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
    "viewer.loop": !0,
    "fullscreen.show_filename": !0,
    "fullscreen.loop": !0,
    "gallery.page_size": 30,
    "viewer.thumbnail_window_size": 15
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
function Xp(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "SET_IMAGES": {
      const { images: l, total: o, offset: i } = t.payload;
      let a = e.viewerImageId;
      return e.viewerMode === "gallery" && a !== null && !l.some((u) => u.id === a) && (a = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: a,
        pagination: {
          total: o,
          offset: i,
          limit: e.pagination.limit,
          hasMore: i + l.length < o
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: o, offset: i } = t.payload, a = [...e.images, ...l], u = Array.from(
        new Map(a.map((f) => [f.id, f])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: o,
          offset: i,
          hasMore: i + l.length < o
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
      let o = e.lastSelectedId;
      return l.has(t.payload) ? (l.delete(t.payload), o === t.payload && (o = null)) : (l.add(t.payload), o = t.payload), {
        ...e,
        selectedIds: l,
        lastSelectedId: o
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
      ), o = e.images.findIndex(
        (f) => f.id === t.payload
      );
      if (l === -1 || o === -1) return e;
      const [i, a] = [
        Math.min(l, o),
        Math.max(l, o)
      ], u = new Set(e.selectedIds);
      for (let f = i; f <= a; f++)
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
    case "REFRESH":
      return {
        ...e,
        lastUpdated: Date.now()
      };
    case "OPEN_VIEWER": {
      const l = t.payload, o = typeof l == "number" ? l : l.id, i = typeof l == "number" ? "gallery" : l.mode, a = e.viewerMode === "lineage" && i === "lineage" && e.lineageImages.some((u) => u.id === o);
      return {
        ...e,
        viewerImageId: o,
        viewerMode: i,
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
      const o = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || i.length === 0)
        return e;
      const a = i.findIndex(
        (f) => f.id === e.viewerImageId
      );
      if (a === -1 || a === i.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || a === i.length - 1 && !o)
        return e;
      const u = (a + 1) % i.length;
      return {
        ...e,
        viewerImageId: i[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const o = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (f) => f.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && f.has_children)
      );
      if (e.viewerImageId === null || i.length === 0)
        return e;
      const a = i.findIndex(
        (f) => f.id === e.viewerImageId
      );
      if (a === -1 || a === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || a === 0 && !o)
        return e;
      const u = (a - 1 + i.length) % i.length;
      return {
        ...e,
        viewerImageId: i[u].id
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
      }, o = { ...e.pagination };
      return t.payload["gallery.page_size"] !== void 0 && (o.limit = t.payload["gallery.page_size"]), {
        ...e,
        settings: l,
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
const Pc = S.createContext(void 0), Jp = ({
  children: e
}) => {
  const [t, n] = S.useReducer(Xp, Yp), r = S.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    try {
      const u = await qo(
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
        const u = t.images.length, f = await qo(
          u,
          t.pagination.limit,
          t.searchQuery
        );
        n({ type: "APPEND_IMAGES", payload: f });
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
  ]), o = S.useCallback(async () => {
    try {
      const u = await dp();
      n({ type: "SET_FAVORITES", payload: u });
    } catch (u) {
      ge.error("Failed to load favorites", u);
    }
  }, []), i = S.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const u = Array.from(t.selectedIds), f = `Are you sure you want to delete the selected ${u.length} images?

[WARNING]
Physical files will also be permanently deleted. This operation cannot be undone.`;
    if (window.confirm(f)) {
      n({ type: "SET_LOADING", payload: !0 });
      try {
        await sp(u, !0), n({ type: "CLEAR_SELECTION" }), await r();
      } catch (y) {
        n({
          type: "SET_ERROR",
          payload: y instanceof Error ? y.message : String(y)
        });
      }
    }
  }, [t.selectedIds, r]), a = S.useCallback(
    async (u, f) => {
      try {
        await np(u, f), n({ type: "SET_SETTINGS", payload: { [u]: f } });
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
        const f = await _c();
        n({ type: "SET_SETTINGS", payload: f });
      } catch (f) {
        ge.error("Failed to load settings", f);
      }
    })();
  }, []), S.useEffect(() => {
    o();
  }, [o]), S.useEffect(() => {
    const u = () => {
      r();
    }, f = (g) => {
      const m = g.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: m }
      });
    }, y = (g) => {
      const m = g.detail;
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
    return window.addEventListener("meld-nexus-refresh", u), window.addEventListener("meld-nexus-scan-progress", f), window.addEventListener("meld-nexus-scan-finished", y), () => {
      window.removeEventListener("meld-nexus-refresh", u), window.removeEventListener(
        "meld-nexus-scan-progress",
        f
      ), window.removeEventListener(
        "meld-nexus-scan-finished",
        y
      );
    };
  }, [r, t.scanStatus.progress.total]), S.useEffect(() => {
    r();
  }, [r]), /* @__PURE__ */ s.jsx(
    Pc.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: r,
        loadMoreImages: l,
        refreshFavorites: o,
        deleteSelected: i,
        updateSetting: a
      },
      children: e
    }
  );
}, st = () => {
  const e = S.useContext(Pc);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Zp = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = S.useState(!1), o = S.useRef(null);
  return S.useEffect(() => {
    const i = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), a = o.current;
    return a && i.observe(a), () => {
      a && i.unobserve(a);
    };
  }, [n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: o,
      style: {
        minHeight: r ? "auto" : `${t}px`,
        width: "100%",
        containIntrinsicSize: `auto ${t}px`,
        contentVisibility: "auto"
      },
      children: r ? e : null
    }
  );
}, qp = () => {
  const { state: e, dispatch: t, deleteSelected: n } = st(), r = e.selectedIds.size;
  if (r === 0) return null;
  const l = () => {
    const o = e.images.filter(
      (a) => e.selectedIds.has(a.id)
    ), i = /* @__PURE__ */ new Set();
    for (const a of o)
      if (a.tags)
        for (const u of a.tags)
          i.add(u);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(i)
      }
    });
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-bulk-bar", children: [
    /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
      r,
      " items selected"
    ] }),
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
        onClick: l,
        children: [
          /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
        onClick: n,
        children: [
          /* @__PURE__ */ s.jsx(
            Xi,
            {
              size: 16,
              style: { marginRight: "8px", verticalAlign: "middle" }
            }
          ),
          "Delete"
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
          /* @__PURE__ */ s.jsx(De, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    )
  ] });
}, em = ({ image: e }) => {
  const { state: t, dispatch: n } = st(), r = t.selectedIds.has(e.id), [l, o] = S.useState(null), [i, a] = S.useState(!1), [u, f] = S.useState(null), [y, g] = S.useState(!1), m = S.useRef(null), E = async (h, F, L = !1) => {
    try {
      await navigator.clipboard.writeText(h), L ? (g(!0), setTimeout(() => g(!1), 2e3)) : (f(F), setTimeout(() => f(null), 2e3));
    } catch (R) {
      console.error("Failed to copy text: ", R);
    }
  };
  S.useEffect(() => {
    const h = (F) => {
      m.current && !m.current.contains(F.target) && a(!1);
    };
    return i && document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [i]);
  const x = (h, F = 0) => {
    if (F >= 5) return [];
    const L = h.parent_id;
    if (!L && !h.parent_filename) return [];
    const R = L ? t.images.find((T) => T.id === L) : null;
    let C = null;
    if (R ? C = `/api/view?filename=${encodeURIComponent(R.filename)}&type=${R.type || "output"}${R.subfolder ? `&subfolder=${encodeURIComponent(R.subfolder)}` : ""}` : L && h.parent_filename && (C = `/api/view?filename=${encodeURIComponent(h.parent_filename)}&type=${h.parent_type || "output"}${h.parent_subfolder ? `&subfolder=${encodeURIComponent(h.parent_subfolder)}` : ""}`), !C && !R) return [];
    const _ = {
      id: L || null,
      imgSrc: C
    };
    return R ? [_, ...x(R, F + 1)] : [_];
  }, k = x(e), P = e.subfolder ? `${e.subfolder}/${e.filename}` : e.filename, c = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`, d = (h) => {
    h.shiftKey ? (h.preventDefault(), h.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : h.ctrlKey || h.metaKey || t.selectedIds.size > 0 ? (h.preventDefault(), h.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
  }, p = (h) => {
    h.shiftKey ? (h.preventDefault(), h.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : n({ type: "TOGGLE_SELECT", payload: e.id });
  }, w = (h) => {
    (h.shiftKey || h.ctrlKey || h.metaKey || t.selectedIds.size > 0) && h.preventDefault();
  }, I = (h) => {
    (h.key === "Enter" || h.key === " ") && (h.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
  }, v = async () => {
    try {
      const h = await wp(e.id);
      if (!h.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        h.workflow
      ), console.log("Workflow restored successfully from Meld Nexus");
    } catch (h) {
      console.error("Error restoring workflow:", h), alert("Failed to restore workflow.");
    }
  }, j = async () => {
    try {
      const h = await xp(e.id), F = "MeldUnifiedLoader", L = window.app, C = window.LiteGraph.createNode(F);
      if (!C) {
        console.error(`Node type ${F} not found.`), alert(
          `Node type ${F} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const _ = {
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
      if (C.widgets) {
        for (const [ne, z] of Object.entries(_)) {
          const O = h[ne];
          if (O != null) {
            const D = C.widgets.find(
              (K) => K.name === z
            );
            D && (D.value = O);
          }
        }
        const ee = C.widgets.find(
          (ne) => ne.name === "control_after_generate"
        );
        ee && (ee.value = "fixed");
      }
      const T = L.canvas.ds.offset, Z = L.canvas.ds.scale;
      C.pos = [(-T[0] + 400) / Z, (-T[1] + 300) / Z], L.graph.add(C), L.canvas.selectNode(C), L.canvas.centerOnNode(C);
    } catch (h) {
      console.error("Error adding Unified Loader:", h), alert("Failed to load settings.");
    }
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
      onClick: p,
      onMouseDown: w,
      onKeyDown: I,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
          "img",
          {
            src: c,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            onMouseDown: w,
            onClick: (h) => {
              h.stopPropagation(), d(h);
            }
          }
        ) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
          t.settings["sidebar.show_filename"] && /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__filename", children: P }),
          e.width && e.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__dimensions", children: [
            e.width,
            " x ",
            e.height
          ] }),
          t.settings["gallery.show_parent_image"] && k.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: k.map(
              (h, F) => h.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: h.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (L) => {
                    L.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: { id: h.id || e.id, mode: "lineage" }
                    });
                  },
                  title: F === 0 ? "Source" : F === 1 ? "Grand-Source" : `Ancestor (S${F + 1})`,
                  alt: "source thumb"
                },
                h.id || F
              )
            ) })
          ] }),
          t.settings["sidebar.show_model_name"] && /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
              onClick: (h) => {
                h.stopPropagation(), o({
                  title: "Model",
                  text: e.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (h) => {
                      h.stopPropagation(), E(e.model_name || "-", "Model");
                    },
                    children: u === "Model" ? "Copied!" : "Model"
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
              onClick: (h) => {
                h.stopPropagation(), o({
                  title: "Positive Prompt",
                  text: e.positive_prompt || e.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (h) => {
                      h.stopPropagation(), E(
                        e.positive_prompt || e.positive || "-",
                        "Positive"
                      );
                    },
                    children: u === "Positive" ? "Copied!" : "Positive"
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
              onClick: (h) => {
                h.stopPropagation(), o({
                  title: "Negative Prompt",
                  text: e.negative_prompt || e.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: (h) => {
                      h.stopPropagation(), E(
                        e.negative_prompt || e.negative || "-",
                        "Negative"
                      );
                    },
                    children: u === "Negative" ? "Copied!" : "Negative"
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
              onClick: (h) => {
                h.stopPropagation(), n({
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
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((h, F) => /* @__PURE__ */ s.jsx("span", { className: "meld-image-card__tag", children: h }, `${h}-${F}`)) : /* @__PURE__ */ s.jsx(
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
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: m, children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (h) => {
                h.stopPropagation(), a(!i);
              },
              title: "Menu",
              children: /* @__PURE__ */ s.jsx(Ap, { size: 16 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-image-card__menu-btn",
              onClick: (h) => {
                h.stopPropagation(), j();
              },
              title: "Add Unified Loader",
              children: /* @__PURE__ */ s.jsx(aa, { size: 16 })
            }
          ),
          i && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu", children: [
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (h) => {
                  h.stopPropagation(), j(), a(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(aa, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add Unified Loader" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (h) => {
                  h.stopPropagation(), v(), a(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(ml, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Restore Full Workflow" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (h) => {
                  h.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: { type: "parent_selection", imageId: e.id }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(Up, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Add source image" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-image-card__menu-item",
                onClick: (h) => {
                  h.stopPropagation(), n({
                    type: "OPEN_MODAL",
                    payload: {
                      type: "tag_edit",
                      imageIds: [e.id],
                      tags: e.tags || []
                    }
                  }), a(!1);
                },
                children: [
                  /* @__PURE__ */ s.jsx(Sn, { size: 14 }),
                  /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
                ]
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "meld-prompt-popup-overlay",
            onClick: (h) => {
              h.stopPropagation(), o(null);
            },
            children: /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: "meld-prompt-popup-content",
                onClick: (h) => h.stopPropagation(),
                children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
                    /* @__PURE__ */ s.jsx("span", { children: l.title }),
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        style: { display: "flex", alignItems: "center", gap: "10px" },
                        children: [
                          y ? /* @__PURE__ */ s.jsx(
                            jc,
                            {
                              size: 18,
                              style: { color: "var(--meld-success-color)" }
                            }
                          ) : /* @__PURE__ */ s.jsx(
                            Rp,
                            {
                              className: "meld-prompt-popup-copy",
                              size: 18,
                              onClick: () => E(l.text, "", !0)
                            }
                          ),
                          /* @__PURE__ */ s.jsx(
                            De,
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
                  /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup-text", children: l.text })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, zc = S.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, o = typeof n.parent_id == "number" && n.parent_id === e.id, i = typeof e.parent_id == "number" && e.parent_id === n.id, a = `/api/view?filename=${encodeURIComponent(e.filename)}&type=${e.type || "output"}${e.subfolder ? `&subfolder=${encodeURIComponent(e.subfolder)}` : ""}`;
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${o ? "meld-viewer-thumbnail--parent" : ""} ${i ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
          // Default to gallery mode when clicking a thumbnail
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: a, alt: e.filename }),
          (o || i) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${o ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              children: o ? /* @__PURE__ */ s.jsx(Lp, { size: 12 }) : /* @__PURE__ */ s.jsx(Ip, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
zc.displayName = "ThumbnailItem";
const tm = () => {
  const { state: e, dispatch: t, loadMoreImages: n } = st(), { viewerImageId: r, images: l, viewerMode: o, lineageImages: i } = e, [a, u] = S.useState(!1), [f, y] = S.useState(!1), [g, m] = S.useState(!1), E = S.useRef(null), x = S.useMemo(() => o === "lineage" ? i : l.filter(
    (v) => v.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && v.has_children)
  ), [o, i, l, e.settings]), k = S.useMemo(() => r === null ? -1 : x.findIndex((v) => v.id === r), [x, r]), P = S.useMemo(() => {
    if (k === -1) return [];
    const v = e.settings["viewer.thumbnail_window_size"], j = Math.floor(v / 2);
    let h = Math.max(0, k - j);
    const F = Math.min(x.length, h + v);
    return F === x.length && (h = Math.max(0, F - v)), x.slice(h, F).map((L, R) => ({
      img: L,
      absIndex: h + R
    }));
  }, [
    x,
    k,
    e.settings["viewer.thumbnail_window_size"]
  ]), c = (o === "lineage" && i.length > 0 ? i : l).find((v) => v.id === r), d = S.useCallback(
    (v) => {
      v && "stopPropagation" in v && v.stopPropagation();
      const j = E.current;
      j && (document.fullscreenElement ? document.exitFullscreen() : j.requestFullscreen().catch((h) => {
        console.error(
          `Error attempting to enable full-screen mode: ${h.message}`
        );
      }));
    },
    []
  ), p = S.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: a } });
  }, [t, a]), w = S.useCallback(async () => {
    const v = a ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"];
    if (k === 0 && o === "gallery" && e.pagination.hasMore && !g && v) {
      m(!0);
      try {
        const j = e.pagination.limit, h = e.pagination.total, F = Math.max(0, h - j), L = await qo(
          F,
          j,
          e.searchQuery
        );
        if (t({ type: "APPEND_IMAGES", payload: L }), L.images.length > 0) {
          const R = L.images[L.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: R.id, mode: "gallery" }
          });
        }
      } catch (j) {
        console.error("Failed to jump to end:", j);
      } finally {
        m(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: a } });
  }, [
    k,
    o,
    e.pagination.hasMore,
    e.pagination.total,
    e.pagination.limit,
    e.searchQuery,
    e.settings,
    t,
    g,
    a
  ]);
  if (S.useEffect(() => {
    o !== "gallery" || r === null || e.isLoading || !e.pagination.hasMore || k !== -1 && k >= x.length - 15 && n();
  }, [
    r,
    x.length,
    o,
    e.isLoading,
    e.pagination.hasMore,
    n,
    k
  ]), S.useEffect(() => {
    const v = (h) => {
      r !== null && (h.key === "Escape" ? document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" }) : h.key === "ArrowRight" ? p() : h.key === "ArrowLeft" ? w() : (h.key === "f" || h.key === "F") && d(h));
    }, j = () => {
      u(!!document.fullscreenElement);
    };
    return window.addEventListener("keydown", v), document.addEventListener("fullscreenchange", j), () => {
      window.removeEventListener("keydown", v), document.removeEventListener("fullscreenchange", j);
    };
  }, [r, t, d, p, w]), S.useEffect(() => {
    o === "lineage" && r !== null && i.length === 0 && (y(!0), op(r).then((v) => {
      t({ type: "SET_LINEAGE", payload: v });
    }).catch((v) => {
      console.error("Failed to fetch lineage:", v);
    }).finally(() => {
      y(!1);
    }));
  }, [o, r, i.length, t]), S.useEffect(() => () => {
    document.fullscreenElement && document.exitFullscreen().catch(() => {
    });
  }, []), S.useEffect(() => {
    if (r !== null) {
      const v = document.querySelector(
        ".meld-viewer-thumbnail--active"
      );
      v && v.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center"
      });
    }
  }, [r]), S.useEffect(() => {
    if (r === null || x.length === 0) return;
    const v = x.findIndex(
      (L) => L.id === r
    );
    if (v === -1) return;
    const j = (L) => `/api/view?filename=${encodeURIComponent(L.filename)}&type=${L.type || "output"}${L.subfolder ? `&subfolder=${encodeURIComponent(L.subfolder)}` : ""}`, h = [
      v + 1,
      v + 2,
      v - 1
    ], F = setTimeout(() => {
      for (const L of h)
        if (L >= 0 && L < x.length) {
          const R = x[L], C = new Image();
          C.src = j(R);
        }
    }, 150);
    return () => clearTimeout(F);
  }, [r, x]), !c) return null;
  const I = `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`;
  return dr.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: E,
        className: "meld-viewer-overlay",
        style: { background: "rgba(0, 0, 0, 0.85)" },
        onClick: () => t({ type: "CLOSE_VIEWER" }),
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-viewer-content ${a ? "meld-viewer-content--fullscreen" : ""}`,
            onClick: (v) => v.stopPropagation(),
            children: [
              (!a && e.settings["viewer.show_filename"] || a && e.settings["fullscreen.show_filename"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-info", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-filename", children: c.filename }),
                c.width && c.height && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-dimensions", children: [
                  c.width,
                  " x ",
                  c.height,
                  " px"
                ] })
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn",
                    onClick: d,
                    type: "button",
                    title: a ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                    children: a ? /* @__PURE__ */ s.jsx(Dp, { size: 20 }) : /* @__PURE__ */ s.jsx(Op, { size: 20 })
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                    onClick: () => t({ type: "CLOSE_VIEWER" }),
                    type: "button",
                    title: "Close (Esc)",
                    children: /* @__PURE__ */ s.jsx(De, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--prev",
                  onClick: w,
                  type: "button",
                  disabled: g,
                  children: /* @__PURE__ */ s.jsx(Tc, { size: 32 })
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                g && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(ml, { className: "animate-spin", size: 48 }) }),
                /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: I,
                    alt: c.filename,
                    className: `meld-viewer-image ${g ? "meld-viewer-image--loading" : ""}`,
                    fetchpriority: "high"
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  className: "meld-viewer-nav meld-viewer-nav--next",
                  onClick: p,
                  type: "button",
                  children: /* @__PURE__ */ s.jsx(Ic, { size: 32 })
                }
              ),
              !a && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-thumbnails", children: [
                f ? /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      padding: "10px",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "Loading lineage..."
                  }
                ) : P.map(({ img: v }) => /* @__PURE__ */ s.jsx(
                  zc,
                  {
                    thumb: v,
                    viewerImageId: r,
                    currentImage: c,
                    dispatch: t
                  },
                  v.id
                )),
                o === "gallery" && e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(ml, { className: "animate-spin", size: 20 }) })
              ] }) })
            ]
          }
        )
      }
    ),
    document.body
  );
}, nm = () => {
  const { state: e, dispatch: t } = st(), { scanStatus: n } = e, [r, l] = S.useState({
    type: "output",
    subfolder: "",
    custom_path: "",
    recursive: !0,
    auto_link_parent: !0,
    tags: []
  }), [o, i] = S.useState([]), [a, u] = S.useState(!1), [f, y] = S.useState([]), [g, m] = S.useState(""), [E, x] = S.useState(!1), k = S.useCallback(async () => {
    if (r.type !== "custom") {
      u(!0);
      try {
        const C = await ap(r.type, r.subfolder);
        i(C);
      } catch (C) {
        console.error("Failed to load folders:", C);
      } finally {
        u(!1);
      }
    }
  }, [r.type, r.subfolder]);
  S.useEffect(() => {
    k();
  }, [k]);
  const P = S.useCallback(async () => {
    x(!0);
    try {
      const C = await bi();
      y(C);
    } catch (C) {
      console.error("Failed to fetch tags:", C);
    } finally {
      x(!1);
    }
  }, []);
  S.useEffect(() => {
    P();
  }, [P]);
  const c = S.useMemo(() => f.filter(
    (C) => C.name.toLowerCase().includes(g.toLowerCase()) && !r.tags.includes(C.name)
  ), [f, g, r.tags]), d = (C) => {
    const _ = C.trim();
    _ && !r.tags.includes(_) && (l({ ...r, tags: [...r.tags, _] }), m(""));
  }, p = (C) => {
    l({ ...r, tags: r.tags.filter((_) => _ !== C) });
  }, w = (C) => {
    C.key === "Enter" && g.trim() && (C.preventDefault(), d(g.trim()));
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
    } catch (C) {
      console.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, v = async () => {
    try {
      await cp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (C) {
      console.error("Failed to cancel scan:", C);
    }
  }, j = (C) => {
    const _ = r.subfolder ? `${r.subfolder}/${C}` : C;
    l({ ...r, subfolder: _ });
  }, h = () => {
    const C = r.subfolder.split("/");
    C.pop(), l({ ...r, subfolder: C.join("/") });
  }, F = () => {
    n.isFinished && t({ type: "SET_SCAN_STATUS", payload: { isFinished: !1 } }), t({ type: "CLOSE_MODAL" });
  }, L = n.progress.phase === "linking", R = L ? 100 : n.progress.total > 0 ? Math.round(
    n.progress.current / n.progress.total * 100
  ) : 0;
  return dr.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: F, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--large",
        onClick: (C) => C.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: F,
                children: /* @__PURE__ */ s.jsx(De, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-scan-status-text", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : L ? /* @__PURE__ */ s.jsx("span", { children: "Linking parent images..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning images..." }) }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-progress-container", children: /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "meld-progress-bar",
                style: { width: `${R}%` }
              }
            ) }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-progress-stats", children: L ? /* @__PURE__ */ s.jsxs("span", { children: [
              "Processing relations: ",
              n.progress.current,
              " /",
              " ",
              n.progress.total
            ] }) : /* @__PURE__ */ s.jsxs("span", { children: [
              n.progress.current,
              " / ",
              n.progress.total
            ] }) }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-actions", children: [
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: F,
                  children: "Run in Background"
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-danger",
                  disabled: n.shouldCancel,
                  onClick: v,
                  children: [
                    /* @__PURE__ */ s.jsx(Qp, { size: 16 }),
                    "Stop Scan"
                  ]
                }
              )
            ] })
          ] }) : n.isFinished ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-finished-icon", children: /* @__PURE__ */ s.jsx(Mp, { size: 64, color: "var(--meld-success)" }) }),
            /* @__PURE__ */ s.jsx("h3", { children: "Import Completed" }),
            /* @__PURE__ */ s.jsxs("p", { children: [
              "Successfully scanned ",
              /* @__PURE__ */ s.jsx("strong", { children: n.totalCount }),
              " ",
              "images.",
              /* @__PURE__ */ s.jsx("br", {}),
              "(",
              /* @__PURE__ */ s.jsx("strong", { children: n.newCount }),
              " new images were added to database)"
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: F,
                style: { minWidth: "120px" },
                children: "Close"
              }
            ) })
          ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-import-container", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-import-sidebar", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                /* @__PURE__ */ s.jsxs(
                  "select",
                  {
                    id: "base-location",
                    value: r.type,
                    onChange: (C) => l({
                      ...r,
                      type: C.target.value,
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
              r.type === "custom" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: "custom-path", children: "Absolute Path" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: "custom-path",
                    type: "text",
                    placeholder: "C:\\path\\to\\images or /path/to/images",
                    value: r.custom_path,
                    onChange: (C) => l({ ...r, custom_path: C.target.value })
                  }
                )
              ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ s.jsx("span", { className: "meld-form-label", children: "Current Path" }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-path-display", children: [
                  /* @__PURE__ */ s.jsxs("span", { children: [
                    r.type,
                    "/"
                  ] }),
                  r.subfolder
                ] })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.recursive,
                    onChange: (C) => l({ ...r, recursive: C.target.checked })
                  }
                ),
                "Recursive Scan"
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.auto_link_parent,
                    onChange: (C) => l({
                      ...r,
                      auto_link_parent: C.target.checked
                    })
                  }
                ),
                "Auto Link Parent"
              ] }) }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-form-group", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: r.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : r.tags.map((C) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                  C,
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-edit-remove",
                      onClick: () => p(C),
                      children: /* @__PURE__ */ s.jsx(De, { size: 12 })
                    }
                  )
                ] }, C)) }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                  /* @__PURE__ */ s.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      id: "import-tags",
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search or create tag...",
                      value: g,
                      onChange: (C) => m(C.target.value),
                      onKeyDown: w
                    }
                  ),
                  g.trim() && !r.tags.includes(g.trim()) && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-add-btn",
                      onClick: () => d(g),
                      children: /* @__PURE__ */ s.jsx(Yi, { size: 14 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: E ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : c.length === 0 ? g && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                  "New tag: ",
                  g
                ] }) : c.map((C) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-suggestion-item",
                    onClick: () => d(C.name),
                    children: C.name
                  },
                  C.id
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
                    /* @__PURE__ */ s.jsx($p, { size: 16 }),
                    "Start Import"
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-import-browser", children: [
              r.type !== "custom" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-browser-header", children: [
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "meld-browser-back",
                      disabled: !r.subfolder,
                      onClick: h,
                      children: [
                        /* @__PURE__ */ s.jsx(Tc, { size: 16 }),
                        "Back"
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsx("span", { className: "meld-browser-title", children: "Browse Folders" })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: a ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : o.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No subfolders found." }) : o.map((C) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-folder-item",
                    onClick: () => j(C),
                    children: [
                      /* @__PURE__ */ s.jsx(ua, { size: 16 }),
                      /* @__PURE__ */ s.jsx("span", { children: C }),
                      /* @__PURE__ */ s.jsx(Ic, { size: 14 })
                    ]
                  },
                  C
                )) })
              ] }),
              r.type === "custom" && /* @__PURE__ */ s.jsxs("div", { className: "meld-browser-info", children: [
                /* @__PURE__ */ s.jsx(ua, { size: 48 }),
                /* @__PURE__ */ s.jsx("p", { children: "Please enter an absolute path in the sidebar." }),
                /* @__PURE__ */ s.jsx(
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
}, rm = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = st(), [l, o] = S.useState([]), [i, a] = S.useState(!0), [u, f] = S.useState(!1), y = t.images.find((c) => c.id === e), g = S.useCallback(async () => {
    a(!0);
    try {
      const c = await lp(e);
      o(c);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      a(!1);
    }
  }, [e]);
  S.useEffect(() => {
    g();
  }, [g]);
  const m = async (c) => {
    try {
      await rp(e, c), await r(), n({ type: "CLOSE_MODAL" });
    } catch (d) {
      console.error("Failed to link parent:", d);
    }
  }, E = async (c) => {
    a(!0);
    try {
      const d = await ip(c), { id: p } = await Ec({
        filename: d.name,
        subfolder: d.subfolder || "",
        type: d.type || "input"
      });
      await m(p);
    } catch (d) {
      console.error("Failed to upload/register image:", d);
    } finally {
      a(!1);
    }
  }, x = (c) => {
    c.preventDefault(), c.stopPropagation(), f(!1);
    const d = c.dataTransfer.files[0];
    d != null && d.type.startsWith("image/") && E(d);
  };
  if (!y) return null;
  const k = l.filter((c) => c.is_source_match), P = l.filter((c) => !c.is_source_match);
  return dr.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              y.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ s.jsx(De, { size: 20 })
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
                onDrop: x,
                children: [
                  /* @__PURE__ */ s.jsx(Bp, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            i ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              k.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: k.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                          alt: c.filename
                        }
                      ),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-info", children: /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: c.filename }) })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                P.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: P.map((c) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "meld-suggestion-card",
                    onClick: () => m(c.id),
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: `/api/view?filename=${encodeURIComponent(c.filename)}&type=${c.type || "output"}${c.subfolder ? `&subfolder=${encodeURIComponent(c.subfolder)}` : ""}`,
                          alt: c.filename
                        }
                      ),
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
    document.body
  );
}, lm = () => {
  const { state: e, dispatch: t, refreshFavorites: n } = st(), [r, l] = S.useState(e.searchQuery), [o, i] = S.useState([]), [a, u] = S.useState(!1), [f, y] = S.useState([]), [g, m] = S.useState(-1), [E, x] = S.useState(!1), [k, P] = S.useState(null), c = S.useRef(null);
  S.useEffect(() => {
    if (k) {
      const _ = setTimeout(() => P(null), 3e3);
      return () => clearTimeout(_);
    }
  }, [k]);
  const d = S.useRef(null), p = S.useRef(e.searchQuery);
  S.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      y([]);
      return;
    }
    !r && !e.searchQuery ? tp().then((_) => {
      y(_);
    }) : y([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), S.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), S.useEffect(() => {
    var _;
    (_ = c.current) == null || _.focus();
  }, []);
  const w = S.useCallback(
    (_, T = !0) => {
      p.current !== _ && (t({ type: "SET_SEARCH_QUERY", payload: _ }), T && u(!1), p.current = _);
    },
    [t]
  );
  S.useEffect(() => {
    const _ = setTimeout(async () => {
      if (r === p.current)
        return;
      if (e.settings["search.realtime_search"] && w(r, !1), !e.settings["search.input_suggest"]) {
        i([]), u(!1);
        return;
      }
      const T = r.split(/\s+/), Z = T[T.length - 1];
      if (Z) {
        const ee = Z.match(
          /^(pos|neg|model|date|after|before):(.*)$/i
        );
        if (ee) {
          const ne = ee[1].toLowerCase(), z = ee[2], O = await ep(z, ne);
          i(O), u(O.length > 0), m(-1);
        } else
          i([]), u(!1);
      } else
        i([]), u(!1);
    }, 300);
    return () => clearTimeout(_);
  }, [
    r,
    e.settings["search.realtime_search"],
    e.settings["search.input_suggest"],
    w
  ]);
  const I = (_) => {
    _.key === "Enter" ? w(r) : _.key === "Tab" ? a && g >= 0 && (v(o[g]), _.preventDefault()) : _.key === "ArrowDown" ? a && (m((T) => Math.min(T + 1, o.length - 1)), _.preventDefault()) : _.key === "ArrowUp" ? a && (m((T) => Math.max(T - 1, -1)), _.preventDefault()) : _.key === "Escape" && u(!1);
  }, v = (_) => {
    var z;
    const T = r.split(/\s+/);
    T.pop();
    const ee = ["date", "after", "before"].includes(_.type) ? _.value : `"${_.value}"`, ne = `${[...T, `${_.type}:${ee}`].join(" ").trim()} `;
    l(ne), w(ne), i([]), u(!1), (z = c.current) == null || z.focus();
  }, j = () => {
    l(""), w("");
  }, h = async (_, T, Z) => {
    _.stopPropagation();
    const ee = `Are you sure you want to delete the favorite "${Z}"?`;
    if (window.confirm(ee))
      try {
        await sa(T), await n();
      } catch (ne) {
        ge.error("Failed to delete favorite", ne);
      }
  }, F = async (_, T, Z) => {
    _.stopPropagation();
    const ee = window.prompt(
      "Enter a new name for this favorite:",
      Z
    );
    if (!(ee === null || ee === Z))
      try {
        await pp(T, ee || Z), await n();
      } catch (ne) {
        ge.error("Failed to rename favorite", ne);
      }
  }, L = (_, T) => {
    const ee = ["date", "after", "before"].includes(_) ? T : `"${T}"`, ne = `${_}:${ee}`;
    l(ne), w(ne);
  }, R = async () => {
    if (!e.searchQuery || E) return;
    if (e.favorites.some(
      (T) => T.query === e.searchQuery
    )) {
      const T = e.favorites.find((Z) => Z.query === e.searchQuery);
      if (T) {
        x(!0);
        try {
          await sa(T.id), await n(), P("Favorite removed.");
        } catch (Z) {
          console.error("Failed to delete favorite:", Z);
        } finally {
          x(!1);
        }
      }
      return;
    }
    x(!0);
    try {
      await fp(e.searchQuery, e.searchQuery), await n(), P(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (T) {
      console.error("Failed to save favorite:", T);
    } finally {
      x(!1);
    }
  }, C = (_) => {
    switch (_) {
      case "tag":
        return /* @__PURE__ */ s.jsx(Sn, { size: 12 });
      case "model":
        return /* @__PURE__ */ s.jsx(Pp, { size: 12 });
      case "pos":
      case "neg":
        return /* @__PURE__ */ s.jsx(Wp, { size: 12 });
      case "date":
      case "after":
      case "before":
        return /* @__PURE__ */ s.jsx(zp, { size: 12 });
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
              k && /* @__PURE__ */ s.jsx(
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
                  children: k
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
                    /* @__PURE__ */ s.jsx(
                      yn,
                      {
                        size: 18,
                        color: "var(--meld-text-secondary)",
                        style: { marginRight: "10px", flexShrink: 0 }
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        ref: c,
                        type: "text",
                        value: r,
                        onChange: (_) => l(_.target.value),
                        onKeyDown: I,
                        onBlur: () => setTimeout(() => u(!1), 200),
                        onFocus: () => {
                          if (r === p.current) return;
                          const _ = r.split(/\s+/), T = _[_.length - 1];
                          T != null && T.match(/^(pos|neg|model|date|after|before):/i) && u(!0);
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
                        onClick: R,
                        disabled: E,
                        title: e.favorites.some((_) => _.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          ca,
                          {
                            size: 16,
                            color: e.favorites.some((_) => _.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((_) => _.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    r && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: j,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ s.jsx(De, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              a && o.length > 0 && /* @__PURE__ */ s.jsx(
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
                  children: o.map((_, T) => /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      onMouseDown: (Z) => {
                        Z.preventDefault(), v(_);
                      },
                      onMouseEnter: () => m(T),
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        cursor: "pointer",
                        backgroundColor: T === g ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                                children: C(_.type)
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
                                children: _.type
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                style: {
                                  color: "var(--meld-text-color)",
                                  fontSize: "14px"
                                },
                                children: _.value
                              }
                            )
                          ]
                        }
                      )
                    },
                    `${_.type}:${_.value}`
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
            children: f.map((_) => /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                onClick: () => L(_.type, _.value),
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
                onMouseEnter: (T) => {
                  T.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", T.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", T.currentTarget.style.color = "var(--meld-text-color)";
                },
                onMouseLeave: (T) => {
                  T.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", T.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", T.currentTarget.style.color = "var(--meld-text-color)";
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      style: {
                        display: "flex",
                        color: "var(--meld-text-secondary)"
                      },
                      children: C(_.type)
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
                      children: _.type
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
                      children: _.value
                    }
                  )
                ]
              },
              `${_.type}:${_.value}`
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
                    /* @__PURE__ */ s.jsx(ca, { size: 12, fill: "var(--meld-text-secondary)" }),
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
                  children: e.favorites.map((_) => /* @__PURE__ */ s.jsxs(
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
                        l(_.query), w(_.query);
                      },
                      onMouseEnter: (T) => {
                        T.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", T.currentTarget.style.borderColor = "var(--meld-accent-color)", T.currentTarget.style.color = "var(--meld-text-color)";
                      },
                      onMouseLeave: (T) => {
                        T.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", T.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", T.currentTarget.style.color = "var(--meld-text-color)";
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
                                  children: _.name
                                }
                              ),
                              _.name !== _.query && /* @__PURE__ */ s.jsx(
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
                                  children: _.query
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
                                  onClick: (T) => {
                                    T.stopPropagation(), F(T, _.id, _.name);
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
                                  onMouseEnter: (T) => {
                                    T.currentTarget.style.color = "var(--meld-accent-color)", T.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))";
                                  },
                                  onMouseLeave: (T) => {
                                    T.currentTarget.style.color = "var(--meld-text-secondary)", T.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Rename favorite",
                                  children: /* @__PURE__ */ s.jsx(Lc, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ s.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: (T) => {
                                    T.stopPropagation(), h(T, _.id, _.name);
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
                                  onMouseEnter: (T) => {
                                    T.currentTarget.style.color = "var(--meld-danger-color)", T.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,0,0,0.1))";
                                  },
                                  onMouseLeave: (T) => {
                                    T.currentTarget.style.color = "var(--meld-text-secondary)", T.currentTarget.style.backgroundColor = "transparent";
                                  },
                                  title: "Delete favorite",
                                  children: /* @__PURE__ */ s.jsx(Xi, { size: 14 })
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    _.id
                  ))
                }
              )
            ]
          }
        )
      ]
    }
  );
}, om = () => {
  const { state: e, dispatch: t, updateSetting: n } = st(), [r, l] = S.useState("General"), [o, i] = S.useState({
    ...e.settings
  }), [a, u] = S.useState(
    e.settings["gallery.page_size"].toString()
  ), [f, y] = S.useState(e.settings["viewer.thumbnail_window_size"].toString()), g = [
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
      key: "viewer.loop",
      label: "Loop Navigation",
      description: "Loop to the beginning/end when navigating in the viewer.",
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
      key: "fullscreen.show_filename",
      label: "Show Filename",
      description: "Display the filename in fullscreen mode.",
      type: "boolean",
      category: "Full Screen"
    },
    {
      key: "fullscreen.loop",
      label: "Loop Navigation",
      description: "Loop to the beginning/end when navigating in fullscreen.",
      type: "boolean",
      category: "Full Screen"
    }
  ], m = async () => {
    const P = Object.keys(o).filter((c) => o[c] !== e.settings[c]);
    if (P.length > 0)
      for (const c of P)
        await n(c, o[c]);
    t({ type: "CLOSE_MODAL" });
  }, E = (P, c) => {
    i((d) => ({
      ...d,
      [P]: !c
    }));
  }, x = (P, c, d, p) => {
    P === "gallery.page_size" ? u(c) : P === "viewer.thumbnail_window_size" && y(c);
    const w = Number.parseInt(c, 10);
    if (!Number.isNaN(w)) {
      let I = w;
      d !== void 0 && I < d && (I = d), p !== void 0 && I > p && (I = p), i((v) => ({
        ...v,
        [P]: I
      }));
    }
  }, k = g.filter(
    (P) => P.category === r
  );
  return dr.createPortal(
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: m, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (P) => P.stopPropagation(),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: m,
                children: /* @__PURE__ */ s.jsx(De, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-tabs", children: [
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
                className: `meld-tab ${r === "Full Screen" ? "active" : ""}`,
                onClick: () => l("Full Screen"),
                children: "Full Screen"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx("div", { className: "meld-settings-list", children: k.map((P) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: P.label }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: P.description })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__control", children: [
              P.type === "boolean" && /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!o[P.key],
                    onChange: () => E(P.key, !!o[P.key])
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
              ] }),
              P.type === "number" && /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "number",
                  className: "meld-number-input",
                  value: P.key === "gallery.page_size" ? a : P.key === "viewer.thumbnail_window_size" ? f : o[P.key],
                  min: P.min,
                  max: P.max,
                  onChange: (c) => x(
                    P.key,
                    c.target.value,
                    P.min,
                    P.max
                  ),
                  onBlur: () => {
                    P.key === "gallery.page_size" ? u(
                      o["gallery.page_size"].toString()
                    ) : P.key === "viewer.thumbnail_window_size" && y(
                      o["viewer.thumbnail_window_size"].toString()
                    );
                  }
                }
              )
            ] })
          ] }, P.key)) }) })
        ]
      }
    ) }),
    document.body
  );
}, im = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { refreshImages: r } = st(), [l, o] = S.useState([]), [i, a] = S.useState(t), [u, f] = S.useState(""), [y, g] = S.useState(!0), [m, E] = S.useState(!1), x = S.useRef(null), k = e.length > 1, P = S.useCallback(async () => {
    g(!0);
    try {
      const v = await bi();
      o(v);
    } catch (v) {
      console.error("Failed to fetch tags:", v);
    } finally {
      g(!1);
    }
  }, []);
  S.useEffect(() => {
    P();
  }, [P]), S.useEffect(() => {
    x.current && x.current.focus();
  }, []);
  const c = S.useMemo(() => l.filter(
    (v) => v.name.toLowerCase().includes(u.toLowerCase()) && !i.includes(v.name)
  ), [l, u, i]), d = (v) => {
    const j = v.trim();
    j && !i.includes(j) && (a([...i, j]), f(""));
  }, p = (v) => {
    a(i.filter((j) => j !== v));
  }, w = async () => {
    E(!0);
    try {
      if (k) {
        const v = i.filter((h) => !t.includes(h)), j = t.filter(
          (h) => !i.includes(h)
        );
        await vp(e, v, j);
      } else
        await yp(e[0], i);
      await r(), n();
    } catch (v) {
      console.error("Failed to update tags:", v), alert("Failed to update tags.");
    } finally {
      E(!1);
    }
  }, I = (v) => {
    v.key === "Enter" && u.trim() ? (v.preventDefault(), d(u.trim())) : v.key === "Escape" && n();
  };
  return /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (v) => v.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Sn, { size: 18 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: k ? `Edit Tags (${e.length} images)` : "Edit Tags" })
      ] }),
      /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(De, { size: 20 }) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
      k && /* @__PURE__ */ s.jsx(
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
        /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: k ? "Collective Tags" : "Selected Tags" }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: i.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : i.map((v) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
          v,
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-edit-remove",
              onClick: () => p(v),
              children: /* @__PURE__ */ s.jsx(De, { size: 12 })
            }
          )
        ] }, v)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
          /* @__PURE__ */ s.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              ref: x,
              type: "text",
              className: "meld-tag-search-input",
              placeholder: "Search or create new tag...",
              value: u,
              onChange: (v) => f(v.target.value),
              onKeyDown: I
            }
          ),
          u.trim() && !i.includes(u.trim()) && /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-tag-add-btn",
              onClick: () => d(u),
              children: [
                /* @__PURE__ */ s.jsx(Yi, { size: 14 }),
                "Create"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: y ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : c.length === 0 ? u ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : c.map((v) => /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-suggestion-item",
            onClick: () => d(v.name),
            children: v.name
          },
          v.id
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
          onClick: w,
          disabled: m,
          children: m ? "Saving..." : "Save Changes"
        }
      )
    ] })
  ] }) });
}, sm = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = S.useState([]), [l, o] = S.useState(!0), [i, a] = S.useState(""), [u, f] = S.useState(""), [y, g] = S.useState(!1), [m, E] = S.useState(null), [x, k] = S.useState(""), [P, c] = S.useState(!1), d = S.useRef(null), p = S.useCallback(async () => {
    o(!0);
    try {
      const R = await bi();
      r(R);
    } catch (R) {
      console.error("Failed to fetch tags:", R);
    } finally {
      o(!1);
    }
  }, []);
  S.useEffect(() => {
    p();
  }, [p]), S.useEffect(() => {
    m !== null && d.current && (d.current.focus(), d.current.select());
  }, [m]);
  const w = async (R) => {
    R.preventDefault();
    const C = u.trim();
    if (!(!C || y)) {
      if (n.some((_) => _.name.toLowerCase() === C.toLowerCase())) {
        alert(`Tag "${C}" already exists.`);
        return;
      }
      g(!0);
      try {
        await mp(C), f(""), await p();
      } catch (_) {
        console.error("Failed to add tag:", _);
      } finally {
        g(!1);
      }
    }
  }, I = async (R, C) => {
    if (confirm(`Are you sure you want to delete tag "${C}"?`))
      try {
        await hp(R), await p();
      } catch (_) {
        console.error("Failed to delete tag:", _);
      }
  }, v = (R) => {
    E(R.id), k(R.name);
  }, j = () => {
    E(null), k("");
  }, h = async (R) => {
    R.preventDefault();
    const C = x.trim();
    if (!C || m === null || P) return;
    const _ = n.find((T) => T.id === m);
    if (_ && _.name === C) {
      j();
      return;
    }
    if (n.some(
      (T) => T.id !== m && T.name.toLowerCase() === C.toLowerCase()
    )) {
      alert(`Tag "${C}" already exists.`);
      return;
    }
    c(!0);
    try {
      await gp(m, C), j(), await p();
    } catch (T) {
      console.error("Failed to rename tag:", T), alert(T instanceof Error ? T.message : "Failed to rename tag");
    } finally {
      c(!1);
    }
  }, F = (R) => {
    t(`tag:${R}`);
  }, L = S.useMemo(() => n.filter(
    (R) => R.name.toLowerCase().includes(i.toLowerCase())
  ), [n, i]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(Sn, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(De, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: w, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (R) => f(R.target.value),
            disabled: y
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || y,
            children: [
              /* @__PURE__ */ s.jsx(Yi, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(yn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: i,
            onChange: (R) => a(R.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: L.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : L.map((R) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: m === R.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: h,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: x,
                onChange: (C) => k(C.target.value),
                onKeyDown: (C) => C.key === "Escape" && j()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: P || !x.trim(),
                children: /* @__PURE__ */ s.jsx(jc, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: j,
                disabled: P,
                children: /* @__PURE__ */ s.jsx(De, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: R.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => F(R.name),
              children: /* @__PURE__ */ s.jsx(yn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => v(R),
              children: /* @__PURE__ */ s.jsx(Lc, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => I(R.id, R.name),
              children: /* @__PURE__ */ s.jsx(Xi, { size: 14 })
            }
          )
        ] })
      ] }) }, R.id)) })
    ] })
  ] });
}, am = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r } = st(), [l, o] = S.useState("gallery"), [i, a] = S.useState(""), u = e.searchQuery.trim() !== "", f = S.useRef(null), y = e.images.filter(
    (g) => g.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && g.has_children)
  );
  return S.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && y.length === 0 && (ge.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    y.length,
    r
  ]), ge.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: y.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), S.useEffect(() => {
    const g = new IntersectionObserver(
      (E) => {
        E[0].isIntersecting && !e.isLoading && e.pagination.hasMore && (ge.log(
          "GalleryPanel: Load more triggered via IntersectionObserver"
        ), r());
      },
      { threshold: 0, rootMargin: "800px" }
    ), m = f.current;
    return m && g.observe(m), () => {
      m && g.unobserve(m);
    };
  }, [r, e.isLoading, e.pagination.hasMore]), /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery", children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          marginBottom: "15px",
          gap: "10px"
        },
        children: [
          /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      l === "search" ? (e.searchQuery && (a(e.searchQuery), t({ type: "SET_SEARCH_QUERY", payload: "" })), o("gallery")) : (!e.searchQuery && i && t({
                        type: "SET_SEARCH_QUERY",
                        payload: i
                      }), o("search"));
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
                    children: /* @__PURE__ */ s.jsx(yn, { size: 14 })
                  }
                ),
                /* @__PURE__ */ s.jsx(
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
                    children: /* @__PURE__ */ s.jsx(Sn, { size: 14 })
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
                    children: /* @__PURE__ */ s.jsx(Fp, { size: 14 })
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
                      ml,
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
                    children: /* @__PURE__ */ s.jsx(Vp, { size: 14 })
                  }
                )
              ]
            }
          ),
          l === "search" && /* @__PURE__ */ s.jsx("div", { style: { width: "100%" }, children: /* @__PURE__ */ s.jsx(lm, {}) })
        ]
      }
    ),
    e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
    l === "tags" ? /* @__PURE__ */ s.jsx(
      sm,
      {
        onClose: () => o("gallery"),
        onSearch: (g) => {
          t({ type: "SET_SEARCH_QUERY", payload: g }), o("search");
        }
      }
    ) : e.isLoading && y.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : y.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__list", children: y.map((g) => /* @__PURE__ */ s.jsx(Zp, { height: 150, children: /* @__PURE__ */ s.jsx(em, { image: g }) }, g.id)) }),
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: f,
          className: "meld-gallery__load-more",
          style: { height: "20px", margin: "20px 0", textAlign: "center" },
          children: [
            e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
            !e.pagination.hasMore && y.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(qp, {}),
    e.viewerImageId !== null && /* @__PURE__ */ s.jsx(tm, {}),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(rm, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(nm, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(om, {}),
    e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
      im,
      {
        imageIds: e.activeModal.imageIds,
        initialTags: e.activeModal.tags,
        onClose: () => t({ type: "CLOSE_MODAL" })
      }
    )
  ] });
};
da.registerExtension({
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
const zl = document.createElement("link");
zl.rel = "stylesheet";
zl.type = "text/css";
zl.href = "/extensions/ComfyUI-Meld-Flow/js/style.css";
document.head.appendChild(zl);
let Pr = null, $e = null;
da.registerExtension({
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
      const n = await _c();
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
      }, U.addEventListener("meld-nexus-image-saved", () => {
        var n;
        (n = e.ui.meldNexus) == null || n.refresh();
      }), U.addEventListener("meld-nexus-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-progress", { detail: n.detail })
        );
      }), U.addEventListener("meld-nexus-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-nexus-scan-finished", { detail: n.detail })
        ), (r = e.ui.meldNexus) == null || r.refresh(), console.log("Meld Nexus: Import completed.");
      }), U.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Ec({
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
              galleryRoot: Pr,
              galleryContainer: $e
            }), $e || (ge.log(
              "MeldNexus: galleryContainer not found, creating new one"
            ), $e = document.createElement("div"), $e.id = "meld-flow-gallery-container", $e.style.height = "100%", $e.style.width = "100%", $e.style.display = "flex", $e.style.flexDirection = "column"), n.contains($e) || (ge.log("MeldNexus: Appending galleryContainer to el"), n.appendChild($e)), Pr ? ge.log(
              "MeldNexus: Gallery root already exists, React should handle re-render if needed"
            ) : (ge.log("MeldNexus: Creating new gallery root"), Pr = kc($e), Pr.render(
              es.createElement(
                Jp,
                null,
                es.createElement(am)
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
