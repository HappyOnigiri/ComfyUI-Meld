import { api as X } from "/scripts/api.js";
import { app as Qo } from "/scripts/app.js";
function Ld(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ho = { exports: {} }, ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br = Symbol.for("react.element"), Td = Symbol.for("react.portal"), Pd = Symbol.for("react.fragment"), Dd = Symbol.for("react.strict_mode"), Rd = Symbol.for("react.profiler"), zd = Symbol.for("react.provider"), Ad = Symbol.for("react.context"), Od = Symbol.for("react.forward_ref"), Fd = Symbol.for("react.suspense"), $d = Symbol.for("react.memo"), Wd = Symbol.for("react.lazy"), Mi = Symbol.iterator;
function Ud(e) {
  return e === null || typeof e != "object" ? null : (e = Mi && e[Mi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Bo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Go = Object.assign, Ko = {};
function Un(e, t, n) {
  this.props = e, this.context = t, this.refs = Ko, this.updater = n || Bo;
}
Un.prototype.isReactComponent = {};
Un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yo() {
}
Yo.prototype = Un.prototype;
function Ia(e, t, n) {
  this.props = e, this.context = t, this.refs = Ko, this.updater = n || Bo;
}
var ba = Ia.prototype = new Yo();
ba.constructor = Ia;
Go(ba, Un.prototype);
ba.isPureReactComponent = !0;
var Ii = Array.isArray, Xo = Object.prototype.hasOwnProperty, La = { current: null }, qo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jo(e, t, n) {
  var r, l = {}, a = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (a = "" + t.key), t) Xo.call(t, r) && !qo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: br, type: e, key: a, ref: i, props: l, _owner: La.current };
}
function Vd(e, t) {
  return { $$typeof: br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
}
function Qd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var bi = /\/+/g;
function ls(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Qd("" + e.key) : t.toString(36);
}
function el(e, t, n, r, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (a) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case br:
        case Td:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + ls(i, 0) : r, Ii(l) ? (n = "", e != null && (n = e.replace(bi, "$&/") + "/"), el(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Ta(l) && (l = Vd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(bi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ii(e)) for (var o = 0; o < e.length; o++) {
    a = e[o];
    var u = r + ls(a, o);
    i += el(a, t, n, u, l);
  }
  else if (u = Ud(e), typeof u == "function") for (e = u.call(e), o = 0; !(a = e.next()).done; ) a = a.value, u = r + ls(a, o++), i += el(a, t, n, u, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function zr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return el(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function Hd(e) {
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
var Oe = { current: null }, tl = { transition: null }, Bd = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: tl, ReactCurrentOwner: La };
function Zo() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = { map: zr, forEach: function(e, t, n) {
  zr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return zr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return zr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ta(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ee.Component = Un;
ee.Fragment = Pd;
ee.Profiler = Rd;
ee.PureComponent = Ia;
ee.StrictMode = Dd;
ee.Suspense = Fd;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bd;
ee.act = Zo;
ee.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Go({}, e.props), l = e.key, a = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, i = La.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Xo.call(t, u) && !qo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: br, type: e.type, key: l, ref: a, props: r, _owner: i };
};
ee.createContext = function(e) {
  return e = { $$typeof: Ad, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: zd, _context: e }, e.Consumer = e;
};
ee.createElement = Jo;
ee.createFactory = function(e) {
  var t = Jo.bind(null, e);
  return t.type = e, t;
};
ee.createRef = function() {
  return { current: null };
};
ee.forwardRef = function(e) {
  return { $$typeof: Od, render: e };
};
ee.isValidElement = Ta;
ee.lazy = function(e) {
  return { $$typeof: Wd, _payload: { _status: -1, _result: e }, _init: Hd };
};
ee.memo = function(e, t) {
  return { $$typeof: $d, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function(e) {
  var t = tl.transition;
  tl.transition = {};
  try {
    e();
  } finally {
    tl.transition = t;
  }
};
ee.unstable_act = Zo;
ee.useCallback = function(e, t) {
  return Oe.current.useCallback(e, t);
};
ee.useContext = function(e) {
  return Oe.current.useContext(e);
};
ee.useDebugValue = function() {
};
ee.useDeferredValue = function(e) {
  return Oe.current.useDeferredValue(e);
};
ee.useEffect = function(e, t) {
  return Oe.current.useEffect(e, t);
};
ee.useId = function() {
  return Oe.current.useId();
};
ee.useImperativeHandle = function(e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function(e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function(e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
ee.useMemo = function(e, t) {
  return Oe.current.useMemo(e, t);
};
ee.useReducer = function(e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
ee.useRef = function(e) {
  return Oe.current.useRef(e);
};
ee.useState = function(e) {
  return Oe.current.useState(e);
};
ee.useSyncExternalStore = function(e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function() {
  return Oe.current.useTransition();
};
ee.version = "18.3.1";
Ho.exports = ee;
var h = Ho.exports;
const pl = /* @__PURE__ */ Ld(h);
var eu = { exports: {} }, qe = {}, tu = { exports: {} }, nu = {};
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
  function t(b, F) {
    var P = b.length;
    b.push(F);
    e: for (; 0 < P; ) {
      var S = P - 1 >>> 1, A = b[S];
      if (0 < l(A, F)) b[S] = F, b[P] = A, P = S;
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var F = b[0], P = b.pop();
    if (P !== F) {
      b[0] = P;
      e: for (var S = 0, A = b.length, K = A >>> 1; S < K; ) {
        var D = 2 * (S + 1) - 1, V = b[D], Y = D + 1, ce = b[Y];
        if (0 > l(V, P)) Y < A && 0 > l(ce, V) ? (b[S] = ce, b[Y] = P, S = Y) : (b[S] = V, b[D] = P, S = D);
        else if (Y < A && 0 > l(ce, P)) b[S] = ce, b[Y] = P, S = Y;
        else break e;
      }
    }
    return F;
  }
  function l(b, F) {
    var P = b.sortIndex - F.sortIndex;
    return P !== 0 ? P : b.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function() {
      return a.now();
    };
  } else {
    var i = Date, o = i.now();
    e.unstable_now = function() {
      return i.now() - o;
    };
  }
  var u = [], c = [], p = 1, _ = null, v = 3, y = !1, w = !1, k = !1, j = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(b) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= b) r(c), F.sortIndex = F.expirationTime, t(u, F);
      else break;
      F = n(c);
    }
  }
  function g(b) {
    if (k = !1, m(b), !w) if (n(u) !== null) w = !0, L(x);
    else {
      var F = n(c);
      F !== null && G(g, F.startTime - b);
    }
  }
  function x(b, F) {
    w = !1, k && (k = !1, d(I), I = -1), y = !0;
    var P = v;
    try {
      for (m(F), _ = n(u); _ !== null && (!(_.expirationTime > F) || b && !T()); ) {
        var S = _.callback;
        if (typeof S == "function") {
          _.callback = null, v = _.priorityLevel;
          var A = S(_.expirationTime <= F);
          F = e.unstable_now(), typeof A == "function" ? _.callback = A : _ === n(u) && r(u), m(F);
        } else r(u);
        _ = n(u);
      }
      if (_ !== null) var K = !0;
      else {
        var D = n(c);
        D !== null && G(g, D.startTime - F), K = !1;
      }
      return K;
    } finally {
      _ = null, v = P, y = !1;
    }
  }
  var M = !1, C = null, I = -1, O = 5, N = -1;
  function T() {
    return !(e.unstable_now() - N < O);
  }
  function H() {
    if (C !== null) {
      var b = e.unstable_now();
      N = b;
      var F = !0;
      try {
        F = C(!0, b);
      } finally {
        F ? re() : (M = !1, C = null);
      }
    } else M = !1;
  }
  var re;
  if (typeof f == "function") re = function() {
    f(H);
  };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(), B = E.port2;
    E.port1.onmessage = H, re = function() {
      B.postMessage(null);
    };
  } else re = function() {
    j(H, 0);
  };
  function L(b) {
    C = b, M || (M = !0, re());
  }
  function G(b, F) {
    I = j(function() {
      b(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, L(x));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(b) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = v;
    }
    var P = v;
    v = F;
    try {
      return b();
    } finally {
      v = P;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(b, F) {
    switch (b) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        b = 3;
    }
    var P = v;
    v = b;
    try {
      return F();
    } finally {
      v = P;
    }
  }, e.unstable_scheduleCallback = function(b, F, P) {
    var S = e.unstable_now();
    switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? S + P : S) : P = S, b) {
      case 1:
        var A = -1;
        break;
      case 2:
        A = 250;
        break;
      case 5:
        A = 1073741823;
        break;
      case 4:
        A = 1e4;
        break;
      default:
        A = 5e3;
    }
    return A = P + A, b = { id: p++, callback: F, priorityLevel: b, startTime: P, expirationTime: A, sortIndex: -1 }, P > S ? (b.sortIndex = P, t(c, b), n(u) === null && b === n(c) && (k ? (d(I), I = -1) : k = !0, G(g, P - S))) : (b.sortIndex = A, t(u, b), w || y || (w = !0, L(x))), b;
  }, e.unstable_shouldYield = T, e.unstable_wrapCallback = function(b) {
    var F = v;
    return function() {
      var P = v;
      v = F;
      try {
        return b.apply(this, arguments);
      } finally {
        v = P;
      }
    };
  };
})(nu);
tu.exports = nu;
var Gd = tu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd = h, Xe = Gd;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ru = /* @__PURE__ */ new Set(), fr = {};
function cn(e, t) {
  Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) ru.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ts = Object.prototype.hasOwnProperty, Yd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Li = {}, Ti = {};
function Xd(e) {
  return Ts.call(Ti, e) ? !0 : Ts.call(Li, e) ? !1 : Yd.test(e) ? Ti[e] = !0 : (Li[e] = !0, !1);
}
function qd(e, t, n, r) {
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
function Jd(e, t, n, r) {
  if (t === null || typeof t > "u" || qd(e, t, n, r)) return !0;
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
function Fe(e, t, n, r, l, a, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i;
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Le[e] = new Fe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Le[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Le[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Le[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Le[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Le[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Le[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Le[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Le[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pa = /[\-:]([a-z])/g;
function Da(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Pa,
    Da
  );
  Le[t] = new Fe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Pa, Da);
  Le[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Pa, Da);
  Le[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Le[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Le[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ra(e, t, n, r) {
  var l = Le.hasOwnProperty(t) ? Le[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jd(t, n, l, r) && (n = null), r || l === null ? Xd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var It = Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ar = Symbol.for("react.element"), hn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Ps = Symbol.for("react.profiler"), lu = Symbol.for("react.provider"), su = Symbol.for("react.context"), Aa = Symbol.for("react.forward_ref"), Ds = Symbol.for("react.suspense"), Rs = Symbol.for("react.suspense_list"), Oa = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), au = Symbol.for("react.offscreen"), Pi = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object" ? null : (e = Pi && e[Pi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var he = Object.assign, ss;
function Zn(e) {
  if (ss === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ss = t && t[1] || "";
  }
  return `
` + ss + e;
}
var as = !1;
function is(e, t) {
  if (!e || as) return "";
  as = !0;
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
`), a = r.stack.split(`
`), i = l.length - 1, o = a.length - 1; 1 <= i && 0 <= o && l[i] !== a[o]; ) o--;
      for (; 1 <= i && 0 <= o; i--, o--) if (l[i] !== a[o]) {
        if (i !== 1 || o !== 1)
          do
            if (i--, o--, 0 > o || l[i] !== a[o]) {
              var u = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= i && 0 <= o);
        break;
      }
    }
  } finally {
    as = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Zn(e) : "";
}
function Zd(e) {
  switch (e.tag) {
    case 5:
      return Zn(e.type);
    case 16:
      return Zn("Lazy");
    case 13:
      return Zn("Suspense");
    case 19:
      return Zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = is(e.type, !1), e;
    case 11:
      return e = is(e.type.render, !1), e;
    case 1:
      return e = is(e.type, !0), e;
    default:
      return "";
  }
}
function zs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gn:
      return "Fragment";
    case hn:
      return "Portal";
    case Ps:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ds:
      return "Suspense";
    case Rs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case su:
      return (e.displayName || "Context") + ".Consumer";
    case lu:
      return (e._context.displayName || "Context") + ".Provider";
    case Aa:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Oa:
      return t = e.displayName || null, t !== null ? t : zs(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return zs(e(t));
      } catch {
      }
  }
  return null;
}
function ef(e) {
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
      return zs(t);
    case 8:
      return t === za ? "StrictMode" : "Mode";
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
function Bt(e) {
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
function iu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function tf(e) {
  var t = iu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, a = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, a.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Or(e) {
  e._valueTracker || (e._valueTracker = tf(e));
}
function ou(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = iu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ml(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function As(e, t) {
  var n = t.checked;
  return he({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Di(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Bt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function uu(e, t) {
  t = t.checked, t != null && Ra(e, "checked", t, !1);
}
function Os(e, t) {
  uu(e, t);
  var n = Bt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Fs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fs(e, t.type, Bt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ri(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Fs(e, t, n) {
  (t !== "number" || ml(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var er = Array.isArray;
function Nn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function $s(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return he({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function zi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (er(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function cu(e, t) {
  var n = Bt(t.value), r = Bt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ai(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function du(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ws(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? du(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Fr, fu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Fr = Fr || document.createElement("div"), Fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Fr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rr = {
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
}, nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(rr).forEach(function(e) {
  nf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), rr[t] = rr[e];
  });
});
function pu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || rr.hasOwnProperty(e) && rr[e] ? ("" + t).trim() : t + "px";
}
function mu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = pu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var rf = he({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Us(e, t) {
  if (t) {
    if (rf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Vs(e, t) {
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
var Qs = null;
function Fa(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hs = null, Mn = null, In = null;
function Oi(e) {
  if (e = Pr(e)) {
    if (typeof Hs != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = Vl(t), Hs(e.stateNode, e.type, t));
  }
}
function hu(e) {
  Mn ? In ? In.push(e) : In = [e] : Mn = e;
}
function gu() {
  if (Mn) {
    var e = Mn, t = In;
    if (In = Mn = null, Oi(e), t) for (e = 0; e < t.length; e++) Oi(t[e]);
  }
}
function yu(e, t) {
  return e(t);
}
function vu() {
}
var os = !1;
function wu(e, t, n) {
  if (os) return e(t, n);
  os = !0;
  try {
    return yu(e, t, n);
  } finally {
    os = !1, (Mn !== null || In !== null) && (vu(), gu());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vl(n);
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
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var Bs = !1;
if (Et) try {
  var Bn = {};
  Object.defineProperty(Bn, "passive", { get: function() {
    Bs = !0;
  } }), window.addEventListener("test", Bn, Bn), window.removeEventListener("test", Bn, Bn);
} catch {
  Bs = !1;
}
function lf(e, t, n, r, l, a, i, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var lr = !1, hl = null, gl = !1, Gs = null, sf = { onError: function(e) {
  lr = !0, hl = e;
} };
function af(e, t, n, r, l, a, i, o, u) {
  lr = !1, hl = null, lf.apply(sf, arguments);
}
function of(e, t, n, r, l, a, i, o, u) {
  if (af.apply(this, arguments), lr) {
    if (lr) {
      var c = hl;
      lr = !1, hl = null;
    } else throw Error(z(198));
    gl || (gl = !0, Gs = c);
  }
}
function dn(e) {
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
function xu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Fi(e) {
  if (dn(e) !== e) throw Error(z(188));
}
function uf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = dn(e), t === null) throw Error(z(188));
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
        if (a === n) return Fi(l), e;
        if (a === r) return Fi(l), t;
        a = a.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) n = l, r = a;
    else {
      for (var i = !1, o = l.child; o; ) {
        if (o === n) {
          i = !0, n = l, r = a;
          break;
        }
        if (o === r) {
          i = !0, r = l, n = a;
          break;
        }
        o = o.sibling;
      }
      if (!i) {
        for (o = a.child; o; ) {
          if (o === n) {
            i = !0, n = a, r = l;
            break;
          }
          if (o === r) {
            i = !0, r = a, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!i) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function _u(e) {
  return e = uf(e), e !== null ? ku(e) : null;
}
function ku(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ku(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Su = Xe.unstable_scheduleCallback, $i = Xe.unstable_cancelCallback, cf = Xe.unstable_shouldYield, df = Xe.unstable_requestPaint, ye = Xe.unstable_now, ff = Xe.unstable_getCurrentPriorityLevel, $a = Xe.unstable_ImmediatePriority, ju = Xe.unstable_UserBlockingPriority, yl = Xe.unstable_NormalPriority, pf = Xe.unstable_LowPriority, Eu = Xe.unstable_IdlePriority, Fl = null, yt = null;
function mf(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function") try {
    yt.onCommitFiberRoot(Fl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var dt = Math.clz32 ? Math.clz32 : yf, hf = Math.log, gf = Math.LN2;
function yf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (hf(e) / gf | 0) | 0;
}
var $r = 64, Wr = 4194304;
function tr(e) {
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
function vl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? r = tr(o) : (a &= i, a !== 0 && (r = tr(a)));
  } else i = n & ~l, i !== 0 ? r = tr(i) : a !== 0 && (r = tr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - dt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function vf(e, t) {
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
function wf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var i = 31 - dt(a), o = 1 << i, u = l[i];
    u === -1 ? (!(o & n) || o & r) && (l[i] = vf(o, t)) : u <= t && (e.expiredLanes |= o), a &= ~o;
  }
}
function Ks(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Cu() {
  var e = $r;
  return $r <<= 1, !($r & 4194240) && ($r = 64), e;
}
function us(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = n;
}
function xf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - dt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function Wa(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ae = 0;
function Nu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Mu, Ua, Iu, bu, Lu, Ys = !1, Ur = [], Ot = null, Ft = null, $t = null, hr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), Dt = [], _f = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Wi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      Ft = null;
      break;
    case "mouseover":
    case "mouseout":
      $t = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gr.delete(t.pointerId);
  }
}
function Gn(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = Pr(t), t !== null && Ua(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function kf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ot = Gn(Ot, e, t, n, r, l), !0;
    case "dragenter":
      return Ft = Gn(Ft, e, t, n, r, l), !0;
    case "mouseover":
      return $t = Gn($t, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return hr.set(a, Gn(hr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, gr.set(a, Gn(gr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Tu(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = xu(n), t !== null) {
          e.blockedOn = t, Lu(e.priority, function() {
            Iu(n);
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
function nl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Qs = r, n.target.dispatchEvent(r), Qs = null;
    } else return t = Pr(n), t !== null && Ua(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ui(e, t, n) {
  nl(e) && n.delete(t);
}
function Sf() {
  Ys = !1, Ot !== null && nl(Ot) && (Ot = null), Ft !== null && nl(Ft) && (Ft = null), $t !== null && nl($t) && ($t = null), hr.forEach(Ui), gr.forEach(Ui);
}
function Kn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ys || (Ys = !0, Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Sf)));
}
function yr(e) {
  function t(l) {
    return Kn(l, e);
  }
  if (0 < Ur.length) {
    Kn(Ur[0], e);
    for (var n = 1; n < Ur.length; n++) {
      var r = Ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ot !== null && Kn(Ot, e), Ft !== null && Kn(Ft, e), $t !== null && Kn($t, e), hr.forEach(t), gr.forEach(t), n = 0; n < Dt.length; n++) r = Dt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && (n = Dt[0], n.blockedOn === null); ) Tu(n), n.blockedOn === null && Dt.shift();
}
var bn = It.ReactCurrentBatchConfig, wl = !0;
function jf(e, t, n, r) {
  var l = ae, a = bn.transition;
  bn.transition = null;
  try {
    ae = 1, Va(e, t, n, r);
  } finally {
    ae = l, bn.transition = a;
  }
}
function Ef(e, t, n, r) {
  var l = ae, a = bn.transition;
  bn.transition = null;
  try {
    ae = 4, Va(e, t, n, r);
  } finally {
    ae = l, bn.transition = a;
  }
}
function Va(e, t, n, r) {
  if (wl) {
    var l = Xs(e, t, n, r);
    if (l === null) ws(e, t, r, xl, n), Wi(e, r);
    else if (kf(l, e, t, n, r)) r.stopPropagation();
    else if (Wi(e, r), t & 4 && -1 < _f.indexOf(e)) {
      for (; l !== null; ) {
        var a = Pr(l);
        if (a !== null && Mu(a), a = Xs(e, t, n, r), a === null && ws(e, t, r, xl, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else ws(e, t, r, null, n);
  }
}
var xl = null;
function Xs(e, t, n, r) {
  if (xl = null, e = Fa(r), e = Zt(e), e !== null) if (t = dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = xu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return xl = e, null;
}
function Pu(e) {
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
      switch (ff()) {
        case $a:
          return 1;
        case ju:
          return 4;
        case yl:
        case pf:
          return 16;
        case Eu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null, Qa = null, rl = null;
function Du() {
  if (rl) return rl;
  var e, t = Qa, n = t.length, r, l = "value" in zt ? zt.value : zt.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[a - r]; r++) ;
  return rl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function ll(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Vr() {
  return !0;
}
function Vi() {
  return !1;
}
function Je(e) {
  function t(n, r, l, a, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = i, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(a) : a[o]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Vr : Vi, this.isPropagationStopped = Vi, this;
  }
  return he(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vr);
  }, persist: function() {
  }, isPersistent: Vr }), t;
}
var Vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ha = Je(Vn), Tr = he({}, Vn, { view: 0, detail: 0 }), Cf = Je(Tr), cs, ds, Yn, $l = he({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ba, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (cs = e.screenX - Yn.screenX, ds = e.screenY - Yn.screenY) : ds = cs = 0, Yn = e), cs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ds;
} }), Qi = Je($l), Nf = he({}, $l, { dataTransfer: 0 }), Mf = Je(Nf), If = he({}, Tr, { relatedTarget: 0 }), fs = Je(If), bf = he({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lf = Je(bf), Tf = he({}, Vn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Pf = Je(Tf), Df = he({}, Vn, { data: 0 }), Hi = Je(Df), Rf = {
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
}, zf = {
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
}, Af = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Of(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Af[e]) ? !!t[e] : !1;
}
function Ba() {
  return Of;
}
var Ff = he({}, Tr, { key: function(e) {
  if (e.key) {
    var t = Rf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ba, charCode: function(e) {
  return e.type === "keypress" ? ll(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), $f = Je(Ff), Wf = he({}, $l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Bi = Je(Wf), Uf = he({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ba }), Vf = Je(Uf), Qf = he({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hf = Je(Qf), Bf = he({}, $l, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Gf = Je(Bf), Kf = [9, 13, 27, 32], Ga = Et && "CompositionEvent" in window, sr = null;
Et && "documentMode" in document && (sr = document.documentMode);
var Yf = Et && "TextEvent" in window && !sr, Ru = Et && (!Ga || sr && 8 < sr && 11 >= sr), Gi = " ", Ki = !1;
function zu(e, t) {
  switch (e) {
    case "keyup":
      return Kf.indexOf(t.keyCode) !== -1;
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
function Au(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yn = !1;
function Xf(e, t) {
  switch (e) {
    case "compositionend":
      return Au(t);
    case "keypress":
      return t.which !== 32 ? null : (Ki = !0, Gi);
    case "textInput":
      return e = t.data, e === Gi && Ki ? null : e;
    default:
      return null;
  }
}
function qf(e, t) {
  if (yn) return e === "compositionend" || !Ga && zu(e, t) ? (e = Du(), rl = Qa = zt = null, yn = !1, e) : null;
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
      return Ru && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Yi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jf[e.type] : t === "textarea";
}
function Ou(e, t, n, r) {
  hu(r), t = _l(t, "onChange"), 0 < t.length && (n = new Ha("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ar = null, vr = null;
function Zf(e) {
  Yu(e, 0);
}
function Wl(e) {
  var t = xn(e);
  if (ou(t)) return e;
}
function ep(e, t) {
  if (e === "change") return t;
}
var Fu = !1;
if (Et) {
  var ps;
  if (Et) {
    var ms = "oninput" in document;
    if (!ms) {
      var Xi = document.createElement("div");
      Xi.setAttribute("oninput", "return;"), ms = typeof Xi.oninput == "function";
    }
    ps = ms;
  } else ps = !1;
  Fu = ps && (!document.documentMode || 9 < document.documentMode);
}
function qi() {
  ar && (ar.detachEvent("onpropertychange", $u), vr = ar = null);
}
function $u(e) {
  if (e.propertyName === "value" && Wl(vr)) {
    var t = [];
    Ou(t, vr, e, Fa(e)), wu(Zf, t);
  }
}
function tp(e, t, n) {
  e === "focusin" ? (qi(), ar = t, vr = n, ar.attachEvent("onpropertychange", $u)) : e === "focusout" && qi();
}
function np(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wl(vr);
}
function rp(e, t) {
  if (e === "click") return Wl(t);
}
function lp(e, t) {
  if (e === "input" || e === "change") return Wl(t);
}
function sp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pt = typeof Object.is == "function" ? Object.is : sp;
function wr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ts.call(t, l) || !pt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ji(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Zi(e, t) {
  var n = Ji(e);
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
    n = Ji(n);
  }
}
function Wu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Uu() {
  for (var e = window, t = ml(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ml(e.document);
  }
  return t;
}
function Ka(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ap(e) {
  var t = Uu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Wu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ka(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Zi(n, a);
        var i = Zi(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ip = Et && "documentMode" in document && 11 >= document.documentMode, vn = null, qs = null, ir = null, Js = !1;
function eo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Js || vn == null || vn !== ml(r) || (r = vn, "selectionStart" in r && Ka(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ir && wr(ir, r) || (ir = r, r = _l(qs, "onSelect"), 0 < r.length && (t = new Ha("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vn)));
}
function Qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var wn = { animationend: Qr("Animation", "AnimationEnd"), animationiteration: Qr("Animation", "AnimationIteration"), animationstart: Qr("Animation", "AnimationStart"), transitionend: Qr("Transition", "TransitionEnd") }, hs = {}, Vu = {};
Et && (Vu = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);
function Ul(e) {
  if (hs[e]) return hs[e];
  if (!wn[e]) return e;
  var t = wn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vu) return hs[e] = t[n];
  return e;
}
var Qu = Ul("animationend"), Hu = Ul("animationiteration"), Bu = Ul("animationstart"), Gu = Ul("transitionend"), Ku = /* @__PURE__ */ new Map(), to = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kt(e, t) {
  Ku.set(e, t), cn(t, [e]);
}
for (var gs = 0; gs < to.length; gs++) {
  var ys = to[gs], op = ys.toLowerCase(), up = ys[0].toUpperCase() + ys.slice(1);
  Kt(op, "on" + up);
}
Kt(Qu, "onAnimationEnd");
Kt(Hu, "onAnimationIteration");
Kt(Bu, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(Gu, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), cp = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
function no(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, of(r, t, void 0, e), e.currentTarget = null;
}
function Yu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var o = r[i], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== a && l.isPropagationStopped()) break e;
        no(l, o, c), a = u;
      }
      else for (i = 0; i < r.length; i++) {
        if (o = r[i], u = o.instance, c = o.currentTarget, o = o.listener, u !== a && l.isPropagationStopped()) break e;
        no(l, o, c), a = u;
      }
    }
  }
  if (gl) throw e = Gs, gl = !1, Gs = null, e;
}
function oe(e, t) {
  var n = t[ra];
  n === void 0 && (n = t[ra] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Xu(t, e, 2, !1), n.add(r));
}
function vs(e, t, n) {
  var r = 0;
  t && (r |= 4), Xu(n, e, r, t);
}
var Hr = "_reactListening" + Math.random().toString(36).slice(2);
function xr(e) {
  if (!e[Hr]) {
    e[Hr] = !0, ru.forEach(function(n) {
      n !== "selectionchange" && (cp.has(n) || vs(n, !1, e), vs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hr] || (t[Hr] = !0, vs("selectionchange", !1, t));
  }
}
function Xu(e, t, n, r) {
  switch (Pu(t)) {
    case 1:
      var l = jf;
      break;
    case 4:
      l = Ef;
      break;
    default:
      l = Va;
  }
  n = l.bind(null, t, n, e), l = void 0, !Bs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ws(e, t, n, r, l) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var u = i.tag;
        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        i = i.return;
      }
      for (; o !== null; ) {
        if (i = Zt(o), i === null) return;
        if (u = i.tag, u === 5 || u === 6) {
          r = a = i;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  wu(function() {
    var c = a, p = Fa(n), _ = [];
    e: {
      var v = Ku.get(e);
      if (v !== void 0) {
        var y = Ha, w = e;
        switch (e) {
          case "keypress":
            if (ll(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = $f;
            break;
          case "focusin":
            w = "focus", y = fs;
            break;
          case "focusout":
            w = "blur", y = fs;
            break;
          case "beforeblur":
          case "afterblur":
            y = fs;
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
            y = Qi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Mf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Vf;
            break;
          case Qu:
          case Hu:
          case Bu:
            y = Lf;
            break;
          case Gu:
            y = Hf;
            break;
          case "scroll":
            y = Cf;
            break;
          case "wheel":
            y = Gf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Bi;
        }
        var k = (t & 4) !== 0, j = !k && e === "scroll", d = k ? v !== null ? v + "Capture" : null : v;
        k = [];
        for (var f = c, m; f !== null; ) {
          m = f;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, d !== null && (g = mr(f, d), g != null && k.push(_r(f, g, m)))), j) break;
          f = f.return;
        }
        0 < k.length && (v = new y(v, w, null, n, p), _.push({ event: v, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== Qs && (w = n.relatedTarget || n.fromElement) && (Zt(w) || w[Ct])) break e;
        if ((y || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = c, w = w ? Zt(w) : null, w !== null && (j = dn(w), w !== j || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = c), y !== w)) {
          if (k = Qi, g = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (k = Bi, g = "onPointerLeave", d = "onPointerEnter", f = "pointer"), j = y == null ? v : xn(y), m = w == null ? v : xn(w), v = new k(g, f + "leave", y, n, p), v.target = j, v.relatedTarget = m, g = null, Zt(p) === c && (k = new k(d, f + "enter", w, n, p), k.target = m, k.relatedTarget = j, g = k), j = g, y && w) t: {
            for (k = y, d = w, f = 0, m = k; m; m = mn(m)) f++;
            for (m = 0, g = d; g; g = mn(g)) m++;
            for (; 0 < f - m; ) k = mn(k), f--;
            for (; 0 < m - f; ) d = mn(d), m--;
            for (; f--; ) {
              if (k === d || d !== null && k === d.alternate) break t;
              k = mn(k), d = mn(d);
            }
            k = null;
          }
          else k = null;
          y !== null && ro(_, v, y, k, !1), w !== null && j !== null && ro(_, j, w, k, !0);
        }
      }
      e: {
        if (v = c ? xn(c) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var x = ep;
        else if (Yi(v)) if (Fu) x = lp;
        else {
          x = np;
          var M = tp;
        }
        else (y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (x = rp);
        if (x && (x = x(e, c))) {
          Ou(_, x, n, p);
          break e;
        }
        M && M(e, v, c), e === "focusout" && (M = v._wrapperState) && M.controlled && v.type === "number" && Fs(v, "number", v.value);
      }
      switch (M = c ? xn(c) : window, e) {
        case "focusin":
          (Yi(M) || M.contentEditable === "true") && (vn = M, qs = c, ir = null);
          break;
        case "focusout":
          ir = qs = vn = null;
          break;
        case "mousedown":
          Js = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Js = !1, eo(_, n, p);
          break;
        case "selectionchange":
          if (ip) break;
        case "keydown":
        case "keyup":
          eo(_, n, p);
      }
      var C;
      if (Ga) e: {
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
      else yn ? zu(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (Ru && n.locale !== "ko" && (yn || I !== "onCompositionStart" ? I === "onCompositionEnd" && yn && (C = Du()) : (zt = p, Qa = "value" in zt ? zt.value : zt.textContent, yn = !0)), M = _l(c, I), 0 < M.length && (I = new Hi(I, e, null, n, p), _.push({ event: I, listeners: M }), C ? I.data = C : (C = Au(n), C !== null && (I.data = C)))), (C = Yf ? Xf(e, n) : qf(e, n)) && (c = _l(c, "onBeforeInput"), 0 < c.length && (p = new Hi("onBeforeInput", "beforeinput", null, n, p), _.push({ event: p, listeners: c }), p.data = C));
    }
    Yu(_, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _l(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = mr(e, n), a != null && r.unshift(_r(e, a, l)), a = mr(e, t), a != null && r.push(_r(e, a, l))), e = e.return;
  }
  return r;
}
function mn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ro(e, t, n, r, l) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = mr(n, a), u != null && i.unshift(_r(n, u, o))) : l || (u = mr(n, a), u != null && i.push(_r(n, u, o)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var dp = /\r\n?/g, fp = /\u0000|\uFFFD/g;
function lo(e) {
  return (typeof e == "string" ? e : "" + e).replace(dp, `
`).replace(fp, "");
}
function Br(e, t, n) {
  if (t = lo(t), lo(e) !== t && n) throw Error(z(425));
}
function kl() {
}
var Zs = null, ea = null;
function ta(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var na = typeof setTimeout == "function" ? setTimeout : void 0, pp = typeof clearTimeout == "function" ? clearTimeout : void 0, so = typeof Promise == "function" ? Promise : void 0, mp = typeof queueMicrotask == "function" ? queueMicrotask : typeof so < "u" ? function(e) {
  return so.resolve(null).then(e).catch(hp);
} : na;
function hp(e) {
  setTimeout(function() {
    throw e;
  });
}
function xs(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), yr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  yr(t);
}
function Wt(e) {
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
function ao(e) {
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
var Qn = Math.random().toString(36).slice(2), gt = "__reactFiber$" + Qn, kr = "__reactProps$" + Qn, Ct = "__reactContainer$" + Qn, ra = "__reactEvents$" + Qn, gp = "__reactListeners$" + Qn, yp = "__reactHandles$" + Qn;
function Zt(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ct] || n[gt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ao(e); e !== null; ) {
        if (n = e[gt]) return n;
        e = ao(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Pr(e) {
  return e = e[gt] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function Vl(e) {
  return e[kr] || null;
}
var la = [], _n = -1;
function Yt(e) {
  return { current: e };
}
function ue(e) {
  0 > _n || (e.current = la[_n], la[_n] = null, _n--);
}
function ie(e, t) {
  _n++, la[_n] = e.current, e.current = t;
}
var Gt = {}, Re = Yt(Gt), Ve = Yt(!1), ln = Gt;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Qe(e) {
  return e = e.childContextTypes, e != null;
}
function Sl() {
  ue(Ve), ue(Re);
}
function io(e, t, n) {
  if (Re.current !== Gt) throw Error(z(168));
  ie(Re, t), ie(Ve, n);
}
function qu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(z(108, ef(e) || "Unknown", l));
  return he({}, n, r);
}
function jl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt, ln = Re.current, ie(Re, e), ie(Ve, Ve.current), !0;
}
function oo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = qu(e, t, ln), r.__reactInternalMemoizedMergedChildContext = e, ue(Ve), ue(Re), ie(Re, e)) : ue(Ve), ie(Ve, n);
}
var _t = null, Ql = !1, _s = !1;
function Ju(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function vp(e) {
  Ql = !0, Ju(e);
}
function Xt() {
  if (!_s && _t !== null) {
    _s = !0;
    var e = 0, t = ae;
    try {
      var n = _t;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      _t = null, Ql = !1;
    } catch (l) {
      throw _t !== null && (_t = _t.slice(e + 1)), Su($a, Xt), l;
    } finally {
      ae = t, _s = !1;
    }
  }
  return null;
}
var kn = [], Sn = 0, El = null, Cl = 0, Ze = [], et = 0, sn = null, kt = 1, St = "";
function qt(e, t) {
  kn[Sn++] = Cl, kn[Sn++] = El, El = e, Cl = t;
}
function Zu(e, t, n) {
  Ze[et++] = kt, Ze[et++] = St, Ze[et++] = sn, sn = e;
  var r = kt;
  e = St;
  var l = 32 - dt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - dt(t) + l;
  if (30 < a) {
    var i = l - l % 5;
    a = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, kt = 1 << 32 - dt(t) + l | n << l | r, St = a + e;
  } else kt = 1 << a | n << l | r, St = e;
}
function Ya(e) {
  e.return !== null && (qt(e, 1), Zu(e, 1, 0));
}
function Xa(e) {
  for (; e === El; ) El = kn[--Sn], kn[Sn] = null, Cl = kn[--Sn], kn[Sn] = null;
  for (; e === sn; ) sn = Ze[--et], Ze[et] = null, St = Ze[--et], Ze[et] = null, kt = Ze[--et], Ze[et] = null;
}
var Ye = null, Ke = null, de = !1, ut = null;
function ec(e, t) {
  var n = tt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function uo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ke = Wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Ke = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sn !== null ? { id: kt, overflow: St } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Ke = null, !0) : !1;
    default:
      return !1;
  }
}
function sa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function aa(e) {
  if (de) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!uo(e, t)) {
        if (sa(e)) throw Error(z(418));
        t = Wt(n.nextSibling);
        var r = Ye;
        t && uo(e, t) ? ec(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, Ye = e);
      }
    } else {
      if (sa(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, de = !1, Ye = e;
    }
  }
}
function co(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ye = e;
}
function Gr(e) {
  if (e !== Ye) return !1;
  if (!de) return co(e), de = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ta(e.type, e.memoizedProps)), t && (t = Ke)) {
    if (sa(e)) throw tc(), Error(z(418));
    for (; t; ) ec(e, t), t = Wt(t.nextSibling);
  }
  if (co(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function tc() {
  for (var e = Ke; e; ) e = Wt(e.nextSibling);
}
function Rn() {
  Ke = Ye = null, de = !1;
}
function qa(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var wp = It.ReactCurrentBatchConfig;
function Xn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(i) {
        var o = l.refs;
        i === null ? delete o[a] : o[a] = i;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function Kr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function fo(e) {
  var t = e._init;
  return t(e._payload);
}
function nc(e) {
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
    return d = Ht(d, f), d.index = 0, d.sibling = null, d;
  }
  function a(d, f, m) {
    return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < f ? (d.flags |= 2, f) : m) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function o(d, f, m, g) {
    return f === null || f.tag !== 6 ? (f = Ms(m, d.mode, g), f.return = d, f) : (f = l(f, m), f.return = d, f);
  }
  function u(d, f, m, g) {
    var x = m.type;
    return x === gn ? p(d, f, m.props.children, g, m.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Tt && fo(x) === f.type) ? (g = l(f, m.props), g.ref = Xn(d, f, m), g.return = d, g) : (g = dl(m.type, m.key, m.props, null, d.mode, g), g.ref = Xn(d, f, m), g.return = d, g);
  }
  function c(d, f, m, g) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = Is(m, d.mode, g), f.return = d, f) : (f = l(f, m.children || []), f.return = d, f);
  }
  function p(d, f, m, g, x) {
    return f === null || f.tag !== 7 ? (f = rn(m, d.mode, g, x), f.return = d, f) : (f = l(f, m), f.return = d, f);
  }
  function _(d, f, m) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ms("" + f, d.mode, m), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ar:
          return m = dl(f.type, f.key, f.props, null, d.mode, m), m.ref = Xn(d, null, f), m.return = d, m;
        case hn:
          return f = Is(f, d.mode, m), f.return = d, f;
        case Tt:
          var g = f._init;
          return _(d, g(f._payload), m);
      }
      if (er(f) || Hn(f)) return f = rn(f, d.mode, m, null), f.return = d, f;
      Kr(d, f);
    }
    return null;
  }
  function v(d, f, m, g) {
    var x = f !== null ? f.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return x !== null ? null : o(d, f, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ar:
          return m.key === x ? u(d, f, m, g) : null;
        case hn:
          return m.key === x ? c(d, f, m, g) : null;
        case Tt:
          return x = m._init, v(
            d,
            f,
            x(m._payload),
            g
          );
      }
      if (er(m) || Hn(m)) return x !== null ? null : p(d, f, m, g, null);
      Kr(d, m);
    }
    return null;
  }
  function y(d, f, m, g, x) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return d = d.get(m) || null, o(f, d, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ar:
          return d = d.get(g.key === null ? m : g.key) || null, u(f, d, g, x);
        case hn:
          return d = d.get(g.key === null ? m : g.key) || null, c(f, d, g, x);
        case Tt:
          var M = g._init;
          return y(d, f, m, M(g._payload), x);
      }
      if (er(g) || Hn(g)) return d = d.get(m) || null, p(f, d, g, x, null);
      Kr(f, g);
    }
    return null;
  }
  function w(d, f, m, g) {
    for (var x = null, M = null, C = f, I = f = 0, O = null; C !== null && I < m.length; I++) {
      C.index > I ? (O = C, C = null) : O = C.sibling;
      var N = v(d, C, m[I], g);
      if (N === null) {
        C === null && (C = O);
        break;
      }
      e && C && N.alternate === null && t(d, C), f = a(N, f, I), M === null ? x = N : M.sibling = N, M = N, C = O;
    }
    if (I === m.length) return n(d, C), de && qt(d, I), x;
    if (C === null) {
      for (; I < m.length; I++) C = _(d, m[I], g), C !== null && (f = a(C, f, I), M === null ? x = C : M.sibling = C, M = C);
      return de && qt(d, I), x;
    }
    for (C = r(d, C); I < m.length; I++) O = y(C, d, I, m[I], g), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? I : O.key), f = a(O, f, I), M === null ? x = O : M.sibling = O, M = O);
    return e && C.forEach(function(T) {
      return t(d, T);
    }), de && qt(d, I), x;
  }
  function k(d, f, m, g) {
    var x = Hn(m);
    if (typeof x != "function") throw Error(z(150));
    if (m = x.call(m), m == null) throw Error(z(151));
    for (var M = x = null, C = f, I = f = 0, O = null, N = m.next(); C !== null && !N.done; I++, N = m.next()) {
      C.index > I ? (O = C, C = null) : O = C.sibling;
      var T = v(d, C, N.value, g);
      if (T === null) {
        C === null && (C = O);
        break;
      }
      e && C && T.alternate === null && t(d, C), f = a(T, f, I), M === null ? x = T : M.sibling = T, M = T, C = O;
    }
    if (N.done) return n(
      d,
      C
    ), de && qt(d, I), x;
    if (C === null) {
      for (; !N.done; I++, N = m.next()) N = _(d, N.value, g), N !== null && (f = a(N, f, I), M === null ? x = N : M.sibling = N, M = N);
      return de && qt(d, I), x;
    }
    for (C = r(d, C); !N.done; I++, N = m.next()) N = y(C, d, I, N.value, g), N !== null && (e && N.alternate !== null && C.delete(N.key === null ? I : N.key), f = a(N, f, I), M === null ? x = N : M.sibling = N, M = N);
    return e && C.forEach(function(H) {
      return t(d, H);
    }), de && qt(d, I), x;
  }
  function j(d, f, m, g) {
    if (typeof m == "object" && m !== null && m.type === gn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ar:
          e: {
            for (var x = m.key, M = f; M !== null; ) {
              if (M.key === x) {
                if (x = m.type, x === gn) {
                  if (M.tag === 7) {
                    n(d, M.sibling), f = l(M, m.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (M.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Tt && fo(x) === M.type) {
                  n(d, M.sibling), f = l(M, m.props), f.ref = Xn(d, M, m), f.return = d, d = f;
                  break e;
                }
                n(d, M);
                break;
              } else t(d, M);
              M = M.sibling;
            }
            m.type === gn ? (f = rn(m.props.children, d.mode, g, m.key), f.return = d, d = f) : (g = dl(m.type, m.key, m.props, null, d.mode, g), g.ref = Xn(d, f, m), g.return = d, d = g);
          }
          return i(d);
        case hn:
          e: {
            for (M = m.key; f !== null; ) {
              if (f.key === M) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                n(d, f.sibling), f = l(f, m.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = Is(m, d.mode, g), f.return = d, d = f;
          }
          return i(d);
        case Tt:
          return M = m._init, j(d, f, M(m._payload), g);
      }
      if (er(m)) return w(d, f, m, g);
      if (Hn(m)) return k(d, f, m, g);
      Kr(d, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, m), f.return = d, d = f) : (n(d, f), f = Ms(m, d.mode, g), f.return = d, d = f), i(d)) : n(d, f);
  }
  return j;
}
var zn = nc(!0), rc = nc(!1), Nl = Yt(null), Ml = null, jn = null, Ja = null;
function Za() {
  Ja = jn = Ml = null;
}
function ei(e) {
  var t = Nl.current;
  ue(Nl), e._currentValue = t;
}
function ia(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Ln(e, t) {
  Ml = e, Ja = jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null);
}
function rt(e) {
  var t = e._currentValue;
  if (Ja !== e) if (e = { context: e, memoizedValue: t, next: null }, jn === null) {
    if (Ml === null) throw Error(z(308));
    jn = e, Ml.dependencies = { lanes: 0, firstContext: e };
  } else jn = jn.next = e;
  return t;
}
var en = null;
function ti(e) {
  en === null ? en = [e] : en.push(e);
}
function lc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ti(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Nt(e, r);
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function ni(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function sc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function jt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, le & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Nt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ti(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Nt(e, n);
}
function sl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wa(e, n);
  }
}
function po(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, a = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        a === null ? l = a = i : a = a.next = i, n = n.next;
      } while (n !== null);
      a === null ? l = a = t : a = a.next = t;
    } else l = a = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Il(e, t, n, r) {
  var l = e.updateQueue;
  Pt = !1;
  var a = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, i === null ? a = c : i.next = c, i = u;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, o = p.lastBaseUpdate, o !== i && (o === null ? p.firstBaseUpdate = c : o.next = c, p.lastBaseUpdate = u));
  }
  if (a !== null) {
    var _ = l.baseState;
    i = 0, p = c = u = null, o = a;
    do {
      var v = o.lane, y = o.eventTime;
      if ((r & v) === v) {
        p !== null && (p = p.next = {
          eventTime: y,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var w = e, k = o;
          switch (v = t, y = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                _ = w.call(y, _, v);
                break e;
              }
              _ = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, v = typeof w == "function" ? w.call(y, _, v) : w, v == null) break e;
              _ = he({}, _, v);
              break e;
            case 2:
              Pt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [o] : v.push(o));
      } else y = { eventTime: y, lane: v, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, p === null ? (c = p = y, u = _) : p = p.next = y, i |= v;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        v = o, o = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (p === null && (u = _), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    on |= i, e.lanes = i, e.memoizedState = _;
  }
}
function mo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(z(191, l));
      l.call(r);
    }
  }
}
var Dr = {}, vt = Yt(Dr), Sr = Yt(Dr), jr = Yt(Dr);
function tn(e) {
  if (e === Dr) throw Error(z(174));
  return e;
}
function ri(e, t) {
  switch (ie(jr, t), ie(Sr, e), ie(vt, Dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ws(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ws(t, e);
  }
  ue(vt), ie(vt, t);
}
function An() {
  ue(vt), ue(Sr), ue(jr);
}
function ac(e) {
  tn(jr.current);
  var t = tn(vt.current), n = Ws(t, e.type);
  t !== n && (ie(Sr, e), ie(vt, n));
}
function li(e) {
  Sr.current === e && (ue(vt), ue(Sr));
}
var pe = Yt(0);
function bl(e) {
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
var ks = [];
function si() {
  for (var e = 0; e < ks.length; e++) ks[e]._workInProgressVersionPrimary = null;
  ks.length = 0;
}
var al = It.ReactCurrentDispatcher, Ss = It.ReactCurrentBatchConfig, an = 0, me = null, ke = null, Ee = null, Ll = !1, or = !1, Er = 0, xp = 0;
function Te() {
  throw Error(z(321));
}
function ai(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
  return !0;
}
function ii(e, t, n, r, l, a) {
  if (an = a, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, al.current = e === null || e.memoizedState === null ? jp : Ep, e = n(r, l), or) {
    a = 0;
    do {
      if (or = !1, Er = 0, 25 <= a) throw Error(z(301));
      a += 1, Ee = ke = null, t.updateQueue = null, al.current = Cp, e = n(r, l);
    } while (or);
  }
  if (al.current = Tl, t = ke !== null && ke.next !== null, an = 0, Ee = ke = me = null, Ll = !1, t) throw Error(z(300));
  return e;
}
function oi() {
  var e = Er !== 0;
  return Er = 0, e;
}
function ht() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ee === null ? me.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
}
function lt() {
  if (ke === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Ee === null ? me.memoizedState : Ee.next;
  if (t !== null) Ee = t, ke = e;
  else {
    if (e === null) throw Error(z(310));
    ke = e, e = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, Ee === null ? me.memoizedState = Ee = e : Ee = Ee.next = e;
  }
  return Ee;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function js(e) {
  var t = lt(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = ke, l = r.baseQueue, a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = a.next, a.next = i;
    }
    r.baseQueue = l = a, n.pending = null;
  }
  if (l !== null) {
    a = l.next, r = r.baseState;
    var o = i = null, u = null, c = a;
    do {
      var p = c.lane;
      if ((an & p) === p) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var _ = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = _, i = r) : u = u.next = _, me.lanes |= p, on |= p;
      }
      c = c.next;
    } while (c !== null && c !== a);
    u === null ? i = r : u.next = o, pt(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, me.lanes |= a, on |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Es(e) {
  var t = lt(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      a = e(a, i.action), i = i.next;
    while (i !== l);
    pt(a, t.memoizedState) || (Ue = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function ic() {
}
function oc(e, t) {
  var n = me, r = lt(), l = t(), a = !pt(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ue = !0), r = r.queue, ui(dc.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Ee !== null && Ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, Nr(9, cc.bind(null, n, r, l, t), void 0, null), Ce === null) throw Error(z(349));
    an & 30 || uc(n, t, l);
  }
  return l;
}
function uc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function cc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, fc(t) && pc(e);
}
function dc(e, t, n) {
  return n(function() {
    fc(t) && pc(e);
  });
}
function fc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function pc(e) {
  var t = Nt(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function ho(e) {
  var t = ht();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Sp.bind(null, me, e), [t.memoizedState, e];
}
function Nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function mc() {
  return lt().memoizedState;
}
function il(e, t, n, r) {
  var l = ht();
  me.flags |= e, l.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Hl(e, t, n, r) {
  var l = lt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (ke !== null) {
    var i = ke.memoizedState;
    if (a = i.destroy, r !== null && ai(r, i.deps)) {
      l.memoizedState = Nr(t, n, a, r);
      return;
    }
  }
  me.flags |= e, l.memoizedState = Nr(1 | t, n, a, r);
}
function go(e, t) {
  return il(8390656, 8, e, t);
}
function ui(e, t) {
  return Hl(2048, 8, e, t);
}
function hc(e, t) {
  return Hl(4, 2, e, t);
}
function gc(e, t) {
  return Hl(4, 4, e, t);
}
function yc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function vc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hl(4, 4, yc.bind(null, t, e), n);
}
function ci() {
}
function wc(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ai(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function xc(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ai(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _c(e, t, n) {
  return an & 21 ? (pt(n, t) || (n = Cu(), me.lanes |= n, on |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n);
}
function _p(e, t) {
  var n = ae;
  ae = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ss.transition;
  Ss.transition = {};
  try {
    e(!1), t();
  } finally {
    ae = n, Ss.transition = r;
  }
}
function kc() {
  return lt().memoizedState;
}
function kp(e, t, n) {
  var r = Qt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Sc(e)) jc(t, n);
  else if (n = lc(e, t, n, r), n !== null) {
    var l = Ae();
    ft(n, e, r, l), Ec(n, t, r);
  }
}
function Sp(e, t, n) {
  var r = Qt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sc(e)) jc(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var i = t.lastRenderedState, o = a(i, n);
      if (l.hasEagerState = !0, l.eagerState = o, pt(o, i)) {
        var u = t.interleaved;
        u === null ? (l.next = l, ti(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = lc(e, t, l, r), n !== null && (l = Ae(), ft(n, e, r, l), Ec(n, t, r));
  }
}
function Sc(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function jc(e, t) {
  or = Ll = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wa(e, n);
  }
}
var Tl = { readContext: rt, useCallback: Te, useContext: Te, useEffect: Te, useImperativeHandle: Te, useInsertionEffect: Te, useLayoutEffect: Te, useMemo: Te, useReducer: Te, useRef: Te, useState: Te, useDebugValue: Te, useDeferredValue: Te, useTransition: Te, useMutableSource: Te, useSyncExternalStore: Te, useId: Te, unstable_isNewReconciler: !1 }, jp = { readContext: rt, useCallback: function(e, t) {
  return ht().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: rt, useEffect: go, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, il(
    4194308,
    4,
    yc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return il(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return il(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ht();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ht();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = kp.bind(null, me, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ht();
  return e = { current: e }, t.memoizedState = e;
}, useState: ho, useDebugValue: ci, useDeferredValue: function(e) {
  return ht().memoizedState = e;
}, useTransition: function() {
  var e = ho(!1), t = e[0];
  return e = _p.bind(null, e[1]), ht().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = me, l = ht();
  if (de) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), Ce === null) throw Error(z(349));
    an & 30 || uc(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, go(dc.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Nr(9, cc.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = ht(), t = Ce.identifierPrefix;
  if (de) {
    var n = St, r = kt;
    n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = xp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ep = {
  readContext: rt,
  useCallback: wc,
  useContext: rt,
  useEffect: ui,
  useImperativeHandle: vc,
  useInsertionEffect: hc,
  useLayoutEffect: gc,
  useMemo: xc,
  useReducer: js,
  useRef: mc,
  useState: function() {
    return js(Cr);
  },
  useDebugValue: ci,
  useDeferredValue: function(e) {
    var t = lt();
    return _c(t, ke.memoizedState, e);
  },
  useTransition: function() {
    var e = js(Cr)[0], t = lt().memoizedState;
    return [e, t];
  },
  useMutableSource: ic,
  useSyncExternalStore: oc,
  useId: kc,
  unstable_isNewReconciler: !1
}, Cp = { readContext: rt, useCallback: wc, useContext: rt, useEffect: ui, useImperativeHandle: vc, useInsertionEffect: hc, useLayoutEffect: gc, useMemo: xc, useReducer: Es, useRef: mc, useState: function() {
  return Es(Cr);
}, useDebugValue: ci, useDeferredValue: function(e) {
  var t = lt();
  return ke === null ? t.memoizedState = e : _c(t, ke.memoizedState, e);
}, useTransition: function() {
  var e = Es(Cr)[0], t = lt().memoizedState;
  return [e, t];
}, useMutableSource: ic, useSyncExternalStore: oc, useId: kc, unstable_isNewReconciler: !1 };
function it(e, t) {
  if (e && e.defaultProps) {
    t = he({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function oa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ae(), l = Qt(e), a = jt(r, l);
  a.payload = t, n != null && (a.callback = n), t = Ut(e, a, l), t !== null && (ft(t, e, l, r), sl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ae(), l = Qt(e), a = jt(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Ut(e, a, l), t !== null && (ft(t, e, l, r), sl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ae(), r = Qt(e), l = jt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ut(e, l, r), t !== null && (ft(t, e, r, n), sl(t, e, r));
} };
function yo(e, t, n, r, l, a, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, i) : t.prototype && t.prototype.isPureReactComponent ? !wr(n, r) || !wr(l, a) : !0;
}
function Cc(e, t, n) {
  var r = !1, l = Gt, a = t.contextType;
  return typeof a == "object" && a !== null ? a = rt(a) : (l = Qe(t) ? ln : Re.current, r = t.contextTypes, a = (r = r != null) ? Dn(e, l) : Gt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function vo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function ua(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ni(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = rt(a) : (a = Qe(t) ? ln : Re.current, l.context = Dn(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (oa(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Bl.enqueueReplaceState(l, l.state, null), Il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t) {
  try {
    var n = "", r = t;
    do
      n += Zd(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Cs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ca(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Np = typeof WeakMap == "function" ? WeakMap : Map;
function Nc(e, t, n) {
  n = jt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Dl || (Dl = !0, xa = r), ca(e, t);
  }, n;
}
function Mc(e, t, n) {
  n = jt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ca(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    ca(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function wo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Np();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Wp.bind(null, e, t, n), t.then(e, e));
}
function xo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _o(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, Ut(n, t, 1))), n.lanes |= 1), e);
}
var Mp = It.ReactCurrentOwner, Ue = !1;
function ze(e, t, n, r) {
  t.child = e === null ? rc(t, null, n, r) : zn(t, e.child, n, r);
}
function ko(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return Ln(t, l), r = ii(e, t, n, r, a, l), n = oi(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Mt(e, t, l)) : (de && n && Ya(t), t.flags |= 1, ze(e, t, r, l), t.child);
}
function So(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !vi(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Ic(e, t, a, r, l)) : (e = dl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var i = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wr, n(i, r) && e.ref === t.ref) return Mt(e, t, l);
  }
  return t.flags |= 1, e = Ht(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ic(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (wr(a, r) && e.ref === t.ref) if (Ue = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ue = !0);
    else return t.lanes = e.lanes, Mt(e, t, l);
  }
  return da(e, t, n, r, l);
}
function bc(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ie(Cn, Ge), Ge |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ie(Cn, Ge), Ge |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ie(Cn, Ge), Ge |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ie(Cn, Ge), Ge |= r;
  return ze(e, t, l, n), t.child;
}
function Lc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function da(e, t, n, r, l) {
  var a = Qe(n) ? ln : Re.current;
  return a = Dn(t, a), Ln(t, l), n = ii(e, t, n, r, a, l), r = oi(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Mt(e, t, l)) : (de && r && Ya(t), t.flags |= 1, ze(e, t, n, l), t.child);
}
function jo(e, t, n, r, l) {
  if (Qe(n)) {
    var a = !0;
    jl(t);
  } else a = !1;
  if (Ln(t, l), t.stateNode === null) ol(e, t), Cc(t, n, r), ua(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, o = t.memoizedProps;
    i.props = o;
    var u = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = rt(c) : (c = Qe(n) ? ln : Re.current, c = Dn(t, c));
    var p = n.getDerivedStateFromProps, _ = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    _ || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || u !== c) && vo(t, i, r, c), Pt = !1;
    var v = t.memoizedState;
    i.state = v, Il(t, r, i, l), u = t.memoizedState, o !== r || v !== u || Ve.current || Pt ? (typeof p == "function" && (oa(t, n, p, r), u = t.memoizedState), (o = Pt || yo(t, n, o, r, v, u, c)) ? (_ || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, sc(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : it(t.type, o), i.props = c, _ = t.pendingProps, v = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = rt(u) : (u = Qe(n) ? ln : Re.current, u = Dn(t, u));
    var y = n.getDerivedStateFromProps;
    (p = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== _ || v !== u) && vo(t, i, r, u), Pt = !1, v = t.memoizedState, i.state = v, Il(t, r, i, l);
    var w = t.memoizedState;
    o !== _ || v !== w || Ve.current || Pt ? (typeof y == "function" && (oa(t, n, y, r), w = t.memoizedState), (c = Pt || yo(t, n, c, r, v, w, u) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = u, r = c) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return fa(e, t, n, r, a, l);
}
function fa(e, t, n, r, l, a) {
  Lc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && oo(t, n, !1), Mt(e, t, a);
  r = t.stateNode, Mp.current = t;
  var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = zn(t, e.child, null, a), t.child = zn(t, null, o, a)) : ze(e, t, o, a), t.memoizedState = r.state, l && oo(t, n, !0), t.child;
}
function Tc(e) {
  var t = e.stateNode;
  t.pendingContext ? io(e, t.pendingContext, t.pendingContext !== t.context) : t.context && io(e, t.context, !1), ri(e, t.containerInfo);
}
function Eo(e, t, n, r, l) {
  return Rn(), qa(l), t.flags |= 256, ze(e, t, n, r), t.child;
}
var pa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ma(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pc(e, t, n) {
  var r = t.pendingProps, l = pe.current, a = !1, i = (t.flags & 128) !== 0, o;
  if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ie(pe, l & 1), e === null)
    return aa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, i = { mode: "hidden", children: i }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = Yl(i, r, 0, null), e = rn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = ma(n), t.memoizedState = pa, e) : di(t, i));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Ip(e, t, i, r, o, l, n);
  if (a) {
    a = r.fallback, i = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ht(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? a = Ht(o, a) : (a = rn(a, i, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, i = e.child.memoizedState, i = i === null ? ma(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, a.memoizedState = i, a.childLanes = e.childLanes & ~n, t.memoizedState = pa, r;
  }
  return a = e.child, e = a.sibling, r = Ht(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function di(e, t) {
  return t = Yl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Yr(e, t, n, r) {
  return r !== null && qa(r), zn(t, e.child, null, n), e = di(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ip(e, t, n, r, l, a, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Cs(Error(z(422))), Yr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Yl({ mode: "visible", children: r.children }, l, 0, null), a = rn(a, l, i, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && zn(t, e.child, null, i), t.child.memoizedState = ma(i), t.memoizedState = pa, a);
  if (!(t.mode & 1)) return Yr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, a = Error(z(419)), r = Cs(a, r, void 0), Yr(e, t, i, r);
  }
  if (o = (i & e.childLanes) !== 0, Ue || o) {
    if (r = Ce, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Nt(e, l), ft(r, e, l, -1));
    }
    return yi(), r = Cs(Error(z(421))), Yr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Up.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, Ke = Wt(l.nextSibling), Ye = t, de = !0, ut = null, e !== null && (Ze[et++] = kt, Ze[et++] = St, Ze[et++] = sn, kt = e.id, St = e.overflow, sn = t), t = di(t, r.children), t.flags |= 4096, t);
}
function Co(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ia(e.return, t, n);
}
function Ns(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Dc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (ze(e, t, r.children, n), r = pe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Co(e, n, t);
      else if (e.tag === 19) Co(e, n, t);
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
  if (ie(pe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && bl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ns(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && bl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ns(t, !0, n, null, a);
      break;
    case "together":
      Ns(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ol(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Mt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), on |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ht(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function bp(e, t, n) {
  switch (t.tag) {
    case 3:
      Tc(t), Rn();
      break;
    case 5:
      ac(t);
      break;
    case 1:
      Qe(t.type) && jl(t);
      break;
    case 4:
      ri(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ie(Nl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ie(pe, pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Pc(e, t, n) : (ie(pe, pe.current & 1), e = Mt(e, t, n), e !== null ? e.sibling : null);
      ie(pe, pe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Dc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ie(pe, pe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, bc(e, t, n);
  }
  return Mt(e, t, n);
}
var Rc, ha, zc, Ac;
Rc = function(e, t) {
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
ha = function() {
};
zc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, tn(vt.current);
    var a = null;
    switch (n) {
      case "input":
        l = As(e, l), r = As(e, r), a = [];
        break;
      case "select":
        l = he({}, l, { value: void 0 }), r = he({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = $s(e, l), r = $s(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = kl);
    }
    Us(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (i in o) o.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (fr.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (i in o) !o.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in u) u.hasOwnProperty(i) && o[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
      } else n || (a || (a = []), a.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (a = a || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (fr.hasOwnProperty(c) ? (u != null && c === "onScroll" && oe("scroll", e), a || o === u || (a = [])) : (a = a || []).push(c, u));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ac = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qn(e, t) {
  if (!de) switch (e.tailMode) {
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
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Lp(e, t, n) {
  var r = t.pendingProps;
  switch (Xa(t), t.tag) {
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
      return Pe(t), null;
    case 1:
      return Qe(t.type) && Sl(), Pe(t), null;
    case 3:
      return r = t.stateNode, An(), ue(Ve), ue(Re), si(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (Sa(ut), ut = null))), ha(e, t), Pe(t), null;
    case 5:
      li(t);
      var l = tn(jr.current);
      if (n = t.type, e !== null && t.stateNode != null) zc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Pe(t), null;
        }
        if (e = tn(vt.current), Gr(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[gt] = t, r[kr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < nr.length; l++) oe(nr[l], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe(
                "error",
                r
              ), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Di(r, a), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, oe("invalid", r);
              break;
            case "textarea":
              zi(r, a), oe("invalid", r);
          }
          Us(n, a), l = null;
          for (var i in a) if (a.hasOwnProperty(i)) {
            var o = a[i];
            i === "children" ? typeof o == "string" ? r.textContent !== o && (a.suppressHydrationWarning !== !0 && Br(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (a.suppressHydrationWarning !== !0 && Br(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : fr.hasOwnProperty(i) && o != null && i === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              Or(r), Ri(r, a, !0);
              break;
            case "textarea":
              Or(r), Ai(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = kl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = du(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[gt] = t, e[kr] = r, Rc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Vs(n, r), n) {
              case "dialog":
                oe("cancel", e), oe("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < nr.length; l++) oe(nr[l], e);
                l = r;
                break;
              case "source":
                oe("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                oe(
                  "error",
                  e
                ), oe("load", e), l = r;
                break;
              case "details":
                oe("toggle", e), l = r;
                break;
              case "input":
                Di(e, r), l = As(e, r), oe("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = he({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                zi(e, r), l = $s(e, r), oe("invalid", e);
                break;
              default:
                l = r;
            }
            Us(n, l), o = l;
            for (a in o) if (o.hasOwnProperty(a)) {
              var u = o[a];
              a === "style" ? mu(e, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && fu(e, u)) : a === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && pr(e, u) : typeof u == "number" && pr(e, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (fr.hasOwnProperty(a) ? u != null && a === "onScroll" && oe("scroll", e) : u != null && Ra(e, a, u, i));
            }
            switch (n) {
              case "input":
                Or(e), Ri(e, r, !1);
                break;
              case "textarea":
                Or(e), Ai(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Nn(e, !!r.multiple, a, !1) : r.defaultValue != null && Nn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = kl);
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
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) Ac(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = tn(jr.current), tn(vt.current), Gr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[gt] = t, (a = r.nodeValue !== n) && (e = Ye, e !== null)) switch (e.tag) {
            case 3:
              Br(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[gt] = t, t.stateNode = r;
      }
      return Pe(t), null;
    case 13:
      if (ue(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (de && Ke !== null && t.mode & 1 && !(t.flags & 128)) tc(), Rn(), t.flags |= 98560, a = !1;
        else if (a = Gr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(z(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(z(317));
            a[gt] = t;
          } else Rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Pe(t), a = !1;
        } else ut !== null && (Sa(ut), ut = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pe.current & 1 ? Se === 0 && (Se = 3) : yi())), t.updateQueue !== null && (t.flags |= 4), Pe(t), null);
    case 4:
      return An(), ha(e, t), e === null && xr(t.stateNode.containerInfo), Pe(t), null;
    case 10:
      return ei(t.type._context), Pe(t), null;
    case 17:
      return Qe(t.type) && Sl(), Pe(t), null;
    case 19:
      if (ue(pe), a = t.memoizedState, a === null) return Pe(t), null;
      if (r = (t.flags & 128) !== 0, i = a.rendering, i === null) if (r) qn(a, !1);
      else {
        if (Se !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = bl(e), i !== null) {
            for (t.flags |= 128, qn(a, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, i = a.alternate, i === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, e = i.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ie(pe, pe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && ye() > Fn && (t.flags |= 128, r = !0, qn(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = bl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !de) return Pe(t), null;
        } else 2 * ye() - a.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, qn(a, !1), t.lanes = 4194304);
        a.isBackwards ? (i.sibling = t.child, t.child = i) : (n = a.last, n !== null ? n.sibling = i : t.child = i, a.last = i);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ye(), t.sibling = null, n = pe.current, ie(pe, r ? n & 1 | 2 : n & 1), t) : (Pe(t), null);
    case 22:
    case 23:
      return gi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ge & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Tp(e, t) {
  switch (Xa(t), t.tag) {
    case 1:
      return Qe(t.type) && Sl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return An(), ue(Ve), ue(Re), si(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return li(t), null;
    case 13:
      if (ue(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        Rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ue(pe), null;
    case 4:
      return An(), null;
    case 10:
      return ei(t.type._context), null;
    case 22:
    case 23:
      return gi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xr = !1, De = !1, Pp = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
function En(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ge(e, t, r);
  }
  else n.current = null;
}
function ga(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var No = !1;
function Dp(e, t) {
  if (Zs = wl, e = Uu(), Ka(e)) {
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
        var i = 0, o = -1, u = -1, c = 0, p = 0, _ = e, v = null;
        t: for (; ; ) {
          for (var y; _ !== n || l !== 0 && _.nodeType !== 3 || (o = i + l), _ !== a || r !== 0 && _.nodeType !== 3 || (u = i + r), _.nodeType === 3 && (i += _.nodeValue.length), (y = _.firstChild) !== null; )
            v = _, _ = y;
          for (; ; ) {
            if (_ === e) break t;
            if (v === n && ++c === l && (o = i), v === a && ++p === r && (u = i), (y = _.nextSibling) !== null) break;
            _ = v, v = _.parentNode;
          }
          _ = y;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ea = { focusedElem: e, selectionRange: n }, wl = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
  else for (; $ !== null; ) {
    t = $;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var k = w.memoizedProps, j = w.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : it(t.type, k), j);
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
          throw Error(z(163));
      }
    } catch (g) {
      ge(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, $ = e;
      break;
    }
    $ = t.return;
  }
  return w = No, No = !1, w;
}
function ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && ga(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Gl(e, t) {
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
function ya(e) {
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
function Oc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Oc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gt], delete t[kr], delete t[ra], delete t[gp], delete t[yp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Fc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mo(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function va(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = kl));
  else if (r !== 4 && (e = e.child, e !== null)) for (va(e, t, n), e = e.sibling; e !== null; ) va(e, t, n), e = e.sibling;
}
function wa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (wa(e, t, n), e = e.sibling; e !== null; ) wa(e, t, n), e = e.sibling;
}
var Me = null, ot = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) $c(e, t, n), n = n.sibling;
}
function $c(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function") try {
    yt.onCommitFiberUnmount(Fl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      De || En(n, t);
    case 6:
      var r = Me, l = ot;
      Me = null, Lt(e, t, n), Me = r, ot = l, Me !== null && (ot ? (e = Me, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null && (ot ? (e = Me, n = n.stateNode, e.nodeType === 8 ? xs(e.parentNode, n) : e.nodeType === 1 && xs(e, n), yr(e)) : xs(Me, n.stateNode));
      break;
    case 4:
      r = Me, l = ot, Me = n.stateNode.containerInfo, ot = !0, Lt(e, t, n), Me = r, ot = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!De && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, i = a.destroy;
          a = a.tag, i !== void 0 && (a & 2 || a & 4) && ga(n, t, i), l = l.next;
        } while (l !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (!De && (En(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        ge(n, t, o);
      }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (De = (r = De) || n.memoizedState !== null, Lt(e, t, n), De = r) : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function Io(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Pp()), t.forEach(function(r) {
      var l = Vp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, i = t, o = i;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            Me = o.stateNode, ot = !1;
            break e;
          case 3:
            Me = o.stateNode.containerInfo, ot = !0;
            break e;
          case 4:
            Me = o.stateNode.containerInfo, ot = !0;
            break e;
        }
        o = o.return;
      }
      if (Me === null) throw Error(z(160));
      $c(a, i, l), Me = null, ot = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      ge(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wc(t, e), t = t.sibling;
}
function Wc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (st(t, e), mt(e), r & 4) {
        try {
          ur(3, e, e.return), Gl(3, e);
        } catch (k) {
          ge(e, e.return, k);
        }
        try {
          ur(5, e, e.return);
        } catch (k) {
          ge(e, e.return, k);
        }
      }
      break;
    case 1:
      st(t, e), mt(e), r & 512 && n !== null && En(n, n.return);
      break;
    case 5:
      if (st(t, e), mt(e), r & 512 && n !== null && En(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          pr(l, "");
        } catch (k) {
          ge(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, i = n !== null ? n.memoizedProps : a, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && a.type === "radio" && a.name != null && uu(l, a), Vs(o, i);
          var c = Vs(o, a);
          for (i = 0; i < u.length; i += 2) {
            var p = u[i], _ = u[i + 1];
            p === "style" ? mu(l, _) : p === "dangerouslySetInnerHTML" ? fu(l, _) : p === "children" ? pr(l, _) : Ra(l, p, _, c);
          }
          switch (o) {
            case "input":
              Os(l, a);
              break;
            case "textarea":
              cu(l, a);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var y = a.value;
              y != null ? Nn(l, !!a.multiple, y, !1) : v !== !!a.multiple && (a.defaultValue != null ? Nn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Nn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[kr] = a;
        } catch (k) {
          ge(e, e.return, k);
        }
      }
      break;
    case 6:
      if (st(t, e), mt(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (k) {
          ge(e, e.return, k);
        }
      }
      break;
    case 3:
      if (st(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        yr(t.containerInfo);
      } catch (k) {
        ge(e, e.return, k);
      }
      break;
    case 4:
      st(t, e), mt(e);
      break;
    case 13:
      st(t, e), mt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (mi = ye())), r & 4 && Io(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (De = (c = De) || p, st(t, e), De = c) : st(t, e), mt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1) for ($ = e, p = e.child; p !== null; ) {
          for (_ = $ = p; $ !== null; ) {
            switch (v = $, y = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ur(4, v, v.return);
                break;
              case 1:
                En(v, v.return);
                var w = v.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    ge(r, n, k);
                  }
                }
                break;
              case 5:
                En(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Lo(_);
                  continue;
                }
            }
            y !== null ? (y.return = v, $ = y) : Lo(_);
          }
          p = p.sibling;
        }
        e: for (p = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (p === null) {
              p = _;
              try {
                l = _.stateNode, c ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (o = _.stateNode, u = _.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = pu("display", i));
              } catch (k) {
                ge(e, e.return, k);
              }
            }
          } else if (_.tag === 6) {
            if (p === null) try {
              _.stateNode.nodeValue = c ? "" : _.memoizedProps;
            } catch (k) {
              ge(e, e.return, k);
            }
          } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
            _.child.return = _, _ = _.child;
            continue;
          }
          if (_ === e) break e;
          for (; _.sibling === null; ) {
            if (_.return === null || _.return === e) break e;
            p === _ && (p = null), _ = _.return;
          }
          p === _ && (p = null), _.sibling.return = _.return, _ = _.sibling;
        }
      }
      break;
    case 19:
      st(t, e), mt(e), r & 4 && Io(e);
      break;
    case 21:
      break;
    default:
      st(
        t,
        e
      ), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (pr(l, ""), r.flags &= -33);
          var a = Mo(e);
          wa(e, a, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, o = Mo(e);
          va(e, o, i);
          break;
        default:
          throw Error(z(161));
      }
    } catch (u) {
      ge(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rp(e, t, n) {
  $ = e, Uc(e);
}
function Uc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var l = $, a = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Xr;
      if (!i) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || De;
        o = Xr;
        var c = De;
        if (Xr = i, (De = u) && !c) for ($ = l; $ !== null; ) i = $, u = i.child, i.tag === 22 && i.memoizedState !== null ? To(l) : u !== null ? (u.return = i, $ = u) : To(l);
        for (; a !== null; ) $ = a, Uc(a), a = a.sibling;
        $ = l, Xr = o, De = c;
      }
      bo(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, $ = a) : bo(e);
  }
}
function bo(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            De || Gl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !De) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && mo(t, a, r);
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
              mo(t, i, n);
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
                var p = c.memoizedState;
                if (p !== null) {
                  var _ = p.dehydrated;
                  _ !== null && yr(_);
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
            throw Error(z(163));
        }
        De || t.flags & 512 && ya(t);
      } catch (v) {
        ge(t, t.return, v);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function Lo(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, $ = n;
      break;
    }
    $ = t.return;
  }
}
function To(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Gl(4, t);
          } catch (u) {
            ge(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ge(t, l, u);
            }
          }
          var a = t.return;
          try {
            ya(t);
          } catch (u) {
            ge(t, a, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ya(t);
          } catch (u) {
            ge(t, i, u);
          }
      }
    } catch (u) {
      ge(t, t.return, u);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, $ = o;
      break;
    }
    $ = t.return;
  }
}
var zp = Math.ceil, Pl = It.ReactCurrentDispatcher, fi = It.ReactCurrentOwner, nt = It.ReactCurrentBatchConfig, le = 0, Ce = null, we = null, be = 0, Ge = 0, Cn = Yt(0), Se = 0, Mr = null, on = 0, Kl = 0, pi = 0, cr = null, We = null, mi = 0, Fn = 1 / 0, xt = null, Dl = !1, xa = null, Vt = null, qr = !1, At = null, Rl = 0, dr = 0, _a = null, ul = -1, cl = 0;
function Ae() {
  return le & 6 ? ye() : ul !== -1 ? ul : ul = ye();
}
function Qt(e) {
  return e.mode & 1 ? le & 2 && be !== 0 ? be & -be : wp.transition !== null ? (cl === 0 && (cl = Cu()), cl) : (e = ae, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Pu(e.type)), e) : 1;
}
function ft(e, t, n, r) {
  if (50 < dr) throw dr = 0, _a = null, Error(z(185));
  Lr(e, n, r), (!(le & 2) || e !== Ce) && (e === Ce && (!(le & 2) && (Kl |= n), Se === 4 && Rt(e, be)), He(e, r), n === 1 && le === 0 && !(t.mode & 1) && (Fn = ye() + 500, Ql && Xt()));
}
function He(e, t) {
  var n = e.callbackNode;
  wf(e, t);
  var r = vl(e, e === Ce ? be : 0);
  if (r === 0) n !== null && $i(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && $i(n), t === 1) e.tag === 0 ? vp(Po.bind(null, e)) : Ju(Po.bind(null, e)), mp(function() {
      !(le & 6) && Xt();
    }), n = null;
    else {
      switch (Nu(r)) {
        case 1:
          n = $a;
          break;
        case 4:
          n = ju;
          break;
        case 16:
          n = yl;
          break;
        case 536870912:
          n = Eu;
          break;
        default:
          n = yl;
      }
      n = Xc(n, Vc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Vc(e, t) {
  if (ul = -1, cl = 0, le & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = vl(e, e === Ce ? be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zl(e, r);
  else {
    t = r;
    var l = le;
    le |= 2;
    var a = Hc();
    (Ce !== e || be !== t) && (xt = null, Fn = ye() + 500, nn(e, t));
    do
      try {
        Fp();
        break;
      } catch (o) {
        Qc(e, o);
      }
    while (!0);
    Za(), Pl.current = a, le = l, we !== null ? t = 0 : (Ce = null, be = 0, t = Se);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ks(e), l !== 0 && (r = l, t = ka(e, l))), t === 1) throw n = Mr, nn(e, 0), Rt(e, r), He(e, ye()), n;
    if (t === 6) Rt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Ap(l) && (t = zl(e, r), t === 2 && (a = Ks(e), a !== 0 && (r = a, t = ka(e, a))), t === 1)) throw n = Mr, nn(e, 0), Rt(e, r), He(e, ye()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Jt(e, We, xt);
          break;
        case 3:
          if (Rt(e, r), (r & 130023424) === r && (t = mi + 500 - ye(), 10 < t)) {
            if (vl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Ae(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = na(Jt.bind(null, e, We, xt), t);
            break;
          }
          Jt(e, We, xt);
          break;
        case 4:
          if (Rt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - dt(r);
            a = 1 << i, i = t[i], i > l && (l = i), r &= ~a;
          }
          if (r = l, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = na(Jt.bind(null, e, We, xt), r);
            break;
          }
          Jt(e, We, xt);
          break;
        case 5:
          Jt(e, We, xt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return He(e, ye()), e.callbackNode === n ? Vc.bind(null, e) : null;
}
function ka(e, t) {
  var n = cr;
  return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = zl(e, t), e !== 2 && (t = We, We = n, t !== null && Sa(t)), e;
}
function Sa(e) {
  We === null ? We = e : We.push.apply(We, e);
}
function Ap(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!pt(a(), l)) return !1;
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
function Rt(e, t) {
  for (t &= ~pi, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - dt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Po(e) {
  if (le & 6) throw Error(z(327));
  Tn();
  var t = vl(e, 0);
  if (!(t & 1)) return He(e, ye()), null;
  var n = zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ks(e);
    r !== 0 && (t = r, n = ka(e, r));
  }
  if (n === 1) throw n = Mr, nn(e, 0), Rt(e, t), He(e, ye()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jt(e, We, xt), He(e, ye()), null;
}
function hi(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    le = n, le === 0 && (Fn = ye() + 500, Ql && Xt());
  }
}
function un(e) {
  At !== null && At.tag === 0 && !(le & 6) && Tn();
  var t = le;
  le |= 1;
  var n = nt.transition, r = ae;
  try {
    if (nt.transition = null, ae = 1, e) return e();
  } finally {
    ae = r, nt.transition = n, le = t, !(le & 6) && Xt();
  }
}
function gi() {
  Ge = Cn.current, ue(Cn);
}
function nn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, pp(n)), we !== null) for (n = we.return; n !== null; ) {
    var r = n;
    switch (Xa(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Sl();
        break;
      case 3:
        An(), ue(Ve), ue(Re), si();
        break;
      case 5:
        li(r);
        break;
      case 4:
        An();
        break;
      case 13:
        ue(pe);
        break;
      case 19:
        ue(pe);
        break;
      case 10:
        ei(r.type._context);
        break;
      case 22:
      case 23:
        gi();
    }
    n = n.return;
  }
  if (Ce = e, we = e = Ht(e.current, null), be = Ge = t, Se = 0, Mr = null, pi = Kl = on = 0, We = cr = null, en !== null) {
    for (t = 0; t < en.length; t++) if (n = en[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var i = a.next;
        a.next = l, r.next = i;
      }
      n.pending = r;
    }
    en = null;
  }
  return e;
}
function Qc(e, t) {
  do {
    var n = we;
    try {
      if (Za(), al.current = Tl, Ll) {
        for (var r = me.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Ll = !1;
      }
      if (an = 0, Ee = ke = me = null, or = !1, Er = 0, fi.current = null, n === null || n.return === null) {
        Se = 1, Mr = t, we = null;
        break;
      }
      e: {
        var a = e, i = n.return, o = n, u = t;
        if (t = be, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, p = o, _ = p.tag;
          if (!(p.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
            var v = p.alternate;
            v ? (p.updateQueue = v.updateQueue, p.memoizedState = v.memoizedState, p.lanes = v.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var y = xo(i);
          if (y !== null) {
            y.flags &= -257, _o(y, i, o, a, t), y.mode & 1 && wo(a, c, t), t = y, u = c;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(u), t.updateQueue = k;
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              wo(a, c, t), yi();
              break e;
            }
            u = Error(z(426));
          }
        } else if (de && o.mode & 1) {
          var j = xo(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), _o(j, i, o, a, t), qa(On(u, o));
            break e;
          }
        }
        a = u = On(u, o), Se !== 4 && (Se = 2), cr === null ? cr = [a] : cr.push(a), a = i;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var d = Nc(a, u, t);
              po(a, d);
              break e;
            case 1:
              o = u;
              var f = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Vt === null || !Vt.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Mc(a, o, t);
                po(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Gc(n);
    } catch (x) {
      t = x, we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Hc() {
  var e = Pl.current;
  return Pl.current = Tl, e === null ? Tl : e;
}
function yi() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4), Ce === null || !(on & 268435455) && !(Kl & 268435455) || Rt(Ce, be);
}
function zl(e, t) {
  var n = le;
  le |= 2;
  var r = Hc();
  (Ce !== e || be !== t) && (xt = null, nn(e, t));
  do
    try {
      Op();
      break;
    } catch (l) {
      Qc(e, l);
    }
  while (!0);
  if (Za(), le = n, Pl.current = r, we !== null) throw Error(z(261));
  return Ce = null, be = 0, Se;
}
function Op() {
  for (; we !== null; ) Bc(we);
}
function Fp() {
  for (; we !== null && !cf(); ) Bc(we);
}
function Bc(e) {
  var t = Yc(e.alternate, e, Ge);
  e.memoizedProps = e.pendingProps, t === null ? Gc(e) : we = t, fi.current = null;
}
function Gc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Tp(n, t), n !== null) {
        n.flags &= 32767, we = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Se = 6, we = null;
        return;
      }
    } else if (n = Lp(n, t, Ge), n !== null) {
      we = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function Jt(e, t, n) {
  var r = ae, l = nt.transition;
  try {
    nt.transition = null, ae = 1, $p(e, t, n, r);
  } finally {
    nt.transition = l, ae = r;
  }
  return null;
}
function $p(e, t, n, r) {
  do
    Tn();
  while (At !== null);
  if (le & 6) throw Error(z(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (xf(e, a), e === Ce && (we = Ce = null, be = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || qr || (qr = !0, Xc(yl, function() {
    return Tn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = nt.transition, nt.transition = null;
    var i = ae;
    ae = 1;
    var o = le;
    le |= 4, fi.current = null, Dp(e, n), Wc(n, e), ap(ea), wl = !!Zs, ea = Zs = null, e.current = n, Rp(n), df(), le = o, ae = i, nt.transition = a;
  } else e.current = n;
  if (qr && (qr = !1, At = e, Rl = l), a = e.pendingLanes, a === 0 && (Vt = null), mf(n.stateNode), He(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Dl) throw Dl = !1, e = xa, xa = null, e;
  return Rl & 1 && e.tag !== 0 && Tn(), a = e.pendingLanes, a & 1 ? e === _a ? dr++ : (dr = 0, _a = e) : dr = 0, Xt(), null;
}
function Tn() {
  if (At !== null) {
    var e = Nu(Rl), t = nt.transition, n = ae;
    try {
      if (nt.transition = null, ae = 16 > e ? 16 : e, At === null) var r = !1;
      else {
        if (e = At, At = null, Rl = 0, le & 6) throw Error(z(331));
        var l = le;
        for (le |= 4, $ = e.current; $ !== null; ) {
          var a = $, i = a.child;
          if ($.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for ($ = c; $ !== null; ) {
                  var p = $;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ur(8, p, a);
                  }
                  var _ = p.child;
                  if (_ !== null) _.return = p, $ = _;
                  else for (; $ !== null; ) {
                    p = $;
                    var v = p.sibling, y = p.return;
                    if (Oc(p), p === c) {
                      $ = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = y, $ = v;
                      break;
                    }
                    $ = y;
                  }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var j = k.sibling;
                    k.sibling = null, k = j;
                  } while (k !== null);
                }
              }
              $ = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) i.return = a, $ = i;
          else e: for (; $ !== null; ) {
            if (a = $, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                ur(9, a, a.return);
            }
            var d = a.sibling;
            if (d !== null) {
              d.return = a.return, $ = d;
              break e;
            }
            $ = a.return;
          }
        }
        var f = e.current;
        for ($ = f; $ !== null; ) {
          i = $;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) m.return = i, $ = m;
          else e: for (i = f; $ !== null; ) {
            if (o = $, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Gl(9, o);
              }
            } catch (x) {
              ge(o, o.return, x);
            }
            if (o === i) {
              $ = null;
              break e;
            }
            var g = o.sibling;
            if (g !== null) {
              g.return = o.return, $ = g;
              break e;
            }
            $ = o.return;
          }
        }
        if (le = l, Xt(), yt && typeof yt.onPostCommitFiberRoot == "function") try {
          yt.onPostCommitFiberRoot(Fl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ae = n, nt.transition = t;
    }
  }
  return !1;
}
function Do(e, t, n) {
  t = On(n, t), t = Nc(e, t, 1), e = Ut(e, t, 1), t = Ae(), e !== null && (Lr(e, 1, t), He(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) Do(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Do(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
        e = On(n, e), e = Mc(t, e, 1), t = Ut(t, e, 1), e = Ae(), t !== null && (Lr(t, 1, e), He(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Wp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ae(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (be & n) === n && (Se === 4 || Se === 3 && (be & 130023424) === be && 500 > ye() - mi ? nn(e, 0) : pi |= n), He(e, t);
}
function Kc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Wr, Wr <<= 1, !(Wr & 130023424) && (Wr = 4194304)) : t = 1);
  var n = Ae();
  e = Nt(e, t), e !== null && (Lr(e, t, n), He(e, n));
}
function Up(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Kc(e, n);
}
function Vp(e, t) {
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
      throw Error(z(314));
  }
  r !== null && r.delete(t), Kc(e, n);
}
var Yc;
Yc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ve.current) Ue = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ue = !1, bp(e, t, n);
    Ue = !!(e.flags & 131072);
  }
  else Ue = !1, de && t.flags & 1048576 && Zu(t, Cl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ol(e, t), e = t.pendingProps;
      var l = Dn(t, Re.current);
      Ln(t, n), l = ii(null, t, r, e, l, n);
      var a = oi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Qe(r) ? (a = !0, jl(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ni(t), l.updater = Bl, t.stateNode = l, l._reactInternals = t, ua(t, r, e, n), t = fa(null, t, r, !0, a, n)) : (t.tag = 0, de && a && Ya(t), ze(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ol(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Hp(r), e = it(r, e), l) {
          case 0:
            t = da(null, t, r, e, n);
            break e;
          case 1:
            t = jo(null, t, r, e, n);
            break e;
          case 11:
            t = ko(null, t, r, e, n);
            break e;
          case 14:
            t = So(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(z(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), da(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), jo(e, t, r, l, n);
    case 3:
      e: {
        if (Tc(t), e === null) throw Error(z(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, sc(e, t), Il(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = On(Error(z(423)), t), t = Eo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = On(Error(z(424)), t), t = Eo(e, t, r, n, l);
          break e;
        } else for (Ke = Wt(t.stateNode.containerInfo.firstChild), Ye = t, de = !0, ut = null, n = rc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Rn(), r === l) {
            t = Mt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ac(t), e === null && aa(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, i = l.children, ta(r, l) ? i = null : a !== null && ta(r, a) && (t.flags |= 32), Lc(e, t), ze(e, t, i, n), t.child;
    case 6:
      return e === null && aa(t), null;
    case 13:
      return Pc(e, t, n);
    case 4:
      return ri(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : ze(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), ko(e, t, r, l, n);
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, i = l.value, ie(Nl, r._currentValue), r._currentValue = i, a !== null) if (pt(a.value, i)) {
          if (a.children === l.children && !Ve.current) {
            t = Mt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var o = a.dependencies;
          if (o !== null) {
            i = a.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (a.tag === 1) {
                  u = jt(-1, n & -n), u.tag = 2;
                  var c = a.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var p = c.pending;
                    p === null ? u.next = u : (u.next = p.next, p.next = u), c.pending = u;
                  }
                }
                a.lanes |= n, u = a.alternate, u !== null && (u.lanes |= n), ia(
                  a.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (i = a.return, i === null) throw Error(z(341));
            i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), ia(i, n, t), i = a.sibling;
          } else i = a.child;
          if (i !== null) i.return = a;
          else for (i = a; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (a = i.sibling, a !== null) {
              a.return = i.return, i = a;
              break;
            }
            i = i.return;
          }
          a = i;
        }
        ze(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Ln(t, n), l = rt(l), r = r(l), t.flags |= 1, ze(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = it(r, t.pendingProps), l = it(r.type, l), So(e, t, r, l, n);
    case 15:
      return Ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : it(r, l), ol(e, t), t.tag = 1, Qe(r) ? (e = !0, jl(t)) : e = !1, Ln(t, n), Cc(t, r, l), ua(t, r, l, n), fa(null, t, r, !0, e, n);
    case 19:
      return Dc(e, t, n);
    case 22:
      return bc(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function Xc(e, t) {
  return Su(e, t);
}
function Qp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function tt(e, t, n, r) {
  return new Qp(e, t, n, r);
}
function vi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Hp(e) {
  if (typeof e == "function") return vi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Aa) return 11;
    if (e === Oa) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function dl(e, t, n, r, l, a) {
  var i = 2;
  if (r = e, typeof e == "function") vi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case gn:
      return rn(n.children, l, a, t);
    case za:
      i = 8, l |= 8;
      break;
    case Ps:
      return e = tt(12, n, t, l | 2), e.elementType = Ps, e.lanes = a, e;
    case Ds:
      return e = tt(13, n, t, l), e.elementType = Ds, e.lanes = a, e;
    case Rs:
      return e = tt(19, n, t, l), e.elementType = Rs, e.lanes = a, e;
    case au:
      return Yl(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case lu:
          i = 10;
          break e;
        case su:
          i = 9;
          break e;
        case Aa:
          i = 11;
          break e;
        case Oa:
          i = 14;
          break e;
        case Tt:
          i = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = tt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function rn(e, t, n, r) {
  return e = tt(7, e, r, t), e.lanes = n, e;
}
function Yl(e, t, n, r) {
  return e = tt(22, e, r, t), e.elementType = au, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ms(e, t, n) {
  return e = tt(6, e, null, t), e.lanes = n, e;
}
function Is(e, t, n) {
  return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Bp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = us(0), this.expirationTimes = us(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = us(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function wi(e, t, n, r, l, a, i, o, u) {
  return e = new Bp(e, t, n, o, u), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = tt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ni(a), e;
}
function Gp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function qc(e) {
  if (!e) return Gt;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Qe(n)) return qu(e, n, t);
  }
  return t;
}
function Jc(e, t, n, r, l, a, i, o, u) {
  return e = wi(n, r, !0, e, l, a, i, o, u), e.context = qc(null), n = e.current, r = Ae(), l = Qt(n), a = jt(r, l), a.callback = t ?? null, Ut(n, a, l), e.current.lanes = l, Lr(e, l, r), He(e, r), e;
}
function Xl(e, t, n, r) {
  var l = t.current, a = Ae(), i = Qt(l);
  return n = qc(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(a, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ut(l, t, i), e !== null && (ft(e, l, i, a), sl(e, l, i)), i;
}
function Al(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ro(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xi(e, t) {
  Ro(e, t), (e = e.alternate) && Ro(e, t);
}
function Kp() {
  return null;
}
var Zc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function _i(e) {
  this._internalRoot = e;
}
ql.prototype.render = _i.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Xl(e, t, null, null);
};
ql.prototype.unmount = _i.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      Xl(null, e, null, null);
    }), t[Ct] = null;
  }
};
function ql(e) {
  this._internalRoot = e;
}
ql.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = bu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++) ;
    Dt.splice(n, 0, e), n === 0 && Tu(e);
  }
};
function ki(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Jl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function zo() {
}
function Yp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var c = Al(i);
        a.call(c);
      };
    }
    var i = Jc(t, r, e, 0, null, !1, !1, "", zo);
    return e._reactRootContainer = i, e[Ct] = i.current, xr(e.nodeType === 8 ? e.parentNode : e), un(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = Al(u);
      o.call(c);
    };
  }
  var u = wi(e, 0, !1, null, null, !1, !1, "", zo);
  return e._reactRootContainer = u, e[Ct] = u.current, xr(e.nodeType === 8 ? e.parentNode : e), un(function() {
    Xl(t, u, n, r);
  }), u;
}
function Zl(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = Al(i);
        o.call(u);
      };
    }
    Xl(t, i, e, l);
  } else i = Yp(n, t, e, l, r);
  return Al(i);
}
Mu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = tr(t.pendingLanes);
        n !== 0 && (Wa(t, n | 1), He(t, ye()), !(le & 6) && (Fn = ye() + 500, Xt()));
      }
      break;
    case 13:
      un(function() {
        var r = Nt(e, 1);
        if (r !== null) {
          var l = Ae();
          ft(r, e, 1, l);
        }
      }), xi(e, 1);
  }
};
Ua = function(e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      ft(t, e, 134217728, n);
    }
    xi(e, 134217728);
  }
};
Iu = function(e) {
  if (e.tag === 13) {
    var t = Qt(e), n = Nt(e, t);
    if (n !== null) {
      var r = Ae();
      ft(n, e, t, r);
    }
    xi(e, t);
  }
};
bu = function() {
  return ae;
};
Lu = function(e, t) {
  var n = ae;
  try {
    return ae = e, t();
  } finally {
    ae = n;
  }
};
Hs = function(e, t, n) {
  switch (t) {
    case "input":
      if (Os(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Vl(r);
            if (!l) throw Error(z(90));
            ou(r), Os(r, l);
          }
        }
      }
      break;
    case "textarea":
      cu(e, n);
      break;
    case "select":
      t = n.value, t != null && Nn(e, !!n.multiple, t, !1);
  }
};
yu = hi;
vu = un;
var Xp = { usingClientEntryPoint: !1, Events: [Pr, xn, Vl, hu, gu, hi] }, Jn = { findFiberByHostInstance: Zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qp = { bundleType: Jn.bundleType, version: Jn.version, rendererPackageName: Jn.rendererPackageName, rendererConfig: Jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: It.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _u(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Jn.findFiberByHostInstance || Kp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Jr.isDisabled && Jr.supportsFiber) try {
    Fl = Jr.inject(qp), yt = Jr;
  } catch {
  }
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp;
qe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ki(t)) throw Error(z(200));
  return Gp(e, t, null, n);
};
qe.createRoot = function(e, t) {
  if (!ki(e)) throw Error(z(299));
  var n = !1, r = "", l = Zc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = wi(e, 1, !1, null, null, n, !1, r, l), e[Ct] = t.current, xr(e.nodeType === 8 ? e.parentNode : e), new _i(t);
};
qe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = _u(t), e = e === null ? null : e.stateNode, e;
};
qe.flushSync = function(e) {
  return un(e);
};
qe.hydrate = function(e, t, n) {
  if (!Jl(t)) throw Error(z(200));
  return Zl(null, e, t, !0, n);
};
qe.hydrateRoot = function(e, t, n) {
  if (!ki(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", i = Zc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Jc(t, null, e, 1, n ?? null, l, !1, a, i), e[Ct] = t.current, xr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new ql(t);
};
qe.render = function(e, t, n) {
  if (!Jl(t)) throw Error(z(200));
  return Zl(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function(e) {
  if (!Jl(e)) throw Error(z(40));
  return e._reactRootContainer ? (un(function() {
    Zl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ct] = null;
    });
  }), !0) : !1;
};
qe.unstable_batchedUpdates = hi;
qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Jl(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Zl(e, t, n, !1, r);
};
qe.version = "18.3.1-next-f1338f8080-20240426";
function ed() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ed);
    } catch (e) {
      console.error(e);
    }
}
ed(), eu.exports = qe;
var Ie = eu.exports, td, Ao = Ie;
td = Ao.createRoot, Ao.hydrateRoot;
var nd = { exports: {} }, es = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp = h, Zp = Symbol.for("react.element"), em = Symbol.for("react.fragment"), tm = Object.prototype.hasOwnProperty, nm = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, rm = { key: !0, ref: !0, __self: !0, __source: !0 };
function rd(e, t, n) {
  var r, l = {}, a = null, i = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) tm.call(t, r) && !rm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Zp, type: e, key: a, ref: i, props: l, _owner: nm.current };
}
es.Fragment = em;
es.jsx = rd;
es.jsxs = rd;
nd.exports = es;
var s = nd.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var lm = {
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
const sm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Z = (e, t) => {
  const n = h.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: u,
      ...c
    }, p) => h.createElement(
      "svg",
      {
        ref: p,
        ...lm,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${sm(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([_, v]) => h.createElement(_, v)),
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
const ld = Z("AlertCircle", [
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
const am = Z("AlertTriangle", [
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
const im = Z("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sd = Z("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = Z("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = Z("ArrowUpDown", [
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
const ad = Z("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = Z("Box", [
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
const cm = Z("Calendar", [
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
const dm = Z("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Si = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const id = Z("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = Z("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = Z("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = Z("Download", [
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
const ud = Z("FileJson", [
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
const mm = Z("Folder", [
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
const hm = Z("Info", [
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
const cd = Z("LayoutGrid", [
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
const gm = Z("LayoutList", [
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
const ym = Z("Link2Off", [
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
const vm = Z("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = Z("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wm = Z("Maximize", [
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
const xm = Z("Minimize", [
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
const _m = Z("MoreVertical", [
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
const dd = Z("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = Z("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const km = Z("PlusCircle", [
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
const ji = Z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = Z("RefreshCw", [
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
const $n = Z("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sm = Z("Settings", [
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
const ja = Z("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ea = Z("Star", [
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
const fn = Z("Tag", [
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
const Wn = Z("Trash2", [
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
const jm = Z("Type", [
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
const Em = Z("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = Z("Upload", [
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
const xe = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = X;
async function ne(e) {
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
const Nm = async () => {
  const e = await X.fetchApi("/meld/home-dir");
  return (await ne(e)).home;
};
let Ol = !1;
const Mm = (e) => {
  Ol = e, Ol && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Im = (...e) => {
  Ol && console.log("[Meld]", ...e);
}, bm = (...e) => {
  Ol && console.warn("[Meld]", ...e);
}, Lm = (...e) => {
  console.error("[Meld]", ...e);
}, Q = {
  log: Im,
  warn: bm,
  error: Lm,
  init: Mm
}, fl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await X.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return ne(a);
}, fd = async (e) => {
  const t = await X.fetchApi(`/meld/image/${e}/details`);
  return ne(t);
}, Ca = async (e, t = !1) => {
  const n = await X.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await ne(n);
}, Ei = async (e) => {
  const t = await X.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return ne(t);
}, pd = async (e) => {
  const t = await X.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return ne(t);
}, $o = async (e, t) => {
  const n = await X.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await ne(n);
}, Tm = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await X.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await ne(r);
  } catch {
    return [];
  }
}, Na = async (e) => {
  const t = await X.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await ne(t);
  } catch {
    return [];
  }
}, Pm = async (e, t) => {
  const n = await X.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await ne(n);
}, Ma = async (e, t, n) => {
  const r = await X.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await ne(r);
}, Dm = async (e) => {
  const t = await X.fetchApi(`/meld/image/${e}/workflow`);
  return ne(t);
}, Rm = async (e) => {
  const t = await X.fetchApi(`/meld/image/${e}/snapshot_data`);
  return ne(t);
}, zm = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await X.fetchApi(n);
  return ne(r);
}, Am = async () => {
  const e = await X.fetchApi("/meld/search-suggestions");
  return ne(e);
}, Om = async () => {
  const e = await X.fetchApi("/meld/search-keywords");
  return ne(e);
}, Fm = async () => {
  const e = await X.fetchApi("/meld/search-config");
  return ne(e);
}, $m = async () => {
  const e = await X.fetchApi("/meld/favorites");
  return ne(e);
}, Wm = async (e, t) => {
  const n = await X.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await ne(n);
}, Wo = async (e) => {
  const t = await X.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await ne(t);
}, Um = async (e, t, n) => {
  const r = await X.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await ne(r);
}, Vm = {
  dev_mode: !1,
  "gallery.show_parent_image": !0,
  "gallery.show_parent_images": !1,
  "sidebar.show_filename": "filename",
  "sidebar.show_dimensions": !0,
  "sidebar.show_created_at": !1,
  "sidebar.show_model_name": !0,
  "sidebar.show_positive_prompt": !0,
  "sidebar.show_negative_prompt": !1,
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
  "search.show_all_keywords": !0
}, md = async () => {
  let e;
  try {
    const t = await X.fetchApi("/meld/settings");
    e = await ne(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Vm;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Qm = async (e, t) => {
  const n = await X.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await ne(n);
}, Hm = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
  viewScope: "default",
  viewerImageId: null,
  viewerMode: "gallery",
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
function Bm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), a = e.images.filter((o) => !l.has(o.id)), i = new Set(e.selectedIds);
      for (const o of t.payload)
        i.delete(o);
      return {
        ...e,
        images: a,
        selectedIds: i,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const l = t.payload, a = [...e.images, ...l], i = Array.from(
        new Map(a.map((o) => [o.id, o])).values()
      ).sort((o, u) => u.created_at - o.created_at);
      return {
        ...e,
        images: i,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + l.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const l = t.payload, a = e.images.map(
        (o) => o.id === l.id ? l : o
      ), i = e.lineageImages.map(
        (o) => o.id === l.id ? l : o
      );
      return {
        ...e,
        images: a,
        lineageImages: i
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: a, offset: i } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !l.some((u) => u.id === o) && (o = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: a,
          offset: i,
          limit: e.pagination.limit,
          hasMore: i + l.length < a
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: a, offset: i } = t.payload, o = [...e.images, ...l], u = Array.from(
        new Map(o.map((c) => [c.id, c])).values()
      );
      return {
        ...e,
        images: u,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: a,
          offset: i,
          hasMore: i + l.length < a
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
      let a = e.lastSelectedId;
      return l.has(t.payload) ? (l.delete(t.payload), a === t.payload && (a = null)) : (l.add(t.payload), a = t.payload), {
        ...e,
        selectedIds: l,
        lastSelectedId: a
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
      ), a = e.images.findIndex(
        (c) => c.id === t.payload
      );
      if (l === -1 || a === -1) return e;
      const [i, o] = [
        Math.min(l, a),
        Math.max(l, a)
      ], u = new Set(e.selectedIds);
      for (let c = i; c <= o; c++)
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
      const l = t.payload, a = typeof l == "number" ? l : l.id, i = typeof l == "number" ? "gallery" : l.mode;
      let o = !1;
      if (typeof l != "number" && l.initialMaskMode && (typeof l.initialMaskMode == "string" ? o = l.initialMaskMode : o = "run"), o)
        return {
          ...e,
          activeModal: {
            type: "mask_editor",
            imageId: a,
            mode: o
          }
        };
      const u = e.viewerMode === "lineage" && i === "lineage" && e.lineageImages.some((c) => c.id === a);
      return {
        ...e,
        viewerImageId: a,
        viewerMode: i,
        viewerInitialMaskMode: o,
        lineageImages: u ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        viewerInitialMaskMode: !1,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const a = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), o = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (p) => p.exists !== !1 && (e.settings["gallery.show_parent_images"] || !p.has_children || i)
      );
      if (e.viewerImageId === null || o.length === 0)
        return e;
      const u = o.findIndex(
        (p) => p.id === e.viewerImageId
      );
      if (u === -1 || u === o.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || u === o.length - 1 && !a)
        return e;
      const c = (u + 1) % o.length;
      return {
        ...e,
        viewerImageId: o[c].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const a = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], i = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), o = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (p) => p.exists !== !1 && (e.settings["gallery.show_parent_images"] || !p.has_children || i)
      );
      if (e.viewerImageId === null || o.length === 0)
        return e;
      const u = o.findIndex(
        (p) => p.id === e.viewerImageId
      );
      if (u === -1 || u === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || u === 0 && !a)
        return e;
      const c = (u - 1 + o.length) % o.length;
      return {
        ...e,
        viewerImageId: o[c].id
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
      }, a = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (a.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: l,
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
const hd = h.createContext(void 0), Gm = ({
  children: e
}) => {
  const [t, n] = h.useReducer(Bm, Hm), r = h.useRef(t.images.length), l = h.useRef(0);
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const a = h.useCallback(
    async (y, w, k) => {
      const j = t.settings["gallery.max_load_count"], d = 200;
      let f = y;
      for (; f < Math.min(w, j) && k === l.current; )
        try {
          const m = Math.min(d, j - f);
          Q.log("Background fetch: starting chunk", {
            offset: f,
            limit: m
          });
          const g = await fl(
            f,
            m,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (k !== l.current || (n({ type: "APPEND_IMAGES", payload: g }), f += g.images.length, g.images.length === 0 || f >= g.total))
            break;
          await new Promise((x) => setTimeout(x, 300));
        } catch (m) {
          Q.error("Background fetch failed", m);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), w = ++l.current;
    try {
      const k = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      Q.log("refreshImages: starting initial fetch", {
        isSearch: k,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const d = await fl(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - y;
      Q.log("refreshImages: initial fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: d }), d.total > j && a(j, d.total, w);
    } catch (k) {
      Q.error("refreshImages: fetch failed", k), n({
        type: "SET_ERROR",
        payload: k instanceof Error ? k.message : String(k)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    a
  ]), o = h.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now();
    try {
      const w = r.current, k = t.searchQuery.trim() !== "", j = t.pagination.limit;
      Q.log("loadMoreImages: starting fetch", {
        nextOffset: w,
        fetchLimit: j,
        isSearch: k
      });
      const d = await fl(
        w,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - y;
      Q.log("loadMoreImages: fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: d });
    } catch (w) {
      Q.error("loadMoreImages: fetch failed", w), n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), u = h.useCallback(async () => {
    try {
      const y = await $m();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      Q.error("Failed to load favorites", y);
    }
  }, []), c = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), k = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: k,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), p = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const k = (await Ei(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: k }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (w) {
      n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    }
  }, [t.selectedIds, t.viewScope]), _ = h.useCallback(
    async (y, w) => {
      try {
        await Qm(y, w), n({ type: "SET_SETTINGS", payload: { [y]: w } });
      } catch (k) {
        n({
          type: "SET_ERROR",
          payload: k instanceof Error ? k.message : String(k)
        });
      }
    },
    []
  ), v = h.useCallback(
    async (y) => {
      const w = t.images.find((k) => k.id === y);
      if (w && !w.is_minimal)
        return w;
      try {
        Q.log("fetchFullImageDetails: fetching full data", { id: y });
        const k = await fd(y);
        return n({ type: "UPDATE_IMAGE", payload: k }), k;
      } catch (k) {
        throw Q.error("Failed to fetch image details", k), k;
      }
    },
    [t.images]
  );
  return h.useEffect(() => {
    (async () => {
      try {
        const w = await md();
        n({ type: "SET_SETTINGS", payload: w });
      } catch (w) {
        Q.error("Failed to load settings", w);
      }
    })();
  }, []), h.useEffect(() => {
    u();
  }, [u]), h.useEffect(() => {
    const y = () => {
      i();
    }, w = (j) => {
      const d = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: d }
      });
    }, k = (j) => {
      const d = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: d.new_count || 0,
          updatedCount: d.updated_count || 0,
          totalCount: d.total_count || 0,
          progress: {
            current: d.total_count || t.scanStatus.progress.total,
            total: d.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), i();
    };
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", w), window.addEventListener("meld-scan-finished", k), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", w), window.removeEventListener("meld-scan-finished", k);
    };
  }, [i, t.scanStatus.progress.total]), h.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    hd.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: c,
        restoreSelected: p,
        updateSetting: _,
        fetchFullImageDetails: v
      },
      children: e
    }
  );
}, je = () => {
  const e = h.useContext(hd);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Be = (e) => {
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
}, Ci = async () => {
  const e = await X.fetchApi("/meld/tags");
  return ne(e);
}, Km = async (e) => {
  const t = await X.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return ne(t);
}, Ym = async (e) => {
  const t = await X.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await ne(t);
}, Xm = async (e, t) => {
  const n = await X.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await ne(n);
}, qm = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await X.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Jm = async (e, t, n = !1, r) => {
  const l = await X.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await ne(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Zm = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await X.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await ne(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, eh = async (e, t, n) => {
  const r = await X.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await ne(r)).count;
  } catch {
    return 0;
  }
}, th = async (e) => {
  const t = await X.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await ne(t);
}, nh = async () => {
  const e = await X.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await ne(e);
}, gd = () => {
  const { dispatch: e } = je(), [t, n] = h.useState(() => {
    const E = localStorage.getItem("meld-import-config"), B = {
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
        const L = JSON.parse(E);
        return { ...B, ...L, tags: [] };
      } catch {
        return B;
      }
    return B;
  });
  h.useEffect(() => {
    const { tags: E, ...B } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(B));
  }, [t]);
  const [r, l] = h.useState([]), [a, i] = h.useState([]), [o, u] = h.useState(0), [c, p] = h.useState(!1), [_, v] = h.useState([]), [y, w] = h.useState(""), [k, j] = h.useState(!1), [d, f] = h.useState(null), m = h.useRef(!1), g = (E) => {
    E.target === E.currentTarget && (m.current = !0);
  }, x = (E) => {
    E.target === E.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const B = await Nm();
        n((L) => L.custom_path ? L : { ...L, custom_path: B });
      } catch (B) {
        Q.error("Failed to fetch home directory:", B);
      }
    })();
  }, []), h.useEffect(() => {
    const E = new AbortController();
    return (async () => {
      const L = t.type === "custom" ? t.custom_path : t.subfolder;
      if (Q.log(
        `loadFolders started. Path: "${L}", Type: "${t.type}"`
      ), t.type === "custom" && !L) {
        Q.log("Custom path is empty, skipping load."), l([]), i([]), u(0);
        return;
      }
      p(!0);
      const G = L, b = t.type;
      try {
        Q.log("Step 1: Fast load starting...");
        const F = await Jm(
          t.type,
          L,
          !0,
          E.signal
        );
        if (E.signal.aborted) {
          Q.log("Step 1: Aborted.");
          return;
        }
        Q.log(
          `Step 1 complete. Found ${F.folders.length} folders, ${F.images.length} images.`
        ), l(F.folders), i(F.images), u(null);
        const P = F.folders.map((S) => S.name);
        P.length > 0 && (Q.log(
          `Step 2: Metadata fetch starting for ${P.length} folders...`
        ), Zm(
          b,
          G,
          P,
          E.signal
        ).then((S) => {
          if (E.signal.aborted) {
            Q.log("Step 2: Aborted.");
            return;
          }
          Q.log("Step 2: Metadata fetch complete."), l(
            (A) => A.map((K) => {
              const D = S[K.name];
              return D ? { ...K, count: D.count, preview: D.preview } : K;
            })
          );
        }).catch((S) => {
          S.name !== "AbortError" && Q.error("Step 2: Metadata fetch failed:", S);
        })), Q.log("Step 3: Path image count starting..."), eh(b, G, E.signal).then((S) => {
          if (E.signal.aborted) {
            Q.log("Step 3: Aborted.");
            return;
          }
          Q.log(`Step 3: Path image count complete: ${S}`), u(S);
        }).catch((S) => {
          S.name !== "AbortError" && Q.error("Step 3: Path image count failed:", S);
        });
      } catch (F) {
        if (F.name === "AbortError") {
          Q.log("Request aborted.");
          return;
        }
        Q.error("Failed to load folders:", F), l([]), i([]), u(0);
      } finally {
        E.signal.aborted || p(!1);
      }
    })(), () => {
      E.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const M = h.useCallback(async () => {
    j(!0);
    try {
      const E = await Ci();
      v(E);
    } catch (E) {
      Q.error("Failed to fetch tags:", E);
    } finally {
      j(!1);
    }
  }, []);
  h.useEffect(() => {
    M();
  }, [M]), h.useEffect(() => {
    const E = (B) => {
      B.key === "Escape" && (B.preventDefault(), B.stopImmediatePropagation(), d ? f(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", E, { capture: !0 }), () => window.removeEventListener("keydown", E, { capture: !0 });
  }, [d, e]);
  const C = h.useMemo(() => _.filter(
    (E) => E.name.toLowerCase().includes(y.toLowerCase()) && !t.tags.includes(E.name)
  ), [_, y, t.tags]), I = (E) => {
    const B = E.trim();
    B && !t.tags.includes(B) && (n({ ...t, tags: [...t.tags, B] }), w(""));
  }, O = (E) => {
    n({ ...t, tags: t.tags.filter((B) => B !== E) });
  }, N = (E) => {
    E.key === "Enter" && y.trim() && (E.preventDefault(), I(y.trim()));
  }, T = async () => {
    try {
      await th(t), e({
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
      Q.error("Failed to start scan:", E), alert(`Failed to start scan: ${E}`);
    }
  }, H = (E) => {
    if (t.type === "custom") {
      const B = t.custom_path.includes("\\") ? "\\" : "/", L = t.custom_path.endsWith(B) ? `${t.custom_path}${E}` : `${t.custom_path}${B}${E}`;
      n({ ...t, custom_path: L });
    } else {
      const B = t.subfolder ? `${t.subfolder}/${E}` : E;
      n({ ...t, subfolder: B });
    }
  }, re = () => {
    if (t.type === "custom") {
      const E = t.custom_path.includes("\\") ? "\\" : "/", B = t.custom_path.split(E);
      if (B.length > 1) {
        B.pop();
        let L = B.join(E);
        L === "" && E === "/" && (L = "/"), n({ ...t, custom_path: L });
      }
    } else {
      const E = t.subfolder.split("/");
      E.pop(), n({ ...t, subfolder: E.join("/") });
    }
  };
  return Ie.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: x,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (E) => E.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
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
                          onChange: (E) => n({
                            ...t,
                            type: E.target.value,
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
                          onChange: (E) => n({ ...t, recursive: E.target.checked })
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
                          onChange: (E) => n({
                            ...t,
                            link_strategy: E.target.value,
                            auto_link_parent: E.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((E) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        E,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => O(E),
                            children: /* @__PURE__ */ s.jsx(xe, { size: 12 })
                          }
                        )
                      ] }, E)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx($n, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: y,
                            onChange: (E) => w(E.target.value),
                            onKeyDown: N
                          }
                        ),
                        y.trim() && !t.tags.includes(y.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => I(y),
                            children: /* @__PURE__ */ s.jsx(ji, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: k ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : C.length === 0 ? y && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        y
                      ] }) : C.map((E) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => I(E.name),
                          children: E.name
                        },
                        E.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: T,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(ts, { size: 16 }),
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
                          onClick: re,
                          children: [
                            /* @__PURE__ */ s.jsx(id, { size: 16 }),
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
                          onChange: (E) => n({ ...t, custom_path: E.target.value }),
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-folder-list", children: c ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && a.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      r.map((E) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => H(E.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: E.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Be(E.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(mm, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: E.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${E.count === null ? "meld-folder-count--loading" : ""}`,
                                children: E.count !== null ? `${E.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(od, { size: 14 })
                          ]
                        },
                        E.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((E) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(E),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: Be(E),
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
          d && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (E) => {
                E.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (E) => E.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ s.jsx(xe, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: Be(d),
                          alt: d.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: d.filename })
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
}, rh = () => {
  const { dispatch: e } = je();
  return { injectMaskToGraph: h.useCallback(
    (n, r) => {
      var v, y;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r);
      const l = window.app;
      if (!(l != null && l.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      let a = n.filename;
      n.subfolder && (a = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (a = `${a} [${n.type}]`);
      const i = l.graph._nodes.filter(
        (w) => w.type === "MeldImageLoader"
      );
      if (i.length > 0) {
        const w = i[0], k = w.widgets.find(
          (j) => j.name === "image"
        );
        k && (k.value = a, typeof k.callback == "function" && k.callback(a), console.log(
          "[Meld-Debug] injectMaskToGraph: Updated MeldImageLoader",
          w.id,
          "with",
          a
        ));
      }
      const o = l.graph._nodes.filter(
        (w) => w.type === "LoadImageMask"
      );
      if (o.length === 0)
        return console.log(
          "[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"
        ), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const u = o[0], c = u.widgets.find(
        (w) => w.name === "image"
      ), p = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        u.id,
        "widget 'image' with",
        p
      ), c && (c.value = p, typeof c.callback == "function" && c.callback(p));
      const _ = u.widgets.find(
        (w) => w.name === "channel"
      );
      return _ && (_.value = "red", typeof _.callback == "function" && _.callback("red")), (y = (v = l.graph).afterChange) == null || y.call(v), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function bs(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function lh(e, t, n, r, l, a = 255) {
  const i = new Uint8ClampedArray(e.data), { width: o, height: u } = e, c = Math.max(0, Math.floor(t)), p = Math.max(0, Math.floor(n)), _ = Math.min(o, Math.ceil(t + r)), v = Math.min(u, Math.ceil(n + l));
  for (let y = p; y < v; y++) {
    const w = y * o;
    for (let k = c; k < _; k++)
      i[w + k] = a;
  }
  return { ...e, data: i };
}
function Uo(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, i = new ImageData(l, a), o = i.data;
  for (let u = 0; u < r.length; u++) {
    const c = r[u], p = u * 4;
    c > 0 ? (o[p] = t[0], o[p + 1] = t[1], o[p + 2] = t[2], o[p + 3] = n) : (o[p] = 0, o[p + 1] = 0, o[p + 2] = 0, o[p + 3] = 0);
  }
  return i;
}
function sh(e) {
  return e.data.every((t) => t === 0);
}
const yd = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = je(), a = r.images.find((S) => S.id === e), { injectMaskToGraph: i } = rh(), o = h.useRef(null), u = h.useRef(null), c = h.useRef(null), p = h.useRef(null), [_, v] = h.useState(!1), [y, w] = h.useState({ x: 0, y: 0 }), [k, j] = h.useState({ x: 0, y: 0 }), [d, f] = h.useState(null), [m, g] = h.useState(!1), x = h.useCallback(() => {
    const S = c.current, A = u.current;
    if (!S || !A) return null;
    const K = A.getBoundingClientRect(), D = S.getBoundingClientRect(), V = S.naturalWidth, Y = S.naturalHeight;
    if (!V || !Y) return null;
    const ce = V / Y, Ne = D.width / D.height;
    let _e, W, J = 0, R = 0;
    return ce > Ne ? (_e = D.width, W = D.width / ce, R = (D.height - W) / 2) : (W = D.height, _e = D.height * ce, J = (D.width - _e) / 2), {
      left: D.left - K.left + J,
      top: D.top - K.top + R,
      width: _e,
      height: W
    };
  }, []), M = h.useCallback(() => {
    const S = o.current;
    if (!S) return;
    const A = S.getContext("2d");
    if (!A) return;
    A.clearRect(0, 0, S.width, S.height);
    const K = getComputedStyle(document.documentElement), D = K.getPropertyValue("--comfy-input-bg-active") || K.getPropertyValue("--comfy-input-bg") || K.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", V = x();
    if (p.current && V && (A.save(), A.globalAlpha = 0.5, A.drawImage(
      p.current,
      V.left,
      V.top,
      V.width,
      V.height
    ), A.restore()), _) {
      const Y = Math.min(y.x, k.x), ce = Math.min(y.y, k.y), Ne = Math.abs(y.x - k.x), _e = Math.abs(y.y - k.y);
      A.save(), A.globalAlpha = 0.3, A.fillStyle = D, A.fillRect(Y, ce, Ne, _e), A.restore(), A.strokeStyle = "white", A.lineWidth = 2, A.setLineDash([5, 5]), A.strokeRect(Y, ce, Ne, _e);
    }
  }, [_, y, k, x]), [C, I] = h.useState([]), O = h.useMemo(() => C.length > 0 ? C[C.length - 1] : c.current ? bs(
    c.current.naturalWidth,
    c.current.naturalHeight
  ) : null, [C]);
  h.useEffect(() => {
    var S;
    (S = c.current) != null && S.naturalWidth && C.length === 0 && I([
      bs(
        c.current.naturalWidth,
        c.current.naturalHeight
      )
    ]);
  }, [C.length]);
  const N = h.useRef(!1), T = h.useRef(0), H = (S) => {
    S.target === S.currentTarget && (N.current = !0);
  }, re = (S) => {
    S.target === S.currentTarget && N.current && !_ && n(), N.current = !1;
  };
  h.useEffect(() => {
    if (!O) return;
    p.current || (p.current = document.createElement("canvas"));
    const S = p.current;
    S.width = O.width, S.height = O.height;
    const A = S.getContext("2d");
    if (!A) return;
    const K = Uo(O, [255, 255, 255], 255);
    A.putImageData(K, 0, 0), M();
  }, [O, M]), h.useEffect(() => {
    const S = () => {
      u.current && o.current && (o.current.width = u.current.clientWidth, o.current.height = u.current.clientHeight, M());
    }, A = new ResizeObserver(S);
    return u.current && A.observe(u.current), S(), () => A.disconnect();
  }, [M]);
  const E = (S) => {
    var Y;
    if (S.button !== 0 || _ || m || Date.now() - T.current < 100)
      return;
    S.preventDefault();
    const A = x(), K = (Y = u.current) == null ? void 0 : Y.getBoundingClientRect();
    if (!A || !K) return;
    v(!0);
    const D = Math.max(
      A.left,
      Math.min(S.clientX - K.left, A.left + A.width)
    ), V = Math.max(
      A.top,
      Math.min(S.clientY - K.top, A.top + A.height)
    );
    w({ x: D, y: V }), j({ x: D, y: V }), f(null);
  };
  h.useEffect(() => {
    if (!_) return;
    const S = (K) => {
      var Ne;
      const D = x(), V = (Ne = u.current) == null ? void 0 : Ne.getBoundingClientRect();
      if (!D || !V) return;
      const Y = Math.max(
        D.left,
        Math.min(K.clientX - V.left, D.left + D.width)
      ), ce = Math.max(
        D.top,
        Math.min(K.clientY - V.top, D.top + D.height)
      );
      j({ x: Y, y: ce });
    }, A = (K) => {
      var Y;
      const D = x(), V = (Y = u.current) == null ? void 0 : Y.getBoundingClientRect();
      if (D && V && O && c.current) {
        const ce = Math.max(
          D.left,
          Math.min(K.clientX - V.left, D.left + D.width)
        ), Ne = Math.max(
          D.top,
          Math.min(K.clientY - V.top, D.top + D.height)
        ), _e = Math.min(y.x, ce), W = Math.min(y.y, Ne), J = Math.abs(y.x - ce), R = Math.abs(y.y - Ne);
        if (J > 5 && R > 5) {
          const se = c.current.naturalWidth, q = c.current.naturalHeight, te = se / D.width, $e = q / D.height, bt = (_e - D.left) * te, pn = (W - D.top) * $e, ve = J * te, fe = R * $e, wt = lh(
            O,
            bt,
            pn,
            ve,
            fe,
            255
          );
          I((Rr) => [...Rr, wt]);
        }
      }
      T.current = Date.now(), v(!1);
    };
    return window.addEventListener("mousemove", S), window.addEventListener("mouseup", A), () => {
      window.removeEventListener("mousemove", S), window.removeEventListener("mouseup", A);
    };
  }, [_, y.x, y.y, x, O]);
  const B = h.useCallback(() => {
    C.length > 1 && I((S) => S.slice(0, -1));
  }, [C.length]);
  h.useEffect(() => {
    const S = (A) => {
      (A.metaKey || A.ctrlKey) && A.key === "z" && (A.preventDefault(), B());
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [B]);
  const L = () => {
    if (c.current) {
      const S = bs(
        c.current.naturalWidth,
        c.current.naturalHeight
      );
      I((A) => [...A, S]);
    }
  }, G = async () => {
    if (!O || !c.current) return null;
    g(!0);
    try {
      const { width: S, height: A } = O, K = document.createElement("canvas");
      K.width = S, K.height = A;
      const D = K.getContext("2d");
      if (!D) return null;
      const V = Uo(O, [255, 255, 255], 255);
      D.putImageData(V, 0, 0);
      const Y = await new Promise(
        (R) => K.toBlob(R, "image/png")
      );
      if (!Y) return null;
      const Ne = `meld_mask_${Date.now()}.png`, _e = new File([Y], Ne, { type: "image/png" }), W = new FormData();
      W.append("image", _e), W.append("type", "temp"), W.append("overwrite", "true");
      const J = await X.fetchApi("/upload/image", {
        method: "POST",
        body: W
      });
      return J.ok ? (await J.json()).name : null;
    } catch (S) {
      return console.error("[Meld] Error uploading mask:", S), null;
    } finally {
      g(!1);
    }
  }, b = async () => {
    if (!a) return;
    const S = await G();
    S && i(a, S) && n();
  }, F = async () => {
    if (!a) return;
    const S = await G();
    S && l({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [a],
        maskFilename: S
      }
    });
  }, P = h.useMemo(
    () => O && !sh(O),
    [O]
  );
  return a ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: H,
      onMouseUp: re,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (S) => S.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(xe, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs(
                "div",
                {
                  ref: u,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: E,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "img",
                      {
                        ref: c,
                        src: Be(a),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (S) => S.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "canvas",
                      {
                        ref: o,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (S) => S.preventDefault()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-mask-editor-hint", children: "Drag to select mask area (Multiple areas supported. Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: b,
                      disabled: !P || m,
                      type: "button",
                      children: [
                        m ? /* @__PURE__ */ s.jsx(Fo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Si, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: F,
                      disabled: !P || m,
                      type: "button",
                      children: [
                        m ? /* @__PURE__ */ s.jsx(Fo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(ts, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: B,
                      disabled: C.length <= 1 || m,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(Em, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: L,
                      disabled: !P || m,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(xe, { size: 16 }),
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
}, ah = () => {
  const { state: e, dispatch: t, updateSetting: n } = je(), [r, l] = h.useState("Gallery"), [a, i] = h.useState({
    ...e.settings
  }), [o, u] = h.useState(
    {}
  ), [c, p] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [_, v] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [y, w] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [k, j] = h.useState(e.settings["viewer.thumbnail_window_size"].toString()), [d, f] = h.useState(e.settings["gallery.trash_retention_days"].toString()), [m, g] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [x, M] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [C, I] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [O, N] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    T,
    H
  ] = h.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    re,
    E
  ] = h.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [B, L] = h.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: a,
    setLocalSettings: i,
    shortcutErrors: o,
    setShortcutErrors: u,
    handleClose: async () => {
      const D = Object.keys(a).filter(
        (V) => a[V] !== e.settings[V] && !o[V]
      );
      if (D.length > 0)
        for (const V of D)
          await n(V, a[V]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (D, V) => {
      i((Y) => ({
        ...Y,
        [D]: !V
      }));
    },
    handleNumberChange: (D, V, Y, ce) => {
      D === "gallery.initial_load_count" ? p(V) : D === "gallery.max_load_count" ? v(V) : D === "gallery.lineage_max_depth" ? w(V) : D === "viewer.thumbnail_window_size" ? j(V) : D === "gallery.trash_retention_days" ? f(V) : D === "gallery.auto_link_phash_threshold" ? g(V) : D === "gallery.suggest_phash_threshold" ? M(V) : D === "viewer.details.max_positive_prompt_lines" ? I(V) : D === "viewer.details.max_negative_prompt_lines" ? N(V) : D === "fullscreen.details.max_positive_prompt_lines" ? H(V) : D === "fullscreen.details.max_negative_prompt_lines" ? E(V) : D === "sidebar.thumbnail_size" && L(V);
      const Ne = Number.parseInt(V, 10);
      if (!Number.isNaN(Ne)) {
        let _e = Ne;
        Y !== void 0 && _e < Y && (_e = Y), ce !== void 0 && _e > ce && (_e = ce), i((W) => ({
          ...W,
          [D]: _e
        }));
      }
    },
    handleNumberBlur: (D) => {
      D.key === "gallery.initial_load_count" ? p(
        a["gallery.initial_load_count"].toString()
      ) : D.key === "gallery.max_load_count" ? v(a["gallery.max_load_count"].toString()) : D.key === "gallery.lineage_max_depth" ? w(
        a["gallery.lineage_max_depth"].toString()
      ) : D.key === "viewer.thumbnail_window_size" ? j(
        a["viewer.thumbnail_window_size"].toString()
      ) : D.key === "gallery.trash_retention_days" ? f(
        a["gallery.trash_retention_days"].toString()
      ) : D.key === "gallery.auto_link_phash_threshold" ? g(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : D.key === "gallery.suggest_phash_threshold" ? M(
        a["gallery.suggest_phash_threshold"].toString()
      ) : D.key === "viewer.details.max_positive_prompt_lines" ? I(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : D.key === "viewer.details.max_negative_prompt_lines" ? N(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : D.key === "fullscreen.details.max_positive_prompt_lines" ? H(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : D.key === "fullscreen.details.max_negative_prompt_lines" ? E(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : D.key === "sidebar.thumbnail_size" && L(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      i((D) => ({
        ...D,
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
      })), u({});
    },
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    validateShortcut: (D) => D.trim() ? D.trim().split(/\s+/).every((Y) => !!(Y === "next" || Y === "prev" || Y === "delete" || Y.startsWith("tag:") && Y.length > 4 || Y.startsWith("-tag:") && Y.length > 5 || Y.startsWith("tag-toggle:") && Y.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: _,
    lineageMaxDepthInput: y,
    thumbnailWindowSizeInput: k,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: x,
    maxPositivePromptLinesInput: C,
    maxNegativePromptLinesInput: O,
    fullscreenMaxPositivePromptLinesInput: T,
    fullscreenMaxNegativePromptLinesInput: re,
    thumbnailSizeInput: B
  };
}, U = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), ih = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: i
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      U,
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
      U,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.delete_mode": o.target.value
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
      U,
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
      U,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.small_image_mode": o.target.value
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
      U,
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
      U,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.details.show_filename": o.target.value
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
            onChange: (o) => r(
              "fullscreen.details.max_positive_prompt_lines",
              o.target.value,
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
      U,
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
      U,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (o) => r(
              "fullscreen.details.max_negative_prompt_lines",
              o.target.value,
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
      U,
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
] }), oh = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: a,
  initialLoadCountInput: i,
  maxLoadCountInput: o
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ s.jsx(
      U,
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
            onChange: (u) => r(
              "sidebar.thumbnail_size",
              u.target.value,
              50,
              500
            ),
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      U,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (u) => t((c) => ({
              ...c,
              "sidebar.show_filename": u.target.value
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
      U,
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
      U,
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
      U,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources).",
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
      U,
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
      U,
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
      U,
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
      U,
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
    /* @__PURE__ */ s.jsx(U, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      U,
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
      U,
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
      U,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 10,
            max: 1e3,
            onChange: (u) => r(
              "gallery.initial_load_count",
              u.target.value,
              10,
              1e3
            ),
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      U,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 10,
            max: 1e6,
            onChange: (u) => r(
              "gallery.max_load_count",
              u.target.value,
              10,
              1e6
            ),
            onBlur: () => l({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] })
] }), uh = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: l,
  handleToggle: a,
  handleResetShortcuts: i
}) => {
  const o = [
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
      o.map((u, c) => /* @__PURE__ */ s.jsx(
        U,
        {
          label: `Shortcut ${c === 9 ? 0 : c + 1} (Key: ${c === 9 ? 0 : c + 1})`,
          description: `Command to execute when pressing '${c === 9 ? 0 : c + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[u] ? "meld-text-input--error" : ""}`,
              value: e[u] || "",
              onChange: (p) => {
                t((_) => ({
                  ..._,
                  [u]: p.target.value
                }));
              },
              onBlur: () => {
                const p = l(
                  e[u] || ""
                );
                r((_) => ({
                  ..._,
                  [u]: !p
                }));
              }
            }
          )
        },
        u
      )),
      /* @__PURE__ */ s.jsx(
        U,
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
      U,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: i,
            children: "Reset to Defaults"
          }
        )
      }
    ) })
  ] });
}, ch = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: a,
  lineageMaxDepthInput: i,
  trashRetentionDaysInput: o,
  autoLinkPhashThresholdInput: u,
  suggestPhashThresholdInput: c
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      U,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (p) => l((_) => ({
              ..._,
              "gallery.matching_strategy": p.target.value
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
      U,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
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
    /* @__PURE__ */ s.jsx(
      U,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
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
    /* @__PURE__ */ s.jsx(
      U,
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
      U,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
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
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ s.jsx(
      U,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
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
    /* @__PURE__ */ s.jsx(
      U,
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
] }), dh = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: a,
  maxPositivePromptLinesInput: i,
  maxNegativePromptLinesInput: o
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ s.jsx(
      U,
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
      U,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.small_image_mode": u.target.value
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
      U,
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
      U,
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
      U,
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
            onChange: (u) => r(
              "viewer.thumbnail_window_size",
              u.target.value,
              1,
              1e4
            ),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      U,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.delete_mode": u.target.value
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
      U,
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
      U,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.details.show_filename": u.target.value
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
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
      U,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: i,
            min: 1,
            max: 100,
            onChange: (u) => r(
              "viewer.details.max_positive_prompt_lines",
              u.target.value,
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
      U,
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
      U,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
            min: 1,
            max: 100,
            onChange: (u) => r(
              "viewer.details.max_negative_prompt_lines",
              u.target.value,
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
      U,
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
] }), vd = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: a,
    handleClose: i,
    handleToggle: o,
    handleNumberChange: u,
    handleNumberBlur: c,
    handleResetShortcuts: p,
    handleViewTrash: _,
    validateShortcut: v,
    // Input states
    initialLoadCountInput: y,
    maxLoadCountInput: w,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: j,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: m,
    maxPositivePromptLinesInput: g,
    maxNegativePromptLinesInput: x,
    fullscreenMaxPositivePromptLinesInput: M,
    fullscreenMaxNegativePromptLinesInput: C,
    thumbnailSizeInput: I
  } = ah(), O = h.useRef(!1), N = (E) => {
    E.target === E.currentTarget && (O.current = !0);
  }, T = (E) => {
    E.target === E.currentTarget && O.current && i(), O.current = !1;
  }, H = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], re = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          ch,
          {
            localSettings: n,
            handleNumberChange: u,
            handleNumberBlur: c,
            handleToggle: o,
            setLocalSettings: r,
            handleViewTrash: _,
            lineageMaxDepthInput: k,
            trashRetentionDaysInput: d,
            autoLinkPhashThresholdInput: f,
            suggestPhashThresholdInput: m
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          oh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailSizeInput: I,
            initialLoadCountInput: y,
            maxLoadCountInput: w
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          dh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: j,
            maxPositivePromptLinesInput: g,
            maxNegativePromptLinesInput: x
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          ih,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: M,
            maxNegativePromptLinesInput: C
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          uh,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: v,
            handleToggle: o,
            handleResetShortcuts: p
          }
        );
      default:
        return null;
    }
  };
  return Ie.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: N,
        onMouseUp: T,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (E) => E.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: i,
                    children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: H.map((E) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === E.id ? "active" : ""}`,
                    onClick: () => t(E.id),
                    children: E.label
                  },
                  E.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: re() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, ct = "none", wd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = je(), [a, i] = h.useState([]), [o, u] = h.useState(t), [c, p] = h.useState(""), [_, v] = h.useState(!0), [y, w] = h.useState(!1), k = h.useRef(null), j = e.length > 1, d = h.useRef(!1), f = (N) => {
    N.target === N.currentTarget && (d.current = !0);
  }, m = (N) => {
    N.target === N.currentTarget && d.current && n(), d.current = !1;
  }, g = h.useCallback(async () => {
    v(!0);
    try {
      const N = await Ci();
      i(N);
    } catch (N) {
      console.error("Failed to fetch tags:", N);
    } finally {
      v(!1);
    }
  }, []);
  h.useEffect(() => {
    g();
  }, [g]), h.useEffect(() => {
    k.current && k.current.focus();
    const N = (T) => {
      T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), T.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", N, { capture: !0 }), () => window.removeEventListener("keydown", N, {
      capture: !0
    });
  }, [n]);
  const x = h.useMemo(() => a.filter(
    (N) => N.name.toLowerCase().includes(c.toLowerCase()) && !o.includes(N.name)
  ), [a, c, o]), M = (N) => {
    const T = N.trim();
    if (T.toLowerCase() === ct) {
      alert(
        `Tag name '${ct}' is reserved for search and cannot be used.`
      );
      return;
    }
    T && !o.includes(T) && (u([...o, T]), p(""));
  }, C = (N) => {
    u(o.filter((T) => T !== N));
  }, I = async () => {
    w(!0);
    try {
      if (j) {
        const N = o.filter((H) => !t.includes(H)), T = t.filter(
          (H) => !o.includes(H)
        );
        await Ma(e, N, T);
      } else
        await Pm(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (N) {
      console.error("Failed to update tags:", N), alert("Failed to update tags.");
    } finally {
      w(!1);
    }
  }, O = (N) => {
    N.key === "Enter" && c.trim() ? (N.preventDefault(), N.stopPropagation(), M(c.trim())) : N.key === "Escape" && (N.preventDefault(), N.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Ie.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: m,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (N) => N.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(fn, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(xe, { size: 20 }) })
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((N) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                N,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => C(N),
                    children: /* @__PURE__ */ s.jsx(xe, { size: 12 })
                  }
                )
              ] }, N)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx($n, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: k,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (N) => p(N.target.value),
                    onKeyDown: O
                  }
                ),
                c.trim() && !o.includes(c.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => M(c),
                    children: [
                      /* @__PURE__ */ s.jsx(ji, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : x.length === 0 ? c ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : x.map((N) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => M(N.name),
                  children: N.name
                },
                N.id
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
                onClick: I,
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
}, xd = async () => {
  const e = await X.fetchApi("/meld/workflows");
  return ne(e);
}, fh = async (e) => {
  const t = await X.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return ne(t);
}, _d = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var m;
  const { dispatch: r } = je(), [l, a] = h.useState([]), [i, o] = h.useState(!0), [u, c] = h.useState(null), [p, _] = h.useState(!1), v = h.useMemo(() => l.map((g) => {
    let x = g.valid, M = g.reason;
    return n && (g.mask_count === 0 ? (x = !1, M = "No 'Load Image (as Mask)' node found.") : g.mask_count > 1 && (x = !1, M = `Multiple 'Load Image (as Mask)' nodes found (${g.mask_count}).`)), { ...g, valid: x, reason: M };
  }).sort((g, x) => g.valid !== x.valid ? g.valid ? -1 : 1 : g.name.localeCompare(x.name)), [l, n]), y = h.useCallback(async () => {
    try {
      o(!0);
      const g = await xd();
      a(g), c(null);
    } catch (g) {
      c(g instanceof Error ? g.message : String(g));
    } finally {
      o(!1);
    }
  }, []);
  h.useEffect(() => {
    y();
  }, [y]);
  const w = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]), k = h.useRef(!1), j = h.useCallback((g) => {
    g.target === g.currentTarget && (k.current = !0);
  }, []), d = h.useCallback(
    (g) => {
      g.target === g.currentTarget && k.current && w(), k.current = !1;
    },
    [w]
  );
  h.useEffect(() => {
    const g = (x) => {
      x.key === "Escape" && w();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [w]);
  const f = async (g) => {
    if (!p)
      try {
        _(!0), await t(g), w();
      } catch (x) {
        c(x instanceof Error ? x.message : String(x)), _(!1);
      }
  };
  return Ie.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: j,
        onMouseUp: d,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--medium",
            onClick: (g) => g.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(ud, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: w,
                    children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : u ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(ld, { size: 20 }),
                /* @__PURE__ */ s.jsx("span", { children: u })
              ] }) : l.length === 0 ? /* @__PURE__ */ s.jsx(
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (m = e[0]) == null ? void 0 : m.filename }),
                      ". Workflows must have exactly one",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Meld Image Loader" }),
                      " node",
                      n && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                        " ",
                        "and one ",
                        /* @__PURE__ */ s.jsx("strong", { children: "Load Image (as Mask)" }),
                        " node"
                      ] }),
                      "."
                    ]
                  }
                ),
                v.map((g) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-workflow-item ${g.valid ? "" : "meld-workflow-item--invalid"}`,
                    onClick: () => g.valid && !p && f(g.name),
                    title: g.reason || "Click to run",
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: g.name }),
                        !g.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: g.reason })
                      ] }),
                      g.valid && /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary meld-btn-small",
                          disabled: p,
                          onClick: (x) => {
                            x.stopPropagation(), f(g.name);
                          },
                          children: [
                            /* @__PURE__ */ s.jsx(ts, { size: 14 }),
                            p ? "Queuing..." : "Queue"
                          ]
                        }
                      )
                    ]
                  },
                  g.name
                ))
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: w,
                  disabled: p,
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
}, kd = () => ({ executeWorkflow: h.useCallback(
  async (t, n, r) => {
    var _, v, y, w, k, j;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r
    });
    const l = await fh(t);
    console.log("[Meld] Workflow fetched:", t);
    let a = null, i = null, o = !1;
    if (l.nodes && Array.isArray(l.nodes)) {
      o = !0;
      const d = l.nodes.find(
        (m) => m.type === "MeldImageLoader"
      );
      d && (a = String(d.id));
      const f = l.nodes.find(
        (m) => m.type === "LoadImageMask"
      );
      f && (i = String(f.id));
    } else
      for (const d in l) {
        const f = l[d];
        f.class_type === "MeldImageLoader" ? a = d : f.class_type === "LoadImageMask" && (i = d);
      }
    if (console.log("[Meld] Node IDs found:", {
      loaderNodeId: a,
      maskNodeId: i,
      isUIFormat: o
    }), !a)
      throw new Error(
        "Meld Image Loader node not found in the selected workflow."
      );
    if (r && !i)
      throw console.warn(
        "[Meld] Mask filename provided but no mask node found in workflow JSON"
      ), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let u = n.filename;
    if (n.subfolder && (u = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (u = `${u} [${n.type}]`), o) {
      const d = window.app, f = t.replace(/\.json$/i, "");
      let m = !1;
      const g = document.querySelectorAll(".workflow-tab");
      for (const C of Array.from(g)) {
        const I = C.querySelector(".workflow-label"), O = ((_ = I == null ? void 0 : I.textContent) == null ? void 0 : _.trim()) || ((v = C.textContent) == null ? void 0 : v.trim()) || "";
        if (O === f || O === t || O.startsWith(`${f} `) || O.startsWith(`${f}•`)) {
          C.click(), m = !0;
          break;
        }
      }
      m || await d.loadGraphData(l, !0, !0, t), await new Promise((C) => setTimeout(C, 200));
      const x = d.graph._nodes;
      console.log("[Meld] Active graph nodes count:", x.length);
      const M = x.find(
        (C) => String(C.id) === a || C.type === "MeldImageLoader"
      );
      if (M) {
        const C = (y = M.widgets) == null ? void 0 : y.find((I) => I.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: M.id,
          imagePath: u
        }), C && (C.value = u);
      } else
        console.warn(
          "[Meld] MeldImageLoader not found in active graph after loading"
        );
      if (r) {
        const C = x.find(
          (I) => String(I.id) === i || I.type === "LoadImageMask"
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: C == null ? void 0 : C.id,
          maskFilename: r
        }), C) {
          const I = (w = C.widgets) == null ? void 0 : w.find(
            (N) => N.name === "image"
          );
          I && (I.value = `${r} [temp]`);
          const O = (k = C.widgets) == null ? void 0 : k.find(
            (N) => N.name === "channel"
          );
          O && (O.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      d.graph.setDirtyCanvas(!0, !0);
      try {
        await d.queuePrompt(0);
        return;
      } catch (C) {
        throw console.error("Failed to queue workflow:", C), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const c = JSON.parse(JSON.stringify(l));
    c[a].inputs.image = u, r && i && (c[i].inputs.image = `${r} [temp]`, c[i].inputs.channel = "red");
    const p = await X.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: c,
        client_id: X.clientId
      })
    });
    if (!p.ok) {
      const d = await p.json();
      throw new Error(((j = d.error) == null ? void 0 : j.message) || "Failed to queue workflow");
    }
    return await p.json();
  },
  []
) }), Sd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = je(), i = h.useRef(!0);
  h.useEffect(() => () => {
    i.current = !1;
  }, []);
  const o = h.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), u = h.useMemo(
    () => l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
      (d) => d.exists !== !1 && (l.settings["gallery.show_parent_images"] || !d.has_children || o)
    ),
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      o
    ]
  ), c = h.useRef(l.viewerImageId);
  h.useEffect(() => {
    c.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const p = h.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]), _ = h.useRef(!1), v = h.useCallback((d) => {
    d.target === d.currentTarget && (_.current = !0);
  }, []), y = h.useCallback(
    (d) => {
      d.target === d.currentTarget && _.current && p(), _.current = !1;
    },
    [p]
  ), w = h.useCallback(
    (d) => {
      if (!i.current) return;
      const f = c.current;
      if (f === null || !d.has(f))
        return;
      const m = u.findIndex(
        (x) => x.id === f
      );
      if (m === -1) return;
      let g = !1;
      for (let x = m + 1; x < u.length; x++)
        if (!d.has(u[x].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: { id: u[x].id, mode: l.viewerMode }
          }), g = !0;
          break;
        }
      if (!g) {
        for (let x = m - 1; x >= 0; x--)
          if (!d.has(u[x].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: { id: u[x].id, mode: l.viewerMode }
            }), g = !0;
            break;
          }
      }
      g || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, u, a]
  );
  h.useEffect(() => {
    const d = (f) => {
      f.key === "Escape" && p();
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [p]);
  const k = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e), f = u.filter(
        (m) => d.has(m.id)
      );
      if (w(d), await Ca(e, n), !i.current) return;
      !n && r && r(f), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (d) {
      a({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      }), a({ type: "SET_LOADING", payload: !1 });
    }
  }, j = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e);
      for (const m of e) {
        const g = await Na(m);
        if (!i.current) return;
        for (const x of g)
          d.add(x.id);
      }
      const f = u.filter(
        (m) => d.has(m.id)
      );
      if (w(d), await Ca(Array.from(d), n), !i.current) return;
      !n && r && r(f), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(d)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (d) {
      a({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      }), a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Ie.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: y,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (d) => d.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Wn, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: p,
                    children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
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
                            am,
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
                    onClick: p,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: k,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: j,
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
}, jd = ({ message: e }) => {
  const { dispatch: t } = je();
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => t({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (n) => n.stopPropagation(), children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ s.jsx(ld, { size: 20, color: "var(--meld-danger-color)" }),
            /* @__PURE__ */ s.jsx("h2", { children: "Error" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              className: "meld-modal-close",
              onClick: () => t({ type: "CLOSE_MODAL" }),
              type: "button",
              children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
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
            onClick: () => t({ type: "CLOSE_MODAL" }),
            type: "button",
            children: "OK"
          }
        ) })
      ] })
    }
  );
}, Ed = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = je(), [l, a] = h.useState([]), [i, o] = h.useState(!0), [u, c] = h.useState(!1), p = h.useRef(!1), _ = (x) => {
    x.target === x.currentTarget && (p.current = !0);
  }, v = (x) => {
    x.target === x.currentTarget && p.current && n({ type: "CLOSE_MODAL" }), p.current = !1;
  }, y = t.images.find((x) => x.id === e), w = h.useCallback(async () => {
    o(!0);
    try {
      const x = t.settings["gallery.suggest_phash_threshold"], M = await Tm(e, x);
      a(M);
    } catch (x) {
      console.error("Failed to load suggestions:", x);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    w();
  }, [w]);
  const k = async (x) => {
    if (x == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!y || x === y.parent_id) && !(y.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await $o(e, x), await fd(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (M) {
        console.error("Failed to link parent:", M);
      }
  }, j = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await $o(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (x) {
        console.error("Failed to remove source:", x), alert("Failed to remove source image.");
      }
  }, d = async (x) => {
    o(!0);
    try {
      const M = await qm(x), { id: C } = await pd({
        filename: M.name,
        subfolder: M.subfolder || "",
        type: M.type || "input"
      });
      if (C === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await k(C);
    } catch (M) {
      console.error("Failed to upload/register image:", M);
    } finally {
      o(!1);
    }
  }, f = (x) => {
    x.preventDefault(), x.stopPropagation(), c(!1);
    const M = x.dataTransfer.files[0];
    M != null && M.type.startsWith("image/") && d(M);
  };
  if (!y) return null;
  const m = l.filter((x) => x.is_source_match), g = l.filter((x) => !x.is_source_match);
  return Ie.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: _,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
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
                children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            y.parent_id && /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(vm, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    y.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: Be({
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
                                              children: y.parent_filename || "Unknown Image"
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
                      onClick: j,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(ym, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (x) => {
                  x.preventDefault(), x.stopPropagation(), c(!0);
                },
                onDragOver: (x) => {
                  x.preventDefault(), x.stopPropagation(), x.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (x) => {
                  x.preventDefault(), x.stopPropagation(), c(!1);
                },
                onDrop: f,
                children: [
                  /* @__PURE__ */ s.jsx(Cm, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            i ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              m.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: m.map((x) => {
                  const M = x.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${M ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !M && k(x.id),
                      style: {
                        cursor: M ? "default" : "pointer",
                        ...M ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Be(x), alt: x.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: x.filename }),
                          M && /* @__PURE__ */ s.jsx(
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
                    x.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                g.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: g.map((x) => {
                  const M = x.id === y.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${M ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !M && k(x.id),
                      style: {
                        cursor: M ? "default" : "pointer",
                        ...M ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Be(x), alt: x.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: x.filename }),
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
                                  Math.round((64 - x.distance) / 64 * 100),
                                  "%"
                                ] }),
                                M && /* @__PURE__ */ s.jsx(
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
                    x.id
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
}, ph = () => {
  const { state: e, dispatch: t } = je(), { executeWorkflow: n } = kd();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      _d,
      {
        images: e.activeModal.images,
        isMaskMode: !!e.activeModal.maskFilename,
        onExecute: async (r) => {
          if (e.activeModal.type === "workflow_selection") {
            const l = e.activeModal.maskFilename;
            for (const a of e.activeModal.images)
              await n(r, a, l);
          }
        }
      }
    ),
    e.activeModal.type === "parent_selection" && Ie.createPortal(
      /* @__PURE__ */ s.jsx(Ed, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Ie.createPortal(/* @__PURE__ */ s.jsx(gd, {}), document.body),
    e.activeModal.type === "settings" && Ie.createPortal(/* @__PURE__ */ s.jsx(vd, {}), document.body),
    e.activeModal.type === "tag_edit" && Ie.createPortal(
      /* @__PURE__ */ s.jsx(
        wd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && Ie.createPortal(
      /* @__PURE__ */ s.jsx(jd, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Ie.createPortal(
      /* @__PURE__ */ s.jsx(
        Sd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && Ie.createPortal(
      /* @__PURE__ */ s.jsx(
        yd,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, Ni = (e, t) => {
  const n = h.useCallback(async (c) => {
    try {
      const p = await Dm(c.id);
      if (!p.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        p.workflow
      ), Q.log("Workflow restored successfully from Meld");
    } catch (p) {
      Q.error("Error restoring workflow:", p), alert("Failed to restore workflow.");
    }
  }, []), r = h.useCallback(async (c) => {
    try {
      const p = await Rm(c.id), _ = "MeldUnifiedLoader", v = window.app, w = window.LiteGraph.createNode(_);
      if (!w) {
        console.error(`Node type ${_} not found.`), alert(
          `Node type ${_} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const k = {
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
      if (w.widgets) {
        for (const [m, g] of Object.entries(k)) {
          const x = p[m];
          if (x != null) {
            const M = w.widgets.find(
              (C) => C.name === g
            );
            M && (M.value = x);
          }
        }
        const f = w.widgets.find(
          (m) => m.name === "control_after_generate"
        );
        f && (f.value = "fixed");
      }
      const j = v.canvas.ds.offset, d = v.canvas.ds.scale;
      w.pos = [(-j[0] + 400) / d, (-j[1] + 300) / d], v.graph.add(w), v.canvas.selectNode(w), v.canvas.centerOnNode(w);
    } catch (p) {
      console.error("Error adding Unified Loader:", p), alert("Failed to load settings.");
    }
  }, []), l = h.useCallback(
    (c) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [c.id],
          tags: c.tags || []
        }
      });
    },
    [t]
  ), a = h.useCallback(
    (c) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: c.id }
      });
    },
    [t]
  ), i = h.useCallback(
    (c) => {
      const p = Array.isArray(c) ? c : [c];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: p }
      });
    },
    [t]
  ), o = h.useCallback(
    async (c, p = "run") => {
      var _;
      if (console.log("[Meld] handleRunWithMask called", c, p), p === "apply") {
        const v = window.app, y = ((_ = v == null ? void 0 : v.graph) == null ? void 0 : _._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          y.map((j) => ({
            id: j.id,
            type: j.type
          }))
        );
        const w = y.some(
          (j) => j.type === "LoadImageMask"
        ), k = y.some(
          (j) => j.type === "MeldImageLoader"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: w, hasLoaderNode: k }), !w || !k) {
          const j = [];
          k || j.push("'Meld Image Loader'"), w || j.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${j.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else
        try {
          if (!(await xd()).some(
            (w) => w.valid && w.mask_count === 1
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
        } catch (v) {
          console.error("[Meld] Error checking workflows:", v);
        }
      t({
        type: "OPEN_MODAL",
        payload: { type: "mask_editor", imageId: c.id, mode: p }
      });
    },
    [t]
  ), u = h.useCallback(
    async (c, p) => {
      try {
        const _ = c.id, y = (await Ei([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: y }), p == null || p();
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
    handleEditSource: a,
    handleRunWithWorkflow: i,
    handleRunWithMask: o,
    handleRestore: u
  };
}, Cd = (e, t) => {
  const n = h.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((c) => ({
          id: c.id,
          imgSrc: Be(c)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const i = e.find((c) => c.id === a);
      let o = null;
      if (i ? o = Be(i) : o = Be({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !o) return [];
      const u = {
        id: a || null,
        imgSrc: o
      };
      if (i && l > 1) {
        const c = n(i);
        return [u, ...c].slice(0, l);
      }
      return [u];
    },
    [t, e]
  );
  return { getParentChain: n };
}, Nd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = je(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: i,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c,
    handleRunWithWorkflow: p,
    handleRunWithMask: _
  } = Ni(t, n), { getParentChain: v } = Cd(t.images, t.settings), [y, w] = h.useState(null), [k, j] = h.useState(!1), [d, f] = h.useState(null), [m, g] = h.useState(!1), x = h.useRef(null), M = async (P, S, A = !1) => {
    try {
      await navigator.clipboard.writeText(P), A ? (g(!0), setTimeout(() => g(!1), 2e3)) : (f(S), setTimeout(() => f(null), 2e3));
    } catch (K) {
      console.error("Failed to copy text: ", K);
    }
  };
  h.useEffect(() => {
    const P = (A) => {
      A.key === "Escape" && (y ? w(null) : j(!1));
    }, S = (A) => {
      x.current && !x.current.contains(A.target) && j(!1);
    };
    return window.addEventListener("keydown", P), k && document.addEventListener("mousedown", S), () => {
      window.removeEventListener("keydown", P), document.removeEventListener("mousedown", S);
    };
  }, [k, y]);
  const C = v(e), O = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, N = Be(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: y,
    setPopupContent: w,
    isMenuOpen: k,
    setIsMenuOpen: j,
    copiedLabel: d,
    popupCopied: m,
    menuRef: x,
    parentChain: C,
    displayFilename: O,
    imgSrc: N,
    handleCopy: M,
    handleClick: (P) => {
      P.shiftKey ? (P.preventDefault(), P.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : P.ctrlKey || P.metaKey || t.selectedIds.size > 0 ? (P.preventDefault(), P.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (P) => {
      P.shiftKey ? (P.preventDefault(), P.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : P.ctrlKey || P.metaKey || t.selectedIds.size > 0 ? (P.preventDefault(), P.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (P.preventDefault(), P.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (P) => {
      (P.shiftKey || P.ctrlKey || P.metaKey || t.selectedIds.size > 0 || !P.target.closest("img.meld-image-card__thumbnail")) && P.preventDefault();
    },
    handleKeyDown: (P) => {
      (P.key === "Enter" || P.key === " ") && (P.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await i(e);
    },
    handleAddUnifiedLoader: async () => {
      await o(e);
    },
    handleEditSource: () => {
      u(e);
    },
    handleEditTags: () => {
      c(e);
    },
    handleRunWithWorkflow: () => {
      p(e);
    },
    handleRunWithMask: (P = "run") => _(e, P),
    fetchFullImageDetails: r
  };
}, mh = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  onAddUnifiedLoader: r,
  onRestoreWorkflow: l,
  onRunWithWorkflow: a,
  onRunWithMask: i,
  onEditSource: o,
  onEditTags: u
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu-container", ref: n, children: [
  /* @__PURE__ */ s.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (c) => {
        c.stopPropagation(), t(!e);
      },
      title: "Menu",
      children: /* @__PURE__ */ s.jsx(_m, { size: 16 })
    }
  ),
  /* @__PURE__ */ s.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (c) => {
        c.stopPropagation(), r();
      },
      title: "Add Unified Loader",
      children: /* @__PURE__ */ s.jsx(Oo, { size: 16 })
    }
  ),
  e && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__menu", children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => r(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(Oo, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Add Unified Loader" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => l(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(im, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Restore Full Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => a(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(ts, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Queue Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => i("apply"), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(ja, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Send to Workflow (Mask)" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => i("run"), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(ja, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Queue Workflow (Mask)" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => o(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(km, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Edit source image" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onMouseDown: (c) => c.stopPropagation(),
        onClick: (c) => {
          c.preventDefault(), c.stopPropagation(), t(!1), setTimeout(() => u(), 0);
        },
        children: [
          /* @__PURE__ */ s.jsx(fn, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
        ]
      }
    )
  ] })
] }), hh = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => Ie.createPortal(
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
                l ? /* @__PURE__ */ s.jsx(Si, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  fm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  xe,
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
), Md = pl.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: a,
      isMenuOpen: i,
      setIsMenuOpen: o,
      copiedLabel: u,
      popupCopied: c,
      menuRef: p,
      parentChain: _,
      displayFilename: v,
      imgSrc: y,
      handleCopy: w,
      handleClick: k,
      handleContainerClick: j,
      handleMouseDown: d,
      handleKeyDown: f,
      handleRestoreWorkflow: m,
      handleAddUnifiedLoader: g,
      handleEditSource: x,
      handleEditTags: M,
      handleRunWithWorkflow: C,
      handleRunWithMask: I,
      fetchFullImageDetails: O
    } = Nd(e);
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${i ? "meld-image-card--menu-open" : ""}`,
        onClick: j,
        onMouseDown: d,
        onKeyDown: f,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
            "img",
            {
              src: y,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: d,
              onClick: (N) => {
                N.stopPropagation(), k(N);
              }
            }
          ) }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && v,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && _.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: _.map(
                (N, T) => N.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: N.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (H) => {
                      H.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: N.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: T === 0 ? "Source" : T === 1 ? "Grand-Source" : `Ancestor (S${T + 1})`,
                    alt: "source thumb"
                  },
                  N.id || T
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
                onClick: async (N) => {
                  N.stopPropagation();
                  const T = await O(e.id);
                  a({
                    title: "Model",
                    text: T.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (N) => {
                        N.stopPropagation();
                        const T = await O(e.id);
                        w(T.model_name || "-", "Model");
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
                onClick: async (N) => {
                  N.stopPropagation();
                  const T = await O(e.id);
                  a({
                    title: "Positive Prompt",
                    text: T.positive_prompt || T.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (N) => {
                        N.stopPropagation();
                        const T = await O(e.id);
                        w(
                          T.positive_prompt || T.positive || "-",
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
                onClick: async (N) => {
                  N.stopPropagation();
                  const T = await O(e.id);
                  a({
                    title: "Negative Prompt",
                    text: T.negative_prompt || T.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (N) => {
                        N.stopPropagation();
                        const T = await O(e.id);
                        w(
                          T.negative_prompt || T.negative || "-",
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
                onClick: (N) => {
                  N.stopPropagation(), M();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((N, T) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: N
                    },
                    `${N}-${T}`
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
          /* @__PURE__ */ s.jsx(
            mh,
            {
              isMenuOpen: i,
              setIsMenuOpen: o,
              menuRef: p,
              onAddUnifiedLoader: g,
              onRestoreWorkflow: m,
              onRunWithWorkflow: C,
              onRunWithMask: (N) => I(N),
              onEditSource: x,
              onEditTags: M
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            hh,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (N) => w(N, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
Md.displayName = "DetailedImageCard";
const Id = pl.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: a,
      handleClick: i
    } = Nd(e);
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""}`,
        onClick: r,
        onMouseDown: l,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
          "img",
          {
            src: n,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            width: e.width || void 0,
            height: e.height || void 0,
            onMouseDown: l,
            onClick: (o) => {
              o.stopPropagation(), i(o);
            }
          }
        ) })
      }
    );
  }
);
Id.displayName = "SimpleImageCard";
const gh = ({ image: e }) => {
  const { state: t } = je();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Id, { image: e }) : /* @__PURE__ */ s.jsx(Md, { image: e });
}, yh = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [a, i] = h.useState(!1), o = h.useRef(null);
  return h.useEffect(() => {
    const u = new IntersectionObserver(
      ([p]) => {
        p.isIntersecting && i(!0);
      },
      { rootMargin: n }
    ), c = o.current;
    return c && u.observe(c), () => {
      c && u.unobserve(c);
    };
  }, [n]), /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: o,
      className: r,
      style: {
        minHeight: `${t}px`,
        ...l
      },
      children: a ? e : null
    }
  );
}, vh = () => {
  const { state: e, dispatch: t } = je(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await nh(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (p) {
      console.error("Failed to cancel scan:", p);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: i, total: o } = n.progress, u = o > 0 ? i / o : 0, c = a ? 50 + Math.round(u * 50) : Math.round(u * 50);
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
        style: { width: `${c}%` }
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
        children: /* @__PURE__ */ s.jsx(ja, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(dm, { size: 14, className: "meld-success-icon" }),
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
}, wh = () => {
  const { state: e, refreshFavorites: t } = je(), [n, r] = h.useState(!1), [l, a] = h.useState(null), [i, o] = h.useState(null), [u, c] = h.useState(""), [p, _] = h.useState("");
  h.useEffect(() => {
    if (l) {
      const j = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(j);
    }
  }, [l]);
  const v = h.useCallback(
    async (j, d, f) => {
      j.stopPropagation();
      const m = `Are you sure you want to delete the favorite "${f}"?`;
      if (window.confirm(m))
        try {
          await Wo(d), await t();
        } catch (g) {
          Q.error("Failed to delete favorite", g);
        }
    },
    [t]
  ), y = h.useCallback(
    (j, d) => {
      j.stopPropagation(), o(d), c(d.name), _(d.query);
    },
    []
  ), w = h.useCallback(async () => {
    if (!(!i || !u.trim() || !p.trim()))
      try {
        r(!0), await Um(
          i.id,
          u,
          p
        ), await t(), o(null), a("Favorite updated.");
      } catch (j) {
        Q.error("Failed to update favorite", j), a("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [i, u, p, t]), k = h.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (d) => d.query === e.searchQuery
    )) {
      const d = e.favorites.find((f) => f.query === e.searchQuery);
      if (d) {
        r(!0);
        try {
          await Wo(d.id), await t(), a("Favorite removed.");
        } catch (f) {
          Q.error("Failed to delete favorite:", f);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Wm(e.searchQuery, e.searchQuery), await t(), a(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (d) {
      Q.error("Failed to save favorite:", d);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    editingFavorite: i,
    setEditingFavorite: o,
    editFavoriteName: u,
    setEditFavoriteName: c,
    editFavoriteQuery: p,
    setEditFavoriteQuery: _,
    handleDeleteFavorite: v,
    handleEditFavorite: y,
    handleSaveEditFavorite: w,
    handleSaveFavorite: k,
    setToastMessage: a
  };
}, Ls = (e) => {
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
}, xh = () => {
  const { state: e, dispatch: t, updateSetting: n } = je(), [r, l] = h.useState(e.searchQuery), [a, i] = h.useState([]), [o, u] = h.useState(!1), [c, p] = h.useState([]), [_, v] = h.useState([]), y = e.settings["search.show_all_keywords"], [w, k] = h.useState(-1), [j, d] = h.useState(null), f = h.useRef(null), m = h.useRef(e.searchQuery), g = h.useCallback(async () => {
    if (_.length > 0) return;
    const L = await Om();
    v(L);
  }, [_.length]);
  h.useEffect(() => {
    Fm().then((L) => {
      d(L);
    }), y && g();
  }, [g, y]);
  const x = h.useMemo(() => {
    if (!j) return null;
    const L = j.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${L}):(.*)$`, "i");
  }, [j]), M = h.useCallback(() => {
    const L = !y;
    L && g(), n("search.show_all_keywords", L);
  }, [y, g, n]), C = r !== m.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      p([]);
      return;
    }
    Am().then((L) => {
      p(L);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var L;
    (L = f.current) == null || L.focus();
  }, []);
  const I = h.useCallback(
    (L, G = !0) => {
      m.current !== L && (Q.log("SearchBar: triggering search", { query: L }), t({ type: "SET_SEARCH_QUERY", payload: L }), G && u(!1), m.current = L);
    },
    [t]
  );
  h.useEffect(() => {
    const L = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !x) {
        i([]), u(!1);
        return;
      }
      const G = Ls(r), b = G[G.length - 1];
      if (b) {
        const F = b.match(x);
        if (F) {
          const P = F[1].toLowerCase();
          let S = F[2];
          S.startsWith('"') && (S = S.substring(1)), S.endsWith('"') && (S = S.substring(0, S.length - 1));
          const A = await zm(S, P);
          i(A), u(A.length > 0), k(-1);
        } else {
          const P = b.replace(/^([-!])/, "").toLowerCase();
          if (P && j) {
            const S = j.all_prefixes.filter((A) => A.startsWith(P)).map((A) => ({
              type: A,
              value: "",
              count: 0
            }));
            if (S.length > 0) {
              i(S), u(!0), k(-1);
              return;
            }
          }
          i([]), u(!1);
        }
      } else
        i([]), u(!1);
    }, 300);
    return () => clearTimeout(L);
  }, [
    r,
    e.settings["search.input_suggest"],
    x,
    j
  ]);
  const O = h.useCallback(
    (L) => {
      var K;
      const G = Ls(r), F = (G.pop() || "").match(/^([-!])/), P = F ? F[1] : "", A = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(L.type);
      if (L.value === "") {
        const D = `${[...G, `${P}${L.type}:`].join(" ").trim()}`;
        l(D);
      } else {
        const D = A ? L.value : `"${L.value}"`, V = `${[
          ...G,
          `${P}${L.type}:${D}`
        ].join(" ").trim()} `;
        l(V), i([]), u(!1);
      }
      (K = f.current) == null || K.focus();
    },
    [r, j]
  ), N = (L) => {
    L.key === "Enter" ? I(r) : L.key === "Tab" ? o && w >= 0 && (O(a[w]), L.preventDefault()) : L.key === "ArrowDown" ? o && (k((G) => Math.min(G + 1, a.length - 1)), L.preventDefault()) : L.key === "ArrowUp" ? o && (k((G) => Math.max(G - 1, -1)), L.preventDefault()) : L.key === "Escape" && u(!1);
  }, T = h.useCallback(() => {
    l(""), I("");
  }, [I]), H = h.useCallback(
    (L, G, b = !1) => {
      var K;
      if (b) {
        const D = `${L}:`;
        l(D), (K = f.current) == null || K.focus();
        return;
      }
      const S = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(L) ? G : `"${G}"`, A = `${L}:${S}`;
      l(A), I(A);
    },
    [I, j]
  ), re = h.useCallback(
    (L) => {
      l(L), L || I("");
    },
    [I]
  ), E = h.useCallback(() => {
    if (r === m.current || !x)
      return;
    const L = Ls(r), G = L[L.length - 1];
    if (!G) return;
    const b = !!G.match(x), F = G.replace(/^([-!])/, "").toLowerCase(), P = F && (j == null ? void 0 : j.all_prefixes.some((S) => S.startsWith(F)));
    (b || P) && u(!0);
  }, [r, x, j]), B = h.useCallback(() => {
    setTimeout(() => u(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: o,
    setShowSuggestions: u,
    searchSuggestions: c,
    allKeywords: _,
    showAllKeywords: y,
    toggleShowAllKeywords: M,
    selectedIndex: w,
    setSelectedIndex: k,
    inputRef: f,
    isQueryChanged: C,
    handleSearch: I,
    handleKeyDown: N,
    applySuggestion: O,
    clearSearch: T,
    applySearchSuggestion: H,
    handleInputChange: re,
    handleInputFocus: E,
    handleInputBlur: B
  };
}, _h = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = h.useState(!1), [i, o] = h.useState(!1), [u, c] = h.useState(!1);
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
                  onClick: (p) => n(p, e),
                  style: {
                    background: "none",
                    border: "none",
                    color: i ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                    backgroundColor: i ? "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => o(!0),
                  onMouseLeave: () => o(!1),
                  title: "Edit favorite",
                  children: /* @__PURE__ */ s.jsx(dd, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: (p) => r(p, e.id, e.name),
                  style: {
                    background: "none",
                    border: "none",
                    color: u ? "var(--meld-danger-color)" : "var(--meld-text-secondary)",
                    backgroundColor: u ? "var(--comfy-input-bg-active, rgba(255,0,0,0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => c(!0),
                  onMouseLeave: () => c(!1),
                  title: "Delete favorite",
                  children: /* @__PURE__ */ s.jsx(Wn, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Vo = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(fn, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(um, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(jm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(cm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(ad, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(sd, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(om, { size: 12 });
    default:
      return null;
  }
}, kh = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: a,
  searchQuery: i,
  searchSuggestions: o,
  allKeywords: u,
  showAllKeywords: c,
  toggleShowAllKeywords: p,
  applySearchSuggestion: _,
  favorites: v,
  onSelectFavorite: y,
  onEditFavorite: w,
  onDeleteFavorite: k
}) => {
  const j = (g, x, M) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => _(g.type, g.value, M === "all"),
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
      onMouseEnter: (C) => {
        C.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", C.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", C.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (C) => {
        C.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", C.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", C.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Vo(g.type)
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
            children: g.type
          }
        ),
        M !== "all" && /* @__PURE__ */ s.jsx(
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
    `${M}-${g.type}:${g.value}:${x}`
  ), d = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
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
      children: t.map((g, x) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (M) => {
            M.preventDefault(), l(g);
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
          children: /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: Vo(g.type)
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
                  width: g.type.length > 8 ? "auto" : "60px",
                  flexShrink: 0
                },
                children: [
                  g.type,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ s.jsx(
              "span",
              {
                style: {
                  color: g.value === ct ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: g.value === ct ? "bold" : "normal"
                },
                children: g.value === ct ? g.type === "tag" ? `Untagged (${ct})` : `No ${g.type} (${ct})` : g.value
              }
            )
          ] })
        },
        `${g.type}:${g.value}`
      ))
    }
  ), f = () => o.length === 0 || a && a === i ? null : /* @__PURE__ */ s.jsxs(
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
            children: o.map(
              (g, x) => j(g, x, "quick")
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
                        onClick: p,
                        style: {
                          backgroundColor: "transparent",
                          border: "none",
                          color: "var(--meld-accent-color, #3b82f6)",
                          fontSize: "11px",
                          cursor: "pointer"
                        },
                        children: c ? "Show Less" : "Show More"
                      }
                    )
                  ]
                }
              ),
              c && /* @__PURE__ */ s.jsx(
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
                  children: Array.from(new Set(u.map((g) => g.type))).map(
                    (g, x) => j({ type: g, value: "" }, x, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), m = () => v.length === 0 || a && a === i ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(Ea, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: v.map((g) => /* @__PURE__ */ s.jsx(
              _h,
              {
                fav: g,
                onSelect: y,
                onEdit: w,
                onDelete: k
              },
              g.id
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
      onMouseDown: (g) => {
        g.preventDefault();
      },
      children: [
        d(),
        f(),
        m()
      ]
    }
  );
}, Sh = () => {
  const { state: e } = je(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: i,
    showAllKeywords: o,
    toggleShowAllKeywords: u,
    selectedIndex: c,
    setSelectedIndex: p,
    inputRef: _,
    isQueryChanged: v,
    handleSearch: y,
    handleKeyDown: w,
    applySuggestion: k,
    clearSearch: j,
    applySearchSuggestion: d,
    handleInputChange: f,
    handleInputFocus: m,
    handleInputBlur: g
  } = xh(), {
    isSaving: x,
    toastMessage: M,
    editingFavorite: C,
    setEditingFavorite: I,
    editFavoriteName: O,
    setEditFavoriteName: N,
    editFavoriteQuery: T,
    setEditFavoriteQuery: H,
    handleDeleteFavorite: re,
    handleEditFavorite: E,
    handleSaveEditFavorite: B,
    handleSaveFavorite: L
  } = wh(), G = h.useRef(null), b = h.useRef(!1);
  h.useEffect(() => {
    C && G.current && G.current.focus();
  }, [C]);
  const F = (S) => {
    S.target === S.currentTarget && (b.current = !0);
  }, P = (S) => {
    S.target === S.currentTarget && b.current && I(null), b.current = !1;
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
              M && /* @__PURE__ */ s.jsx(
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
                  children: M
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
                        onClick: () => y(t),
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
                        onMouseEnter: (S) => {
                          S.currentTarget.style.transform = "translateY(-1px)", v ? (S.currentTarget.style.filter = "brightness(1.15)", S.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : S.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (S) => {
                          S.currentTarget.style.transform = "none", v ? (S.currentTarget.style.filter = "none", S.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : S.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (S) => {
                          S.currentTarget.style.transform = "translateY(1px)", S.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (S) => {
                          S.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            $n,
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
                        ref: _,
                        type: "text",
                        value: t,
                        onChange: (S) => f(S.target.value),
                        onKeyDown: w,
                        onBlur: g,
                        onFocus: m,
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
                        onClick: L,
                        disabled: x,
                        title: e.favorites.some((S) => S.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          Ea,
                          {
                            size: 16,
                            color: e.favorites.some((S) => S.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((S) => S.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ s.jsx(
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
                        children: /* @__PURE__ */ s.jsx(xe, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                kh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: c,
                  setSelectedIndex: p,
                  applySuggestion: k,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: a,
                  allKeywords: i,
                  showAllKeywords: o,
                  toggleShowAllKeywords: u,
                  applySearchSuggestion: d,
                  favorites: e.favorites,
                  onSelectFavorite: (S) => {
                    n(S), y(S);
                  },
                  onEditFavorite: E,
                  onDeleteFavorite: re
                }
              )
            ]
          }
        ),
        C && Ie.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: F,
              onMouseUp: P,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (S) => S.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(Ea, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => I(null),
                          children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
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
                                    ref: G,
                                    type: "text",
                                    value: O,
                                    onChange: (S) => N(S.target.value),
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
                                    onKeyDown: (S) => {
                                      S.key === "Enter" && B(), S.key === "Escape" && I(null);
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
                                    value: T,
                                    onChange: (S) => H(S.target.value),
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
                                    onKeyDown: (S) => {
                                      S.key === "Enter" && !S.shiftKey && (S.preventDefault(), B()), S.key === "Escape" && I(null);
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
                          onClick: () => I(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: B,
                          disabled: x || !O.trim() || !T.trim(),
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
}, jh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = h.useState([]), [l, a] = h.useState(!0), [i, o] = h.useState(""), [u, c] = h.useState(""), [p, _] = h.useState(!1), [v, y] = h.useState(null), [w, k] = h.useState(""), [j, d] = h.useState(!1), f = h.useRef(null), m = h.useCallback(async () => {
    a(!0);
    try {
      const T = await Ci();
      r(T);
    } catch (T) {
      console.error("Failed to fetch tags:", T);
    } finally {
      a(!1);
    }
  }, []);
  h.useEffect(() => {
    m();
  }, [m]), h.useEffect(() => {
    v !== null && f.current && (f.current.focus(), f.current.select());
  }, [v]);
  const g = async (T) => {
    T.preventDefault();
    const H = u.trim();
    if (!(!H || p)) {
      if (H.toLowerCase() === ct) {
        alert(
          `Tag name '${ct}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((re) => re.name.toLowerCase() === H.toLowerCase())) {
        alert(`Tag "${H}" already exists.`);
        return;
      }
      _(!0);
      try {
        await Km(H), c(""), await m();
      } catch (re) {
        console.error("Failed to add tag:", re);
      } finally {
        _(!1);
      }
    }
  }, x = async (T, H) => {
    if (confirm(`Are you sure you want to delete tag "${H}"?`))
      try {
        await Ym(T), await m();
      } catch (re) {
        console.error("Failed to delete tag:", re);
      }
  }, M = (T) => {
    y(T.id), k(T.name);
  }, C = () => {
    y(null), k("");
  }, I = async (T) => {
    T.preventDefault();
    const H = w.trim();
    if (!H || v === null || j) return;
    if (H.toLowerCase() === ct) {
      alert(
        `Tag name '${ct}' is reserved for search and cannot be used.`
      );
      return;
    }
    const re = n.find((E) => E.id === v);
    if (re && re.name === H) {
      C();
      return;
    }
    if (n.some(
      (E) => E.id !== v && E.name.toLowerCase() === H.toLowerCase()
    )) {
      alert(`Tag "${H}" already exists.`);
      return;
    }
    d(!0);
    try {
      await Xm(v, H), C(), await m();
    } catch (E) {
      console.error("Failed to rename tag:", E), alert(E instanceof Error ? E.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, O = (T) => {
    t(`tag:${T}`);
  }, N = h.useMemo(() => n.filter(
    (T) => T.name.toLowerCase().includes(i.toLowerCase())
  ), [n, i]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(fn, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(xe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-add-form", onSubmit: g, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (T) => c(T.target.value),
            disabled: p
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || p,
            children: [
              /* @__PURE__ */ s.jsx(ji, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx($n, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: i,
            onChange: (T) => o(T.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: N.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : N.map((T) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: v === T.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: I,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: w,
                onChange: (H) => k(H.target.value),
                onKeyDown: (H) => H.key === "Escape" && C()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !w.trim(),
                children: /* @__PURE__ */ s.jsx(Si, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(xe, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: T.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => O(T.name),
              children: /* @__PURE__ */ s.jsx($n, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => M(T),
              children: /* @__PURE__ */ s.jsx(dd, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => x(T.id, T.name),
              children: /* @__PURE__ */ s.jsx(Wn, { size: 14 })
            }
          )
        ] })
      ] }) }, T.id)) })
    ] })
  ] });
}, Eh = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: a, viewerMode: i, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: p } = Ni(e, t), { getParentChain: _ } = Cd(a, u), [v, y] = h.useState(!1), [w, k] = h.useState(
    u["viewer.show_details_by_default"]
  ), [j, d] = h.useState(null), f = j ?? u["viewer.show_thumbnails"], [m, g] = h.useState(!1), [x, M] = h.useState(!1), [C, I] = h.useState(null), [O, N] = h.useState(null), [T, H] = h.useState(
    null
  ), re = h.useRef(null), E = h.useRef(!0);
  h.useEffect(() => (E.current = !0, () => {
    E.current = !1;
  }), []);
  const B = h.useRef(l);
  h.useEffect(() => {
    B.current = l;
  }, [l]);
  const L = h.useMemo(() => {
    const W = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return i === "lineage" ? o : a.filter(
      (J) => J.exists !== !1 && (u["gallery.show_parent_images"] || !J.has_children || W)
    );
  }, [i, o, a, u, e.searchQuery]), G = l === null ? -1 : L.findIndex((W) => W.id === l), b = (i === "lineage" && o.length > 0 ? o : a).find((W) => W.id === l), F = h.useCallback(
    async (W = !1) => {
      if (!b) return;
      const J = v ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!W && J === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [b.id],
            hasLineage: !!(b.parent_id || b.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const R = e.viewScope === "trash", se = /* @__PURE__ */ new Set([b.id]);
        if (J === "lineage") {
          const q = await Na(b.id);
          for (const te of q)
            se.add(te.id);
        }
        if (!E.current || B.current === null) return;
        if (L.length > se.size) {
          let q = !1;
          for (let te = G + 1; te < L.length; te++)
            if (!se.has(L[te].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: L[te].id, mode: i }
              }), q = !0;
              break;
            }
          if (!q) {
            for (let te = G - 1; te >= 0; te--)
              if (!se.has(L[te].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: L[te].id, mode: i }
                }), q = !0;
                break;
              }
          }
          q || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await Ca(Array.from(se), R), !R) {
          const q = L.filter(
            (te) => se.has(te.id)
          );
          I(q), N(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(se) });
      } catch (R) {
        t({
          type: "SET_ERROR",
          payload: R instanceof Error ? R.message : String(R)
        });
      }
    },
    [
      b,
      v,
      u,
      e.viewScope,
      L,
      G,
      i,
      t
    ]
  ), P = h.useCallback(() => {
    b && c(b);
  }, [b, c]), S = h.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: v } });
  }, [t, v]), A = h.useCallback(async () => {
    const W = v ? u["fullscreen.loop"] : u["viewer.loop"];
    if (G === 0 && i === "gallery" && e.pagination.hasMore && !x && W) {
      M(!0);
      try {
        const J = e.pagination.limit, R = e.pagination.total, se = Math.max(0, R - J), q = await fl(
          se,
          J,
          e.searchQuery
        );
        if (!E.current || (t({ type: "APPEND_IMAGES", payload: q }), B.current === null)) return;
        if (q.images.length > 0) {
          const te = q.images[q.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: te.id, mode: "gallery" }
          });
        }
      } catch (J) {
        console.error("Failed to jump to end:", J);
      } finally {
        M(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: v } });
  }, [
    G,
    i,
    e.pagination,
    e.searchQuery,
    u,
    t,
    x,
    v
  ]), K = h.useCallback(
    (W) => {
      W && "stopPropagation" in W && W.stopPropagation();
      const J = re.current;
      J && (document.fullscreenElement ? document.exitFullscreen() : J.requestFullscreen().catch((R) => {
        console.error(
          `Error attempting to enable full-screen mode: ${R.message}`
        );
      }));
    },
    []
  ), D = h.useCallback(async () => {
    b && (L.length > 1 ? S() : t({ type: "CLOSE_VIEWER" }), await p(b));
  }, [b, L.length, S, p, t]), V = h.useCallback(async () => {
    if (!C || C.length === 0) return;
    const W = C.map((R) => R.id), J = W[0];
    try {
      const R = await Ei(W);
      if (!E.current) return;
      if (t({ type: "ADD_IMAGES", payload: C }), e.viewScope === "trash") {
        const se = R.restored_ids || W;
        t({ type: "REMOVE_IMAGES", payload: se });
      }
      if (I(null), !E.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: J, mode: i }
      });
    } catch (R) {
      t({
        type: "SET_ERROR",
        payload: R instanceof Error ? R.message : String(R)
      });
    }
  }, [C, t, i, e.viewScope]), Y = h.useCallback(async () => {
    if (C && C.length > 0)
      await V();
    else if (O && O.type === "tags") {
      const { imageId: W, addTags: J, removeTags: R } = O;
      try {
        await Ma([W], J, R);
        const se = (i === "lineage" ? o : a).find((q) => q.id === W);
        if (se) {
          const q = [...se.tags];
          for (const $e of J)
            q.includes($e) || q.push($e);
          const te = q.filter(($e) => !R.includes($e));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...se, tags: te }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: W, mode: i }
          });
        }
        N(null);
      } catch (se) {
        t({
          type: "SET_ERROR",
          payload: se instanceof Error ? se.message : String(se)
        });
      }
    }
  }, [
    C,
    O,
    V,
    a,
    o,
    i,
    t
  ]), ce = h.useCallback(
    async (W) => {
      if (!W || !b) return;
      const J = b.id, R = [...b.tags], se = W.split(/\s+/), q = [], te = [];
      let $e = !1, bt = !1, pn = !1;
      for (const ve of se)
        if (ve.startsWith("tag:")) {
          const fe = ve.substring(4);
          fe && !R.includes(fe) && !q.includes(fe) && q.push(fe);
        } else if (ve.startsWith("-tag:")) {
          const fe = ve.substring(5);
          fe && R.includes(fe) && !te.includes(fe) && te.push(fe);
        } else if (ve.startsWith("tag-toggle:")) {
          const fe = ve.substring(11);
          fe && (R.includes(fe) ? te.includes(fe) || te.push(fe) : q.includes(fe) || q.push(fe));
        } else ve === "next" ? $e = !0 : ve === "prev" ? bt = !0 : ve === "delete" && (pn = !0);
      if (q.length > 0 || te.length > 0)
        try {
          await Ma(
            [J],
            q,
            te
          );
          const ve = [...R];
          for (const wt of q)
            ve.includes(wt) || ve.push(wt);
          const fe = ve.filter((wt) => !te.includes(wt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...b, id: J, tags: fe }
          }), N({
            type: "tags",
            imageId: J,
            addTags: [...te],
            removeTags: [...q]
          }), I(null);
        } catch (ve) {
          console.error("Failed to update tags via shortcut:", ve);
        }
      pn ? F(!0) : $e ? S() : bt && A();
    },
    [b, t, S, A, F]
  );
  h.useEffect(() => {
    const W = (R) => {
      var fe, wt, Rr;
      if (l === null) return;
      const se = ((fe = document.activeElement) == null ? void 0 : fe.tagName) === "INPUT" || ((wt = document.activeElement) == null ? void 0 : wt.tagName) === "TEXTAREA" || ((Rr = document.activeElement) == null ? void 0 : Rr.isContentEditable), q = R.key === "Delete" || R.key === "Backspace", te = R.key === "ArrowRight" || R.key === "ArrowLeft", $e = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        R.key
      ), bt = R.key === "Escape", pn = (R.ctrlKey || R.metaKey) && (R.key === "z" || R.key === "Z" || R.code === "KeyZ"), ve = /^[0-9]$/.test(R.key) && !R.ctrlKey && !R.metaKey && !R.altKey && R.code !== "KeyZ";
      if (q || te || $e || bt || pn || ve)
        if (se)
          if (bt) {
            if (e.activeModal.type !== "none") {
              R.preventDefault(), R.stopPropagation();
              return;
            }
            R.preventDefault(), R.stopPropagation(), R.stopImmediatePropagation();
          } else
            return;
        else {
          if (bt && e.activeModal.type !== "none") {
            R.preventDefault(), R.stopPropagation();
            return;
          }
          R.preventDefault(), R.stopPropagation(), R.stopImmediatePropagation();
        }
      else
        return;
      if (R.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (R.key === "ArrowRight")
        S();
      else if (R.key === "ArrowLeft")
        A();
      else if (R.key === "f" || R.key === "F")
        K(R);
      else if (R.key === "i" || R.key === "I")
        k((ns) => !ns);
      else if (R.key === "t" || R.key === "T")
        P();
      else if ((R.key === "r" || R.key === "R") && e.viewScope === "trash")
        D();
      else if (R.key === "Delete")
        F();
      else if ((R.ctrlKey || R.metaKey) && (R.key === "z" || R.key === "Z"))
        Y();
      else if (ve && !se) {
        const ns = `viewer.shortcut.${R.key}`, rs = u[ns];
        typeof rs == "string" && rs && (H(R.key), setTimeout(() => {
          E.current && H(null);
        }, 500), ce(rs));
      }
    };
    window.addEventListener("keydown", W, { capture: !0 });
    const J = () => {
      const R = !!document.fullscreenElement;
      y(R), k(R ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", J), () => {
      window.removeEventListener("keydown", W, { capture: !0 }), document.removeEventListener("fullscreenchange", J);
    };
  }, [
    l,
    t,
    K,
    S,
    A,
    u,
    F,
    e.activeModal.type,
    Y,
    P,
    D,
    e.viewScope,
    ce
  ]), h.useEffect(() => {
    l !== null && r(l).catch((W) => {
      console.error("Failed to fetch full image details for viewer:", W);
    });
  }, [l, r]), h.useEffect(() => {
    i === "lineage" && l !== null && o.length === 0 && (g(!0), Na(l).then((W) => {
      E.current && t({ type: "SET_LINEAGE", payload: W });
    }).catch((W) => {
      console.error("Failed to fetch lineage:", W);
    }).finally(() => {
      E.current && g(!1);
    }));
  }, [i, l, o.length, t]), h.useEffect(() => {
    i !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || G !== -1 && G >= L.length - 15 && n();
  }, [
    l,
    L.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    G
  ]);
  const Ne = h.useMemo(() => {
    if (!f || G === -1) return [];
    const W = u["viewer.thumbnail_window_size"], J = Math.floor(W / 2);
    let R = Math.max(0, G - J);
    const se = Math.min(L.length, R + W);
    return se === L.length && (R = Math.max(0, se - W)), L.slice(R, se).map((q, te) => ({
      img: q,
      absIndex: R + te
    }));
  }, [L, G, u, f]), _e = h.useMemo(() => b ? _(b) : [], [b, _]);
  return h.useEffect(() => {
    var W, J;
    if (l !== null) {
      if (f) {
        const R = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        R && R.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((W = document.activeElement) == null ? void 0 : W.tagName) === "CANVAS" && document.activeElement.blur(), (J = re.current) == null || J.focus();
    }
  }, [l, f]), h.useEffect(() => {
    if (l === null || L.length === 0) return;
    const W = L.findIndex(
      (q) => q.id === l
    );
    if (W === -1) return;
    const J = (q) => Be(q), R = [
      W + 1,
      W + 2,
      W - 1
    ], se = setTimeout(() => {
      for (const q of R)
        if (q >= 0 && q < L.length) {
          const te = L[q], $e = new Image();
          $e.src = J(te);
        }
    }, 150);
    return () => clearTimeout(se);
  }, [l, L]), {
    isFullscreen: v,
    showDetails: w,
    setShowDetails: k,
    showThumbnails: f,
    setShowThumbnailsOverride: d,
    isLoadingLineage: m,
    isJumping: x,
    activeShortcutKey: T,
    lastDeletedImages: C,
    setLastDeletedImages: I,
    overlayRef: re,
    handleNext: S,
    handlePrevious: A,
    handleDelete: F,
    handleTagEdit: P,
    handleRestore: D,
    handleUndo: Y,
    toggleFullscreen: K,
    currentIndex: G,
    currentThumbnails: L,
    image: b,
    windowedThumbnails: Ne,
    parentChain: _e
  };
}, Ch = ({
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
}) }) : null, Nh = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a
}) => /* @__PURE__ */ s.jsxs(
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
          (i, o) => i.imgSrc && /* @__PURE__ */ s.jsx(
            "img",
            {
              src: i.imgSrc,
              className: "meld-lineage-badge__parent-thumb",
              style: { cursor: "pointer" },
              loading: "lazy",
              onClick: (u) => {
                u.stopPropagation(), a({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: i.id || e.id,
                    mode: "lineage"
                  }
                });
              },
              title: o === 0 ? "Source" : o === 1 ? "Grand-Source" : `Ancestor (S${o + 1})`,
              alt: "source thumb"
            },
            i.id || o
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
        /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((i) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: i }, i)) })
      ] })
    ]
  }
), bd = h.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, i = typeof e.parent_id == "number" && e.parent_id === n.id, o = Be(e);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${a ? "meld-viewer-thumbnail--parent" : ""} ${i ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: o, alt: e.filename }),
          (a || i) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${a ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: a ? "Source Image" : "Derivative Image",
              children: a ? /* @__PURE__ */ s.jsx(ad, { size: 12 }) : /* @__PURE__ */ s.jsx(sd, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
bd.displayName = "ThumbnailItem";
const Mh = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: a,
  viewerMode: i
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
  ) : e.map(({ img: o }) => /* @__PURE__ */ s.jsx(
    bd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  i === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Ir, { className: "animate-spin", size: 20 }) })
] }) });
function Ih() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = je(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: i,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: p,
    activeShortcutKey: _,
    setLastDeletedImages: v,
    overlayRef: y,
    handleNext: w,
    handlePrevious: k,
    handleTagEdit: j,
    handleRestore: d,
    toggleFullscreen: f,
    image: m,
    windowedThumbnails: g,
    parentChain: x
  } = Eh({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), M = h.useRef(null), { executeWorkflow: C } = kd();
  if (!m) return null;
  const { viewerImageId: I, viewerMode: O } = e, N = Be(m), T = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Ie.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: y,
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
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${o ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (H) => H.stopPropagation(),
              children: [
                T && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: d,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(Ir, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => u(!o),
                      type: "button",
                      title: o ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(cd, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: j,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(fn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => i(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(hm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: f,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ s.jsx(xm, { size: 20 }) : /* @__PURE__ */ s.jsx(wm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(xe, { size: 20 })
                    }
                  )
                ] }),
                T && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: k,
                    type: "button",
                    disabled: p,
                    children: /* @__PURE__ */ s.jsx(id, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  p && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Ir, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: M,
                      src: N,
                      alt: m.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${p ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                T && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: w,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(od, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  Nh,
                  {
                    image: m,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: T,
                    parentChain: x,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  Mh,
                  {
                    windowedThumbnails: g,
                    viewerImageId: I,
                    currentImage: m,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: O
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Ch,
                  {
                    settings: e.settings,
                    activeShortcutKey: _
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            _d,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (H) => {
                if (e.activeModal.type === "workflow_selection") {
                  const re = e.activeModal.maskFilename;
                  for (const E of e.activeModal.images)
                    await C(H, E, re);
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(jd, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Sd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: v
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Ed, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(gd, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(vd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            wd,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            yd,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          )
        ]
      }
    ),
    document.body
  );
}
const bh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = je(), [a, i] = h.useState("gallery"), [o, u] = h.useState(""), [c, p] = h.useState(e.pagination.limit);
  h.useEffect(() => {
    p(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const _ = e.searchQuery.trim() !== "", v = h.useRef(null), y = h.useRef(null), w = h.useMemo(() => {
    const j = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((d) => e.viewScope === "trash" ? d.exists !== !1 || e.settings["gallery.trash.show_missing"] : d.exists !== !1 && (e.settings["gallery.show_parent_images"] || !d.has_children || j));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), k = h.useMemo(
    () => w.slice(0, c),
    [w, c]
  );
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (Q.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), h.useEffect(() => {
    const j = (d) => {
      d.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), d.preventDefault(), d.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), d.preventDefault(), d.stopPropagation()));
    };
    return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j);
  }, [e.activeModal.type, e.selectedIds.size, t]), h.useEffect(() => {
    const j = new IntersectionObserver(
      (f) => {
        if (f[0].isIntersecting) {
          if (e.isLoading) {
            Q.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < w.length ? (Q.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                w.length
              ),
              totalAvailableLocally: w.length
            }
          ), p((m) => m + e.pagination.limit)) : e.pagination.hasMore ? (Q.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : Q.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: w.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), d = v.current;
    return d && j.observe(d), () => {
      d && j.unobserve(d);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    c,
    w.length,
    e.pagination.limit,
    e.images.length
  ]), h.useEffect(() => {
    const j = e.viewerImageId ?? y.current;
    if (j !== null && w.some((f) => f.id === j)) {
      const f = w.findIndex((g) => g.id === j);
      if (f >= c) {
        p(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const m = document.querySelector(
        `[data-image-id="${j}"]`
      );
      m && (m.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (y.current = null));
    }
    e.viewerImageId !== null && (y.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    w,
    c,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: a,
    setViewMode: i,
    lastSearchQuery: o,
    setLastSearchQuery: u,
    localLimit: c,
    displayedImages: w,
    visibleImages: k,
    isSearchActive: _,
    loadMoreRef: v
  };
}, Lh = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = je(), { handleRunWithWorkflow: l } = Ni(e, t), a = e.selectedIds.size;
  if (a === 0) return null;
  const i = e.viewScope === "trash", o = () => {
    const c = e.images.filter(
      (_) => e.selectedIds.has(_.id)
    ), p = /* @__PURE__ */ new Set();
    for (const _ of c)
      if (_.tags)
        for (const v of _.tags)
          p.add(v);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(p)
      }
    });
  }, u = () => {
    const c = e.images.filter(
      (p) => e.selectedIds.has(p.id)
    );
    l(c);
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${i ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
          a,
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
                  Ir,
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
                  Wn,
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
              onClick: o,
              children: [
                /* @__PURE__ */ s.jsx(
                  fn,
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
              className: "meld-bulk-bar__button meld-bulk-bar__button--workflow",
              onClick: u,
              children: [
                /* @__PURE__ */ s.jsx(
                  ud,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Queue Workflow"
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
                  Wn,
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
              /* @__PURE__ */ s.jsx(xe, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, Th = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: a,
    lastSearchQuery: i,
    setLastSearchQuery: o,
    localLimit: u,
    displayedImages: c,
    visibleImages: p,
    isSearchActive: _,
    loadMoreRef: v
  } = bh();
  return Q.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: p.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Wn, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (y) => r("gallery.trash.show_missing", y.target.checked)
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
                  /* @__PURE__ */ s.jsx(xe, { size: 14 }),
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
                  l === "search" ? (o(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), a("gallery")) : (!e.searchQuery && i && t({
                    type: "SET_SEARCH_QUERY",
                    payload: i
                  }), a("search"));
                },
                style: {
                  background: "none",
                  border: "none",
                  color: _ ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: _ ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx($n, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const w = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", w);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(gm, { size: 14 }) : /* @__PURE__ */ s.jsx(cd, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(fn, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(pm, { size: 14 })
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
                  Ir,
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
                children: /* @__PURE__ */ s.jsx(Sm, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Sh, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(vh, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ s.jsx(
          jh,
          {
            onClose: () => a("gallery"),
            onSearch: (y) => {
              t({ type: "SET_SEARCH_QUERY", payload: y }), a("search");
            }
          }
        ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : p.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: p.map((y) => {
                const w = e.settings["sidebar.thumbnail_size"] || 100, k = e.settings["gallery.view_mode"] === "grid_only", j = k && y.width && y.height ? Math.min(
                  w,
                  w * y.width / y.height
                ) + 10 : k ? w + 10 : "100%";
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    "data-image-id": y.id,
                    style: {
                      width: k ? "auto" : "100%",
                      flexShrink: 0,
                      display: k ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ s.jsx(
                      yh,
                      {
                        height: k ? w + 10 : Math.max(w, 150),
                        style: {
                          width: typeof j == "number" ? `${j}px` : j,
                          minWidth: typeof j == "number" ? `${j}px` : j,
                          display: k ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ s.jsx(gh, { image: y })
                      }
                    )
                  },
                  y.id
                );
              })
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: v,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= c.length && !e.pagination.hasMore && p.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(Lh, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Ih, {}),
        /* @__PURE__ */ s.jsx(ph, {})
      ]
    }
  );
};
Qo.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, a;
      const n = (l = e.widgets) == null ? void 0 : l.find((i) => i.name === "positive"), r = (a = e.widgets) == null ? void 0 : a.find((i) => i.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const Ph = document.getElementById(
  "meld-gallery-style"
);
if (!Ph) {
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
let Zr = null, at = null;
Qo.registerExtension({
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
      const n = await md();
      Q.init(n.dev_mode), Q.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), Q.init(!1);
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
      }, X.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), X.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), X.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), Q.log("Import completed.");
      }), X.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await pd({
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
            Q.log("render called", {
              el: n,
              galleryRoot: Zr,
              galleryContainer: at
            }), at || (Q.log("galleryContainer not found, creating new one"), at = document.createElement("div"), at.id = "meld-gallery-container", at.style.height = "100%", at.style.width = "100%", at.style.display = "flex", at.style.flexDirection = "column"), n.contains(at) || (Q.log("Appending galleryContainer to el"), n.appendChild(at)), Zr ? Q.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (Q.log("Creating new gallery root"), Zr = td(at), Zr.render(
              pl.createElement(
                Gm,
                null,
                pl.createElement(Th)
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
