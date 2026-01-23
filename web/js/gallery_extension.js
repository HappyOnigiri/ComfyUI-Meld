import { api as te } from "/scripts/api.js";
import { app as Ko } from "/scripts/app.js";
function Ad(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yo = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr = Symbol.for("react.element"), Od = Symbol.for("react.portal"), Fd = Symbol.for("react.fragment"), $d = Symbol.for("react.strict_mode"), Wd = Symbol.for("react.profiler"), Ud = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), Qd = Symbol.for("react.forward_ref"), Hd = Symbol.for("react.suspense"), Bd = Symbol.for("react.memo"), Gd = Symbol.for("react.lazy"), Pi = Symbol.iterator;
function Kd(e) {
  return e === null || typeof e != "object" ? null : (e = Pi && e[Pi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, qo = Object.assign, Jo = {};
function Hn(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || Xo;
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zo() {
}
Zo.prototype = Hn.prototype;
function Da(e, t, n) {
  this.props = e, this.context = t, this.refs = Jo, this.updater = n || Xo;
}
var Ra = Da.prototype = new Zo();
Ra.constructor = Da;
qo(Ra, Hn.prototype);
Ra.isPureReactComponent = !0;
var Di = Array.isArray, eu = Object.prototype.hasOwnProperty, za = { current: null }, tu = { key: !0, ref: !0, __self: !0, __source: !0 };
function nu(e, t, n) {
  var r, l = {}, a = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (a = "" + t.key), t) eu.call(t, r) && !tu.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Rr, type: e, key: a, ref: i, props: l, _owner: za.current };
}
function Yd(e, t) {
  return { $$typeof: Rr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Aa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rr;
}
function Xd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ri = /\/+/g;
function us(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Xd("" + e.key) : t.toString(36);
}
function al(e, t, n, r, l) {
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
        case Rr:
        case Od:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + us(i, 0) : r, Di(l) ? (n = "", e != null && (n = e.replace(Ri, "$&/") + "/"), al(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Aa(l) && (l = Yd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ri, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Di(e)) for (var o = 0; o < e.length; o++) {
    a = e[o];
    var u = r + us(a, o);
    i += al(a, t, n, u, l);
  }
  else if (u = Kd(e), typeof u == "function") for (e = u.call(e), o = 0; !(a = e.next()).done; ) a = a.value, u = r + us(a, o++), i += al(a, t, n, u, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Ur(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return al(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function qd(e) {
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
var Fe = { current: null }, il = { transition: null }, Jd = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: il, ReactCurrentOwner: za };
function ru() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: Ur, forEach: function(e, t, n) {
  Ur(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ur(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ur(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Aa(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = Hn;
re.Fragment = Fd;
re.Profiler = Wd;
re.PureComponent = Da;
re.StrictMode = $d;
re.Suspense = Hd;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jd;
re.act = ru;
re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = qo({}, e.props), l = e.key, a = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, i = za.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) eu.call(t, u) && !tu.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Rr, type: e.type, key: l, ref: a, props: r, _owner: i };
};
re.createContext = function(e) {
  return e = { $$typeof: Vd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ud, _context: e }, e.Consumer = e;
};
re.createElement = nu;
re.createFactory = function(e) {
  var t = nu.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: Qd, render: e };
};
re.isValidElement = Aa;
re.lazy = function(e) {
  return { $$typeof: Gd, _payload: { _status: -1, _result: e }, _init: qd };
};
re.memo = function(e, t) {
  return { $$typeof: Bd, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = il.transition;
  il.transition = {};
  try {
    e();
  } finally {
    il.transition = t;
  }
};
re.unstable_act = ru;
re.useCallback = function(e, t) {
  return Fe.current.useCallback(e, t);
};
re.useContext = function(e) {
  return Fe.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return Fe.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return Fe.current.useEffect(e, t);
};
re.useId = function() {
  return Fe.current.useId();
};
re.useImperativeHandle = function(e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function(e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return Fe.current.useMemo(e, t);
};
re.useReducer = function(e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
re.useRef = function(e) {
  return Fe.current.useRef(e);
};
re.useState = function(e) {
  return Fe.current.useState(e);
};
re.useSyncExternalStore = function(e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function() {
  return Fe.current.useTransition();
};
re.version = "18.3.1";
Yo.exports = re;
var h = Yo.exports;
const wl = /* @__PURE__ */ Ad(h);
var lu = { exports: {} }, Je = {}, su = { exports: {} }, au = {};
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
  function t(I, O) {
    var D = I.length;
    I.push(O);
    e: for (; 0 < D; ) {
      var M = D - 1 >>> 1, X = I[M];
      if (0 < l(X, O)) I[M] = O, I[D] = X, D = M;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var O = I[0], D = I.pop();
    if (D !== O) {
      I[0] = D;
      e: for (var M = 0, X = I.length, pe = X >>> 1; M < pe; ) {
        var U = 2 * (M + 1) - 1, z = I[U], A = U + 1, le = I[A];
        if (0 > l(z, D)) A < X && 0 > l(le, z) ? (I[M] = le, I[A] = D, M = A) : (I[M] = z, I[U] = D, M = U);
        else if (A < X && 0 > l(le, D)) I[M] = le, I[A] = D, M = A;
        else break e;
      }
    }
    return O;
  }
  function l(I, O) {
    var D = I.sortIndex - O.sortIndex;
    return D !== 0 ? D : I.id - O.id;
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
  var u = [], c = [], p = 1, _ = null, w = 3, v = !1, y = !1, k = !1, S = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(I) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= I) r(c), O.sortIndex = O.expirationTime, t(u, O);
      else break;
      O = n(c);
    }
  }
  function g(I) {
    if (k = !1, m(I), !y) if (n(u) !== null) y = !0, T(x);
    else {
      var O = n(c);
      O !== null && Y(g, O.startTime - I);
    }
  }
  function x(I, O) {
    y = !1, k && (k = !1, d(b), b = -1), v = !0;
    var D = w;
    try {
      for (m(O), _ = n(u); _ !== null && (!(_.expirationTime > O) || I && !L()); ) {
        var M = _.callback;
        if (typeof M == "function") {
          _.callback = null, w = _.priorityLevel;
          var X = M(_.expirationTime <= O);
          O = e.unstable_now(), typeof X == "function" ? _.callback = X : _ === n(u) && r(u), m(O);
        } else r(u);
        _ = n(u);
      }
      if (_ !== null) var pe = !0;
      else {
        var U = n(c);
        U !== null && Y(g, U.startTime - O), pe = !1;
      }
      return pe;
    } finally {
      _ = null, w = D, v = !1;
    }
  }
  var N = !1, E = null, b = -1, F = 5, C = -1;
  function L() {
    return !(e.unstable_now() - C < F);
  }
  function H() {
    if (E !== null) {
      var I = e.unstable_now();
      C = I;
      var O = !0;
      try {
        O = E(!0, I);
      } finally {
        O ? q() : (N = !1, E = null);
      }
    } else N = !1;
  }
  var q;
  if (typeof f == "function") q = function() {
    f(H);
  };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(), K = j.port2;
    j.port1.onmessage = H, q = function() {
      K.postMessage(null);
    };
  } else q = function() {
    S(H, 0);
  };
  function T(I) {
    E = I, N || (N = !0, q());
  }
  function Y(I, O) {
    b = S(function() {
      I(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, T(x));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(I) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = w;
    }
    var D = w;
    w = O;
    try {
      return I();
    } finally {
      w = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, O) {
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
    var D = w;
    w = I;
    try {
      return O();
    } finally {
      w = D;
    }
  }, e.unstable_scheduleCallback = function(I, O, D) {
    var M = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? M + D : M) : D = M, I) {
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
    return X = D + X, I = { id: p++, callback: O, priorityLevel: I, startTime: D, expirationTime: X, sortIndex: -1 }, D > M ? (I.sortIndex = D, t(c, I), n(u) === null && I === n(c) && (k ? (d(b), b = -1) : k = !0, Y(g, D - M))) : (I.sortIndex = X, t(u, I), y || v || (y = !0, T(x))), I;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(I) {
    var O = w;
    return function() {
      var D = w;
      w = O;
      try {
        return I.apply(this, arguments);
      } finally {
        w = D;
      }
    };
  };
})(au);
su.exports = au;
var Zd = su.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef = h, qe = Zd;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var iu = /* @__PURE__ */ new Set(), yr = {};
function pn(e, t) {
  zn(e, t), zn(e + "Capture", t);
}
function zn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) iu.add(t[e]);
}
var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), As = Object.prototype.hasOwnProperty, tf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, zi = {}, Ai = {};
function nf(e) {
  return As.call(Ai, e) ? !0 : As.call(zi, e) ? !1 : tf.test(e) ? Ai[e] = !0 : (zi[e] = !0, !1);
}
function rf(e, t, n, r) {
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
function lf(e, t, n, r) {
  if (t === null || typeof t > "u" || rf(e, t, n, r)) return !0;
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
function $e(e, t, n, r, l, a, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i;
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Te[e] = new $e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Te[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Te[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Te[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Te[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Te[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Te[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Te[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Te[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Oa = /[\-:]([a-z])/g;
function Fa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Oa,
    Fa
  );
  Te[t] = new $e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Oa, Fa);
  Te[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Oa, Fa);
  Te[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Te[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Te[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $a(e, t, n, r) {
  var l = Te.hasOwnProperty(t) ? Te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (lf(t, n, l, r) && (n = null), r || l === null ? nf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vr = Symbol.for("react.element"), vn = Symbol.for("react.portal"), wn = Symbol.for("react.fragment"), Wa = Symbol.for("react.strict_mode"), Os = Symbol.for("react.profiler"), ou = Symbol.for("react.provider"), uu = Symbol.for("react.context"), Ua = Symbol.for("react.forward_ref"), Fs = Symbol.for("react.suspense"), $s = Symbol.for("react.suspense_list"), Va = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), cu = Symbol.for("react.offscreen"), Oi = Symbol.iterator;
function Xn(e) {
  return e === null || typeof e != "object" ? null : (e = Oi && e[Oi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ye = Object.assign, cs;
function lr(e) {
  if (cs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    cs = t && t[1] || "";
  }
  return `
` + cs + e;
}
var ds = !1;
function fs(e, t) {
  if (!e || ds) return "";
  ds = !0;
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
    ds = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? lr(e) : "";
}
function sf(e) {
  switch (e.tag) {
    case 5:
      return lr(e.type);
    case 16:
      return lr("Lazy");
    case 13:
      return lr("Suspense");
    case 19:
      return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = fs(e.type, !1), e;
    case 11:
      return e = fs(e.type.render, !1), e;
    case 1:
      return e = fs(e.type, !0), e;
    default:
      return "";
  }
}
function Ws(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case vn:
      return "Portal";
    case Os:
      return "Profiler";
    case Wa:
      return "StrictMode";
    case Fs:
      return "Suspense";
    case $s:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case uu:
      return (e.displayName || "Context") + ".Consumer";
    case ou:
      return (e._context.displayName || "Context") + ".Provider";
    case Ua:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Va:
      return t = e.displayName || null, t !== null ? t : Ws(e.type) || "Memo";
    case Rt:
      t = e._payload, e = e._init;
      try {
        return Ws(e(t));
      } catch {
      }
  }
  return null;
}
function af(e) {
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
      return Ws(t);
    case 8:
      return t === Wa ? "StrictMode" : "Mode";
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
function Yt(e) {
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
function du(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function of(e) {
  var t = du(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Qr(e) {
  e._valueTracker || (e._valueTracker = of(e));
}
function fu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = du(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function xl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Us(e, t) {
  var n = t.checked;
  return ye({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Fi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Yt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function pu(e, t) {
  t = t.checked, t != null && $a(e, "checked", t, !1);
}
function Vs(e, t) {
  pu(e, t);
  var n = Yt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qs(e, t.type, Yt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function $i(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Qs(e, t, n) {
  (t !== "number" || xl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var sr = Array.isArray;
function bn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Wi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(R(92));
      if (sr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Yt(n) };
}
function mu(e, t) {
  var n = Yt(t.value), r = Yt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ui(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? hu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Hr, gu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Hr = Hr || document.createElement("div"), Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var or = {
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
}, uf = ["Webkit", "ms", "Moz", "O"];
Object.keys(or).forEach(function(e) {
  uf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), or[t] = or[e];
  });
});
function yu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || or.hasOwnProperty(e) && or[e] ? ("" + t).trim() : t + "px";
}
function vu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = yu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var cf = ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Gs(e, t) {
  if (t) {
    if (cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Ks(e, t) {
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
var Ys = null;
function Qa(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Xs = null, Ln = null, Tn = null;
function Vi(e) {
  if (e = Or(e)) {
    if (typeof Xs != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = Xl(t), Xs(e.stateNode, e.type, t));
  }
}
function wu(e) {
  Ln ? Tn ? Tn.push(e) : Tn = [e] : Ln = e;
}
function xu() {
  if (Ln) {
    var e = Ln, t = Tn;
    if (Tn = Ln = null, Vi(e), t) for (e = 0; e < t.length; e++) Vi(t[e]);
  }
}
function _u(e, t) {
  return e(t);
}
function ku() {
}
var ps = !1;
function Su(e, t, n) {
  if (ps) return e(t, n);
  ps = !0;
  try {
    return _u(e, t, n);
  } finally {
    ps = !1, (Ln !== null || Tn !== null) && (ku(), xu());
  }
}
function wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xl(n);
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
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var qs = !1;
if (Nt) try {
  var qn = {};
  Object.defineProperty(qn, "passive", { get: function() {
    qs = !0;
  } }), window.addEventListener("test", qn, qn), window.removeEventListener("test", qn, qn);
} catch {
  qs = !1;
}
function df(e, t, n, r, l, a, i, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var ur = !1, _l = null, kl = !1, Js = null, ff = { onError: function(e) {
  ur = !0, _l = e;
} };
function pf(e, t, n, r, l, a, i, o, u) {
  ur = !1, _l = null, df.apply(ff, arguments);
}
function mf(e, t, n, r, l, a, i, o, u) {
  if (pf.apply(this, arguments), ur) {
    if (ur) {
      var c = _l;
      ur = !1, _l = null;
    } else throw Error(R(198));
    kl || (kl = !0, Js = c);
  }
}
function mn(e) {
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
function ju(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Qi(e) {
  if (mn(e) !== e) throw Error(R(188));
}
function hf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = mn(e), t === null) throw Error(R(188));
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
        if (a === n) return Qi(l), e;
        if (a === r) return Qi(l), t;
        a = a.sibling;
      }
      throw Error(R(188));
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
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Eu(e) {
  return e = hf(e), e !== null ? Cu(e) : null;
}
function Cu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nu = qe.unstable_scheduleCallback, Hi = qe.unstable_cancelCallback, gf = qe.unstable_shouldYield, yf = qe.unstable_requestPaint, xe = qe.unstable_now, vf = qe.unstable_getCurrentPriorityLevel, Ha = qe.unstable_ImmediatePriority, Mu = qe.unstable_UserBlockingPriority, Sl = qe.unstable_NormalPriority, wf = qe.unstable_LowPriority, Iu = qe.unstable_IdlePriority, Bl = null, wt = null;
function xf(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var pt = Math.clz32 ? Math.clz32 : Sf, _f = Math.log, kf = Math.LN2;
function Sf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (_f(e) / kf | 0) | 0;
}
var Br = 64, Gr = 4194304;
function ar(e) {
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
function jl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? r = ar(o) : (a &= i, a !== 0 && (r = ar(a)));
  } else i = n & ~l, i !== 0 ? r = ar(i) : a !== 0 && (r = ar(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - pt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function jf(e, t) {
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
function Ef(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var i = 31 - pt(a), o = 1 << i, u = l[i];
    u === -1 ? (!(o & n) || o & r) && (l[i] = jf(o, t)) : u <= t && (e.expiredLanes |= o), a &= ~o;
  }
}
function Zs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function bu() {
  var e = Br;
  return Br <<= 1, !(Br & 4194240) && (Br = 64), e;
}
function ms(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
}
function Cf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - pt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function Ba(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var oe = 0;
function Lu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Tu, Ga, Pu, Du, Ru, ea = !1, Kr = [], Wt = null, Ut = null, Vt = null, xr = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), At = [], Nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Bi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function Jn(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = Or(t), t !== null && Ga(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Mf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Wt = Jn(Wt, e, t, n, r, l), !0;
    case "dragenter":
      return Ut = Jn(Ut, e, t, n, r, l), !0;
    case "mouseover":
      return Vt = Jn(Vt, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return xr.set(a, Jn(xr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, _r.set(a, Jn(_r.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function zu(e) {
  var t = nn(e.target);
  if (t !== null) {
    var n = mn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ju(n), t !== null) {
          e.blockedOn = t, Ru(e.priority, function() {
            Pu(n);
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
function ol(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ys = r, n.target.dispatchEvent(r), Ys = null;
    } else return t = Or(n), t !== null && Ga(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Gi(e, t, n) {
  ol(e) && n.delete(t);
}
function If() {
  ea = !1, Wt !== null && ol(Wt) && (Wt = null), Ut !== null && ol(Ut) && (Ut = null), Vt !== null && ol(Vt) && (Vt = null), xr.forEach(Gi), _r.forEach(Gi);
}
function Zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ea || (ea = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, If)));
}
function kr(e) {
  function t(l) {
    return Zn(l, e);
  }
  if (0 < Kr.length) {
    Zn(Kr[0], e);
    for (var n = 1; n < Kr.length; n++) {
      var r = Kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Wt !== null && Zn(Wt, e), Ut !== null && Zn(Ut, e), Vt !== null && Zn(Vt, e), xr.forEach(t), _r.forEach(t), n = 0; n < At.length; n++) r = At[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < At.length && (n = At[0], n.blockedOn === null); ) zu(n), n.blockedOn === null && At.shift();
}
var Pn = Lt.ReactCurrentBatchConfig, El = !0;
function bf(e, t, n, r) {
  var l = oe, a = Pn.transition;
  Pn.transition = null;
  try {
    oe = 1, Ka(e, t, n, r);
  } finally {
    oe = l, Pn.transition = a;
  }
}
function Lf(e, t, n, r) {
  var l = oe, a = Pn.transition;
  Pn.transition = null;
  try {
    oe = 4, Ka(e, t, n, r);
  } finally {
    oe = l, Pn.transition = a;
  }
}
function Ka(e, t, n, r) {
  if (El) {
    var l = ta(e, t, n, r);
    if (l === null) js(e, t, r, Cl, n), Bi(e, r);
    else if (Mf(l, e, t, n, r)) r.stopPropagation();
    else if (Bi(e, r), t & 4 && -1 < Nf.indexOf(e)) {
      for (; l !== null; ) {
        var a = Or(l);
        if (a !== null && Tu(a), a = ta(e, t, n, r), a === null && js(e, t, r, Cl, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else js(e, t, r, null, n);
  }
}
var Cl = null;
function ta(e, t, n, r) {
  if (Cl = null, e = Qa(r), e = nn(e), e !== null) if (t = mn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ju(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Cl = e, null;
}
function Au(e) {
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
      switch (vf()) {
        case Ha:
          return 1;
        case Mu:
          return 4;
        case Sl:
        case wf:
          return 16;
        case Iu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ft = null, Ya = null, ul = null;
function Ou() {
  if (ul) return ul;
  var e, t = Ya, n = t.length, r, l = "value" in Ft ? Ft.value : Ft.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[a - r]; r++) ;
  return ul = l.slice(e, 1 < r ? 1 - r : void 0);
}
function cl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Yr() {
  return !0;
}
function Ki() {
  return !1;
}
function Ze(e) {
  function t(n, r, l, a, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = i, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(a) : a[o]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Yr : Ki, this.isPropagationStopped = Ki, this;
  }
  return ye(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Yr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Yr);
  }, persist: function() {
  }, isPersistent: Yr }), t;
}
var Bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Xa = Ze(Bn), Ar = ye({}, Bn, { view: 0, detail: 0 }), Tf = Ze(Ar), hs, gs, er, Gl = ye({}, Ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qa, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== er && (er && e.type === "mousemove" ? (hs = e.screenX - er.screenX, gs = e.screenY - er.screenY) : gs = hs = 0, er = e), hs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : gs;
} }), Yi = Ze(Gl), Pf = ye({}, Gl, { dataTransfer: 0 }), Df = Ze(Pf), Rf = ye({}, Ar, { relatedTarget: 0 }), ys = Ze(Rf), zf = ye({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Af = Ze(zf), Of = ye({}, Bn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ff = Ze(Of), $f = ye({}, Bn, { data: 0 }), Xi = Ze($f), Wf = {
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
}, Uf = {
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
}, Vf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Qf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vf[e]) ? !!t[e] : !1;
}
function qa() {
  return Qf;
}
var Hf = ye({}, Ar, { key: function(e) {
  if (e.key) {
    var t = Wf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = cl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Uf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qa, charCode: function(e) {
  return e.type === "keypress" ? cl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? cl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Bf = Ze(Hf), Gf = ye({}, Gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qi = Ze(Gf), Kf = ye({}, Ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qa }), Yf = Ze(Kf), Xf = ye({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = Ze(Xf), Jf = ye({}, Gl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zf = Ze(Jf), ep = [9, 13, 27, 32], Ja = Nt && "CompositionEvent" in window, cr = null;
Nt && "documentMode" in document && (cr = document.documentMode);
var tp = Nt && "TextEvent" in window && !cr, Fu = Nt && (!Ja || cr && 8 < cr && 11 >= cr), Ji = " ", Zi = !1;
function $u(e, t) {
  switch (e) {
    case "keyup":
      return ep.indexOf(t.keyCode) !== -1;
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
function Wu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var xn = !1;
function np(e, t) {
  switch (e) {
    case "compositionend":
      return Wu(t);
    case "keypress":
      return t.which !== 32 ? null : (Zi = !0, Ji);
    case "textInput":
      return e = t.data, e === Ji && Zi ? null : e;
    default:
      return null;
  }
}
function rp(e, t) {
  if (xn) return e === "compositionend" || !Ja && $u(e, t) ? (e = Ou(), ul = Ya = Ft = null, xn = !1, e) : null;
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
      return Fu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function eo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lp[e.type] : t === "textarea";
}
function Uu(e, t, n, r) {
  wu(r), t = Nl(t, "onChange"), 0 < t.length && (n = new Xa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var dr = null, Sr = null;
function sp(e) {
  Zu(e, 0);
}
function Kl(e) {
  var t = Sn(e);
  if (fu(t)) return e;
}
function ap(e, t) {
  if (e === "change") return t;
}
var Vu = !1;
if (Nt) {
  var vs;
  if (Nt) {
    var ws = "oninput" in document;
    if (!ws) {
      var to = document.createElement("div");
      to.setAttribute("oninput", "return;"), ws = typeof to.oninput == "function";
    }
    vs = ws;
  } else vs = !1;
  Vu = vs && (!document.documentMode || 9 < document.documentMode);
}
function no() {
  dr && (dr.detachEvent("onpropertychange", Qu), Sr = dr = null);
}
function Qu(e) {
  if (e.propertyName === "value" && Kl(Sr)) {
    var t = [];
    Uu(t, Sr, e, Qa(e)), Su(sp, t);
  }
}
function ip(e, t, n) {
  e === "focusin" ? (no(), dr = t, Sr = n, dr.attachEvent("onpropertychange", Qu)) : e === "focusout" && no();
}
function op(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Kl(Sr);
}
function up(e, t) {
  if (e === "click") return Kl(t);
}
function cp(e, t) {
  if (e === "input" || e === "change") return Kl(t);
}
function dp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ht = typeof Object.is == "function" ? Object.is : dp;
function jr(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!As.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function ro(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function lo(e, t) {
  var n = ro(e);
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
    n = ro(n);
  }
}
function Hu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Bu() {
  for (var e = window, t = xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xl(e.document);
  }
  return t;
}
function Za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function fp(e) {
  var t = Bu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Hu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Za(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = lo(n, a);
        var i = lo(
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
var pp = Nt && "documentMode" in document && 11 >= document.documentMode, _n = null, na = null, fr = null, ra = !1;
function so(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ra || _n == null || _n !== xl(r) || (r = _n, "selectionStart" in r && Za(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fr && jr(fr, r) || (fr = r, r = Nl(na, "onSelect"), 0 < r.length && (t = new Xa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = _n)));
}
function Xr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var kn = { animationend: Xr("Animation", "AnimationEnd"), animationiteration: Xr("Animation", "AnimationIteration"), animationstart: Xr("Animation", "AnimationStart"), transitionend: Xr("Transition", "TransitionEnd") }, xs = {}, Gu = {};
Nt && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete kn.animationend.animation, delete kn.animationiteration.animation, delete kn.animationstart.animation), "TransitionEvent" in window || delete kn.transitionend.transition);
function Yl(e) {
  if (xs[e]) return xs[e];
  if (!kn[e]) return e;
  var t = kn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gu) return xs[e] = t[n];
  return e;
}
var Ku = Yl("animationend"), Yu = Yl("animationiteration"), Xu = Yl("animationstart"), qu = Yl("transitionend"), Ju = /* @__PURE__ */ new Map(), ao = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qt(e, t) {
  Ju.set(e, t), pn(t, [e]);
}
for (var _s = 0; _s < ao.length; _s++) {
  var ks = ao[_s], mp = ks.toLowerCase(), hp = ks[0].toUpperCase() + ks.slice(1);
  qt(mp, "on" + hp);
}
qt(Ku, "onAnimationEnd");
qt(Yu, "onAnimationIteration");
qt(Xu, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(qu, "onTransitionEnd");
zn("onMouseEnter", ["mouseout", "mouseover"]);
zn("onMouseLeave", ["mouseout", "mouseover"]);
zn("onPointerEnter", ["pointerout", "pointerover"]);
zn("onPointerLeave", ["pointerout", "pointerover"]);
pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gp = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
function io(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, mf(r, t, void 0, e), e.currentTarget = null;
}
function Zu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var o = r[i], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== a && l.isPropagationStopped()) break e;
        io(l, o, c), a = u;
      }
      else for (i = 0; i < r.length; i++) {
        if (o = r[i], u = o.instance, c = o.currentTarget, o = o.listener, u !== a && l.isPropagationStopped()) break e;
        io(l, o, c), a = u;
      }
    }
  }
  if (kl) throw e = Js, kl = !1, Js = null, e;
}
function ce(e, t) {
  var n = t[oa];
  n === void 0 && (n = t[oa] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ec(t, e, 2, !1), n.add(r));
}
function Ss(e, t, n) {
  var r = 0;
  t && (r |= 4), ec(n, e, r, t);
}
var qr = "_reactListening" + Math.random().toString(36).slice(2);
function Er(e) {
  if (!e[qr]) {
    e[qr] = !0, iu.forEach(function(n) {
      n !== "selectionchange" && (gp.has(n) || Ss(n, !1, e), Ss(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[qr] || (t[qr] = !0, Ss("selectionchange", !1, t));
  }
}
function ec(e, t, n, r) {
  switch (Au(t)) {
    case 1:
      var l = bf;
      break;
    case 4:
      l = Lf;
      break;
    default:
      l = Ka;
  }
  n = l.bind(null, t, n, e), l = void 0, !qs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function js(e, t, n, r, l) {
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
        if (i = nn(o), i === null) return;
        if (u = i.tag, u === 5 || u === 6) {
          r = a = i;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  Su(function() {
    var c = a, p = Qa(n), _ = [];
    e: {
      var w = Ju.get(e);
      if (w !== void 0) {
        var v = Xa, y = e;
        switch (e) {
          case "keypress":
            if (cl(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Bf;
            break;
          case "focusin":
            y = "focus", v = ys;
            break;
          case "focusout":
            y = "blur", v = ys;
            break;
          case "beforeblur":
          case "afterblur":
            v = ys;
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
            v = Yi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Df;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Yf;
            break;
          case Ku:
          case Yu:
          case Xu:
            v = Af;
            break;
          case qu:
            v = qf;
            break;
          case "scroll":
            v = Tf;
            break;
          case "wheel":
            v = Zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = qi;
        }
        var k = (t & 4) !== 0, S = !k && e === "scroll", d = k ? w !== null ? w + "Capture" : null : w;
        k = [];
        for (var f = c, m; f !== null; ) {
          m = f;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, d !== null && (g = wr(f, d), g != null && k.push(Cr(f, g, m)))), S) break;
          f = f.return;
        }
        0 < k.length && (w = new v(w, y, null, n, p), _.push({ event: w, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (w = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", w && n !== Ys && (y = n.relatedTarget || n.fromElement) && (nn(y) || y[Mt])) break e;
        if ((v || w) && (w = p.window === p ? p : (w = p.ownerDocument) ? w.defaultView || w.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = c, y = y ? nn(y) : null, y !== null && (S = mn(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = c), v !== y)) {
          if (k = Yi, g = "onMouseLeave", d = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (k = qi, g = "onPointerLeave", d = "onPointerEnter", f = "pointer"), S = v == null ? w : Sn(v), m = y == null ? w : Sn(y), w = new k(g, f + "leave", v, n, p), w.target = S, w.relatedTarget = m, g = null, nn(p) === c && (k = new k(d, f + "enter", y, n, p), k.target = m, k.relatedTarget = S, g = k), S = g, v && y) t: {
            for (k = v, d = y, f = 0, m = k; m; m = yn(m)) f++;
            for (m = 0, g = d; g; g = yn(g)) m++;
            for (; 0 < f - m; ) k = yn(k), f--;
            for (; 0 < m - f; ) d = yn(d), m--;
            for (; f--; ) {
              if (k === d || d !== null && k === d.alternate) break t;
              k = yn(k), d = yn(d);
            }
            k = null;
          }
          else k = null;
          v !== null && oo(_, w, v, k, !1), y !== null && S !== null && oo(_, S, y, k, !0);
        }
      }
      e: {
        if (w = c ? Sn(c) : window, v = w.nodeName && w.nodeName.toLowerCase(), v === "select" || v === "input" && w.type === "file") var x = ap;
        else if (eo(w)) if (Vu) x = cp;
        else {
          x = op;
          var N = ip;
        }
        else (v = w.nodeName) && v.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (x = up);
        if (x && (x = x(e, c))) {
          Uu(_, x, n, p);
          break e;
        }
        N && N(e, w, c), e === "focusout" && (N = w._wrapperState) && N.controlled && w.type === "number" && Qs(w, "number", w.value);
      }
      switch (N = c ? Sn(c) : window, e) {
        case "focusin":
          (eo(N) || N.contentEditable === "true") && (_n = N, na = c, fr = null);
          break;
        case "focusout":
          fr = na = _n = null;
          break;
        case "mousedown":
          ra = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ra = !1, so(_, n, p);
          break;
        case "selectionchange":
          if (pp) break;
        case "keydown":
        case "keyup":
          so(_, n, p);
      }
      var E;
      if (Ja) e: {
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
      else xn ? $u(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b && (Fu && n.locale !== "ko" && (xn || b !== "onCompositionStart" ? b === "onCompositionEnd" && xn && (E = Ou()) : (Ft = p, Ya = "value" in Ft ? Ft.value : Ft.textContent, xn = !0)), N = Nl(c, b), 0 < N.length && (b = new Xi(b, e, null, n, p), _.push({ event: b, listeners: N }), E ? b.data = E : (E = Wu(n), E !== null && (b.data = E)))), (E = tp ? np(e, n) : rp(e, n)) && (c = Nl(c, "onBeforeInput"), 0 < c.length && (p = new Xi("onBeforeInput", "beforeinput", null, n, p), _.push({ event: p, listeners: c }), p.data = E));
    }
    Zu(_, t);
  });
}
function Cr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = wr(e, n), a != null && r.unshift(Cr(e, a, l)), a = wr(e, t), a != null && r.push(Cr(e, a, l))), e = e.return;
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function oo(e, t, n, r, l) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = wr(n, a), u != null && i.unshift(Cr(n, u, o))) : l || (u = wr(n, a), u != null && i.push(Cr(n, u, o)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var yp = /\r\n?/g, vp = /\u0000|\uFFFD/g;
function uo(e) {
  return (typeof e == "string" ? e : "" + e).replace(yp, `
`).replace(vp, "");
}
function Jr(e, t, n) {
  if (t = uo(t), uo(e) !== t && n) throw Error(R(425));
}
function Ml() {
}
var la = null, sa = null;
function aa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ia = typeof setTimeout == "function" ? setTimeout : void 0, wp = typeof clearTimeout == "function" ? clearTimeout : void 0, co = typeof Promise == "function" ? Promise : void 0, xp = typeof queueMicrotask == "function" ? queueMicrotask : typeof co < "u" ? function(e) {
  return co.resolve(null).then(e).catch(_p);
} : ia;
function _p(e) {
  setTimeout(function() {
    throw e;
  });
}
function Es(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), kr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  kr(t);
}
function Qt(e) {
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
function fo(e) {
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
var Gn = Math.random().toString(36).slice(2), vt = "__reactFiber$" + Gn, Nr = "__reactProps$" + Gn, Mt = "__reactContainer$" + Gn, oa = "__reactEvents$" + Gn, kp = "__reactListeners$" + Gn, Sp = "__reactHandles$" + Gn;
function nn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Mt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fo(e); e !== null; ) {
        if (n = e[vt]) return n;
        e = fo(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Or(e) {
  return e = e[vt] || e[Mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Xl(e) {
  return e[Nr] || null;
}
var ua = [], jn = -1;
function Jt(e) {
  return { current: e };
}
function de(e) {
  0 > jn || (e.current = ua[jn], ua[jn] = null, jn--);
}
function ue(e, t) {
  jn++, ua[jn] = e.current, e.current = t;
}
var Xt = {}, ze = Jt(Xt), Qe = Jt(!1), on = Xt;
function An(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function He(e) {
  return e = e.childContextTypes, e != null;
}
function Il() {
  de(Qe), de(ze);
}
function po(e, t, n) {
  if (ze.current !== Xt) throw Error(R(168));
  ue(ze, t), ue(Qe, n);
}
function tc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, af(e) || "Unknown", l));
  return ye({}, n, r);
}
function bl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xt, on = ze.current, ue(ze, e), ue(Qe, Qe.current), !0;
}
function mo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? (e = tc(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, de(Qe), de(ze), ue(ze, e)) : de(Qe), ue(Qe, n);
}
var St = null, ql = !1, Cs = !1;
function nc(e) {
  St === null ? St = [e] : St.push(e);
}
function jp(e) {
  ql = !0, nc(e);
}
function Zt() {
  if (!Cs && St !== null) {
    Cs = !0;
    var e = 0, t = oe;
    try {
      var n = St;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      St = null, ql = !1;
    } catch (l) {
      throw St !== null && (St = St.slice(e + 1)), Nu(Ha, Zt), l;
    } finally {
      oe = t, Cs = !1;
    }
  }
  return null;
}
var En = [], Cn = 0, Ll = null, Tl = 0, et = [], tt = 0, un = null, jt = 1, Et = "";
function en(e, t) {
  En[Cn++] = Tl, En[Cn++] = Ll, Ll = e, Tl = t;
}
function rc(e, t, n) {
  et[tt++] = jt, et[tt++] = Et, et[tt++] = un, un = e;
  var r = jt;
  e = Et;
  var l = 32 - pt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - pt(t) + l;
  if (30 < a) {
    var i = l - l % 5;
    a = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, jt = 1 << 32 - pt(t) + l | n << l | r, Et = a + e;
  } else jt = 1 << a | n << l | r, Et = e;
}
function ei(e) {
  e.return !== null && (en(e, 1), rc(e, 1, 0));
}
function ti(e) {
  for (; e === Ll; ) Ll = En[--Cn], En[Cn] = null, Tl = En[--Cn], En[Cn] = null;
  for (; e === un; ) un = et[--tt], et[tt] = null, Et = et[--tt], et[tt] = null, jt = et[--tt], et[tt] = null;
}
var Xe = null, Ye = null, fe = !1, dt = null;
function lc(e, t) {
  var n = nt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ho(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = Qt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = un !== null ? { id: jt, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, Ye = null, !0) : !1;
    default:
      return !1;
  }
}
function ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function da(e) {
  if (fe) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!ho(e, t)) {
        if (ca(e)) throw Error(R(418));
        t = Qt(n.nextSibling);
        var r = Xe;
        t && ho(e, t) ? lc(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, Xe = e);
      }
    } else {
      if (ca(e)) throw Error(R(418));
      e.flags = e.flags & -4097 | 2, fe = !1, Xe = e;
    }
  }
}
function go(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Xe = e;
}
function Zr(e) {
  if (e !== Xe) return !1;
  if (!fe) return go(e), fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !aa(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (ca(e)) throw sc(), Error(R(418));
    for (; t; ) lc(e, t), t = Qt(t.nextSibling);
  }
  if (go(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function sc() {
  for (var e = Ye; e; ) e = Qt(e.nextSibling);
}
function On() {
  Ye = Xe = null, fe = !1;
}
function ni(e) {
  dt === null ? dt = [e] : dt.push(e);
}
var Ep = Lt.ReactCurrentBatchConfig;
function tr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(i) {
        var o = l.refs;
        i === null ? delete o[a] : o[a] = i;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function el(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function yo(e) {
  var t = e._init;
  return t(e._payload);
}
function ac(e) {
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
    return d = Kt(d, f), d.index = 0, d.sibling = null, d;
  }
  function a(d, f, m) {
    return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < f ? (d.flags |= 2, f) : m) : (d.flags |= 2, f)) : (d.flags |= 1048576, f);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function o(d, f, m, g) {
    return f === null || f.tag !== 6 ? (f = Ps(m, d.mode, g), f.return = d, f) : (f = l(f, m), f.return = d, f);
  }
  function u(d, f, m, g) {
    var x = m.type;
    return x === wn ? p(d, f, m.props.children, g, m.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Rt && yo(x) === f.type) ? (g = l(f, m.props), g.ref = tr(d, f, m), g.return = d, g) : (g = yl(m.type, m.key, m.props, null, d.mode, g), g.ref = tr(d, f, m), g.return = d, g);
  }
  function c(d, f, m, g) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = Ds(m, d.mode, g), f.return = d, f) : (f = l(f, m.children || []), f.return = d, f);
  }
  function p(d, f, m, g, x) {
    return f === null || f.tag !== 7 ? (f = an(m, d.mode, g, x), f.return = d, f) : (f = l(f, m), f.return = d, f);
  }
  function _(d, f, m) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ps("" + f, d.mode, m), f.return = d, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Vr:
          return m = yl(f.type, f.key, f.props, null, d.mode, m), m.ref = tr(d, null, f), m.return = d, m;
        case vn:
          return f = Ds(f, d.mode, m), f.return = d, f;
        case Rt:
          var g = f._init;
          return _(d, g(f._payload), m);
      }
      if (sr(f) || Xn(f)) return f = an(f, d.mode, m, null), f.return = d, f;
      el(d, f);
    }
    return null;
  }
  function w(d, f, m, g) {
    var x = f !== null ? f.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return x !== null ? null : o(d, f, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Vr:
          return m.key === x ? u(d, f, m, g) : null;
        case vn:
          return m.key === x ? c(d, f, m, g) : null;
        case Rt:
          return x = m._init, w(
            d,
            f,
            x(m._payload),
            g
          );
      }
      if (sr(m) || Xn(m)) return x !== null ? null : p(d, f, m, g, null);
      el(d, m);
    }
    return null;
  }
  function v(d, f, m, g, x) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return d = d.get(m) || null, o(f, d, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Vr:
          return d = d.get(g.key === null ? m : g.key) || null, u(f, d, g, x);
        case vn:
          return d = d.get(g.key === null ? m : g.key) || null, c(f, d, g, x);
        case Rt:
          var N = g._init;
          return v(d, f, m, N(g._payload), x);
      }
      if (sr(g) || Xn(g)) return d = d.get(m) || null, p(f, d, g, x, null);
      el(f, g);
    }
    return null;
  }
  function y(d, f, m, g) {
    for (var x = null, N = null, E = f, b = f = 0, F = null; E !== null && b < m.length; b++) {
      E.index > b ? (F = E, E = null) : F = E.sibling;
      var C = w(d, E, m[b], g);
      if (C === null) {
        E === null && (E = F);
        break;
      }
      e && E && C.alternate === null && t(d, E), f = a(C, f, b), N === null ? x = C : N.sibling = C, N = C, E = F;
    }
    if (b === m.length) return n(d, E), fe && en(d, b), x;
    if (E === null) {
      for (; b < m.length; b++) E = _(d, m[b], g), E !== null && (f = a(E, f, b), N === null ? x = E : N.sibling = E, N = E);
      return fe && en(d, b), x;
    }
    for (E = r(d, E); b < m.length; b++) F = v(E, d, b, m[b], g), F !== null && (e && F.alternate !== null && E.delete(F.key === null ? b : F.key), f = a(F, f, b), N === null ? x = F : N.sibling = F, N = F);
    return e && E.forEach(function(L) {
      return t(d, L);
    }), fe && en(d, b), x;
  }
  function k(d, f, m, g) {
    var x = Xn(m);
    if (typeof x != "function") throw Error(R(150));
    if (m = x.call(m), m == null) throw Error(R(151));
    for (var N = x = null, E = f, b = f = 0, F = null, C = m.next(); E !== null && !C.done; b++, C = m.next()) {
      E.index > b ? (F = E, E = null) : F = E.sibling;
      var L = w(d, E, C.value, g);
      if (L === null) {
        E === null && (E = F);
        break;
      }
      e && E && L.alternate === null && t(d, E), f = a(L, f, b), N === null ? x = L : N.sibling = L, N = L, E = F;
    }
    if (C.done) return n(
      d,
      E
    ), fe && en(d, b), x;
    if (E === null) {
      for (; !C.done; b++, C = m.next()) C = _(d, C.value, g), C !== null && (f = a(C, f, b), N === null ? x = C : N.sibling = C, N = C);
      return fe && en(d, b), x;
    }
    for (E = r(d, E); !C.done; b++, C = m.next()) C = v(E, d, b, C.value, g), C !== null && (e && C.alternate !== null && E.delete(C.key === null ? b : C.key), f = a(C, f, b), N === null ? x = C : N.sibling = C, N = C);
    return e && E.forEach(function(H) {
      return t(d, H);
    }), fe && en(d, b), x;
  }
  function S(d, f, m, g) {
    if (typeof m == "object" && m !== null && m.type === wn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Vr:
          e: {
            for (var x = m.key, N = f; N !== null; ) {
              if (N.key === x) {
                if (x = m.type, x === wn) {
                  if (N.tag === 7) {
                    n(d, N.sibling), f = l(N, m.props.children), f.return = d, d = f;
                    break e;
                  }
                } else if (N.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Rt && yo(x) === N.type) {
                  n(d, N.sibling), f = l(N, m.props), f.ref = tr(d, N, m), f.return = d, d = f;
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            m.type === wn ? (f = an(m.props.children, d.mode, g, m.key), f.return = d, d = f) : (g = yl(m.type, m.key, m.props, null, d.mode, g), g.ref = tr(d, f, m), g.return = d, d = g);
          }
          return i(d);
        case vn:
          e: {
            for (N = m.key; f !== null; ) {
              if (f.key === N) if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                n(d, f.sibling), f = l(f, m.children || []), f.return = d, d = f;
                break e;
              } else {
                n(d, f);
                break;
              }
              else t(d, f);
              f = f.sibling;
            }
            f = Ds(m, d.mode, g), f.return = d, d = f;
          }
          return i(d);
        case Rt:
          return N = m._init, S(d, f, N(m._payload), g);
      }
      if (sr(m)) return y(d, f, m, g);
      if (Xn(m)) return k(d, f, m, g);
      el(d, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(d, f.sibling), f = l(f, m), f.return = d, d = f) : (n(d, f), f = Ps(m, d.mode, g), f.return = d, d = f), i(d)) : n(d, f);
  }
  return S;
}
var Fn = ac(!0), ic = ac(!1), Pl = Jt(null), Dl = null, Nn = null, ri = null;
function li() {
  ri = Nn = Dl = null;
}
function si(e) {
  var t = Pl.current;
  de(Pl), e._currentValue = t;
}
function fa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Dn(e, t) {
  Dl = e, ri = Nn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), e.firstContext = null);
}
function lt(e) {
  var t = e._currentValue;
  if (ri !== e) if (e = { context: e, memoizedValue: t, next: null }, Nn === null) {
    if (Dl === null) throw Error(R(308));
    Nn = e, Dl.dependencies = { lanes: 0, firstContext: e };
  } else Nn = Nn.next = e;
  return t;
}
var rn = null;
function ai(e) {
  rn === null ? rn = [e] : rn.push(e);
}
function oc(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ai(t)) : (n.next = l.next, l.next = n), t.interleaved = n, It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function ii(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function uc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ct(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, It(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ai(r)) : (t.next = l.next, l.next = t), r.interleaved = t, It(e, n);
}
function dl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ba(e, n);
  }
}
function vo(e, t) {
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
function Rl(e, t, n, r) {
  var l = e.updateQueue;
  zt = !1;
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
      var w = o.lane, v = o.eventTime;
      if ((r & w) === w) {
        p !== null && (p = p.next = {
          eventTime: v,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var y = e, k = o;
          switch (w = t, v = n, k.tag) {
            case 1:
              if (y = k.payload, typeof y == "function") {
                _ = y.call(v, _, w);
                break e;
              }
              _ = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = k.payload, w = typeof y == "function" ? y.call(v, _, w) : y, w == null) break e;
              _ = ye({}, _, w);
              break e;
            case 2:
              zt = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, w = l.effects, w === null ? l.effects = [o] : w.push(o));
      } else v = { eventTime: v, lane: w, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, p === null ? (c = p = v, u = _) : p = p.next = v, i |= w;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        w = o, o = w.next, w.next = null, l.lastBaseUpdate = w, l.shared.pending = null;
      }
    } while (!0);
    if (p === null && (u = _), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    dn |= i, e.lanes = i, e.memoizedState = _;
  }
}
function wo(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(R(191, l));
      l.call(r);
    }
  }
}
var Fr = {}, xt = Jt(Fr), Mr = Jt(Fr), Ir = Jt(Fr);
function ln(e) {
  if (e === Fr) throw Error(R(174));
  return e;
}
function oi(e, t) {
  switch (ue(Ir, t), ue(Mr, e), ue(xt, Fr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bs(t, e);
  }
  de(xt), ue(xt, t);
}
function $n() {
  de(xt), de(Mr), de(Ir);
}
function cc(e) {
  ln(Ir.current);
  var t = ln(xt.current), n = Bs(t, e.type);
  t !== n && (ue(Mr, e), ue(xt, n));
}
function ui(e) {
  Mr.current === e && (de(xt), de(Mr));
}
var he = Jt(0);
function zl(e) {
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
var Ns = [];
function ci() {
  for (var e = 0; e < Ns.length; e++) Ns[e]._workInProgressVersionPrimary = null;
  Ns.length = 0;
}
var fl = Lt.ReactCurrentDispatcher, Ms = Lt.ReactCurrentBatchConfig, cn = 0, ge = null, je = null, Ne = null, Al = !1, pr = !1, br = 0, Cp = 0;
function Pe() {
  throw Error(R(321));
}
function di(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
  return !0;
}
function fi(e, t, n, r, l, a) {
  if (cn = a, ge = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fl.current = e === null || e.memoizedState === null ? bp : Lp, e = n(r, l), pr) {
    a = 0;
    do {
      if (pr = !1, br = 0, 25 <= a) throw Error(R(301));
      a += 1, Ne = je = null, t.updateQueue = null, fl.current = Tp, e = n(r, l);
    } while (pr);
  }
  if (fl.current = Ol, t = je !== null && je.next !== null, cn = 0, Ne = je = ge = null, Al = !1, t) throw Error(R(300));
  return e;
}
function pi() {
  var e = br !== 0;
  return br = 0, e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ne === null ? ge.memoizedState = Ne = e : Ne = Ne.next = e, Ne;
}
function st() {
  if (je === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = je.next;
  var t = Ne === null ? ge.memoizedState : Ne.next;
  if (t !== null) Ne = t, je = e;
  else {
    if (e === null) throw Error(R(310));
    je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, Ne === null ? ge.memoizedState = Ne = e : Ne = Ne.next = e;
  }
  return Ne;
}
function Lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Is(e) {
  var t = st(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = je, l = r.baseQueue, a = n.pending;
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
      if ((cn & p) === p) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var _ = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = _, i = r) : u = u.next = _, ge.lanes |= p, dn |= p;
      }
      c = c.next;
    } while (c !== null && c !== a);
    u === null ? i = r : u.next = o, ht(r, t.memoizedState) || (Ve = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, ge.lanes |= a, dn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bs(e) {
  var t = st(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      a = e(a, i.action), i = i.next;
    while (i !== l);
    ht(a, t.memoizedState) || (Ve = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function dc() {
}
function fc(e, t) {
  var n = ge, r = st(), l = t(), a = !ht(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ve = !0), r = r.queue, mi(hc.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Ne !== null && Ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, Tr(9, mc.bind(null, n, r, l, t), void 0, null), Me === null) throw Error(R(349));
    cn & 30 || pc(n, t, l);
  }
  return l;
}
function pc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function mc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, gc(t) && yc(e);
}
function hc(e, t, n) {
  return n(function() {
    gc(t) && yc(e);
  });
}
function gc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function yc(e) {
  var t = It(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function xo(e) {
  var t = yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Lr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ip.bind(null, ge, e), [t.memoizedState, e];
}
function Tr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ge.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ge.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function vc() {
  return st().memoizedState;
}
function pl(e, t, n, r) {
  var l = yt();
  ge.flags |= e, l.memoizedState = Tr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Jl(e, t, n, r) {
  var l = st();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (je !== null) {
    var i = je.memoizedState;
    if (a = i.destroy, r !== null && di(r, i.deps)) {
      l.memoizedState = Tr(t, n, a, r);
      return;
    }
  }
  ge.flags |= e, l.memoizedState = Tr(1 | t, n, a, r);
}
function _o(e, t) {
  return pl(8390656, 8, e, t);
}
function mi(e, t) {
  return Jl(2048, 8, e, t);
}
function wc(e, t) {
  return Jl(4, 2, e, t);
}
function xc(e, t) {
  return Jl(4, 4, e, t);
}
function _c(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function kc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Jl(4, 4, _c.bind(null, t, e), n);
}
function hi() {
}
function Sc(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && di(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function jc(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && di(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ec(e, t, n) {
  return cn & 21 ? (ht(n, t) || (n = bu(), ge.lanes |= n, dn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = n);
}
function Np(e, t) {
  var n = oe;
  oe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ms.transition;
  Ms.transition = {};
  try {
    e(!1), t();
  } finally {
    oe = n, Ms.transition = r;
  }
}
function Cc() {
  return st().memoizedState;
}
function Mp(e, t, n) {
  var r = Gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Nc(e)) Mc(t, n);
  else if (n = oc(e, t, n, r), n !== null) {
    var l = Oe();
    mt(n, e, r, l), Ic(n, t, r);
  }
}
function Ip(e, t, n) {
  var r = Gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nc(e)) Mc(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var i = t.lastRenderedState, o = a(i, n);
      if (l.hasEagerState = !0, l.eagerState = o, ht(o, i)) {
        var u = t.interleaved;
        u === null ? (l.next = l, ai(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = oc(e, t, l, r), n !== null && (l = Oe(), mt(n, e, r, l), Ic(n, t, r));
  }
}
function Nc(e) {
  var t = e.alternate;
  return e === ge || t !== null && t === ge;
}
function Mc(e, t) {
  pr = Al = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ic(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ba(e, n);
  }
}
var Ol = { readContext: lt, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, bp = { readContext: lt, useCallback: function(e, t) {
  return yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: lt, useEffect: _o, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pl(
    4194308,
    4,
    _c.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return pl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return pl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = yt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = yt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Mp.bind(null, ge, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = yt();
  return e = { current: e }, t.memoizedState = e;
}, useState: xo, useDebugValue: hi, useDeferredValue: function(e) {
  return yt().memoizedState = e;
}, useTransition: function() {
  var e = xo(!1), t = e[0];
  return e = Np.bind(null, e[1]), yt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ge, l = yt();
  if (fe) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), Me === null) throw Error(R(349));
    cn & 30 || pc(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, _o(hc.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Tr(9, mc.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = yt(), t = Me.identifierPrefix;
  if (fe) {
    var n = Et, r = jt;
    n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = br++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Cp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Lp = {
  readContext: lt,
  useCallback: Sc,
  useContext: lt,
  useEffect: mi,
  useImperativeHandle: kc,
  useInsertionEffect: wc,
  useLayoutEffect: xc,
  useMemo: jc,
  useReducer: Is,
  useRef: vc,
  useState: function() {
    return Is(Lr);
  },
  useDebugValue: hi,
  useDeferredValue: function(e) {
    var t = st();
    return Ec(t, je.memoizedState, e);
  },
  useTransition: function() {
    var e = Is(Lr)[0], t = st().memoizedState;
    return [e, t];
  },
  useMutableSource: dc,
  useSyncExternalStore: fc,
  useId: Cc,
  unstable_isNewReconciler: !1
}, Tp = { readContext: lt, useCallback: Sc, useContext: lt, useEffect: mi, useImperativeHandle: kc, useInsertionEffect: wc, useLayoutEffect: xc, useMemo: jc, useReducer: bs, useRef: vc, useState: function() {
  return bs(Lr);
}, useDebugValue: hi, useDeferredValue: function(e) {
  var t = st();
  return je === null ? t.memoizedState = e : Ec(t, je.memoizedState, e);
}, useTransition: function() {
  var e = bs(Lr)[0], t = st().memoizedState;
  return [e, t];
}, useMutableSource: dc, useSyncExternalStore: fc, useId: Cc, unstable_isNewReconciler: !1 };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ye({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ye({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = { isMounted: function(e) {
  return (e = e._reactInternals) ? mn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Oe(), l = Gt(e), a = Ct(r, l);
  a.payload = t, n != null && (a.callback = n), t = Ht(e, a, l), t !== null && (mt(t, e, l, r), dl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Oe(), l = Gt(e), a = Ct(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Ht(e, a, l), t !== null && (mt(t, e, l, r), dl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Oe(), r = Gt(e), l = Ct(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ht(e, l, r), t !== null && (mt(t, e, r, n), dl(t, e, r));
} };
function ko(e, t, n, r, l, a, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, i) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, r) || !jr(l, a) : !0;
}
function bc(e, t, n) {
  var r = !1, l = Xt, a = t.contextType;
  return typeof a == "object" && a !== null ? a = lt(a) : (l = He(t) ? on : ze.current, r = t.contextTypes, a = (r = r != null) ? An(e, l) : Xt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Zl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function So(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function ma(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ii(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = lt(a) : (a = He(t) ? on : ze.current, l.context = An(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (pa(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Zl.enqueueReplaceState(l, l.state, null), Rl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wn(e, t) {
  try {
    var n = "", r = t;
    do
      n += sf(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ls(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ha(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Pp = typeof WeakMap == "function" ? WeakMap : Map;
function Lc(e, t, n) {
  n = Ct(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    $l || ($l = !0, Ea = r), ha(e, t);
  }, n;
}
function Tc(e, t, n) {
  n = Ct(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      ha(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    ha(e, t), typeof r != "function" && (Bt === null ? Bt = /* @__PURE__ */ new Set([this]) : Bt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function jo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Pp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Gp.bind(null, e, t, n), t.then(e, e));
}
function Eo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Co(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1), t.tag = 2, Ht(n, t, 1))), n.lanes |= 1), e);
}
var Dp = Lt.ReactCurrentOwner, Ve = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? ic(t, null, n, r) : Fn(t, e.child, n, r);
}
function No(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return Dn(t, l), r = fi(e, t, n, r, a, l), n = pi(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, bt(e, t, l)) : (fe && n && ei(t), t.flags |= 1, Ae(e, t, r, l), t.child);
}
function Mo(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !Si(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Pc(e, t, a, r, l)) : (e = yl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var i = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : jr, n(i, r) && e.ref === t.ref) return bt(e, t, l);
  }
  return t.flags |= 1, e = Kt(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Pc(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (jr(a, r) && e.ref === t.ref) if (Ve = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ve = !0);
    else return t.lanes = e.lanes, bt(e, t, l);
  }
  return ga(e, t, n, r, l);
}
function Dc(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ue(In, Ke), Ke |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ue(In, Ke), Ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, ue(In, Ke), Ke |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, ue(In, Ke), Ke |= r;
  return Ae(e, t, l, n), t.child;
}
function Rc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ga(e, t, n, r, l) {
  var a = He(n) ? on : ze.current;
  return a = An(t, a), Dn(t, l), n = fi(e, t, n, r, a, l), r = pi(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, bt(e, t, l)) : (fe && r && ei(t), t.flags |= 1, Ae(e, t, n, l), t.child);
}
function Io(e, t, n, r, l) {
  if (He(n)) {
    var a = !0;
    bl(t);
  } else a = !1;
  if (Dn(t, l), t.stateNode === null) ml(e, t), bc(t, n, r), ma(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, o = t.memoizedProps;
    i.props = o;
    var u = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = lt(c) : (c = He(n) ? on : ze.current, c = An(t, c));
    var p = n.getDerivedStateFromProps, _ = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    _ || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || u !== c) && So(t, i, r, c), zt = !1;
    var w = t.memoizedState;
    i.state = w, Rl(t, r, i, l), u = t.memoizedState, o !== r || w !== u || Qe.current || zt ? (typeof p == "function" && (pa(t, n, p, r), u = t.memoizedState), (o = zt || ko(t, n, o, r, w, u, c)) ? (_ || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, uc(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : ut(t.type, o), i.props = c, _ = t.pendingProps, w = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = lt(u) : (u = He(n) ? on : ze.current, u = An(t, u));
    var v = n.getDerivedStateFromProps;
    (p = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== _ || w !== u) && So(t, i, r, u), zt = !1, w = t.memoizedState, i.state = w, Rl(t, r, i, l);
    var y = t.memoizedState;
    o !== _ || w !== y || Qe.current || zt ? (typeof v == "function" && (pa(t, n, v, r), y = t.memoizedState), (c = zt || ko(t, n, c, r, w, y, u) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = u, r = c) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ya(e, t, n, r, a, l);
}
function ya(e, t, n, r, l, a) {
  Rc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && mo(t, n, !1), bt(e, t, a);
  r = t.stateNode, Dp.current = t;
  var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Fn(t, e.child, null, a), t.child = Fn(t, null, o, a)) : Ae(e, t, o, a), t.memoizedState = r.state, l && mo(t, n, !0), t.child;
}
function zc(e) {
  var t = e.stateNode;
  t.pendingContext ? po(e, t.pendingContext, t.pendingContext !== t.context) : t.context && po(e, t.context, !1), oi(e, t.containerInfo);
}
function bo(e, t, n, r, l) {
  return On(), ni(l), t.flags |= 256, Ae(e, t, n, r), t.child;
}
var va = { dehydrated: null, treeContext: null, retryLane: 0 };
function wa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ac(e, t, n) {
  var r = t.pendingProps, l = he.current, a = !1, i = (t.flags & 128) !== 0, o;
  if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ue(he, l & 1), e === null)
    return da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, i = { mode: "hidden", children: i }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = ns(i, r, 0, null), e = an(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = wa(n), t.memoizedState = va, e) : gi(t, i));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return Rp(e, t, i, r, o, l, n);
  if (a) {
    a = r.fallback, i = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Kt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? a = Kt(o, a) : (a = an(a, i, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, i = e.child.memoizedState, i = i === null ? wa(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, a.memoizedState = i, a.childLanes = e.childLanes & ~n, t.memoizedState = va, r;
  }
  return a = e.child, e = a.sibling, r = Kt(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function gi(e, t) {
  return t = ns({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function tl(e, t, n, r) {
  return r !== null && ni(r), Fn(t, e.child, null, n), e = gi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Rp(e, t, n, r, l, a, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ls(Error(R(422))), tl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = ns({ mode: "visible", children: r.children }, l, 0, null), a = an(a, l, i, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Fn(t, e.child, null, i), t.child.memoizedState = wa(i), t.memoizedState = va, a);
  if (!(t.mode & 1)) return tl(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, a = Error(R(419)), r = Ls(a, r, void 0), tl(e, t, i, r);
  }
  if (o = (i & e.childLanes) !== 0, Ve || o) {
    if (r = Me, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, It(e, l), mt(r, e, l, -1));
    }
    return ki(), r = Ls(Error(R(421))), tl(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Kp.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, Ye = Qt(l.nextSibling), Xe = t, fe = !0, dt = null, e !== null && (et[tt++] = jt, et[tt++] = Et, et[tt++] = un, jt = e.id, Et = e.overflow, un = t), t = gi(t, r.children), t.flags |= 4096, t);
}
function Lo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fa(e.return, t, n);
}
function Ts(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Oc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Ae(e, t, r.children, n), r = he.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Lo(e, n, t);
      else if (e.tag === 19) Lo(e, n, t);
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
  if (ue(he, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && zl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ts(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && zl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ts(t, !0, n, null, a);
      break;
    case "together":
      Ts(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ml(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), dn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Kt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function zp(e, t, n) {
  switch (t.tag) {
    case 3:
      zc(t), On();
      break;
    case 5:
      cc(t);
      break;
    case 1:
      He(t.type) && bl(t);
      break;
    case 4:
      oi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      ue(Pl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (ue(he, he.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ac(e, t, n) : (ue(he, he.current & 1), e = bt(e, t, n), e !== null ? e.sibling : null);
      ue(he, he.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Oc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ue(he, he.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dc(e, t, n);
  }
  return bt(e, t, n);
}
var Fc, xa, $c, Wc;
Fc = function(e, t) {
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
xa = function() {
};
$c = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, ln(xt.current);
    var a = null;
    switch (n) {
      case "input":
        l = Us(e, l), r = Us(e, r), a = [];
        break;
      case "select":
        l = ye({}, l, { value: void 0 }), r = ye({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = Hs(e, l), r = Hs(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ml);
    }
    Gs(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (i in o) o.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (yr.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (i in o) !o.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in u) u.hasOwnProperty(i) && o[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
      } else n || (a || (a = []), a.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (a = a || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (yr.hasOwnProperty(c) ? (u != null && c === "onScroll" && ce("scroll", e), a || o === u || (a = [])) : (a = a || []).push(c, u));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Wc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function nr(e, t) {
  if (!fe) switch (e.tailMode) {
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
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ap(e, t, n) {
  var r = t.pendingProps;
  switch (ti(t), t.tag) {
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
      return De(t), null;
    case 1:
      return He(t.type) && Il(), De(t), null;
    case 3:
      return r = t.stateNode, $n(), de(Qe), de(ze), ci(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (Ma(dt), dt = null))), xa(e, t), De(t), null;
    case 5:
      ui(t);
      var l = ln(Ir.current);
      if (n = t.type, e !== null && t.stateNode != null) $c(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return De(t), null;
        }
        if (e = ln(xt.current), Zr(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[vt] = t, r[Nr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < ir.length; l++) ce(ir[l], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce(
                "error",
                r
              ), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Fi(r, a), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ce("invalid", r);
              break;
            case "textarea":
              Wi(r, a), ce("invalid", r);
          }
          Gs(n, a), l = null;
          for (var i in a) if (a.hasOwnProperty(i)) {
            var o = a[i];
            i === "children" ? typeof o == "string" ? r.textContent !== o && (a.suppressHydrationWarning !== !0 && Jr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (a.suppressHydrationWarning !== !0 && Jr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : yr.hasOwnProperty(i) && o != null && i === "onScroll" && ce("scroll", r);
          }
          switch (n) {
            case "input":
              Qr(r), $i(r, a, !0);
              break;
            case "textarea":
              Qr(r), Ui(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Ml);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[vt] = t, e[Nr] = r, Fc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ks(n, r), n) {
              case "dialog":
                ce("cancel", e), ce("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < ir.length; l++) ce(ir[l], e);
                l = r;
                break;
              case "source":
                ce("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ce(
                  "error",
                  e
                ), ce("load", e), l = r;
                break;
              case "details":
                ce("toggle", e), l = r;
                break;
              case "input":
                Fi(e, r), l = Us(e, r), ce("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ye({}, r, { value: void 0 }), ce("invalid", e);
                break;
              case "textarea":
                Wi(e, r), l = Hs(e, r), ce("invalid", e);
                break;
              default:
                l = r;
            }
            Gs(n, l), o = l;
            for (a in o) if (o.hasOwnProperty(a)) {
              var u = o[a];
              a === "style" ? vu(e, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && gu(e, u)) : a === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && vr(e, u) : typeof u == "number" && vr(e, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (yr.hasOwnProperty(a) ? u != null && a === "onScroll" && ce("scroll", e) : u != null && $a(e, a, u, i));
            }
            switch (n) {
              case "input":
                Qr(e), $i(e, r, !1);
                break;
              case "textarea":
                Qr(e), Ui(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? bn(e, !!r.multiple, a, !1) : r.defaultValue != null && bn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ml);
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
      return De(t), null;
    case 6:
      if (e && t.stateNode != null) Wc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (n = ln(Ir.current), ln(xt.current), Zr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (a = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
            case 3:
              Jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return De(t), null;
    case 13:
      if (de(he), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (fe && Ye !== null && t.mode & 1 && !(t.flags & 128)) sc(), On(), t.flags |= 98560, a = !1;
        else if (a = Zr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(R(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(R(317));
            a[vt] = t;
          } else On(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          De(t), a = !1;
        } else dt !== null && (Ma(dt), dt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || he.current & 1 ? Ee === 0 && (Ee = 3) : ki())), t.updateQueue !== null && (t.flags |= 4), De(t), null);
    case 4:
      return $n(), xa(e, t), e === null && Er(t.stateNode.containerInfo), De(t), null;
    case 10:
      return si(t.type._context), De(t), null;
    case 17:
      return He(t.type) && Il(), De(t), null;
    case 19:
      if (de(he), a = t.memoizedState, a === null) return De(t), null;
      if (r = (t.flags & 128) !== 0, i = a.rendering, i === null) if (r) nr(a, !1);
      else {
        if (Ee !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = zl(e), i !== null) {
            for (t.flags |= 128, nr(a, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, i = a.alternate, i === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, e = i.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ue(he, he.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && xe() > Un && (t.flags |= 128, r = !0, nr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = zl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), nr(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !fe) return De(t), null;
        } else 2 * xe() - a.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, nr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (i.sibling = t.child, t.child = i) : (n = a.last, n !== null ? n.sibling = i : t.child = i, a.last = i);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = xe(), t.sibling = null, n = he.current, ue(he, r ? n & 1 | 2 : n & 1), t) : (De(t), null);
    case 22:
    case 23:
      return _i(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ke & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Op(e, t) {
  switch (ti(t), t.tag) {
    case 1:
      return He(t.type) && Il(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return $n(), de(Qe), de(ze), ci(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ui(t), null;
    case 13:
      if (de(he), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        On();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return de(he), null;
    case 4:
      return $n(), null;
    case 10:
      return si(t.type._context), null;
    case 22:
    case 23:
      return _i(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var nl = !1, Re = !1, Fp = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ve(e, t, r);
  }
  else n.current = null;
}
function _a(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var To = !1;
function $p(e, t) {
  if (la = El, e = Bu(), Za(e)) {
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
        var i = 0, o = -1, u = -1, c = 0, p = 0, _ = e, w = null;
        t: for (; ; ) {
          for (var v; _ !== n || l !== 0 && _.nodeType !== 3 || (o = i + l), _ !== a || r !== 0 && _.nodeType !== 3 || (u = i + r), _.nodeType === 3 && (i += _.nodeValue.length), (v = _.firstChild) !== null; )
            w = _, _ = v;
          for (; ; ) {
            if (_ === e) break t;
            if (w === n && ++c === l && (o = i), w === a && ++p === r && (u = i), (v = _.nextSibling) !== null) break;
            _ = w, w = _.parentNode;
          }
          _ = v;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (sa = { focusedElem: e, selectionRange: n }, El = !1, $ = t; $ !== null; ) if (t = $, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, $ = e;
  else for (; $ !== null; ) {
    t = $;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var k = y.memoizedProps, S = y.memoizedState, d = t.stateNode, f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : ut(t.type, k), S);
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
          throw Error(R(163));
      }
    } catch (g) {
      ve(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, $ = e;
      break;
    }
    $ = t.return;
  }
  return y = To, To = !1, y;
}
function mr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && _a(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function es(e, t) {
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
function ka(e) {
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
function Uc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Uc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Nr], delete t[oa], delete t[kp], delete t[Sp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Vc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Po(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ml));
  else if (r !== 4 && (e = e.child, e !== null)) for (Sa(e, t, n), e = e.sibling; e !== null; ) Sa(e, t, n), e = e.sibling;
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), e = e.sibling;
}
var Ie = null, ct = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) Qc(e, t, n), n = n.sibling;
}
function Qc(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function") try {
    wt.onCommitFiberUnmount(Bl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Re || Mn(n, t);
    case 6:
      var r = Ie, l = ct;
      Ie = null, Dt(e, t, n), Ie = r, ct = l, Ie !== null && (ct ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
      break;
    case 18:
      Ie !== null && (ct ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? Es(e.parentNode, n) : e.nodeType === 1 && Es(e, n), kr(e)) : Es(Ie, n.stateNode));
      break;
    case 4:
      r = Ie, l = ct, Ie = n.stateNode.containerInfo, ct = !0, Dt(e, t, n), Ie = r, ct = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, i = a.destroy;
          a = a.tag, i !== void 0 && (a & 2 || a & 4) && _a(n, t, i), l = l.next;
        } while (l !== r);
      }
      Dt(e, t, n);
      break;
    case 1:
      if (!Re && (Mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        ve(n, t, o);
      }
      Dt(e, t, n);
      break;
    case 21:
      Dt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null, Dt(e, t, n), Re = r) : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function Do(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fp()), t.forEach(function(r) {
      var l = Yp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, i = t, o = i;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            Ie = o.stateNode, ct = !1;
            break e;
          case 3:
            Ie = o.stateNode.containerInfo, ct = !0;
            break e;
          case 4:
            Ie = o.stateNode.containerInfo, ct = !0;
            break e;
        }
        o = o.return;
      }
      if (Ie === null) throw Error(R(160));
      Qc(a, i, l), Ie = null, ct = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      ve(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hc(t, e), t = t.sibling;
}
function Hc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(t, e), gt(e), r & 4) {
        try {
          mr(3, e, e.return), es(3, e);
        } catch (k) {
          ve(e, e.return, k);
        }
        try {
          mr(5, e, e.return);
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      break;
    case 1:
      it(t, e), gt(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (it(t, e), gt(e), r & 512 && n !== null && Mn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          vr(l, "");
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, i = n !== null ? n.memoizedProps : a, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && a.type === "radio" && a.name != null && pu(l, a), Ks(o, i);
          var c = Ks(o, a);
          for (i = 0; i < u.length; i += 2) {
            var p = u[i], _ = u[i + 1];
            p === "style" ? vu(l, _) : p === "dangerouslySetInnerHTML" ? gu(l, _) : p === "children" ? vr(l, _) : $a(l, p, _, c);
          }
          switch (o) {
            case "input":
              Vs(l, a);
              break;
            case "textarea":
              mu(l, a);
              break;
            case "select":
              var w = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var v = a.value;
              v != null ? bn(l, !!a.multiple, v, !1) : w !== !!a.multiple && (a.defaultValue != null ? bn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : bn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Nr] = a;
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      break;
    case 6:
      if (it(t, e), gt(e), r & 4) {
        if (e.stateNode === null) throw Error(R(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      break;
    case 3:
      if (it(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        kr(t.containerInfo);
      } catch (k) {
        ve(e, e.return, k);
      }
      break;
    case 4:
      it(t, e), gt(e);
      break;
    case 13:
      it(t, e), gt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (wi = xe())), r & 4 && Do(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Re = (c = Re) || p, it(t, e), Re = c) : it(t, e), gt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1) for ($ = e, p = e.child; p !== null; ) {
          for (_ = $ = p; $ !== null; ) {
            switch (w = $, v = w.child, w.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                mr(4, w, w.return);
                break;
              case 1:
                Mn(w, w.return);
                var y = w.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = w, n = w.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (k) {
                    ve(r, n, k);
                  }
                }
                break;
              case 5:
                Mn(w, w.return);
                break;
              case 22:
                if (w.memoizedState !== null) {
                  zo(_);
                  continue;
                }
            }
            v !== null ? (v.return = w, $ = v) : zo(_);
          }
          p = p.sibling;
        }
        e: for (p = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (p === null) {
              p = _;
              try {
                l = _.stateNode, c ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (o = _.stateNode, u = _.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = yu("display", i));
              } catch (k) {
                ve(e, e.return, k);
              }
            }
          } else if (_.tag === 6) {
            if (p === null) try {
              _.stateNode.nodeValue = c ? "" : _.memoizedProps;
            } catch (k) {
              ve(e, e.return, k);
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
      it(t, e), gt(e), r & 4 && Do(e);
      break;
    case 21:
      break;
    default:
      it(
        t,
        e
      ), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (vr(l, ""), r.flags &= -33);
          var a = Po(e);
          ja(e, a, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, o = Po(e);
          Sa(e, o, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wp(e, t, n) {
  $ = e, Bc(e);
}
function Bc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var l = $, a = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || nl;
      if (!i) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Re;
        o = nl;
        var c = Re;
        if (nl = i, (Re = u) && !c) for ($ = l; $ !== null; ) i = $, u = i.child, i.tag === 22 && i.memoizedState !== null ? Ao(l) : u !== null ? (u.return = i, $ = u) : Ao(l);
        for (; a !== null; ) $ = a, Bc(a), a = a.sibling;
        $ = l, nl = o, Re = c;
      }
      Ro(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, $ = a) : Ro(e);
  }
}
function Ro(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Re || es(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Re) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && wo(t, a, r);
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
              wo(t, i, n);
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
                  _ !== null && kr(_);
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
            throw Error(R(163));
        }
        Re || t.flags & 512 && ka(t);
      } catch (w) {
        ve(t, t.return, w);
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
function zo(e) {
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
function Ao(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            es(4, t);
          } catch (u) {
            ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ve(t, l, u);
            }
          }
          var a = t.return;
          try {
            ka(t);
          } catch (u) {
            ve(t, a, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ka(t);
          } catch (u) {
            ve(t, i, u);
          }
      }
    } catch (u) {
      ve(t, t.return, u);
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
var Up = Math.ceil, Fl = Lt.ReactCurrentDispatcher, yi = Lt.ReactCurrentOwner, rt = Lt.ReactCurrentBatchConfig, ae = 0, Me = null, ke = null, Le = 0, Ke = 0, In = Jt(0), Ee = 0, Pr = null, dn = 0, ts = 0, vi = 0, hr = null, Ue = null, wi = 0, Un = 1 / 0, kt = null, $l = !1, Ea = null, Bt = null, rl = !1, $t = null, Wl = 0, gr = 0, Ca = null, hl = -1, gl = 0;
function Oe() {
  return ae & 6 ? xe() : hl !== -1 ? hl : hl = xe();
}
function Gt(e) {
  return e.mode & 1 ? ae & 2 && Le !== 0 ? Le & -Le : Ep.transition !== null ? (gl === 0 && (gl = bu()), gl) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Au(e.type)), e) : 1;
}
function mt(e, t, n, r) {
  if (50 < gr) throw gr = 0, Ca = null, Error(R(185));
  zr(e, n, r), (!(ae & 2) || e !== Me) && (e === Me && (!(ae & 2) && (ts |= n), Ee === 4 && Ot(e, Le)), Be(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (Un = xe() + 500, ql && Zt()));
}
function Be(e, t) {
  var n = e.callbackNode;
  Ef(e, t);
  var r = jl(e, e === Me ? Le : 0);
  if (r === 0) n !== null && Hi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Hi(n), t === 1) e.tag === 0 ? jp(Oo.bind(null, e)) : nc(Oo.bind(null, e)), xp(function() {
      !(ae & 6) && Zt();
    }), n = null;
    else {
      switch (Lu(r)) {
        case 1:
          n = Ha;
          break;
        case 4:
          n = Mu;
          break;
        case 16:
          n = Sl;
          break;
        case 536870912:
          n = Iu;
          break;
        default:
          n = Sl;
      }
      n = ed(n, Gc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Gc(e, t) {
  if (hl = -1, gl = 0, ae & 6) throw Error(R(327));
  var n = e.callbackNode;
  if (Rn() && e.callbackNode !== n) return null;
  var r = jl(e, e === Me ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ul(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = Yc();
    (Me !== e || Le !== t) && (kt = null, Un = xe() + 500, sn(e, t));
    do
      try {
        Hp();
        break;
      } catch (o) {
        Kc(e, o);
      }
    while (!0);
    li(), Fl.current = a, ae = l, ke !== null ? t = 0 : (Me = null, Le = 0, t = Ee);
  }
  if (t !== 0) {
    if (t === 2 && (l = Zs(e), l !== 0 && (r = l, t = Na(e, l))), t === 1) throw n = Pr, sn(e, 0), Ot(e, r), Be(e, xe()), n;
    if (t === 6) Ot(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Vp(l) && (t = Ul(e, r), t === 2 && (a = Zs(e), a !== 0 && (r = a, t = Na(e, a))), t === 1)) throw n = Pr, sn(e, 0), Ot(e, r), Be(e, xe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          tn(e, Ue, kt);
          break;
        case 3:
          if (Ot(e, r), (r & 130023424) === r && (t = wi + 500 - xe(), 10 < t)) {
            if (jl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ia(tn.bind(null, e, Ue, kt), t);
            break;
          }
          tn(e, Ue, kt);
          break;
        case 4:
          if (Ot(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - pt(r);
            a = 1 << i, i = t[i], i > l && (l = i), r &= ~a;
          }
          if (r = l, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Up(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ia(tn.bind(null, e, Ue, kt), r);
            break;
          }
          tn(e, Ue, kt);
          break;
        case 5:
          tn(e, Ue, kt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Be(e, xe()), e.callbackNode === n ? Gc.bind(null, e) : null;
}
function Na(e, t) {
  var n = hr;
  return e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256), e = Ul(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && Ma(t)), e;
}
function Ma(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e);
}
function Vp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!ht(a(), l)) return !1;
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
function Ot(e, t) {
  for (t &= ~vi, t &= ~ts, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - pt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Oo(e) {
  if (ae & 6) throw Error(R(327));
  Rn();
  var t = jl(e, 0);
  if (!(t & 1)) return Be(e, xe()), null;
  var n = Ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zs(e);
    r !== 0 && (t = r, n = Na(e, r));
  }
  if (n === 1) throw n = Pr, sn(e, 0), Ot(e, t), Be(e, xe()), n;
  if (n === 6) throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, tn(e, Ue, kt), Be(e, xe()), null;
}
function xi(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (Un = xe() + 500, ql && Zt());
  }
}
function fn(e) {
  $t !== null && $t.tag === 0 && !(ae & 6) && Rn();
  var t = ae;
  ae |= 1;
  var n = rt.transition, r = oe;
  try {
    if (rt.transition = null, oe = 1, e) return e();
  } finally {
    oe = r, rt.transition = n, ae = t, !(ae & 6) && Zt();
  }
}
function _i() {
  Ke = In.current, de(In);
}
function sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, wp(n)), ke !== null) for (n = ke.return; n !== null; ) {
    var r = n;
    switch (ti(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Il();
        break;
      case 3:
        $n(), de(Qe), de(ze), ci();
        break;
      case 5:
        ui(r);
        break;
      case 4:
        $n();
        break;
      case 13:
        de(he);
        break;
      case 19:
        de(he);
        break;
      case 10:
        si(r.type._context);
        break;
      case 22:
      case 23:
        _i();
    }
    n = n.return;
  }
  if (Me = e, ke = e = Kt(e.current, null), Le = Ke = t, Ee = 0, Pr = null, vi = ts = dn = 0, Ue = hr = null, rn !== null) {
    for (t = 0; t < rn.length; t++) if (n = rn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var i = a.next;
        a.next = l, r.next = i;
      }
      n.pending = r;
    }
    rn = null;
  }
  return e;
}
function Kc(e, t) {
  do {
    var n = ke;
    try {
      if (li(), fl.current = Ol, Al) {
        for (var r = ge.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Al = !1;
      }
      if (cn = 0, Ne = je = ge = null, pr = !1, br = 0, yi.current = null, n === null || n.return === null) {
        Ee = 1, Pr = t, ke = null;
        break;
      }
      e: {
        var a = e, i = n.return, o = n, u = t;
        if (t = Le, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, p = o, _ = p.tag;
          if (!(p.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
            var w = p.alternate;
            w ? (p.updateQueue = w.updateQueue, p.memoizedState = w.memoizedState, p.lanes = w.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var v = Eo(i);
          if (v !== null) {
            v.flags &= -257, Co(v, i, o, a, t), v.mode & 1 && jo(a, c, t), t = v, u = c;
            var y = t.updateQueue;
            if (y === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(u), t.updateQueue = k;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              jo(a, c, t), ki();
              break e;
            }
            u = Error(R(426));
          }
        } else if (fe && o.mode & 1) {
          var S = Eo(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Co(S, i, o, a, t), ni(Wn(u, o));
            break e;
          }
        }
        a = u = Wn(u, o), Ee !== 4 && (Ee = 2), hr === null ? hr = [a] : hr.push(a), a = i;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var d = Lc(a, u, t);
              vo(a, d);
              break e;
            case 1:
              o = u;
              var f = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Bt === null || !Bt.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Tc(a, o, t);
                vo(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      qc(n);
    } catch (x) {
      t = x, ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yc() {
  var e = Fl.current;
  return Fl.current = Ol, e === null ? Ol : e;
}
function ki() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4), Me === null || !(dn & 268435455) && !(ts & 268435455) || Ot(Me, Le);
}
function Ul(e, t) {
  var n = ae;
  ae |= 2;
  var r = Yc();
  (Me !== e || Le !== t) && (kt = null, sn(e, t));
  do
    try {
      Qp();
      break;
    } catch (l) {
      Kc(e, l);
    }
  while (!0);
  if (li(), ae = n, Fl.current = r, ke !== null) throw Error(R(261));
  return Me = null, Le = 0, Ee;
}
function Qp() {
  for (; ke !== null; ) Xc(ke);
}
function Hp() {
  for (; ke !== null && !gf(); ) Xc(ke);
}
function Xc(e) {
  var t = Zc(e.alternate, e, Ke);
  e.memoizedProps = e.pendingProps, t === null ? qc(e) : ke = t, yi.current = null;
}
function qc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Op(n, t), n !== null) {
        n.flags &= 32767, ke = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ee = 6, ke = null;
        return;
      }
    } else if (n = Ap(n, t, Ke), n !== null) {
      ke = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function tn(e, t, n) {
  var r = oe, l = rt.transition;
  try {
    rt.transition = null, oe = 1, Bp(e, t, n, r);
  } finally {
    rt.transition = l, oe = r;
  }
  return null;
}
function Bp(e, t, n, r) {
  do
    Rn();
  while ($t !== null);
  if (ae & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Cf(e, a), e === Me && (ke = Me = null, Le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || rl || (rl = !0, ed(Sl, function() {
    return Rn(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = rt.transition, rt.transition = null;
    var i = oe;
    oe = 1;
    var o = ae;
    ae |= 4, yi.current = null, $p(e, n), Hc(n, e), fp(sa), El = !!la, sa = la = null, e.current = n, Wp(n), yf(), ae = o, oe = i, rt.transition = a;
  } else e.current = n;
  if (rl && (rl = !1, $t = e, Wl = l), a = e.pendingLanes, a === 0 && (Bt = null), xf(n.stateNode), Be(e, xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if ($l) throw $l = !1, e = Ea, Ea = null, e;
  return Wl & 1 && e.tag !== 0 && Rn(), a = e.pendingLanes, a & 1 ? e === Ca ? gr++ : (gr = 0, Ca = e) : gr = 0, Zt(), null;
}
function Rn() {
  if ($t !== null) {
    var e = Lu(Wl), t = rt.transition, n = oe;
    try {
      if (rt.transition = null, oe = 16 > e ? 16 : e, $t === null) var r = !1;
      else {
        if (e = $t, $t = null, Wl = 0, ae & 6) throw Error(R(331));
        var l = ae;
        for (ae |= 4, $ = e.current; $ !== null; ) {
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
                      mr(8, p, a);
                  }
                  var _ = p.child;
                  if (_ !== null) _.return = p, $ = _;
                  else for (; $ !== null; ) {
                    p = $;
                    var w = p.sibling, v = p.return;
                    if (Uc(p), p === c) {
                      $ = null;
                      break;
                    }
                    if (w !== null) {
                      w.return = v, $ = w;
                      break;
                    }
                    $ = v;
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
              $ = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) i.return = a, $ = i;
          else e: for (; $ !== null; ) {
            if (a = $, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                mr(9, a, a.return);
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
                  es(9, o);
              }
            } catch (x) {
              ve(o, o.return, x);
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
        if (ae = l, Zt(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
          wt.onPostCommitFiberRoot(Bl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      oe = n, rt.transition = t;
    }
  }
  return !1;
}
function Fo(e, t, n) {
  t = Wn(n, t), t = Lc(e, t, 1), e = Ht(e, t, 1), t = Oe(), e !== null && (zr(e, 1, t), Be(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) Fo(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Fo(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bt === null || !Bt.has(r))) {
        e = Wn(n, e), e = Tc(t, e, 1), t = Ht(t, e, 1), e = Oe(), t !== null && (zr(t, 1, e), Be(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Gp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, Me === e && (Le & n) === n && (Ee === 4 || Ee === 3 && (Le & 130023424) === Le && 500 > xe() - wi ? sn(e, 0) : vi |= n), Be(e, t);
}
function Jc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Gr, Gr <<= 1, !(Gr & 130023424) && (Gr = 4194304)) : t = 1);
  var n = Oe();
  e = It(e, t), e !== null && (zr(e, t, n), Be(e, n));
}
function Kp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Jc(e, n);
}
function Yp(e, t) {
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
      throw Error(R(314));
  }
  r !== null && r.delete(t), Jc(e, n);
}
var Zc;
Zc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Qe.current) Ve = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ve = !1, zp(e, t, n);
    Ve = !!(e.flags & 131072);
  }
  else Ve = !1, fe && t.flags & 1048576 && rc(t, Tl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ml(e, t), e = t.pendingProps;
      var l = An(t, ze.current);
      Dn(t, n), l = fi(null, t, r, e, l, n);
      var a = pi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (a = !0, bl(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ii(t), l.updater = Zl, t.stateNode = l, l._reactInternals = t, ma(t, r, e, n), t = ya(null, t, r, !0, a, n)) : (t.tag = 0, fe && a && ei(t), Ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ml(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = qp(r), e = ut(r, e), l) {
          case 0:
            t = ga(null, t, r, e, n);
            break e;
          case 1:
            t = Io(null, t, r, e, n);
            break e;
          case 11:
            t = No(null, t, r, e, n);
            break e;
          case 14:
            t = Mo(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(R(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), ga(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), Io(e, t, r, l, n);
    case 3:
      e: {
        if (zc(t), e === null) throw Error(R(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, uc(e, t), Rl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = Wn(Error(R(423)), t), t = bo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Wn(Error(R(424)), t), t = bo(e, t, r, n, l);
          break e;
        } else for (Ye = Qt(t.stateNode.containerInfo.firstChild), Xe = t, fe = !0, dt = null, n = ic(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (On(), r === l) {
            t = bt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return cc(t), e === null && da(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, i = l.children, aa(r, l) ? i = null : a !== null && aa(r, a) && (t.flags |= 32), Rc(e, t), Ae(e, t, i, n), t.child;
    case 6:
      return e === null && da(t), null;
    case 13:
      return Ac(e, t, n);
    case 4:
      return oi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Fn(t, null, r, n) : Ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), No(e, t, r, l, n);
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, i = l.value, ue(Pl, r._currentValue), r._currentValue = i, a !== null) if (ht(a.value, i)) {
          if (a.children === l.children && !Qe.current) {
            t = bt(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var o = a.dependencies;
          if (o !== null) {
            i = a.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (a.tag === 1) {
                  u = Ct(-1, n & -n), u.tag = 2;
                  var c = a.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var p = c.pending;
                    p === null ? u.next = u : (u.next = p.next, p.next = u), c.pending = u;
                  }
                }
                a.lanes |= n, u = a.alternate, u !== null && (u.lanes |= n), fa(
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
            if (i = a.return, i === null) throw Error(R(341));
            i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), fa(i, n, t), i = a.sibling;
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
        Ae(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Dn(t, n), l = lt(l), r = r(l), t.flags |= 1, Ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = ut(r, t.pendingProps), l = ut(r.type, l), Mo(e, t, r, l, n);
    case 15:
      return Pc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ut(r, l), ml(e, t), t.tag = 1, He(r) ? (e = !0, bl(t)) : e = !1, Dn(t, n), bc(t, r, l), ma(t, r, l, n), ya(null, t, r, !0, e, n);
    case 19:
      return Oc(e, t, n);
    case 22:
      return Dc(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function ed(e, t) {
  return Nu(e, t);
}
function Xp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function nt(e, t, n, r) {
  return new Xp(e, t, n, r);
}
function Si(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function qp(e) {
  if (typeof e == "function") return Si(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ua) return 11;
    if (e === Va) return 14;
  }
  return 2;
}
function Kt(e, t) {
  var n = e.alternate;
  return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function yl(e, t, n, r, l, a) {
  var i = 2;
  if (r = e, typeof e == "function") Si(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case wn:
      return an(n.children, l, a, t);
    case Wa:
      i = 8, l |= 8;
      break;
    case Os:
      return e = nt(12, n, t, l | 2), e.elementType = Os, e.lanes = a, e;
    case Fs:
      return e = nt(13, n, t, l), e.elementType = Fs, e.lanes = a, e;
    case $s:
      return e = nt(19, n, t, l), e.elementType = $s, e.lanes = a, e;
    case cu:
      return ns(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ou:
          i = 10;
          break e;
        case uu:
          i = 9;
          break e;
        case Ua:
          i = 11;
          break e;
        case Va:
          i = 14;
          break e;
        case Rt:
          i = 16, r = null;
          break e;
      }
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = nt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function an(e, t, n, r) {
  return e = nt(7, e, r, t), e.lanes = n, e;
}
function ns(e, t, n, r) {
  return e = nt(22, e, r, t), e.elementType = cu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ps(e, t, n) {
  return e = nt(6, e, null, t), e.lanes = n, e;
}
function Ds(e, t, n) {
  return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Jp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ms(0), this.expirationTimes = ms(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ms(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ji(e, t, n, r, l, a, i, o, u) {
  return e = new Jp(e, t, n, o, u), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = nt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ii(a), e;
}
function Zp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function td(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (mn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return tc(e, n, t);
  }
  return t;
}
function nd(e, t, n, r, l, a, i, o, u) {
  return e = ji(n, r, !0, e, l, a, i, o, u), e.context = td(null), n = e.current, r = Oe(), l = Gt(n), a = Ct(r, l), a.callback = t ?? null, Ht(n, a, l), e.current.lanes = l, zr(e, l, r), Be(e, r), e;
}
function rs(e, t, n, r) {
  var l = t.current, a = Oe(), i = Gt(l);
  return n = td(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ct(a, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ht(l, t, i), e !== null && (mt(e, l, i, a), dl(e, l, i)), i;
}
function Vl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $o(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ei(e, t) {
  $o(e, t), (e = e.alternate) && $o(e, t);
}
function em() {
  return null;
}
var rd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ci(e) {
  this._internalRoot = e;
}
ls.prototype.render = Ci.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  rs(e, t, null, null);
};
ls.prototype.unmount = Ci.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fn(function() {
      rs(null, e, null, null);
    }), t[Mt] = null;
  }
};
function ls(e) {
  this._internalRoot = e;
}
ls.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Du();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++) ;
    At.splice(n, 0, e), n === 0 && zu(e);
  }
};
function Ni(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ss(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Wo() {
}
function tm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var c = Vl(i);
        a.call(c);
      };
    }
    var i = nd(t, r, e, 0, null, !1, !1, "", Wo);
    return e._reactRootContainer = i, e[Mt] = i.current, Er(e.nodeType === 8 ? e.parentNode : e), fn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = Vl(u);
      o.call(c);
    };
  }
  var u = ji(e, 0, !1, null, null, !1, !1, "", Wo);
  return e._reactRootContainer = u, e[Mt] = u.current, Er(e.nodeType === 8 ? e.parentNode : e), fn(function() {
    rs(t, u, n, r);
  }), u;
}
function as(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = Vl(i);
        o.call(u);
      };
    }
    rs(t, i, e, l);
  } else i = tm(n, t, e, l, r);
  return Vl(i);
}
Tu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ar(t.pendingLanes);
        n !== 0 && (Ba(t, n | 1), Be(t, xe()), !(ae & 6) && (Un = xe() + 500, Zt()));
      }
      break;
    case 13:
      fn(function() {
        var r = It(e, 1);
        if (r !== null) {
          var l = Oe();
          mt(r, e, 1, l);
        }
      }), Ei(e, 1);
  }
};
Ga = function(e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Oe();
      mt(t, e, 134217728, n);
    }
    Ei(e, 134217728);
  }
};
Pu = function(e) {
  if (e.tag === 13) {
    var t = Gt(e), n = It(e, t);
    if (n !== null) {
      var r = Oe();
      mt(n, e, t, r);
    }
    Ei(e, t);
  }
};
Du = function() {
  return oe;
};
Ru = function(e, t) {
  var n = oe;
  try {
    return oe = e, t();
  } finally {
    oe = n;
  }
};
Xs = function(e, t, n) {
  switch (t) {
    case "input":
      if (Vs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Xl(r);
            if (!l) throw Error(R(90));
            fu(r), Vs(r, l);
          }
        }
      }
      break;
    case "textarea":
      mu(e, n);
      break;
    case "select":
      t = n.value, t != null && bn(e, !!n.multiple, t, !1);
  }
};
_u = xi;
ku = fn;
var nm = { usingClientEntryPoint: !1, Events: [Or, Sn, Xl, wu, xu, xi] }, rr = { findFiberByHostInstance: nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rm = { bundleType: rr.bundleType, version: rr.version, rendererPackageName: rr.rendererPackageName, rendererConfig: rr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Eu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: rr.findFiberByHostInstance || em, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ll.isDisabled && ll.supportsFiber) try {
    Bl = ll.inject(rm), wt = ll;
  } catch {
  }
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nm;
Je.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ni(t)) throw Error(R(200));
  return Zp(e, t, null, n);
};
Je.createRoot = function(e, t) {
  if (!Ni(e)) throw Error(R(299));
  var n = !1, r = "", l = rd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ji(e, 1, !1, null, null, n, !1, r, l), e[Mt] = t.current, Er(e.nodeType === 8 ? e.parentNode : e), new Ci(t);
};
Je.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = Eu(t), e = e === null ? null : e.stateNode, e;
};
Je.flushSync = function(e) {
  return fn(e);
};
Je.hydrate = function(e, t, n) {
  if (!ss(t)) throw Error(R(200));
  return as(null, e, t, !0, n);
};
Je.hydrateRoot = function(e, t, n) {
  if (!Ni(e)) throw Error(R(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", i = rd;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = nd(t, null, e, 1, n ?? null, l, !1, a, i), e[Mt] = t.current, Er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new ls(t);
};
Je.render = function(e, t, n) {
  if (!ss(t)) throw Error(R(200));
  return as(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function(e) {
  if (!ss(e)) throw Error(R(40));
  return e._reactRootContainer ? (fn(function() {
    as(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Mt] = null;
    });
  }), !0) : !1;
};
Je.unstable_batchedUpdates = xi;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ss(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return as(e, t, n, !1, r);
};
Je.version = "18.3.1-next-f1338f8080-20240426";
function ld() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ld);
    } catch (e) {
      console.error(e);
    }
}
ld(), lu.exports = Je;
var be = lu.exports, sd, Uo = be;
sd = Uo.createRoot, Uo.hydrateRoot;
var ad = { exports: {} }, is = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lm = h, sm = Symbol.for("react.element"), am = Symbol.for("react.fragment"), im = Object.prototype.hasOwnProperty, om = lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, um = { key: !0, ref: !0, __self: !0, __source: !0 };
function id(e, t, n) {
  var r, l = {}, a = null, i = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) im.call(t, r) && !um.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: sm, type: e, key: a, ref: i, props: l, _owner: om.current };
}
is.Fragment = am;
is.jsx = id;
is.jsxs = id;
ad.exports = is;
var s = ad.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cm = {
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
const dm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ne = (e, t) => {
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
        ...cm,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${dm(e)}`, o].join(" "),
        ...c
      },
      [
        ...t.map(([_, w]) => h.createElement(_, w)),
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
const od = ne("AlertCircle", [
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
const fm = ne("AlertTriangle", [
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
const pm = ne("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = ne("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = ne("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = ne("ArrowUpDown", [
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
const cd = ne("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = ne("Box", [
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
const gm = ne("Calendar", [
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
const ym = ne("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = ne("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = ne("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = ne("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = ne("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wm = ne("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xm = ne("Download", [
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
const pd = ne("FileJson", [
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
const _m = ne("Folder", [
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
const km = ne("Info", [
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
const Sm = ne("Lasso", [
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
const md = ne("LayoutGrid", [
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
const jm = ne("LayoutList", [
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
const Em = ne("Link2Off", [
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
const Cm = ne("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = ne("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nm = ne("Maximize", [
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
const Mm = ne("Minimize", [
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
const Im = ne("MoreVertical", [
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
const hd = ne("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = ne("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bm = ne("PlusCircle", [
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
const Ii = ne("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = ne("RefreshCw", [
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
const Vn = ne("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = ne("Settings", [
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
const Ql = ne("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = ne("Star", [
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
const hn = ne("Tag", [
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
const Qn = ne("Trash2", [
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
const Tm = ne("Type", [
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
const Pm = ne("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dm = ne("Upload", [
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
const Se = ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = te;
async function se(e) {
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
const Rm = async () => {
  const e = await te.fetchApi("/meld/home-dir");
  return (await se(e)).home;
};
let Hl = !1;
const zm = (e) => {
  Hl = e, Hl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Am = (...e) => {
  Hl && console.log("[Meld]", ...e);
}, Om = (...e) => {
  Hl && console.warn("[Meld]", ...e);
}, Fm = (...e) => {
  console.error("[Meld]", ...e);
}, B = {
  log: Am,
  warn: Om,
  error: Fm,
  init: zm
}, vl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return se(a);
}, gd = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return se(t);
}, ba = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await se(n);
}, bi = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return se(t);
}, yd = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return se(t);
}, Ho = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await se(n);
}, $m = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await se(r);
  } catch {
    return [];
  }
}, La = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await se(t);
  } catch {
    return [];
  }
}, Wm = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await se(n);
}, Ta = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await se(r);
}, Um = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return se(t);
}, Vm = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return se(t);
}, Qm = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return se(r);
}, Hm = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return se(e);
}, Bm = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return se(e);
}, Gm = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return se(e);
}, Km = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return se(e);
}, Ym = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await se(n);
}, Bo = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await se(t);
}, Xm = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await se(r);
}, qm = {
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
}, vd = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await se(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), qm;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Jm = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await se(n);
}, Zm = {
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
function eh(e, t) {
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
const wd = h.createContext(void 0), th = ({
  children: e
}) => {
  const [t, n] = h.useReducer(eh, Zm), r = h.useRef(t.images.length), l = h.useRef(0);
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const a = h.useCallback(
    async (v, y, k) => {
      const S = t.settings["gallery.max_load_count"], d = 200;
      let f = v;
      for (; f < Math.min(y, S) && k === l.current; )
        try {
          const m = Math.min(d, S - f);
          B.log("Background fetch: starting chunk", {
            offset: f,
            limit: m
          });
          const g = await vl(
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
          B.error("Background fetch failed", m);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const v = performance.now(), y = ++l.current;
    try {
      const k = t.searchQuery.trim() !== "", S = t.settings["gallery.initial_load_count"];
      B.log("refreshImages: starting initial fetch", {
        isSearch: k,
        fetchLimit: S,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const d = await vl(
        0,
        S,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), f = performance.now() - v;
      B.log("refreshImages: initial fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: d }), d.total > S && a(S, d.total, y);
    } catch (k) {
      B.error("refreshImages: fetch failed", k), n({
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
    const v = performance.now();
    try {
      const y = r.current, k = t.searchQuery.trim() !== "", S = t.pagination.limit;
      B.log("loadMoreImages: starting fetch", {
        nextOffset: y,
        fetchLimit: S,
        isSearch: k
      });
      const d = await vl(
        y,
        S,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), f = performance.now() - v;
      B.log("loadMoreImages: fetch complete", {
        count: d.images.length,
        total: d.total,
        offset: d.offset,
        durationMs: f.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: d });
    } catch (y) {
      B.error("loadMoreImages: fetch failed", y), n({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
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
      const v = await Km();
      n({ type: "SET_FAVORITES", payload: v });
    } catch (v) {
      B.error("Failed to load favorites", v);
    }
  }, []), c = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds), k = t.images.filter(
      (S) => t.selectedIds.has(S.id)
    ).some(
      (S) => S.parent_id || S.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: v,
        hasLineage: k,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), p = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const v = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const k = (await bi(v)).restored_ids || v;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: k }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (y) {
      n({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    }
  }, [t.selectedIds, t.viewScope]), _ = h.useCallback(
    async (v, y) => {
      try {
        await Jm(v, y), n({ type: "SET_SETTINGS", payload: { [v]: y } });
      } catch (k) {
        n({
          type: "SET_ERROR",
          payload: k instanceof Error ? k.message : String(k)
        });
      }
    },
    []
  ), w = h.useCallback(
    async (v) => {
      const y = t.images.find((k) => k.id === v);
      if (y && !y.is_minimal)
        return y;
      try {
        B.log("fetchFullImageDetails: fetching full data", { id: v });
        const k = await gd(v);
        return n({ type: "UPDATE_IMAGE", payload: k }), k;
      } catch (k) {
        throw B.error("Failed to fetch image details", k), k;
      }
    },
    [t.images]
  );
  return h.useEffect(() => {
    (async () => {
      try {
        const y = await vd();
        n({ type: "SET_SETTINGS", payload: y });
      } catch (y) {
        B.error("Failed to load settings", y);
      }
    })();
  }, []), h.useEffect(() => {
    u();
  }, [u]), h.useEffect(() => {
    const v = () => {
      i();
    }, y = (S) => {
      const d = S.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: d }
      });
    }, k = (S) => {
      const d = S.detail;
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
    return window.addEventListener("meld-refresh", v), window.addEventListener("meld-scan-progress", y), window.addEventListener("meld-scan-finished", k), () => {
      window.removeEventListener("meld-refresh", v), window.removeEventListener("meld-scan-progress", y), window.removeEventListener("meld-scan-finished", k);
    };
  }, [i, t.scanStatus.progress.total]), h.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    wd.Provider,
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
        fetchFullImageDetails: w
      },
      children: e
    }
  );
}, Ce = () => {
  const e = h.useContext(wd);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Ge = (e) => {
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
}, Li = async () => {
  const e = await te.fetchApi("/meld/tags");
  return se(e);
}, nh = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return se(t);
}, rh = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await se(t);
}, lh = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await se(n);
}, sh = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, ah = async (e, t, n = !1, r) => {
  const l = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await se(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, ih = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await se(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, oh = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await se(r)).count;
  } catch {
    return 0;
  }
}, uh = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await se(t);
}, ch = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await se(e);
}, xd = () => {
  const { dispatch: e } = Ce(), [t, n] = h.useState(() => {
    const j = localStorage.getItem("meld-import-config"), K = {
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
        const T = JSON.parse(j);
        return { ...K, ...T, tags: [] };
      } catch {
        return K;
      }
    return K;
  });
  h.useEffect(() => {
    const { tags: j, ...K } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(K));
  }, [t]);
  const [r, l] = h.useState([]), [a, i] = h.useState([]), [o, u] = h.useState(0), [c, p] = h.useState(!1), [_, w] = h.useState([]), [v, y] = h.useState(""), [k, S] = h.useState(!1), [d, f] = h.useState(null), m = h.useRef(!1), g = (j) => {
    j.target === j.currentTarget && (m.current = !0);
  }, x = (j) => {
    j.target === j.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const K = await Rm();
        n((T) => T.custom_path ? T : { ...T, custom_path: K });
      } catch (K) {
        B.error("Failed to fetch home directory:", K);
      }
    })();
  }, []), h.useEffect(() => {
    const j = new AbortController();
    return (async () => {
      const T = t.type === "custom" ? t.custom_path : t.subfolder;
      if (B.log(
        `loadFolders started. Path: "${T}", Type: "${t.type}"`
      ), t.type === "custom" && !T) {
        B.log("Custom path is empty, skipping load."), l([]), i([]), u(0);
        return;
      }
      p(!0);
      const Y = T, I = t.type;
      try {
        B.log("Step 1: Fast load starting...");
        const O = await ah(
          t.type,
          T,
          !0,
          j.signal
        );
        if (j.signal.aborted) {
          B.log("Step 1: Aborted.");
          return;
        }
        B.log(
          `Step 1 complete. Found ${O.folders.length} folders, ${O.images.length} images.`
        ), l(O.folders), i(O.images), u(null);
        const D = O.folders.map((M) => M.name);
        D.length > 0 && (B.log(
          `Step 2: Metadata fetch starting for ${D.length} folders...`
        ), ih(
          I,
          Y,
          D,
          j.signal
        ).then((M) => {
          if (j.signal.aborted) {
            B.log("Step 2: Aborted.");
            return;
          }
          B.log("Step 2: Metadata fetch complete."), l(
            (X) => X.map((pe) => {
              const U = M[pe.name];
              return U ? { ...pe, count: U.count, preview: U.preview } : pe;
            })
          );
        }).catch((M) => {
          M.name !== "AbortError" && B.error("Step 2: Metadata fetch failed:", M);
        })), B.log("Step 3: Path image count starting..."), oh(I, Y, j.signal).then((M) => {
          if (j.signal.aborted) {
            B.log("Step 3: Aborted.");
            return;
          }
          B.log(`Step 3: Path image count complete: ${M}`), u(M);
        }).catch((M) => {
          M.name !== "AbortError" && B.error("Step 3: Path image count failed:", M);
        });
      } catch (O) {
        if (O.name === "AbortError") {
          B.log("Request aborted.");
          return;
        }
        B.error("Failed to load folders:", O), l([]), i([]), u(0);
      } finally {
        j.signal.aborted || p(!1);
      }
    })(), () => {
      j.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const N = h.useCallback(async () => {
    S(!0);
    try {
      const j = await Li();
      w(j);
    } catch (j) {
      B.error("Failed to fetch tags:", j);
    } finally {
      S(!1);
    }
  }, []);
  h.useEffect(() => {
    N();
  }, [N]), h.useEffect(() => {
    const j = (K) => {
      K.key === "Escape" && (K.preventDefault(), K.stopImmediatePropagation(), d ? f(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", j, { capture: !0 }), () => window.removeEventListener("keydown", j, { capture: !0 });
  }, [d, e]);
  const E = h.useMemo(() => _.filter(
    (j) => j.name.toLowerCase().includes(v.toLowerCase()) && !t.tags.includes(j.name)
  ), [_, v, t.tags]), b = (j) => {
    const K = j.trim();
    K && !t.tags.includes(K) && (n({ ...t, tags: [...t.tags, K] }), y(""));
  }, F = (j) => {
    n({ ...t, tags: t.tags.filter((K) => K !== j) });
  }, C = (j) => {
    j.key === "Enter" && v.trim() && (j.preventDefault(), b(v.trim()));
  }, L = async () => {
    try {
      await uh(t), e({
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
      B.error("Failed to start scan:", j), alert(`Failed to start scan: ${j}`);
    }
  }, H = (j) => {
    if (t.type === "custom") {
      const K = t.custom_path.includes("\\") ? "\\" : "/", T = t.custom_path.endsWith(K) ? `${t.custom_path}${j}` : `${t.custom_path}${K}${j}`;
      n({ ...t, custom_path: T });
    } else {
      const K = t.subfolder ? `${t.subfolder}/${j}` : j;
      n({ ...t, subfolder: K });
    }
  }, q = () => {
    if (t.type === "custom") {
      const j = t.custom_path.includes("\\") ? "\\" : "/", K = t.custom_path.split(j);
      if (K.length > 1) {
        K.pop();
        let T = K.join(j);
        T === "" && j === "/" && (T = "/"), n({ ...t, custom_path: T });
      }
    } else {
      const j = t.subfolder.split("/");
      j.pop(), n({ ...t, subfolder: j.join("/") });
    }
  };
  return be.createPortal(
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
              onClick: (j) => j.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
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
                          onChange: (j) => n({
                            ...t,
                            type: j.target.value,
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
                          onChange: (j) => n({ ...t, recursive: j.target.checked })
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
                          onChange: (j) => n({
                            ...t,
                            link_strategy: j.target.value,
                            auto_link_parent: j.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((j) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        j,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => F(j),
                            children: /* @__PURE__ */ s.jsx(Se, { size: 12 })
                          }
                        )
                      ] }, j)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Vn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: v,
                            onChange: (j) => y(j.target.value),
                            onKeyDown: C
                          }
                        ),
                        v.trim() && !t.tags.includes(v.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => b(v),
                            children: /* @__PURE__ */ s.jsx(Ii, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: k ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : E.length === 0 ? v && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        v
                      ] }) : E.map((j) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => b(j.name),
                          children: j.name
                        },
                        j.id
                      )) })
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: L,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(os, { size: 16 }),
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
                          onClick: q,
                          children: [
                            /* @__PURE__ */ s.jsx(dd, { size: 16 }),
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
                          onChange: (j) => n({ ...t, custom_path: j.target.value }),
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
                      r.map((j) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => H(j.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: j.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Ge(j.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(_m, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: j.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${j.count === null ? "meld-folder-count--loading" : ""}`,
                                children: j.count !== null ? `${j.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(fd, { size: 14 })
                          ]
                        },
                        j.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((j) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => f(j),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: Ge(j),
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
          d && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (j) => {
                j.stopPropagation(), f(null);
              },
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (j) => j.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => f(null),
                          children: /* @__PURE__ */ s.jsx(Se, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: Ge(d),
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
}, dh = () => {
  const { dispatch: e } = Ce();
  return { injectMaskToGraph: h.useCallback(
    (n, r) => {
      var w, v;
      console.log("[Meld-Debug] injectMaskToGraph called with:", r);
      const l = window.app;
      if (!(l != null && l.graph))
        return console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      let a = n.filename;
      n.subfolder && (a = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (a = `${a} [${n.type}]`);
      const i = l.graph._nodes.filter(
        (y) => y.type === "MeldImageLoader" || y.type === "LoadImage" || y.type === "Load Image"
      );
      if (i.length > 0) {
        const y = i[0], k = y.widgets.find(
          (S) => S.name === "image"
        );
        k && (k.value = a, typeof k.callback == "function" && k.callback(a), console.log(
          "[Meld-Debug] injectMaskToGraph: Updated Loader node",
          y.id,
          "with",
          a
        ));
      }
      const o = l.graph._nodes.filter(
        (y) => y.type === "LoadImageMask"
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
        (y) => y.name === "image"
      ), p = `${r} [temp]`;
      console.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        u.id,
        "widget 'image' with",
        p
      ), c && (c.value = p, typeof c.callback == "function" && c.callback(p));
      const _ = u.widgets.find(
        (y) => y.name === "channel"
      );
      return _ && (_.value = "red", typeof _.callback == "function" && _.callback("red")), (v = (w = l.graph).afterChange) == null || v.call(w), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Rs(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function fh(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const i = a.getContext("2d", { willReadFrequently: !0 });
  if (!i) return e;
  const o = Pa(e, [255, 255, 255], 255);
  i.putImageData(o, 0, 0), i.fillStyle = n > 0 ? "white" : "black", i.beginPath(), t(i), i.fill();
  const u = i.getImageData(0, 0, r, l), c = new Uint8ClampedArray(r * l);
  for (let p = 0; p < r * l; p++)
    c[p] = u.data[p * 4] > 128 ? 255 : 0;
  return { ...e, data: c };
}
function Pa(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, i = new ImageData(l, a), o = i.data;
  for (let u = 0; u < r.length; u++) {
    const c = r[u], p = u * 4;
    c > 0 ? (o[p] = t[0], o[p + 1] = t[1], o[p + 2] = t[2], o[p + 3] = n) : (o[p] = 0, o[p + 1] = 0, o[p + 2] = 0, o[p + 3] = 0);
  }
  return i;
}
function ph(e) {
  return e.data.every((t) => t === 0);
}
const _d = ({
  imageId: e,
  mode: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = Ce(), a = r.images.find((z) => z.id === e), { injectMaskToGraph: i } = dh(), o = h.useRef(null), u = h.useRef(null), c = h.useRef(null), p = h.useRef(null), [_, w] = h.useState(!1), [v, y] = h.useState("rect"), [k, S] = h.useState({ x: 0, y: 0 }), [d, f] = h.useState({ x: 0, y: 0 }), [m, g] = h.useState([]), [x, N] = h.useState(null), [E, b] = h.useState(!1), F = h.useCallback(() => {
    const z = c.current, A = u.current;
    if (!z || !A) return null;
    const le = A.getBoundingClientRect(), G = z.getBoundingClientRect(), ie = z.naturalWidth, W = z.naturalHeight;
    if (!ie || !W) return null;
    const J = ie / W, P = G.width / G.height;
    let Z, V, ee = 0, we = 0;
    return J > P ? (Z = G.width, V = G.width / J, we = (G.height - V) / 2) : (V = G.height, Z = G.height * J, ee = (G.width - Z) / 2), {
      left: G.left - le.left + ee,
      top: G.top - le.top + we,
      width: Z,
      height: V
    };
  }, []), C = h.useCallback(() => {
    const z = o.current;
    if (!z) return;
    const A = z.getContext("2d");
    if (!A) return;
    A.clearRect(0, 0, z.width, z.height);
    const le = getComputedStyle(document.documentElement), G = le.getPropertyValue("--comfy-input-bg-active") || le.getPropertyValue("--comfy-input-bg") || le.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", ie = F();
    if (p.current && ie && (A.save(), A.globalAlpha = 0.5, A.drawImage(
      p.current,
      ie.left,
      ie.top,
      ie.width,
      ie.height
    ), A.restore()), _) {
      const W = Math.min(k.x, d.x), J = Math.min(k.y, d.y), P = Math.abs(k.x - d.x), Z = Math.abs(k.y - d.y);
      if (A.save(), A.globalAlpha = 0.3, A.fillStyle = G, A.strokeStyle = "white", A.lineWidth = 2, A.setLineDash([5, 5]), A.beginPath(), v === "rect")
        A.rect(W, J, P, Z);
      else if (v === "ellipse") {
        const V = W + P / 2, ee = J + Z / 2;
        A.ellipse(V, ee, P / 2, Z / 2, 0, 0, 2 * Math.PI);
      } else if (v === "lasso" && m.length > 1) {
        A.moveTo(m[0].x, m[0].y);
        for (let V = 1; V < m.length; V++)
          A.lineTo(m[V].x, m[V].y);
        A.closePath();
      }
      A.fill(), A.globalAlpha = 1, A.stroke(), A.restore();
    }
  }, [_, k, d, v, m, F]), [L, H] = h.useState([]), q = h.useMemo(() => L.length > 0 ? L[L.length - 1] : c.current ? Rs(
    c.current.naturalWidth,
    c.current.naturalHeight
  ) : null, [L]);
  h.useEffect(() => {
    var z;
    (z = c.current) != null && z.naturalWidth && L.length === 0 && H([
      Rs(
        c.current.naturalWidth,
        c.current.naturalHeight
      )
    ]);
  }, [L.length]);
  const j = h.useRef(!1), K = h.useRef(0), T = (z) => {
    z.target === z.currentTarget && (j.current = !0);
  }, Y = (z) => {
    z.target === z.currentTarget && j.current && !_ && n(), j.current = !1;
  };
  h.useEffect(() => {
    if (!q) return;
    p.current || (p.current = document.createElement("canvas"));
    const z = p.current;
    z.width = q.width, z.height = q.height;
    const A = z.getContext("2d");
    if (!A) return;
    const le = Pa(q, [255, 255, 255], 255);
    A.putImageData(le, 0, 0), C();
  }, [q, C]), h.useEffect(() => {
    const z = () => {
      u.current && o.current && (o.current.width = u.current.clientWidth, o.current.height = u.current.clientHeight, C());
    }, A = new ResizeObserver(z);
    return u.current && A.observe(u.current), z(), () => A.disconnect();
  }, [C]);
  const I = (z) => {
    var W;
    if (z.button !== 0 || _ || E || Date.now() - K.current < 100)
      return;
    z.preventDefault();
    const A = F(), le = (W = u.current) == null ? void 0 : W.getBoundingClientRect();
    if (!A || !le) return;
    w(!0);
    const G = Math.max(
      A.left,
      Math.min(z.clientX - le.left, A.left + A.width)
    ), ie = Math.max(
      A.top,
      Math.min(z.clientY - le.top, A.top + A.height)
    );
    S({ x: G, y: ie }), f({ x: G, y: ie }), g(v === "lasso" ? [{ x: G, y: ie }] : []), N(null);
  };
  h.useEffect(() => {
    if (!_) return;
    const z = (le) => {
      var P;
      const G = F(), ie = (P = u.current) == null ? void 0 : P.getBoundingClientRect();
      if (!G || !ie) return;
      const W = Math.max(
        G.left,
        Math.min(le.clientX - ie.left, G.left + G.width)
      ), J = Math.max(
        G.top,
        Math.min(le.clientY - ie.top, G.top + G.height)
      );
      f({ x: W, y: J }), v === "lasso" && g((Z) => [...Z, { x: W, y: J }]);
    }, A = (le) => {
      var W;
      const G = F(), ie = (W = u.current) == null ? void 0 : W.getBoundingClientRect();
      if (G && ie && q && c.current) {
        const J = Math.max(
          G.left,
          Math.min(le.clientX - ie.left, G.left + G.width)
        ), P = Math.max(
          G.top,
          Math.min(le.clientY - ie.top, G.top + G.height)
        ), Z = Math.min(k.x, J), V = Math.min(k.y, P), ee = Math.abs(k.x - J), we = Math.abs(k.y - P), Tt = v === "lasso";
        if (ee > 5 || we > 5 || Tt && m.length > 2) {
          const _e = c.current.naturalWidth, me = c.current.naturalHeight, We = _e / G.width, _t = me / G.height, Yn = fh(q, (at) => {
            if (v === "rect") {
              const gn = (Z - G.left) * We, Pt = (V - G.top) * _t, $r = ee * We, Wr = we * _t;
              at.rect(gn, Pt, $r, Wr);
            } else if (v === "ellipse") {
              const gn = (Z - G.left) * We, Pt = (V - G.top) * _t, $r = ee * We, Wr = we * _t, Rd = gn + $r / 2, zd = Pt + Wr / 2;
              at.ellipse(
                Rd,
                zd,
                $r / 2,
                Wr / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (v === "lasso" && m.length > 2) {
              const gn = m[0];
              at.moveTo(
                (gn.x - G.left) * We,
                (gn.y - G.top) * _t
              );
              for (let Pt = 1; Pt < m.length; Pt++)
                at.lineTo(
                  (m[Pt].x - G.left) * We,
                  (m[Pt].y - G.top) * _t
                );
              at.closePath();
            }
          });
          H((at) => [...at, Yn]);
        }
      }
      K.current = Date.now(), w(!1), g([]);
    };
    return window.addEventListener("mousemove", z), window.addEventListener("mouseup", A), () => {
      window.removeEventListener("mousemove", z), window.removeEventListener("mouseup", A);
    };
  }, [
    _,
    k.x,
    k.y,
    F,
    q,
    v,
    m
  ]);
  const O = h.useCallback(() => {
    L.length > 1 && H((z) => z.slice(0, -1));
  }, [L.length]);
  h.useEffect(() => {
    const z = (A) => {
      (A.metaKey || A.ctrlKey) && A.key === "z" && (A.preventDefault(), O());
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [O]);
  const D = () => {
    if (c.current) {
      const z = Rs(
        c.current.naturalWidth,
        c.current.naturalHeight
      );
      H((A) => [...A, z]);
    }
  }, M = async () => {
    if (!q || !c.current) return null;
    b(!0);
    try {
      const { width: z, height: A } = q, le = document.createElement("canvas");
      le.width = z, le.height = A;
      const G = le.getContext("2d");
      if (!G) return null;
      const ie = Pa(q, [255, 255, 255], 255);
      G.putImageData(ie, 0, 0);
      const W = await new Promise(
        (we) => le.toBlob(we, "image/png")
      );
      if (!W) return null;
      const P = `meld_mask_${Date.now()}.png`, Z = new File([W], P, { type: "image/png" }), V = new FormData();
      V.append("image", Z), V.append("type", "temp"), V.append("overwrite", "true");
      const ee = await te.fetchApi("/upload/image", {
        method: "POST",
        body: V
      });
      return ee.ok ? (await ee.json()).name : null;
    } catch (z) {
      return console.error("[Meld] Error uploading mask:", z), null;
    } finally {
      b(!1);
    }
  }, X = async () => {
    if (!a) return;
    const z = await M();
    z && i(a, z) && n();
  }, pe = async () => {
    if (!a) return;
    const z = await M();
    z && l({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [a],
        maskFilename: z
      }
    });
  }, U = h.useMemo(
    () => q && !ph(q),
    [q]
  );
  return a ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: T,
      onMouseUp: Y,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (z) => z.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(Se, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${v === "rect" ? "active" : ""}`,
                    onClick: () => y("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Ql, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${v === "ellipse" ? "active" : ""}`,
                    onClick: () => y("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(vm, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${v === "lasso" ? "active" : ""}`,
                    onClick: () => y("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Sm, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Lasso" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs(
                "div",
                {
                  ref: u,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: I,
                  role: "presentation",
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "img",
                      {
                        ref: c,
                        src: Ge(a),
                        alt: "To be masked",
                        className: "meld-mask-editor-image",
                        onDragStart: (z) => z.preventDefault()
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "canvas",
                      {
                        ref: o,
                        className: "meld-mask-editor-canvas",
                        onDragStart: (z) => z.preventDefault()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-footer", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-mask-editor-hint", children: "Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)" }),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-actions", children: [
                  t === "apply" ? /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--inject",
                      onClick: X,
                      disabled: !U || E,
                      type: "button",
                      children: [
                        E ? /* @__PURE__ */ s.jsx(Qo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(Mi, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: pe,
                      disabled: !U || E,
                      type: "button",
                      children: [
                        E ? /* @__PURE__ */ s.jsx(Qo, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(os, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: O,
                      disabled: L.length <= 1 || E,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(Pm, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: D,
                      disabled: !U || E,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(Se, { size: 16 }),
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
}, mh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ce(), [r, l] = h.useState("Gallery"), [a, i] = h.useState({
    ...e.settings
  }), [o, u] = h.useState(
    {}
  ), [c, p] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [_, w] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [v, y] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [k, S] = h.useState(e.settings["viewer.thumbnail_window_size"].toString()), [d, f] = h.useState(e.settings["gallery.trash_retention_days"].toString()), [m, g] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [x, N] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [E, b] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [F, C] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    L,
    H
  ] = h.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    q,
    j
  ] = h.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [K, T] = h.useState(
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
      const U = Object.keys(a).filter(
        (z) => a[z] !== e.settings[z] && !o[z]
      );
      if (U.length > 0)
        for (const z of U)
          await n(z, a[z]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (U, z) => {
      i((A) => ({
        ...A,
        [U]: !z
      }));
    },
    handleNumberChange: (U, z, A, le) => {
      U === "gallery.initial_load_count" ? p(z) : U === "gallery.max_load_count" ? w(z) : U === "gallery.lineage_max_depth" ? y(z) : U === "viewer.thumbnail_window_size" ? S(z) : U === "gallery.trash_retention_days" ? f(z) : U === "gallery.auto_link_phash_threshold" ? g(z) : U === "gallery.suggest_phash_threshold" ? N(z) : U === "viewer.details.max_positive_prompt_lines" ? b(z) : U === "viewer.details.max_negative_prompt_lines" ? C(z) : U === "fullscreen.details.max_positive_prompt_lines" ? H(z) : U === "fullscreen.details.max_negative_prompt_lines" ? j(z) : U === "sidebar.thumbnail_size" && T(z);
      const G = Number.parseInt(z, 10);
      if (!Number.isNaN(G)) {
        let ie = G;
        A !== void 0 && ie < A && (ie = A), le !== void 0 && ie > le && (ie = le), i((W) => ({
          ...W,
          [U]: ie
        }));
      }
    },
    handleNumberBlur: (U) => {
      U.key === "gallery.initial_load_count" ? p(
        a["gallery.initial_load_count"].toString()
      ) : U.key === "gallery.max_load_count" ? w(a["gallery.max_load_count"].toString()) : U.key === "gallery.lineage_max_depth" ? y(
        a["gallery.lineage_max_depth"].toString()
      ) : U.key === "viewer.thumbnail_window_size" ? S(
        a["viewer.thumbnail_window_size"].toString()
      ) : U.key === "gallery.trash_retention_days" ? f(
        a["gallery.trash_retention_days"].toString()
      ) : U.key === "gallery.auto_link_phash_threshold" ? g(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : U.key === "gallery.suggest_phash_threshold" ? N(
        a["gallery.suggest_phash_threshold"].toString()
      ) : U.key === "viewer.details.max_positive_prompt_lines" ? b(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : U.key === "viewer.details.max_negative_prompt_lines" ? C(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : U.key === "fullscreen.details.max_positive_prompt_lines" ? H(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : U.key === "fullscreen.details.max_negative_prompt_lines" ? j(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : U.key === "sidebar.thumbnail_size" && T(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      i((U) => ({
        ...U,
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
    validateShortcut: (U) => U.trim() ? U.trim().split(/\s+/).every((A) => !!(A === "next" || A === "prev" || A === "delete" || A.startsWith("tag:") && A.length > 4 || A.startsWith("-tag:") && A.length > 5 || A.startsWith("tag-toggle:") && A.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: _,
    lineageMaxDepthInput: v,
    thumbnailWindowSizeInput: k,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: x,
    maxPositivePromptLinesInput: E,
    maxNegativePromptLinesInput: F,
    fullscreenMaxPositivePromptLinesInput: L,
    fullscreenMaxNegativePromptLinesInput: q,
    thumbnailSizeInput: K
  };
}, Q = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), hh = ({
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
] }), gh = ({
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
    /* @__PURE__ */ s.jsx(Q, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
] }), yh = ({
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
        Q,
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
        Q,
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
      Q,
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
}, vh = ({
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
] }), wh = ({
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
      Q,
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
] }), kd = () => {
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
    validateShortcut: w,
    // Input states
    initialLoadCountInput: v,
    maxLoadCountInput: y,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: S,
    trashRetentionDaysInput: d,
    autoLinkPhashThresholdInput: f,
    suggestPhashThresholdInput: m,
    maxPositivePromptLinesInput: g,
    maxNegativePromptLinesInput: x,
    fullscreenMaxPositivePromptLinesInput: N,
    fullscreenMaxNegativePromptLinesInput: E,
    thumbnailSizeInput: b
  } = mh(), F = h.useRef(!1), C = (j) => {
    j.target === j.currentTarget && (F.current = !0);
  }, L = (j) => {
    j.target === j.currentTarget && F.current && i(), F.current = !1;
  }, H = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" }
  ], q = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          vh,
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
          gh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailSizeInput: b,
            initialLoadCountInput: v,
            maxLoadCountInput: y
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          wh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: S,
            maxPositivePromptLinesInput: g,
            maxNegativePromptLinesInput: x
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          hh,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: N,
            maxNegativePromptLinesInput: E
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          yh,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: w,
            handleToggle: o,
            handleResetShortcuts: p
          }
        );
      default:
        return null;
    }
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: C,
        onMouseUp: L,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (j) => j.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: i,
                    children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: H.map((j) => /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: `meld-tab ${e === j.id ? "active" : ""}`,
                    onClick: () => t(j.id),
                    children: j.label
                  },
                  j.id
                )) }) }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: q() })
              ] })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, ft = "none", Sd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Ce(), [a, i] = h.useState([]), [o, u] = h.useState(t), [c, p] = h.useState(""), [_, w] = h.useState(!0), [v, y] = h.useState(!1), k = h.useRef(null), S = e.length > 1, d = h.useRef(!1), f = (C) => {
    C.target === C.currentTarget && (d.current = !0);
  }, m = (C) => {
    C.target === C.currentTarget && d.current && n(), d.current = !1;
  }, g = h.useCallback(async () => {
    w(!0);
    try {
      const C = await Li();
      i(C);
    } catch (C) {
      console.error("Failed to fetch tags:", C);
    } finally {
      w(!1);
    }
  }, []);
  h.useEffect(() => {
    g();
  }, [g]), h.useEffect(() => {
    k.current && k.current.focus();
    const C = (L) => {
      L.key === "Escape" && (L.preventDefault(), L.stopPropagation(), L.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", C, { capture: !0 }), () => window.removeEventListener("keydown", C, {
      capture: !0
    });
  }, [n]);
  const x = h.useMemo(() => a.filter(
    (C) => C.name.toLowerCase().includes(c.toLowerCase()) && !o.includes(C.name)
  ), [a, c, o]), N = (C) => {
    const L = C.trim();
    if (L.toLowerCase() === ft) {
      alert(
        `Tag name '${ft}' is reserved for search and cannot be used.`
      );
      return;
    }
    L && !o.includes(L) && (u([...o, L]), p(""));
  }, E = (C) => {
    u(o.filter((L) => L !== C));
  }, b = async () => {
    y(!0);
    try {
      if (S) {
        const C = o.filter((H) => !t.includes(H)), L = t.filter(
          (H) => !o.includes(H)
        );
        await Ta(e, C, L);
      } else
        await Wm(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (C) {
      console.error("Failed to update tags:", C), alert("Failed to update tags.");
    } finally {
      y(!1);
    }
  }, F = (C) => {
    C.key === "Enter" && c.trim() ? (C.preventDefault(), C.stopPropagation(), N(c.trim())) : C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: m,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (C) => C.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(hn, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: S ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(Se, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            S && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: S ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((C) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                C,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => E(C),
                    children: /* @__PURE__ */ s.jsx(Se, { size: 12 })
                  }
                )
              ] }, C)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Vn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: k,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (C) => p(C.target.value),
                    onKeyDown: F
                  }
                ),
                c.trim() && !o.includes(c.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => N(c),
                    children: [
                      /* @__PURE__ */ s.jsx(Ii, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : x.length === 0 ? c ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : x.map((C) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => N(C.name),
                  children: C.name
                },
                C.id
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
                onClick: b,
                disabled: v,
                children: v ? "Saving..." : "Save Changes"
              }
            )
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, jd = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return se(e);
}, xh = async (e) => {
  const t = await te.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return se(t);
}, Ed = ({
  images: e,
  onExecute: t,
  isMaskMode: n
}) => {
  var m;
  const { dispatch: r } = Ce(), [l, a] = h.useState([]), [i, o] = h.useState(!0), [u, c] = h.useState(null), [p, _] = h.useState(!1), w = h.useMemo(() => l.map((g) => {
    let x = g.valid, N = g.reason;
    return n && (g.mask_count === 0 ? (x = !1, N = "No 'Load Image (as Mask)' node found.") : g.mask_count > 1 && (x = !1, N = `Multiple 'Load Image (as Mask)' nodes found (${g.mask_count}).`)), { ...g, valid: x, reason: N };
  }).sort((g, x) => g.valid !== x.valid ? g.valid ? -1 : 1 : g.name.localeCompare(x.name)), [l, n]), v = h.useCallback(async () => {
    try {
      o(!0);
      const g = await jd();
      a(g), c(null);
    } catch (g) {
      c(g instanceof Error ? g.message : String(g));
    } finally {
      o(!1);
    }
  }, []);
  h.useEffect(() => {
    v();
  }, [v]);
  const y = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]), k = h.useRef(!1), S = h.useCallback((g) => {
    g.target === g.currentTarget && (k.current = !0);
  }, []), d = h.useCallback(
    (g) => {
      g.target === g.currentTarget && k.current && y(), k.current = !1;
    },
    [y]
  );
  h.useEffect(() => {
    const g = (x) => {
      x.key === "Escape" && y();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [y]);
  const f = async (g) => {
    if (!p)
      try {
        _(!0), await t(g), y();
      } catch (x) {
        c(x instanceof Error ? x.message : String(x)), _(!1);
      }
  };
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: S,
        onMouseUp: d,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--medium",
            onClick: (g) => g.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(pd, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: y,
                    children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : u ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(od, { size: 20 }),
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
                      " or",
                      " ",
                      /* @__PURE__ */ s.jsx("strong", { children: "Load Image" }),
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
                w.map((g) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: `meld-workflow-item ${g.valid ? "" : "meld-workflow-item--invalid"}`,
                    onClick: () => g.valid && !p && f(g.name),
                    title: g.reason || "Click to run",
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                        /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: g.name }),
                        !g.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: g.reason }),
                        g.valid && /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__supports", children: [
                          "Supports:",
                          " ",
                          g.loader_count > 0 ? "Meld Loader" : "Load Image"
                        ] })
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
                            /* @__PURE__ */ s.jsx(os, { size: 14 }),
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
                  onClick: y,
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
}, Cd = () => ({ executeWorkflow: h.useCallback(
  async (t, n, r) => {
    var _, w, v, y, k, S;
    console.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r
    });
    const l = await xh(t);
    console.log("[Meld] Workflow fetched:", t);
    let a = null, i = null, o = !1;
    if (l.nodes && Array.isArray(l.nodes)) {
      o = !0;
      const d = l.nodes.find(
        (m) => m.type === "MeldImageLoader" || m.type === "LoadImage" || m.type === "Load Image"
      );
      d && (a = String(d.id));
      const f = l.nodes.find(
        (m) => m.type === "LoadImageMask"
      );
      f && (i = String(f.id));
    } else
      for (const d in l) {
        const f = l[d];
        f.class_type === "MeldImageLoader" || f.class_type === "LoadImage" || f.class_type === "Load Image" ? a = d : f.class_type === "LoadImageMask" && (i = d);
      }
    if (console.log("[Meld] Node IDs found:", {
      loaderNodeId: a,
      maskNodeId: i,
      isUIFormat: o
    }), !a)
      throw new Error(
        "Meld Image Loader or Load Image node not found in the selected workflow."
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
      for (const E of Array.from(g)) {
        const b = E.querySelector(".workflow-label"), F = ((_ = b == null ? void 0 : b.textContent) == null ? void 0 : _.trim()) || ((w = E.textContent) == null ? void 0 : w.trim()) || "";
        if (F === f || F === t || F.startsWith(`${f} `) || F.startsWith(`${f}•`)) {
          E.click(), m = !0;
          break;
        }
      }
      m || await d.loadGraphData(l, !0, !0, t), await new Promise((E) => setTimeout(E, 200));
      const x = d.graph._nodes;
      console.log("[Meld] Active graph nodes count:", x.length);
      const N = x.find(
        (E) => String(E.id) === a || E.type === "MeldImageLoader" || E.type === "LoadImage" || E.type === "Load Image"
      );
      if (N) {
        const E = (v = N.widgets) == null ? void 0 : v.find((b) => b.name === "image");
        console.log("[Meld] Updating loader node widget:", {
          nodeId: N.id,
          type: N.type,
          imagePath: u
        }), E && (E.value = u, typeof E.callback == "function" && E.callback(u));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const E = x.find(
          (b) => String(b.id) === i || b.type === "LoadImageMask"
        );
        if (console.log("[Meld] Updating mask node widget:", {
          nodeId: E == null ? void 0 : E.id,
          maskFilename: r
        }), E) {
          const b = (y = E.widgets) == null ? void 0 : y.find(
            (C) => C.name === "image"
          );
          b && (b.value = `${r} [temp]`);
          const F = (k = E.widgets) == null ? void 0 : k.find(
            (C) => C.name === "channel"
          );
          F && (F.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      d.graph.setDirtyCanvas(!0, !0);
      try {
        await d.queuePrompt(0);
        return;
      } catch (E) {
        throw console.error("Failed to queue workflow:", E), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const c = JSON.parse(JSON.stringify(l));
    c[a].inputs.image = u, r && i && (c[i].inputs.image = `${r} [temp]`, c[i].inputs.channel = "red");
    const p = await te.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: c,
        client_id: te.clientId
      })
    });
    if (!p.ok) {
      const d = await p.json();
      throw new Error(((S = d.error) == null ? void 0 : S.message) || "Failed to queue workflow");
    }
    return await p.json();
  },
  []
) }), Nd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = Ce(), i = h.useRef(!0);
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
  }, [a]), _ = h.useRef(!1), w = h.useCallback((d) => {
    d.target === d.currentTarget && (_.current = !0);
  }, []), v = h.useCallback(
    (d) => {
      d.target === d.currentTarget && _.current && p(), _.current = !1;
    },
    [p]
  ), y = h.useCallback(
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
      if (y(d), await ba(e, n), !i.current) return;
      !n && r && r(f), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (d) {
      a({
        type: "SET_ERROR",
        payload: d instanceof Error ? d.message : String(d)
      }), a({ type: "SET_LOADING", payload: !1 });
    }
  }, S = async () => {
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const d = new Set(e);
      for (const m of e) {
        const g = await La(m);
        if (!i.current) return;
        for (const x of g)
          d.add(x.id);
      }
      const f = u.filter(
        (m) => d.has(m.id)
      );
      if (y(d), await ba(Array.from(d), n), !i.current) return;
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
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: w,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (d) => d.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Qn, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: p,
                    children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
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
                            fm,
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
}, Md = ({ message: e }) => {
  const { dispatch: t } = Ce();
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onClick: () => t({ type: "CLOSE_MODAL" }),
      children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (n) => n.stopPropagation(), children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
          /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ s.jsx(od, { size: 20, color: "var(--meld-danger-color)" }),
            /* @__PURE__ */ s.jsx("h2", { children: "Error" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              className: "meld-modal-close",
              onClick: () => t({ type: "CLOSE_MODAL" }),
              type: "button",
              children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
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
}, Id = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Ce(), [l, a] = h.useState([]), [i, o] = h.useState(!0), [u, c] = h.useState(!1), p = h.useRef(!1), _ = (x) => {
    x.target === x.currentTarget && (p.current = !0);
  }, w = (x) => {
    x.target === x.currentTarget && p.current && n({ type: "CLOSE_MODAL" }), p.current = !1;
  }, v = t.images.find((x) => x.id === e), y = h.useCallback(async () => {
    o(!0);
    try {
      const x = t.settings["gallery.suggest_phash_threshold"], N = await $m(e, x);
      a(N);
    } catch (x) {
      console.error("Failed to load suggestions:", x);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    y();
  }, [y]);
  const k = async (x) => {
    if (x == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!v || x === v.parent_id) && !(v.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Ho(e, x), await gd(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (N) {
        console.error("Failed to link parent:", N);
      }
  }, S = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Ho(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (x) {
        console.error("Failed to remove source:", x), alert("Failed to remove source image.");
      }
  }, d = async (x) => {
    o(!0);
    try {
      const N = await sh(x), { id: E } = await yd({
        filename: N.name,
        subfolder: N.subfolder || "",
        type: N.type || "input"
      });
      if (E === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await k(E);
    } catch (N) {
      console.error("Failed to upload/register image:", N);
    } finally {
      o(!1);
    }
  }, f = (x) => {
    x.preventDefault(), x.stopPropagation(), c(!1);
    const N = x.dataTransfer.files[0];
    N != null && N.type.startsWith("image/") && d(N);
  };
  if (!v) return null;
  const m = l.filter((x) => x.is_source_match), g = l.filter((x) => !x.is_source_match);
  return be.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: _,
        onMouseUp: w,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              v.id
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: () => n({ type: "CLOSE_MODAL" }),
                children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            v.parent_id && /* @__PURE__ */ s.jsxs(
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
                        /* @__PURE__ */ s.jsx(Cm, { size: 16, color: "var(--meld-accent-color)" }),
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
                                    v.parent_filename && /* @__PURE__ */ s.jsx(
                                      "img",
                                      {
                                        src: Ge({
                                          filename: v.parent_filename,
                                          subfolder: v.parent_subfolder || "",
                                          type: v.parent_type || "output"
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
                                              children: v.parent_filename || "Unknown Image"
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
                                                v.parent_id
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
                      onClick: S,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(Em, { size: 16 })
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
                  /* @__PURE__ */ s.jsx(Dm, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            i ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              m.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: m.map((x) => {
                  const N = x.id === v.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${N ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !N && k(x.id),
                      style: {
                        cursor: N ? "default" : "pointer",
                        ...N ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ge(x), alt: x.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: x.filename }),
                          N && /* @__PURE__ */ s.jsx(
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
                  const N = x.id === v.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${N ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !N && k(x.id),
                      style: {
                        cursor: N ? "default" : "pointer",
                        ...N ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: Ge(x), alt: x.filename }),
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
                                N && /* @__PURE__ */ s.jsx(
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
}, _h = () => {
  const { state: e, dispatch: t } = Ce(), { executeWorkflow: n } = Cd();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Ed,
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
    e.activeModal.type === "parent_selection" && be.createPortal(
      /* @__PURE__ */ s.jsx(Id, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && be.createPortal(/* @__PURE__ */ s.jsx(xd, {}), document.body),
    e.activeModal.type === "settings" && be.createPortal(/* @__PURE__ */ s.jsx(kd, {}), document.body),
    e.activeModal.type === "tag_edit" && be.createPortal(
      /* @__PURE__ */ s.jsx(
        Sd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && be.createPortal(
      /* @__PURE__ */ s.jsx(Md, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && be.createPortal(
      /* @__PURE__ */ s.jsx(
        Nd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_editor" && be.createPortal(
      /* @__PURE__ */ s.jsx(
        _d,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    )
  ] });
}, Ti = (e, t) => {
  const n = h.useCallback(async (c) => {
    try {
      const p = await Um(c.id);
      if (!p.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        p.workflow
      ), B.log("Workflow restored successfully from Meld");
    } catch (p) {
      B.error("Error restoring workflow:", p), alert("Failed to restore workflow.");
    }
  }, []), r = h.useCallback(async (c) => {
    try {
      const p = await Vm(c.id), _ = "MeldUnifiedLoader", w = window.app, y = window.LiteGraph.createNode(_);
      if (!y) {
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
      if (y.widgets) {
        for (const [m, g] of Object.entries(k)) {
          const x = p[m];
          if (x != null) {
            const N = y.widgets.find(
              (E) => E.name === g
            );
            N && (N.value = x);
          }
        }
        const f = y.widgets.find(
          (m) => m.name === "control_after_generate"
        );
        f && (f.value = "fixed");
      }
      const S = w.canvas.ds.offset, d = w.canvas.ds.scale;
      y.pos = [(-S[0] + 400) / d, (-S[1] + 300) / d], w.graph.add(y), w.canvas.selectNode(y), w.canvas.centerOnNode(y);
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
        const w = window.app, v = ((_ = w == null ? void 0 : w.graph) == null ? void 0 : _._nodes) || [];
        console.log(
          "[Meld] Current graph nodes:",
          v.map((S) => ({
            id: S.id,
            type: S.type
          }))
        );
        const y = v.some(
          (S) => S.type === "LoadImageMask"
        ), k = v.some(
          (S) => S.type === "MeldImageLoader" || S.type === "LoadImage" || S.type === "Load Image"
        );
        if (console.log("[Meld] Nodes found:", { hasMaskNode: y, hasLoaderNode: k }), !y || !k) {
          const S = [];
          k || S.push("'Meld Image Loader'"), y || S.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${S.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
      } else
        try {
          if (!(await jd()).some(
            (y) => y.valid && y.mask_count === 1
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
        } catch (w) {
          console.error("[Meld] Error checking workflows:", w);
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
        const _ = c.id, v = (await bi([_])).restored_ids || [_];
        t({ type: "REMOVE_IMAGES", payload: v }), p == null || p();
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
}, bd = (e, t) => {
  const n = h.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((c) => ({
          id: c.id,
          imgSrc: Ge(c)
        }));
      const a = r.parent_id;
      if (!a || !r.parent_filename) return [];
      const i = e.find((c) => c.id === a);
      let o = null;
      if (i ? o = Ge(i) : o = Ge({
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
}, Ld = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Ce(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: i,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c,
    handleRunWithWorkflow: p,
    handleRunWithMask: _
  } = Ti(t, n), { getParentChain: w } = bd(t.images, t.settings), [v, y] = h.useState(null), [k, S] = h.useState(!1), [d, f] = h.useState(null), [m, g] = h.useState(!1), x = h.useRef(null), N = async (D, M, X = !1) => {
    try {
      await navigator.clipboard.writeText(D), X ? (g(!0), setTimeout(() => g(!1), 2e3)) : (f(M), setTimeout(() => f(null), 2e3));
    } catch (pe) {
      console.error("Failed to copy text: ", pe);
    }
  };
  h.useEffect(() => {
    const D = (X) => {
      X.key === "Escape" && (v ? y(null) : S(!1));
    }, M = (X) => {
      x.current && !x.current.contains(X.target) && S(!1);
    };
    return window.addEventListener("keydown", D), k && document.addEventListener("mousedown", M), () => {
      window.removeEventListener("keydown", D), document.removeEventListener("mousedown", M);
    };
  }, [k, v]);
  const E = w(e), F = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, C = Ge(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: v,
    setPopupContent: y,
    isMenuOpen: k,
    setIsMenuOpen: S,
    copiedLabel: d,
    popupCopied: m,
    menuRef: x,
    parentChain: E,
    displayFilename: F,
    imgSrc: C,
    handleCopy: N,
    handleClick: (D) => {
      D.shiftKey ? (D.preventDefault(), D.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : D.ctrlKey || D.metaKey || t.selectedIds.size > 0 ? (D.preventDefault(), D.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (D) => {
      D.shiftKey ? (D.preventDefault(), D.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : D.ctrlKey || D.metaKey || t.selectedIds.size > 0 ? (D.preventDefault(), D.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (D.preventDefault(), D.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (D) => {
      (D.shiftKey || D.ctrlKey || D.metaKey || t.selectedIds.size > 0 || !D.target.closest("img.meld-image-card__thumbnail")) && D.preventDefault();
    },
    handleKeyDown: (D) => {
      (D.key === "Enter" || D.key === " ") && (D.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
    handleRunWithMask: (D = "run") => _(e, D),
    fetchFullImageDetails: r
  };
}, kh = ({
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
      children: /* @__PURE__ */ s.jsx(Im, { size: 16 })
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
      children: /* @__PURE__ */ s.jsx(Vo, { size: 16 })
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
          /* @__PURE__ */ s.jsx(Vo, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(pm, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(os, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(Ql, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(Ql, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(bm, { size: 14 }),
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
          /* @__PURE__ */ s.jsx(hn, { size: 14 }),
          /* @__PURE__ */ s.jsx("span", { children: "Edit Tags" })
        ]
      }
    )
  ] })
] }), Sh = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => be.createPortal(
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
                l ? /* @__PURE__ */ s.jsx(Mi, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  wm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Se,
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
), Td = wl.memo(
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
      displayFilename: w,
      imgSrc: v,
      handleCopy: y,
      handleClick: k,
      handleContainerClick: S,
      handleMouseDown: d,
      handleKeyDown: f,
      handleRestoreWorkflow: m,
      handleAddUnifiedLoader: g,
      handleEditSource: x,
      handleEditTags: N,
      handleRunWithWorkflow: E,
      handleRunWithMask: b,
      fetchFullImageDetails: F
    } = Ld(e);
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${i ? "meld-image-card--menu-open" : ""}`,
        onClick: S,
        onMouseDown: d,
        onKeyDown: f,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ s.jsx(
            "img",
            {
              src: v,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              width: e.width || void 0,
              height: e.height || void 0,
              onMouseDown: d,
              onClick: (C) => {
                C.stopPropagation(), k(C);
              }
            }
          ) }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && w,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && _.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: _.map(
                (C, L) => C.imgSrc && /* @__PURE__ */ s.jsx(
                  "img",
                  {
                    src: C.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (H) => {
                      H.stopPropagation(), n({
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
                onClick: async (C) => {
                  C.stopPropagation();
                  const L = await F(e.id);
                  a({
                    title: "Model",
                    text: L.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const L = await F(e.id);
                        y(L.model_name || "-", "Model");
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
                onClick: async (C) => {
                  C.stopPropagation();
                  const L = await F(e.id);
                  a({
                    title: "Positive Prompt",
                    text: L.positive_prompt || L.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const L = await F(e.id);
                        y(
                          L.positive_prompt || L.positive || "-",
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
                onClick: async (C) => {
                  C.stopPropagation();
                  const L = await F(e.id);
                  a({
                    title: "Negative Prompt",
                    text: L.negative_prompt || L.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (C) => {
                        C.stopPropagation();
                        const L = await F(e.id);
                        y(
                          L.negative_prompt || L.negative || "-",
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
                onClick: (C) => {
                  C.stopPropagation(), N();
                },
                children: [
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((C, L) => /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: C
                    },
                    `${C}-${L}`
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
            kh,
            {
              isMenuOpen: i,
              setIsMenuOpen: o,
              menuRef: p,
              onAddUnifiedLoader: g,
              onRestoreWorkflow: m,
              onRunWithWorkflow: E,
              onRunWithMask: (C) => b(C),
              onEditSource: x,
              onEditTags: N
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            Sh,
            {
              title: l.title,
              text: l.text,
              onClose: () => a(null),
              onCopy: (C) => y(C, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
Td.displayName = "DetailedImageCard";
const Pd = wl.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: a,
      handleClick: i
    } = Ld(e);
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
Pd.displayName = "SimpleImageCard";
const jh = ({ image: e }) => {
  const { state: t } = Ce();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(Pd, { image: e }) : /* @__PURE__ */ s.jsx(Td, { image: e });
}, Eh = ({
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
}, Ch = () => {
  const { state: e, dispatch: t } = Ce(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await ch(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
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
        children: /* @__PURE__ */ s.jsx(Ql, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(ym, { size: 14, className: "meld-success-icon" }),
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
}, Nh = () => {
  const { state: e, refreshFavorites: t } = Ce(), [n, r] = h.useState(!1), [l, a] = h.useState(null), [i, o] = h.useState(null), [u, c] = h.useState(""), [p, _] = h.useState("");
  h.useEffect(() => {
    if (l) {
      const S = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(S);
    }
  }, [l]);
  const w = h.useCallback(
    async (S, d, f) => {
      S.stopPropagation();
      const m = `Are you sure you want to delete the favorite "${f}"?`;
      if (window.confirm(m))
        try {
          await Bo(d), await t();
        } catch (g) {
          B.error("Failed to delete favorite", g);
        }
    },
    [t]
  ), v = h.useCallback(
    (S, d) => {
      S.stopPropagation(), o(d), c(d.name), _(d.query);
    },
    []
  ), y = h.useCallback(async () => {
    if (!(!i || !u.trim() || !p.trim()))
      try {
        r(!0), await Xm(
          i.id,
          u,
          p
        ), await t(), o(null), a("Favorite updated.");
      } catch (S) {
        B.error("Failed to update favorite", S), a("Failed to update favorite.");
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
          await Bo(d.id), await t(), a("Favorite removed.");
        } catch (f) {
          B.error("Failed to delete favorite:", f);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Ym(e.searchQuery, e.searchQuery), await t(), a(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (d) {
      B.error("Failed to save favorite:", d);
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
    handleDeleteFavorite: w,
    handleEditFavorite: v,
    handleSaveEditFavorite: y,
    handleSaveFavorite: k,
    setToastMessage: a
  };
}, zs = (e) => {
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
}, Mh = () => {
  const { state: e, dispatch: t, updateSetting: n } = Ce(), [r, l] = h.useState(e.searchQuery), [a, i] = h.useState([]), [o, u] = h.useState(!1), [c, p] = h.useState([]), [_, w] = h.useState([]), v = e.settings["search.show_all_keywords"], [y, k] = h.useState(-1), [S, d] = h.useState(null), f = h.useRef(null), m = h.useRef(e.searchQuery), g = h.useCallback(async () => {
    if (_.length > 0) return;
    const T = await Bm();
    w(T);
  }, [_.length]);
  h.useEffect(() => {
    Gm().then((T) => {
      d(T);
    }), v && g();
  }, [g, v]);
  const x = h.useMemo(() => {
    if (!S) return null;
    const T = S.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${T}):(.*)$`, "i");
  }, [S]), N = h.useCallback(() => {
    const T = !v;
    T && g(), n("search.show_all_keywords", T);
  }, [v, g, n]), E = r !== m.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      p([]);
      return;
    }
    Hm().then((T) => {
      p(T);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var T;
    (T = f.current) == null || T.focus();
  }, []);
  const b = h.useCallback(
    (T, Y = !0) => {
      m.current !== T && (B.log("SearchBar: triggering search", { query: T }), t({ type: "SET_SEARCH_QUERY", payload: T }), Y && u(!1), m.current = T);
    },
    [t]
  );
  h.useEffect(() => {
    const T = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !x) {
        i([]), u(!1);
        return;
      }
      const Y = zs(r), I = Y[Y.length - 1];
      if (I) {
        const O = I.match(x);
        if (O) {
          const D = O[1].toLowerCase();
          let M = O[2];
          M.startsWith('"') && (M = M.substring(1)), M.endsWith('"') && (M = M.substring(0, M.length - 1));
          const X = await Qm(M, D);
          i(X), u(X.length > 0), k(-1);
        } else {
          const D = I.replace(/^([-!])/, "").toLowerCase();
          if (D && S) {
            const M = S.all_prefixes.filter((X) => X.startsWith(D)).map((X) => ({
              type: X,
              value: "",
              count: 0
            }));
            if (M.length > 0) {
              i(M), u(!0), k(-1);
              return;
            }
          }
          i([]), u(!1);
        }
      } else
        i([]), u(!1);
    }, 300);
    return () => clearTimeout(T);
  }, [
    r,
    e.settings["search.input_suggest"],
    x,
    S
  ]);
  const F = h.useCallback(
    (T) => {
      var pe;
      const Y = zs(r), O = (Y.pop() || "").match(/^([-!])/), D = O ? O[1] : "", X = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(T.type);
      if (T.value === "") {
        const U = `${[...Y, `${D}${T.type}:`].join(" ").trim()}`;
        l(U);
      } else {
        const U = X ? T.value : `"${T.value}"`, z = `${[
          ...Y,
          `${D}${T.type}:${U}`
        ].join(" ").trim()} `;
        l(z), i([]), u(!1);
      }
      (pe = f.current) == null || pe.focus();
    },
    [r, S]
  ), C = (T) => {
    T.key === "Enter" ? b(r) : T.key === "Tab" ? o && y >= 0 && (F(a[y]), T.preventDefault()) : T.key === "ArrowDown" ? o && (k((Y) => Math.min(Y + 1, a.length - 1)), T.preventDefault()) : T.key === "ArrowUp" ? o && (k((Y) => Math.max(Y - 1, -1)), T.preventDefault()) : T.key === "Escape" && u(!1);
  }, L = h.useCallback(() => {
    l(""), b("");
  }, [b]), H = h.useCallback(
    (T, Y, I = !1) => {
      var pe;
      if (I) {
        const U = `${T}:`;
        l(U), (pe = f.current) == null || pe.focus();
        return;
      }
      const M = ((S == null ? void 0 : S.no_quote_prefixes) || []).includes(T) ? Y : `"${Y}"`, X = `${T}:${M}`;
      l(X), b(X);
    },
    [b, S]
  ), q = h.useCallback(
    (T) => {
      l(T), T || b("");
    },
    [b]
  ), j = h.useCallback(() => {
    if (r === m.current || !x)
      return;
    const T = zs(r), Y = T[T.length - 1];
    if (!Y) return;
    const I = !!Y.match(x), O = Y.replace(/^([-!])/, "").toLowerCase(), D = O && (S == null ? void 0 : S.all_prefixes.some((M) => M.startsWith(O)));
    (I || D) && u(!0);
  }, [r, x, S]), K = h.useCallback(() => {
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
    showAllKeywords: v,
    toggleShowAllKeywords: N,
    selectedIndex: y,
    setSelectedIndex: k,
    inputRef: f,
    isQueryChanged: E,
    handleSearch: b,
    handleKeyDown: C,
    applySuggestion: F,
    clearSearch: L,
    applySearchSuggestion: H,
    handleInputChange: q,
    handleInputFocus: j,
    handleInputBlur: K
  };
}, Ih = ({
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
                  children: /* @__PURE__ */ s.jsx(hd, { size: 14 })
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
                  children: /* @__PURE__ */ s.jsx(Qn, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Go = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(hn, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(hm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(Tm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(gm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(cd, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(ud, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(mm, { size: 12 });
    default:
      return null;
  }
}, bh = ({
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
  favorites: w,
  onSelectFavorite: v,
  onEditFavorite: y,
  onDeleteFavorite: k
}) => {
  const S = (g, x, N) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => _(g.type, g.value, N === "all"),
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
        E.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", E.currentTarget.style.borderColor = "var(--comfy-input-bg, #333)", E.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Go(g.type)
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
        N !== "all" && /* @__PURE__ */ s.jsx(
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
    `${N}-${g.type}:${g.value}:${x}`
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
          onMouseDown: (N) => {
            N.preventDefault(), l(g);
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
                children: Go(g.type)
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
                  color: g.value === ft ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: g.value === ft ? "bold" : "normal"
                },
                children: g.value === ft ? g.type === "tag" ? `Untagged (${ft})` : `No ${g.type} (${ft})` : g.value
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
              (g, x) => S(g, x, "quick")
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
                    (g, x) => S({ type: g, value: "" }, x, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), m = () => w.length === 0 || a && a === i ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(Ia, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: w.map((g) => /* @__PURE__ */ s.jsx(
              Ih,
              {
                fav: g,
                onSelect: v,
                onEdit: y,
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
}, Lh = () => {
  const { state: e } = Ce(), {
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
    isQueryChanged: w,
    handleSearch: v,
    handleKeyDown: y,
    applySuggestion: k,
    clearSearch: S,
    applySearchSuggestion: d,
    handleInputChange: f,
    handleInputFocus: m,
    handleInputBlur: g
  } = Mh(), {
    isSaving: x,
    toastMessage: N,
    editingFavorite: E,
    setEditingFavorite: b,
    editFavoriteName: F,
    setEditFavoriteName: C,
    editFavoriteQuery: L,
    setEditFavoriteQuery: H,
    handleDeleteFavorite: q,
    handleEditFavorite: j,
    handleSaveEditFavorite: K,
    handleSaveFavorite: T
  } = Nh(), Y = h.useRef(null), I = h.useRef(!1);
  h.useEffect(() => {
    E && Y.current && Y.current.focus();
  }, [E]);
  const O = (M) => {
    M.target === M.currentTarget && (I.current = !0);
  }, D = (M) => {
    M.target === M.currentTarget && I.current && b(null), I.current = !1;
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
              N && /* @__PURE__ */ s.jsx(
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
                        onClick: () => v(t),
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
                          /* @__PURE__ */ s.jsx(
                            Vn,
                            {
                              size: 16,
                              color: w ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: w ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          w && /* @__PURE__ */ s.jsx(
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
                        onChange: (M) => f(M.target.value),
                        onKeyDown: y,
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
                        onClick: T,
                        disabled: x,
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
                          Ia,
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
                        children: /* @__PURE__ */ s.jsx(Se, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ s.jsx(
                bh,
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
                  onSelectFavorite: (M) => {
                    n(M), v(M);
                  },
                  onEditFavorite: j,
                  onDeleteFavorite: q
                }
              )
            ]
          }
        ),
        E && be.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onMouseDown: O,
              onMouseUp: D,
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
                            /* @__PURE__ */ s.jsx(Ia, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => b(null),
                          children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
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
                                    ref: Y,
                                    type: "text",
                                    value: F,
                                    onChange: (M) => C(M.target.value),
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
                                      M.key === "Enter" && K(), M.key === "Escape" && b(null);
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
                                    value: L,
                                    onChange: (M) => H(M.target.value),
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
                                      M.key === "Enter" && !M.shiftKey && (M.preventDefault(), K()), M.key === "Escape" && b(null);
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
                          onClick: () => b(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: K,
                          disabled: x || !F.trim() || !L.trim(),
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
}, Th = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = h.useState([]), [l, a] = h.useState(!0), [i, o] = h.useState(""), [u, c] = h.useState(""), [p, _] = h.useState(!1), [w, v] = h.useState(null), [y, k] = h.useState(""), [S, d] = h.useState(!1), f = h.useRef(null), m = h.useCallback(async () => {
    a(!0);
    try {
      const L = await Li();
      r(L);
    } catch (L) {
      console.error("Failed to fetch tags:", L);
    } finally {
      a(!1);
    }
  }, []);
  h.useEffect(() => {
    m();
  }, [m]), h.useEffect(() => {
    w !== null && f.current && (f.current.focus(), f.current.select());
  }, [w]);
  const g = async (L) => {
    L.preventDefault();
    const H = u.trim();
    if (!(!H || p)) {
      if (H.toLowerCase() === ft) {
        alert(
          `Tag name '${ft}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((q) => q.name.toLowerCase() === H.toLowerCase())) {
        alert(`Tag "${H}" already exists.`);
        return;
      }
      _(!0);
      try {
        await nh(H), c(""), await m();
      } catch (q) {
        console.error("Failed to add tag:", q);
      } finally {
        _(!1);
      }
    }
  }, x = async (L, H) => {
    if (confirm(`Are you sure you want to delete tag "${H}"?`))
      try {
        await rh(L), await m();
      } catch (q) {
        console.error("Failed to delete tag:", q);
      }
  }, N = (L) => {
    v(L.id), k(L.name);
  }, E = () => {
    v(null), k("");
  }, b = async (L) => {
    L.preventDefault();
    const H = y.trim();
    if (!H || w === null || S) return;
    if (H.toLowerCase() === ft) {
      alert(
        `Tag name '${ft}' is reserved for search and cannot be used.`
      );
      return;
    }
    const q = n.find((j) => j.id === w);
    if (q && q.name === H) {
      E();
      return;
    }
    if (n.some(
      (j) => j.id !== w && j.name.toLowerCase() === H.toLowerCase()
    )) {
      alert(`Tag "${H}" already exists.`);
      return;
    }
    d(!0);
    try {
      await lh(w, H), E(), await m();
    } catch (j) {
      console.error("Failed to rename tag:", j), alert(j instanceof Error ? j.message : "Failed to rename tag");
    } finally {
      d(!1);
    }
  }, F = (L) => {
    t(`tag:${L}`);
  }, C = h.useMemo(() => n.filter(
    (L) => L.name.toLowerCase().includes(i.toLowerCase())
  ), [n, i]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(hn, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(Se, { size: 16 })
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
            onChange: (L) => c(L.target.value),
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
              /* @__PURE__ */ s.jsx(Ii, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Vn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: i,
            onChange: (L) => o(L.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: C.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : C.map((L) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: w === L.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: b,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: f,
                className: "meld-tag-rename-input",
                value: y,
                onChange: (H) => k(H.target.value),
                onKeyDown: (H) => H.key === "Escape" && E()
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: S || !y.trim(),
                children: /* @__PURE__ */ s.jsx(Mi, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: E,
                disabled: S,
                children: /* @__PURE__ */ s.jsx(Se, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: L.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => F(L.name),
              children: /* @__PURE__ */ s.jsx(Vn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => N(L),
              children: /* @__PURE__ */ s.jsx(hd, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => x(L.id, L.name),
              children: /* @__PURE__ */ s.jsx(Qn, { size: 14 })
            }
          )
        ] })
      ] }) }, L.id)) })
    ] })
  ] });
}, Ph = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: a, viewerMode: i, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: p } = Ti(e, t), { getParentChain: _ } = bd(a, u), [w, v] = h.useState(!1), [y, k] = h.useState(
    u["viewer.show_details_by_default"]
  ), [S, d] = h.useState(null), f = S ?? u["viewer.show_thumbnails"], [m, g] = h.useState(!1), [x, N] = h.useState(!1), [E, b] = h.useState(null), [F, C] = h.useState(null), [L, H] = h.useState(
    null
  ), q = h.useRef(null), j = h.useRef(!0);
  h.useEffect(() => (j.current = !0, () => {
    j.current = !1;
  }), []);
  const K = h.useRef(l);
  h.useEffect(() => {
    K.current = l;
  }, [l]);
  const T = h.useMemo(() => {
    const W = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return i === "lineage" ? o : a.filter(
      (J) => J.exists !== !1 && (u["gallery.show_parent_images"] || !J.has_children || W)
    );
  }, [i, o, a, u, e.searchQuery]), Y = l === null ? -1 : T.findIndex((W) => W.id === l), I = (i === "lineage" && o.length > 0 ? o : a).find((W) => W.id === l), O = h.useCallback(
    async (W = !1) => {
      if (!I) return;
      const J = w ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!W && J === "confirm") {
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
        const P = e.viewScope === "trash", Z = /* @__PURE__ */ new Set([I.id]);
        if (J === "lineage") {
          const V = await La(I.id);
          for (const ee of V)
            Z.add(ee.id);
        }
        if (!j.current || K.current === null) return;
        if (T.length > Z.size) {
          let V = !1;
          for (let ee = Y + 1; ee < T.length; ee++)
            if (!Z.has(T[ee].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: T[ee].id, mode: i }
              }), V = !0;
              break;
            }
          if (!V) {
            for (let ee = Y - 1; ee >= 0; ee--)
              if (!Z.has(T[ee].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: T[ee].id, mode: i }
                }), V = !0;
                break;
              }
          }
          V || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await ba(Array.from(Z), P), !P) {
          const V = T.filter(
            (ee) => Z.has(ee.id)
          );
          b(V), C(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(Z) });
      } catch (P) {
        t({
          type: "SET_ERROR",
          payload: P instanceof Error ? P.message : String(P)
        });
      }
    },
    [
      I,
      w,
      u,
      e.viewScope,
      T,
      Y,
      i,
      t
    ]
  ), D = h.useCallback(() => {
    I && c(I);
  }, [I, c]), M = h.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: w } });
  }, [t, w]), X = h.useCallback(async () => {
    const W = w ? u["fullscreen.loop"] : u["viewer.loop"];
    if (Y === 0 && i === "gallery" && e.pagination.hasMore && !x && W) {
      N(!0);
      try {
        const J = e.pagination.limit, P = e.pagination.total, Z = Math.max(0, P - J), V = await vl(
          Z,
          J,
          e.searchQuery
        );
        if (!j.current || (t({ type: "APPEND_IMAGES", payload: V }), K.current === null)) return;
        if (V.images.length > 0) {
          const ee = V.images[V.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: ee.id, mode: "gallery" }
          });
        }
      } catch (J) {
        console.error("Failed to jump to end:", J);
      } finally {
        N(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: w } });
  }, [
    Y,
    i,
    e.pagination,
    e.searchQuery,
    u,
    t,
    x,
    w
  ]), pe = h.useCallback(
    (W) => {
      W && "stopPropagation" in W && W.stopPropagation();
      const J = q.current;
      J && (document.fullscreenElement ? document.exitFullscreen() : J.requestFullscreen().catch((P) => {
        console.error(
          `Error attempting to enable full-screen mode: ${P.message}`
        );
      }));
    },
    []
  ), U = h.useCallback(async () => {
    I && (T.length > 1 ? M() : t({ type: "CLOSE_VIEWER" }), await p(I));
  }, [I, T.length, M, p, t]), z = h.useCallback(async () => {
    if (!E || E.length === 0) return;
    const W = E.map((P) => P.id), J = W[0];
    try {
      const P = await bi(W);
      if (!j.current) return;
      if (t({ type: "ADD_IMAGES", payload: E }), e.viewScope === "trash") {
        const Z = P.restored_ids || W;
        t({ type: "REMOVE_IMAGES", payload: Z });
      }
      if (b(null), !j.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: J, mode: i }
      });
    } catch (P) {
      t({
        type: "SET_ERROR",
        payload: P instanceof Error ? P.message : String(P)
      });
    }
  }, [E, t, i, e.viewScope]), A = h.useCallback(async () => {
    if (E && E.length > 0)
      await z();
    else if (F && F.type === "tags") {
      const { imageId: W, addTags: J, removeTags: P } = F;
      try {
        await Ta([W], J, P);
        const Z = (i === "lineage" ? o : a).find((V) => V.id === W);
        if (Z) {
          const V = [...Z.tags];
          for (const we of J)
            V.includes(we) || V.push(we);
          const ee = V.filter((we) => !P.includes(we));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...Z, tags: ee }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: W, mode: i }
          });
        }
        C(null);
      } catch (Z) {
        t({
          type: "SET_ERROR",
          payload: Z instanceof Error ? Z.message : String(Z)
        });
      }
    }
  }, [
    E,
    F,
    z,
    a,
    o,
    i,
    t
  ]), le = h.useCallback(
    async (W) => {
      if (!W || !I) return;
      const J = I.id, P = [...I.tags], Z = W.split(/\s+/), V = [], ee = [];
      let we = !1, Tt = !1, Kn = !1;
      for (const _e of Z)
        if (_e.startsWith("tag:")) {
          const me = _e.substring(4);
          me && !P.includes(me) && !V.includes(me) && V.push(me);
        } else if (_e.startsWith("-tag:")) {
          const me = _e.substring(5);
          me && P.includes(me) && !ee.includes(me) && ee.push(me);
        } else if (_e.startsWith("tag-toggle:")) {
          const me = _e.substring(11);
          me && (P.includes(me) ? ee.includes(me) || ee.push(me) : V.includes(me) || V.push(me));
        } else _e === "next" ? we = !0 : _e === "prev" ? Tt = !0 : _e === "delete" && (Kn = !0);
      if (V.length > 0 || ee.length > 0)
        try {
          await Ta(
            [J],
            V,
            ee
          );
          const _e = [...P];
          for (const We of V)
            _e.includes(We) || _e.push(We);
          const me = _e.filter((We) => !ee.includes(We));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...I, id: J, tags: me }
          }), C({
            type: "tags",
            imageId: J,
            addTags: [...ee],
            removeTags: [...V]
          }), b(null);
        } catch (_e) {
          console.error("Failed to update tags via shortcut:", _e);
        }
      Kn ? O(!0) : we ? M() : Tt && X();
    },
    [I, t, M, X, O]
  );
  h.useEffect(() => {
    const W = (P) => {
      var me, We, _t;
      if (l === null) return;
      const Z = ((me = document.activeElement) == null ? void 0 : me.tagName) === "INPUT" || ((We = document.activeElement) == null ? void 0 : We.tagName) === "TEXTAREA" || ((_t = document.activeElement) == null ? void 0 : _t.isContentEditable), V = P.key === "Delete" || P.key === "Backspace", ee = P.key === "ArrowRight" || P.key === "ArrowLeft", we = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        P.key
      ), Tt = P.key === "Escape", Kn = (P.ctrlKey || P.metaKey) && (P.key === "z" || P.key === "Z" || P.code === "KeyZ"), _e = /^[0-9]$/.test(P.key) && !P.ctrlKey && !P.metaKey && !P.altKey && P.code !== "KeyZ";
      if (V || ee || we || Tt || Kn || _e)
        if (Z)
          if (Tt) {
            if (e.activeModal.type !== "none") {
              P.preventDefault(), P.stopPropagation();
              return;
            }
            P.preventDefault(), P.stopPropagation(), P.stopImmediatePropagation();
          } else
            return;
        else {
          if (Tt && e.activeModal.type !== "none") {
            P.preventDefault(), P.stopPropagation();
            return;
          }
          P.preventDefault(), P.stopPropagation(), P.stopImmediatePropagation();
        }
      else
        return;
      if (P.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (P.key === "ArrowRight")
        M();
      else if (P.key === "ArrowLeft")
        X();
      else if (P.key === "f" || P.key === "F")
        pe(P);
      else if (P.key === "i" || P.key === "I")
        k((Yn) => !Yn);
      else if (P.key === "t" || P.key === "T")
        D();
      else if ((P.key === "r" || P.key === "R") && e.viewScope === "trash")
        U();
      else if (P.key === "Delete")
        O();
      else if ((P.ctrlKey || P.metaKey) && (P.key === "z" || P.key === "Z"))
        A();
      else if (_e && !Z) {
        const Yn = `viewer.shortcut.${P.key}`, at = u[Yn];
        typeof at == "string" && at && (H(P.key), setTimeout(() => {
          j.current && H(null);
        }, 500), le(at));
      }
    };
    window.addEventListener("keydown", W, { capture: !0 });
    const J = () => {
      const P = !!document.fullscreenElement;
      v(P), k(P ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", J), () => {
      window.removeEventListener("keydown", W, { capture: !0 }), document.removeEventListener("fullscreenchange", J);
    };
  }, [
    l,
    t,
    pe,
    M,
    X,
    u,
    O,
    e.activeModal.type,
    A,
    D,
    U,
    e.viewScope,
    le
  ]), h.useEffect(() => {
    l !== null && r(l).catch((W) => {
      console.error("Failed to fetch full image details for viewer:", W);
    });
  }, [l, r]), h.useEffect(() => {
    i === "lineage" && l !== null && o.length === 0 && (g(!0), La(l).then((W) => {
      j.current && t({ type: "SET_LINEAGE", payload: W });
    }).catch((W) => {
      console.error("Failed to fetch lineage:", W);
    }).finally(() => {
      j.current && g(!1);
    }));
  }, [i, l, o.length, t]), h.useEffect(() => {
    i !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || Y !== -1 && Y >= T.length - 15 && n();
  }, [
    l,
    T.length,
    i,
    e.isLoading,
    e.pagination.hasMore,
    n,
    Y
  ]);
  const G = h.useMemo(() => {
    if (!f || Y === -1) return [];
    const W = u["viewer.thumbnail_window_size"], J = Math.floor(W / 2);
    let P = Math.max(0, Y - J);
    const Z = Math.min(T.length, P + W);
    return Z === T.length && (P = Math.max(0, Z - W)), T.slice(P, Z).map((V, ee) => ({
      img: V,
      absIndex: P + ee
    }));
  }, [T, Y, u, f]), ie = h.useMemo(() => I ? _(I) : [], [I, _]);
  return h.useEffect(() => {
    var W, J;
    if (l !== null) {
      if (f) {
        const P = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        P && P.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((W = document.activeElement) == null ? void 0 : W.tagName) === "CANVAS" && document.activeElement.blur(), (J = q.current) == null || J.focus();
    }
  }, [l, f]), h.useEffect(() => {
    if (l === null || T.length === 0) return;
    const W = T.findIndex(
      (V) => V.id === l
    );
    if (W === -1) return;
    const J = (V) => Ge(V), P = [
      W + 1,
      W + 2,
      W - 1
    ], Z = setTimeout(() => {
      for (const V of P)
        if (V >= 0 && V < T.length) {
          const ee = T[V], we = new Image();
          we.src = J(ee);
        }
    }, 150);
    return () => clearTimeout(Z);
  }, [l, T]), {
    isFullscreen: w,
    showDetails: y,
    setShowDetails: k,
    showThumbnails: f,
    setShowThumbnailsOverride: d,
    isLoadingLineage: m,
    isJumping: x,
    activeShortcutKey: L,
    lastDeletedImages: E,
    setLastDeletedImages: b,
    overlayRef: q,
    handleNext: M,
    handlePrevious: X,
    handleDelete: O,
    handleTagEdit: D,
    handleRestore: U,
    handleUndo: A,
    toggleFullscreen: pe,
    currentIndex: Y,
    currentThumbnails: T,
    image: I,
    windowedThumbnails: G,
    parentChain: ie
  };
}, Dh = ({
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
}) }) : null, Rh = ({
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
), Dd = h.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, a = typeof n.parent_id == "number" && n.parent_id === e.id, i = typeof e.parent_id == "number" && e.parent_id === n.id, o = Ge(e);
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
              children: a ? /* @__PURE__ */ s.jsx(cd, { size: 12 }) : /* @__PURE__ */ s.jsx(ud, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Dd.displayName = "ThumbnailItem";
const zh = ({
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
    Dd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  i === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(Dr, { className: "animate-spin", size: 20 }) })
] }) });
function Ah() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Ce(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: i,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: p,
    activeShortcutKey: _,
    setLastDeletedImages: w,
    overlayRef: v,
    handleNext: y,
    handlePrevious: k,
    handleTagEdit: S,
    handleRestore: d,
    toggleFullscreen: f,
    image: m,
    windowedThumbnails: g,
    parentChain: x
  } = Ph({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), N = h.useRef(null), { executeWorkflow: E } = Cd();
  if (!m) return null;
  const { viewerImageId: b, viewerMode: F } = e, C = Ge(m), L = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return be.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: v,
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
                L && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: d,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(Dr, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => u(!o),
                      type: "button",
                      title: o ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(md, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: S,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ s.jsx(hn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => i(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(km, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: f,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ s.jsx(Mm, { size: 20 }) : /* @__PURE__ */ s.jsx(Nm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ s.jsx(Se, { size: 20 })
                    }
                  )
                ] }),
                L && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: k,
                    type: "button",
                    disabled: p,
                    children: /* @__PURE__ */ s.jsx(dd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  p && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(Dr, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: N,
                      src: C,
                      alt: m.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${p ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                L && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: y,
                    type: "button",
                    children: /* @__PURE__ */ s.jsx(fd, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  Rh,
                  {
                    image: m,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: L,
                    parentChain: x,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  zh,
                  {
                    windowedThumbnails: g,
                    viewerImageId: b,
                    currentImage: m,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: F
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Dh,
                  {
                    settings: e.settings,
                    activeShortcutKey: _
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Ed,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename,
              onExecute: async (H) => {
                if (e.activeModal.type === "workflow_selection") {
                  const q = e.activeModal.maskFilename;
                  for (const j of e.activeModal.images)
                    await E(H, j, q);
                  t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Md, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Nd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: w
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Id, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(xd, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(kd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Sd,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            _d,
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
const Oh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Ce(), [a, i] = h.useState("gallery"), [o, u] = h.useState(""), [c, p] = h.useState(e.pagination.limit);
  h.useEffect(() => {
    p(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const _ = e.searchQuery.trim() !== "", w = h.useRef(null), v = h.useRef(null), y = h.useMemo(() => {
    const S = e.searchQuery.toLowerCase().includes("has_derivatives:yes") || e.searchQuery.toLowerCase().includes("has_derivatives:true") || e.searchQuery.toLowerCase().includes("has_derivatives:1");
    return e.images.filter((d) => e.viewScope === "trash" ? d.exists !== !1 || e.settings["gallery.trash.show_missing"] : d.exists !== !1 && (e.settings["gallery.show_parent_images"] || !d.has_children || S));
  }, [e.images, e.settings, e.viewScope, e.searchQuery]), k = h.useMemo(
    () => y.slice(0, c),
    [y, c]
  );
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && y.length === 0 && (B.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    y.length,
    r
  ]), h.useEffect(() => {
    const S = (d) => {
      d.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), d.preventDefault(), d.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), d.preventDefault(), d.stopPropagation()));
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [e.activeModal.type, e.selectedIds.size, t]), h.useEffect(() => {
    const S = new IntersectionObserver(
      (f) => {
        if (f[0].isIntersecting) {
          if (e.isLoading) {
            B.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < y.length ? (B.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                y.length
              ),
              totalAvailableLocally: y.length
            }
          ), p((m) => m + e.pagination.limit)) : e.pagination.hasMore ? (B.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : B.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: y.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), d = w.current;
    return d && S.observe(d), () => {
      d && S.unobserve(d);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    c,
    y.length,
    e.pagination.limit,
    e.images.length
  ]), h.useEffect(() => {
    const S = e.viewerImageId ?? v.current;
    if (S !== null && y.some((f) => f.id === S)) {
      const f = y.findIndex((g) => g.id === S);
      if (f >= c) {
        p(
          Math.ceil((f + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const m = document.querySelector(
        `[data-image-id="${S}"]`
      );
      m && (m.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (v.current = null));
    }
    e.viewerImageId !== null && (v.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    y,
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
    displayedImages: y,
    visibleImages: k,
    isSearchActive: _,
    loadMoreRef: w
  };
}, Fh = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Ce(), { handleRunWithWorkflow: l } = Ti(e, t), a = e.selectedIds.size;
  if (a === 0) return null;
  const i = e.viewScope === "trash", o = () => {
    const c = e.images.filter(
      (_) => e.selectedIds.has(_.id)
    ), p = /* @__PURE__ */ new Set();
    for (const _ of c)
      if (_.tags)
        for (const w of _.tags)
          p.add(w);
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
                  Dr,
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
                  Qn,
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
                  hn,
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
                  pd,
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
                  Qn,
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
              /* @__PURE__ */ s.jsx(Se, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, $h = () => {
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
    loadMoreRef: w
  } = Oh();
  return B.log("GalleryPanel: rendering", {
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
              /* @__PURE__ */ s.jsx(Qn, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (v) => r("gallery.trash.show_missing", v.target.checked)
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
                  /* @__PURE__ */ s.jsx(Se, { size: 14 }),
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
                children: /* @__PURE__ */ s.jsx(Vn, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const y = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", y);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(jm, { size: 14 }) : /* @__PURE__ */ s.jsx(md, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(hn, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(xm, { size: 14 })
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
                  Dr,
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
                children: /* @__PURE__ */ s.jsx(Lm, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Lh, {}) })
        ] }),
        /* @__PURE__ */ s.jsx(Ch, {}),
        e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ s.jsx(
          Th,
          {
            onClose: () => a("gallery"),
            onSearch: (v) => {
              t({ type: "SET_SEARCH_QUERY", payload: v }), a("search");
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
              children: p.map((v) => {
                const y = e.settings["sidebar.thumbnail_size"] || 100, k = e.settings["gallery.view_mode"] === "grid_only", S = k && v.width && v.height ? Math.min(
                  y,
                  y * v.width / v.height
                ) + 10 : k ? y + 10 : "100%";
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    "data-image-id": v.id,
                    style: {
                      width: k ? "auto" : "100%",
                      flexShrink: 0,
                      display: k ? "inline-block" : "block"
                    },
                    children: /* @__PURE__ */ s.jsx(
                      Eh,
                      {
                        height: k ? y + 10 : Math.max(y, 150),
                        style: {
                          width: typeof S == "number" ? `${S}px` : S,
                          minWidth: typeof S == "number" ? `${S}px` : S,
                          display: k ? "inline-block" : "block"
                        },
                        children: /* @__PURE__ */ s.jsx(jh, { image: v })
                      }
                    )
                  },
                  v.id
                );
              })
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: w,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= c.length && !e.pagination.hasMore && p.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(Fh, {}),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Ah, {}),
        /* @__PURE__ */ s.jsx(_h, {})
      ]
    }
  );
};
Ko.registerExtension({
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
const Wh = document.getElementById(
  "meld-gallery-style"
);
if (!Wh) {
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
let sl = null, ot = null;
Ko.registerExtension({
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
      const n = await vd();
      B.init(n.dev_mode), B.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), B.init(!1);
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
        ), (r = e.ui.meld) == null || r.refresh(), B.log("Import completed.");
      }), te.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await yd({
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
            B.log("render called", {
              el: n,
              galleryRoot: sl,
              galleryContainer: ot
            }), ot || (B.log("galleryContainer not found, creating new one"), ot = document.createElement("div"), ot.id = "meld-gallery-container", ot.style.height = "100%", ot.style.width = "100%", ot.style.display = "flex", ot.style.flexDirection = "column"), n.contains(ot) || (B.log("Appending galleryContainer to el"), n.appendChild(ot)), sl ? B.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (B.log("Creating new gallery root"), sl = sd(ot), sl.render(
              wl.createElement(
                th,
                null,
                wl.createElement($h)
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
