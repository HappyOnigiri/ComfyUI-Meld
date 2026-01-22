import { api as H } from "/scripts/api.js";
import { app as Fo } from "/scripts/app.js";
function Sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $o = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir = Symbol.for("react.element"), jd = Symbol.for("react.portal"), Ed = Symbol.for("react.fragment"), Cd = Symbol.for("react.strict_mode"), Nd = Symbol.for("react.profiler"), Id = Symbol.for("react.provider"), Md = Symbol.for("react.context"), Td = Symbol.for("react.forward_ref"), Ld = Symbol.for("react.suspense"), bd = Symbol.for("react.memo"), Pd = Symbol.for("react.lazy"), Ea = Symbol.iterator;
function Rd(e) {
  return e === null || typeof e != "object" ? null : (e = Ea && e[Ea] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Uo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Wo = Object.assign, Vo = {};
function $n(e, t, n) {
  this.props = e, this.context = t, this.refs = Vo, this.updater = n || Uo;
}
$n.prototype.isReactComponent = {};
$n.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
$n.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qo() {
}
Qo.prototype = $n.prototype;
function Ei(e, t, n) {
  this.props = e, this.context = t, this.refs = Vo, this.updater = n || Uo;
}
var Ci = Ei.prototype = new Qo();
Ci.constructor = Ei;
Wo(Ci, $n.prototype);
Ci.isPureReactComponent = !0;
var Ca = Array.isArray, Bo = Object.prototype.hasOwnProperty, Ni = { current: null }, Ho = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ko(e, t, n) {
  var r, l = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) Bo.call(t, r) && !Ho.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Ir, type: e, key: s, ref: a, props: l, _owner: Ni.current };
}
function Dd(e, t) {
  return { $$typeof: Ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ii(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ir;
}
function zd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Na = /\/+/g;
function rs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? zd("" + e.key) : t.toString(36);
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
        case jd:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + rs(a, 0) : r, Ca(l) ? (n = "", e != null && (n = e.replace(Na, "$&/") + "/"), Zr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Ii(l) && (l = Dd(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(Na, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Ca(e)) for (var o = 0; o < e.length; o++) {
    s = e[o];
    var u = r + rs(s, o);
    a += Zr(s, t, n, u, l);
  }
  else if (u = Rd(e), typeof u == "function") for (e = u.call(e), o = 0; !(s = e.next()).done; ) s = s.value, u = r + rs(s, o++), a += Zr(s, t, n, u, l);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Dr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Zr(e, r, "", "", function(s) {
    return t.call(n, s, l++);
  }), r;
}
function Ad(e) {
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
var De = { current: null }, el = { transition: null }, Od = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: el, ReactCurrentOwner: Ni };
function Go() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = { map: Dr, forEach: function(e, t, n) {
  Dr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Dr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Dr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ii(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Y.Component = $n;
Y.Fragment = Ed;
Y.Profiler = Nd;
Y.PureComponent = Ei;
Y.StrictMode = Cd;
Y.Suspense = Ld;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Od;
Y.act = Go;
Y.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Wo({}, e.props), l = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = Ni.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Bo.call(t, u) && !Ho.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Ir, type: e.type, key: l, ref: s, props: r, _owner: a };
};
Y.createContext = function(e) {
  return e = { $$typeof: Md, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Id, _context: e }, e.Consumer = e;
};
Y.createElement = Ko;
Y.createFactory = function(e) {
  var t = Ko.bind(null, e);
  return t.type = e, t;
};
Y.createRef = function() {
  return { current: null };
};
Y.forwardRef = function(e) {
  return { $$typeof: Td, render: e };
};
Y.isValidElement = Ii;
Y.lazy = function(e) {
  return { $$typeof: Pd, _payload: { _status: -1, _result: e }, _init: Ad };
};
Y.memo = function(e, t) {
  return { $$typeof: bd, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function(e) {
  var t = el.transition;
  el.transition = {};
  try {
    e();
  } finally {
    el.transition = t;
  }
};
Y.unstable_act = Go;
Y.useCallback = function(e, t) {
  return De.current.useCallback(e, t);
};
Y.useContext = function(e) {
  return De.current.useContext(e);
};
Y.useDebugValue = function() {
};
Y.useDeferredValue = function(e) {
  return De.current.useDeferredValue(e);
};
Y.useEffect = function(e, t) {
  return De.current.useEffect(e, t);
};
Y.useId = function() {
  return De.current.useId();
};
Y.useImperativeHandle = function(e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function(e, t) {
  return De.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function(e, t) {
  return De.current.useLayoutEffect(e, t);
};
Y.useMemo = function(e, t) {
  return De.current.useMemo(e, t);
};
Y.useReducer = function(e, t, n) {
  return De.current.useReducer(e, t, n);
};
Y.useRef = function(e) {
  return De.current.useRef(e);
};
Y.useState = function(e) {
  return De.current.useState(e);
};
Y.useSyncExternalStore = function(e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function() {
  return De.current.useTransition();
};
Y.version = "18.3.1";
$o.exports = Y;
var m = $o.exports;
const fl = /* @__PURE__ */ Sd(m);
var Yo = { exports: {} }, Ke = {}, Xo = { exports: {} }, qo = {};
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
  function t(I, M) {
    var O = I.length;
    I.push(M);
    e: for (; 0 < O; ) {
      var T = O - 1 >>> 1, X = I[T];
      if (0 < l(X, M)) I[T] = M, I[O] = X, O = T;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var M = I[0], O = I.pop();
    if (O !== M) {
      I[0] = O;
      e: for (var T = 0, X = I.length, we = X >>> 1; T < we; ) {
        var F = 2 * (T + 1) - 1, J = I[F], se = F + 1, tt = I[se];
        if (0 > l(J, O)) se < X && 0 > l(tt, J) ? (I[T] = tt, I[se] = O, T = se) : (I[T] = J, I[F] = O, T = F);
        else if (se < X && 0 > l(tt, O)) I[T] = tt, I[se] = O, T = se;
        else break e;
      }
    }
    return M;
  }
  function l(I, M) {
    var O = I.sortIndex - M.sortIndex;
    return O !== 0 ? O : I.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var a = Date, o = a.now();
    e.unstable_now = function() {
      return a.now() - o;
    };
  }
  var u = [], c = [], g = 1, _ = null, v = 3, h = !1, x = !1, w = !1, S = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(I) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= I) r(c), M.sortIndex = M.expirationTime, t(u, M);
      else break;
      M = n(c);
    }
  }
  function y(I) {
    if (w = !1, f(I), !x) if (n(u) !== null) x = !0, b(k);
    else {
      var M = n(c);
      M !== null && B(y, M.startTime - I);
    }
  }
  function k(I, M) {
    x = !1, w && (w = !1, p(L), L = -1), h = !0;
    var O = v;
    try {
      for (f(M), _ = n(u); _ !== null && (!(_.expirationTime > M) || I && !z()); ) {
        var T = _.callback;
        if (typeof T == "function") {
          _.callback = null, v = _.priorityLevel;
          var X = T(_.expirationTime <= M);
          M = e.unstable_now(), typeof X == "function" ? _.callback = X : _ === n(u) && r(u), f(M);
        } else r(u);
        _ = n(u);
      }
      if (_ !== null) var we = !0;
      else {
        var F = n(c);
        F !== null && B(y, F.startTime - M), we = !1;
      }
      return we;
    } finally {
      _ = null, v = O, h = !1;
    }
  }
  var C = !1, N = null, L = -1, D = 5, E = -1;
  function z() {
    return !(e.unstable_now() - E < D);
  }
  function V() {
    if (N !== null) {
      var I = e.unstable_now();
      E = I;
      var M = !0;
      try {
        M = N(!0, I);
      } finally {
        M ? ne() : (C = !1, N = null);
      }
    } else C = !1;
  }
  var ne;
  if (typeof d == "function") ne = function() {
    d(V);
  };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(), Q = j.port2;
    j.port1.onmessage = V, ne = function() {
      Q.postMessage(null);
    };
  } else ne = function() {
    S(V, 0);
  };
  function b(I) {
    N = I, C || (C = !0, ne());
  }
  function B(I, M) {
    L = S(function() {
      I(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    x || h || (x = !0, b(k));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(I) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = v;
    }
    var O = v;
    v = M;
    try {
      return I();
    } finally {
      v = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, M) {
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
    var O = v;
    v = I;
    try {
      return M();
    } finally {
      v = O;
    }
  }, e.unstable_scheduleCallback = function(I, M, O) {
    var T = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? T + O : T) : O = T, I) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = O + X, I = { id: g++, callback: M, priorityLevel: I, startTime: O, expirationTime: X, sortIndex: -1 }, O > T ? (I.sortIndex = O, t(c, I), n(u) === null && I === n(c) && (w ? (p(L), L = -1) : w = !0, B(y, O - T))) : (I.sortIndex = X, t(u, I), x || h || (x = !0, b(k))), I;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(I) {
    var M = v;
    return function() {
      var O = v;
      v = M;
      try {
        return I.apply(this, arguments);
      } finally {
        v = O;
      }
    };
  };
})(qo);
Xo.exports = qo;
var Fd = Xo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d = m, He = Fd;
function P(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Jo = /* @__PURE__ */ new Set(), cr = {};
function on(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (cr[e] = t, e = 0; e < t.length; e++) Jo.add(t[e]);
}
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ms = Object.prototype.hasOwnProperty, Ud = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ia = {}, Ma = {};
function Wd(e) {
  return Ms.call(Ma, e) ? !0 : Ms.call(Ia, e) ? !1 : Ud.test(e) ? Ma[e] = !0 : (Ia[e] = !0, !1);
}
function Vd(e, t, n, r) {
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
function Qd(e, t, n, r) {
  if (t === null || typeof t > "u" || Vd(e, t, n, r)) return !0;
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
var Mi = /[\-:]([a-z])/g;
function Ti(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Mi,
    Ti
  );
  Ce[t] = new ze(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Mi, Ti);
  Ce[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Mi, Ti);
  Ce[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ce[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ce[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Li(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Qd(t, n, l, r) && (n = null), r || l === null ? Wd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = $d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, zr = Symbol.for("react.element"), pn = Symbol.for("react.portal"), mn = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), Ts = Symbol.for("react.profiler"), Zo = Symbol.for("react.provider"), eu = Symbol.for("react.context"), Pi = Symbol.for("react.forward_ref"), Ls = Symbol.for("react.suspense"), bs = Symbol.for("react.suspense_list"), Ri = Symbol.for("react.memo"), It = Symbol.for("react.lazy"), tu = Symbol.for("react.offscreen"), Ta = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object" ? null : (e = Ta && e[Ta] || e["@@iterator"], typeof e == "function" ? e : null);
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
`), a = l.length - 1, o = s.length - 1; 1 <= a && 0 <= o && l[a] !== s[o]; ) o--;
      for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== s[o]) {
        if (a !== 1 || o !== 1)
          do
            if (a--, o--, 0 > o || l[a] !== s[o]) {
              var u = `
` + l[a].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= a && 0 <= o);
        break;
      }
    }
  } finally {
    ss = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function Bd(e) {
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
function Ps(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mn:
      return "Fragment";
    case pn:
      return "Portal";
    case Ts:
      return "Profiler";
    case bi:
      return "StrictMode";
    case Ls:
      return "Suspense";
    case bs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case eu:
      return (e.displayName || "Context") + ".Consumer";
    case Zo:
      return (e._context.displayName || "Context") + ".Provider";
    case Pi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ri:
      return t = e.displayName || null, t !== null ? t : Ps(e.type) || "Memo";
    case It:
      t = e._payload, e = e._init;
      try {
        return Ps(e(t));
      } catch {
      }
  }
  return null;
}
function Hd(e) {
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
      return Ps(t);
    case 8:
      return t === bi ? "StrictMode" : "Mode";
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
function nu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Kd(e) {
  var t = nu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Kd(e));
}
function ru(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = nu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
function La(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function lu(e, t) {
  t = t.checked, t != null && Li(e, "checked", t, !1);
}
function Ds(e, t) {
  lu(e, t);
  var n = Wt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? zs(e, t.type, n) : t.hasOwnProperty("defaultValue") && zs(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ba(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function zs(e, t, n) {
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
function As(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Pa(e, t) {
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
function su(e, t) {
  var n = Wt(t.value), r = Wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ra(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function iu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Os(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Or, au = function(e) {
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
}, Gd = ["Webkit", "ms", "Moz", "O"];
Object.keys(tr).forEach(function(e) {
  Gd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), tr[t] = tr[e];
  });
});
function ou(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || tr.hasOwnProperty(e) && tr[e] ? ("" + t).trim() : t + "px";
}
function uu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = ou(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Yd = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Fs(e, t) {
  if (t) {
    if (Yd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function $s(e, t) {
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
var Us = null;
function Di(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ws = null, Cn = null, Nn = null;
function Da(e) {
  if (e = Lr(e)) {
    if (typeof Ws != "function") throw Error(P(280));
    var t = e.stateNode;
    t && (t = Wl(t), Ws(e.stateNode, e.type, t));
  }
}
function cu(e) {
  Cn ? Nn ? Nn.push(e) : Nn = [e] : Cn = e;
}
function du() {
  if (Cn) {
    var e = Cn, t = Nn;
    if (Nn = Cn = null, Da(e), t) for (e = 0; e < t.length; e++) Da(t[e]);
  }
}
function fu(e, t) {
  return e(t);
}
function pu() {
}
var as = !1;
function mu(e, t, n) {
  if (as) return e(t, n);
  as = !0;
  try {
    return fu(e, t, n);
  } finally {
    as = !1, (Cn !== null || Nn !== null) && (pu(), du());
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
var Vs = !1;
if (kt) try {
  var Qn = {};
  Object.defineProperty(Qn, "passive", { get: function() {
    Vs = !0;
  } }), window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
} catch {
  Vs = !1;
}
function Xd(e, t, n, r, l, s, a, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var nr = !1, ml = null, hl = !1, Qs = null, qd = { onError: function(e) {
  nr = !0, ml = e;
} };
function Jd(e, t, n, r, l, s, a, o, u) {
  nr = !1, ml = null, Xd.apply(qd, arguments);
}
function Zd(e, t, n, r, l, s, a, o, u) {
  if (Jd.apply(this, arguments), nr) {
    if (nr) {
      var c = ml;
      nr = !1, ml = null;
    } else throw Error(P(198));
    hl || (hl = !0, Qs = c);
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
function hu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function za(e) {
  if (un(e) !== e) throw Error(P(188));
}
function ef(e) {
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
        if (s === n) return za(l), e;
        if (s === r) return za(l), t;
        s = s.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) n = l, r = s;
    else {
      for (var a = !1, o = l.child; o; ) {
        if (o === n) {
          a = !0, n = l, r = s;
          break;
        }
        if (o === r) {
          a = !0, r = l, n = s;
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            a = !0, n = s, r = l;
            break;
          }
          if (o === r) {
            a = !0, r = s, n = l;
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function gu(e) {
  return e = ef(e), e !== null ? yu(e) : null;
}
function yu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = yu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vu = He.unstable_scheduleCallback, Aa = He.unstable_cancelCallback, tf = He.unstable_shouldYield, nf = He.unstable_requestPaint, he = He.unstable_now, rf = He.unstable_getCurrentPriorityLevel, zi = He.unstable_ImmediatePriority, wu = He.unstable_UserBlockingPriority, gl = He.unstable_NormalPriority, lf = He.unstable_LowPriority, xu = He.unstable_IdlePriority, Ol = null, ht = null;
function sf(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function") try {
    ht.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ut = Math.clz32 ? Math.clz32 : uf, af = Math.log, of = Math.LN2;
function uf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (af(e) / of | 0) | 0;
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
    var o = a & ~l;
    o !== 0 ? r = Zn(o) : (s &= a, s !== 0 && (r = Zn(s)));
  } else a = n & ~l, a !== 0 ? r = Zn(a) : s !== 0 && (r = Zn(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, s = t & -t, l >= s || l === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ut(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function cf(e, t) {
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
function df(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - ut(s), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = cf(o, t)) : u <= t && (e.expiredLanes |= o), s &= ~o;
  }
}
function Bs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function _u() {
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
function ff(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ut(n), s = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~s;
  }
}
function Ai(e, t) {
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
var Su, Oi, ju, Eu, Cu, Hs = !1, Ur = [], Rt = null, Dt = null, zt = null, pr = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), Tt = [], pf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Oa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
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
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [l] }, t !== null && (t = Lr(t), t !== null && Oi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function mf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Rt = Bn(Rt, e, t, n, r, l), !0;
    case "dragenter":
      return Dt = Bn(Dt, e, t, n, r, l), !0;
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
function Nu(e) {
  var t = qt(e.target);
  if (t !== null) {
    var n = un(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = hu(n), t !== null) {
          e.blockedOn = t, Cu(e.priority, function() {
            ju(n);
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
    var n = Ks(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Us = r, n.target.dispatchEvent(r), Us = null;
    } else return t = Lr(n), t !== null && Oi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Fa(e, t, n) {
  tl(e) && n.delete(t);
}
function hf() {
  Hs = !1, Rt !== null && tl(Rt) && (Rt = null), Dt !== null && tl(Dt) && (Dt = null), zt !== null && tl(zt) && (zt = null), pr.forEach(Fa), mr.forEach(Fa);
}
function Hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Hs || (Hs = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, hf)));
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
  for (Rt !== null && Hn(Rt, e), Dt !== null && Hn(Dt, e), zt !== null && Hn(zt, e), pr.forEach(t), mr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Nu(n), n.blockedOn === null && Tt.shift();
}
var In = Ct.ReactCurrentBatchConfig, vl = !0;
function gf(e, t, n, r) {
  var l = le, s = In.transition;
  In.transition = null;
  try {
    le = 1, Fi(e, t, n, r);
  } finally {
    le = l, In.transition = s;
  }
}
function yf(e, t, n, r) {
  var l = le, s = In.transition;
  In.transition = null;
  try {
    le = 4, Fi(e, t, n, r);
  } finally {
    le = l, In.transition = s;
  }
}
function Fi(e, t, n, r) {
  if (vl) {
    var l = Ks(e, t, n, r);
    if (l === null) vs(e, t, r, wl, n), Oa(e, r);
    else if (mf(l, e, t, n, r)) r.stopPropagation();
    else if (Oa(e, r), t & 4 && -1 < pf.indexOf(e)) {
      for (; l !== null; ) {
        var s = Lr(l);
        if (s !== null && Su(s), s = Ks(e, t, n, r), s === null && vs(e, t, r, wl, n), s === l) break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else vs(e, t, r, null, n);
  }
}
var wl = null;
function Ks(e, t, n, r) {
  if (wl = null, e = Di(r), e = qt(e), e !== null) if (t = un(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = hu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return wl = e, null;
}
function Iu(e) {
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
      switch (rf()) {
        case zi:
          return 1;
        case wu:
          return 4;
        case gl:
        case lf:
          return 16;
        case xu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bt = null, $i = null, nl = null;
function Mu() {
  if (nl) return nl;
  var e, t = $i, n = t.length, r, l = "value" in bt ? bt.value : bt.textContent, s = l.length;
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
function $a() {
  return !1;
}
function Ge(e) {
  function t(n, r, l, s, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(s) : s[o]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Wr : $a, this.isPropagationStopped = $a, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, Ui = Ge(Un), Tr = fe({}, Un, { view: 0, detail: 0 }), vf = Ge(Tr), us, cs, Kn, Fl = fe({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (us = e.screenX - Kn.screenX, cs = e.screenY - Kn.screenY) : cs = us = 0, Kn = e), us);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : cs;
} }), Ua = Ge(Fl), wf = fe({}, Fl, { dataTransfer: 0 }), xf = Ge(wf), _f = fe({}, Tr, { relatedTarget: 0 }), ds = Ge(_f), kf = fe({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sf = Ge(kf), jf = fe({}, Un, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ef = Ge(jf), Cf = fe({}, Un, { data: 0 }), Wa = Ge(Cf), Nf = {
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
}, Mf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Tf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Mf[e]) ? !!t[e] : !1;
}
function Wi() {
  return Tf;
}
var Lf = fe({}, Tr, { key: function(e) {
  if (e.key) {
    var t = Nf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = rl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? If[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wi, charCode: function(e) {
  return e.type === "keypress" ? rl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), bf = Ge(Lf), Pf = fe({}, Fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Va = Ge(Pf), Rf = fe({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wi }), Df = Ge(Rf), zf = fe({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Af = Ge(zf), Of = fe({}, Fl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ff = Ge(Of), $f = [9, 13, 27, 32], Vi = kt && "CompositionEvent" in window, rr = null;
kt && "documentMode" in document && (rr = document.documentMode);
var Uf = kt && "TextEvent" in window && !rr, Tu = kt && (!Vi || rr && 8 < rr && 11 >= rr), Qa = " ", Ba = !1;
function Lu(e, t) {
  switch (e) {
    case "keyup":
      return $f.indexOf(t.keyCode) !== -1;
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
function bu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var hn = !1;
function Wf(e, t) {
  switch (e) {
    case "compositionend":
      return bu(t);
    case "keypress":
      return t.which !== 32 ? null : (Ba = !0, Qa);
    case "textInput":
      return e = t.data, e === Qa && Ba ? null : e;
    default:
      return null;
  }
}
function Vf(e, t) {
  if (hn) return e === "compositionend" || !Vi && Lu(e, t) ? (e = Mu(), nl = $i = bt = null, hn = !1, e) : null;
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
      return Tu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ha(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qf[e.type] : t === "textarea";
}
function Pu(e, t, n, r) {
  cu(r), t = xl(t, "onChange"), 0 < t.length && (n = new Ui("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var lr = null, gr = null;
function Bf(e) {
  Qu(e, 0);
}
function $l(e) {
  var t = vn(e);
  if (ru(t)) return e;
}
function Hf(e, t) {
  if (e === "change") return t;
}
var Ru = !1;
if (kt) {
  var fs;
  if (kt) {
    var ps = "oninput" in document;
    if (!ps) {
      var Ka = document.createElement("div");
      Ka.setAttribute("oninput", "return;"), ps = typeof Ka.oninput == "function";
    }
    fs = ps;
  } else fs = !1;
  Ru = fs && (!document.documentMode || 9 < document.documentMode);
}
function Ga() {
  lr && (lr.detachEvent("onpropertychange", Du), gr = lr = null);
}
function Du(e) {
  if (e.propertyName === "value" && $l(gr)) {
    var t = [];
    Pu(t, gr, e, Di(e)), mu(Bf, t);
  }
}
function Kf(e, t, n) {
  e === "focusin" ? (Ga(), lr = t, gr = n, lr.attachEvent("onpropertychange", Du)) : e === "focusout" && Ga();
}
function Gf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return $l(gr);
}
function Yf(e, t) {
  if (e === "click") return $l(t);
}
function Xf(e, t) {
  if (e === "input" || e === "change") return $l(t);
}
function qf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dt = typeof Object.is == "function" ? Object.is : qf;
function yr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ms.call(t, l) || !dt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ya(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xa(e, t) {
  var n = Ya(e);
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
    n = Ya(n);
  }
}
function zu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Au() {
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
function Qi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Jf(e) {
  var t = Au(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && zu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Qi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, s = Math.min(r.start, l);
        r = r.end === void 0 ? s : Math.min(r.end, l), !e.extend && s > r && (l = r, r = s, s = l), l = Xa(n, s);
        var a = Xa(
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
var Zf = kt && "documentMode" in document && 11 >= document.documentMode, gn = null, Gs = null, sr = null, Ys = !1;
function qa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ys || gn == null || gn !== pl(r) || (r = gn, "selectionStart" in r && Qi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), sr && yr(sr, r) || (sr = r, r = xl(Gs, "onSelect"), 0 < r.length && (t = new Ui("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gn)));
}
function Vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yn = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, ms = {}, Ou = {};
kt && (Ou = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
function Ul(e) {
  if (ms[e]) return ms[e];
  if (!yn[e]) return e;
  var t = yn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ou) return ms[e] = t[n];
  return e;
}
var Fu = Ul("animationend"), $u = Ul("animationiteration"), Uu = Ul("animationstart"), Wu = Ul("transitionend"), Vu = /* @__PURE__ */ new Map(), Ja = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qt(e, t) {
  Vu.set(e, t), on(t, [e]);
}
for (var hs = 0; hs < Ja.length; hs++) {
  var gs = Ja[hs], ep = gs.toLowerCase(), tp = gs[0].toUpperCase() + gs.slice(1);
  Qt(ep, "on" + tp);
}
Qt(Fu, "onAnimationEnd");
Qt($u, "onAnimationIteration");
Qt(Uu, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(Wu, "onTransitionEnd");
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
var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), np = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function Za(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Zd(r, t, void 0, e), e.currentTarget = null;
}
function Qu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Za(l, o, c), s = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, c = o.currentTarget, o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Za(l, o, c), s = u;
      }
    }
  }
  if (hl) throw e = Qs, hl = !1, Qs = null, e;
}
function ae(e, t) {
  var n = t[ei];
  n === void 0 && (n = t[ei] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Bu(t, e, 2, !1), n.add(r));
}
function ys(e, t, n) {
  var r = 0;
  t && (r |= 4), Bu(n, e, r, t);
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);
function vr(e) {
  if (!e[Qr]) {
    e[Qr] = !0, Jo.forEach(function(n) {
      n !== "selectionchange" && (np.has(n) || ys(n, !1, e), ys(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qr] || (t[Qr] = !0, ys("selectionchange", !1, t));
  }
}
function Bu(e, t, n, r) {
  switch (Iu(t)) {
    case 1:
      var l = gf;
      break;
    case 4:
      l = yf;
      break;
    default:
      l = Fi;
  }
  n = l.bind(null, t, n, e), l = void 0, !Vs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function vs(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var o = r.stateNode.containerInfo;
      if (o === l || o.nodeType === 8 && o.parentNode === l) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var u = a.tag;
        if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        a = a.return;
      }
      for (; o !== null; ) {
        if (a = qt(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = s = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  mu(function() {
    var c = s, g = Di(n), _ = [];
    e: {
      var v = Vu.get(e);
      if (v !== void 0) {
        var h = Ui, x = e;
        switch (e) {
          case "keypress":
            if (rl(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = bf;
            break;
          case "focusin":
            x = "focus", h = ds;
            break;
          case "focusout":
            x = "blur", h = ds;
            break;
          case "beforeblur":
          case "afterblur":
            h = ds;
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
            h = Ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = xf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Df;
            break;
          case Fu:
          case $u:
          case Uu:
            h = Sf;
            break;
          case Wu:
            h = Af;
            break;
          case "scroll":
            h = vf;
            break;
          case "wheel":
            h = Ff;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Ef;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Va;
        }
        var w = (t & 4) !== 0, S = !w && e === "scroll", p = w ? v !== null ? v + "Capture" : null : v;
        w = [];
        for (var d = c, f; d !== null; ) {
          f = d;
          var y = f.stateNode;
          if (f.tag === 5 && y !== null && (f = y, p !== null && (y = fr(d, p), y != null && w.push(wr(d, y, f)))), S) break;
          d = d.return;
        }
        0 < w.length && (v = new h(v, x, null, n, g), _.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", v && n !== Us && (x = n.relatedTarget || n.fromElement) && (qt(x) || x[St])) break e;
        if ((h || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, h ? (x = n.relatedTarget || n.toElement, h = c, x = x ? qt(x) : null, x !== null && (S = un(x), x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (h = null, x = c), h !== x)) {
          if (w = Ua, y = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = Va, y = "onPointerLeave", p = "onPointerEnter", d = "pointer"), S = h == null ? v : vn(h), f = x == null ? v : vn(x), v = new w(y, d + "leave", h, n, g), v.target = S, v.relatedTarget = f, y = null, qt(g) === c && (w = new w(p, d + "enter", x, n, g), w.target = f, w.relatedTarget = S, y = w), S = y, h && x) t: {
            for (w = h, p = x, d = 0, f = w; f; f = fn(f)) d++;
            for (f = 0, y = p; y; y = fn(y)) f++;
            for (; 0 < d - f; ) w = fn(w), d--;
            for (; 0 < f - d; ) p = fn(p), f--;
            for (; d--; ) {
              if (w === p || p !== null && w === p.alternate) break t;
              w = fn(w), p = fn(p);
            }
            w = null;
          }
          else w = null;
          h !== null && eo(_, v, h, w, !1), x !== null && S !== null && eo(_, S, x, w, !0);
        }
      }
      e: {
        if (v = c ? vn(c) : window, h = v.nodeName && v.nodeName.toLowerCase(), h === "select" || h === "input" && v.type === "file") var k = Hf;
        else if (Ha(v)) if (Ru) k = Xf;
        else {
          k = Gf;
          var C = Kf;
        }
        else (h = v.nodeName) && h.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (k = Yf);
        if (k && (k = k(e, c))) {
          Pu(_, k, n, g);
          break e;
        }
        C && C(e, v, c), e === "focusout" && (C = v._wrapperState) && C.controlled && v.type === "number" && zs(v, "number", v.value);
      }
      switch (C = c ? vn(c) : window, e) {
        case "focusin":
          (Ha(C) || C.contentEditable === "true") && (gn = C, Gs = c, sr = null);
          break;
        case "focusout":
          sr = Gs = gn = null;
          break;
        case "mousedown":
          Ys = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ys = !1, qa(_, n, g);
          break;
        case "selectionchange":
          if (Zf) break;
        case "keydown":
        case "keyup":
          qa(_, n, g);
      }
      var N;
      if (Vi) e: {
        switch (e) {
          case "compositionstart":
            var L = "onCompositionStart";
            break e;
          case "compositionend":
            L = "onCompositionEnd";
            break e;
          case "compositionupdate":
            L = "onCompositionUpdate";
            break e;
        }
        L = void 0;
      }
      else hn ? Lu(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (Tu && n.locale !== "ko" && (hn || L !== "onCompositionStart" ? L === "onCompositionEnd" && hn && (N = Mu()) : (bt = g, $i = "value" in bt ? bt.value : bt.textContent, hn = !0)), C = xl(c, L), 0 < C.length && (L = new Wa(L, e, null, n, g), _.push({ event: L, listeners: C }), N ? L.data = N : (N = bu(n), N !== null && (L.data = N)))), (N = Uf ? Wf(e, n) : Vf(e, n)) && (c = xl(c, "onBeforeInput"), 0 < c.length && (g = new Wa("onBeforeInput", "beforeinput", null, n, g), _.push({ event: g, listeners: c }), g.data = N));
    }
    Qu(_, t);
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
function eo(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = fr(n, s), u != null && a.unshift(wr(n, u, o))) : l || (u = fr(n, s), u != null && a.push(wr(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var rp = /\r\n?/g, lp = /\u0000|\uFFFD/g;
function to(e) {
  return (typeof e == "string" ? e : "" + e).replace(rp, `
`).replace(lp, "");
}
function Br(e, t, n) {
  if (t = to(t), to(e) !== t && n) throw Error(P(425));
}
function _l() {
}
var Xs = null, qs = null;
function Js(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Zs = typeof setTimeout == "function" ? setTimeout : void 0, sp = typeof clearTimeout == "function" ? clearTimeout : void 0, no = typeof Promise == "function" ? Promise : void 0, ip = typeof queueMicrotask == "function" ? queueMicrotask : typeof no < "u" ? function(e) {
  return no.resolve(null).then(e).catch(ap);
} : Zs;
function ap(e) {
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
function ro(e) {
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
var Wn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + Wn, xr = "__reactProps$" + Wn, St = "__reactContainer$" + Wn, ei = "__reactEvents$" + Wn, op = "__reactListeners$" + Wn, up = "__reactHandles$" + Wn;
function qt(e) {
  var t = e[mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[St] || n[mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ro(e); e !== null; ) {
        if (n = e[mt]) return n;
        e = ro(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Lr(e) {
  return e = e[mt] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Wl(e) {
  return e[xr] || null;
}
var ti = [], wn = -1;
function Bt(e) {
  return { current: e };
}
function oe(e) {
  0 > wn || (e.current = ti[wn], ti[wn] = null, wn--);
}
function ie(e, t) {
  wn++, ti[wn] = e.current, e.current = t;
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
function kl() {
  oe(Fe), oe(Te);
}
function lo(e, t, n) {
  if (Te.current !== Vt) throw Error(P(168));
  ie(Te, t), ie(Fe, n);
}
function Hu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(P(108, Hd(e) || "Unknown", l));
  return fe({}, n, r);
}
function Sl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, nn = Te.current, ie(Te, e), ie(Fe, Fe.current), !0;
}
function so(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n ? (e = Hu(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, oe(Fe), oe(Te), ie(Te, e)) : oe(Fe), ie(Fe, n);
}
var vt = null, Vl = !1, xs = !1;
function Ku(e) {
  vt === null ? vt = [e] : vt.push(e);
}
function cp(e) {
  Vl = !0, Ku(e);
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
      throw vt !== null && (vt = vt.slice(e + 1)), vu(zi, Ht), l;
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
function Gu(e, t, n) {
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
function Bi(e) {
  e.return !== null && (Yt(e, 1), Gu(e, 1, 0));
}
function Hi(e) {
  for (; e === jl; ) jl = xn[--_n], xn[_n] = null, El = xn[--_n], xn[_n] = null;
  for (; e === rn; ) rn = Ye[--Xe], Ye[Xe] = null, xt = Ye[--Xe], Ye[Xe] = null, wt = Ye[--Xe], Ye[Xe] = null;
}
var Qe = null, Ve = null, ue = !1, at = null;
function Yu(e, t) {
  var n = qe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function io(e, t) {
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
function ni(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ri(e) {
  if (ue) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!io(e, t)) {
        if (ni(e)) throw Error(P(418));
        t = At(n.nextSibling);
        var r = Qe;
        t && io(e, t) ? Yu(r, n) : (e.flags = e.flags & -4097 | 2, ue = !1, Qe = e);
      }
    } else {
      if (ni(e)) throw Error(P(418));
      e.flags = e.flags & -4097 | 2, ue = !1, Qe = e;
    }
  }
}
function ao(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Qe = e;
}
function Hr(e) {
  if (e !== Qe) return !1;
  if (!ue) return ao(e), ue = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Js(e.type, e.memoizedProps)), t && (t = Ve)) {
    if (ni(e)) throw Xu(), Error(P(418));
    for (; t; ) Yu(e, t), t = At(t.nextSibling);
  }
  if (ao(e), e.tag === 13) {
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
function Xu() {
  for (var e = Ve; e; ) e = At(e.nextSibling);
}
function Pn() {
  Ve = Qe = null, ue = !1;
}
function Ki(e) {
  at === null ? at = [e] : at.push(e);
}
var dp = Ct.ReactCurrentBatchConfig;
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
        var o = l.refs;
        a === null ? delete o[s] : o[s] = a;
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
function oo(e) {
  var t = e._init;
  return t(e._payload);
}
function qu(e) {
  function t(p, d) {
    if (e) {
      var f = p.deletions;
      f === null ? (p.deletions = [d], p.flags |= 16) : f.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), d = d.sibling;
    return null;
  }
  function r(p, d) {
    for (p = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
    return p;
  }
  function l(p, d) {
    return p = Ut(p, d), p.index = 0, p.sibling = null, p;
  }
  function s(p, d, f) {
    return p.index = f, e ? (f = p.alternate, f !== null ? (f = f.index, f < d ? (p.flags |= 2, d) : f) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function o(p, d, f, y) {
    return d === null || d.tag !== 6 ? (d = Ns(f, p.mode, y), d.return = p, d) : (d = l(d, f), d.return = p, d);
  }
  function u(p, d, f, y) {
    var k = f.type;
    return k === mn ? g(p, d, f.props.children, y, f.key) : d !== null && (d.elementType === k || typeof k == "object" && k !== null && k.$$typeof === It && oo(k) === d.type) ? (y = l(d, f.props), y.ref = Gn(p, d, f), y.return = p, y) : (y = cl(f.type, f.key, f.props, null, p.mode, y), y.ref = Gn(p, d, f), y.return = p, y);
  }
  function c(p, d, f, y) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== f.containerInfo || d.stateNode.implementation !== f.implementation ? (d = Is(f, p.mode, y), d.return = p, d) : (d = l(d, f.children || []), d.return = p, d);
  }
  function g(p, d, f, y, k) {
    return d === null || d.tag !== 7 ? (d = tn(f, p.mode, y, k), d.return = p, d) : (d = l(d, f), d.return = p, d);
  }
  function _(p, d, f) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ns("" + d, p.mode, f), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case zr:
          return f = cl(d.type, d.key, d.props, null, p.mode, f), f.ref = Gn(p, null, d), f.return = p, f;
        case pn:
          return d = Is(d, p.mode, f), d.return = p, d;
        case It:
          var y = d._init;
          return _(p, y(d._payload), f);
      }
      if (Jn(d) || Vn(d)) return d = tn(d, p.mode, f, null), d.return = p, d;
      Kr(p, d);
    }
    return null;
  }
  function v(p, d, f, y) {
    var k = d !== null ? d.key : null;
    if (typeof f == "string" && f !== "" || typeof f == "number") return k !== null ? null : o(p, d, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case zr:
          return f.key === k ? u(p, d, f, y) : null;
        case pn:
          return f.key === k ? c(p, d, f, y) : null;
        case It:
          return k = f._init, v(
            p,
            d,
            k(f._payload),
            y
          );
      }
      if (Jn(f) || Vn(f)) return k !== null ? null : g(p, d, f, y, null);
      Kr(p, f);
    }
    return null;
  }
  function h(p, d, f, y, k) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return p = p.get(f) || null, o(d, p, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case zr:
          return p = p.get(y.key === null ? f : y.key) || null, u(d, p, y, k);
        case pn:
          return p = p.get(y.key === null ? f : y.key) || null, c(d, p, y, k);
        case It:
          var C = y._init;
          return h(p, d, f, C(y._payload), k);
      }
      if (Jn(y) || Vn(y)) return p = p.get(f) || null, g(d, p, y, k, null);
      Kr(d, y);
    }
    return null;
  }
  function x(p, d, f, y) {
    for (var k = null, C = null, N = d, L = d = 0, D = null; N !== null && L < f.length; L++) {
      N.index > L ? (D = N, N = null) : D = N.sibling;
      var E = v(p, N, f[L], y);
      if (E === null) {
        N === null && (N = D);
        break;
      }
      e && N && E.alternate === null && t(p, N), d = s(E, d, L), C === null ? k = E : C.sibling = E, C = E, N = D;
    }
    if (L === f.length) return n(p, N), ue && Yt(p, L), k;
    if (N === null) {
      for (; L < f.length; L++) N = _(p, f[L], y), N !== null && (d = s(N, d, L), C === null ? k = N : C.sibling = N, C = N);
      return ue && Yt(p, L), k;
    }
    for (N = r(p, N); L < f.length; L++) D = h(N, p, L, f[L], y), D !== null && (e && D.alternate !== null && N.delete(D.key === null ? L : D.key), d = s(D, d, L), C === null ? k = D : C.sibling = D, C = D);
    return e && N.forEach(function(z) {
      return t(p, z);
    }), ue && Yt(p, L), k;
  }
  function w(p, d, f, y) {
    var k = Vn(f);
    if (typeof k != "function") throw Error(P(150));
    if (f = k.call(f), f == null) throw Error(P(151));
    for (var C = k = null, N = d, L = d = 0, D = null, E = f.next(); N !== null && !E.done; L++, E = f.next()) {
      N.index > L ? (D = N, N = null) : D = N.sibling;
      var z = v(p, N, E.value, y);
      if (z === null) {
        N === null && (N = D);
        break;
      }
      e && N && z.alternate === null && t(p, N), d = s(z, d, L), C === null ? k = z : C.sibling = z, C = z, N = D;
    }
    if (E.done) return n(
      p,
      N
    ), ue && Yt(p, L), k;
    if (N === null) {
      for (; !E.done; L++, E = f.next()) E = _(p, E.value, y), E !== null && (d = s(E, d, L), C === null ? k = E : C.sibling = E, C = E);
      return ue && Yt(p, L), k;
    }
    for (N = r(p, N); !E.done; L++, E = f.next()) E = h(N, p, L, E.value, y), E !== null && (e && E.alternate !== null && N.delete(E.key === null ? L : E.key), d = s(E, d, L), C === null ? k = E : C.sibling = E, C = E);
    return e && N.forEach(function(V) {
      return t(p, V);
    }), ue && Yt(p, L), k;
  }
  function S(p, d, f, y) {
    if (typeof f == "object" && f !== null && f.type === mn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case zr:
          e: {
            for (var k = f.key, C = d; C !== null; ) {
              if (C.key === k) {
                if (k = f.type, k === mn) {
                  if (C.tag === 7) {
                    n(p, C.sibling), d = l(C, f.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === It && oo(k) === C.type) {
                  n(p, C.sibling), d = l(C, f.props), d.ref = Gn(p, C, f), d.return = p, p = d;
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            f.type === mn ? (d = tn(f.props.children, p.mode, y, f.key), d.return = p, p = d) : (y = cl(f.type, f.key, f.props, null, p.mode, y), y.ref = Gn(p, d, f), y.return = p, p = y);
          }
          return a(p);
        case pn:
          e: {
            for (C = f.key; d !== null; ) {
              if (d.key === C) if (d.tag === 4 && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                n(p, d.sibling), d = l(d, f.children || []), d.return = p, p = d;
                break e;
              } else {
                n(p, d);
                break;
              }
              else t(p, d);
              d = d.sibling;
            }
            d = Is(f, p.mode, y), d.return = p, p = d;
          }
          return a(p);
        case It:
          return C = f._init, S(p, d, C(f._payload), y);
      }
      if (Jn(f)) return x(p, d, f, y);
      if (Vn(f)) return w(p, d, f, y);
      Kr(p, f);
    }
    return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, d !== null && d.tag === 6 ? (n(p, d.sibling), d = l(d, f), d.return = p, p = d) : (n(p, d), d = Ns(f, p.mode, y), d.return = p, p = d), a(p)) : n(p, d);
  }
  return S;
}
var Rn = qu(!0), Ju = qu(!1), Cl = Bt(null), Nl = null, kn = null, Gi = null;
function Yi() {
  Gi = kn = Nl = null;
}
function Xi(e) {
  var t = Cl.current;
  oe(Cl), e._currentValue = t;
}
function li(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Mn(e, t) {
  Nl = e, Gi = kn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0), e.firstContext = null);
}
function Ze(e) {
  var t = e._currentValue;
  if (Gi !== e) if (e = { context: e, memoizedValue: t, next: null }, kn === null) {
    if (Nl === null) throw Error(P(308));
    kn = e, Nl.dependencies = { lanes: 0, firstContext: e };
  } else kn = kn.next = e;
  return t;
}
var Jt = null;
function qi(e) {
  Jt === null ? Jt = [e] : Jt.push(e);
}
function Zu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, qi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, jt(e, r);
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Mt = !1;
function Ji(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ec(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function _t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, jt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, qi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, jt(e, n);
}
function ll(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ai(e, n);
  }
}
function uo(e, t) {
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
  var s = l.firstBaseUpdate, a = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, c = u.next;
    u.next = null, a === null ? s = c : a.next = c, a = u;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, o = g.lastBaseUpdate, o !== a && (o === null ? g.firstBaseUpdate = c : o.next = c, g.lastBaseUpdate = u));
  }
  if (s !== null) {
    var _ = l.baseState;
    a = 0, g = c = u = null, o = s;
    do {
      var v = o.lane, h = o.eventTime;
      if ((r & v) === v) {
        g !== null && (g = g.next = {
          eventTime: h,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var x = e, w = o;
          switch (v = t, h = n, w.tag) {
            case 1:
              if (x = w.payload, typeof x == "function") {
                _ = x.call(h, _, v);
                break e;
              }
              _ = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = w.payload, v = typeof x == "function" ? x.call(h, _, v) : x, v == null) break e;
              _ = fe({}, _, v);
              break e;
            case 2:
              Mt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [o] : v.push(o));
      } else h = { eventTime: h, lane: v, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, g === null ? (c = g = h, u = _) : g = g.next = h, a |= v;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        v = o, o = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (u = _), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    sn |= a, e.lanes = a, e.memoizedState = _;
  }
}
function co(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(P(191, l));
      l.call(r);
    }
  }
}
var br = {}, gt = Bt(br), _r = Bt(br), kr = Bt(br);
function Zt(e) {
  if (e === br) throw Error(P(174));
  return e;
}
function Zi(e, t) {
  switch (ie(kr, t), ie(_r, e), ie(gt, br), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Os(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Os(t, e);
  }
  oe(gt), ie(gt, t);
}
function Dn() {
  oe(gt), oe(_r), oe(kr);
}
function tc(e) {
  Zt(kr.current);
  var t = Zt(gt.current), n = Os(t, e.type);
  t !== n && (ie(_r, e), ie(gt, n));
}
function ea(e) {
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
function ta() {
  for (var e = 0; e < _s.length; e++) _s[e]._workInProgressVersionPrimary = null;
  _s.length = 0;
}
var sl = Ct.ReactCurrentDispatcher, ks = Ct.ReactCurrentBatchConfig, ln = 0, de = null, ye = null, _e = null, Tl = !1, ir = !1, Sr = 0, fp = 0;
function Ne() {
  throw Error(P(321));
}
function na(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
  return !0;
}
function ra(e, t, n, r, l, s) {
  if (ln = s, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, sl.current = e === null || e.memoizedState === null ? gp : yp, e = n(r, l), ir) {
    s = 0;
    do {
      if (ir = !1, Sr = 0, 25 <= s) throw Error(P(301));
      s += 1, _e = ye = null, t.updateQueue = null, sl.current = vp, e = n(r, l);
    } while (ir);
  }
  if (sl.current = Ll, t = ye !== null && ye.next !== null, ln = 0, _e = ye = de = null, Tl = !1, t) throw Error(P(300));
  return e;
}
function la() {
  var e = Sr !== 0;
  return Sr = 0, e;
}
function pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return _e === null ? de.memoizedState = _e = e : _e = _e.next = e, _e;
}
function et() {
  if (ye === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = _e === null ? de.memoizedState : _e.next;
  if (t !== null) _e = t, ye = e;
  else {
    if (e === null) throw Error(P(310));
    ye = e, e = { memoizedState: ye.memoizedState, baseState: ye.baseState, baseQueue: ye.baseQueue, queue: ye.queue, next: null }, _e === null ? de.memoizedState = _e = e : _e = _e.next = e;
  }
  return _e;
}
function jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ss(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = ye, l = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var a = l.next;
      l.next = s.next, s.next = a;
    }
    r.baseQueue = l = s, n.pending = null;
  }
  if (l !== null) {
    s = l.next, r = r.baseState;
    var o = a = null, u = null, c = s;
    do {
      var g = c.lane;
      if ((ln & g) === g) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var _ = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = _, a = r) : u = u.next = _, de.lanes |= g, sn |= g;
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? a = r : u.next = o, dt(r, t.memoizedState) || (Oe = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
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
function nc() {
}
function rc(e, t) {
  var n = de, r = et(), l = t(), s = !dt(r.memoizedState, l);
  if (s && (r.memoizedState = l, Oe = !0), r = r.queue, sa(ic.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || _e !== null && _e.memoizedState.tag & 1) {
    if (n.flags |= 2048, Er(9, sc.bind(null, n, r, l, t), void 0, null), ke === null) throw Error(P(349));
    ln & 30 || lc(n, t, l);
  }
  return l;
}
function lc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function sc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ac(t) && oc(e);
}
function ic(e, t, n) {
  return n(function() {
    ac(t) && oc(e);
  });
}
function ac(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function oc(e) {
  var t = jt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function fo(e) {
  var t = pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: jr, lastRenderedState: e }, t.queue = e, e = e.dispatch = hp.bind(null, de, e), [t.memoizedState, e];
}
function Er(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = de.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function uc() {
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
  if (ye !== null) {
    var a = ye.memoizedState;
    if (s = a.destroy, r !== null && na(r, a.deps)) {
      l.memoizedState = Er(t, n, s, r);
      return;
    }
  }
  de.flags |= e, l.memoizedState = Er(1 | t, n, s, r);
}
function po(e, t) {
  return il(8390656, 8, e, t);
}
function sa(e, t) {
  return Ql(2048, 8, e, t);
}
function cc(e, t) {
  return Ql(4, 2, e, t);
}
function dc(e, t) {
  return Ql(4, 4, e, t);
}
function fc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function pc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ql(4, 4, fc.bind(null, t, e), n);
}
function ia() {
}
function mc(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && na(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function hc(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && na(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function gc(e, t, n) {
  return ln & 21 ? (dt(n, t) || (n = _u(), de.lanes |= n, sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = n);
}
function pp(e, t) {
  var n = le;
  le = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ks.transition;
  ks.transition = {};
  try {
    e(!1), t();
  } finally {
    le = n, ks.transition = r;
  }
}
function yc() {
  return et().memoizedState;
}
function mp(e, t, n) {
  var r = $t(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, vc(e)) wc(t, n);
  else if (n = Zu(e, t, n, r), n !== null) {
    var l = Re();
    ct(n, e, r, l), xc(n, t, r);
  }
}
function hp(e, t, n) {
  var r = $t(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vc(e)) wc(t, l);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState, o = s(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, dt(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, qi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Zu(e, t, l, r), n !== null && (l = Re(), ct(n, e, r, l), xc(n, t, r));
  }
}
function vc(e) {
  var t = e.alternate;
  return e === de || t !== null && t === de;
}
function wc(e, t) {
  ir = Tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function xc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ai(e, n);
  }
}
var Ll = { readContext: Ze, useCallback: Ne, useContext: Ne, useEffect: Ne, useImperativeHandle: Ne, useInsertionEffect: Ne, useLayoutEffect: Ne, useMemo: Ne, useReducer: Ne, useRef: Ne, useState: Ne, useDebugValue: Ne, useDeferredValue: Ne, useTransition: Ne, useMutableSource: Ne, useSyncExternalStore: Ne, useId: Ne, unstable_isNewReconciler: !1 }, gp = { readContext: Ze, useCallback: function(e, t) {
  return pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ze, useEffect: po, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, il(
    4194308,
    4,
    fc.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = mp.bind(null, de, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = pt();
  return e = { current: e }, t.memoizedState = e;
}, useState: fo, useDebugValue: ia, useDeferredValue: function(e) {
  return pt().memoizedState = e;
}, useTransition: function() {
  var e = fo(!1), t = e[0];
  return e = pp.bind(null, e[1]), pt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = de, l = pt();
  if (ue) {
    if (n === void 0) throw Error(P(407));
    n = n();
  } else {
    if (n = t(), ke === null) throw Error(P(349));
    ln & 30 || lc(r, t, n);
  }
  l.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return l.queue = s, po(ic.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, Er(9, sc.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = pt(), t = ke.identifierPrefix;
  if (ue) {
    var n = xt, r = wt;
    n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = fp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, yp = {
  readContext: Ze,
  useCallback: mc,
  useContext: Ze,
  useEffect: sa,
  useImperativeHandle: pc,
  useInsertionEffect: cc,
  useLayoutEffect: dc,
  useMemo: hc,
  useReducer: Ss,
  useRef: uc,
  useState: function() {
    return Ss(jr);
  },
  useDebugValue: ia,
  useDeferredValue: function(e) {
    var t = et();
    return gc(t, ye.memoizedState, e);
  },
  useTransition: function() {
    var e = Ss(jr)[0], t = et().memoizedState;
    return [e, t];
  },
  useMutableSource: nc,
  useSyncExternalStore: rc,
  useId: yc,
  unstable_isNewReconciler: !1
}, vp = { readContext: Ze, useCallback: mc, useContext: Ze, useEffect: sa, useImperativeHandle: pc, useInsertionEffect: cc, useLayoutEffect: dc, useMemo: hc, useReducer: js, useRef: uc, useState: function() {
  return js(jr);
}, useDebugValue: ia, useDeferredValue: function(e) {
  var t = et();
  return ye === null ? t.memoizedState = e : gc(t, ye.memoizedState, e);
}, useTransition: function() {
  var e = js(jr)[0], t = et().memoizedState;
  return [e, t];
}, useMutableSource: nc, useSyncExternalStore: rc, useId: yc, unstable_isNewReconciler: !1 };
function st(e, t) {
  if (e && e.defaultProps) {
    t = fe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function si(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? un(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), l = $t(e), s = _t(r, l);
  s.payload = t, n != null && (s.callback = n), t = Ot(e, s, l), t !== null && (ct(t, e, l, r), ll(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), l = $t(e), s = _t(r, l);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Ot(e, s, l), t !== null && (ct(t, e, l, r), ll(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Re(), r = $t(e), l = _t(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ot(e, l, r), t !== null && (ct(t, e, r, n), ll(t, e, r));
} };
function mo(e, t, n, r, l, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !yr(n, r) || !yr(l, s) : !0;
}
function _c(e, t, n) {
  var r = !1, l = Vt, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Ze(s) : (l = $e(t) ? nn : Te.current, r = t.contextTypes, s = (r = r != null) ? bn(e, l) : Vt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function ho(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function ii(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ji(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? l.context = Ze(s) : (s = $e(t) ? nn : Te.current, l.context = bn(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (si(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Bl.enqueueReplaceState(l, l.state, null), Il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Bd(r), r = r.return;
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
function ai(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var wp = typeof WeakMap == "function" ? WeakMap : Map;
function kc(e, t, n) {
  n = _t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Pl || (Pl = !0, yi = r), ai(e, t);
  }, n;
}
function Sc(e, t, n) {
  n = _t(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ai(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    ai(e, t), typeof r != "function" && (Ft === null ? Ft = /* @__PURE__ */ new Set([this]) : Ft.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function go(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Pp.bind(null, e, t, n), t.then(e, e));
}
function yo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vo(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var xp = Ct.ReactCurrentOwner, Oe = !1;
function be(e, t, n, r) {
  t.child = e === null ? Ju(t, null, n, r) : Rn(t, e.child, n, r);
}
function wo(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return Mn(t, l), r = ra(e, t, n, r, s, l), n = la(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (ue && n && Bi(t), t.flags |= 1, be(e, t, r, l), t.child);
}
function xo(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !ma(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, jc(e, t, s, r, l)) : (e = cl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & l)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : yr, n(a, r) && e.ref === t.ref) return Et(e, t, l);
  }
  return t.flags |= 1, e = Ut(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function jc(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (yr(s, r) && e.ref === t.ref) if (Oe = !1, t.pendingProps = r = s, (e.lanes & l) !== 0) e.flags & 131072 && (Oe = !0);
    else return t.lanes = e.lanes, Et(e, t, l);
  }
  return oi(e, t, n, r, l);
}
function Ec(e, t, n) {
  var r = t.pendingProps, l = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ie(jn, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ie(jn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, ie(jn, We), We |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, ie(jn, We), We |= r;
  return be(e, t, l, n), t.child;
}
function Cc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function oi(e, t, n, r, l) {
  var s = $e(n) ? nn : Te.current;
  return s = bn(t, s), Mn(t, l), n = ra(e, t, n, r, s, l), r = la(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Et(e, t, l)) : (ue && r && Bi(t), t.flags |= 1, be(e, t, n, l), t.child);
}
function _o(e, t, n, r, l) {
  if ($e(n)) {
    var s = !0;
    Sl(t);
  } else s = !1;
  if (Mn(t, l), t.stateNode === null) al(e, t), _c(t, n, r), ii(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ze(c) : (c = $e(n) ? nn : Te.current, c = bn(t, c));
    var g = n.getDerivedStateFromProps, _ = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    _ || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== c) && ho(t, a, r, c), Mt = !1;
    var v = t.memoizedState;
    a.state = v, Il(t, r, a, l), u = t.memoizedState, o !== r || v !== u || Fe.current || Mt ? (typeof g == "function" && (si(t, n, g, r), u = t.memoizedState), (o = Mt || mo(t, n, o, r, v, u, c)) ? (_ || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = c, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, ec(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : st(t.type, o), a.props = c, _ = t.pendingProps, v = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ze(u) : (u = $e(n) ? nn : Te.current, u = bn(t, u));
    var h = n.getDerivedStateFromProps;
    (g = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== _ || v !== u) && ho(t, a, r, u), Mt = !1, v = t.memoizedState, a.state = v, Il(t, r, a, l);
    var x = t.memoizedState;
    o !== _ || v !== x || Fe.current || Mt ? (typeof h == "function" && (si(t, n, h, r), x = t.memoizedState), (c = Mt || mo(t, n, c, r, v, x, u) || !1) ? (g || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, x, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, x, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), a.props = r, a.state = x, a.context = u, r = c) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ui(e, t, n, r, s, l);
}
function ui(e, t, n, r, l, s) {
  Cc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && so(t, n, !1), Et(e, t, s);
  r = t.stateNode, xp.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Rn(t, e.child, null, s), t.child = Rn(t, null, o, s)) : be(e, t, o, s), t.memoizedState = r.state, l && so(t, n, !0), t.child;
}
function Nc(e) {
  var t = e.stateNode;
  t.pendingContext ? lo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lo(e, t.context, !1), Zi(e, t.containerInfo);
}
function ko(e, t, n, r, l) {
  return Pn(), Ki(l), t.flags |= 256, be(e, t, n, r), t.child;
}
var ci = { dehydrated: null, treeContext: null, retryLane: 0 };
function di(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ic(e, t, n) {
  var r = t.pendingProps, l = ce.current, s = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ie(ce, l & 1), e === null)
    return ri(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Gl(a, r, 0, null), e = tn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = di(n), t.memoizedState = ci, e) : aa(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return _p(e, t, a, r, o, l, n);
  if (s) {
    s = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ut(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? s = Ut(o, s) : (s = tn(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? di(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = ci, r;
  }
  return s = e.child, e = s.sibling, r = Ut(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function aa(e, t) {
  return t = Gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Gr(e, t, n, r) {
  return r !== null && Ki(r), Rn(t, e.child, null, n), e = aa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function _p(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Es(Error(P(422))), Gr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, l = t.mode, r = Gl({ mode: "visible", children: r.children }, l, 0, null), s = tn(s, l, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Rn(t, e.child, null, a), t.child.memoizedState = di(a), t.memoizedState = ci, s);
  if (!(t.mode & 1)) return Gr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, s = Error(P(419)), r = Es(s, r, void 0), Gr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Oe || o) {
    if (r = ke, r !== null) {
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
    return pa(), r = Es(Error(P(421))), Gr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Rp.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, Ve = At(l.nextSibling), Qe = t, ue = !0, at = null, e !== null && (Ye[Xe++] = wt, Ye[Xe++] = xt, Ye[Xe++] = rn, wt = e.id, xt = e.overflow, rn = t), t = aa(t, r.children), t.flags |= 4096, t);
}
function So(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), li(e.return, t, n);
}
function Cs(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = l);
}
function Mc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, s = r.tail;
  if (be(e, t, r.children, n), r = ce.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && So(e, n, t);
      else if (e.tag === 19) So(e, n, t);
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
      Nc(t), Pn();
      break;
    case 5:
      tc(t);
      break;
    case 1:
      $e(t.type) && Sl(t);
      break;
    case 4:
      Zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ie(Cl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ie(ce, ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ic(e, t, n) : (ie(ce, ce.current & 1), e = Et(e, t, n), e !== null ? e.sibling : null);
      ie(ce, ce.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Mc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ie(ce, ce.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ec(e, t, n);
  }
  return Et(e, t, n);
}
var Tc, fi, Lc, bc;
Tc = function(e, t) {
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
fi = function() {
};
Lc = function(e, t, n, r) {
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
        l = As(e, l), r = As(e, r), s = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _l);
    }
    Fs(n, r);
    var a;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (cr.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (cr.hasOwnProperty(c) ? (u != null && c === "onScroll" && ae("scroll", e), s || o === u || (s = [])) : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
bc = function(e, t, n, r) {
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
function Sp(e, t, n) {
  var r = t.pendingProps;
  switch (Hi(t), t.tag) {
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
      return $e(t.type) && kl(), Ie(t), null;
    case 3:
      return r = t.stateNode, Dn(), oe(Fe), oe(Te), ta(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, at !== null && (xi(at), at = null))), fi(e, t), Ie(t), null;
    case 5:
      ea(t);
      var l = Zt(kr.current);
      if (n = t.type, e !== null && t.stateNode != null) Lc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
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
              La(r, s), ae("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ae("invalid", r);
              break;
            case "textarea":
              Pa(r, s), ae("invalid", r);
          }
          Fs(n, s), l = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && Br(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && Br(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : cr.hasOwnProperty(a) && o != null && a === "onScroll" && ae("scroll", r);
          }
          switch (n) {
            case "input":
              Ar(r), ba(r, s, !0);
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
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = iu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[mt] = t, e[xr] = r, Tc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = $s(n, r), n) {
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
                La(e, r), l = Rs(e, r), ae("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = fe({}, r, { value: void 0 }), ae("invalid", e);
                break;
              case "textarea":
                Pa(e, r), l = As(e, r), ae("invalid", e);
                break;
              default:
                l = r;
            }
            Fs(n, l), o = l;
            for (s in o) if (o.hasOwnProperty(s)) {
              var u = o[s];
              s === "style" ? uu(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && au(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && dr(e, u) : typeof u == "number" && dr(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (cr.hasOwnProperty(s) ? u != null && s === "onScroll" && ae("scroll", e) : u != null && Li(e, s, u, a));
            }
            switch (n) {
              case "input":
                Ar(e), ba(e, r, !1);
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
      if (e && t.stateNode != null) bc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (n = Zt(kr.current), Zt(gt.current), Hr(t)) {
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
        if (ue && Ve !== null && t.mode & 1 && !(t.flags & 128)) Xu(), Pn(), t.flags |= 98560, s = !1;
        else if (s = Hr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(P(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(P(317));
            s[mt] = t;
          } else Pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ie(t), s = !1;
        } else at !== null && (xi(at), at = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ce.current & 1 ? ve === 0 && (ve = 3) : pa())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
    case 4:
      return Dn(), fi(e, t), e === null && vr(t.stateNode.containerInfo), Ie(t), null;
    case 10:
      return Xi(t.type._context), Ie(t), null;
    case 17:
      return $e(t.type) && kl(), Ie(t), null;
    case 19:
      if (oe(ce), s = t.memoizedState, s === null) return Ie(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) Yn(s, !1);
      else {
        if (ve !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
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
      return fa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function jp(e, t) {
  switch (Hi(t), t.tag) {
    case 1:
      return $e(t.type) && kl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Dn(), oe(Fe), oe(Te), ta(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ea(t), null;
    case 13:
      if (oe(ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(P(340));
        Pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return oe(ce), null;
    case 4:
      return Dn(), null;
    case 10:
      return Xi(t.type._context), null;
    case 22:
    case 23:
      return fa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yr = !1, Me = !1, Ep = typeof WeakSet == "function" ? WeakSet : Set, A = null;
function Sn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    pe(e, t, r);
  }
  else n.current = null;
}
function pi(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var jo = !1;
function Cp(e, t) {
  if (Xs = vl, e = Au(), Qi(e)) {
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
        var a = 0, o = -1, u = -1, c = 0, g = 0, _ = e, v = null;
        t: for (; ; ) {
          for (var h; _ !== n || l !== 0 && _.nodeType !== 3 || (o = a + l), _ !== s || r !== 0 && _.nodeType !== 3 || (u = a + r), _.nodeType === 3 && (a += _.nodeValue.length), (h = _.firstChild) !== null; )
            v = _, _ = h;
          for (; ; ) {
            if (_ === e) break t;
            if (v === n && ++c === l && (o = a), v === s && ++g === r && (u = a), (h = _.nextSibling) !== null) break;
            _ = v, v = _.parentNode;
          }
          _ = h;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qs = { focusedElem: e, selectionRange: n }, vl = !1, A = t; A !== null; ) if (t = A, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, A = e;
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
            var w = x.memoizedProps, S = x.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : st(t.type, w), S);
            p.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var f = t.stateNode.containerInfo;
          f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(P(163));
      }
    } catch (y) {
      pe(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, A = e;
      break;
    }
    A = t.return;
  }
  return x = jo, jo = !1, x;
}
function ar(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        l.destroy = void 0, s !== void 0 && pi(t, n, s);
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
function mi(e) {
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
function Pc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Pc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[xr], delete t[ei], delete t[op], delete t[up])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Rc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Eo(e) {
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
function hi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _l));
  else if (r !== 4 && (e = e.child, e !== null)) for (hi(e, t, n), e = e.sibling; e !== null; ) hi(e, t, n), e = e.sibling;
}
function gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
}
var Se = null, it = !1;
function Nt(e, t, n) {
  for (n = n.child; n !== null; ) Dc(e, t, n), n = n.sibling;
}
function Dc(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function") try {
    ht.onCommitFiberUnmount(Ol, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Me || Sn(n, t);
    case 6:
      var r = Se, l = it;
      Se = null, Nt(e, t, n), Se = r, it = l, Se !== null && (it ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null && (it ? (e = Se, n = n.stateNode, e.nodeType === 8 ? ws(e.parentNode, n) : e.nodeType === 1 && ws(e, n), hr(e)) : ws(Se, n.stateNode));
      break;
    case 4:
      r = Se, l = it, Se = n.stateNode.containerInfo, it = !0, Nt(e, t, n), Se = r, it = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var s = l, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && pi(n, t, a), l = l.next;
        } while (l !== r);
      }
      Nt(e, t, n);
      break;
    case 1:
      if (!Me && (Sn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        pe(n, t, o);
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
function Co(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ep()), t.forEach(function(r) {
      var l = Dp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function rt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var s = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            Se = o.stateNode, it = !1;
            break e;
          case 3:
            Se = o.stateNode.containerInfo, it = !0;
            break e;
          case 4:
            Se = o.stateNode.containerInfo, it = !0;
            break e;
        }
        o = o.return;
      }
      if (Se === null) throw Error(P(160));
      Dc(s, a, l), Se = null, it = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      pe(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) zc(t, e), t = t.sibling;
}
function zc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (rt(t, e), ft(e), r & 4) {
        try {
          ar(3, e, e.return), Hl(3, e);
        } catch (w) {
          pe(e, e.return, w);
        }
        try {
          ar(5, e, e.return);
        } catch (w) {
          pe(e, e.return, w);
        }
      }
      break;
    case 1:
      rt(t, e), ft(e), r & 512 && n !== null && Sn(n, n.return);
      break;
    case 5:
      if (rt(t, e), ft(e), r & 512 && n !== null && Sn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          dr(l, "");
        } catch (w) {
          pe(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && s.type === "radio" && s.name != null && lu(l, s), $s(o, a);
          var c = $s(o, s);
          for (a = 0; a < u.length; a += 2) {
            var g = u[a], _ = u[a + 1];
            g === "style" ? uu(l, _) : g === "dangerouslySetInnerHTML" ? au(l, _) : g === "children" ? dr(l, _) : Li(l, g, _, c);
          }
          switch (o) {
            case "input":
              Ds(l, s);
              break;
            case "textarea":
              su(l, s);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!s.multiple;
              var h = s.value;
              h != null ? En(l, !!s.multiple, h, !1) : v !== !!s.multiple && (s.defaultValue != null ? En(
                l,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : En(l, !!s.multiple, s.multiple ? [] : "", !1));
          }
          l[xr] = s;
        } catch (w) {
          pe(e, e.return, w);
        }
      }
      break;
    case 6:
      if (rt(t, e), ft(e), r & 4) {
        if (e.stateNode === null) throw Error(P(162));
        l = e.stateNode, s = e.memoizedProps;
        try {
          l.nodeValue = s;
        } catch (w) {
          pe(e, e.return, w);
        }
      }
      break;
    case 3:
      if (rt(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        hr(t.containerInfo);
      } catch (w) {
        pe(e, e.return, w);
      }
      break;
    case 4:
      rt(t, e), ft(e);
      break;
    case 13:
      rt(t, e), ft(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (ca = he())), r & 4 && Co(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (c = Me) || g, rt(t, e), Me = c) : rt(t, e), ft(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !g && e.mode & 1) for (A = e, g = e.child; g !== null; ) {
          for (_ = A = g; A !== null; ) {
            switch (v = A, h = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ar(4, v, v.return);
                break;
              case 1:
                Sn(v, v.return);
                var x = v.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (w) {
                    pe(r, n, w);
                  }
                }
                break;
              case 5:
                Sn(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Io(_);
                  continue;
                }
            }
            h !== null ? (h.return = v, A = h) : Io(_);
          }
          g = g.sibling;
        }
        e: for (g = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (g === null) {
              g = _;
              try {
                l = _.stateNode, c ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = _.stateNode, u = _.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = ou("display", a));
              } catch (w) {
                pe(e, e.return, w);
              }
            }
          } else if (_.tag === 6) {
            if (g === null) try {
              _.stateNode.nodeValue = c ? "" : _.memoizedProps;
            } catch (w) {
              pe(e, e.return, w);
            }
          } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
            _.child.return = _, _ = _.child;
            continue;
          }
          if (_ === e) break e;
          for (; _.sibling === null; ) {
            if (_.return === null || _.return === e) break e;
            g === _ && (g = null), _ = _.return;
          }
          g === _ && (g = null), _.sibling.return = _.return, _ = _.sibling;
        }
      }
      break;
    case 19:
      rt(t, e), ft(e), r & 4 && Co(e);
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
          var s = Eo(e);
          gi(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = Eo(e);
          hi(e, o, a);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      pe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Np(e, t, n) {
  A = e, Ac(e);
}
function Ac(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var l = A, s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Yr;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Me;
        o = Yr;
        var c = Me;
        if (Yr = a, (Me = u) && !c) for (A = l; A !== null; ) a = A, u = a.child, a.tag === 22 && a.memoizedState !== null ? Mo(l) : u !== null ? (u.return = a, A = u) : Mo(l);
        for (; s !== null; ) A = s, Ac(s), s = s.sibling;
        A = l, Yr = o, Me = c;
      }
      No(e);
    } else l.subtreeFlags & 8772 && s !== null ? (s.return = l, A = s) : No(e);
  }
}
function No(e) {
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
            s !== null && co(t, s, r);
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
              co(t, a, n);
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
                  var _ = g.dehydrated;
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
        Me || t.flags & 512 && mi(t);
      } catch (v) {
        pe(t, t.return, v);
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
function Io(e) {
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
function Mo(e) {
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
          } catch (u) {
            pe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              pe(t, l, u);
            }
          }
          var s = t.return;
          try {
            mi(t);
          } catch (u) {
            pe(t, s, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            mi(t);
          } catch (u) {
            pe(t, a, u);
          }
      }
    } catch (u) {
      pe(t, t.return, u);
    }
    if (t === e) {
      A = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, A = o;
      break;
    }
    A = t.return;
  }
}
var Ip = Math.ceil, bl = Ct.ReactCurrentDispatcher, oa = Ct.ReactCurrentOwner, Je = Ct.ReactCurrentBatchConfig, Z = 0, ke = null, ge = null, je = 0, We = 0, jn = Bt(0), ve = 0, Cr = null, sn = 0, Kl = 0, ua = 0, or = null, Ae = null, ca = 0, An = 1 / 0, yt = null, Pl = !1, yi = null, Ft = null, Xr = !1, Pt = null, Rl = 0, ur = 0, vi = null, ol = -1, ul = 0;
function Re() {
  return Z & 6 ? he() : ol !== -1 ? ol : ol = he();
}
function $t(e) {
  return e.mode & 1 ? Z & 2 && je !== 0 ? je & -je : dp.transition !== null ? (ul === 0 && (ul = _u()), ul) : (e = le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Iu(e.type)), e) : 1;
}
function ct(e, t, n, r) {
  if (50 < ur) throw ur = 0, vi = null, Error(P(185));
  Mr(e, n, r), (!(Z & 2) || e !== ke) && (e === ke && (!(Z & 2) && (Kl |= n), ve === 4 && Lt(e, je)), Ue(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (An = he() + 500, Vl && Ht()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  df(e, t);
  var r = yl(e, e === ke ? je : 0);
  if (r === 0) n !== null && Aa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Aa(n), t === 1) e.tag === 0 ? cp(To.bind(null, e)) : Ku(To.bind(null, e)), ip(function() {
      !(Z & 6) && Ht();
    }), n = null;
    else {
      switch (ku(r)) {
        case 1:
          n = zi;
          break;
        case 4:
          n = wu;
          break;
        case 16:
          n = gl;
          break;
        case 536870912:
          n = xu;
          break;
        default:
          n = gl;
      }
      n = Bc(n, Oc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Oc(e, t) {
  if (ol = -1, ul = 0, Z & 6) throw Error(P(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = yl(e, e === ke ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Dl(e, r);
  else {
    t = r;
    var l = Z;
    Z |= 2;
    var s = $c();
    (ke !== e || je !== t) && (yt = null, An = he() + 500, en(e, t));
    do
      try {
        Lp();
        break;
      } catch (o) {
        Fc(e, o);
      }
    while (!0);
    Yi(), bl.current = s, Z = l, ge !== null ? t = 0 : (ke = null, je = 0, t = ve);
  }
  if (t !== 0) {
    if (t === 2 && (l = Bs(e), l !== 0 && (r = l, t = wi(e, l))), t === 1) throw n = Cr, en(e, 0), Lt(e, r), Ue(e, he()), n;
    if (t === 6) Lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Mp(l) && (t = Dl(e, r), t === 2 && (s = Bs(e), s !== 0 && (r = s, t = wi(e, s))), t === 1)) throw n = Cr, en(e, 0), Lt(e, r), Ue(e, he()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Xt(e, Ae, yt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = ca + 500 - he(), 10 < t)) {
            if (yl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Re(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Zs(Xt.bind(null, e, Ae, yt), t);
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
          if (r = l, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ip(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Zs(Xt.bind(null, e, Ae, yt), r);
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
  return Ue(e, he()), e.callbackNode === n ? Oc.bind(null, e) : null;
}
function wi(e, t) {
  var n = or;
  return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256), e = Dl(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && xi(t)), e;
}
function xi(e) {
  Ae === null ? Ae = e : Ae.push.apply(Ae, e);
}
function Mp(e) {
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
  for (t &= ~ua, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ut(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function To(e) {
  if (Z & 6) throw Error(P(327));
  Tn();
  var t = yl(e, 0);
  if (!(t & 1)) return Ue(e, he()), null;
  var n = Dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bs(e);
    r !== 0 && (t = r, n = wi(e, r));
  }
  if (n === 1) throw n = Cr, en(e, 0), Lt(e, t), Ue(e, he()), n;
  if (n === 6) throw Error(P(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Xt(e, Ae, yt), Ue(e, he()), null;
}
function da(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    Z = n, Z === 0 && (An = he() + 500, Vl && Ht());
  }
}
function an(e) {
  Pt !== null && Pt.tag === 0 && !(Z & 6) && Tn();
  var t = Z;
  Z |= 1;
  var n = Je.transition, r = le;
  try {
    if (Je.transition = null, le = 1, e) return e();
  } finally {
    le = r, Je.transition = n, Z = t, !(Z & 6) && Ht();
  }
}
function fa() {
  We = jn.current, oe(jn);
}
function en(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, sp(n)), ge !== null) for (n = ge.return; n !== null; ) {
    var r = n;
    switch (Hi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && kl();
        break;
      case 3:
        Dn(), oe(Fe), oe(Te), ta();
        break;
      case 5:
        ea(r);
        break;
      case 4:
        Dn();
        break;
      case 13:
        oe(ce);
        break;
      case 19:
        oe(ce);
        break;
      case 10:
        Xi(r.type._context);
        break;
      case 22:
      case 23:
        fa();
    }
    n = n.return;
  }
  if (ke = e, ge = e = Ut(e.current, null), je = We = t, ve = 0, Cr = null, ua = Kl = sn = 0, Ae = or = null, Jt !== null) {
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
function Fc(e, t) {
  do {
    var n = ge;
    try {
      if (Yi(), sl.current = Ll, Tl) {
        for (var r = de.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Tl = !1;
      }
      if (ln = 0, _e = ye = de = null, ir = !1, Sr = 0, oa.current = null, n === null || n.return === null) {
        ve = 1, Cr = t, ge = null;
        break;
      }
      e: {
        var s = e, a = n.return, o = n, u = t;
        if (t = je, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, g = o, _ = g.tag;
          if (!(g.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
            var v = g.alternate;
            v ? (g.updateQueue = v.updateQueue, g.memoizedState = v.memoizedState, g.lanes = v.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var h = yo(a);
          if (h !== null) {
            h.flags &= -257, vo(h, a, o, s, t), h.mode & 1 && go(s, c, t), t = h, u = c;
            var x = t.updateQueue;
            if (x === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(u), t.updateQueue = w;
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              go(s, c, t), pa();
              break e;
            }
            u = Error(P(426));
          }
        } else if (ue && o.mode & 1) {
          var S = yo(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), vo(S, a, o, s, t), Ki(zn(u, o));
            break e;
          }
        }
        s = u = zn(u, o), ve !== 4 && (ve = 2), or === null ? or = [s] : or.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var p = kc(s, u, t);
              uo(s, p);
              break e;
            case 1:
              o = u;
              var d = s.type, f = s.stateNode;
              if (!(s.flags & 128) && (typeof d.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Ft === null || !Ft.has(f)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var y = Sc(s, o, t);
                uo(s, y);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Wc(n);
    } catch (k) {
      t = k, ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function $c() {
  var e = bl.current;
  return bl.current = Ll, e === null ? Ll : e;
}
function pa() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4), ke === null || !(sn & 268435455) && !(Kl & 268435455) || Lt(ke, je);
}
function Dl(e, t) {
  var n = Z;
  Z |= 2;
  var r = $c();
  (ke !== e || je !== t) && (yt = null, en(e, t));
  do
    try {
      Tp();
      break;
    } catch (l) {
      Fc(e, l);
    }
  while (!0);
  if (Yi(), Z = n, bl.current = r, ge !== null) throw Error(P(261));
  return ke = null, je = 0, ve;
}
function Tp() {
  for (; ge !== null; ) Uc(ge);
}
function Lp() {
  for (; ge !== null && !tf(); ) Uc(ge);
}
function Uc(e) {
  var t = Qc(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Wc(e) : ge = t, oa.current = null;
}
function Wc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = jp(n, t), n !== null) {
        n.flags &= 32767, ge = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ve = 6, ge = null;
        return;
      }
    } else if (n = Sp(n, t, We), n !== null) {
      ge = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function Xt(e, t, n) {
  var r = le, l = Je.transition;
  try {
    Je.transition = null, le = 1, bp(e, t, n, r);
  } finally {
    Je.transition = l, le = r;
  }
  return null;
}
function bp(e, t, n, r) {
  do
    Tn();
  while (Pt !== null);
  if (Z & 6) throw Error(P(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (ff(e, s), e === ke && (ge = ke = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xr || (Xr = !0, Bc(gl, function() {
    return Tn(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = Je.transition, Je.transition = null;
    var a = le;
    le = 1;
    var o = Z;
    Z |= 4, oa.current = null, Cp(e, n), zc(n, e), Jf(qs), vl = !!Xs, qs = Xs = null, e.current = n, Np(n), nf(), Z = o, le = a, Je.transition = s;
  } else e.current = n;
  if (Xr && (Xr = !1, Pt = e, Rl = l), s = e.pendingLanes, s === 0 && (Ft = null), sf(n.stateNode), Ue(e, he()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Pl) throw Pl = !1, e = yi, yi = null, e;
  return Rl & 1 && e.tag !== 0 && Tn(), s = e.pendingLanes, s & 1 ? e === vi ? ur++ : (ur = 0, vi = e) : ur = 0, Ht(), null;
}
function Tn() {
  if (Pt !== null) {
    var e = ku(Rl), t = Je.transition, n = le;
    try {
      if (Je.transition = null, le = 16 > e ? 16 : e, Pt === null) var r = !1;
      else {
        if (e = Pt, Pt = null, Rl = 0, Z & 6) throw Error(P(331));
        var l = Z;
        for (Z |= 4, A = e.current; A !== null; ) {
          var s = A, a = s.child;
          if (A.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (A = c; A !== null; ) {
                  var g = A;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ar(8, g, s);
                  }
                  var _ = g.child;
                  if (_ !== null) _.return = g, A = _;
                  else for (; A !== null; ) {
                    g = A;
                    var v = g.sibling, h = g.return;
                    if (Pc(g), g === c) {
                      A = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = h, A = v;
                      break;
                    }
                    A = h;
                  }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var S = w.sibling;
                    w.sibling = null, w = S;
                  } while (w !== null);
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
            var p = s.sibling;
            if (p !== null) {
              p.return = s.return, A = p;
              break e;
            }
            A = s.return;
          }
        }
        var d = e.current;
        for (A = d; A !== null; ) {
          a = A;
          var f = a.child;
          if (a.subtreeFlags & 2064 && f !== null) f.return = a, A = f;
          else e: for (a = d; A !== null; ) {
            if (o = A, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Hl(9, o);
              }
            } catch (k) {
              pe(o, o.return, k);
            }
            if (o === a) {
              A = null;
              break e;
            }
            var y = o.sibling;
            if (y !== null) {
              y.return = o.return, A = y;
              break e;
            }
            A = o.return;
          }
        }
        if (Z = l, Ht(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
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
function Lo(e, t, n) {
  t = zn(n, t), t = kc(e, t, 1), e = Ot(e, t, 1), t = Re(), e !== null && (Mr(e, 1, t), Ue(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) Lo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Lo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
        e = zn(n, e), e = Sc(t, e, 1), t = Ot(t, e, 1), e = Re(), t !== null && (Mr(t, 1, e), Ue(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Pp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Re(), e.pingedLanes |= e.suspendedLanes & n, ke === e && (je & n) === n && (ve === 4 || ve === 3 && (je & 130023424) === je && 500 > he() - ca ? en(e, 0) : ua |= n), Ue(e, t);
}
function Vc(e, t) {
  t === 0 && (e.mode & 1 ? (t = $r, $r <<= 1, !($r & 130023424) && ($r = 4194304)) : t = 1);
  var n = Re();
  e = jt(e, t), e !== null && (Mr(e, t, n), Ue(e, n));
}
function Rp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Vc(e, n);
}
function Dp(e, t) {
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
  r !== null && r.delete(t), Vc(e, n);
}
var Qc;
Qc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) Oe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Oe = !1, kp(e, t, n);
    Oe = !!(e.flags & 131072);
  }
  else Oe = !1, ue && t.flags & 1048576 && Gu(t, El, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      al(e, t), e = t.pendingProps;
      var l = bn(t, Te.current);
      Mn(t, n), l = ra(null, t, r, e, l, n);
      var s = la();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (s = !0, Sl(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ji(t), l.updater = Bl, t.stateNode = l, l._reactInternals = t, ii(t, r, e, n), t = ui(null, t, r, !0, s, n)) : (t.tag = 0, ue && s && Bi(t), be(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (al(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ap(r), e = st(r, e), l) {
          case 0:
            t = oi(null, t, r, e, n);
            break e;
          case 1:
            t = _o(null, t, r, e, n);
            break e;
          case 11:
            t = wo(null, t, r, e, n);
            break e;
          case 14:
            t = xo(null, t, r, st(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), oi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), _o(e, t, r, l, n);
    case 3:
      e: {
        if (Nc(t), e === null) throw Error(P(387));
        r = t.pendingProps, s = t.memoizedState, l = s.element, ec(e, t), Il(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          l = zn(Error(P(423)), t), t = ko(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = zn(Error(P(424)), t), t = ko(e, t, r, n, l);
          break e;
        } else for (Ve = At(t.stateNode.containerInfo.firstChild), Qe = t, ue = !0, at = null, n = Ju(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return tc(t), e === null && ri(t), r = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = l.children, Js(r, l) ? a = null : s !== null && Js(r, s) && (t.flags |= 32), Cc(e, t), be(e, t, a, n), t.child;
    case 6:
      return e === null && ri(t), null;
    case 13:
      return Ic(e, t, n);
    case 4:
      return Zi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Rn(t, null, r, n) : be(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), wo(e, t, r, l, n);
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
          var o = s.dependencies;
          if (o !== null) {
            a = s.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (s.tag === 1) {
                  u = _t(-1, n & -n), u.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var g = c.pending;
                    g === null ? u.next = u : (u.next = g.next, g.next = u), c.pending = u;
                  }
                }
                s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), li(
                  s.return,
                  n,
                  t
                ), o.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (a = s.return, a === null) throw Error(P(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), li(a, n, t), a = s.sibling;
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
      return r = t.type, l = st(r, t.pendingProps), l = st(r.type, l), xo(e, t, r, l, n);
    case 15:
      return jc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), al(e, t), t.tag = 1, $e(r) ? (e = !0, Sl(t)) : e = !1, Mn(t, n), _c(t, r, l), ii(t, r, l, n), ui(null, t, r, !0, e, n);
    case 19:
      return Mc(e, t, n);
    case 22:
      return Ec(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Bc(e, t) {
  return vu(e, t);
}
function zp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function qe(e, t, n, r) {
  return new zp(e, t, n, r);
}
function ma(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ap(e) {
  if (typeof e == "function") return ma(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Pi) return 11;
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
  if (r = e, typeof e == "function") ma(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case mn:
      return tn(n.children, l, s, t);
    case bi:
      a = 8, l |= 8;
      break;
    case Ts:
      return e = qe(12, n, t, l | 2), e.elementType = Ts, e.lanes = s, e;
    case Ls:
      return e = qe(13, n, t, l), e.elementType = Ls, e.lanes = s, e;
    case bs:
      return e = qe(19, n, t, l), e.elementType = bs, e.lanes = s, e;
    case tu:
      return Gl(n, l, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Zo:
          a = 10;
          break e;
        case eu:
          a = 9;
          break e;
        case Pi:
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
  return e = qe(22, e, r, t), e.elementType = tu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ns(e, t, n) {
  return e = qe(6, e, null, t), e.lanes = n, e;
}
function Is(e, t, n) {
  return t = qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Op(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = os(0), this.expirationTimes = os(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = os(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ha(e, t, n, r, l, s, a, o, u) {
  return e = new Op(e, t, n, o, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = qe(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ji(s), e;
}
function Fp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: pn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Hc(e) {
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
    if ($e(n)) return Hu(e, n, t);
  }
  return t;
}
function Kc(e, t, n, r, l, s, a, o, u) {
  return e = ha(n, r, !0, e, l, s, a, o, u), e.context = Hc(null), n = e.current, r = Re(), l = $t(n), s = _t(r, l), s.callback = t ?? null, Ot(n, s, l), e.current.lanes = l, Mr(e, l, r), Ue(e, r), e;
}
function Yl(e, t, n, r) {
  var l = t.current, s = Re(), a = $t(l);
  return n = Hc(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(l, t, a), e !== null && (ct(e, l, a, s), ll(e, l, a)), a;
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
function bo(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ga(e, t) {
  bo(e, t), (e = e.alternate) && bo(e, t);
}
function $p() {
  return null;
}
var Gc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ya(e) {
  this._internalRoot = e;
}
Xl.prototype.render = ya.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Yl(e, t, null, null);
};
Xl.prototype.unmount = ya.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function() {
      Yl(null, e, null, null);
    }), t[St] = null;
  }
};
function Xl(e) {
  this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Eu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Nu(e);
  }
};
function va(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ql(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Po() {
}
function Up(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = zl(a);
        s.call(c);
      };
    }
    var a = Kc(t, r, e, 0, null, !1, !1, "", Po);
    return e._reactRootContainer = a, e[St] = a.current, vr(e.nodeType === 8 ? e.parentNode : e), an(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = zl(u);
      o.call(c);
    };
  }
  var u = ha(e, 0, !1, null, null, !1, !1, "", Po);
  return e._reactRootContainer = u, e[St] = u.current, vr(e.nodeType === 8 ? e.parentNode : e), an(function() {
    Yl(t, u, n, r);
  }), u;
}
function Jl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = zl(a);
        o.call(u);
      };
    }
    Yl(t, a, e, l);
  } else a = Up(n, t, e, l, r);
  return zl(a);
}
Su = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 && (Ai(t, n | 1), Ue(t, he()), !(Z & 6) && (An = he() + 500, Ht()));
      }
      break;
    case 13:
      an(function() {
        var r = jt(e, 1);
        if (r !== null) {
          var l = Re();
          ct(r, e, 1, l);
        }
      }), ga(e, 1);
  }
};
Oi = function(e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Re();
      ct(t, e, 134217728, n);
    }
    ga(e, 134217728);
  }
};
ju = function(e) {
  if (e.tag === 13) {
    var t = $t(e), n = jt(e, t);
    if (n !== null) {
      var r = Re();
      ct(n, e, t, r);
    }
    ga(e, t);
  }
};
Eu = function() {
  return le;
};
Cu = function(e, t) {
  var n = le;
  try {
    return le = e, t();
  } finally {
    le = n;
  }
};
Ws = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ds(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Wl(r);
            if (!l) throw Error(P(90));
            ru(r), Ds(r, l);
          }
        }
      }
      break;
    case "textarea":
      su(e, n);
      break;
    case "select":
      t = n.value, t != null && En(e, !!n.multiple, t, !1);
  }
};
fu = da;
pu = an;
var Wp = { usingClientEntryPoint: !1, Events: [Lr, vn, Wl, cu, du, da] }, Xn = { findFiberByHostInstance: qt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vp = { bundleType: Xn.bundleType, version: Xn.version, rendererPackageName: Xn.rendererPackageName, rendererConfig: Xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = gu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Xn.findFiberByHostInstance || $p, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qr.isDisabled && qr.supportsFiber) try {
    Ol = qr.inject(Vp), ht = qr;
  } catch {
  }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wp;
Ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!va(t)) throw Error(P(200));
  return Fp(e, t, null, n);
};
Ke.createRoot = function(e, t) {
  if (!va(e)) throw Error(P(299));
  var n = !1, r = "", l = Gc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ha(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, vr(e.nodeType === 8 ? e.parentNode : e), new ya(t);
};
Ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
  return e = gu(t), e = e === null ? null : e.stateNode, e;
};
Ke.flushSync = function(e) {
  return an(e);
};
Ke.hydrate = function(e, t, n) {
  if (!ql(t)) throw Error(P(200));
  return Jl(null, e, t, !0, n);
};
Ke.hydrateRoot = function(e, t, n) {
  if (!va(e)) throw Error(P(405));
  var r = n != null && n.hydratedSources || null, l = !1, s = "", a = Gc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Kc(t, null, e, 1, n ?? null, l, !1, s, a), e[St] = t.current, vr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
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
      e._reactRootContainer = null, e[St] = null;
    });
  }), !0) : !1;
};
Ke.unstable_batchedUpdates = da;
Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ql(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Jl(e, t, n, !1, r);
};
Ke.version = "18.3.1-next-f1338f8080-20240426";
function Yc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yc);
    } catch (e) {
      console.error(e);
    }
}
Yc(), Yo.exports = Ke;
var Pe = Yo.exports, Xc, Ro = Pe;
Xc = Ro.createRoot, Ro.hydrateRoot;
var qc = { exports: {} }, Zl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qp = m, Bp = Symbol.for("react.element"), Hp = Symbol.for("react.fragment"), Kp = Object.prototype.hasOwnProperty, Gp = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jc(e, t, n) {
  var r, l = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Kp.call(t, r) && !Yp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Bp, type: e, key: s, ref: a, props: l, _owner: Gp.current };
}
Zl.Fragment = Hp;
Zl.jsx = Jc;
Zl.jsxs = Jc;
qc.exports = Zl;
var i = qc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Xp = {
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
const qp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), G = (e, t) => {
  const n = m.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...c
    }, g) => m.createElement(
      "svg",
      {
        ref: g,
        ...Xp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(s) * 24 / Number(l) : s,
        className: ["lucide", `lucide-${qp(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([_, v]) => m.createElement(_, v)),
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
const Jp = G("AlertCircle", [
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
const Zp = G("AlertTriangle", [
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
const em = G("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zc = G("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = G("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = G("ArrowUpDown", [
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
const ed = G("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = G("Box", [
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
const rm = G("Calendar", [
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
const lm = G("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = G("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = G("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = G("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = G("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = G("Download", [
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
const ld = G("FileJson", [
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
const am = G("Folder", [
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
const om = G("Info", [
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
const sd = G("LayoutGrid", [
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
const um = G("LayoutList", [
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
const cm = G("Link2Off", [
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
const dm = G("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = G("Maximize", [
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
const pm = G("Minimize", [
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
const mm = G("MoreVertical", [
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
const id = G("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wa = G("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = G("PlusCircle", [
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
const xa = G("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = G("RefreshCw", [
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
const On = G("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = G("Settings", [
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
const ym = G("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _i = G("Star", [
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
const cn = G("Tag", [
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
const Fn = G("Trash2", [
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
const vm = G("Type", [
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
const wm = G("Upload", [
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
const Ee = G("X", [
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
const xm = async () => {
  const e = await H.fetchApi("/meld/home-dir");
  return (await q(e)).home;
};
let Al = !1;
const _m = (e) => {
  Al = e, Al && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, km = (...e) => {
  Al && console.log("[Meld]", ...e);
}, Sm = (...e) => {
  Al && console.warn("[Meld]", ...e);
}, jm = (...e) => {
  console.error("[Meld]", ...e);
}, U = {
  log: km,
  warn: Sm,
  error: jm,
  init: _m
}, dl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const s = await H.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return q(s);
}, ad = async (e) => {
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
}, _a = async (e) => {
  const t = await H.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return q(t);
}, od = async (e) => {
  const t = await H.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return q(t);
}, zo = async (e, t) => {
  const n = await H.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await q(n);
}, Em = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await H.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await q(r);
  } catch {
    return [];
  }
}, Si = async (e) => {
  const t = await H.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await q(t);
  } catch {
    return [];
  }
}, Cm = async (e, t) => {
  const n = await H.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await q(n);
}, ji = async (e, t, n) => {
  const r = await H.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await q(r);
}, Nm = async (e) => {
  const t = await H.fetchApi(`/meld/image/${e}/workflow`);
  return q(t);
}, Im = async (e) => {
  const t = await H.fetchApi(`/meld/image/${e}/snapshot_data`);
  return q(t);
}, Mm = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await H.fetchApi(n);
  return q(r);
}, Tm = async () => {
  const e = await H.fetchApi("/meld/search-suggestions");
  return q(e);
}, Lm = async () => {
  const e = await H.fetchApi("/meld/search-keywords");
  return q(e);
}, bm = async () => {
  const e = await H.fetchApi("/meld/search-config");
  return q(e);
}, Pm = async () => {
  const e = await H.fetchApi("/meld/favorites");
  return q(e);
}, Rm = async (e, t) => {
  const n = await H.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await q(n);
}, Ao = async (e) => {
  const t = await H.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await q(t);
}, Dm = async (e, t, n) => {
  const r = await H.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await q(r);
}, zm = {
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
}, ud = async () => {
  let e;
  try {
    const t = await H.fetchApi("/meld/settings");
    e = await q(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), zm;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Am = async (e, t) => {
  const n = await H.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await q(n);
}, Om = {
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
function Fm(e, t) {
  var n, r;
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const l = new Set(t.payload), s = e.images.filter((o) => !l.has(o.id)), a = new Set(e.selectedIds);
      for (const o of t.payload)
        a.delete(o);
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
        new Map(s.map((o) => [o.id, o])).values()
      ).sort((o, u) => u.created_at - o.created_at);
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
        (o) => o.id === l.id ? l : o
      ), a = e.lineageImages.map(
        (o) => o.id === l.id ? l : o
      );
      return {
        ...e,
        images: s,
        lineageImages: a
      };
    }
    case "SET_IMAGES": {
      const { images: l, total: s, offset: a } = t.payload;
      let o = e.viewerImageId;
      return e.viewerMode === "gallery" && o !== null && !l.some((u) => u.id === o) && (o = null), {
        ...e,
        images: l,
        isLoading: !1,
        error: null,
        viewerImageId: o,
        pagination: {
          total: s,
          offset: a,
          limit: e.pagination.limit,
          hasMore: a + l.length < s
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: l, total: s, offset: a } = t.payload, o = [...e.images, ...l], u = Array.from(
        new Map(o.map((c) => [c.id, c])).values()
      );
      return {
        ...e,
        images: u,
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
      const [a, o] = [
        Math.min(l, s),
        Math.max(l, s)
      ], u = new Set(e.selectedIds);
      for (let c = a; c <= o; c++)
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
      const l = t.payload, s = typeof l == "number" ? l : l.id, a = typeof l == "number" ? "gallery" : l.mode, o = e.viewerMode === "lineage" && a === "lineage" && e.lineageImages.some((u) => u.id === s);
      return {
        ...e,
        viewerImageId: s,
        viewerMode: a,
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
      const s = ((n = t.payload) == null ? void 0 : n.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (c) => c.exists !== !1 && (e.settings["gallery.show_parent_images"] || !c.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (c) => c.id === e.viewerImageId
      );
      if (o === -1 || o === a.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || o === a.length - 1 && !s)
        return e;
      const u = (o + 1) % a.length;
      return {
        ...e,
        viewerImageId: a[u].id
      };
    }
    case "PREVIOUS_IMAGE": {
      const s = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], a = e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
        (c) => c.exists !== !1 && (e.settings["gallery.show_parent_images"] || !c.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (c) => c.id === e.viewerImageId
      );
      if (o === -1 || o === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || o === 0 && !s)
        return e;
      const u = (o - 1 + a.length) % a.length;
      return {
        ...e,
        viewerImageId: a[u].id
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
const cd = m.createContext(void 0), $m = ({
  children: e
}) => {
  const [t, n] = m.useReducer(Fm, Om), r = m.useRef(t.images.length), l = m.useRef(0);
  m.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const s = m.useCallback(
    async (h, x, w) => {
      const S = t.settings["gallery.max_load_count"], p = 200;
      let d = h;
      for (; d < Math.min(x, S) && w === l.current; )
        try {
          const f = Math.min(p, S - d);
          U.log("Background fetch: starting chunk", {
            offset: d,
            limit: f
          });
          const y = await dl(
            d,
            f,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (w !== l.current || (n({ type: "APPEND_IMAGES", payload: y }), d += y.images.length, y.images.length === 0 || d >= y.total))
            break;
          await new Promise((k) => setTimeout(k, 300));
        } catch (f) {
          U.error("Background fetch failed", f);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = m.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const h = performance.now(), x = ++l.current;
    try {
      const w = t.searchQuery.trim() !== "", S = t.settings["gallery.initial_load_count"];
      U.log("refreshImages: starting initial fetch", {
        isSearch: w,
        fetchLimit: S,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const p = await dl(
        0,
        S,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), d = performance.now() - h;
      U.log("refreshImages: initial fetch complete", {
        count: p.images.length,
        total: p.total,
        offset: p.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: p }), p.total > S && s(S, p.total, x);
    } catch (w) {
      U.error("refreshImages: fetch failed", w), n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    s
  ]), o = m.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const h = performance.now();
    try {
      const x = r.current, w = t.searchQuery.trim() !== "", S = t.pagination.limit;
      U.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: S,
        isSearch: w
      });
      const p = await dl(
        x,
        S,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), d = performance.now() - h;
      U.log("loadMoreImages: fetch complete", {
        count: p.images.length,
        total: p.total,
        offset: p.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: p });
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
  ]), u = m.useCallback(async () => {
    try {
      const h = await Pm();
      n({ type: "SET_FAVORITES", payload: h });
    } catch (h) {
      U.error("Failed to load favorites", h);
    }
  }, []), c = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const h = Array.from(t.selectedIds), w = t.images.filter(
      (S) => t.selectedIds.has(S.id)
    ).some(
      (S) => S.parent_id || S.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: h,
        hasLineage: w,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), g = m.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const h = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const w = (await _a(h)).restored_ids || h;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: w }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), _ = m.useCallback(
    async (h, x) => {
      try {
        await Am(h, x), n({ type: "SET_SETTINGS", payload: { [h]: x } });
      } catch (w) {
        n({
          type: "SET_ERROR",
          payload: w instanceof Error ? w.message : String(w)
        });
      }
    },
    []
  ), v = m.useCallback(
    async (h) => {
      const x = t.images.find((w) => w.id === h);
      if (x && !x.is_minimal)
        return x;
      try {
        U.log("fetchFullImageDetails: fetching full data", { id: h });
        const w = await ad(h);
        return n({ type: "UPDATE_IMAGE", payload: w }), w;
      } catch (w) {
        throw U.error("Failed to fetch image details", w), w;
      }
    },
    [t.images]
  );
  return m.useEffect(() => {
    (async () => {
      try {
        const x = await ud();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        U.error("Failed to load settings", x);
      }
    })();
  }, []), m.useEffect(() => {
    u();
  }, [u]), m.useEffect(() => {
    const h = () => {
      a();
    }, x = (S) => {
      const p = S.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: p }
      });
    }, w = (S) => {
      const p = S.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: p.new_count || 0,
          updatedCount: p.updated_count || 0,
          totalCount: p.total_count || 0,
          progress: {
            current: p.total_count || t.scanStatus.progress.total,
            total: p.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), a();
    };
    return window.addEventListener("meld-refresh", h), window.addEventListener("meld-scan-progress", x), window.addEventListener("meld-scan-finished", w), () => {
      window.removeEventListener("meld-refresh", h), window.removeEventListener("meld-scan-progress", x), window.removeEventListener("meld-scan-finished", w);
    };
  }, [a, t.scanStatus.progress.total]), m.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ i.jsx(
    cd.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: c,
        restoreSelected: g,
        updateSetting: _,
        fetchFullImageDetails: v
      },
      children: e
    }
  );
}, Le = () => {
  const e = m.useContext(cd);
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
}, Um = async (e) => {
  const t = await H.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return q(t);
}, Wm = async (e) => {
  const t = await H.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await q(t);
}, Vm = async (e, t) => {
  const n = await H.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await q(n);
}, Qm = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await H.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Bm = async (e, t, n = !1, r) => {
  const l = await H.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await q(l);
  } catch (s) {
    return console.error("Failed to fetch folders", s), { folders: [], images: [], image_count: 0 };
  }
}, Hm = async (e, t, n, r) => {
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
}, Km = async (e, t, n) => {
  const r = await H.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await q(r)).count;
  } catch {
    return 0;
  }
}, Gm = async (e) => {
  const t = await H.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await q(t);
}, Ym = async () => {
  const e = await H.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await q(e);
}, dd = () => {
  const { dispatch: e } = Le(), [t, n] = m.useState(() => {
    const j = localStorage.getItem("meld-import-config"), Q = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (j)
      try {
        const b = JSON.parse(j);
        return { ...Q, ...b, tags: [] };
      } catch {
        return Q;
      }
    return Q;
  });
  m.useEffect(() => {
    const { tags: j, ...Q } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(Q));
  }, [t]);
  const [r, l] = m.useState([]), [s, a] = m.useState([]), [o, u] = m.useState(0), [c, g] = m.useState(!1), [_, v] = m.useState([]), [h, x] = m.useState(""), [w, S] = m.useState(!1), [p, d] = m.useState(null), f = m.useRef(!1), y = (j) => {
    j.target === j.currentTarget && (f.current = !0);
  }, k = (j) => {
    j.target === j.currentTarget && f.current && e({ type: "CLOSE_MODAL" }), f.current = !1;
  };
  m.useEffect(() => {
    (async () => {
      try {
        const Q = await xm();
        n((b) => b.custom_path ? b : { ...b, custom_path: Q });
      } catch (Q) {
        U.error("Failed to fetch home directory:", Q);
      }
    })();
  }, []), m.useEffect(() => {
    const j = new AbortController();
    return (async () => {
      const b = t.type === "custom" ? t.custom_path : t.subfolder;
      if (U.log(
        `loadFolders started. Path: "${b}", Type: "${t.type}"`
      ), t.type === "custom" && !b) {
        U.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      g(!0);
      const B = b, I = t.type;
      try {
        U.log("Step 1: Fast load starting...");
        const M = await Bm(
          t.type,
          b,
          !0,
          j.signal
        );
        if (j.signal.aborted) {
          U.log("Step 1: Aborted.");
          return;
        }
        U.log(
          `Step 1 complete. Found ${M.folders.length} folders, ${M.images.length} images.`
        ), l(M.folders), a(M.images), u(null);
        const O = M.folders.map((T) => T.name);
        O.length > 0 && (U.log(
          `Step 2: Metadata fetch starting for ${O.length} folders...`
        ), Hm(
          I,
          B,
          O,
          j.signal
        ).then((T) => {
          if (j.signal.aborted) {
            U.log("Step 2: Aborted.");
            return;
          }
          U.log("Step 2: Metadata fetch complete."), l(
            (X) => X.map((we) => {
              const F = T[we.name];
              return F ? { ...we, count: F.count, preview: F.preview } : we;
            })
          );
        }).catch((T) => {
          T.name !== "AbortError" && U.error("Step 2: Metadata fetch failed:", T);
        })), U.log("Step 3: Path image count starting..."), Km(I, B, j.signal).then((T) => {
          if (j.signal.aborted) {
            U.log("Step 3: Aborted.");
            return;
          }
          U.log(`Step 3: Path image count complete: ${T}`), u(T);
        }).catch((T) => {
          T.name !== "AbortError" && U.error("Step 3: Path image count failed:", T);
        });
      } catch (M) {
        if (M.name === "AbortError") {
          U.log("Request aborted.");
          return;
        }
        U.error("Failed to load folders:", M), l([]), a([]), u(0);
      } finally {
        j.signal.aborted || g(!1);
      }
    })(), () => {
      j.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const C = m.useCallback(async () => {
    S(!0);
    try {
      const j = await ka();
      v(j);
    } catch (j) {
      U.error("Failed to fetch tags:", j);
    } finally {
      S(!1);
    }
  }, []);
  m.useEffect(() => {
    C();
  }, [C]), m.useEffect(() => {
    const j = (Q) => {
      Q.key === "Escape" && (Q.preventDefault(), Q.stopImmediatePropagation(), p ? d(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", j, { capture: !0 }), () => window.removeEventListener("keydown", j, { capture: !0 });
  }, [p, e]);
  const N = m.useMemo(() => _.filter(
    (j) => j.name.toLowerCase().includes(h.toLowerCase()) && !t.tags.includes(j.name)
  ), [_, h, t.tags]), L = (j) => {
    const Q = j.trim();
    Q && !t.tags.includes(Q) && (n({ ...t, tags: [...t.tags, Q] }), x(""));
  }, D = (j) => {
    n({ ...t, tags: t.tags.filter((Q) => Q !== j) });
  }, E = (j) => {
    j.key === "Enter" && h.trim() && (j.preventDefault(), L(h.trim()));
  }, z = async () => {
    try {
      await Gm(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (j) {
      U.error("Failed to start scan:", j), alert(`Failed to start scan: ${j}`);
    }
  }, V = (j) => {
    if (t.type === "custom") {
      const Q = t.custom_path.includes("\\") ? "\\" : "/", b = t.custom_path.endsWith(Q) ? `${t.custom_path}${j}` : `${t.custom_path}${Q}${j}`;
      n({ ...t, custom_path: b });
    } else {
      const Q = t.subfolder ? `${t.subfolder}/${j}` : j;
      n({ ...t, subfolder: Q });
    }
  }, ne = () => {
    if (t.type === "custom") {
      const j = t.custom_path.includes("\\") ? "\\" : "/", Q = t.custom_path.split(j);
      if (Q.length > 1) {
        Q.pop();
        let b = Q.join(j);
        b === "" && j === "/" && (b = "/"), n({ ...t, custom_path: b });
      }
    } else {
      const j = t.subfolder.split("/");
      j.pop(), n({ ...t, subfolder: j.join("/") });
    }
  };
  return Pe.createPortal(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: k,
        children: [
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (j) => j.stopPropagation(),
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
                          onChange: (j) => n({
                            ...t,
                            type: j.target.value,
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
                      /* @__PURE__ */ i.jsx("div", { className: "meld-path-count", children: o === null ? /* @__PURE__ */ i.jsx("span", { className: "meld-path-count--loading", children: "Scanning..." }) : `${o} images` })
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-form-group checkbox", children: /* @__PURE__ */ i.jsxs("label", { children: [
                      /* @__PURE__ */ i.jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: t.recursive,
                          onChange: (j) => n({ ...t, recursive: j.target.checked })
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
                          onChange: (j) => n({
                            ...t,
                            link_strategy: j.target.value,
                            auto_link_parent: j.target.value !== "none"
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
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((j) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        j,
                        /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => D(j),
                            children: /* @__PURE__ */ i.jsx(Ee, { size: 12 })
                          }
                        )
                      ] }, j)) }),
                      /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ i.jsx(On, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ i.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: h,
                            onChange: (j) => x(j.target.value),
                            onKeyDown: E
                          }
                        ),
                        h.trim() && !t.tags.includes(h.trim()) && /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => L(h),
                            children: /* @__PURE__ */ i.jsx(xa, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: w ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : N.length === 0 ? h && /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        h
                      ] }) : N.map((j) => /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => L(j.name),
                          children: j.name
                        },
                        j.id
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
                          /* @__PURE__ */ i.jsx(wa, { size: 16 }),
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
                          onClick: ne,
                          children: [
                            /* @__PURE__ */ i.jsx(nd, { size: 16 }),
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
                          onChange: (j) => n({ ...t, custom_path: j.target.value }),
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
                      r.map((j) => /* @__PURE__ */ i.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => V(j.name),
                          children: [
                            /* @__PURE__ */ i.jsx("div", { className: "meld-folder-icon-wrapper", children: j.preview ? /* @__PURE__ */ i.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Be(j.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ i.jsx(am, { size: 16 }) }),
                            /* @__PURE__ */ i.jsx("span", { className: "meld-folder-name", children: j.name }),
                            /* @__PURE__ */ i.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${j.count === null ? "meld-folder-count--loading" : ""}`,
                                children: j.count !== null ? `${j.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ i.jsx(rd, { size: 14 })
                          ]
                        },
                        j.name
                      )),
                      s.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-browser-image-grid", children: s.map((j) => /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(j),
                          children: /* @__PURE__ */ i.jsx(
                            "img",
                            {
                              src: Be(j),
                              alt: j.filename,
                              title: j.filename
                            }
                          )
                        },
                        j.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          p && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (j) => {
                j.stopPropagation(), d(null);
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (j) => j.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => d(null),
                          children: /* @__PURE__ */ i.jsx(Ee, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "img",
                        {
                          src: Be(p),
                          alt: p.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-import-preview-info", children: p.filename })
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
}, Xm = () => {
  const { state: e, dispatch: t, updateSetting: n } = Le(), [r, l] = m.useState("Gallery"), [s, a] = m.useState({
    ...e.settings
  }), [o, u] = m.useState(
    {}
  ), [c, g] = m.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [_, v] = m.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [h, x] = m.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [w, S] = m.useState(e.settings["viewer.thumbnail_window_size"].toString()), [p, d] = m.useState(e.settings["gallery.trash_retention_days"].toString()), [f, y] = m.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [k, C] = m.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [N, L] = m.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [D, E] = m.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    z,
    V
  ] = m.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    ne,
    j
  ] = m.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [Q, b] = m.useState(
    e.settings["sidebar.thumbnail_size"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: s,
    setLocalSettings: a,
    shortcutErrors: o,
    setShortcutErrors: u,
    handleClose: async () => {
      const F = Object.keys(s).filter(
        (J) => s[J] !== e.settings[J] && !o[J]
      );
      if (F.length > 0)
        for (const J of F)
          await n(J, s[J]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (F, J) => {
      a((se) => ({
        ...se,
        [F]: !J
      }));
    },
    handleNumberChange: (F, J, se, tt) => {
      F === "gallery.initial_load_count" ? g(J) : F === "gallery.max_load_count" ? v(J) : F === "gallery.lineage_max_depth" ? x(J) : F === "viewer.thumbnail_window_size" ? S(J) : F === "gallery.trash_retention_days" ? d(J) : F === "gallery.auto_link_phash_threshold" ? y(J) : F === "gallery.suggest_phash_threshold" ? C(J) : F === "viewer.details.max_positive_prompt_lines" ? L(J) : F === "viewer.details.max_negative_prompt_lines" ? E(J) : F === "fullscreen.details.max_positive_prompt_lines" ? V(J) : F === "fullscreen.details.max_negative_prompt_lines" ? j(J) : F === "sidebar.thumbnail_size" && b(J);
      const Pr = Number.parseInt(J, 10);
      if (!Number.isNaN(Pr)) {
        let Kt = Pr;
        se !== void 0 && Kt < se && (Kt = se), tt !== void 0 && Kt > tt && (Kt = tt), a((W) => ({
          ...W,
          [F]: Kt
        }));
      }
    },
    handleNumberBlur: (F) => {
      F.key === "gallery.initial_load_count" ? g(
        s["gallery.initial_load_count"].toString()
      ) : F.key === "gallery.max_load_count" ? v(s["gallery.max_load_count"].toString()) : F.key === "gallery.lineage_max_depth" ? x(
        s["gallery.lineage_max_depth"].toString()
      ) : F.key === "viewer.thumbnail_window_size" ? S(
        s["viewer.thumbnail_window_size"].toString()
      ) : F.key === "gallery.trash_retention_days" ? d(
        s["gallery.trash_retention_days"].toString()
      ) : F.key === "gallery.auto_link_phash_threshold" ? y(
        s["gallery.auto_link_phash_threshold"].toString()
      ) : F.key === "gallery.suggest_phash_threshold" ? C(
        s["gallery.suggest_phash_threshold"].toString()
      ) : F.key === "viewer.details.max_positive_prompt_lines" ? L(
        s["viewer.details.max_positive_prompt_lines"].toString()
      ) : F.key === "viewer.details.max_negative_prompt_lines" ? E(
        s["viewer.details.max_negative_prompt_lines"].toString()
      ) : F.key === "fullscreen.details.max_positive_prompt_lines" ? V(
        s["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : F.key === "fullscreen.details.max_negative_prompt_lines" ? j(
        s["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : F.key === "sidebar.thumbnail_size" && b(s["sidebar.thumbnail_size"].toString());
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
      })), u({});
    },
    handleViewTrash: () => {
      t({ type: "SET_VIEW_SCOPE", payload: "trash" }), t({ type: "CLOSE_MODAL" });
    },
    validateShortcut: (F) => F.trim() ? F.trim().split(/\s+/).every((se) => !!(se === "next" || se === "prev" || se === "delete" || se.startsWith("tag:") && se.length > 4 || se.startsWith("-tag:") && se.length > 5 || se.startsWith("tag-toggle:") && se.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: _,
    lineageMaxDepthInput: h,
    thumbnailWindowSizeInput: w,
    trashRetentionDaysInput: p,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: k,
    maxPositivePromptLinesInput: N,
    maxNegativePromptLinesInput: D,
    fullscreenMaxPositivePromptLinesInput: z,
    fullscreenMaxNegativePromptLinesInput: ne,
    thumbnailSizeInput: Q
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
] }), qm = ({
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
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.delete_mode": o.target.value
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
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.small_image_mode": o.target.value
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
            onChange: (o) => t((u) => ({
              ...u,
              "fullscreen.details.show_filename": o.target.value
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
] }), Jm = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailSizeInput: s,
  initialLoadCountInput: a,
  maxLoadCountInput: o
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
            onChange: (u) => t((c) => ({
              ...c,
              "sidebar.show_filename": u.target.value
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
] }), Zm = ({
  localSettings: e,
  setLocalSettings: t,
  shortcutErrors: n,
  setShortcutErrors: r,
  validateShortcut: l,
  handleToggle: s,
  handleResetShortcuts: a
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
      o.map((u, c) => /* @__PURE__ */ i.jsx(
        $,
        {
          label: `Shortcut ${c === 9 ? 0 : c + 1} (Key: ${c === 9 ? 0 : c + 1})`,
          description: `Command to execute when pressing '${c === 9 ? 0 : c + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[u] ? "meld-text-input--error" : ""}`,
              value: e[u] || "",
              onChange: (g) => {
                t((_) => ({
                  ..._,
                  [u]: g.target.value
                }));
              },
              onBlur: () => {
                const g = l(
                  e[u] || ""
                );
                r((_) => ({
                  ..._,
                  [u]: !g
                }));
              }
            }
          )
        },
        u
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
}, eh = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: s,
  lineageMaxDepthInput: a,
  trashRetentionDaysInput: o,
  autoLinkPhashThresholdInput: u,
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
            onChange: (g) => l((_) => ({
              ..._,
              "gallery.matching_strategy": g.target.value
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
            value: u,
            min: 0,
            max: 100,
            onChange: (g) => t(
              "gallery.auto_link_phash_threshold",
              g.target.value,
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
            onChange: (g) => t(
              "gallery.suggest_phash_threshold",
              g.target.value,
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
            onChange: (g) => t(
              "gallery.lineage_max_depth",
              g.target.value,
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
            value: o,
            min: 0,
            max: 365,
            onChange: (g) => t(
              "gallery.trash_retention_days",
              g.target.value,
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
] }), th = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: s,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o
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
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.small_image_mode": u.target.value
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
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.delete_mode": u.target.value
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
            onChange: (u) => t((c) => ({
              ...c,
              "viewer.details.show_filename": u.target.value
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
] }), fd = () => {
  const {
    activeTab: e,
    setActiveTab: t,
    localSettings: n,
    setLocalSettings: r,
    shortcutErrors: l,
    setShortcutErrors: s,
    handleClose: a,
    handleToggle: o,
    handleNumberChange: u,
    handleNumberBlur: c,
    handleResetShortcuts: g,
    handleViewTrash: _,
    validateShortcut: v,
    // Input states
    initialLoadCountInput: h,
    maxLoadCountInput: x,
    lineageMaxDepthInput: w,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: p,
    autoLinkPhashThresholdInput: d,
    suggestPhashThresholdInput: f,
    maxPositivePromptLinesInput: y,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: C,
    fullscreenMaxNegativePromptLinesInput: N,
    thumbnailSizeInput: L
  } = Xm(), D = m.useRef(!1), E = (j) => {
    j.target === j.currentTarget && (D.current = !0);
  }, z = (j) => {
    j.target === j.currentTarget && D.current && a(), D.current = !1;
  }, V = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], ne = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ i.jsx(
          eh,
          {
            localSettings: n,
            handleNumberChange: u,
            handleNumberBlur: c,
            handleToggle: o,
            setLocalSettings: r,
            handleViewTrash: _,
            lineageMaxDepthInput: w,
            trashRetentionDaysInput: p,
            autoLinkPhashThresholdInput: d,
            suggestPhashThresholdInput: f
          }
        );
      case "Gallery":
        return /* @__PURE__ */ i.jsx(
          Jm,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailSizeInput: L,
            initialLoadCountInput: h,
            maxLoadCountInput: x
          }
        );
      case "View":
        return /* @__PURE__ */ i.jsx(
          th,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: S,
            maxPositivePromptLinesInput: y,
            maxNegativePromptLinesInput: k
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ i.jsx(
          qm,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: C,
            maxNegativePromptLinesInput: N
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ i.jsx(
          Zm,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: s,
            validateShortcut: v,
            handleToggle: o,
            handleResetShortcuts: g
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
            onClick: (j) => j.stopPropagation(),
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
                /* @__PURE__ */ i.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ i.jsx("div", { className: "meld-tabs", children: V.map((j) => /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === j.id ? "active" : ""}`,
                    onClick: () => t(j.id),
                    children: j.label
                  },
                  j.id
                )) }) }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: ne() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, ot = "none", pd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Le(), [s, a] = m.useState([]), [o, u] = m.useState(t), [c, g] = m.useState(""), [_, v] = m.useState(!0), [h, x] = m.useState(!1), w = m.useRef(null), S = e.length > 1, p = m.useRef(!1), d = (E) => {
    E.target === E.currentTarget && (p.current = !0);
  }, f = (E) => {
    E.target === E.currentTarget && p.current && n(), p.current = !1;
  }, y = m.useCallback(async () => {
    v(!0);
    try {
      const E = await ka();
      a(E);
    } catch (E) {
      console.error("Failed to fetch tags:", E);
    } finally {
      v(!1);
    }
  }, []);
  m.useEffect(() => {
    y();
  }, [y]), m.useEffect(() => {
    w.current && w.current.focus();
    const E = (z) => {
      z.key === "Escape" && (z.preventDefault(), z.stopPropagation(), z.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", E, { capture: !0 }), () => window.removeEventListener("keydown", E, {
      capture: !0
    });
  }, [n]);
  const k = m.useMemo(() => s.filter(
    (E) => E.name.toLowerCase().includes(c.toLowerCase()) && !o.includes(E.name)
  ), [s, c, o]), C = (E) => {
    const z = E.trim();
    if (z.toLowerCase() === ot) {
      alert(
        `Tag name '${ot}' is reserved for search and cannot be used.`
      );
      return;
    }
    z && !o.includes(z) && (u([...o, z]), g(""));
  }, N = (E) => {
    u(o.filter((z) => z !== E));
  }, L = async () => {
    x(!0);
    try {
      if (S) {
        const E = o.filter((V) => !t.includes(V)), z = t.filter(
          (V) => !o.includes(V)
        );
        await ji(e, E, z);
      } else
        await Cm(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (E) {
      console.error("Failed to update tags:", E), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, D = (E) => {
    E.key === "Enter" && c.trim() ? (E.preventDefault(), E.stopPropagation(), C(c.trim())) : E.key === "Escape" && (E.preventDefault(), E.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Pe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: d,
        onMouseUp: f,
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (E) => E.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ i.jsx(cn, { size: 18 }),
              /* @__PURE__ */ i.jsx("h3", { style: { margin: 0 }, children: S ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ i.jsx(Ee, { size: 20 }) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-body", children: [
            S && /* @__PURE__ */ i.jsx(
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
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: S ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((E) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                E,
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => N(E),
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
                    ref: w,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (E) => g(E.target.value),
                    onKeyDown: D
                  }
                ),
                c.trim() && !o.includes(c.trim()) && /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => C(c),
                    children: [
                      /* @__PURE__ */ i.jsx(xa, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? c ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : k.map((E) => /* @__PURE__ */ i.jsx(
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
                onClick: L,
                disabled: h,
                children: h ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, nh = async () => {
  const e = await H.fetchApi("/meld/workflows");
  return q(e);
}, rh = async (e) => {
  const t = await H.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return q(t);
}, md = ({
  images: e,
  onExecute: t
}) => {
  var d;
  const { dispatch: n } = Le(), [r, l] = m.useState([]), [s, a] = m.useState(!0), [o, u] = m.useState(null), [c, g] = m.useState(!1), _ = m.useMemo(() => [...r].sort((f, y) => f.valid !== y.valid ? f.valid ? -1 : 1 : f.name.localeCompare(y.name)), [r]), v = m.useCallback(async () => {
    try {
      a(!0);
      const f = await nh();
      l(f), u(null);
    } catch (f) {
      u(f instanceof Error ? f.message : String(f));
    } finally {
      a(!1);
    }
  }, []);
  m.useEffect(() => {
    v();
  }, [v]);
  const h = m.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]), x = m.useRef(!1), w = m.useCallback((f) => {
    f.target === f.currentTarget && (x.current = !0);
  }, []), S = m.useCallback(
    (f) => {
      f.target === f.currentTarget && x.current && h(), x.current = !1;
    },
    [h]
  );
  m.useEffect(() => {
    const f = (y) => {
      y.key === "Escape" && h();
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [h]);
  const p = async (f) => {
    if (!c)
      try {
        g(!0), await t(f), h();
      } catch (y) {
        u(y instanceof Error ? y.message : String(y)), g(!1);
      }
  };
  return Pe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: S,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--medium",
            onClick: (f) => f.stopPropagation(),
            children: [
              /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ i.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ i.jsx(ld, { size: 20, color: "var(--meld-accent-color)" }),
                  "Run with Workflow"
                ] }),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: h,
                    children: /* @__PURE__ */ i.jsx(Ee, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: s ? /* @__PURE__ */ i.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ i.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ i.jsx("span", { children: "Loading workflows..." })
              ] }) : o ? /* @__PURE__ */ i.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ i.jsx(Jp, { size: 20 }),
                /* @__PURE__ */ i.jsx("span", { children: o })
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
                      /* @__PURE__ */ i.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (d = e[0]) == null ? void 0 : d.filename }),
                      ". Only workflows with exactly one",
                      " ",
                      /* @__PURE__ */ i.jsx("strong", { children: "Meld Image Loader" }),
                      " node are supported."
                    ]
                  }
                ),
                _.map((f) => /* @__PURE__ */ i.jsxs(
                  "div",
                  {
                    className: `meld-workflow-item ${f.valid ? "" : "meld-workflow-item--invalid"}`,
                    onClick: () => f.valid && !c && p(f.name),
                    title: f.reason || "Click to run",
                    children: [
                      /* @__PURE__ */ i.jsxs("div", { className: "meld-workflow-item__info", children: [
                        /* @__PURE__ */ i.jsx("div", { className: "meld-workflow-item__name", children: f.name }),
                        !f.valid && /* @__PURE__ */ i.jsx("div", { className: "meld-workflow-item__reason", children: f.reason })
                      ] }),
                      f.valid && /* @__PURE__ */ i.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary meld-btn-small",
                          disabled: c,
                          onClick: (y) => {
                            y.stopPropagation(), p(f.name);
                          },
                          children: [
                            /* @__PURE__ */ i.jsx(wa, { size: 14 }),
                            c ? "Queuing..." : "Run"
                          ]
                        }
                      )
                    ]
                  },
                  f.name
                ))
              ] }) }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: h,
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
}, hd = () => ({ executeWorkflow: m.useCallback(
  async (t, n) => {
    var c, g, _, v;
    const r = await rh(t);
    let l = null, s = !1;
    if (r.nodes && Array.isArray(r.nodes)) {
      s = !0;
      const h = r.nodes.find(
        (x) => x.type === "MeldImageLoader"
      );
      h && (l = String(h.id));
    } else
      for (const h in r)
        if (r[h].class_type === "MeldImageLoader") {
          l = h;
          break;
        }
    if (!l)
      throw new Error(
        "Meld Image Loader node not found in the selected workflow."
      );
    let a = n.filename;
    if (n.subfolder && (a = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (a = `${a} [${n.type}]`), s) {
      const h = window.app, x = t.replace(/\.json$/i, "");
      let w = !1;
      const S = document.querySelectorAll(".workflow-tab");
      for (const f of Array.from(S)) {
        const y = f.querySelector(".workflow-label"), k = ((c = y == null ? void 0 : y.textContent) == null ? void 0 : c.trim()) || ((g = f.textContent) == null ? void 0 : g.trim()) || "";
        if (k === x || k === t || k.startsWith(`${x} `) || k.startsWith(`${x}•`)) {
          f.click(), w = !0;
          break;
        }
      }
      w || await h.loadGraphData(r, !0, !0, t), await new Promise((f) => setTimeout(f, 200));
      const d = h.graph._nodes.find(
        (f) => String(f.id) === l || f.type === "MeldImageLoader"
      );
      if (d) {
        const f = (_ = d.widgets) == null ? void 0 : _.find((y) => y.name === "image");
        f && (f.value = a), h.graph.setDirtyCanvas(!0, !0);
      }
      try {
        await h.queuePrompt(0);
        return;
      } catch (f) {
        throw console.error("Failed to queue workflow:", f), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const o = JSON.parse(JSON.stringify(r));
    o[l].inputs.image = a;
    const u = await H.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: o,
        client_id: H.clientId
      })
    });
    if (!u.ok) {
      const h = await u.json();
      throw new Error(((v = h.error) == null ? void 0 : v.message) || "Failed to queue workflow");
    }
    return await u.json();
  },
  []
) }), gd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: s } = Le(), a = m.useRef(!0);
  m.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = m.useRef(l.viewerImageId);
  m.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = m.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]), c = m.useRef(!1), g = m.useCallback((w) => {
    w.target === w.currentTarget && (c.current = !0);
  }, []), _ = m.useCallback(
    (w) => {
      w.target === w.currentTarget && c.current && u(), c.current = !1;
    },
    [u]
  ), v = m.useCallback(
    (w) => {
      if (!a.current) return;
      const S = o.current;
      if (S === null || !w.has(S))
        return;
      const p = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (y) => y.exists !== !1 && (l.settings["gallery.show_parent_images"] || !y.has_children)
      ), d = p.findIndex(
        (y) => y.id === S
      );
      if (d === -1) return;
      let f = !1;
      for (let y = d + 1; y < p.length; y++)
        if (!w.has(p[y].id)) {
          s({
            type: "OPEN_VIEWER",
            payload: { id: p[y].id, mode: l.viewerMode }
          }), f = !0;
          break;
        }
      if (!f) {
        for (let y = d - 1; y >= 0; y--)
          if (!w.has(p[y].id)) {
            s({
              type: "OPEN_VIEWER",
              payload: { id: p[y].id, mode: l.viewerMode }
            }), f = !0;
            break;
          }
      }
      f || s({ type: "CLOSE_VIEWER" });
    },
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      s
    ]
  );
  m.useEffect(() => {
    const w = (S) => {
      S.key === "Escape" && u();
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [u]);
  const h = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const w = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (d) => d.exists !== !1 && (l.settings["gallery.show_parent_images"] || !d.has_children)
      ), S = new Set(e), p = w.filter(
        (d) => S.has(d.id)
      );
      if (v(S), await ki(e, n), !a.current) return;
      !n && r && r(p), s({ type: "REMOVE_IMAGES", payload: e }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (w) {
      s({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  }, x = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const w = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (d) => d.exists !== !1 && (l.settings["gallery.show_parent_images"] || !d.has_children)
      ), S = new Set(e);
      for (const d of e) {
        const f = await Si(d);
        if (!a.current) return;
        for (const y of f)
          S.add(y.id);
      }
      const p = w.filter(
        (d) => S.has(d.id)
      );
      if (v(S), await ki(Array.from(S), n), !a.current) return;
      !n && r && r(p), s({
        type: "REMOVE_IMAGES",
        payload: Array.from(S)
      }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (w) {
      s({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Pe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: _,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (w) => w.stopPropagation(),
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
                    onClick: u,
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
                            Zp,
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
                    onClick: u,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: h,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: x,
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
}, yd = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Le(), [l, s] = m.useState([]), [a, o] = m.useState(!0), [u, c] = m.useState(!1), g = m.useRef(!1), _ = (k) => {
    k.target === k.currentTarget && (g.current = !0);
  }, v = (k) => {
    k.target === k.currentTarget && g.current && n({ type: "CLOSE_MODAL" }), g.current = !1;
  }, h = t.images.find((k) => k.id === e), x = m.useCallback(async () => {
    o(!0);
    try {
      const k = t.settings["gallery.suggest_phash_threshold"], C = await Em(e, k);
      s(C);
    } catch (k) {
      console.error("Failed to load suggestions:", k);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  m.useEffect(() => {
    x();
  }, [x]);
  const w = async (k) => {
    if (k == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!h || k === h.parent_id) && !(h.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await zo(e, k), await ad(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (C) {
        console.error("Failed to link parent:", C);
      }
  }, S = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await zo(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (k) {
        console.error("Failed to remove source:", k), alert("Failed to remove source image.");
      }
  }, p = async (k) => {
    o(!0);
    try {
      const C = await Qm(k), { id: N } = await od({
        filename: C.name,
        subfolder: C.subfolder || "",
        type: C.type || "input"
      });
      if (N === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await w(N);
    } catch (C) {
      console.error("Failed to upload/register image:", C);
    } finally {
      o(!1);
    }
  }, d = (k) => {
    k.preventDefault(), k.stopPropagation(), c(!1);
    const C = k.dataTransfer.files[0];
    C != null && C.type.startsWith("image/") && p(C);
  };
  if (!h) return null;
  const f = l.filter((k) => k.is_source_match), y = l.filter((k) => !k.is_source_match);
  return Pe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: _,
        onMouseUp: v,
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("h2", { children: [
              "Select Source for #",
              h.id
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
            h.parent_id && /* @__PURE__ */ i.jsxs(
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
                        /* @__PURE__ */ i.jsx(dm, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    h.parent_filename && /* @__PURE__ */ i.jsx(
                                      "img",
                                      {
                                        src: Be({
                                          filename: h.parent_filename,
                                          subfolder: h.parent_subfolder || "",
                                          type: h.parent_type || "output"
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
                                              children: h.parent_filename || "Unknown Image"
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
                                                h.parent_id
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
                      onClick: S,
                      title: "Remove Source",
                      children: /* @__PURE__ */ i.jsx(cm, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (k) => {
                  k.preventDefault(), k.stopPropagation(), c(!0);
                },
                onDragOver: (k) => {
                  k.preventDefault(), k.stopPropagation(), k.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (k) => {
                  k.preventDefault(), k.stopPropagation(), c(!1);
                },
                onDrop: d,
                children: [
                  /* @__PURE__ */ i.jsx(wm, { size: 32 }),
                  /* @__PURE__ */ i.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ i.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestions-container", children: [
              f.length > 0 && /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: f.map((k) => {
                  const C = k.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !C && w(k.id),
                      style: {
                        cursor: C ? "default" : "pointer",
                        ...C ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Be(k), alt: k.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: k.filename }),
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
                    k.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Visual Matches (pHash)" }),
                y.length > 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: y.map((k) => {
                  const C = k.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${C ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !C && w(k.id),
                      style: {
                        cursor: C ? "default" : "pointer",
                        ...C ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Be(k), alt: k.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: k.filename }),
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
                                  Math.round((64 - k.distance) / 64 * 100),
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
                    k.id
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
}, lh = () => {
  const { state: e, dispatch: t } = Le(), { executeWorkflow: n } = hd();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ i.jsx(
      md,
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
      /* @__PURE__ */ i.jsx(yd, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Pe.createPortal(/* @__PURE__ */ i.jsx(dd, {}), document.body),
    e.activeModal.type === "settings" && Pe.createPortal(/* @__PURE__ */ i.jsx(fd, {}), document.body),
    e.activeModal.type === "tag_edit" && Pe.createPortal(
      /* @__PURE__ */ i.jsx(
        pd,
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
        gd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    )
  ] });
}, Sa = (e, t) => {
  const n = m.useCallback(async (u) => {
    try {
      const c = await Nm(u.id);
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
  }, []), r = m.useCallback(async (u) => {
    try {
      const c = await Im(u.id), g = "MeldUnifiedLoader", _ = window.app, h = window.LiteGraph.createNode(g);
      if (!h) {
        console.error(`Node type ${g} not found.`), alert(
          `Node type ${g} not found. Please make sure the Meld Unified Loader node is installed.`
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
      if (h.widgets) {
        for (const [d, f] of Object.entries(x)) {
          const y = c[d];
          if (y != null) {
            const k = h.widgets.find(
              (C) => C.name === f
            );
            k && (k.value = y);
          }
        }
        const p = h.widgets.find(
          (d) => d.name === "control_after_generate"
        );
        p && (p.value = "fixed");
      }
      const w = _.canvas.ds.offset, S = _.canvas.ds.scale;
      h.pos = [(-w[0] + 400) / S, (-w[1] + 300) / S], _.graph.add(h), _.canvas.selectNode(h), _.canvas.centerOnNode(h);
    } catch (c) {
      console.error("Error adding Unified Loader:", c), alert("Failed to load settings.");
    }
  }, []), l = m.useCallback(
    (u) => {
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [u.id],
          tags: u.tags || []
        }
      });
    },
    [t]
  ), s = m.useCallback(
    (u) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: u.id }
      });
    },
    [t]
  ), a = m.useCallback(
    (u) => {
      const c = Array.isArray(u) ? u : [u];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: c }
      });
    },
    [t]
  ), o = m.useCallback(
    async (u, c) => {
      try {
        const g = u.id, v = (await _a([g])).restored_ids || [g];
        t({ type: "REMOVE_IMAGES", payload: v }), c == null || c();
      } catch (g) {
        t({
          type: "SET_ERROR",
          payload: g instanceof Error ? g.message : String(g)
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
    handleRestore: o
  };
}, vd = (e, t) => {
  const n = m.useCallback(
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
      let o = null;
      if (a ? o = Be(a) : o = Be({
        filename: r.parent_filename,
        subfolder: r.parent_subfolder || "",
        type: r.parent_type
      }), !o) return [];
      const u = {
        id: s || null,
        imgSrc: o
      };
      if (a && l > 1) {
        const c = n(a);
        return [u, ...c].slice(0, l);
      }
      return [u];
    },
    [t, e]
  );
  return { getParentChain: n };
}, wd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Le(), l = t.selectedIds.has(e.id), s = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: a,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c,
    handleRunWithWorkflow: g
  } = Sa(t, n), { getParentChain: _ } = vd(t.images, t.settings), [v, h] = m.useState(null), [x, w] = m.useState(!1), [S, p] = m.useState(null), [d, f] = m.useState(!1), y = m.useRef(null), k = async (M, O, T = !1) => {
    try {
      await navigator.clipboard.writeText(M), T ? (f(!0), setTimeout(() => f(!1), 2e3)) : (p(O), setTimeout(() => p(null), 2e3));
    } catch (X) {
      console.error("Failed to copy text: ", X);
    }
  };
  m.useEffect(() => {
    const M = (T) => {
      T.key === "Escape" && (v ? h(null) : w(!1));
    }, O = (T) => {
      y.current && !y.current.contains(T.target) && w(!1);
    };
    return window.addEventListener("keydown", M), x && document.addEventListener("mousedown", O), () => {
      window.removeEventListener("keydown", M), document.removeEventListener("mousedown", O);
    };
  }, [x, v]);
  const C = _(e), L = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, D = Be(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: s,
    popupContent: v,
    setPopupContent: h,
    isMenuOpen: x,
    setIsMenuOpen: w,
    copiedLabel: S,
    popupCopied: d,
    menuRef: y,
    parentChain: C,
    displayFilename: L,
    imgSrc: D,
    handleCopy: k,
    handleClick: (M) => {
      M.shiftKey ? (M.preventDefault(), M.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : M.ctrlKey || M.metaKey || t.selectedIds.size > 0 ? (M.preventDefault(), M.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (M) => {
      M.shiftKey ? (M.preventDefault(), M.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : M.ctrlKey || M.metaKey || t.selectedIds.size > 0 ? (M.preventDefault(), M.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (M.preventDefault(), M.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (M) => {
      (M.shiftKey || M.ctrlKey || M.metaKey || t.selectedIds.size > 0 || !M.target.closest("img.meld-image-card__thumbnail")) && M.preventDefault();
    },
    handleKeyDown: (M) => {
      (M.key === "Enter" || M.key === " ") && (M.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      await a(e);
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
      g(e);
    },
    fetchFullImageDetails: r
  };
}, sh = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  onAddUnifiedLoader: r,
  onRestoreWorkflow: l,
  onRunWithWorkflow: s,
  onEditSource: a,
  onEditTags: o
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu-container", ref: n, children: [
  /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (u) => {
        u.stopPropagation(), t(!e);
      },
      title: "Menu",
      children: /* @__PURE__ */ i.jsx(mm, { size: 16 })
    }
  ),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: "meld-image-card__menu-btn",
      onClick: (u) => {
        u.stopPropagation(), r();
      },
      title: "Add Unified Loader",
      children: /* @__PURE__ */ i.jsx(Do, { size: 16 })
    }
  ),
  e && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__menu", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), r(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(Do, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Add Unified Loader" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), l(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(em, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Restore Full Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), s(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(wa, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Run with Workflow" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), a(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(hm, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit source image" })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-image-card__menu-item",
        onClick: (u) => {
          u.stopPropagation(), o(), t(!1);
        },
        children: [
          /* @__PURE__ */ i.jsx(cn, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit Tags" })
        ]
      }
    )
  ] })
] }), ih = ({
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
                l ? /* @__PURE__ */ i.jsx(td, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ i.jsx(
                  sm,
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
), xd = fl.memo(
  ({ image: e }) => {
    const {
      state: t,
      dispatch: n,
      isSelected: r,
      popupContent: l,
      setPopupContent: s,
      isMenuOpen: a,
      setIsMenuOpen: o,
      copiedLabel: u,
      popupCopied: c,
      menuRef: g,
      parentChain: _,
      displayFilename: v,
      imgSrc: h,
      handleCopy: x,
      handleClick: w,
      handleContainerClick: S,
      handleMouseDown: p,
      handleKeyDown: d,
      handleRestoreWorkflow: f,
      handleAddUnifiedLoader: y,
      handleEditSource: k,
      handleEditTags: C,
      handleRunWithWorkflow: N,
      fetchFullImageDetails: L
    } = wd(e);
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${a ? "meld-image-card--menu-open" : ""}`,
        onClick: S,
        onMouseDown: p,
        onKeyDown: d,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
            "img",
            {
              src: h,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: p,
              onClick: (D) => {
                D.stopPropagation(), w(D);
              }
            }
          ) }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && v,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && _.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-lineage-thumbs", children: _.map(
                (D, E) => D.imgSrc && /* @__PURE__ */ i.jsx(
                  "img",
                  {
                    src: D.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (z) => {
                      z.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: D.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: E === 0 ? "Source" : E === 1 ? "Grand-Source" : `Ancestor (S${E + 1})`,
                    alt: "source thumb"
                  },
                  D.id || E
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
                onClick: async (D) => {
                  D.stopPropagation();
                  const E = await L(e.id);
                  s({
                    title: "Model",
                    text: E.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (D) => {
                        D.stopPropagation();
                        const E = await L(e.id);
                        x(E.model_name || "-", "Model");
                      },
                      children: u === "Model" ? "Copied!" : "Model"
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
                onClick: async (D) => {
                  D.stopPropagation();
                  const E = await L(e.id);
                  s({
                    title: "Positive Prompt",
                    text: E.positive_prompt || E.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (D) => {
                        D.stopPropagation();
                        const E = await L(e.id);
                        x(
                          E.positive_prompt || E.positive || "-",
                          "Positive"
                        );
                      },
                      children: u === "Positive" ? "Copied!" : "Positive"
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
                onClick: async (D) => {
                  D.stopPropagation();
                  const E = await L(e.id);
                  s({
                    title: "Negative Prompt",
                    text: E.negative_prompt || E.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (D) => {
                        D.stopPropagation();
                        const E = await L(e.id);
                        x(
                          E.negative_prompt || E.negative || "-",
                          "Negative"
                        );
                      },
                      children: u === "Negative" ? "Copied!" : "Negative"
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
                onClick: (D) => {
                  D.stopPropagation(), C();
                },
                children: [
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((D, E) => /* @__PURE__ */ i.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: D
                    },
                    `${D}-${E}`
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
            sh,
            {
              isMenuOpen: a,
              setIsMenuOpen: o,
              menuRef: g,
              onAddUnifiedLoader: y,
              onRestoreWorkflow: f,
              onRunWithWorkflow: N,
              onEditSource: k,
              onEditTags: C
            }
          ),
          l && /* @__PURE__ */ i.jsx(
            ih,
            {
              title: l.title,
              text: l.text,
              onClose: () => s(null),
              onCopy: (D) => x(D, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
xd.displayName = "DetailedImageCard";
const _d = fl.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: s,
      handleClick: a
    } = wd(e);
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
            onClick: (o) => {
              o.stopPropagation(), a(o);
            }
          }
        ) })
      }
    );
  }
);
_d.displayName = "SimpleImageCard";
const ah = ({ image: e }) => {
  const { state: t } = Le();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ i.jsx(_d, { image: e }) : /* @__PURE__ */ i.jsx(xd, { image: e });
}, oh = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px",
  className: r,
  style: l
}) => {
  const [s, a] = m.useState(!1), o = m.useRef(null);
  return m.useEffect(() => {
    const u = new IntersectionObserver(
      ([g]) => {
        g.isIntersecting && a(!0);
      },
      { rootMargin: n }
    ), c = o.current;
    return c && u.observe(c), () => {
      c && u.unobserve(c);
    };
  }, [n]), /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: o,
      className: r,
      style: {
        minHeight: `${t}px`,
        ...l
      },
      children: s ? e : null
    }
  );
}, uh = () => {
  const { state: e, dispatch: t } = Le(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Ym(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (g) {
      console.error("Failed to cancel scan:", g);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, s = n.progress.phase === "linking", { current: a, total: o } = n.progress, u = o > 0 ? a / o : 0, c = s ? 50 + Math.round(u * 50) : Math.round(u * 50);
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
        children: /* @__PURE__ */ i.jsx(ym, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ i.jsx(lm, { size: 14, className: "meld-success-icon" }),
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
}, ch = () => {
  const { state: e, refreshFavorites: t } = Le(), [n, r] = m.useState(!1), [l, s] = m.useState(null), [a, o] = m.useState(null), [u, c] = m.useState(""), [g, _] = m.useState("");
  m.useEffect(() => {
    if (l) {
      const S = setTimeout(() => s(null), 3e3);
      return () => clearTimeout(S);
    }
  }, [l]);
  const v = m.useCallback(
    async (S, p, d) => {
      S.stopPropagation();
      const f = `Are you sure you want to delete the favorite "${d}"?`;
      if (window.confirm(f))
        try {
          await Ao(p), await t();
        } catch (y) {
          U.error("Failed to delete favorite", y);
        }
    },
    [t]
  ), h = m.useCallback(
    (S, p) => {
      S.stopPropagation(), o(p), c(p.name), _(p.query);
    },
    []
  ), x = m.useCallback(async () => {
    if (!(!a || !u.trim() || !g.trim()))
      try {
        r(!0), await Dm(
          a.id,
          u,
          g
        ), await t(), o(null), s("Favorite updated.");
      } catch (S) {
        U.error("Failed to update favorite", S), s("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [a, u, g, t]), w = m.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (p) => p.query === e.searchQuery
    )) {
      const p = e.favorites.find((d) => d.query === e.searchQuery);
      if (p) {
        r(!0);
        try {
          await Ao(p.id), await t(), s("Favorite removed.");
        } catch (d) {
          U.error("Failed to delete favorite:", d);
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
    } catch (p) {
      U.error("Failed to save favorite:", p);
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    editingFavorite: a,
    setEditingFavorite: o,
    editFavoriteName: u,
    setEditFavoriteName: c,
    editFavoriteQuery: g,
    setEditFavoriteQuery: _,
    handleDeleteFavorite: v,
    handleEditFavorite: h,
    handleSaveEditFavorite: x,
    handleSaveFavorite: w,
    setToastMessage: s
  };
}, dh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Le(), [r, l] = m.useState(e.searchQuery), [s, a] = m.useState([]), [o, u] = m.useState(!1), [c, g] = m.useState([]), [_, v] = m.useState([]), h = e.settings["search.show_all_keywords"], [x, w] = m.useState(-1), [S, p] = m.useState(null), d = m.useRef(null), f = m.useRef(e.searchQuery), y = m.useCallback(async () => {
    if (_.length > 0) return;
    const b = await Lm();
    v(b);
  }, [_.length]);
  m.useEffect(() => {
    bm().then((b) => {
      p(b);
    }), h && y();
  }, [y, h]);
  const k = m.useMemo(() => {
    if (!S) return null;
    const b = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${b}):(.*)$`, "i");
  }, [S]), C = m.useCallback(() => {
    const b = !h;
    b && y(), n("search.show_all_keywords", b);
  }, [h, y, n]), N = r !== f.current;
  m.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      g([]);
      return;
    }
    !r && !e.searchQuery ? Tm().then((b) => {
      g(b);
    }) : g([]);
  }, [
    r,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), m.useEffect(() => {
    l(e.searchQuery), f.current = e.searchQuery;
  }, [e.searchQuery]), m.useEffect(() => {
    var b;
    (b = d.current) == null || b.focus();
  }, []);
  const L = m.useCallback(
    (b, B = !0) => {
      f.current !== b && (U.log("SearchBar: triggering search", { query: b }), t({ type: "SET_SEARCH_QUERY", payload: b }), B && u(!1), f.current = b);
    },
    [t]
  );
  m.useEffect(() => {
    const b = setTimeout(async () => {
      if (r === f.current)
        return;
      if (!e.settings["search.input_suggest"] || !k) {
        a([]), u(!1);
        return;
      }
      const B = r.split(/\s+/), I = B[B.length - 1];
      if (I) {
        const M = I.match(k);
        if (M) {
          const O = M[1].toLowerCase(), T = M[2], X = await Mm(T, O);
          a(X), u(X.length > 0), w(-1);
        } else
          a([]), u(!1);
      } else
        a([]), u(!1);
    }, 300);
    return () => clearTimeout(b);
  }, [r, e.settings["search.input_suggest"], k]);
  const D = m.useCallback(
    (b) => {
      var J;
      const B = r.split(/\s+/), M = (B.pop() || "").match(/^([-!])/), O = M ? M[1] : "", we = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(b.type) ? b.value : `"${b.value}"`, F = `${[
        ...B,
        `${O}${b.type}:${we}`
      ].join(" ").trim()} `;
      l(F), a([]), u(!1), (J = d.current) == null || J.focus();
    },
    [r, S]
  ), E = (b) => {
    b.key === "Enter" ? L(r) : b.key === "Tab" ? o && x >= 0 && (D(s[x]), b.preventDefault()) : b.key === "ArrowDown" ? o && (w((B) => Math.min(B + 1, s.length - 1)), b.preventDefault()) : b.key === "ArrowUp" ? o && (w((B) => Math.max(B - 1, -1)), b.preventDefault()) : b.key === "Escape" && u(!1);
  }, z = m.useCallback(() => {
    l(""), L("");
  }, [L]), V = m.useCallback(
    (b, B, I = !1) => {
      var we;
      if (I) {
        const F = `${b}:`;
        l(F), (we = d.current) == null || we.focus();
        return;
      }
      const T = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(b) ? B : `"${B}"`, X = `${b}:${T}`;
      l(X), L(X);
    },
    [L, S]
  ), ne = m.useCallback(
    (b) => {
      l(b), b || L("");
    },
    [L]
  ), j = m.useCallback(() => {
    if (r === f.current || !k)
      return;
    const b = r.split(/\s+/), B = b[b.length - 1];
    B != null && B.match(k) && u(!0);
  }, [r, k]), Q = m.useCallback(() => {
    setTimeout(() => u(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: s,
    showSuggestions: o,
    setShowSuggestions: u,
    searchSuggestions: c,
    allKeywords: _,
    showAllKeywords: h,
    toggleShowAllKeywords: C,
    selectedIndex: x,
    setSelectedIndex: w,
    inputRef: d,
    isQueryChanged: N,
    handleSearch: L,
    handleKeyDown: E,
    applySuggestion: D,
    clearSearch: z,
    applySearchSuggestion: V,
    handleInputChange: ne,
    handleInputFocus: j,
    handleInputBlur: Q
  };
}, fh = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, s] = m.useState(!1), [a, o] = m.useState(!1), [u, c] = m.useState(!1);
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
                  onClick: (g) => n(g, e),
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
                  onMouseEnter: () => o(!0),
                  onMouseLeave: () => o(!1),
                  title: "Edit favorite",
                  children: /* @__PURE__ */ i.jsx(id, { size: 14 })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  onClick: (g) => r(g, e.id, e.name),
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
                  children: /* @__PURE__ */ i.jsx(Fn, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Oo = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ i.jsx(cn, { size: 12 });
    case "model":
      return /* @__PURE__ */ i.jsx(nm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ i.jsx(vm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ i.jsx(rm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ i.jsx(ed, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ i.jsx(Zc, { size: 12 });
    case "sort":
      return /* @__PURE__ */ i.jsx(tm, { size: 12 });
    default:
      return null;
  }
}, ph = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: s,
  searchQuery: a,
  searchSuggestions: o,
  allKeywords: u,
  showAllKeywords: c,
  toggleShowAllKeywords: g,
  applySearchSuggestion: _,
  favorites: v,
  onSelectFavorite: h,
  onEditFavorite: x,
  onDeleteFavorite: w
}) => {
  const S = (y, k, C) => /* @__PURE__ */ i.jsxs(
    "button",
    {
      type: "button",
      onClick: () => _(y.type, y.value, C === "all"),
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
      onMouseEnter: (N) => {
        N.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", N.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", N.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (N) => {
        N.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", N.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", N.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ i.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Oo(y.type)
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
            children: y.type
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
            children: y.value
          }
        )
      ]
    },
    `${C}-${y.type}:${y.value}:${k}`
  ), p = () => !e || t.length === 0 ? null : /* @__PURE__ */ i.jsx(
    "div",
    {
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
        marginTop: "8px",
        maxHeight: "400px",
        overflowY: "auto",
        boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
      },
      children: t.map((y, k) => /* @__PURE__ */ i.jsx(
        "div",
        {
          onMouseDown: (C) => {
            C.preventDefault(), l(y);
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
          children: /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: "var(--meld-text-secondary)",
                  display: "flex"
                },
                children: Oo(y.type)
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
                  width: y.type.length > 8 ? "auto" : "60px",
                  flexShrink: 0
                },
                children: [
                  y.type,
                  ":"
                ]
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: y.value === ot ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: y.value === ot ? "bold" : "normal"
                },
                children: y.value === ot ? y.type === "tag" ? `Untagged (${ot})` : `No ${y.type} (${ot})` : y.value
              }
            )
          ] })
        },
        `${y.type}:${y.value}`
      ))
    }
  ), d = () => s || a || o.length === 0 ? null : /* @__PURE__ */ i.jsxs(
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
            children: o.map(
              (y, k) => S(y, k, "quick")
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
                        onClick: g,
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
                  children: Array.from(new Set(u.map((y) => y.type))).map(
                    (y, k) => S({ type: y, value: "" }, k, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), f = () => s || v.length === 0 ? null : /* @__PURE__ */ i.jsxs(
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
              /* @__PURE__ */ i.jsx(_i, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: v.map((y) => /* @__PURE__ */ i.jsx(
              fh,
              {
                fav: y,
                onSelect: h,
                onEdit: x,
                onDelete: w
              },
              y.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    p(),
    d(),
    f()
  ] });
}, mh = () => {
  const { state: e } = Le(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: s,
    allKeywords: a,
    showAllKeywords: o,
    toggleShowAllKeywords: u,
    selectedIndex: c,
    setSelectedIndex: g,
    inputRef: _,
    isQueryChanged: v,
    handleSearch: h,
    handleKeyDown: x,
    applySuggestion: w,
    clearSearch: S,
    applySearchSuggestion: p,
    handleInputChange: d,
    handleInputFocus: f,
    handleInputBlur: y
  } = dh(), {
    isSaving: k,
    toastMessage: C,
    editingFavorite: N,
    setEditingFavorite: L,
    editFavoriteName: D,
    setEditFavoriteName: E,
    editFavoriteQuery: z,
    setEditFavoriteQuery: V,
    handleDeleteFavorite: ne,
    handleEditFavorite: j,
    handleSaveEditFavorite: Q,
    handleSaveFavorite: b
  } = ch(), B = m.useRef(null), I = m.useRef(!1);
  m.useEffect(() => {
    N && B.current && B.current.focus();
  }, [N]);
  const M = (T) => {
    T.target === T.currentTarget && (I.current = !0);
  }, O = (T) => {
    T.target === T.currentTarget && I.current && L(null), I.current = !1;
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
                        onClick: () => h(t),
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
                        onMouseEnter: (T) => {
                          T.currentTarget.style.transform = "translateY(-1px)", v ? (T.currentTarget.style.filter = "brightness(1.15)", T.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : T.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (T) => {
                          T.currentTarget.style.transform = "none", v ? (T.currentTarget.style.filter = "none", T.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : T.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (T) => {
                          T.currentTarget.style.transform = "translateY(1px)", T.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (T) => {
                          T.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ i.jsx(
                            On,
                            {
                              size: 16,
                              color: v ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: v ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          v && /* @__PURE__ */ i.jsx(
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
                        onChange: (T) => d(T.target.value),
                        onKeyDown: x,
                        onBlur: y,
                        onFocus: f,
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
                        onClick: b,
                        disabled: k,
                        title: e.favorites.some((T) => T.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          _i,
                          {
                            size: 16,
                            color: e.favorites.some((T) => T.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((T) => T.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ i.jsx(
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
                        children: /* @__PURE__ */ i.jsx(Ee, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                ph,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: c,
                  setSelectedIndex: g,
                  applySuggestion: w,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: s,
                  allKeywords: a,
                  showAllKeywords: o,
                  toggleShowAllKeywords: u,
                  applySearchSuggestion: p,
                  favorites: e.favorites,
                  onSelectFavorite: (T) => {
                    n(T), h(T);
                  },
                  onEditFavorite: j,
                  onDeleteFavorite: ne
                }
              )
            ]
          }
        ),
        N && Pe.createPortal(
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: M,
              onMouseUp: O,
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (T) => T.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ i.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ i.jsx(_i, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => L(null),
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
                                    ref: B,
                                    type: "text",
                                    value: D,
                                    onChange: (T) => E(T.target.value),
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
                                    onKeyDown: (T) => {
                                      T.key === "Enter" && Q(), T.key === "Escape" && L(null);
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
                                    onChange: (T) => V(T.target.value),
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
                                    onKeyDown: (T) => {
                                      T.key === "Enter" && !T.shiftKey && (T.preventDefault(), Q()), T.key === "Escape" && L(null);
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
                          onClick: () => L(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: Q,
                          disabled: k || !D.trim() || !z.trim(),
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
}, hh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = m.useState([]), [l, s] = m.useState(!0), [a, o] = m.useState(""), [u, c] = m.useState(""), [g, _] = m.useState(!1), [v, h] = m.useState(null), [x, w] = m.useState(""), [S, p] = m.useState(!1), d = m.useRef(null), f = m.useCallback(async () => {
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
  m.useEffect(() => {
    f();
  }, [f]), m.useEffect(() => {
    v !== null && d.current && (d.current.focus(), d.current.select());
  }, [v]);
  const y = async (z) => {
    z.preventDefault();
    const V = u.trim();
    if (!(!V || g)) {
      if (V.toLowerCase() === ot) {
        alert(
          `Tag name '${ot}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((ne) => ne.name.toLowerCase() === V.toLowerCase())) {
        alert(`Tag "${V}" already exists.`);
        return;
      }
      _(!0);
      try {
        await Um(V), c(""), await f();
      } catch (ne) {
        console.error("Failed to add tag:", ne);
      } finally {
        _(!1);
      }
    }
  }, k = async (z, V) => {
    if (confirm(`Are you sure you want to delete tag "${V}"?`))
      try {
        await Wm(z), await f();
      } catch (ne) {
        console.error("Failed to delete tag:", ne);
      }
  }, C = (z) => {
    h(z.id), w(z.name);
  }, N = () => {
    h(null), w("");
  }, L = async (z) => {
    z.preventDefault();
    const V = x.trim();
    if (!V || v === null || S) return;
    if (V.toLowerCase() === ot) {
      alert(
        `Tag name '${ot}' is reserved for search and cannot be used.`
      );
      return;
    }
    const ne = n.find((j) => j.id === v);
    if (ne && ne.name === V) {
      N();
      return;
    }
    if (n.some(
      (j) => j.id !== v && j.name.toLowerCase() === V.toLowerCase()
    )) {
      alert(`Tag "${V}" already exists.`);
      return;
    }
    p(!0);
    try {
      await Vm(v, V), N(), await f();
    } catch (j) {
      console.error("Failed to rename tag:", j), alert(j instanceof Error ? j.message : "Failed to rename tag");
    } finally {
      p(!1);
    }
  }, D = (z) => {
    t(`tag:${z}`);
  }, E = m.useMemo(() => n.filter(
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
      /* @__PURE__ */ i.jsxs("form", { className: "meld-tag-add-form", onSubmit: y, children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (z) => c(z.target.value),
            disabled: g
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || g,
            children: [
              /* @__PURE__ */ i.jsx(xa, { size: 14 }),
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
            onChange: (z) => o(z.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-list", children: E.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : E.map((z) => /* @__PURE__ */ i.jsx("div", { className: "meld-tag-item", children: v === z.id ? /* @__PURE__ */ i.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: L,
          children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: x,
                onChange: (V) => w(V.target.value),
                onKeyDown: (V) => V.key === "Escape" && N()
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: S || !x.trim(),
                children: /* @__PURE__ */ i.jsx(td, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: N,
                disabled: S,
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
              onClick: () => D(z.name),
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
              children: /* @__PURE__ */ i.jsx(id, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => k(z.id, z.name),
              children: /* @__PURE__ */ i.jsx(Fn, { size: 14 })
            }
          )
        ] })
      ] }) }, z.id)) })
    ] })
  ] });
}, gh = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: s, viewerMode: a, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: g } = Sa(e, t), { getParentChain: _ } = vd(s, u), [v, h] = m.useState(!1), [x, w] = m.useState(
    u["viewer.show_details_by_default"]
  ), [S, p] = m.useState(null), d = S ?? u["viewer.show_thumbnails"], [f, y] = m.useState(!1), [k, C] = m.useState(!1), [N, L] = m.useState(null), [D, E] = m.useState(null), [z, V] = m.useState(
    null
  ), ne = m.useRef(null), j = m.useRef(!0);
  m.useEffect(() => (j.current = !0, () => {
    j.current = !1;
  }), []);
  const Q = m.useRef(l);
  m.useEffect(() => {
    Q.current = l;
  }, [l]);
  const b = a === "lineage" ? o : s.filter(
    (W) => W.exists !== !1 && (u["gallery.show_parent_images"] || !W.has_children)
  ), B = l === null ? -1 : b.findIndex((W) => W.id === l), I = (a === "lineage" && o.length > 0 ? o : s).find((W) => W.id === l), M = m.useCallback(
    async (W = !1) => {
      if (!I) return;
      const re = v ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!W && re === "confirm") {
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
        const R = e.viewScope === "trash", te = /* @__PURE__ */ new Set([I.id]);
        if (re === "lineage") {
          const K = await Si(I.id);
          for (const ee of K)
            te.add(ee.id);
        }
        if (!j.current || Q.current === null) return;
        if (b.length > te.size) {
          let K = !1;
          for (let ee = B + 1; ee < b.length; ee++)
            if (!te.has(b[ee].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: b[ee].id, mode: a }
              }), K = !0;
              break;
            }
          if (!K) {
            for (let ee = B - 1; ee >= 0; ee--)
              if (!te.has(b[ee].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: b[ee].id, mode: a }
                }), K = !0;
                break;
              }
          }
          K || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await ki(Array.from(te), R), !R) {
          const K = b.filter(
            (ee) => te.has(ee.id)
          );
          L(K), E(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(te) });
      } catch (R) {
        t({
          type: "SET_ERROR",
          payload: R instanceof Error ? R.message : String(R)
        });
      }
    },
    [
      I,
      v,
      u,
      e.viewScope,
      b,
      B,
      a,
      t
    ]
  ), O = m.useCallback(() => {
    I && c(I);
  }, [I, c]), T = m.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: v } });
  }, [t, v]), X = m.useCallback(async () => {
    const W = v ? u["fullscreen.loop"] : u["viewer.loop"];
    if (B === 0 && a === "gallery" && e.pagination.hasMore && !k && W) {
      C(!0);
      try {
        const re = e.pagination.limit, R = e.pagination.total, te = Math.max(0, R - re), K = await dl(
          te,
          re,
          e.searchQuery
        );
        if (!j.current || (t({ type: "APPEND_IMAGES", payload: K }), Q.current === null)) return;
        if (K.images.length > 0) {
          const ee = K.images[K.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: ee.id, mode: "gallery" }
          });
        }
      } catch (re) {
        console.error("Failed to jump to end:", re);
      } finally {
        C(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: v } });
  }, [
    B,
    a,
    e.pagination,
    e.searchQuery,
    u,
    t,
    k,
    v
  ]), we = m.useCallback(
    (W) => {
      W && "stopPropagation" in W && W.stopPropagation();
      const re = ne.current;
      re && (document.fullscreenElement ? document.exitFullscreen() : re.requestFullscreen().catch((R) => {
        console.error(
          `Error attempting to enable full-screen mode: ${R.message}`
        );
      }));
    },
    []
  ), F = m.useCallback(async () => {
    I && (b.length > 1 ? T() : t({ type: "CLOSE_VIEWER" }), await g(I));
  }, [I, b.length, T, g, t]), J = m.useCallback(async () => {
    if (!N || N.length === 0) return;
    const W = N.map((R) => R.id), re = W[0];
    try {
      const R = await _a(W);
      if (!j.current) return;
      if (t({ type: "ADD_IMAGES", payload: N }), e.viewScope === "trash") {
        const te = R.restored_ids || W;
        t({ type: "REMOVE_IMAGES", payload: te });
      }
      if (L(null), !j.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: re, mode: a }
      });
    } catch (R) {
      t({
        type: "SET_ERROR",
        payload: R instanceof Error ? R.message : String(R)
      });
    }
  }, [N, t, a, e.viewScope]), se = m.useCallback(async () => {
    if (N && N.length > 0)
      await J();
    else if (D && D.type === "tags") {
      const { imageId: W, addTags: re, removeTags: R } = D;
      try {
        await ji([W], re, R);
        const te = (a === "lineage" ? o : s).find((K) => K.id === W);
        if (te) {
          const K = [...te.tags];
          for (const nt of re)
            K.includes(nt) || K.push(nt);
          const ee = K.filter((nt) => !R.includes(nt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...te, tags: ee }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: W, mode: a }
          });
        }
        E(null);
      } catch (te) {
        t({
          type: "SET_ERROR",
          payload: te instanceof Error ? te.message : String(te)
        });
      }
    }
  }, [
    N,
    D,
    J,
    s,
    o,
    a,
    t
  ]), tt = m.useCallback(
    async (W) => {
      if (!W || !I) return;
      const re = I.id, R = [...I.tags], te = W.split(/\s+/), K = [], ee = [];
      let nt = !1, dn = !1, Rr = !1;
      for (const xe of te)
        if (xe.startsWith("tag:")) {
          const me = xe.substring(4);
          me && !R.includes(me) && !K.includes(me) && K.push(me);
        } else if (xe.startsWith("-tag:")) {
          const me = xe.substring(5);
          me && R.includes(me) && !ee.includes(me) && ee.push(me);
        } else if (xe.startsWith("tag-toggle:")) {
          const me = xe.substring(11);
          me && (R.includes(me) ? ee.includes(me) || ee.push(me) : K.includes(me) || K.push(me));
        } else xe === "next" ? nt = !0 : xe === "prev" ? dn = !0 : xe === "delete" && (Rr = !0);
      if (K.length > 0 || ee.length > 0)
        try {
          await ji(
            [re],
            K,
            ee
          );
          const xe = [...R];
          for (const Gt of K)
            xe.includes(Gt) || xe.push(Gt);
          const me = xe.filter((Gt) => !ee.includes(Gt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...I, id: re, tags: me }
          }), E({
            type: "tags",
            imageId: re,
            addTags: [...ee],
            removeTags: [...K]
          }), L(null);
        } catch (xe) {
          console.error("Failed to update tags via shortcut:", xe);
        }
      Rr ? M(!0) : nt ? T() : dn && X();
    },
    [I, t, T, X, M]
  );
  m.useEffect(() => {
    const W = (R) => {
      var me, Gt, ja;
      if (l === null) return;
      const te = ((me = document.activeElement) == null ? void 0 : me.tagName) === "INPUT" || ((Gt = document.activeElement) == null ? void 0 : Gt.tagName) === "TEXTAREA" || ((ja = document.activeElement) == null ? void 0 : ja.isContentEditable), K = R.key === "Delete" || R.key === "Backspace", ee = R.key === "ArrowRight" || R.key === "ArrowLeft", nt = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        R.key
      ), dn = R.key === "Escape", Rr = (R.ctrlKey || R.metaKey) && (R.key === "z" || R.key === "Z" || R.code === "KeyZ"), xe = /^[0-9]$/.test(R.key) && !R.ctrlKey && !R.metaKey && !R.altKey && R.code !== "KeyZ";
      if (K || ee || nt || dn || Rr || xe)
        if (te)
          if (dn) {
            if (e.activeModal.type !== "none") {
              R.preventDefault(), R.stopPropagation();
              return;
            }
            R.preventDefault(), R.stopPropagation(), R.stopImmediatePropagation();
          } else
            return;
        else {
          if (dn && e.activeModal.type !== "none") {
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
        T();
      else if (R.key === "ArrowLeft")
        X();
      else if (R.key === "f" || R.key === "F")
        we(R);
      else if (R.key === "i" || R.key === "I")
        w((ts) => !ts);
      else if (R.key === "t" || R.key === "T")
        O();
      else if ((R.key === "r" || R.key === "R") && e.viewScope === "trash")
        F();
      else if (R.key === "Delete")
        M();
      else if ((R.ctrlKey || R.metaKey) && (R.key === "z" || R.key === "Z"))
        se();
      else if (xe && !te) {
        const ts = `viewer.shortcut.${R.key}`, ns = u[ts];
        typeof ns == "string" && ns && (V(R.key), setTimeout(() => {
          j.current && V(null);
        }, 500), tt(ns));
      }
    };
    window.addEventListener("keydown", W, { capture: !0 });
    const re = () => {
      const R = !!document.fullscreenElement;
      h(R), w(R ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", re), () => {
      window.removeEventListener("keydown", W, { capture: !0 }), document.removeEventListener("fullscreenchange", re);
    };
  }, [
    l,
    t,
    we,
    T,
    X,
    u,
    M,
    e.activeModal.type,
    se,
    O,
    F,
    e.viewScope,
    tt
  ]), m.useEffect(() => {
    l !== null && r(l).catch((W) => {
      console.error("Failed to fetch full image details for viewer:", W);
    });
  }, [l, r]), m.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (y(!0), Si(l).then((W) => {
      j.current && t({ type: "SET_LINEAGE", payload: W });
    }).catch((W) => {
      console.error("Failed to fetch lineage:", W);
    }).finally(() => {
      j.current && y(!1);
    }));
  }, [a, l, o.length, t]), m.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || B !== -1 && B >= b.length - 15 && n();
  }, [
    l,
    b.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    B
  ]);
  const Pr = m.useMemo(() => {
    if (!d || B === -1) return [];
    const W = u["viewer.thumbnail_window_size"], re = Math.floor(W / 2);
    let R = Math.max(0, B - re);
    const te = Math.min(b.length, R + W);
    return te === b.length && (R = Math.max(0, te - W)), b.slice(R, te).map((K, ee) => ({
      img: K,
      absIndex: R + ee
    }));
  }, [b, B, u, d]), Kt = m.useMemo(() => I ? _(I) : [], [I, _]);
  return m.useEffect(() => {
    var W, re;
    if (l !== null) {
      if (d) {
        const R = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        R && R.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((W = document.activeElement) == null ? void 0 : W.tagName) === "CANVAS" && document.activeElement.blur(), (re = ne.current) == null || re.focus();
    }
  }, [l, d]), m.useEffect(() => {
    if (l === null || b.length === 0) return;
    const W = b.findIndex(
      (K) => K.id === l
    );
    if (W === -1) return;
    const re = (K) => Be(K), R = [
      W + 1,
      W + 2,
      W - 1
    ], te = setTimeout(() => {
      for (const K of R)
        if (K >= 0 && K < b.length) {
          const ee = b[K], nt = new Image();
          nt.src = re(ee);
        }
    }, 150);
    return () => clearTimeout(te);
  }, [l, b]), {
    isFullscreen: v,
    showDetails: x,
    setShowDetails: w,
    showThumbnails: d,
    setShowThumbnailsOverride: p,
    isLoadingLineage: f,
    isJumping: k,
    activeShortcutKey: z,
    lastDeletedImages: N,
    setLastDeletedImages: L,
    overlayRef: ne,
    handleNext: T,
    handlePrevious: X,
    handleDelete: M,
    handleTagEdit: O,
    handleRestore: F,
    handleUndo: se,
    toggleFullscreen: we,
    currentIndex: B,
    currentThumbnails: b,
    image: I,
    windowedThumbnails: Pr,
    parentChain: Kt
  };
}, yh = ({
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
}) }) : null, vh = ({
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
          (a, o) => a.imgSrc && /* @__PURE__ */ i.jsx(
            "img",
            {
              src: a.imgSrc,
              className: "meld-lineage-badge__parent-thumb",
              style: { cursor: "pointer" },
              loading: "lazy",
              onClick: (u) => {
                u.stopPropagation(), s({
                  type: "OPEN_VIEWER",
                  payload: {
                    id: a.id || e.id,
                    mode: "lineage"
                  }
                });
              },
              title: o === 0 ? "Source" : o === 1 ? "Grand-Source" : `Ancestor (S${o + 1})`,
              alt: "source thumb"
            },
            a.id || o
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
), kd = m.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, s = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = Be(e);
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
          /* @__PURE__ */ i.jsx("img", { src: o, alt: e.filename }),
          (s || a) && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${s ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: s ? "Source Image" : "Derivative Image",
              children: s ? /* @__PURE__ */ i.jsx(ed, { size: 12 }) : /* @__PURE__ */ i.jsx(Zc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
kd.displayName = "ThumbnailItem";
const wh = ({
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
  ) : e.map(({ img: o }) => /* @__PURE__ */ i.jsx(
    kd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  a === "gallery" && s && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ i.jsx(Nr, { className: "animate-spin", size: 20 }) })
] }) }), xh = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Le(), {
    isFullscreen: l,
    showDetails: s,
    setShowDetails: a,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: g,
    activeShortcutKey: _,
    setLastDeletedImages: v,
    overlayRef: h,
    handleNext: x,
    handlePrevious: w,
    handleTagEdit: S,
    handleRestore: p,
    toggleFullscreen: d,
    image: f,
    windowedThumbnails: y,
    parentChain: k
  } = gh({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), { executeWorkflow: C } = hd();
  if (!f) return null;
  const { viewerImageId: N, viewerMode: L } = e, D = Be(f), E = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Pe.createPortal(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        ref: h,
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
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${o ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (z) => z.stopPropagation(),
              children: [
                E && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: p,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ i.jsx(Nr, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => u(!o),
                      type: "button",
                      title: o ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ i.jsx(sd, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: S,
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
                      children: /* @__PURE__ */ i.jsx(om, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: d,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ i.jsx(pm, { size: 20 }) : /* @__PURE__ */ i.jsx(fm, { size: 20 })
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
                    onClick: w,
                    type: "button",
                    disabled: g,
                    children: /* @__PURE__ */ i.jsx(nd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-image-container", children: [
                  g && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ i.jsx(Nr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ i.jsx(
                    "img",
                    {
                      src: D,
                      alt: f.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${g ? "meld-viewer-image--loading" : ""}`,
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
                    children: /* @__PURE__ */ i.jsx(rd, { size: 32 })
                  }
                ),
                s && /* @__PURE__ */ i.jsx(
                  vh,
                  {
                    image: f,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: E,
                    parentChain: k,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ i.jsx(
                  wh,
                  {
                    windowedThumbnails: y,
                    viewerImageId: N,
                    currentImage: f,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: L
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  yh,
                  {
                    settings: e.settings,
                    activeShortcutKey: _
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ i.jsx(
            md,
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
            gd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: v
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ i.jsx(yd, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ i.jsx(dd, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ i.jsx(fd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ i.jsx(
            pd,
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
}, _h = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Le(), [s, a] = m.useState("gallery"), [o, u] = m.useState(""), [c, g] = m.useState(e.pagination.limit);
  m.useEffect(() => {
    g(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const _ = e.searchQuery.trim() !== "", v = m.useRef(null), h = m.useRef(null), x = m.useMemo(
    () => e.images.filter((S) => e.viewScope === "trash" ? S.exists !== !1 || e.settings["gallery.trash.show_missing"] : S.exists !== !1 && (e.settings["gallery.show_parent_images"] || !S.has_children)),
    [e.images, e.settings, e.viewScope]
  ), w = m.useMemo(
    () => x.slice(0, c),
    [x, c]
  );
  return m.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && x.length === 0 && (U.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    x.length,
    r
  ]), m.useEffect(() => {
    const S = (p) => {
      p.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), p.preventDefault(), p.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), p.preventDefault(), p.stopPropagation()));
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [e.activeModal.type, e.selectedIds.size, t]), m.useEffect(() => {
    const S = new IntersectionObserver(
      (d) => {
        if (d[0].isIntersecting) {
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
          ), g((f) => f + e.pagination.limit)) : e.pagination.hasMore ? (U.log(
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
    ), p = v.current;
    return p && S.observe(p), () => {
      p && S.unobserve(p);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    c,
    x.length,
    e.pagination.limit,
    e.images.length
  ]), m.useEffect(() => {
    const S = e.viewerImageId ?? h.current;
    if (S !== null && x.some((d) => d.id === S)) {
      const d = x.findIndex((y) => y.id === S);
      if (d >= c) {
        g(
          Math.ceil((d + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const f = document.querySelector(
        `[data-image-id="${S}"]`
      );
      f && (f.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (h.current = null));
    }
    e.viewerImageId !== null && (h.current = e.viewerImageId);
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
    lastSearchQuery: o,
    setLastSearchQuery: u,
    localLimit: c,
    displayedImages: x,
    visibleImages: w,
    isSearchActive: _,
    loadMoreRef: v
  };
}, kh = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Le(), { handleRunWithWorkflow: l } = Sa(e, t), s = e.selectedIds.size;
  if (s === 0) return null;
  const a = e.viewScope === "trash", o = () => {
    const c = e.images.filter(
      (_) => e.selectedIds.has(_.id)
    ), g = /* @__PURE__ */ new Set();
    for (const _ of c)
      if (_.tags)
        for (const v of _.tags)
          g.add(v);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(g)
      }
    });
  }, u = () => {
    const c = e.images.filter(
      (g) => e.selectedIds.has(g.id)
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
              onClick: o,
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
              onClick: u,
              children: [
                /* @__PURE__ */ i.jsx(
                  ld,
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
}, Sh = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: s,
    lastSearchQuery: a,
    setLastSearchQuery: o,
    localLimit: u,
    displayedImages: c,
    visibleImages: g,
    isSearchActive: _,
    loadMoreRef: v
  } = _h();
  return U.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: g.length,
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
                  onChange: (h) => r("gallery.trash.show_missing", h.target.checked)
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
                  l === "search" ? (o(e.searchQuery), e.searchQuery && t({ type: "SET_SEARCH_QUERY", payload: "" }), s("gallery")) : (!e.searchQuery && a && t({
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ i.jsx(um, { size: 14 }) : /* @__PURE__ */ i.jsx(sd, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(im, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(gm, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ i.jsx(mh, {}) })
        ] }),
        /* @__PURE__ */ i.jsx(uh, {}),
        e.error && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ i.jsx(
          hh,
          {
            onClose: () => s("gallery"),
            onSearch: (h) => {
              t({ type: "SET_SEARCH_QUERY", payload: h }), s("search");
            }
          }
        ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : g.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              style: {
                "--meld-thumbnail-size": `${e.settings["sidebar.thumbnail_size"] || 100}px`
              },
              children: g.map((h) => {
                const x = e.settings["sidebar.thumbnail_size"] || 100, w = e.settings["gallery.view_mode"] === "grid_only", S = w && h.width && h.height ? Math.min(
                  x,
                  x * h.width / h.height
                ) + 10 : w ? x + 10 : "100%";
                return /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    "data-image-id": h.id,
                    style: {
                      width: w ? "auto" : "100%",
                      flexShrink: 0,
                      display: w ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ i.jsx(
                      oh,
                      {
                        height: w ? x + 10 : Math.max(x, 150),
                        style: {
                          width: typeof S == "number" ? `${S}px` : S,
                          minWidth: typeof S == "number" ? `${S}px` : S,
                          display: w ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ i.jsx(ah, { image: h })
                      }
                    )
                  },
                  h.id
                );
              })
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: v,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= c.length && !e.pagination.hasMore && g.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx(kh, {}),
        e.viewerImageId !== null && /* @__PURE__ */ i.jsx(xh, {}),
        /* @__PURE__ */ i.jsx(lh, {})
      ]
    }
  );
};
Fo.registerExtension({
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
Fo.registerExtension({
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
      const n = await ud();
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
                  await od({
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
            ) : (U.log("Creating new gallery root"), Jr = Xc(lt), Jr.render(
              fl.createElement(
                $m,
                null,
                fl.createElement(Sh)
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
