import { api as K } from "/scripts/api.js";
import { app as Fo } from "/scripts/app.js";
function xd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ao = { exports: {} }, B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr = Symbol.for("react.element"), _d = Symbol.for("react.portal"), Sd = Symbol.for("react.fragment"), kd = Symbol.for("react.strict_mode"), jd = Symbol.for("react.profiler"), Ed = Symbol.for("react.provider"), Cd = Symbol.for("react.context"), Nd = Symbol.for("react.forward_ref"), Id = Symbol.for("react.suspense"), Td = Symbol.for("react.memo"), Ld = Symbol.for("react.lazy"), _a = Symbol.iterator;
function Md(e) {
  return e === null || typeof e != "object" ? null : (e = _a && e[_a] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Oo = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, $o = Object.assign, Uo = {};
function An(e, t, n) {
  this.props = e, this.context = t, this.refs = Uo, this.updater = n || Oo;
}
An.prototype.isReactComponent = {};
An.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
An.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vo() {
}
Vo.prototype = An.prototype;
function ki(e, t, n) {
  this.props = e, this.context = t, this.refs = Uo, this.updater = n || Oo;
}
var ji = ki.prototype = new Vo();
ji.constructor = ki;
$o(ji, An.prototype);
ji.isPureReactComponent = !0;
var Sa = Array.isArray, Wo = Object.prototype.hasOwnProperty, Ei = { current: null }, Qo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ho(e, t, n) {
  var r, l = {}, s = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (s = "" + t.key), t) Wo.call(t, r) && !Qo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in o = e.defaultProps, o) l[r] === void 0 && (l[r] = o[r]);
  return { $$typeof: Cr, type: e, key: s, ref: a, props: l, _owner: Ei.current };
}
function Pd(e, t) {
  return { $$typeof: Cr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ci(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
}
function bd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ka = /\/+/g;
function ts(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bd("" + e.key) : t.toString(36);
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
        case _d:
          a = !0;
      }
  }
  if (a) return a = e, l = l(a), e = r === "" ? "." + ts(a, 0) : r, Sa(l) ? (n = "", e != null && (n = e.replace(ka, "$&/") + "/"), Xr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Ci(l) && (l = Pd(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(ka, "$&/") + "/") + e)), t.push(l)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Sa(e)) for (var o = 0; o < e.length; o++) {
    s = e[o];
    var u = r + ts(s, o);
    a += Xr(s, t, n, u, l);
  }
  else if (u = Md(e), typeof u == "function") for (e = u.call(e), o = 0; !(s = e.next()).done; ) s = s.value, u = r + ts(s, o++), a += Xr(s, t, n, u, l);
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
function Dd(e) {
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
var Le = { current: null }, Zr = { transition: null }, Rd = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: Zr, ReactCurrentOwner: Ei };
function Bo() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = { map: Pr, forEach: function(e, t, n) {
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
B.Component = An;
B.Fragment = Sd;
B.Profiler = jd;
B.PureComponent = ki;
B.StrictMode = kd;
B.Suspense = Id;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
B.act = Bo;
B.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = $o({}, e.props), l = e.key, s = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, a = Ei.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
    for (u in t) Wo.call(t, u) && !Qo.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Cr, type: e.type, key: l, ref: s, props: r, _owner: a };
};
B.createContext = function(e) {
  return e = { $$typeof: Cd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ed, _context: e }, e.Consumer = e;
};
B.createElement = Ho;
B.createFactory = function(e) {
  var t = Ho.bind(null, e);
  return t.type = e, t;
};
B.createRef = function() {
  return { current: null };
};
B.forwardRef = function(e) {
  return { $$typeof: Nd, render: e };
};
B.isValidElement = Ci;
B.lazy = function(e) {
  return { $$typeof: Ld, _payload: { _status: -1, _result: e }, _init: Dd };
};
B.memo = function(e, t) {
  return { $$typeof: Td, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function(e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
    e();
  } finally {
    Zr.transition = t;
  }
};
B.unstable_act = Bo;
B.useCallback = function(e, t) {
  return Le.current.useCallback(e, t);
};
B.useContext = function(e) {
  return Le.current.useContext(e);
};
B.useDebugValue = function() {
};
B.useDeferredValue = function(e) {
  return Le.current.useDeferredValue(e);
};
B.useEffect = function(e, t) {
  return Le.current.useEffect(e, t);
};
B.useId = function() {
  return Le.current.useId();
};
B.useImperativeHandle = function(e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function(e, t) {
  return Le.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function(e, t) {
  return Le.current.useLayoutEffect(e, t);
};
B.useMemo = function(e, t) {
  return Le.current.useMemo(e, t);
};
B.useReducer = function(e, t, n) {
  return Le.current.useReducer(e, t, n);
};
B.useRef = function(e) {
  return Le.current.useRef(e);
};
B.useState = function(e) {
  return Le.current.useState(e);
};
B.useSyncExternalStore = function(e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function() {
  return Le.current.useTransition();
};
B.version = "18.3.1";
Ao.exports = B;
var v = Ao.exports;
const ul = /* @__PURE__ */ xd(v);
var Go = { exports: {} }, Be = {}, Ko = { exports: {} }, Yo = {};
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
  function t(C, F) {
    var U = C.length;
    C.push(F);
    e: for (; 0 < U; ) {
      var X = U - 1 >>> 1, R = C[X];
      if (0 < l(R, F)) C[X] = F, C[U] = R, U = X;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var F = C[0], U = C.pop();
    if (U !== F) {
      C[0] = U;
      e: for (var X = 0, R = C.length, q = R >>> 1; X < q; ) {
        var re = 2 * (X + 1) - 1, ct = C[re], be = re + 1, $e = C[be];
        if (0 > l(ct, U)) be < R && 0 > l($e, ct) ? (C[X] = $e, C[be] = U, X = be) : (C[X] = ct, C[re] = U, X = re);
        else if (be < R && 0 > l($e, U)) C[X] = $e, C[be] = U, X = be;
        else break e;
      }
    }
    return F;
  }
  function l(C, F) {
    var U = C.sortIndex - F.sortIndex;
    return U !== 0 ? U : C.id - F.id;
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
  var u = [], c = [], h = 1, g = null, m = 3, y = !1, w = !1, _ = !1, k = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= C) r(c), F.sortIndex = F.expirationTime, t(u, F);
      else break;
      F = n(c);
    }
  }
  function j(C) {
    if (_ = !1, p(C), !w) if (n(u) !== null) w = !0, Q(N);
    else {
      var F = n(c);
      F !== null && A(j, F.startTime - C);
    }
  }
  function N(C, F) {
    w = !1, _ && (_ = !1, f(E), E = -1), y = !0;
    var U = m;
    try {
      for (p(F), g = n(u); g !== null && (!(g.expirationTime > F) || C && !S()); ) {
        var X = g.callback;
        if (typeof X == "function") {
          g.callback = null, m = g.priorityLevel;
          var R = X(g.expirationTime <= F);
          F = e.unstable_now(), typeof R == "function" ? g.callback = R : g === n(u) && r(u), p(F);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var q = !0;
      else {
        var re = n(c);
        re !== null && A(j, re.startTime - F), q = !1;
      }
      return q;
    } finally {
      g = null, m = U, y = !1;
    }
  }
  var M = !1, x = null, E = -1, P = 5, T = -1;
  function S() {
    return !(e.unstable_now() - T < P);
  }
  function b() {
    if (x !== null) {
      var C = e.unstable_now();
      T = C;
      var F = !0;
      try {
        F = x(!0, C);
      } finally {
        F ? W() : (M = !1, x = null);
      }
    } else M = !1;
  }
  var W;
  if (typeof d == "function") W = function() {
    d(b);
  };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(), O = Y.port2;
    Y.port1.onmessage = b, W = function() {
      O.postMessage(null);
    };
  } else W = function() {
    k(b, 0);
  };
  function Q(C) {
    x = C, M || (M = !0, W());
  }
  function A(C, F) {
    E = k(function() {
      C(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, Q(N));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = m;
    }
    var U = m;
    m = F;
    try {
      return C();
    } finally {
      m = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, F) {
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
    var U = m;
    m = C;
    try {
      return F();
    } finally {
      m = U;
    }
  }, e.unstable_scheduleCallback = function(C, F, U) {
    var X = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? X + U : X) : U = X, C) {
      case 1:
        var R = -1;
        break;
      case 2:
        R = 250;
        break;
      case 5:
        R = 1073741823;
        break;
      case 4:
        R = 1e4;
        break;
      default:
        R = 5e3;
    }
    return R = U + R, C = { id: h++, callback: F, priorityLevel: C, startTime: U, expirationTime: R, sortIndex: -1 }, U > X ? (C.sortIndex = U, t(c, C), n(u) === null && C === n(c) && (_ ? (f(E), E = -1) : _ = !0, A(j, U - X))) : (C.sortIndex = R, t(u, C), w || y || (w = !0, Q(N))), C;
  }, e.unstable_shouldYield = S, e.unstable_wrapCallback = function(C) {
    var F = m;
    return function() {
      var U = m;
      m = F;
      try {
        return C.apply(this, arguments);
      } finally {
        m = U;
      }
    };
  };
})(Yo);
Ko.exports = Yo;
var zd = Ko.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fd = v, He = zd;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Xo = /* @__PURE__ */ new Set(), or = {};
function sn(e, t) {
  Tn(e, t), Tn(e + "Capture", t);
}
function Tn(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) Xo.add(t[e]);
}
var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ns = Object.prototype.hasOwnProperty, Ad = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ja = {}, Ea = {};
function Od(e) {
  return Ns.call(Ea, e) ? !0 : Ns.call(ja, e) ? !1 : Ad.test(e) ? Ea[e] = !0 : (ja[e] = !0, !1);
}
function $d(e, t, n, r) {
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
function Ud(e, t, n, r) {
  if (t === null || typeof t > "u" || $d(e, t, n, r)) return !0;
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
function Me(e, t, n, r, l, s, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = a;
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Se[e] = new Me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Se[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Se[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Se[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Se[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Se[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Se[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Se[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Se[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  Se[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ni, Ii);
  Se[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ni, Ii);
  Se[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Se[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Se[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ti(e, t, n, r) {
  var l = Se.hasOwnProperty(t) ? Se[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ud(t, n, l, r) && (n = null), r || l === null ? Od(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, br = Symbol.for("react.element"), dn = Symbol.for("react.portal"), fn = Symbol.for("react.fragment"), Li = Symbol.for("react.strict_mode"), Is = Symbol.for("react.profiler"), Zo = Symbol.for("react.provider"), Jo = Symbol.for("react.context"), Mi = Symbol.for("react.forward_ref"), Ts = Symbol.for("react.suspense"), Ls = Symbol.for("react.suspense_list"), Pi = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), qo = Symbol.for("react.offscreen"), Ca = Symbol.iterator;
function Un(e) {
  return e === null || typeof e != "object" ? null : (e = Ca && e[Ca] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, ns;
function Yn(e) {
  if (ns === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ns = t && t[1] || "";
  }
  return `
` + ns + e;
}
var rs = !1;
function ls(e, t) {
  if (!e || rs) return "";
  rs = !0;
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
    rs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function Vd(e) {
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
      return e = ls(e.type, !1), e;
    case 11:
      return e = ls(e.type.render, !1), e;
    case 1:
      return e = ls(e.type, !0), e;
    default:
      return "";
  }
}
function Ms(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fn:
      return "Fragment";
    case dn:
      return "Portal";
    case Is:
      return "Profiler";
    case Li:
      return "StrictMode";
    case Ts:
      return "Suspense";
    case Ls:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Jo:
      return (e.displayName || "Context") + ".Consumer";
    case Zo:
      return (e._context.displayName || "Context") + ".Provider";
    case Mi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Pi:
      return t = e.displayName || null, t !== null ? t : Ms(e.type) || "Memo";
    case Nt:
      t = e._payload, e = e._init;
      try {
        return Ms(e(t));
      } catch {
      }
  }
  return null;
}
function Wd(e) {
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
      return Ms(t);
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
function Ut(e) {
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
function eu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Qd(e) {
  var t = eu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Qd(e));
}
function tu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = eu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function cl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ps(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Na(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ut(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function nu(e, t) {
  t = t.checked, t != null && Ti(e, "checked", t, !1);
}
function bs(e, t) {
  nu(e, t);
  var n = Ut(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ds(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ds(e, t.type, Ut(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ia(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ds(e, t, n) {
  (t !== "number" || cl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ut(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ta(e, t) {
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
  e._wrapperState = { initialValue: Ut(n) };
}
function ru(e, t) {
  var n = Ut(t.value), r = Ut(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function La(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function lu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? lu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Rr, su = function(e) {
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
}, Hd = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function(e) {
  Hd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
  });
});
function iu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
}
function au(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = iu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Bd = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Fs(e, t) {
  if (t) {
    if (Bd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function As(e, t) {
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
var $s = null, jn = null, En = null;
function Ma(e) {
  if (e = Tr(e)) {
    if (typeof $s != "function") throw Error(I(280));
    var t = e.stateNode;
    t && (t = Ol(t), $s(e.stateNode, e.type, t));
  }
}
function ou(e) {
  jn ? En ? En.push(e) : En = [e] : jn = e;
}
function uu() {
  if (jn) {
    var e = jn, t = En;
    if (En = jn = null, Ma(e), t) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function cu(e, t) {
  return e(t);
}
function du() {
}
var ss = !1;
function fu(e, t, n) {
  if (ss) return e(t, n);
  ss = !0;
  try {
    return cu(e, t, n);
  } finally {
    ss = !1, (jn !== null || En !== null) && (du(), uu());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ol(n);
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
var Us = !1;
if (_t) try {
  var Vn = {};
  Object.defineProperty(Vn, "passive", { get: function() {
    Us = !0;
  } }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
} catch {
  Us = !1;
}
function Gd(e, t, n, r, l, s, a, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var er = !1, dl = null, fl = !1, Vs = null, Kd = { onError: function(e) {
  er = !0, dl = e;
} };
function Yd(e, t, n, r, l, s, a, o, u) {
  er = !1, dl = null, Gd.apply(Kd, arguments);
}
function Xd(e, t, n, r, l, s, a, o, u) {
  if (Yd.apply(this, arguments), er) {
    if (er) {
      var c = dl;
      er = !1, dl = null;
    } else throw Error(I(198));
    fl || (fl = !0, Vs = c);
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
function pu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pa(e) {
  if (an(e) !== e) throw Error(I(188));
}
function Zd(e) {
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
        if (s === n) return Pa(l), e;
        if (s === r) return Pa(l), t;
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
function mu(e) {
  return e = Zd(e), e !== null ? hu(e) : null;
}
function hu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gu = He.unstable_scheduleCallback, ba = He.unstable_cancelCallback, Jd = He.unstable_shouldYield, qd = He.unstable_requestPaint, pe = He.unstable_now, ef = He.unstable_getCurrentPriorityLevel, Di = He.unstable_ImmediatePriority, yu = He.unstable_UserBlockingPriority, pl = He.unstable_NormalPriority, tf = He.unstable_LowPriority, vu = He.unstable_IdlePriority, Rl = null, mt = null;
function nf(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function") try {
    mt.onCommitFiberRoot(Rl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var at = Math.clz32 ? Math.clz32 : sf, rf = Math.log, lf = Math.LN2;
function sf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (rf(e) / lf | 0) | 0;
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
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - at(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function af(e, t) {
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
function of(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var a = 31 - at(s), o = 1 << a, u = l[a];
    u === -1 ? (!(o & n) || o & r) && (l[a] = af(o, t)) : u <= t && (e.expiredLanes |= o), s &= ~o;
  }
}
function Ws(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wu() {
  var e = zr;
  return zr <<= 1, !(zr & 4194240) && (zr = 64), e;
}
function is(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
}
function uf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - at(n), s = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~s;
  }
}
function Ri(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ne = 0;
function xu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var _u, zi, Su, ku, ju, Qs = !1, Ar = [], bt = null, Dt = null, Rt = null, dr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), Tt = [], cf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Da(e, t) {
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
function df(e, t, n, r, l) {
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
function Eu(e) {
  var t = Yt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = pu(n), t !== null) {
          e.blockedOn = t, ju(e.priority, function() {
            Su(n);
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
    var n = Hs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Os = r, n.target.dispatchEvent(r), Os = null;
    } else return t = Tr(n), t !== null && zi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  Jr(e) && n.delete(t);
}
function ff() {
  Qs = !1, bt !== null && Jr(bt) && (bt = null), Dt !== null && Jr(Dt) && (Dt = null), Rt !== null && Jr(Rt) && (Rt = null), dr.forEach(Ra), fr.forEach(Ra);
}
function Qn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Qs || (Qs = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, ff)));
}
function pr(e) {
  function t(l) {
    return Qn(l, e);
  }
  if (0 < Ar.length) {
    Qn(Ar[0], e);
    for (var n = 1; n < Ar.length; n++) {
      var r = Ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (bt !== null && Qn(bt, e), Dt !== null && Qn(Dt, e), Rt !== null && Qn(Rt, e), dr.forEach(t), fr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Eu(n), n.blockedOn === null && Tt.shift();
}
var Cn = Et.ReactCurrentBatchConfig, hl = !0;
function pf(e, t, n, r) {
  var l = ne, s = Cn.transition;
  Cn.transition = null;
  try {
    ne = 1, Fi(e, t, n, r);
  } finally {
    ne = l, Cn.transition = s;
  }
}
function mf(e, t, n, r) {
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
    var l = Hs(e, t, n, r);
    if (l === null) gs(e, t, r, gl, n), Da(e, r);
    else if (df(l, e, t, n, r)) r.stopPropagation();
    else if (Da(e, r), t & 4 && -1 < cf.indexOf(e)) {
      for (; l !== null; ) {
        var s = Tr(l);
        if (s !== null && _u(s), s = Hs(e, t, n, r), s === null && gs(e, t, r, gl, n), s === l) break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else gs(e, t, r, null, n);
  }
}
var gl = null;
function Hs(e, t, n, r) {
  if (gl = null, e = bi(r), e = Yt(e), e !== null) if (t = an(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = pu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return gl = e, null;
}
function Cu(e) {
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
      switch (ef()) {
        case Di:
          return 1;
        case yu:
          return 4;
        case pl:
        case tf:
          return 16;
        case vu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null, Ai = null, qr = null;
function Nu() {
  if (qr) return qr;
  var e, t = Ai, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++) ;
  return qr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function el(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Or() {
  return !0;
}
function za() {
  return !1;
}
function Ge(e) {
  function t(n, r, l, s, a) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = s, this.target = a, this.currentTarget = null;
    for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(s) : s[o]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Or : za, this.isPropagationStopped = za, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Or);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Or);
  }, persist: function() {
  }, isPersistent: Or }), t;
}
var On = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Oi = Ge(On), Ir = ce({}, On, { view: 0, detail: 0 }), hf = Ge(Ir), as, os, Hn, zl = ce({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $i, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (as = e.screenX - Hn.screenX, os = e.screenY - Hn.screenY) : os = as = 0, Hn = e), as);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : os;
} }), Fa = Ge(zl), gf = ce({}, zl, { dataTransfer: 0 }), yf = Ge(gf), vf = ce({}, Ir, { relatedTarget: 0 }), us = Ge(vf), wf = ce({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xf = Ge(wf), _f = ce({}, On, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Sf = Ge(_f), kf = ce({}, On, { data: 0 }), Aa = Ge(kf), jf = {
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
}, Ef = {
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
}, Cf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Nf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cf[e]) ? !!t[e] : !1;
}
function $i() {
  return Nf;
}
var If = ce({}, Ir, { key: function(e) {
  if (e.key) {
    var t = jf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = el(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ef[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $i, charCode: function(e) {
  return e.type === "keypress" ? el(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? el(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Tf = Ge(If), Lf = ce({}, zl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oa = Ge(Lf), Mf = ce({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $i }), Pf = Ge(Mf), bf = ce({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Df = Ge(bf), Rf = ce({}, zl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zf = Ge(Rf), Ff = [9, 13, 27, 32], Ui = _t && "CompositionEvent" in window, tr = null;
_t && "documentMode" in document && (tr = document.documentMode);
var Af = _t && "TextEvent" in window && !tr, Iu = _t && (!Ui || tr && 8 < tr && 11 >= tr), $a = " ", Ua = !1;
function Tu(e, t) {
  switch (e) {
    case "keyup":
      return Ff.indexOf(t.keyCode) !== -1;
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
function Lu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var pn = !1;
function Of(e, t) {
  switch (e) {
    case "compositionend":
      return Lu(t);
    case "keypress":
      return t.which !== 32 ? null : (Ua = !0, $a);
    case "textInput":
      return e = t.data, e === $a && Ua ? null : e;
    default:
      return null;
  }
}
function $f(e, t) {
  if (pn) return e === "compositionend" || !Ui && Tu(e, t) ? (e = Nu(), qr = Ai = Mt = null, pn = !1, e) : null;
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
      return Iu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Uf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Uf[e.type] : t === "textarea";
}
function Mu(e, t, n, r) {
  ou(r), t = yl(t, "onChange"), 0 < t.length && (n = new Oi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var nr = null, mr = null;
function Vf(e) {
  Vu(e, 0);
}
function Fl(e) {
  var t = gn(e);
  if (tu(t)) return e;
}
function Wf(e, t) {
  if (e === "change") return t;
}
var Pu = !1;
if (_t) {
  var cs;
  if (_t) {
    var ds = "oninput" in document;
    if (!ds) {
      var Wa = document.createElement("div");
      Wa.setAttribute("oninput", "return;"), ds = typeof Wa.oninput == "function";
    }
    cs = ds;
  } else cs = !1;
  Pu = cs && (!document.documentMode || 9 < document.documentMode);
}
function Qa() {
  nr && (nr.detachEvent("onpropertychange", bu), mr = nr = null);
}
function bu(e) {
  if (e.propertyName === "value" && Fl(mr)) {
    var t = [];
    Mu(t, mr, e, bi(e)), fu(Vf, t);
  }
}
function Qf(e, t, n) {
  e === "focusin" ? (Qa(), nr = t, mr = n, nr.attachEvent("onpropertychange", bu)) : e === "focusout" && Qa();
}
function Hf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fl(mr);
}
function Bf(e, t) {
  if (e === "click") return Fl(t);
}
function Gf(e, t) {
  if (e === "input" || e === "change") return Fl(t);
}
function Kf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ut = typeof Object.is == "function" ? Object.is : Kf;
function hr(e, t) {
  if (ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ns.call(t, l) || !ut(e[l], t[l])) return !1;
  }
  return !0;
}
function Ha(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ba(e, t) {
  var n = Ha(e);
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
    n = Ha(n);
  }
}
function Du(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Du(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ru() {
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
function Vi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Yf(e) {
  var t = Ru(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Du(n.ownerDocument.documentElement, n)) {
    if (r !== null && Vi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, s = Math.min(r.start, l);
        r = r.end === void 0 ? s : Math.min(r.end, l), !e.extend && s > r && (l = r, r = s, s = l), l = Ba(n, s);
        var a = Ba(
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
var Xf = _t && "documentMode" in document && 11 >= document.documentMode, mn = null, Bs = null, rr = null, Gs = !1;
function Ga(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gs || mn == null || mn !== cl(r) || (r = mn, "selectionStart" in r && Vi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), rr && hr(rr, r) || (rr = r, r = yl(Bs, "onSelect"), 0 < r.length && (t = new Oi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
}
function $r(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var hn = { animationend: $r("Animation", "AnimationEnd"), animationiteration: $r("Animation", "AnimationIteration"), animationstart: $r("Animation", "AnimationStart"), transitionend: $r("Transition", "TransitionEnd") }, fs = {}, zu = {};
_t && (zu = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
function Al(e) {
  if (fs[e]) return fs[e];
  if (!hn[e]) return e;
  var t = hn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in zu) return fs[e] = t[n];
  return e;
}
var Fu = Al("animationend"), Au = Al("animationiteration"), Ou = Al("animationstart"), $u = Al("transitionend"), Uu = /* @__PURE__ */ new Map(), Ka = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) {
  Uu.set(e, t), sn(t, [e]);
}
for (var ps = 0; ps < Ka.length; ps++) {
  var ms = Ka[ps], Zf = ms.toLowerCase(), Jf = ms[0].toUpperCase() + ms.slice(1);
  Wt(Zf, "on" + Jf);
}
Wt(Fu, "onAnimationEnd");
Wt(Au, "onAnimationIteration");
Wt(Ou, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt($u, "onTransitionEnd");
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
var Jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function Ya(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Xd(r, t, void 0, e), e.currentTarget = null;
}
function Vu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var o = r[a], u = o.instance, c = o.currentTarget;
        if (o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Ya(l, o, c), s = u;
      }
      else for (a = 0; a < r.length; a++) {
        if (o = r[a], u = o.instance, c = o.currentTarget, o = o.listener, u !== s && l.isPropagationStopped()) break e;
        Ya(l, o, c), s = u;
      }
    }
  }
  if (fl) throw e = Vs, fl = !1, Vs = null, e;
}
function se(e, t) {
  var n = t[Js];
  n === void 0 && (n = t[Js] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Wu(t, e, 2, !1), n.add(r));
}
function hs(e, t, n) {
  var r = 0;
  t && (r |= 4), Wu(n, e, r, t);
}
var Ur = "_reactListening" + Math.random().toString(36).slice(2);
function gr(e) {
  if (!e[Ur]) {
    e[Ur] = !0, Xo.forEach(function(n) {
      n !== "selectionchange" && (qf.has(n) || hs(n, !1, e), hs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ur] || (t[Ur] = !0, hs("selectionchange", !1, t));
  }
}
function Wu(e, t, n, r) {
  switch (Cu(t)) {
    case 1:
      var l = pf;
      break;
    case 4:
      l = mf;
      break;
    default:
      l = Fi;
  }
  n = l.bind(null, t, n, e), l = void 0, !Us || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function gs(e, t, n, r, l) {
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
  fu(function() {
    var c = s, h = bi(n), g = [];
    e: {
      var m = Uu.get(e);
      if (m !== void 0) {
        var y = Oi, w = e;
        switch (e) {
          case "keypress":
            if (el(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Tf;
            break;
          case "focusin":
            w = "focus", y = us;
            break;
          case "focusout":
            w = "blur", y = us;
            break;
          case "beforeblur":
          case "afterblur":
            y = us;
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
            y = Fa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = yf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Pf;
            break;
          case Fu:
          case Au:
          case Ou:
            y = xf;
            break;
          case $u:
            y = Df;
            break;
          case "scroll":
            y = hf;
            break;
          case "wheel":
            y = zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Sf;
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
        var _ = (t & 4) !== 0, k = !_ && e === "scroll", f = _ ? m !== null ? m + "Capture" : null : m;
        _ = [];
        for (var d = c, p; d !== null; ) {
          p = d;
          var j = p.stateNode;
          if (p.tag === 5 && j !== null && (p = j, f !== null && (j = cr(d, f), j != null && _.push(yr(d, j, p)))), k) break;
          d = d.return;
        }
        0 < _.length && (m = new y(m, w, null, n, h), g.push({ event: m, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== Os && (w = n.relatedTarget || n.fromElement) && (Yt(w) || w[St])) break e;
        if ((y || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = c, w = w ? Yt(w) : null, w !== null && (k = an(w), w !== k || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = c), y !== w)) {
          if (_ = Fa, j = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Oa, j = "onPointerLeave", f = "onPointerEnter", d = "pointer"), k = y == null ? m : gn(y), p = w == null ? m : gn(w), m = new _(j, d + "leave", y, n, h), m.target = k, m.relatedTarget = p, j = null, Yt(h) === c && (_ = new _(f, d + "enter", w, n, h), _.target = p, _.relatedTarget = k, j = _), k = j, y && w) t: {
            for (_ = y, f = w, d = 0, p = _; p; p = cn(p)) d++;
            for (p = 0, j = f; j; j = cn(j)) p++;
            for (; 0 < d - p; ) _ = cn(_), d--;
            for (; 0 < p - d; ) f = cn(f), p--;
            for (; d--; ) {
              if (_ === f || f !== null && _ === f.alternate) break t;
              _ = cn(_), f = cn(f);
            }
            _ = null;
          }
          else _ = null;
          y !== null && Xa(g, m, y, _, !1), w !== null && k !== null && Xa(g, k, w, _, !0);
        }
      }
      e: {
        if (m = c ? gn(c) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var N = Wf;
        else if (Va(m)) if (Pu) N = Gf;
        else {
          N = Hf;
          var M = Qf;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Bf);
        if (N && (N = N(e, c))) {
          Mu(g, N, n, h);
          break e;
        }
        M && M(e, m, c), e === "focusout" && (M = m._wrapperState) && M.controlled && m.type === "number" && Ds(m, "number", m.value);
      }
      switch (M = c ? gn(c) : window, e) {
        case "focusin":
          (Va(M) || M.contentEditable === "true") && (mn = M, Bs = c, rr = null);
          break;
        case "focusout":
          rr = Bs = mn = null;
          break;
        case "mousedown":
          Gs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Gs = !1, Ga(g, n, h);
          break;
        case "selectionchange":
          if (Xf) break;
        case "keydown":
        case "keyup":
          Ga(g, n, h);
      }
      var x;
      if (Ui) e: {
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
      else pn ? Tu(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Iu && n.locale !== "ko" && (pn || E !== "onCompositionStart" ? E === "onCompositionEnd" && pn && (x = Nu()) : (Mt = h, Ai = "value" in Mt ? Mt.value : Mt.textContent, pn = !0)), M = yl(c, E), 0 < M.length && (E = new Aa(E, e, null, n, h), g.push({ event: E, listeners: M }), x ? E.data = x : (x = Lu(n), x !== null && (E.data = x)))), (x = Af ? Of(e, n) : $f(e, n)) && (c = yl(c, "onBeforeInput"), 0 < c.length && (h = new Aa("onBeforeInput", "beforeinput", null, n, h), g.push({ event: h, listeners: c }), h.data = x));
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
function Xa(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n, u = o.alternate, c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 && c !== null && (o = c, l ? (u = cr(n, s), u != null && a.unshift(yr(n, u, o))) : l || (u = cr(n, s), u != null && a.push(yr(n, u, o)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var ep = /\r\n?/g, tp = /\u0000|\uFFFD/g;
function Za(e) {
  return (typeof e == "string" ? e : "" + e).replace(ep, `
`).replace(tp, "");
}
function Vr(e, t, n) {
  if (t = Za(t), Za(e) !== t && n) throw Error(I(425));
}
function vl() {
}
var Ks = null, Ys = null;
function Xs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Zs = typeof setTimeout == "function" ? setTimeout : void 0, np = typeof clearTimeout == "function" ? clearTimeout : void 0, Ja = typeof Promise == "function" ? Promise : void 0, rp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ja < "u" ? function(e) {
  return Ja.resolve(null).then(e).catch(lp);
} : Zs;
function lp(e) {
  setTimeout(function() {
    throw e;
  });
}
function ys(e, t) {
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
function qa(e) {
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
var $n = Math.random().toString(36).slice(2), pt = "__reactFiber$" + $n, vr = "__reactProps$" + $n, St = "__reactContainer$" + $n, Js = "__reactEvents$" + $n, sp = "__reactListeners$" + $n, ip = "__reactHandles$" + $n;
function Yt(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[St] || n[pt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = qa(e); e !== null; ) {
        if (n = e[pt]) return n;
        e = qa(e);
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
function Ol(e) {
  return e[vr] || null;
}
var qs = [], yn = -1;
function Qt(e) {
  return { current: e };
}
function ie(e) {
  0 > yn || (e.current = qs[yn], qs[yn] = null, yn--);
}
function le(e, t) {
  yn++, qs[yn] = e.current, e.current = t;
}
var Vt = {}, Ne = Qt(Vt), Fe = Qt(!1), en = Vt;
function Ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, s;
  for (s in n) l[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ae(e) {
  return e = e.childContextTypes, e != null;
}
function wl() {
  ie(Fe), ie(Ne);
}
function eo(e, t, n) {
  if (Ne.current !== Vt) throw Error(I(168));
  le(Ne, t), le(Fe, n);
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(I(108, Wd(e) || "Unknown", l));
  return ce({}, n, r);
}
function xl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, en = Ne.current, le(Ne, e), le(Fe, Fe.current), !0;
}
function to(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n ? (e = Qu(e, t, en), r.__reactInternalMemoizedMergedChildContext = e, ie(Fe), ie(Ne), le(Ne, e)) : ie(Fe), le(Fe, n);
}
var yt = null, $l = !1, vs = !1;
function Hu(e) {
  yt === null ? yt = [e] : yt.push(e);
}
function ap(e) {
  $l = !0, Hu(e);
}
function Ht() {
  if (!vs && yt !== null) {
    vs = !0;
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
      throw yt !== null && (yt = yt.slice(e + 1)), gu(Di, Ht), l;
    } finally {
      ne = t, vs = !1;
    }
  }
  return null;
}
var vn = [], wn = 0, _l = null, Sl = 0, Ke = [], Ye = 0, tn = null, vt = 1, wt = "";
function Gt(e, t) {
  vn[wn++] = Sl, vn[wn++] = _l, _l = e, Sl = t;
}
function Bu(e, t, n) {
  Ke[Ye++] = vt, Ke[Ye++] = wt, Ke[Ye++] = tn, tn = e;
  var r = vt;
  e = wt;
  var l = 32 - at(r) - 1;
  r &= ~(1 << l), n += 1;
  var s = 32 - at(t) + l;
  if (30 < s) {
    var a = l - l % 5;
    s = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, vt = 1 << 32 - at(t) + l | n << l | r, wt = s + e;
  } else vt = 1 << s | n << l | r, wt = e;
}
function Wi(e) {
  e.return !== null && (Gt(e, 1), Bu(e, 1, 0));
}
function Qi(e) {
  for (; e === _l; ) _l = vn[--wn], vn[wn] = null, Sl = vn[--wn], vn[wn] = null;
  for (; e === tn; ) tn = Ke[--Ye], Ke[Ye] = null, wt = Ke[--Ye], Ke[Ye] = null, vt = Ke[--Ye], Ke[Ye] = null;
}
var We = null, Ve = null, ae = !1, st = null;
function Gu(e, t) {
  var n = Xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function no(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, Ve = zt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, Ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tn !== null ? { id: vt, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, Ve = null, !0) : !1;
    default:
      return !1;
  }
}
function ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ti(e) {
  if (ae) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!no(e, t)) {
        if (ei(e)) throw Error(I(418));
        t = zt(n.nextSibling);
        var r = We;
        t && no(e, t) ? Gu(r, n) : (e.flags = e.flags & -4097 | 2, ae = !1, We = e);
      }
    } else {
      if (ei(e)) throw Error(I(418));
      e.flags = e.flags & -4097 | 2, ae = !1, We = e;
    }
  }
}
function ro(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  We = e;
}
function Wr(e) {
  if (e !== We) return !1;
  if (!ae) return ro(e), ae = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xs(e.type, e.memoizedProps)), t && (t = Ve)) {
    if (ei(e)) throw Ku(), Error(I(418));
    for (; t; ) Gu(e, t), t = zt(t.nextSibling);
  }
  if (ro(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = zt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = We ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ku() {
  for (var e = Ve; e; ) e = zt(e.nextSibling);
}
function Mn() {
  Ve = We = null, ae = !1;
}
function Hi(e) {
  st === null ? st = [e] : st.push(e);
}
var op = Et.ReactCurrentBatchConfig;
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
function lo(e) {
  var t = e._init;
  return t(e._payload);
}
function Yu(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [d], f.flags |= 16) : p.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), d = d.sibling;
    return null;
  }
  function r(f, d) {
    for (f = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
    return f;
  }
  function l(f, d) {
    return f = $t(f, d), f.index = 0, f.sibling = null, f;
  }
  function s(f, d, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < d ? (f.flags |= 2, d) : p) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, d, p, j) {
    return d === null || d.tag !== 6 ? (d = Es(p, f.mode, j), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function u(f, d, p, j) {
    var N = p.type;
    return N === fn ? h(f, d, p.props.children, j, p.key) : d !== null && (d.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Nt && lo(N) === d.type) ? (j = l(d, p.props), j.ref = Bn(f, d, p), j.return = f, j) : (j = al(p.type, p.key, p.props, null, f.mode, j), j.ref = Bn(f, d, p), j.return = f, j);
  }
  function c(f, d, p, j) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Cs(p, f.mode, j), d.return = f, d) : (d = l(d, p.children || []), d.return = f, d);
  }
  function h(f, d, p, j, N) {
    return d === null || d.tag !== 7 ? (d = qt(p, f.mode, j, N), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function g(f, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Es("" + d, f.mode, p), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case br:
          return p = al(d.type, d.key, d.props, null, f.mode, p), p.ref = Bn(f, null, d), p.return = f, p;
        case dn:
          return d = Cs(d, f.mode, p), d.return = f, d;
        case Nt:
          var j = d._init;
          return g(f, j(d._payload), p);
      }
      if (Xn(d) || Un(d)) return d = qt(d, f.mode, p, null), d.return = f, d;
      Qr(f, d);
    }
    return null;
  }
  function m(f, d, p, j) {
    var N = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : o(f, d, "" + p, j);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case br:
          return p.key === N ? u(f, d, p, j) : null;
        case dn:
          return p.key === N ? c(f, d, p, j) : null;
        case Nt:
          return N = p._init, m(
            f,
            d,
            N(p._payload),
            j
          );
      }
      if (Xn(p) || Un(p)) return N !== null ? null : h(f, d, p, j, null);
      Qr(f, p);
    }
    return null;
  }
  function y(f, d, p, j, N) {
    if (typeof j == "string" && j !== "" || typeof j == "number") return f = f.get(p) || null, o(d, f, "" + j, N);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case br:
          return f = f.get(j.key === null ? p : j.key) || null, u(d, f, j, N);
        case dn:
          return f = f.get(j.key === null ? p : j.key) || null, c(d, f, j, N);
        case Nt:
          var M = j._init;
          return y(f, d, p, M(j._payload), N);
      }
      if (Xn(j) || Un(j)) return f = f.get(p) || null, h(d, f, j, N, null);
      Qr(d, j);
    }
    return null;
  }
  function w(f, d, p, j) {
    for (var N = null, M = null, x = d, E = d = 0, P = null; x !== null && E < p.length; E++) {
      x.index > E ? (P = x, x = null) : P = x.sibling;
      var T = m(f, x, p[E], j);
      if (T === null) {
        x === null && (x = P);
        break;
      }
      e && x && T.alternate === null && t(f, x), d = s(T, d, E), M === null ? N = T : M.sibling = T, M = T, x = P;
    }
    if (E === p.length) return n(f, x), ae && Gt(f, E), N;
    if (x === null) {
      for (; E < p.length; E++) x = g(f, p[E], j), x !== null && (d = s(x, d, E), M === null ? N = x : M.sibling = x, M = x);
      return ae && Gt(f, E), N;
    }
    for (x = r(f, x); E < p.length; E++) P = y(x, f, E, p[E], j), P !== null && (e && P.alternate !== null && x.delete(P.key === null ? E : P.key), d = s(P, d, E), M === null ? N = P : M.sibling = P, M = P);
    return e && x.forEach(function(S) {
      return t(f, S);
    }), ae && Gt(f, E), N;
  }
  function _(f, d, p, j) {
    var N = Un(p);
    if (typeof N != "function") throw Error(I(150));
    if (p = N.call(p), p == null) throw Error(I(151));
    for (var M = N = null, x = d, E = d = 0, P = null, T = p.next(); x !== null && !T.done; E++, T = p.next()) {
      x.index > E ? (P = x, x = null) : P = x.sibling;
      var S = m(f, x, T.value, j);
      if (S === null) {
        x === null && (x = P);
        break;
      }
      e && x && S.alternate === null && t(f, x), d = s(S, d, E), M === null ? N = S : M.sibling = S, M = S, x = P;
    }
    if (T.done) return n(
      f,
      x
    ), ae && Gt(f, E), N;
    if (x === null) {
      for (; !T.done; E++, T = p.next()) T = g(f, T.value, j), T !== null && (d = s(T, d, E), M === null ? N = T : M.sibling = T, M = T);
      return ae && Gt(f, E), N;
    }
    for (x = r(f, x); !T.done; E++, T = p.next()) T = y(x, f, E, T.value, j), T !== null && (e && T.alternate !== null && x.delete(T.key === null ? E : T.key), d = s(T, d, E), M === null ? N = T : M.sibling = T, M = T);
    return e && x.forEach(function(b) {
      return t(f, b);
    }), ae && Gt(f, E), N;
  }
  function k(f, d, p, j) {
    if (typeof p == "object" && p !== null && p.type === fn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case br:
          e: {
            for (var N = p.key, M = d; M !== null; ) {
              if (M.key === N) {
                if (N = p.type, N === fn) {
                  if (M.tag === 7) {
                    n(f, M.sibling), d = l(M, p.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (M.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Nt && lo(N) === M.type) {
                  n(f, M.sibling), d = l(M, p.props), d.ref = Bn(f, M, p), d.return = f, f = d;
                  break e;
                }
                n(f, M);
                break;
              } else t(f, M);
              M = M.sibling;
            }
            p.type === fn ? (d = qt(p.props.children, f.mode, j, p.key), d.return = f, f = d) : (j = al(p.type, p.key, p.props, null, f.mode, j), j.ref = Bn(f, d, p), j.return = f, f = j);
          }
          return a(f);
        case dn:
          e: {
            for (M = p.key; d !== null; ) {
              if (d.key === M) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(f, d.sibling), d = l(d, p.children || []), d.return = f, f = d;
                break e;
              } else {
                n(f, d);
                break;
              }
              else t(f, d);
              d = d.sibling;
            }
            d = Cs(p, f.mode, j), d.return = f, f = d;
          }
          return a(f);
        case Nt:
          return M = p._init, k(f, d, M(p._payload), j);
      }
      if (Xn(p)) return w(f, d, p, j);
      if (Un(p)) return _(f, d, p, j);
      Qr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, p), d.return = f, f = d) : (n(f, d), d = Es(p, f.mode, j), d.return = f, f = d), a(f)) : n(f, d);
  }
  return k;
}
var Pn = Yu(!0), Xu = Yu(!1), kl = Qt(null), jl = null, xn = null, Bi = null;
function Gi() {
  Bi = xn = jl = null;
}
function Ki(e) {
  var t = kl.current;
  ie(kl), e._currentValue = t;
}
function ni(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Nn(e, t) {
  jl = e, Bi = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0), e.firstContext = null);
}
function Je(e) {
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
function Zu(e, t, n, r) {
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
function Ju(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function xt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Z & 2) {
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
function so(e, t) {
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
    var u = o, c = u.next;
    u.next = null, a === null ? s = c : a.next = c, a = u;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, o = h.lastBaseUpdate, o !== a && (o === null ? h.firstBaseUpdate = c : o.next = c, h.lastBaseUpdate = u));
  }
  if (s !== null) {
    var g = l.baseState;
    a = 0, h = c = u = null, o = s;
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
          var w = e, _ = o;
          switch (m = t, y = n, _.tag) {
            case 1:
              if (w = _.payload, typeof w == "function") {
                g = w.call(y, g, m);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = _.payload, m = typeof w == "function" ? w.call(y, g, m) : w, m == null) break e;
              g = ce({}, g, m);
              break e;
            case 2:
              It = !0;
          }
        }
        o.callback !== null && o.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [o] : m.push(o));
      } else y = { eventTime: y, lane: m, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, h === null ? (c = h = y, u = g) : h = h.next = y, a |= m;
      if (o = o.next, o === null) {
        if (o = l.shared.pending, o === null) break;
        m = o, o = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (u = g), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        a |= l.lane, l = l.next;
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    rn |= a, e.lanes = a, e.memoizedState = g;
  }
}
function io(e, t, n) {
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
      t = (t = t.documentElement) ? t.namespaceURI : zs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = zs(t, e);
  }
  ie(ht), le(ht, t);
}
function bn() {
  ie(ht), ie(wr), ie(xr);
}
function qu(e) {
  Zt(xr.current);
  var t = Zt(ht.current), n = zs(t, e.type);
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
var ws = [];
function qi() {
  for (var e = 0; e < ws.length; e++) ws[e]._workInProgressVersionPrimary = null;
  ws.length = 0;
}
var nl = Et.ReactCurrentDispatcher, xs = Et.ReactCurrentBatchConfig, nn = 0, ue = null, he = null, ve = null, Nl = !1, lr = !1, _r = 0, up = 0;
function ke() {
  throw Error(I(321));
}
function ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
  return !0;
}
function ta(e, t, n, r, l, s) {
  if (nn = s, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nl.current = e === null || e.memoizedState === null ? pp : mp, e = n(r, l), lr) {
    s = 0;
    do {
      if (lr = !1, _r = 0, 25 <= s) throw Error(I(301));
      s += 1, ve = he = null, t.updateQueue = null, nl.current = hp, e = n(r, l);
    } while (lr);
  }
  if (nl.current = Il, t = he !== null && he.next !== null, nn = 0, ve = he = ue = null, Nl = !1, t) throw Error(I(300));
  return e;
}
function na() {
  var e = _r !== 0;
  return _r = 0, e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? ue.memoizedState = ve = e : ve = ve.next = e, ve;
}
function qe() {
  if (he === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ve === null ? ue.memoizedState : ve.next;
  if (t !== null) ve = t, he = e;
  else {
    if (e === null) throw Error(I(310));
    he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, ve === null ? ue.memoizedState = ve = e : ve = ve.next = e;
  }
  return ve;
}
function Sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _s(e) {
  var t = qe(), n = t.queue;
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
    var o = a = null, u = null, c = s;
    do {
      var h = c.lane;
      if ((nn & h) === h) u !== null && (u = u.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var g = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        u === null ? (o = u = g, a = r) : u = u.next = g, ue.lanes |= h, rn |= h;
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? a = r : u.next = o, ut(r, t.memoizedState) || (ze = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      s = l.lane, ue.lanes |= s, rn |= s, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ss(e) {
  var t = qe(), n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = l = l.next;
    do
      s = e(s, a.action), a = a.next;
    while (a !== l);
    ut(s, t.memoizedState) || (ze = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function ec() {
}
function tc(e, t) {
  var n = ue, r = qe(), l = t(), s = !ut(r.memoizedState, l);
  if (s && (r.memoizedState = l, ze = !0), r = r.queue, ra(lc.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ve !== null && ve.memoizedState.tag & 1) {
    if (n.flags |= 2048, kr(9, rc.bind(null, n, r, l, t), void 0, null), we === null) throw Error(I(349));
    nn & 30 || nc(n, t, l);
  }
  return l;
}
function nc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function rc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, sc(t) && ic(e);
}
function lc(e, t, n) {
  return n(function() {
    sc(t) && ic(e);
  });
}
function sc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ut(e, n);
  } catch {
    return !0;
  }
}
function ic(e) {
  var t = kt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function ao(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = fp.bind(null, ue, e), [t.memoizedState, e];
}
function kr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ac() {
  return qe().memoizedState;
}
function rl(e, t, n, r) {
  var l = ft();
  ue.flags |= e, l.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ul(e, t, n, r) {
  var l = qe();
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
function oo(e, t) {
  return rl(8390656, 8, e, t);
}
function ra(e, t) {
  return Ul(2048, 8, e, t);
}
function oc(e, t) {
  return Ul(4, 2, e, t);
}
function uc(e, t) {
  return Ul(4, 4, e, t);
}
function cc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function dc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ul(4, 4, cc.bind(null, t, e), n);
}
function la() {
}
function fc(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function pc(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function mc(e, t, n) {
  return nn & 21 ? (ut(n, t) || (n = wu(), ue.lanes |= n, rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ze = !0), e.memoizedState = n);
}
function cp(e, t) {
  var n = ne;
  ne = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = xs.transition;
  xs.transition = {};
  try {
    e(!1), t();
  } finally {
    ne = n, xs.transition = r;
  }
}
function hc() {
  return qe().memoizedState;
}
function dp(e, t, n) {
  var r = Ot(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, gc(e)) yc(t, n);
  else if (n = Zu(e, t, n, r), n !== null) {
    var l = Te();
    ot(n, e, r, l), vc(n, t, r);
  }
}
function fp(e, t, n) {
  var r = Ot(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gc(e)) yc(t, l);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var a = t.lastRenderedState, o = s(a, n);
      if (l.hasEagerState = !0, l.eagerState = o, ut(o, a)) {
        var u = t.interleaved;
        u === null ? (l.next = l, Yi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Zu(e, t, l, r), n !== null && (l = Te(), ot(n, e, r, l), vc(n, t, r));
  }
}
function gc(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function yc(e, t) {
  lr = Nl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function vc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ri(e, n);
  }
}
var Il = { readContext: Je, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, pp = { readContext: Je, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Je, useEffect: oo, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, rl(
    4194308,
    4,
    cc.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = dp.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}, useState: ao, useDebugValue: la, useDeferredValue: function(e) {
  return ft().memoizedState = e;
}, useTransition: function() {
  var e = ao(!1), t = e[0];
  return e = cp.bind(null, e[1]), ft().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, l = ft();
  if (ae) {
    if (n === void 0) throw Error(I(407));
    n = n();
  } else {
    if (n = t(), we === null) throw Error(I(349));
    nn & 30 || nc(r, t, n);
  }
  l.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return l.queue = s, oo(lc.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, kr(9, rc.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = ft(), t = we.identifierPrefix;
  if (ae) {
    var n = wt, r = vt;
    n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = up++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, mp = {
  readContext: Je,
  useCallback: fc,
  useContext: Je,
  useEffect: ra,
  useImperativeHandle: dc,
  useInsertionEffect: oc,
  useLayoutEffect: uc,
  useMemo: pc,
  useReducer: _s,
  useRef: ac,
  useState: function() {
    return _s(Sr);
  },
  useDebugValue: la,
  useDeferredValue: function(e) {
    var t = qe();
    return mc(t, he.memoizedState, e);
  },
  useTransition: function() {
    var e = _s(Sr)[0], t = qe().memoizedState;
    return [e, t];
  },
  useMutableSource: ec,
  useSyncExternalStore: tc,
  useId: hc,
  unstable_isNewReconciler: !1
}, hp = { readContext: Je, useCallback: fc, useContext: Je, useEffect: ra, useImperativeHandle: dc, useInsertionEffect: oc, useLayoutEffect: uc, useMemo: pc, useReducer: Ss, useRef: ac, useState: function() {
  return Ss(Sr);
}, useDebugValue: la, useDeferredValue: function(e) {
  var t = qe();
  return he === null ? t.memoizedState = e : mc(t, he.memoizedState, e);
}, useTransition: function() {
  var e = Ss(Sr)[0], t = qe().memoizedState;
  return [e, t];
}, useMutableSource: ec, useSyncExternalStore: tc, useId: hc, unstable_isNewReconciler: !1 };
function rt(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ri(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vl = { isMounted: function(e) {
  return (e = e._reactInternals) ? an(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), l = Ot(e), s = xt(r, l);
  s.payload = t, n != null && (s.callback = n), t = Ft(e, s, l), t !== null && (ot(t, e, l, r), tl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), l = Ot(e), s = xt(r, l);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Ft(e, s, l), t !== null && (ot(t, e, l, r), tl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Te(), r = Ot(e), l = xt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ft(e, l, r), t !== null && (ot(t, e, r, n), tl(t, e, r));
} };
function uo(e, t, n, r, l, s, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !hr(n, r) || !hr(l, s) : !0;
}
function wc(e, t, n) {
  var r = !1, l = Vt, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Je(s) : (l = Ae(t) ? en : Ne.current, r = t.contextTypes, s = (r = r != null) ? Ln(e, l) : Vt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function co(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
}
function li(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Xi(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? l.context = Je(s) : (s = Ae(t) ? en : Ne.current, l.context = Ln(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ri(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Vl.enqueueReplaceState(l, l.state, null), El(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Vd(r), r = r.return;
    while (r);
    var l = n;
  } catch (s) {
    l = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ks(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function si(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var gp = typeof WeakMap == "function" ? WeakMap : Map;
function xc(e, t, n) {
  n = xt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ll || (Ll = !0, hi = r), si(e, t);
  }, n;
}
function _c(e, t, n) {
  n = xt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      si(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    si(e, t), typeof r != "function" && (At === null ? At = /* @__PURE__ */ new Set([this]) : At.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function fo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Lp.bind(null, e, t, n), t.then(e, e));
}
function po(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function mo(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xt(-1, 1), t.tag = 2, Ft(n, t, 1))), n.lanes |= 1), e);
}
var yp = Et.ReactCurrentOwner, ze = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? Xu(t, null, n, r) : Pn(t, e.child, n, r);
}
function ho(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return Nn(t, l), r = ta(e, t, n, r, s, l), n = na(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ae && n && Wi(t), t.flags |= 1, Ie(e, t, r, l), t.child);
}
function go(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !fa(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Sc(e, t, s, r, l)) : (e = al(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & l)) {
    var a = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : hr, n(a, r) && e.ref === t.ref) return jt(e, t, l);
  }
  return t.flags |= 1, e = $t(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Sc(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (hr(s, r) && e.ref === t.ref) if (ze = !1, t.pendingProps = r = s, (e.lanes & l) !== 0) e.flags & 131072 && (ze = !0);
    else return t.lanes = e.lanes, jt(e, t, l);
  }
  return ii(e, t, n, r, l);
}
function kc(e, t, n) {
  var r = t.pendingProps, l = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(Sn, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(Sn, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, le(Sn, Ue), Ue |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, le(Sn, Ue), Ue |= r;
  return Ie(e, t, l, n), t.child;
}
function jc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ii(e, t, n, r, l) {
  var s = Ae(n) ? en : Ne.current;
  return s = Ln(t, s), Nn(t, l), n = ta(e, t, n, r, s, l), r = na(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ae && r && Wi(t), t.flags |= 1, Ie(e, t, n, l), t.child);
}
function yo(e, t, n, r, l) {
  if (Ae(n)) {
    var s = !0;
    xl(t);
  } else s = !1;
  if (Nn(t, l), t.stateNode === null) ll(e, t), wc(t, n, r), li(t, n, r, l), r = !0;
  else if (e === null) {
    var a = t.stateNode, o = t.memoizedProps;
    a.props = o;
    var u = a.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Je(c) : (c = Ae(n) ? en : Ne.current, c = Ln(t, c));
    var h = n.getDerivedStateFromProps, g = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    g || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== c) && co(t, a, r, c), It = !1;
    var m = t.memoizedState;
    a.state = m, El(t, r, a, l), u = t.memoizedState, o !== r || m !== u || Fe.current || It ? (typeof h == "function" && (ri(t, n, h, r), u = t.memoizedState), (o = It || uo(t, n, o, r, m, u, c)) ? (g || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = c, r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Ju(e, t), o = t.memoizedProps, c = t.type === t.elementType ? o : rt(t.type, o), a.props = c, g = t.pendingProps, m = a.context, u = n.contextType, typeof u == "object" && u !== null ? u = Je(u) : (u = Ae(n) ? en : Ne.current, u = Ln(t, u));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== g || m !== u) && co(t, a, r, u), It = !1, m = t.memoizedState, a.state = m, El(t, r, a, l);
    var w = t.memoizedState;
    o !== g || m !== w || Fe.current || It ? (typeof y == "function" && (ri(t, n, y, r), w = t.memoizedState), (c = It || uo(t, n, c, r, m, w, u) || !1) ? (h || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, w, u), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, w, u)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), a.props = r, a.state = w, a.context = u, r = c) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ai(e, t, n, r, s, l);
}
function ai(e, t, n, r, l, s) {
  jc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && to(t, n, !1), jt(e, t, s);
  r = t.stateNode, yp.current = t;
  var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Pn(t, e.child, null, s), t.child = Pn(t, null, o, s)) : Ie(e, t, o, s), t.memoizedState = r.state, l && to(t, n, !0), t.child;
}
function Ec(e) {
  var t = e.stateNode;
  t.pendingContext ? eo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eo(e, t.context, !1), Zi(e, t.containerInfo);
}
function vo(e, t, n, r, l) {
  return Mn(), Hi(l), t.flags |= 256, Ie(e, t, n, r), t.child;
}
var oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function ui(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cc(e, t, n) {
  var r = t.pendingProps, l = oe.current, s = !1, a = (t.flags & 128) !== 0, o;
  if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), le(oe, l & 1), e === null)
    return ti(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, a = { mode: "hidden", children: a }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Hl(a, r, 0, null), e = qt(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ui(n), t.memoizedState = oi, e) : sa(t, a));
  if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return vp(e, t, a, r, o, l, n);
  if (s) {
    s = r.fallback, a = t.mode, l = e.child, o = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = $t(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? s = $t(o, s) : (s = qt(s, a, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, a = e.child.memoizedState, a = a === null ? ui(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = oi, r;
  }
  return s = e.child, e = s.sibling, r = $t(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function sa(e, t) {
  return t = Hl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Hr(e, t, n, r) {
  return r !== null && Hi(r), Pn(t, e.child, null, n), e = sa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function vp(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ks(Error(I(422))), Hr(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, l = t.mode, r = Hl({ mode: "visible", children: r.children }, l, 0, null), s = qt(s, l, a, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Pn(t, e.child, null, a), t.child.memoizedState = ui(a), t.memoizedState = oi, s);
  if (!(t.mode & 1)) return Hr(e, t, a, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
    return r = o, s = Error(I(419)), r = ks(s, r, void 0), Hr(e, t, a, r);
  }
  if (o = (a & e.childLanes) !== 0, ze || o) {
    if (r = we, r !== null) {
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
      l = l & (r.suspendedLanes | a) ? 0 : l, l !== 0 && l !== s.retryLane && (s.retryLane = l, kt(e, l), ot(r, e, l, -1));
    }
    return da(), r = ks(Error(I(421))), Hr(e, t, a, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mp.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, Ve = zt(l.nextSibling), We = t, ae = !0, st = null, e !== null && (Ke[Ye++] = vt, Ke[Ye++] = wt, Ke[Ye++] = tn, vt = e.id, wt = e.overflow, tn = t), t = sa(t, r.children), t.flags |= 4096, t);
}
function wo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ni(e.return, t, n);
}
function js(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = l);
}
function Nc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, s = r.tail;
  if (Ie(e, t, r.children, n), r = oe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && wo(e, n, t);
      else if (e.tag === 19) wo(e, n, t);
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
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), js(t, !1, l, n, s);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Cl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      js(t, !0, n, null, s);
      break;
    case "together":
      js(t, !1, null, null, void 0);
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
function wp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ec(t), Mn();
      break;
    case 5:
      qu(t);
      break;
    case 1:
      Ae(t.type) && xl(t);
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
        return r.dehydrated !== null ? (le(oe, oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Cc(e, t, n) : (le(oe, oe.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      le(oe, oe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Nc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), le(oe, oe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, kc(e, t, n);
  }
  return jt(e, t, n);
}
var Ic, ci, Tc, Lc;
Ic = function(e, t) {
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
ci = function() {
};
Tc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Zt(ht.current);
    var s = null;
    switch (n) {
      case "input":
        l = Ps(e, l), r = Ps(e, r), s = [];
        break;
      case "select":
        l = ce({}, l, { value: void 0 }), r = ce({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        l = Rs(e, l), r = Rs(e, r), s = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vl);
    }
    Fs(n, r);
    var a;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var o = l[c];
      for (a in o) o.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (or.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (o = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== o && (u != null || o != null)) if (c === "style") if (o) {
        for (a in o) !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), n[a] = u[a]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = u;
      else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, o = o ? o.__html : void 0, u != null && o !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (or.hasOwnProperty(c) ? (u != null && c === "onScroll" && se("scroll", e), s || o === u || (s = [])) : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Lc = function(e, t, n, r) {
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
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function xp(e, t, n) {
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
      return je(t), null;
    case 1:
      return Ae(t.type) && wl(), je(t), null;
    case 3:
      return r = t.stateNode, bn(), ie(Fe), ie(Ne), qi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (vi(st), st = null))), ci(e, t), je(t), null;
    case 5:
      Ji(t);
      var l = Zt(xr.current);
      if (n = t.type, e !== null && t.stateNode != null) Tc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return je(t), null;
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
              Na(r, s), se("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, se("invalid", r);
              break;
            case "textarea":
              Ta(r, s), se("invalid", r);
          }
          Fs(n, s), l = null;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            a === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && Vr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && Vr(
              r.textContent,
              o,
              e
            ), l = ["children", "" + o]) : or.hasOwnProperty(a) && o != null && a === "onScroll" && se("scroll", r);
          }
          switch (n) {
            case "input":
              Dr(r), Ia(r, s, !0);
              break;
            case "textarea":
              Dr(r), La(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = vl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = lu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[pt] = t, e[vr] = r, Ic(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = As(n, r), n) {
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
                Na(e, r), l = Ps(e, r), se("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ce({}, r, { value: void 0 }), se("invalid", e);
                break;
              case "textarea":
                Ta(e, r), l = Rs(e, r), se("invalid", e);
                break;
              default:
                l = r;
            }
            Fs(n, l), o = l;
            for (s in o) if (o.hasOwnProperty(s)) {
              var u = o[s];
              s === "style" ? au(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && su(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ur(e, u) : typeof u == "number" && ur(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (or.hasOwnProperty(s) ? u != null && s === "onScroll" && se("scroll", e) : u != null && Ti(e, s, u, a));
            }
            switch (n) {
              case "input":
                Dr(e), Ia(e, r, !1);
                break;
              case "textarea":
                Dr(e), La(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
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
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) Lc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (n = Zt(xr.current), Zt(ht.current), Wr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[pt] = t, (s = r.nodeValue !== n) && (e = We, e !== null)) switch (e.tag) {
            case 3:
              Vr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Vr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[pt] = t, t.stateNode = r;
      }
      return je(t), null;
    case 13:
      if (ie(oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ae && Ve !== null && t.mode & 1 && !(t.flags & 128)) Ku(), Mn(), t.flags |= 98560, s = !1;
        else if (s = Wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(I(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(I(317));
            s[pt] = t;
          } else Mn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          je(t), s = !1;
        } else st !== null && (vi(st), st = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || oe.current & 1 ? ge === 0 && (ge = 3) : da())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
    case 4:
      return bn(), ci(e, t), e === null && gr(t.stateNode.containerInfo), je(t), null;
    case 10:
      return Ki(t.type._context), je(t), null;
    case 17:
      return Ae(t.type) && wl(), je(t), null;
    case 19:
      if (ie(oe), s = t.memoizedState, s === null) return je(t), null;
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
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Gn(s, !0), s.tail === null && s.tailMode === "hidden" && !a.alternate && !ae) return je(t), null;
        } else 2 * pe() - s.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Gn(s, !1), t.lanes = 4194304);
        s.isBackwards ? (a.sibling = t.child, t.child = a) : (n = s.last, n !== null ? n.sibling = a : t.child = a, s.last = a);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = pe(), t.sibling = null, n = oe.current, le(oe, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
    case 22:
    case 23:
      return ca(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function _p(e, t) {
  switch (Qi(t), t.tag) {
    case 1:
      return Ae(t.type) && wl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return bn(), ie(Fe), ie(Ne), qi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
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
var Br = !1, Ee = !1, Sp = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    de(e, t, r);
  }
  else n.current = null;
}
function di(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var xo = !1;
function kp(e, t) {
  if (Ks = hl, e = Ru(), Vi(e)) {
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
        var a = 0, o = -1, u = -1, c = 0, h = 0, g = e, m = null;
        t: for (; ; ) {
          for (var y; g !== n || l !== 0 && g.nodeType !== 3 || (o = a + l), g !== s || r !== 0 && g.nodeType !== 3 || (u = a + r), g.nodeType === 3 && (a += g.nodeValue.length), (y = g.firstChild) !== null; )
            m = g, g = y;
          for (; ; ) {
            if (g === e) break t;
            if (m === n && ++c === l && (o = a), m === s && ++h === r && (u = a), (y = g.nextSibling) !== null) break;
            g = m, m = g.parentNode;
          }
          g = y;
        }
        n = o === -1 || u === -1 ? null : { start: o, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ys = { focusedElem: e, selectionRange: n }, hl = !1, D = t; D !== null; ) if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
  else for (; D !== null; ) {
    t = D;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var _ = w.memoizedProps, k = w.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : rt(t.type, _), k);
            f.__reactInternalSnapshotBeforeUpdate = d;
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
    } catch (j) {
      de(t, t.return, j);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, D = e;
      break;
    }
    D = t.return;
  }
  return w = xo, xo = !1, w;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        l.destroy = void 0, s !== void 0 && di(t, n, s);
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
function fi(e) {
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
function Mc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Mc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[pt], delete t[vr], delete t[Js], delete t[sp], delete t[ip])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Pc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _o(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vl));
  else if (r !== 4 && (e = e.child, e !== null)) for (pi(e, t, n), e = e.sibling; e !== null; ) pi(e, t, n), e = e.sibling;
}
function mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (mi(e, t, n), e = e.sibling; e !== null; ) mi(e, t, n), e = e.sibling;
}
var xe = null, lt = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) bc(e, t, n), n = n.sibling;
}
function bc(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function") try {
    mt.onCommitFiberUnmount(Rl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ee || _n(n, t);
    case 6:
      var r = xe, l = lt;
      xe = null, Ct(e, t, n), xe = r, lt = l, xe !== null && (lt ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null && (lt ? (e = xe, n = n.stateNode, e.nodeType === 8 ? ys(e.parentNode, n) : e.nodeType === 1 && ys(e, n), pr(e)) : ys(xe, n.stateNode));
      break;
    case 4:
      r = xe, l = lt, xe = n.stateNode.containerInfo, lt = !0, Ct(e, t, n), xe = r, lt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var s = l, a = s.destroy;
          s = s.tag, a !== void 0 && (s & 2 || s & 4) && di(n, t, a), l = l.next;
        } while (l !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (!Ee && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, Ct(e, t, n), Ee = r) : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function So(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sp()), t.forEach(function(r) {
      var l = Pp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function tt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var s = e, a = t, o = a;
      e: for (; o !== null; ) {
        switch (o.tag) {
          case 5:
            xe = o.stateNode, lt = !1;
            break e;
          case 3:
            xe = o.stateNode.containerInfo, lt = !0;
            break e;
          case 4:
            xe = o.stateNode.containerInfo, lt = !0;
            break e;
        }
        o = o.return;
      }
      if (xe === null) throw Error(I(160));
      bc(s, a, l), xe = null, lt = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (c) {
      de(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Dc(t, e), t = t.sibling;
}
function Dc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (tt(t, e), dt(e), r & 4) {
        try {
          sr(3, e, e.return), Wl(3, e);
        } catch (_) {
          de(e, e.return, _);
        }
        try {
          sr(5, e, e.return);
        } catch (_) {
          de(e, e.return, _);
        }
      }
      break;
    case 1:
      tt(t, e), dt(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (tt(t, e), dt(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          ur(l, "");
        } catch (_) {
          de(e, e.return, _);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var s = e.memoizedProps, a = n !== null ? n.memoizedProps : s, o = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          o === "input" && s.type === "radio" && s.name != null && nu(l, s), As(o, a);
          var c = As(o, s);
          for (a = 0; a < u.length; a += 2) {
            var h = u[a], g = u[a + 1];
            h === "style" ? au(l, g) : h === "dangerouslySetInnerHTML" ? su(l, g) : h === "children" ? ur(l, g) : Ti(l, h, g, c);
          }
          switch (o) {
            case "input":
              bs(l, s);
              break;
            case "textarea":
              ru(l, s);
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
        } catch (_) {
          de(e, e.return, _);
        }
      }
      break;
    case 6:
      if (tt(t, e), dt(e), r & 4) {
        if (e.stateNode === null) throw Error(I(162));
        l = e.stateNode, s = e.memoizedProps;
        try {
          l.nodeValue = s;
        } catch (_) {
          de(e, e.return, _);
        }
      }
      break;
    case 3:
      if (tt(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        pr(t.containerInfo);
      } catch (_) {
        de(e, e.return, _);
      }
      break;
    case 4:
      tt(t, e), dt(e);
      break;
    case 13:
      tt(t, e), dt(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (oa = pe())), r & 4 && So(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (c = Ee) || h, tt(t, e), Ee = c) : tt(t, e), dt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (D = e, h = e.child; h !== null; ) {
          for (g = D = h; D !== null; ) {
            switch (m = D, y = m.child, m.tag) {
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
                  } catch (_) {
                    de(r, n, _);
                  }
                }
                break;
              case 5:
                _n(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  jo(g);
                  continue;
                }
            }
            y !== null ? (y.return = m, D = y) : jo(g);
          }
          h = h.sibling;
        }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                l = g.stateNode, c ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = g.stateNode, u = g.memoizedProps.style, a = u != null && u.hasOwnProperty("display") ? u.display : null, o.style.display = iu("display", a));
              } catch (_) {
                de(e, e.return, _);
              }
            }
          } else if (g.tag === 6) {
            if (h === null) try {
              g.stateNode.nodeValue = c ? "" : g.memoizedProps;
            } catch (_) {
              de(e, e.return, _);
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
      tt(t, e), dt(e), r & 4 && So(e);
      break;
    case 21:
      break;
    default:
      tt(
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
          if (Pc(n)) {
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
          var s = _o(e);
          mi(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, o = _o(e);
          pi(e, o, a);
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
function jp(e, t, n) {
  D = e, Rc(e);
}
function Rc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D, s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Br;
      if (!a) {
        var o = l.alternate, u = o !== null && o.memoizedState !== null || Ee;
        o = Br;
        var c = Ee;
        if (Br = a, (Ee = u) && !c) for (D = l; D !== null; ) a = D, u = a.child, a.tag === 22 && a.memoizedState !== null ? Eo(l) : u !== null ? (u.return = a, D = u) : Eo(l);
        for (; s !== null; ) D = s, Rc(s), s = s.sibling;
        D = l, Br = o, Ee = c;
      }
      ko(e);
    } else l.subtreeFlags & 8772 && s !== null ? (s.return = l, D = s) : ko(e);
  }
}
function ko(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ee || Wl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ee) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : rt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && io(t, s, r);
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
              io(t, a, n);
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
                var h = c.memoizedState;
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
        Ee || t.flags & 512 && fi(t);
      } catch (m) {
        de(t, t.return, m);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function jo(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function Eo(e) {
  for (; D !== null; ) {
    var t = D;
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
            fi(t);
          } catch (u) {
            de(t, s, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            fi(t);
          } catch (u) {
            de(t, a, u);
          }
      }
    } catch (u) {
      de(t, t.return, u);
    }
    if (t === e) {
      D = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      o.return = t.return, D = o;
      break;
    }
    D = t.return;
  }
}
var Ep = Math.ceil, Tl = Et.ReactCurrentDispatcher, ia = Et.ReactCurrentOwner, Ze = Et.ReactCurrentBatchConfig, Z = 0, we = null, me = null, _e = 0, Ue = 0, Sn = Qt(0), ge = 0, jr = null, rn = 0, Ql = 0, aa = 0, ir = null, De = null, oa = 0, Rn = 1 / 0, gt = null, Ll = !1, hi = null, At = null, Gr = !1, Pt = null, Ml = 0, ar = 0, gi = null, sl = -1, il = 0;
function Te() {
  return Z & 6 ? pe() : sl !== -1 ? sl : sl = pe();
}
function Ot(e) {
  return e.mode & 1 ? Z & 2 && _e !== 0 ? _e & -_e : op.transition !== null ? (il === 0 && (il = wu()), il) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Cu(e.type)), e) : 1;
}
function ot(e, t, n, r) {
  if (50 < ar) throw ar = 0, gi = null, Error(I(185));
  Nr(e, n, r), (!(Z & 2) || e !== we) && (e === we && (!(Z & 2) && (Ql |= n), ge === 4 && Lt(e, _e)), Oe(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (Rn = pe() + 500, $l && Ht()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  of(e, t);
  var r = ml(e, e === we ? _e : 0);
  if (r === 0) n !== null && ba(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ba(n), t === 1) e.tag === 0 ? ap(Co.bind(null, e)) : Hu(Co.bind(null, e)), rp(function() {
      !(Z & 6) && Ht();
    }), n = null;
    else {
      switch (xu(r)) {
        case 1:
          n = Di;
          break;
        case 4:
          n = yu;
          break;
        case 16:
          n = pl;
          break;
        case 536870912:
          n = vu;
          break;
        default:
          n = pl;
      }
      n = Wc(n, zc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function zc(e, t) {
  if (sl = -1, il = 0, Z & 6) throw Error(I(327));
  var n = e.callbackNode;
  if (In() && e.callbackNode !== n) return null;
  var r = ml(e, e === we ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pl(e, r);
  else {
    t = r;
    var l = Z;
    Z |= 2;
    var s = Ac();
    (we !== e || _e !== t) && (gt = null, Rn = pe() + 500, Jt(e, t));
    do
      try {
        Ip();
        break;
      } catch (o) {
        Fc(e, o);
      }
    while (!0);
    Gi(), Tl.current = s, Z = l, me !== null ? t = 0 : (we = null, _e = 0, t = ge);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ws(e), l !== 0 && (r = l, t = yi(e, l))), t === 1) throw n = jr, Jt(e, 0), Lt(e, r), Oe(e, pe()), n;
    if (t === 6) Lt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Cp(l) && (t = Pl(e, r), t === 2 && (s = Ws(e), s !== 0 && (r = s, t = yi(e, s))), t === 1)) throw n = jr, Jt(e, 0), Lt(e, r), Oe(e, pe()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Kt(e, De, gt);
          break;
        case 3:
          if (Lt(e, r), (r & 130023424) === r && (t = oa + 500 - pe(), 10 < t)) {
            if (ml(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Te(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Zs(Kt.bind(null, e, De, gt), t);
            break;
          }
          Kt(e, De, gt);
          break;
        case 4:
          if (Lt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - at(r);
            s = 1 << a, a = t[a], a > l && (l = a), r &= ~s;
          }
          if (r = l, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ep(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Zs(Kt.bind(null, e, De, gt), r);
            break;
          }
          Kt(e, De, gt);
          break;
        case 5:
          Kt(e, De, gt);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Oe(e, pe()), e.callbackNode === n ? zc.bind(null, e) : null;
}
function yi(e, t) {
  var n = ir;
  return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256), e = Pl(e, t), e !== 2 && (t = De, De = n, t !== null && vi(t)), e;
}
function vi(e) {
  De === null ? De = e : De.push.apply(De, e);
}
function Cp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], s = l.getSnapshot;
        l = l.value;
        try {
          if (!ut(s(), l)) return !1;
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
    var n = 31 - at(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Co(e) {
  if (Z & 6) throw Error(I(327));
  In();
  var t = ml(e, 0);
  if (!(t & 1)) return Oe(e, pe()), null;
  var n = Pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ws(e);
    r !== 0 && (t = r, n = yi(e, r));
  }
  if (n === 1) throw n = jr, Jt(e, 0), Lt(e, t), Oe(e, pe()), n;
  if (n === 6) throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kt(e, De, gt), Oe(e, pe()), null;
}
function ua(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    Z = n, Z === 0 && (Rn = pe() + 500, $l && Ht());
  }
}
function ln(e) {
  Pt !== null && Pt.tag === 0 && !(Z & 6) && In();
  var t = Z;
  Z |= 1;
  var n = Ze.transition, r = ne;
  try {
    if (Ze.transition = null, ne = 1, e) return e();
  } finally {
    ne = r, Ze.transition = n, Z = t, !(Z & 6) && Ht();
  }
}
function ca() {
  Ue = Sn.current, ie(Sn);
}
function Jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, np(n)), me !== null) for (n = me.return; n !== null; ) {
    var r = n;
    switch (Qi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && wl();
        break;
      case 3:
        bn(), ie(Fe), ie(Ne), qi();
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
  if (we = e, me = e = $t(e.current, null), _e = Ue = t, ge = 0, jr = null, aa = Ql = rn = 0, De = ir = null, Xt !== null) {
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
function Fc(e, t) {
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
      if (nn = 0, ve = he = ue = null, lr = !1, _r = 0, ia.current = null, n === null || n.return === null) {
        ge = 1, jr = t, me = null;
        break;
      }
      e: {
        var s = e, a = n.return, o = n, u = t;
        if (t = _e, o.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var c = u, h = o, g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = po(a);
          if (y !== null) {
            y.flags &= -257, mo(y, a, o, s, t), y.mode & 1 && fo(s, c, t), t = y, u = c;
            var w = t.updateQueue;
            if (w === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(u), t.updateQueue = _;
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              fo(s, c, t), da();
              break e;
            }
            u = Error(I(426));
          }
        } else if (ae && o.mode & 1) {
          var k = po(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), mo(k, a, o, s, t), Hi(Dn(u, o));
            break e;
          }
        }
        s = u = Dn(u, o), ge !== 4 && (ge = 2), ir === null ? ir = [s] : ir.push(s), s = a;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var f = xc(s, u, t);
              so(s, f);
              break e;
            case 1:
              o = u;
              var d = s.type, p = s.stateNode;
              if (!(s.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (At === null || !At.has(p)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var j = _c(s, o, t);
                so(s, j);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      $c(n);
    } catch (N) {
      t = N, me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ac() {
  var e = Tl.current;
  return Tl.current = Il, e === null ? Il : e;
}
function da() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4), we === null || !(rn & 268435455) && !(Ql & 268435455) || Lt(we, _e);
}
function Pl(e, t) {
  var n = Z;
  Z |= 2;
  var r = Ac();
  (we !== e || _e !== t) && (gt = null, Jt(e, t));
  do
    try {
      Np();
      break;
    } catch (l) {
      Fc(e, l);
    }
  while (!0);
  if (Gi(), Z = n, Tl.current = r, me !== null) throw Error(I(261));
  return we = null, _e = 0, ge;
}
function Np() {
  for (; me !== null; ) Oc(me);
}
function Ip() {
  for (; me !== null && !Jd(); ) Oc(me);
}
function Oc(e) {
  var t = Vc(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? $c(e) : me = t, ia.current = null;
}
function $c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _p(n, t), n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ge = 6, me = null;
        return;
      }
    } else if (n = xp(n, t, Ue), n !== null) {
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
  var r = ne, l = Ze.transition;
  try {
    Ze.transition = null, ne = 1, Tp(e, t, n, r);
  } finally {
    Ze.transition = l, ne = r;
  }
  return null;
}
function Tp(e, t, n, r) {
  do
    In();
  while (Pt !== null);
  if (Z & 6) throw Error(I(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (uf(e, s), e === we && (me = we = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Gr || (Gr = !0, Wc(pl, function() {
    return In(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = Ze.transition, Ze.transition = null;
    var a = ne;
    ne = 1;
    var o = Z;
    Z |= 4, ia.current = null, kp(e, n), Dc(n, e), Yf(Ys), hl = !!Ks, Ys = Ks = null, e.current = n, jp(n), qd(), Z = o, ne = a, Ze.transition = s;
  } else e.current = n;
  if (Gr && (Gr = !1, Pt = e, Ml = l), s = e.pendingLanes, s === 0 && (At = null), nf(n.stateNode), Oe(e, pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ll) throw Ll = !1, e = hi, hi = null, e;
  return Ml & 1 && e.tag !== 0 && In(), s = e.pendingLanes, s & 1 ? e === gi ? ar++ : (ar = 0, gi = e) : ar = 0, Ht(), null;
}
function In() {
  if (Pt !== null) {
    var e = xu(Ml), t = Ze.transition, n = ne;
    try {
      if (Ze.transition = null, ne = 16 > e ? 16 : e, Pt === null) var r = !1;
      else {
        if (e = Pt, Pt = null, Ml = 0, Z & 6) throw Error(I(331));
        var l = Z;
        for (Z |= 4, D = e.current; D !== null; ) {
          var s = D, a = s.child;
          if (D.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (D = c; D !== null; ) {
                  var h = D;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, h, s);
                  }
                  var g = h.child;
                  if (g !== null) g.return = h, D = g;
                  else for (; D !== null; ) {
                    h = D;
                    var m = h.sibling, y = h.return;
                    if (Mc(h), h === c) {
                      D = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = y, D = m;
                      break;
                    }
                    D = y;
                  }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var _ = w.child;
                if (_ !== null) {
                  w.child = null;
                  do {
                    var k = _.sibling;
                    _.sibling = null, _ = k;
                  } while (_ !== null);
                }
              }
              D = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) a.return = s, D = a;
          else e: for (; D !== null; ) {
            if (s = D, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                sr(9, s, s.return);
            }
            var f = s.sibling;
            if (f !== null) {
              f.return = s.return, D = f;
              break e;
            }
            D = s.return;
          }
        }
        var d = e.current;
        for (D = d; D !== null; ) {
          a = D;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) p.return = a, D = p;
          else e: for (a = d; D !== null; ) {
            if (o = D, o.flags & 2048) try {
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
              D = null;
              break e;
            }
            var j = o.sibling;
            if (j !== null) {
              j.return = o.return, D = j;
              break e;
            }
            D = o.return;
          }
        }
        if (Z = l, Ht(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
          mt.onPostCommitFiberRoot(Rl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ne = n, Ze.transition = t;
    }
  }
  return !1;
}
function No(e, t, n) {
  t = Dn(n, t), t = xc(e, t, 1), e = Ft(e, t, 1), t = Te(), e !== null && (Nr(e, 1, t), Oe(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) No(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      No(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (At === null || !At.has(r))) {
        e = Dn(n, e), e = _c(t, e, 1), t = Ft(t, e, 1), e = Te(), t !== null && (Nr(t, 1, e), Oe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Lp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Te(), e.pingedLanes |= e.suspendedLanes & n, we === e && (_e & n) === n && (ge === 4 || ge === 3 && (_e & 130023424) === _e && 500 > pe() - oa ? Jt(e, 0) : aa |= n), Oe(e, t);
}
function Uc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Fr, Fr <<= 1, !(Fr & 130023424) && (Fr = 4194304)) : t = 1);
  var n = Te();
  e = kt(e, t), e !== null && (Nr(e, t, n), Oe(e, n));
}
function Mp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Uc(e, n);
}
function Pp(e, t) {
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
  r !== null && r.delete(t), Uc(e, n);
}
var Vc;
Vc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) ze = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ze = !1, wp(e, t, n);
    ze = !!(e.flags & 131072);
  }
  else ze = !1, ae && t.flags & 1048576 && Bu(t, Sl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ll(e, t), e = t.pendingProps;
      var l = Ln(t, Ne.current);
      Nn(t, n), l = ta(null, t, r, e, l, n);
      var s = na();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (s = !0, xl(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Xi(t), l.updater = Vl, t.stateNode = l, l._reactInternals = t, li(t, r, e, n), t = ai(null, t, r, !0, s, n)) : (t.tag = 0, ae && s && Wi(t), Ie(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ll(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Dp(r), e = rt(r, e), l) {
          case 0:
            t = ii(null, t, r, e, n);
            break e;
          case 1:
            t = yo(null, t, r, e, n);
            break e;
          case 11:
            t = ho(null, t, r, e, n);
            break e;
          case 14:
            t = go(null, t, r, rt(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), ii(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), yo(e, t, r, l, n);
    case 3:
      e: {
        if (Ec(t), e === null) throw Error(I(387));
        r = t.pendingProps, s = t.memoizedState, l = s.element, Ju(e, t), El(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          l = Dn(Error(I(423)), t), t = vo(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Dn(Error(I(424)), t), t = vo(e, t, r, n, l);
          break e;
        } else for (Ve = zt(t.stateNode.containerInfo.firstChild), We = t, ae = !0, st = null, n = Xu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Mn(), r === l) {
            t = jt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return qu(t), e === null && ti(t), r = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = l.children, Xs(r, l) ? a = null : s !== null && Xs(r, s) && (t.flags |= 32), jc(e, t), Ie(e, t, a, n), t.child;
    case 6:
      return e === null && ti(t), null;
    case 13:
      return Cc(e, t, n);
    case 4:
      return Zi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : Ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), ho(e, t, r, l, n);
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, s = t.memoizedProps, a = l.value, le(kl, r._currentValue), r._currentValue = a, s !== null) if (ut(s.value, a)) {
          if (s.children === l.children && !Fe.current) {
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
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? u.next = u : (u.next = h.next, h.next = u), c.pending = u;
                  }
                }
                s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), ni(
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
            a.lanes |= n, o = a.alternate, o !== null && (o.lanes |= n), ni(a, n, t), a = s.sibling;
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
        Ie(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Nn(t, n), l = Je(l), r = r(l), t.flags |= 1, Ie(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = rt(r, t.pendingProps), l = rt(r.type, l), go(e, t, r, l, n);
    case 15:
      return Sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : rt(r, l), ll(e, t), t.tag = 1, Ae(r) ? (e = !0, xl(t)) : e = !1, Nn(t, n), wc(t, r, l), li(t, r, l, n), ai(null, t, r, !0, e, n);
    case 19:
      return Nc(e, t, n);
    case 22:
      return kc(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Wc(e, t) {
  return gu(e, t);
}
function bp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Xe(e, t, n, r) {
  return new bp(e, t, n, r);
}
function fa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Dp(e) {
  if (typeof e == "function") return fa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mi) return 11;
    if (e === Pi) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return n === null ? (n = Xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
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
    case Is:
      return e = Xe(12, n, t, l | 2), e.elementType = Is, e.lanes = s, e;
    case Ts:
      return e = Xe(13, n, t, l), e.elementType = Ts, e.lanes = s, e;
    case Ls:
      return e = Xe(19, n, t, l), e.elementType = Ls, e.lanes = s, e;
    case qo:
      return Hl(n, l, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Zo:
          a = 10;
          break e;
        case Jo:
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
  return t = Xe(a, n, t, l), t.elementType = e, t.type = r, t.lanes = s, t;
}
function qt(e, t, n, r) {
  return e = Xe(7, e, r, t), e.lanes = n, e;
}
function Hl(e, t, n, r) {
  return e = Xe(22, e, r, t), e.elementType = qo, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Es(e, t, n) {
  return e = Xe(6, e, null, t), e.lanes = n, e;
}
function Cs(e, t, n) {
  return t = Xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Rp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = is(0), this.expirationTimes = is(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = is(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function pa(e, t, n, r, l, s, a, o, u) {
  return e = new Rp(e, t, n, o, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Xe(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xi(s), e;
}
function zp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Qc(e) {
  if (!e) return Vt;
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
          if (Ae(t.type)) {
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
    if (Ae(n)) return Qu(e, n, t);
  }
  return t;
}
function Hc(e, t, n, r, l, s, a, o, u) {
  return e = pa(n, r, !0, e, l, s, a, o, u), e.context = Qc(null), n = e.current, r = Te(), l = Ot(n), s = xt(r, l), s.callback = t ?? null, Ft(n, s, l), e.current.lanes = l, Nr(e, l, r), Oe(e, r), e;
}
function Bl(e, t, n, r) {
  var l = t.current, s = Te(), a = Ot(l);
  return n = Qc(n), t.context === null ? t.context = n : t.pendingContext = n, t = xt(s, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ft(l, t, a), e !== null && (ot(e, l, a, s), tl(e, l, a)), a;
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
function Io(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ma(e, t) {
  Io(e, t), (e = e.alternate) && Io(e, t);
}
function Fp() {
  return null;
}
var Bc = typeof reportError == "function" ? reportError : function(e) {
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
    var t = ku();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Eu(e);
  }
};
function ga(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Kl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function To() {
}
function Ap(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = bl(a);
        s.call(c);
      };
    }
    var a = Hc(t, r, e, 0, null, !1, !1, "", To);
    return e._reactRootContainer = a, e[St] = a.current, gr(e.nodeType === 8 ? e.parentNode : e), ln(), a;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function() {
      var c = bl(u);
      o.call(c);
    };
  }
  var u = pa(e, 0, !1, null, null, !1, !1, "", To);
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
  } else a = Ap(n, t, e, l, r);
  return bl(a);
}
_u = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 && (Ri(t, n | 1), Oe(t, pe()), !(Z & 6) && (Rn = pe() + 500, Ht()));
      }
      break;
    case 13:
      ln(function() {
        var r = kt(e, 1);
        if (r !== null) {
          var l = Te();
          ot(r, e, 1, l);
        }
      }), ma(e, 1);
  }
};
zi = function(e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = Te();
      ot(t, e, 134217728, n);
    }
    ma(e, 134217728);
  }
};
Su = function(e) {
  if (e.tag === 13) {
    var t = Ot(e), n = kt(e, t);
    if (n !== null) {
      var r = Te();
      ot(n, e, t, r);
    }
    ma(e, t);
  }
};
ku = function() {
  return ne;
};
ju = function(e, t) {
  var n = ne;
  try {
    return ne = e, t();
  } finally {
    ne = n;
  }
};
$s = function(e, t, n) {
  switch (t) {
    case "input":
      if (bs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ol(r);
            if (!l) throw Error(I(90));
            tu(r), bs(r, l);
          }
        }
      }
      break;
    case "textarea":
      ru(e, n);
      break;
    case "select":
      t = n.value, t != null && kn(e, !!n.multiple, t, !1);
  }
};
cu = ua;
du = ln;
var Op = { usingClientEntryPoint: !1, Events: [Tr, gn, Ol, ou, uu, ua] }, Kn = { findFiberByHostInstance: Yt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $p = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = mu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Kn.findFiberByHostInstance || Fp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kr.isDisabled && Kr.supportsFiber) try {
    Rl = Kr.inject($p), mt = Kr;
  } catch {
  }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Op;
Be.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ga(t)) throw Error(I(200));
  return zp(e, t, null, n);
};
Be.createRoot = function(e, t) {
  if (!ga(e)) throw Error(I(299));
  var n = !1, r = "", l = Bc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = pa(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, gr(e.nodeType === 8 ? e.parentNode : e), new ha(t);
};
Be.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = mu(t), e = e === null ? null : e.stateNode, e;
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
  var r = n != null && n.hydratedSources || null, l = !1, s = "", a = Bc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Hc(t, null, e, 1, n ?? null, l, !1, s, a), e[St] = t.current, gr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
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
function Gc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc);
    } catch (e) {
      console.error(e);
    }
}
Gc(), Go.exports = Be;
var Re = Go.exports, Kc, Lo = Re;
Kc = Lo.createRoot, Lo.hydrateRoot;
var Yc = { exports: {} }, Xl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Up = v, Vp = Symbol.for("react.element"), Wp = Symbol.for("react.fragment"), Qp = Object.prototype.hasOwnProperty, Hp = Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xc(e, t, n) {
  var r, l = {}, s = null, a = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) Qp.call(t, r) && !Bp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Vp, type: e, key: s, ref: a, props: l, _owner: Hp.current };
}
Xl.Fragment = Wp;
Xl.jsx = Xc;
Xl.jsxs = Xc;
Yc.exports = Xl;
var i = Yc.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Gp = {
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
const Kp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), G = (e, t) => {
  const n = v.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: o = "",
      children: u,
      ...c
    }, h) => v.createElement(
      "svg",
      {
        ref: h,
        ...Gp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: a ? Number(s) * 24 / Number(l) : s,
        className: ["lucide", `lucide-${Kp(e)}`, o].join(" "),
        ...c
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
const Yp = G("AlertTriangle", [
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
const Xp = G("ArrowBigRight", [
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
const Mo = G("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = G("ArrowUpDown", [
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
const Jc = G("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = G("Box", [
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
const qp = G("Calendar", [
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
const em = G("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qc = G("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ed = G("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = G("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = G("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = G("Download", [
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
const rm = G("Folder", [
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
const lm = G("Info", [
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
const nd = G("LayoutGrid", [
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
const sm = G("LayoutList", [
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
const im = G("Link2Off", [
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
const am = G("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = G("Maximize", [
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
const um = G("Minimize", [
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
const cm = G("MoreVertical", [
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
const rd = G("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = G("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = G("PlusCircle", [
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
const ya = G("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = G("RefreshCw", [
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
const zn = G("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = G("Settings", [
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
const mm = G("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wi = G("Star", [
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
const on = G("Tag", [
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
const hm = G("Type", [
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
const gm = G("Upload", [
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
const Ce = G("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
window.api = K;
const ym = async () => {
  const e = await K.fetchApi("/meld/home-dir");
  if (!e.ok)
    throw new Error("Failed to fetch home directory");
  return (await e.json()).home;
};
let Dl = !1;
const vm = (e) => {
  Dl = e, Dl && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, wm = (...e) => {
  Dl && console.log("[Meld]", ...e);
}, xm = (...e) => {
  Dl && console.warn("[Meld]", ...e);
}, _m = (...e) => {
  console.error("[Meld]", ...e);
}, $ = {
  log: wm,
  warn: xm,
  error: _m,
  init: vm
}, ol = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const s = await K.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  if (!s.ok)
    throw new Error(`Failed to fetch images: ${s.statusText}`);
  return await s.json();
}, ld = async (e) => {
  const t = await K.fetchApi(`/meld/image/${e}/details`);
  if (!t.ok)
    throw new Error(`Failed to fetch image details: ${t.statusText}`);
  return await t.json();
}, xi = async (e, t = !1) => {
  const n = await K.fetchApi("/meld/bulk-delete", {
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
}, va = async (e) => {
  const t = await K.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  if (!t.ok) {
    const r = await t.json();
    throw new Error(r.error || "Failed to restore images");
  }
  return (await t.json()).data || { restored_ids: e };
}, sd = async (e) => {
  const t = await K.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok)
    throw new Error("Failed to register image");
  return (await t.json()).data;
}, Po = async (e, t) => {
  if (!(await K.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  })).ok)
    throw new Error("Failed to link parent");
}, Sm = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await K.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  return r.ok ? await r.json() : [];
}, _i = async (e) => {
  const t = await K.fetchApi(`/meld/lineage?id=${e}`);
  return t.ok ? await t.json() : [];
}, km = async (e, t) => {
  if (!(await K.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  })).ok)
    throw new Error("Failed to update image tags");
}, Si = async (e, t, n) => {
  if (!(await K.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  })).ok)
    throw new Error("Failed to bulk update image tags");
}, jm = async (e) => {
  const t = await K.fetchApi(`/meld/image/${e}/workflow`);
  if (!t.ok)
    throw new Error("Failed to fetch workflow");
  return await t.json();
}, Em = async (e) => {
  const t = await K.fetchApi(`/meld/image/${e}/snapshot_data`);
  if (!t.ok)
    throw new Error("Failed to fetch snapshot data");
  return await t.json();
}, Cm = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await K.fetchApi(n);
  return r.ok ? await r.json() : [];
}, Nm = async () => {
  const e = await K.fetchApi("/meld/search-suggestions");
  return e.ok ? await e.json() : [];
}, Im = async () => {
  const e = await K.fetchApi("/meld/favorites");
  return e.ok ? await e.json() : [];
}, Tm = async (e, t) => {
  if (!(await K.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  })).ok)
    throw new Error("Failed to save favorite");
}, bo = async (e) => {
  if (!(await K.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  })).ok)
    throw new Error("Failed to delete favorite");
}, Lm = async (e, t, n) => {
  if (!(await K.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  })).ok)
    throw new Error("Failed to update favorite");
}, id = async () => {
  const e = await K.fetchApi("/meld/settings");
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
      "sidebar.image_fit": "cover",
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
}, Mm = async (e, t) => {
  if (!(await K.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  })).ok)
    throw new Error("Failed to save setting");
}, Pm = {
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
    "sidebar.image_fit": "cover",
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
function bm(e, t) {
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
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
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
        (c) => c.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && c.has_children)
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
const ad = v.createContext(void 0), Dm = ({
  children: e
}) => {
  const [t, n] = v.useReducer(bm, Pm), r = v.useRef(t.images.length), l = v.useRef(0);
  v.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const s = v.useCallback(
    async (y, w, _) => {
      const k = t.settings["gallery.max_load_count"], f = 200;
      let d = y;
      for (; d < Math.min(w, k) && _ === l.current; )
        try {
          const p = Math.min(f, k - d);
          $.log("Background fetch: starting chunk", {
            offset: d,
            limit: p
          });
          const j = await ol(
            d,
            p,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: j }), d += j.images.length, j.images.length === 0 || d >= j.total))
            break;
          await new Promise((N) => setTimeout(N, 300));
        } catch (p) {
          $.error("Background fetch failed", p);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), a = v.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const y = performance.now(), w = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", k = t.settings["gallery.initial_load_count"];
      $.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: k,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const f = await ol(
        0,
        k,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), d = performance.now() - y;
      $.log("refreshImages: initial fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: f }), f.total > k && s(k, f.total, w);
    } catch (_) {
      $.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
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
      const w = r.current, _ = t.searchQuery.trim() !== "", k = t.pagination.limit;
      $.log("loadMoreImages: starting fetch", {
        nextOffset: w,
        fetchLimit: k,
        isSearch: _
      });
      const f = await ol(
        w,
        k,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), d = performance.now() - y;
      $.log("loadMoreImages: fetch complete", {
        count: f.images.length,
        total: f.total,
        offset: f.offset,
        durationMs: d.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: f });
    } catch (w) {
      $.error("loadMoreImages: fetch failed", w), n({
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
      const y = await Im();
      n({ type: "SET_FAVORITES", payload: y });
    } catch (y) {
      $.error("Failed to load favorites", y);
    }
  }, []), c = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds), _ = t.images.filter(
      (k) => t.selectedIds.has(k.id)
    ).some(
      (k) => k.parent_id || k.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: y,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), h = v.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const y = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const _ = (await va(y)).restored_ids || y;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: _ }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (w) {
      n({
        type: "SET_ERROR",
        payload: w instanceof Error ? w.message : String(w)
      });
    }
  }, [t.selectedIds, t.viewScope]), g = v.useCallback(
    async (y, w) => {
      try {
        await Mm(y, w), n({ type: "SET_SETTINGS", payload: { [y]: w } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), m = v.useCallback(
    async (y) => {
      const w = t.images.find((_) => _.id === y);
      if (w && !w.is_minimal)
        return w;
      try {
        $.log("fetchFullImageDetails: fetching full data", { id: y });
        const _ = await ld(y);
        return n({ type: "UPDATE_IMAGE", payload: _ }), _;
      } catch (_) {
        throw $.error("Failed to fetch image details", _), _;
      }
    },
    [t.images]
  );
  return v.useEffect(() => {
    (async () => {
      try {
        const w = await id();
        n({ type: "SET_SETTINGS", payload: w });
      } catch (w) {
        $.error("Failed to load settings", w);
      }
    })();
  }, []), v.useEffect(() => {
    u();
  }, [u]), v.useEffect(() => {
    const y = () => {
      a();
    }, w = (k) => {
      const f = k.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: f }
      });
    }, _ = (k) => {
      const f = k.detail;
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
    return window.addEventListener("meld-refresh", y), window.addEventListener("meld-scan-progress", w), window.addEventListener("meld-scan-finished", _), () => {
      window.removeEventListener("meld-refresh", y), window.removeEventListener("meld-scan-progress", w), window.removeEventListener("meld-scan-finished", _);
    };
  }, [a, t.scanStatus.progress.total]), v.useEffect(() => {
    a();
  }, [a]), /* @__PURE__ */ i.jsx(
    ad.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: a,
        loadMoreImages: o,
        refreshFavorites: u,
        deleteSelected: c,
        restoreSelected: h,
        updateSetting: g,
        fetchFullImageDetails: m
      },
      children: e
    }
  );
}, Pe = () => {
  const e = v.useContext(ad);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, Qe = (e) => {
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
}, wa = async () => {
  const e = await K.fetchApi("/meld/tags");
  return e.ok ? await e.json() : [];
}, Rm = async (e) => {
  const t = await K.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  if (!t.ok)
    throw new Error("Failed to create tag");
  return await t.json();
}, zm = async (e) => {
  if (!(await K.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  })).ok)
    throw new Error("Failed to delete tag");
}, Fm = async (e, t) => {
  const n = await K.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  if (!n.ok) {
    const r = await n.json();
    throw new Error(r.error || "Failed to rename tag");
  }
}, Am = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await K.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Om = async (e, t, n = !1, r) => {
  const l = await K.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  return l.ok ? await l.json() : { folders: [], images: [], image_count: 0 };
}, $m = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await K.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  return l.ok ? await l.json() : {};
}, Um = async (e, t, n) => {
  const r = await K.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  return r.ok ? (await r.json()).count : 0;
}, Vm = async (e) => {
  const t = await K.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  if (!t.ok) {
    const n = await t.json();
    throw new Error(n.error || "Failed to start scan");
  }
}, Wm = async () => {
  if (!(await K.fetchApi("/meld/scan/cancel", {
    method: "POST"
  })).ok)
    throw new Error("Failed to cancel scan");
}, od = () => {
  const { dispatch: e } = Pe(), [t, n] = v.useState(() => {
    const S = localStorage.getItem("meld-import-config"), b = {
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
        const W = JSON.parse(S);
        return { ...b, ...W, tags: [] };
      } catch {
        return b;
      }
    return b;
  });
  v.useEffect(() => {
    const { tags: S, ...b } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(b));
  }, [t]);
  const [r, l] = v.useState([]), [s, a] = v.useState([]), [o, u] = v.useState(0), [c, h] = v.useState(!1), [g, m] = v.useState([]), [y, w] = v.useState(""), [_, k] = v.useState(!1), [f, d] = v.useState(null);
  v.useEffect(() => {
    (async () => {
      try {
        const b = await ym();
        n((W) => W.custom_path ? W : { ...W, custom_path: b });
      } catch (b) {
        $.error("Failed to fetch home directory:", b);
      }
    })();
  }, []), v.useEffect(() => {
    const S = new AbortController();
    return (async () => {
      const W = t.type === "custom" ? t.custom_path : t.subfolder;
      if ($.log(
        `loadFolders started. Path: "${W}", Type: "${t.type}"`
      ), t.type === "custom" && !W) {
        $.log("Custom path is empty, skipping load."), l([]), a([]), u(0);
        return;
      }
      h(!0);
      const Y = W, O = t.type;
      try {
        $.log("Step 1: Fast load starting...");
        const Q = await Om(
          t.type,
          W,
          !0,
          S.signal
        );
        if (S.signal.aborted) {
          $.log("Step 1: Aborted.");
          return;
        }
        $.log(
          `Step 1 complete. Found ${Q.folders.length} folders, ${Q.images.length} images.`
        ), l(Q.folders), a(Q.images), u(null);
        const A = Q.folders.map((C) => C.name);
        A.length > 0 && ($.log(
          `Step 2: Metadata fetch starting for ${A.length} folders...`
        ), $m(
          O,
          Y,
          A,
          S.signal
        ).then((C) => {
          if (S.signal.aborted) {
            $.log("Step 2: Aborted.");
            return;
          }
          $.log("Step 2: Metadata fetch complete."), l(
            (F) => F.map((U) => {
              const X = C[U.name];
              return X ? { ...U, count: X.count, preview: X.preview } : U;
            })
          );
        }).catch((C) => {
          C.name !== "AbortError" && $.error("Step 2: Metadata fetch failed:", C);
        })), $.log("Step 3: Path image count starting..."), Um(O, Y, S.signal).then((C) => {
          if (S.signal.aborted) {
            $.log("Step 3: Aborted.");
            return;
          }
          $.log(`Step 3: Path image count complete: ${C}`), u(C);
        }).catch((C) => {
          C.name !== "AbortError" && $.error("Step 3: Path image count failed:", C);
        });
      } catch (Q) {
        if (Q.name === "AbortError") {
          $.log("Request aborted.");
          return;
        }
        $.error("Failed to load folders:", Q), l([]), a([]), u(0);
      } finally {
        S.signal.aborted || h(!1);
      }
    })(), () => {
      S.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const p = v.useCallback(async () => {
    k(!0);
    try {
      const S = await wa();
      m(S);
    } catch (S) {
      $.error("Failed to fetch tags:", S);
    } finally {
      k(!1);
    }
  }, []);
  v.useEffect(() => {
    p();
  }, [p]), v.useEffect(() => {
    const S = (b) => {
      b.key === "Escape" && (b.preventDefault(), b.stopImmediatePropagation(), f ? d(null) : e({ type: "CLOSE_MODAL" }));
    };
    return window.addEventListener("keydown", S, { capture: !0 }), () => window.removeEventListener("keydown", S, { capture: !0 });
  }, [f, e]);
  const j = v.useMemo(() => g.filter(
    (S) => S.name.toLowerCase().includes(y.toLowerCase()) && !t.tags.includes(S.name)
  ), [g, y, t.tags]), N = (S) => {
    const b = S.trim();
    b && !t.tags.includes(b) && (n({ ...t, tags: [...t.tags, b] }), w(""));
  }, M = (S) => {
    n({ ...t, tags: t.tags.filter((b) => b !== S) });
  }, x = (S) => {
    S.key === "Enter" && y.trim() && (S.preventDefault(), N(y.trim()));
  }, E = async () => {
    try {
      await Vm(t), e({
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
      $.error("Failed to start scan:", S), alert(`Failed to start scan: ${S}`);
    }
  }, P = (S) => {
    if (t.type === "custom") {
      const b = t.custom_path.includes("\\") ? "\\" : "/", W = t.custom_path.endsWith(b) ? `${t.custom_path}${S}` : `${t.custom_path}${b}${S}`;
      n({ ...t, custom_path: W });
    } else {
      const b = t.subfolder ? `${t.subfolder}/${S}` : S;
      n({ ...t, subfolder: b });
    }
  }, T = () => {
    if (t.type === "custom") {
      const S = t.custom_path.includes("\\") ? "\\" : "/", b = t.custom_path.split(S);
      if (b.length > 1) {
        b.pop();
        let W = b.join(S);
        W === "" && S === "/" && (W = "/"), n({ ...t, custom_path: W });
      }
    } else {
      const S = t.subfolder.split("/");
      S.pop(), n({ ...t, subfolder: S.join("/") });
    }
  };
  return Re.createPortal(
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
                      children: /* @__PURE__ */ i.jsx(Ce, { size: 20 })
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
                            onClick: () => M(S),
                            children: /* @__PURE__ */ i.jsx(Ce, { size: 12 })
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
                            onKeyDown: x
                          }
                        ),
                        y.trim() && !t.tags.includes(y.trim()) && /* @__PURE__ */ i.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => N(y),
                            children: /* @__PURE__ */ i.jsx(ya, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: _ ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? y && /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        y
                      ] }) : j.map((S) => /* @__PURE__ */ i.jsx(
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
                          /* @__PURE__ */ i.jsx(dm, { size: 16 }),
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
                          onClick: T,
                          children: [
                            /* @__PURE__ */ i.jsx(ed, { size: 16 }),
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
                    /* @__PURE__ */ i.jsx("div", { className: "meld-folder-list", children: c ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-loading", children: "Loading..." }) : r.length === 0 && s.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-browser-empty", children: "No items found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
                      r.map((S) => /* @__PURE__ */ i.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => P(S.name),
                          children: [
                            /* @__PURE__ */ i.jsx("div", { className: "meld-folder-icon-wrapper", children: S.preview ? /* @__PURE__ */ i.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: Qe(S.preview),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ i.jsx(rm, { size: 16 }) }),
                            /* @__PURE__ */ i.jsx("span", { className: "meld-folder-name", children: S.name }),
                            /* @__PURE__ */ i.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${S.count === null ? "meld-folder-count--loading" : ""}`,
                                children: S.count !== null ? `${S.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ i.jsx(td, { size: 14 })
                          ]
                        },
                        S.name
                      )),
                      s.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-browser-image-grid", children: s.map((S) => /* @__PURE__ */ i.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => d(S),
                          children: /* @__PURE__ */ i.jsx(
                            "img",
                            {
                              src: Qe(S),
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
                S.stopPropagation(), d(null);
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
                          onClick: () => d(null),
                          children: /* @__PURE__ */ i.jsx(Ce, { size: 24 })
                        }
                      ),
                      /* @__PURE__ */ i.jsx(
                        "img",
                        {
                          src: Qe(f),
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
}, Qm = () => {
  const { state: e, dispatch: t, updateSetting: n } = Pe(), [r, l] = v.useState("General"), [s, a] = v.useState({
    ...e.settings
  }), [o, u] = v.useState(
    {}
  ), [c, h] = v.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [g, m] = v.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [y, w] = v.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [_, k] = v.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, d] = v.useState(e.settings["gallery.trash_retention_days"].toString()), [p, j] = v.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [N, M] = v.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [x, E] = v.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [P, T] = v.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    S,
    b
  ] = v.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    W,
    Y
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
      const R = Object.keys(s).filter(
        (q) => s[q] !== e.settings[q] && !o[q]
      );
      if (R.length > 0)
        for (const q of R)
          await n(q, s[q]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (R, q) => {
      a((re) => ({
        ...re,
        [R]: !q
      }));
    },
    handleNumberChange: (R, q, re, ct) => {
      R === "gallery.initial_load_count" ? h(q) : R === "gallery.max_load_count" ? m(q) : R === "gallery.lineage_max_depth" ? w(q) : R === "viewer.thumbnail_window_size" ? k(q) : R === "gallery.trash_retention_days" ? d(q) : R === "gallery.auto_link_phash_threshold" ? j(q) : R === "gallery.suggest_phash_threshold" ? M(q) : R === "viewer.details.max_positive_prompt_lines" ? E(q) : R === "viewer.details.max_negative_prompt_lines" ? T(q) : R === "fullscreen.details.max_positive_prompt_lines" ? b(q) : R === "fullscreen.details.max_negative_prompt_lines" && Y(q);
      const be = Number.parseInt(q, 10);
      if (!Number.isNaN(be)) {
        let $e = be;
        re !== void 0 && $e < re && ($e = re), ct !== void 0 && $e > ct && ($e = ct), a((Jl) => ({
          ...Jl,
          [R]: $e
        }));
      }
    },
    handleNumberBlur: (R) => {
      R.key === "gallery.initial_load_count" ? h(
        s["gallery.initial_load_count"].toString()
      ) : R.key === "gallery.max_load_count" ? m(s["gallery.max_load_count"].toString()) : R.key === "gallery.lineage_max_depth" ? w(
        s["gallery.lineage_max_depth"].toString()
      ) : R.key === "viewer.thumbnail_window_size" ? k(
        s["viewer.thumbnail_window_size"].toString()
      ) : R.key === "gallery.trash_retention_days" ? d(
        s["gallery.trash_retention_days"].toString()
      ) : R.key === "gallery.auto_link_phash_threshold" ? j(
        s["gallery.auto_link_phash_threshold"].toString()
      ) : R.key === "gallery.suggest_phash_threshold" ? M(
        s["gallery.suggest_phash_threshold"].toString()
      ) : R.key === "viewer.details.max_positive_prompt_lines" ? E(
        s["viewer.details.max_positive_prompt_lines"].toString()
      ) : R.key === "viewer.details.max_negative_prompt_lines" ? T(
        s["viewer.details.max_negative_prompt_lines"].toString()
      ) : R.key === "fullscreen.details.max_positive_prompt_lines" ? b(
        s["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : R.key === "fullscreen.details.max_negative_prompt_lines" && Y(
        s["fullscreen.details.max_negative_prompt_lines"].toString()
      );
    },
    handleResetShortcuts: () => {
      a((R) => ({
        ...R,
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
    validateShortcut: (R) => R.trim() ? R.trim().split(/\s+/).every((re) => !!(re === "next" || re === "prev" || re === "delete" || re.startsWith("tag:") && re.length > 4 || re.startsWith("-tag:") && re.length > 5 || re.startsWith("tag-toggle:") && re.length > 11)) : !0,
    // Input states
    initialLoadCountInput: c,
    maxLoadCountInput: g,
    lineageMaxDepthInput: y,
    thumbnailWindowSizeInput: _,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: N,
    maxPositivePromptLinesInput: x,
    maxNegativePromptLinesInput: P,
    fullscreenMaxPositivePromptLinesInput: S,
    fullscreenMaxNegativePromptLinesInput: W
  };
}, z = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Do = ({
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
      z,
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
      z,
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
      z,
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
      z,
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
  ] }), c = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
    c()
  ] });
}, Hm = ({
  localSettings: e,
  handleToggle: t,
  handleNumberChange: n,
  handleNumberBlur: r,
  setLocalSettings: l,
  handleViewTrash: s,
  initialLoadCountInput: a,
  maxLoadCountInput: o,
  lineageMaxDepthInput: u,
  trashRetentionDaysInput: c,
  autoLinkPhashThresholdInput: h,
  suggestPhashThresholdInput: g
}) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
    /* @__PURE__ */ i.jsx(
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
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
      z,
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
      z,
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
    z,
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
] }), Bm = ({
  localSettings: e,
  handleToggle: t
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsx(
    z,
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
    z,
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
    z,
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
] }), Gm = ({
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
        z,
        {
          label: `Shortcut ${c === 9 ? 0 : c + 1} (Key: ${c === 9 ? 0 : c + 1})`,
          description: `Command to execute when pressing '${c === 9 ? 0 : c + 1}' in View/Full Screen mode.`,
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
        z,
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
      z,
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
}, Km = ({
  localSettings: e,
  setLocalSettings: t,
  handleToggle: n
}) => /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ i.jsx(
    z,
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
    z,
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
    z,
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
    z,
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
    z,
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
    z,
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
    z,
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
  /* @__PURE__ */ i.jsx(z, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ i.jsxs("label", { className: "meld-switch", children: [
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
  ] }) }),
  /* @__PURE__ */ i.jsx(
    z,
    {
      label: "Image Fit",
      description: "Choose how non-square images should be displayed in the sidebar.",
      children: /* @__PURE__ */ i.jsxs(
        "select",
        {
          className: "meld-select",
          value: e["sidebar.image_fit"],
          onChange: (r) => t((l) => ({
            ...l,
            "sidebar.image_fit": r.target.value
          })),
          children: [
            /* @__PURE__ */ i.jsx("option", { value: "cover", children: "Zoom to Fill (Cover)" }),
            /* @__PURE__ */ i.jsx("option", { value: "contain", children: "Fit to Frame (Contain)" })
          ]
        }
      )
    }
  )
] }), Ro = ({
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
  const c = () => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
      z,
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
    !u && c(),
    h()
  ] });
}, ud = () => {
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
    handleResetShortcuts: h,
    handleViewTrash: g,
    validateShortcut: m,
    // Input states
    initialLoadCountInput: y,
    maxLoadCountInput: w,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: k,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: d,
    suggestPhashThresholdInput: p,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: N,
    fullscreenMaxPositivePromptLinesInput: M,
    fullscreenMaxNegativePromptLinesInput: x
  } = Qm(), E = [
    { id: "General", label: "General" },
    { id: "Sidebar", label: "Sidebar" },
    { id: "Search", label: "Search" },
    { id: "View", label: "View" },
    { id: "View Details", label: "View Details" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Full Screen Detail", label: "Full Screen Detail" },
    { id: "Shortcuts", label: "Shortcuts" }
  ], P = () => {
    switch (e) {
      case "General":
        return /* @__PURE__ */ i.jsx(
          Hm,
          {
            localSettings: n,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            setLocalSettings: r,
            handleViewTrash: g,
            initialLoadCountInput: y,
            maxLoadCountInput: w,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: f,
            autoLinkPhashThresholdInput: d,
            suggestPhashThresholdInput: p
          }
        );
      case "Sidebar":
        return /* @__PURE__ */ i.jsx(
          Km,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o
          }
        );
      case "Search":
        return /* @__PURE__ */ i.jsx(
          Bm,
          {
            localSettings: n,
            handleToggle: o
          }
        );
      case "View":
        return /* @__PURE__ */ i.jsx(
          Ro,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: k,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: N
          }
        );
      case "View Details":
        return /* @__PURE__ */ i.jsx(
          Ro,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            thumbnailWindowSizeInput: k,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: N,
            showDetailsOnly: !0
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ i.jsx(
          Do,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: M,
            maxNegativePromptLinesInput: x
          }
        );
      case "Full Screen Detail":
        return /* @__PURE__ */ i.jsx(
          Do,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: o,
            handleNumberChange: u,
            handleNumberBlur: c,
            maxPositivePromptLinesInput: M,
            maxNegativePromptLinesInput: x,
            showDetailsOnly: !0
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ i.jsx(
          Gm,
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
  return Re.createPortal(
    /* @__PURE__ */ i.jsx("div", { className: "meld-modal-overlay", onClick: a, children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "meld-modal-content meld-settings-modal",
        onClick: (T) => T.stopPropagation(),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: a,
                children: /* @__PURE__ */ i.jsx(Ce, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ i.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ i.jsx("div", { className: "meld-tabs", children: E.map((T) => /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === T.id ? "active" : ""}`,
                onClick: () => t(T.id),
                children: T.label
              },
              T.id
            )) }) }),
            /* @__PURE__ */ i.jsx("div", { className: "meld-modal-body", children: P() })
          ] })
        ]
      }
    ) }),
    document.fullscreenElement || document.body
  );
}, it = "none", cd = ({
  imageIds: e,
  initialTags: t,
  onClose: n
}) => {
  const { dispatch: r, refreshImages: l } = Pe(), [s, a] = v.useState([]), [o, u] = v.useState(t), [c, h] = v.useState(""), [g, m] = v.useState(!0), [y, w] = v.useState(!1), _ = v.useRef(null), k = e.length > 1, f = v.useCallback(async () => {
    m(!0);
    try {
      const x = await wa();
      a(x);
    } catch (x) {
      console.error("Failed to fetch tags:", x);
    } finally {
      m(!1);
    }
  }, []);
  v.useEffect(() => {
    f();
  }, [f]), v.useEffect(() => {
    _.current && _.current.focus();
    const x = (E) => {
      E.key === "Escape" && (E.preventDefault(), E.stopPropagation(), E.stopImmediatePropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => window.removeEventListener("keydown", x, {
      capture: !0
    });
  }, [n]);
  const d = v.useMemo(() => s.filter(
    (x) => x.name.toLowerCase().includes(c.toLowerCase()) && !o.includes(x.name)
  ), [s, c, o]), p = (x) => {
    const E = x.trim();
    if (E.toLowerCase() === it) {
      alert(
        `Tag name '${it}' is reserved for search and cannot be used.`
      );
      return;
    }
    E && !o.includes(E) && (u([...o, E]), h(""));
  }, j = (x) => {
    u(o.filter((E) => E !== x));
  }, N = async () => {
    w(!0);
    try {
      if (k) {
        const x = o.filter((P) => !t.includes(P)), E = t.filter(
          (P) => !o.includes(P)
        );
        await Si(e, x, E);
      } else
        await km(e[0], o);
      await l(), r({ type: "CLEAR_SELECTION" }), n();
    } catch (x) {
      console.error("Failed to update tags:", x), alert("Failed to update tags.");
    } finally {
      w(!1);
    }
  }, M = (x) => {
    x.key === "Enter" && c.trim() ? (x.preventDefault(), x.stopPropagation(), p(c.trim())) : x.key === "Escape" && (x.preventDefault(), x.stopPropagation(), n(), document.fullscreenElement && document.exitFullscreen().catch(() => {
    }));
  };
  return Re.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: (x) => {
          x.stopPropagation(), n();
        },
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ i.jsx(on, { size: 18 }),
              /* @__PURE__ */ i.jsx("h3", { style: { margin: 0 }, children: k ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ i.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ i.jsx(Ce, { size: 20 }) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-body", children: [
            k && /* @__PURE__ */ i.jsx(
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
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: k ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-selected", children: o.length === 0 ? /* @__PURE__ */ i.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : o.map((x) => /* @__PURE__ */ i.jsxs("span", { className: "meld-tag-edit-badge", children: [
                x,
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => j(x),
                    children: /* @__PURE__ */ i.jsx(Ce, { size: 12 })
                  }
                )
              ] }, x)) })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ i.jsx(zn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: c,
                    onChange: (x) => h(x.target.value),
                    onKeyDown: M
                  }
                ),
                c.trim() && !o.includes(c.trim()) && /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => p(c),
                    children: [
                      /* @__PURE__ */ i.jsx(ya, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : d.length === 0 ? c ? /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : d.map((x) => /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => p(x.name),
                  children: x.name
                },
                x.id
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
}, dd = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: s } = Pe(), a = v.useRef(!0);
  v.useEffect(() => () => {
    a.current = !1;
  }, []);
  const o = v.useRef(l.viewerImageId);
  v.useEffect(() => {
    o.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const u = v.useCallback(() => {
    s({ type: "CLOSE_MODAL" });
  }, [s]), c = v.useCallback(
    (m) => {
      if (!a.current) return;
      const y = o.current;
      if (y === null || !m.has(y))
        return;
      const w = l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
        (f) => f.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && f.has_children)
      ), _ = w.findIndex(
        (f) => f.id === y
      );
      if (_ === -1) return;
      let k = !1;
      for (let f = _ + 1; f < w.length; f++)
        if (!m.has(w[f].id)) {
          s({
            type: "OPEN_VIEWER",
            payload: { id: w[f].id, mode: l.viewerMode }
          }), k = !0;
          break;
        }
      if (!k) {
        for (let f = _ - 1; f >= 0; f--)
          if (!m.has(w[f].id)) {
            s({
              type: "OPEN_VIEWER",
              payload: { id: w[f].id, mode: l.viewerMode }
            }), k = !0;
            break;
          }
      }
      k || s({ type: "CLOSE_VIEWER" });
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
        (_) => _.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && _.has_children)
      ), y = new Set(e), w = m.filter(
        (_) => y.has(_.id)
      );
      if (c(y), await xi(e, n), !a.current) return;
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
        (_) => _.exists !== !1 && !(l.settings["gallery.hide_parent_images"] && _.has_children)
      ), y = new Set(e);
      for (const _ of e) {
        const k = await _i(_);
        if (!a.current) return;
        for (const f of k)
          y.add(f.id);
      }
      const w = m.filter(
        (_) => y.has(_.id)
      );
      if (c(y), await xi(Array.from(y), n), !a.current) return;
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
  return Re.createPortal(
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
                children: /* @__PURE__ */ i.jsx(Ce, { size: 20 })
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
                        Yp,
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
}, fd = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = Pe(), [l, s] = v.useState([]), [a, o] = v.useState(!0), [u, c] = v.useState(!1), h = t.images.find((d) => d.id === e), g = v.useCallback(async () => {
    o(!0);
    try {
      const d = t.settings["gallery.suggest_phash_threshold"], p = await Sm(e, d);
      s(p);
    } catch (d) {
      console.error("Failed to load suggestions:", d);
    } finally {
      o(!1);
    }
  }, [e, t.settings]);
  v.useEffect(() => {
    g();
  }, [g]);
  const m = async (d) => {
    if (d == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!h || d === h.parent_id) && !(h.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Po(e, d), await ld(e), await r(), n({ type: "CLOSE_MODAL" });
      } catch (p) {
        console.error("Failed to link parent:", p);
      }
  }, y = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Po(e, null), await r(), n({ type: "CLOSE_MODAL" });
      } catch (d) {
        console.error("Failed to remove source:", d), alert("Failed to remove source image.");
      }
  }, w = async (d) => {
    o(!0);
    try {
      const p = await Am(d), { id: j } = await sd({
        filename: p.name,
        subfolder: p.subfolder || "",
        type: p.type || "input"
      });
      if (j === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await m(j);
    } catch (p) {
      console.error("Failed to upload/register image:", p);
    } finally {
      o(!1);
    }
  }, _ = (d) => {
    d.preventDefault(), d.stopPropagation(), c(!1);
    const p = d.dataTransfer.files[0];
    p != null && p.type.startsWith("image/") && w(p);
  };
  if (!h) return null;
  const k = l.filter((d) => d.is_source_match), f = l.filter((d) => !d.is_source_match);
  return Re.createPortal(
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onClick: () => n({ type: "CLOSE_MODAL" }),
        children: /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-content", onClick: (d) => d.stopPropagation(), children: [
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
                children: /* @__PURE__ */ i.jsx(Ce, { size: 20 })
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
                        /* @__PURE__ */ i.jsx(am, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        src: Qe({
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
                      children: /* @__PURE__ */ i.jsx(im, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: `meld-drop-zone ${u ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (d) => {
                  d.preventDefault(), d.stopPropagation(), c(!0);
                },
                onDragOver: (d) => {
                  d.preventDefault(), d.stopPropagation(), d.dataTransfer.dropEffect = "copy", c(!0);
                },
                onDragLeave: (d) => {
                  d.preventDefault(), d.stopPropagation(), c(!1);
                },
                onDrop: _,
                children: [
                  /* @__PURE__ */ i.jsx(gm, { size: 32 }),
                  /* @__PURE__ */ i.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            a ? /* @__PURE__ */ i.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestions-container", children: [
              k.length > 0 && /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: k.map((d) => {
                  const p = d.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && m(d.id),
                      style: {
                        cursor: p ? "default" : "pointer",
                        ...p ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Qe(d), alt: d.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: d.filename }),
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
                    d.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ i.jsxs("section", { children: [
                /* @__PURE__ */ i.jsx("h3", { children: "Visual Matches (pHash)" }),
                f.length > 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-suggestion-grid", children: f.map((d) => {
                  const p = d.id === h.parent_id;
                  return /* @__PURE__ */ i.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${p ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !p && m(d.id),
                      style: {
                        cursor: p ? "default" : "pointer",
                        ...p ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ i.jsx("img", { src: Qe(d), alt: d.filename }),
                        /* @__PURE__ */ i.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ i.jsx("span", { className: "meld-suggestion-filename", children: d.filename }),
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
                                  Math.round((64 - d.distance) / 64 * 100),
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
                    d.id
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
}, Ym = () => {
  const { state: e, dispatch: t } = Pe();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    e.activeModal.type === "parent_selection" && Re.createPortal(
      /* @__PURE__ */ i.jsx(fd, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && Re.createPortal(/* @__PURE__ */ i.jsx(od, {}), document.body),
    e.activeModal.type === "settings" && Re.createPortal(/* @__PURE__ */ i.jsx(ud, {}), document.body),
    e.activeModal.type === "tag_edit" && Re.createPortal(
      /* @__PURE__ */ i.jsx(
        cd,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && Re.createPortal(
      /* @__PURE__ */ i.jsx(
        dd,
        {
          imageIds: e.activeModal.imageIds,
          hasLineage: e.activeModal.hasLineage,
          isPermanent: e.activeModal.isPermanent
        }
      ),
      document.body
    )
  ] });
}, pd = (e, t) => {
  const n = v.useCallback(async (o) => {
    try {
      const u = await jm(o.id);
      if (!u.workflow) {
        alert("No workflow information is saved for this image.");
        return;
      }
      await window.app.loadGraphData(
        u.workflow
      ), $.log("Workflow restored successfully from Meld");
    } catch (u) {
      $.error("Error restoring workflow:", u), alert("Failed to restore workflow.");
    }
  }, []), r = v.useCallback(async (o) => {
    try {
      const u = await Em(o.id), c = "MeldUnifiedLoader", h = window.app, m = window.LiteGraph.createNode(c);
      if (!m) {
        console.error(`Node type ${c} not found.`), alert(
          `Node type ${c} not found. Please make sure the Meld Unified Loader node is installed.`
        );
        return;
      }
      const y = {
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
      if (m.widgets) {
        for (const [f, d] of Object.entries(y)) {
          const p = u[f];
          if (p != null) {
            const j = m.widgets.find(
              (N) => N.name === d
            );
            j && (j.value = p);
          }
        }
        const k = m.widgets.find(
          (f) => f.name === "control_after_generate"
        );
        k && (k.value = "fixed");
      }
      const w = h.canvas.ds.offset, _ = h.canvas.ds.scale;
      m.pos = [(-w[0] + 400) / _, (-w[1] + 300) / _], h.graph.add(m), h.canvas.selectNode(m), h.canvas.centerOnNode(m);
    } catch (u) {
      console.error("Error adding Unified Loader:", u), alert("Failed to load settings.");
    }
  }, []), l = v.useCallback(
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
  ), s = v.useCallback(
    (o) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: o.id }
      });
    },
    [t]
  ), a = v.useCallback(
    async (o, u) => {
      try {
        const c = o.id, g = (await va([c])).restored_ids || [c];
        t({ type: "REMOVE_IMAGES", payload: g }), u == null || u();
      } catch (c) {
        t({
          type: "SET_ERROR",
          payload: c instanceof Error ? c.message : String(c)
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
    handleRestore: a
  };
}, md = (e, t) => {
  const n = v.useCallback(
    (r) => {
      const l = t["gallery.lineage_max_depth"];
      if (l === 0) return [];
      if (r.ancestors && r.ancestors.length > 0)
        return r.ancestors.slice(0, l).map((c) => ({
          id: c.id,
          imgSrc: Qe(c)
        }));
      const s = r.parent_id;
      if (!s || !r.parent_filename) return [];
      const a = e.find((c) => c.id === s);
      let o = null;
      if (a ? o = Qe(a) : o = Qe({
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
}, hd = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = Pe(), l = t.selectedIds.has(e.id), s = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: a,
    handleAddUnifiedLoader: o,
    handleEditSource: u,
    handleEditTags: c
  } = pd(t, n), { getParentChain: h } = md(t.images, t.settings), [g, m] = v.useState(null), [y, w] = v.useState(!1), [_, k] = v.useState(null), [f, d] = v.useState(!1), p = v.useRef(null), j = async (A, C, F = !1) => {
    try {
      await navigator.clipboard.writeText(A), F ? (d(!0), setTimeout(() => d(!1), 2e3)) : (k(C), setTimeout(() => k(null), 2e3));
    } catch (U) {
      console.error("Failed to copy text: ", U);
    }
  };
  v.useEffect(() => {
    const A = (F) => {
      F.key === "Escape" && (g ? m(null) : w(!1));
    }, C = (F) => {
      p.current && !p.current.contains(F.target) && w(!1);
    };
    return window.addEventListener("keydown", A), y && document.addEventListener("mousedown", C), () => {
      window.removeEventListener("keydown", A), document.removeEventListener("mousedown", C);
    };
  }, [y, g]);
  const N = h(e), x = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, E = Qe(e);
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: s,
    popupContent: g,
    setPopupContent: m,
    isMenuOpen: y,
    setIsMenuOpen: w,
    copiedLabel: _,
    popupCopied: f,
    menuRef: p,
    parentChain: N,
    displayFilename: x,
    imgSrc: E,
    handleCopy: j,
    handleClick: (A) => {
      A.shiftKey ? (A.preventDefault(), A.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : A.ctrlKey || A.metaKey || t.selectedIds.size > 0 ? (A.preventDefault(), A.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleContainerClick: (A) => {
      A.shiftKey ? (A.preventDefault(), A.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : A.ctrlKey || A.metaKey || t.selectedIds.size > 0 ? (A.preventDefault(), A.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (A.preventDefault(), A.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (A) => {
      (A.shiftKey || A.ctrlKey || A.metaKey || t.selectedIds.size > 0 || !A.target.closest("img.meld-image-card__thumbnail")) && A.preventDefault();
    },
    handleKeyDown: (A) => {
      (A.key === "Enter" || A.key === " ") && (A.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
    fetchFullImageDetails: r
  };
}, Xm = ({
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
      children: /* @__PURE__ */ i.jsx(cm, { size: 16 })
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
      children: /* @__PURE__ */ i.jsx(Mo, { size: 16 })
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
          /* @__PURE__ */ i.jsx(Mo, { size: 14 }),
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
          /* @__PURE__ */ i.jsx(Xp, { size: 14 }),
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
          /* @__PURE__ */ i.jsx(fm, { size: 14 }),
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
] }), Zm = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => Re.createPortal(
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
                l ? /* @__PURE__ */ i.jsx(qc, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ i.jsx(
                  tm,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  Ce,
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
), gd = ul.memo(
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
      menuRef: h,
      parentChain: g,
      displayFilename: m,
      imgSrc: y,
      handleCopy: w,
      handleClick: _,
      handleContainerClick: k,
      handleMouseDown: f,
      handleKeyDown: d,
      handleRestoreWorkflow: p,
      handleAddUnifiedLoader: j,
      handleEditSource: N,
      handleEditTags: M,
      fetchFullImageDetails: x
    } = hd(e), E = t.settings["sidebar.image_fit"] || "cover";
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `meld-image-card ${r ? "meld-image-card--selected" : ""}`,
        onClick: k,
        onMouseDown: f,
        onKeyDown: d,
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
            "img",
            {
              src: y,
              className: "meld-image-card__thumbnail",
              style: { objectFit: E },
              alt: e.filename,
              loading: "lazy",
              onMouseDown: f,
              onClick: (P) => {
                P.stopPropagation(), _(P);
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
                (P, T) => P.imgSrc && /* @__PURE__ */ i.jsx(
                  "img",
                  {
                    src: P.imgSrc,
                    className: "meld-lineage-badge__parent-thumb",
                    loading: "lazy",
                    onClick: (S) => {
                      S.stopPropagation(), n({
                        type: "OPEN_VIEWER",
                        payload: {
                          id: P.id || e.id,
                          mode: "lineage"
                        }
                      });
                    },
                    title: T === 0 ? "Source" : T === 1 ? "Grand-Source" : `Ancestor (S${T + 1})`,
                    alt: "source thumb"
                  },
                  P.id || T
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
                onClick: async (P) => {
                  P.stopPropagation();
                  const T = await x(e.id);
                  s({
                    title: "Model",
                    text: T.model_name || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (P) => {
                        P.stopPropagation();
                        const T = await x(e.id);
                        w(T.model_name || "-", "Model");
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
                onClick: async (P) => {
                  P.stopPropagation();
                  const T = await x(e.id);
                  s({
                    title: "Positive Prompt",
                    text: T.positive_prompt || T.positive || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (P) => {
                        P.stopPropagation();
                        const T = await x(e.id);
                        w(
                          T.positive_prompt || T.positive || "-",
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
                onClick: async (P) => {
                  P.stopPropagation();
                  const T = await x(e.id);
                  s({
                    title: "Negative Prompt",
                    text: T.negative_prompt || T.negative || "-"
                  });
                },
                children: [
                  /* @__PURE__ */ i.jsx(
                    "div",
                    {
                      className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${u === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                      title: "Click to copy",
                      onClick: async (P) => {
                        P.stopPropagation();
                        const T = await x(e.id);
                        w(
                          T.negative_prompt || T.negative || "-",
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
                onClick: (P) => {
                  P.stopPropagation(), M();
                },
                children: [
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                  /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((P, T) => /* @__PURE__ */ i.jsx(
                    "span",
                    {
                      className: "meld-image-card__tag",
                      children: P
                    },
                    `${P}-${T}`
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
            Xm,
            {
              isMenuOpen: a,
              setIsMenuOpen: o,
              menuRef: h,
              onAddUnifiedLoader: j,
              onRestoreWorkflow: p,
              onEditSource: N,
              onEditTags: M
            }
          ),
          l && /* @__PURE__ */ i.jsx(
            Zm,
            {
              title: l.title,
              text: l.text,
              onClose: () => s(null),
              onCopy: (P) => w(P, "", !0),
              isCopied: c
            }
          )
        ]
      }
    );
  }
);
gd.displayName = "DetailedImageCard";
const yd = ul.memo(
  ({ image: e }) => {
    const {
      state: t,
      isSelected: n,
      imgSrc: r,
      handleContainerClick: l,
      handleMouseDown: s,
      handleKeyDown: a,
      handleClick: o
    } = hd(e), u = t.settings["sidebar.image_fit"] || "cover";
    return /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `meld-image-card meld-image-card--grid-only ${n ? "meld-image-card--selected" : ""}`,
        onClick: l,
        onMouseDown: s,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ i.jsx("div", { className: "meld-image-card__thumbnail-wrapper", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: r,
            className: "meld-image-card__thumbnail",
            style: { objectFit: u },
            alt: e.filename,
            loading: "lazy",
            onMouseDown: s,
            onClick: (c) => {
              c.stopPropagation(), o(c);
            }
          }
        ) })
      }
    );
  }
);
yd.displayName = "SimpleImageCard";
const Jm = ({ image: e }) => {
  const { state: t } = Pe();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ i.jsx(yd, { image: e }) : /* @__PURE__ */ i.jsx(gd, { image: e });
}, qm = ({
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
}, eh = () => {
  const { state: e, dispatch: t } = Pe(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await Wm(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
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
        children: /* @__PURE__ */ i.jsx(mm, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ i.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ i.jsx(em, { size: 14, className: "meld-success-icon" }),
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
}, th = () => {
  const { state: e, refreshFavorites: t } = Pe(), [n, r] = v.useState(!1), [l, s] = v.useState(null), [a, o] = v.useState(null), [u, c] = v.useState(""), [h, g] = v.useState("");
  v.useEffect(() => {
    if (l) {
      const k = setTimeout(() => s(null), 3e3);
      return () => clearTimeout(k);
    }
  }, [l]);
  const m = v.useCallback(
    async (k, f, d) => {
      k.stopPropagation();
      const p = `Are you sure you want to delete the favorite "${d}"?`;
      if (window.confirm(p))
        try {
          await bo(f), await t();
        } catch (j) {
          $.error("Failed to delete favorite", j);
        }
    },
    [t]
  ), y = v.useCallback(
    (k, f) => {
      k.stopPropagation(), o(f), c(f.name), g(f.query);
    },
    []
  ), w = v.useCallback(async () => {
    if (!(!a || !u.trim() || !h.trim()))
      try {
        r(!0), await Lm(
          a.id,
          u,
          h
        ), await t(), o(null), s("Favorite updated.");
      } catch (k) {
        $.error("Failed to update favorite", k), s("Failed to update favorite.");
      } finally {
        r(!1);
      }
  }, [a, u, h, t]), _ = v.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (f) => f.query === e.searchQuery
    )) {
      const f = e.favorites.find((d) => d.query === e.searchQuery);
      if (f) {
        r(!0);
        try {
          await bo(f.id), await t(), s("Favorite removed.");
        } catch (d) {
          $.error("Failed to delete favorite:", d);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Tm(e.searchQuery, e.searchQuery), await t(), s(
        `Favorite added!
You can select favorites when the search query is empty.`
      );
    } catch (f) {
      $.error("Failed to save favorite:", f);
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
    editFavoriteQuery: h,
    setEditFavoriteQuery: g,
    handleDeleteFavorite: m,
    handleEditFavorite: y,
    handleSaveEditFavorite: w,
    handleSaveFavorite: _,
    setToastMessage: s
  };
}, nh = () => {
  const { state: e, dispatch: t } = Pe(), [n, r] = v.useState(e.searchQuery), [l, s] = v.useState([]), [a, o] = v.useState(!1), [u, c] = v.useState([]), [h, g] = v.useState(-1), m = v.useRef(null), y = v.useRef(e.searchQuery), w = n !== y.current;
  v.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      c([]);
      return;
    }
    !n && !e.searchQuery ? Nm().then((x) => {
      c(x);
    }) : c([]);
  }, [
    n,
    e.searchQuery,
    e.settings["search.quick_suggestions"]
  ]), v.useEffect(() => {
    r(e.searchQuery), y.current = e.searchQuery;
  }, [e.searchQuery]), v.useEffect(() => {
    var x;
    (x = m.current) == null || x.focus();
  }, []);
  const _ = v.useCallback(
    (x, E = !0) => {
      y.current !== x && ($.log("SearchBar: triggering search", { query: x }), t({ type: "SET_SEARCH_QUERY", payload: x }), E && o(!1), y.current = x);
    },
    [t]
  );
  v.useEffect(() => {
    const x = setTimeout(async () => {
      if (n === y.current)
        return;
      if (!e.settings["search.input_suggest"]) {
        s([]), o(!1);
        return;
      }
      const E = n.split(/\s+/), P = E[E.length - 1];
      if (P) {
        const T = P.match(
          /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):(.*)$/i
        );
        if (T) {
          const S = T[1].toLowerCase(), b = T[2], W = await Cm(b, S);
          s(W), o(W.length > 0), g(-1);
        } else
          s([]), o(!1);
      } else
        s([]), o(!1);
    }, 300);
    return () => clearTimeout(x);
  }, [n, e.settings["search.input_suggest"]]);
  const k = v.useCallback(
    (x) => {
      var Q;
      const E = n.split(/\s+/), T = (E.pop() || "").match(/^([-!])/), S = T ? T[1] : "", Y = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(x.type) ? x.value : `"${x.value}"`, O = `${[
        ...E,
        `${S}${x.type}:${Y}`
      ].join(" ").trim()} `;
      r(O), s([]), o(!1), (Q = m.current) == null || Q.focus();
    },
    [n]
  ), f = (x) => {
    x.key === "Enter" ? _(n) : x.key === "Tab" ? a && h >= 0 && (k(l[h]), x.preventDefault()) : x.key === "ArrowDown" ? a && (g((E) => Math.min(E + 1, l.length - 1)), x.preventDefault()) : x.key === "ArrowUp" ? a && (g((E) => Math.max(E - 1, -1)), x.preventDefault()) : x.key === "Escape" && o(!1);
  }, d = v.useCallback(() => {
    r(""), _("");
  }, [_]), p = v.useCallback(
    (x, E) => {
      const S = [
        "date",
        "after",
        "before",
        "has_source",
        "has_derivatives"
      ].includes(x) ? E : `"${E}"`, b = `${x}:${S}`;
      r(b), _(b);
    },
    [_]
  ), j = v.useCallback(
    (x) => {
      r(x), x || _("");
    },
    [_]
  ), N = v.useCallback(() => {
    if (n === y.current) return;
    const x = n.split(/\s+/), E = x[x.length - 1];
    E != null && E.match(
      /^[-!]?(tag|pos|neg|model|date|after|before|has_source|has_derivatives|sort):/i
    ) && o(!0);
  }, [n]), M = v.useCallback(() => {
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
    handleSearch: _,
    handleKeyDown: f,
    applySuggestion: k,
    clearSearch: d,
    applySearchSuggestion: p,
    handleInputChange: j,
    handleInputFocus: N,
    handleInputBlur: M
  };
}, rh = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, s] = v.useState(!1), [a, o] = v.useState(!1), [u, c] = v.useState(!1);
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
                  children: /* @__PURE__ */ i.jsx(rd, { size: 14 })
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
}, zo = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ i.jsx(on, { size: 12 });
    case "model":
      return /* @__PURE__ */ i.jsx(Jp, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ i.jsx(hm, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ i.jsx(qp, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ i.jsx(Jc, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ i.jsx(Zc, { size: 12 });
    case "sort":
      return /* @__PURE__ */ i.jsx(Zp, { size: 12 });
    default:
      return null;
  }
}, lh = ({
  showSuggestions: e,
  suggestions: t,
  selectedIndex: n,
  setSelectedIndex: r,
  applySuggestion: l,
  inputValue: s,
  searchQuery: a,
  searchSuggestions: o,
  applySearchSuggestion: u,
  favorites: c,
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
      children: t.map((k, f) => /* @__PURE__ */ i.jsx(
        "div",
        {
          onMouseDown: (d) => {
            d.preventDefault(), l(k);
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
                children: zo(k.type)
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
                children: k.type
              }
            ),
            /* @__PURE__ */ i.jsx(
              "span",
              {
                style: {
                  color: k.value === it ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                  fontSize: "14px",
                  fontWeight: k.value === it ? "bold" : "normal"
                },
                children: k.value === it ? k.type === "tag" ? `Untagged (${it})` : `No ${k.type} (${it})` : k.value
              }
            )
          ] })
        },
        `${k.type}:${k.value}`
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
      children: o.map((k) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          onClick: () => u(k.type, k.value),
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
                children: zo(k.type)
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
                children: k.type
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
                children: k.value
              }
            )
          ]
        },
        `${k.type}:${k.value}`
      ))
    }
  ), _ = () => s || c.length === 0 ? null : /* @__PURE__ */ i.jsxs(
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
              /* @__PURE__ */ i.jsx(wi, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: c.map((k) => /* @__PURE__ */ i.jsx(
              rh,
              {
                fav: k,
                onSelect: h,
                onEdit: g,
                onDelete: m
              },
              k.id
            ))
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    y(),
    w(),
    _()
  ] });
}, sh = () => {
  const { state: e } = Pe(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: s,
    selectedIndex: a,
    setSelectedIndex: o,
    inputRef: u,
    isQueryChanged: c,
    handleSearch: h,
    handleKeyDown: g,
    applySuggestion: m,
    clearSearch: y,
    applySearchSuggestion: w,
    handleInputChange: _,
    handleInputFocus: k,
    handleInputBlur: f
  } = nh(), {
    isSaving: d,
    toastMessage: p,
    editingFavorite: j,
    setEditingFavorite: N,
    editFavoriteName: M,
    setEditFavoriteName: x,
    editFavoriteQuery: E,
    setEditFavoriteQuery: P,
    handleDeleteFavorite: T,
    handleEditFavorite: S,
    handleSaveEditFavorite: b,
    handleSaveFavorite: W
  } = th(), Y = v.useRef(null);
  return v.useEffect(() => {
    j && Y.current && Y.current.focus();
  }, [j]), /* @__PURE__ */ i.jsxs(
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
                          background: c ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                          border: c ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                          cursor: "pointer",
                          padding: "6px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                          flexShrink: 0,
                          borderRadius: "4px",
                          transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow: c ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                        },
                        onMouseEnter: (O) => {
                          O.currentTarget.style.transform = "translateY(-1px)", c ? (O.currentTarget.style.filter = "brightness(1.15)", O.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : O.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                        },
                        onMouseLeave: (O) => {
                          O.currentTarget.style.transform = "none", c ? (O.currentTarget.style.filter = "none", O.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : O.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                        },
                        onMouseDown: (O) => {
                          O.currentTarget.style.transform = "translateY(1px)", O.currentTarget.style.boxShadow = "none";
                        },
                        onMouseUp: (O) => {
                          O.currentTarget.style.transform = "translateY(-1px)";
                        },
                        title: "Search (Enter)",
                        children: [
                          /* @__PURE__ */ i.jsx(
                            zn,
                            {
                              size: 16,
                              color: c ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                              style: {
                                transition: "color 0.2s",
                                filter: c ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                              }
                            }
                          ),
                          c && /* @__PURE__ */ i.jsx(
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
                        onChange: (O) => _(O.target.value),
                        onKeyDown: g,
                        onBlur: f,
                        onFocus: k,
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
                        onClick: W,
                        disabled: d,
                        title: e.favorites.some((O) => O.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                          wi,
                          {
                            size: 16,
                            color: e.favorites.some((O) => O.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                            fill: e.favorites.some((O) => O.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
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
                        children: /* @__PURE__ */ i.jsx(Ce, { size: 16, color: "var(--meld-text-secondary)" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ i.jsx(
                lh,
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
                  onSelectFavorite: (O) => {
                    n(O), h(O);
                  },
                  onEditFavorite: S,
                  onDeleteFavorite: T
                }
              )
            ]
          }
        ),
        j && Re.createPortal(
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
                  onClick: (O) => O.stopPropagation(),
                  children: [
                    /* @__PURE__ */ i.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ i.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ i.jsx(wi, { size: 20, color: "var(--meld-accent-color)" }),
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
                          children: /* @__PURE__ */ i.jsx(Ce, { size: 20 })
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
                                    ref: Y,
                                    type: "text",
                                    value: M,
                                    onChange: (O) => x(O.target.value),
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
                                    onKeyDown: (O) => {
                                      O.key === "Enter" && b(), O.key === "Escape" && N(null);
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
                                    onChange: (O) => P(O.target.value),
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
                                    onKeyDown: (O) => {
                                      O.key === "Enter" && !O.shiftKey && (O.preventDefault(), b()), O.key === "Escape" && N(null);
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
                          onClick: b,
                          disabled: d || !M.trim() || !E.trim(),
                          children: d ? "Saving..." : "Save Changes"
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
}, ih = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = v.useState([]), [l, s] = v.useState(!0), [a, o] = v.useState(""), [u, c] = v.useState(""), [h, g] = v.useState(!1), [m, y] = v.useState(null), [w, _] = v.useState(""), [k, f] = v.useState(!1), d = v.useRef(null), p = v.useCallback(async () => {
    s(!0);
    try {
      const S = await wa();
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
    m !== null && d.current && (d.current.focus(), d.current.select());
  }, [m]);
  const j = async (S) => {
    S.preventDefault();
    const b = u.trim();
    if (!(!b || h)) {
      if (b.toLowerCase() === it) {
        alert(
          `Tag name '${it}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((W) => W.name.toLowerCase() === b.toLowerCase())) {
        alert(`Tag "${b}" already exists.`);
        return;
      }
      g(!0);
      try {
        await Rm(b), c(""), await p();
      } catch (W) {
        console.error("Failed to add tag:", W);
      } finally {
        g(!1);
      }
    }
  }, N = async (S, b) => {
    if (confirm(`Are you sure you want to delete tag "${b}"?`))
      try {
        await zm(S), await p();
      } catch (W) {
        console.error("Failed to delete tag:", W);
      }
  }, M = (S) => {
    y(S.id), _(S.name);
  }, x = () => {
    y(null), _("");
  }, E = async (S) => {
    S.preventDefault();
    const b = w.trim();
    if (!b || m === null || k) return;
    if (b.toLowerCase() === it) {
      alert(
        `Tag name '${it}' is reserved for search and cannot be used.`
      );
      return;
    }
    const W = n.find((Y) => Y.id === m);
    if (W && W.name === b) {
      x();
      return;
    }
    if (n.some(
      (Y) => Y.id !== m && Y.name.toLowerCase() === b.toLowerCase()
    )) {
      alert(`Tag "${b}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Fm(m, b), x(), await p();
    } catch (Y) {
      console.error("Failed to rename tag:", Y), alert(Y instanceof Error ? Y.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, P = (S) => {
    t(`tag:${S}`);
  }, T = v.useMemo(() => n.filter(
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
          children: /* @__PURE__ */ i.jsx(Ce, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "meld-tag-manager-content", children: [
      /* @__PURE__ */ i.jsxs("form", { className: "meld-tag-add-form", onSubmit: j, children: [
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            placeholder: "Add new tag...",
            value: u,
            onChange: (S) => c(S.target.value),
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
              /* @__PURE__ */ i.jsx(ya, { size: 14 }),
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
      l ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ i.jsx("div", { className: "meld-tag-list", children: T.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : T.map((S) => /* @__PURE__ */ i.jsx("div", { className: "meld-tag-item", children: m === S.id ? /* @__PURE__ */ i.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: E,
          children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                ref: d,
                className: "meld-tag-rename-input",
                value: w,
                onChange: (b) => _(b.target.value),
                onKeyDown: (b) => b.key === "Escape" && x()
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "submit",
                className: "meld-tag-item__btn meld-tag-item__btn--save",
                title: "Save",
                disabled: k || !w.trim(),
                children: /* @__PURE__ */ i.jsx(qc, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: "meld-tag-item__btn",
                title: "Cancel",
                onClick: x,
                disabled: k,
                children: /* @__PURE__ */ i.jsx(Ce, { size: 14 })
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
              onClick: () => P(S.name),
              children: /* @__PURE__ */ i.jsx(zn, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => M(S),
              children: /* @__PURE__ */ i.jsx(rd, { size: 14 })
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
}, ah = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  const { viewerImageId: l, images: s, viewerMode: a, lineageImages: o, settings: u } = e, { handleEditTags: c, handleRestore: h } = pd(e, t), { getParentChain: g } = md(s, u), [m, y] = v.useState(!1), [w, _] = v.useState(
    u["viewer.show_details_by_default"]
  ), [k, f] = v.useState(null), d = k ?? u["viewer.show_thumbnails"], [p, j] = v.useState(!1), [N, M] = v.useState(!1), [x, E] = v.useState(null), [P, T] = v.useState(null), [S, b] = v.useState(
    null
  ), W = v.useRef(null), Y = v.useRef(!0);
  v.useEffect(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []);
  const O = v.useRef(l);
  v.useEffect(() => {
    O.current = l;
  }, [l]);
  const Q = a === "lineage" ? o : s.filter(
    (V) => V.exists !== !1 && !(u["gallery.hide_parent_images"] && V.has_children)
  ), A = l === null ? -1 : Q.findIndex((V) => V.id === l), C = (a === "lineage" && o.length > 0 ? o : s).find((V) => V.id === l), F = v.useCallback(
    async (V = !1) => {
      if (!C) return;
      const te = m ? u["fullscreen.delete_mode"] : u["viewer.delete_mode"];
      if (!V && te === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [C.id],
            hasLineage: !!(C.parent_id || C.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const L = e.viewScope === "trash", ee = /* @__PURE__ */ new Set([C.id]);
        if (te === "lineage") {
          const H = await _i(C.id);
          for (const J of H)
            ee.add(J.id);
        }
        if (!Y.current || O.current === null) return;
        if (Q.length > ee.size) {
          let H = !1;
          for (let J = A + 1; J < Q.length; J++)
            if (!ee.has(Q[J].id)) {
              t({
                type: "OPEN_VIEWER",
                payload: { id: Q[J].id, mode: a }
              }), H = !0;
              break;
            }
          if (!H) {
            for (let J = A - 1; J >= 0; J--)
              if (!ee.has(Q[J].id)) {
                t({
                  type: "OPEN_VIEWER",
                  payload: { id: Q[J].id, mode: a }
                }), H = !0;
                break;
              }
          }
          H || t({ type: "CLOSE_VIEWER" });
        } else
          t({ type: "CLOSE_VIEWER" });
        if (await xi(Array.from(ee), L), !L) {
          const H = Q.filter(
            (J) => ee.has(J.id)
          );
          E(H), T(null);
        }
        t({ type: "REMOVE_IMAGES", payload: Array.from(ee) });
      } catch (L) {
        t({
          type: "SET_ERROR",
          payload: L instanceof Error ? L.message : String(L)
        });
      }
    },
    [
      C,
      m,
      u,
      e.viewScope,
      Q,
      A,
      a,
      t
    ]
  ), U = v.useCallback(() => {
    C && c(C);
  }, [C, c]), X = v.useCallback(() => {
    t({ type: "NEXT_IMAGE", payload: { isFullscreen: m } });
  }, [t, m]), R = v.useCallback(async () => {
    const V = m ? u["fullscreen.loop"] : u["viewer.loop"];
    if (A === 0 && a === "gallery" && e.pagination.hasMore && !N && V) {
      M(!0);
      try {
        const te = e.pagination.limit, L = e.pagination.total, ee = Math.max(0, L - te), H = await ol(
          ee,
          te,
          e.searchQuery
        );
        if (!Y.current || (t({ type: "APPEND_IMAGES", payload: H }), O.current === null)) return;
        if (H.images.length > 0) {
          const J = H.images[H.images.length - 1];
          t({
            type: "OPEN_VIEWER",
            payload: { id: J.id, mode: "gallery" }
          });
        }
      } catch (te) {
        console.error("Failed to jump to end:", te);
      } finally {
        M(!1);
      }
    } else
      t({ type: "PREVIOUS_IMAGE", payload: { isFullscreen: m } });
  }, [
    A,
    a,
    e.pagination,
    e.searchQuery,
    u,
    t,
    N,
    m
  ]), q = v.useCallback(
    (V) => {
      V && "stopPropagation" in V && V.stopPropagation();
      const te = W.current;
      te && (document.fullscreenElement ? document.exitFullscreen() : te.requestFullscreen().catch((L) => {
        console.error(
          `Error attempting to enable full-screen mode: ${L.message}`
        );
      }));
    },
    []
  ), re = v.useCallback(async () => {
    C && (Q.length > 1 ? X() : t({ type: "CLOSE_VIEWER" }), await h(C));
  }, [C, Q.length, X, h, t]), ct = v.useCallback(async () => {
    if (!x || x.length === 0) return;
    const V = x.map((L) => L.id), te = V[0];
    try {
      const L = await va(V);
      if (!Y.current) return;
      if (t({ type: "ADD_IMAGES", payload: x }), e.viewScope === "trash") {
        const ee = L.restored_ids || V;
        t({ type: "REMOVE_IMAGES", payload: ee });
      }
      if (E(null), !Y.current) return;
      t({
        type: "OPEN_VIEWER",
        payload: { id: te, mode: a }
      });
    } catch (L) {
      t({
        type: "SET_ERROR",
        payload: L instanceof Error ? L.message : String(L)
      });
    }
  }, [x, t, a, e.viewScope]), be = v.useCallback(async () => {
    if (x && x.length > 0)
      await ct();
    else if (P && P.type === "tags") {
      const { imageId: V, addTags: te, removeTags: L } = P;
      try {
        await Si([V], te, L);
        const ee = (a === "lineage" ? o : s).find((H) => H.id === V);
        if (ee) {
          const H = [...ee.tags];
          for (const et of te)
            H.includes(et) || H.push(et);
          const J = H.filter((et) => !L.includes(et));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...ee, tags: J }
          }), t({
            type: "OPEN_VIEWER",
            payload: { id: V, mode: a }
          });
        }
        T(null);
      } catch (ee) {
        t({
          type: "SET_ERROR",
          payload: ee instanceof Error ? ee.message : String(ee)
        });
      }
    }
  }, [
    x,
    P,
    ct,
    s,
    o,
    a,
    t
  ]), $e = v.useCallback(
    async (V) => {
      if (!V || !C) return;
      const te = C.id, L = [...C.tags], ee = V.split(/\s+/), H = [], J = [];
      let et = !1, un = !1, Mr = !1;
      for (const ye of ee)
        if (ye.startsWith("tag:")) {
          const fe = ye.substring(4);
          fe && !L.includes(fe) && !H.includes(fe) && H.push(fe);
        } else if (ye.startsWith("-tag:")) {
          const fe = ye.substring(5);
          fe && L.includes(fe) && !J.includes(fe) && J.push(fe);
        } else if (ye.startsWith("tag-toggle:")) {
          const fe = ye.substring(11);
          fe && (L.includes(fe) ? J.includes(fe) || J.push(fe) : H.includes(fe) || H.push(fe));
        } else ye === "next" ? et = !0 : ye === "prev" ? un = !0 : ye === "delete" && (Mr = !0);
      if (H.length > 0 || J.length > 0)
        try {
          await Si(
            [te],
            H,
            J
          );
          const ye = [...L];
          for (const Bt of H)
            ye.includes(Bt) || ye.push(Bt);
          const fe = ye.filter((Bt) => !J.includes(Bt));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...C, id: te, tags: fe }
          }), T({
            type: "tags",
            imageId: te,
            addTags: [...J],
            removeTags: [...H]
          }), E(null);
        } catch (ye) {
          console.error("Failed to update tags via shortcut:", ye);
        }
      Mr ? F(!0) : et ? X() : un && R();
    },
    [C, t, X, R, F]
  );
  v.useEffect(() => {
    const V = (L) => {
      var fe, Bt, xa;
      if (l === null) return;
      const ee = ((fe = document.activeElement) == null ? void 0 : fe.tagName) === "INPUT" || ((Bt = document.activeElement) == null ? void 0 : Bt.tagName) === "TEXTAREA" || ((xa = document.activeElement) == null ? void 0 : xa.isContentEditable), H = L.key === "Delete" || L.key === "Backspace", J = L.key === "ArrowRight" || L.key === "ArrowLeft", et = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
        L.key
      ), un = L.key === "Escape", Mr = (L.ctrlKey || L.metaKey) && (L.key === "z" || L.key === "Z" || L.code === "KeyZ"), ye = /^[0-9]$/.test(L.key) && !L.ctrlKey && !L.metaKey && !L.altKey && L.code !== "KeyZ";
      if (H || J || et || un || Mr || ye)
        if (ee)
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
        X();
      else if (L.key === "ArrowLeft")
        R();
      else if (L.key === "f" || L.key === "F")
        q(L);
      else if (L.key === "i" || L.key === "I")
        _((ql) => !ql);
      else if (L.key === "t" || L.key === "T")
        U();
      else if ((L.key === "r" || L.key === "R") && e.viewScope === "trash")
        re();
      else if (L.key === "Delete")
        F();
      else if ((L.ctrlKey || L.metaKey) && (L.key === "z" || L.key === "Z"))
        be();
      else if (ye && !ee) {
        const ql = `viewer.shortcut.${L.key}`, es = u[ql];
        typeof es == "string" && es && (b(L.key), setTimeout(() => {
          Y.current && b(null);
        }, 500), $e(es));
      }
    };
    window.addEventListener("keydown", V, { capture: !0 });
    const te = () => {
      const L = !!document.fullscreenElement;
      y(L), _(L ? u["fullscreen.show_details_by_default"] : u["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", te), () => {
      window.removeEventListener("keydown", V, { capture: !0 }), document.removeEventListener("fullscreenchange", te);
    };
  }, [
    l,
    t,
    q,
    X,
    R,
    u,
    F,
    e.activeModal.type,
    be,
    U,
    re,
    e.viewScope,
    $e
  ]), v.useEffect(() => {
    l !== null && r(l).catch((V) => {
      console.error("Failed to fetch full image details for viewer:", V);
    });
  }, [l, r]), v.useEffect(() => {
    a === "lineage" && l !== null && o.length === 0 && (j(!0), _i(l).then((V) => {
      Y.current && t({ type: "SET_LINEAGE", payload: V });
    }).catch((V) => {
      console.error("Failed to fetch lineage:", V);
    }).finally(() => {
      Y.current && j(!1);
    }));
  }, [a, l, o.length, t]), v.useEffect(() => {
    a !== "gallery" || l === null || e.isLoading || !e.pagination.hasMore || A !== -1 && A >= Q.length - 15 && n();
  }, [
    l,
    Q.length,
    a,
    e.isLoading,
    e.pagination.hasMore,
    n,
    A
  ]);
  const Jl = v.useMemo(() => {
    if (!d || A === -1) return [];
    const V = u["viewer.thumbnail_window_size"], te = Math.floor(V / 2);
    let L = Math.max(0, A - te);
    const ee = Math.min(Q.length, L + V);
    return ee === Q.length && (L = Math.max(0, ee - V)), Q.slice(L, ee).map((H, J) => ({
      img: H,
      absIndex: L + J
    }));
  }, [Q, A, u, d]), wd = v.useMemo(() => C ? g(C) : [], [C, g]);
  return v.useEffect(() => {
    var V, te;
    if (l !== null) {
      if (d) {
        const L = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        L && L.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((V = document.activeElement) == null ? void 0 : V.tagName) === "CANVAS" && document.activeElement.blur(), (te = W.current) == null || te.focus();
    }
  }, [l, d]), v.useEffect(() => {
    if (l === null || Q.length === 0) return;
    const V = Q.findIndex(
      (H) => H.id === l
    );
    if (V === -1) return;
    const te = (H) => Qe(H), L = [
      V + 1,
      V + 2,
      V - 1
    ], ee = setTimeout(() => {
      for (const H of L)
        if (H >= 0 && H < Q.length) {
          const J = Q[H], et = new Image();
          et.src = te(J);
        }
    }, 150);
    return () => clearTimeout(ee);
  }, [l, Q]), {
    isFullscreen: m,
    showDetails: w,
    setShowDetails: _,
    showThumbnails: d,
    setShowThumbnailsOverride: f,
    isLoadingLineage: p,
    isJumping: N,
    activeShortcutKey: S,
    lastDeletedImages: x,
    setLastDeletedImages: E,
    overlayRef: W,
    handleNext: X,
    handlePrevious: R,
    handleDelete: F,
    handleTagEdit: U,
    handleRestore: re,
    handleUndo: be,
    toggleFullscreen: q,
    currentIndex: A,
    currentThumbnails: Q,
    image: C,
    windowedThumbnails: Jl,
    parentChain: wd
  };
}, oh = ({
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
}) }) : null, uh = ({
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
), vd = v.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r
  }) => {
    const l = e.id === t, s = typeof n.parent_id == "number" && n.parent_id === e.id, a = typeof e.parent_id == "number" && e.parent_id === n.id, o = Qe(e);
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
              children: s ? /* @__PURE__ */ i.jsx(Jc, { size: 12 }) : /* @__PURE__ */ i.jsx(Zc, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
vd.displayName = "ThumbnailItem";
const ch = ({
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
    vd,
    {
      thumb: o,
      viewerImageId: t,
      currentImage: n,
      dispatch: r
    },
    o.id
  )),
  a === "gallery" && s && /* @__PURE__ */ i.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ i.jsx(Er, { className: "animate-spin", size: 20 }) })
] }) }), dh = () => {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = Pe(), {
    isFullscreen: l,
    showDetails: s,
    setShowDetails: a,
    showThumbnails: o,
    setShowThumbnailsOverride: u,
    isLoadingLineage: c,
    isJumping: h,
    activeShortcutKey: g,
    setLastDeletedImages: m,
    overlayRef: y,
    handleNext: w,
    handlePrevious: _,
    handleTagEdit: k,
    handleRestore: f,
    toggleFullscreen: d,
    image: p,
    windowedThumbnails: j,
    parentChain: N
  } = ah({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  if (!p) return null;
  const { viewerImageId: M, viewerMode: x } = e, E = Qe(p), P = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return Re.createPortal(
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
              onClick: (T) => T.stopPropagation(),
              children: [
                P && /* @__PURE__ */ i.jsxs("div", { className: "meld-viewer-actions", children: [
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
                      children: /* @__PURE__ */ i.jsx(nd, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: k,
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
                      children: /* @__PURE__ */ i.jsx(lm, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: d,
                      type: "button",
                      title: l ? "Exit Fullscreen (F)" : "Fullscreen (F)",
                      children: l ? /* @__PURE__ */ i.jsx(um, { size: 20 }) : /* @__PURE__ */ i.jsx(om, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--close",
                      onClick: () => t({ type: "CLOSE_VIEWER" }),
                      type: "button",
                      title: "Close (Esc)",
                      children: /* @__PURE__ */ i.jsx(Ce, { size: 20 })
                    }
                  )
                ] }),
                P && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: _,
                    type: "button",
                    disabled: h,
                    children: /* @__PURE__ */ i.jsx(ed, { size: 32 })
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
                P && /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: w,
                    type: "button",
                    children: /* @__PURE__ */ i.jsx(td, { size: 32 })
                  }
                ),
                s && /* @__PURE__ */ i.jsx(
                  uh,
                  {
                    image: p,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: P,
                    parentChain: N,
                    dispatch: t
                  }
                ),
                !l && o && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ i.jsx(
                  ch,
                  {
                    windowedThumbnails: j,
                    viewerImageId: M,
                    currentImage: p,
                    dispatch: t,
                    isLoadingLineage: c,
                    isLoading: e.isLoading,
                    viewerMode: x
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  oh,
                  {
                    settings: e.settings,
                    activeShortcutKey: g
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ i.jsx(
            dd,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: m
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ i.jsx(fd, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ i.jsx(od, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ i.jsx(ud, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ i.jsx(
            cd,
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
}, fh = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = Pe(), [s, a] = v.useState("gallery"), [o, u] = v.useState(""), [c, h] = v.useState(e.pagination.limit);
  v.useEffect(() => {
    h(e.pagination.limit);
  }, [e.searchQuery, e.viewScope, e.pagination.limit]);
  const g = e.searchQuery.trim() !== "", m = v.useRef(null), y = v.useRef(null), w = v.useMemo(
    () => e.images.filter((k) => e.viewScope === "trash" ? k.exists !== !1 || e.settings["gallery.trash.show_missing"] : k.exists !== !1 && !(e.settings["gallery.hide_parent_images"] && k.has_children)),
    [e.images, e.settings, e.viewScope]
  ), _ = v.useMemo(
    () => w.slice(0, c),
    [w, c]
  );
  return v.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && ($.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), v.useEffect(() => {
    const k = (f) => {
      f.key === "Escape" && (e.activeModal.type !== "none" ? (t({ type: "CLOSE_MODAL" }), f.preventDefault(), f.stopPropagation()) : e.selectedIds.size > 0 && (t({ type: "CLEAR_SELECTION" }), f.preventDefault(), f.stopPropagation()));
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [e.activeModal.type, e.selectedIds.size, t]), v.useEffect(() => {
    const k = new IntersectionObserver(
      (d) => {
        if (d[0].isIntersecting) {
          if (e.isLoading) {
            $.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          c < w.length ? ($.log(
            "GalleryPanel: Increasing localLimit (local data available)",
            {
              oldLimit: c,
              newLimit: Math.min(
                c + e.pagination.limit,
                w.length
              ),
              totalAvailableLocally: w.length
            }
          ), h((p) => p + e.pagination.limit)) : e.pagination.hasMore ? ($.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : $.log(
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
    return f && k.observe(f), () => {
      f && k.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    c,
    w.length,
    e.pagination.limit,
    e.images.length
  ]), v.useEffect(() => {
    const k = e.viewerImageId ?? y.current;
    if (k !== null && w.some((d) => d.id === k)) {
      const d = w.findIndex((j) => j.id === k);
      if (d >= c) {
        h(
          Math.ceil((d + 1) / e.pagination.limit) * e.pagination.limit
        );
        return;
      }
      const p = document.querySelector(
        `[data-image-id="${k}"]`
      );
      p && (p.scrollIntoView({ behavior: "smooth", block: "nearest" }), e.viewerImageId === null && (y.current = null));
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
    viewMode: s,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: u,
    localLimit: c,
    displayedImages: w,
    visibleImages: _,
    isSearchActive: g,
    loadMoreRef: m
  };
}, ph = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = Pe(), l = e.selectedIds.size;
  if (l === 0) return null;
  const s = e.viewScope === "trash", a = () => {
    const o = e.images.filter(
      (c) => e.selectedIds.has(c.id)
    ), u = /* @__PURE__ */ new Set();
    for (const c of o)
      if (c.tags)
        for (const h of c.tags)
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
              /* @__PURE__ */ i.jsx(Ce, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
              "Cancel"
            ]
          }
        )
      ]
    }
  );
}, mh = () => {
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
    visibleImages: h,
    isSearchActive: g,
    loadMoreRef: m
  } = fh();
  return $.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
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
                  /* @__PURE__ */ i.jsx(Ce, { size: 14 }),
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ i.jsx(sm, { size: 14 }) : /* @__PURE__ */ i.jsx(nd, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(nm, { size: 14 })
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
                children: /* @__PURE__ */ i.jsx(pm, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ i.jsx(sh, {}) })
        ] }),
        /* @__PURE__ */ i.jsx(eh, {}),
        e.error && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__error", children: e.error }),
        l === "tags" ? /* @__PURE__ */ i.jsx(
          ih,
          {
            onClose: () => s("gallery"),
            onSearch: (y) => {
              t({ type: "SET_SEARCH_QUERY", payload: y }), s("search");
            }
          }
        ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." }) : h.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__empty", children: "No images found." }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `meld-gallery__list ${e.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`,
              children: h.map((y) => /* @__PURE__ */ i.jsx("div", { "data-image-id": y.id, children: /* @__PURE__ */ i.jsx(qm, { height: 150, children: /* @__PURE__ */ i.jsx(Jm, { image: y }) }) }, y.id))
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
                u >= c.length && !e.pagination.hasMore && h.length > 0 && /* @__PURE__ */ i.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx(ph, {}),
        e.viewerImageId !== null && /* @__PURE__ */ i.jsx(dh, {}),
        /* @__PURE__ */ i.jsx(Ym, {})
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
const Zl = document.createElement("link");
Zl.rel = "stylesheet";
Zl.type = "text/css";
Zl.href = "/extensions/ComfyUI-Meld/js/style.css";
document.head.appendChild(Zl);
let Yr = null, nt = null;
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
      const n = await id();
      $.init(n.dev_mode), $.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), $.init(!1);
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
      }, K.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), K.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(
          new CustomEvent("meld-scan-progress", { detail: n.detail })
        );
      }), K.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(
          new CustomEvent("meld-scan-finished", { detail: n.detail })
        ), (r = e.ui.meld) == null || r.refresh(), $.log("Import completed.");
      }), K.addEventListener(
        "executed",
        async ({
          detail: n
        }) => {
          var r;
          if ((r = n == null ? void 0 : n.output) != null && r.images) {
            for (const l of n.output.images)
              if (l.type === "output")
                try {
                  await sd({
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
            $.log("render called", {
              el: n,
              galleryRoot: Yr,
              galleryContainer: nt
            }), nt || ($.log("galleryContainer not found, creating new one"), nt = document.createElement("div"), nt.id = "meld-gallery-container", nt.style.height = "100%", nt.style.width = "100%", nt.style.display = "flex", nt.style.flexDirection = "column"), n.contains(nt) || ($.log("Appending galleryContainer to el"), n.appendChild(nt)), Yr ? $.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : ($.log("Creating new gallery root"), Yr = Kc(nt), Yr.render(
              ul.createElement(
                Dm,
                null,
                ul.createElement(mh)
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
