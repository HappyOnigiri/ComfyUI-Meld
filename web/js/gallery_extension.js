import { api as G } from "../../../scripts/api.js";
import { app as zo } from "../../../scripts/app.js";
function gd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fo = { exports: {} }, H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr = Symbol.for("react.element"), yd = Symbol.for("react.portal"), vd = Symbol.for("react.fragment"), wd = Symbol.for("react.strict_mode"), xd = Symbol.for("react.profiler"), _d = Symbol.for("react.provider"), Sd = Symbol.for("react.context"), kd = Symbol.for("react.forward_ref"), jd = Symbol.for("react.suspense"), Ed = Symbol.for("react.memo"), Cd = Symbol.for("react.lazy"), xa = Symbol.iterator;
function Nd(e) {
  return e === null || typeof e != "object" ? null : (e = xa && e[xa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Oo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ao = Object.assign, $o = {};
function On(e, t, n) {
  this.props = e, this.context = t, this.refs = $o, this.updater = n || Oo;
}
On.prototype.isReactComponent = {};
On.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
On.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vo() {
}
Vo.prototype = On.prototype;
function ki(e, t, n) {
  this.props = e, this.context = t, this.refs = $o, this.updater = n || Oo;
}
var ji = ki.prototype = new Vo();
ji.constructor = ki;
Ao(ji, On.prototype);
ji.isPureReactComponent = !0;
var _a = Array.isArray, Uo = Object.prototype.hasOwnProperty, Ei = { current: null }, Wo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qo(e, t, n) {
  var r, l = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) Uo.call(t, r) && !Wo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), d = 0; d < o; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Cr, type: e, key: s, ref: a, props: l, _owner: Ei.current };
}
function Id(e, t) {
  return { $$typeof: Cr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ci(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
}
function Td(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Sa = /\/+/g;
function es(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Td("" + e.key) : t.toString(36);
}
function Xr(e, t, n, r, l) {
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
        case Cr:
        case yd:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + es(a, 0) : r, _a(l) ? (n = "", e != null && (n = e.replace(Sa, "$&/") + "/"), Xr(l, t, n, "", function(d) {
    return d;
  })) : l != null && (Ci(l) && (l = Id(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(Sa, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", _a(e)) for (var o = 0; o < e.length; o++) {
    s = e[o];
    var u = r + es(s, o);
    a += Xr(s, t, n, u, l);
  }
  else if (u = Nd(e), typeof u == "function") for (e = u.call(e), o = 0; !(s = e.next()).done; ) s = s.value, u = r + es(s, o++), a += Xr(s, t, n, u, l);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Pr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Xr(e, r, "", "", function(s) {
    return t.call(n, s, l++);
  }), r;
}
function Ld(e) {
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
var be = { current: null }, Zr = { transition: null }, Md = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: Zr, ReactCurrentOwner: Ei };
function Ho() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = { map: Pr, forEach: function(e, t, n) {
  Pr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Pr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Pr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ci(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
H.Component = On;
H.Fragment = vd;
H.Profiler = xd;
H.PureComponent = ki;
H.StrictMode = wd;
H.Suspense = jd;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
H.act = Ho;
H.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ao({}, e.props), l = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = Ei.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Uo.call(t, u) && !Wo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var d = 0; d < u; d++) o[d] = arguments[d + 2];
    r.children = o;
  }
  return { $$typeof: Cr, type: e.type, key: l, ref: s, props: r, _owner: a };
};
H.createContext = function(e) {
  return e = { $$typeof: Sd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _d, _context: e }, e.Consumer = e;
};
H.createElement = Qo;
H.createFactory = function(e) {
  var t = Qo.bind(null, e);
  return t.type = e, t;
};
H.createRef = function() {
  return { current: null };
};
H.forwardRef = function(e) {
  return { $$typeof: kd, render: e };
};
H.isValidElement = Ci;
H.lazy = function(e) {
  return { $$typeof: Cd, _payload: { _status: -1, _result: e }, _init: Ld };
};
H.memo = function(e, t) {
  return { $$typeof: Ed, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function(e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
    e();
  } finally {
    Zr.transition = t;
  }
};
H.unstable_act = Ho;
H.useCallback = function(e, t) {
  return be.current.useCallback(e, t);
};
H.useContext = function(e) {
  return be.current.useContext(e);
};
H.useDebugValue = function() {
};
H.useDeferredValue = function(e) {
  return be.current.useDeferredValue(e);
};
H.useEffect = function(e, t) {
  return be.current.useEffect(e, t);
};
H.useId = function() {
  return be.current.useId();
};
H.useImperativeHandle = function(e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function(e, t) {
  return be.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function(e, t) {
  return be.current.useLayoutEffect(e, t);
};
H.useMemo = function(e, t) {
  return be.current.useMemo(e, t);
};
H.useReducer = function(e, t, n) {
  return be.current.useReducer(e, t, n);
};
H.useRef = function(e) {
  return be.current.useRef(e);
};
H.useState = function(e) {
  return be.current.useState(e);
};
H.useSyncExternalStore = function(e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function() {
  return be.current.useTransition();
};
H.version = "18.3.1";
Fo.exports = H;
var v = Fo.exports;
const ul = /* @__PURE__ */ gd(v);
var Bo = { exports: {} }, Be = {}, Go = { exports: {} }, Ko = {};
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
  function t(T, O) {
    var W = T.length;
    T.push(O);
    e: for (; 0 < W; ) {
      var Z = W - 1 >>> 1, A = T[Z];
      if (0 < l(A, O)) T[Z] = O, T[W] = A, W = Z;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var O = T[0], W = T.pop();
    if (W !== O) {
      T[0] = W;
      e: for (var Z = 0, A = T.length, J = A >>> 1; Z < J; ) {
        var te = 2 * (Z + 1) - 1, Ke = T[te], je = te + 1, Ye = T[je];
        if (0 > l(Ke, W)) je < A && 0 > l(Ye, Ke) ? (T[Z] = Ye, T[je] = W, Z = je) : (T[Z] = Ke, T[te] = W, Z = te);
        else if (je < A && 0 > l(Ye, W)) T[Z] = Ye, T[je] = W, Z = je;
        else break e;
      }
    }
    return O;
  }
  function l(T, O) {
    var W = T.sortIndex - O.sortIndex;
    return W !== 0 ? W : T.id - O.id;
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
  var u = [], d = [], h = 1, g = null, m = 3, y = !1, w = !1, x = !1, j = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var O = n(d); O !== null; ) {
      if (O.callback === null) r(d);
      else if (O.startTime <= T) r(d), O.sortIndex = O.expirationTime, t(u, O);
      else break;
      O = n(d);
    }
  }
  function k(T) {
    if (x = !1, p(T), !w) if (n(u) !== null) w = !0, ee(N);
    else {
      var O = n(d);
      O !== null && re(k, O.startTime - T);
    }
  }
  function N(T, O) {
    w = !1, x && (x = !1, f(E), E = -1), y = !0;
    var W = m;
    try {
      for (p(O), g = n(u); g !== null && (!(g.expirationTime > O) || T && !S()); ) {
        var Z = g.callback;
        if (typeof Z == "function") {
          g.callback = null, m = g.priorityLevel;
          var A = Z(g.expirationTime <= O);
          O = e.unstable_now(), typeof A == "function" ? g.callback = A : g === n(u) && r(u), p(O);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var J = !0;
      else {
        var te = n(d);
        te !== null && re(k, te.startTime - O), J = !1;
      }
      return J;
    } finally {
      g = null, m = W, y = !1;
    }
  }
  var P = !1, _ = null, E = -1, b = 5, R = -1;
  function S() {
    return !(e.unstable_now() - R < b);
  }
  function D() {
    if (_ !== null) {
      var T = e.unstable_now();
      R = T;
      var O = !0;
      try {
        O = _(!0, T);
      } finally {
        O ? C() : (P = !1, _ = null);
      }
    } else P = !1;
  }
  var C;
  if (typeof c == "function") C = function() {
    c(D);
  };
  else if (typeof MessageChannel < "u") {
    var U = new MessageChannel(), M = U.port2;
    U.port1.onmessage = D, C = function() {
      M.postMessage(null);
    };
  } else C = function() {
    j(D, 0);
  };
  function ee(T) {
    _ = T, P || (P = !0, C());
  }
  function re(T, O) {
    E = j(function() {
      T(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, ee(N));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(T) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = m;
    }
    var W = m;
    m = O;
    try {
      return T();
    } finally {
      m = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, O) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var W = m;
    m = T;
    try {
      return O();
    } finally {
      m = W;
    }
  }, e.unstable_scheduleCallback = function(T, O, W) {
    var Z = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? Z + W : Z) : W = Z, T) {
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
    return A = W + A, T = { id: h++, callback: O, priorityLevel: T, startTime: W, expirationTime: A, sortIndex: -1 }, W > Z ? (T.sortIndex = W, t(d, T), n(u) === null && T === n(d) && (x ? (f(E), E = -1) : x = !0, re(k, W - Z))) : (T.sortIndex = A, t(u, T), w || y || (w = !0, ee(N))), T;
  }, e.unstable_shouldYield = S, e.unstable_wrapCallback = function(T) {
    var O = m;
    return function() {
      var W = m;
      m = O;
      try {
        return T.apply(this, arguments);
      } finally {
        m = W;
      }
    };
  };
})(Ko);
Go.exports = Ko;
var Pd = Go.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bd = v, He = Pd;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Yo = /* @__PURE__ */ new Set(), or = {};
function sn(e, t) {
  Tn(e, t), Tn(e + "Capture", t);
}
function Tn(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) Yo.add(t[e]);
}
var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cs = Object.prototype.hasOwnProperty, Dd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ka = {}, ja = {};
function Rd(e) {
  return Cs.call(ja, e) ? !0 : Cs.call(ka, e) ? !1 : Dd.test(e) ? ja[e] = !0 : (ka[e] = !0, !1);
}
function zd(e, t, n, r) {
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
function Fd(e, t, n, r) {
  if (t === null || typeof t > "u" || zd(e, t, n, r)) return !0;
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
function De(e, t, n, r, l, s, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a;
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ke[e] = new De(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ke[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ke[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ke[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ke[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ke[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ke[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ke[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ke[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ni = /[\-:]([a-z])/g;
function Ii(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ni,
    Ii
  );
  ke[t] = new De(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ni, Ii);
  ke[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ni, Ii);
  ke[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ti(e, t, n, r) {
  var l = ke.hasOwnProperty(t) ? ke[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Fd(t, n, l, r) && (n = null), r || l === null ? Rd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, br = Symbol.for("react.element"), dn = Symbol.for("react.portal"), fn = Symbol.for("react.fragment"), Li = Symbol.for("react.strict_mode"), Ns = Symbol.for("react.profiler"), Xo = Symbol.for("react.provider"), Zo = Symbol.for("react.context"), Mi = Symbol.for("react.forward_ref"), Is = Symbol.for("react.suspense"), Ts = Symbol.for("react.suspense_list"), Pi = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), Jo = Symbol.for("react.offscreen"), Ea = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object" ? null : (e = Ea && e[Ea] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, ts;
function Yn(e) {
  if (ts === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ts = t && t[1] || "";
  }
  return `
` + ts + e;
}
var ns = !1;
function rs(e, t) {
  if (!e || ns) return "";
  ns = !0;
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
    ns = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function Od(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn("Lazy");
    case 13:
      return Yn("Suspense");
    case 19:
      return Yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = rs(e.type, !1), e;
    case 11:
      return e = rs(e.type.render, !1), e;
    case 1:
      return e = rs(e.type, !0), e;
    default:
      return "";
  }
}
function Ls(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fn:
      return "Fragment";
    case dn:
      return "Portal";
    case Ns:
      return "Profiler";
    case Li:
      return "StrictMode";
    case Is:
      return "Suspense";
    case Ts:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Zo:
      return (e.displayName || "Context") + ".Consumer";
    case Xo:
      return (e._context.displayName || "Context") + ".Provider";
    case Mi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Pi:
      return t = e.displayName || null, t !== null ? t : Ls(e.type) || "Memo";
    case Nt:
      t = e._payload, e = e._init;
      try {
        return Ls(e(t));
      } catch {
      }
  }
  return null;
}
function Ad(e) {
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
      return Ls(t);
    case 8:
      return t === Li ? "StrictMode" : "Mode";
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
function Vt(e) {
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
function qo(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function $d(e) {
  var t = qo(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Dr(e) {
  e._valueTracker || (e._valueTracker = $d(e));
}
function eu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = qo(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function cl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ms(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Vt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function tu(e, t) {
  t = t.checked, t != null && Ti(e, "checked", t, !1);
}
function Ps(e, t) {
  tu(e, t);
  var n = Vt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? bs(e, t.type, n) : t.hasOwnProperty("defaultValue") && bs(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Na(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function bs(e, t, n) {
  (t !== "number" || cl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ds(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ia(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(I(92));
      if (Xn(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Vt(n) };
}
function nu(e, t) {
  var n = Vt(t.value), r = Vt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ta(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ru(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Rs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ru(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Rr, lu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Rr = Rr || document.createElement("div"), Rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qn = {
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
}, Vd = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function(e) {
  Vd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
  });
});
function su(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
}
function iu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = su(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Ud = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function zs(e, t) {
  if (t) {
    if (Ud[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Fs(e, t) {
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
var Os = null;
function bi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var As = null, jn = null, En = null;
function La(e) {
  if (e = Tr(e)) {
    if (typeof As != "function") throw Error(I(280));
    var t = e.stateNode;
    t && (t = Al(t), As(e.stateNode, e.type, t));
  }
}
function au(e) {
  jn ? En ? En.push(e) : En = [e] : jn = e;
}
function ou() {
  if (jn) {
    var e = jn, t = En;
    if (En = jn = null, La(e), t) for (e = 0; e < t.length; e++) La(t[e]);
  }
}
function uu(e, t) {
  return e(t);
}
function cu() {
}
var ls = !1;
function du(e, t, n) {
  if (ls) return e(t, n);
  ls = !0;
  try {
    return uu(e, t, n);
  } finally {
    ls = !1, (jn !== null || En !== null) && (cu(), ou());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
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
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var $s = !1;
if (_t) try {
  var Un = {};
  Object.defineProperty(Un, "passive", { get: function() {
    $s = !0;
  } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
} catch {
  $s = !1;
}
function Wd(e, t, n, r, l, s, a, o, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var er = !1, dl = null, fl = !1, Vs = null, Qd = { onError: function(e) {
  er = !0, dl = e;
} };
function Hd(e, t, n, r, l, s, a, o, u) {
  er = !1, dl = null, Wd.apply(Qd, arguments);
}
function Bd(e, t, n, r, l, s, a, o, u) {
  if (Hd.apply(this, arguments), er) {
    if (er) {
      var d = dl;
      er = !1, dl = null;
    } else throw Error(I(198));
    fl || (fl = !0, Vs = d);
  }
}
function an(e) {
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
function fu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ma(e) {
  if (an(e) !== e) throw Error(I(188));
}
function Gd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = an(e), t === null) throw Error(I(188));
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
        if (s === n) return Ma(l), e;
        if (s === r) return Ma(l), t;
        s = s.sibling;
      }
      throw Error(I(188));
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
        if (!a) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function pu(e) {
  return e = Gd(e), e !== null ? mu(e) : null;
}
function mu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hu = He.unstable_scheduleCallback, Pa = He.unstable_cancelCallback, Kd = He.unstable_shouldYield, Yd = He.unstable_requestPaint, pe = He.unstable_now, Xd = He.unstable_getCurrentPriorityLevel, Di = He.unstable_ImmediatePriority, gu = He.unstable_UserBlockingPriority, pl = He.unstable_NormalPriority, Zd = He.unstable_LowPriority, yu = He.unstable_IdlePriority, Rl = null, mt = null;
function Jd(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function") try {
    mt.onCommitFiberRoot(Rl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ot = Math.clz32 ? Math.clz32 : tf, qd = Math.log, ef = Math.LN2;
function tf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (qd(e) / ef | 0) | 0;
}
var zr = 64, Fr = 4194304;
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
function ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, s = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? r = Zn(o) : (s &= a, s !== 0 && (r = Zn(s)));
  } else a = n & ~l, a !== 0 ? r = Zn(a) : s !== 0 && (r = Zn(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, s = t & -t, l >= s || l === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ot(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function nf(e, t) {
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
function rf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - ot(s), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = nf(o, t)) : u <= t && (e.expiredLanes |= o), s &= ~o;
  }
}
function Us(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function vu() {
  var e = zr;
  return zr <<= 1, !(zr & 4194240) && (zr = 64), e;
}
function ss(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ot(t), e[t] = n;
}
function lf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ot(n), s = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~s;
  }
}
function Ri(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ne = 0;
function wu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var xu, zi, _u, Su, ku, Ws = !1, Or = [], bt = null, Dt = null, Rt = null, dr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), Tt = [], sf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fr.delete(t.pointerId);
  }
}
function Wn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [l] }, t !== null && (t = Tr(t), t !== null && zi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function af(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return bt = Wn(bt, e, t, n, r, l), !0;
    case "dragenter":
      return Dt = Wn(Dt, e, t, n, r, l), !0;
    case "mouseover":
      return Rt = Wn(Rt, e, t, n, r, l), !0;
    case "pointerover":
      var s = l.pointerId;
      return dr.set(s, Wn(dr.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return s = l.pointerId, fr.set(s, Wn(fr.get(s) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function ju(e) {
  var t = Yt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = fu(n), t !== null) {
          e.blockedOn = t, ku(e.priority, function() {
            _u(n);
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
function Jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Os = r, n.target.dispatchEvent(r), Os = null;
    } else return t = Tr(n), t !== null && zi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Da(e, t, n) {
  Jr(e) && n.delete(t);
}
function of() {
  Ws = !1, bt !== null && Jr(bt) && (bt = null), Dt !== null && Jr(Dt) && (Dt = null), Rt !== null && Jr(Rt) && (Rt = null), dr.forEach(Da), fr.forEach(Da);
}
function Qn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ws || (Ws = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, of)));
}
function pr(e) {
  function t(l) {
    return Qn(l, e);
  }
  if (0 < Or.length) {
    Qn(Or[0], e);
    for (var n = 1; n < Or.length; n++) {
      var r = Or[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (bt !== null && Qn(bt, e), Dt !== null && Qn(Dt, e), Rt !== null && Qn(Rt, e), dr.forEach(t), fr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) ju(n), n.blockedOn === null && Tt.shift();
}
var Cn = Et.ReactCurrentBatchConfig, hl = !0;
function uf(e, t, n, r) {
  var l = ne, s = Cn.transition;
  Cn.transition = null;
  try {
    ne = 1, Fi(e, t, n, r);
  } finally {
    ne = l, Cn.transition = s;
  }
}
function cf(e, t, n, r) {
  var l = ne, s = Cn.transition;
  Cn.transition = null;
  try {
    ne = 4, Fi(e, t, n, r);
  } finally {
    ne = l, Cn.transition = s;
  }
}
function Fi(e, t, n, r) {
  if (hl) {
    var l = Qs(e, t, n, r);
    if (l === null) hs(e, t, r, gl, n), ba(e, r);
    else if (af(l, e, t, n, r)) r.stopPropagation();
    else if (ba(e, r), t & 4 && -1 < sf.indexOf(e)) {
      for (; l !== null; ) {
        var s = Tr(l);
        if (s !== null && xu(s), s = Qs(e, t, n, r), s === null && hs(e, t, r, gl, n), s === l) break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else hs(e, t, r, null, n);
  }
}
var gl = null;
function Qs(e, t, n, r) {
  if (gl = null, e = bi(r), e = Yt(e), e !== null) if (t = an(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = fu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return gl = e, null;
}
function Eu(e) {
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
      switch (Xd()) {
        case Di:
          return 1;
        case gu:
          return 4;
        case pl:
        case Zd:
          return 16;
        case yu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, Oi = null, qr = null;
function Cu() {
  if (qr) return qr;
  var e, t = Oi, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++) ;
  return qr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function el(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ar() {
  return !0;
}
function Ra() {
  return !1;
}
function Ge(e) {
  function t(n, r, l, s, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(s) : s[o]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ar : Ra, this.isPropagationStopped = Ra, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ar);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ar);
  }, persist: function() {
  }, isPersistent: Ar }), t;
}
var An = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ai = Ge(An), Ir = ce({}, An, { view: 0, detail: 0 }), df = Ge(Ir), is, as, Hn, zl = ce({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $i, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (is = e.screenX - Hn.screenX, as = e.screenY - Hn.screenY) : as = is = 0, Hn = e), is);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : as;
} }), za = Ge(zl), ff = ce({}, zl, { dataTransfer: 0 }), pf = Ge(ff), mf = ce({}, Ir, { relatedTarget: 0 }), os = Ge(mf), hf = ce({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gf = Ge(hf), yf = ce({}, An, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), vf = Ge(yf), wf = ce({}, An, { data: 0 }), Fa = Ge(wf), xf = {
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
}, _f = {
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
}, Sf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sf[e]) ? !!t[e] : !1;
}
function $i() {
  return kf;
}
var jf = ce({}, Ir, { key: function(e) {
  if (e.key) {
    var t = xf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = el(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _f[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $i, charCode: function(e) {
  return e.type === "keypress" ? el(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? el(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ef = Ge(jf), Cf = ce({}, zl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oa = Ge(Cf), Nf = ce({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $i }), If = Ge(Nf), Tf = ce({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lf = Ge(Tf), Mf = ce({}, zl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Pf = Ge(Mf), bf = [9, 13, 27, 32], Vi = _t && "CompositionEvent" in window, tr = null;
_t && "documentMode" in document && (tr = document.documentMode);
var Df = _t && "TextEvent" in window && !tr, Nu = _t && (!Vi || tr && 8 < tr && 11 >= tr), Aa = " ", $a = !1;
function Iu(e, t) {
  switch (e) {
    case "keyup":
      return bf.indexOf(t.keyCode) !== -1;
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
function Tu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var pn = !1;
function Rf(e, t) {
  switch (e) {
    case "compositionend":
      return Tu(t);
    case "keypress":
      return t.which !== 32 ? null : ($a = !0, Aa);
    case "textInput":
      return e = t.data, e === Aa && $a ? null : e;
    default:
      return null;
  }
}
function zf(e, t) {
  if (pn) return e === "compositionend" || !Vi && Iu(e, t) ? (e = Cu(), qr = Oi = Mt = null, pn = !1, e) : null;
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
      return Nu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ff = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ff[e.type] : t === "textarea";
}
function Lu(e, t, n, r) {
  au(r), t = yl(t, "onChange"), 0 < t.length && (n = new Ai("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var nr = null, mr = null;
function Of(e) {
  Vu(e, 0);
}
function Fl(e) {
  var t = gn(e);
  if (eu(t)) return e;
}
function Af(e, t) {
  if (e === "change") return t;
}
var Mu = !1;
if (_t) {
  var us;
  if (_t) {
    var cs = "oninput" in document;
    if (!cs) {
      var Ua = document.createElement("div");
      Ua.setAttribute("oninput", "return;"), cs = typeof Ua.oninput == "function";
    }
    us = cs;
  } else us = !1;
  Mu = us && (!document.documentMode || 9 < document.documentMode);
}
function Wa() {
  nr && (nr.detachEvent("onpropertychange", Pu), mr = nr = null);
}
function Pu(e) {
  if (e.propertyName === "value" && Fl(mr)) {
    var t = [];
    Lu(t, mr, e, bi(e)), du(Of, t);
  }
}
function $f(e, t, n) {
  e === "focusin" ? (Wa(), nr = t, mr = n, nr.attachEvent("onpropertychange", Pu)) : e === "focusout" && Wa();
}
function Vf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fl(mr);
}
function Uf(e, t) {
  if (e === "click") return Fl(t);
}
function Wf(e, t) {
  if (e === "input" || e === "change") return Fl(t);
}
function Qf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ct = typeof Object.is == "function" ? Object.is : Qf;
function hr(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Cs.call(t, l) || !ct(e[l], t[l])) return !1;
  }
  return !0;
}
function Qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ha(e, t) {
  var n = Qa(e);
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
    n = Qa(n);
  }
}
function bu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Du() {
  for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = cl(e.document);
  }
  return t;
}
function Ui(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Hf(e) {
  var t = Du(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && bu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ui(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, s = Math.min(r.start, l);
        r = r.end === void 0 ? s : Math.min(r.end, l), !e.extend && s > r && (l = r, r = s, s = l), l = Ha(n, s);
        var a = Ha(
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
var Bf = _t && "documentMode" in document && 11 >= document.documentMode, mn = null, Hs = null, rr = null, Bs = !1;
function Ba(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bs || mn == null || mn !== cl(r) || (r = mn, "selectionStart" in r && Ui(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), rr && hr(rr, r) || (rr = r, r = yl(Hs, "onSelect"), 0 < r.length && (t = new Ai("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
}
function $r(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var hn = { animationend: $r("Animation", "AnimationEnd"), animationiteration: $r("Animation", "AnimationIteration"), animationstart: $r("Animation", "AnimationStart"), transitionend: $r("Transition", "TransitionEnd") }, ds = {}, Ru = {};
_t && (Ru = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
function Ol(e) {
  if (ds[e]) return ds[e];
  if (!hn[e]) return e;
  var t = hn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ru) return ds[e] = t[n];
  return e;
}
var zu = Ol("animationend"), Fu = Ol("animationiteration"), Ou = Ol("animationstart"), Au = Ol("transitionend"), $u = /* @__PURE__ */ new Map(), Ga = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) {
  $u.set(e, t), sn(t, [e]);
}
for (var fs = 0; fs < Ga.length; fs++) {
  var ps = Ga[fs], Gf = ps.toLowerCase(), Kf = ps[0].toUpperCase() + ps.slice(1);
  Wt(Gf, "on" + Kf);
}
Wt(zu, "onAnimationEnd");
Wt(Fu, "onAnimationIteration");
Wt(Ou, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Au, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function Ka(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Bd(r, t, void 0, e), e.currentTarget = null;
}
function Vu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, d = o.currentTarget;
        if (o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Ka(l, o, d), s = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, d = o.currentTarget, o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Ka(l, o, d), s = u;
      }
    }
  }
  if (fl) throw e = Vs, fl = !1, Vs = null, e;
}
function se(e, t) {
  var n = t[Zs];
  n === void 0 && (n = t[Zs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Uu(t, e, 2, !1), n.add(r));
}
function ms(e, t, n) {
  var r = 0;
  t && (r |= 4), Uu(n, e, r, t);
}
var Vr = "_reactListening" + Math.random().toString(36).slice(2);
function gr(e) {
  if (!e[Vr]) {
    e[Vr] = !0, Yo.forEach(function(n) {
      n !== "selectionchange" && (Yf.has(n) || ms(n, !1, e), ms(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vr] || (t[Vr] = !0, ms("selectionchange", !1, t));
  }
}
function Uu(e, t, n, r) {
  switch (Eu(t)) {
    case 1:
      var l = uf;
      break;
    case 4:
      l = cf;
      break;
    default:
      l = Fi;
  }
  n = l.bind(null, t, n, e), l = void 0, !$s || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function hs(e, t, n, r, l) {
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
        if (a = Yt(o), a === null) return;
        if (u = a.tag, u === 5 || u === 6) {
          r = s = a;
          continue e;
        }
        o = o.parentNode;
      }
    }
    r = r.return;
  }
  du(function() {
    var d = s, h = bi(n), g = [];
    e: {
      var m = $u.get(e);
      if (m !== void 0) {
        var y = Ai, w = e;
        switch (e) {
          case "keypress":
            if (el(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Ef;
            break;
          case "focusin":
            w = "focus", y = os;
            break;
          case "focusout":
            w = "blur", y = os;
            break;
          case "beforeblur":
          case "afterblur":
            y = os;
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
            y = za;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = pf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = If;
            break;
          case zu:
          case Fu:
          case Ou:
            y = gf;
            break;
          case Au:
            y = Lf;
            break;
          case "scroll":
            y = df;
            break;
          case "wheel":
            y = Pf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Oa;
        }
        var x = (t & 4) !== 0, j = !x && e === "scroll", f = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var k = p.stateNode;
          if (p.tag === 5 && k !== null && (p = k, f !== null && (k = cr(c, f), k != null && x.push(yr(c, k, p)))), j) break;
          c = c.return;
        }
        0 < x.length && (m = new y(m, w, null, n, h), g.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== Os && (w = n.relatedTarget || n.fromElement) && (Yt(w) || w[St])) break e;
        if ((y || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = d, w = w ? Yt(w) : null, w !== null && (j = an(w), w !== j || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = d), y !== w)) {
          if (x = za, k = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Oa, k = "onPointerLeave", f = "onPointerEnter", c = "pointer"), j = y == null ? m : gn(y), p = w == null ? m : gn(w), m = new x(k, c + "leave", y, n, h), m.target = j, m.relatedTarget = p, k = null, Yt(h) === d && (x = new x(f, c + "enter", w, n, h), x.target = p, x.relatedTarget = j, k = x), j = k, y && w) t: {
            for (x = y, f = w, c = 0, p = x; p; p = cn(p)) c++;
            for (p = 0, k = f; k; k = cn(k)) p++;
            for (; 0 < c - p; ) x = cn(x), c--;
            for (; 0 < p - c; ) f = cn(f), p--;
            for (; c--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = cn(x), f = cn(f);
            }
            x = null;
          }
          else x = null;
          y !== null && Ya(g, m, y, x, !1), w !== null && j !== null && Ya(g, j, w, x, !0);
        }
      }
      e: {
        if (m = d ? gn(d) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var N = Af;
        else if (Va(m)) if (Mu) N = Wf;
        else {
          N = Vf;
          var P = $f;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Uf);
        if (N && (N = N(e, d))) {
          Lu(g, N, n, h);
          break e;
        }
        P && P(e, m, d), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && bs(m, "number", m.value);
      }
      switch (P = d ? gn(d) : window, e) {
        case "focusin":
          (Va(P) || P.contentEditable === "true") && (mn = P, Hs = d, rr = null);
          break;
        case "focusout":
          rr = Hs = mn = null;
          break;
        case "mousedown":
          Bs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Bs = !1, Ba(g, n, h);
          break;
        case "selectionchange":
          if (Bf) break;
        case "keydown":
        case "keyup":
          Ba(g, n, h);
      }
      var _;
      if (Vi) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else pn ? Iu(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Nu && n.locale !== "ko" && (pn || E !== "onCompositionStart" ? E === "onCompositionEnd" && pn && (_ = Cu()) : (Mt = h, Oi = "value" in Mt ? Mt.value : Mt.textContent, pn = !0)), P = yl(d, E), 0 < P.length && (E = new Fa(E, e, null, n, h), g.push({ event: E, listeners: P }), _ ? E.data = _ : (_ = Tu(n), _ !== null && (E.data = _)))), (_ = Df ? Rf(e, n) : zf(e, n)) && (d = yl(d, "onBeforeInput"), 0 < d.length && (h = new Fa("onBeforeInput", "beforeinput", null, n, h), g.push({ event: h, listeners: d }), h.data = _));
    }
    Vu(g, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, s = l.stateNode;
    l.tag === 5 && s !== null && (l = s, s = cr(e, n), s != null && r.unshift(yr(e, s, l)), s = cr(e, t), s != null && r.push(yr(e, s, l))), e = e.return;
  }
  return r;
}
function cn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ya(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, d = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && d !== null && (o = d, l ? (u = cr(n, s), u != null && a.unshift(yr(n, u, o))) : l || (u = cr(n, s), u != null && a.push(yr(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Xf = /\r\n?/g, Zf = /\u0000|\uFFFD/g;
function Xa(e) {
  return (typeof e == "string" ? e : "" + e).replace(Xf, `
`).replace(Zf, "");
}
function Ur(e, t, n) {
  if (t = Xa(t), Xa(e) !== t && n) throw Error(I(425));
}
function vl() {
}
var Gs = null, Ks = null;
function Ys(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Xs = typeof setTimeout == "function" ? setTimeout : void 0, Jf = typeof clearTimeout == "function" ? clearTimeout : void 0, Za = typeof Promise == "function" ? Promise : void 0, qf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Za < "u" ? function(e) {
  return Za.resolve(null).then(e).catch(ep);
} : Xs;
function ep(e) {
  setTimeout(function() {
    throw e;
  });
}
function gs(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), pr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  pr(t);
}
function zt(e) {
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
function Ja(e) {
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
var $n = Math.random().toString(36).slice(2), pt = "__reactFiber$" + $n, vr = "__reactProps$" + $n, St = "__reactContainer$" + $n, Zs = "__reactEvents$" + $n, tp = "__reactListeners$" + $n, np = "__reactHandles$" + $n;
function Yt(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[St] || n[pt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ja(e); e !== null; ) {
        if (n = e[pt]) return n;
        e = Ja(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Tr(e) {
  return e = e[pt] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Al(e) {
  return e[vr] || null;
}
var Js = [], yn = -1;
function Qt(e) {
  return { current: e };
}
function ie(e) {
  0 > yn || (e.current = Js[yn], Js[yn] = null, yn--);
}
function le(e, t) {
  yn++, Js[yn] = e.current, e.current = t;
}
var Ut = {}, Le = Qt(Ut), Ae = Qt(!1), en = Ut;
function Ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, s;
  for (s in n) l[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function $e(e) {
  return e = e.childContextTypes, e != null;
}
function wl() {
  ie(Ae), ie(Le);
}
function qa(e, t, n) {
  if (Le.current !== Ut) throw Error(I(168));
  le(Le, t), le(Ae, n);
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(I(108, Ad(e) || "Unknown", l));
  return ce({}, n, r);
}
function xl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, en = Le.current, le(Le, e), le(Ae, Ae.current), !0;
}
function eo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n ? (e = Wu(e, t, en), r.__reactInternalMemoizedMergedChildContext = e, ie(Ae), ie(Le), le(Le, e)) : ie(Ae), le(Ae, n);
}
var yt = null, $l = !1, ys = !1;
function Qu(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function rp(e) {
  $l = !0, Qu(e);
}
function Ht() {
  if (!ys && yt !== null) {
    ys = !0;
    var e = 0, t = ne;
    try {
      var n = yt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      yt = null, $l = !1;
    } catch (l) {
      throw yt !== null && (yt = yt.slice(e + 1)), hu(Di, Ht), l;
    } finally {
      ne = t, ys = !1;
    }
  }
  return null;
}
var vn = [], wn = 0, _l = null, Sl = 0, Xe = [], Ze = 0, tn = null, vt = 1, wt = "";
function Gt(e, t) {
  vn[wn++] = Sl, vn[wn++] = _l, _l = e, Sl = t;
}
function Hu(e, t, n) {
  Xe[Ze++] = vt, Xe[Ze++] = wt, Xe[Ze++] = tn, tn = e;
  var r = vt;
  e = wt;
  var l = 32 - ot(r) - 1;
  r &= ~(1 << l), n += 1;
  var s = 32 - ot(t) + l;
  if (30 < s) {
    var a = l - l % 5;
    s = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, vt = 1 << 32 - ot(t) + l | n << l | r, wt = s + e;
  } else vt = 1 << s | n << l | r, wt = e;
}
function Wi(e) {
  e.return !== null && (Gt(e, 1), Hu(e, 1, 0));
}
function Qi(e) {
  for (; e === _l; ) _l = vn[--wn], vn[wn] = null, Sl = vn[--wn], vn[wn] = null;
  for (; e === tn; ) tn = Xe[--Ze], Xe[Ze] = null, wt = Xe[--Ze], Xe[Ze] = null, vt = Xe[--Ze], Xe[Ze] = null;
}
var Qe = null, We = null, ae = !1, it = null;
function Bu(e, t) {
  var n = Je(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function to(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qe = e, We = zt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qe = e, We = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tn !== null ? { id: vt, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qe = e, We = null, !0) : !1;
    default:
      return !1;
  }
}
function qs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ei(e) {
  if (ae) {
    var t = We;
    if (t) {
      var n = t;
      if (!to(e, t)) {
        if (qs(e)) throw Error(I(418));
        t = zt(n.nextSibling);
        var r = Qe;
        t && to(e, t) ? Bu(r, n) : (e.flags = e.flags & -4097 | 2, ae = !1, Qe = e);
      }
    } else {
      if (qs(e)) throw Error(I(418));
      e.flags = e.flags & -4097 | 2, ae = !1, Qe = e;
    }
  }
}
function no(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Qe = e;
}
function Wr(e) {
  if (e !== Qe) return !1;
  if (!ae) return no(e), ae = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ys(e.type, e.memoizedProps)), t && (t = We)) {
    if (qs(e)) throw Gu(), Error(I(418));
    for (; t; ) Bu(e, t), t = zt(t.nextSibling);
  }
  if (no(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = zt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Qe ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Gu() {
  for (var e = We; e; ) e = zt(e.nextSibling);
}
function Mn() {
  We = Qe = null, ae = !1;
}
function Hi(e) {
  it === null ? it = [e] : it.push(e);
}
var lp = Et.ReactCurrentBatchConfig;
function Bn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var l = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
        var o = l.refs;
        a === null ? delete o[s] : o[s] = a;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Qr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ro(e) {
  var t = e._init;
  return t(e._payload);
}
function Ku(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function l(f, c) {
    return f = $t(f, c), f.index = 0, f.sibling = null, f;
  }
  function s(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, c, p, k) {
    return c === null || c.tag !== 6 ? (c = js(p, f.mode, k), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function u(f, c, p, k) {
    var N = p.type;
    return N === fn ? h(f, c, p.props.children, k, p.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Nt && ro(N) === c.type) ? (k = l(c, p.props), k.ref = Bn(f, c, p), k.return = f, k) : (k = al(p.type, p.key, p.props, null, f.mode, k), k.ref = Bn(f, c, p), k.return = f, k);
  }
  function d(f, c, p, k) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Es(p, f.mode, k), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c);
  }
  function h(f, c, p, k, N) {
    return c === null || c.tag !== 7 ? (c = qt(p, f.mode, k, N), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function g(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = js("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case br:
          return p = al(c.type, c.key, c.props, null, f.mode, p), p.ref = Bn(f, null, c), p.return = f, p;
        case dn:
          return c = Es(c, f.mode, p), c.return = f, c;
        case Nt:
          var k = c._init;
          return g(f, k(c._payload), p);
      }
      if (Xn(c) || Vn(c)) return c = qt(c, f.mode, p, null), c.return = f, c;
      Qr(f, c);
    }
    return null;
  }
  function m(f, c, p, k) {
    var N = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : o(f, c, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case br:
          return p.key === N ? u(f, c, p, k) : null;
        case dn:
          return p.key === N ? d(f, c, p, k) : null;
        case Nt:
          return N = p._init, m(
            f,
            c,
            N(p._payload),
            k
          );
      }
      if (Xn(p) || Vn(p)) return N !== null ? null : h(f, c, p, k, null);
      Qr(f, p);
    }
    return null;
  }
  function y(f, c, p, k, N) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return f = f.get(p) || null, o(c, f, "" + k, N);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case br:
          return f = f.get(k.key === null ? p : k.key) || null, u(c, f, k, N);
        case dn:
          return f = f.get(k.key === null ? p : k.key) || null, d(c, f, k, N);
        case Nt:
          var P = k._init;
          return y(f, c, p, P(k._payload), N);
      }
      if (Xn(k) || Vn(k)) return f = f.get(p) || null, h(c, f, k, N, null);
      Qr(c, k);
    }
    return null;
  }
  function w(f, c, p, k) {
    for (var N = null, P = null, _ = c, E = c = 0, b = null; _ !== null && E < p.length; E++) {
      _.index > E ? (b = _, _ = null) : b = _.sibling;
      var R = m(f, _, p[E], k);
      if (R === null) {
        _ === null && (_ = b);
        break;
      }
      e && _ && R.alternate === null && t(f, _), c = s(R, c, E), P === null ? N = R : P.sibling = R, P = R, _ = b;
    }
    if (E === p.length) return n(f, _), ae && Gt(f, E), N;
    if (_ === null) {
      for (; E < p.length; E++) _ = g(f, p[E], k), _ !== null && (c = s(_, c, E), P === null ? N = _ : P.sibling = _, P = _);
      return ae && Gt(f, E), N;
    }
    for (_ = r(f, _); E < p.length; E++) b = y(_, f, E, p[E], k), b !== null && (e && b.alternate !== null && _.delete(b.key === null ? E : b.key), c = s(b, c, E), P === null ? N = b : P.sibling = b, P = b);
    return e && _.forEach(function(S) {
      return t(f, S);
    }), ae && Gt(f, E), N;
  }
  function x(f, c, p, k) {
    var N = Vn(p);
    if (typeof N != "function") throw Error(I(150));
    if (p = N.call(p), p == null) throw Error(I(151));
    for (var P = N = null, _ = c, E = c = 0, b = null, R = p.next(); _ !== null && !R.done; E++, R = p.next()) {
      _.index > E ? (b = _, _ = null) : b = _.sibling;
      var S = m(f, _, R.value, k);
      if (S === null) {
        _ === null && (_ = b);
        break;
      }
      e && _ && S.alternate === null && t(f, _), c = s(S, c, E), P === null ? N = S : P.sibling = S, P = S, _ = b;
    }
    if (R.done) return n(
      f,
      _
    ), ae && Gt(f, E), N;
    if (_ === null) {
      for (; !R.done; E++, R = p.next()) R = g(f, R.value, k), R !== null && (c = s(R, c, E), P === null ? N = R : P.sibling = R, P = R);
      return ae && Gt(f, E), N;
    }
    for (_ = r(f, _); !R.done; E++, R = p.next()) R = y(_, f, E, R.value, k), R !== null && (e && R.alternate !== null && _.delete(R.key === null ? E : R.key), c = s(R, c, E), P === null ? N = R : P.sibling = R, P = R);
    return e && _.forEach(function(D) {
      return t(f, D);
    }), ae && Gt(f, E), N;
  }
  function j(f, c, p, k) {
    if (typeof p == "object" && p !== null && p.type === fn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case br:
          e: {
            for (var N = p.key, P = c; P !== null; ) {
              if (P.key === N) {
                if (N = p.type, N === fn) {
                  if (P.tag === 7) {
                    n(f, P.sibling), c = l(P, p.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (P.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Nt && ro(N) === P.type) {
                  n(f, P.sibling), c = l(P, p.props), c.ref = Bn(f, P, p), c.return = f, f = c;
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            p.type === fn ? (c = qt(p.props.children, f.mode, k, p.key), c.return = f, f = c) : (k = al(p.type, p.key, p.props, null, f.mode, k), k.ref = Bn(f, c, p), k.return = f, f = k);
          }
          return a(f);
        case dn:
          e: {
            for (P = p.key; c !== null; ) {
              if (c.key === P) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = Es(p, f.mode, k), c.return = f, f = c;
          }
          return a(f);
        case Nt:
          return P = p._init, j(f, c, P(p._payload), k);
      }
      if (Xn(p)) return w(f, c, p, k);
      if (Vn(p)) return x(f, c, p, k);
      Qr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = js(p, f.mode, k), c.return = f, f = c), a(f)) : n(f, c);
  }
  return j;
}
var Pn = Ku(!0), Yu = Ku(!1), kl = Qt(null), jl = null, xn = null, Bi = null;
function Gi() {
  Bi = xn = jl = null;
}
function Ki(e) {
  var t = kl.current;
  ie(kl), e._currentValue = t;
}
function ti(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Nn(e, t) {
  jl = e, Bi = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0), e.firstContext = null);
}
function et(e) {
  var t = e._currentValue;
  if (Bi !== e) if (e = { context: e, memoizedValue: t, next: null }, xn === null) {
    if (jl === null) throw Error(I(308));
    xn = e, jl.dependencies = { lanes: 0, firstContext: e };
  } else xn = xn.next = e;
  return t;
}
var Xt = null;
function Yi(e) {
  Xt === null ? Xt = [e] : Xt.push(e);
}
function Xu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Yi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, kt(e, r);
}
function kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var It = !1;
function Xi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Zu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function xt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, q & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, kt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Yi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, kt(e, n);
}
function tl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ri(e, n);
  }
}
function lo(e, t) {
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
function El(e, t, n, r) {
  var l = e.updateQueue;
  It = !1;
  var s = l.firstBaseUpdate, a = l.lastBaseUpdate, o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o, d = u.next;
    u.next = null, a === null ? s = d : a.next = d, a = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== a && (o === null ? h.firstBaseUpdate = d : o.next = d, h.lastBaseUpdate = u));
  }
  if (s !== null) {
    var g = l.baseState;
    a = 0, h = d = u = null, o = s;
    do {
      var m = o.lane, y = o.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        });
        e: {
          var w = e, x = o;
          switch (m = t, y = n, x.tag) {
            case 1:
              if (w = x.payload, typeof w == "function") {
                g = w.call(y, g, m);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = x.payload, m = typeof w == "function" ? w.call(y, g, m) : w, m == null) break e;
              g = ce({}, g, m);
              break e;
            case 2:
              It = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [o] : m.push(o));
      } else y = { eventTime: y, lane: m, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, h === null ? (d = h = y, u = g) : h = h.next = y, a |= m;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        m = o, o = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (u = g), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    rn |= a, e.lanes = a, e.memoizedState = g;
  }
}
function so(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(I(191, l));
      l.call(r);
    }
  }
}
var Lr = {}, ht = Qt(Lr), wr = Qt(Lr), xr = Qt(Lr);
function Zt(e) {
  if (e === Lr) throw Error(I(174));
  return e;
}
function Zi(e, t) {
  switch (le(xr, t), le(wr, e), le(ht, Lr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Rs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Rs(t, e);
  }
  ie(ht), le(ht, t);
}
function bn() {
  ie(ht), ie(wr), ie(xr);
}
function Ju(e) {
  Zt(xr.current);
  var t = Zt(ht.current), n = Rs(t, e.type);
  t !== n && (le(wr, e), le(ht, n));
}
function Ji(e) {
  wr.current === e && (ie(ht), ie(wr));
}
var oe = Qt(0);
function Cl(e) {
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
var vs = [];
function qi() {
  for (var e = 0; e < vs.length; e++) vs[e]._workInProgressVersionPrimary = null;
  vs.length = 0;
}
var nl = Et.ReactCurrentDispatcher, ws = Et.ReactCurrentBatchConfig, nn = 0, ue = null, he = null, we = null, Nl = !1, lr = !1, _r = 0, sp = 0;
function Ee() {
  throw Error(I(321));
}
function ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
  return !0;
}
function ta(e, t, n, r, l, s) {
  if (nn = s, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nl.current = e === null || e.memoizedState === null ? up : cp, e = n(r, l), lr) {
    s = 0;
    do {
      if (lr = !1, _r = 0, 25 <= s) throw Error(I(301));
      s += 1, we = he = null, t.updateQueue = null, nl.current = dp, e = n(r, l);
    } while (lr);
  }
  if (nl.current = Il, t = he !== null && he.next !== null, nn = 0, we = he = ue = null, Nl = !1, t) throw Error(I(300));
  return e;
}
function na() {
  var e = _r !== 0;
  return _r = 0, e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return we === null ? ue.memoizedState = we = e : we = we.next = e, we;
}
function tt() {
  if (he === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = we === null ? ue.memoizedState : we.next;
  if (t !== null) we = t, he = e;
  else {
    if (e === null) throw Error(I(310));
    he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, we === null ? ue.memoizedState = we = e : we = we.next = e;
  }
  return we;
}
function Sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xs(e) {
  var t = tt(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = he, l = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var a = l.next;
      l.next = s.next, s.next = a;
    }
    r.baseQueue = l = s, n.pending = null;
  }
  if (l !== null) {
    s = l.next, r = r.baseState;
    var o = a = null, u = null, d = s;
    do {
      var h = d.lane;
      if ((nn & h) === h) u !== null && (u = u.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var g = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        u === null ? (o = u = g, a = r) : u = u.next = g, ue.lanes |= h, rn |= h;
      }
      d = d.next;
    } while (d !== null && d !== s);
    u === null ? a = r : u.next = o, ct(r, t.memoizedState) || (Oe = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      s = l.lane, ue.lanes |= s, rn |= s, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _s(e) {
  var t = tt(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      s = e(s, a.action), a = a.next;
    while (a !== l);
    ct(s, t.memoizedState) || (Oe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function qu() {
}
function ec(e, t) {
  var n = ue, r = tt(), l = t(), s = !ct(r.memoizedState, l);
  if (s && (r.memoizedState = l, Oe = !0), r = r.queue, ra(rc.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || we !== null && we.memoizedState.tag & 1) {
    if (n.flags |= 2048, kr(9, nc.bind(null, n, r, l, t), void 0, null), xe === null) throw Error(I(349));
    nn & 30 || tc(n, t, l);
  }
  return l;
}
function tc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function nc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, lc(t) && sc(e);
}
function rc(e, t, n) {
  return n(function() {
    lc(t) && sc(e);
  });
}
function lc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function sc(e) {
  var t = kt(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function io(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = op.bind(null, ue, e), [t.memoizedState, e];
}
function kr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ic() {
  return tt().memoizedState;
}
function rl(e, t, n, r) {
  var l = ft();
  ue.flags |= e, l.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Vl(e, t, n, r) {
  var l = tt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (he !== null) {
    var a = he.memoizedState;
    if (s = a.destroy, r !== null && ea(r, a.deps)) {
      l.memoizedState = kr(t, n, s, r);
      return;
    }
  }
  ue.flags |= e, l.memoizedState = kr(1 | t, n, s, r);
}
function ao(e, t) {
  return rl(8390656, 8, e, t);
}
function ra(e, t) {
  return Vl(2048, 8, e, t);
}
function ac(e, t) {
  return Vl(4, 2, e, t);
}
function oc(e, t) {
  return Vl(4, 4, e, t);
}
function uc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function cc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vl(4, 4, uc.bind(null, t, e), n);
}
function la() {
}
function dc(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function fc(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function pc(e, t, n) {
  return nn & 21 ? (ct(n, t) || (n = vu(), ue.lanes |= n, rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = n);
}
function ip(e, t) {
  var n = ne;
  ne = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ws.transition;
  ws.transition = {};
  try {
    e(!1), t();
  } finally {
    ne = n, ws.transition = r;
  }
}
function mc() {
  return tt().memoizedState;
}
function ap(e, t, n) {
  var r = At(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, hc(e)) gc(t, n);
  else if (n = Xu(e, t, n, r), n !== null) {
    var l = Pe();
    ut(n, e, r, l), yc(n, t, r);
  }
}
function op(e, t, n) {
  var r = At(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hc(e)) gc(t, l);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState, o = s(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, ct(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Yi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Xu(e, t, l, r), n !== null && (l = Pe(), ut(n, e, r, l), yc(n, t, r));
  }
}
function hc(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function gc(e, t) {
  lr = Nl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function yc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ri(e, n);
  }
}
var Il = { readContext: et, useCallback: Ee, useContext: Ee, useEffect: Ee, useImperativeHandle: Ee, useInsertionEffect: Ee, useLayoutEffect: Ee, useMemo: Ee, useReducer: Ee, useRef: Ee, useState: Ee, useDebugValue: Ee, useDeferredValue: Ee, useTransition: Ee, useMutableSource: Ee, useSyncExternalStore: Ee, useId: Ee, unstable_isNewReconciler: !1 }, up = { readContext: et, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: et, useEffect: ao, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, rl(
    4194308,
    4,
    uc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return rl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return rl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ft();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ft();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ap.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}, useState: io, useDebugValue: la, useDeferredValue: function(e) {
  return ft().memoizedState = e;
}, useTransition: function() {
  var e = io(!1), t = e[0];
  return e = ip.bind(null, e[1]), ft().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, l = ft();
  if (ae) {
    if (n === void 0) throw Error(I(407));
    n = n();
  } else {
    if (n = t(), xe === null) throw Error(I(349));
    nn & 30 || tc(r, t, n);
  }
  l.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return l.queue = s, ao(rc.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, kr(9, nc.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = ft(), t = xe.identifierPrefix;
  if (ae) {
    var n = wt, r = vt;
    n = (r & ~(1 << 32 - ot(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = sp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, cp = {
  readContext: et,
  useCallback: dc,
  useContext: et,
  useEffect: ra,
  useImperativeHandle: cc,
  useInsertionEffect: ac,
  useLayoutEffect: oc,
  useMemo: fc,
  useReducer: xs,
  useRef: ic,
  useState: function() {
    return xs(Sr);
  },
  useDebugValue: la,
  useDeferredValue: function(e) {
    var t = tt();
    return pc(t, he.memoizedState, e);
  },
  useTransition: function() {
    var e = xs(Sr)[0], t = tt().memoizedState;
    return [e, t];
  },
  useMutableSource: qu,
  useSyncExternalStore: ec,
  useId: mc,
  unstable_isNewReconciler: !1
}, dp = { readContext: et, useCallback: dc, useContext: et, useEffect: ra, useImperativeHandle: cc, useInsertionEffect: ac, useLayoutEffect: oc, useMemo: fc, useReducer: _s, useRef: ic, useState: function() {
  return _s(Sr);
}, useDebugValue: la, useDeferredValue: function(e) {
  var t = tt();
  return he === null ? t.memoizedState = e : pc(t, he.memoizedState, e);
}, useTransition: function() {
  var e = _s(Sr)[0], t = tt().memoizedState;
  return [e, t];
}, useMutableSource: qu, useSyncExternalStore: ec, useId: mc, unstable_isNewReconciler: !1 };
function lt(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ni(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ul = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), l = At(e), s = xt(r, l);
  s.payload = t, n != null && (s.callback = n), t = Ft(e, s, l), t !== null && (ut(t, e, l, r), tl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Pe(), l = At(e), s = xt(r, l);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Ft(e, s, l), t !== null && (ut(t, e, l, r), tl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Pe(), r = At(e), l = xt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ft(e, l, r), t !== null && (ut(t, e, r, n), tl(t, e, r));
} };
function oo(e, t, n, r, l, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !hr(n, r) || !hr(l, s) : !0;
}
function vc(e, t, n) {
  var r = !1, l = Ut, s = t.contextType;
  return typeof s == "object" && s !== null ? s = et(s) : (l = $e(t) ? en : Le.current, r = t.contextTypes, s = (r = r != null) ? Ln(e, l) : Ut), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ul, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function uo(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
}
function ri(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Xi(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? l.context = et(s) : (s = $e(t) ? en : Le.current, l.context = Ln(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ni(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ul.enqueueReplaceState(l, l.state, null), El(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Od(r), r = r.return;
    while (r);
    var l = n;
  } catch (s) {
    l = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ss(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function li(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var fp = typeof WeakMap == "function" ? WeakMap : Map;
function wc(e, t, n) {
  n = xt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ll || (Ll = !0, mi = r), li(e, t);
  }, n;
}
function xc(e, t, n) {
  n = xt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      li(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    li(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function co(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Cp.bind(null, e, t, n), t.then(e, e));
}
function fo(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function po(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xt(-1, 1), t.tag = 2, Ft(n, t, 1))), n.lanes |= 1), e);
}
var pp = Et.ReactCurrentOwner, Oe = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Yu(t, null, n, r) : Pn(t, e.child, n, r);
}
function mo(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return Nn(t, l), r = ta(e, t, n, r, s, l), n = na(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ae && n && Wi(t), t.flags |= 1, Me(e, t, r, l), t.child);
}
function ho(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !fa(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, _c(e, t, s, r, l)) : (e = al(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & l)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : hr, n(a, r) && e.ref === t.ref) return jt(e, t, l);
  }
  return t.flags |= 1, e = $t(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function _c(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (hr(s, r) && e.ref === t.ref) if (Oe = !1, t.pendingProps = r = s, (e.lanes & l) !== 0) e.flags & 131072 && (Oe = !0);
    else return t.lanes = e.lanes, jt(e, t, l);
  }
  return si(e, t, n, r, l);
}
function Sc(e, t, n) {
  var r = t.pendingProps, l = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(Sn, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(Sn, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, le(Sn, Ue), Ue |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, le(Sn, Ue), Ue |= r;
  return Me(e, t, l, n), t.child;
}
function kc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function si(e, t, n, r, l) {
  var s = $e(n) ? en : Le.current;
  return s = Ln(t, s), Nn(t, l), n = ta(e, t, n, r, s, l), r = na(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ae && r && Wi(t), t.flags |= 1, Me(e, t, n, l), t.child);
}
function go(e, t, n, r, l) {
  if ($e(n)) {
    var s = !0;
    xl(t);
  } else s = !1;
  if (Nn(t, l), t.stateNode === null) ll(e, t), vc(t, n, r), ri(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = et(d) : (d = $e(n) ? en : Le.current, d = Ln(t, d));
    var h = n.getDerivedStateFromProps, g = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    g || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== d) && uo(t, a, r, d), It = !1;
    var m = t.memoizedState;
    a.state = m, El(t, r, a, l), u = t.memoizedState, o !== r || m !== u || Ae.current || It ? (typeof h == "function" && (ni(t, n, h, r), u = t.memoizedState), (o = It || oo(t, n, o, r, m, u, d)) ? (g || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = d, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Zu(e, t), o = t.memoizedProps, d = t.type === t.elementType ? o : lt(t.type, o), a.props = d, g = t.pendingProps, m = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = et(u) : (u = $e(n) ? en : Le.current, u = Ln(t, u));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== g || m !== u) && uo(t, a, r, u), It = !1, m = t.memoizedState, a.state = m, El(t, r, a, l);
    var w = t.memoizedState;
    o !== g || m !== w || Ae.current || It ? (typeof y == "function" && (ni(t, n, y, r), w = t.memoizedState), (d = It || oo(t, n, d, r, m, w, u) || !1) ? (h || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, w, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, w, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), a.props = r, a.state = w, a.context = u, r = d) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ii(e, t, n, r, s, l);
}
function ii(e, t, n, r, l, s) {
  kc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && eo(t, n, !1), jt(e, t, s);
  r = t.stateNode, pp.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Pn(t, e.child, null, s), t.child = Pn(t, null, o, s)) : Me(e, t, o, s), t.memoizedState = r.state, l && eo(t, n, !0), t.child;
}
function jc(e) {
  var t = e.stateNode;
  t.pendingContext ? qa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qa(e, t.context, !1), Zi(e, t.containerInfo);
}
function yo(e, t, n, r, l) {
  return Mn(), Hi(l), t.flags |= 256, Me(e, t, n, r), t.child;
}
var ai = { dehydrated: null, treeContext: null, retryLane: 0 };
function oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ec(e, t, n) {
  var r = t.pendingProps, l = oe.current, s = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), le(oe, l & 1), e === null)
    return ei(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Hl(a, r, 0, null), e = qt(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = oi(n), t.memoizedState = ai, e) : sa(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return mp(e, t, a, r, o, l, n);
  if (s) {
    s = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = $t(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? s = $t(o, s) : (s = qt(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? oi(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = ai, r;
  }
  return s = e.child, e = s.sibling, r = $t(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function sa(e, t) {
  return t = Hl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Hr(e, t, n, r) {
  return r !== null && Hi(r), Pn(t, e.child, null, n), e = sa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function mp(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ss(Error(I(422))), Hr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, l = t.mode, r = Hl({ mode: "visible", children: r.children }, l, 0, null), s = qt(s, l, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Pn(t, e.child, null, a), t.child.memoizedState = oi(a), t.memoizedState = ai, s);
  if (!(t.mode & 1)) return Hr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, s = Error(I(419)), r = Ss(s, r, void 0), Hr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, Oe || o) {
    if (r = xe, r !== null) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== s.retryLane && (s.retryLane = l, kt(e, l), ut(r, e, l, -1));
    }
    return da(), r = Ss(Error(I(421))), Hr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Np.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, We = zt(l.nextSibling), Qe = t, ae = !0, it = null, e !== null && (Xe[Ze++] = vt, Xe[Ze++] = wt, Xe[Ze++] = tn, vt = e.id, wt = e.overflow, tn = t), t = sa(t, r.children), t.flags |= 4096, t);
}
function vo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ti(e.return, t, n);
}
function ks(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = l);
}
function Cc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, s = r.tail;
  if (Me(e, t, r.children, n), r = oe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && vo(e, n, t);
      else if (e.tag === 19) vo(e, n, t);
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
  if (le(oe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Cl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ks(t, !1, l, n, s);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Cl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ks(t, !0, n, null, s);
      break;
    case "together":
      ks(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ll(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), rn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = $t(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function hp(e, t, n) {
  switch (t.tag) {
    case 3:
      jc(t), Mn();
      break;
    case 5:
      Ju(t);
      break;
    case 1:
      $e(t.type) && xl(t);
      break;
    case 4:
      Zi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      le(kl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (le(oe, oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ec(e, t, n) : (le(oe, oe.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      le(oe, oe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Cc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), le(oe, oe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Sc(e, t, n);
  }
  return jt(e, t, n);
}
var Nc, ui, Ic, Tc;
Nc = function(e, t) {
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
ui = function() {
};
Ic = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Zt(ht.current);
    var s = null;
    switch (n) {
      case "input":
        l = Ms(e, l), r = Ms(e, r), s = [];
        break;
      case "select":
        l = ce({}, l, { value: void 0 }), r = ce({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        l = Ds(e, l), r = Ds(e, r), s = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vl);
    }
    zs(n, r);
    var a;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var o = l[d];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (or.hasOwnProperty(d) ? s || (s = []) : (s = s || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (o = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== o && (u != null || o != null)) if (d === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (s || (s = []), s.push(
        d,
        n
      )), n = u;
      else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (s = s || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (or.hasOwnProperty(d) ? (u != null && d === "onScroll" && se("scroll", e), s || o === u || (s = [])) : (s = s || []).push(d, u));
    }
    n && (s = s || []).push("style", n);
    var d = s;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Tc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Gn(e, t) {
  if (!ae) switch (e.tailMode) {
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
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function gp(e, t, n) {
  var r = t.pendingProps;
  switch (Qi(t), t.tag) {
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
      return Ce(t), null;
    case 1:
      return $e(t.type) && wl(), Ce(t), null;
    case 3:
      return r = t.stateNode, bn(), ie(Ae), ie(Le), qi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, it !== null && (yi(it), it = null))), ui(e, t), Ce(t), null;
    case 5:
      Ji(t);
      var l = Zt(xr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ic(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return Ce(t), null;
        }
        if (e = Zt(ht.current), Wr(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[pt] = t, r[vr] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Jn.length; l++) se(Jn[l], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se(
                "error",
                r
              ), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              Ca(r, s), se("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, se("invalid", r);
              break;
            case "textarea":
              Ia(r, s), se("invalid", r);
          }
          zs(n, s), l = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && Ur(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && Ur(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : or.hasOwnProperty(a) && o != null && a === "onScroll" && se("scroll", r);
          }
          switch (n) {
            case "input":
              Dr(r), Na(r, s, !0);
              break;
            case "textarea":
              Dr(r), Ta(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = vl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ru(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[pt] = t, e[vr] = r, Nc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Fs(n, r), n) {
              case "dialog":
                se("cancel", e), se("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Jn.length; l++) se(Jn[l], e);
                l = r;
                break;
              case "source":
                se("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                se(
                  "error",
                  e
                ), se("load", e), l = r;
                break;
              case "details":
                se("toggle", e), l = r;
                break;
              case "input":
                Ca(e, r), l = Ms(e, r), se("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ce({}, r, { value: void 0 }), se("invalid", e);
                break;
              case "textarea":
                Ia(e, r), l = Ds(e, r), se("invalid", e);
                break;
              default:
                l = r;
            }
            zs(n, l), o = l;
            for (s in o) if (o.hasOwnProperty(s)) {
              var u = o[s];
              s === "style" ? iu(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && lu(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ur(e, u) : typeof u == "number" && ur(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (or.hasOwnProperty(s) ? u != null && s === "onScroll" && se("scroll", e) : u != null && Ti(e, s, u, a));
            }
            switch (n) {
              case "input":
                Dr(e), Na(e, r, !1);
                break;
              case "textarea":
                Dr(e), Ta(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? kn(e, !!r.multiple, s, !1) : r.defaultValue != null && kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = vl);
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (n = Zt(xr.current), Zt(ht.current), Wr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[pt] = t, (s = r.nodeValue !== n) && (e = Qe, e !== null)) switch (e.tag) {
            case 3:
              Ur(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ur(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[pt] = t, t.stateNode = r;
      }
      return Ce(t), null;
    case 13:
      if (ie(oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ae && We !== null && t.mode & 1 && !(t.flags & 128)) Gu(), Mn(), t.flags |= 98560, s = !1;
        else if (s = Wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(I(317));
            s[pt] = t;
          } else Mn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), s = !1;
        } else it !== null && (yi(it), it = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || oe.current & 1 ? ge === 0 && (ge = 3) : da())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return bn(), ui(e, t), e === null && gr(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Ki(t.type._context), Ce(t), null;
    case 17:
      return $e(t.type) && wl(), Ce(t), null;
    case 19:
      if (ie(oe), s = t.memoizedState, s === null) return Ce(t), null;
      if (r = (t.flags & 128) !== 0, a = s.rendering, a === null) if (r) Gn(s, !1);
      else {
        if (ge !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = Cl(e), a !== null) {
            for (t.flags |= 128, Gn(s, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, a = s.alternate, a === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = a.childLanes, s.lanes = a.lanes, s.child = a.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = a.memoizedProps, s.memoizedState = a.memoizedState, s.updateQueue = a.updateQueue, s.type = a.type, e = a.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return le(oe, oe.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && pe() > Rn && (t.flags |= 128, r = !0, Gn(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Cl(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Gn(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !ae) return Ce(t), null;
        } else 2 * pe() - s.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Gn(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = pe(), t.sibling = null, n = oe.current, le(oe, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return ca(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function yp(e, t) {
  switch (Qi(t), t.tag) {
    case 1:
      return $e(t.type) && wl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return bn(), ie(Ae), ie(Le), qi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ji(t), null;
    case 13:
      if (ie(oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(I(340));
        Mn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ie(oe), null;
    case 4:
      return bn(), null;
    case 10:
      return Ki(t.type._context), null;
    case 22:
    case 23:
      return ca(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Br = !1, Ne = !1, vp = typeof WeakSet == "function" ? WeakSet : Set, z = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    de(e, t, r);
  }
  else n.current = null;
}
function ci(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var wo = !1;
function wp(e, t) {
  if (Gs = hl, e = Du(), Ui(e)) {
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
        var a = 0, o = -1, u = -1, d = 0, h = 0, g = e, m = null;
        t: for (; ; ) {
          for (var y; g !== n || l !== 0 && g.nodeType !== 3 || (o = a + l), g !== s || r !== 0 && g.nodeType !== 3 || (u = a + r), g.nodeType === 3 && (a += g.nodeValue.length), (y = g.firstChild) !== null; )
            m = g, g = y;
          for (; ; ) {
            if (g === e) break t;
            if (m === n && ++d === l && (o = a), m === s && ++h === r && (u = a), (y = g.nextSibling) !== null) break;
            g = m, m = g.parentNode;
          }
          g = y;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ks = { focusedElem: e, selectionRange: n }, hl = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
  else for (; z !== null; ) {
    t = z;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var x = w.memoizedProps, j = w.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : lt(t.type, x), j);
            f.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(I(163));
      }
    } catch (k) {
      de(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, z = e;
      break;
    }
    z = t.return;
  }
  return w = wo, wo = !1, w;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        l.destroy = void 0, s !== void 0 && ci(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Wl(e, t) {
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
function di(e) {
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
function Lc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Lc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[pt], delete t[vr], delete t[Zs], delete t[tp], delete t[np])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Mc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xo(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vl));
  else if (r !== 4 && (e = e.child, e !== null)) for (fi(e, t, n), e = e.sibling; e !== null; ) fi(e, t, n), e = e.sibling;
}
function pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (pi(e, t, n), e = e.sibling; e !== null; ) pi(e, t, n), e = e.sibling;
}
var _e = null, st = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) Pc(e, t, n), n = n.sibling;
}
function Pc(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function") try {
    mt.onCommitFiberUnmount(Rl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ne || _n(n, t);
    case 6:
      var r = _e, l = st;
      _e = null, Ct(e, t, n), _e = r, st = l, _e !== null && (st ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null && (st ? (e = _e, n = n.stateNode, e.nodeType === 8 ? gs(e.parentNode, n) : e.nodeType === 1 && gs(e, n), pr(e)) : gs(_e, n.stateNode));
      break;
    case 4:
      r = _e, l = st, _e = n.stateNode.containerInfo, st = !0, Ct(e, t, n), _e = r, st = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ne && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var s = l, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && ci(n, t, a), l = l.next;
        } while (l !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (!Ne && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (o) {
        de(n, t, o);
      }
      Ct(e, t, n);
      break;
    case 21:
      Ct(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null, Ct(e, t, n), Ne = r) : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function _o(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vp()), t.forEach(function(r) {
      var l = Ip.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var s = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            _e = o.stateNode, st = !1;
            break e;
          case 3:
            _e = o.stateNode.containerInfo, st = !0;
            break e;
          case 4:
            _e = o.stateNode.containerInfo, st = !0;
            break e;
        }
        o = o.return;
      }
      if (_e === null) throw Error(I(160));
      Pc(s, a, l), _e = null, st = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (d) {
      de(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) bc(t, e), t = t.sibling;
}
function bc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (nt(t, e), dt(e), r & 4) {
        try {
          sr(3, e, e.return), Wl(3, e);
        } catch (x) {
          de(e, e.return, x);
        }
        try {
          sr(5, e, e.return);
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 1:
      nt(t, e), dt(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (nt(t, e), dt(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          ur(l, "");
        } catch (x) {
          de(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && s.type === "radio" && s.name != null && tu(l, s), Fs(o, a);
          var d = Fs(o, s);
          for (a = 0; a < u.length; a += 2) {
            var h = u[a], g = u[a + 1];
            h === "style" ? iu(l, g) : h === "dangerouslySetInnerHTML" ? lu(l, g) : h === "children" ? ur(l, g) : Ti(l, h, g, d);
          }
          switch (o) {
            case "input":
              Ps(l, s);
              break;
            case "textarea":
              nu(l, s);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!s.multiple;
              var y = s.value;
              y != null ? kn(l, !!s.multiple, y, !1) : m !== !!s.multiple && (s.defaultValue != null ? kn(
                l,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : kn(l, !!s.multiple, s.multiple ? [] : "", !1));
          }
          l[vr] = s;
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 6:
      if (nt(t, e), dt(e), r & 4) {
        if (e.stateNode === null) throw Error(I(162));
        l = e.stateNode, s = e.memoizedProps;
        try {
          l.nodeValue = s;
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 3:
      if (nt(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        pr(t.containerInfo);
      } catch (x) {
        de(e, e.return, x);
      }
      break;
    case 4:
      nt(t, e), dt(e);
      break;
    case 13:
      nt(t, e), dt(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (oa = pe())), r & 4 && _o(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ne = (d = Ne) || h, nt(t, e), Ne = d) : nt(t, e), dt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (z = e, h = e.child; h !== null; ) {
          for (g = z = h; z !== null; ) {
            switch (m = z, y = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                sr(4, m, m.return);
                break;
              case 1:
                _n(m, m.return);
                var w = m.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (x) {
                    de(r, n, x);
                  }
                }
                break;
              case 5:
                _n(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  ko(g);
                  continue;
                }
            }
            y !== null ? (y.return = m, z = y) : ko(g);
          }
          h = h.sibling;
        }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                l = g.stateNode, d ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = g.stateNode, u = g.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = su("display", a));
              } catch (x) {
                de(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (h === null) try {
              g.stateNode.nodeValue = d ? "" : g.memoizedProps;
            } catch (x) {
              de(e, e.return, x);
            }
          } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
            g.child.return = g, g = g.child;
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            h === g && (h = null), g = g.return;
          }
          h === g && (h = null), g.sibling.return = g.return, g = g.sibling;
        }
      }
      break;
    case 19:
      nt(t, e), dt(e), r & 4 && _o(e);
      break;
    case 21:
      break;
    default:
      nt(
        t,
        e
      ), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ur(l, ""), r.flags &= -33);
          var s = xo(e);
          pi(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = xo(e);
          fi(e, o, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (u) {
      de(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xp(e, t, n) {
  z = e, Dc(e);
}
function Dc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z, s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Br;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Ne;
        o = Br;
        var d = Ne;
        if (Br = a, (Ne = u) && !d) for (z = l; z !== null; ) a = z, u = a.child, a.tag === 22 && a.memoizedState !== null ? jo(l) : u !== null ? (u.return = a, z = u) : jo(l);
        for (; s !== null; ) z = s, Dc(s), s = s.sibling;
        z = l, Br = o, Ne = d;
      }
      So(e);
    } else l.subtreeFlags & 8772 && s !== null ? (s.return = l, z = s) : So(e);
  }
}
function So(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ne || Wl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ne) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && so(t, s, r);
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
              so(t, a, n);
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
              var d = t.alternate;
              if (d !== null) {
                var h = d.memoizedState;
                if (h !== null) {
                  var g = h.dehydrated;
                  g !== null && pr(g);
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
            throw Error(I(163));
        }
        Ne || t.flags & 512 && di(t);
      } catch (m) {
        de(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function ko(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, z = n;
      break;
    }
    z = t.return;
  }
}
function jo(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wl(4, t);
          } catch (u) {
            de(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              de(t, l, u);
            }
          }
          var s = t.return;
          try {
            di(t);
          } catch (u) {
            de(t, s, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            di(t);
          } catch (u) {
            de(t, a, u);
          }
      }
    } catch (u) {
      de(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, z = o;
      break;
    }
    z = t.return;
  }
}
var _p = Math.ceil, Tl = Et.ReactCurrentDispatcher, ia = Et.ReactCurrentOwner, qe = Et.ReactCurrentBatchConfig, q = 0, xe = null, me = null, Se = 0, Ue = 0, Sn = Qt(0), ge = 0, jr = null, rn = 0, Ql = 0, aa = 0, ir = null, ze = null, oa = 0, Rn = 1 / 0, gt = null, Ll = !1, mi = null, Ot = null, Gr = !1, Pt = null, Ml = 0, ar = 0, hi = null, sl = -1, il = 0;
function Pe() {
  return q & 6 ? pe() : sl !== -1 ? sl : sl = pe();
}
function At(e) {
  return e.mode & 1 ? q & 2 && Se !== 0 ? Se & -Se : lp.transition !== null ? (il === 0 && (il = vu()), il) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Eu(e.type)), e) : 1;
}
function ut(e, t, n, r) {
  if (50 < ar) throw ar = 0, hi = null, Error(I(185));
  Nr(e, n, r), (!(q & 2) || e !== xe) && (e === xe && (!(q & 2) && (Ql |= n), ge === 4 && Lt(e, Se)), Ve(e, r), n === 1 && q === 0 && !(t.mode & 1) && (Rn = pe() + 500, $l && Ht()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  rf(e, t);
  var r = ml(e, e === xe ? Se : 0);
  if (r === 0) n !== null && Pa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Pa(n), t === 1) e.tag === 0 ? rp(Eo.bind(null, e)) : Qu(Eo.bind(null, e)), qf(function() {
      !(q & 6) && Ht();
    }), n = null;
    else {
      switch (wu(r)) {
        case 1:
          n = Di;
          break;
        case 4:
          n = gu;
          break;
        case 16:
          n = pl;
          break;
        case 536870912:
          n = yu;
          break;
        default:
          n = pl;
      }
      n = Uc(n, Rc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Rc(e, t) {
  if (sl = -1, il = 0, q & 6) throw Error(I(327));
  var n = e.callbackNode;
  if (In() && e.callbackNode !== n) return null;
  var r = ml(e, e === xe ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pl(e, r);
  else {
    t = r;
    var l = q;
    q |= 2;
    var s = Fc();
    (xe !== e || Se !== t) && (gt = null, Rn = pe() + 500, Jt(e, t));
    do
      try {
        jp();
        break;
      } catch (o) {
        zc(e, o);
      }
    while (!0);
    Gi(), Tl.current = s, q = l, me !== null ? t = 0 : (xe = null, Se = 0, t = ge);
  }
  if (t !== 0) {
    if (t === 2 && (l = Us(e), l !== 0 && (r = l, t = gi(e, l))), t === 1) throw n = jr, Jt(e, 0), Lt(e, r), Ve(e, pe()), n;
    if (t === 6) Lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Sp(l) && (t = Pl(e, r), t === 2 && (s = Us(e), s !== 0 && (r = s, t = gi(e, s))), t === 1)) throw n = jr, Jt(e, 0), Lt(e, r), Ve(e, pe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Kt(e, ze, gt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = oa + 500 - pe(), 10 < t)) {
            if (ml(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Pe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Xs(Kt.bind(null, e, ze, gt), t);
            break;
          }
          Kt(e, ze, gt);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - ot(r);
            s = 1 << a, a = t[a], a > l && (l = a), r &= ~s;
          }
          if (r = l, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _p(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Xs(Kt.bind(null, e, ze, gt), r);
            break;
          }
          Kt(e, ze, gt);
          break;
        case 5:
          Kt(e, ze, gt);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Ve(e, pe()), e.callbackNode === n ? Rc.bind(null, e) : null;
}
function gi(e, t) {
  var n = ir;
  return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256), e = Pl(e, t), e !== 2 && (t = ze, ze = n, t !== null && yi(t)), e;
}
function yi(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function Sp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], s = l.getSnapshot;
        l = l.value;
        try {
          if (!ct(s(), l)) return !1;
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
  for (t &= ~aa, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ot(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Eo(e) {
  if (q & 6) throw Error(I(327));
  In();
  var t = ml(e, 0);
  if (!(t & 1)) return Ve(e, pe()), null;
  var n = Pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Us(e);
    r !== 0 && (t = r, n = gi(e, r));
  }
  if (n === 1) throw n = jr, Jt(e, 0), Lt(e, t), Ve(e, pe()), n;
  if (n === 6) throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kt(e, ze, gt), Ve(e, pe()), null;
}
function ua(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    q = n, q === 0 && (Rn = pe() + 500, $l && Ht());
  }
}
function ln(e) {
  Pt !== null && Pt.tag === 0 && !(q & 6) && In();
  var t = q;
  q |= 1;
  var n = qe.transition, r = ne;
  try {
    if (qe.transition = null, ne = 1, e) return e();
  } finally {
    ne = r, qe.transition = n, q = t, !(q & 6) && Ht();
  }
}
function ca() {
  Ue = Sn.current, ie(Sn);
}
function Jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Jf(n)), me !== null) for (n = me.return; n !== null; ) {
    var r = n;
    switch (Qi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && wl();
        break;
      case 3:
        bn(), ie(Ae), ie(Le), qi();
        break;
      case 5:
        Ji(r);
        break;
      case 4:
        bn();
        break;
      case 13:
        ie(oe);
        break;
      case 19:
        ie(oe);
        break;
      case 10:
        Ki(r.type._context);
        break;
      case 22:
      case 23:
        ca();
    }
    n = n.return;
  }
  if (xe = e, me = e = $t(e.current, null), Se = Ue = t, ge = 0, jr = null, aa = Ql = rn = 0, ze = ir = null, Xt !== null) {
    for (t = 0; t < Xt.length; t++) if (n = Xt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, s = n.pending;
      if (s !== null) {
        var a = s.next;
        s.next = l, r.next = a;
      }
      n.pending = r;
    }
    Xt = null;
  }
  return e;
}
function zc(e, t) {
  do {
    var n = me;
    try {
      if (Gi(), nl.current = Il, Nl) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Nl = !1;
      }
      if (nn = 0, we = he = ue = null, lr = !1, _r = 0, ia.current = null, n === null || n.return === null) {
        ge = 1, jr = t, me = null;
        break;
      }
      e: {
        var s = e, a = n.return, o = n, u = t;
        if (t = Se, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var d = u, h = o, g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = fo(a);
          if (y !== null) {
            y.flags &= -257, po(y, a, o, s, t), y.mode & 1 && co(s, d, t), t = y, u = d;
            var w = t.updateQueue;
            if (w === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              co(s, d, t), da();
              break e;
            }
            u = Error(I(426));
          }
        } else if (ae && o.mode & 1) {
          var j = fo(a);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), po(j, a, o, s, t), Hi(Dn(u, o));
            break e;
          }
        }
        s = u = Dn(u, o), ge !== 4 && (ge = 2), ir === null ? ir = [s] : ir.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var f = wc(s, u, t);
              lo(s, f);
              break e;
            case 1:
              o = u;
              var c = s.type, p = s.stateNode;
              if (!(s.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ot === null || !Ot.has(p)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var k = xc(s, o, t);
                lo(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ac(n);
    } catch (N) {
      t = N, me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fc() {
  var e = Tl.current;
  return Tl.current = Il, e === null ? Il : e;
}
function da() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4), xe === null || !(rn & 268435455) && !(Ql & 268435455) || Lt(xe, Se);
}
function Pl(e, t) {
  var n = q;
  q |= 2;
  var r = Fc();
  (xe !== e || Se !== t) && (gt = null, Jt(e, t));
  do
    try {
      kp();
      break;
    } catch (l) {
      zc(e, l);
    }
  while (!0);
  if (Gi(), q = n, Tl.current = r, me !== null) throw Error(I(261));
  return xe = null, Se = 0, ge;
}
function kp() {
  for (; me !== null; ) Oc(me);
}
function jp() {
  for (; me !== null && !Kd(); ) Oc(me);
}
function Oc(e) {
  var t = Vc(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? Ac(e) : me = t, ia.current = null;
}
function Ac(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = yp(n, t), n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ge = 6, me = null;
        return;
      }
    } else if (n = gp(n, t, Ue), n !== null) {
      me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function Kt(e, t, n) {
  var r = ne, l = qe.transition;
  try {
    qe.transition = null, ne = 1, Ep(e, t, n, r);
  } finally {
    qe.transition = l, ne = r;
  }
  return null;
}
function Ep(e, t, n, r) {
  do
    In();
  while (Pt !== null);
  if (q & 6) throw Error(I(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (lf(e, s), e === xe && (me = xe = null, Se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Gr || (Gr = !0, Uc(pl, function() {
    return In(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = qe.transition, qe.transition = null;
    var a = ne;
    ne = 1;
    var o = q;
    q |= 4, ia.current = null, wp(e, n), bc(n, e), Hf(Ks), hl = !!Gs, Ks = Gs = null, e.current = n, xp(n), Yd(), q = o, ne = a, qe.transition = s;
  } else e.current = n;
  if (Gr && (Gr = !1, Pt = e, Ml = l), s = e.pendingLanes, s === 0 && (Ot = null), Jd(n.stateNode), Ve(e, pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ll) throw Ll = !1, e = mi, mi = null, e;
  return Ml & 1 && e.tag !== 0 && In(), s = e.pendingLanes, s & 1 ? e === hi ? ar++ : (ar = 0, hi = e) : ar = 0, Ht(), null;
}
function In() {
  if (Pt !== null) {
    var e = wu(Ml), t = qe.transition, n = ne;
    try {
      if (qe.transition = null, ne = 16 > e ? 16 : e, Pt === null) var r = !1;
      else {
        if (e = Pt, Pt = null, Ml = 0, q & 6) throw Error(I(331));
        var l = q;
        for (q |= 4, z = e.current; z !== null; ) {
          var s = z, a = s.child;
          if (z.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var d = o[u];
                for (z = d; z !== null; ) {
                  var h = z;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, h, s);
                  }
                  var g = h.child;
                  if (g !== null) g.return = h, z = g;
                  else for (; z !== null; ) {
                    h = z;
                    var m = h.sibling, y = h.return;
                    if (Lc(h), h === d) {
                      z = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = y, z = m;
                      break;
                    }
                    z = y;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var j = x.sibling;
                    x.sibling = null, x = j;
                  } while (x !== null);
                }
              }
              z = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, z = a;
          else e: for (; z !== null; ) {
            if (s = z, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                sr(9, s, s.return);
            }
            var f = s.sibling;
            if (f !== null) {
              f.return = s.return, z = f;
              break e;
            }
            z = s.return;
          }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          a = z;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, z = p;
          else e: for (a = c; z !== null; ) {
            if (o = z, o.flags & 2048) try {
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Wl(9, o);
              }
            } catch (N) {
              de(o, o.return, N);
            }
            if (o === a) {
              z = null;
              break e;
            }
            var k = o.sibling;
            if (k !== null) {
              k.return = o.return, z = k;
              break e;
            }
            z = o.return;
          }
        }
        if (q = l, Ht(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
          mt.onPostCommitFiberRoot(Rl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ne = n, qe.transition = t;
    }
  }
  return !1;
}
function Co(e, t, n) {
  t = Dn(n, t), t = wc(e, t, 1), e = Ft(e, t, 1), t = Pe(), e !== null && (Nr(e, 1, t), Ve(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Co(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Co(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
        e = Dn(n, e), e = xc(t, e, 1), t = Ft(t, e, 1), e = Pe(), t !== null && (Nr(t, 1, e), Ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Cp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (Se & n) === n && (ge === 4 || ge === 3 && (Se & 130023424) === Se && 500 > pe() - oa ? Jt(e, 0) : aa |= n), Ve(e, t);
}
function $c(e, t) {
  t === 0 && (e.mode & 1 ? (t = Fr, Fr <<= 1, !(Fr & 130023424) && (Fr = 4194304)) : t = 1);
  var n = Pe();
  e = kt(e, t), e !== null && (Nr(e, t, n), Ve(e, n));
}
function Np(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), $c(e, n);
}
function Ip(e, t) {
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
      throw Error(I(314));
  }
  r !== null && r.delete(t), $c(e, n);
}
var Vc;
Vc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ae.current) Oe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Oe = !1, hp(e, t, n);
    Oe = !!(e.flags & 131072);
  }
  else Oe = !1, ae && t.flags & 1048576 && Hu(t, Sl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ll(e, t), e = t.pendingProps;
      var l = Ln(t, Le.current);
      Nn(t, n), l = ta(null, t, r, e, l, n);
      var s = na();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (s = !0, xl(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Xi(t), l.updater = Ul, t.stateNode = l, l._reactInternals = t, ri(t, r, e, n), t = ii(null, t, r, !0, s, n)) : (t.tag = 0, ae && s && Wi(t), Me(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ll(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Lp(r), e = lt(r, e), l) {
          case 0:
            t = si(null, t, r, e, n);
            break e;
          case 1:
            t = go(null, t, r, e, n);
            break e;
          case 11:
            t = mo(null, t, r, e, n);
            break e;
          case 14:
            t = ho(null, t, r, lt(r.type, e), n);
            break e;
        }
        throw Error(I(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), si(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), go(e, t, r, l, n);
    case 3:
      e: {
        if (jc(t), e === null) throw Error(I(387));
        r = t.pendingProps, s = t.memoizedState, l = s.element, Zu(e, t), El(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          l = Dn(Error(I(423)), t), t = yo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Dn(Error(I(424)), t), t = yo(e, t, r, n, l);
          break e;
        } else for (We = zt(t.stateNode.containerInfo.firstChild), Qe = t, ae = !0, it = null, n = Yu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Mn(), r === l) {
            t = jt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ju(t), e === null && ei(t), r = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = l.children, Ys(r, l) ? a = null : s !== null && Ys(r, s) && (t.flags |= 32), kc(e, t), Me(e, t, a, n), t.child;
    case 6:
      return e === null && ei(t), null;
    case 13:
      return Ec(e, t, n);
    case 4:
      return Zi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : Me(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), mo(e, t, r, l, n);
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, s = t.memoizedProps, a = l.value, le(kl, r._currentValue), r._currentValue = a, s !== null) if (ct(s.value, a)) {
          if (s.children === l.children && !Ae.current) {
            t = jt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var o = s.dependencies;
          if (o !== null) {
            a = s.child;
            for (var u = o.firstContext; u !== null; ) {
              if (u.context === r) {
                if (s.tag === 1) {
                  u = xt(-1, n & -n), u.tag = 2;
                  var d = s.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? u.next = u : (u.next = h.next, h.next = u), d.pending = u;
                  }
                }
                s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), ti(
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
            if (a = s.return, a === null) throw Error(I(341));
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), ti(a, n, t), a = s.sibling;
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
        Me(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Nn(t, n), l = et(l), r = r(l), t.flags |= 1, Me(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = lt(r, t.pendingProps), l = lt(r.type, l), ho(e, t, r, l, n);
    case 15:
      return _c(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), ll(e, t), t.tag = 1, $e(r) ? (e = !0, xl(t)) : e = !1, Nn(t, n), vc(t, r, l), ri(t, r, l, n), ii(null, t, r, !0, e, n);
    case 19:
      return Cc(e, t, n);
    case 22:
      return Sc(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Uc(e, t) {
  return hu(e, t);
}
function Tp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Je(e, t, n, r) {
  return new Tp(e, t, n, r);
}
function fa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Lp(e) {
  if (typeof e == "function") return fa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mi) return 11;
    if (e === Pi) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function al(e, t, n, r, l, s) {
  var a = 2;
  if (r = e, typeof e == "function") fa(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case fn:
      return qt(n.children, l, s, t);
    case Li:
      a = 8, l |= 8;
      break;
    case Ns:
      return e = Je(12, n, t, l | 2), e.elementType = Ns, e.lanes = s, e;
    case Is:
      return e = Je(13, n, t, l), e.elementType = Is, e.lanes = s, e;
    case Ts:
      return e = Je(19, n, t, l), e.elementType = Ts, e.lanes = s, e;
    case Jo:
      return Hl(n, l, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Xo:
          a = 10;
          break e;
        case Zo:
          a = 9;
          break e;
        case Mi:
          a = 11;
          break e;
        case Pi:
          a = 14;
          break e;
        case Nt:
          a = 16, r = null;
          break e;
      }
      throw Error(I(130, e == null ? e : typeof e, ""));
  }
  return t = Je(a, n, t, l), t.elementType = e, t.type = r, t.lanes = s, t;
}
function qt(e, t, n, r) {
  return e = Je(7, e, r, t), e.lanes = n, e;
}
function Hl(e, t, n, r) {
  return e = Je(22, e, r, t), e.elementType = Jo, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function js(e, t, n) {
  return e = Je(6, e, null, t), e.lanes = n, e;
}
function Es(e, t, n) {
  return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Mp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ss(0), this.expirationTimes = ss(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ss(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function pa(e, t, n, r, l, s, a, o, u) {
  return e = new Mp(e, t, n, o, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Je(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xi(s), e;
}
function Pp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Wc(e) {
  if (!e) return Ut;
  e = e._reactInternals;
  e: {
    if (an(e) !== e || e.tag !== 1) throw Error(I(170));
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
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return Wu(e, n, t);
  }
  return t;
}
function Qc(e, t, n, r, l, s, a, o, u) {
  return e = pa(n, r, !0, e, l, s, a, o, u), e.context = Wc(null), n = e.current, r = Pe(), l = At(n), s = xt(r, l), s.callback = t ?? null, Ft(n, s, l), e.current.lanes = l, Nr(e, l, r), Ve(e, r), e;
}
function Bl(e, t, n, r) {
  var l = t.current, s = Pe(), a = At(l);
  return n = Wc(n), t.context === null ? t.context = n : t.pendingContext = n, t = xt(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ft(l, t, a), e !== null && (ut(e, l, a, s), tl(e, l, a)), a;
}
function bl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function No(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ma(e, t) {
  No(e, t), (e = e.alternate) && No(e, t);
}
function bp() {
  return null;
}
var Hc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ha(e) {
  this._internalRoot = e;
}
Gl.prototype.render = ha.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Bl(e, t, null, null);
};
Gl.prototype.unmount = ha.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function() {
      Bl(null, e, null, null);
    }), t[St] = null;
  }
};
function Gl(e) {
  this._internalRoot = e;
}
Gl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Su();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && ju(e);
  }
};
function ga(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Kl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Io() {
}
function Dp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var d = bl(a);
        s.call(d);
      };
    }
    var a = Qc(t, r, e, 0, null, !1, !1, "", Io);
    return e._reactRootContainer = a, e[St] = a.current, gr(e.nodeType === 8 ? e.parentNode : e), ln(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var d = bl(u);
      o.call(d);
    };
  }
  var u = pa(e, 0, !1, null, null, !1, !1, "", Io);
  return e._reactRootContainer = u, e[St] = u.current, gr(e.nodeType === 8 ? e.parentNode : e), ln(function() {
    Bl(t, u, n, r);
  }), u;
}
function Yl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var o = l;
      l = function() {
        var u = bl(a);
        o.call(u);
      };
    }
    Bl(t, a, e, l);
  } else a = Dp(n, t, e, l, r);
  return bl(a);
}
xu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 && (Ri(t, n | 1), Ve(t, pe()), !(q & 6) && (Rn = pe() + 500, Ht()));
      }
      break;
    case 13:
      ln(function() {
        var r = kt(e, 1);
        if (r !== null) {
          var l = Pe();
          ut(r, e, 1, l);
        }
      }), ma(e, 1);
  }
};
zi = function(e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      ut(t, e, 134217728, n);
    }
    ma(e, 134217728);
  }
};
_u = function(e) {
  if (e.tag === 13) {
    var t = At(e), n = kt(e, t);
    if (n !== null) {
      var r = Pe();
      ut(n, e, t, r);
    }
    ma(e, t);
  }
};
Su = function() {
  return ne;
};
ku = function(e, t) {
  var n = ne;
  try {
    return ne = e, t();
  } finally {
    ne = n;
  }
};
As = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ps(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Al(r);
            if (!l) throw Error(I(90));
            eu(r), Ps(r, l);
          }
        }
      }
      break;
    case "textarea":
      nu(e, n);
      break;
    case "select":
      t = n.value, t != null && kn(e, !!n.multiple, t, !1);
  }
};
uu = ua;
cu = ln;
var Rp = { usingClientEntryPoint: !1, Events: [Tr, gn, Al, au, ou, ua] }, Kn = { findFiberByHostInstance: Yt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, zp = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = pu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Kn.findFiberByHostInstance || bp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kr.isDisabled && Kr.supportsFiber) try {
    Rl = Kr.inject(zp), mt = Kr;
  } catch {
  }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rp;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ga(t)) throw Error(I(200));
  return Pp(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!ga(e)) throw Error(I(299));
  var n = !1, r = "", l = Hc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = pa(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, gr(e.nodeType === 8 ? e.parentNode : e), new ha(t);
};
Be.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = pu(t), e = e === null ? null : e.stateNode, e;
};
Be.flushSync = function(e) {
  return ln(e);
};
Be.hydrate = function(e, t, n) {
  if (!Kl(t)) throw Error(I(200));
  return Yl(null, e, t, !0, n);
};
Be.hydrateRoot = function(e, t, n) {
  if (!ga(e)) throw Error(I(405));
  var r = n != null && n.hydratedSources || null, l = !1, s = "", a = Hc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Qc(t, null, e, 1, n ?? null, l, !1, s, a), e[St] = t.current, gr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Gl(t);
};
Be.render = function(e, t, n) {
  if (!Kl(t)) throw Error(I(200));
  return Yl(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function(e) {
  if (!Kl(e)) throw Error(I(40));
  return e._reactRootContainer ? (ln(function() {
    Yl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[St] = null;
    });
  }), !0) : !1;
};
Be.unstable_batchedUpdates = ua;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Kl(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Yl(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function Bc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bc);
    } catch (e) {
      console.error(e);
    }
}
Bc(), Bo.exports = Be;
var Fe = Bo.exports, Gc, To = Fe;
Gc = To.createRoot, To.hydrateRoot;
window.api = G;
const Fp = async () => {
  const e = await G.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
}, ol = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const s = await G.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!s.ok)
    throw new Error(`Failed to fetch images: ${s.statusText}`);
  return await s.json();
}, Kc = async (e) => {
  const t = await G.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, Op = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await G.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Ap = async () => {
  const e = await G.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Yc = async () => {
  const e = await G.fetchApi("/meld/settings");
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
      "viewer.shortcut.show_cheat_sheet": !0
    };
  const t = await e.json();
  return typeof t["sidebar.show_filename"] == "boolean" && (t["sidebar.show_filename"] = t["sidebar.show_filename"] ? "filename" : "none"), typeof t["viewer.details.show_filename"] == "boolean" && (t["viewer.details.show_filename"] = t["viewer.details.show_filename"] ? "filename" : "none"), typeof t["fullscreen.details.show_filename"] == "boolean" && (t["fullscreen.details.show_filename"] = t["fullscreen.details.show_filename"] ? "filename" : "none"), t;
}, $p = async (e, t) => {
  if (!(await G.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Lo = async (e, t) => {
  if (!(await G.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Vp = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await G.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  return r.ok ? await r.json() : [];
}, vi = async (e) => {
  const t = await G.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, Up = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await G.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, wi = async (e, t = !1) => {
  const n = await G.fetchApi("/meld/bulk-delete", {
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
}, xi = async (e) => {
  const t = await G.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const r = await t.json();
    throw new Error(r.error || "Failed to restore images");
  }
  return (await t.json()).data || { restored_ids: e };
}, Xc = async (e) => {
  const t = await G.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return (await t.json()).data;
}, Wp = async (e, t, n = !1, r) => {
  const l = await G.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, Qp = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await G.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Hp = async (e, t, n) => {
  const r = await G.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Bp = async (e) => {
  const t = await G.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Gp = async () => {
  if (!(await G.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, Kp = async () => {
  const e = await G.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Yp = async (e, t) => {
  if (!(await G.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, Mo = async (e) => {
  if (!(await G.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Xp = async (e, t, n) => {
  if (!(await G.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  })).ok)
    throw new Error("Failed to update favorite");
}, ya = async () => {
  const e = await G.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, Zp = async (e) => {
  const t = await G.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, Jp = async (e) => {
  if (!(await G.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, qp = async (e, t) => {
  const n = await G.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, em = async (e, t) => {
  if (!(await G.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, _i = async (e, t, n) => {
  if (!(await G.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, tm = async (e) => {
  const t = await G.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, nm = async (e) => {
  const t = await G.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
};
var Zc = { exports: {} }, Xl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm = v, lm = Symbol.for("react.element"), sm = Symbol.for("react.fragment"), im = Object.prototype.hasOwnProperty, am = rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, om = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jc(e, t, n) {
  var r, l = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) im.call(t, r) && !om.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: lm, type: e, key: s, ref: a, props: l, _owner: am.current };
}
Xl.Fragment = sm;
Xl.jsx = Jc;
Xl.jsxs = Jc;
Zc.exports = Xl;
var i = Zc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var um = {
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
const cm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), B = (e, t) => {
  const n = v.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...d
    }, h) => v.createElement(
      "svg",
      {
        ref: h,
        ...um,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(s) * 24 / Number(l) : s,
        className: ["lucide", `lucide-${cm(e)}`, o].join(" "),
        ...d
      },
      [
        ...t.map(([g, m]) => v.createElement(g, m)),
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
const dm = B("AlertTriangle", [
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
const fm = B("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qc = B("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = B("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = B("ArrowUpDown", [
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
const ed = B("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mm = B("Box", [
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
const hm = B("Calendar", [
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
const gm = B("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = B("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = B("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = B("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = B("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = B("Download", [
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
const wm = B("Folder", [
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
const xm = B("Info", [
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
const ld = B("LayoutGrid", [
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
const _m = B("LayoutList", [
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
const Sm = B("Link2Off", [
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
const km = B("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jm = B("Maximize", [
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
const Em = B("Minimize", [
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
const Cm = B("MoreVertical", [
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
const sd = B("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nm = B("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Im = B("PlusCircle", [
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
const va = B("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = B("RefreshCw", [
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
const zn = B("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = B("Settings", [
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
const Lm = B("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Si = B("Star", [
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
const on = B("Tag", [
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
const Fn = B("Trash2", [
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
const Mm = B("Type", [
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
const Pm = B("Upload", [
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
const Te = B("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let Dl = !1;
const bm = (e) => {
  Dl = e, Dl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Dm = (...e) => {
  Dl && console.log("[Meld]", ...e);
}, Rm = (...e) => {
  Dl && console.warn("[Meld]", ...e);
}, zm = (...e) => {
  console.error("[Meld]", ...e);
}, V = {
  log: Dm,
  warn: Rm,
  error: zm,
  init: bm
}, Fm = {
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
    updatedCount: 0,
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
    "viewer.shortcut.show_cheat_sheet": !0
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
function Om(e, t) {
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
        new Map(o.map((d) => [d.id, d])).values()
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
        const d = new Set(e.selectedIds);
        return d.add(t.payload), {
          ...e,
          selectedIds: d,
          lastSelectedId: t.payload
        };
      }
      const l = e.images.findIndex(
        (d) => d.id === e.lastSelectedId
      ), s = e.images.findIndex(
        (d) => d.id === t.payload
      );
      if (l === -1 || s === -1) return e;
      const [a, o] = [
        Math.min(l, s),
        Math.max(l, s)
      ], u = new Set(e.selectedIds);
      for (let d = a; d <= o; d++)
        u.add(e.images[d].id);
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
        (d) => d.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && d.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (d) => d.id === e.viewerImageId
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
        (d) => d.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && d.has_children)
      );
      if (e.viewerImageId === null || a.length === 0)
        return e;
      const o = a.findIndex(
        (d) => d.id === e.viewerImageId
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
const id = v.createContext(void 0), Am = ({
  children: e
}) => {
  const [t, n] = v.useReducer(Om, Fm), r = v.useRef(t.images.length), l = v.useRef(0);
  v.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const s = v.useCallback(
    async (y, w, x) => {
      const j = t.settings["gallery.max_load_count"], f = 200;
      let c = y;
      for (; c < Math.min(w, j) && x === l.current; )
        try {
          const p = Math.min(f, j - c);
          V.log("Background fetch: starting chunk", {
            offset: c,
            limit: p
          });
          const k = await ol(
            c,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (x !== l.current || (n({ type: "APPEND_IMAGES", payload: k }), c += k.images.length, k.images.length === 0 || c >= k.total))
            break;
          await new Promise((N) => setTimeout(N, 300));
        } catch (p) {
          V.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = v.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), w = ++l.current;
    try {
      const x = t.searchQuery.trim() !== "", j = t.settings["gallery.initial_load_count"];
      V.log("refreshImages: starting initial fetch", {
        isSearch: x,
        fetchLimit: j,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const f = await ol(
        0,
        j,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), c = performance.now() - y;
      V.log("refreshImages: initial fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: c.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: f }), f.total > j && s(j, f.total, w);
    } catch (x) {
      V.error("refreshImages: fetch failed", x), n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    s
  ]), o = v.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now();
    try {
      const w = r.current, x = t.searchQuery.trim() !== "", j = t.pagination.limit;
      V.log("loadMoreImages: starting fetch", {
        nextOffset: w,
        fetchLimit: j,
        isSearch: x
      });
      const f = await ol(
        w,
        j,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), c = performance.now() - y;
      V.log("loadMoreImages: fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: c.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: f });
    } catch (w) {
      V.error("loadMoreImages: fetch failed", w), n({
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
  ]), u = v.useCallback(async () => {
    try {
      const y = await Kp();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      V.error("Failed to load favorites", y);
    }
  }, []), d = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), x = t.images.filter(
      (j) => t.selectedIds.has(j.id)
    ).some(
      (j) => j.parent_id || j.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: x,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), h = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const x = (await xi(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: x }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (w) {
      n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    }
  }, [t.selectedIds, t.viewScope]), g = v.useCallback(
    async (y, w) => {
      try {
        await $p(y, w), n({ type: "SET_SETTINGS", payload: { [y]: w } });
      } catch (x) {
        n({
          type: "SET_ERROR",
          payload: x instanceof Error ? x.message : String(x)
        });
      }
    },
    []
  ), m = v.useCallback(
    async (y) => {
      const w = t.images.find((x) => x.id === y);
      if (w && !w.is_minimal)
        return w;
      try {
        V.log("fetchFullImageDetails: fetching full data", { id: y });
        const x = await Kc(y);
        return n({ type: "UPDATE_IMAGE", payload: x }), x;
      } catch (x) {
        throw V.error("Failed to fetch image details", x), x;
      }
    },
    [t.images]
  );
  return v.useEffect(() => {
    (async () => {
      try {
        const w = await Yc();
        n({ type: "SET_SETTINGS", payload: w });
      } catch (w) {
        V.error("Failed to load settings", w);
      }
    })();
  }, []), v.useEffect(() => {
    u();
  }, [u]), v.useEffect(() => {
    const y = () => {
      a();
    }, w = (j) => {
      const f = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: f }
      });
    }, x = (j) => {
      const f = j.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !1,
          isFinished: !0,
          shouldCancel: !1,
          newCount: f.new_count || 0,
          updatedCount: f.updated_count || 0,
          totalCount: f.total_count || 0,
          progress: {
            current: f.total_count || t.scanStatus.progress.total,
            total: f.total_count || t.scanStatus.progress.total,
            phase: "completed"
          }
        }
      }), a();
    };
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", w), window.addEventListener("meld-scan-finished", x), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", w), window.removeEventListener("meld-scan-finished", x);
    };
  }, [a, t.scanStatus.progress.total]), v.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ i.jsx(
    id.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: d,
        restoreSelected: h,
        updateSetting: g,
        fetchFullImageDetails: m
      },
      children: e
    }
  );
}, Re = () => {
  const e = v.useContext(id);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, $m = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Re(), [s, a] = v.useState("gallery"), [o, u] = v.useState(""), [d, h] = v.useState(e.pagination.limit);
  v.useEffect(() => {
    h(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const g = e.searchQuery.trim() !== "", m = v.useRef(null), y = v.useRef(null), w = v.useMemo(
    () => e.images.filter((j) => e.viewScope === "trash" ? j.exists !== !1 || e.settings["gallery.trash.show_missing"] : j.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && j.has_children)),
    [e.images, e.settings, e.viewScope]
  ), x = v.useMemo(
    () => w.slice(0, d),
    [w, d]
  );
  return v.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (V.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), v.useEffect(() => {
    const j = (f) => {
      f.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), f.preventDefault(), f.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), f.preventDefault(), f.stopPropagation()));
    };
    return window.addEventListener("keydown", j), () => window.removeEventListener("keydown", j);
  }, [e.activeModal.type, e.selectedIds.size, t]), v.useEffect(() => {
    const j = new IntersectionObserver(
      (c) => {
        if (c[0].isIntersecting) {
          if (e.isLoading) {
            V.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          d < w.length ? (V.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: d,
              newLimit: Math.min(
                d + e.pagination.limit,
                w.length
              ),
              totalAvailableLocally: w.length
            }
          ), h((p) => p + e.pagination.limit)) : e.pagination.hasMore ? (V.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : V.log(
            "GalleryPanel: Intersection observed but no more to load",
            {
              localCount: w.length,
              serverHasMore: e.pagination.hasMore
            }
          );
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = m.current;
    return f && j.observe(f), () => {
      f && j.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    d,
    w.length,
    e.pagination.limit,
    e.images.length
  ]), v.useEffect(() => {
    const j = e.viewerImageId ?? y.current;
    if (j !== null && w.some((c) => c.id === j)) {
      const c = w.findIndex((k) => k.id === j);
      if (c >= d) {
        h(
          Math.ceil((c + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${j}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (y.current = null));
    }
    e.viewerImageId !== null && (y.current = e.viewerImageId);
  }, [
    e.viewerImageId,
    w,
    d,
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
    localLimit: d,
    displayedImages: w,
    visibleImages: x,
    isSearchActive: g,
    loadMoreRef: m
  };
}, Vm = ({
  children: e,
  height: t = 150,
  rootMargin: n = "400px"
}) => {
  const [r, l] = v.useState(!1), s = v.useRef(null);
  return v.useEffect(() => {
    const a = new IntersectionObserver(
      ([u]) => {
        l(u.isIntersecting);
      },
      { rootMargin: n }
    ), o = s.current;
    return o && a.observe(o), () => {
      o && a.unobserve(o);
    };
  }, [n]), /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: s,
      style: {
        minHeight: r ? "auto" : `${t}px`,
        width: "100%",
        containIntrinsicSize: `auto ${t}px`,
        contentVisibility: "auto"
      },
      children: r ? e : null
    }
  );
}, Um = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Re(), l = e.selectedIds.size;
  if (l === 0) return null;
  const s = e.viewScope === "trash", a = () => {
    const o = e.images.filter(
      (d) => e.selectedIds.has(d.id)
    ), u = /* @__PURE__ */ new Set();
    for (const d of o)
      if (d.tags)
        for (const h of d.tags)
          u.add(h);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(u)
      }
    });
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `meld-bulk-bar ${s ? "meld-bulk-bar--trash" : ""}`,
      children: [
        /* @__PURE__ */ i.jsxs("span", { className: "meld-bulk-bar__info", children: [
          l,
          " items selected"
        ] }),
        s ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar__button meld-bulk-bar__button--restore",
              onClick: r,
              children: [
                /* @__PURE__ */ i.jsx(
                  Er,
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
              onClick: a,
              children: [
                /* @__PURE__ */ i.jsx(
                  on,
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
              /* @__PURE__ */ i.jsx(Te, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, ad = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: s } = Re(), a = v.useRef(!0);
  v.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = v.useRef(l.viewerImageId);
  v.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = v.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]), d = v.useCallback(
    (m) => {
      if (!a.current) return;
      const y = o.current;
      if (y === null || !m.has(y))
        return;
      const w = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (f) => f.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && f.has_children)
      ), x = w.findIndex(
        (f) => f.id === y
      );
      if (x === -1) return;
      let j = !1;
      for (let f = x + 1; f < w.length; f++)
        if (!m.has(w[f].id)) {
          s({
            type: "OPEN_VIEWER",
            payload: { id: w[f].id, mode: l.viewerMode }
          }), j = !0;
          break;
        }
      if (!j) {
        for (let f = x - 1; f >= 0; f--)
          if (!m.has(w[f].id)) {
            s({
              type: "OPEN_VIEWER",
              payload: { id: w[f].id, mode: l.viewerMode }
            }), j = !0;
            break;
          }
      }
      j || s({ type: "CLOSE_VIEWER" });
    },
    [
      l.viewerMode,
      l.lineageImages,
      l.images,
      l.settings,
      s
    ]
  );
  v.useEffect(() => {
    const m = (y) => {
      y.key === "Escape" && u();
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [u]);
  const h = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const m = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (x) => x.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && x.has_children)
      ), y = new Set(e), w = m.filter(
        (x) => y.has(x.id)
      );
      if (d(y), await wi(e, n), !a.current) return;
      !n && r && r(w), s({ type: "REMOVE_IMAGES", payload: e }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (m) {
      s({
        type: "SET_ERROR",
        payload: m instanceof Error ? m.message : String(m)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  }, g = async () => {
    try {
      s({ type: "SET_LOADING", payload: !0 });
      const m = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (x) => x.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && x.has_children)
      ), y = new Set(e);
      for (const x of e) {
        const j = await vi(x);
        if (!a.current) return;
        for (const f of j)
          y.add(f.id);
      }
      const w = m.filter(
        (x) => y.has(x.id)
      );
      if (d(y), await wi(Array.from(y), n), !a.current) return;
      !n && r && r(w), s({
        type: "REMOVE_IMAGES",
        payload: Array.from(y)
      }), s({ type: "CLEAR_SELECTION" }), s({ type: "CLOSE_MODAL" });
    } catch (m) {
      s({
        type: "SET_ERROR",
        payload: m instanceof Error ? m.message : String(m)
      }), s({ type: "SET_LOADING", payload: !1 });
    }
  };
  return Fe.createPortal(
    /* @__PURE__ */ i.jsx("div", { className: "meld-modal-overlay", onClick: u, children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-content meld-modal-content--small",
        onClick: (m) => m.stopPropagation(),
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
                children: /* @__PURE__ */ i.jsx(Te, { size: 20 })
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
                        dm,
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
                      " or descendants. You can choose to delete just the selected items or all related items in their lineage."
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
}, Ie = (e) => {
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
}, od = () => {
  const { dispatch: e } = Re(), [t, n] = v.useState(() => {
    const S = localStorage.getItem("meld-import-config"), D = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (S)
      try {
        const C = JSON.parse(S);
        return { ...D, ...C, tags: [] };
      } catch {
        return D;
      }
    return D;
  });
  v.useEffect(() => {
    const { tags: S, ...D } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(D));
  }, [t]);
  const [r, l] = v.useState([]), [s, a] = v.useState([]), [o, u] = v.useState(0), [d, h] = v.useState(!1), [g, m] = v.useState([]), [y, w] = v.useState(""), [x, j] = v.useState(!1), [f, c] = v.useState(null);
  v.useEffect(() => {
    (async () => {
      try {
        const D = await Fp();
        n((C) => C.custom_path ? C : { ...C, custom_path: D });
      } catch (D) {
        V.error("Failed to fetch home directory:", D);
      }
    })();
  }, []), v.useEffect(() => {
    const S = new AbortController();
    return (async () => {
      const C = t.type === "custom" ? t.custom_path : t.subfolder;
      if (V.log(
        `loadFolders started. Path: "${C}", Type: "${t.type}"`
      ), t.type === "custom" && !C) {
        V.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      h(!0);
      const U = C, M = t.type;
      try {
        V.log("Step 1: Fast load starting...");
        const ee = await Wp(
          t.type,
          C,
          !0,
          S.signal
        );
        if (S.signal.aborted) {
          V.log("Step 1: Aborted.");
          return;
        }
        V.log(
          `Step 1 complete. Found ${ee.folders.length} folders, ${ee.images.length} images.`
        ), l(ee.folders), a(ee.images), u(null);
        const re = ee.folders.map((T) => T.name);
        re.length > 0 && (V.log(
          `Step 2: Metadata fetch starting for ${re.length} folders...`
        ), Qp(
          M,
          U,
          re,
          S.signal
        ).then((T) => {
          if (S.signal.aborted) {
            V.log("Step 2: Aborted.");
            return;
          }
          V.log("Step 2: Metadata fetch complete."), l(
            (O) => O.map((W) => {
              const Z = T[W.name];
              return Z ? { ...W, count: Z.count, preview: Z.preview } : W;
            })
          );
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 2: Metadata fetch failed:", T);
        })), V.log("Step 3: Path image count starting..."), Hp(M, U, S.signal).then((T) => {
          if (S.signal.aborted) {
            V.log("Step 3: Aborted.");
            return;
          }
          V.log(`Step 3: Path image count complete: ${T}`), u(T);
        }).catch((T) => {
          T.name !== "AbortError" && V.error("Step 3: Path image count failed:", T);
        });
      } catch (ee) {
        if (ee.name === "AbortError") {
          V.log("Request aborted.");
          return;
        }
        V.error("Failed to load folders:", ee), l([]), a([]), u(0);
      } finally {
        S.signal.aborted || h(!1);
      }
    })(), () => {
      S.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = v.useCallback(async () => {
    j(!0);
    try {
      const S = await ya();
      m(S);
    } catch (S) {
      V.error("Failed to fetch tags:", S);
    } finally {
      j(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    const S = (D) => {
      D.key === "Escape" && (D.preventDefault(), D.stopImmediatePropagation(), f ? c(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", S, { capture: !0 }), () => window.removeEventListener("keydown", S, { capture: !0 });
  }, [f, e]);
  const k = v.useMemo(() => g.filter(
    (S) => S.name.toLowerCase().includes(y.toLowerCase()) && !t.tags.includes(S.name)
  ), [g, y, t.tags]), N = (S) => {
    const D = S.trim();
    D && !t.tags.includes(D) && (n({ ...t, tags: [...t.tags, D] }), w(""));
  }, P = (S) => {
    n({ ...t, tags: t.tags.filter((D) => D !== S) });
  }, _ = (S) => {
    S.key === "Enter" && y.trim() && (S.preventDefault(), N(y.trim()));
  }, E = async () => {
    try {
      await Bp(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (S) {
      V.error("Failed to start scan:", S), alert(`Failed to start scan: ${S}`);
    }
  }, b = (S) => {
    if (t.type === "custom") {
      const D = t.custom_path.includes("\\") ? "\\" : "/", C = t.custom_path.endsWith(D) ? `${t.custom_path}${S}` : `${t.custom_path}${D}${S}`;
      n({ ...t, custom_path: C });
    } else {
      const D = t.subfolder ? `${t.subfolder}/${S}` : S;
      n({ ...t, subfolder: D });
    }
  }, R = () => {
    if (t.type === "custom") {
      const S = t.custom_path.includes("\\") ? "\\" : "/", D = t.custom_path.split(S);
      if (D.length > 1) {
        D.pop();
        let C = D.join(S);
        C === "" && S === "/" && (C = "/"), n({ ...t, custom_path: C });
      }
    } else {
      const S = t.subfolder.split("/");
      S.pop(), n({ ...t, subfolder: S.join("/") });
    }
  };
  return Fe.createPortal(
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => e({ type: "CLOSE_MODAL" }),
        children: [
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--large",
              onClick: (S) => S.stopPropagation(),
              children: [
                /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ i.jsx("h2", { children: "Import Images" }),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ i.jsx(Te, { size: 20 })
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
                          onChange: (S) => n({
                            ...t,
                            type: S.target.value,
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
                          onChange: (S) => n({ ...t, recursive: S.target.checked })
                        }
                      ),
                      "Recursive Scan"
                    ] }) }),
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-form-group", children: [
                      /* @__PURE__ */ i.jsx("label", { htmlFor: "link-strategy", children: "Parent Linking" }),
                      /* @__PURE__ */ i.jsxs(
                        "select",
                        {
                          id: "link-strategy",
                          value: t.link_strategy,
                          onChange: (S) => n({
                            ...t,
                            link_strategy: S.target.value,
                            auto_link_parent: S.target.value !== "none"
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
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((S) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        S,
                        /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => P(S),
                            children: /* @__PURE__ */ i.jsx(Te, { size: 12 })
                          }
                        )
                      ] }, S)) }),
                      /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ i.jsx(zn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ i.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: y,
                            onChange: (S) => w(S.target.value),
                            onKeyDown: _
                          }
                        ),
                        y.trim() && !t.tags.includes(y.trim()) && /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(y),
                            children: /* @__PURE__ */ i.jsx(va, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? y && /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        y
                      ] }) : k.map((S) => /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => N(S.name),
                          children: S.name
                        },
                        S.id
                      )) })
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-scan-actions", children: /* @__PURE__ */ i.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "meld-btn meld-btn-primary",
                        onClick: E,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ i.jsx(Nm, { size: 16 }),
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
                          onClick: R,
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
                          onChange: (S) => n({ ...t, custom_path: S.target.value }),
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
                    /* @__PURE__ */ i.jsx("div", { className: "meld-folder-list", children: d ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && s.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      r.map((S) => /* @__PURE__ */ i.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => b(S.name),
                          children: [
                            /* @__PURE__ */ i.jsx("div", { className: "meld-folder-icon-wrapper", children: S.preview ? /* @__PURE__ */ i.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Ie(S.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ i.jsx(wm, { size: 16 }) }),
                            /* @__PURE__ */ i.jsx("span", { className: "meld-folder-name", children: S.name }),
                            /* @__PURE__ */ i.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${S.count === null ? "meld-folder-count--loading" : ""}`,
                                children: S.count !== null ? `${S.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ i.jsx(rd, { size: 14 })
                          ]
                        },
                        S.name
                      )),
                      s.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-browser-image-grid", children: s.map((S) => /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => c(S),
                          children: /* @__PURE__ */ i.jsx(
                            "img",
                            {
                              src: Ie(S),
                              alt: S.filename,
                              title: S.filename
                            }
                          )
                        },
                        S.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          f && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (S) => {
                S.stopPropagation(), c(null);
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (S) => S.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-import-preview-close",
                          onClick: () => c(null),
                          children: /* @__PURE__ */ i.jsx(Te, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "img",
                        {
                          src: Ie(f),
                          alt: f.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ i.jsx("div", { className: "meld-import-preview-info", children: f.filename })
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
}, ud = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Re(), [l, s] = v.useState([]), [a, o] = v.useState(!0), [u, d] = v.useState(!1), h = t.images.find((c) => c.id === e), g = v.useCallback(async () => {
    o(!0);
    try {
      const c = t.settings["gallery.suggest_phash_threshold"], p = await Vp(e, c);
      s(p);
    } catch (c) {
      console.error("Failed to load suggestions:", c);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  v.useEffect(() => {
    g();
  }, [g]);
  const m = async (c) => {
    if (c == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!h || c === h.parent_id) && !(h.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Lo(e, c), await Kc(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (p) {
        console.error("Failed to link parent:", p);
      }
  }, y = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Lo(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (c) {
        console.error("Failed to remove source:", c), alert("Failed to remove source image.");
      }
  }, w = async (c) => {
    o(!0);
    try {
      const p = await Up(c), { id: k } = await Xc({
        filename: p.name,
        subfolder: p.subfolder || "",
        type: p.type || "input"
      });
      if (k === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await m(k);
    } catch (p) {
      console.error("Failed to upload/register image:", p);
    } finally {
      o(!1);
    }
  }, x = (c) => {
    c.preventDefault(), c.stopPropagation(), d(!1);
    const p = c.dataTransfer.files[0];
    p != null && p.type.startsWith("image/") && w(p);
  };
  if (!h) return null;
  const j = l.filter((c) => c.is_source_match), f = l.filter((c) => !c.is_source_match);
  return Fe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (c) => c.stopPropagation(), children: [
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
                children: /* @__PURE__ */ i.jsx(Te, { size: 20 })
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
                        /* @__PURE__ */ i.jsx(km, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        src: Ie({
                                          filename: h.parent_filename,
                                          subfolder: h.parent_subfolder || "",
                                          type: h.parent_type || "output"
                                        }),
                                        alt: "Current Parent",
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
                      onClick: y,
                      title: "Remove Source",
                      children: /* @__PURE__ */ i.jsx(Sm, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (c) => {
                  c.preventDefault(), c.stopPropagation(), d(!0);
                },
                onDragOver: (c) => {
                  c.preventDefault(), c.stopPropagation(), c.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (c) => {
                  c.preventDefault(), c.stopPropagation(), d(!1);
                },
                onDrop: x,
                children: [
                  /* @__PURE__ */ i.jsx(Pm, { size: 32 }),
                  /* @__PURE__ */ i.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ i.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestions-container", children: [
              j.length > 0 && /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: j.map((c) => {
                  const p = c.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && m(c.id),
                      style: {
                        cursor: p ? "default" : "pointer",
                        ...p ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Ie(c), alt: c.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
                          p && /* @__PURE__ */ i.jsx(
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
                    c.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Visual Matches (pHash)" }),
                f.length > 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: f.map((c) => {
                  const p = c.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && m(c.id),
                      style: {
                        cursor: p ? "default" : "pointer",
                        ...p ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Ie(c), alt: c.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: c.filename }),
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
                                  Math.round((64 - c.distance) / 64 * 100),
                                  "%"
                                ] }),
                                p && /* @__PURE__ */ i.jsx(
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
                    c.id
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
}, Wm = () => {
  const { state: e, dispatch: t, updateSetting: n } = Re(), [r, l] = v.useState("General"), [s, a] = v.useState({
    ...e.settings
  }), [o, u] = v.useState(
    {}
  ), [d, h] = v.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [g, m] = v.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [y, w] = v.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, j] = v.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, c] = v.useState(e.settings["gallery.trash_retention_days"].toString()), [p, k] = v.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [N, P] = v.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [_, E] = v.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [b, R] = v.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    S,
    D
  ] = v.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    C,
    U
  ] = v.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  );
  return {
    activeTab: r,
    setActiveTab: l,
    localSettings: s,
    setLocalSettings: a,
    shortcutErrors: o,
    setShortcutErrors: u,
    handleClose: async () => {
      const A = Object.keys(s).filter(
        (J) => s[J] !== e.settings[J] && !o[J]
      );
      if (A.length > 0)
        for (const J of A)
          await n(J, s[J]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (A, J) => {
      a((te) => ({
        ...te,
        [A]: !J
      }));
    },
    handleNumberChange: (A, J, te, Ke) => {
      A === "gallery.initial_load_count" ? h(J) : A === "gallery.max_load_count" ? m(J) : A === "gallery.lineage_max_depth" ? w(J) : A === "viewer.thumbnail_window_size" ? j(J) : A === "gallery.trash_retention_days" ? c(J) : A === "gallery.auto_link_phash_threshold" ? k(J) : A === "gallery.suggest_phash_threshold" ? P(J) : A === "viewer.details.max_positive_prompt_lines" ? E(J) : A === "viewer.details.max_negative_prompt_lines" ? R(J) : A === "fullscreen.details.max_positive_prompt_lines" ? D(J) : A === "fullscreen.details.max_negative_prompt_lines" && U(J);
      const je = Number.parseInt(J, 10);
      if (!Number.isNaN(je)) {
        let Ye = je;
        te !== void 0 && Ye < te && (Ye = te), Ke !== void 0 && Ye > Ke && (Ye = Ke), a((F) => ({
          ...F,
          [A]: Ye
        }));
      }
    },
    handleNumberBlur: (A) => {
      A.key === "gallery.initial_load_count" ? h(
        s["gallery.initial_load_count"].toString()
      ) : A.key === "gallery.max_load_count" ? m(s["gallery.max_load_count"].toString()) : A.key === "gallery.lineage_max_depth" ? w(
        s["gallery.lineage_max_depth"].toString()
      ) : A.key === "viewer.thumbnail_window_size" ? j(
        s["viewer.thumbnail_window_size"].toString()
      ) : A.key === "gallery.trash_retention_days" ? c(
        s["gallery.trash_retention_days"].toString()
      ) : A.key === "gallery.auto_link_phash_threshold" ? k(
        s["gallery.auto_link_phash_threshold"].toString()
      ) : A.key === "gallery.suggest_phash_threshold" ? P(
        s["gallery.suggest_phash_threshold"].toString()
      ) : A.key === "viewer.details.max_positive_prompt_lines" ? E(
        s["viewer.details.max_positive_prompt_lines"].toString()
      ) : A.key === "viewer.details.max_negative_prompt_lines" ? R(
        s["viewer.details.max_negative_prompt_lines"].toString()
      ) : A.key === "fullscreen.details.max_positive_prompt_lines" ? D(
        s["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : A.key === "fullscreen.details.max_negative_prompt_lines" && U(
        s["fullscreen.details.max_negative_prompt_lines"].toString()
      );
    },
    handleResetShortcuts: () => {
      a((A) => ({
        ...A,
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
    validateShortcut: (A) => A.trim() ? A.trim().split(/\s+/).every((te) => !!(te === "next" || te === "prev" || te === "delete" || te.startsWith("tag:") && te.length > 4 || te.startsWith("-tag:") && te.length > 5 || te.startsWith("tag-toggle:") && te.length > 11)) : !0,
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: g,
    lineageMaxDepthInput: y,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: N,
    maxPositivePromptLinesInput: _,
    maxNegativePromptLinesInput: b,
    fullscreenMaxPositivePromptLinesInput: S,
    fullscreenMaxNegativePromptLinesInput: C
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
] }), bo = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  maxPositivePromptLinesInput: s,
  maxNegativePromptLinesInput: a,
  showDetailsOnly: o = !1
}) => {
  const u = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
            onChange: (h) => t((g) => ({
              ...g,
              "fullscreen.delete_mode": h.target.value
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
              onChange: () => n("fullscreen.loop", e["fullscreen.loop"])
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
            onChange: (h) => t((g) => ({
              ...g,
              "fullscreen.small_image_mode": h.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "original", children: "Original Size" }),
              /* @__PURE__ */ i.jsx("option", { value: "fit", children: "Fit to Screen" })
            ]
          }
        )
      }
    )
  ] }), d = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show Detail by Default",
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
            onChange: (h) => t((g) => ({
              ...g,
              "fullscreen.details.show_filename": h.target.value
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
        label: "Show Source",
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
            onChange: (h) => r(
              "fullscreen.details.max_positive_prompt_lines",
              h.target.value,
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
            onChange: (h) => r(
              "fullscreen.details.max_negative_prompt_lines",
              h.target.value,
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
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
    !o && u(),
    d()
  ] });
}, Qm = ({
  localSettings: e,
  handleToggle: t,
  handleNumberChange: n,
  handleNumberBlur: r,
  setLocalSettings: l,
  handleViewTrash: s,
  initialLoadCountInput: a,
  maxLoadCountInput: o,
  lineageMaxDepthInput: u,
  trashRetentionDaysInput: d,
  autoLinkPhashThresholdInput: h,
  suggestPhashThresholdInput: g
}) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Gallery View Mode",
        description: "Choose between standard view with details or grid only view.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.view_mode"],
            onChange: (m) => l((y) => ({
              ...y,
              "gallery.view_mode": m.target.value
            })),
            children: [
              /* @__PURE__ */ i.jsx("option", { value: "grid_details", children: "Details View" }),
              /* @__PURE__ */ i.jsx("option", { value: "grid_only", children: "Grid Only View" })
            ]
          }
        )
      }
    ),
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
            onChange: (m) => n(
              "gallery.initial_load_count",
              m.target.value,
              10,
              1e3
            ),
            onBlur: () => r({ key: "gallery.initial_load_count" })
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
            onChange: (m) => n(
              "gallery.max_load_count",
              m.target.value,
              10,
              1e6
            ),
            onBlur: () => r({ key: "gallery.max_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Hide Source Images",
        description: "Hide images that have been used as a basis for other images (sources).",
        children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.hide_parent_images"],
              onChange: () => t(
                "gallery.hide_parent_images",
                e["gallery.hide_parent_images"]
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
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (m) => l((y) => ({
              ...y,
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
        label: "Max Lineage Depth",
        description: "Maximum number of ancestor levels to fetch and display (1-10).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: u,
            min: 1,
            max: 10,
            onChange: (m) => n(
              "gallery.lineage_max_depth",
              m.target.value,
              1,
              10
            ),
            onBlur: () => r({ key: "gallery.lineage_max_depth" })
          }
        )
      }
    ),
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
            value: d,
            min: 0,
            max: 365,
            onChange: (m) => n(
              "gallery.trash_retention_days",
              m.target.value,
              0,
              365
            ),
            onBlur: () => r({ key: "gallery.trash_retention_days" })
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
            value: h,
            min: 0,
            max: 100,
            onChange: (m) => n(
              "gallery.auto_link_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => r({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Parent Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: g,
            min: 0,
            max: 100,
            onChange: (m) => n(
              "gallery.suggest_phash_threshold",
              m.target.value,
              0,
              100
            ),
            onBlur: () => r({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "meld-settings-extra", children: /* @__PURE__ */ i.jsx(
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
  ) })
] }), Hm = ({
  localSettings: e,
  handleToggle: t
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsx(
    $,
    {
      label: "Quick Suggestions",
      description: "Show suggested keywords when the search field is empty.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            checked: e["search.quick_suggestions"],
            onChange: () => t(
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
      label: "Input Suggest",
      description: "Show suggestions when typing search prefixes (e.g. pos:).",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            checked: e["search.input_suggest"],
            onChange: () => t(
              "search.input_suggest",
              e["search.input_suggest"]
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
      label: "Real-time Search",
      description: "Perform search automatically while typing without pressing Enter.",
      children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "checkbox",
            checked: e["search.realtime_search"],
            onChange: () => t(
              "search.realtime_search",
              e["search.realtime_search"]
            )
          }
        ),
        /* @__PURE__ */ i.jsx("span", { className: "meld-switch__slider" })
      ] })
    }
  )
] }), Bm = ({
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
      o.map((u, d) => /* @__PURE__ */ i.jsx(
        $,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[u] ? "meld-text-input--error" : ""}`,
              value: e[u] || "",
              onChange: (h) => {
                t((g) => ({
                  ...g,
                  [u]: h.target.value
                }));
              },
              onBlur: () => {
                const h = l(
                  e[u] || ""
                );
                r((g) => ({
                  ...g,
                  [u]: !h
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
}, Gm = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
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
          onChange: (r) => t((l) => ({
            ...l,
            "sidebar.show_filename": r.target.value
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
      label: "Show Model Name",
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
      label: "Show Positive Prompt",
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
      label: "Show Negative Prompt",
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
] }), Do = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n,
  handleNumberChange: r,
  handleNumberBlur: l,
  thumbnailWindowSizeInput: s,
  maxPositivePromptLinesInput: a,
  maxNegativePromptLinesInput: o,
  showDetailsOnly: u = !1
}) => {
  const d = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
            onChange: (g) => t((m) => ({
              ...m,
              "viewer.small_image_mode": g.target.value
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
        label: "Delete Mode",
        description: "Choose how images are deleted in view mode.",
        children: /* @__PURE__ */ i.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["viewer.delete_mode"],
            onChange: (g) => t((m) => ({
              ...m,
              "viewer.delete_mode": g.target.value
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
            onChange: (g) => r(
              "viewer.thumbnail_window_size",
              g.target.value,
              1,
              1e4
            ),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    )
  ] }), h = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      $,
      {
        label: "Show by Default",
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
            onChange: (g) => t((m) => ({
              ...m,
              "viewer.details.show_filename": g.target.value
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
        label: "Show Source",
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
            onChange: (g) => r(
              "viewer.details.max_positive_prompt_lines",
              g.target.value,
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
            onChange: (g) => r(
              "viewer.details.max_negative_prompt_lines",
              g.target.value,
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
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
    !u && d(),
    h()
  ] });
}, cd = () => {
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
    handleNumberBlur: d,
    handleResetShortcuts: h,
    handleViewTrash: g,
    validateShortcut: m,
    // Input states
    initialLoadCountInput: y,
    maxLoadCountInput: w,
    lineageMaxDepthInput: x,
    thumbnailWindowSizeInput: j,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: c,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: k,
    maxNegativePromptLinesInput: N,
    fullscreenMaxPositivePromptLinesInput: P,
    fullscreenMaxNegativePromptLinesInput: _
  } = Wm(), E = [
    { id: "General", label: "General" },
    { id: "Sidebar", label: "Sidebar" },
    { id: "Search", label: "Search" },
    { id: "View", label: "View" },
    { id: "View Details", label: "View Details" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Full Screen Detail", label: "Full Screen Detail" },
    { id: "Shortcuts", label: "Shortcuts" }
  ], b = () => {
    switch (e) {
      case "General":
        return /* @__PURE__ */ i.jsx(
          Qm,
          {
            localSettings: n,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            setLocalSettings: r,
            handleViewTrash: g,
            initialLoadCountInput: y,
            maxLoadCountInput: w,
            lineageMaxDepthInput: x,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: c,
            suggestPhashThresholdInput: p
          }
        );
      case "Sidebar":
        return /* @__PURE__ */ i.jsx(
          Gm,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o
          }
        );
      case "Search":
        return /* @__PURE__ */ i.jsx(
          Hm,
          {
            localSettings: n,
            handleToggle: o
          }
        );
      case "View":
        return /* @__PURE__ */ i.jsx(
          Do,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: j,
            maxPositivePromptLinesInput: k,
            maxNegativePromptLinesInput: N
          }
        );
      case "View Details":
        return /* @__PURE__ */ i.jsx(
          Do,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: j,
            maxPositivePromptLinesInput: k,
            maxNegativePromptLinesInput: N,
            showDetailsOnly: !0
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ i.jsx(
          bo,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: P,
            maxNegativePromptLinesInput: _
          }
        );
      case "Full Screen Detail":
        return /* @__PURE__ */ i.jsx(
          bo,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: P,
            maxNegativePromptLinesInput: _,
            showDetailsOnly: !0
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ i.jsx(
          Bm,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: s,
            validateShortcut: m,
            handleToggle: o,
            handleResetShortcuts: h
          }
        );
      default:
        return null;
    }
  };
  return Fe.createPortal(
    /* @__PURE__ */ i.jsx("div", { className: "meld-modal-overlay", onClick: a, children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (R) => R.stopPropagation(),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: a,
                children: /* @__PURE__ */ i.jsx(Te, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ i.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ i.jsx("div", { className: "meld-tabs", children: E.map((R) => /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === R.id ? "active" : ""}`,
                onClick: () => t(R.id),
                children: R.label
              },
              R.id
            )) }) }),
            /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: b() })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, at = "none", dd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Re(), [s, a] = v.useState([]), [o, u] = v.useState(t), [d, h] = v.useState(""), [g, m] = v.useState(!0), [y, w] = v.useState(!1), x = v.useRef(null), j = e.length > 1, f = v.useCallback(async () => {
    m(!0);
    try {
      const _ = await ya();
      a(_);
    } catch (_) {
      console.error("Failed to fetch tags:", _);
    } finally {
      m(!1);
    }
  }, []);
  v.useEffect(() => {
    f();
  }, [f]), v.useEffect(() => {
    x.current && x.current.focus();
    const _ = (E) => {
      E.key === "Escape" && (E.preventDefault(), E.stopPropagation(), E.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", _, { capture: !0 }), () => window.removeEventListener("keydown", _, {
      capture: !0
    });
  }, [n]);
  const c = v.useMemo(() => s.filter(
    (_) => _.name.toLowerCase().includes(d.toLowerCase()) && !o.includes(_.name)
  ), [s, d, o]), p = (_) => {
    const E = _.trim();
    if (E.toLowerCase() === at) {
      alert(
        `Tag name '${at}' is reserved for search and cannot be used.`
      );
      return;
    }
    E && !o.includes(E) && (u([...o, E]), h(""));
  }, k = (_) => {
    u(o.filter((E) => E !== _));
  }, N = async () => {
    w(!0);
    try {
      if (j) {
        const _ = o.filter((b) => !t.includes(b)), E = t.filter(
          (b) => !o.includes(b)
        );
        await _i(e, _, E);
      } else
        await em(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (_) {
      console.error("Failed to update tags:", _), alert("Failed to update tags.");
    } finally {
      w(!1);
    }
  }, P = (_) => {
    _.key === "Enter" && d.trim() ? (_.preventDefault(), _.stopPropagation(), p(d.trim())) : _.key === "Escape" && (_.preventDefault(), _.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Fe.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: (_) => {
          _.stopPropagation(), n();
        },
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (_) => _.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ i.jsx(on, { size: 18 }),
              /* @__PURE__ */ i.jsx("h3", { style: { margin: 0 }, children: j ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ i.jsx(Te, { size: 20 }) })
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
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((_) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                _,
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => k(_),
                    children: /* @__PURE__ */ i.jsx(Te, { size: 12 })
                  }
                )
              ] }, _)) })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ i.jsx(zn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: x,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: d,
                    onChange: (_) => h(_.target.value),
                    onKeyDown: P
                  }
                ),
                d.trim() && !o.includes(d.trim()) && /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => p(d),
                    children: [
                      /* @__PURE__ */ i.jsx(va, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : c.length === 0 ? d ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : c.map((_) => /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => p(_.name),
                  children: _.name
                },
                _.id
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
                onClick: N,
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
}, Km = () => {
  const { state: e, dispatch: t } = Re();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    e.activeModal.type === "parent_selection" && Fe.createPortal(
      /* @__PURE__ */ i.jsx(ud, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Fe.createPortal(/* @__PURE__ */ i.jsx(od, {}), document.body),
    e.activeModal.type === "settings" && Fe.createPortal(/* @__PURE__ */ i.jsx(cd, {}), document.body),
    e.activeModal.type === "tag_edit" && Fe.createPortal(
      /* @__PURE__ */ i.jsx(
        dd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Fe.createPortal(
      /* @__PURE__ */ i.jsx(
        ad,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    )
  ] });
}, fd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Re(), l = t.selectedIds.has(e.id), s = t.settings["gallery.view_mode"] || "grid_details", [a, o] = v.useState(null), [u, d] = v.useState(!1), [h, g] = v.useState(null), [m, y] = v.useState(!1), w = v.useRef(null), x = async (C, U, M = !1) => {
    try {
      await navigator.clipboard.writeText(C), M ? (y(!0), setTimeout(() => y(!1), 2e3)) : (g(U), setTimeout(() => g(null), 2e3));
    } catch (ee) {
      console.error("Failed to copy text: ", ee);
    }
  };
  v.useEffect(() => {
    const C = (M) => {
      M.key === "Escape" && (a ? o(null) : d(!1));
    }, U = (M) => {
      w.current && !w.current.contains(M.target) && d(!1);
    };
    return window.addEventListener("keydown", C), u && document.addEventListener("mousedown", U), () => {
      window.removeEventListener("keydown", C), document.removeEventListener("mousedown", U);
    };
  }, [u, a]);
  const j = (C) => {
    const U = t.settings["gallery.lineage_max_depth"];
    if (U === 0) return [];
    if (C.ancestors && C.ancestors.length > 0)
      return C.ancestors.slice(0, U).map((O) => ({
        id: O.id,
        imgSrc: Ie(O)
      }));
    const M = C.parent_id;
    if (!M || !C.parent_filename) return [];
    const ee = t.images.find((O) => O.id === M);
    let re = null;
    if (ee ? re = Ie(ee) : re = Ie({
      filename: C.parent_filename,
      subfolder: C.parent_subfolder || "",
      type: C.parent_type
    }), !re) return [];
    const T = {
      id: M || null,
      imgSrc: re
    };
    if (ee && U > 1) {
      const O = j(ee);
      return [T, ...O].slice(0, U);
    }
    return [T];
  }, f = j(e), p = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, k = Ie(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: s,
    popupContent: a,
    setPopupContent: o,
    isMenuOpen: u,
    setIsMenuOpen: d,
    copiedLabel: h,
    popupCopied: m,
    menuRef: w,
    parentChain: f,
    displayFilename: p,
    imgSrc: k,
    handleCopy: x,
    handleClick: (C) => {
      C.shiftKey ? (C.preventDefault(), C.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : C.ctrlKey || C.metaKey || t.selectedIds.size > 0 ? (C.preventDefault(), C.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (C) => {
      C.shiftKey ? (C.preventDefault(), C.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : C.ctrlKey || C.metaKey || t.selectedIds.size > 0 ? (C.preventDefault(), C.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleMouseDown: (C) => {
      (C.shiftKey || C.ctrlKey || C.metaKey || t.selectedIds.size > 0) && C.preventDefault();
    },
    handleKeyDown: (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleRestoreWorkflow: async () => {
      try {
        const C = await tm(e.id);
        if (!C.workflow) {
          alert("No workflow information is saved for this image.");
          return;
        }
        await window.app.loadGraphData(
          C.workflow
        ), V.log("Workflow restored successfully from Meld");
      } catch (C) {
        V.error("Error restoring workflow:", C), alert("Failed to restore workflow.");
      }
    },
    handleAddUnifiedLoader: async () => {
      try {
        const C = await nm(e.id), U = "MeldUnifiedLoader", M = window.app, re = window.LiteGraph.createNode(U);
        if (!re) {
          console.error(`Node type ${U} not found.`), alert(
            `Node type ${U} not found. Please make sure the Meld Unified Loader node is installed.`
          );
          return;
        }
        const T = {
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
        if (re.widgets) {
          for (const [A, J] of Object.entries(T)) {
            const te = C[A];
            if (te != null) {
              const Ke = re.widgets.find(
                (je) => je.name === J
              );
              Ke && (Ke.value = te);
            }
          }
          const Z = re.widgets.find(
            (A) => A.name === "control_after_generate"
          );
          Z && (Z.value = "fixed");
        }
        const O = M.canvas.ds.offset, W = M.canvas.ds.scale;
        re.pos = [(-O[0] + 400) / W, (-O[1] + 300) / W], M.graph.add(re), M.canvas.selectNode(re), M.canvas.centerOnNode(re);
      } catch (C) {
        console.error("Error adding Unified Loader:", C), alert("Failed to load settings.");
      }
    },
    handleEditSource: () => {
      n({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: e.id }
      });
    },
    handleEditTags: () => {
      n({
        type: "OPEN_MODAL",
        payload: {
          type: "tag_edit",
          imageIds: [e.id],
          tags: e.tags || []
        }
      });
    },
    fetchFullImageDetails: r
  };
}, Ym = ({
  isMenuOpen: e,
  setIsMenuOpen: t,
  menuRef: n,
  onAddUnifiedLoader: r,
  onRestoreWorkflow: l,
  onEditSource: s,
  onEditTags: a
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
      children: /* @__PURE__ */ i.jsx(Cm, { size: 16 })
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
      children: /* @__PURE__ */ i.jsx(Po, { size: 16 })
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
          /* @__PURE__ */ i.jsx(Po, { size: 14 }),
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
          /* @__PURE__ */ i.jsx(fm, { size: 14 }),
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
          /* @__PURE__ */ i.jsx(Im, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit source image" })
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
          /* @__PURE__ */ i.jsx(on, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { children: "Edit Tags" })
        ]
      }
    )
  ] })
] }), Xm = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => Fe.createPortal(
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
                  ym,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  Te,
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
), pd = ul.memo(
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
      popupCopied: d,
      menuRef: h,
      parentChain: g,
      displayFilename: m,
      imgSrc: y,
      handleCopy: w,
      handleClick: x,
      handleContainerClick: j,
      handleMouseDown: f,
      handleKeyDown: c,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: k,
      handleEditSource: N,
      handleEditTags: P,
      fetchFullImageDetails: _
    } = fd(e);
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
        onClick: j,
        onMouseDown: f,
        onKeyDown: c,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
            "img",
            {
              src: y,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              onMouseDown: f,
              onClick: (E) => {
                E.stopPropagation(), x(E);
              }
            }
          ) }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__details", children: [
            (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__filename", children: [
              t.settings["sidebar.show_filename"] !== "none" && m,
              t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
              t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
            ] }),
            t.settings["gallery.show_parent_image"] && g.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-lineage-thumbs", children: g.map(
                (E, b) => E.imgSrc && /* @__PURE__ */ i.jsx(
                  "img",
                  {
                    src: E.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (R) => {
                      R.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: E.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: b === 0 ? "Source" : b === 1 ? "Grand-Source" : `Ancestor (S${b + 1})`,
                    alt: "source thumb"
                  },
                  E.id || b
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
                onClick: async (E) => {
                  E.stopPropagation();
                  const b = await _(e.id);
                  s({
                    title: "Model",
                    text: b.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const b = await _(e.id);
                        w(b.model_name || "-", "Model");
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
                onClick: async (E) => {
                  E.stopPropagation();
                  const b = await _(e.id);
                  s({
                    title: "Positive Prompt",
                    text: b.positive_prompt || b.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const b = await _(e.id);
                        w(
                          b.positive_prompt || b.positive || "-",
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
                onClick: async (E) => {
                  E.stopPropagation();
                  const b = await _(e.id);
                  s({
                    title: "Negative Prompt",
                    text: b.negative_prompt || b.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (E) => {
                        E.stopPropagation();
                        const b = await _(e.id);
                        w(
                          b.negative_prompt || b.negative || "-",
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
                onClick: (E) => {
                  E.stopPropagation(), P();
                },
                children: [
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((E, b) => /* @__PURE__ */ i.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: E
                    },
                    `${E}-${b}`
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
            Ym,
            {
              isMenuOpen: a,
              setIsMenuOpen: o,
              menuRef: h,
              onAddUnifiedLoader: k,
              onRestoreWorkflow: p,
              onEditSource: N,
              onEditTags: P
            }
          ),
          l && /* @__PURE__ */ i.jsx(
            Xm,
            {
              title: l.title,
              text: l.text,
              onClose: () => s(null),
              onCopy: (E) => w(E, "", !0),
              isCopied: d
            }
          )
        ]
      }
    );
  }
);
pd.displayName = "DetailedImageCard";
const md = ul.memo(
  ({ image: e }) => {
    const {
      isSelected: t,
      imgSrc: n,
      handleContainerClick: r,
      handleMouseDown: l,
      handleKeyDown: s,
      handleClick: a
    } = fd(e);
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
md.displayName = "SimpleImageCard";
const Zm = ({ image: e }) => {
  const { state: t } = Re();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ i.jsx(md, { image: e }) : /* @__PURE__ */ i.jsx(pd, { image: e });
}, Jm = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: s, viewerMode: a, lineageImages: o, settings: u } = e, [d, h] = v.useState(!1), [g, m] = v.useState(
    u["viewer.show_details_by_default"]
  ), [y, w] = v.useState(null), x = y ?? u["viewer.show_thumbnails"], [j, f] = v.useState(!1), [c, p] = v.useState(!1), [k, N] = v.useState(null), [P, _] = v.useState(null), [E, b] = v.useState(
    null
  ), R = v.useRef(null), S = v.useRef(!0);
  v.useEffect(() => (S.current = !0, () => {
    S.current = !1;
  }), []);
  const D = v.useRef(l);
  v.useEffect(() => {
    D.current = l;
  }, [l]);
  const C = a === "lineage" ? o : s.filter(
    (F) => F.exists !== !1 && !(u["gallery.hide_parent_images"] && F.has_children)
  ), U = l === null ? -1 : C.findIndex((F) => F.id === l), M = (a === "lineage" && o.length > 0 ? o : s).find((F) => F.id === l), ee = v.useCallback(
    async (F = !1) => {
      if (!M) return;
      const K = d ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!F && K === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [M.id],
            hasLineage: !!(M.parent_id || M.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const L = e.viewScope === "trash", Y = /* @__PURE__ */ new Set([M.id]);
        if (K === "lineage") {
          const Q = await vi(M.id);
          for (const X of Q)
            Y.add(X.id);
        }
        if (!S.current || D.current === null) return;
        if (C.length > Y.size) {
          let Q = !1;
          for (let X = U + 1; X < C.length; X++)
            if (!Y.has(C[X].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: C[X].id, mode: a }
              }), Q = !0;
              break;
            }
          if (!Q) {
            for (let X = U - 1; X >= 0; X--)
              if (!Y.has(C[X].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: C[X].id, mode: a }
                }), Q = !0;
                break;
              }
          }
          Q || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await wi(Array.from(Y), L), !L) {
          const Q = C.filter(
            (X) => Y.has(X.id)
          );
          N(Q), _(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(Y) });
      } catch (L) {
        t({
          type: "SET_ERROR",
          payload: L instanceof Error ? L.message : String(L)
        });
      }
    },
    [
      M,
      d,
      u,
      e.viewScope,
      C,
      U,
      a,
      t
    ]
  ), re = v.useCallback(() => {
    M && t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: [M.id],
        tags: M.tags || []
      }
    });
  }, [M, t]), T = v.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: d } });
  }, [t, d]), O = v.useCallback(async () => {
    const F = d ? u["fullscreen.loop"] : u["viewer.loop"];
    if (U === 0 && a === "gallery" && e.pagination.hasMore && !c && F) {
      p(!0);
      try {
        const K = e.pagination.limit, L = e.pagination.total, Y = Math.max(0, L - K), Q = await ol(
          Y,
          K,
          e.searchQuery
        );
        if (!S.current || (t({ type: "APPEND_IMAGES", payload: Q }), D.current === null)) return;
        if (Q.images.length > 0) {
          const X = Q.images[Q.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: X.id, mode: "gallery" }
          });
        }
      } catch (K) {
        console.error("Failed to jump to end:", K);
      } finally {
        p(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: d } });
  }, [
    U,
    a,
    e.pagination,
    e.searchQuery,
    u,
    t,
    c,
    d
  ]), W = v.useCallback(
    (F) => {
      F && "stopPropagation" in F && F.stopPropagation();
      const K = R.current;
      K && (document.fullscreenElement ? document.exitFullscreen() : K.requestFullscreen().catch((L) => {
        console.error(
          `Error attempting to enable full-screen mode: ${L.message}`
        );
      }));
    },
    []
  ), Z = v.useCallback(async () => {
    if (M)
      try {
        const F = M.id;
        C.length > 1 ? T() : t({ type: "CLOSE_VIEWER" });
        const L = (await xi([F])).restored_ids || [F];
        t({ type: "REMOVE_IMAGES", payload: L });
      } catch (F) {
        t({
          type: "SET_ERROR",
          payload: F instanceof Error ? F.message : String(F)
        });
      }
  }, [M, C.length, T, t]), A = v.useCallback(async () => {
    if (!k || k.length === 0) return;
    const F = k.map((L) => L.id), K = F[0];
    try {
      const L = await xi(F);
      if (!S.current) return;
      if (t({ type: "ADD_IMAGES", payload: k }), e.viewScope === "trash") {
        const Y = L.restored_ids || F;
        t({ type: "REMOVE_IMAGES", payload: Y });
      }
      if (N(null), !S.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: K, mode: a }
      });
    } catch (L) {
      t({
        type: "SET_ERROR",
        payload: L instanceof Error ? L.message : String(L)
      });
    }
  }, [k, t, a, e.viewScope]), J = v.useCallback(async () => {
    if (k && k.length > 0)
      await A();
    else if (P && P.type === "tags") {
      const { imageId: F, addTags: K, removeTags: L } = P;
      try {
        await _i([F], K, L);
        const Y = (a === "lineage" ? o : s).find((Q) => Q.id === F);
        if (Y) {
          const Q = [...Y.tags];
          for (const ye of K)
            Q.includes(ye) || Q.push(ye);
          const X = Q.filter((ye) => !L.includes(ye));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...Y, tags: X }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: F, mode: a }
          });
        }
        _(null);
      } catch (Y) {
        t({
          type: "SET_ERROR",
          payload: Y instanceof Error ? Y.message : String(Y)
        });
      }
    }
  }, [
    k,
    P,
    A,
    s,
    o,
    a,
    t
  ]), te = v.useCallback(
    async (F) => {
      if (!F || !M) return;
      const K = M.id, L = [...M.tags], Y = F.split(/\s+/), Q = [], X = [];
      let ye = !1, un = !1, Mr = !1;
      for (const ve of Y)
        if (ve.startsWith("tag:")) {
          const fe = ve.substring(4);
          fe && !L.includes(fe) && !Q.includes(fe) && Q.push(fe);
        } else if (ve.startsWith("-tag:")) {
          const fe = ve.substring(5);
          fe && L.includes(fe) && !X.includes(fe) && X.push(fe);
        } else if (ve.startsWith("tag-toggle:")) {
          const fe = ve.substring(11);
          fe && (L.includes(fe) ? X.includes(fe) || X.push(fe) : Q.includes(fe) || Q.push(fe));
        } else ve === "next" ? ye = !0 : ve === "prev" ? un = !0 : ve === "delete" && (Mr = !0);
      if (Q.length > 0 || X.length > 0)
        try {
          await _i([K], Q, X);
          const ve = [...L];
          for (const Bt of Q)
            ve.includes(Bt) || ve.push(Bt);
          const fe = ve.filter((Bt) => !X.includes(Bt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...M, id: K, tags: fe }
          }), _({
            type: "tags",
            imageId: K,
            addTags: [...X],
            removeTags: [...Q]
          }), N(null);
        } catch (ve) {
          console.error("Failed to update tags via shortcut:", ve);
        }
      Mr ? ee(!0) : ye ? T() : un && O();
    },
    [M, t, T, O, ee]
  );
  v.useEffect(() => {
    const F = (L) => {
      var fe, Bt, wa;
      if (l === null) return;
      const Y = ((fe = document.activeElement) == null ? void 0 : fe.tagName) === "INPUT" || ((Bt = document.activeElement) == null ? void 0 : Bt.tagName) === "TEXTAREA" || ((wa = document.activeElement) == null ? void 0 : wa.isContentEditable), Q = L.key === "Delete" || L.key === "Backspace", X = L.key === "ArrowRight" || L.key === "ArrowLeft", ye = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        L.key
      ), un = L.key === "Escape", Mr = (L.ctrlKey || L.metaKey) && (L.key === "z" || L.key === "Z" || L.code === "KeyZ"), ve = /^[0-9]$/.test(L.key) && !L.ctrlKey && !L.metaKey && !L.altKey && L.code !== "KeyZ";
      if (Q || X || ye || un || Mr || ve)
        if (Y)
          if (un) {
            if (e.activeModal.type !== "none") {
              L.preventDefault(), L.stopPropagation();
              return;
            }
            L.preventDefault(), L.stopPropagation(), L.stopImmediatePropagation();
          } else
            return;
        else {
          if (un && e.activeModal.type !== "none") {
            L.preventDefault(), L.stopPropagation();
            return;
          }
          L.preventDefault(), L.stopPropagation(), L.stopImmediatePropagation();
        }
      else
        return;
      if (L.key === "Escape")
        e.activeModal.type !== "none" && t({ type: "CLOSE_MODAL" }), document.fullscreenElement ? document.exitFullscreen() : t({ type: "CLOSE_VIEWER" });
      else if (L.key === "ArrowRight")
        T();
      else if (L.key === "ArrowLeft")
        O();
      else if (L.key === "f" || L.key === "F")
        W(L);
      else if (L.key === "i" || L.key === "I")
        m((Jl) => !Jl);
      else if (L.key === "t" || L.key === "T")
        re();
      else if ((L.key === "r" || L.key === "R") && e.viewScope === "trash")
        Z();
      else if (L.key === "Delete")
        ee();
      else if ((L.ctrlKey || L.metaKey) && (L.key === "z" || L.key === "Z"))
        J();
      else if (ve && !Y) {
        const Jl = `viewer.shortcut.${L.key}`, ql = u[Jl];
        typeof ql == "string" && ql && (b(L.key), setTimeout(() => {
          S.current && b(null);
        }, 500), te(ql));
      }
    };
    window.addEventListener("keydown", F, { capture: !0 });
    const K = () => {
      const L = !!document.fullscreenElement;
      h(L), m(L ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", K), () => {
      window.removeEventListener("keydown", F, { capture: !0 }), document.removeEventListener("fullscreenchange", K);
    };
  }, [
    l,
    t,
    W,
    T,
    O,
    u,
    ee,
    e.activeModal.type,
    J,
    re,
    Z,
    e.viewScope,
    te
  ]), v.useEffect(() => {
    l !== null && r(l).catch((F) => {
      console.error("Failed to fetch full image details for viewer:", F);
    });
  }, [l, r]), v.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (f(!0), vi(l).then((F) => {
      S.current && t({ type: "SET_LINEAGE", payload: F });
    }).catch((F) => {
      console.error("Failed to fetch lineage:", F);
    }).finally(() => {
      S.current && f(!1);
    }));
  }, [a, l, o.length, t]), v.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || U !== -1 && U >= C.length - 15 && n();
  }, [
    l,
    C.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    U
  ]);
  const Ke = v.useMemo(() => {
    if (!x || U === -1) return [];
    const F = u["viewer.thumbnail_window_size"], K = Math.floor(F / 2);
    let L = Math.max(0, U - K);
    const Y = Math.min(C.length, L + F);
    return Y === C.length && (L = Math.max(0, Y - F)), C.slice(L, Y).map((Q, X) => ({
      img: Q,
      absIndex: L + X
    }));
  }, [C, U, u, x]), je = v.useCallback(
    (F) => {
      const K = u["gallery.lineage_max_depth"];
      if (K === 0) return [];
      if (F.ancestors && F.ancestors.length > 0)
        return F.ancestors.slice(0, K).map((ye) => ({
          id: ye.id,
          imgSrc: Ie(ye)
        }));
      const L = F.parent_id;
      if (!L || !F.parent_filename) return [];
      const Y = s.find((ye) => ye.id === L);
      let Q = null;
      if (Y ? Q = Ie(Y) : Q = Ie({
        filename: F.parent_filename,
        subfolder: F.parent_subfolder || "",
        type: F.parent_type
      }), !Q) return [];
      const X = {
        id: L || null,
        imgSrc: Q
      };
      if (Y && K > 1) {
        const ye = je(Y);
        return [X, ...ye].slice(0, K);
      }
      return [X];
    },
    [u, s]
  ), Ye = v.useMemo(() => M ? je(M) : [], [M, je]);
  return v.useEffect(() => {
    var F, K;
    if (l !== null) {
      if (x) {
        const L = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        L && L.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((F = document.activeElement) == null ? void 0 : F.tagName) === "CANVAS" && document.activeElement.blur(), (K = R.current) == null || K.focus();
    }
  }, [l, x]), v.useEffect(() => {
    if (l === null || C.length === 0) return;
    const F = C.findIndex(
      (Q) => Q.id === l
    );
    if (F === -1) return;
    const K = (Q) => Ie(Q), L = [
      F + 1,
      F + 2,
      F - 1
    ], Y = setTimeout(() => {
      for (const Q of L)
        if (Q >= 0 && Q < C.length) {
          const X = C[Q], ye = new Image();
          ye.src = K(X);
        }
    }, 150);
    return () => clearTimeout(Y);
  }, [l, C]), {
    isFullscreen: d,
    showDetails: g,
    setShowDetails: m,
    showThumbnails: x,
    setShowThumbnailsOverride: w,
    isLoadingLineage: j,
    isJumping: c,
    activeShortcutKey: E,
    lastDeletedImages: k,
    setLastDeletedImages: N,
    overlayRef: R,
    handleNext: T,
    handlePrevious: O,
    handleDelete: ee,
    handleTagEdit: re,
    handleRestore: Z,
    handleUndo: J,
    toggleFullscreen: W,
    currentIndex: U,
    currentThumbnails: C,
    image: M,
    windowedThumbnails: Ke,
    parentChain: Ye
  };
}, qm = ({
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
}) }) : null, eh = ({
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
), hd = v.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, s = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = Ie(e);
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
              children: s ? /* @__PURE__ */ i.jsx(ed, { size: 12 }) : /* @__PURE__ */ i.jsx(qc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
hd.displayName = "ThumbnailItem";
const th = ({
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
    hd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  a === "gallery" && s && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ i.jsx(Er, { className: "animate-spin", size: 20 }) })
] }) }), nh = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Re(), {
    isFullscreen: l,
    showDetails: s,
    setShowDetails: a,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: d,
    isJumping: h,
    activeShortcutKey: g,
    setLastDeletedImages: m,
    overlayRef: y,
    handleNext: w,
    handlePrevious: x,
    handleTagEdit: j,
    handleRestore: f,
    toggleFullscreen: c,
    image: p,
    windowedThumbnails: k,
    parentChain: N
  } = Jm({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  if (!p) return null;
  const { viewerImageId: P, viewerMode: _ } = e, E = Ie(p), b = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Fe.createPortal(
    /* @__PURE__ */ i.jsxs(
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
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: `meld-viewer-content ${l ? "meld-viewer-content--fullscreen" : ""} ${o ? "meld-viewer-content--with-thumbnails" : ""}`,
              onClick: (R) => R.stopPropagation(),
              children: [
                b && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: f,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ i.jsx(Er, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => u(!o),
                      type: "button",
                      title: o ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ i.jsx(ld, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: j,
                      type: "button",
                      title: "Edit Tags (T)",
                      children: /* @__PURE__ */ i.jsx(on, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => a(!s),
                      type: "button",
                      title: s ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ i.jsx(xm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: c,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ i.jsx(Em, { size: 20 }) : /* @__PURE__ */ i.jsx(jm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ i.jsx(Te, { size: 20 })
                    }
                  )
                ] }),
                b && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: x,
                    type: "button",
                    disabled: h,
                    children: /* @__PURE__ */ i.jsx(nd, { size: 32 })
                  }
                ),
                /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ i.jsx(Er, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ i.jsx(
                    "img",
                    {
                      src: E,
                      alt: p.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                b && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: w,
                    type: "button",
                    children: /* @__PURE__ */ i.jsx(rd, { size: 32 })
                  }
                ),
                s && /* @__PURE__ */ i.jsx(
                  eh,
                  {
                    image: p,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: b,
                    parentChain: N,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ i.jsx(
                  th,
                  {
                    windowedThumbnails: k,
                    viewerImageId: P,
                    currentImage: p,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: _
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  qm,
                  {
                    settings: e.settings,
                    activeShortcutKey: g
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ i.jsx(
            ad,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: m
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ i.jsx(ud, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ i.jsx(od, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ i.jsx(cd, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ i.jsx(
            dd,
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
}, rh = () => {
  const { state: e, dispatch: t } = Re(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Gp(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, s = n.progress.phase === "linking", { current: a, total: o } = n.progress, u = o > 0 ? a / o : 0, d = s ? 50 + Math.round(u * 50) : Math.round(u * 50);
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
        style: { width: `${d}%` }
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
        children: /* @__PURE__ */ i.jsx(Lm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ i.jsx(gm, { size: 14, className: "meld-success-icon" }),
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
}, lh = () => {
  const { state: e, refreshFavorites: t } = Re(), [n, r] = v.useState(!1), [l, s] = v.useState(null), [a, o] = v.useState(null), [u, d] = v.useState(""), [h, g] = v.useState("");
  v.useEffect(() => {
    if (l) {
      const j = setTimeout(() => s(null), 3e3);
      return () => clearTimeout(j);
    }
  }, [l]);
  const m = v.useCallback(
    async (j, f, c) => {
      j.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${c}"?`;
      if (window.confirm(p))
        try {
          await Mo(f), await t();
        } catch (k) {
          V.error("Failed to delete favorite", k);
        }
    },
    [t]
  ), y = v.useCallback(
    (j, f) => {
      j.stopPropagation(), o(f), d(f.name), g(f.query);
    },
    []
  ), w = v.useCallback(async () => {
    if (!(!a || !u.trim() || !h.trim()))
      try {
        r(!0), await Xp(
          a.id,
          u,
          h
        ), await t(), o(null), s("Favorite updated.");
      } catch (j) {
        V.error("Failed to update favorite", j), s("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [a, u, h, t]), x = v.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (f) => f.query === e.searchQuery
    )) {
      const f = e.favorites.find((c) => c.query === e.searchQuery);
      if (f) {
        r(!0);
        try {
          await Mo(f.id), await t(), s("Favorite removed.");
        } catch (c) {
          V.error("Failed to delete favorite:", c);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Yp(e.searchQuery, e.searchQuery), await t(), s(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (f) {
      V.error("Failed to save favorite:", f);
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
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: g,
    handleDeleteFavorite: m,
    handleEditFavorite: y,
    handleSaveEditFavorite: w,
    handleSaveFavorite: x,
    setToastMessage: s
  };
}, sh = () => {
  const { state: e, dispatch: t } = Re(), [n, r] = v.useState(e.searchQuery), [l, s] = v.useState([]), [a, o] = v.useState(!1), [u, d] = v.useState([]), [h, g] = v.useState(-1), m = v.useRef(null), y = v.useRef(e.searchQuery), w = n !== y.current;
  v.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      d([]);
      return;
    }
    !n && !e.searchQuery ? Ap().then((_) => {
      d(_);
    }) : d([]);
  }, [
    n,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), v.useEffect(() => {
    r(e.searchQuery), y.current = e.searchQuery;
  }, [e.searchQuery]), v.useEffect(() => {
    var _;
    (_ = m.current) == null || _.focus();
  }, []);
  const x = v.useCallback(
    (_, E = !0) => {
      y.current !== _ && (V.log("SearchBar: triggering search", { query: _ }), t({ type: "SET_SEARCH_QUERY", payload: _ }), E && o(!1), y.current = _);
    },
    [t]
  );
  v.useEffect(() => {
    const _ = setTimeout(async () => {
      if (n === y.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        s([]), o(!1);
        return;
      }
      const E = n.split(/\s+/), b = E[E.length - 1];
      if (b) {
        const R = b.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (R) {
          const S = R[1].toLowerCase(), D = R[2], C = await Op(D, S);
          s(C), o(C.length > 0), g(-1);
        } else
          s([]), o(!1);
      } else
        s([]), o(!1);
    }, 300);
    return () => clearTimeout(_);
  }, [n, e.settings["search.input_suggest"]]);
  const j = v.useCallback(
    (_) => {
      var ee;
      const E = n.split(/\s+/), R = (E.pop() || "").match(/^([-!])/), S = R ? R[1] : "", U = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(_.type) ? _.value : `"${_.value}"`, M = `${[
        ...E,
        `${S}${_.type}:${U}`
      ].join(" ").trim()} `;
      r(M), s([]), o(!1), (ee = m.current) == null || ee.focus();
    },
    [n]
  ), f = (_) => {
    _.key === "Enter" ? x(n) : _.key === "Tab" ? a && h >= 0 && (j(l[h]), _.preventDefault()) : _.key === "ArrowDown" ? a && (g((E) => Math.min(E + 1, l.length - 1)), _.preventDefault()) : _.key === "ArrowUp" ? a && (g((E) => Math.max(E - 1, -1)), _.preventDefault()) : _.key === "Escape" && o(!1);
  }, c = v.useCallback(() => {
    r(""), x("");
  }, [x]), p = v.useCallback(
    (_, E) => {
      const S = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(_) ? E : `"${E}"`, D = `${_}:${S}`;
      r(D), x(D);
    },
    [x]
  ), k = v.useCallback(
    (_) => {
      r(_), _ || x("");
    },
    [x]
  ), N = v.useCallback(() => {
    if (n === y.current) return;
    const _ = n.split(/\s+/), E = _[_.length - 1];
    E != null && E.match(
      /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):/i
    ) && o(!0);
  }, [n]), P = v.useCallback(() => {
    setTimeout(() => o(!1), 200);
  }, []);
  return {
    inputValue: n,
    setInputValue: r,
    suggestions: l,
    showSuggestions: a,
    setShowSuggestions: o,
    searchSuggestions: u,
    selectedIndex: h,
    setSelectedIndex: g,
    inputRef: m,
    isQueryChanged: w,
    handleSearch: x,
    handleKeyDown: f,
    applySuggestion: j,
    clearSearch: c,
    applySearchSuggestion: p,
    handleInputChange: k,
    handleInputFocus: N,
    handleInputBlur: P
  };
}, ih = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, s] = v.useState(!1), [a, o] = v.useState(!1), [u, d] = v.useState(!1);
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
                  onClick: (h) => n(h, e),
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
                  children: /* @__PURE__ */ i.jsx(sd, { size: 14 })
                }
              ),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  onClick: (h) => r(h, e.id, e.name),
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
                  onMouseEnter: () => d(!0),
                  onMouseLeave: () => d(!1),
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
}, Ro = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ i.jsx(on, { size: 12 });
    case "model":
      return /* @__PURE__ */ i.jsx(mm, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ i.jsx(Mm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ i.jsx(hm, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ i.jsx(ed, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ i.jsx(qc, { size: 12 });
    case "sort":
      return /* @__PURE__ */ i.jsx(pm, { size: 12 });
    default:
      return null;
  }
}, ah = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: s,
  searchQuery: a,
  searchSuggestions: o,
  applySearchSuggestion: u,
  favorites: d,
  onSelectFavorite: h,
  onEditFavorite: g,
  onDeleteFavorite: m
}) => {
  const y = () => !e || t.length === 0 ? null : /* @__PURE__ */ i.jsx(
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
        marginTop: "2px",
        maxHeight: "400px",
        overflowY: "auto",
        boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
      },
      children: t.map((j, f) => /* @__PURE__ */ i.jsx(
        "div",
        {
          onMouseDown: (c) => {
            c.preventDefault(), l(j);
          },
          onMouseEnter: () => r(f),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: f === n ? "var(--comfy-menu-bg, #333)" : "transparent",
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
                children: Ro(j.type)
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: "var(--comfy-input-text-active, #3b82f6)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  width: "45px"
                },
                children: j.type
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: j.value === at ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: j.value === at ? "bold" : "normal"
                },
                children: j.value === at ? j.type === "tag" ? `Untagged (${at})` : `No ${j.type} (${at})` : j.value
              }
            )
          ] })
        },
        `${j.type}:${j.value}`
      ))
    }
  ), w = () => s || a || o.length === 0 ? null : /* @__PURE__ */ i.jsx(
    "div",
    {
      className: "meld-search-quick-suggestions",
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        padding: "0 4px"
      },
      children: o.map((j) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          onClick: () => u(j.type, j.value),
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
          onMouseEnter: (f) => {
            f.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", f.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", f.currentTarget.style.color = "var(--meld-text-color)";
          },
          onMouseLeave: (f) => {
            f.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", f.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", f.currentTarget.style.color = "var(--meld-text-color)";
          },
          children: [
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  display: "flex",
                  color: "var(--meld-text-secondary)"
                },
                children: Ro(j.type)
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
                children: j.type
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  maxWidth: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: j.value
              }
            )
          ]
        },
        `${j.type}:${j.value}`
      ))
    }
  ), x = () => s || d.length === 0 ? null : /* @__PURE__ */ i.jsxs(
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
            children: d.map((j) => /* @__PURE__ */ i.jsx(
              ih,
              {
                fav: j,
                onSelect: h,
                onEdit: g,
                onDelete: m
              },
              j.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    y(),
    w(),
    x()
  ] });
}, oh = () => {
  const { state: e } = Re(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: s,
    selectedIndex: a,
    setSelectedIndex: o,
    inputRef: u,
    isQueryChanged: d,
    handleSearch: h,
    handleKeyDown: g,
    applySuggestion: m,
    clearSearch: y,
    applySearchSuggestion: w,
    handleInputChange: x,
    handleInputFocus: j,
    handleInputBlur: f
  } = sh(), {
    isSaving: c,
    toastMessage: p,
    editingFavorite: k,
    setEditingFavorite: N,
    editFavoriteName: P,
    setEditFavoriteName: _,
    editFavoriteQuery: E,
    setEditFavoriteQuery: b,
    handleDeleteFavorite: R,
    handleEditFavorite: S,
    handleSaveEditFavorite: D,
    handleSaveFavorite: C
  } = lh(), U = v.useRef(null);
  return v.useEffect(() => {
    k && U.current && U.current.focus();
  }, [k]), /* @__PURE__ */ i.jsxs(
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
              p && /* @__PURE__ */ i.jsx(
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
                  children: p
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
                          background: d ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: d ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: d ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (M) => {
                          M.currentTarget.style.transform = "translateY(-1px)", d ? (M.currentTarget.style.filter = "brightness(1.15)", M.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : M.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (M) => {
                          M.currentTarget.style.transform = "none", d ? (M.currentTarget.style.filter = "none", M.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : M.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (M) => {
                          M.currentTarget.style.transform = "translateY(1px)", M.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (M) => {
                          M.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ i.jsx(
                            zn,
                            {
                              size: 16,
                              color: d ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: d ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          d && /* @__PURE__ */ i.jsx(
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
                        ref: u,
                        type: "text",
                        value: t,
                        onChange: (M) => x(M.target.value),
                        onKeyDown: g,
                        onBlur: f,
                        onFocus: j,
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
                        onClick: C,
                        disabled: c,
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
                        children: /* @__PURE__ */ i.jsx(
                          Si,
                          {
                            size: 16,
                            color: e.favorites.some((M) => M.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((M) => M.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                          }
                        )
                      }
                    ),
                    t && /* @__PURE__ */ i.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: y,
                        style: {
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "2px",
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0
                        },
                        children: /* @__PURE__ */ i.jsx(Te, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                ah,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: a,
                  setSelectedIndex: o,
                  applySuggestion: m,
                  inputValue: t,
                  searchQuery: e.searchQuery,
                  searchSuggestions: s,
                  applySearchSuggestion: w,
                  favorites: e.favorites,
                  onSelectFavorite: (M) => {
                    n(M), h(M);
                  },
                  onEditFavorite: S,
                  onDeleteFavorite: R
                }
              )
            ]
          }
        ),
        k && Fe.createPortal(
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "meld-modal-overlay",
              onClick: () => N(null),
              style: {
                zIndex: 3e3
              },
              children: /* @__PURE__ */ i.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (M) => M.stopPropagation(),
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
                          onClick: () => N(null),
                          children: /* @__PURE__ */ i.jsx(Te, { size: 20 })
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
                                    ref: U,
                                    type: "text",
                                    value: P,
                                    onChange: (M) => _(M.target.value),
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
                                      M.key === "Enter" && D(), M.key === "Escape" && N(null);
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
                                    value: E,
                                    onChange: (M) => b(M.target.value),
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
                                      M.key === "Enter" && !M.shiftKey && (M.preventDefault(), D()), M.key === "Escape" && N(null);
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
                          onClick: () => N(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: D,
                          disabled: c || !P.trim() || !E.trim(),
                          children: c ? "Saving..." : "Save Changes"
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
}, uh = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = v.useState([]), [l, s] = v.useState(!0), [a, o] = v.useState(""), [u, d] = v.useState(""), [h, g] = v.useState(!1), [m, y] = v.useState(null), [w, x] = v.useState(""), [j, f] = v.useState(!1), c = v.useRef(null), p = v.useCallback(async () => {
    s(!0);
    try {
      const S = await ya();
      r(S);
    } catch (S) {
      console.error("Failed to fetch tags:", S);
    } finally {
      s(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    m !== null && c.current && (c.current.focus(), c.current.select());
  }, [m]);
  const k = async (S) => {
    S.preventDefault();
    const D = u.trim();
    if (!(!D || h)) {
      if (D.toLowerCase() === at) {
        alert(
          `Tag name '${at}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((C) => C.name.toLowerCase() === D.toLowerCase())) {
        alert(`Tag "${D}" already exists.`);
        return;
      }
      g(!0);
      try {
        await Zp(D), d(""), await p();
      } catch (C) {
        console.error("Failed to add tag:", C);
      } finally {
        g(!1);
      }
    }
  }, N = async (S, D) => {
    if (confirm(`Are you sure you want to delete tag "${D}"?`))
      try {
        await Jp(S), await p();
      } catch (C) {
        console.error("Failed to delete tag:", C);
      }
  }, P = (S) => {
    y(S.id), x(S.name);
  }, _ = () => {
    y(null), x("");
  }, E = async (S) => {
    S.preventDefault();
    const D = w.trim();
    if (!D || m === null || j) return;
    if (D.toLowerCase() === at) {
      alert(
        `Tag name '${at}' is reserved for search and cannot be used.`
      );
      return;
    }
    const C = n.find((U) => U.id === m);
    if (C && C.name === D) {
      _();
      return;
    }
    if (n.some(
      (U) => U.id !== m && U.name.toLowerCase() === D.toLowerCase()
    )) {
      alert(`Tag "${D}" already exists.`);
      return;
    }
    f(!0);
    try {
      await qp(m, D), _(), await p();
    } catch (U) {
      console.error("Failed to rename tag:", U), alert(U instanceof Error ? U.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, b = (S) => {
    t(`tag:${S}`);
  }, R = v.useMemo(() => n.filter(
    (S) => S.name.toLowerCase().includes(a.toLowerCase())
  ), [n, a]);
  return /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ i.jsx(on, { size: 16 }),
        /* @__PURE__ */ i.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ i.jsx(Te, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ i.jsxs("form", { className: "meld-tag-add-form", onSubmit: k, children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (S) => d(S.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !u.trim() || h,
            children: [
              /* @__PURE__ */ i.jsx(va, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ i.jsx(zn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: a,
            onChange: (S) => o(S.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-list", children: R.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : R.map((S) => /* @__PURE__ */ i.jsx("div", { className: "meld-tag-item", children: m === S.id ? /* @__PURE__ */ i.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: E,
          children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                ref: c,
                className: "meld-tag-rename-input",
                value: w,
                onChange: (D) => x(D.target.value),
                onKeyDown: (D) => D.key === "Escape" && _()
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: j || !w.trim(),
                children: /* @__PURE__ */ i.jsx(td, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: _,
                disabled: j,
                children: /* @__PURE__ */ i.jsx(Te, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx("span", { className: "meld-tag-item__name", children: S.name }),
        /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => b(S.name),
              children: /* @__PURE__ */ i.jsx(zn, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => P(S),
              children: /* @__PURE__ */ i.jsx(sd, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => N(S.id, S.name),
              children: /* @__PURE__ */ i.jsx(Fn, { size: 14 })
            }
          )
        ] })
      ] }) }, S.id)) })
    ] })
  ] });
}, ch = () => {
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
    displayedImages: d,
    visibleImages: h,
    isSearchActive: g,
    loadMoreRef: m
  } = $m();
  return V.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: d.length,
    visibleCount: h.length,
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
                  onChange: (y) => r("gallery.trash.show_missing", y.target.checked)
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
                  /* @__PURE__ */ i.jsx(Te, { size: 14 }),
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
                  color: g ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: g ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ i.jsx(zn, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ i.jsx(_m, { size: 14 }) : /* @__PURE__ */ i.jsx(ld, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(on, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(vm, { size: 14 })
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
                  Er,
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
                children: /* @__PURE__ */ i.jsx(Tm, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ i.jsx(oh, {}) })
        ] }),
        /* @__PURE__ */ i.jsx(rh, {}),
        e.error && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ i.jsx(
          uh,
          {
            onClose: () => s("gallery"),
            onSearch: (y) => {
              t({ type: "SET_SEARCH_QUERY", payload: y }), s("search");
            }
          }
        ) : e.isLoading && d.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : h.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              children: h.map((y) => /* @__PURE__ */ i.jsx("div", { "data-image-id": y.id, children: /* @__PURE__ */ i.jsx(Vm, { height: 150, children: /* @__PURE__ */ i.jsx(Zm, { image: y }) }) }, y.id))
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              ref: m,
              className: "meld-gallery__load-more",
              style: { height: "20px", margin: "20px 0", textAlign: "center" },
              children: [
                e.isLoading && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading more..." }),
                u >= d.length && !e.pagination.hasMore && h.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx(Um, {}),
        e.viewerImageId !== null && /* @__PURE__ */ i.jsx(nh, {}),
        /* @__PURE__ */ i.jsx(Km, {})
      ]
    }
  );
};
zo.registerExtension({
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
const Zl = document.createElement("link");
Zl.rel = "stylesheet";
Zl.type = "text/css";
Zl.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Zl);
let Yr = null, rt = null;
zo.registerExtension({
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
      const n = await Yc();
      V.init(n.dev_mode), V.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), V.init(!1);
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
      }, G.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), G.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), G.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), V.log("Import completed.");
      }), G.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await Xc({
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
            V.log("render called", {
              el: n,
              galleryRoot: Yr,
              galleryContainer: rt
            }), rt || (V.log("galleryContainer not found, creating new one"), rt = document.createElement("div"), rt.id = "meld-gallery-container", rt.style.height = "100%", rt.style.width = "100%", rt.style.display = "flex", rt.style.flexDirection = "column"), n.contains(rt) || (V.log("Appending galleryContainer to el"), n.appendChild(rt)), Yr ? V.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (V.log("Creating new gallery root"), Yr = Gc(rt), Yr.render(
              ul.createElement(
                Am,
                null,
                ul.createElement(ch)
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
