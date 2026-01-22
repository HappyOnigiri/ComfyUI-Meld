import { api as H } from "/scripts/api.js";
import { app as $o } from "/scripts/app.js";
function jd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Uo = { exports: {} }, X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir = Symbol.for("react.element"), Ed = Symbol.for("react.portal"), Cd = Symbol.for("react.fragment"), Nd = Symbol.for("react.strict_mode"), Id = Symbol.for("react.profiler"), Md = Symbol.for("react.provider"), Td = Symbol.for("react.context"), Ld = Symbol.for("react.forward_ref"), bd = Symbol.for("react.suspense"), Pd = Symbol.for("react.memo"), Dd = Symbol.for("react.lazy"), Ca = Symbol.iterator;
function Rd(e) {
  return e === null || typeof e != "object" ? null : (e = Ca && e[Ca] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Wo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Vo = Object.assign, Qo = {};
function $n(e, t, n) {
  this.props = e, this.context = t, this.refs = Qo, this.updater = n || Wo;
}
$n.prototype.isReactComponent = {};
$n.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
$n.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bo() {
}
Bo.prototype = $n.prototype;
function Ci(e, t, n) {
  this.props = e, this.context = t, this.refs = Qo, this.updater = n || Wo;
}
var Ni = Ci.prototype = new Bo();
Ni.constructor = Ci;
Vo(Ni, $n.prototype);
Ni.isPureReactComponent = !0;
var Na = Array.isArray, Ho = Object.prototype.hasOwnProperty, Ii = { current: null }, Ko = { key: !0, ref: !0, __self: !0, __source: !0 };
function Go(e, t, n) {
  var r, l = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) Ho.call(t, r) && !Ko.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var o = Array(u), c = 0; c < u; c++) o[c] = arguments[c + 2];
    l.children = o;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Ir, type: e, key: s, ref: a, props: l, _owner: Ii.current };
}
function zd(e, t) {
  return { $$typeof: Ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Mi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ir;
}
function Ad(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ia = /\/+/g;
function rs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ad("" + e.key) : t.toString(36);
}
function Zr(e, t, n, r, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (s) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Ir:
        case Ed:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + rs(a, 0) : r, Na(l) ? (n = "", e != null && (n = e.replace(Ia, "$&/") + "/"), Zr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Mi(l) && (l = zd(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(Ia, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Na(e)) for (var u = 0; u < e.length; u++) {
    s = e[u];
    var o = r + rs(s, u);
    a += Zr(s, t, n, o, l);
  }
  else if (o = Rd(e), typeof o == "function") for (e = o.call(e), u = 0; !(s = e.next()).done; ) s = s.value, o = r + rs(s, u++), a += Zr(s, t, n, o, l);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Zr(e, r, "", "", function(s) {
    return t.call(n, s, l++);
  }), r;
}
function Od(e) {
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
var Re = { current: null }, el = { transition: null }, Fd = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: el, ReactCurrentOwner: Ii };
function Yo() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = { map: Rr, forEach: function(e, t, n) {
  Rr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Rr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Rr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Mi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
X.Component = $n;
X.Fragment = Cd;
X.Profiler = Id;
X.PureComponent = Ci;
X.StrictMode = Nd;
X.Suspense = bd;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fd;
X.act = Yo;
X.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Vo({}, e.props), l = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = Ii.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (o in t) Ho.call(t, o) && !Ko.hasOwnProperty(o) && (r[o] = t[o] === void 0 && u !== void 0 ? u[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    u = Array(o);
    for (var c = 0; c < o; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Ir, type: e.type, key: l, ref: s, props: r, _owner: a };
};
X.createContext = function(e) {
  return e = { $$typeof: Td, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Md, _context: e }, e.Consumer = e;
};
X.createElement = Go;
X.createFactory = function(e) {
  var t = Go.bind(null, e);
  return t.type = e, t;
};
X.createRef = function() {
  return { current: null };
};
X.forwardRef = function(e) {
  return { $$typeof: Ld, render: e };
};
X.isValidElement = Mi;
X.lazy = function(e) {
  return { $$typeof: Dd, _payload: { _status: -1, _result: e }, _init: Od };
};
X.memo = function(e, t) {
  return { $$typeof: Pd, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function(e) {
  var t = el.transition;
  el.transition = {};
  try {
    e();
  } finally {
    el.transition = t;
  }
};
X.unstable_act = Yo;
X.useCallback = function(e, t) {
  return Re.current.useCallback(e, t);
};
X.useContext = function(e) {
  return Re.current.useContext(e);
};
X.useDebugValue = function() {
};
X.useDeferredValue = function(e) {
  return Re.current.useDeferredValue(e);
};
X.useEffect = function(e, t) {
  return Re.current.useEffect(e, t);
};
X.useId = function() {
  return Re.current.useId();
};
X.useImperativeHandle = function(e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function(e, t) {
  return Re.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function(e, t) {
  return Re.current.useLayoutEffect(e, t);
};
X.useMemo = function(e, t) {
  return Re.current.useMemo(e, t);
};
X.useReducer = function(e, t, n) {
  return Re.current.useReducer(e, t, n);
};
X.useRef = function(e) {
  return Re.current.useRef(e);
};
X.useState = function(e) {
  return Re.current.useState(e);
};
X.useSyncExternalStore = function(e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function() {
  return Re.current.useTransition();
};
X.version = "18.3.1";
Uo.exports = X;
var h = Uo.exports;
const fl = /* @__PURE__ */ jd(h);
var Xo = { exports: {} }, Ke = {}, qo = { exports: {} }, Jo = {};
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
  function t(I, T) {
    var O = I.length;
    I.push(T);
    e: for (; 0 < O; ) {
      var N = O - 1 >>> 1, K = I[N];
      if (0 < l(K, T)) I[N] = T, I[O] = K, O = N;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var T = I[0], O = I.pop();
    if (O !== T) {
      I[0] = O;
      e: for (var N = 0, K = I.length, ye = K >>> 1; N < ye; ) {
        var F = 2 * (N + 1) - 1, Z = I[F], se = F + 1, tt = I[se];
        if (0 > l(Z, O)) se < K && 0 > l(tt, Z) ? (I[N] = tt, I[se] = O, N = se) : (I[N] = Z, I[F] = O, N = F);
        else if (se < K && 0 > l(tt, O)) I[N] = tt, I[se] = O, N = se;
        else break e;
      }
    }
    return T;
  }
  function l(I, T) {
    var O = I.sortIndex - T.sortIndex;
    return O !== 0 ? O : I.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var a = Date, u = a.now();
    e.unstable_now = function() {
      return a.now() - u;
    };
  }
  var o = [], c = [], m = 1, _ = null, y = 3, g = !1, x = !1, S = !1, j = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(I) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= I) r(c), T.sortIndex = T.expirationTime, t(o, T);
      else break;
      T = n(c);
    }
  }
  function v(I) {
    if (S = !1, p(I), !x) if (n(o) !== null) x = !0, L(w);
    else {
      var T = n(c);
      T !== null && Q(v, T.startTime - I);
    }
  }
  function w(I, T) {
    x = !1, S && (S = !1, d(b), b = -1), g = !0;
    var O = y;
    try {
      for (p(T), _ = n(o); _ !== null && (!(_.expirationTime > T) || I && !z()); ) {
        var N = _.callback;
        if (typeof N == "function") {
          _.callback = null, y = _.priorityLevel;
          var K = N(_.expirationTime <= T);
          T = e.unstable_now(), typeof K == "function" ? _.callback = K : _ === n(o) && r(o), p(T);
        } else r(o);
        _ = n(o);
      }
      if (_ !== null) var ye = !0;
      else {
        var F = n(c);
        F !== null && Q(v, F.startTime - T), ye = !1;
      }
      return ye;
    } finally {
      _ = null, y = O, g = !1;
    }
  }
  var C = !1, M = null, b = -1, R = 5, E = -1;
  function z() {
    return !(e.unstable_now() - E < R);
  }
  function V() {
    if (M !== null) {
      var I = e.unstable_now();
      E = I;
      var T = !0;
      try {
        T = M(!0, I);
      } finally {
        T ? re() : (C = !1, M = null);
      }
    } else C = !1;
  }
  var re;
  if (typeof f == "function") re = function() {
    f(V);
  };
  else if (typeof MessageChannel < "u") {
    var k = new MessageChannel(), B = k.port2;
    k.port1.onmessage = V, re = function() {
      B.postMessage(null);
    };
  } else re = function() {
    j(V, 0);
  };
  function L(I) {
    M = I, C || (C = !0, re());
  }
  function Q(I, T) {
    b = j(function() {
      I(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    x || g || (x = !0, L(w));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(o);
  }, e.unstable_next = function(I) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = y;
    }
    var O = y;
    y = T;
    try {
      return I();
    } finally {
      y = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, T) {
    switch (I) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        I = 3;
    }
    var O = y;
    y = I;
    try {
      return T();
    } finally {
      y = O;
    }
  }, e.unstable_scheduleCallback = function(I, T, O) {
    var N = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? N + O : N) : O = N, I) {
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
    return K = O + K, I = { id: m++, callback: T, priorityLevel: I, startTime: O, expirationTime: K, sortIndex: -1 }, O > N ? (I.sortIndex = O, t(c, I), n(o) === null && I === n(c) && (S ? (d(b), b = -1) : S = !0, Q(v, O - N))) : (I.sortIndex = K, t(o, I), x || g || (x = !0, L(w))), I;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(I) {
    var T = y;
    return function() {
      var O = y;
      y = T;
      try {
        return I.apply(this, arguments);
      } finally {
        y = O;
      }
    };
  };
})(Jo);
qo.exports = Jo;
var $d = qo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud = h, He = $d;
function P(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Zo = /* @__PURE__ */ new Set(), cr = {};
function on(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (cr[e] = t, e = 0; e < t.length; e++) Zo.add(t[e]);
}
var St = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ts = Object.prototype.hasOwnProperty, Wd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ma = {}, Ta = {};
function Vd(e) {
  return Ts.call(Ta, e) ? !0 : Ts.call(Ma, e) ? !1 : Wd.test(e) ? Ta[e] = !0 : (Ma[e] = !0, !1);
}
function Qd(e, t, n, r) {
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
function Bd(e, t, n, r) {
  if (t === null || typeof t > "u" || Qd(e, t, n, r)) return !0;
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
function ze(e, t, n, r, l, s, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a;
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ce[e] = new ze(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ce[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ce[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ce[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ce[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ce[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ce[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ce[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ce[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ti = /[\-:]([a-z])/g;
function Li(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ti,
    Li
  );
  Ce[t] = new ze(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ti, Li);
  Ce[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ti, Li);
  Ce[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ce[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ce[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bi(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bd(t, n, l, r) && (n = null), r || l === null ? Vd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, zr = Symbol.for("react.element"), pn = Symbol.for("react.portal"), mn = Symbol.for("react.fragment"), Pi = Symbol.for("react.strict_mode"), Ls = Symbol.for("react.profiler"), eu = Symbol.for("react.provider"), tu = Symbol.for("react.context"), Di = Symbol.for("react.forward_ref"), bs = Symbol.for("react.suspense"), Ps = Symbol.for("react.suspense_list"), Ri = Symbol.for("react.memo"), It = Symbol.for("react.lazy"), nu = Symbol.for("react.offscreen"), La = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object" ? null : (e = La && e[La] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fe = Object.assign, ls;
function qn(e) {
  if (ls === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ls = t && t[1] || "";
  }
  return `
` + ls + e;
}
var ss = !1;
function is(e, t) {
  if (!e || ss) return "";
  ss = !0;
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
`), s = r.stack.split(`
`), a = l.length - 1, u = s.length - 1; 1 <= a && 0 <= u && l[a] !== s[u]; ) u--;
      for (; 1 <= a && 0 <= u; a--, u--) if (l[a] !== s[u]) {
        if (a !== 1 || u !== 1)
          do
            if (a--, u--, 0 > u || l[a] !== s[u]) {
              var o = `
` + l[a].replace(" at new ", " at ");
              return e.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", e.displayName)), o;
            }
          while (1 <= a && 0 <= u);
        break;
      }
    }
  } finally {
    ss = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function Hd(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type);
    case 16:
      return qn("Lazy");
    case 13:
      return qn("Suspense");
    case 19:
      return qn("SuspenseList");
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
function Ds(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mn:
      return "Fragment";
    case pn:
      return "Portal";
    case Ls:
      return "Profiler";
    case Pi:
      return "StrictMode";
    case bs:
      return "Suspense";
    case Ps:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case tu:
      return (e.displayName || "Context") + ".Consumer";
    case eu:
      return (e._context.displayName || "Context") + ".Provider";
    case Di:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ri:
      return t = e.displayName || null, t !== null ? t : Ds(e.type) || "Memo";
    case It:
      t = e._payload, e = e._init;
      try {
        return Ds(e(t));
      } catch {
      }
  }
  return null;
}
function Kd(e) {
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
      return Ds(t);
    case 8:
      return t === Pi ? "StrictMode" : "Mode";
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
function Wt(e) {
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
function ru(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gd(e) {
  var t = ru(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(a) {
      r = "" + a, s.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ar(e) {
  e._valueTracker || (e._valueTracker = Gd(e));
}
function lu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ru(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function pl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Rs(e, t) {
  var n = t.checked;
  return fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ba(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function su(e, t) {
  t = t.checked, t != null && bi(e, "checked", t, !1);
}
function zs(e, t) {
  su(e, t);
  var n = Wt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? As(e, t.type, n) : t.hasOwnProperty("defaultValue") && As(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Pa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function As(e, t, n) {
  (t !== "number" || pl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jn = Array.isArray;
function En(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Os(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Da(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(P(92));
      if (Jn(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function iu(e, t) {
  var n = Wt(t.value), r = Wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ra(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function au(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? au(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Or, ou = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Or = Or || document.createElement("div"), Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Or.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var tr = {
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
}, Yd = ["Webkit", "ms", "Moz", "O"];
Object.keys(tr).forEach(function(e) {
  Yd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), tr[t] = tr[e];
  });
});
function uu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || tr.hasOwnProperty(e) && tr[e] ? ("" + t).trim() : t + "px";
}
function cu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = uu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Xd = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function $s(e, t) {
  if (t) {
    if (Xd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Us(e, t) {
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
var Ws = null;
function zi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Vs = null, Cn = null, Nn = null;
function za(e) {
  if (e = Lr(e)) {
    if (typeof Vs != "function") throw Error(P(280));
    var t = e.stateNode;
    t && (t = Wl(t), Vs(e.stateNode, e.type, t));
  }
}
function du(e) {
  Cn ? Nn ? Nn.push(e) : Nn = [e] : Cn = e;
}
function fu() {
  if (Cn) {
    var e = Cn, t = Nn;
    if (Nn = Cn = null, za(e), t) for (e = 0; e < t.length; e++) za(t[e]);
  }
}
function pu(e, t) {
  return e(t);
}
function mu() {
}
var as = !1;
function hu(e, t, n) {
  if (as) return e(t, n);
  as = !0;
  try {
    return pu(e, t, n);
  } finally {
    as = !1, (Cn !== null || Nn !== null) && (mu(), fu());
  }
}
function fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Wl(n);
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
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Qs = !1;
if (St) try {
  var Qn = {};
  Object.defineProperty(Qn, "passive", { get: function() {
    Qs = !0;
  } }), window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
} catch {
  Qs = !1;
}
function qd(e, t, n, r, l, s, a, u, o) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var nr = !1, ml = null, hl = !1, Bs = null, Jd = { onError: function(e) {
  nr = !0, ml = e;
} };
function Zd(e, t, n, r, l, s, a, u, o) {
  nr = !1, ml = null, qd.apply(Jd, arguments);
}
function ef(e, t, n, r, l, s, a, u, o) {
  if (Zd.apply(this, arguments), nr) {
    if (nr) {
      var c = ml;
      nr = !1, ml = null;
    } else throw Error(P(198));
    hl || (hl = !0, Bs = c);
  }
}
function un(e) {
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
function gu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Aa(e) {
  if (un(e) !== e) throw Error(P(188));
}
function tf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = un(e), t === null) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var s = l.alternate;
    if (s === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === s.child) {
      for (s = l.child; s; ) {
        if (s === n) return Aa(l), e;
        if (s === r) return Aa(l), t;
        s = s.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) n = l, r = s;
    else {
      for (var a = !1, u = l.child; u; ) {
        if (u === n) {
          a = !0, n = l, r = s;
          break;
        }
        if (u === r) {
          a = !0, r = l, n = s;
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = s.child; u; ) {
          if (u === n) {
            a = !0, n = s, r = l;
            break;
          }
          if (u === r) {
            a = !0, r = s, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function yu(e) {
  return e = tf(e), e !== null ? vu(e) : null;
}
function vu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wu = He.unstable_scheduleCallback, Oa = He.unstable_cancelCallback, nf = He.unstable_shouldYield, rf = He.unstable_requestPaint, he = He.unstable_now, lf = He.unstable_getCurrentPriorityLevel, Ai = He.unstable_ImmediatePriority, xu = He.unstable_UserBlockingPriority, gl = He.unstable_NormalPriority, sf = He.unstable_LowPriority, _u = He.unstable_IdlePriority, Ol = null, ht = null;
function af(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function") try {
    ht.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ut = Math.clz32 ? Math.clz32 : cf, of = Math.log, uf = Math.LN2;
function cf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (of(e) / uf | 0) | 0;
}
var Fr = 64, $r = 4194304;
function Zn(e) {
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
function yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, s = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var u = a & ~l;
    u !== 0 ? r = Zn(u) : (s &= a, s !== 0 && (r = Zn(s)));
  } else a = n & ~l, a !== 0 ? r = Zn(a) : s !== 0 && (r = Zn(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, s = t & -t, l >= s || l === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ut(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function df(e, t) {
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
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - ut(s), u = 1 << a, o = l[a];
    o === -1 ? (!(u & n) || u & r) && (l[a] = df(u, t)) : o <= t && (e.expiredLanes |= u), s &= ~u;
  }
}
function Hs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Su() {
  var e = Fr;
  return Fr <<= 1, !(Fr & 4194240) && (Fr = 64), e;
}
function os(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n;
}
function pf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ut(n), s = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~s;
  }
}
function Oi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var le = 0;
function ku(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ju, Fi, Eu, Cu, Nu, Ks = !1, Ur = [], Dt = null, Rt = null, zt = null, pr = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), Tt = [], mf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      zt = null;
      break;
    case "pointerover":
    case "pointerout":
      pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      mr.delete(t.pointerId);
  }
}
function Bn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [l] }, t !== null && (t = Lr(t), t !== null && Fi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function hf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Dt = Bn(Dt, e, t, n, r, l), !0;
    case "dragenter":
      return Rt = Bn(Rt, e, t, n, r, l), !0;
    case "mouseover":
      return zt = Bn(zt, e, t, n, r, l), !0;
    case "pointerover":
      var s = l.pointerId;
      return pr.set(s, Bn(pr.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return s = l.pointerId, mr.set(s, Bn(mr.get(s) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Iu(e) {
  var t = qt(e.target);
  if (t !== null) {
    var n = un(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = gu(n), t !== null) {
          e.blockedOn = t, Nu(e.priority, function() {
            Eu(n);
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
function tl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ws = r, n.target.dispatchEvent(r), Ws = null;
    } else return t = Lr(n), t !== null && Fi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $a(e, t, n) {
  tl(e) && n.delete(t);
}
function gf() {
  Ks = !1, Dt !== null && tl(Dt) && (Dt = null), Rt !== null && tl(Rt) && (Rt = null), zt !== null && tl(zt) && (zt = null), pr.forEach($a), mr.forEach($a);
}
function Hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ks || (Ks = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, gf)));
}
function hr(e) {
  function t(l) {
    return Hn(l, e);
  }
  if (0 < Ur.length) {
    Hn(Ur[0], e);
    for (var n = 1; n < Ur.length; n++) {
      var r = Ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Dt !== null && Hn(Dt, e), Rt !== null && Hn(Rt, e), zt !== null && Hn(zt, e), pr.forEach(t), mr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Iu(n), n.blockedOn === null && Tt.shift();
}
var In = Ct.ReactCurrentBatchConfig, vl = !0;
function yf(e, t, n, r) {
  var l = le, s = In.transition;
  In.transition = null;
  try {
    le = 1, $i(e, t, n, r);
  } finally {
    le = l, In.transition = s;
  }
}
function vf(e, t, n, r) {
  var l = le, s = In.transition;
  In.transition = null;
  try {
    le = 4, $i(e, t, n, r);
  } finally {
    le = l, In.transition = s;
  }
}
function $i(e, t, n, r) {
  if (vl) {
    var l = Gs(e, t, n, r);
    if (l === null) vs(e, t, r, wl, n), Fa(e, r);
    else if (hf(l, e, t, n, r)) r.stopPropagation();
    else if (Fa(e, r), t & 4 && -1 < mf.indexOf(e)) {
      for (; l !== null; ) {
        var s = Lr(l);
        if (s !== null && ju(s), s = Gs(e, t, n, r), s === null && vs(e, t, r, wl, n), s === l) break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else vs(e, t, r, null, n);
  }
}
var wl = null;
function Gs(e, t, n, r) {
  if (wl = null, e = zi(r), e = qt(e), e !== null) if (t = un(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = gu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return wl = e, null;
}
function Mu(e) {
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
      switch (lf()) {
        case Ai:
          return 1;
        case xu:
          return 4;
        case gl:
        case sf:
          return 16;
        case _u:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bt = null, Ui = null, nl = null;
function Tu() {
  if (nl) return nl;
  var e, t = Ui, n = t.length, r, l = "value" in bt ? bt.value : bt.textContent, s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++) ;
  return nl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function rl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Wr() {
  return !0;
}
function Ua() {
  return !1;
}
function Ge(e) {
  function t(n, r, l, s, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(s) : s[u]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Wr : Ua, this.isPropagationStopped = Ua, this;
  }
  return fe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wr);
  }, persist: function() {
  }, isPersistent: Wr }), t;
}
var Un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Wi = Ge(Un), Tr = fe({}, Un, { view: 0, detail: 0 }), wf = Ge(Tr), us, cs, Kn, Fl = fe({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (us = e.screenX - Kn.screenX, cs = e.screenY - Kn.screenY) : cs = us = 0, Kn = e), us);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : cs;
} }), Wa = Ge(Fl), xf = fe({}, Fl, { dataTransfer: 0 }), _f = Ge(xf), Sf = fe({}, Tr, { relatedTarget: 0 }), ds = Ge(Sf), kf = fe({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jf = Ge(kf), Ef = fe({}, Un, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Cf = Ge(Ef), Nf = fe({}, Un, { data: 0 }), Va = Ge(Nf), If = {
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
}, Mf = {
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
}, Tf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Lf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tf[e]) ? !!t[e] : !1;
}
function Vi() {
  return Lf;
}
var bf = fe({}, Tr, { key: function(e) {
  if (e.key) {
    var t = If[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = rl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vi, charCode: function(e) {
  return e.type === "keypress" ? rl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Pf = Ge(bf), Df = fe({}, Fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Qa = Ge(Df), Rf = fe({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vi }), zf = Ge(Rf), Af = fe({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Of = Ge(Af), Ff = fe({}, Fl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $f = Ge(Ff), Uf = [9, 13, 27, 32], Qi = St && "CompositionEvent" in window, rr = null;
St && "documentMode" in document && (rr = document.documentMode);
var Wf = St && "TextEvent" in window && !rr, Lu = St && (!Qi || rr && 8 < rr && 11 >= rr), Ba = " ", Ha = !1;
function bu(e, t) {
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
function Pu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var hn = !1;
function Vf(e, t) {
  switch (e) {
    case "compositionend":
      return Pu(t);
    case "keypress":
      return t.which !== 32 ? null : (Ha = !0, Ba);
    case "textInput":
      return e = t.data, e === Ba && Ha ? null : e;
    default:
      return null;
  }
}
function Qf(e, t) {
  if (hn) return e === "compositionend" || !Qi && bu(e, t) ? (e = Tu(), nl = Ui = bt = null, hn = !1, e) : null;
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
      return Lu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ka(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bf[e.type] : t === "textarea";
}
function Du(e, t, n, r) {
  du(r), t = xl(t, "onChange"), 0 < t.length && (n = new Wi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var lr = null, gr = null;
function Hf(e) {
  Bu(e, 0);
}
function $l(e) {
  var t = vn(e);
  if (lu(t)) return e;
}
function Kf(e, t) {
  if (e === "change") return t;
}
var Ru = !1;
if (St) {
  var fs;
  if (St) {
    var ps = "oninput" in document;
    if (!ps) {
      var Ga = document.createElement("div");
      Ga.setAttribute("oninput", "return;"), ps = typeof Ga.oninput == "function";
    }
    fs = ps;
  } else fs = !1;
  Ru = fs && (!document.documentMode || 9 < document.documentMode);
}
function Ya() {
  lr && (lr.detachEvent("onpropertychange", zu), gr = lr = null);
}
function zu(e) {
  if (e.propertyName === "value" && $l(gr)) {
    var t = [];
    Du(t, gr, e, zi(e)), hu(Hf, t);
  }
}
function Gf(e, t, n) {
  e === "focusin" ? (Ya(), lr = t, gr = n, lr.attachEvent("onpropertychange", zu)) : e === "focusout" && Ya();
}
function Yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return $l(gr);
}
function Xf(e, t) {
  if (e === "click") return $l(t);
}
function qf(e, t) {
  if (e === "input" || e === "change") return $l(t);
}
function Jf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dt = typeof Object.is == "function" ? Object.is : Jf;
function yr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ts.call(t, l) || !dt(e[l], t[l])) return !1;
  }
  return !0;
}
function Xa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qa(e, t) {
  var n = Xa(e);
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
    n = Xa(n);
  }
}
function Au(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Au(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ou() {
  for (var e = window, t = pl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = pl(e.document);
  }
  return t;
}
function Bi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Zf(e) {
  var t = Ou(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Au(n.ownerDocument.documentElement, n)) {
    if (r !== null && Bi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, s = Math.min(r.start, l);
        r = r.end === void 0 ? s : Math.min(r.end, l), !e.extend && s > r && (l = r, r = s, s = l), l = qa(n, s);
        var a = qa(
          n,
          r
        );
        l && a && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ep = St && "documentMode" in document && 11 >= document.documentMode, gn = null, Ys = null, sr = null, Xs = !1;
function Ja(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xs || gn == null || gn !== pl(r) || (r = gn, "selectionStart" in r && Bi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), sr && yr(sr, r) || (sr = r, r = xl(Ys, "onSelect"), 0 < r.length && (t = new Wi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gn)));
}
function Vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yn = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, ms = {}, Fu = {};
St && (Fu = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
function Ul(e) {
  if (ms[e]) return ms[e];
  if (!yn[e]) return e;
  var t = yn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fu) return ms[e] = t[n];
  return e;
}
var $u = Ul("animationend"), Uu = Ul("animationiteration"), Wu = Ul("animationstart"), Vu = Ul("transitionend"), Qu = /* @__PURE__ */ new Map(), Za = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qt(e, t) {
  Qu.set(e, t), on(t, [e]);
}
for (var hs = 0; hs < Za.length; hs++) {
  var gs = Za[hs], tp = gs.toLowerCase(), np = gs[0].toUpperCase() + gs.slice(1);
  Qt(tp, "on" + np);
}
Qt($u, "onAnimationEnd");
Qt(Uu, "onAnimationIteration");
Qt(Wu, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(Vu, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
on("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
on("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
on("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rp = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function eo(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ef(r, t, void 0, e), e.currentTarget = null;
}
function Bu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var u = r[a], o = u.instance, c = u.currentTarget;
        if (u = u.listener, o !== s && l.isPropagationStopped()) break e;
        eo(l, u, c), s = o;
      }
      else for (a = 0; a < r.length; a++) {
        if (u = r[a], o = u.instance, c = u.currentTarget, u = u.listener, o !== s && l.isPropagationStopped()) break e;
        eo(l, u, c), s = o;
      }
    }
  }
  if (hl) throw e = Bs, hl = !1, Bs = null, e;
}
function ae(e, t) {
  var n = t[ti];
  n === void 0 && (n = t[ti] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Hu(t, e, 2, !1), n.add(r));
}
function ys(e, t, n) {
  var r = 0;
  t && (r |= 4), Hu(n, e, r, t);
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);
function vr(e) {
  if (!e[Qr]) {
    e[Qr] = !0, Zo.forEach(function(n) {
      n !== "selectionchange" && (rp.has(n) || ys(n, !1, e), ys(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qr] || (t[Qr] = !0, ys("selectionchange", !1, t));
  }
}
function Hu(e, t, n, r) {
  switch (Mu(t)) {
    case 1:
      var l = yf;
      break;
    case 4:
      l = vf;
      break;
    default:
      l = $i;
  }
  n = l.bind(null, t, n, e), l = void 0, !Qs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function vs(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var o = a.tag;
        if ((o === 3 || o === 4) && (o = a.stateNode.containerInfo, o === l || o.nodeType === 8 && o.parentNode === l)) return;
        a = a.return;
      }
      for (; u !== null; ) {
        if (a = qt(u), a === null) return;
        if (o = a.tag, o === 5 || o === 6) {
          r = s = a;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  hu(function() {
    var c = s, m = zi(n), _ = [];
    e: {
      var y = Qu.get(e);
      if (y !== void 0) {
        var g = Wi, x = e;
        switch (e) {
          case "keypress":
            if (rl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Pf;
            break;
          case "focusin":
            x = "focus", g = ds;
            break;
          case "focusout":
            x = "blur", g = ds;
            break;
          case "beforeblur":
          case "afterblur":
            g = ds;
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
            g = Wa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = _f;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = zf;
            break;
          case $u:
          case Uu:
          case Wu:
            g = jf;
            break;
          case Vu:
            g = Of;
            break;
          case "scroll":
            g = wf;
            break;
          case "wheel":
            g = $f;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Qa;
        }
        var S = (t & 4) !== 0, j = !S && e === "scroll", d = S ? y !== null ? y + "Capture" : null : y;
        S = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var v = p.stateNode;
          if (p.tag === 5 && v !== null && (p = v, d !== null && (v = fr(f, d), v != null && S.push(wr(f, v, p)))), j) break;
          f = f.return;
        }
        0 < S.length && (y = new g(y, x, null, n, m), _.push({ event: y, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", y && n !== Ws && (x = n.relatedTarget || n.fromElement) && (qt(x) || x[kt])) break e;
        if ((g || y) && (y = m.window === m ? m : (y = m.ownerDocument) ? y.defaultView || y.parentWindow : window, g ? (x = n.relatedTarget || n.toElement, g = c, x = x ? qt(x) : null, x !== null && (j = un(x), x !== j || x.tag !== 5 && x.tag !== 6) && (x = null)) : (g = null, x = c), g !== x)) {
          if (S = Wa, v = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (S = Qa, v = "onPointerLeave", d = "onPointerEnter", f = "pointer"), j = g == null ? y : vn(g), p = x == null ? y : vn(x), y = new S(v, f + "leave", g, n, m), y.target = j, y.relatedTarget = p, v = null, qt(m) === c && (S = new S(d, f + "enter", x, n, m), S.target = p, S.relatedTarget = j, v = S), j = v, g && x) t: {
            for (S = g, d = x, f = 0, p = S; p; p = fn(p)) f++;
            for (p = 0, v = d; v; v = fn(v)) p++;
            for (; 0 < f - p; ) S = fn(S), f--;
            for (; 0 < p - f; ) d = fn(d), p--;
            for (; f--; ) {
              if (S === d || d !== null && S === d.alternate) break t;
              S = fn(S), d = fn(d);
            }
            S = null;
          }
          else S = null;
          g !== null && to(_, y, g, S, !1), x !== null && j !== null && to(_, j, x, S, !0);
        }
      }
      e: {
        if (y = c ? vn(c) : window, g = y.nodeName && y.nodeName.toLowerCase(), g === "select" || g === "input" && y.type === "file") var w = Kf;
        else if (Ka(y)) if (Ru) w = qf;
        else {
          w = Yf;
          var C = Gf;
        }
        else (g = y.nodeName) && g.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (w = Xf);
        if (w && (w = w(e, c))) {
          Du(_, w, n, m);
          break e;
        }
        C && C(e, y, c), e === "focusout" && (C = y._wrapperState) && C.controlled && y.type === "number" && As(y, "number", y.value);
      }
      switch (C = c ? vn(c) : window, e) {
        case "focusin":
          (Ka(C) || C.contentEditable === "true") && (gn = C, Ys = c, sr = null);
          break;
        case "focusout":
          sr = Ys = gn = null;
          break;
        case "mousedown":
          Xs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xs = !1, Ja(_, n, m);
          break;
        case "selectionchange":
          if (ep) break;
        case "keydown":
        case "keyup":
          Ja(_, n, m);
      }
      var M;
      if (Qi) e: {
        switch (e) {
          case "compositionstart":
            var b = "onCompositionStart";
            break e;
          case "compositionend":
            b = "onCompositionEnd";
            break e;
          case "compositionupdate":
            b = "onCompositionUpdate";
            break e;
        }
        b = void 0;
      }
      else hn ? bu(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (Lu && n.locale !== "ko" && (hn || b !== "onCompositionStart" ? b === "onCompositionEnd" && hn && (M = Tu()) : (bt = m, Ui = "value" in bt ? bt.value : bt.textContent, hn = !0)), C = xl(c, b), 0 < C.length && (b = new Va(b, e, null, n, m), _.push({ event: b, listeners: C }), M ? b.data = M : (M = Pu(n), M !== null && (b.data = M)))), (M = Wf ? Vf(e, n) : Qf(e, n)) && (c = xl(c, "onBeforeInput"), 0 < c.length && (m = new Va("onBeforeInput", "beforeinput", null, n, m), _.push({ event: m, listeners: c }), m.data = M));
    }
    Bu(_, t);
  });
}
function wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, s = l.stateNode;
    l.tag === 5 && s !== null && (l = s, s = fr(e, n), s != null && r.unshift(wr(e, s, l)), s = fr(e, t), s != null && r.push(wr(e, s, l))), e = e.return;
  }
  return r;
}
function fn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function to(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var u = n, o = u.alternate, c = u.stateNode;
    if (o !== null && o === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (o = fr(n, s), o != null && a.unshift(wr(n, o, u))) : l || (o = fr(n, s), o != null && a.push(wr(n, o, u)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var lp = /\r\n?/g, sp = /\u0000|\uFFFD/g;
function no(e) {
  return (typeof e == "string" ? e : "" + e).replace(lp, `
`).replace(sp, "");
}
function Br(e, t, n) {
  if (t = no(t), no(e) !== t && n) throw Error(P(425));
}
function _l() {
}
var qs = null, Js = null;
function Zs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ei = typeof setTimeout == "function" ? setTimeout : void 0, ip = typeof clearTimeout == "function" ? clearTimeout : void 0, ro = typeof Promise == "function" ? Promise : void 0, ap = typeof queueMicrotask == "function" ? queueMicrotask : typeof ro < "u" ? function(e) {
  return ro.resolve(null).then(e).catch(op);
} : ei;
function op(e) {
  setTimeout(function() {
    throw e;
  });
}
function ws(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), hr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  hr(t);
}
function At(e) {
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
function lo(e) {
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
var Wn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + Wn, xr = "__reactProps$" + Wn, kt = "__reactContainer$" + Wn, ti = "__reactEvents$" + Wn, up = "__reactListeners$" + Wn, cp = "__reactHandles$" + Wn;
function qt(e) {
  var t = e[mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[kt] || n[mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = lo(e); e !== null; ) {
        if (n = e[mt]) return n;
        e = lo(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Lr(e) {
  return e = e[mt] || e[kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Wl(e) {
  return e[xr] || null;
}
var ni = [], wn = -1;
function Bt(e) {
  return { current: e };
}
function oe(e) {
  0 > wn || (e.current = ni[wn], ni[wn] = null, wn--);
}
function ie(e, t) {
  wn++, ni[wn] = e.current, e.current = t;
}
var Vt = {}, Te = Bt(Vt), Fe = Bt(!1), nn = Vt;
function bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, s;
  for (s in n) l[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function $e(e) {
  return e = e.childContextTypes, e != null;
}
function Sl() {
  oe(Fe), oe(Te);
}
function so(e, t, n) {
  if (Te.current !== Vt) throw Error(P(168));
  ie(Te, t), ie(Fe, n);
}
function Ku(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(P(108, Kd(e) || "Unknown", l));
  return fe({}, n, r);
}
function kl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, nn = Te.current, ie(Te, e), ie(Fe, Fe.current), !0;
}
function io(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n ? (e = Ku(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, oe(Fe), oe(Te), ie(Te, e)) : oe(Fe), ie(Fe, n);
}
var vt = null, Vl = !1, xs = !1;
function Gu(e) {
  vt === null ? vt = [e] : vt.push(e);
}
function dp(e) {
  Vl = !0, Gu(e);
}
function Ht() {
  if (!xs && vt !== null) {
    xs = !0;
    var e = 0, t = le;
    try {
      var n = vt;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      vt = null, Vl = !1;
    } catch (l) {
      throw vt !== null && (vt = vt.slice(e + 1)), wu(Ai, Ht), l;
    } finally {
      le = t, xs = !1;
    }
  }
  return null;
}
var xn = [], _n = 0, jl = null, El = 0, Ye = [], Xe = 0, rn = null, wt = 1, xt = "";
function Yt(e, t) {
  xn[_n++] = El, xn[_n++] = jl, jl = e, El = t;
}
function Yu(e, t, n) {
  Ye[Xe++] = wt, Ye[Xe++] = xt, Ye[Xe++] = rn, rn = e;
  var r = wt;
  e = xt;
  var l = 32 - ut(r) - 1;
  r &= ~(1 << l), n += 1;
  var s = 32 - ut(t) + l;
  if (30 < s) {
    var a = l - l % 5;
    s = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, wt = 1 << 32 - ut(t) + l | n << l | r, xt = s + e;
  } else wt = 1 << s | n << l | r, xt = e;
}
function Hi(e) {
  e.return !== null && (Yt(e, 1), Yu(e, 1, 0));
}
function Ki(e) {
  for (; e === jl; ) jl = xn[--_n], xn[_n] = null, El = xn[--_n], xn[_n] = null;
  for (; e === rn; ) rn = Ye[--Xe], Ye[Xe] = null, xt = Ye[--Xe], Ye[Xe] = null, wt = Ye[--Xe], Ye[Xe] = null;
}
var Qe = null, Ve = null, ue = !1, at = null;
function Xu(e, t) {
  var n = qe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ao(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ve = At(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: wt, overflow: xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qe = e, Ve = null, !0) : !1;
    default:
      return !1;
  }
}
function ri(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function li(e) {
  if (ue) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!ao(e, t)) {
        if (ri(e)) throw Error(P(418));
        t = At(n.nextSibling);
        var r = Qe;
        t && ao(e, t) ? Xu(r, n) : (e.flags = e.flags & -4097 | 2, ue = !1, Qe = e);
      }
    } else {
      if (ri(e)) throw Error(P(418));
      e.flags = e.flags & -4097 | 2, ue = !1, Qe = e;
    }
  }
}
function oo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Qe = e;
}
function Hr(e) {
  if (e !== Qe) return !1;
  if (!ue) return oo(e), ue = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Zs(e.type, e.memoizedProps)), t && (t = Ve)) {
    if (ri(e)) throw qu(), Error(P(418));
    for (; t; ) Xu(e, t), t = At(t.nextSibling);
  }
  if (oo(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = At(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = Qe ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function qu() {
  for (var e = Ve; e; ) e = At(e.nextSibling);
}
function Pn() {
  Ve = Qe = null, ue = !1;
}
function Gi(e) {
  at === null ? at = [e] : at.push(e);
}
var fp = Ct.ReactCurrentBatchConfig;
function Gn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var l = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
        var u = l.refs;
        a === null ? delete u[s] : u[s] = a;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Kr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function uo(e) {
  var t = e._init;
  return t(e._payload);
}
function Ju(e) {
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
    return d = Ut(d, f), d.index = 0, d.sibling = null, d;
  }
  function s(d, f, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < f ? (d.flags |= 2, f) : p) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, p, v) {
    return f === null || f.tag !== 6 ? (f = Ns(p, d.mode, v), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function o(d, f, p, v) {
    var w = p.type;
    return w === mn ? m(d, f, p.props.children, v, p.key) : f !== null && (f.elementType === w || typeof w == "object" && w !== null && w.$$typeof === It && uo(w) === f.type) ? (v = l(f, p.props), v.ref = Gn(d, f, p), v.return = d, v) : (v = cl(p.type, p.key, p.props, null, d.mode, v), v.ref = Gn(d, f, p), v.return = d, v);
  }
  function c(d, f, p, v) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== p.containerInfo || f.stateNode.implementation !== p.implementation ? (f = Is(p, d.mode, v), f.return = d, f) : (f = l(f, p.children || []), f.return = d, f);
  }
  function m(d, f, p, v, w) {
    return f === null || f.tag !== 7 ? (f = tn(p, d.mode, v, w), f.return = d, f) : (f = l(f, p), f.return = d, f);
  }
  function _(d, f, p) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ns("" + f, d.mode, p), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case zr:
          return p = cl(f.type, f.key, f.props, null, d.mode, p), p.ref = Gn(d, null, f), p.return = d, p;
        case pn:
          return f = Is(f, d.mode, p), f.return = d, f;
        case It:
          var v = f._init;
          return _(d, v(f._payload), p);
      }
      if (Jn(f) || Vn(f)) return f = tn(f, d.mode, p, null), f.return = d, f;
      Kr(d, f);
    }
    return null;
  }
  function y(d, f, p, v) {
    var w = f !== null ? f.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return w !== null ? null : u(d, f, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zr:
          return p.key === w ? o(d, f, p, v) : null;
        case pn:
          return p.key === w ? c(d, f, p, v) : null;
        case It:
          return w = p._init, y(
            d,
            f,
            w(p._payload),
            v
          );
      }
      if (Jn(p) || Vn(p)) return w !== null ? null : m(d, f, p, v, null);
      Kr(d, p);
    }
    return null;
  }
  function g(d, f, p, v, w) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return d = d.get(p) || null, u(f, d, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case zr:
          return d = d.get(v.key === null ? p : v.key) || null, o(f, d, v, w);
        case pn:
          return d = d.get(v.key === null ? p : v.key) || null, c(f, d, v, w);
        case It:
          var C = v._init;
          return g(d, f, p, C(v._payload), w);
      }
      if (Jn(v) || Vn(v)) return d = d.get(p) || null, m(f, d, v, w, null);
      Kr(f, v);
    }
    return null;
  }
  function x(d, f, p, v) {
    for (var w = null, C = null, M = f, b = f = 0, R = null; M !== null && b < p.length; b++) {
      M.index > b ? (R = M, M = null) : R = M.sibling;
      var E = y(d, M, p[b], v);
      if (E === null) {
        M === null && (M = R);
        break;
      }
      e && M && E.alternate === null && t(d, M), f = s(E, f, b), C === null ? w = E : C.sibling = E, C = E, M = R;
    }
    if (b === p.length) return n(d, M), ue && Yt(d, b), w;
    if (M === null) {
      for (; b < p.length; b++) M = _(d, p[b], v), M !== null && (f = s(M, f, b), C === null ? w = M : C.sibling = M, C = M);
      return ue && Yt(d, b), w;
    }
    for (M = r(d, M); b < p.length; b++) R = g(M, d, b, p[b], v), R !== null && (e && R.alternate !== null && M.delete(R.key === null ? b : R.key), f = s(R, f, b), C === null ? w = R : C.sibling = R, C = R);
    return e && M.forEach(function(z) {
      return t(d, z);
    }), ue && Yt(d, b), w;
  }
  function S(d, f, p, v) {
    var w = Vn(p);
    if (typeof w != "function") throw Error(P(150));
    if (p = w.call(p), p == null) throw Error(P(151));
    for (var C = w = null, M = f, b = f = 0, R = null, E = p.next(); M !== null && !E.done; b++, E = p.next()) {
      M.index > b ? (R = M, M = null) : R = M.sibling;
      var z = y(d, M, E.value, v);
      if (z === null) {
        M === null && (M = R);
        break;
      }
      e && M && z.alternate === null && t(d, M), f = s(z, f, b), C === null ? w = z : C.sibling = z, C = z, M = R;
    }
    if (E.done) return n(
      d,
      M
    ), ue && Yt(d, b), w;
    if (M === null) {
      for (; !E.done; b++, E = p.next()) E = _(d, E.value, v), E !== null && (f = s(E, f, b), C === null ? w = E : C.sibling = E, C = E);
      return ue && Yt(d, b), w;
    }
    for (M = r(d, M); !E.done; b++, E = p.next()) E = g(M, d, b, E.value, v), E !== null && (e && E.alternate !== null && M.delete(E.key === null ? b : E.key), f = s(E, f, b), C === null ? w = E : C.sibling = E, C = E);
    return e && M.forEach(function(V) {
      return t(d, V);
    }), ue && Yt(d, b), w;
  }
  function j(d, f, p, v) {
    if (typeof p == "object" && p !== null && p.type === mn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zr:
          e: {
            for (var w = p.key, C = f; C !== null; ) {
              if (C.key === w) {
                if (w = p.type, w === mn) {
                  if (C.tag === 7) {
                    n(d, C.sibling), f = l(C, p.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (C.elementType === w || typeof w == "object" && w !== null && w.$$typeof === It && uo(w) === C.type) {
                  n(d, C.sibling), f = l(C, p.props), f.ref = Gn(d, C, p), f.return = d, d = f;
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            p.type === mn ? (f = tn(p.props.children, d.mode, v, p.key), f.return = d, d = f) : (v = cl(p.type, p.key, p.props, null, d.mode, v), v.ref = Gn(d, f, p), v.return = d, d = v);
          }
          return a(d);
        case pn:
          e: {
            for (C = p.key; f !== null; ) {
              if (f.key === C) if (f.tag === 4 && f.stateNode.containerInfo === p.containerInfo && f.stateNode.implementation === p.implementation) {
                n(d, f.sibling), f = l(f, p.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = Is(p, d.mode, v), f.return = d, d = f;
          }
          return a(d);
        case It:
          return C = p._init, j(d, f, C(p._payload), v);
      }
      if (Jn(p)) return x(d, f, p, v);
      if (Vn(p)) return S(d, f, p, v);
      Kr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, p), f.return = d, d = f) : (n(d, f), f = Ns(p, d.mode, v), f.return = d, d = f), a(d)) : n(d, f);
  }
  return j;
}
var Dn = Ju(!0), Zu = Ju(!1), Cl = Bt(null), Nl = null, Sn = null, Yi = null;
function Xi() {
  Yi = Sn = Nl = null;
}
function qi(e) {
  var t = Cl.current;
  oe(Cl), e._currentValue = t;
}
function si(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Mn(e, t) {
  Nl = e, Yi = Sn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0), e.firstContext = null);
}
function Ze(e) {
  var t = e._currentValue;
  if (Yi !== e) if (e = { context: e, memoizedValue: t, next: null }, Sn === null) {
    if (Nl === null) throw Error(P(308));
    Sn = e, Nl.dependencies = { lanes: 0, firstContext: e };
  } else Sn = Sn.next = e;
  return t;
}
var Jt = null;
function Ji(e) {
  Jt === null ? Jt = [e] : Jt.push(e);
}
function ec(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ji(t)) : (n.next = l.next, l.next = n), t.interleaved = n, jt(e, r);
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Mt = !1;
function Zi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function _t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, J & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, jt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ji(r)) : (t.next = l.next, l.next = t), r.interleaved = t, jt(e, n);
}
function ll(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Oi(e, n);
  }
}
function co(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? l = s = a : s = s.next = a, n = n.next;
      } while (n !== null);
      s === null ? l = s = t : s = s.next = t;
    } else l = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Il(e, t, n, r) {
  var l = e.updateQueue;
  Mt = !1;
  var s = l.firstBaseUpdate, a = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var o = u, c = o.next;
    o.next = null, a === null ? s = c : a.next = c, a = o;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== a && (u === null ? m.firstBaseUpdate = c : u.next = c, m.lastBaseUpdate = o));
  }
  if (s !== null) {
    var _ = l.baseState;
    a = 0, m = c = o = null, u = s;
    do {
      var y = u.lane, g = u.eventTime;
      if ((r & y) === y) {
        m !== null && (m = m.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var x = e, S = u;
          switch (y = t, g = n, S.tag) {
            case 1:
              if (x = S.payload, typeof x == "function") {
                _ = x.call(g, _, y);
                break e;
              }
              _ = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = S.payload, y = typeof x == "function" ? x.call(g, _, y) : x, y == null) break e;
              _ = fe({}, _, y);
              break e;
            case 2:
              Mt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [u] : y.push(u));
      } else g = { eventTime: g, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (c = m = g, o = _) : m = m.next = g, a |= y;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        y = u, u = y.next, y.next = null, l.lastBaseUpdate = y, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (o = _), l.baseState = o, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    sn |= a, e.lanes = a, e.memoizedState = _;
  }
}
function fo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(P(191, l));
      l.call(r);
    }
  }
}
var br = {}, gt = Bt(br), _r = Bt(br), Sr = Bt(br);
function Zt(e) {
  if (e === br) throw Error(P(174));
  return e;
}
function ea(e, t) {
  switch (ie(Sr, t), ie(_r, e), ie(gt, br), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fs(t, e);
  }
  oe(gt), ie(gt, t);
}
function Rn() {
  oe(gt), oe(_r), oe(Sr);
}
function nc(e) {
  Zt(Sr.current);
  var t = Zt(gt.current), n = Fs(t, e.type);
  t !== n && (ie(_r, e), ie(gt, n));
}
function ta(e) {
  _r.current === e && (oe(gt), oe(_r));
}
var ce = Bt(0);
function Ml(e) {
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
var _s = [];
function na() {
  for (var e = 0; e < _s.length; e++) _s[e]._workInProgressVersionPrimary = null;
  _s.length = 0;
}
var sl = Ct.ReactCurrentDispatcher, Ss = Ct.ReactCurrentBatchConfig, ln = 0, de = null, ve = null, _e = null, Tl = !1, ir = !1, kr = 0, pp = 0;
function Ne() {
  throw Error(P(321));
}
function ra(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
  return !0;
}
function la(e, t, n, r, l, s) {
  if (ln = s, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, sl.current = e === null || e.memoizedState === null ? yp : vp, e = n(r, l), ir) {
    s = 0;
    do {
      if (ir = !1, kr = 0, 25 <= s) throw Error(P(301));
      s += 1, _e = ve = null, t.updateQueue = null, sl.current = wp, e = n(r, l);
    } while (ir);
  }
  if (sl.current = Ll, t = ve !== null && ve.next !== null, ln = 0, _e = ve = de = null, Tl = !1, t) throw Error(P(300));
  return e;
}
function sa() {
  var e = kr !== 0;
  return kr = 0, e;
}
function pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return _e === null ? de.memoizedState = _e = e : _e = _e.next = e, _e;
}
function et() {
  if (ve === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = _e === null ? de.memoizedState : _e.next;
  if (t !== null) _e = t, ve = e;
  else {
    if (e === null) throw Error(P(310));
    ve = e, e = { memoizedState: ve.memoizedState, baseState: ve.baseState, baseQueue: ve.baseQueue, queue: ve.queue, next: null }, _e === null ? de.memoizedState = _e = e : _e = _e.next = e;
  }
  return _e;
}
function jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ks(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = ve, l = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var a = l.next;
      l.next = s.next, s.next = a;
    }
    r.baseQueue = l = s, n.pending = null;
  }
  if (l !== null) {
    s = l.next, r = r.baseState;
    var u = a = null, o = null, c = s;
    do {
      var m = c.lane;
      if ((ln & m) === m) o !== null && (o = o.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var _ = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        o === null ? (u = o = _, a = r) : o = o.next = _, de.lanes |= m, sn |= m;
      }
      c = c.next;
    } while (c !== null && c !== s);
    o === null ? a = r : o.next = u, dt(r, t.memoizedState) || (Oe = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = o, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      s = l.lane, de.lanes |= s, sn |= s, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function js(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      s = e(s, a.action), a = a.next;
    while (a !== l);
    dt(s, t.memoizedState) || (Oe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function rc() {
}
function lc(e, t) {
  var n = de, r = et(), l = t(), s = !dt(r.memoizedState, l);
  if (s && (r.memoizedState = l, Oe = !0), r = r.queue, ia(ac.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || _e !== null && _e.memoizedState.tag & 1) {
    if (n.flags |= 2048, Er(9, ic.bind(null, n, r, l, t), void 0, null), Se === null) throw Error(P(349));
    ln & 30 || sc(n, t, l);
  }
  return l;
}
function sc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ic(e, t, n, r) {
  t.value = n, t.getSnapshot = r, oc(t) && uc(e);
}
function ac(e, t, n) {
  return n(function() {
    oc(t) && uc(e);
  });
}
function oc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function uc(e) {
  var t = jt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function po(e) {
  var t = pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: jr, lastRenderedState: e }, t.queue = e, e = e.dispatch = gp.bind(null, de, e), [t.memoizedState, e];
}
function Er(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function cc() {
  return et().memoizedState;
}
function il(e, t, n, r) {
  var l = pt();
  de.flags |= e, l.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ql(e, t, n, r) {
  var l = et();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ve !== null) {
    var a = ve.memoizedState;
    if (s = a.destroy, r !== null && ra(r, a.deps)) {
      l.memoizedState = Er(t, n, s, r);
      return;
    }
  }
  de.flags |= e, l.memoizedState = Er(1 | t, n, s, r);
}
function mo(e, t) {
  return il(8390656, 8, e, t);
}
function ia(e, t) {
  return Ql(2048, 8, e, t);
}
function dc(e, t) {
  return Ql(4, 2, e, t);
}
function fc(e, t) {
  return Ql(4, 4, e, t);
}
function pc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function mc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ql(4, 4, pc.bind(null, t, e), n);
}
function aa() {
}
function hc(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ra(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function gc(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ra(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function yc(e, t, n) {
  return ln & 21 ? (dt(n, t) || (n = Su(), de.lanes |= n, sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = n);
}
function mp(e, t) {
  var n = le;
  le = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ss.transition;
  Ss.transition = {};
  try {
    e(!1), t();
  } finally {
    le = n, Ss.transition = r;
  }
}
function vc() {
  return et().memoizedState;
}
function hp(e, t, n) {
  var r = $t(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, wc(e)) xc(t, n);
  else if (n = ec(e, t, n, r), n !== null) {
    var l = De();
    ct(n, e, r, l), _c(n, t, r);
  }
}
function gp(e, t, n) {
  var r = $t(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wc(e)) xc(t, l);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState, u = s(a, n);
      if (l.hasEagerState = !0, l.eagerState = u, dt(u, a)) {
        var o = t.interleaved;
        o === null ? (l.next = l, Ji(t)) : (l.next = o.next, o.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ec(e, t, l, r), n !== null && (l = De(), ct(n, e, r, l), _c(n, t, r));
  }
}
function wc(e) {
  var t = e.alternate;
  return e === de || t !== null && t === de;
}
function xc(e, t) {
  ir = Tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function _c(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Oi(e, n);
  }
}
var Ll = { readContext: Ze, useCallback: Ne, useContext: Ne, useEffect: Ne, useImperativeHandle: Ne, useInsertionEffect: Ne, useLayoutEffect: Ne, useMemo: Ne, useReducer: Ne, useRef: Ne, useState: Ne, useDebugValue: Ne, useDeferredValue: Ne, useTransition: Ne, useMutableSource: Ne, useSyncExternalStore: Ne, useId: Ne, unstable_isNewReconciler: !1 }, yp = { readContext: Ze, useCallback: function(e, t) {
  return pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ze, useEffect: mo, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, il(
    4194308,
    4,
    pc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return il(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return il(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = pt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = pt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = hp.bind(null, de, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = pt();
  return e = { current: e }, t.memoizedState = e;
}, useState: po, useDebugValue: aa, useDeferredValue: function(e) {
  return pt().memoizedState = e;
}, useTransition: function() {
  var e = po(!1), t = e[0];
  return e = mp.bind(null, e[1]), pt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = de, l = pt();
  if (ue) {
    if (n === void 0) throw Error(P(407));
    n = n();
  } else {
    if (n = t(), Se === null) throw Error(P(349));
    ln & 30 || sc(r, t, n);
  }
  l.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return l.queue = s, mo(ac.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, Er(9, ic.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = pt(), t = Se.identifierPrefix;
  if (ue) {
    var n = xt, r = wt;
    n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = pp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, vp = {
  readContext: Ze,
  useCallback: hc,
  useContext: Ze,
  useEffect: ia,
  useImperativeHandle: mc,
  useInsertionEffect: dc,
  useLayoutEffect: fc,
  useMemo: gc,
  useReducer: ks,
  useRef: cc,
  useState: function() {
    return ks(jr);
  },
  useDebugValue: aa,
  useDeferredValue: function(e) {
    var t = et();
    return yc(t, ve.memoizedState, e);
  },
  useTransition: function() {
    var e = ks(jr)[0], t = et().memoizedState;
    return [e, t];
  },
  useMutableSource: rc,
  useSyncExternalStore: lc,
  useId: vc,
  unstable_isNewReconciler: !1
}, wp = { readContext: Ze, useCallback: hc, useContext: Ze, useEffect: ia, useImperativeHandle: mc, useInsertionEffect: dc, useLayoutEffect: fc, useMemo: gc, useReducer: js, useRef: cc, useState: function() {
  return js(jr);
}, useDebugValue: aa, useDeferredValue: function(e) {
  var t = et();
  return ve === null ? t.memoizedState = e : yc(t, ve.memoizedState, e);
}, useTransition: function() {
  var e = js(jr)[0], t = et().memoizedState;
  return [e, t];
}, useMutableSource: rc, useSyncExternalStore: lc, useId: vc, unstable_isNewReconciler: !1 };
function st(e, t) {
  if (e && e.defaultProps) {
    t = fe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ii(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? un(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = De(), l = $t(e), s = _t(r, l);
  s.payload = t, n != null && (s.callback = n), t = Ot(e, s, l), t !== null && (ct(t, e, l, r), ll(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = De(), l = $t(e), s = _t(r, l);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Ot(e, s, l), t !== null && (ct(t, e, l, r), ll(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = De(), r = $t(e), l = _t(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ot(e, l, r), t !== null && (ct(t, e, r, n), ll(t, e, r));
} };
function ho(e, t, n, r, l, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !yr(n, r) || !yr(l, s) : !0;
}
function Sc(e, t, n) {
  var r = !1, l = Vt, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Ze(s) : (l = $e(t) ? nn : Te.current, r = t.contextTypes, s = (r = r != null) ? bn(e, l) : Vt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function go(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function ai(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Zi(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? l.context = Ze(s) : (s = $e(t) ? nn : Te.current, l.context = bn(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ii(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Bl.enqueueReplaceState(l, l.state, null), Il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Hd(r), r = r.return;
    while (r);
    var l = n;
  } catch (s) {
    l = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Es(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var xp = typeof WeakMap == "function" ? WeakMap : Map;
function kc(e, t, n) {
  n = _t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Pl || (Pl = !0, vi = r), oi(e, t);
  }, n;
}
function jc(e, t, n) {
  n = _t(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      oi(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    oi(e, t), typeof r != "function" && (Ft === null ? Ft = /* @__PURE__ */ new Set([this]) : Ft.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function yo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Dp.bind(null, e, t, n), t.then(e, e));
}
function vo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wo(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var _p = Ct.ReactCurrentOwner, Oe = !1;
function be(e, t, n, r) {
  t.child = e === null ? Zu(t, null, n, r) : Dn(t, e.child, n, r);
}
function xo(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return Mn(t, l), r = la(e, t, n, r, s, l), n = sa(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (ue && n && Hi(t), t.flags |= 1, be(e, t, r, l), t.child);
}
function _o(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !ha(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Ec(e, t, s, r, l)) : (e = cl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & l)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : yr, n(a, r) && e.ref === t.ref) return Et(e, t, l);
  }
  return t.flags |= 1, e = Ut(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ec(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (yr(s, r) && e.ref === t.ref) if (Oe = !1, t.pendingProps = r = s, (e.lanes & l) !== 0) e.flags & 131072 && (Oe = !0);
    else return t.lanes = e.lanes, Et(e, t, l);
  }
  return ui(e, t, n, r, l);
}
function Cc(e, t, n) {
  var r = t.pendingProps, l = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ie(jn, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ie(jn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ie(jn, We), We |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ie(jn, We), We |= r;
  return be(e, t, l, n), t.child;
}
function Nc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ui(e, t, n, r, l) {
  var s = $e(n) ? nn : Te.current;
  return s = bn(t, s), Mn(t, l), n = la(e, t, n, r, s, l), r = sa(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (ue && r && Hi(t), t.flags |= 1, be(e, t, n, l), t.child);
}
function So(e, t, n, r, l) {
  if ($e(n)) {
    var s = !0;
    kl(t);
  } else s = !1;
  if (Mn(t, l), t.stateNode === null) al(e, t), Sc(t, n, r), ai(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, u = t.memoizedProps;
    a.props = u;
    var o = a.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ze(c) : (c = $e(n) ? nn : Te.current, c = bn(t, c));
    var m = n.getDerivedStateFromProps, _ = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    _ || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== r || o !== c) && go(t, a, r, c), Mt = !1;
    var y = t.memoizedState;
    a.state = y, Il(t, r, a, l), o = t.memoizedState, u !== r || y !== o || Fe.current || Mt ? (typeof m == "function" && (ii(t, n, m, r), o = t.memoizedState), (u = Mt || ho(t, n, u, r, y, o, c)) ? (_ || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = o), a.props = r, a.state = o, a.context = c, r = u) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, tc(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : st(t.type, u), a.props = c, _ = t.pendingProps, y = a.context, o = n.contextType, typeof o == "object" && o !== null ? o = Ze(o) : (o = $e(n) ? nn : Te.current, o = bn(t, o));
    var g = n.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== _ || y !== o) && go(t, a, r, o), Mt = !1, y = t.memoizedState, a.state = y, Il(t, r, a, l);
    var x = t.memoizedState;
    u !== _ || y !== x || Fe.current || Mt ? (typeof g == "function" && (ii(t, n, g, r), x = t.memoizedState), (c = Mt || ho(t, n, c, r, y, x, o) || !1) ? (m || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, x, o), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, x, o)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), a.props = r, a.state = x, a.context = o, r = c) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ci(e, t, n, r, s, l);
}
function ci(e, t, n, r, l, s) {
  Nc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && io(t, n, !1), Et(e, t, s);
  r = t.stateNode, _p.current = t;
  var u = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Dn(t, e.child, null, s), t.child = Dn(t, null, u, s)) : be(e, t, u, s), t.memoizedState = r.state, l && io(t, n, !0), t.child;
}
function Ic(e) {
  var t = e.stateNode;
  t.pendingContext ? so(e, t.pendingContext, t.pendingContext !== t.context) : t.context && so(e, t.context, !1), ea(e, t.containerInfo);
}
function ko(e, t, n, r, l) {
  return Pn(), Gi(l), t.flags |= 256, be(e, t, n, r), t.child;
}
var di = { dehydrated: null, treeContext: null, retryLane: 0 };
function fi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mc(e, t, n) {
  var r = t.pendingProps, l = ce.current, s = !1, a = (t.flags & 128) !== 0, u;
  if ((u = a) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ie(ce, l & 1), e === null)
    return li(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Gl(a, r, 0, null), e = tn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = fi(n), t.memoizedState = di, e) : oa(t, a));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Sp(e, t, a, r, u, l, n);
  if (s) {
    s = r.fallback, a = t.mode, l = e.child, u = l.sibling;
    var o = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = o, t.deletions = null) : (r = Ut(l, o), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? s = Ut(u, s) : (s = tn(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? fi(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = di, r;
  }
  return s = e.child, e = s.sibling, r = Ut(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function oa(e, t) {
  return t = Gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Gr(e, t, n, r) {
  return r !== null && Gi(r), Dn(t, e.child, null, n), e = oa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Sp(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Es(Error(P(422))), Gr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, l = t.mode, r = Gl({ mode: "visible", children: r.children }, l, 0, null), s = tn(s, l, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Dn(t, e.child, null, a), t.child.memoizedState = fi(a), t.memoizedState = di, s);
  if (!(t.mode & 1)) return Gr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, s = Error(P(419)), r = Es(s, r, void 0), Gr(e, t, a, r);
  }
  if (u = (a & e.childLanes) !== 0, Oe || u) {
    if (r = Se, r !== null) {
      switch (a & -a) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== s.retryLane && (s.retryLane = l, jt(e, l), ct(r, e, l, -1));
    }
    return ma(), r = Es(Error(P(421))), Gr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Rp.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, Ve = At(l.nextSibling), Qe = t, ue = !0, at = null, e !== null && (Ye[Xe++] = wt, Ye[Xe++] = xt, Ye[Xe++] = rn, wt = e.id, xt = e.overflow, rn = t), t = oa(t, r.children), t.flags |= 4096, t);
}
function jo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), si(e.return, t, n);
}
function Cs(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = l);
}
function Tc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, s = r.tail;
  if (be(e, t, r.children, n), r = ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && jo(e, n, t);
      else if (e.tag === 19) jo(e, n, t);
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
  if (ie(ce, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Ml(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Cs(t, !1, l, n, s);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Ml(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Cs(t, !0, n, null, s);
      break;
    case "together":
      Cs(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function al(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Et(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function kp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ic(t), Pn();
      break;
    case 5:
      nc(t);
      break;
    case 1:
      $e(t.type) && kl(t);
      break;
    case 4:
      ea(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ie(Cl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ie(ce, ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Mc(e, t, n) : (ie(ce, ce.current & 1), e = Et(e, t, n), e !== null ? e.sibling : null);
      ie(ce, ce.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Tc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ie(ce, ce.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Cc(e, t, n);
  }
  return Et(e, t, n);
}
var Lc, pi, bc, Pc;
Lc = function(e, t) {
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
pi = function() {
};
bc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Zt(gt.current);
    var s = null;
    switch (n) {
      case "input":
        l = Rs(e, l), r = Rs(e, r), s = [];
        break;
      case "select":
        l = fe({}, l, { value: void 0 }), r = fe({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        l = Os(e, l), r = Os(e, r), s = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _l);
    }
    $s(n, r);
    var a;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (a in u) u.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (cr.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var o = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && o !== u && (o != null || u != null)) if (c === "style") if (u) {
        for (a in u) !u.hasOwnProperty(a) || o && o.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in o) o.hasOwnProperty(a) && u[a] !== o[a] && (n || (n = {}), n[a] = o[a]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = o;
      else c === "dangerouslySetInnerHTML" ? (o = o ? o.__html : void 0, u = u ? u.__html : void 0, o != null && u !== o && (s = s || []).push(c, o)) : c === "children" ? typeof o != "string" && typeof o != "number" || (s = s || []).push(c, "" + o) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (cr.hasOwnProperty(c) ? (o != null && c === "onScroll" && ae("scroll", e), s || u === o || (s = [])) : (s = s || []).push(c, o));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Pc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yn(e, t) {
  if (!ue) switch (e.tailMode) {
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
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function jp(e, t, n) {
  var r = t.pendingProps;
  switch (Ki(t), t.tag) {
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
      return Ie(t), null;
    case 1:
      return $e(t.type) && Sl(), Ie(t), null;
    case 3:
      return r = t.stateNode, Rn(), oe(Fe), oe(Te), na(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, at !== null && (_i(at), at = null))), pi(e, t), Ie(t), null;
    case 5:
      ta(t);
      var l = Zt(Sr.current);
      if (n = t.type, e !== null && t.stateNode != null) bc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Ie(t), null;
        }
        if (e = Zt(gt.current), Hr(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[mt] = t, r[xr] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < er.length; l++) ae(er[l], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae(
                "error",
                r
              ), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              ba(r, s), ae("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ae("invalid", r);
              break;
            case "textarea":
              Da(r, s), ae("invalid", r);
          }
          $s(n, s), l = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var u = s[a];
            a === "children" ? typeof u == "string" ? r.textContent !== u && (s.suppressHydrationWarning !== !0 && Br(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (s.suppressHydrationWarning !== !0 && Br(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : cr.hasOwnProperty(a) && u != null && a === "onScroll" && ae("scroll", r);
          }
          switch (n) {
            case "input":
              Ar(r), Pa(r, s, !0);
              break;
            case "textarea":
              Ar(r), Ra(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = _l);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = au(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[mt] = t, e[xr] = r, Lc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Us(n, r), n) {
              case "dialog":
                ae("cancel", e), ae("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) ae(er[l], e);
                l = r;
                break;
              case "source":
                ae("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ae(
                  "error",
                  e
                ), ae("load", e), l = r;
                break;
              case "details":
                ae("toggle", e), l = r;
                break;
              case "input":
                ba(e, r), l = Rs(e, r), ae("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = fe({}, r, { value: void 0 }), ae("invalid", e);
                break;
              case "textarea":
                Da(e, r), l = Os(e, r), ae("invalid", e);
                break;
              default:
                l = r;
            }
            $s(n, l), u = l;
            for (s in u) if (u.hasOwnProperty(s)) {
              var o = u[s];
              s === "style" ? cu(e, o) : s === "dangerouslySetInnerHTML" ? (o = o ? o.__html : void 0, o != null && ou(e, o)) : s === "children" ? typeof o == "string" ? (n !== "textarea" || o !== "") && dr(e, o) : typeof o == "number" && dr(e, "" + o) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (cr.hasOwnProperty(s) ? o != null && s === "onScroll" && ae("scroll", e) : o != null && bi(e, s, o, a));
            }
            switch (n) {
              case "input":
                Ar(e), Pa(e, r, !1);
                break;
              case "textarea":
                Ar(e), Ra(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? En(e, !!r.multiple, s, !1) : r.defaultValue != null && En(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = _l);
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
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) Pc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (n = Zt(Sr.current), Zt(gt.current), Hr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[mt] = t, (s = r.nodeValue !== n) && (e = Qe, e !== null)) switch (e.tag) {
            case 3:
              Br(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mt] = t, t.stateNode = r;
      }
      return Ie(t), null;
    case 13:
      if (oe(ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ue && Ve !== null && t.mode & 1 && !(t.flags & 128)) qu(), Pn(), t.flags |= 98560, s = !1;
        else if (s = Hr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(P(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(P(317));
            s[mt] = t;
          } else Pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ie(t), s = !1;
        } else at !== null && (_i(at), at = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ce.current & 1 ? we === 0 && (we = 3) : ma())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
    case 4:
      return Rn(), pi(e, t), e === null && vr(t.stateNode.containerInfo), Ie(t), null;
    case 10:
      return qi(t.type._context), Ie(t), null;
    case 17:
      return $e(t.type) && Sl(), Ie(t), null;
    case 19:
      if (oe(ce), s = t.memoizedState, s === null) return Ie(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) Yn(s, !1);
      else {
        if (we !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = Ml(e), a !== null) {
            for (t.flags |= 128, Yn(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ie(ce, ce.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && he() > An && (t.flags |= 128, r = !0, Yn(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ml(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yn(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !ue) return Ie(t), null;
        } else 2 * he() - s.renderingStartTime > An && n !== 1073741824 && (t.flags |= 128, r = !0, Yn(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = he(), t.sibling = null, n = ce.current, ie(ce, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
    case 22:
    case 23:
      return pa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Ep(e, t) {
  switch (Ki(t), t.tag) {
    case 1:
      return $e(t.type) && Sl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Rn(), oe(Fe), oe(Te), na(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ta(t), null;
    case 13:
      if (oe(ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(P(340));
        Pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return oe(ce), null;
    case 4:
      return Rn(), null;
    case 10:
      return qi(t.type._context), null;
    case 22:
    case 23:
      return pa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yr = !1, Me = !1, Cp = typeof WeakSet == "function" ? WeakSet : Set, A = null;
function kn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    pe(e, t, r);
  }
  else n.current = null;
}
function mi(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var Eo = !1;
function Np(e, t) {
  if (qs = vl, e = Ou(), Bi(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var a = 0, u = -1, o = -1, c = 0, m = 0, _ = e, y = null;
        t: for (; ; ) {
          for (var g; _ !== n || l !== 0 && _.nodeType !== 3 || (u = a + l), _ !== s || r !== 0 && _.nodeType !== 3 || (o = a + r), _.nodeType === 3 && (a += _.nodeValue.length), (g = _.firstChild) !== null; )
            y = _, _ = g;
          for (; ; ) {
            if (_ === e) break t;
            if (y === n && ++c === l && (u = a), y === s && ++m === r && (o = a), (g = _.nextSibling) !== null) break;
            _ = y, y = _.parentNode;
          }
          _ = g;
        }
        n = u === -1 || o === -1 ? null : { start: u, end: o };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Js = { focusedElem: e, selectionRange: n }, vl = !1, A = t; A !== null; ) if (t = A, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, A = e;
  else for (; A !== null; ) {
    t = A;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var S = x.memoizedProps, j = x.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? S : st(t.type, S), j);
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
          throw Error(P(163));
      }
    } catch (v) {
      pe(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, A = e;
      break;
    }
    A = t.return;
  }
  return x = Eo, Eo = !1, x;
}
function ar(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        l.destroy = void 0, s !== void 0 && mi(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Hl(e, t) {
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
function hi(e) {
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
function Dc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[xr], delete t[ti], delete t[up], delete t[cp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Rc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Co(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _l));
  else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
}
function yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (yi(e, t, n), e = e.sibling; e !== null; ) yi(e, t, n), e = e.sibling;
}
var ke = null, it = !1;
function Nt(e, t, n) {
  for (n = n.child; n !== null; ) zc(e, t, n), n = n.sibling;
}
function zc(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function") try {
    ht.onCommitFiberUnmount(Ol, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Me || kn(n, t);
    case 6:
      var r = ke, l = it;
      ke = null, Nt(e, t, n), ke = r, it = l, ke !== null && (it ? (e = ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null && (it ? (e = ke, n = n.stateNode, e.nodeType === 8 ? ws(e.parentNode, n) : e.nodeType === 1 && ws(e, n), hr(e)) : ws(ke, n.stateNode));
      break;
    case 4:
      r = ke, l = it, ke = n.stateNode.containerInfo, it = !0, Nt(e, t, n), ke = r, it = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var s = l, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && mi(n, t, a), l = l.next;
        } while (l !== r);
      }
      Nt(e, t, n);
      break;
    case 1:
      if (!Me && (kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        pe(n, t, u);
      }
      Nt(e, t, n);
      break;
    case 21:
      Nt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, Nt(e, t, n), Me = r) : Nt(e, t, n);
      break;
    default:
      Nt(e, t, n);
  }
}
function No(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cp()), t.forEach(function(r) {
      var l = zp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function rt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var s = e, a = t, u = a;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ke = u.stateNode, it = !1;
            break e;
          case 3:
            ke = u.stateNode.containerInfo, it = !0;
            break e;
          case 4:
            ke = u.stateNode.containerInfo, it = !0;
            break e;
        }
        u = u.return;
      }
      if (ke === null) throw Error(P(160));
      zc(s, a, l), ke = null, it = !1;
      var o = l.alternate;
      o !== null && (o.return = null), l.return = null;
    } catch (c) {
      pe(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ac(t, e), t = t.sibling;
}
function Ac(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (rt(t, e), ft(e), r & 4) {
        try {
          ar(3, e, e.return), Hl(3, e);
        } catch (S) {
          pe(e, e.return, S);
        }
        try {
          ar(5, e, e.return);
        } catch (S) {
          pe(e, e.return, S);
        }
      }
      break;
    case 1:
      rt(t, e), ft(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if (rt(t, e), ft(e), r & 512 && n !== null && kn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          dr(l, "");
        } catch (S) {
          pe(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, u = e.type, o = e.updateQueue;
        if (e.updateQueue = null, o !== null) try {
          u === "input" && s.type === "radio" && s.name != null && su(l, s), Us(u, a);
          var c = Us(u, s);
          for (a = 0; a < o.length; a += 2) {
            var m = o[a], _ = o[a + 1];
            m === "style" ? cu(l, _) : m === "dangerouslySetInnerHTML" ? ou(l, _) : m === "children" ? dr(l, _) : bi(l, m, _, c);
          }
          switch (u) {
            case "input":
              zs(l, s);
              break;
            case "textarea":
              iu(l, s);
              break;
            case "select":
              var y = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? En(l, !!s.multiple, g, !1) : y !== !!s.multiple && (s.defaultValue != null ? En(
                l,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : En(l, !!s.multiple, s.multiple ? [] : "", !1));
          }
          l[xr] = s;
        } catch (S) {
          pe(e, e.return, S);
        }
      }
      break;
    case 6:
      if (rt(t, e), ft(e), r & 4) {
        if (e.stateNode === null) throw Error(P(162));
        l = e.stateNode, s = e.memoizedProps;
        try {
          l.nodeValue = s;
        } catch (S) {
          pe(e, e.return, S);
        }
      }
      break;
    case 3:
      if (rt(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        hr(t.containerInfo);
      } catch (S) {
        pe(e, e.return, S);
      }
      break;
    case 4:
      rt(t, e), ft(e);
      break;
    case 13:
      rt(t, e), ft(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (da = he())), r & 4 && No(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (c = Me) || m, rt(t, e), Me = c) : rt(t, e), ft(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (A = e, m = e.child; m !== null; ) {
          for (_ = A = m; A !== null; ) {
            switch (y = A, g = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ar(4, y, y.return);
                break;
              case 1:
                kn(y, y.return);
                var x = y.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (S) {
                    pe(r, n, S);
                  }
                }
                break;
              case 5:
                kn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  Mo(_);
                  continue;
                }
            }
            g !== null ? (g.return = y, A = g) : Mo(_);
          }
          m = m.sibling;
        }
        e: for (m = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (m === null) {
              m = _;
              try {
                l = _.stateNode, c ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (u = _.stateNode, o = _.memoizedProps.style, a = o != null && o.hasOwnProperty("display") ? o.display : null, u.style.display = uu("display", a));
              } catch (S) {
                pe(e, e.return, S);
              }
            }
          } else if (_.tag === 6) {
            if (m === null) try {
              _.stateNode.nodeValue = c ? "" : _.memoizedProps;
            } catch (S) {
              pe(e, e.return, S);
            }
          } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
            _.child.return = _, _ = _.child;
            continue;
          }
          if (_ === e) break e;
          for (; _.sibling === null; ) {
            if (_.return === null || _.return === e) break e;
            m === _ && (m = null), _ = _.return;
          }
          m === _ && (m = null), _.sibling.return = _.return, _ = _.sibling;
        }
      }
      break;
    case 19:
      rt(t, e), ft(e), r & 4 && No(e);
      break;
    case 21:
      break;
    default:
      rt(
        t,
        e
      ), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (dr(l, ""), r.flags &= -33);
          var s = Co(e);
          yi(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, u = Co(e);
          gi(e, u, a);
          break;
        default:
          throw Error(P(161));
      }
    } catch (o) {
      pe(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ip(e, t, n) {
  A = e, Oc(e);
}
function Oc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var l = A, s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Yr;
      if (!a) {
        var u = l.alternate, o = u !== null && u.memoizedState !== null || Me;
        u = Yr;
        var c = Me;
        if (Yr = a, (Me = o) && !c) for (A = l; A !== null; ) a = A, o = a.child, a.tag === 22 && a.memoizedState !== null ? To(l) : o !== null ? (o.return = a, A = o) : To(l);
        for (; s !== null; ) A = s, Oc(s), s = s.sibling;
        A = l, Yr = u, Me = c;
      }
      Io(e);
    } else l.subtreeFlags & 8772 && s !== null ? (s.return = l, A = s) : Io(e);
  }
}
function Io(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Me || Hl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Me) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && fo(t, s, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              fo(t, a, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var o = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o.autoFocus && n.focus();
                  break;
                case "img":
                  o.src && (n.src = o.src);
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
                var m = c.memoizedState;
                if (m !== null) {
                  var _ = m.dehydrated;
                  _ !== null && hr(_);
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
            throw Error(P(163));
        }
        Me || t.flags & 512 && hi(t);
      } catch (y) {
        pe(t, t.return, y);
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
function Mo(e) {
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
function To(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (o) {
            pe(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              pe(t, l, o);
            }
          }
          var s = t.return;
          try {
            hi(t);
          } catch (o) {
            pe(t, s, o);
          }
          break;
        case 5:
          var a = t.return;
          try {
            hi(t);
          } catch (o) {
            pe(t, a, o);
          }
      }
    } catch (o) {
      pe(t, t.return, o);
    }
    if (t === e) {
      A = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, A = u;
      break;
    }
    A = t.return;
  }
}
var Mp = Math.ceil, bl = Ct.ReactCurrentDispatcher, ua = Ct.ReactCurrentOwner, Je = Ct.ReactCurrentBatchConfig, J = 0, Se = null, ge = null, je = 0, We = 0, jn = Bt(0), we = 0, Cr = null, sn = 0, Kl = 0, ca = 0, or = null, Ae = null, da = 0, An = 1 / 0, yt = null, Pl = !1, vi = null, Ft = null, Xr = !1, Pt = null, Dl = 0, ur = 0, wi = null, ol = -1, ul = 0;
function De() {
  return J & 6 ? he() : ol !== -1 ? ol : ol = he();
}
function $t(e) {
  return e.mode & 1 ? J & 2 && je !== 0 ? je & -je : fp.transition !== null ? (ul === 0 && (ul = Su()), ul) : (e = le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mu(e.type)), e) : 1;
}
function ct(e, t, n, r) {
  if (50 < ur) throw ur = 0, wi = null, Error(P(185));
  Mr(e, n, r), (!(J & 2) || e !== Se) && (e === Se && (!(J & 2) && (Kl |= n), we === 4 && Lt(e, je)), Ue(e, r), n === 1 && J === 0 && !(t.mode & 1) && (An = he() + 500, Vl && Ht()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  ff(e, t);
  var r = yl(e, e === Se ? je : 0);
  if (r === 0) n !== null && Oa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Oa(n), t === 1) e.tag === 0 ? dp(Lo.bind(null, e)) : Gu(Lo.bind(null, e)), ap(function() {
      !(J & 6) && Ht();
    }), n = null;
    else {
      switch (ku(r)) {
        case 1:
          n = Ai;
          break;
        case 4:
          n = xu;
          break;
        case 16:
          n = gl;
          break;
        case 536870912:
          n = _u;
          break;
        default:
          n = gl;
      }
      n = Hc(n, Fc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Fc(e, t) {
  if (ol = -1, ul = 0, J & 6) throw Error(P(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = yl(e, e === Se ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Rl(e, r);
  else {
    t = r;
    var l = J;
    J |= 2;
    var s = Uc();
    (Se !== e || je !== t) && (yt = null, An = he() + 500, en(e, t));
    do
      try {
        bp();
        break;
      } catch (u) {
        $c(e, u);
      }
    while (!0);
    Xi(), bl.current = s, J = l, ge !== null ? t = 0 : (Se = null, je = 0, t = we);
  }
  if (t !== 0) {
    if (t === 2 && (l = Hs(e), l !== 0 && (r = l, t = xi(e, l))), t === 1) throw n = Cr, en(e, 0), Lt(e, r), Ue(e, he()), n;
    if (t === 6) Lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Tp(l) && (t = Rl(e, r), t === 2 && (s = Hs(e), s !== 0 && (r = s, t = xi(e, s))), t === 1)) throw n = Cr, en(e, 0), Lt(e, r), Ue(e, he()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Xt(e, Ae, yt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = da + 500 - he(), 10 < t)) {
            if (yl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              De(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ei(Xt.bind(null, e, Ae, yt), t);
            break;
          }
          Xt(e, Ae, yt);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - ut(r);
            s = 1 << a, a = t[a], a > l && (l = a), r &= ~s;
          }
          if (r = l, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ei(Xt.bind(null, e, Ae, yt), r);
            break;
          }
          Xt(e, Ae, yt);
          break;
        case 5:
          Xt(e, Ae, yt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ue(e, he()), e.callbackNode === n ? Fc.bind(null, e) : null;
}
function xi(e, t) {
  var n = or;
  return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256), e = Rl(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && _i(t)), e;
}
function _i(e) {
  Ae === null ? Ae = e : Ae.push.apply(Ae, e);
}
function Tp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], s = l.getSnapshot;
        l = l.value;
        try {
          if (!dt(s(), l)) return !1;
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
function Lt(e, t) {
  for (t &= ~ca, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ut(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Lo(e) {
  if (J & 6) throw Error(P(327));
  Tn();
  var t = yl(e, 0);
  if (!(t & 1)) return Ue(e, he()), null;
  var n = Rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hs(e);
    r !== 0 && (t = r, n = xi(e, r));
  }
  if (n === 1) throw n = Cr, en(e, 0), Lt(e, t), Ue(e, he()), n;
  if (n === 6) throw Error(P(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Xt(e, Ae, yt), Ue(e, he()), null;
}
function fa(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    J = n, J === 0 && (An = he() + 500, Vl && Ht());
  }
}
function an(e) {
  Pt !== null && Pt.tag === 0 && !(J & 6) && Tn();
  var t = J;
  J |= 1;
  var n = Je.transition, r = le;
  try {
    if (Je.transition = null, le = 1, e) return e();
  } finally {
    le = r, Je.transition = n, J = t, !(J & 6) && Ht();
  }
}
function pa() {
  We = jn.current, oe(jn);
}
function en(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ip(n)), ge !== null) for (n = ge.return; n !== null; ) {
    var r = n;
    switch (Ki(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Sl();
        break;
      case 3:
        Rn(), oe(Fe), oe(Te), na();
        break;
      case 5:
        ta(r);
        break;
      case 4:
        Rn();
        break;
      case 13:
        oe(ce);
        break;
      case 19:
        oe(ce);
        break;
      case 10:
        qi(r.type._context);
        break;
      case 22:
      case 23:
        pa();
    }
    n = n.return;
  }
  if (Se = e, ge = e = Ut(e.current, null), je = We = t, we = 0, Cr = null, ca = Kl = sn = 0, Ae = or = null, Jt !== null) {
    for (t = 0; t < Jt.length; t++) if (n = Jt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, s = n.pending;
      if (s !== null) {
        var a = s.next;
        s.next = l, r.next = a;
      }
      n.pending = r;
    }
    Jt = null;
  }
  return e;
}
function $c(e, t) {
  do {
    var n = ge;
    try {
      if (Xi(), sl.current = Ll, Tl) {
        for (var r = de.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Tl = !1;
      }
      if (ln = 0, _e = ve = de = null, ir = !1, kr = 0, ua.current = null, n === null || n.return === null) {
        we = 1, Cr = t, ge = null;
        break;
      }
      e: {
        var s = e, a = n.return, u = n, o = t;
        if (t = je, u.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
          var c = o, m = u, _ = m.tag;
          if (!(m.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
            var y = m.alternate;
            y ? (m.updateQueue = y.updateQueue, m.memoizedState = y.memoizedState, m.lanes = y.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var g = vo(a);
          if (g !== null) {
            g.flags &= -257, wo(g, a, u, s, t), g.mode & 1 && yo(s, c, t), t = g, o = c;
            var x = t.updateQueue;
            if (x === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(o), t.updateQueue = S;
            } else x.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              yo(s, c, t), ma();
              break e;
            }
            o = Error(P(426));
          }
        } else if (ue && u.mode & 1) {
          var j = vo(a);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), wo(j, a, u, s, t), Gi(zn(o, u));
            break e;
          }
        }
        s = o = zn(o, u), we !== 4 && (we = 2), or === null ? or = [s] : or.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var d = kc(s, o, t);
              co(s, d);
              break e;
            case 1:
              u = o;
              var f = s.type, p = s.stateNode;
              if (!(s.flags & 128) && (typeof f.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ft === null || !Ft.has(p)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var v = jc(s, u, t);
                co(s, v);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Vc(n);
    } catch (w) {
      t = w, ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Uc() {
  var e = bl.current;
  return bl.current = Ll, e === null ? Ll : e;
}
function ma() {
  (we === 0 || we === 3 || we === 2) && (we = 4), Se === null || !(sn & 268435455) && !(Kl & 268435455) || Lt(Se, je);
}
function Rl(e, t) {
  var n = J;
  J |= 2;
  var r = Uc();
  (Se !== e || je !== t) && (yt = null, en(e, t));
  do
    try {
      Lp();
      break;
    } catch (l) {
      $c(e, l);
    }
  while (!0);
  if (Xi(), J = n, bl.current = r, ge !== null) throw Error(P(261));
  return Se = null, je = 0, we;
}
function Lp() {
  for (; ge !== null; ) Wc(ge);
}
function bp() {
  for (; ge !== null && !nf(); ) Wc(ge);
}
function Wc(e) {
  var t = Bc(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Vc(e) : ge = t, ua.current = null;
}
function Vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ep(n, t), n !== null) {
        n.flags &= 32767, ge = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        we = 6, ge = null;
        return;
      }
    } else if (n = jp(n, t, We), n !== null) {
      ge = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function Xt(e, t, n) {
  var r = le, l = Je.transition;
  try {
    Je.transition = null, le = 1, Pp(e, t, n, r);
  } finally {
    Je.transition = l, le = r;
  }
  return null;
}
function Pp(e, t, n, r) {
  do
    Tn();
  while (Pt !== null);
  if (J & 6) throw Error(P(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (pf(e, s), e === Se && (ge = Se = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xr || (Xr = !0, Hc(gl, function() {
    return Tn(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = Je.transition, Je.transition = null;
    var a = le;
    le = 1;
    var u = J;
    J |= 4, ua.current = null, Np(e, n), Ac(n, e), Zf(Js), vl = !!qs, Js = qs = null, e.current = n, Ip(n), rf(), J = u, le = a, Je.transition = s;
  } else e.current = n;
  if (Xr && (Xr = !1, Pt = e, Dl = l), s = e.pendingLanes, s === 0 && (Ft = null), af(n.stateNode), Ue(e, he()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Pl) throw Pl = !1, e = vi, vi = null, e;
  return Dl & 1 && e.tag !== 0 && Tn(), s = e.pendingLanes, s & 1 ? e === wi ? ur++ : (ur = 0, wi = e) : ur = 0, Ht(), null;
}
function Tn() {
  if (Pt !== null) {
    var e = ku(Dl), t = Je.transition, n = le;
    try {
      if (Je.transition = null, le = 16 > e ? 16 : e, Pt === null) var r = !1;
      else {
        if (e = Pt, Pt = null, Dl = 0, J & 6) throw Error(P(331));
        var l = J;
        for (J |= 4, A = e.current; A !== null; ) {
          var s = A, a = s.child;
          if (A.flags & 16) {
            var u = s.deletions;
            if (u !== null) {
              for (var o = 0; o < u.length; o++) {
                var c = u[o];
                for (A = c; A !== null; ) {
                  var m = A;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ar(8, m, s);
                  }
                  var _ = m.child;
                  if (_ !== null) _.return = m, A = _;
                  else for (; A !== null; ) {
                    m = A;
                    var y = m.sibling, g = m.return;
                    if (Dc(m), m === c) {
                      A = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = g, A = y;
                      break;
                    }
                    A = g;
                  }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var S = x.child;
                if (S !== null) {
                  x.child = null;
                  do {
                    var j = S.sibling;
                    S.sibling = null, S = j;
                  } while (S !== null);
                }
              }
              A = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, A = a;
          else e: for (; A !== null; ) {
            if (s = A, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                ar(9, s, s.return);
            }
            var d = s.sibling;
            if (d !== null) {
              d.return = s.return, A = d;
              break e;
            }
            A = s.return;
          }
        }
        var f = e.current;
        for (A = f; A !== null; ) {
          a = A;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, A = p;
          else e: for (a = f; A !== null; ) {
            if (u = A, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Hl(9, u);
              }
            } catch (w) {
              pe(u, u.return, w);
            }
            if (u === a) {
              A = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, A = v;
              break e;
            }
            A = u.return;
          }
        }
        if (J = l, Ht(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
          ht.onPostCommitFiberRoot(Ol, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      le = n, Je.transition = t;
    }
  }
  return !1;
}
function bo(e, t, n) {
  t = zn(n, t), t = kc(e, t, 1), e = Ot(e, t, 1), t = De(), e !== null && (Mr(e, 1, t), Ue(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) bo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      bo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
        e = zn(n, e), e = jc(t, e, 1), t = Ot(t, e, 1), e = De(), t !== null && (Mr(t, 1, e), Ue(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Dp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = De(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (je & n) === n && (we === 4 || we === 3 && (je & 130023424) === je && 500 > he() - da ? en(e, 0) : ca |= n), Ue(e, t);
}
function Qc(e, t) {
  t === 0 && (e.mode & 1 ? (t = $r, $r <<= 1, !($r & 130023424) && ($r = 4194304)) : t = 1);
  var n = De();
  e = jt(e, t), e !== null && (Mr(e, t, n), Ue(e, n));
}
function Rp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Qc(e, n);
}
function zp(e, t) {
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
      throw Error(P(314));
  }
  r !== null && r.delete(t), Qc(e, n);
}
var Bc;
Bc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) Oe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Oe = !1, kp(e, t, n);
    Oe = !!(e.flags & 131072);
  }
  else Oe = !1, ue && t.flags & 1048576 && Yu(t, El, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      al(e, t), e = t.pendingProps;
      var l = bn(t, Te.current);
      Mn(t, n), l = la(null, t, r, e, l, n);
      var s = sa();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (s = !0, kl(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Zi(t), l.updater = Bl, t.stateNode = l, l._reactInternals = t, ai(t, r, e, n), t = ci(null, t, r, !0, s, n)) : (t.tag = 0, ue && s && Hi(t), be(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (al(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Op(r), e = st(r, e), l) {
          case 0:
            t = ui(null, t, r, e, n);
            break e;
          case 1:
            t = So(null, t, r, e, n);
            break e;
          case 11:
            t = xo(null, t, r, e, n);
            break e;
          case 14:
            t = _o(null, t, r, st(r.type, e), n);
            break e;
        }
        throw Error(P(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), ui(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), So(e, t, r, l, n);
    case 3:
      e: {
        if (Ic(t), e === null) throw Error(P(387));
        r = t.pendingProps, s = t.memoizedState, l = s.element, tc(e, t), Il(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          l = zn(Error(P(423)), t), t = ko(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = zn(Error(P(424)), t), t = ko(e, t, r, n, l);
          break e;
        } else for (Ve = At(t.stateNode.containerInfo.firstChild), Qe = t, ue = !0, at = null, n = Zu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Pn(), r === l) {
            t = Et(e, t, n);
            break e;
          }
          be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return nc(t), e === null && li(t), r = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = l.children, Zs(r, l) ? a = null : s !== null && Zs(r, s) && (t.flags |= 32), Nc(e, t), be(e, t, a, n), t.child;
    case 6:
      return e === null && li(t), null;
    case 13:
      return Mc(e, t, n);
    case 4:
      return ea(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Dn(t, null, r, n) : be(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), xo(e, t, r, l, n);
    case 7:
      return be(e, t, t.pendingProps, n), t.child;
    case 8:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, s = t.memoizedProps, a = l.value, ie(Cl, r._currentValue), r._currentValue = a, s !== null) if (dt(s.value, a)) {
          if (s.children === l.children && !Fe.current) {
            t = Et(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var u = s.dependencies;
          if (u !== null) {
            a = s.child;
            for (var o = u.firstContext; o !== null; ) {
              if (o.context === r) {
                if (s.tag === 1) {
                  o = _t(-1, n & -n), o.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var m = c.pending;
                    m === null ? o.next = o : (o.next = m.next, m.next = o), c.pending = o;
                  }
                }
                s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), si(
                  s.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              o = o.next;
            }
          } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (a = s.return, a === null) throw Error(P(341));
            a.lanes |= n, u = a.alternate, u !== null && (u.lanes |= n), si(a, n, t), a = s.sibling;
          } else a = s.child;
          if (a !== null) a.return = s;
          else for (a = s; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (s = a.sibling, s !== null) {
              s.return = a.return, a = s;
              break;
            }
            a = a.return;
          }
          s = a;
        }
        be(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Mn(t, n), l = Ze(l), r = r(l), t.flags |= 1, be(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = st(r, t.pendingProps), l = st(r.type, l), _o(e, t, r, l, n);
    case 15:
      return Ec(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), al(e, t), t.tag = 1, $e(r) ? (e = !0, kl(t)) : e = !1, Mn(t, n), Sc(t, r, l), ai(t, r, l, n), ci(null, t, r, !0, e, n);
    case 19:
      return Tc(e, t, n);
    case 22:
      return Cc(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Hc(e, t) {
  return wu(e, t);
}
function Ap(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function qe(e, t, n, r) {
  return new Ap(e, t, n, r);
}
function ha(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Op(e) {
  if (typeof e == "function") return ha(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Di) return 11;
    if (e === Ri) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function cl(e, t, n, r, l, s) {
  var a = 2;
  if (r = e, typeof e == "function") ha(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case mn:
      return tn(n.children, l, s, t);
    case Pi:
      a = 8, l |= 8;
      break;
    case Ls:
      return e = qe(12, n, t, l | 2), e.elementType = Ls, e.lanes = s, e;
    case bs:
      return e = qe(13, n, t, l), e.elementType = bs, e.lanes = s, e;
    case Ps:
      return e = qe(19, n, t, l), e.elementType = Ps, e.lanes = s, e;
    case nu:
      return Gl(n, l, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case eu:
          a = 10;
          break e;
        case tu:
          a = 9;
          break e;
        case Di:
          a = 11;
          break e;
        case Ri:
          a = 14;
          break e;
        case It:
          a = 16, r = null;
          break e;
      }
      throw Error(P(130, e == null ? e : typeof e, ""));
  }
  return t = qe(a, n, t, l), t.elementType = e, t.type = r, t.lanes = s, t;
}
function tn(e, t, n, r) {
  return e = qe(7, e, r, t), e.lanes = n, e;
}
function Gl(e, t, n, r) {
  return e = qe(22, e, r, t), e.elementType = nu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ns(e, t, n) {
  return e = qe(6, e, null, t), e.lanes = n, e;
}
function Is(e, t, n) {
  return t = qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Fp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = os(0), this.expirationTimes = os(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = os(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ga(e, t, n, r, l, s, a, u, o) {
  return e = new Fp(e, t, n, u, o), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = qe(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Zi(s), e;
}
function $p(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: pn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Kc(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (un(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return Ku(e, n, t);
  }
  return t;
}
function Gc(e, t, n, r, l, s, a, u, o) {
  return e = ga(n, r, !0, e, l, s, a, u, o), e.context = Kc(null), n = e.current, r = De(), l = $t(n), s = _t(r, l), s.callback = t ?? null, Ot(n, s, l), e.current.lanes = l, Mr(e, l, r), Ue(e, r), e;
}
function Yl(e, t, n, r) {
  var l = t.current, s = De(), a = $t(l);
  return n = Kc(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(l, t, a), e !== null && (ct(e, l, a, s), ll(e, l, a)), a;
}
function zl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Po(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ya(e, t) {
  Po(e, t), (e = e.alternate) && Po(e, t);
}
function Up() {
  return null;
}
var Yc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function va(e) {
  this._internalRoot = e;
}
Xl.prototype.render = va.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Yl(e, t, null, null);
};
Xl.prototype.unmount = va.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function() {
      Yl(null, e, null, null);
    }), t[kt] = null;
  }
};
function Xl(e) {
  this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Cu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Iu(e);
  }
};
function wa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ql(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Do() {
}
function Wp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = zl(a);
        s.call(c);
      };
    }
    var a = Gc(t, r, e, 0, null, !1, !1, "", Do);
    return e._reactRootContainer = a, e[kt] = a.current, vr(e.nodeType === 8 ? e.parentNode : e), an(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = zl(o);
      u.call(c);
    };
  }
  var o = ga(e, 0, !1, null, null, !1, !1, "", Do);
  return e._reactRootContainer = o, e[kt] = o.current, vr(e.nodeType === 8 ? e.parentNode : e), an(function() {
    Yl(t, o, n, r);
  }), o;
}
function Jl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var o = zl(a);
        u.call(o);
      };
    }
    Yl(t, a, e, l);
  } else a = Wp(n, t, e, l, r);
  return zl(a);
}
ju = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 && (Oi(t, n | 1), Ue(t, he()), !(J & 6) && (An = he() + 500, Ht()));
      }
      break;
    case 13:
      an(function() {
        var r = jt(e, 1);
        if (r !== null) {
          var l = De();
          ct(r, e, 1, l);
        }
      }), ya(e, 1);
  }
};
Fi = function(e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = De();
      ct(t, e, 134217728, n);
    }
    ya(e, 134217728);
  }
};
Eu = function(e) {
  if (e.tag === 13) {
    var t = $t(e), n = jt(e, t);
    if (n !== null) {
      var r = De();
      ct(n, e, t, r);
    }
    ya(e, t);
  }
};
Cu = function() {
  return le;
};
Nu = function(e, t) {
  var n = le;
  try {
    return le = e, t();
  } finally {
    le = n;
  }
};
Vs = function(e, t, n) {
  switch (t) {
    case "input":
      if (zs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Wl(r);
            if (!l) throw Error(P(90));
            lu(r), zs(r, l);
          }
        }
      }
      break;
    case "textarea":
      iu(e, n);
      break;
    case "select":
      t = n.value, t != null && En(e, !!n.multiple, t, !1);
  }
};
pu = fa;
mu = an;
var Vp = { usingClientEntryPoint: !1, Events: [Lr, vn, Wl, du, fu, fa] }, Xn = { findFiberByHostInstance: qt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qp = { bundleType: Xn.bundleType, version: Xn.version, rendererPackageName: Xn.rendererPackageName, rendererConfig: Xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = yu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Xn.findFiberByHostInstance || Up, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qr.isDisabled && qr.supportsFiber) try {
    Ol = qr.inject(Qp), ht = qr;
  } catch {
  }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vp;
Ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wa(t)) throw Error(P(200));
  return $p(e, t, null, n);
};
Ke.createRoot = function(e, t) {
  if (!wa(e)) throw Error(P(299));
  var n = !1, r = "", l = Yc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ga(e, 1, !1, null, null, n, !1, r, l), e[kt] = t.current, vr(e.nodeType === 8 ? e.parentNode : e), new va(t);
};
Ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
  return e = yu(t), e = e === null ? null : e.stateNode, e;
};
Ke.flushSync = function(e) {
  return an(e);
};
Ke.hydrate = function(e, t, n) {
  if (!ql(t)) throw Error(P(200));
  return Jl(null, e, t, !0, n);
};
Ke.hydrateRoot = function(e, t, n) {
  if (!wa(e)) throw Error(P(405));
  var r = n != null && n.hydratedSources || null, l = !1, s = "", a = Yc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Gc(t, null, e, 1, n ?? null, l, !1, s, a), e[kt] = t.current, vr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Xl(t);
};
Ke.render = function(e, t, n) {
  if (!ql(t)) throw Error(P(200));
  return Jl(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function(e) {
  if (!ql(e)) throw Error(P(40));
  return e._reactRootContainer ? (an(function() {
    Jl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[kt] = null;
    });
  }), !0) : !1;
};
Ke.unstable_batchedUpdates = fa;
Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ql(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Jl(e, t, n, !1, r);
};
Ke.version = "18.3.1-next-f1338f8080-20240426";
function Xc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc);
    } catch (e) {
      console.error(e);
    }
}
Xc(), Xo.exports = Ke;
var Pe = Xo.exports, qc, Ro = Pe;
qc = Ro.createRoot, Ro.hydrateRoot;
var Jc = { exports: {} }, Zl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bp = h, Hp = Symbol.for("react.element"), Kp = Symbol.for("react.fragment"), Gp = Object.prototype.hasOwnProperty, Yp = Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zc(e, t, n) {
  var r, l = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Gp.call(t, r) && !Xp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Hp, type: e, key: s, ref: a, props: l, _owner: Yp.current };
}
Zl.Fragment = Kp;
Zl.jsx = Zc;
Zl.jsxs = Zc;
Jc.exports = Zl;
var i = Jc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qp = {
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
const Jp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Y = (e, t) => {
  const n = h.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: u = "",
      children: o,
      ...c
    }, m) => h.createElement(
      "svg",
      {
        ref: m,
        ...qp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(s) * 24 / Number(l) : s,
        className: ["lucide", `lucide-${Jp(e)}`, u].join(" "),
        ...c
      },
      [
        ...t.map(([_, y]) => h.createElement(_, y)),
        ...Array.isArray(o) ? o : [o]
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
const Zp = Y("AlertCircle", [
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
const em = Y("AlertTriangle", [
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
const tm = Y("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ed = Y("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = Y("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = Y("ArrowUpDown", [
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
const td = Y("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = Y("Box", [
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
const lm = Y("Calendar", [
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
const sm = Y("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = Y("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = Y("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ld = Y("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = Y("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = Y("Download", [
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
const sd = Y("FileJson", [
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
const om = Y("Folder", [
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
const um = Y("Info", [
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
const id = Y("LayoutGrid", [
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
const cm = Y("LayoutList", [
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
const dm = Y("Link2Off", [
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
const fm = Y("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = Y("Maximize", [
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
const mm = Y("Minimize", [
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
const hm = Y("MoreVertical", [
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
const ad = Y("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = Y("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = Y("PlusCircle", [
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
const _a = Y("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = Y("RefreshCw", [
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
const On = Y("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = Y("Settings", [
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
const vm = Y("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Si = Y("Star", [
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
const cn = Y("Tag", [
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
const Fn = Y("Trash2", [
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
const wm = Y("Type", [
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
const xm = Y("Upload", [
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
const Ee = Y("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = H;
async function q(e) {
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
const _m = async () => {
  const e = await H.fetchApi("/meld/home-dir");
  return (await q(e)).home;
};
let Al = !1;
const Sm = (e) => {
  Al = e, Al && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, km = (...e) => {
  Al && console.log("[Meld]", ...e);
}, jm = (...e) => {
  Al && console.warn("[Meld]", ...e);
}, Em = (...e) => {
  console.error("[Meld]", ...e);
}, U = {
  log: km,
  warn: jm,
  error: Em,
  init: Sm
}, dl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const s = await H.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return q(s);
}, od = async (e) => {
  const t = await H.fetchApi(`/meld/image/${e}/details`);
  return q(t);
}, ki = async (e, t = !1) => {
  const n = await H.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await q(n);
}, Sa = async (e) => {
  const t = await H.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return q(t);
}, ud = async (e) => {
  const t = await H.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return q(t);
}, Ao = async (e, t) => {
  const n = await H.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await q(n);
}, Cm = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await H.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await q(r);
  } catch {
    return [];
  }
}, ji = async (e) => {
  const t = await H.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await q(t);
  } catch {
    return [];
  }
}, Nm = async (e, t) => {
  const n = await H.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await q(n);
}, Ei = async (e, t, n) => {
  const r = await H.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await q(r);
}, Im = async (e) => {
  const t = await H.fetchApi(`/meld/image/${e}/workflow`);
  return q(t);
}, Mm = async (e) => {
  const t = await H.fetchApi(`/meld/image/${e}/snapshot_data`);
  return q(t);
}, Tm = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await H.fetchApi(n);
  return q(r);
}, Lm = async () => {
  const e = await H.fetchApi("/meld/search-suggestions");
  return q(e);
}, bm = async () => {
  const e = await H.fetchApi("/meld/search-keywords");
  return q(e);
}, Pm = async () => {
  const e = await H.fetchApi("/meld/search-config");
  return q(e);
}, Dm = async () => {
  const e = await H.fetchApi("/meld/favorites");
  return q(e);
}, Rm = async (e, t) => {
  const n = await H.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await q(n);
}, Oo = async (e) => {
  const t = await H.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await q(t);
}, zm = async (e, t, n) => {
  const r = await H.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await q(r);
}, Am = {
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
}, cd = async () => {
  let e;
  try {
    const t = await H.fetchApi("/meld/settings");
    e = await q(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Am;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Om = async (e, t) => {
  const n = await H.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await q(n);
}, Fm = {
  images: [],
  selectedIds: /* @__PURE__ */ new Set(),
  isLoading: !1,
  error: null,
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
function $m(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), s = e.images.filter((u) => !l.has(u.id)), a = new Set(e.selectedIds);
      for (const u of t.payload)
        a.delete(u);
      return {
        ...e,
        images: s,
        selectedIds: a,
        pagination: {
          ...e.pagination,
          total: Math.max(0, e.pagination.total - t.payload.length)
        }
      };
    }
    case "ADD_IMAGES": {
      const l = t.payload, s = [...e.images, ...l], a = Array.from(
        new Map(s.map((u) => [u.id, u])).values()
      ).sort((u, o) => o.created_at - u.created_at);
      return {
        ...e,
        images: a,
        pagination: {
          ...e.pagination,
          total: e.pagination.total + l.length
        }
      };
    }
    case "UPDATE_IMAGE": {
      const l = t.payload, s = e.images.map(
        (u) => u.id === l.id ? l : u
      ), a = e.lineageImages.map(
        (u) => u.id === l.id ? l : u
      );
      return {
        ...e,
        images: s,
        lineageImages: a
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: s, offset: a } = t.payload;
      let u = e.viewerImageId;
      return e.viewerMode === "gallery" && u !== null && !l.some((o) => o.id === u) && (u = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: u,
        pagination: {
          total: s,
          offset: a,
          limit: e.pagination.limit,
          hasMore: a + l.length < s
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: s, offset: a } = t.payload, u = [...e.images, ...l], o = Array.from(
        new Map(u.map((c) => [c.id, c])).values()
      );
      return {
        ...e,
        images: o,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: s,
          offset: a,
          hasMore: a + l.length < s
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
      let s = e.lastSelectedId;
      return l.has(t.payload) ? (l.delete(t.payload), s === t.payload && (s = null)) : (l.add(t.payload), s = t.payload), {
        ...e,
        selectedIds: l,
        lastSelectedId: s
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
      ), s = e.images.findIndex(
        (c) => c.id === t.payload
      );
      if (l === -1 || s === -1) return e;
      const [a, u] = [
        Math.min(l, s),
        Math.max(l, s)
      ], o = new Set(e.selectedIds);
      for (let c = a; c <= u; c++)
        o.add(e.images[c].id);
      return {
        ...e,
        selectedIds: o,
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
      const l = t.payload, s = typeof l == "number" ? l : l.id, a = typeof l == "number" ? "gallery" : l.mode, u = e.viewerMode === "lineage" && a === "lineage" && e.lineageImages.some((o) => o.id === s);
      return {
        ...e,
        viewerImageId: s,
        viewerMode: a,
        lineageImages: u ? e.lineageImages : []
      };
    }
    case "CLOSE_VIEWER":
      return {
        ...e,
        viewerImageId: null,
        lineageImages: []
      };
    case "NEXT_IMAGE": {
      const s = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), u = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (m) => m.exists !== !1 && (e.settings["gallery.show_parent_images"] || !m.has_children || a)
      );
      if (e.viewerImageId === null || u.length === 0)
        return e;
      const o = u.findIndex(
        (m) => m.id === e.viewerImageId
      );
      if (o === -1 || o === u.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || o === u.length - 1 && !s)
        return e;
      const c = (o + 1) % u.length;
      return {
        ...e,
        viewerImageId: u[c].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const s = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1"), u = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (m) => m.exists !== !1 && (e.settings["gallery.show_parent_images"] || !m.has_children || a)
      );
      if (e.viewerImageId === null || u.length === 0)
        return e;
      const o = u.findIndex(
        (m) => m.id === e.viewerImageId
      );
      if (o === -1 || o === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || o === 0 && !s)
        return e;
      const c = (o - 1 + u.length) % u.length;
      return {
        ...e,
        viewerImageId: u[c].id
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
      }, s = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (s.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: l,
        pagination: s
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
const dd = h.createContext(void 0), Um = ({
  children: e
}) => {
  const [t, n] = h.useReducer($m, Fm), r = h.useRef(t.images.length), l = h.useRef(0);
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const s = h.useCallback(
    async (g, x, S) => {
      const j = t.settings["gallery.max_load_count"], d = 200;
      let f = g;
      for (; f < Math.min(x, j) && S === l.current; )
        try {
          const p = Math.min(d, j - f);
          U.log("Background fetch: starting chunk", {
            offset: f,
            limit: p
          });
          const v = await dl(
            f,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (S !== l.current || (n({ type: "APPEND_IMAGES", payload: v }), f += v.images.length, v.images.length === 0 || f >= v.total))
            break;
          await new Promise((w) => setTimeout(w, 300));
        } catch (p) {
          U.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now(), x = ++l.current;
    try {
      const S = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      U.log("refreshImages: starting initial fetch", {
        isSearch: S,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const d = await dl(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - g;
      U.log("refreshImages: initial fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: d }), d.total > j && s(j, d.total, x);
    } catch (S) {
      U.error("refreshImages: fetch failed", S), n({
        type: "SET_ERROR",
        payload: S instanceof Error ? S.message : String(S)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    s
  ]), u = h.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const g = performance.now();
    try {
      const x = r.current, S = t.searchQuery.trim() !== "", j = t.pagination.limit;
      U.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: j,
        isSearch: S
      });
      const d = await dl(
        x,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - g;
      U.log("loadMoreImages: fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: d });
    } catch (x) {
      U.error("loadMoreImages: fetch failed", x), n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [
    t.isLoading,
    t.pagination.hasMore,
    t.pagination.limit,
    t.searchQuery,
    t.viewScope
  ]), o = h.useCallback(async () => {
    try {
      const g = await Dm();
      n({ type: "SET_FAVORITES", payload: g });
    } catch (g) {
      U.error("Failed to load favorites", g);
    }
  }, []), c = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds), S = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
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
  }, [t.selectedIds, t.images, t.viewScope]), m = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const g = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const S = (await Sa(g)).restored_ids || g;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: S }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), _ = h.useCallback(
    async (g, x) => {
      try {
        await Om(g, x), n({ type: "SET_SETTINGS", payload: { [g]: x } });
      } catch (S) {
        n({
          type: "SET_ERROR",
          payload: S instanceof Error ? S.message : String(S)
        });
      }
    },
    []
  ), y = h.useCallback(
    async (g) => {
      const x = t.images.find((S) => S.id === g);
      if (x && !x.is_minimal)
        return x;
      try {
        U.log("fetchFullImageDetails: fetching full data", { id: g });
        const S = await od(g);
        return n({ type: "UPDATE_IMAGE", payload: S }), S;
      } catch (S) {
        throw U.error("Failed to fetch image details", S), S;
      }
    },
    [t.images]
  );
  return h.useEffect(() => {
    (async () => {
      try {
        const x = await cd();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        U.error("Failed to load settings", x);
      }
    })();
  }, []), h.useEffect(() => {
    o();
  }, [o]), h.useEffect(() => {
    const g = () => {
      a();
    }, x = (j) => {
      const d = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: d }
      });
    }, S = (j) => {
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
      }), a();
    };
    return window.addEventListener("meld-refresh", g), window.addEventListener("meld-scan-progress", x), window.addEventListener("meld-scan-finished", S), () => {
      window.removeEventListener("meld-refresh", g), window.removeEventListener("meld-scan-progress", x), window.removeEventListener("meld-scan-finished", S);
    };
  }, [a, t.scanStatus.progress.total]), h.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ i.jsx(
    dd.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: u,
        refreshFavorites: o,
        deleteSelected: c,
        restoreSelected: m,
        updateSetting: _,
        fetchFullImageDetails: y
      },
      children: e
    }
  );
}, Le = () => {
  const e = h.useContext(dd);
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
}, ka = async () => {
  const e = await H.fetchApi("/meld/tags");
  return q(e);
}, Wm = async (e) => {
  const t = await H.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return q(t);
}, Vm = async (e) => {
  const t = await H.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await q(t);
}, Qm = async (e, t) => {
  const n = await H.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await q(n);
}, Bm = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await H.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Hm = async (e, t, n = !1, r) => {
  const l = await H.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await q(l);
  } catch (s) {
    return console.error("Failed to fetch folders", s), { folders: [], images: [], image_count: 0 };
  }
}, Km = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await H.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await q(l);
  } catch (s) {
    return console.error("Failed to fetch folder metadata", s), {};
  }
}, Gm = async (e, t, n) => {
  const r = await H.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await q(r)).count;
  } catch {
    return 0;
  }
}, Ym = async (e) => {
  const t = await H.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await q(t);
}, Xm = async () => {
  const e = await H.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await q(e);
}, fd = () => {
  const { dispatch: e } = Le(), [t, n] = h.useState(() => {
    const k = localStorage.getItem("meld-import-config"), B = {
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
        const L = JSON.parse(k);
        return { ...B, ...L, tags: [] };
      } catch {
        return B;
      }
    return B;
  });
  h.useEffect(() => {
    const { tags: k, ...B } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(B));
  }, [t]);
  const [r, l] = h.useState([]), [s, a] = h.useState([]), [u, o] = h.useState(0), [c, m] = h.useState(!1), [_, y] = h.useState([]), [g, x] = h.useState(""), [S, j] = h.useState(!1), [d, f] = h.useState(null), p = h.useRef(!1), v = (k) => {
    k.target === k.currentTarget && (p.current = !0);
  }, w = (k) => {
    k.target === k.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const B = await _m();
        n((L) => L.custom_path ? L : { ...L, custom_path: B });
      } catch (B) {
        U.error("Failed to fetch home directory:", B);
      }
    })();
  }, []), h.useEffect(() => {
    const k = new AbortController();
    return (async () => {
      const L = t.type === "custom" ? t.custom_path : t.subfolder;
      if (U.log(
        `loadFolders started. Path: "${L}", Type: "${t.type}"`
      ), t.type === "custom" && !L) {
        U.log("Custom path is empty, skipping load."), l([]), a([]), o(0);
        return;
      }
      m(!0);
      const Q = L, I = t.type;
      try {
        U.log("Step 1: Fast load starting...");
        const T = await Hm(
          t.type,
          L,
          !0,
          k.signal
        );
        if (k.signal.aborted) {
          U.log("Step 1: Aborted.");
          return;
        }
        U.log(
          `Step 1 complete. Found ${T.folders.length} folders, ${T.images.length} images.`
        ), l(T.folders), a(T.images), o(null);
        const O = T.folders.map((N) => N.name);
        O.length > 0 && (U.log(
          `Step 2: Metadata fetch starting for ${O.length} folders...`
        ), Km(
          I,
          Q,
          O,
          k.signal
        ).then((N) => {
          if (k.signal.aborted) {
            U.log("Step 2: Aborted.");
            return;
          }
          U.log("Step 2: Metadata fetch complete."), l(
            (K) => K.map((ye) => {
              const F = N[ye.name];
              return F ? { ...ye, count: F.count, preview: F.preview } : ye;
            })
          );
        }).catch((N) => {
          N.name !== "AbortError" && U.error("Step 2: Metadata fetch failed:", N);
        })), U.log("Step 3: Path image count starting..."), Gm(I, Q, k.signal).then((N) => {
          if (k.signal.aborted) {
            U.log("Step 3: Aborted.");
            return;
          }
          U.log(`Step 3: Path image count complete: ${N}`), o(N);
        }).catch((N) => {
          N.name !== "AbortError" && U.error("Step 3: Path image count failed:", N);
        });
      } catch (T) {
        if (T.name === "AbortError") {
          U.log("Request aborted.");
          return;
        }
        U.error("Failed to load folders:", T), l([]), a([]), o(0);
      } finally {
        k.signal.aborted || m(!1);
      }
    })(), () => {
      k.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const C = h.useCallback(async () => {
    j(!0);
    try {
      const k = await ka();
      y(k);
    } catch (k) {
      U.error("Failed to fetch tags:", k);
    } finally {
      j(!1);
    }
  }, []);
  h.useEffect(() => {
    C();
  }, [C]), h.useEffect(() => {
    const k = (B) => {
      B.key === "Escape" && (B.preventDefault(), B.stopImmediatePropagation(), d ? f(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", k, { capture: !0 }), () => window.removeEventListener("keydown", k, { capture: !0 });
  }, [d, e]);
  const M = h.useMemo(() => _.filter(
    (k) => k.name.toLowerCase().includes(g.toLowerCase()) && !t.tags.includes(k.name)
  ), [_, g, t.tags]), b = (k) => {
    const B = k.trim();
    B && !t.tags.includes(B) && (n({ ...t, tags: [...t.tags, B] }), x(""));
  }, R = (k) => {
    n({ ...t, tags: t.tags.filter((B) => B !== k) });
  }, E = (k) => {
    k.key === "Enter" && g.trim() && (k.preventDefault(), b(g.trim()));
  }, z = async () => {
    try {
      await Ym(t), e({
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
      U.error("Failed to start scan:", k), alert(`Failed to start scan: ${k}`);
    }
  }, V = (k) => {
    if (t.type === "custom") {
      const B = t.custom_path.includes("\\") ? "\\" : "/", L = t.custom_path.endsWith(B) ? `${t.custom_path}${k}` : `${t.custom_path}${B}${k}`;
      n({ ...t, custom_path: L });
    } else {
      const B = t.subfolder ? `${t.subfolder}/${k}` : k;
      n({ ...t, subfolder: B });
    }
  }, re = () => {
    if (t.type === "custom") {
      const k = t.custom_path.includes("\\") ? "\\" : "/", B = t.custom_path.split(k);
      if (B.length > 1) {
        B.pop();
        let L = B.join(k);
        L === "" && k === "/" && (L = "/"), n({ ...t, custom_path: L });
      }
    } else {
      const k = t.subfolder.split("/");
      k.pop(), n({ ...t, subfolder: k.join("/") });
    }
  };
  return Pe.createPortal(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: v,
        onMouseUp: w,
        children: [
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (k) => k.stopPropagation(),
              children: [
                /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ i.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ i.jsx(Ee, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ i.jsxs("div", { className: "meld-import-container", children: [
                  /* @__PURE__ */ i.jsxs("div", { className: "meld-import-sidebar", children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ i.jsx("label", { htmlFor: "base-location", children: "Base Location" }),
                      /* @__PURE__ */ i.jsxs(
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
                            /* @__PURE__ */ i.jsx("option", { value: "output", children: "Output Directory" }),
                            /* @__PURE__ */ i.jsx("option", { value: "input", children: "Input Directory" }),
                            /* @__PURE__ */ i.jsx("option", { value: "custom", children: "Custom Path (Absolute)" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ i.jsx("span", { className: "meld-form-label", children: "Images Found" }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-path-count", children: u === null ? /* @__PURE__ */ i.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${u} images` })
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ i.jsxs("label", { children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (k) => n({ ...t, recursive: k.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ i.jsx("label", { htmlFor: "link-strategy", children: "Source Linking" }),
                      /* @__PURE__ */ i.jsxs(
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
                            /* @__PURE__ */ i.jsx("option", { value: "none", children: "Do not link" }),
                            /* @__PURE__ */ i.jsx("option", { value: "new_only", children: "Only for new images" }),
                            /* @__PURE__ */ i.jsx("option", { value: "all", children: "Reset for all images" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ i.jsx("label", { htmlFor: "import-tags", children: "Tags to Add" }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((k) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        k,
                        /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => R(k),
                            children: /* @__PURE__ */ i.jsx(Ee, { size: 12 })
                          }
                        )
                      ] }, k)) }),
                      /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ i.jsx(On, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ i.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: g,
                            onChange: (k) => x(k.target.value),
                            onKeyDown: E
                          }
                        ),
                        g.trim() && !t.tags.includes(g.trim()) && /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => b(g),
                            children: /* @__PURE__ */ i.jsx(_a, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: S ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : M.length === 0 ? g && /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        g
                      ] }) : M.map((k) => /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => b(k.name),
                          children: k.name
                        },
                        k.id
                      )) })
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ i.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: z,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ i.jsx(xa, { size: 16 }),
                          "Start Import"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ i.jsxs("div", { className: "meld-import-browser", children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-browser-header", children: [
                      /* @__PURE__ */ i.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-browser-back",
                          disabled: t.type === "custom" ? t.custom_path === "/" || !t.custom_path.includes("/") && !t.custom_path.includes("\\") : !t.subfolder,
                          onClick: re,
                          children: [
                            /* @__PURE__ */ i.jsx(rd, { size: 16 }),
                            "Back"
                          ]
                        }
                      ),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-browser-path-container", children: t.type === "custom" ? /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          type: "text",
                          className: "meld-browser-path-input",
                          value: t.custom_path,
                          onChange: (k) => n({ ...t, custom_path: k.target.value }),
                          placeholder: "Enter absolute path..."
                        }
                      ) : /* @__PURE__ */ i.jsxs("div", { className: "meld-browser-path-display", children: [
                        /* @__PURE__ */ i.jsxs("span", { className: "meld-browser-path-type", children: [
                          t.type,
                          "/"
                        ] }),
                        t.subfolder
                      ] }) })
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-folder-list", children: c ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && s.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      r.map((k) => /* @__PURE__ */ i.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => V(k.name),
                          children: [
                            /* @__PURE__ */ i.jsx("div", { className: "meld-folder-icon-wrapper", children: k.preview ? /* @__PURE__ */ i.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Be(k.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ i.jsx(om, { size: 16 }) }),
                            /* @__PURE__ */ i.jsx("span", { className: "meld-folder-name", children: k.name }),
                            /* @__PURE__ */ i.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${k.count === null ? "meld-folder-count--loading" : ""}`,
                                children: k.count !== null ? `${k.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ i.jsx(ld, { size: 14 })
                          ]
                        },
                        k.name
                      )),
                      s.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-browser-image-grid", children: s.map((k) => /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(k),
                          children: /* @__PURE__ */ i.jsx(
                            "img",
                            {
                              src: Be(k),
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
          d && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (k) => {
                k.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (k) => k.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ i.jsx(Ee, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "img",
                        {
                          src: Be(d),
                          alt: d.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-import-preview-info", children: d.filename })
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
}, qm = () => {
  const { state: e, dispatch: t, updateSetting: n } = Le(), [r, l] = h.useState("Gallery"), [s, a] = h.useState({
    ...e.settings
  }), [u, o] = h.useState(
    {}
  ), [c, m] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [_, y] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [g, x] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [S, j] = h.useState(e.settings["viewer.thumbnail_window_size"].toString()), [d, f] = h.useState(e.settings["gallery.trash_retention_days"].toString()), [p, v] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [w, C] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [M, b] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [R, E] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    z,
    V
  ] = h.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    re,
    k
  ] = h.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [B, L] = h.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: s,
    setLocalSettings: a,
    shortcutErrors: u,
    setShortcutErrors: o,
    handleClose: async () => {
      const F = Object.keys(s).filter(
        (Z) => s[Z] !== e.settings[Z] && !u[Z]
      );
      if (F.length > 0)
        for (const Z of F)
          await n(Z, s[Z]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (F, Z) => {
      a((se) => ({
        ...se,
        [F]: !Z
      }));
    },
    handleNumberChange: (F, Z, se, tt) => {
      F === "gallery.initial_load_count" ? m(Z) : F === "gallery.max_load_count" ? y(Z) : F === "gallery.lineage_max_depth" ? x(Z) : F === "viewer.thumbnail_window_size" ? j(Z) : F === "gallery.trash_retention_days" ? f(Z) : F === "gallery.auto_link_phash_threshold" ? v(Z) : F === "gallery.suggest_phash_threshold" ? C(Z) : F === "viewer.details.max_positive_prompt_lines" ? b(Z) : F === "viewer.details.max_negative_prompt_lines" ? E(Z) : F === "fullscreen.details.max_positive_prompt_lines" ? V(Z) : F === "fullscreen.details.max_negative_prompt_lines" ? k(Z) : F === "sidebar.thumbnail_size" && L(Z);
      const Pr = Number.parseInt(Z, 10);
      if (!Number.isNaN(Pr)) {
        let Kt = Pr;
        se !== void 0 && Kt < se && (Kt = se), tt !== void 0 && Kt > tt && (Kt = tt), a((W) => ({
          ...W,
          [F]: Kt
        }));
      }
    },
    handleNumberBlur: (F) => {
      F.key === "gallery.initial_load_count" ? m(
        s["gallery.initial_load_count"].toString()
      ) : F.key === "gallery.max_load_count" ? y(s["gallery.max_load_count"].toString()) : F.key === "gallery.lineage_max_depth" ? x(
        s["gallery.lineage_max_depth"].toString()
      ) : F.key === "viewer.thumbnail_window_size" ? j(
        s["viewer.thumbnail_window_size"].toString()
      ) : F.key === "gallery.trash_retention_days" ? f(
        s["gallery.trash_retention_days"].toString()
      ) : F.key === "gallery.auto_link_phash_threshold" ? v(
        s["gallery.auto_link_phash_threshold"].toString()
      ) : F.key === "gallery.suggest_phash_threshold" ? C(
        s["gallery.suggest_phash_threshold"].toString()
      ) : F.key === "viewer.details.max_positive_prompt_lines" ? b(
        s["viewer.details.max_positive_prompt_lines"].toString()
      ) : F.key === "viewer.details.max_negative_prompt_lines" ? E(
        s["viewer.details.max_negative_prompt_lines"].toString()
      ) : F.key === "fullscreen.details.max_positive_prompt_lines" ? V(
        s["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : F.key === "fullscreen.details.max_negative_prompt_lines" ? k(
        s["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : F.key === "sidebar.thumbnail_size" && L(s["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      a((F) => ({
        ...F,
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
      })), o({});
    },
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    validateShortcut: (F) => F.trim() ? F.trim().split(/\s+/).every((se) => !!(se === "next" || se === "prev" || se === "delete" || se.startsWith("tag:") && se.length > 4 || se.startsWith("-tag:") && se.length > 5 || se.startsWith("tag-toggle:") && se.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: _,
    lineageMaxDepthInput: g,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: w,
    maxPositivePromptLinesInput: M,
    maxNegativePromptLinesInput: R,
    fullscreenMaxPositivePromptLinesInput: z,
    fullscreenMaxNegativePromptLinesInput: re,
    thumbnailSizeInput: B
  };
}, $ = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Jm = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: s,
  maxNegativePromptLinesInput: a
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in fullscreen mode.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.delete_mode"],
            onChange: (u) => t((o) => ({
              ...o,
              "fullscreen.delete_mode": u.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ i.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ i.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the screen in fullscreen.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.small_image_mode"],
            onChange: (u) => t((o) => ({
              ...o,
              "fullscreen.small_image_mode": u.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ i.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when entering fullscreen.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["fullscreen.details.show_filename"],
            onChange: (u) => t((o) => ({
              ...o,
              "fullscreen.details.show_filename": u.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ i.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ i.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Dimensions",
        description: "Display dimensions in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Created At",
        description: "Display generation date/time in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Source Info",
        description: "Display source image information in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Model",
        description: "Display model name in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Positive",
        description: "Display positive prompt in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt in fullscreen.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: s,
            min: 1,
            max: 100,
            onChange: (u) => r(
              "fullscreen.details.max_positive_prompt_lines",
              u.target.value,
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
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Negative",
        description: "Display negative prompt in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt in fullscreen.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 100,
            onChange: (u) => r(
              "fullscreen.details.max_negative_prompt_lines",
              u.target.value,
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
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Tags",
        description: "Display tags in fullscreen details.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] }), Zm = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: s,
  initialLoadCountInput: a,
  maxLoadCountInput: u
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Card Appearance" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Thumbnail Size",
        description: "Size of the image thumbnails in the sidebar (50-500px).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: s,
            min: 50,
            max: 500,
            onChange: (o) => r(
              "sidebar.thumbnail_size",
              o.target.value,
              50,
              500
            ),
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path on the card.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["sidebar.show_filename"],
            onChange: (o) => t((c) => ({
              ...c,
              "sidebar.show_filename": o.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ i.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ i.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Source Images",
        description: "Display images that have been used as a basis for other images (sources).",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Source Info",
        description: "Display source image information and lineage link on image cards.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Model",
        description: "Display the model name on the card.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Positive",
        description: "Display the positive prompt on the card.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Negative",
        description: "Display the negative prompt on the card.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx($, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ i.jsx(
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
      /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "List Behavior" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Initial Load Count",
        description: "Number of images to load and display immediately (10-1000).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 10,
            max: 1e3,
            onChange: (o) => r(
              "gallery.initial_load_count",
              o.target.value,
              10,
              1e3
            ),
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Maximum Load Count",
        description: "Maximum number of images to load in the background (10-1000000).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
            min: 10,
            max: 1e6,
            onChange: (o) => r(
              "gallery.max_load_count",
              o.target.value,
              10,
              1e6
            ),
            onBlur: () => l({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] })
] }), eh = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: l,
  handleToggle: s,
  handleResetShortcuts: a
}) => {
  const u = [
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
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-help", children: [
      /* @__PURE__ */ i.jsx("p", { children: "These shortcuts are available in both View and Full Screen modes." }),
      /* @__PURE__ */ i.jsxs("p", { children: [
        "You can combine multiple commands with spaces.",
        /* @__PURE__ */ i.jsx("br", {}),
        "Example: ",
        /* @__PURE__ */ i.jsx("code", { children: "tag:favorite next" }),
        " (Add tag and move to next)"
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-help__commands", children: [
        /* @__PURE__ */ i.jsx("strong", { children: "Available commands:" }),
        /* @__PURE__ */ i.jsxs("ul", { children: [
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "tag:NAME" }),
            " - Add a tag"
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "-tag:NAME" }),
            " - Remove a tag"
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "tag-toggle:NAME" }),
            " - Toggle a tag"
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "next" }),
            " / ",
            /* @__PURE__ */ i.jsx("code", { children: "prev" }),
            " - Navigate images"
          ] }),
          /* @__PURE__ */ i.jsxs("li", { children: [
            /* @__PURE__ */ i.jsx("code", { children: "delete" }),
            " - Delete image immediately (No confirm)"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
      u.map((o, c) => /* @__PURE__ */ i.jsx(
        $,
        {
          label: `Shortcut ${c === 9 ? 0 : c + 1} (Key: ${c === 9 ? 0 : c + 1})`,
          description: `Command to execute when pressing '${c === 9 ? 0 : c + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[o] ? "meld-text-input--error" : ""}`,
              value: e[o] || "",
              onChange: (m) => {
                t((_) => ({
                  ..._,
                  [o]: m.target.value
                }));
              },
              onBlur: () => {
                const m = l(
                  e[o] || ""
                );
                r((_) => ({
                  ..._,
                  [o]: !m
                }));
              }
            }
          )
        },
        o
      )),
      /* @__PURE__ */ i.jsx(
        $,
        {
          label: "Show Cheat Sheet",
          description: "Display shortcut key guide in View/Full Screen mode.",
          children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "checkbox",
                checked: !!e["viewer.shortcut.show_cheat_sheet"],
                onChange: () => s(
                  "viewer.shortcut.show_cheat_sheet",
                  !!e["viewer.shortcut.show_cheat_sheet"]
                )
              }
            ),
            /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Reset Shortcuts",
        description: "Restore all shortcuts to their default values.",
        children: /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: a,
            children: "Reset to Defaults"
          }
        )
      }
    ) })
  ] });
}, th = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: s,
  lineageMaxDepthInput: a,
  trashRetentionDaysInput: u,
  autoLinkPhashThresholdInput: o,
  suggestPhashThresholdInput: c
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (m) => l((_) => ({
              ..._,
              "gallery.matching_strategy": m.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "phash_created", children: "pHash & Created Time" }),
              /* @__PURE__ */ i.jsx("option", { value: "filename_phash", children: "Filename -> pHash" }),
              /* @__PURE__ */ i.jsx("option", { value: "phash_only", children: "pHash Only" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: o,
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
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
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
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Lineage" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
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
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
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
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Trash Management",
        description: "View and manage items currently in the trash bin.",
        children: /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: s,
            children: "View Trash"
          }
        )
      }
    )
  ] })
] }), nh = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: s,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: u
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Navigation & Display" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in the viewer.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.loop"],
              onChange: () => n("viewer.loop", e["viewer.loop"])
            }
          ),
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Small Image Display",
        description: "Choose how to display images smaller than the viewer area.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.small_image_mode"],
            onChange: (o) => t((c) => ({
              ...c,
              "viewer.small_image_mode": o.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ i.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Thumbnail Window Size",
        description: "Number of thumbnails to keep in the viewer (1-10000).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: s,
            min: 1,
            max: 1e4,
            onChange: (o) => r(
              "viewer.thumbnail_window_size",
              o.target.value,
              1,
              1e4
            ),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (o) => t((c) => ({
              ...c,
              "viewer.delete_mode": o.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "confirm", children: "Confirmed" }),
              /* @__PURE__ */ i.jsx("option", { value: "target_only", children: "Unconfirmed (Target Only)" }),
              /* @__PURE__ */ i.jsx("option", { value: "lineage", children: "Unconfirmed (Include Lineage)" })
            ]
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Details by Default",
        description: "Show the image details panel automatically when opening the viewer.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Filename/Path",
        description: "Choose how to display the filename or path in the details.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.details.show_filename"],
            onChange: (o) => t((c) => ({
              ...c,
              "viewer.details.show_filename": o.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "filename", children: "Filename" }),
              /* @__PURE__ */ i.jsx("option", { value: "filepath", children: "Filepath" }),
              /* @__PURE__ */ i.jsx("option", { value: "none", children: "None" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Dimensions",
        description: "Display dimensions in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Created At",
        description: "Display generation date/time in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Source Info",
        description: "Display source image information in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Model",
        description: "Display model name in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Positive",
        description: "Display positive prompt in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Max Positive Prompt Lines",
        description: "Maximum number of lines to display for the positive prompt.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: a,
            min: 1,
            max: 100,
            onChange: (o) => r(
              "viewer.details.max_positive_prompt_lines",
              o.target.value,
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
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Negative",
        description: "Display negative prompt in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Max Negative Prompt Lines",
        description: "Maximum number of lines to display for the negative prompt.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
            min: 1,
            max: 100,
            onChange: (o) => r(
              "viewer.details.max_negative_prompt_lines",
              o.target.value,
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
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Tags",
        description: "Display tags in the details panel.",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    )
  ] })
] }), pd = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: s,
    handleClose: a,
    handleToggle: u,
    handleNumberChange: o,
    handleNumberBlur: c,
    handleResetShortcuts: m,
    handleViewTrash: _,
    validateShortcut: y,
    // Input states
    initialLoadCountInput: g,
    maxLoadCountInput: x,
    lineageMaxDepthInput: S,
    thumbnailWindowSizeInput: j,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: v,
    maxNegativePromptLinesInput: w,
    fullscreenMaxPositivePromptLinesInput: C,
    fullscreenMaxNegativePromptLinesInput: M,
    thumbnailSizeInput: b
  } = qm(), R = h.useRef(!1), E = (k) => {
    k.target === k.currentTarget && (R.current = !0);
  }, z = (k) => {
    k.target === k.currentTarget && R.current && a(), R.current = !1;
  }, V = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], re = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ i.jsx(
          th,
          {
            localSettings: n,
            handleNumberChange: o,
            handleNumberBlur: c,
            handleToggle: u,
            setLocalSettings: r,
            handleViewTrash: _,
            lineageMaxDepthInput: S,
            trashRetentionDaysInput: d,
            autoLinkPhashThresholdInput: f,
            suggestPhashThresholdInput: p
          }
        );
      case "Gallery":
        return /* @__PURE__ */ i.jsx(
          Zm,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: u,
            handleNumberChange: o,
            handleNumberBlur: c,
            thumbnailSizeInput: b,
            initialLoadCountInput: g,
            maxLoadCountInput: x
          }
        );
      case "View":
        return /* @__PURE__ */ i.jsx(
          nh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: u,
            handleNumberChange: o,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: j,
            maxPositivePromptLinesInput: v,
            maxNegativePromptLinesInput: w
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ i.jsx(
          Jm,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: u,
            handleNumberChange: o,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: C,
            maxNegativePromptLinesInput: M
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ i.jsx(
          eh,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: s,
            validateShortcut: y,
            handleToggle: u,
            handleResetShortcuts: m
          }
        );
      default:
        return null;
    }
  };
  return Pe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: E,
        onMouseUp: z,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (k) => k.stopPropagation(),
            children: [
              /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ i.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: a,
                    children: /* @__PURE__ */ i.jsx(Ee, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ i.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ i.jsx("div", { className: "meld-tabs", children: V.map((k) => /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === k.id ? "active" : ""}`,
                    onClick: () => t(k.id),
                    children: k.label
                  },
                  k.id
                )) }) }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: re() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, ot = "none", md = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Le(), [s, a] = h.useState([]), [u, o] = h.useState(t), [c, m] = h.useState(""), [_, y] = h.useState(!0), [g, x] = h.useState(!1), S = h.useRef(null), j = e.length > 1, d = h.useRef(!1), f = (E) => {
    E.target === E.currentTarget && (d.current = !0);
  }, p = (E) => {
    E.target === E.currentTarget && d.current && n(), d.current = !1;
  }, v = h.useCallback(async () => {
    y(!0);
    try {
      const E = await ka();
      a(E);
    } catch (E) {
      console.error("Failed to fetch tags:", E);
    } finally {
      y(!1);
    }
  }, []);
  h.useEffect(() => {
    v();
  }, [v]), h.useEffect(() => {
    S.current && S.current.focus();
    const E = (z) => {
      z.key === "Escape" && (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", E, { capture: !0 }), () => window.removeEventListener("keydown", E, {
      capture: !0
    });
  }, [n]);
  const w = h.useMemo(() => s.filter(
    (E) => E.name.toLowerCase().includes(c.toLowerCase()) && !u.includes(E.name)
  ), [s, c, u]), C = (E) => {
    const z = E.trim();
    if (z.toLowerCase() === ot) {
      alert(
        `Tag name '${ot}' is reserved for search and cannot be used.`
      );
      return;
    }
    z && !u.includes(z) && (o([...u, z]), m(""));
  }, M = (E) => {
    o(u.filter((z) => z !== E));
  }, b = async () => {
    x(!0);
    try {
      if (j) {
        const E = u.filter((V) => !t.includes(V)), z = t.filter(
          (V) => !u.includes(V)
        );
        await Ei(e, E, z);
      } else
        await Nm(e[0], u);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (E) {
      console.error("Failed to update tags:", E), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, R = (E) => {
    E.key === "Enter" && c.trim() ? (E.preventDefault(), E.stopPropagation(), C(c.trim())) : E.key === "Escape" && (E.preventDefault(), E.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Pe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: p,
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (E) => E.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ i.jsx(cn, { size: 18 }),
              /* @__PURE__ */ i.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ i.jsx(Ee, { size: 20 }) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-body", children: [
            j && /* @__PURE__ */ i.jsx(
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
            /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: j ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: u.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : u.map((E) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                E,
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => M(E),
                    children: /* @__PURE__ */ i.jsx(Ee, { size: 12 })
                  }
                )
              ] }, E)) })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ i.jsx(On, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: S,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (E) => m(E.target.value),
                    onKeyDown: R
                  }
                ),
                c.trim() && !u.includes(c.trim()) && /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => C(c),
                    children: [
                      /* @__PURE__ */ i.jsx(_a, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : w.length === 0 ? c ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : w.map((E) => /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => C(E.name),
                  children: E.name
                },
                E.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-secondary",
                onClick: n,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: b,
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
}, rh = async () => {
  const e = await H.fetchApi("/meld/workflows");
  return q(e);
}, lh = async (e) => {
  const t = await H.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return q(t);
}, hd = ({
  images: e,
  onExecute: t
}) => {
  var f;
  const { dispatch: n } = Le(), [r, l] = h.useState([]), [s, a] = h.useState(!0), [u, o] = h.useState(null), [c, m] = h.useState(!1), _ = h.useMemo(() => [...r].sort((p, v) => p.valid !== v.valid ? p.valid ? -1 : 1 : p.name.localeCompare(v.name)), [r]), y = h.useCallback(async () => {
    try {
      a(!0);
      const p = await rh();
      l(p), o(null);
    } catch (p) {
      o(p instanceof Error ? p.message : String(p));
    } finally {
      a(!1);
    }
  }, []);
  h.useEffect(() => {
    y();
  }, [y]);
  const g = h.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]), x = h.useRef(!1), S = h.useCallback((p) => {
    p.target === p.currentTarget && (x.current = !0);
  }, []), j = h.useCallback(
    (p) => {
      p.target === p.currentTarget && x.current && g(), x.current = !1;
    },
    [g]
  );
  h.useEffect(() => {
    const p = (v) => {
      v.key === "Escape" && g();
    };
    return window.addEventListener("keydown", p), () => window.removeEventListener("keydown", p);
  }, [g]);
  const d = async (p) => {
    if (!c)
      try {
        m(!0), await t(p), g();
      } catch (v) {
        o(v instanceof Error ? v.message : String(v)), m(!1);
      }
  };
  return Pe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: S,
        onMouseUp: j,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--medium",
            onClick: (p) => p.stopPropagation(),
            children: [
              /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ i.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ i.jsx(sd, { size: 20, color: "var(--meld-accent-color)" }),
                  "Run with Workflow"
                ] }),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: g,
                    children: /* @__PURE__ */ i.jsx(Ee, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: s ? /* @__PURE__ */ i.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ i.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ i.jsx("span", { children: "Loading workflows..." })
              ] }) : u ? /* @__PURE__ */ i.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ i.jsx(Zp, { size: 20 }),
                /* @__PURE__ */ i.jsx("span", { children: u })
              ] }) : r.length === 0 ? /* @__PURE__ */ i.jsx(
                "div",
                {
                  style: {
                    padding: "40px",
                    textAlign: "center",
                    color: "var(--meld-text-secondary)"
                  },
                  children: "No workflows found in ComfyUI/user/default/workflows"
                }
              ) : /* @__PURE__ */ i.jsxs("div", { className: "meld-workflow-list", children: [
                /* @__PURE__ */ i.jsxs(
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
                      /* @__PURE__ */ i.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (f = e[0]) == null ? void 0 : f.filename }),
                      ". Only workflows with exactly one",
                      " ",
                      /* @__PURE__ */ i.jsx("strong", { children: "Meld Image Loader" }),
                      " node are supported."
                    ]
                  }
                ),
                _.map((p) => /* @__PURE__ */ i.jsxs(
                  "div",
                  {
                    className: `meld-workflow-item ${p.valid ? "" : "meld-workflow-item--invalid"}`,
                    onClick: () => p.valid && !c && d(p.name),
                    title: p.reason || "Click to run",
                    children: [
                      /* @__PURE__ */ i.jsxs("div", { className: "meld-workflow-item__info", children: [
                        /* @__PURE__ */ i.jsx("div", { className: "meld-workflow-item__name", children: p.name }),
                        !p.valid && /* @__PURE__ */ i.jsx("div", { className: "meld-workflow-item__reason", children: p.reason })
                      ] }),
                      p.valid && /* @__PURE__ */ i.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary meld-btn-small",
                          disabled: c,
                          onClick: (v) => {
                            v.stopPropagation(), d(p.name);
                          },
                          children: [
                            /* @__PURE__ */ i.jsx(xa, { size: 14 }),
                            c ? "Queuing..." : "Run"
                          ]
                        }
                      )
                    ]
                  },
                  p.name
                ))
              ] }) }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: g,
                  disabled: c,
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
}, gd = () => ({ executeWorkflow: h.useCallback(
  async (t, n) => {
    var c, m, _, y;
    const r = await lh(t);
    let l = null, s = !1;
    if (r.nodes && Array.isArray(r.nodes)) {
      s = !0;
      const g = r.nodes.find(
        (x) => x.type === "MeldImageLoader"
      );
      g && (l = String(g.id));
    } else
      for (const g in r)
        if (r[g].class_type === "MeldImageLoader") {
          l = g;
          break;
        }
    if (!l)
      throw new Error(
        "Meld Image Loader node not found in the selected workflow."
      );
    let a = n.filename;
    if (n.subfolder && (a = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (a = `${a} [${n.type}]`), s) {
      const g = window.app, x = t.replace(/\.json$/i, "");
      let S = !1;
      const j = document.querySelectorAll(".workflow-tab");
      for (const p of Array.from(j)) {
        const v = p.querySelector(".workflow-label"), w = ((c = v == null ? void 0 : v.textContent) == null ? void 0 : c.trim()) || ((m = p.textContent) == null ? void 0 : m.trim()) || "";
        if (w === x || w === t || w.startsWith(`${x} `) || w.startsWith(`${x}•`)) {
          p.click(), S = !0;
          break;
        }
      }
      S || await g.loadGraphData(r, !0, !0, t), await new Promise((p) => setTimeout(p, 200));
      const f = g.graph._nodes.find(
        (p) => String(p.id) === l || p.type === "MeldImageLoader"
      );
      if (f) {
        const p = (_ = f.widgets) == null ? void 0 : _.find((v) => v.name === "image");
        p && (p.value = a), g.graph.setDirtyCanvas(!0, !0);
      }
      try {
        await g.queuePrompt(0);
        return;
      } catch (p) {
        throw console.error("Failed to queue workflow:", p), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const u = JSON.parse(JSON.stringify(r));
    u[l].inputs.image = a;
    const o = await H.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: u,
        client_id: H.clientId
      })
    });
    if (!o.ok) {
      const g = await o.json();
      throw new Error(((y = g.error) == null ? void 0 : y.message) || "Failed to queue workflow");
    }
    return await o.json();
  },
  []
) }), yd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: s } = Le(), a = h.useRef(!0);
  h.useEffect(() => () => {
    a.current = !1;
  }, []);
  const u = h.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), o = h.useMemo(
    () => l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
      (d) => d.exists !== !1 && (l.settings["gallery.show_parent_images"] || !d.has_children || u)
    ),
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      u
    ]
  ), c = h.useRef(l.viewerImageId);
  h.useEffect(() => {
    c.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const m = h.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]), _ = h.useRef(!1), y = h.useCallback((d) => {
    d.target === d.currentTarget && (_.current = !0);
  }, []), g = h.useCallback(
    (d) => {
      d.target === d.currentTarget && _.current && m(), _.current = !1;
    },
    [m]
  ), x = h.useCallback(
    (d) => {
      if (!a.current) return;
      const f = c.current;
      if (f === null || !d.has(f))
        return;
      const p = o.findIndex(
        (w) => w.id === f
      );
      if (p === -1) return;
      let v = !1;
      for (let w = p + 1; w < o.length; w++)
        if (!d.has(o[w].id)) {
          s({
            type: "OPEN_VIEWER",
            payload: { id: o[w].id, mode: l.viewerMode }
          }), v = !0;
          break;
        }
      if (!v) {
        for (let w = p - 1; w >= 0; w--)
          if (!d.has(o[w].id)) {
            s({
              type: "OPEN_VIEWER",
              payload: { id: o[w].id, mode: l.viewerMode }
            }), v = !0;
            break;
          }
      }
      v || s({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, o, s]
  );
  h.useEffect(() => {
    const d = (f) => {
      f.key === "Escape" && m();
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [m]);
  const S = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e), f = o.filter(
        (p) => d.has(p.id)
      );
      if (x(d), await ki(e, n), !a.current) return;
      !n && r && r(f), s({ type: "REMOVE_IMAGES", payload: e }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (d) {
      s({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  }, j = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e);
      for (const p of e) {
        const v = await ji(p);
        if (!a.current) return;
        for (const w of v)
          d.add(w.id);
      }
      const f = o.filter(
        (p) => d.has(p.id)
      );
      if (x(d), await ki(Array.from(d), n), !a.current) return;
      !n && r && r(f), s({
        type: "REMOVE_IMAGES",
        payload: Array.from(d)
      }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (d) {
      s({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Pe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: g,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (d) => d.stopPropagation(),
            children: [
              /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ i.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ i.jsx(Fn, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: m,
                    children: /* @__PURE__ */ i.jsx(Ee, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  style: {
                    padding: "10px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                  },
                  children: [
                    /* @__PURE__ */ i.jsxs("p", { children: [
                      "Are you sure you want to",
                      " ",
                      n ? "permanently delete" : "move to trash",
                      " ",
                      /* @__PURE__ */ i.jsx("strong", { children: e.length }),
                      " selected items?"
                    ] }),
                    /* @__PURE__ */ i.jsxs(
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
                          /* @__PURE__ */ i.jsx(
                            em,
                            {
                              size: 20,
                              style: {
                                color: n ? "var(--meld-danger-color)" : "var(--meld-accent-color)",
                                flexShrink: 0
                              }
                            }
                          ),
                          /* @__PURE__ */ i.jsx("div", { style: { fontSize: "13px" }, children: n ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                            /* @__PURE__ */ i.jsx("strong", { children: "WARNING:" }),
                            " Physical files will be permanently deleted from the trash bin. This operation cannot be undone."
                          ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                            /* @__PURE__ */ i.jsx("strong", { children: "INFO:" }),
                            " Selected items will be moved to the trash bin. You can restore them later from the settings."
                          ] }) })
                        ]
                      }
                    ),
                    t && /* @__PURE__ */ i.jsxs(
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
                          /* @__PURE__ */ i.jsx("strong", { children: "Source" }),
                          " or derivatives. You can choose to delete just the selected items or all related items (lineage)."
                        ]
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-footer", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-btn meld-btn-secondary",
                    onClick: m,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: S,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ i.jsx(
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
}, vd = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Le(), [l, s] = h.useState([]), [a, u] = h.useState(!0), [o, c] = h.useState(!1), m = h.useRef(!1), _ = (w) => {
    w.target === w.currentTarget && (m.current = !0);
  }, y = (w) => {
    w.target === w.currentTarget && m.current && n({ type: "CLOSE_MODAL" }), m.current = !1;
  }, g = t.images.find((w) => w.id === e), x = h.useCallback(async () => {
    u(!0);
    try {
      const w = t.settings["gallery.suggest_phash_threshold"], C = await Cm(e, w);
      s(C);
    } catch (w) {
      console.error("Failed to load suggestions:", w);
    } finally {
      u(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    x();
  }, [x]);
  const S = async (w) => {
    if (w == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!g || w === g.parent_id) && !(g.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Ao(e, w), await od(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (C) {
        console.error("Failed to link parent:", C);
      }
  }, j = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Ao(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (w) {
        console.error("Failed to remove source:", w), alert("Failed to remove source image.");
      }
  }, d = async (w) => {
    u(!0);
    try {
      const C = await Bm(w), { id: M } = await ud({
        filename: C.name,
        subfolder: C.subfolder || "",
        type: C.type || "input"
      });
      if (M === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await S(M);
    } catch (C) {
      console.error("Failed to upload/register image:", C);
    } finally {
      u(!1);
    }
  }, f = (w) => {
    w.preventDefault(), w.stopPropagation(), c(!1);
    const C = w.dataTransfer.files[0];
    C != null && C.type.startsWith("image/") && d(C);
  };
  if (!g) return null;
  const p = l.filter((w) => w.is_source_match), v = l.filter((w) => !w.is_source_match);
  return Pe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: _,
        onMouseUp: y,
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (w) => w.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("h2", { children: [
              "Select Source for #",
              g.id
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ i.jsx(Ee, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-body", children: [
            g.parent_id && /* @__PURE__ */ i.jsxs(
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
                  /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        minWidth: 0
                      },
                      children: [
                        /* @__PURE__ */ i.jsx(fm, { size: 16, color: "var(--meld-accent-color)" }),
                        /* @__PURE__ */ i.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                              minWidth: 0
                            },
                            children: [
                              /* @__PURE__ */ i.jsx(
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
                              /* @__PURE__ */ i.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    minWidth: 0
                                  },
                                  children: [
                                    g.parent_filename && /* @__PURE__ */ i.jsx(
                                      "img",
                                      {
                                        src: Be({
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
                                    /* @__PURE__ */ i.jsxs(
                                      "div",
                                      {
                                        style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          minWidth: 0
                                        },
                                        children: [
                                          /* @__PURE__ */ i.jsx(
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
                                          /* @__PURE__ */ i.jsxs(
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
                  /* @__PURE__ */ i.jsx(
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
                      children: /* @__PURE__ */ i.jsx(dm, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: `meld-drop-zone ${o ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (w) => {
                  w.preventDefault(), w.stopPropagation(), c(!0);
                },
                onDragOver: (w) => {
                  w.preventDefault(), w.stopPropagation(), w.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (w) => {
                  w.preventDefault(), w.stopPropagation(), c(!1);
                },
                onDrop: f,
                children: [
                  /* @__PURE__ */ i.jsx(xm, { size: 32 }),
                  /* @__PURE__ */ i.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ i.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestions-container", children: [
              p.length > 0 && /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: p.map((w) => {
                  const C = w.id === g.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !C && S(w.id),
                      style: {
                        cursor: C ? "default" : "pointer",
                        ...C ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Be(w), alt: w.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: w.filename }),
                          C && /* @__PURE__ */ i.jsx(
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
                    w.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Visual Matches (pHash)" }),
                v.length > 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: v.map((w) => {
                  const C = w.id === g.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !C && S(w.id),
                      style: {
                        cursor: C ? "default" : "pointer",
                        ...C ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Be(w), alt: w.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: w.filename }),
                          /* @__PURE__ */ i.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "2px"
                              },
                              children: [
                                /* @__PURE__ */ i.jsxs("span", { className: "meld-suggestion-distance", children: [
                                  "Match:",
                                  " ",
                                  Math.round((64 - w.distance) / 64 * 100),
                                  "%"
                                ] }),
                                C && /* @__PURE__ */ i.jsx(
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
                    w.id
                  );
                }) }) : /* @__PURE__ */ i.jsx("p", { className: "meld-no-suggestions", children: "No visual matches found." })
              ] })
            ] })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, sh = () => {
  const { state: e, dispatch: t } = Le(), { executeWorkflow: n } = gd();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ i.jsx(
      hd,
      {
        images: e.activeModal.images,
        onExecute: async (r) => {
          if (e.activeModal.type === "workflow_selection")
            for (const l of e.activeModal.images)
              await n(r, l);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && Pe.createPortal(
      /* @__PURE__ */ i.jsx(vd, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Pe.createPortal(/* @__PURE__ */ i.jsx(fd, {}), document.body),
    e.activeModal.type === "settings" && Pe.createPortal(/* @__PURE__ */ i.jsx(pd, {}), document.body),
    e.activeModal.type === "tag_edit" && Pe.createPortal(
      /* @__PURE__ */ i.jsx(
        md,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Pe.createPortal(
      /* @__PURE__ */ i.jsx(
        yd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    )
  ] });
}, ja = (e, t) => {
  const n = h.useCallback(async (o) => {
    try {
      const c = await Im(o.id);
      if (!c.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        c.workflow
      ), U.log("Workflow restored successfully from Meld");
    } catch (c) {
      U.error("Error restoring workflow:", c), alert("Failed to restore workflow.");
    }
  }, []), r = h.useCallback(async (o) => {
    try {
      const c = await Mm(o.id), m = "MeldUnifiedLoader", _ = window.app, g = window.LiteGraph.createNode(m);
      if (!g) {
        console.error(`Node type ${m} not found.`), alert(
          `Node type ${m} not found. Please make sure the Meld Unified Loader node is installed.`
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
      if (g.widgets) {
        for (const [f, p] of Object.entries(x)) {
          const v = c[f];
          if (v != null) {
            const w = g.widgets.find(
              (C) => C.name === p
            );
            w && (w.value = v);
          }
        }
        const d = g.widgets.find(
          (f) => f.name === "control_after_generate"
        );
        d && (d.value = "fixed");
      }
      const S = _.canvas.ds.offset, j = _.canvas.ds.scale;
      g.pos = [(-S[0] + 400) / j, (-S[1] + 300) / j], _.graph.add(g), _.canvas.selectNode(g), _.canvas.centerOnNode(g);
    } catch (c) {
      console.error("Error adding Unified Loader:", c), alert("Failed to load settings.");
    }
  }, []), l = h.useCallback(
    (o) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [o.id],
          tags: o.tags || []
        }
      });
    },
    [t]
  ), s = h.useCallback(
    (o) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: o.id }
      });
    },
    [t]
  ), a = h.useCallback(
    (o) => {
      const c = Array.isArray(o) ? o : [o];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: c }
      });
    },
    [t]
  ), u = h.useCallback(
    async (o, c) => {
      try {
        const m = o.id, y = (await Sa([m])).restored_ids || [m];
        t({ type: "REMOVE_IMAGES", payload: y }), c == null || c();
      } catch (m) {
        t({
          type: "SET_ERROR",
          payload: m instanceof Error ? m.message : String(m)
        });
      }
    },
    [t]
  );
  return {
    handleRestoreWorkflow: n,
    handleAddUnifiedLoader: r,
    handleEditTags: l,
    handleEditSource: s,
    handleRunWithWorkflow: a,
    handleRestore: u
  };
}, wd = (e, t) => {
  const n = h.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((c) => ({
          id: c.id,
          imgSrc: Be(c)
        }));
      const s = r.parent_id;
      if (!s || !r.parent_filename) return [];
      const a = e.find((c) => c.id === s);
      let u = null;
      if (a ? u = Be(a) : u = Be({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !u) return [];
      const o = {
        id: s || null,
        imgSrc: u
      };
      if (a && l > 1) {
        const c = n(a);
        return [o, ...c].slice(0, l);
      }
      return [o];
    },
    [t, e]
  );
  return { getParentChain: n };
}, xd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Le(), l = t.selectedIds.has(e.id), s = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: a,
    handleAddUnifiedLoader: u,
    handleEditSource: o,
    handleEditTags: c,
    handleRunWithWorkflow: m
  } = ja(t, n), { getParentChain: _ } = wd(t.images, t.settings), [y, g] = h.useState(null), [x, S] = h.useState(!1), [j, d] = h.useState(null), [f, p] = h.useState(!1), v = h.useRef(null), w = async (T, O, N = !1) => {
    try {
      await navigator.clipboard.writeText(T), N ? (p(!0), setTimeout(() => p(!1), 2e3)) : (d(O), setTimeout(() => d(null), 2e3));
    } catch (K) {
      console.error("Failed to copy text: ", K);
    }
  };
  h.useEffect(() => {
    const T = (N) => {
      N.key === "Escape" && (y ? g(null) : S(!1));
    }, O = (N) => {
      v.current && !v.current.contains(N.target) && S(!1);
    };
    return window.addEventListener("keydown", T), x && document.addEventListener("mousedown", O), () => {
      window.removeEventListener("keydown", T), document.removeEventListener("mousedown", O);
    };
  }, [x, y]);
  const C = _(e), b = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, R = Be(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: s,
    popupContent: y,
    setPopupContent: g,
    isMenuOpen: x,
    setIsMenuOpen: S,
    copiedLabel: j,
    popupCopied: f,
    menuRef: v,
    parentChain: C,
    displayFilename: b,
    imgSrc: R,
    handleCopy: w,
    handleClick: (T) => {
      T.shiftKey ? (T.preventDefault(), T.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : T.ctrlKey || T.metaKey || t.selectedIds.size > 0 ? (T.preventDefault(), T.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (T) => {
      T.shiftKey ? (T.preventDefault(), T.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : T.ctrlKey || T.metaKey || t.selectedIds.size > 0 ? (T.preventDefault(), T.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (T.preventDefault(), T.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (T) => {
      (T.shiftKey || T.ctrlKey || T.metaKey || t.selectedIds.size > 0 || !T.target.closest("img.meld-image-card__thumbnail")) && T.preventDefault();
    },
    handleKeyDown: (T) => {
      (T.key === "Enter" || T.key === " ") && (T.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await a(e);
    },
    handleAddUnifiedLoader: async () => {
      await u(e);
    },
    handleEditSource: () => {
      o(e);
    },
    handleEditTags: () => {
      c(e);
    },
    handleRunWithWorkflow: () => {
      m(e);
    },
    fetchFullImageDetails: r
  };
}, ih = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  onAddUnifiedLoader: r,
  onRestoreWorkflow: l,
  onRunWithWorkflow: s,
  onEditSource: a,
  onEditTags: u
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu-container", ref: n, children: [
  /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (o) => {
        o.stopPropagation(), t(!e);
      },
      title: "Menu",
      children: /* @__PURE__ */ i.jsx(hm, { size: 16 })
    }
  ),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (o) => {
        o.stopPropagation(), r();
      },
      title: "Add Unified Loader",
      children: /* @__PURE__ */ i.jsx(zo, { size: 16 })
    }
  ),
  e && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (o) => {
          o.stopPropagation(), r(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(zo, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Add Unified Loader" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (o) => {
          o.stopPropagation(), l(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(tm, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Restore Full Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (o) => {
          o.stopPropagation(), s(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(xa, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Run with Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (o) => {
          o.stopPropagation(), a(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(gm, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit source image" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (o) => {
          o.stopPropagation(), u(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(cn, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit Tags" })
        ]
      }
    )
  ] })
] }), ah = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => Pe.createPortal(
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "meld-prompt-popup-overlay",
      onClick: (s) => {
        s.stopPropagation(), n();
      },
      children: /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: "meld-prompt-popup-content",
          onClick: (s) => s.stopPropagation(),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "meld-prompt-popup-header", children: [
              /* @__PURE__ */ i.jsx("span", { children: e }),
              /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                l ? /* @__PURE__ */ i.jsx(nd, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ i.jsx(
                  im,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  Ee,
                  {
                    className: "meld-prompt-popup-close",
                    size: 18,
                    onClick: n
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "meld-prompt-popup-text", children: t })
          ]
        }
      )
    }
  ),
  document.body
), _d = fl.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: s,
      isMenuOpen: a,
      setIsMenuOpen: u,
      copiedLabel: o,
      popupCopied: c,
      menuRef: m,
      parentChain: _,
      displayFilename: y,
      imgSrc: g,
      handleCopy: x,
      handleClick: S,
      handleContainerClick: j,
      handleMouseDown: d,
      handleKeyDown: f,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: v,
      handleEditSource: w,
      handleEditTags: C,
      handleRunWithWorkflow: M,
      fetchFullImageDetails: b
    } = xd(e);
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${a ? "meld-image-card--menu-open" : ""}`,
        onClick: j,
        onMouseDown: d,
        onKeyDown: f,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
            "img",
            {
              src: g,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: d,
              onClick: (R) => {
                R.stopPropagation(), S(R);
              }
            }
          ) }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && y,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && _.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-lineage-thumbs", children: _.map(
                (R, E) => R.imgSrc && /* @__PURE__ */ i.jsx(
                  "img",
                  {
                    src: R.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (z) => {
                      z.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: R.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: E === 0 ? "Source" : E === 1 ? "Grand-Source" : `Ancestor (S${E + 1})`,
                    alt: "source thumb"
                  },
                  R.id || E
                )
              ) })
            ] }),
            t.settings["sidebar.show_created_at"] && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Created At" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.created_at * 1e3).toLocaleString() })
            ] }),
            t.viewScope === "trash" && e.deleted_at && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__meta-item", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Deleted At" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: new Date(e.deleted_at * 1e3).toLocaleString() })
            ] }),
            t.settings["sidebar.show_model_name"] && /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (R) => {
                  R.stopPropagation();
                  const E = await b(e.id);
                  s({
                    title: "Model",
                    text: E.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${o === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (R) => {
                        R.stopPropagation();
                        const E = await b(e.id);
                        x(E.model_name || "-", "Model");
                      },
                      children: o === "Model" ? "Copied!" : "Model"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: e.model_name || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_positive_prompt"] && /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (R) => {
                  R.stopPropagation();
                  const E = await b(e.id);
                  s({
                    title: "Positive Prompt",
                    text: E.positive_prompt || E.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${o === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (R) => {
                        R.stopPropagation();
                        const E = await b(e.id);
                        x(
                          E.positive_prompt || E.positive || "-",
                          "Positive"
                        );
                      },
                      children: o === "Positive" ? "Copied!" : "Positive"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: e.positive_prompt || e.positive || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_negative_prompt"] && /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: async (R) => {
                  R.stopPropagation();
                  const E = await b(e.id);
                  s({
                    title: "Negative Prompt",
                    text: E.negative_prompt || E.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${o === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (R) => {
                        R.stopPropagation();
                        const E = await b(e.id);
                        x(
                          E.negative_prompt || E.negative || "-",
                          "Negative"
                        );
                      },
                      children: o === "Negative" ? "Copied!" : "Negative"
                    }
                  ),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-content", children: e.negative_prompt || e.negative || "-" })
                ]
              }
            ),
            t.settings["sidebar.show_tags"] && /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: "meld-image-card__meta-item meld-image-card__meta-item--clickable",
                onClick: (R) => {
                  R.stopPropagation(), C();
                },
                children: [
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((R, E) => /* @__PURE__ */ i.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: R
                    },
                    `${R}-${E}`
                  )) : /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsx(
            ih,
            {
              isMenuOpen: a,
              setIsMenuOpen: u,
              menuRef: m,
              onAddUnifiedLoader: v,
              onRestoreWorkflow: p,
              onRunWithWorkflow: M,
              onEditSource: w,
              onEditTags: C
            }
          ),
          l && /* @__PURE__ */ i.jsx(
            ah,
            {
              title: l.title,
              text: l.text,
              onClose: () => s(null),
              onCopy: (R) => x(R, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
_d.displayName = "DetailedImageCard";
const Sd = fl.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: s,
      handleClick: a
    } = xd(e);
    return /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${t ? "meld-image-card--selected" : ""}`,
        onClick: r,
        onMouseDown: l,
        onKeyDown: s,
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: n,
            className: "meld-image-card__thumbnail",
            alt: e.filename,
            loading: "lazy",
            width: e.width || void 0,
            height: e.height || void 0,
            onMouseDown: l,
            onClick: (u) => {
              u.stopPropagation(), a(u);
            }
          }
        ) })
      }
    );
  }
);
Sd.displayName = "SimpleImageCard";
const oh = ({ image: e }) => {
  const { state: t } = Le();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ i.jsx(Sd, { image: e }) : /* @__PURE__ */ i.jsx(_d, { image: e });
}, uh = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [s, a] = h.useState(!1), u = h.useRef(null);
  return h.useEffect(() => {
    const o = new IntersectionObserver(
      ([m]) => {
        m.isIntersecting && a(!0);
      },
      { rootMargin: n }
    ), c = u.current;
    return c && o.observe(c), () => {
      c && o.unobserve(c);
    };
  }, [n]), /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: u,
      className: r,
      style: {
        minHeight: `${t}px`,
        ...l
      },
      children: s ? e : null
    }
  );
}, ch = () => {
  const { state: e, dispatch: t } = Le(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Xm(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (m) {
      console.error("Failed to cancel scan:", m);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, s = n.progress.phase === "linking", { current: a, total: u } = n.progress, o = u > 0 ? a / u : 0, c = s ? 50 + Math.round(o * 50) : Math.round(o * 50);
  return /* @__PURE__ */ i.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-progress-compact", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ i.jsx("div", { className: "meld-scan-status-text-compact", children: n.shouldCancel ? /* @__PURE__ */ i.jsx("span", { className: "meld-status-cancelling", children: "Cancelling..." }) : s ? /* @__PURE__ */ i.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ i.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ i.jsxs("div", { className: "meld-progress-stats-compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-progress-bar",
        style: { width: `${c}%` }
      }
    ) }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ i.jsx(vm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ i.jsx(sm, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ i.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-ok-compact",
        onClick: l,
        children: "OK"
      }
    )
  ] }) });
}, dh = () => {
  const { state: e, refreshFavorites: t } = Le(), [n, r] = h.useState(!1), [l, s] = h.useState(null), [a, u] = h.useState(null), [o, c] = h.useState(""), [m, _] = h.useState("");
  h.useEffect(() => {
    if (l) {
      const j = setTimeout(() => s(null), 3e3);
      return () => clearTimeout(j);
    }
  }, [l]);
  const y = h.useCallback(
    async (j, d, f) => {
      j.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${f}"?`;
      if (window.confirm(p))
        try {
          await Oo(d), await t();
        } catch (v) {
          U.error("Failed to delete favorite", v);
        }
    },
    [t]
  ), g = h.useCallback(
    (j, d) => {
      j.stopPropagation(), u(d), c(d.name), _(d.query);
    },
    []
  ), x = h.useCallback(async () => {
    if (!(!a || !o.trim() || !m.trim()))
      try {
        r(!0), await zm(
          a.id,
          o,
          m
        ), await t(), u(null), s("Favorite updated.");
      } catch (j) {
        U.error("Failed to update favorite", j), s("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [a, o, m, t]), S = h.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (d) => d.query === e.searchQuery
    )) {
      const d = e.favorites.find((f) => f.query === e.searchQuery);
      if (d) {
        r(!0);
        try {
          await Oo(d.id), await t(), s("Favorite removed.");
        } catch (f) {
          U.error("Failed to delete favorite:", f);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Rm(e.searchQuery, e.searchQuery), await t(), s(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (d) {
      U.error("Failed to save favorite:", d);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    editingFavorite: a,
    setEditingFavorite: u,
    editFavoriteName: o,
    setEditFavoriteName: c,
    editFavoriteQuery: m,
    setEditFavoriteQuery: _,
    handleDeleteFavorite: y,
    handleEditFavorite: g,
    handleSaveEditFavorite: x,
    handleSaveFavorite: S,
    setToastMessage: s
  };
}, Ms = (e) => {
  const t = [];
  let n = "", r = !1;
  for (let l = 0; l < e.length; l++) {
    const s = e[l];
    if (s === '"')
      r = !r, n += s;
    else if (s === " " && !r)
      for (t.push(n), n = ""; l + 1 < e.length && e[l + 1] === " "; )
        l++;
    else
      n += s;
  }
  return t.push(n), t;
}, fh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Le(), [r, l] = h.useState(e.searchQuery), [s, a] = h.useState([]), [u, o] = h.useState(!1), [c, m] = h.useState([]), [_, y] = h.useState([]), g = e.settings["search.show_all_keywords"], [x, S] = h.useState(-1), [j, d] = h.useState(null), f = h.useRef(null), p = h.useRef(e.searchQuery), v = h.useCallback(async () => {
    if (_.length > 0) return;
    const L = await bm();
    y(L);
  }, [_.length]);
  h.useEffect(() => {
    Pm().then((L) => {
      d(L);
    }), g && v();
  }, [v, g]);
  const w = h.useMemo(() => {
    if (!j) return null;
    const L = j.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${L}):(.*)$`, "i");
  }, [j]), C = h.useCallback(() => {
    const L = !g;
    L && v(), n("search.show_all_keywords", L);
  }, [g, v, n]), M = r !== p.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      m([]);
      return;
    }
    Lm().then((L) => {
      m(L);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var L;
    (L = f.current) == null || L.focus();
  }, []);
  const b = h.useCallback(
    (L, Q = !0) => {
      p.current !== L && (U.log("SearchBar: triggering search", { query: L }), t({ type: "SET_SEARCH_QUERY", payload: L }), Q && o(!1), p.current = L);
    },
    [t]
  );
  h.useEffect(() => {
    const L = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !w) {
        a([]), o(!1);
        return;
      }
      const Q = Ms(r), I = Q[Q.length - 1];
      if (I) {
        const T = I.match(w);
        if (T) {
          const O = T[1].toLowerCase();
          let N = T[2];
          N.startsWith('"') && (N = N.substring(1)), N.endsWith('"') && (N = N.substring(0, N.length - 1));
          const K = await Tm(N, O);
          a(K), o(K.length > 0), S(-1);
        } else {
          const O = I.replace(/^([-!])/, "").toLowerCase();
          if (O && j) {
            const N = j.all_prefixes.filter((K) => K.startsWith(O)).map((K) => ({
              type: K,
              value: "",
              count: 0
            }));
            if (N.length > 0) {
              a(N), o(!0), S(-1);
              return;
            }
          }
          a([]), o(!1);
        }
      } else
        a([]), o(!1);
    }, 300);
    return () => clearTimeout(L);
  }, [
    r,
    e.settings["search.input_suggest"],
    w,
    j
  ]);
  const R = h.useCallback(
    (L) => {
      var ye;
      const Q = Ms(r), T = (Q.pop() || "").match(/^([-!])/), O = T ? T[1] : "", K = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(L.type);
      if (L.value === "") {
        const F = `${[...Q, `${O}${L.type}:`].join(" ").trim()}`;
        l(F);
      } else {
        const F = K ? L.value : `"${L.value}"`, Z = `${[
          ...Q,
          `${O}${L.type}:${F}`
        ].join(" ").trim()} `;
        l(Z), a([]), o(!1);
      }
      (ye = f.current) == null || ye.focus();
    },
    [r, j]
  ), E = (L) => {
    L.key === "Enter" ? b(r) : L.key === "Tab" ? u && x >= 0 && (R(s[x]), L.preventDefault()) : L.key === "ArrowDown" ? u && (S((Q) => Math.min(Q + 1, s.length - 1)), L.preventDefault()) : L.key === "ArrowUp" ? u && (S((Q) => Math.max(Q - 1, -1)), L.preventDefault()) : L.key === "Escape" && o(!1);
  }, z = h.useCallback(() => {
    l(""), b("");
  }, [b]), V = h.useCallback(
    (L, Q, I = !1) => {
      var ye;
      if (I) {
        const F = `${L}:`;
        l(F), (ye = f.current) == null || ye.focus();
        return;
      }
      const N = ((j == null ? void 0 : j.no_quote_prefixes) || []).includes(L) ? Q : `"${Q}"`, K = `${L}:${N}`;
      l(K), b(K);
    },
    [b, j]
  ), re = h.useCallback(
    (L) => {
      l(L), L || b("");
    },
    [b]
  ), k = h.useCallback(() => {
    if (r === p.current || !w)
      return;
    const L = Ms(r), Q = L[L.length - 1];
    if (!Q) return;
    const I = !!Q.match(w), T = Q.replace(/^([-!])/, "").toLowerCase(), O = T && (j == null ? void 0 : j.all_prefixes.some((N) => N.startsWith(T)));
    (I || O) && o(!0);
  }, [r, w, j]), B = h.useCallback(() => {
    setTimeout(() => o(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: s,
    showSuggestions: u,
    setShowSuggestions: o,
    searchSuggestions: c,
    allKeywords: _,
    showAllKeywords: g,
    toggleShowAllKeywords: C,
    selectedIndex: x,
    setSelectedIndex: S,
    inputRef: f,
    isQueryChanged: M,
    handleSearch: b,
    handleKeyDown: E,
    applySuggestion: R,
    clearSearch: z,
    applySearchSuggestion: V,
    handleInputChange: re,
    handleInputFocus: k,
    handleInputBlur: B
  };
}, ph = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, s] = h.useState(!1), [a, u] = h.useState(!1), [o, c] = h.useState(!1);
  return /* @__PURE__ */ i.jsxs(
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
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      children: [
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              flex: 1
            },
            children: [
              /* @__PURE__ */ i.jsx(
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
              e.name !== e.query && /* @__PURE__ */ i.jsx(
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
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flexShrink: 0
            },
            children: [
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  onClick: (m) => n(m, e),
                  style: {
                    background: "none",
                    border: "none",
                    color: a ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
                    backgroundColor: a ? "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))" : "transparent",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.2s"
                  },
                  onMouseEnter: () => u(!0),
                  onMouseLeave: () => u(!1),
                  title: "Edit favorite",
                  children: /* @__PURE__ */ i.jsx(ad, { size: 14 })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  onClick: (m) => r(m, e.id, e.name),
                  style: {
                    background: "none",
                    border: "none",
                    color: o ? "var(--meld-danger-color)" : "var(--meld-text-secondary)",
                    backgroundColor: o ? "var(--comfy-input-bg-active, rgba(255,0,0,0.1))" : "transparent",
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
                  children: /* @__PURE__ */ i.jsx(Fn, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Fo = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ i.jsx(cn, { size: 12 });
    case "model":
      return /* @__PURE__ */ i.jsx(rm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ i.jsx(wm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ i.jsx(lm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ i.jsx(td, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ i.jsx(ed, { size: 12 });
    case "sort":
      return /* @__PURE__ */ i.jsx(nm, { size: 12 });
    default:
      return null;
  }
}, mh = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: s,
  searchQuery: a,
  searchSuggestions: u,
  allKeywords: o,
  showAllKeywords: c,
  toggleShowAllKeywords: m,
  applySearchSuggestion: _,
  favorites: y,
  onSelectFavorite: g,
  onEditFavorite: x,
  onDeleteFavorite: S
}) => {
  const j = (v, w, C) => /* @__PURE__ */ i.jsxs(
    "button",
    {
      type: "button",
      onClick: () => _(v.type, v.value, C === "all"),
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
      onMouseEnter: (M) => {
        M.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", M.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", M.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (M) => {
        M.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", M.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", M.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ i.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Fo(v.type)
          }
        ),
        /* @__PURE__ */ i.jsx(
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
        C !== "all" && /* @__PURE__ */ i.jsx(
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
    `${C}-${v.type}:${v.value}:${w}`
  ), d = () => !e || t.length === 0 ? null : /* @__PURE__ */ i.jsx(
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
      children: t.map((v, w) => /* @__PURE__ */ i.jsx(
        "div",
        {
          onMouseDown: (C) => {
            C.preventDefault(), l(v);
          },
          onMouseEnter: () => r(w),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: w === n ? "var(--comfy-menu-bg, #333)" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)"
          },
          children: /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: Fo(v.type)
              }
            ),
            /* @__PURE__ */ i.jsxs(
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
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: v.value === ot ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: v.value === ot ? "bold" : "normal"
                },
                children: v.value === ot ? v.type === "tag" ? `Untagged (${ot})` : `No ${v.type} (${ot})` : v.value
              }
            )
          ] })
        },
        `${v.type}:${v.value}`
      ))
    }
  ), f = () => u.length === 0 || s && s === a ? null : /* @__PURE__ */ i.jsxs(
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
        /* @__PURE__ */ i.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px"
            },
            children: u.map(
              (v, w) => j(v, w, "quick")
            )
          }
        ),
        /* @__PURE__ */ i.jsxs(
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
              /* @__PURE__ */ i.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 4px"
                  },
                  children: [
                    /* @__PURE__ */ i.jsx(
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
                    /* @__PURE__ */ i.jsx(
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
                        children: c ? "Show Less" : "Show More"
                      }
                    )
                  ]
                }
              ),
              c && /* @__PURE__ */ i.jsx(
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
                  children: Array.from(new Set(o.map((v) => v.type))).map(
                    (v, w) => j({ type: v, value: "" }, w, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), p = () => y.length === 0 || s && s === a ? null : /* @__PURE__ */ i.jsxs(
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
        /* @__PURE__ */ i.jsxs(
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
              /* @__PURE__ */ i.jsx(Si, { size: 12, fill: "var(--meld-text-secondary)" }),
              "Favorites"
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            },
            children: y.map((v) => /* @__PURE__ */ i.jsx(
              ph,
              {
                fav: v,
                onSelect: g,
                onEdit: x,
                onDelete: S
              },
              v.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      style: { position: "relative" },
      onMouseDown: (v) => {
        v.preventDefault();
      },
      children: [
        d(),
        f(),
        p()
      ]
    }
  );
}, hh = () => {
  const { state: e } = Le(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: s,
    allKeywords: a,
    showAllKeywords: u,
    toggleShowAllKeywords: o,
    selectedIndex: c,
    setSelectedIndex: m,
    inputRef: _,
    isQueryChanged: y,
    handleSearch: g,
    handleKeyDown: x,
    applySuggestion: S,
    clearSearch: j,
    applySearchSuggestion: d,
    handleInputChange: f,
    handleInputFocus: p,
    handleInputBlur: v
  } = fh(), {
    isSaving: w,
    toastMessage: C,
    editingFavorite: M,
    setEditingFavorite: b,
    editFavoriteName: R,
    setEditFavoriteName: E,
    editFavoriteQuery: z,
    setEditFavoriteQuery: V,
    handleDeleteFavorite: re,
    handleEditFavorite: k,
    handleSaveEditFavorite: B,
    handleSaveFavorite: L
  } = dh(), Q = h.useRef(null), I = h.useRef(!1);
  h.useEffect(() => {
    M && Q.current && Q.current.focus();
  }, [M]);
  const T = (N) => {
    N.target === N.currentTarget && (I.current = !0);
  }, O = (N) => {
    N.target === N.currentTarget && I.current && b(null), I.current = !1;
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "meld-search-bar-wrapper",
            style: { position: "relative", width: "100%" },
            children: [
              C && /* @__PURE__ */ i.jsx(
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
                  children: C
                }
              ),
              /* @__PURE__ */ i.jsxs(
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
                    /* @__PURE__ */ i.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => g(t),
                        style: {
                          background: y ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: y ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: y ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (N) => {
                          N.currentTarget.style.transform = "translateY(-1px)", y ? (N.currentTarget.style.filter = "brightness(1.15)", N.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : N.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (N) => {
                          N.currentTarget.style.transform = "none", y ? (N.currentTarget.style.filter = "none", N.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : N.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (N) => {
                          N.currentTarget.style.transform = "translateY(1px)", N.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (N) => {
                          N.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ i.jsx(
                            On,
                            {
                              size: 16,
                              color: y ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: y ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          y && /* @__PURE__ */ i.jsx(
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
                    /* @__PURE__ */ i.jsx(
                      "input",
                      {
                        ref: _,
                        type: "text",
                        value: t,
                        onChange: (N) => f(N.target.value),
                        onKeyDown: x,
                        onBlur: v,
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
                    e.searchQuery && /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: L,
                        disabled: w,
                        title: e.favorites.some((N) => N.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                        children: /* @__PURE__ */ i.jsx(
                          Si,
                          {
                            size: 16,
                            color: e.favorites.some((N) => N.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((N) => N.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ i.jsx(
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
                        children: /* @__PURE__ */ i.jsx(Ee, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                mh,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: c,
                  setSelectedIndex: m,
                  applySuggestion: S,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: s,
                  allKeywords: a,
                  showAllKeywords: u,
                  toggleShowAllKeywords: o,
                  applySearchSuggestion: d,
                  favorites: e.favorites,
                  onSelectFavorite: (N) => {
                    n(N), g(N);
                  },
                  onEditFavorite: k,
                  onDeleteFavorite: re
                }
              )
            ]
          }
        ),
        M && Pe.createPortal(
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: T,
              onMouseUp: O,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (N) => N.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ i.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ i.jsx(Si, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => b(null),
                          children: /* @__PURE__ */ i.jsx(Ee, { size: 20 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ i.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px",
                          padding: "8px 0"
                        },
                        children: [
                          /* @__PURE__ */ i.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ i.jsx(
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
                                /* @__PURE__ */ i.jsx(
                                  "input",
                                  {
                                    id: "edit-favorite-name",
                                    ref: Q,
                                    type: "text",
                                    value: R,
                                    onChange: (N) => E(N.target.value),
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
                                    onKeyDown: (N) => {
                                      N.key === "Enter" && B(), N.key === "Escape" && b(null);
                                    }
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ i.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px"
                              },
                              children: [
                                /* @__PURE__ */ i.jsx(
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
                                /* @__PURE__ */ i.jsx(
                                  "textarea",
                                  {
                                    id: "edit-favorite-query",
                                    value: z,
                                    onChange: (N) => V(N.target.value),
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
                                    onKeyDown: (N) => {
                                      N.key === "Enter" && !N.shiftKey && (N.preventDefault(), B()), N.key === "Escape" && b(null);
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-footer", children: [
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-secondary",
                          onClick: () => b(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: B,
                          disabled: w || !R.trim() || !z.trim(),
                          children: w ? "Saving..." : "Save Changes"
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
}, gh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = h.useState([]), [l, s] = h.useState(!0), [a, u] = h.useState(""), [o, c] = h.useState(""), [m, _] = h.useState(!1), [y, g] = h.useState(null), [x, S] = h.useState(""), [j, d] = h.useState(!1), f = h.useRef(null), p = h.useCallback(async () => {
    s(!0);
    try {
      const z = await ka();
      r(z);
    } catch (z) {
      console.error("Failed to fetch tags:", z);
    } finally {
      s(!1);
    }
  }, []);
  h.useEffect(() => {
    p();
  }, [p]), h.useEffect(() => {
    y !== null && f.current && (f.current.focus(), f.current.select());
  }, [y]);
  const v = async (z) => {
    z.preventDefault();
    const V = o.trim();
    if (!(!V || m)) {
      if (V.toLowerCase() === ot) {
        alert(
          `Tag name '${ot}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((re) => re.name.toLowerCase() === V.toLowerCase())) {
        alert(`Tag "${V}" already exists.`);
        return;
      }
      _(!0);
      try {
        await Wm(V), c(""), await p();
      } catch (re) {
        console.error("Failed to add tag:", re);
      } finally {
        _(!1);
      }
    }
  }, w = async (z, V) => {
    if (confirm(`Are you sure you want to delete tag "${V}"?`))
      try {
        await Vm(z), await p();
      } catch (re) {
        console.error("Failed to delete tag:", re);
      }
  }, C = (z) => {
    g(z.id), S(z.name);
  }, M = () => {
    g(null), S("");
  }, b = async (z) => {
    z.preventDefault();
    const V = x.trim();
    if (!V || y === null || j) return;
    if (V.toLowerCase() === ot) {
      alert(
        `Tag name '${ot}' is reserved for search and cannot be used.`
      );
      return;
    }
    const re = n.find((k) => k.id === y);
    if (re && re.name === V) {
      M();
      return;
    }
    if (n.some(
      (k) => k.id !== y && k.name.toLowerCase() === V.toLowerCase()
    )) {
      alert(`Tag "${V}" already exists.`);
      return;
    }
    d(!0);
    try {
      await Qm(y, V), M(), await p();
    } catch (k) {
      console.error("Failed to rename tag:", k), alert(k instanceof Error ? k.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, R = (z) => {
    t(`tag:${z}`);
  }, E = h.useMemo(() => n.filter(
    (z) => z.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ i.jsx(cn, { size: 16 }),
        /* @__PURE__ */ i.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ i.jsx(Ee, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ i.jsxs("form", { className: "meld-tag-add-form", onSubmit: v, children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: o,
            onChange: (z) => c(z.target.value),
            disabled: m
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !o.trim() || m,
            children: [
              /* @__PURE__ */ i.jsx(_a, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ i.jsx(On, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: a,
            onChange: (z) => u(z.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-list", children: E.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : E.map((z) => /* @__PURE__ */ i.jsx("div", { className: "meld-tag-item", children: y === z.id ? /* @__PURE__ */ i.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: b,
          children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: x,
                onChange: (V) => S(V.target.value),
                onKeyDown: (V) => V.key === "Escape" && M()
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !x.trim(),
                children: /* @__PURE__ */ i.jsx(nd, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: M,
                disabled: j,
                children: /* @__PURE__ */ i.jsx(Ee, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("span", { className: "meld-tag-item__name", children: z.name }),
        /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => R(z.name),
              children: /* @__PURE__ */ i.jsx(On, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => C(z),
              children: /* @__PURE__ */ i.jsx(ad, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => w(z.id, z.name),
              children: /* @__PURE__ */ i.jsx(Fn, { size: 14 })
            }
          )
        ] })
      ] }) }, z.id)) })
    ] })
  ] });
}, yh = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: s, viewerMode: a, lineageImages: u, settings: o } = e, { handleEditTags: c, handleRestore: m } = ja(e, t), { getParentChain: _ } = wd(s, o), [y, g] = h.useState(!1), [x, S] = h.useState(
    o["viewer.show_details_by_default"]
  ), [j, d] = h.useState(null), f = j ?? o["viewer.show_thumbnails"], [p, v] = h.useState(!1), [w, C] = h.useState(!1), [M, b] = h.useState(null), [R, E] = h.useState(null), [z, V] = h.useState(
    null
  ), re = h.useRef(null), k = h.useRef(!0);
  h.useEffect(() => (k.current = !0, () => {
    k.current = !1;
  }), []);
  const B = h.useRef(l);
  h.useEffect(() => {
    B.current = l;
  }, [l]);
  const L = h.useMemo(() => {
    const W = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return a === "lineage" ? u : s.filter(
      (ee) => ee.exists !== !1 && (o["gallery.show_parent_images"] || !ee.has_children || W)
    );
  }, [a, u, s, o, e.searchQuery]), Q = l === null ? -1 : L.findIndex((W) => W.id === l), I = (a === "lineage" && u.length > 0 ? u : s).find((W) => W.id === l), T = h.useCallback(
    async (W = !1) => {
      if (!I) return;
      const ee = y ? o["fullscreen.delete_mode"] : o["viewer.delete_mode"];
      if (!W && ee === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [I.id],
            hasLineage: !!(I.parent_id || I.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const D = e.viewScope === "trash", ne = /* @__PURE__ */ new Set([I.id]);
        if (ee === "lineage") {
          const G = await ji(I.id);
          for (const te of G)
            ne.add(te.id);
        }
        if (!k.current || B.current === null) return;
        if (L.length > ne.size) {
          let G = !1;
          for (let te = Q + 1; te < L.length; te++)
            if (!ne.has(L[te].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: L[te].id, mode: a }
              }), G = !0;
              break;
            }
          if (!G) {
            for (let te = Q - 1; te >= 0; te--)
              if (!ne.has(L[te].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: L[te].id, mode: a }
                }), G = !0;
                break;
              }
          }
          G || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await ki(Array.from(ne), D), !D) {
          const G = L.filter(
            (te) => ne.has(te.id)
          );
          b(G), E(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(ne) });
      } catch (D) {
        t({
          type: "SET_ERROR",
          payload: D instanceof Error ? D.message : String(D)
        });
      }
    },
    [
      I,
      y,
      o,
      e.viewScope,
      L,
      Q,
      a,
      t
    ]
  ), O = h.useCallback(() => {
    I && c(I);
  }, [I, c]), N = h.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: y } });
  }, [t, y]), K = h.useCallback(async () => {
    const W = y ? o["fullscreen.loop"] : o["viewer.loop"];
    if (Q === 0 && a === "gallery" && e.pagination.hasMore && !w && W) {
      C(!0);
      try {
        const ee = e.pagination.limit, D = e.pagination.total, ne = Math.max(0, D - ee), G = await dl(
          ne,
          ee,
          e.searchQuery
        );
        if (!k.current || (t({ type: "APPEND_IMAGES", payload: G }), B.current === null)) return;
        if (G.images.length > 0) {
          const te = G.images[G.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: te.id, mode: "gallery" }
          });
        }
      } catch (ee) {
        console.error("Failed to jump to end:", ee);
      } finally {
        C(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: y } });
  }, [
    Q,
    a,
    e.pagination,
    e.searchQuery,
    o,
    t,
    w,
    y
  ]), ye = h.useCallback(
    (W) => {
      W && "stopPropagation" in W && W.stopPropagation();
      const ee = re.current;
      ee && (document.fullscreenElement ? document.exitFullscreen() : ee.requestFullscreen().catch((D) => {
        console.error(
          `Error attempting to enable full-screen mode: ${D.message}`
        );
      }));
    },
    []
  ), F = h.useCallback(async () => {
    I && (L.length > 1 ? N() : t({ type: "CLOSE_VIEWER" }), await m(I));
  }, [I, L.length, N, m, t]), Z = h.useCallback(async () => {
    if (!M || M.length === 0) return;
    const W = M.map((D) => D.id), ee = W[0];
    try {
      const D = await Sa(W);
      if (!k.current) return;
      if (t({ type: "ADD_IMAGES", payload: M }), e.viewScope === "trash") {
        const ne = D.restored_ids || W;
        t({ type: "REMOVE_IMAGES", payload: ne });
      }
      if (b(null), !k.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: ee, mode: a }
      });
    } catch (D) {
      t({
        type: "SET_ERROR",
        payload: D instanceof Error ? D.message : String(D)
      });
    }
  }, [M, t, a, e.viewScope]), se = h.useCallback(async () => {
    if (M && M.length > 0)
      await Z();
    else if (R && R.type === "tags") {
      const { imageId: W, addTags: ee, removeTags: D } = R;
      try {
        await Ei([W], ee, D);
        const ne = (a === "lineage" ? u : s).find((G) => G.id === W);
        if (ne) {
          const G = [...ne.tags];
          for (const nt of ee)
            G.includes(nt) || G.push(nt);
          const te = G.filter((nt) => !D.includes(nt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ne, tags: te }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: W, mode: a }
          });
        }
        E(null);
      } catch (ne) {
        t({
          type: "SET_ERROR",
          payload: ne instanceof Error ? ne.message : String(ne)
        });
      }
    }
  }, [
    M,
    R,
    Z,
    s,
    u,
    a,
    t
  ]), tt = h.useCallback(
    async (W) => {
      if (!W || !I) return;
      const ee = I.id, D = [...I.tags], ne = W.split(/\s+/), G = [], te = [];
      let nt = !1, dn = !1, Dr = !1;
      for (const xe of ne)
        if (xe.startsWith("tag:")) {
          const me = xe.substring(4);
          me && !D.includes(me) && !G.includes(me) && G.push(me);
        } else if (xe.startsWith("-tag:")) {
          const me = xe.substring(5);
          me && D.includes(me) && !te.includes(me) && te.push(me);
        } else if (xe.startsWith("tag-toggle:")) {
          const me = xe.substring(11);
          me && (D.includes(me) ? te.includes(me) || te.push(me) : G.includes(me) || G.push(me));
        } else xe === "next" ? nt = !0 : xe === "prev" ? dn = !0 : xe === "delete" && (Dr = !0);
      if (G.length > 0 || te.length > 0)
        try {
          await Ei(
            [ee],
            G,
            te
          );
          const xe = [...D];
          for (const Gt of G)
            xe.includes(Gt) || xe.push(Gt);
          const me = xe.filter((Gt) => !te.includes(Gt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...I, id: ee, tags: me }
          }), E({
            type: "tags",
            imageId: ee,
            addTags: [...te],
            removeTags: [...G]
          }), b(null);
        } catch (xe) {
          console.error("Failed to update tags via shortcut:", xe);
        }
      Dr ? T(!0) : nt ? N() : dn && K();
    },
    [I, t, N, K, T]
  );
  h.useEffect(() => {
    const W = (D) => {
      var me, Gt, Ea;
      if (l === null) return;
      const ne = ((me = document.activeElement) == null ? void 0 : me.tagName) === "INPUT" || ((Gt = document.activeElement) == null ? void 0 : Gt.tagName) === "TEXTAREA" || ((Ea = document.activeElement) == null ? void 0 : Ea.isContentEditable), G = D.key === "Delete" || D.key === "Backspace", te = D.key === "ArrowRight" || D.key === "ArrowLeft", nt = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        D.key
      ), dn = D.key === "Escape", Dr = (D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z" || D.code === "KeyZ"), xe = /^[0-9]$/.test(D.key) && !D.ctrlKey && !D.metaKey && !D.altKey && D.code !== "KeyZ";
      if (G || te || nt || dn || Dr || xe)
        if (ne)
          if (dn) {
            if (e.activeModal.type !== "none") {
              D.preventDefault(), D.stopPropagation();
              return;
            }
            D.preventDefault(), D.stopPropagation(), D.stopImmediatePropagation();
          } else
            return;
        else {
          if (dn && e.activeModal.type !== "none") {
            D.preventDefault(), D.stopPropagation();
            return;
          }
          D.preventDefault(), D.stopPropagation(), D.stopImmediatePropagation();
        }
      else
        return;
      if (D.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (D.key === "ArrowRight")
        N();
      else if (D.key === "ArrowLeft")
        K();
      else if (D.key === "f" || D.key === "F")
        ye(D);
      else if (D.key === "i" || D.key === "I")
        S((ts) => !ts);
      else if (D.key === "t" || D.key === "T")
        O();
      else if ((D.key === "r" || D.key === "R") && e.viewScope === "trash")
        F();
      else if (D.key === "Delete")
        T();
      else if ((D.ctrlKey || D.metaKey) && (D.key === "z" || D.key === "Z"))
        se();
      else if (xe && !ne) {
        const ts = `viewer.shortcut.${D.key}`, ns = o[ts];
        typeof ns == "string" && ns && (V(D.key), setTimeout(() => {
          k.current && V(null);
        }, 500), tt(ns));
      }
    };
    window.addEventListener("keydown", W, { capture: !0 });
    const ee = () => {
      const D = !!document.fullscreenElement;
      g(D), S(D ? o["fullscreen.show_details_by_default"] : o["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", ee), () => {
      window.removeEventListener("keydown", W, { capture: !0 }), document.removeEventListener("fullscreenchange", ee);
    };
  }, [
    l,
    t,
    ye,
    N,
    K,
    o,
    T,
    e.activeModal.type,
    se,
    O,
    F,
    e.viewScope,
    tt
  ]), h.useEffect(() => {
    l !== null && r(l).catch((W) => {
      console.error("Failed to fetch full image details for viewer:", W);
    });
  }, [l, r]), h.useEffect(() => {
    a === "lineage" && l !== null && u.length === 0 && (v(!0), ji(l).then((W) => {
      k.current && t({ type: "SET_LINEAGE", payload: W });
    }).catch((W) => {
      console.error("Failed to fetch lineage:", W);
    }).finally(() => {
      k.current && v(!1);
    }));
  }, [a, l, u.length, t]), h.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || Q !== -1 && Q >= L.length - 15 && n();
  }, [
    l,
    L.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    Q
  ]);
  const Pr = h.useMemo(() => {
    if (!f || Q === -1) return [];
    const W = o["viewer.thumbnail_window_size"], ee = Math.floor(W / 2);
    let D = Math.max(0, Q - ee);
    const ne = Math.min(L.length, D + W);
    return ne === L.length && (D = Math.max(0, ne - W)), L.slice(D, ne).map((G, te) => ({
      img: G,
      absIndex: D + te
    }));
  }, [L, Q, o, f]), Kt = h.useMemo(() => I ? _(I) : [], [I, _]);
  return h.useEffect(() => {
    var W, ee;
    if (l !== null) {
      if (f) {
        const D = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        D && D.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((W = document.activeElement) == null ? void 0 : W.tagName) === "CANVAS" && document.activeElement.blur(), (ee = re.current) == null || ee.focus();
    }
  }, [l, f]), h.useEffect(() => {
    if (l === null || L.length === 0) return;
    const W = L.findIndex(
      (G) => G.id === l
    );
    if (W === -1) return;
    const ee = (G) => Be(G), D = [
      W + 1,
      W + 2,
      W - 1
    ], ne = setTimeout(() => {
      for (const G of D)
        if (G >= 0 && G < L.length) {
          const te = L[G], nt = new Image();
          nt.src = ee(te);
        }
    }, 150);
    return () => clearTimeout(ne);
  }, [l, L]), {
    isFullscreen: y,
    showDetails: x,
    setShowDetails: S,
    showThumbnails: f,
    setShowThumbnailsOverride: d,
    isLoadingLineage: p,
    isJumping: w,
    activeShortcutKey: z,
    lastDeletedImages: M,
    setLastDeletedImages: b,
    overlayRef: re,
    handleNext: N,
    handlePrevious: K,
    handleDelete: T,
    handleTagEdit: O,
    handleRestore: F,
    handleUndo: se,
    toggleFullscreen: ye,
    currentIndex: Q,
    currentThumbnails: L,
    image: I,
    windowedThumbnails: Pr,
    parentChain: Kt
  };
}, vh = ({
  settings: e,
  activeShortcutKey: t
}) => e["viewer.shortcut.show_cheat_sheet"] ? /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-cheat-sheet", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => {
  const r = String(n), l = e[`viewer.shortcut.${r}`];
  return typeof l == "string" && l ? /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meld-viewer-cheat-sheet__item ${t === r ? "meld-viewer-cheat-sheet__item--active" : ""}`,
      children: [
        /* @__PURE__ */ i.jsx("span", { className: "meld-viewer-cheat-sheet__key", children: n }),
        /* @__PURE__ */ i.jsx("span", { className: "meld-viewer-cheat-sheet__cmd", children: l.replace("tag-toggle:", "+/- ") })
      ]
    },
    n
  ) : null;
}) }) : null, wh = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: s
}) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: `meld-viewer-details-overlay ${t ? "meld-viewer-details-overlay--fullscreen" : ""} ${r ? "" : "meld-viewer-details-overlay--no-icons"}`,
    children: [
      (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) !== "none" && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? "Filepath" : "Filename" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-value", children: (t ? n["fullscreen.details.show_filename"] : n["viewer.details.show_filename"]) === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename })
      ] }),
      (t ? n["fullscreen.details.show_dimensions"] : n["viewer.details.show_dimensions"]) && e.width && e.height && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Dimensions" }),
        /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-value", children: [
          e.width,
          " x ",
          e.height,
          " px"
        ] })
      ] }),
      (t ? n["fullscreen.details.show_created_at"] : n["viewer.details.show_created_at"]) && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Created At" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.created_at * 1e3).toLocaleString() })
      ] }),
      e.deleted_at && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Deleted At" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-value", children: new Date(e.deleted_at * 1e3).toLocaleString() })
      ] }),
      (t ? n["fullscreen.details.show_model_name"] : n["viewer.details.show_model_name"]) && e.model_name && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Model" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-value", children: e.model_name })
      ] }),
      (t ? n["fullscreen.details.show_source"] : n["viewer.details.show_source"]) && l.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Source" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-tags", children: /* @__PURE__ */ i.jsx("div", { className: "meld-lineage-thumbs", children: l.map(
          (a, u) => a.imgSrc && /* @__PURE__ */ i.jsx(
            "img",
            {
              src: a.imgSrc,
              className: "meld-lineage-badge__parent-thumb",
              style: { cursor: "pointer" },
              loading: "lazy",
              onClick: (o) => {
                o.stopPropagation(), s({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: a.id || e.id,
                    mode: "lineage"
                  }
                });
              },
              title: u === 0 ? "Source" : u === 1 ? "Grand-Source" : `Ancestor (S${u + 1})`,
              alt: "source thumb"
            },
            a.id || u
          )
        ) }) })
      ] }),
      (t ? n["fullscreen.details.show_positive_prompt"] : n["viewer.details.show_positive_prompt"]) && (e.positive_prompt || e.positive) && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Positive" }),
        /* @__PURE__ */ i.jsx(
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
      (t ? n["fullscreen.details.show_negative_prompt"] : n["viewer.details.show_negative_prompt"]) && (e.negative_prompt || e.negative) && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Negative" }),
        /* @__PURE__ */ i.jsx(
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
      (t ? n["fullscreen.details.show_tags"] : n["viewer.details.show_tags"]) && e.tags && e.tags.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-details-item", children: [
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-label", children: "Tags" }),
        /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((a) => /* @__PURE__ */ i.jsx("span", { className: "meld-viewer-details-tag", children: a }, a)) })
      ] })
    ]
  }
), kd = h.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, s = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, u = Be(e);
    return /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${l ? "meld-viewer-thumbnail--active" : ""} ${s ? "meld-viewer-thumbnail--parent" : ""} ${a ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: { id: e.id, mode: "gallery" }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ i.jsx("img", { src: u, alt: e.filename }),
          (s || a) && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${s ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: s ? "Source Image" : "Derivative Image",
              children: s ? /* @__PURE__ */ i.jsx(td, { size: 12 }) : /* @__PURE__ */ i.jsx(ed, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
kd.displayName = "ThumbnailItem";
const xh = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: s,
  viewerMode: a
}) => /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnails-container", children: /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-thumbnails", children: [
  l ? /* @__PURE__ */ i.jsx(
    "div",
    {
      style: {
        padding: "10px",
        color: "var(--meld-text-secondary)"
      },
      children: "Loading lineage..."
    }
  ) : e.map(({ img: u }) => /* @__PURE__ */ i.jsx(
    kd,
    {
      thumb: u,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    u.id
  )),
  a === "gallery" && s && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ i.jsx(Nr, { className: "animate-spin", size: 20 }) })
] }) }), _h = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Le(), {
    isFullscreen: l,
    showDetails: s,
    setShowDetails: a,
    showThumbnails: u,
    setShowThumbnailsOverride: o,
    isLoadingLineage: c,
    isJumping: m,
    activeShortcutKey: _,
    setLastDeletedImages: y,
    overlayRef: g,
    handleNext: x,
    handlePrevious: S,
    handleTagEdit: j,
    handleRestore: d,
    toggleFullscreen: f,
    image: p,
    windowedThumbnails: v,
    parentChain: w
  } = yh({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), { executeWorkflow: C } = gd();
  if (!p) return null;
  const { viewerImageId: M, viewerMode: b } = e, R = Be(p), E = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Pe.createPortal(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: g,
        className: "meld-viewer-overlay",
        onClick: () => {
          e.activeModal.type === "none" && t({ type: "CLOSE_VIEWER" });
        },
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${u ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (z) => z.stopPropagation(),
              children: [
                E && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: d,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ i.jsx(Nr, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!u),
                      type: "button",
                      title: u ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ i.jsx(id, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: j,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ i.jsx(cn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => a(!s),
                      type: "button",
                      title: s ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ i.jsx(um, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: f,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ i.jsx(mm, { size: 20 }) : /* @__PURE__ */ i.jsx(pm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ i.jsx(Ee, { size: 20 })
                    }
                  )
                ] }),
                E && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: S,
                    type: "button",
                    disabled: m,
                    children: /* @__PURE__ */ i.jsx(rd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ i.jsx(Nr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ i.jsx(
                    "img",
                    {
                      src: R,
                      alt: p.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                E && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: x,
                    type: "button",
                    children: /* @__PURE__ */ i.jsx(ld, { size: 32 })
                  }
                ),
                s && /* @__PURE__ */ i.jsx(
                  wh,
                  {
                    image: p,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: E,
                    parentChain: w,
                    dispatch: t
                  }
                ),
                !l && u && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ i.jsx(
                  xh,
                  {
                    windowedThumbnails: v,
                    viewerImageId: M,
                    currentImage: p,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: b
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  vh,
                  {
                    settings: e.settings,
                    activeShortcutKey: _
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ i.jsx(
            hd,
            {
              images: e.activeModal.images,
              onExecute: async (z) => {
                if (e.activeModal.type === "workflow_selection")
                  for (const V of e.activeModal.images)
                    await C(z, V);
              }
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ i.jsx(
            yd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: y
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ i.jsx(vd, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ i.jsx(fd, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ i.jsx(pd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ i.jsx(
            md,
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
}, Sh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Le(), [s, a] = h.useState("gallery"), [u, o] = h.useState(""), [c, m] = h.useState(e.pagination.limit);
  h.useEffect(() => {
    m(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const _ = e.searchQuery.trim() !== "", y = h.useRef(null), g = h.useRef(null), x = h.useMemo(() => {
    const j = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((d) => e.viewScope === "trash" ? d.exists !== !1 || e.settings["gallery.trash.show_missing"] : d.exists !== !1 && (e.settings["gallery.show_parent_images"] || !d.has_children || j));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), S = h.useMemo(
    () => x.slice(0, c),
    [x, c]
  );
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && x.length === 0 && (U.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    x.length,
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
            U.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < x.length ? (U.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                x.length
              ),
              totalAvailableLocally: x.length
            }
          ), m((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (U.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : U.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: x.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), d = y.current;
    return d && j.observe(d), () => {
      d && j.unobserve(d);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    c,
    x.length,
    e.pagination.limit,
    e.images.length
  ]), h.useEffect(() => {
    const j = e.viewerImageId ?? g.current;
    if (j !== null && x.some((f) => f.id === j)) {
      const f = x.findIndex((v) => v.id === j);
      if (f >= c) {
        m(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${j}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (g.current = null));
    }
    e.viewerImageId !== null && (g.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    x,
    c,
    e.pagination.limit
  ]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: s,
    setViewMode: a,
    lastSearchQuery: u,
    setLastSearchQuery: o,
    localLimit: c,
    displayedImages: x,
    visibleImages: S,
    isSearchActive: _,
    loadMoreRef: y
  };
}, kh = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Le(), { handleRunWithWorkflow: l } = ja(e, t), s = e.selectedIds.size;
  if (s === 0) return null;
  const a = e.viewScope === "trash", u = () => {
    const c = e.images.filter(
      (_) => e.selectedIds.has(_.id)
    ), m = /* @__PURE__ */ new Set();
    for (const _ of c)
      if (_.tags)
        for (const y of _.tags)
          m.add(y);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(m)
      }
    });
  }, o = () => {
    const c = e.images.filter(
      (m) => e.selectedIds.has(m.id)
    );
    l(c);
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${a ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ i.jsxs("span", { className: "meld-bulk-bar__info", children: [
          s,
          " items selected"
        ] }),
        a ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ i.jsx(
                  Nr,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Restore"
              ]
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ i.jsx(
                  Fn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Delete Permanently"
              ]
            }
          )
        ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--edit",
              onClick: u,
              children: [
                /* @__PURE__ */ i.jsx(
                  cn,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--workflow",
              onClick: o,
              children: [
                /* @__PURE__ */ i.jsx(
                  sd,
                  {
                    size: 16,
                    style: { marginRight: "8px", verticalAlign: "middle" }
                  }
                ),
                "Run Workflow"
              ]
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--delete",
              onClick: n,
              children: [
                /* @__PURE__ */ i.jsx(
                  Fn,
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
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--cancel",
            onClick: () => t({ type: "CLEAR_SELECTION" }),
            children: [
              /* @__PURE__ */ i.jsx(Ee, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, jh = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: s,
    lastSearchQuery: a,
    setLastSearchQuery: u,
    localLimit: o,
    displayedImages: c,
    visibleImages: m,
    isSearchActive: _,
    loadMoreRef: y
  } = Sh();
  return U.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: m.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ i.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ i.jsx(Fn, { size: 14 }),
              /* @__PURE__ */ i.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ i.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (g) => r("gallery.trash.show_missing", g.target.checked)
                }
              ),
              /* @__PURE__ */ i.jsx("span", { children: "Show missing files" })
            ] }),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                type: "button",
                className: "meld-gallery__exit-trash",
                onClick: () => t({ type: "SET_VIEW_SCOPE", payload: "default" }),
                title: "Exit Trash View",
                children: [
                  /* @__PURE__ */ i.jsx(Ee, { size: 14 }),
                  /* @__PURE__ */ i.jsx("span", { children: "Exit" })
                ]
              }
            )
          ] }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-gallery__actions", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  l === "search" ? (u(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), s("gallery")) : (!e.searchQuery && a && t({
                    type: "SET_SEARCH_QUERY",
                    payload: a
                  }), s("search"));
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
                children: /* @__PURE__ */ i.jsx(On, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const x = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", x);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ i.jsx(cm, { size: 14 }) : /* @__PURE__ */ i.jsx(id, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                onClick: () => s(l === "tags" ? "gallery" : "tags"),
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
                children: /* @__PURE__ */ i.jsx(cn, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
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
                children: /* @__PURE__ */ i.jsx(am, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
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
                children: /* @__PURE__ */ i.jsx(
                  Nr,
                  {
                    size: 14,
                    className: e.isLoading ? "animate-spin" : ""
                  }
                )
              }
            ),
            /* @__PURE__ */ i.jsx(
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
                children: /* @__PURE__ */ i.jsx(ym, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ i.jsx(hh, {}) })
        ] }),
        /* @__PURE__ */ i.jsx(ch, {}),
        e.error && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ i.jsx(
          gh,
          {
            onClose: () => s("gallery"),
            onSearch: (g) => {
              t({ type: "SET_SEARCH_QUERY", payload: g }), s("search");
            }
          }
        ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : m.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: m.map((g) => {
                const x = e.settings["sidebar.thumbnail_size"] || 100, S = e.settings["gallery.view_mode"] === "grid_only", j = S && g.width && g.height ? Math.min(
                  x,
                  x * g.width / g.height
                ) + 10 : S ? x + 10 : "100%";
                return /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    "data-image-id": g.id,
                    style: {
                      width: S ? "auto" : "100%",
                      flexShrink: 0,
                      display: S ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ i.jsx(
                      uh,
                      {
                        height: S ? x + 10 : Math.max(x, 150),
                        style: {
                          width: typeof j == "number" ? `${j}px` : j,
                          minWidth: typeof j == "number" ? `${j}px` : j,
                          display: S ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ i.jsx(oh, { image: g })
                      }
                    )
                  },
                  g.id
                );
              })
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: y,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                o >= c.length && !e.pagination.hasMore && m.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx(kh, {}),
        e.viewerImageId !== null && /* @__PURE__ */ i.jsx(_h, {}),
        /* @__PURE__ */ i.jsx(sh, {})
      ]
    }
  );
};
$o.registerExtension({
  name: "Meld.UnifiedLoader",
  async beforeRegisterNodeDef(e, t, n) {
    t.name;
  },
  async nodeCreated(e) {
    if (e.comfyClass !== "MeldUnifiedLoader") return;
    const t = () => {
      var l, s;
      const n = (l = e.widgets) == null ? void 0 : l.find((a) => a.name === "positive"), r = (s = e.widgets) == null ? void 0 : s.find((a) => a.name === "negative");
      n && n.inputEl && (n.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)", n.inputEl.style.paddingLeft = "8px"), r && r.inputEl && (r.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)", r.inputEl.style.paddingLeft = "8px");
    };
    t(), setTimeout(t, 1), setTimeout(t, 100);
  }
});
const es = document.createElement("link");
es.rel = "stylesheet";
es.type = "text/css";
es.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(es);
let Jr = null, lt = null;
$o.registerExtension({
  name: "ComfyUI.Meld",
  async beforeRegisterNodeDef(e, t, n) {
    if (t.name === "MeldSaveImage") {
      const r = e.prototype.onExecuted;
      e.prototype.onExecuted = function(...l) {
        r == null || r.apply(this, l);
        const s = n.ui.meld;
        s != null && s.isVisible() && s.refresh();
      };
    }
  },
  async setup(e) {
    var t;
    try {
      const n = await cd();
      U.init(n.dev_mode), U.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), U.init(!1);
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
      }, H.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), H.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), H.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), U.log("Import completed.");
      }), H.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await ud({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (s) {
                  console.error("Failed to auto-register image:", s);
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
            U.log("render called", {
              el: n,
              galleryRoot: Jr,
              galleryContainer: lt
            }), lt || (U.log("galleryContainer not found, creating new one"), lt = document.createElement("div"), lt.id = "meld-gallery-container", lt.style.height = "100%", lt.style.width = "100%", lt.style.display = "flex", lt.style.flexDirection = "column"), n.contains(lt) || (U.log("Appending galleryContainer to el"), n.appendChild(lt)), Jr ? U.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (U.log("Creating new gallery root"), Jr = qc(lt), Jr.render(
              fl.createElement(
                Um,
                null,
                fl.createElement(jh)
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
