import { api as te } from "/scripts/api.js";
import { app as Gc } from "/scripts/app.js";
function fm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qc = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol = Symbol.for("react.element"), mm = Symbol.for("react.portal"), hm = Symbol.for("react.fragment"), pm = Symbol.for("react.strict_mode"), gm = Symbol.for("react.profiler"), ym = Symbol.for("react.provider"), vm = Symbol.for("react.context"), wm = Symbol.for("react.forward_ref"), xm = Symbol.for("react.suspense"), _m = Symbol.for("react.memo"), km = Symbol.for("react.lazy"), wi = Symbol.iterator;
function Sm(e) {
  return e === null || typeof e != "object" ? null : (e = wi && e[wi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Yc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Xc = Object.assign, Zc = {};
function dr(e, t, n) {
  this.props = e, this.context = t, this.refs = Zc, this.updater = n || Yc;
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
dr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jc() {
}
Jc.prototype = dr.prototype;
function po(e, t, n) {
  this.props = e, this.context = t, this.refs = Zc, this.updater = n || Yc;
}
var go = po.prototype = new Jc();
go.constructor = po;
Xc(go, dr.prototype);
go.isPureReactComponent = !0;
var xi = Array.isArray, ed = Object.prototype.hasOwnProperty, yo = { current: null }, td = { key: !0, ref: !0, __self: !0, __source: !0 };
function nd(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) ed.call(t, r) && !td.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: ol, type: e, key: a, ref: o, props: l, _owner: yo.current };
}
function jm(e, t) {
  return { $$typeof: ol, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function vo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ol;
}
function bm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var _i = /\/+/g;
function Us(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bm("" + e.key) : t.toString(36);
}
function zl(e, t, n, r, l) {
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
        case ol:
        case mm:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Us(o, 0) : r, xi(l) ? (n = "", e != null && (n = e.replace(_i, "$&/") + "/"), zl(l, t, n, "", function(d) {
    return d;
  })) : l != null && (vo(l) && (l = jm(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(_i, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", xi(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Us(a, i);
    o += zl(a, t, n, c, l);
  }
  else if (c = Sm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Us(a, i++), o += zl(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function gl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return zl(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function Em(e) {
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
var Qe = { current: null }, Fl = { transition: null }, Cm = { ReactCurrentDispatcher: Qe, ReactCurrentBatchConfig: Fl, ReactCurrentOwner: yo };
function rd() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: gl, forEach: function(e, t, n) {
  gl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return gl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return gl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!vo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = dr;
re.Fragment = hm;
re.Profiler = gm;
re.PureComponent = po;
re.StrictMode = pm;
re.Suspense = xm;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cm;
re.act = rd;
re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Xc({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = yo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) ed.call(t, c) && !td.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: ol, type: e.type, key: l, ref: a, props: r, _owner: o };
};
re.createContext = function(e) {
  return e = { $$typeof: vm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ym, _context: e }, e.Consumer = e;
};
re.createElement = nd;
re.createFactory = function(e) {
  var t = nd.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: wm, render: e };
};
re.isValidElement = vo;
re.lazy = function(e) {
  return { $$typeof: km, _payload: { _status: -1, _result: e }, _init: Em };
};
re.memo = function(e, t) {
  return { $$typeof: _m, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = Fl.transition;
  Fl.transition = {};
  try {
    e();
  } finally {
    Fl.transition = t;
  }
};
re.unstable_act = rd;
re.useCallback = function(e, t) {
  return Qe.current.useCallback(e, t);
};
re.useContext = function(e) {
  return Qe.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return Qe.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return Qe.current.useEffect(e, t);
};
re.useId = function() {
  return Qe.current.useId();
};
re.useImperativeHandle = function(e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function(e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return Qe.current.useMemo(e, t);
};
re.useReducer = function(e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
re.useRef = function(e) {
  return Qe.current.useRef(e);
};
re.useState = function(e) {
  return Qe.current.useState(e);
};
re.useSyncExternalStore = function(e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function() {
  return Qe.current.useTransition();
};
re.version = "18.3.1";
qc.exports = re;
var p = qc.exports;
const Jt = /* @__PURE__ */ fm(p);
var ld = { exports: {} }, lt = {}, sd = { exports: {} }, ad = {};
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
  function t(N, T) {
    var F = N.length;
    N.push(T);
    e: for (; 0 < F; ) {
      var E = F - 1 >>> 1, A = N[E];
      if (0 < l(A, T)) N[E] = T, N[F] = A, F = E;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var T = N[0], F = N.pop();
    if (F !== T) {
      N[0] = F;
      e: for (var E = 0, A = N.length, U = A >>> 1; E < U; ) {
        var O = 2 * (E + 1) - 1, K = N[O], X = O + 1, oe = N[X];
        if (0 > l(K, F)) X < A && 0 > l(oe, K) ? (N[E] = oe, N[X] = F, E = X) : (N[E] = K, N[O] = F, E = O);
        else if (X < A && 0 > l(oe, F)) N[E] = oe, N[X] = F, E = X;
        else break e;
      }
    }
    return T;
  }
  function l(N, T) {
    var F = N.sortIndex - T.sortIndex;
    return F !== 0 ? F : N.id - T.id;
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
  var c = [], d = [], h = 1, v = null, y = 3, k = !1, w = !1, x = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var T = n(d); T !== null; ) {
      if (T.callback === null) r(d);
      else if (T.startTime <= N) r(d), T.sortIndex = T.expirationTime, t(c, T);
      else break;
      T = n(d);
    }
  }
  function g(N) {
    if (x = !1, m(N), !w) if (n(c) !== null) w = !0, D(b);
    else {
      var T = n(d);
      T !== null && R(g, T.startTime - N);
    }
  }
  function b(N, T) {
    w = !1, x && (x = !1, f(M), M = -1), k = !0;
    var F = y;
    try {
      for (m(T), v = n(c); v !== null && (!(v.expirationTime > T) || N && !I()); ) {
        var E = v.callback;
        if (typeof E == "function") {
          v.callback = null, y = v.priorityLevel;
          var A = E(v.expirationTime <= T);
          T = e.unstable_now(), typeof A == "function" ? v.callback = A : v === n(c) && r(c), m(T);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var U = !0;
      else {
        var O = n(d);
        O !== null && R(g, O.startTime - T), U = !1;
      }
      return U;
    } finally {
      v = null, y = F, k = !1;
    }
  }
  var S = !1, j = null, M = -1, L = 5, P = -1;
  function I() {
    return !(e.unstable_now() - P < L);
  }
  function z() {
    if (j !== null) {
      var N = e.unstable_now();
      P = N;
      var T = !0;
      try {
        T = j(!0, N);
      } finally {
        T ? B() : (S = !1, j = null);
      }
    } else S = !1;
  }
  var B;
  if (typeof u == "function") B = function() {
    u(z);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), V = C.port2;
    C.port1.onmessage = z, B = function() {
      V.postMessage(null);
    };
  } else B = function() {
    _(z, 0);
  };
  function D(N) {
    j = N, S || (S = !0, B());
  }
  function R(N, T) {
    M = _(function() {
      N(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    w || k || (w = !0, D(b));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(N) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = y;
    }
    var F = y;
    y = T;
    try {
      return N();
    } finally {
      y = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, T) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var F = y;
    y = N;
    try {
      return T();
    } finally {
      y = F;
    }
  }, e.unstable_scheduleCallback = function(N, T, F) {
    var E = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? E + F : E) : F = E, N) {
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
    return A = F + A, N = { id: h++, callback: T, priorityLevel: N, startTime: F, expirationTime: A, sortIndex: -1 }, F > E ? (N.sortIndex = F, t(d, N), n(c) === null && N === n(d) && (x ? (f(M), M = -1) : x = !0, R(g, F - E))) : (N.sortIndex = A, t(c, N), w || k || (w = !0, D(b))), N;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(N) {
    var T = y;
    return function() {
      var F = y;
      y = T;
      try {
        return N.apply(this, arguments);
      } finally {
        y = F;
      }
    };
  };
})(ad);
sd.exports = ad;
var Nm = sd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm = p, rt = Nm;
function $(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var od = /* @__PURE__ */ new Set(), zr = {};
function In(e, t) {
  nr(e, t), nr(e + "Capture", t);
}
function nr(e, t) {
  for (zr[e] = t, e = 0; e < t.length; e++) od.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), va = Object.prototype.hasOwnProperty, Im = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ki = {}, Si = {};
function Tm(e) {
  return va.call(Si, e) ? !0 : va.call(ki, e) ? !1 : Im.test(e) ? Si[e] = !0 : (ki[e] = !0, !1);
}
function Lm(e, t, n, r) {
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
function Rm(e, t, n, r) {
  if (t === null || typeof t > "u" || Lm(e, t, n, r)) return !0;
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
function He(e, t, n, r, l, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new He(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wo = /[\-:]([a-z])/g;
function xo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    wo,
    xo
  );
  Ae[t] = new He(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(wo, xo);
  Ae[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(wo, xo);
  Ae[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new He("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _o(e, t, n, r) {
  var l = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rm(t, n, l, r) && (n = null), r || l === null ? Tm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yl = Symbol.for("react.element"), zn = Symbol.for("react.portal"), Fn = Symbol.for("react.fragment"), ko = Symbol.for("react.strict_mode"), wa = Symbol.for("react.profiler"), id = Symbol.for("react.provider"), cd = Symbol.for("react.context"), So = Symbol.for("react.forward_ref"), xa = Symbol.for("react.suspense"), _a = Symbol.for("react.suspense_list"), jo = Symbol.for("react.memo"), qt = Symbol.for("react.lazy"), dd = Symbol.for("react.offscreen"), ji = Symbol.iterator;
function gr(e) {
  return e === null || typeof e != "object" ? null : (e = ji && e[ji] || e["@@iterator"], typeof e == "function" ? e : null);
}
var je = Object.assign, Vs;
function br(e) {
  if (Vs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Vs = t && t[1] || "";
  }
  return `
` + Vs + e;
}
var Bs = !1;
function Qs(e, t) {
  if (!e || Bs) return "";
  Bs = !0;
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
    Bs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? br(e) : "";
}
function Dm(e) {
  switch (e.tag) {
    case 5:
      return br(e.type);
    case 16:
      return br("Lazy");
    case 13:
      return br("Suspense");
    case 19:
      return br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Qs(e.type, !1), e;
    case 11:
      return e = Qs(e.type.render, !1), e;
    case 1:
      return e = Qs(e.type, !0), e;
    default:
      return "";
  }
}
function ka(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case zn:
      return "Portal";
    case wa:
      return "Profiler";
    case ko:
      return "StrictMode";
    case xa:
      return "Suspense";
    case _a:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case cd:
      return (e.displayName || "Context") + ".Consumer";
    case id:
      return (e._context.displayName || "Context") + ".Provider";
    case So:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case jo:
      return t = e.displayName || null, t !== null ? t : ka(e.type) || "Memo";
    case qt:
      t = e._payload, e = e._init;
      try {
        return ka(e(t));
      } catch {
      }
  }
  return null;
}
function Pm(e) {
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
      return ka(t);
    case 8:
      return t === ko ? "StrictMode" : "Mode";
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
function un(e) {
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
function ud(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Om(e) {
  var t = ud(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function vl(e) {
  e._valueTracker || (e._valueTracker = Om(e));
}
function fd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ud(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Xl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sa(e, t) {
  var n = t.checked;
  return je({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = un(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function md(e, t) {
  t = t.checked, t != null && _o(e, "checked", t, !1);
}
function ja(e, t) {
  md(e, t);
  var n = un(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ba(e, t.type, n) : t.hasOwnProperty("defaultValue") && ba(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ei(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ba(e, t, n) {
  (t !== "number" || Xl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Yn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return je({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ci(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error($(92));
      if (Er(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: un(n) };
}
function hd(e, t) {
  var n = un(t.value), r = un(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ni(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function pd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ca(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? pd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var wl, gd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (wl = wl || document.createElement("div"), wl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Fr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mr = {
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
}, Am = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function(e) {
  Am.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mr[t] = Mr[e];
  });
});
function yd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px";
}
function vd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = yd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var zm = je({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Na(e, t) {
  if (t) {
    if (zm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function Ma(e, t) {
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
var Ia = null;
function bo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ta = null, Xn = null, Zn = null;
function Mi(e) {
  if (e = dl(e)) {
    if (typeof Ta != "function") throw Error($(280));
    var t = e.stateNode;
    t && (t = Cs(t), Ta(e.stateNode, e.type, t));
  }
}
function wd(e) {
  Xn ? Zn ? Zn.push(e) : Zn = [e] : Xn = e;
}
function xd() {
  if (Xn) {
    var e = Xn, t = Zn;
    if (Zn = Xn = null, Mi(e), t) for (e = 0; e < t.length; e++) Mi(t[e]);
  }
}
function _d(e, t) {
  return e(t);
}
function kd() {
}
var Hs = !1;
function Sd(e, t, n) {
  if (Hs) return e(t, n);
  Hs = !0;
  try {
    return _d(e, t, n);
  } finally {
    Hs = !1, (Xn !== null || Zn !== null) && (kd(), xd());
  }
}
function Wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cs(n);
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
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var La = !1;
if (zt) try {
  var yr = {};
  Object.defineProperty(yr, "passive", { get: function() {
    La = !0;
  } }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr);
} catch {
  La = !1;
}
function Fm(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var Ir = !1, Zl = null, Jl = !1, Ra = null, Wm = { onError: function(e) {
  Ir = !0, Zl = e;
} };
function $m(e, t, n, r, l, a, o, i, c) {
  Ir = !1, Zl = null, Fm.apply(Wm, arguments);
}
function Um(e, t, n, r, l, a, o, i, c) {
  if ($m.apply(this, arguments), Ir) {
    if (Ir) {
      var d = Zl;
      Ir = !1, Zl = null;
    } else throw Error($(198));
    Jl || (Jl = !0, Ra = d);
  }
}
function Tn(e) {
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
function jd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ii(e) {
  if (Tn(e) !== e) throw Error($(188));
}
function Vm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Tn(e), t === null) throw Error($(188));
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
        if (a === n) return Ii(l), e;
        if (a === r) return Ii(l), t;
        a = a.sibling;
      }
      throw Error($(188));
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
        if (!o) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function bd(e) {
  return e = Vm(e), e !== null ? Ed(e) : null;
}
function Ed(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ed(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cd = rt.unstable_scheduleCallback, Ti = rt.unstable_cancelCallback, Bm = rt.unstable_shouldYield, Qm = rt.unstable_requestPaint, Ce = rt.unstable_now, Hm = rt.unstable_getCurrentPriorityLevel, Eo = rt.unstable_ImmediatePriority, Nd = rt.unstable_UserBlockingPriority, es = rt.unstable_NormalPriority, Km = rt.unstable_LowPriority, Md = rt.unstable_IdlePriority, Ss = null, Nt = null;
function Gm(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
    Nt.onCommitFiberRoot(Ss, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var kt = Math.clz32 ? Math.clz32 : Xm, qm = Math.log, Ym = Math.LN2;
function Xm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (qm(e) / Ym | 0) | 0;
}
var xl = 64, _l = 4194304;
function Cr(e) {
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
function ts(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Cr(i) : (a &= o, a !== 0 && (r = Cr(a)));
  } else o = n & ~l, o !== 0 ? r = Cr(o) : a !== 0 && (r = Cr(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Zm(e, t) {
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
function Jm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - kt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = Zm(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Da(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Id() {
  var e = xl;
  return xl <<= 1, !(xl & 4194240) && (xl = 64), e;
}
function Ks(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function il(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function eh(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - kt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function Co(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ce = 0;
function Td(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ld, No, Rd, Dd, Pd, Pa = !1, kl = [], nn = null, rn = null, ln = null, $r = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), Xt = [], th = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Li(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      $r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ur.delete(t.pointerId);
  }
}
function vr(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = dl(t), t !== null && No(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function nh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return nn = vr(nn, e, t, n, r, l), !0;
    case "dragenter":
      return rn = vr(rn, e, t, n, r, l), !0;
    case "mouseover":
      return ln = vr(ln, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return $r.set(a, vr($r.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Ur.set(a, vr(Ur.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Od(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = jd(n), t !== null) {
          e.blockedOn = t, Pd(e.priority, function() {
            Rd(n);
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
function Wl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ia = r, n.target.dispatchEvent(r), Ia = null;
    } else return t = dl(n), t !== null && No(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ri(e, t, n) {
  Wl(e) && n.delete(t);
}
function rh() {
  Pa = !1, nn !== null && Wl(nn) && (nn = null), rn !== null && Wl(rn) && (rn = null), ln !== null && Wl(ln) && (ln = null), $r.forEach(Ri), Ur.forEach(Ri);
}
function wr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Pa || (Pa = !0, rt.unstable_scheduleCallback(rt.unstable_NormalPriority, rh)));
}
function Vr(e) {
  function t(l) {
    return wr(l, e);
  }
  if (0 < kl.length) {
    wr(kl[0], e);
    for (var n = 1; n < kl.length; n++) {
      var r = kl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nn !== null && wr(nn, e), rn !== null && wr(rn, e), ln !== null && wr(ln, e), $r.forEach(t), Ur.forEach(t), n = 0; n < Xt.length; n++) r = Xt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xt.length && (n = Xt[0], n.blockedOn === null); ) Od(n), n.blockedOn === null && Xt.shift();
}
var Jn = Vt.ReactCurrentBatchConfig, ns = !0;
function lh(e, t, n, r) {
  var l = ce, a = Jn.transition;
  Jn.transition = null;
  try {
    ce = 1, Mo(e, t, n, r);
  } finally {
    ce = l, Jn.transition = a;
  }
}
function sh(e, t, n, r) {
  var l = ce, a = Jn.transition;
  Jn.transition = null;
  try {
    ce = 4, Mo(e, t, n, r);
  } finally {
    ce = l, Jn.transition = a;
  }
}
function Mo(e, t, n, r) {
  if (ns) {
    var l = Oa(e, t, n, r);
    if (l === null) ra(e, t, r, rs, n), Li(e, r);
    else if (nh(l, e, t, n, r)) r.stopPropagation();
    else if (Li(e, r), t & 4 && -1 < th.indexOf(e)) {
      for (; l !== null; ) {
        var a = dl(l);
        if (a !== null && Ld(a), a = Oa(e, t, n, r), a === null && ra(e, t, r, rs, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else ra(e, t, r, null, n);
  }
}
var rs = null;
function Oa(e, t, n, r) {
  if (rs = null, e = bo(r), e = wn(e), e !== null) if (t = Tn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = jd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return rs = e, null;
}
function Ad(e) {
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
      switch (Hm()) {
        case Eo:
          return 1;
        case Nd:
          return 4;
        case es:
        case Km:
          return 16;
        case Md:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, Io = null, $l = null;
function zd() {
  if ($l) return $l;
  var e, t = Io, n = t.length, r, l = "value" in en ? en.value : en.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return $l = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ul(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sl() {
  return !0;
}
function Di() {
  return !1;
}
function st(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Sl : Di, this.isPropagationStopped = Di, this;
  }
  return je(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sl);
  }, persist: function() {
  }, isPersistent: Sl }), t;
}
var ur = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, To = st(ur), cl = je({}, ur, { view: 0, detail: 0 }), ah = st(cl), Gs, qs, xr, js = je({}, cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Lo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (Gs = e.screenX - xr.screenX, qs = e.screenY - xr.screenY) : qs = Gs = 0, xr = e), Gs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : qs;
} }), Pi = st(js), oh = je({}, js, { dataTransfer: 0 }), ih = st(oh), ch = je({}, cl, { relatedTarget: 0 }), Ys = st(ch), dh = je({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uh = st(dh), fh = je({}, ur, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mh = st(fh), hh = je({}, ur, { data: 0 }), Oi = st(hh), ph = {
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
}, gh = {
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
}, yh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yh[e]) ? !!t[e] : !1;
}
function Lo() {
  return vh;
}
var wh = je({}, cl, { key: function(e) {
  if (e.key) {
    var t = ph[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ul(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Lo, charCode: function(e) {
  return e.type === "keypress" ? Ul(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ul(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), xh = st(wh), _h = je({}, js, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ai = st(_h), kh = je({}, cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Lo }), Sh = st(kh), jh = je({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bh = st(jh), Eh = je({}, js, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ch = st(Eh), Nh = [9, 13, 27, 32], Ro = zt && "CompositionEvent" in window, Tr = null;
zt && "documentMode" in document && (Tr = document.documentMode);
var Mh = zt && "TextEvent" in window && !Tr, Fd = zt && (!Ro || Tr && 8 < Tr && 11 >= Tr), zi = " ", Fi = !1;
function Wd(e, t) {
  switch (e) {
    case "keyup":
      return Nh.indexOf(t.keyCode) !== -1;
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
function $d(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function Ih(e, t) {
  switch (e) {
    case "compositionend":
      return $d(t);
    case "keypress":
      return t.which !== 32 ? null : (Fi = !0, zi);
    case "textInput":
      return e = t.data, e === zi && Fi ? null : e;
    default:
      return null;
  }
}
function Th(e, t) {
  if (Wn) return e === "compositionend" || !Ro && Wd(e, t) ? (e = zd(), $l = Io = en = null, Wn = !1, e) : null;
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
      return Fd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Wi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lh[e.type] : t === "textarea";
}
function Ud(e, t, n, r) {
  wd(r), t = ls(t, "onChange"), 0 < t.length && (n = new To("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Lr = null, Br = null;
function Rh(e) {
  Jd(e, 0);
}
function bs(e) {
  var t = Vn(e);
  if (fd(t)) return e;
}
function Dh(e, t) {
  if (e === "change") return t;
}
var Vd = !1;
if (zt) {
  var Xs;
  if (zt) {
    var Zs = "oninput" in document;
    if (!Zs) {
      var $i = document.createElement("div");
      $i.setAttribute("oninput", "return;"), Zs = typeof $i.oninput == "function";
    }
    Xs = Zs;
  } else Xs = !1;
  Vd = Xs && (!document.documentMode || 9 < document.documentMode);
}
function Ui() {
  Lr && (Lr.detachEvent("onpropertychange", Bd), Br = Lr = null);
}
function Bd(e) {
  if (e.propertyName === "value" && bs(Br)) {
    var t = [];
    Ud(t, Br, e, bo(e)), Sd(Rh, t);
  }
}
function Ph(e, t, n) {
  e === "focusin" ? (Ui(), Lr = t, Br = n, Lr.attachEvent("onpropertychange", Bd)) : e === "focusout" && Ui();
}
function Oh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return bs(Br);
}
function Ah(e, t) {
  if (e === "click") return bs(t);
}
function zh(e, t) {
  if (e === "input" || e === "change") return bs(t);
}
function Fh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jt = typeof Object.is == "function" ? Object.is : Fh;
function Qr(e, t) {
  if (jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!va.call(t, l) || !jt(e[l], t[l])) return !1;
  }
  return !0;
}
function Vi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bi(e, t) {
  var n = Vi(e);
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
    n = Vi(n);
  }
}
function Qd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hd() {
  for (var e = window, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xl(e.document);
  }
  return t;
}
function Do(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Wh(e) {
  var t = Hd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Do(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Bi(n, a);
        var o = Bi(
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
var $h = zt && "documentMode" in document && 11 >= document.documentMode, $n = null, Aa = null, Rr = null, za = !1;
function Qi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  za || $n == null || $n !== Xl(r) || (r = $n, "selectionStart" in r && Do(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Rr && Qr(Rr, r) || (Rr = r, r = ls(Aa, "onSelect"), 0 < r.length && (t = new To("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $n)));
}
function jl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Un = { animationend: jl("Animation", "AnimationEnd"), animationiteration: jl("Animation", "AnimationIteration"), animationstart: jl("Animation", "AnimationStart"), transitionend: jl("Transition", "TransitionEnd") }, Js = {}, Kd = {};
zt && (Kd = document.createElement("div").style, "AnimationEvent" in window || (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation), "TransitionEvent" in window || delete Un.transitionend.transition);
function Es(e) {
  if (Js[e]) return Js[e];
  if (!Un[e]) return e;
  var t = Un[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Kd) return Js[e] = t[n];
  return e;
}
var Gd = Es("animationend"), qd = Es("animationiteration"), Yd = Es("animationstart"), Xd = Es("transitionend"), Zd = /* @__PURE__ */ new Map(), Hi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mn(e, t) {
  Zd.set(e, t), In(t, [e]);
}
for (var ea = 0; ea < Hi.length; ea++) {
  var ta = Hi[ea], Uh = ta.toLowerCase(), Vh = ta[0].toUpperCase() + ta.slice(1);
  mn(Uh, "on" + Vh);
}
mn(Gd, "onAnimationEnd");
mn(qd, "onAnimationIteration");
mn(Yd, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Xd, "onTransitionEnd");
nr("onMouseEnter", ["mouseout", "mouseover"]);
nr("onMouseLeave", ["mouseout", "mouseover"]);
nr("onPointerEnter", ["pointerout", "pointerover"]);
nr("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
function Ki(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Um(r, t, void 0, e), e.currentTarget = null;
}
function Jd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Ki(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Ki(l, i, d), a = c;
      }
    }
  }
  if (Jl) throw e = Ra, Jl = !1, Ra = null, e;
}
function ve(e, t) {
  var n = t[Va];
  n === void 0 && (n = t[Va] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (eu(t, e, 2, !1), n.add(r));
}
function na(e, t, n) {
  var r = 0;
  t && (r |= 4), eu(n, e, r, t);
}
var bl = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
  if (!e[bl]) {
    e[bl] = !0, od.forEach(function(n) {
      n !== "selectionchange" && (Bh.has(n) || na(n, !1, e), na(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[bl] || (t[bl] = !0, na("selectionchange", !1, t));
  }
}
function eu(e, t, n, r) {
  switch (Ad(t)) {
    case 1:
      var l = lh;
      break;
    case 4:
      l = sh;
      break;
    default:
      l = Mo;
  }
  n = l.bind(null, t, n, e), l = void 0, !La || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ra(e, t, n, r, l) {
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
        if (o = wn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Sd(function() {
    var d = a, h = bo(n), v = [];
    e: {
      var y = Zd.get(e);
      if (y !== void 0) {
        var k = To, w = e;
        switch (e) {
          case "keypress":
            if (Ul(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = xh;
            break;
          case "focusin":
            w = "focus", k = Ys;
            break;
          case "focusout":
            w = "blur", k = Ys;
            break;
          case "beforeblur":
          case "afterblur":
            k = Ys;
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
            k = Pi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = ih;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Sh;
            break;
          case Gd:
          case qd:
          case Yd:
            k = uh;
            break;
          case Xd:
            k = bh;
            break;
          case "scroll":
            k = ah;
            break;
          case "wheel":
            k = Ch;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = mh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Ai;
        }
        var x = (t & 4) !== 0, _ = !x && e === "scroll", f = x ? y !== null ? y + "Capture" : null : y;
        x = [];
        for (var u = d, m; u !== null; ) {
          m = u;
          var g = m.stateNode;
          if (m.tag === 5 && g !== null && (m = g, f !== null && (g = Wr(u, f), g != null && x.push(Kr(u, g, m)))), _) break;
          u = u.return;
        }
        0 < x.length && (y = new k(y, w, null, n, h), v.push({ event: y, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", y && n !== Ia && (w = n.relatedTarget || n.fromElement) && (wn(w) || w[Ft])) break e;
        if ((k || y) && (y = h.window === h ? h : (y = h.ownerDocument) ? y.defaultView || y.parentWindow : window, k ? (w = n.relatedTarget || n.toElement, k = d, w = w ? wn(w) : null, w !== null && (_ = Tn(w), w !== _ || w.tag !== 5 && w.tag !== 6) && (w = null)) : (k = null, w = d), k !== w)) {
          if (x = Pi, g = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (x = Ai, g = "onPointerLeave", f = "onPointerEnter", u = "pointer"), _ = k == null ? y : Vn(k), m = w == null ? y : Vn(w), y = new x(g, u + "leave", k, n, h), y.target = _, y.relatedTarget = m, g = null, wn(h) === d && (x = new x(f, u + "enter", w, n, h), x.target = m, x.relatedTarget = _, g = x), _ = g, k && w) t: {
            for (x = k, f = w, u = 0, m = x; m; m = On(m)) u++;
            for (m = 0, g = f; g; g = On(g)) m++;
            for (; 0 < u - m; ) x = On(x), u--;
            for (; 0 < m - u; ) f = On(f), m--;
            for (; u--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = On(x), f = On(f);
            }
            x = null;
          }
          else x = null;
          k !== null && Gi(v, y, k, x, !1), w !== null && _ !== null && Gi(v, _, w, x, !0);
        }
      }
      e: {
        if (y = d ? Vn(d) : window, k = y.nodeName && y.nodeName.toLowerCase(), k === "select" || k === "input" && y.type === "file") var b = Dh;
        else if (Wi(y)) if (Vd) b = zh;
        else {
          b = Oh;
          var S = Ph;
        }
        else (k = y.nodeName) && k.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (b = Ah);
        if (b && (b = b(e, d))) {
          Ud(v, b, n, h);
          break e;
        }
        S && S(e, y, d), e === "focusout" && (S = y._wrapperState) && S.controlled && y.type === "number" && ba(y, "number", y.value);
      }
      switch (S = d ? Vn(d) : window, e) {
        case "focusin":
          (Wi(S) || S.contentEditable === "true") && ($n = S, Aa = d, Rr = null);
          break;
        case "focusout":
          Rr = Aa = $n = null;
          break;
        case "mousedown":
          za = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          za = !1, Qi(v, n, h);
          break;
        case "selectionchange":
          if ($h) break;
        case "keydown":
        case "keyup":
          Qi(v, n, h);
      }
      var j;
      if (Ro) e: {
        switch (e) {
          case "compositionstart":
            var M = "onCompositionStart";
            break e;
          case "compositionend":
            M = "onCompositionEnd";
            break e;
          case "compositionupdate":
            M = "onCompositionUpdate";
            break e;
        }
        M = void 0;
      }
      else Wn ? Wd(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M && (Fd && n.locale !== "ko" && (Wn || M !== "onCompositionStart" ? M === "onCompositionEnd" && Wn && (j = zd()) : (en = h, Io = "value" in en ? en.value : en.textContent, Wn = !0)), S = ls(d, M), 0 < S.length && (M = new Oi(M, e, null, n, h), v.push({ event: M, listeners: S }), j ? M.data = j : (j = $d(n), j !== null && (M.data = j)))), (j = Mh ? Ih(e, n) : Th(e, n)) && (d = ls(d, "onBeforeInput"), 0 < d.length && (h = new Oi("onBeforeInput", "beforeinput", null, n, h), v.push({ event: h, listeners: d }), h.data = j));
    }
    Jd(v, t);
  });
}
function Kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ls(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Wr(e, n), a != null && r.unshift(Kr(e, a, l)), a = Wr(e, t), a != null && r.push(Kr(e, a, l))), e = e.return;
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gi(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Wr(n, a), c != null && o.unshift(Kr(n, c, i))) : l || (c = Wr(n, a), c != null && o.push(Kr(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Qh = /\r\n?/g, Hh = /\u0000|\uFFFD/g;
function qi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Qh, `
`).replace(Hh, "");
}
function El(e, t, n) {
  if (t = qi(t), qi(e) !== t && n) throw Error($(425));
}
function ss() {
}
var Fa = null, Wa = null;
function $a(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ua = typeof setTimeout == "function" ? setTimeout : void 0, Kh = typeof clearTimeout == "function" ? clearTimeout : void 0, Yi = typeof Promise == "function" ? Promise : void 0, Gh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yi < "u" ? function(e) {
  return Yi.resolve(null).then(e).catch(qh);
} : Ua;
function qh(e) {
  setTimeout(function() {
    throw e;
  });
}
function la(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Vr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Vr(t);
}
function sn(e) {
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
function Xi(e) {
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
var fr = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + fr, Gr = "__reactProps$" + fr, Ft = "__reactContainer$" + fr, Va = "__reactEvents$" + fr, Yh = "__reactListeners$" + fr, Xh = "__reactHandles$" + fr;
function wn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[Ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xi(e); e !== null; ) {
        if (n = e[Ct]) return n;
        e = Xi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dl(e) {
  return e = e[Ct] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function Cs(e) {
  return e[Gr] || null;
}
var Ba = [], Bn = -1;
function hn(e) {
  return { current: e };
}
function we(e) {
  0 > Bn || (e.current = Ba[Bn], Ba[Bn] = null, Bn--);
}
function he(e, t) {
  Bn++, Ba[Bn] = e.current, e.current = t;
}
var fn = {}, $e = hn(fn), Xe = hn(!1), jn = fn;
function rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ze(e) {
  return e = e.childContextTypes, e != null;
}
function as() {
  we(Xe), we($e);
}
function Zi(e, t, n) {
  if ($e.current !== fn) throw Error($(168));
  he($e, t), he(Xe, n);
}
function tu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error($(108, Pm(e) || "Unknown", l));
  return je({}, n, r);
}
function os(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fn, jn = $e.current, he($e, e), he(Xe, Xe.current), !0;
}
function Ji(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n ? (e = tu(e, t, jn), r.__reactInternalMemoizedMergedChildContext = e, we(Xe), we($e), he($e, e)) : we(Xe), he(Xe, n);
}
var Dt = null, Ns = !1, sa = !1;
function nu(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function Zh(e) {
  Ns = !0, nu(e);
}
function pn() {
  if (!sa && Dt !== null) {
    sa = !0;
    var e = 0, t = ce;
    try {
      var n = Dt;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dt = null, Ns = !1;
    } catch (l) {
      throw Dt !== null && (Dt = Dt.slice(e + 1)), Cd(Eo, pn), l;
    } finally {
      ce = t, sa = !1;
    }
  }
  return null;
}
var Qn = [], Hn = 0, is = null, cs = 0, ct = [], dt = 0, bn = null, Pt = 1, Ot = "";
function yn(e, t) {
  Qn[Hn++] = cs, Qn[Hn++] = is, is = e, cs = t;
}
function ru(e, t, n) {
  ct[dt++] = Pt, ct[dt++] = Ot, ct[dt++] = bn, bn = e;
  var r = Pt;
  e = Ot;
  var l = 32 - kt(r) - 1;
  r &= ~(1 << l), n += 1;
  var a = 32 - kt(t) + l;
  if (30 < a) {
    var o = l - l % 5;
    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Pt = 1 << 32 - kt(t) + l | n << l | r, Ot = a + e;
  } else Pt = 1 << a | n << l | r, Ot = e;
}
function Po(e) {
  e.return !== null && (yn(e, 1), ru(e, 1, 0));
}
function Oo(e) {
  for (; e === is; ) is = Qn[--Hn], Qn[Hn] = null, cs = Qn[--Hn], Qn[Hn] = null;
  for (; e === bn; ) bn = ct[--dt], ct[dt] = null, Ot = ct[--dt], ct[dt] = null, Pt = ct[--dt], ct[dt] = null;
}
var nt = null, tt = null, xe = !1, xt = null;
function lu(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, tt = sn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, tt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bn !== null ? { id: Pt, overflow: Ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, tt = null, !0) : !1;
    default:
      return !1;
  }
}
function Qa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ha(e) {
  if (xe) {
    var t = tt;
    if (t) {
      var n = t;
      if (!ec(e, t)) {
        if (Qa(e)) throw Error($(418));
        t = sn(n.nextSibling);
        var r = nt;
        t && ec(e, t) ? lu(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, nt = e);
      }
    } else {
      if (Qa(e)) throw Error($(418));
      e.flags = e.flags & -4097 | 2, xe = !1, nt = e;
    }
  }
}
function tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  nt = e;
}
function Cl(e) {
  if (e !== nt) return !1;
  if (!xe) return tc(e), xe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps)), t && (t = tt)) {
    if (Qa(e)) throw su(), Error($(418));
    for (; t; ) lu(e, t), t = sn(t.nextSibling);
  }
  if (tc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tt = sn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function su() {
  for (var e = tt; e; ) e = sn(e.nextSibling);
}
function lr() {
  tt = nt = null, xe = !1;
}
function Ao(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var Jh = Vt.ReactCurrentBatchConfig;
function _r(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function Nl(e, t) {
  throw e = Object.prototype.toString.call(t), Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function nc(e) {
  var t = e._init;
  return t(e._payload);
}
function au(e) {
  function t(f, u) {
    if (e) {
      var m = f.deletions;
      m === null ? (f.deletions = [u], f.flags |= 16) : m.push(u);
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
  function l(f, u) {
    return f = dn(f, u), f.index = 0, f.sibling = null, f;
  }
  function a(f, u, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < u ? (f.flags |= 2, u) : m) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, m, g) {
    return u === null || u.tag !== 6 ? (u = fa(m, f.mode, g), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function c(f, u, m, g) {
    var b = m.type;
    return b === Fn ? h(f, u, m.props.children, g, m.key) : u !== null && (u.elementType === b || typeof b == "object" && b !== null && b.$$typeof === qt && nc(b) === u.type) ? (g = l(u, m.props), g.ref = _r(f, u, m), g.return = f, g) : (g = ql(m.type, m.key, m.props, null, f.mode, g), g.ref = _r(f, u, m), g.return = f, g);
  }
  function d(f, u, m, g) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== m.containerInfo || u.stateNode.implementation !== m.implementation ? (u = ma(m, f.mode, g), u.return = f, u) : (u = l(u, m.children || []), u.return = f, u);
  }
  function h(f, u, m, g, b) {
    return u === null || u.tag !== 7 ? (u = Sn(m, f.mode, g, b), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function v(f, u, m) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = fa("" + u, f.mode, m), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case yl:
          return m = ql(u.type, u.key, u.props, null, f.mode, m), m.ref = _r(f, null, u), m.return = f, m;
        case zn:
          return u = ma(u, f.mode, m), u.return = f, u;
        case qt:
          var g = u._init;
          return v(f, g(u._payload), m);
      }
      if (Er(u) || gr(u)) return u = Sn(u, f.mode, m, null), u.return = f, u;
      Nl(f, u);
    }
    return null;
  }
  function y(f, u, m, g) {
    var b = u !== null ? u.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return b !== null ? null : i(f, u, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case yl:
          return m.key === b ? c(f, u, m, g) : null;
        case zn:
          return m.key === b ? d(f, u, m, g) : null;
        case qt:
          return b = m._init, y(
            f,
            u,
            b(m._payload),
            g
          );
      }
      if (Er(m) || gr(m)) return b !== null ? null : h(f, u, m, g, null);
      Nl(f, m);
    }
    return null;
  }
  function k(f, u, m, g, b) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(m) || null, i(u, f, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case yl:
          return f = f.get(g.key === null ? m : g.key) || null, c(u, f, g, b);
        case zn:
          return f = f.get(g.key === null ? m : g.key) || null, d(u, f, g, b);
        case qt:
          var S = g._init;
          return k(f, u, m, S(g._payload), b);
      }
      if (Er(g) || gr(g)) return f = f.get(m) || null, h(u, f, g, b, null);
      Nl(u, g);
    }
    return null;
  }
  function w(f, u, m, g) {
    for (var b = null, S = null, j = u, M = u = 0, L = null; j !== null && M < m.length; M++) {
      j.index > M ? (L = j, j = null) : L = j.sibling;
      var P = y(f, j, m[M], g);
      if (P === null) {
        j === null && (j = L);
        break;
      }
      e && j && P.alternate === null && t(f, j), u = a(P, u, M), S === null ? b = P : S.sibling = P, S = P, j = L;
    }
    if (M === m.length) return n(f, j), xe && yn(f, M), b;
    if (j === null) {
      for (; M < m.length; M++) j = v(f, m[M], g), j !== null && (u = a(j, u, M), S === null ? b = j : S.sibling = j, S = j);
      return xe && yn(f, M), b;
    }
    for (j = r(f, j); M < m.length; M++) L = k(j, f, M, m[M], g), L !== null && (e && L.alternate !== null && j.delete(L.key === null ? M : L.key), u = a(L, u, M), S === null ? b = L : S.sibling = L, S = L);
    return e && j.forEach(function(I) {
      return t(f, I);
    }), xe && yn(f, M), b;
  }
  function x(f, u, m, g) {
    var b = gr(m);
    if (typeof b != "function") throw Error($(150));
    if (m = b.call(m), m == null) throw Error($(151));
    for (var S = b = null, j = u, M = u = 0, L = null, P = m.next(); j !== null && !P.done; M++, P = m.next()) {
      j.index > M ? (L = j, j = null) : L = j.sibling;
      var I = y(f, j, P.value, g);
      if (I === null) {
        j === null && (j = L);
        break;
      }
      e && j && I.alternate === null && t(f, j), u = a(I, u, M), S === null ? b = I : S.sibling = I, S = I, j = L;
    }
    if (P.done) return n(
      f,
      j
    ), xe && yn(f, M), b;
    if (j === null) {
      for (; !P.done; M++, P = m.next()) P = v(f, P.value, g), P !== null && (u = a(P, u, M), S === null ? b = P : S.sibling = P, S = P);
      return xe && yn(f, M), b;
    }
    for (j = r(f, j); !P.done; M++, P = m.next()) P = k(j, f, M, P.value, g), P !== null && (e && P.alternate !== null && j.delete(P.key === null ? M : P.key), u = a(P, u, M), S === null ? b = P : S.sibling = P, S = P);
    return e && j.forEach(function(z) {
      return t(f, z);
    }), xe && yn(f, M), b;
  }
  function _(f, u, m, g) {
    if (typeof m == "object" && m !== null && m.type === Fn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case yl:
          e: {
            for (var b = m.key, S = u; S !== null; ) {
              if (S.key === b) {
                if (b = m.type, b === Fn) {
                  if (S.tag === 7) {
                    n(f, S.sibling), u = l(S, m.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (S.elementType === b || typeof b == "object" && b !== null && b.$$typeof === qt && nc(b) === S.type) {
                  n(f, S.sibling), u = l(S, m.props), u.ref = _r(f, S, m), u.return = f, f = u;
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            m.type === Fn ? (u = Sn(m.props.children, f.mode, g, m.key), u.return = f, f = u) : (g = ql(m.type, m.key, m.props, null, f.mode, g), g.ref = _r(f, u, m), g.return = f, f = g);
          }
          return o(f);
        case zn:
          e: {
            for (S = m.key; u !== null; ) {
              if (u.key === S) if (u.tag === 4 && u.stateNode.containerInfo === m.containerInfo && u.stateNode.implementation === m.implementation) {
                n(f, u.sibling), u = l(u, m.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = ma(m, f.mode, g), u.return = f, f = u;
          }
          return o(f);
        case qt:
          return S = m._init, _(f, u, S(m._payload), g);
      }
      if (Er(m)) return w(f, u, m, g);
      if (gr(m)) return x(f, u, m, g);
      Nl(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, u !== null && u.tag === 6 ? (n(f, u.sibling), u = l(u, m), u.return = f, f = u) : (n(f, u), u = fa(m, f.mode, g), u.return = f, f = u), o(f)) : n(f, u);
  }
  return _;
}
var sr = au(!0), ou = au(!1), ds = hn(null), us = null, Kn = null, zo = null;
function Fo() {
  zo = Kn = us = null;
}
function Wo(e) {
  var t = ds.current;
  we(ds), e._currentValue = t;
}
function Ka(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function er(e, t) {
  us = e, zo = Kn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ye = !0), e.firstContext = null);
}
function ht(e) {
  var t = e._currentValue;
  if (zo !== e) if (e = { context: e, memoizedValue: t, next: null }, Kn === null) {
    if (us === null) throw Error($(308));
    Kn = e, us.dependencies = { lanes: 0, firstContext: e };
  } else Kn = Kn.next = e;
  return t;
}
var xn = null;
function $o(e) {
  xn === null ? xn = [e] : xn.push(e);
}
function iu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, $o(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Wt(e, r);
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function Uo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function cu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function At(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Wt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, $o(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Wt(e, n);
}
function Vl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Co(e, n);
  }
}
function rc(e, t) {
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
function fs(e, t, n, r) {
  var l = e.updateQueue;
  Yt = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = d : i.next = d, h.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = l.baseState;
    o = 0, h = d = c = null, i = a;
    do {
      var y = i.lane, k = i.eventTime;
      if ((r & y) === y) {
        h !== null && (h = h.next = {
          eventTime: k,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, x = i;
          switch (y = t, k = n, x.tag) {
            case 1:
              if (w = x.payload, typeof w == "function") {
                v = w.call(k, v, y);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = x.payload, y = typeof w == "function" ? w.call(k, v, y) : w, y == null) break e;
              v = je({}, v, y);
              break e;
            case 2:
              Yt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [i] : y.push(i));
      } else k = { eventTime: k, lane: y, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (d = h = k, c = v) : h = h.next = k, o |= y;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        y = i, i = y.next, y.next = null, l.lastBaseUpdate = y, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (c = v), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    Cn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function lc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error($(191, l));
      l.call(r);
    }
  }
}
var ul = {}, Mt = hn(ul), qr = hn(ul), Yr = hn(ul);
function _n(e) {
  if (e === ul) throw Error($(174));
  return e;
}
function Vo(e, t) {
  switch (he(Yr, t), he(qr, e), he(Mt, ul), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ca(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ca(t, e);
  }
  we(Mt), he(Mt, t);
}
function ar() {
  we(Mt), we(qr), we(Yr);
}
function du(e) {
  _n(Yr.current);
  var t = _n(Mt.current), n = Ca(t, e.type);
  t !== n && (he(qr, e), he(Mt, n));
}
function Bo(e) {
  qr.current === e && (we(Mt), we(qr));
}
var ke = hn(0);
function ms(e) {
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
var aa = [];
function Qo() {
  for (var e = 0; e < aa.length; e++) aa[e]._workInProgressVersionPrimary = null;
  aa.length = 0;
}
var Bl = Vt.ReactCurrentDispatcher, oa = Vt.ReactCurrentBatchConfig, En = 0, Se = null, Ie = null, Re = null, hs = !1, Dr = !1, Xr = 0, ep = 0;
function ze() {
  throw Error($(321));
}
function Ho(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!jt(e[n], t[n])) return !1;
  return !0;
}
function Ko(e, t, n, r, l, a) {
  if (En = a, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bl.current = e === null || e.memoizedState === null ? lp : sp, e = n(r, l), Dr) {
    a = 0;
    do {
      if (Dr = !1, Xr = 0, 25 <= a) throw Error($(301));
      a += 1, Re = Ie = null, t.updateQueue = null, Bl.current = ap, e = n(r, l);
    } while (Dr);
  }
  if (Bl.current = ps, t = Ie !== null && Ie.next !== null, En = 0, Re = Ie = Se = null, hs = !1, t) throw Error($(300));
  return e;
}
function Go() {
  var e = Xr !== 0;
  return Xr = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Re === null ? Se.memoizedState = Re = e : Re = Re.next = e, Re;
}
function pt() {
  if (Ie === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = Re === null ? Se.memoizedState : Re.next;
  if (t !== null) Re = t, Ie = e;
  else {
    if (e === null) throw Error($(310));
    Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, Re === null ? Se.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function Zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ia(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = Ie, l = r.baseQueue, a = n.pending;
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
      var h = d.lane;
      if ((En & h) === h) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, Se.lanes |= h, Cn |= h;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, jt(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, Se.lanes |= a, Cn |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ca(e) {
  var t = pt(), n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    jt(a, t.memoizedState) || (Ye = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function uu() {
}
function fu(e, t) {
  var n = Se, r = pt(), l = t(), a = !jt(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ye = !0), r = r.queue, qo(pu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Jr(9, hu.bind(null, n, r, l, t), void 0, null), De === null) throw Error($(349));
    En & 30 || mu(n, t, l);
  }
  return l;
}
function mu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function hu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, gu(t) && yu(e);
}
function pu(e, t, n) {
  return n(function() {
    gu(t) && yu(e);
  });
}
function gu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function yu(e) {
  var t = Wt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function sc(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = rp.bind(null, Se, e), [t.memoizedState, e];
}
function Jr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function vu() {
  return pt().memoizedState;
}
function Ql(e, t, n, r) {
  var l = Et();
  Se.flags |= e, l.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ms(e, t, n, r) {
  var l = pt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ie !== null) {
    var o = Ie.memoizedState;
    if (a = o.destroy, r !== null && Ho(r, o.deps)) {
      l.memoizedState = Jr(t, n, a, r);
      return;
    }
  }
  Se.flags |= e, l.memoizedState = Jr(1 | t, n, a, r);
}
function ac(e, t) {
  return Ql(8390656, 8, e, t);
}
function qo(e, t) {
  return Ms(2048, 8, e, t);
}
function wu(e, t) {
  return Ms(4, 2, e, t);
}
function xu(e, t) {
  return Ms(4, 4, e, t);
}
function _u(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ku(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ms(4, 4, _u.bind(null, t, e), n);
}
function Yo() {
}
function Su(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ju(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function bu(e, t, n) {
  return En & 21 ? (jt(n, t) || (n = Id(), Se.lanes |= n, Cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = n);
}
function tp(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = oa.transition;
  oa.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, oa.transition = r;
  }
}
function Eu() {
  return pt().memoizedState;
}
function np(e, t, n) {
  var r = cn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Cu(e)) Nu(t, n);
  else if (n = iu(e, t, n, r), n !== null) {
    var l = Be();
    St(n, e, r, l), Mu(n, t, r);
  }
}
function rp(e, t, n) {
  var r = cn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cu(e)) Nu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, jt(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, $o(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = iu(e, t, l, r), n !== null && (l = Be(), St(n, e, r, l), Mu(n, t, r));
  }
}
function Cu(e) {
  var t = e.alternate;
  return e === Se || t !== null && t === Se;
}
function Nu(e, t) {
  Dr = hs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Co(e, n);
  }
}
var ps = { readContext: ht, useCallback: ze, useContext: ze, useEffect: ze, useImperativeHandle: ze, useInsertionEffect: ze, useLayoutEffect: ze, useMemo: ze, useReducer: ze, useRef: ze, useState: ze, useDebugValue: ze, useDeferredValue: ze, useTransition: ze, useMutableSource: ze, useSyncExternalStore: ze, useId: ze, unstable_isNewReconciler: !1 }, lp = { readContext: ht, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ht, useEffect: ac, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ql(
    4194308,
    4,
    _u.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ql(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ql(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = np.bind(null, Se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: sc, useDebugValue: Yo, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = sc(!1), t = e[0];
  return e = tp.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Se, l = Et();
  if (xe) {
    if (n === void 0) throw Error($(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error($(349));
    En & 30 || mu(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, ac(pu.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Jr(9, hu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = De.identifierPrefix;
  if (xe) {
    var n = Ot, r = Pt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ep++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sp = {
  readContext: ht,
  useCallback: Su,
  useContext: ht,
  useEffect: qo,
  useImperativeHandle: ku,
  useInsertionEffect: wu,
  useLayoutEffect: xu,
  useMemo: ju,
  useReducer: ia,
  useRef: vu,
  useState: function() {
    return ia(Zr);
  },
  useDebugValue: Yo,
  useDeferredValue: function(e) {
    var t = pt();
    return bu(t, Ie.memoizedState, e);
  },
  useTransition: function() {
    var e = ia(Zr)[0], t = pt().memoizedState;
    return [e, t];
  },
  useMutableSource: uu,
  useSyncExternalStore: fu,
  useId: Eu,
  unstable_isNewReconciler: !1
}, ap = { readContext: ht, useCallback: Su, useContext: ht, useEffect: qo, useImperativeHandle: ku, useInsertionEffect: wu, useLayoutEffect: xu, useMemo: ju, useReducer: ca, useRef: vu, useState: function() {
  return ca(Zr);
}, useDebugValue: Yo, useDeferredValue: function(e) {
  var t = pt();
  return Ie === null ? t.memoizedState = e : bu(t, Ie.memoizedState, e);
}, useTransition: function() {
  var e = ca(Zr)[0], t = pt().memoizedState;
  return [e, t];
}, useMutableSource: uu, useSyncExternalStore: fu, useId: Eu, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = je({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ga(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : je({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Is = { isMounted: function(e) {
  return (e = e._reactInternals) ? Tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), l = cn(e), a = At(r, l);
  a.payload = t, n != null && (a.callback = n), t = an(e, a, l), t !== null && (St(t, e, l, r), Vl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), l = cn(e), a = At(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = an(e, a, l), t !== null && (St(t, e, l, r), Vl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = cn(e), l = At(n, r);
  l.tag = 2, t != null && (l.callback = t), t = an(e, l, r), t !== null && (St(t, e, r, n), Vl(t, e, r));
} };
function oc(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Qr(n, r) || !Qr(l, a) : !0;
}
function Iu(e, t, n) {
  var r = !1, l = fn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = ht(a) : (l = Ze(t) ? jn : $e.current, r = t.contextTypes, a = (r = r != null) ? rr(e, l) : fn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Is, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function ic(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Is.enqueueReplaceState(t, t.state, null);
}
function qa(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Uo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = ht(a) : (a = Ze(t) ? jn : $e.current, l.context = rr(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ga(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Is.enqueueReplaceState(l, l.state, null), fs(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function or(e, t) {
  try {
    var n = "", r = t;
    do
      n += Dm(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function da(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ya(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var op = typeof WeakMap == "function" ? WeakMap : Map;
function Tu(e, t, n) {
  n = At(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ys || (ys = !0, ao = r), Ya(e, t);
  }, n;
}
function Lu(e, t, n) {
  n = At(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ya(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Ya(e, t), typeof r != "function" && (on === null ? on = /* @__PURE__ */ new Set([this]) : on.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function cc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new op();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = _p.bind(null, e, t, n), t.then(e, e));
}
function dc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function uc(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = At(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e);
}
var ip = Vt.ReactCurrentOwner, Ye = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? ou(t, null, n, r) : sr(t, e.child, n, r);
}
function fc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return er(t, l), r = Ko(e, t, n, r, a, l), n = Go(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (xe && n && Po(t), t.flags |= 1, Ve(e, t, r, l), t.child);
}
function mc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !li(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Ru(e, t, a, r, l)) : (e = ql(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Qr, n(o, r) && e.ref === t.ref) return $t(e, t, l);
  }
  return t.flags |= 1, e = dn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ru(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Qr(a, r) && e.ref === t.ref) if (Ye = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ye = !0);
    else return t.lanes = e.lanes, $t(e, t, l);
  }
  return Xa(e, t, n, r, l);
}
function Du(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, he(qn, et), et |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, he(qn, et), et |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, he(qn, et), et |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, he(qn, et), et |= r;
  return Ve(e, t, l, n), t.child;
}
function Pu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Xa(e, t, n, r, l) {
  var a = Ze(n) ? jn : $e.current;
  return a = rr(t, a), er(t, l), n = Ko(e, t, n, r, a, l), r = Go(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (xe && r && Po(t), t.flags |= 1, Ve(e, t, n, l), t.child);
}
function hc(e, t, n, r, l) {
  if (Ze(n)) {
    var a = !0;
    os(t);
  } else a = !1;
  if (er(t, l), t.stateNode === null) Hl(e, t), Iu(t, n, r), qa(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = ht(d) : (d = Ze(n) ? jn : $e.current, d = rr(t, d));
    var h = n.getDerivedStateFromProps, v = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && ic(t, o, r, d), Yt = !1;
    var y = t.memoizedState;
    o.state = y, fs(t, r, o, l), c = t.memoizedState, i !== r || y !== c || Xe.current || Yt ? (typeof h == "function" && (Ga(t, n, h, r), c = t.memoizedState), (i = Yt || oc(t, n, i, r, y, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, cu(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : vt(t.type, i), o.props = d, v = t.pendingProps, y = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = ht(c) : (c = Ze(n) ? jn : $e.current, c = rr(t, c));
    var k = n.getDerivedStateFromProps;
    (h = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || y !== c) && ic(t, o, r, c), Yt = !1, y = t.memoizedState, o.state = y, fs(t, r, o, l);
    var w = t.memoizedState;
    i !== v || y !== w || Xe.current || Yt ? (typeof k == "function" && (Ga(t, n, k, r), w = t.memoizedState), (d = Yt || oc(t, n, d, r, y, w, c) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Za(e, t, n, r, a, l);
}
function Za(e, t, n, r, l, a) {
  Pu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Ji(t, n, !1), $t(e, t, a);
  r = t.stateNode, ip.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = sr(t, e.child, null, a), t.child = sr(t, null, i, a)) : Ve(e, t, i, a), t.memoizedState = r.state, l && Ji(t, n, !0), t.child;
}
function Ou(e) {
  var t = e.stateNode;
  t.pendingContext ? Zi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zi(e, t.context, !1), Vo(e, t.containerInfo);
}
function pc(e, t, n, r, l) {
  return lr(), Ao(l), t.flags |= 256, Ve(e, t, n, r), t.child;
}
var Ja = { dehydrated: null, treeContext: null, retryLane: 0 };
function eo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Au(e, t, n) {
  var r = t.pendingProps, l = ke.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), he(ke, l & 1), e === null)
    return Ha(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Rs(o, r, 0, null), e = Sn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = eo(n), t.memoizedState = Ja, e) : Xo(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return cp(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = dn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = dn(i, a) : (a = Sn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? eo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ja, r;
  }
  return a = e.child, e = a.sibling, r = dn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Xo(e, t) {
  return t = Rs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ml(e, t, n, r) {
  return r !== null && Ao(r), sr(t, e.child, null, n), e = Xo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function cp(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = da(Error($(422))), Ml(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Rs({ mode: "visible", children: r.children }, l, 0, null), a = Sn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && sr(t, e.child, null, o), t.child.memoizedState = eo(o), t.memoizedState = Ja, a);
  if (!(t.mode & 1)) return Ml(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error($(419)), r = da(a, r, void 0), Ml(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Ye || i) {
    if (r = De, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, Wt(e, l), St(r, e, l, -1));
    }
    return ri(), r = da(Error($(421))), Ml(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = kp.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, tt = sn(l.nextSibling), nt = t, xe = !0, xt = null, e !== null && (ct[dt++] = Pt, ct[dt++] = Ot, ct[dt++] = bn, Pt = e.id, Ot = e.overflow, bn = t), t = Xo(t, r.children), t.flags |= 4096, t);
}
function gc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ka(e.return, t, n);
}
function ua(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function zu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Ve(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && gc(e, n, t);
      else if (e.tag === 19) gc(e, n, t);
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
  if (he(ke, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ms(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ua(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ms(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ua(t, !0, n, null, a);
      break;
    case "together":
      ua(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Hl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Cn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (e = t.child, n = dn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function dp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ou(t), lr();
      break;
    case 5:
      du(t);
      break;
    case 1:
      Ze(t.type) && os(t);
      break;
    case 4:
      Vo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      he(ds, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (he(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Au(e, t, n) : (he(ke, ke.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      he(ke, ke.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return zu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), he(ke, ke.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Du(e, t, n);
  }
  return $t(e, t, n);
}
var Fu, to, Wu, $u;
Fu = function(e, t) {
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
to = function() {
};
Wu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, _n(Mt.current);
    var a = null;
    switch (n) {
      case "input":
        l = Sa(e, l), r = Sa(e, r), a = [];
        break;
      case "select":
        l = je({}, l, { value: void 0 }), r = je({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = Ea(e, l), r = Ea(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ss);
    }
    Na(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (zr.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (zr.hasOwnProperty(d) ? (c != null && d === "onScroll" && ve("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
$u = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kr(e, t) {
  if (!xe) switch (e.tailMode) {
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
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function up(e, t, n) {
  var r = t.pendingProps;
  switch (Oo(t), t.tag) {
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
      return Fe(t), null;
    case 1:
      return Ze(t.type) && as(), Fe(t), null;
    case 3:
      return r = t.stateNode, ar(), we(Xe), we($e), Qo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Cl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (co(xt), xt = null))), to(e, t), Fe(t), null;
    case 5:
      Bo(t);
      var l = _n(Yr.current);
      if (n = t.type, e !== null && t.stateNode != null) Wu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Fe(t), null;
        }
        if (e = _n(Mt.current), Cl(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Ct] = t, r[Gr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ve("cancel", r), ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nr.length; l++) ve(Nr[l], r);
              break;
            case "source":
              ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ve(
                "error",
                r
              ), ve("load", r);
              break;
            case "details":
              ve("toggle", r);
              break;
            case "input":
              bi(r, a), ve("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ve("invalid", r);
              break;
            case "textarea":
              Ci(r, a), ve("invalid", r);
          }
          Na(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && El(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && El(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : zr.hasOwnProperty(o) && i != null && o === "onScroll" && ve("scroll", r);
          }
          switch (n) {
            case "input":
              vl(r), Ei(r, a, !0);
              break;
            case "textarea":
              vl(r), Ni(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ss);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ct] = t, e[Gr] = r, Fu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ma(n, r), n) {
              case "dialog":
                ve("cancel", e), ve("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nr.length; l++) ve(Nr[l], e);
                l = r;
                break;
              case "source":
                ve("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ve(
                  "error",
                  e
                ), ve("load", e), l = r;
                break;
              case "details":
                ve("toggle", e), l = r;
                break;
              case "input":
                bi(e, r), l = Sa(e, r), ve("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = je({}, r, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                Ci(e, r), l = Ea(e, r), ve("invalid", e);
                break;
              default:
                l = r;
            }
            Na(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? vd(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && gd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Fr(e, c) : typeof c == "number" && Fr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (zr.hasOwnProperty(a) ? c != null && a === "onScroll" && ve("scroll", e) : c != null && _o(e, a, c, o));
            }
            switch (n) {
              case "input":
                vl(e), Ei(e, r, !1);
                break;
              case "textarea":
                vl(e), Ni(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Yn(e, !!r.multiple, a, !1) : r.defaultValue != null && Yn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ss);
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
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) $u(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (n = _n(Yr.current), _n(Mt.current), Cl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (a = r.nodeValue !== n) && (e = nt, e !== null)) switch (e.tag) {
            case 3:
              El(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && El(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return Fe(t), null;
    case 13:
      if (we(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (xe && tt !== null && t.mode & 1 && !(t.flags & 128)) su(), lr(), t.flags |= 98560, a = !1;
        else if (a = Cl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error($(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error($(317));
            a[Ct] = t;
          } else lr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Fe(t), a = !1;
        } else xt !== null && (co(xt), xt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Te === 0 && (Te = 3) : ri())), t.updateQueue !== null && (t.flags |= 4), Fe(t), null);
    case 4:
      return ar(), to(e, t), e === null && Hr(t.stateNode.containerInfo), Fe(t), null;
    case 10:
      return Wo(t.type._context), Fe(t), null;
    case 17:
      return Ze(t.type) && as(), Fe(t), null;
    case 19:
      if (we(ke), a = t.memoizedState, a === null) return Fe(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) kr(a, !1);
      else {
        if (Te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ms(e), o !== null) {
            for (t.flags |= 128, kr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return he(ke, ke.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ce() > ir && (t.flags |= 128, r = !0, kr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ms(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !xe) return Fe(t), null;
        } else 2 * Ce() - a.renderingStartTime > ir && n !== 1073741824 && (t.flags |= 128, r = !0, kr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ce(), t.sibling = null, n = ke.current, he(ke, r ? n & 1 | 2 : n & 1), t) : (Fe(t), null);
    case 22:
    case 23:
      return ni(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? et & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function fp(e, t) {
  switch (Oo(t), t.tag) {
    case 1:
      return Ze(t.type) && as(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ar(), we(Xe), we($e), Qo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Bo(t), null;
    case 13:
      if (we(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error($(340));
        lr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return we(ke), null;
    case 4:
      return ar(), null;
    case 10:
      return Wo(t.type._context), null;
    case 22:
    case 23:
      return ni(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Il = !1, We = !1, mp = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function Gn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ee(e, t, r);
  }
  else n.current = null;
}
function no(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var yc = !1;
function hp(e, t) {
  if (Fa = ns, e = Hd(), Do(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, h = 0, v = e, y = null;
        t: for (; ; ) {
          for (var k; v !== n || l !== 0 && v.nodeType !== 3 || (i = o + l), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (k = v.firstChild) !== null; )
            y = v, v = k;
          for (; ; ) {
            if (v === e) break t;
            if (y === n && ++d === l && (i = o), y === a && ++h === r && (c = o), (k = v.nextSibling) !== null) break;
            v = y, y = v.parentNode;
          }
          v = k;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wa = { focusedElem: e, selectionRange: n }, ns = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
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
            var x = w.memoizedProps, _ = w.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : vt(t.type, x), _);
            f.__reactInternalSnapshotBeforeUpdate = u;
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
          throw Error($(163));
      }
    } catch (g) {
      Ee(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return w = yc, yc = !1, w;
}
function Pr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && no(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ts(e, t) {
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
function ro(e) {
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
function Uu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Uu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Gr], delete t[Va], delete t[Yh], delete t[Xh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Vu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ss));
  else if (r !== 4 && (e = e.child, e !== null)) for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), e = e.sibling;
}
function so(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), e = e.sibling;
}
var Pe = null, wt = !1;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) Bu(e, t, n), n = n.sibling;
}
function Bu(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
    Nt.onCommitFiberUnmount(Ss, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      We || Gn(n, t);
    case 6:
      var r = Pe, l = wt;
      Pe = null, Gt(e, t, n), Pe = r, wt = l, Pe !== null && (wt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null && (wt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? la(e.parentNode, n) : e.nodeType === 1 && la(e, n), Vr(e)) : la(Pe, n.stateNode));
      break;
    case 4:
      r = Pe, l = wt, Pe = n.stateNode.containerInfo, wt = !0, Gt(e, t, n), Pe = r, wt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!We && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && no(n, t, o), l = l.next;
        } while (l !== r);
      }
      Gt(e, t, n);
      break;
    case 1:
      if (!We && (Gn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ee(n, t, i);
      }
      Gt(e, t, n);
      break;
    case 21:
      Gt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (We = (r = We) || n.memoizedState !== null, Gt(e, t, n), We = r) : Gt(e, t, n);
      break;
    default:
      Gt(e, t, n);
  }
}
function wc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mp()), t.forEach(function(r) {
      var l = Sp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var a = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            Pe = i.stateNode, wt = !1;
            break e;
          case 3:
            Pe = i.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Pe = i.stateNode.containerInfo, wt = !0;
            break e;
        }
        i = i.return;
      }
      if (Pe === null) throw Error($(160));
      Bu(a, o, l), Pe = null, wt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ee(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qu(t, e), t = t.sibling;
}
function Qu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (yt(t, e), bt(e), r & 4) {
        try {
          Pr(3, e, e.return), Ts(3, e);
        } catch (x) {
          Ee(e, e.return, x);
        }
        try {
          Pr(5, e, e.return);
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 1:
      yt(t, e), bt(e), r & 512 && n !== null && Gn(n, n.return);
      break;
    case 5:
      if (yt(t, e), bt(e), r & 512 && n !== null && Gn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Fr(l, "");
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && md(l, a), Ma(i, o);
          var d = Ma(i, a);
          for (o = 0; o < c.length; o += 2) {
            var h = c[o], v = c[o + 1];
            h === "style" ? vd(l, v) : h === "dangerouslySetInnerHTML" ? gd(l, v) : h === "children" ? Fr(l, v) : _o(l, h, v, d);
          }
          switch (i) {
            case "input":
              ja(l, a);
              break;
            case "textarea":
              hd(l, a);
              break;
            case "select":
              var y = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var k = a.value;
              k != null ? Yn(l, !!a.multiple, k, !1) : y !== !!a.multiple && (a.defaultValue != null ? Yn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Yn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Gr] = a;
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 6:
      if (yt(t, e), bt(e), r & 4) {
        if (e.stateNode === null) throw Error($(162));
        l = e.stateNode, a = e.memoizedProps;
        try {
          l.nodeValue = a;
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 3:
      if (yt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vr(t.containerInfo);
      } catch (x) {
        Ee(e, e.return, x);
      }
      break;
    case 4:
      yt(t, e), bt(e);
      break;
    case 13:
      yt(t, e), bt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (ei = Ce())), r & 4 && wc(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (We = (d = We) || h, yt(t, e), We = d) : yt(t, e), bt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1) for (G = e, h = e.child; h !== null; ) {
          for (v = G = h; G !== null; ) {
            switch (y = G, k = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pr(4, y, y.return);
                break;
              case 1:
                Gn(y, y.return);
                var w = y.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (x) {
                    Ee(r, n, x);
                  }
                }
                break;
              case 5:
                Gn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  _c(v);
                  continue;
                }
            }
            k !== null ? (k.return = y, G = k) : _c(v);
          }
          h = h.sibling;
        }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                l = v.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = yd("display", o));
              } catch (x) {
                Ee(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (h === null) try {
              v.stateNode.nodeValue = d ? "" : v.memoizedProps;
            } catch (x) {
              Ee(e, e.return, x);
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
      yt(t, e), bt(e), r & 4 && wc(e);
      break;
    case 21:
      break;
    default:
      yt(
        t,
        e
      ), bt(e);
  }
}
function bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fr(l, ""), r.flags &= -33);
          var a = vc(e);
          so(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = vc(e);
          lo(e, i, o);
          break;
        default:
          throw Error($(161));
      }
    } catch (c) {
      Ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pp(e, t, n) {
  G = e, Hu(e);
}
function Hu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var l = G, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Il;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || We;
        i = Il;
        var d = We;
        if (Il = o, (We = c) && !d) for (G = l; G !== null; ) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null ? kc(l) : c !== null ? (c.return = o, G = c) : kc(l);
        for (; a !== null; ) G = a, Hu(a), a = a.sibling;
        G = l, Il = i, We = d;
      }
      xc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, G = a) : xc(e);
  }
}
function xc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            We || Ts(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !We) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && lc(t, a, r);
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
              lc(t, o, n);
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
                  v !== null && Vr(v);
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
            throw Error($(163));
        }
        We || t.flags & 512 && ro(t);
      } catch (y) {
        Ee(t, t.return, y);
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
function _c(e) {
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
function kc(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ts(4, t);
          } catch (c) {
            Ee(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ee(t, l, c);
            }
          }
          var a = t.return;
          try {
            ro(t);
          } catch (c) {
            Ee(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ro(t);
          } catch (c) {
            Ee(t, o, c);
          }
      }
    } catch (c) {
      Ee(t, t.return, c);
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
var gp = Math.ceil, gs = Vt.ReactCurrentDispatcher, Zo = Vt.ReactCurrentOwner, ft = Vt.ReactCurrentBatchConfig, ae = 0, De = null, Me = null, Oe = 0, et = 0, qn = hn(0), Te = 0, el = null, Cn = 0, Ls = 0, Jo = 0, Or = null, Ge = null, ei = 0, ir = 1 / 0, Rt = null, ys = !1, ao = null, on = null, Tl = !1, tn = null, vs = 0, Ar = 0, oo = null, Kl = -1, Gl = 0;
function Be() {
  return ae & 6 ? Ce() : Kl !== -1 ? Kl : Kl = Ce();
}
function cn(e) {
  return e.mode & 1 ? ae & 2 && Oe !== 0 ? Oe & -Oe : Jh.transition !== null ? (Gl === 0 && (Gl = Id()), Gl) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ad(e.type)), e) : 1;
}
function St(e, t, n, r) {
  if (50 < Ar) throw Ar = 0, oo = null, Error($(185));
  il(e, n, r), (!(ae & 2) || e !== De) && (e === De && (!(ae & 2) && (Ls |= n), Te === 4 && Zt(e, Oe)), Je(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (ir = Ce() + 500, Ns && pn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  Jm(e, t);
  var r = ts(e, e === De ? Oe : 0);
  if (r === 0) n !== null && Ti(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ti(n), t === 1) e.tag === 0 ? Zh(Sc.bind(null, e)) : nu(Sc.bind(null, e)), Gh(function() {
      !(ae & 6) && pn();
    }), n = null;
    else {
      switch (Td(r)) {
        case 1:
          n = Eo;
          break;
        case 4:
          n = Nd;
          break;
        case 16:
          n = es;
          break;
        case 536870912:
          n = Md;
          break;
        default:
          n = es;
      }
      n = ef(n, Ku.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ku(e, t) {
  if (Kl = -1, Gl = 0, ae & 6) throw Error($(327));
  var n = e.callbackNode;
  if (tr() && e.callbackNode !== n) return null;
  var r = ts(e, e === De ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ws(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = qu();
    (De !== e || Oe !== t) && (Rt = null, ir = Ce() + 500, kn(e, t));
    do
      try {
        wp();
        break;
      } catch (i) {
        Gu(e, i);
      }
    while (!0);
    Fo(), gs.current = a, ae = l, Me !== null ? t = 0 : (De = null, Oe = 0, t = Te);
  }
  if (t !== 0) {
    if (t === 2 && (l = Da(e), l !== 0 && (r = l, t = io(e, l))), t === 1) throw n = el, kn(e, 0), Zt(e, r), Je(e, Ce()), n;
    if (t === 6) Zt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !yp(l) && (t = ws(e, r), t === 2 && (a = Da(e), a !== 0 && (r = a, t = io(e, a))), t === 1)) throw n = el, kn(e, 0), Zt(e, r), Je(e, Ce()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          vn(e, Ge, Rt);
          break;
        case 3:
          if (Zt(e, r), (r & 130023424) === r && (t = ei + 500 - Ce(), 10 < t)) {
            if (ts(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Be(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ua(vn.bind(null, e, Ge, Rt), t);
            break;
          }
          vn(e, Ge, Rt);
          break;
        case 4:
          if (Zt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - kt(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ua(vn.bind(null, e, Ge, Rt), r);
            break;
          }
          vn(e, Ge, Rt);
          break;
        case 5:
          vn(e, Ge, Rt);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return Je(e, Ce()), e.callbackNode === n ? Ku.bind(null, e) : null;
}
function io(e, t) {
  var n = Or;
  return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = ws(e, t), e !== 2 && (t = Ge, Ge = n, t !== null && co(t)), e;
}
function co(e) {
  Ge === null ? Ge = e : Ge.push.apply(Ge, e);
}
function yp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], a = l.getSnapshot;
        l = l.value;
        try {
          if (!jt(a(), l)) return !1;
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
function Zt(e, t) {
  for (t &= ~Jo, t &= ~Ls, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Sc(e) {
  if (ae & 6) throw Error($(327));
  tr();
  var t = ts(e, 0);
  if (!(t & 1)) return Je(e, Ce()), null;
  var n = ws(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Da(e);
    r !== 0 && (t = r, n = io(e, r));
  }
  if (n === 1) throw n = el, kn(e, 0), Zt(e, t), Je(e, Ce()), n;
  if (n === 6) throw Error($(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, vn(e, Ge, Rt), Je(e, Ce()), null;
}
function ti(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (ir = Ce() + 500, Ns && pn());
  }
}
function Nn(e) {
  tn !== null && tn.tag === 0 && !(ae & 6) && tr();
  var t = ae;
  ae |= 1;
  var n = ft.transition, r = ce;
  try {
    if (ft.transition = null, ce = 1, e) return e();
  } finally {
    ce = r, ft.transition = n, ae = t, !(ae & 6) && pn();
  }
}
function ni() {
  et = qn.current, we(qn);
}
function kn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Kh(n)), Me !== null) for (n = Me.return; n !== null; ) {
    var r = n;
    switch (Oo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && as();
        break;
      case 3:
        ar(), we(Xe), we($e), Qo();
        break;
      case 5:
        Bo(r);
        break;
      case 4:
        ar();
        break;
      case 13:
        we(ke);
        break;
      case 19:
        we(ke);
        break;
      case 10:
        Wo(r.type._context);
        break;
      case 22:
      case 23:
        ni();
    }
    n = n.return;
  }
  if (De = e, Me = e = dn(e.current, null), Oe = et = t, Te = 0, el = null, Jo = Ls = Cn = 0, Ge = Or = null, xn !== null) {
    for (t = 0; t < xn.length; t++) if (n = xn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    xn = null;
  }
  return e;
}
function Gu(e, t) {
  do {
    var n = Me;
    try {
      if (Fo(), Bl.current = ps, hs) {
        for (var r = Se.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        hs = !1;
      }
      if (En = 0, Re = Ie = Se = null, Dr = !1, Xr = 0, Zo.current = null, n === null || n.return === null) {
        Te = 1, el = t, Me = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Oe, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, h = i, v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var y = h.alternate;
            y ? (h.updateQueue = y.updateQueue, h.memoizedState = y.memoizedState, h.lanes = y.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var k = dc(o);
          if (k !== null) {
            k.flags &= -257, uc(k, o, i, a, t), k.mode & 1 && cc(a, d, t), t = k, c = d;
            var w = t.updateQueue;
            if (w === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(c), t.updateQueue = x;
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              cc(a, d, t), ri();
              break e;
            }
            c = Error($(426));
          }
        } else if (xe && i.mode & 1) {
          var _ = dc(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), uc(_, o, i, a, t), Ao(or(c, i));
            break e;
          }
        }
        a = c = or(c, i), Te !== 4 && (Te = 2), Or === null ? Or = [a] : Or.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Tu(a, c, t);
              rc(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (on === null || !on.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Lu(a, i, t);
                rc(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Xu(n);
    } catch (b) {
      t = b, Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qu() {
  var e = gs.current;
  return gs.current = ps, e === null ? ps : e;
}
function ri() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4), De === null || !(Cn & 268435455) && !(Ls & 268435455) || Zt(De, Oe);
}
function ws(e, t) {
  var n = ae;
  ae |= 2;
  var r = qu();
  (De !== e || Oe !== t) && (Rt = null, kn(e, t));
  do
    try {
      vp();
      break;
    } catch (l) {
      Gu(e, l);
    }
  while (!0);
  if (Fo(), ae = n, gs.current = r, Me !== null) throw Error($(261));
  return De = null, Oe = 0, Te;
}
function vp() {
  for (; Me !== null; ) Yu(Me);
}
function wp() {
  for (; Me !== null && !Bm(); ) Yu(Me);
}
function Yu(e) {
  var t = Ju(e.alternate, e, et);
  e.memoizedProps = e.pendingProps, t === null ? Xu(e) : Me = t, Zo.current = null;
}
function Xu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = fp(n, t), n !== null) {
        n.flags &= 32767, Me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Te = 6, Me = null;
        return;
      }
    } else if (n = up(n, t, et), n !== null) {
      Me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function vn(e, t, n) {
  var r = ce, l = ft.transition;
  try {
    ft.transition = null, ce = 1, xp(e, t, n, r);
  } finally {
    ft.transition = l, ce = r;
  }
  return null;
}
function xp(e, t, n, r) {
  do
    tr();
  while (tn !== null);
  if (ae & 6) throw Error($(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error($(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (eh(e, a), e === De && (Me = De = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Tl || (Tl = !0, ef(es, function() {
    return tr(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = ce;
    ce = 1;
    var i = ae;
    ae |= 4, Zo.current = null, hp(e, n), Qu(n, e), Wh(Wa), ns = !!Fa, Wa = Fa = null, e.current = n, pp(n), Qm(), ae = i, ce = o, ft.transition = a;
  } else e.current = n;
  if (Tl && (Tl = !1, tn = e, vs = l), a = e.pendingLanes, a === 0 && (on = null), Gm(n.stateNode), Je(e, Ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ys) throw ys = !1, e = ao, ao = null, e;
  return vs & 1 && e.tag !== 0 && tr(), a = e.pendingLanes, a & 1 ? e === oo ? Ar++ : (Ar = 0, oo = e) : Ar = 0, pn(), null;
}
function tr() {
  if (tn !== null) {
    var e = Td(vs), t = ft.transition, n = ce;
    try {
      if (ft.transition = null, ce = 16 > e ? 16 : e, tn === null) var r = !1;
      else {
        if (e = tn, tn = null, vs = 0, ae & 6) throw Error($(331));
        var l = ae;
        for (ae |= 4, G = e.current; G !== null; ) {
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
                      Pr(8, h, a);
                  }
                  var v = h.child;
                  if (v !== null) v.return = h, G = v;
                  else for (; G !== null; ) {
                    h = G;
                    var y = h.sibling, k = h.return;
                    if (Uu(h), h === d) {
                      G = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = k, G = y;
                      break;
                    }
                    G = k;
                  }
                }
              }
              var w = a.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var _ = x.sibling;
                    x.sibling = null, x = _;
                  } while (x !== null);
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
                Pr(9, a, a.return);
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
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, G = m;
          else e: for (o = u; G !== null; ) {
            if (i = G, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Ts(9, i);
              }
            } catch (b) {
              Ee(i, i.return, b);
            }
            if (i === o) {
              G = null;
              break e;
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, G = g;
              break e;
            }
            G = i.return;
          }
        }
        if (ae = l, pn(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
          Nt.onPostCommitFiberRoot(Ss, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ce = n, ft.transition = t;
    }
  }
  return !1;
}
function jc(e, t, n) {
  t = or(n, t), t = Tu(e, t, 1), e = an(e, t, 1), t = Be(), e !== null && (il(e, 1, t), Je(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) jc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      jc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = or(n, e), e = Lu(t, e, 1), t = an(t, e, 1), e = Be(), t !== null && (il(t, 1, e), Je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function _p(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Oe & n) === n && (Te === 4 || Te === 3 && (Oe & 130023424) === Oe && 500 > Ce() - ei ? kn(e, 0) : Jo |= n), Je(e, t);
}
function Zu(e, t) {
  t === 0 && (e.mode & 1 ? (t = _l, _l <<= 1, !(_l & 130023424) && (_l = 4194304)) : t = 1);
  var n = Be();
  e = Wt(e, t), e !== null && (il(e, t, n), Je(e, n));
}
function kp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Zu(e, n);
}
function Sp(e, t) {
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
      throw Error($(314));
  }
  r !== null && r.delete(t), Zu(e, n);
}
var Ju;
Ju = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) Ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ye = !1, dp(e, t, n);
    Ye = !!(e.flags & 131072);
  }
  else Ye = !1, xe && t.flags & 1048576 && ru(t, cs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Hl(e, t), e = t.pendingProps;
      var l = rr(t, $e.current);
      er(t, n), l = Ko(null, t, r, e, l, n);
      var a = Go();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ze(r) ? (a = !0, os(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Uo(t), l.updater = Is, t.stateNode = l, l._reactInternals = t, qa(t, r, e, n), t = Za(null, t, r, !0, a, n)) : (t.tag = 0, xe && a && Po(t), Ve(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Hl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = bp(r), e = vt(r, e), l) {
          case 0:
            t = Xa(null, t, r, e, n);
            break e;
          case 1:
            t = hc(null, t, r, e, n);
            break e;
          case 11:
            t = fc(null, t, r, e, n);
            break e;
          case 14:
            t = mc(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error($(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Xa(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), hc(e, t, r, l, n);
    case 3:
      e: {
        if (Ou(t), e === null) throw Error($(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, cu(e, t), fs(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = or(Error($(423)), t), t = pc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = or(Error($(424)), t), t = pc(e, t, r, n, l);
          break e;
        } else for (tt = sn(t.stateNode.containerInfo.firstChild), nt = t, xe = !0, xt = null, n = ou(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (lr(), r === l) {
            t = $t(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return du(t), e === null && Ha(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, $a(r, l) ? o = null : a !== null && $a(r, a) && (t.flags |= 32), Pu(e, t), Ve(e, t, o, n), t.child;
    case 6:
      return e === null && Ha(t), null;
    case 13:
      return Au(e, t, n);
    case 4:
      return Vo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sr(t, null, r, n) : Ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), fc(e, t, r, l, n);
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, he(ds, r._currentValue), r._currentValue = o, a !== null) if (jt(a.value, o)) {
          if (a.children === l.children && !Xe.current) {
            t = $t(e, t, n);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var i = a.dependencies;
          if (i !== null) {
            o = a.child;
            for (var c = i.firstContext; c !== null; ) {
              if (c.context === r) {
                if (a.tag === 1) {
                  c = At(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var h = d.pending;
                    h === null ? c.next = c : (c.next = h.next, h.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Ka(
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
            if (o = a.return, o === null) throw Error($(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ka(o, n, t), o = a.sibling;
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
        Ve(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, er(t, n), l = ht(l), r = r(l), t.flags |= 1, Ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = vt(r, t.pendingProps), l = vt(r.type, l), mc(e, t, r, l, n);
    case 15:
      return Ru(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Hl(e, t), t.tag = 1, Ze(r) ? (e = !0, os(t)) : e = !1, er(t, n), Iu(t, r, l), qa(t, r, l, n), Za(null, t, r, !0, e, n);
    case 19:
      return zu(e, t, n);
    case 22:
      return Du(e, t, n);
  }
  throw Error($(156, t.tag));
};
function ef(e, t) {
  return Cd(e, t);
}
function jp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new jp(e, t, n, r);
}
function li(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function bp(e) {
  if (typeof e == "function") return li(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === So) return 11;
    if (e === jo) return 14;
  }
  return 2;
}
function dn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ql(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") li(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Fn:
      return Sn(n.children, l, a, t);
    case ko:
      o = 8, l |= 8;
      break;
    case wa:
      return e = ut(12, n, t, l | 2), e.elementType = wa, e.lanes = a, e;
    case xa:
      return e = ut(13, n, t, l), e.elementType = xa, e.lanes = a, e;
    case _a:
      return e = ut(19, n, t, l), e.elementType = _a, e.lanes = a, e;
    case dd:
      return Rs(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case id:
          o = 10;
          break e;
        case cd:
          o = 9;
          break e;
        case So:
          o = 11;
          break e;
        case jo:
          o = 14;
          break e;
        case qt:
          o = 16, r = null;
          break e;
      }
      throw Error($(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function Sn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function Rs(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = dd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function fa(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function ma(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ep(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ks(0), this.expirationTimes = Ks(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ks(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function si(e, t, n, r, l, a, o, i, c) {
  return e = new Ep(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Uo(a), e;
}
function Cp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: zn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function tf(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return tu(e, n, t);
  }
  return t;
}
function nf(e, t, n, r, l, a, o, i, c) {
  return e = si(n, r, !0, e, l, a, o, i, c), e.context = tf(null), n = e.current, r = Be(), l = cn(n), a = At(r, l), a.callback = t ?? null, an(n, a, l), e.current.lanes = l, il(e, l, r), Je(e, r), e;
}
function Ds(e, t, n, r) {
  var l = t.current, a = Be(), o = cn(l);
  return n = tf(n), t.context === null ? t.context = n : t.pendingContext = n, t = At(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(l, t, o), e !== null && (St(e, l, o, a), Vl(e, l, o)), o;
}
function xs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ai(e, t) {
  bc(e, t), (e = e.alternate) && bc(e, t);
}
function Np() {
  return null;
}
var rf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function oi(e) {
  this._internalRoot = e;
}
Ps.prototype.render = oi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  Ds(e, t, null, null);
};
Ps.prototype.unmount = oi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function() {
      Ds(null, e, null, null);
    }), t[Ft] = null;
  }
};
function Ps(e) {
  this._internalRoot = e;
}
Ps.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++) ;
    Xt.splice(n, 0, e), n === 0 && Od(e);
  }
};
function ii(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Os(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ec() {
}
function Mp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = xs(o);
        a.call(d);
      };
    }
    var o = nf(t, r, e, 0, null, !1, !1, "", Ec);
    return e._reactRootContainer = o, e[Ft] = o.current, Hr(e.nodeType === 8 ? e.parentNode : e), Nn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = xs(c);
      i.call(d);
    };
  }
  var c = si(e, 0, !1, null, null, !1, !1, "", Ec);
  return e._reactRootContainer = c, e[Ft] = c.current, Hr(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
    Ds(t, c, n, r);
  }), c;
}
function As(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = xs(o);
        i.call(c);
      };
    }
    Ds(t, o, e, l);
  } else o = Mp(n, t, e, l, r);
  return xs(o);
}
Ld = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cr(t.pendingLanes);
        n !== 0 && (Co(t, n | 1), Je(t, Ce()), !(ae & 6) && (ir = Ce() + 500, pn()));
      }
      break;
    case 13:
      Nn(function() {
        var r = Wt(e, 1);
        if (r !== null) {
          var l = Be();
          St(r, e, 1, l);
        }
      }), ai(e, 1);
  }
};
No = function(e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = Be();
      St(t, e, 134217728, n);
    }
    ai(e, 134217728);
  }
};
Rd = function(e) {
  if (e.tag === 13) {
    var t = cn(e), n = Wt(e, t);
    if (n !== null) {
      var r = Be();
      St(n, e, t, r);
    }
    ai(e, t);
  }
};
Dd = function() {
  return ce;
};
Pd = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
Ta = function(e, t, n) {
  switch (t) {
    case "input":
      if (ja(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Cs(r);
            if (!l) throw Error($(90));
            fd(r), ja(r, l);
          }
        }
      }
      break;
    case "textarea":
      hd(e, n);
      break;
    case "select":
      t = n.value, t != null && Yn(e, !!n.multiple, t, !1);
  }
};
_d = ti;
kd = Nn;
var Ip = { usingClientEntryPoint: !1, Events: [dl, Vn, Cs, wd, xd, ti] }, Sr = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Tp = { bundleType: Sr.bundleType, version: Sr.version, rendererPackageName: Sr.rendererPackageName, rendererConfig: Sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Sr.findFiberByHostInstance || Np, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ll.isDisabled && Ll.supportsFiber) try {
    Ss = Ll.inject(Tp), Nt = Ll;
  } catch {
  }
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ip;
lt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ii(t)) throw Error($(200));
  return Cp(e, t, null, n);
};
lt.createRoot = function(e, t) {
  if (!ii(e)) throw Error($(299));
  var n = !1, r = "", l = rf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = si(e, 1, !1, null, null, n, !1, r, l), e[Ft] = t.current, Hr(e.nodeType === 8 ? e.parentNode : e), new oi(t);
};
lt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error($(188)) : (e = Object.keys(e).join(","), Error($(268, e)));
  return e = bd(t), e = e === null ? null : e.stateNode, e;
};
lt.flushSync = function(e) {
  return Nn(e);
};
lt.hydrate = function(e, t, n) {
  if (!Os(t)) throw Error($(200));
  return As(null, e, t, !0, n);
};
lt.hydrateRoot = function(e, t, n) {
  if (!ii(e)) throw Error($(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = rf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = nf(t, null, e, 1, n ?? null, l, !1, a, o), e[Ft] = t.current, Hr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ps(t);
};
lt.render = function(e, t, n) {
  if (!Os(t)) throw Error($(200));
  return As(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function(e) {
  if (!Os(e)) throw Error($(40));
  return e._reactRootContainer ? (Nn(function() {
    As(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
lt.unstable_batchedUpdates = ti;
lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Os(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return As(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function lf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lf);
    } catch (e) {
      console.error(e);
    }
}
lf(), ld.exports = lt;
var me = ld.exports, sf, Cc = me;
sf = Cc.createRoot, Cc.hydrateRoot;
var af = { exports: {} }, zs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lp = p, Rp = Symbol.for("react.element"), Dp = Symbol.for("react.fragment"), Pp = Object.prototype.hasOwnProperty, Op = Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function of(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Pp.call(t, r) && !Ap.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Rp, type: e, key: a, ref: o, props: l, _owner: Op.current };
}
zs.Fragment = Dp;
zs.jsx = of;
zs.jsxs = of;
af.exports = zs;
var s = af.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zp = {
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
const Fp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), J = (e, t) => {
  const n = p.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, h) => p.createElement(
      "svg",
      {
        ref: h,
        ...zp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Fp(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, y]) => p.createElement(v, y)),
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
const cf = J("AlertCircle", [
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
const Wp = J("AlertTriangle", [
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
const df = J("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = J("ArrowUpDown", [
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
const uf = J("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = J("Box", [
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
const Vp = J("Calendar", [
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
const Bp = J("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = J("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = J("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff = J("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = J("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = J("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = J("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = J("Download", [
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
const Gp = J("Eraser", [
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
const ui = J("FileJson", [
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
const qp = J("FileText", [
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
const Yp = J("Folder", [
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
const Xp = J("Info", [
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
const Zp = J("Lasso", [
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
const mf = J("LayoutGrid", [
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
const Jp = J("LayoutList", [
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
const eg = J("Link2Off", [
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
const tg = J("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = J("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = J("Maximize", [
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
const rg = J("Menu", [
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
const lg = J("Minimize", [
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
const sg = J("MoreVertical", [
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
const ag = J("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = J("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = J("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = J("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = J("RefreshCw", [
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
const og = J("ScanLine", [
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
const Mn = J("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pf = J("Settings", [
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
const gf = J("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = J("Star", [
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
const ig = J("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = J("Tag", [
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
const Ut = J("Trash2", [
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
const cg = J("Trash", [
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
const dg = J("Type", [
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
const ug = J("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fg = J("Upload", [
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
const mg = J("Workflow", [
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
const pe = J("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hg = J("ZoomIn", [
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
const pg = J("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
window.api = te;
async function le(e) {
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
const yf = (e) => typeof e == "object" && e !== null, Mc = (e) => {
  if (typeof e == "string")
    return e;
  if (yf(e) && typeof e.message == "string")
    return e.message;
};
async function fi(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    throw e.ok ? new Error("Failed to parse JSON response") : new Error(`${e.status} ${e.statusText}`);
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (yf(t)) {
      const r = "error" in t ? t.error : void 0, l = Mc(r), a = "message" in t ? Mc(t.message) : void 0;
      n = l ?? a ?? n;
    }
    throw new Error(n);
  }
  return t;
}
const gg = async () => {
  const e = await te.fetchApi("/meld/home-dir");
  return (await le(e)).home;
}, Ue = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  p.useEffect(() => {
    if (!t) return;
    const r = (l) => {
      l.key === "Escape" && (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let _s = !1;
const yg = (e) => {
  _s = e, _s && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, vg = (...e) => {
  _s && console.log("[Meld]", ...e);
}, wg = (...e) => {
  _s && console.warn("[Meld]", ...e);
}, xg = (...e) => {
  console.error("[Meld]", ...e);
}, Q = {
  log: vg,
  warn: wg,
  error: xg,
  init: yg
}, Yl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return le(a);
}, vf = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return le(t);
}, _g = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await le(n);
}, uo = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return le(t);
}, wf = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return le(t);
}, Ic = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await le(n);
}, kg = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(`/meld/suggest-parents?id=${e}${n}`);
  try {
    return await le(r);
  } catch {
    return [];
  }
}, mi = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await le(t);
  } catch {
    return [];
  }
}, Sg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await le(n);
}, jg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return le(n);
}, xf = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await le(r);
}, bg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return le(t);
}, Eg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return le(t);
}, Cg = async (e, t) => {
  const n = await te.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), l = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = l, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(l), document.body.removeChild(a);
}, Ng = async (e, t) => {
  const n = await te.fetchApi("/meld/api/download/raw", {
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
}, Mg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return le(r);
}, Ig = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return le(e);
}, Tg = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return le(e);
}, Lg = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return le(e);
}, Rg = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return le(e);
}, Dg = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await le(n);
}, Tc = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await le(t);
}, Pg = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await le(r);
}, Og = {
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
}, _f = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await le(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Og;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Ag = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await le(n);
}, zg = async () => {
  const e = await te.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return le(e);
};
function jr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const Fg = (e, t) => {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = jr(e.images.filter((o) => !n.has(o.id))), l = jr(
        e.lineageImages.filter((o) => !n.has(o.id))
      ), a = Math.max(
        0,
        e.pagination.total + (r.length - e.images.length)
      );
      return {
        ...e,
        images: r,
        lineageImages: l,
        pagination: {
          ...e.pagination,
          total: a
        }
      };
    }
    case "ADD_IMAGES": {
      const n = [...e.images, ...t.payload], r = jr(n).sort(
        (a, o) => o.created_at - a.created_at
      ), l = Math.max(
        0,
        e.pagination.total + (r.length - e.images.length)
      );
      return {
        ...e,
        images: r,
        pagination: {
          ...e.pagination,
          total: l
        }
      };
    }
    case "UPDATE_IMAGE": {
      const n = t.payload, r = e.images.map(
        (a) => a.id === n.id ? n : a
      ), l = e.lineageImages.map(
        (a) => a.id === n.id ? n : a
      );
      return {
        ...e,
        images: r,
        lineageImages: l
      };
    }
    case "SET_IMAGES": {
      const { images: n, total: r, offset: l } = t.payload, a = jr(n);
      return {
        ...e,
        images: a,
        isLoading: !1,
        error: null,
        pagination: {
          total: r,
          offset: l,
          limit: e.pagination.limit,
          // hasMore must use deduped length to preserve dedupe-aware pagination.
          hasMore: l + a.length < r
        }
      };
    }
    case "APPEND_IMAGES": {
      const { images: n, total: r, offset: l } = t.payload, a = [...e.images, ...n], o = jr(a);
      return {
        ...e,
        images: o,
        isLoading: !1,
        error: null,
        pagination: {
          ...e.pagination,
          total: r,
          offset: l,
          // hasMore must be based on total unique loaded items after merge.
          hasMore: o.length < r
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
    default:
      return e;
  }
};
function kf(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const Wg = (e, t) => {
  switch (t.type) {
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
    case "OPEN_VIEWER": {
      const n = t.payload, r = kf(n);
      if (!r)
        return e;
      const l = typeof n == "number" ? n : n.id;
      return {
        ...e,
        activeModal: {
          type: "mask_editor",
          imageId: l,
          mode: r
        }
      };
    }
    case "OPEN_CONFIRM_MODAL":
      return {
        ...e,
        confirmModal: t.payload
      };
    case "CLOSE_CONFIRM_MODAL":
      return {
        ...e,
        confirmModal: null
      };
    default:
      return e;
  }
}, $g = (e, t) => {
  switch (t.type) {
    case "TOGGLE_SELECT": {
      const n = new Set(e.selectedIds);
      let r = e.lastSelectedId;
      return n.has(t.payload) ? (n.delete(t.payload), r === t.payload && (r = null)) : (n.add(t.payload), r = t.payload), {
        ...e,
        selectedIds: n,
        lastSelectedId: r
      };
    }
    case "SELECT_RANGE": {
      if (e.lastSelectedId === null) {
        const i = new Set(e.selectedIds);
        return i.add(t.payload), {
          ...e,
          selectedIds: i,
          lastSelectedId: t.payload
        };
      }
      const n = e.images.findIndex((i) => i.id === e.lastSelectedId), r = e.images.findIndex((i) => i.id === t.payload);
      if (n === -1 || r === -1)
        return e;
      const [l, a] = [Math.min(n, r), Math.max(n, r)], o = new Set(e.selectedIds);
      for (let i = l; i <= a; i++) {
        const c = e.images[i];
        c && o.add(c.id);
      }
      return {
        ...e,
        selectedIds: o,
        lastSelectedId: t.payload
      };
    }
    case "SELECT_ALL":
      return {
        ...e,
        selectedIds: new Set(e.images.map((n) => n.id)),
        lastSelectedId: e.images.length > 0 ? e.images[0].id : null
      };
    case "CLEAR_SELECTION":
      return {
        ...e,
        selectedIds: /* @__PURE__ */ new Set(),
        lastSelectedId: null
      };
    case "DESELECT_IMAGES": {
      const n = new Set(e.selectedIds);
      let r = e.lastSelectedId;
      return t.payload.forEach((l) => {
        n.delete(l), r === l && (r = null);
      }), {
        ...e,
        selectedIds: n,
        lastSelectedId: r
      };
    }
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = new Set(e.selectedIds);
      for (const l of n)
        r.delete(l);
      return {
        ...e,
        selectedIds: r,
        lastSelectedId: e.lastSelectedId !== null && n.has(e.lastSelectedId) ? null : e.lastSelectedId
      };
    }
    default:
      return e;
  }
}, Ug = (e, t) => {
  switch (t.type) {
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
      const n = {
        ...e.settings,
        ...t.payload
      }, r = { ...e.pagination };
      return t.payload["gallery.initial_load_count"] !== void 0 && (r.limit = t.payload["gallery.initial_load_count"]), {
        ...e,
        settings: n,
        pagination: r
      };
    }
    case "SET_SEARCH_QUERY":
      return {
        ...e,
        searchQuery: t.payload
      };
    case "SHOW_TOAST": {
      const n = t.payload;
      return typeof n == "string" ? {
        ...e,
        toastMessage: n,
        toastType: "info"
      } : {
        ...e,
        toastMessage: n.message,
        toastType: n.type || "info"
      };
    }
    case "HIDE_TOAST":
      return {
        ...e,
        toastMessage: null
      };
    default:
      return e;
  }
};
function Lc(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const Vg = (e, t) => {
  var n, r, l, a, o;
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !i.some((h) => h.id === c)) {
        const h = e.images.find((v) => v.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        h ? d = h : c = null;
      }
      return {
        ...e,
        viewerImageId: c,
        viewerFallbackImage: d
      };
    }
    case "OPEN_VIEWER": {
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, h = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, v = kf(i), y = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((k) => k.id === c);
      return {
        ...e,
        viewerImageId: c,
        viewerMode: d,
        viewerLightTableSlotId: h,
        viewerInitialMaskMode: v,
        lineageImages: y ? e.lineageImages : []
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Lc(e, (l = t.payload) == null ? void 0 : l.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((k) => k.id === e.viewerImageId);
      if (h === -1 || h === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || h === d.length - 1 && !c)
        return e;
      const v = (h + 1) % d.length, y = d[v];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Lc(e, (o = t.payload) == null ? void 0 : o.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const h = d.findIndex((k) => k.id === e.viewerImageId);
      if (h === -1 || h === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || h === 0 && !c)
        return e;
      const v = (h - 1 + d.length) % d.length, y = d[v];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    default:
      return e;
  }
}, Bg = [
  Vg,
  Fg,
  $g,
  Wg,
  Ug
];
function Qg(e, t) {
  return t.type === "REFRESH" ? e : t.type === "SET_VIEW_SCOPE" ? {
    ...e,
    viewScope: t.payload,
    images: [],
    selectedIds: /* @__PURE__ */ new Set(),
    viewerImageId: null,
    pagination: {
      ...e.pagination,
      offset: 0,
      total: 0,
      hasMore: !1
    }
  } : Bg.reduce((n, r) => r(n, t), e);
}
const Hg = {
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
  favorites: [],
  toastMessage: null,
  toastType: "info",
  confirmModal: null
};
function Kg(e, t) {
  return Qg(e, t);
}
const Sf = p.createContext(void 0), Gg = ({ children: e }) => {
  const [t, n] = p.useReducer(Kg, Hg), r = p.useRef(t.images.length), l = p.useRef(0), a = p.useRef(/* @__PURE__ */ new Map());
  p.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = p.useCallback(
    async (w, x, _) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let m = w;
      for (; m < Math.min(x, f) && _ === l.current; )
        try {
          const g = Math.min(u, f - m);
          Q.log("Background fetch: starting chunk", {
            offset: m,
            limit: g
          });
          const b = await Yl(
            m,
            g,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: b }), m += b.images.length, b.images.length === 0 || m >= b.total)) break;
          await new Promise((S) => setTimeout(S, 300));
        } catch (g) {
          Q.error("Background fetch failed", g);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = p.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now(), x = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      Q.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Yl(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), m = performance.now() - w;
      Q.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, x);
    } catch (_) {
      Q.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.searchQuery, t.viewScope, t.settings, o]), c = p.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now();
    try {
      const x = r.current, _ = t.searchQuery.trim() !== "", f = t.pagination.limit;
      Q.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: f,
        isSearch: _
      });
      const u = await Yl(
        x,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), m = performance.now() - w;
      Q.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (x) {
      Q.error("loadMoreImages: fetch failed", x), n({
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
  ]), d = p.useCallback(async () => {
    try {
      const w = await Rg();
      n({ type: "SET_FAVORITES", payload: w });
    } catch (w) {
      Q.error("Failed to load favorites", w);
    }
  }, []), h = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds), _ = t.images.filter((f) => t.selectedIds.has(f.id)).some((f) => f.parent_id || f.has_children);
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: w,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = p.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const _ = (await uo(w)).restored_ids || w;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: _ }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), y = p.useCallback(
    async (w, x) => {
      try {
        await Ag(w, x), n({ type: "SET_SETTINGS", payload: { [w]: x } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), k = p.useCallback(
    async (w) => {
      const x = t.images.find((m) => m.id === w);
      if (x && !x.is_minimal)
        return x;
      const _ = t.lineageImages.find((m) => m.id === w);
      if (_ && !_.is_minimal)
        return _;
      const f = a.current.get(w);
      if (f)
        return f;
      const u = (async () => {
        try {
          Q.log("fetchFullImageDetails: fetching full data", { id: w });
          const m = await vf(w);
          return n({ type: "UPDATE_IMAGE", payload: m }), m;
        } finally {
          a.current.delete(w);
        }
      })();
      return a.current.set(w, u), u;
    },
    [t.images, t.lineageImages]
  );
  return p.useEffect(() => {
    (async () => {
      try {
        const x = await _f();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        Q.error("Failed to load settings", x);
      }
    })();
  }, []), p.useEffect(() => {
    d();
  }, [d]), p.useEffect(() => {
    const w = () => {
      i();
    }, x = (f) => {
      const u = f.detail;
      n({
        type: "SET_SCAN_STATUS",
        payload: { progress: u }
      });
    }, _ = (f) => {
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
      }), i();
    };
    return window.addEventListener("meld-refresh", w), window.addEventListener("meld-scan-progress", x), window.addEventListener("meld-scan-finished", _), () => {
      window.removeEventListener("meld-refresh", w), window.removeEventListener("meld-scan-progress", x), window.removeEventListener("meld-scan-finished", _);
    };
  }, [i, t.scanStatus.progress.total]), p.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    Sf.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: h,
        restoreSelected: v,
        updateSetting: y,
        fetchFullImageDetails: k
      },
      children: e
    }
  );
}, ge = () => {
  const e = p.useContext(Sf);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, mt = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, hi = (e) => {
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
}, pi = async () => {
  const e = await te.fetchApi("/meld/tags");
  return le(e);
}, qg = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return le(t);
}, Yg = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await le(t);
}, Xg = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await le(n);
}, Zg = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.name == "string" && typeof t.subfolder == "string" && typeof t.type == "string";
}, Jg = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  }), r = await fi(n);
  if (!Zg(r))
    throw new Error("Invalid upload image response shape");
  return r;
}, ey = async (e, t, n = !1, r) => {
  const l = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await le(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, ty = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await le(l);
  } catch (a) {
    return console.error("Failed to fetch folder metadata", a), {};
  }
}, ny = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await le(r)).count;
  } catch {
    return 0;
  }
}, ry = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await le(t);
}, ly = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await le(e);
}, jf = () => {
  const { dispatch: e } = ge(), [t, n] = p.useState(() => {
    const C = localStorage.getItem("meld-import-config"), V = {
      type: "output",
      subfolder: "",
      custom_path: "",
      recursive: !0,
      auto_link_parent: !0,
      link_strategy: "new_only",
      tags: []
    };
    if (C)
      try {
        const D = JSON.parse(C);
        return { ...V, ...D, tags: [] };
      } catch {
        return V;
      }
    return V;
  });
  p.useEffect(() => {
    const { tags: C, ...V } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(V));
  }, [t]);
  const [r, l] = p.useState([]), [a, o] = p.useState([]), [i, c] = p.useState(0), [d, h] = p.useState(!1), [v, y] = p.useState([]), [k, w] = p.useState(""), [x, _] = p.useState(!1), [f, u] = p.useState(null), m = p.useRef(!1), g = (C) => {
    C.target === C.currentTarget && (m.current = !0);
  }, b = (C) => {
    C.target === C.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  p.useEffect(() => {
    (async () => {
      try {
        const V = await gg();
        n((D) => D.custom_path ? D : { ...D, custom_path: V });
      } catch (V) {
        Q.error("Failed to fetch home directory:", V);
      }
    })();
  }, []), p.useEffect(() => {
    const C = new AbortController();
    return (async () => {
      const D = t.type === "custom" ? t.custom_path : t.subfolder;
      if (Q.log(`loadFolders started. Path: "${D}", Type: "${t.type}"`), t.type === "custom" && !D) {
        Q.log("Custom path is empty, skipping load."), l([]), o([]), c(0), h(!1);
        return;
      }
      h(!0);
      const R = D, N = t.type;
      try {
        Q.log("Step 1: Fast load starting...");
        const T = await ey(t.type, D, !0, C.signal);
        if (C.signal.aborted) {
          Q.log("Step 1: Aborted.");
          return;
        }
        Q.log(
          `Step 1 complete. Found ${T.folders.length} folders, ${T.images.length} images.`
        ), l(T.folders), o(T.images), c(null);
        const F = T.folders.map((E) => E.name);
        F.length > 0 && (Q.log(`Step 2: Metadata fetch starting for ${F.length} folders...`), ty(N, R, F, C.signal).then((E) => {
          if (C.signal.aborted) {
            Q.log("Step 2: Aborted.");
            return;
          }
          Q.log("Step 2: Metadata fetch complete."), l(
            (A) => A.map((U) => {
              const O = E[U.name];
              return O ? { ...U, count: O.count, preview: O.preview } : U;
            })
          );
        }).catch((E) => {
          E.name !== "AbortError" && Q.error("Step 2: Metadata fetch failed:", E);
        })), Q.log("Step 3: Path image count starting..."), ny(N, R, C.signal).then((E) => {
          if (C.signal.aborted) {
            Q.log("Step 3: Aborted.");
            return;
          }
          Q.log(`Step 3: Path image count complete: ${E}`), c(E);
        }).catch((E) => {
          E.name !== "AbortError" && Q.error("Step 3: Path image count failed:", E);
        });
      } catch (T) {
        if (T.name === "AbortError") {
          Q.log("Request aborted.");
          return;
        }
        Q.error("Failed to load folders:", T), l([]), o([]), c(0);
      } finally {
        C.signal.aborted || h(!1);
      }
    })(), () => {
      C.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const S = p.useCallback(async () => {
    _(!0);
    try {
      const C = await pi();
      y(C);
    } catch (C) {
      Q.error("Failed to fetch tags:", C);
    } finally {
      _(!1);
    }
  }, []);
  p.useEffect(() => {
    S();
  }, [S]), Ue({
    onEscape: p.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const j = p.useMemo(() => v.filter(
    (C) => C.name.toLowerCase().includes(k.toLowerCase()) && !t.tags.includes(C.name)
  ), [v, k, t.tags]), M = (C) => {
    const V = C.trim();
    V && !t.tags.includes(V) && (n({ ...t, tags: [...t.tags, V] }), w(""));
  }, L = (C) => {
    n({ ...t, tags: t.tags.filter((V) => V !== C) });
  }, P = (C) => {
    C.key === "Enter" && k.trim() && (C.preventDefault(), M(k.trim()));
  }, I = async () => {
    try {
      await ry(t), e({
        type: "SET_SCAN_STATUS",
        payload: {
          isRunning: !0,
          isFinished: !1,
          shouldCancel: !1,
          newCount: 0,
          progress: { current: 0, total: 0, phase: "registering" }
        }
      }), e({ type: "CLOSE_MODAL" });
    } catch (C) {
      Q.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, z = (C) => {
    if (t.type === "custom") {
      const V = t.custom_path.includes("\\") ? "\\" : "/", D = t.custom_path.endsWith(V) ? `${t.custom_path}${C}` : `${t.custom_path}${V}${C}`;
      n({ ...t, custom_path: D });
    } else {
      const V = t.subfolder ? `${t.subfolder}/${C}` : C;
      n({ ...t, subfolder: V });
    }
  }, B = () => {
    if (t.type === "custom") {
      const C = t.custom_path.includes("\\") ? "\\" : "/", V = t.custom_path.split(C);
      if (V.length > 1) {
        V.pop();
        let D = V.join(C);
        D === "" && C === "/" && (D = "/"), n({ ...t, custom_path: D });
      }
    } else {
      const C = t.subfolder.split("/");
      C.pop(), n({ ...t, subfolder: C.join("/") });
    }
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: b,
        children: [
          /* @__PURE__ */ s.jsxs(
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
                      onClick: () => e({ type: "CLOSE_MODAL" }),
                      children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
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
                          onChange: (C) => n({
                            ...t,
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
                          onChange: (C) => n({ ...t, recursive: C.target.checked })
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
                          onChange: (C) => n({
                            ...t,
                            link_strategy: C.target.value,
                            auto_link_parent: C.target.value !== "none"
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: t.tags.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : t.tags.map((C) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                        C,
                        /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-edit-remove",
                            onClick: () => L(C),
                            children: /* @__PURE__ */ s.jsx(pe, { size: 12 })
                          }
                        )
                      ] }, C)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Mn, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: k,
                            onChange: (C) => w(C.target.value),
                            onKeyDown: P
                          }
                        ),
                        k.trim() && !t.tags.includes(k.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => M(k),
                            children: /* @__PURE__ */ s.jsx(Fs, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : j.length === 0 ? k && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        k
                      ] }) : j.map((C) => /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-suggestion-item",
                          onClick: () => M(C.name),
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
                          /* @__PURE__ */ s.jsx(nl, { size: 16 }),
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
                          onClick: B,
                          children: [
                            /* @__PURE__ */ s.jsx(ff, { size: 16 }),
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
                          onChange: (C) => n({ ...t, custom_path: C.target.value }),
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
                      r.map((C) => /* @__PURE__ */ s.jsxs(
                        "div",
                        {
                          className: "meld-folder-item",
                          onClick: () => z(C.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: C.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: mt(C.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(Yp, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: C.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${C.count === null ? "meld-folder-count--loading" : ""}`,
                                children: C.count !== null ? `${C.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(di, { size: 14 })
                          ]
                        },
                        C.name
                      )),
                      a.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-browser-image-grid", children: a.map((C) => /* @__PURE__ */ s.jsx(
                        "div",
                        {
                          className: "meld-browser-image-item",
                          onClick: () => u(C),
                          children: /* @__PURE__ */ s.jsx(
                            "img",
                            {
                              src: mt(C, 120),
                              alt: C.filename,
                              title: C.filename
                            }
                          )
                        },
                        C.filename
                      )) })
                    ] }) })
                  ] })
                ] }) })
              ]
            }
          ),
          f && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-import-preview-overlay",
              onClick: (C) => {
                C.stopPropagation(), u(null);
              },
              children: /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-content", onClick: (C) => C.stopPropagation(), children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-import-preview-image-wrapper", children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-import-preview-close",
                      onClick: () => u(null),
                      children: /* @__PURE__ */ s.jsx(pe, { size: 24 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx("img", { src: mt(f, 400), alt: f.filename })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: f.filename })
              ] })
            }
          )
        ]
      }
    ),
    document.fullscreenElement || document.body
  );
}, sy = ({ imageIds: e, onSuccess: t, onClose: n }) => {
  const [r, l] = p.useState("zip"), [a, o] = p.useState(!1), [i, c] = p.useState(!1), d = p.useRef(!1), h = (k) => {
    k.target === k.currentTarget && (d.current = !0);
  }, v = (k) => {
    k.target === k.currentTarget && d.current && (i || n()), d.current = !1;
  };
  Ue({
    onEscape: () => {
      i || n();
    }
  });
  const y = async () => {
    c(!0);
    try {
      if (r === "zip")
        await Cg(e, a);
      else
        for (const k of e)
          await Ng(k, a), await new Promise((w) => setTimeout(w, 200));
      n(), t == null || t();
    } catch (k) {
      console.error("Download failed:", k), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: h,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(tl, { size: 18 }),
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
                children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
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
                        onChange: (k) => o(k.target.checked),
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
                onClick: y,
                disabled: i,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: i ? "Downloading..." : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx(tl, { size: 16 }),
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
}, Rc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, h) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const y = t;
      t = h ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((k) => k(t, y));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, ay = (e) => e ? Rc(e) : Rc, oy = (e) => e;
function iy(e, t = oy) {
  const n = Jt.useSyncExternalStore(
    e.subscribe,
    Jt.useCallback(() => t(e.getState()), [e, t]),
    Jt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Jt.useDebugValue(n), n;
}
const cy = (e) => {
  const t = ay(e), n = (r) => iy(t, r);
  return Object.assign(n, t), n;
}, dy = (e) => cy;
function uy(e, t) {
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
const fo = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return fo(r)(n);
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
        return fo(r)(n);
      }
    };
  }
}, fy = (e, t) => (n, r, l) => {
  let a = {
    storage: uy(() => window.localStorage),
    partialize: (_) => _,
    version: 0,
    merge: (_, f) => ({
      ...f,
      ..._
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let h = a.storage;
  if (!h)
    return e(
      (..._) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(..._);
      },
      r,
      l
    );
  const v = () => {
    const _ = a.partialize({ ...r() });
    return h.setItem(a.name, {
      state: _,
      version: a.version
    });
  }, y = l.setState;
  l.setState = (_, f) => (y(_, f), v());
  const k = e(
    (..._) => (n(..._), v()),
    r,
    l
  );
  l.getInitialState = () => k;
  let w;
  const x = () => {
    var _, f;
    if (!h) return;
    const u = ++i;
    o = !1, c.forEach((g) => {
      var b;
      return g((b = r()) != null ? b : k);
    });
    const m = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (_ = r()) != null ? _ : k)) || void 0;
    return fo(h.getItem.bind(h))(a.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== a.version) {
          if (a.migrate) {
            const b = a.migrate(
              g.state,
              g.version
            );
            return b instanceof Promise ? b.then((S) => [!0, S]) : [!0, b];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var b;
      if (u !== i)
        return;
      const [S, j] = g;
      if (w = a.merge(
        j,
        (b = r()) != null ? b : k
      ), n(w, !0), S)
        return v();
    }).then(() => {
      u === i && (m == null || m(w, void 0), w = r(), o = !0, d.forEach((g) => g(w)));
    }).catch((g) => {
      u === i && (m == null || m(void 0, g));
    });
  };
  return l.persist = {
    setOptions: (_) => {
      a = {
        ...a,
        ..._
      }, _.storage && (h = _.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => x(),
    hasHydrated: () => o,
    onHydrate: (_) => (c.add(_), () => {
      c.delete(_);
    }),
    onFinishHydration: (_) => (d.add(_), () => {
      d.delete(_);
    })
  }, a.skipHydration || x(), w || k;
}, my = fy, hy = [
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
let Rl = null;
const se = dy()(
  my(
    (e) => ({
      isOpen: !1,
      slots: hy,
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
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
        }, a = Object.values(l).some((c) => c.includes(n)), o = { ...r.images };
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
        slots: r.slots.map((l) => l.id === t ? { ...l, ...n } : l)
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
          const h = d.filter((v) => !l.has(v));
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
      showToast: (t, n = "info") => {
        Rl && clearTimeout(Rl), e({ toastMessage: t, toastType: n }), Rl = setTimeout(() => {
          e({ toastMessage: null }), Rl = null;
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
), bf = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return le(e);
}, Ef = async (e) => {
  const t = await te.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(e)}`);
  return le(t);
}, gi = () => ({ executeWorkflow: p.useCallback(
  async (t, n, r, l) => {
    var k, w, x, _, f, u;
    Q.log("executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await Ef(t);
    Q.log("Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    const d = (m) => {
      if (!m) return !1;
      const g = m.replace(/\s+/g, "");
      return g === "MeldImageLoader" || g === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const g = a.nodes.find((b) => d(b.type));
        g && (o = String(g.id));
      }
      const m = a.nodes.find(
        (g) => {
          var b;
          return ((b = g.type) == null ? void 0 : b.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      m && (i = String(m.id));
    } else {
      if (!o)
        for (const m in a) {
          const g = a[m];
          if (d(g.class_type)) {
            o = m;
            break;
          }
        }
      for (const m in a)
        if (((k = a[m].class_type) == null ? void 0 : k.replace(/\s+/g, "")) === "LoadImageMask") {
          i = m;
          break;
        }
    }
    if (Q.log("Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
    if (r && !i)
      throw console.warn("[Meld] Mask filename provided but no mask node found in workflow JSON"), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let h = n.filename;
    if (n.subfolder && (h = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (h = `${h} [${n.type}]`), c) {
      const m = window.app, g = t.replace(/\.json$/i, "");
      let b = !1;
      const S = document.querySelectorAll(".workflow-tab");
      for (const L of Array.from(S)) {
        const P = L.querySelector(".workflow-label"), I = ((w = P == null ? void 0 : P.textContent) == null ? void 0 : w.trim()) || ((x = L.textContent) == null ? void 0 : x.trim()) || "";
        if (I === g || I === t || I.startsWith(`${g} `) || I.startsWith(`${g}•`)) {
          L.click(), b = !0;
          break;
        }
      }
      b || await m.loadGraphData(a, !0, !0, t), await new Promise((L) => setTimeout(L, 200));
      const j = m.graph._nodes;
      Q.log("Active graph nodes count:", j.length);
      const M = j.find(
        (L) => String(L.id) === o || d(L.type)
      );
      if (M) {
        const L = (_ = M.widgets) == null ? void 0 : _.find((P) => P.name === "image");
        Q.log("Updating loader node widget:", {
          nodeId: M.id,
          type: M.type,
          imagePath: h
        }), L && (L.value = h, typeof L.callback == "function" && L.callback(h));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const L = j.find(
          (P) => {
            var I;
            return String(P.id) === i || ((I = P.type) == null ? void 0 : I.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (Q.log("Updating mask node widget:", {
          nodeId: L == null ? void 0 : L.id,
          maskFilename: r
        }), L) {
          const P = (f = L.widgets) == null ? void 0 : f.find((z) => z.name === "image");
          P && (P.value = `${r} [temp]`);
          const I = (u = L.widgets) == null ? void 0 : u.find((z) => z.name === "channel");
          I && (I.value = "red");
        } else
          console.warn("[Meld] LoadImageMask not found in active graph after loading");
      }
      m.graph.setDirtyCanvas(!0, !0);
      try {
        await m.queuePrompt(0);
        return;
      } catch (L) {
        throw console.error("Failed to queue workflow:", L), new Error("Failed to queue workflow. Check the console for details.");
      }
    }
    const v = JSON.parse(JSON.stringify(a));
    v[o].inputs.image = h, r && i && (v[i].inputs.image = `${r} [temp]`, v[i].inputs.channel = "red");
    const y = await te.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: te.clientId
      })
    });
    return fi(y);
  },
  []
) });
function py(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function ll(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = py(e), l = (h) => {
    if (!h) return !1;
    const v = h.replace(/\s+/g, "").toLowerCase();
    return v === "meldimageloader" || v === "loadimage";
  }, a = n.graph._nodes.filter((h) => l(h.type));
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const h = a.find((v) => String(v.id) === t);
    h && (o = h);
  }
  const i = o.widgets.find((h) => h.name === "image");
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const gy = () => {
  const { dispatch: e } = ge();
  return { injectMaskToGraph: p.useCallback(
    (n, r) => {
      var h, v;
      Q.log("[Meld-Debug] injectMaskToGraph called with:", r), ll(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return Q.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = l.graph._nodes.filter(
        (y) => y.type === "LoadImageMask"
      );
      if (a.length === 0)
        return Q.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0], i = o.widgets.find((y) => y.name === "image"), c = `${r} [temp]`;
      Q.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find((y) => y.name === "channel");
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (h = l.graph).afterChange) == null || v.call(h), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Dl(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function yy(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = mo(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let h = 0; h < r * l; h++)
    d[h] = c.data[h * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function mo(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], h = c * 4;
    d > 0 ? (i[h] = t[0], i[h + 1] = t[1], i[h + 2] = t[2], i[h + 3] = n) : (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0);
  }
  return o;
}
function vy(e) {
  return e.data.every((t) => t === 0);
}
const Dc = (e) => e === "rect" || e === "ellipse" || e === "lasso", ks = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = ge(), i = p.useMemo(() => a.images.find((W) => W.id === e) ?? a.lineageImages.find((W) => W.id === e) ?? se.getState().images[String(e)], [a.images, a.lineageImages, e]), c = p.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: h } = gy(), { executeWorkflow: v } = gi();
  Ue({ onEscape: l });
  const y = p.useRef(null), k = p.useRef(null), w = p.useRef(null), x = p.useRef(null), [_, f] = p.useState(!1), [u, m] = p.useState(() => {
    const W = localStorage.getItem("meld-mask-tool");
    return Dc(W) ? W : "rect";
  });
  p.useEffect(() => {
    Dc(u) && localStorage.setItem("meld-mask-tool", u);
  }, [u]);
  const [g, b] = p.useState({ x: 0, y: 0 }), [S, j] = p.useState({ x: 0, y: 0 }), [M, L] = p.useState([]), [P, I] = p.useState(null), [z, B] = p.useState(!1), [C, V] = p.useState(1), [D, R] = p.useState({ x: 0, y: 0 }), [N, T] = p.useState(!1), [F, E] = p.useState(!1), A = p.useRef(null), U = p.useCallback(() => {
    const W = w.current, H = k.current;
    if (!W || !H) return null;
    const ee = H.getBoundingClientRect(), q = W.naturalWidth, ne = W.naturalHeight;
    if (!q || !ne) return null;
    const ie = q / ne, Ne = ee.width / ee.height;
    let fe, _e, ye = 0, ot = 0;
    return ie > Ne ? (fe = ee.width, _e = ee.width / ie, ot = (ee.height - _e) / 2) : (_e = ee.height, fe = ee.height * ie, ye = (ee.width - fe) / 2), {
      left: ye,
      top: ot,
      width: fe,
      height: _e
    };
  }, []), O = p.useCallback(
    (W, H, ee, q) => {
      if (!W) return H;
      const ne = W.getBoundingClientRect(), ie = ne.width / 2, Ne = ne.height / 2, fe = {
        x: (ie - H.x) / ee,
        y: (Ne - H.y) / ee
      };
      return { x: ie - fe.x * q, y: Ne - fe.y * q };
    },
    []
  ), K = p.useCallback(() => {
    V((W) => {
      const H = Math.min(W * 1.2, 20);
      return R((ee) => O(k.current, ee, W, H)), H;
    });
  }, [O]), X = p.useCallback(() => {
    V((W) => {
      const H = Math.max(0.1, W / 1.2);
      return R((ee) => O(k.current, ee, W, H)), H;
    });
  }, [O]), oe = p.useCallback(() => {
    const W = y.current;
    if (!W) return;
    const H = W.getContext("2d");
    if (!H) return;
    H.clearRect(0, 0, W.width, W.height);
    const ee = getComputedStyle(document.documentElement), q = ee.getPropertyValue("--comfy-input-bg-active") || ee.getPropertyValue("--comfy-input-bg") || ee.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", ne = U();
    if (x.current && ne && (H.save(), H.globalAlpha = 0.5, H.drawImage(
      x.current,
      ne.left,
      ne.top,
      ne.width,
      ne.height
    ), H.restore()), _) {
      const ie = Math.min(g.x, S.x), Ne = Math.min(g.y, S.y), fe = Math.abs(g.x - S.x), _e = Math.abs(g.y - S.y);
      if (H.save(), H.globalAlpha = 0.3, H.fillStyle = q, H.strokeStyle = "white", H.lineWidth = 2, H.setLineDash([5, 5]), H.beginPath(), u === "rect")
        H.rect(ie, Ne, fe, _e);
      else if (u === "ellipse") {
        const ye = ie + fe / 2, ot = Ne + _e / 2;
        H.ellipse(ye, ot, fe / 2, _e / 2, 0, 0, 2 * Math.PI);
      } else if (u === "lasso" && M.length > 1) {
        H.moveTo(M[0].x, M[0].y);
        for (let ye = 1; ye < M.length; ye++)
          H.lineTo(M[ye].x, M[ye].y);
        H.closePath();
      }
      H.fill(), H.globalAlpha = 1, H.stroke(), H.restore();
    }
  }, [_, g, S, u, M, U]), [de, Le] = p.useState([]), ue = p.useMemo(() => de.length > 0 ? de[de.length - 1] : w.current ? Dl(w.current.naturalWidth, w.current.naturalHeight) : null, [de]);
  p.useEffect(() => {
    var W;
    (W = w.current) != null && W.naturalWidth && de.length === 0 && Le([
      Dl(w.current.naturalWidth, w.current.naturalHeight)
    ]);
  }, [de.length]);
  const Tt = p.useCallback(() => {
    var W;
    (W = w.current) != null && W.naturalWidth && de.length === 0 && Le([
      Dl(w.current.naturalWidth, w.current.naturalHeight)
    ]);
  }, [de.length]), Z = p.useRef(!1), Bt = p.useRef(0), Qt = (W) => {
    W.target === W.currentTarget && (Z.current = !0);
  }, Ht = (W) => {
    W.target === W.currentTarget && Z.current && !_ && l(), Z.current = !1;
  };
  p.useEffect(() => {
    if (!ue) return;
    x.current || (x.current = document.createElement("canvas"));
    const W = x.current;
    W.width = ue.width, W.height = ue.height;
    const H = W.getContext("2d");
    if (!H) return;
    const ee = mo(ue, [255, 255, 255], 255);
    H.putImageData(ee, 0, 0), oe();
  }, [ue, oe]), p.useEffect(() => {
    _ && oe();
  }, [_, oe]), p.useEffect(() => {
    const W = k.current;
    if (!W) return;
    const H = (ee) => {
      ee.preventDefault();
      const q = ee.deltaY > 0 ? 1 / 1.1 : 1.1;
      V((ne) => {
        const ie = Math.min(Math.max(0.1, ne * q), 20);
        return R((Ne) => {
          const fe = W.getBoundingClientRect(), _e = ee.clientX - fe.left, ye = ee.clientY - fe.top, ot = {
            x: (_e - Ne.x) / ne,
            y: (ye - Ne.y) / ne
          };
          return {
            x: _e - ot.x * ie,
            y: ye - ot.y * ie
          };
        }), ie;
      });
    };
    return W.addEventListener("wheel", H, { passive: !1 }), () => W.removeEventListener("wheel", H);
  }, []), p.useEffect(() => {
    if (!F) return;
    const W = (ee) => {
      if (A.current) {
        const q = ee.clientX - A.current.clientX, ne = ee.clientY - A.current.clientY;
        R({
          x: A.current.panX + q,
          y: A.current.panY + ne
        });
      }
    }, H = () => {
      E(!1), A.current = null;
    };
    return window.addEventListener("mousemove", W), window.addEventListener("mouseup", H), () => {
      window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", H);
    };
  }, [F]), p.useEffect(() => {
    const W = () => {
      k.current && y.current && (y.current.width = k.current.clientWidth, y.current.height = k.current.clientHeight, oe());
    }, H = new ResizeObserver(W);
    return k.current && H.observe(k.current), W(), () => H.disconnect();
  }, [oe]);
  const Ln = (W) => {
    var ye;
    const H = W.button === 2, ee = W.button === 1, q = N && W.button === 0;
    if (H || ee || q) {
      W.preventDefault(), W.stopPropagation(), A.current = {
        panX: D.x,
        panY: D.y,
        clientX: W.clientX,
        clientY: W.clientY
      }, E(!0);
      return;
    }
    if (W.button !== 0 || _ || z || Date.now() - Bt.current < 100)
      return;
    W.preventDefault();
    const ne = U(), ie = (ye = k.current) == null ? void 0 : ye.getBoundingClientRect();
    if (!ne || !ie) return;
    f(!0);
    const Ne = {
      x: (W.clientX - ie.left - D.x) / C,
      y: (W.clientY - ie.top - D.y) / C
    }, fe = Math.max(ne.left, Math.min(Ne.x, ne.left + ne.width)), _e = Math.max(ne.top, Math.min(Ne.y, ne.top + ne.height));
    b({ x: fe, y: _e }), j({ x: fe, y: _e }), L(u === "lasso" ? [{ x: fe, y: _e }] : []), I(null);
  };
  p.useEffect(() => {
    if (!_) return;
    const W = (ee) => {
      var _e;
      const q = U(), ne = (_e = k.current) == null ? void 0 : _e.getBoundingClientRect();
      if (!q || !ne) return;
      const ie = {
        x: (ee.clientX - ne.left - D.x) / C,
        y: (ee.clientY - ne.top - D.y) / C
      }, Ne = Math.max(q.left, Math.min(ie.x, q.left + q.width)), fe = Math.max(q.top, Math.min(ie.y, q.top + q.height));
      j({ x: Ne, y: fe }), u === "lasso" && L((ye) => [...ye, { x: Ne, y: fe }]);
    }, H = (ee) => {
      var ie;
      const q = U(), ne = (ie = k.current) == null ? void 0 : ie.getBoundingClientRect();
      if (q && ne && ue && w.current) {
        const Ne = {
          x: (ee.clientX - ne.left - D.x) / C,
          y: (ee.clientY - ne.top - D.y) / C
        }, fe = Math.max(q.left, Math.min(Ne.x, q.left + q.width)), _e = Math.max(q.top, Math.min(Ne.y, q.top + q.height)), ye = Math.min(g.x, fe), ot = Math.min(g.y, _e), ml = Math.abs(g.x - fe), pr = Math.abs(g.y - _e), am = u === "lasso";
        if (ml > 5 || pr > 5 || am && M.length > 2) {
          const om = w.current.naturalWidth, im = w.current.naturalHeight, Rn = om / q.width, Dn = im / q.height, cm = yy(ue, (gn) => {
            if (u === "rect") {
              const Pn = (ye - q.left) * Rn, Kt = (ot - q.top) * Dn, hl = ml * Rn, pl = pr * Dn;
              gn.rect(Pn, Kt, hl, pl);
            } else if (u === "ellipse") {
              const Pn = (ye - q.left) * Rn, Kt = (ot - q.top) * Dn, hl = ml * Rn, pl = pr * Dn, dm = Pn + hl / 2, um = Kt + pl / 2;
              gn.ellipse(dm, um, hl / 2, pl / 2, 0, 0, 2 * Math.PI);
            } else if (u === "lasso" && M.length > 2) {
              const Pn = M[0];
              gn.moveTo(
                (Pn.x - q.left) * Rn,
                (Pn.y - q.top) * Dn
              );
              for (let Kt = 1; Kt < M.length; Kt++)
                gn.lineTo(
                  (M[Kt].x - q.left) * Rn,
                  (M[Kt].y - q.top) * Dn
                );
              gn.closePath();
            }
          });
          Le((gn) => [...gn, cm]);
        }
      }
      Bt.current = Date.now(), f(!1), L([]);
    };
    return window.addEventListener("mousemove", W), window.addEventListener("mouseup", H), () => {
      window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", H);
    };
  }, [
    _,
    g.x,
    g.y,
    U,
    ue,
    u,
    M,
    D.x,
    D.y,
    C
  ]);
  const hr = p.useCallback(() => {
    de.length > 1 && Le((W) => W.slice(0, -1));
  }, [de.length]);
  p.useEffect(() => {
    const W = (q) => {
      if (!q) return !1;
      const ne = q, ie = ne.tagName;
      return ie === "INPUT" || ie === "TEXTAREA" || ie === "BUTTON" || ie === "SELECT" || ie === "A" || ne.isContentEditable || ne.tabIndex != null && ne.tabIndex >= 0;
    }, H = (q) => {
      q.code === "Space" && !q.repeat && (W(q.target) || (q.preventDefault(), T(!0))), (q.metaKey || q.ctrlKey) && q.key.toLowerCase() === "z" && !q.shiftKey ? (q.preventDefault(), q.stopPropagation(), q.stopImmediatePropagation(), hr()) : q.key === "Escape" && (q.preventDefault(), q.stopPropagation(), q.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, ee = (q) => {
      q.code === "Space" && (W(q.target) || (q.preventDefault(), T(!1)));
    };
    return window.addEventListener("keydown", H, { capture: !0 }), window.addEventListener("keyup", ee, { capture: !0 }), () => {
      window.removeEventListener("keydown", H, { capture: !0 }), window.removeEventListener("keyup", ee, { capture: !0 });
    };
  }, [hr, l]);
  const fl = () => {
    if (w.current) {
      const W = Dl(
        w.current.naturalWidth,
        w.current.naturalHeight
      );
      Le((H) => [...H, W]);
    }
  }, be = async () => {
    if (!ue || !w.current) return null;
    B(!0);
    try {
      const { width: W, height: H } = ue, ee = document.createElement("canvas");
      ee.width = W, ee.height = H;
      const q = ee.getContext("2d");
      if (!q) return null;
      const ne = mo(ue, [255, 255, 255], 255);
      q.putImageData(ne, 0, 0);
      const ie = await new Promise(
        (pr) => ee.toBlob(pr, "image/png")
      );
      if (!ie) return null;
      const fe = `meld_mask_${Date.now()}.png`, _e = new File([ie], fe, { type: "image/png" }), ye = new FormData();
      ye.append("image", _e), ye.append("type", "temp"), ye.append("overwrite", "true");
      const ot = await te.fetchApi("/upload/image", {
        method: "POST",
        body: ye
      });
      return (await fi(ot)).name ?? null;
    } catch (W) {
      return console.error("[Meld] Error uploading mask:", W), null;
    } finally {
      B(!1);
    }
  }, at = async () => {
    if (!d) return;
    const W = await be();
    W && h(d, W) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, gt = async () => {
    if (!d) return;
    const W = await be();
    W && (t === "run_sequence" && n ? (await v(
      n.workflowName,
      d,
      W,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: W,
        onSuccess: r
      }
    }));
  }, Lt = p.useMemo(() => ue && !vy(ue), [ue]);
  return d ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-modal-overlay",
      onMouseDown: Qt,
      onMouseUp: Ht,
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "meld-modal-content meld-mask-editor-modal",
          onClick: (W) => W.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "rect" ? "active" : ""}`,
                    onClick: () => m("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(gf, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "ellipse" ? "active" : ""}`,
                    onClick: () => m("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Hp, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "lasso" ? "active" : ""}`,
                    onClick: () => m("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Zp, { size: 18 }),
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
                    onClick: X,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ s.jsx(pg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      V(1), R({ x: 0, y: 0 });
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
                      Math.round(C * 100),
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: K,
                    type: "button",
                    title: "Zoom In",
                    "aria-label": "Zoom In",
                    children: /* @__PURE__ */ s.jsx(hg, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: k,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: Ln,
                  onContextMenu: (W) => W.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: F ? "grabbing" : N ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${D.x}px, ${D.y}px) scale(${C})`,
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
                            ref: w,
                            src: hi(d),
                            alt: "To be masked",
                            className: "meld-mask-editor-image",
                            onDragStart: (W) => W.preventDefault(),
                            onLoad: Tt
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: y,
                            className: "meld-mask-editor-canvas",
                            onDragStart: (W) => W.preventDefault()
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
                      onClick: at,
                      disabled: !Lt || z,
                      type: "button",
                      children: [
                        z ? /* @__PURE__ */ s.jsx(Nc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(ci, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: gt,
                      disabled: !Lt || z,
                      type: "button",
                      children: [
                        z ? /* @__PURE__ */ s.jsx(Nc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(nl, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: hr,
                      disabled: de.length <= 1 || z,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(ug, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: fl,
                      disabled: !Lt || z,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(pe, { size: 16 }),
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
}, Cf = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Pl = (e) => e.replace(/^["']|["']$/g, ""), wy = (e) => e.trim() ? Cf(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, xy = (e, t) => {
  const n = Cf(e), r = {
    addTags: [],
    removeTags: [],
    toggleTags: [],
    moveNext: !1,
    movePrev: !1,
    isDeleted: !1,
    sendToLtSlot: null
  }, l = (t == null ? void 0 : t.tags) || [];
  for (const a of n)
    if (a.startsWith("tag:")) {
      const o = Pl(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = Pl(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = Pl(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = Pl(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, _y = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = p.useState("Gallery"), [a, o] = p.useState({
    ...e.settings
  }), [i, c] = p.useState({}), [d, h] = p.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, y] = p.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [k, w] = p.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, _] = p.useState(
    e.settings["viewer.thumbnail_window_size"].toString()
  ), [f, u] = p.useState(
    e.settings["gallery.trash_retention_days"].toString()
  ), [m, g] = p.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [b, S] = p.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [j, M] = p.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [L, P] = p.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [I, z] = p.useState(e.settings["fullscreen.details.max_positive_prompt_lines"].toString()), [B, C] = p.useState(e.settings["fullscreen.details.max_negative_prompt_lines"].toString()), [V, D] = p.useState(
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
      const K = Object.keys(a).filter(
        (X) => a[X] !== e.settings[X] && !i[X]
      );
      if (K.length > 0)
        for (const X of K)
          await n(X, a[X]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (K, X) => {
      o((oe) => ({
        ...oe,
        [K]: !X
      }));
    },
    handleNumberChange: (K, X, oe, de) => {
      K === "gallery.initial_load_count" ? h(X) : K === "gallery.max_load_count" ? y(X) : K === "gallery.lineage_max_depth" ? w(X) : K === "viewer.thumbnail_window_size" ? _(X) : K === "gallery.trash_retention_days" ? u(X) : K === "gallery.auto_link_phash_threshold" ? g(X) : K === "gallery.suggest_phash_threshold" ? S(X) : K === "viewer.details.max_positive_prompt_lines" ? M(X) : K === "viewer.details.max_negative_prompt_lines" ? P(X) : K === "fullscreen.details.max_positive_prompt_lines" ? z(X) : K === "fullscreen.details.max_negative_prompt_lines" ? C(X) : K === "sidebar.thumbnail_size" && D(X);
      const Le = Number.parseInt(X, 10);
      if (!Number.isNaN(Le)) {
        let ue = Le;
        oe !== void 0 && ue < oe && (ue = oe), de !== void 0 && ue > de && (ue = de), o((Tt) => ({
          ...Tt,
          [K]: ue
        }));
      }
    },
    handleNumberBlur: (K) => {
      K.key === "gallery.initial_load_count" ? h(a["gallery.initial_load_count"].toString()) : K.key === "gallery.max_load_count" ? y(a["gallery.max_load_count"].toString()) : K.key === "gallery.lineage_max_depth" ? w(a["gallery.lineage_max_depth"].toString()) : K.key === "viewer.thumbnail_window_size" ? _(a["viewer.thumbnail_window_size"].toString()) : K.key === "gallery.trash_retention_days" ? u(a["gallery.trash_retention_days"].toString()) : K.key === "gallery.auto_link_phash_threshold" ? g(a["gallery.auto_link_phash_threshold"].toString()) : K.key === "gallery.suggest_phash_threshold" ? S(a["gallery.suggest_phash_threshold"].toString()) : K.key === "viewer.details.max_positive_prompt_lines" ? M(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : K.key === "viewer.details.max_negative_prompt_lines" ? P(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : K.key === "fullscreen.details.max_positive_prompt_lines" ? z(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : K.key === "fullscreen.details.max_negative_prompt_lines" ? C(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : K.key === "sidebar.thumbnail_size" && D(a["sidebar.thumbnail_size"].toString());
    },
    handleResetShortcuts: () => {
      o((K) => ({
        ...K,
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
    handleClearThumbnailCache: () => {
      t({
        type: "OPEN_CONFIRM_MODAL",
        payload: {
          message: "Are you sure you want to delete all cached thumbnails?",
          onConfirm: async () => {
            try {
              await zg(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (K) {
              Q.error("Failed to clear thumbnail cache:", K), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (K) => wy(K),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: k,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: b,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: L,
    fullscreenMaxPositivePromptLinesInput: I,
    fullscreenMaxNegativePromptLinesInput: B,
    thumbnailSizeInput: V
  };
}, Y = ({ label: e, description: t, children: n }) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), ky = ({
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
      Y,
      {
        label: "Show Tool Icons",
        description: "Display navigation and close icons in fullscreen mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.show_icons"],
              onChange: () => n("fullscreen.show_icons", e["fullscreen.show_icons"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
      {
        label: "Loop Navigation",
        description: "Loop to the beginning/end when navigating in fullscreen.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["fullscreen.loop"],
              onChange: () => n("fullscreen.loop", e["fullscreen.loop"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Model", description: "Display model name in fullscreen details.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
      Y,
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
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Tags", description: "Display tags in fullscreen details.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) })
  ] })
] });
function It({ size: e = 24, color: t, children: n, ...r }) {
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
function Nf() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function Mf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function If(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Tf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Lf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(Nf, {})
  ] });
}
function Rf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Df(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(Nf, {})
  ] });
}
function Pf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Of(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Af(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function zf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Ff = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Mf
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Rf
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Df
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Tf },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Lf
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: If
  },
  { id: "edit_tags", label: "Edit Tags", icon: Of },
  { id: "edit_notes", label: "Edit Notes", icon: Af },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Pf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: zf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Ut }
], Sy = ({
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
      Y,
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
            onChange: (c) => r("sidebar.thumbnail_size", c.target.value, 50, 500),
            onBlur: () => l({ key: "sidebar.thumbnail_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
      {
        label: "Show Dimensions",
        description: "Display the image dimensions (width x height) on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_dimensions"],
              onChange: () => n("sidebar.show_dimensions", e["sidebar.show_dimensions"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Show Created At",
        description: "Display the image creation date and time on the card.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["sidebar.show_created_at"],
              onChange: () => n("sidebar.show_created_at", e["sidebar.show_created_at"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Model", description: "Display the model name on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_model_name"],
          onChange: () => n("sidebar.show_model_name", e["sidebar.show_model_name"])
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
    ] }) }),
    /* @__PURE__ */ s.jsx(Y, { label: "Show Positive", description: "Display the positive prompt on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(Y, { label: "Show Negative", description: "Display the negative prompt on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(Y, { label: "Show User Notes", description: "Display user notes on the card.", children: /* @__PURE__ */ s.jsxs(
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
    ) }),
    /* @__PURE__ */ s.jsx(Y, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["sidebar.show_tags"],
          onChange: () => n("sidebar.show_tags", e["sidebar.show_tags"])
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Search Behavior" }),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Show Quick Suggestions",
        description: "Show suggested keywords when the search field is empty.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.quick_suggestions"],
              onChange: () => n("search.quick_suggestions", e["search.quick_suggestions"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Show Input Suggestions",
        description: "Show suggestions when typing search prefixes (e.g. pos:).",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["search.input_suggest"],
              onChange: () => n("search.input_suggest", e["search.input_suggest"])
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
      Y,
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
            onChange: (c) => r("gallery.initial_load_count", c.target.value, 10, 1e3),
            onBlur: () => l({ key: "gallery.initial_load_count" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
            onChange: (c) => r("gallery.max_load_count", c.target.value, 10, 1e6),
            onBlur: () => l({ key: "gallery.max_load_count" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Quick Shortcuts (Card)" }),
    [1, 2, 3].map((c) => /* @__PURE__ */ s.jsx(
      Y,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ s.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((h) => ({
              ...h,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Ff.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), jy = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
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
] }), by = ({
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
        " (Add tag and move to next)",
        /* @__PURE__ */ s.jsx("br", {}),
        "Use quotes for names with spaces. Example: ",
        /* @__PURE__ */ s.jsx("code", { children: 'lt:"My Best"' })
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
            /* @__PURE__ */ s.jsx("code", { children: "lt:SLOT_ID" }),
            " - Send to Light Table (Example: ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:keep" }),
            ",",
            " ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:refine" }),
            ", ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:trash" }),
            ")"
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
        Y,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
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
                const h = l(e[c] || "");
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
      /* @__PURE__ */ s.jsx(
        Y,
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
      Y,
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
}, Ey = ({
  localSettings: e,
  handleNumberChange: t,
  handleNumberBlur: n,
  handleToggle: r,
  setLocalSettings: l,
  handleViewTrash: a,
  handleClearThumbnailCache: o,
  lineageMaxDepthInput: i,
  trashRetentionDaysInput: c,
  autoLinkPhashThresholdInput: d,
  suggestPhashThresholdInput: h
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (v) => l((y) => ({
              ...y,
              "gallery.matching_strategy": v.target.value
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
      Y,
      {
        label: "Auto Linking Threshold (%)",
        description: "Minimum similarity percentage for automatic parent linking during creation or scan (0-100). Default: 92%. Should be strict to avoid false links.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: d,
            min: 0,
            max: 100,
            onChange: (v) => t("gallery.auto_link_phash_threshold", v.target.value, 0, 100),
            onBlur: () => n({ key: "gallery.auto_link_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: h,
            min: 0,
            max: 100,
            onChange: (v) => t("gallery.suggest_phash_threshold", v.target.value, 0, 100),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Inherit Tags from Source",
        description: "Automatically copy tags from the source image when a new image is registered or saved.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["gallery.inherit_tags"],
              onChange: () => r("gallery.inherit_tags", e["gallery.inherit_tags"])
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
      Y,
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
            onChange: (v) => t("gallery.lineage_max_depth", v.target.value, 1, 10),
            onBlur: () => n({ key: "gallery.lineage_max_depth" })
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Thumbnail Cache" }),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Clear Thumbnail Cache",
        description: "Delete all cached thumbnails. They will be regenerated on next view.",
        children: /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-button meld-button--secondary",
            onClick: o,
            children: "Clear Thumbnail Cache"
          }
        )
      }
    )
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Trash" }),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Trash Retention Period (Days)",
        description: "How many days to keep deleted items in trash (0-365).",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: c,
            min: 0,
            max: 365,
            onChange: (v) => t("gallery.trash_retention_days", v.target.value, 0, 365),
            onBlur: () => n({ key: "gallery.trash_retention_days" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
] }), Cy = ({
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
      Y,
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
      Y,
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
      Y,
      {
        label: "Show Tool Icons",
        description: "Display navigation and action icons in view mode.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_icons"],
              onChange: () => n("viewer.show_icons", e["viewer.show_icons"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
      {
        label: "Show Thumbnails",
        description: "Display the thumbnail strip at the bottom of the viewer. Disabling this can improve performance on slower systems.",
        children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              checked: e["viewer.show_thumbnails"],
              onChange: () => n("viewer.show_thumbnails", e["viewer.show_thumbnails"])
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
            onChange: (c) => r("viewer.thumbnail_window_size", c.target.value, 1, 1e4),
            onBlur: () => l({ key: "viewer.thumbnail_window_size" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(Y, { label: "Delete Mode", description: "Choose how images are deleted in view mode.", children: /* @__PURE__ */ s.jsxs(
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
    ) })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Details Panel" }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Dimensions", description: "Display dimensions in the details panel.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Model", description: "Display model name in the details panel.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    ] }) }),
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
            onChange: (c) => r("viewer.details.max_positive_prompt_lines", c.target.value, 1, 100),
            onBlur: () => l({
              key: "viewer.details.max_positive_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show User Notes", description: "Display user notes in the details panel.", children: /* @__PURE__ */ s.jsxs(
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
    ) }),
    /* @__PURE__ */ s.jsx(
      Y,
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
            onChange: (c) => r("viewer.details.max_negative_prompt_lines", c.target.value, 1, 100),
            onBlur: () => l({
              key: "viewer.details.max_negative_prompt_lines"
            })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(Y, { label: "Show Tags", description: "Display tags in the details panel.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          checked: e["viewer.details.show_tags"],
          onChange: () => n("viewer.details.show_tags", e["viewer.details.show_tags"])
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "meld-switch__slider" })
    ] }) })
  ] })
] }), Wf = () => {
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
    handleResetShortcuts: h,
    handleViewTrash: v,
    handleClearThumbnailCache: y,
    validateShortcut: k,
    // Input states
    initialLoadCountInput: w,
    maxLoadCountInput: x,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: f,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: g,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: S,
    fullscreenMaxPositivePromptLinesInput: j,
    fullscreenMaxNegativePromptLinesInput: M,
    thumbnailSizeInput: L
  } = _y();
  Ue({ onEscape: o });
  const P = p.useRef(!1), I = (V) => {
    V.target === V.currentTarget && (P.current = !0);
  }, z = (V) => {
    V.target === V.currentTarget && P.current && o(), P.current = !1;
  }, B = [
    { id: "Gallery", label: "Gallery" },
    { id: "View", label: "View" },
    { id: "Full Screen", label: "Full Screen" },
    { id: "Shortcuts", label: "Shortcuts" },
    { id: "System", label: "System" },
    { id: "Information", label: "Information" }
  ], C = () => {
    switch (e) {
      case "System":
        return /* @__PURE__ */ s.jsx(
          Ey,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            handleClearThumbnailCache: y,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: u,
            autoLinkPhashThresholdInput: m,
            suggestPhashThresholdInput: g
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          Sy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: L,
            initialLoadCountInput: w,
            maxLoadCountInput: x
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Cy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: f,
            maxPositivePromptLinesInput: b,
            maxNegativePromptLinesInput: S
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          ky,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: M
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          by,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: k,
            handleToggle: i,
            handleResetShortcuts: h
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(jy, {});
      default:
        return null;
    }
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: z,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content meld-settings-modal", onClick: (V) => V.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: o, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: B.map((V) => /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === V.id ? "active" : ""}`,
                onClick: () => t(V.id),
                children: V.label
              },
              V.id
            )) }) }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: C() })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, _t = "none", sl = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, qe = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, Ny = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || e.isContentEditable;
}, $f = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = ge(), [o, i] = p.useState([]), [c, d] = p.useState(t), [h, v] = p.useState(""), [y, k] = p.useState(!0), [w, x] = p.useState(!1), _ = p.useRef(null), f = e.length > 1, u = p.useRef(!1), m = (I) => {
    I.target === I.currentTarget && (u.current = !0);
  }, g = (I) => {
    I.target === I.currentTarget && u.current && n(), u.current = !1;
  }, b = p.useCallback(async () => {
    k(!0);
    try {
      const I = await pi();
      i(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      k(!1);
    }
  }, []);
  p.useEffect(() => {
    b();
  }, [b]), p.useEffect(() => {
    _.current && _.current.focus();
  }, []), Ue({ onEscape: n });
  const S = p.useMemo(() => o.filter(
    (I) => I.name.toLowerCase().includes(h.toLowerCase()) && !c.includes(I.name)
  ), [o, h, c]), j = (I) => {
    const z = I.trim();
    if (z.toLowerCase() === _t) {
      alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
      return;
    }
    z && !c.includes(z) && (d([...c, z]), v(""));
  }, M = (I) => {
    d(c.filter((z) => z !== I));
  }, L = async () => {
    x(!0);
    try {
      if (f) {
        const I = c.filter((B) => !t.includes(B)), z = t.filter((B) => !c.includes(B));
        await xf(e, I, z);
      } else
        await Sg(e[0], c);
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (I) {
      console.error("Failed to update tags:", I), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, P = (I) => {
    I.key === "Enter" && h.trim() && (qe(I), j(h.trim()));
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: g,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (I) => I.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(mr, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
            f && /* @__PURE__ */ s.jsx(
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: f ? "Collective Tags" : "Selected Tags" }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((I) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                I,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => M(I),
                    children: /* @__PURE__ */ s.jsx(pe, { size: 12 })
                  }
                )
              ] }, I)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Mn, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: h,
                    onChange: (I) => v(I.target.value),
                    onKeyDown: P
                  }
                ),
                h.trim() && !c.includes(h.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => j(h),
                    children: [
                      /* @__PURE__ */ s.jsx(Fs, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: y ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : S.length === 0 ? h ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : S.map((I) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => j(I.name),
                  children: I.name
                },
                I.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn-secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn-primary",
                onClick: L,
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
}, Ws = (e, t) => {
  const n = p.useCallback(async (x) => uo(x), []), r = p.useCallback(
    async (x, _, f) => {
      await xf(x, _, f);
    },
    []
  ), l = p.useCallback(async (x) => {
    try {
      const _ = await bg(x.id);
      return _.workflow ? (await window.app.loadGraphData(_.workflow), Q.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (_) {
      return Q.error("Error restoring workflow:", _), alert("Failed to restore workflow."), !1;
    }
  }, []), a = p.useCallback(async (x) => {
    try {
      const _ = await Eg(x.id), f = _.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", u = window.app, g = window.LiteGraph.createNode(f);
      if (!g)
        return console.error(`Node type ${f} not found.`), alert(
          `Node type ${f} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const b = _.is_flux ? {
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
      if (g.widgets) {
        for (const [L, P] of Object.entries(b)) {
          const I = _[L];
          if (I != null && I !== "") {
            const z = g.widgets.find(
              (B) => B.name === P
            );
            z && (z.value = I);
          }
        }
        const M = g.widgets.find(
          (L) => L.name === "control_after_generate"
        );
        M && (M.value = "fixed");
      }
      const S = u.canvas.ds.offset, j = u.canvas.ds.scale;
      return g.pos = [(-S[0] + 400) / j, (-S[1] + 300) / j], u.graph.add(g), u.canvas.selectNode(g), u.canvas.centerOnNode(g), !0;
    } catch (_) {
      return console.error("Error adding Unified Loader:", _), alert("Failed to load settings."), !1;
    }
  }, []), o = p.useCallback(
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
  ), i = p.useCallback(
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
  ), c = p.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), d = p.useCallback(
    (x) => {
      const _ = window.app;
      if (!(_ != null && _.graph))
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No active workflow graph found. Please open a workflow first."
          }
        }), !1;
      const f = (g) => {
        if (!g) return !1;
        const b = g.replace(/\s+/g, "").toLowerCase();
        return b === "meldimageloader" || b === "loadimage";
      }, u = _.graph._nodes.filter(
        (g) => f(g.type)
      );
      if (u.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (u.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: x,
            nodes: u.map((g) => ({
              id: String(g.id),
              type: g.type,
              title: g.title
            })),
            onSelect: (g) => {
              ll(x, g);
            }
          }
        }), !0;
      const m = ll(x);
      return m.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: m.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), h = p.useCallback(
    (x) => {
      const _ = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: _ }
      });
    },
    [t]
  ), v = p.useCallback(
    async (x, _ = "run") => {
      var u;
      Q.log("handleRunWithMask called", x, _);
      const f = Array.isArray(x) ? x : [x];
      if (_ === "apply") {
        const m = window.app, g = ((u = m == null ? void 0 : m.graph) == null ? void 0 : u._nodes) || [];
        Q.log(
          "Current graph nodes:",
          g.map((j) => ({
            id: j.id,
            type: j.type
          }))
        );
        const b = g.some((j) => j.type === "LoadImageMask"), S = g.some(
          (j) => j.type === "MeldImageLoader" || j.type === "LoadImage" || j.type === "Load Image"
        );
        if (Q.log("Nodes found:", { hasMaskNode: b, hasLoaderNode: S }), !b || !S) {
          const j = [];
          S || j.push("'Meld Image Loader'"), b || j.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${j.join(" and ")}. Please add them to use the Mask Tool.`
            }
          });
          return;
        }
        if (f.length > 1) {
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
          payload: { type: "mask_editor", imageId: f[0].id, mode: _ }
        });
        return;
      }
      try {
        if (!(await bf()).some((b) => b.valid && b.mask_count >= 1)) {
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
        Q.error("[Meld] Error checking workflows:", m);
      }
      t({
        type: "OPEN_MODAL",
        payload: {
          type: "workflow_selection",
          images: f,
          isMaskSequence: !0
        }
      });
    },
    [t]
  ), y = p.useCallback(
    async (x, _) => {
      try {
        const f = x.id, m = (await uo([f])).restored_ids || [f];
        t({ type: "REMOVE_IMAGES", payload: m }), _ == null || _();
      } catch (f) {
        t({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    },
    [t]
  ), k = p.useCallback(
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
  ), w = p.useCallback(
    async (x, _) => {
      try {
        const f = await jg(x, _);
        t({ type: "UPDATE_IMAGE", payload: f });
      } catch (f) {
        t({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    },
    [t]
  );
  return {
    restoreImages: n,
    bulkUpdateImageTags: r,
    handleRestoreWorkflow: l,
    handleAddUnifiedLoader: a,
    handleEditTags: o,
    handleEditSource: c,
    handleSendToWorkflow: d,
    handleRunWithWorkflow: h,
    handleRunWithMask: v,
    handleRestore: y,
    handleDelete: k,
    handleEditNotes: i,
    handleUpdateUserNotes: w
  };
}, Uf = ({ imageId: e, initialNotes: t, onClose: n }) => {
  const { state: r, dispatch: l } = ge(), { handleUpdateUserNotes: a } = Ws(r, l), [o, i] = p.useState(t), [c, d] = p.useState(!1), h = p.useRef(null), v = p.useRef(!1), y = (x) => {
    x.target === x.currentTarget && (v.current = !0);
  }, k = (x) => {
    x.target === x.currentTarget && v.current && n(), v.current = !1;
  };
  p.useEffect(() => {
    h.current && h.current.focus();
  }, []);
  const w = p.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (x) {
      console.error("Failed to update notes:", x), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return p.useEffect(() => {
    const x = (_) => {
      _.key === "Enter" && (_.ctrlKey || _.metaKey) && _.target === h.current && (_.preventDefault(), _.stopPropagation(), _.stopImmediatePropagation(), w());
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => {
      window.removeEventListener("keydown", x, {
        capture: !0
      });
    };
  }, [w]), Ue({ onEscape: n }), me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: k,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(ig, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
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
                onChange: (x) => i(x.target.value)
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
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn-secondary", onClick: n, children: "Cancel" }),
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
}, Vf = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ge(), l = p.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Ue({ onEscape: l });
  const a = p.useRef(!1), o = p.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = p.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return me.createPortal(
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: l, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
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
                      "Multiple loader nodes found in the current workflow. Select which one to use for",
                      " ",
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
                      /* @__PURE__ */ s.jsx(nl, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn-secondary", onClick: l, children: "Cancel" }) })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Bf = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var D;
  const { dispatch: l } = ge(), [a, o] = p.useState([]), [i, c] = p.useState(!0), [d, h] = p.useState(null), [v, y] = p.useState(!1), [k, w] = p.useState(null), [x, _] = p.useState({}), [f, u] = p.useState({}), [m, g] = p.useState(""), b = p.useRef(null), S = p.useMemo(() => a.map((R) => {
    let N = R.valid, T = R.reason;
    return r && R.mask_count === 0 && (N = !1, T = "No 'Load Image (as Mask)' node found."), { ...R, valid: N, reason: T };
  }).sort((R, N) => R.valid !== N.valid ? R.valid ? -1 : 1 : R.name.localeCompare(N.name)), [a, r]), j = p.useMemo(() => {
    if (!m.trim()) return S;
    const R = m.toLowerCase();
    return S.filter((N) => N.name.toLowerCase().includes(R));
  }, [S, m]), M = p.useCallback(async () => {
    try {
      c(!0);
      const R = await bf();
      o(R), h(null);
    } catch (R) {
      h(R instanceof Error ? R.message : String(R));
    } finally {
      c(!1);
    }
  }, []);
  p.useEffect(() => {
    M();
  }, [M]), p.useEffect(() => {
    !i && b.current && b.current.focus();
  }, [i]);
  const L = p.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  Ue({ onEscape: L });
  const P = p.useRef(!1), I = p.useCallback((R) => {
    R.target === R.currentTarget && (P.current = !0);
  }, []), z = p.useCallback(
    (R) => {
      R.target === R.currentTarget && P.current && L(), P.current = !1;
    },
    [L]
  ), B = async (R, N) => {
    if (!v)
      try {
        y(!0);
        const T = await t(R, N);
        n == null || n(), T !== !1 && L();
      } catch (T) {
        h(T instanceof Error ? T.message : String(T)), y(!1);
      }
  }, C = async (R) => {
    if (!(x[R] || f[R]))
      try {
        u((E) => ({ ...E, [R]: !0 }));
        const N = await Ef(R), T = [], F = (E) => {
          if (!E) return !1;
          const A = E.replace(/\s+/g, "").toLowerCase();
          return r ? A === "loadimagemask" : A === "meldimageloader" || A === "loadimage";
        };
        if (N.nodes && Array.isArray(N.nodes)) {
          Q.log("Extracting nodes from UI format workflow", N.nodes.length);
          for (const E of N.nodes)
            F(E.type) && (Q.log("Found target node (UI):", E.id, E.type, E.title), T.push({
              id: String(E.id),
              type: E.type || "",
              title: E.title
            }));
        } else {
          Q.log("Extracting nodes from API format workflow");
          for (const E in N) {
            const A = N[E];
            A && typeof A == "object" && F(A.class_type) && (Q.log("Found target node (API):", E, A.class_type), T.push({
              id: E,
              type: A.class_type || ""
            }));
          }
        }
        T.length === 0 && Q.warn("No loader nodes found in workflow JSON despite count > 0"), _((E) => ({ ...E, [R]: T }));
      } catch (N) {
        Q.error("Failed to fetch workflow nodes:", N);
      } finally {
        u((N) => ({ ...N, [R]: !1 }));
      }
  }, V = (R) => {
    if (!R.valid || v) return;
    if ((r ? R.mask_count : R.loader_count + R.load_image_count) <= 1) {
      B(R.name);
      return;
    }
    k === R.name ? w(null) : (w(R.name), C(R.name));
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: z,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (R) => R.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(ui, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: L, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(cf, { size: 20 }),
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (D = e[0]) == null ? void 0 : D.filename }),
                      ". Workflows must have at least one ",
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
                /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", style: { marginBottom: "12px" }, children: [
                  /* @__PURE__ */ s.jsx(Mn, { className: "meld-tag-search-icon", size: 16 }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      ref: b,
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search workflows...",
                      value: m,
                      onChange: (R) => g(R.target.value)
                    }
                  ),
                  m && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-item__btn",
                      onClick: () => {
                        var R;
                        g(""), (R = b.current) == null || R.focus();
                      },
                      style: { padding: "4px" },
                      children: /* @__PURE__ */ s.jsx(pe, { size: 14 })
                    }
                  )
                ] }),
                j.length === 0 ? /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    style: {
                      padding: "20px",
                      textAlign: "center",
                      color: "var(--meld-text-secondary)"
                    },
                    children: "No workflows match your search."
                  }
                ) : j.map((R) => {
                  const N = r ? R.mask_count : R.loader_count + R.load_image_count, T = k === R.name, F = x[R.name] || [], E = f[R.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${R.valid ? "" : "meld-workflow-item--invalid"} ${T ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => V(R),
                        title: R.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: R.name }),
                            !R.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: R.reason }),
                            R.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: N > 1 ? `Multiple loaders found (${N})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${R.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          R.valid && N <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (A) => {
                                A.stopPropagation(), B(R.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(nl, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          R.valid && N > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (A) => {
                                A.stopPropagation(), V(R);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                T ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  di,
                                  {
                                    size: 14,
                                    style: {
                                      transform: T ? "rotate(90deg)" : "rotate(0deg)",
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
                    T && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: E ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: F.map((A) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => B(R.name, A.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: A.title || A.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                A.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(nl, { size: 12 })
                          ]
                        },
                        A.id
                      )) })
                    ] }) })
                  ] }, R.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: L,
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
}, My = ({ message: e, onConfirm: t, onCancel: n }) => {
  const r = p.useRef(null), l = p.useRef(null);
  return Ue({ onEscape: n }), p.useEffect(() => {
    if (l.current = document.activeElement, r.current) {
      const o = r.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      o.length > 0 ? o[0].focus() : r.current.focus();
    }
    const a = (o) => {
      if (o.key === "Tab") {
        if (!r.current) return;
        const i = r.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (i.length === 0) return;
        const c = i[0], d = i[i.length - 1];
        o.shiftKey ? document.activeElement === c && (d.focus(), o.preventDefault()) : document.activeElement === d && (c.focus(), o.preventDefault());
      }
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), l.current && typeof l.current.focus == "function" && l.current.focus();
    };
  }, []), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-confirm-modal__overlay",
      onClick: n,
      onKeyDown: (a) => {
        a.key === "Enter" && n();
      },
      role: "presentation",
      children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: r,
          className: "meld-confirm-modal__dialog",
          onClick: (a) => a.stopPropagation(),
          onKeyDown: (a) => a.stopPropagation(),
          role: "alertdialog",
          "aria-modal": "true",
          "aria-label": e,
          tabIndex: -1,
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
  );
}, ho = async (e, t) => {
  await _g(e, t), se.getState().removeImages(e);
}, Qf = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = ge(), o = p.useRef(!0);
  p.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = p.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = p.useMemo(() => l.searchQuery.trim() !== "", [l.searchQuery]), d = p.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (se.getState().buckets[l.viewerLightTableSlotId] || []).map((g) => {
    const b = Number.parseInt(g, 10);
    return l.images.find((S) => S.id === b) || l.lineageImages.find((S) => S.id === b) || null;
  }).filter((g) => g !== null) : l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
    (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    l.viewerMode,
    l.viewerLightTableSlotId,
    l.lineageImages,
    l.images,
    l.settings,
    c,
    i
  ]), h = p.useRef(l.viewerImageId);
  p.useEffect(() => {
    h.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const v = p.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Ue({ onEscape: v });
  const y = p.useRef(!1), k = p.useCallback((u) => {
    u.target === u.currentTarget && (y.current = !0);
  }, []), w = p.useCallback(
    (u) => {
      u.target === u.currentTarget && y.current && v(), y.current = !1;
    },
    [v]
  ), x = p.useCallback(
    (u) => {
      if (!o.current) return;
      const m = h.current;
      if (m === null || !u.has(m))
        return;
      const g = d.findIndex(
        (S) => S.id === m
      );
      if (g === -1) return;
      let b = !1;
      for (let S = g + 1; S < d.length; S++)
        if (!u.has(d[S].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: d[S].id,
              mode: l.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
            }
          }), b = !0;
          break;
        }
      if (!b) {
        for (let S = g - 1; S >= 0; S--)
          if (!u.has(d[S].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: d[S].id,
                mode: l.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
              }
            }), b = !0;
            break;
          }
      }
      b || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, l.viewerLightTableSlotId, d, a]
  ), _ = async () => {
    var u, m;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const g = new Set(e), b = d.filter((S) => g.has(S.id));
      if (x(g), await ho(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(b), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (g) {
      a({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, f = async () => {
    var u, m;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const g = new Set(e);
      for (const S of e) {
        const j = await mi(S);
        if (!o.current) return;
        for (const M of j)
          g.add(M.id);
      }
      const b = d.filter((S) => g.has(S.id));
      if (x(g), await ho(Array.from(g), n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(b), a({
        type: "REMOVE_IMAGES",
        payload: Array.from(g)
      }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (g) {
      a({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: k,
        onMouseUp: w,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--small",
            onClick: (u) => u.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(Ut, { size: 20, color: "var(--meld-danger-color)" }),
                  n ? "Permanent Deletion" : "Move to Trash"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: v, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
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
                      "Are you sure you want to ",
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
                            Wp,
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn-secondary", onClick: v, children: "Cancel" }),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      onClick: _,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn-danger",
                      title: n ? "Permanently delete all images in the lineage" : "Move all images in the lineage to trash",
                      onClick: f,
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
}, Hf = ({ message: e }) => {
  const { dispatch: t } = ge(), n = p.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Ue({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(cf, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx("div", { style: { padding: "20px 0", textAlign: "center", fontSize: "14px" }, children: e }) }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx("button", { className: "meld-btn meld-btn-primary", onClick: n, type: "button", children: "OK" }) })
  ] }) });
}, Kf = ({ imageId: e }) => {
  const { state: t, dispatch: n, refreshImages: r } = ge(), [l, a] = p.useState([]), [o, i] = p.useState(!0), [c, d] = p.useState(!1), h = p.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Ue({ onEscape: h });
  const v = p.useRef(!1), y = (S) => {
    S.target === S.currentTarget && (v.current = !0);
  }, k = (S) => {
    S.target === S.currentTarget && v.current && h(), v.current = !1;
  }, w = t.images.find((S) => S.id === e), x = p.useCallback(async () => {
    i(!0);
    try {
      const S = t.settings["gallery.suggest_phash_threshold"], j = await kg(e, S);
      a(j);
    } catch (S) {
      console.error("Failed to load suggestions:", S);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  p.useEffect(() => {
    x();
  }, [x]);
  const _ = async (S) => {
    if (S == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!w || S === w.parent_id) && !(w.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Ic(e, S), await vf(e), await r(), h();
      } catch (j) {
        console.error("Failed to link parent:", j);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Ic(e, null), await r(), h();
      } catch (S) {
        console.error("Failed to remove source:", S), alert("Failed to remove source image.");
      }
  }, u = async (S) => {
    i(!0);
    try {
      const j = await Jg(S), { id: M } = await wf({
        filename: j.name,
        subfolder: j.subfolder || "",
        type: j.type || "input"
      });
      if (M === e) {
        alert("Uploaded image is identical to the current image. Cannot set as source.");
        return;
      }
      await _(M);
    } catch (j) {
      console.error("Failed to upload/register image:", j);
    } finally {
      i(!1);
    }
  }, m = (S) => {
    S.preventDefault(), S.stopPropagation(), d(!1);
    const j = S.dataTransfer.files[0];
    j != null && j.type.startsWith("image/") && u(j);
  };
  if (!w) return null;
  const g = l.filter((S) => S.is_source_match), b = l.filter((S) => !S.is_source_match);
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: k,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              w.id
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: h, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
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
                        /* @__PURE__ */ s.jsx(tg, { size: 16, color: "var(--meld-accent-color)" }),
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
                                        src: mt(
                                          {
                                            filename: w.parent_filename,
                                            subfolder: w.parent_subfolder || "",
                                            type: w.parent_type || "output"
                                          },
                                          64
                                        ),
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
                      onClick: f,
                      title: "Remove Source",
                      children: /* @__PURE__ */ s.jsx(eg, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (S) => {
                  S.preventDefault(), S.stopPropagation(), d(!0);
                },
                onDragOver: (S) => {
                  S.preventDefault(), S.stopPropagation(), S.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (S) => {
                  S.preventDefault(), S.stopPropagation(), d(!1);
                },
                onDrop: m,
                children: [
                  /* @__PURE__ */ s.jsx(fg, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              g.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: g.map((S) => {
                  const j = S.id === w.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${j ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !j && _(S.id),
                      style: {
                        cursor: j ? "default" : "pointer",
                        ...j ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: mt(S, 64), alt: S.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
                          j && /* @__PURE__ */ s.jsx(
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
                    S.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                b.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: b.map((S) => {
                  const j = S.id === w.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${j ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !j && _(S.id),
                      style: {
                        cursor: j ? "default" : "pointer",
                        ...j ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx("img", { src: mt(S, 64), alt: S.filename }),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: S.filename }),
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
                                  "Match: ",
                                  Math.round((64 - S.distance) / 64 * 100),
                                  "%"
                                ] }),
                                j && /* @__PURE__ */ s.jsx(
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
                    S.id
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
}, Iy = () => {
  const { state: e, dispatch: t } = ge(), n = e.toastMessage;
  return p.useEffect(() => {
    if (n) {
      const r = setTimeout(() => {
        t({ type: "HIDE_TOAST" });
      }, 3e3);
      return () => clearTimeout(r);
    }
  }, [n, t]), n ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `meld-toast ${e.toastType === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: n
    }
  ) : null;
}, Ty = () => {
  const { state: e, dispatch: t } = ge(), { executeWorkflow: n } = gi();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Bf,
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
              await n(r, i, a, l);
            o == null || o();
          }
        }
      }
    ),
    e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
      Vf,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && ll(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Kf, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(jf, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Wf, {}),
    e.activeModal.type === "tag_edit" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        $f,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && me.createPortal(/* @__PURE__ */ s.jsx(Hf, { message: e.activeModal.message }), document.body),
    e.activeModal.type === "delete_confirm" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        Qf,
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
    e.activeModal.type === "mask_editor" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        ks,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        ks,
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
    e.activeModal.type === "note_edit" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        Uf,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        sy,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && me.createPortal(
      /* @__PURE__ */ s.jsx(
        My,
        {
          message: e.confirmModal.message,
          onConfirm: () => {
            var r;
            (r = e.confirmModal) == null || r.onConfirm(), t({ type: "CLOSE_CONFIRM_MODAL" });
          },
          onCancel: () => {
            var r, l;
            (l = (r = e.confirmModal) == null ? void 0 : r.onCancel) == null || l.call(r), t({ type: "CLOSE_CONFIRM_MODAL" });
          }
        }
      ),
      document.body
    ),
    e.toastMessage && me.createPortal(/* @__PURE__ */ s.jsx(Iy, {}), document.body)
  ] });
}, Ly = () => {
  const { state: e, dispatch: t } = ge(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await ly(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (h) {
      console.error("Failed to cancel scan:", h);
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
    /* @__PURE__ */ s.jsx("div", { className: "meld-progress-container-compact", children: /* @__PURE__ */ s.jsx("div", { className: "meld-progress-bar", style: { width: `${d}%` } }) }),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn-stop-compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ s.jsx(gf, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(Bp, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ s.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn-ok-compact", onClick: l, children: "OK" })
  ] }) });
}, yi = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, Ry = Object.keys(yi), Pc = /* @__PURE__ */ new Map(), Oc = "data-meld-portal-root";
let ha = null, pa = null;
const Ac = ".comfyui-body-bottom";
function zc(e) {
  var n, r, l, a;
  const t = `[${Oc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (i.nodeType !== Node.ELEMENT_NODE) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Oc) || (r = c.querySelector) != null && r.call(c, t) || (l = c.matches) != null && l.call(c, Ac) || (a = c.querySelector) != null && a.call(c, Ac)) return !0;
  }
  return !1;
}
function Dy(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function Py(e) {
  const t = yi[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function Gf(e) {
  const t = yi[e], n = Pc.get(e) ?? Py(e);
  Pc.set(e, n);
  const r = Dy(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function qf() {
  for (const e of Ry)
    Gf(e);
}
function Fc() {
  pa === null && (pa = requestAnimationFrame(() => {
    pa = null, qf();
  }));
}
function Yf(e) {
  return Gf(e);
}
function Oy() {
  ha || typeof document > "u" || !document.body || (qf(), ha = new MutationObserver((e) => {
    for (const t of e) {
      if (zc(t.addedNodes)) {
        Fc();
        return;
      }
      if (zc(t.removedNodes)) {
        Fc();
        return;
      }
    }
  }), ha.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const $s = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  p.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, Ay = () => {
  const { state: e } = ge(), t = se((a) => a.slots), n = se((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, l = p.useCallback(
    (a) => {
      if (Ny())
        return;
      const o = e.selectedIds;
      if (!o || o.size === 0)
        return;
      const i = t.find((c) => c.shortcutKey.toLowerCase() === a.key.toLowerCase());
      i && (sl(a), o.forEach((c) => {
        n(i.id, String(c));
      }));
    },
    [t, n, e.selectedIds]
  );
  $s({ onKeyDown: l, enabled: r });
}, Xf = ({ message: e, onConfirm: t, onCancel: n }) => (Ue({ onEscape: n }), /* @__PURE__ */ s.jsx(
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
)), al = ({
  enabled: e,
  insideRefs: t,
  onOutside: n,
  options: r
}) => {
  const l = (r == null ? void 0 : r.capture) ?? !0, a = (r == null ? void 0 : r.ignoreNonPrimary) ?? !0, o = p.useRef(t), i = p.useRef(n);
  p.useEffect(() => {
    o.current = t;
  }, [t]), p.useEffect(() => {
    i.current = n;
  }, [n]), p.useEffect(() => {
    if (!e) return;
    const c = (d) => {
      if (a && (d.pointerType === "mouse" && d.button !== 0 || !d.isPrimary))
        return;
      const h = d.target;
      if (!(h instanceof Node))
        return;
      o.current.some((y) => {
        const k = y.current;
        return k ? k.contains(h) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: l }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: l
      });
    };
  }, [e, l, a]);
}, zy = (e, t, n, r, l) => {
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
        Q.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, Fy = ({ config: e }) => {
  var F;
  const t = se((E) => E.buckets), n = se((E) => E.slots), r = se((E) => E.images), l = n.length, { state: a, dispatch: o } = ge(), [i, c] = p.useState(!1), [d, h] = p.useState(!1), [v, y] = p.useState(!1), [k, w] = p.useState(e.label), [x, _] = p.useState(e.color), [f, u] = p.useState([]), [m, g] = p.useState(null), b = p.useRef(null), S = p.useRef(null);
  al({
    enabled: i,
    insideRefs: [S],
    onOutside: () => c(!1)
  }), al({
    enabled: v,
    insideRefs: [b],
    onOutside: () => y(!1)
  });
  const j = t[e.id] || [], M = j.length, L = j.map((E) => {
    const A = Number(E);
    let U = a.images.find((O) => O.id === A);
    return U || (U = a.lineageImages.find((O) => O.id === A)), U || (U = r[E]), U;
  }).filter(Boolean);
  p.useEffect(() => {
    u((E) => {
      const A = E.filter((U) => j.includes(String(U)));
      return A.length !== E.length ? A : E;
    });
  }, [j]);
  const P = f.filter((E) => j.includes(String(E))), I = P.length > 0, z = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.add("drag-over");
  }, B = (E) => {
    E.currentTarget.classList.remove("drag-over");
  }, C = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.remove("drag-over");
    const A = E.dataTransfer.getData("text/plain");
    A && A.split(",").forEach((O) => {
      if (O) {
        const K = O.trim(), X = Number(K);
        let oe = a.images.find((de) => de.id === X);
        oe || (oe = a.lineageImages.find((de) => de.id === X)), se.getState().addToBucket(e.id, K, oe);
      }
    });
  }, V = (E, A) => {
    E.stopPropagation();
    let U = [A];
    P.includes(A) ? U = P : (u([A]), g(A)), E.dataTransfer.setData("text/plain", U.join(",")), E.dataTransfer.setData("application/meld-lt-source-slot", e.id), E.dataTransfer.effectAllowed = "move";
  }, D = (E, A) => {
    if (E.dataTransfer.dropEffect === "none") {
      const U = P.includes(A) ? P : [A];
      U.forEach((O) => {
        se.getState().removeFromBucket(e.id, String(O));
      }), u((O) => O.filter((K) => !U.includes(K)));
    }
  }, R = (E) => {
    if (M === 0) return;
    const A = {
      type: E
    }, U = I ? P : j.map(Number);
    if (U.length === 0) return;
    const O = U.map((oe) => L.find((de) => de.id === oe)).filter(Boolean), K = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    zy(A, U, O, o, () => {
      se.getState().showToast(K[E] ?? "Done");
    });
  }, N = () => {
    se.getState().clearBucket(e.id), se.getState().showToast(`Tab "${e.label}" cleared`), h(!1);
  }, T = () => {
    const E = se.getState();
    E.slots.length <= 1 || (E.removeSlot(e.id), se.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: z,
      onDragLeave: B,
      onDrop: C,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: M === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : L.map((E) => {
          const A = mt(E);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-lt-slot-panel__image-wrapper${P.includes(E.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (U) => {
                if (U.ctrlKey || U.metaKey)
                  u(
                    (O) => O.includes(E.id) ? O.filter((K) => K !== E.id) : [...O, E.id]
                  ), g(E.id);
                else if (U.shiftKey && m !== null) {
                  const O = L.findIndex((X) => X.id === E.id), K = L.findIndex((X) => X.id === m);
                  if (O !== -1 && K !== -1) {
                    const X = Math.min(O, K), oe = Math.max(O, K), de = L.slice(X, oe + 1).map((Le) => Le.id);
                    u((Le) => Array.from(/* @__PURE__ */ new Set([...Le, ...de])));
                  }
                  g(E.id);
                } else
                  u([]), g(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: E.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onDragStart: (U) => V(U, E.id),
              onDragEnd: (U) => D(U, E.id),
              children: /* @__PURE__ */ s.jsx("img", { src: A, alt: E.filename, draggable: !1 })
            },
            E.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: b, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => y(!v),
                disabled: M === 0,
                title: "Actions",
                children: [
                  I ? `Action (${P.length})` : "Action",
                  /* @__PURE__ */ s.jsx(Qp, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: mr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: ui
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: mg
              },
              {
                type: "download",
                label: "Download",
                icon: tl
              },
              {
                type: "delete",
                label: "Delete",
                icon: Ut,
                danger: !0
              }
            ].map((E) => /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-lt-slot__action-menu-item${E.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in E && E.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`,
                onMouseDown: (A) => A.stopPropagation(),
                onClick: () => {
                  "disabled" in E && E.disabled || (R(E.type), y(!1));
                },
                children: [
                  /* @__PURE__ */ s.jsx(E.icon, { size: 13 }),
                  /* @__PURE__ */ s.jsx("span", { children: E.label })
                ]
              },
              E.type
            )) })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-lt-slot__menu-btn",
              onClick: () => h(!0),
              title: "Clear Tab",
              disabled: M === 0,
              children: /* @__PURE__ */ s.jsx(Gp, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: S, children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ s.jsx(pf, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: k,
                    onChange: (E) => w(E.target.value),
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
                          value: x.startsWith("var") ? ((F = x.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)) == null ? void 0 : F[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(x) ? x : "#9ca3af",
                          onChange: (E) => _(E.target.value),
                          style: { flexShrink: 0 }
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          value: x,
                          onChange: (E) => _(E.target.value),
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
                    const E = se.getState(), A = k.trim();
                    if (!A) {
                      E.showToast("Error: Tab label cannot be empty", "error");
                      return;
                    }
                    if (E.slots.some(
                      (O) => O.id !== e.id && (O.label.toLowerCase() === A.toLowerCase() || O.id.toLowerCase() === A.toLowerCase())
                    )) {
                      E.showToast(`Error: "${A}" is already in use`, "error");
                      return;
                    }
                    E.updateSlot(e.id, {
                      label: A,
                      color: x
                    }), c(!1), E.showToast("Settings saved");
                  },
                  children: "Save Settings"
                }
              ),
              l > 1 && /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-lt-slot__settings-delete-btn",
                  onClick: T,
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
          Xf,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: N,
            onCancel: () => h(!1)
          }
        )
      ]
    }
  );
}, Wy = () => {
  const e = se((n) => n.toastMessage), t = se((n) => n.toastType);
  return e ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `meld-toast ${t === "error" ? "meld-toast--error" : ""}`,
      role: "status",
      "aria-live": "polite",
      children: e
    }
  ) : null;
}, $y = () => {
  var k;
  Ay();
  const e = se((w) => w.isOpen), t = se((w) => w.slots), n = se((w) => w.buckets), r = se((w) => w.setIsOpen), { state: l } = ge(), [a, o] = p.useState(((k = t[0]) == null ? void 0 : k.id) || "keep"), i = Yf("lightTable"), [c, d] = p.useState(!1);
  if (!e) return null;
  const h = () => {
    const w = `slot_${Date.now().toString(36)}`;
    se.getState().addSlot({
      id: w,
      label: `Tab ${t.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), o(w);
  }, v = () => {
    t.forEach((w) => {
      se.getState().clearBucket(w.id);
    }), se.getState().showToast("All tabs cleared"), d(!1);
  }, y = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      t.map((w) => {
        var x;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${a === w.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => o(w.id),
            style: { "--tab-color": w.color },
            onDragOver: (_) => {
              _.preventDefault(), o(w.id);
            },
            onDrop: (_) => {
              _.preventDefault();
              const f = _.dataTransfer.getData("text/plain");
              f && f.split(",").forEach((m) => {
                if (m) {
                  const g = m.trim(), b = l.images.find((S) => String(S.id) === g);
                  se.getState().addToBucket(w.id, g, b);
                }
              });
            },
            children: [
              w.label,
              "  (",
              ((x = n[w.id]) == null ? void 0 : x.length) || 0,
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
          children: /* @__PURE__ */ s.jsx(Fs, { size: 16 })
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
            /* @__PURE__ */ s.jsx(cg, { size: 14 }),
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
          children: /* @__PURE__ */ s.jsx(pe, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: t.map((w) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: a === w.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(Fy, { config: w })
      },
      w.id
    )) }),
    c && /* @__PURE__ */ s.jsx(
      Xf,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(Wy, {})
  ] });
  return me.createPortal(y, i);
}, Zf = () => {
  const { state: e, refreshFavorites: t } = ge(), [n, r] = p.useState(!1), [l, a] = p.useState(null), [o, i] = p.useState("info"), [c, d] = p.useState(null), [h, v] = p.useState(""), [y, k] = p.useState("");
  p.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const w = p.useCallback(
    async (u, m, g) => {
      u.stopPropagation();
      const b = `Are you sure you want to delete the favorite "${g}"?`;
      if (window.confirm(b))
        try {
          await Tc(m), await t();
        } catch (S) {
          Q.error("Failed to delete favorite", S);
        }
    },
    [t]
  ), x = p.useCallback((u, m) => {
    u.stopPropagation(), d(m), v(m.name), k(m.query);
  }, []), _ = p.useCallback(async () => {
    if (!(!c || !h.trim() || !y.trim()))
      try {
        r(!0), await Pg(c.id, h, y), await t(), d(null);
      } catch (u) {
        Q.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, h, y, t]), f = p.useCallback(async () => {
    if (!e.searchQuery || n) return !1;
    if (e.favorites.some((m) => m.query === e.searchQuery)) {
      const m = e.favorites.find((g) => g.query === e.searchQuery);
      if (m) {
        r(!0);
        try {
          return await Tc(m.id), await t(), !0;
        } catch (g) {
          return Q.error("Failed to delete favorite:", g), !1;
        } finally {
          r(!1);
        }
      }
      return !1;
    }
    r(!0);
    try {
      return await Dg(e.searchQuery, e.searchQuery), await t(), !0;
    } catch (m) {
      return Q.error("Failed to save favorite:", m), !1;
    } finally {
      r(!1);
    }
  }, [e.searchQuery, e.favorites, n, t]);
  return {
    isSaving: n,
    toastMessage: l,
    toastType: o,
    editingFavorite: c,
    setEditingFavorite: d,
    editFavoriteName: h,
    setEditFavoriteName: v,
    editFavoriteQuery: y,
    setEditFavoriteQuery: k,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: _,
    handleSaveFavorite: f,
    setToastMessage: (u, m = "info") => {
      a(u), i(m);
    }
  };
}, Jf = ({ fav: e, onSelect: t, onEdit: n, onDelete: r }) => {
  const [l, a] = p.useState(!1), [o, i] = p.useState(!1), [c, d] = p.useState(!1);
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
                  children: /* @__PURE__ */ s.jsx(hf, { size: 14 })
                }
              ),
              /* @__PURE__ */ s.jsx(
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
                  children: /* @__PURE__ */ s.jsx(Ut, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Uy = "_menu_jab2z_1", Vy = "_header_jab2z_14", By = "_title_jab2z_23", Qy = "_count_jab2z_32", Hy = "_list_jab2z_37", Ky = "_toast_jab2z_46", Gy = "_editTitle_jab2z_56", qy = "_form_jab2z_62", Yy = "_fieldGroup_jab2z_69", Xy = "_label_jab2z_75", Zy = "_input_jab2z_81", Jy = "_textarea_jab2z_82", Ke = {
  menu: Uy,
  header: Vy,
  title: By,
  count: Qy,
  list: Hy,
  toast: Ky,
  editTitle: Gy,
  form: qy,
  fieldGroup: Yy,
  label: Xy,
  input: Zy,
  textarea: Jy
}, ev = ({
  anchorRect: e,
  onClose: t,
  onSelect: n
}) => {
  const { state: r } = ge(), {
    isSaving: l,
    toastMessage: a,
    editingFavorite: o,
    setEditingFavorite: i,
    editFavoriteName: c,
    setEditFavoriteName: d,
    editFavoriteQuery: h,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: y,
    handleEditFavorite: k,
    handleSaveEditFavorite: w
  } = Zf(), [x, _] = p.useState({ top: 0, left: 0 }), f = p.useRef(null), u = p.useRef(null);
  return Ue({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), al({
    enabled: !!e && !o,
    insideRefs: [f],
    onOutside: () => t()
  }), p.useEffect(() => {
    if (e) {
      let b = e.left;
      const S = e.bottom + 5;
      b + 300 > window.innerWidth - 10 && (b = window.innerWidth - 300 - 10), b < 10 && (b = 10), _({ top: S, left: b });
    }
  }, [e]), p.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), e ? me.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: f,
          className: `${Ke.menu} meld-favorites-context-menu`,
          style: {
            top: x.top,
            left: x.left
          },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: Ke.header, children: [
              /* @__PURE__ */ s.jsxs("div", { className: Ke.title, children: [
                /* @__PURE__ */ s.jsx(
                  cr,
                  {
                    size: 14,
                    color: "var(--brand-yellow, #ffd700)",
                    fill: "var(--brand-yellow, #ffd700)"
                  }
                ),
                "Favorites"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: Ke.count, children: [
                r.favorites.length,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: Ke.list, children: r.favorites.map((m) => /* @__PURE__ */ s.jsx(
              Jf,
              {
                fav: m,
                onSelect: (g) => {
                  n(g), t();
                },
                onEdit: k,
                onDelete: y
              },
              m.id
            )) }),
            a && /* @__PURE__ */ s.jsx("div", { className: Ke.toast, children: a })
          ]
        }
      ),
      o && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "meld-modal-overlay meld-favorites-edit-modal-overlay",
          onMouseDown: (m) => {
            m.target === m.currentTarget && i(null);
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (m) => m.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsxs("h2", { className: Ke.editTitle, children: [
                    /* @__PURE__ */ s.jsx(cr, { size: 20, color: "var(--meld-accent-color)" }),
                    "Edit Favorite"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: Ke.form, children: [
                  /* @__PURE__ */ s.jsxs("div", { className: Ke.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-name-ctx", className: Ke.label, children: "Name" }),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        id: "edit-favorite-name-ctx",
                        ref: u,
                        type: "text",
                        value: c,
                        onChange: (m) => d(m.target.value),
                        placeholder: "Favorite Name",
                        className: Ke.input,
                        onKeyDown: (m) => {
                          m.key === "Enter" && (qe(m), w()), m.key === "Escape" && (qe(m), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: Ke.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-query-ctx", className: Ke.label, children: "Search Query" }),
                    /* @__PURE__ */ s.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: h,
                        onChange: (m) => v(m.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: Ke.textarea,
                        onKeyDown: (m) => {
                          m.key === "Enter" && !m.shiftKey && (qe(m), w()), m.key === "Escape" && (qe(m), i(null));
                        }
                      }
                    )
                  ] })
                ] }) }),
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
                      disabled: l || !c.trim() || !h.trim(),
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
  ) : null;
}, Ol = (e) => {
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
}, tv = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = p.useState(e.searchQuery), [a, o] = p.useState([]), [i, c] = p.useState(!1), [d, h] = p.useState([]), [v, y] = p.useState([]), k = e.settings["search.show_all_keywords"], [w, x] = p.useState(-1), [_, f] = p.useState(null), u = p.useRef(null), m = p.useRef(e.searchQuery), g = p.useCallback(async () => {
    if (v.length > 0) return;
    const D = await Tg();
    y(D);
  }, [v.length]);
  p.useEffect(() => {
    Lg().then((D) => {
      f(D);
    }), k && g();
  }, [g, k]);
  const b = p.useMemo(() => {
    if (!_) return null;
    const D = _.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${D}):(.*)$`, "i");
  }, [_]), S = p.useCallback(() => {
    const D = !k;
    D && g(), n("search.show_all_keywords", D);
  }, [k, g, n]), j = r !== m.current;
  p.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      h([]);
      return;
    }
    Ig().then((D) => {
      h(D);
    });
  }, [e.settings["search.quick_suggestions"]]), p.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), p.useEffect(() => {
    var D;
    (D = u.current) == null || D.focus();
  }, []);
  const M = p.useCallback(
    (D, R = !0) => {
      m.current !== D && (Q.log("SearchBar: triggering search", { query: D }), t({ type: "SET_SEARCH_QUERY", payload: D }), R && c(!1), m.current = D);
    },
    [t]
  );
  p.useEffect(() => {
    const D = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !b) {
        o([]), c(!1);
        return;
      }
      const R = Ol(r), N = R[R.length - 1];
      if (N) {
        const T = N.match(b);
        if (T) {
          const F = T[1].toLowerCase();
          let E = T[2];
          E.startsWith('"') && (E = E.substring(1)), E.endsWith('"') && (E = E.substring(0, E.length - 1));
          const A = await Mg(E, F);
          o(A), c(A.length > 0), x(-1);
        } else {
          const F = N.replace(/^([-!])/, "").toLowerCase();
          if (F && _) {
            const E = _.all_prefixes.filter((A) => A.startsWith(F)).map((A) => ({
              type: A,
              value: "",
              count: 0
            }));
            if (E.length > 0) {
              o(E), c(!0), x(-1);
              return;
            }
          }
          o([]), c(!1);
        }
      } else
        o([]), c(!1);
    }, 300);
    return () => clearTimeout(D);
  }, [r, e.settings["search.input_suggest"], b, _]);
  const L = p.useCallback(
    (D) => {
      var U;
      const R = Ol(r), T = (R.pop() || "").match(/^([-!])/), F = T ? T[1] : "", A = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(D.type);
      if (D.value === "") {
        const O = `${[...R, `${F}${D.type}:`].join(" ").trim()}`;
        l(O);
      } else {
        const O = A ? D.value : `"${D.value}"`, K = `${[...R, `${F}${D.type}:${O}`].join(" ").trim()} `;
        l(K), o([]), c(!1);
      }
      (U = u.current) == null || U.focus();
    },
    [r, _]
  ), P = (D) => {
    if (D.key === "Enter")
      qe(D), i && w >= 0 ? L(a[w]) : M(r);
    else if (D.key === "Tab") {
      if (i && a.length > 0) {
        qe(D);
        const R = w >= 0 ? w : 0;
        L(a[R]);
      }
    } else D.key === "ArrowDown" ? i && (qe(D), x((R) => Math.min(R + 1, a.length - 1))) : D.key === "ArrowUp" ? i && (qe(D), x((R) => Math.max(R - 1, -1))) : D.key === "Escape" && (qe(D), c(!1));
  }, I = p.useCallback(() => {
    l(""), M("");
  }, [M]), z = p.useCallback(
    (D, R, N = !1) => {
      var ue;
      const T = Ol(r), F = T[T.length - 1] || "";
      let E = !1;
      const A = F.replace(/^([-!])/, "").toLowerCase();
      A && D.toLowerCase().startsWith(A) && (E = !0);
      const U = F.match(/^([-!])/), O = E && U ? U[1] : "";
      if (E && T.pop(), N) {
        const Tt = [...T, `${O}${D}:`].filter(Boolean).join(" ");
        l(Tt), (ue = u.current) == null || ue.focus();
        return;
      }
      const oe = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(D) ? R : `"${R}"`, de = `${O}${D}:${oe}`, Le = [...T, de].filter(Boolean).join(" ");
      l(Le), M(Le);
    },
    [r, M, _]
  ), B = p.useCallback(
    (D) => {
      l(D), D || M("");
    },
    [M]
  ), C = p.useCallback(() => {
    if (r === m.current || !b) return;
    const D = Ol(r), R = D[D.length - 1];
    if (!R) return;
    const N = !!R.match(b), T = R.replace(/^([-!])/, "").toLowerCase(), F = T && (_ == null ? void 0 : _.all_prefixes.some((E) => E.startsWith(T)));
    (N || F) && c(!0);
  }, [r, b, _]), V = p.useCallback(() => {
    setTimeout(() => c(!1), 200);
  }, []);
  return {
    inputValue: r,
    setInputValue: l,
    suggestions: a,
    showSuggestions: i,
    setShowSuggestions: c,
    searchSuggestions: d,
    allKeywords: v,
    showAllKeywords: k,
    toggleShowAllKeywords: S,
    selectedIndex: w,
    setSelectedIndex: x,
    inputRef: u,
    isQueryChanged: j,
    handleSearch: M,
    handleKeyDown: P,
    applySuggestion: L,
    clearSearch: I,
    applySearchSuggestion: z,
    handleInputChange: B,
    handleInputFocus: C,
    handleInputBlur: V
  };
}, Wc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(mr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Up, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(dg, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Vp, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(uf, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(df, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(qp, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx($p, { size: 12 });
    default:
      return null;
  }
}, nv = ({
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
  toggleShowAllKeywords: h,
  applySearchSuggestion: v,
  favorites: y,
  onSelectFavorite: k,
  onEditFavorite: w,
  onDeleteFavorite: x
}) => {
  const _ = (g, b, S) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(g.type, g.value, S === "all"),
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
      onMouseEnter: (j) => {
        j.currentTarget.style.backgroundColor = "var(--comfy-menu-bg, #333)", j.currentTarget.style.borderColor = "var(--comfy-menu-border, #444)", j.currentTarget.style.color = "var(--meld-text-color)";
      },
      onMouseLeave: (j) => {
        j.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", j.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", j.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Wc(g.type)
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
        S !== "all" && /* @__PURE__ */ s.jsx(
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
    `${S}-${g.type}:${g.value}:${b}`
  ), f = () => !e || t.length === 0 ? null : /* @__PURE__ */ s.jsx(
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
        marginTop: "8px",
        maxHeight: "400px",
        overflowY: "auto",
        boxShadow: "0 8px 16px var(--comfy-menu-shadow, rgba(0,0,0,0.6))"
      },
      children: t.map((g, b) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (S) => {
            S.preventDefault(), l(g);
          },
          onMouseEnter: () => r(b),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: b === n ? "var(--comfy-input-bg-active, rgba(59, 130, 246, 0.15))" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
            borderLeft: b === n ? "3px solid var(--meld-accent-color, #3b82f6)" : "3px solid transparent",
            transition: "all 0.1s ease-out"
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transform: b === n ? "translateX(2px)" : "none",
                transition: "transform 0.1s ease-out"
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: b === n ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-secondary)",
                      display: "flex",
                      transition: "color 0.1s"
                    },
                    children: Wc(g.type)
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
                      color: g.value === _t ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: g.value === _t ? "bold" : "normal"
                    },
                    children: g.value === _t ? g.type === "tag" ? `Untagged (${_t})` : `No ${g.type} (${_t})` : g.value
                  }
                )
              ]
            }
          )
        },
        `${g.type}:${g.value}`
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
            children: i.map((g, b) => _(g, b, "quick"))
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
                  children: Array.from(new Set(c.map((g) => g.type))).map(
                    (g, b) => _({ type: g, value: "" }, b, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), m = () => y.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(cr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: y.map((g) => /* @__PURE__ */ s.jsx(
              Jf,
              {
                fav: g,
                onSelect: k,
                onEdit: w,
                onDelete: x
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
        f(),
        u(),
        m()
      ]
    }
  );
}, rv = () => {
  const { state: e } = ge(), {
    inputValue: t,
    setInputValue: n,
    suggestions: r,
    showSuggestions: l,
    searchSuggestions: a,
    allKeywords: o,
    showAllKeywords: i,
    toggleShowAllKeywords: c,
    selectedIndex: d,
    setSelectedIndex: h,
    inputRef: v,
    isQueryChanged: y,
    handleSearch: k,
    handleKeyDown: w,
    applySuggestion: x,
    clearSearch: _,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: m,
    handleInputBlur: g
  } = tv(), {
    isSaving: b,
    toastMessage: S,
    toastType: j,
    editingFavorite: M,
    setEditingFavorite: L,
    editFavoriteName: P,
    setEditFavoriteName: I,
    editFavoriteQuery: z,
    setEditFavoriteQuery: B,
    handleDeleteFavorite: C,
    handleEditFavorite: V,
    handleSaveEditFavorite: D,
    handleSaveFavorite: R,
    setToastMessage: N
  } = Zf(), T = async () => {
    const O = e.favorites.some((X) => X.query === e.searchQuery);
    await R() && N(
      O ? "Removed from favorites." : "Added to favorites.",
      "info"
    );
  };
  Ue({
    onEscape: () => L(null),
    enabled: !!M
  });
  const F = p.useRef(null), E = p.useRef(!1);
  p.useEffect(() => {
    M && F.current && F.current.focus();
  }, [M]);
  const A = (O) => {
    O.target === O.currentTarget && (E.current = !0);
  }, U = (O) => {
    O.target === O.currentTarget && E.current && L(null), E.current = !1;
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-search-bar-wrapper", style: { position: "relative", width: "100%" }, children: [
          S && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-search-toast",
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
                whiteSpace: "pre-wrap",
                textAlign: "center",
                boxShadow: "0 4px 12px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
                pointerEvents: "none",
                fontWeight: "bold",
                border: j === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
                animation: "meld-fade-in-down 0.3s ease-out",
                width: "max-content",
                maxWidth: "300px"
              },
              children: S
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
                    onClick: () => k(t),
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
                    onMouseEnter: (O) => {
                      O.currentTarget.style.transform = "translateY(-1px)", y ? (O.currentTarget.style.filter = "brightness(1.15)", O.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : O.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                    },
                    onMouseLeave: (O) => {
                      O.currentTarget.style.transform = "none", y ? (O.currentTarget.style.filter = "none", O.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : O.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                    },
                    onMouseDown: (O) => {
                      O.currentTarget.style.transform = "translateY(1px)", O.currentTarget.style.boxShadow = "none";
                    },
                    onMouseUp: (O) => {
                      O.currentTarget.style.transform = "translateY(-1px)";
                    },
                    title: "Search (Enter)",
                    children: [
                      /* @__PURE__ */ s.jsx(
                        Mn,
                        {
                          size: 16,
                          color: y ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                          style: {
                            transition: "color 0.2s",
                            filter: y ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                          }
                        }
                      ),
                      y && /* @__PURE__ */ s.jsx(
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
                    ref: v,
                    type: "text",
                    value: t,
                    onChange: (O) => u(O.target.value),
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
                    onClick: T,
                    disabled: b,
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
                    children: /* @__PURE__ */ s.jsx(
                      cr,
                      {
                        size: 16,
                        color: e.favorites.some((O) => O.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                        fill: e.favorites.some((O) => O.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                      }
                    )
                  }
                ),
                t && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: _,
                    style: {
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ s.jsx(pe, { size: 16, color: "var(--meld-text-secondary)" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsx(
            nv,
            {
              showSuggestions: l,
              suggestions: r,
              selectedIndex: d,
              setSelectedIndex: h,
              applySuggestion: x,
              inputValue: t,
              searchQuery: e.searchQuery,
              searchSuggestions: a,
              allKeywords: o,
              showAllKeywords: i,
              toggleShowAllKeywords: c,
              applySearchSuggestion: f,
              favorites: e.favorites,
              onSelectFavorite: (O) => {
                n(O), k(O);
              },
              onEditFavorite: V,
              onDeleteFavorite: C
            }
          )
        ] }),
        M && me.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: A,
              onMouseUp: U,
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (O) => O.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ s.jsx(cr, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ] }),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => L(null),
                          children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
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
                                    ref: F,
                                    type: "text",
                                    value: P,
                                    onChange: (O) => I(O.target.value),
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
                                      O.key === "Enter" && (qe(O), D()), O.key === "Escape" && (qe(O), L(null));
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
                                    value: z,
                                    onChange: (O) => B(O.target.value),
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
                                      O.key === "Enter" && !O.shiftKey && (qe(O), D()), O.key === "Escape" && (qe(O), L(null));
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
                          onClick: () => L(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: D,
                          disabled: b || !P.trim() || !z.trim(),
                          children: b ? "Saving..." : "Save Changes"
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
}, lv = ({ onClose: e, onSearch: t }) => {
  const [n, r] = p.useState([]), [l, a] = p.useState(!0), [o, i] = p.useState(""), [c, d] = p.useState(""), [h, v] = p.useState(!1), [y, k] = p.useState(null), [w, x] = p.useState(""), [_, f] = p.useState(!1), u = p.useRef(null), m = p.useCallback(async () => {
    a(!0);
    try {
      const I = await pi();
      r(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      a(!1);
    }
  }, []);
  p.useEffect(() => {
    m();
  }, [m]), p.useEffect(() => {
    y !== null && u.current && (u.current.focus(), u.current.select());
  }, [y]);
  const g = async (I) => {
    I.preventDefault();
    const z = c.trim();
    if (!(!z || h)) {
      if (z.toLowerCase() === _t) {
        alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
        return;
      }
      if (n.some((B) => B.name.toLowerCase() === z.toLowerCase())) {
        alert(`Tag "${z}" already exists.`);
        return;
      }
      v(!0);
      try {
        await qg(z), d(""), await m();
      } catch (B) {
        console.error("Failed to add tag:", B);
      } finally {
        v(!1);
      }
    }
  }, b = async (I, z) => {
    if (confirm(`Are you sure you want to delete tag "${z}"?`))
      try {
        await Yg(I), await m();
      } catch (B) {
        console.error("Failed to delete tag:", B);
      }
  }, S = (I) => {
    k(I.id), x(I.name);
  }, j = () => {
    k(null), x("");
  }, M = async (I) => {
    I.preventDefault();
    const z = w.trim();
    if (!z || y === null || _) return;
    if (z.toLowerCase() === _t) {
      alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
      return;
    }
    const B = n.find((C) => C.id === y);
    if (B && B.name === z) {
      j();
      return;
    }
    if (n.some((C) => C.id !== y && C.name.toLowerCase() === z.toLowerCase())) {
      alert(`Tag "${z}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Xg(y, z), j(), await m();
    } catch (C) {
      console.error("Failed to rename tag:", C), alert(C instanceof Error ? C.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, L = (I) => {
    t(`tag:${I}`);
  }, P = p.useMemo(() => n.filter((I) => I.name.toLowerCase().includes(o.toLowerCase())), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(mr, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(pe, { size: 16 })
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
            value: c,
            onChange: (I) => d(I.target.value),
            disabled: h
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn-primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || h,
            children: [
              /* @__PURE__ */ s.jsx(Fs, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Mn, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (I) => i(I.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: P.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : P.map((I) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: y === I.id ? /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-rename-form", onSubmit: M, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            ref: u,
            className: "meld-tag-rename-input",
            value: w,
            onChange: (z) => x(z.target.value),
            onKeyDown: (z) => z.key === "Escape" && j()
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "submit",
            className: "meld-tag-item__btn meld-tag-item__btn--save",
            title: "Save",
            disabled: _ || !w.trim(),
            children: /* @__PURE__ */ s.jsx(ci, { size: 14 })
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "meld-tag-item__btn",
            title: "Cancel",
            onClick: j,
            disabled: _,
            children: /* @__PURE__ */ s.jsx(pe, { size: 14 })
          }
        )
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: I.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => L(I.name),
              children: /* @__PURE__ */ s.jsx(Mn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => S(I),
              children: /* @__PURE__ */ s.jsx(hf, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => b(I.id, I.name),
              children: /* @__PURE__ */ s.jsx(Ut, { size: 14 })
            }
          )
        ] })
      ] }) }, I.id)) })
    ] })
  ] });
}, ga = 56, em = (e, t) => {
  const n = p.useCallback(async (l) => mi(l), []), r = p.useCallback(
    (l) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (l.ancestors && l.ancestors.length > 0)
        return l.ancestors.slice(0, a).map((h) => ({
          id: h.id,
          imgSrc: mt(h, ga)
        }));
      const o = l.parent_id;
      if (!o || !l.parent_filename) return [];
      const i = e.find((h) => h.id === o);
      let c = null;
      if (i ? c = mt(i, ga) : c = mt(
        {
          filename: l.parent_filename,
          subfolder: l.parent_subfolder || "",
          type: l.parent_type
        },
        ga
      ), !c) return [];
      const d = {
        id: o || null,
        imgSrc: c
      };
      if (i && a > 1) {
        const h = r(i);
        return [d, ...h].slice(0, a);
      }
      return [d];
    },
    [t, e]
  );
  return { getParentChain: r, fetchLineage: n };
}, $c = ({
  currentThumbnails: e,
  currentIndex: t,
  removedIds: n,
  viewerMode: r,
  viewerLightTableSlotId: l,
  dispatch: a,
  removeImageIds: o
}) => {
  let i = null;
  for (let c = t + 1; c < e.length; c++)
    if (!n.has(e[c].id)) {
      i = e[c].id;
      break;
    }
  if (i === null) {
    for (let c = t - 1; c >= 0; c--)
      if (!n.has(e[c].id)) {
        i = e[c].id;
        break;
      }
  }
  a(i !== null ? {
    type: "OPEN_VIEWER",
    payload: {
      id: i,
      mode: r,
      ...r === "lighttable" && l ? { slotId: l } : {}
    }
  } : { type: "CLOSE_VIEWER" }), o && o.length > 0 && a({ type: "REMOVE_IMAGES", payload: o });
}, sv = ({
  state: e,
  dispatch: t,
  image: n,
  isFullscreen: r,
  currentThumbnails: l,
  currentIndex: a,
  viewerMode: o,
  lineageImages: i,
  images: c,
  mountRefs: d,
  handleNext: h,
  handlePrevious: v,
  handleEditTags: y,
  handleRestore: k,
  fetchLineage: w,
  restoreImages: x,
  bulkUpdateImageTags: _
}) => {
  const [f, u] = p.useState(null), [m, g] = p.useState(
    null
  ), b = p.useCallback(
    async (I = !1) => {
      if (!n) return;
      const z = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!I && z === "confirm") {
        t({
          type: "OPEN_MODAL",
          payload: {
            type: "delete_confirm",
            imageIds: [n.id],
            hasLineage: !!(n.parent_id || n.has_children),
            isPermanent: e.viewScope === "trash"
          }
        });
        return;
      }
      try {
        const B = e.viewScope === "trash", C = /* @__PURE__ */ new Set([n.id]);
        let V = [];
        if (z === "lineage") {
          V = await w(n.id);
          for (const D of V)
            C.add(D.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null || (await ho(Array.from(C), B), !d.isMountedRef.current || d.viewerImageIdRef.current === null))
          return;
        if ($c({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: C,
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: Array.from(C)
        }), !B) {
          const D = [
            ...l,
            ...V,
            ...i,
            ...c
          ], R = /* @__PURE__ */ new Map();
          for (const T of D)
            R.set(T.id, T);
          const N = Array.from(C).map((T) => {
            const F = R.get(T);
            return F || {
              id: T,
              filename: `deleted_${T}`,
              subfolder: "",
              type: "custom",
              created_at: 0,
              positive: "",
              negative: "",
              tags: []
            };
          });
          u(N), g(null);
        }
      } catch (B) {
        t({
          type: "SET_ERROR",
          payload: B instanceof Error ? B.message : String(B)
        });
      }
    },
    [
      a,
      l,
      t,
      n,
      w,
      c,
      r,
      i,
      d,
      e.settings,
      e.viewScope,
      e.viewerLightTableSlotId,
      o
    ]
  ), S = p.useCallback(() => {
    n && y(n);
  }, [y, n]), j = p.useCallback(async () => {
    n && (l.length > 1 ? h() : t({ type: "CLOSE_VIEWER" }), await k(n));
  }, [l.length, t, h, k, n]), M = p.useCallback(async () => {
    if (!f || f.length === 0) return;
    const I = f.map((z) => z.id);
    try {
      const z = await x(I);
      if (!d.isMountedRef.current) return;
      const B = z.restored_ids || I, C = new Set(B), V = f.filter((R) => C.has(R.id));
      if (V.length > 0 && t({ type: "ADD_IMAGES", payload: V }), e.viewScope === "trash" && t({ type: "REMOVE_IMAGES", payload: B }), u(null), !d.isMountedRef.current) return;
      const D = B[0];
      D !== void 0 && t({
        type: "OPEN_VIEWER",
        payload: {
          id: D,
          mode: o,
          ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
        }
      });
    } catch (z) {
      t({
        type: "SET_ERROR",
        payload: z instanceof Error ? z.message : String(z)
      });
    }
  }, [
    t,
    f,
    d.isMountedRef,
    x,
    e.viewScope,
    e.viewerLightTableSlotId,
    o
  ]), L = p.useCallback(async () => {
    if (f && f.length > 0) {
      await M();
      return;
    }
    if (!m || m.type !== "tags")
      return;
    const { imageId: I, addTags: z, removeTags: B } = m;
    try {
      await _([I], z, B);
      const C = (o === "lineage" ? i : c).find(
        (V) => V.id === I
      );
      if (C) {
        const V = [...C.tags];
        for (const R of z)
          V.includes(R) || V.push(R);
        const D = V.filter((R) => !B.includes(R));
        t({
          type: "UPDATE_IMAGE",
          payload: { ...C, tags: D }
        }), t({
          type: "OPEN_VIEWER",
          payload: {
            id: I,
            mode: o,
            ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
          }
        });
      }
      g(null);
    } catch (C) {
      t({
        type: "SET_ERROR",
        payload: C instanceof Error ? C.message : String(C)
      });
    }
  }, [
    t,
    M,
    c,
    f,
    m,
    i,
    _,
    e.viewerLightTableSlotId,
    o
  ]), P = p.useCallback(
    async (I) => {
      if (!I || !n) return;
      const z = n.id, B = [...n.tags], C = xy(I, n), { addTags: V, removeTags: D, isDeleted: R, moveNext: N, movePrev: T, sendToLtSlot: F } = C;
      if (F) {
        const E = se.getState(), A = E.slots.find(
          (U) => U.id.toLowerCase() === F.toLowerCase() || U.label.toLowerCase() === F.toLowerCase()
        );
        A ? (E.addToBucket(A.id, String(z), n), E.showToast(`Sent to ${A.label}`), R || $c({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([z]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [z]
        })) : (E.showToast(`Error: Light Table slot "${F}" not found`, "error"), console.warn(`Attempted to send to non-existent LT slot: ${F}`));
      }
      if (V.length > 0 || D.length > 0)
        try {
          await _([z], V, D);
          const E = [...B];
          for (const U of V)
            E.includes(U) || E.push(U);
          const A = E.filter((U) => !D.includes(U));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: z, tags: A }
          }), g({
            type: "tags",
            imageId: z,
            addTags: [...D],
            removeTags: [...V]
          }), u(null);
        } catch (E) {
          console.error("Failed to update tags via shortcut:", E), t({
            type: "SET_ERROR",
            payload: E instanceof Error ? E.message : String(E)
          });
        }
      R ? await b(!0) : N ? h() : T && await v();
    },
    [
      a,
      l,
      t,
      _,
      b,
      h,
      v,
      n,
      e.viewerLightTableSlotId,
      o
    ]
  );
  return {
    lastDeletedImages: f,
    setLastDeletedImages: u,
    handleDelete: b,
    handleTagEditAction: S,
    handleRestoreAction: j,
    handleUndo: L,
    executeCommand: P
  };
}, av = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, l] = p.useState(!1), a = p.useCallback(
    (o) => {
      o && "stopPropagation" in o && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        console.error(`Error attempting to enable full-screen mode: ${c.message}`);
      }));
    },
    [e]
  );
  return p.useEffect(() => {
    const o = () => {
      const i = !!document.fullscreenElement;
      l(i), n(i ? t["fullscreen.show_details_by_default"] : t["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [t, n]), { isFullscreen: r, toggleFullscreen: a };
}, ov = ({
  viewerImageId: e,
  activeModalType: t,
  viewScope: n,
  settings: r,
  dispatch: l,
  isMountedRef: a,
  toggleFullscreen: o,
  handleNext: i,
  handlePrevious: c,
  handleDelete: d,
  handleUndo: h,
  handleTagEditAction: v,
  handleRestoreAction: y,
  executeCommand: k,
  setShowDetails: w,
  setActiveShortcutKey: x
}) => {
  const _ = p.useCallback(
    (f) => {
      if (!(f.target instanceof HTMLElement))
        return;
      const u = f.target, m = u.tagName === "INPUT" || u.tagName === "TEXTAREA" || u.isContentEditable;
      if (m && f.key !== "Escape") {
        f.key === "Enter" && (f.ctrlKey || f.metaKey) && f.preventDefault();
        return;
      }
      if (e === null || t !== "none")
        return;
      const g = f.key === "Delete" || f.key === "Backspace", b = f.key === "ArrowRight" || f.key === "ArrowLeft" || f.key === "ArrowDown" || f.key === "ArrowUp", S = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(f.key), j = f.key === "Escape", M = (f.ctrlKey || f.metaKey) && (f.key === "z" || f.key === "Z" || f.code === "KeyZ"), L = /^[0-9]$/.test(f.key) && !f.ctrlKey && !f.metaKey && !f.altKey && f.code !== "KeyZ";
      if (g || b || S || j || M || L)
        if (!m || j)
          sl(f);
        else
          return;
      else
        return;
      if (j)
        document.fullscreenElement ? document.exitFullscreen() : l({ type: "CLOSE_VIEWER" });
      else if (b)
        f.key === "ArrowRight" || f.key === "ArrowDown" ? i() : c();
      else if (S && (f.key === "f" || f.key === "F" || f.key === "Enter"))
        o(f);
      else if (S && (f.key === "i" || f.key === "I"))
        w((P) => !P);
      else if (S && (f.key === "t" || f.key === "T"))
        v();
      else if (S && (f.key === "r" || f.key === "R") && n === "trash")
        y();
      else if (g)
        d();
      else if (M)
        h();
      else if (L && !m) {
        const P = `viewer.shortcut.${f.key}`, I = r[P];
        typeof I == "string" && I && (x(f.key), setTimeout(() => {
          a.current && x(null);
        }, 500), k(I));
      }
    },
    [
      t,
      l,
      k,
      d,
      i,
      c,
      y,
      v,
      h,
      a,
      x,
      w,
      r,
      o,
      n,
      e
    ]
  );
  $s({
    enabled: e !== null,
    onKeyDown: _
  });
}, iv = ({
  viewerMode: e,
  viewerImageId: t,
  lineageLength: n,
  dispatch: r,
  isMountedRef: l
}) => {
  const [a, o] = p.useState(!1), i = p.useRef(0);
  return p.useEffect(() => {
    let c = !1;
    if (e === "lineage" && t !== null && n === 0) {
      const d = ++i.current;
      o(!0), mi(t).then((h) => {
        !c && l.current && d === i.current && r({ type: "SET_LINEAGE", payload: h });
      }).catch((h) => {
        console.error("Failed to fetch lineage:", h);
      }).finally(() => {
        !c && l.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, l, n, t, e]), { isLoadingLineage: a };
}, cv = ({
  dispatch: e,
  isFullscreen: t,
  settings: n,
  currentThumbnails: r,
  currentIndex: l,
  viewerMode: a,
  pagination: o,
  searchQuery: i,
  isJumping: c,
  setIsJumping: d,
  mountRefs: h
}) => {
  const v = a === "lighttable" ? r : void 0, y = p.useCallback(() => {
    e({
      type: "NEXT_IMAGE",
      payload: { isFullscreen: t, currentList: v }
    });
  }, [v, e, t]), k = p.useCallback(async () => {
    const w = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (l === 0 && a === "gallery" && o.hasMore && !c && w) {
      d(!0);
      try {
        const x = o.limit, _ = o.total, f = Math.max(0, _ - x), u = await Yl(f, x, i);
        if (!h.isMountedRef.current || (e({ type: "APPEND_IMAGES", payload: u }), h.viewerImageIdRef.current === null)) return;
        if (u.images.length > 0) {
          const m = u.images[u.images.length - 1];
          e({
            type: "OPEN_VIEWER",
            payload: { id: m.id, mode: "gallery" }
          });
        }
      } catch (x) {
        console.error("Failed to jump to end:", x);
      } finally {
        d(!1);
      }
    } else
      e({
        type: "PREVIOUS_IMAGE",
        payload: { isFullscreen: t, currentList: v }
      });
  }, [
    v,
    l,
    e,
    t,
    c,
    h,
    o,
    i,
    d,
    n,
    a
  ]);
  return { handleNext: y, handlePrevious: k };
};
function dv(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? l || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const uv = ({
  viewerImageId: e,
  currentThumbnails: t,
  currentIndex: n,
  isFullscreen: r,
  settings: l,
  hasMore: a,
  viewerMode: o,
  isLoading: i,
  loadMoreImages: c,
  fetchFullImageDetails: d
}) => {
  p.useEffect(() => {
    o !== "gallery" || e === null || i || !a || n === -1 || n >= t.length - 15 && c();
  }, [
    n,
    t.length,
    a,
    i,
    c,
    e,
    o
  ]), p.useEffect(() => {
    if (e === null || t.length === 0) return;
    const h = t.map((_) => _.id), v = h.indexOf(e);
    if (v === -1) return;
    const y = r ? l["fullscreen.loop"] : l["viewer.loop"], { prevId: k, nextId: w } = dv({
      ids: h,
      index: v,
      loopEnabled: y,
      hasMore: a && o === "gallery"
    }), x = setTimeout(() => {
      const _ = [k, w].filter(
        (f) => f !== null && f !== e
      );
      _.length !== 0 && Promise.allSettled(_.map((f) => d(f))).then((f) => {
        for (const u of f)
          u.status === "rejected" && Q.warn("Prefetching adjacent image details failed", u.reason);
      });
    }, 50);
    return () => clearTimeout(x);
  }, [
    t,
    d,
    a,
    r,
    l,
    e,
    o
  ]), p.useEffect(() => {
    if (e === null || t.length === 0 || n === -1) return;
    const h = [n + 1, n + 2, n - 1], v = setTimeout(() => {
      for (const y of h)
        if (y >= 0 && y < t.length) {
          const k = t[y], w = new Image();
          w.src = hi(k);
        }
    }, 150);
    return () => clearTimeout(v);
  }, [n, t, e]);
};
function fv(e) {
  return {
    id: e,
    filename: `__missing_${e}__`,
    subfolder: "",
    type: "output",
    created_at: 0,
    positive: "",
    negative: "",
    tags: [],
    exists: !1,
    is_minimal: !0
  };
}
const mv = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var fl;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: h,
    handleEditTags: v,
    handleEditNotes: y,
    handleRestore: k,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: _,
    handleSendToWorkflow: f,
    handleRunWithWorkflow: u,
    handleRunWithMask: m,
    handleEditSource: g
  } = Ws(e, t), { getParentChain: b, fetchLineage: S } = em(a, c), [j, M] = p.useState(!1), [L, P] = p.useState(c["viewer.show_details_by_default"]), [I, z] = p.useState(null), B = I ?? c["viewer.show_thumbnails"], [C, V] = p.useState(!1), [D, R] = p.useState(null), N = p.useRef(null), T = {
    isMountedRef: p.useRef(!0),
    viewerImageIdRef: p.useRef(l)
  };
  p.useEffect(() => (T.isMountedRef.current = !0, () => {
    T.isMountedRef.current = !1;
  }), [T.isMountedRef]), p.useEffect(() => {
    T.viewerImageIdRef.current = l;
  }, [T.viewerImageIdRef, l]);
  const F = p.useMemo(() => {
    const be = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const at = se.getState(), gt = at.buckets[e.viewerLightTableSlotId] || [], Lt = new Map(a.map((H) => [H.id, H])), W = new Map(i.map((H) => [H.id, H]));
      return gt.map((H) => {
        const ee = Number.parseInt(H, 10);
        return Lt.get(ee) || W.get(ee) || at.images[H] || fv(ee);
      });
    }
    return o === "lineage" ? i : a.filter(
      (at) => at.exists !== !1 && (c["gallery.show_parent_images"] || be || !at.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), E = l === null ? -1 : F.findIndex((be) => be.id === l), U = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? F : a).find((be) => be.id === l) || (l === ((fl = e.viewerFallbackImage) == null ? void 0 : fl.id) ? e.viewerFallbackImage : void 0), { isFullscreen: O, toggleFullscreen: K } = av({
    overlayRef: N,
    settings: c,
    setShowDetails: P
  }), { handleNext: X, handlePrevious: oe } = cv({
    dispatch: t,
    isFullscreen: O,
    settings: c,
    currentThumbnails: F,
    currentIndex: E,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: C,
    setIsJumping: V,
    mountRefs: T
  }), {
    lastDeletedImages: de,
    setLastDeletedImages: Le,
    handleDelete: ue,
    handleTagEditAction: Tt,
    handleRestoreAction: Z,
    handleUndo: Bt,
    executeCommand: Qt
  } = sv({
    state: e,
    dispatch: t,
    image: U,
    isFullscreen: O,
    currentThumbnails: F,
    currentIndex: E,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: T,
    handleNext: X,
    handlePrevious: oe,
    handleEditTags: v,
    handleRestore: k,
    fetchLineage: S,
    restoreImages: d,
    bulkUpdateImageTags: h
  }), { isLoadingLineage: Ht } = iv({
    viewerMode: o,
    viewerImageId: l,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: T.isMountedRef
  });
  ov({
    viewerImageId: l,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: T.isMountedRef,
    toggleFullscreen: K,
    handleNext: X,
    handlePrevious: oe,
    handleDelete: () => {
      ue();
    },
    handleUndo: Bt,
    handleTagEditAction: Tt,
    handleRestoreAction: Z,
    executeCommand: Qt,
    setShowDetails: P,
    setActiveShortcutKey: R
  }), p.useEffect(() => {
    l !== null && r(l).catch((be) => {
      console.error("Failed to fetch full image details for viewer:", be);
    });
  }, [r, l]), uv({
    viewerImageId: l,
    currentThumbnails: F,
    currentIndex: E,
    isFullscreen: O,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const Ln = p.useMemo(() => {
    if (!B || E === -1) return [];
    const be = c["viewer.thumbnail_window_size"], at = Math.floor(be / 2);
    let gt = Math.max(0, E - at);
    const Lt = Math.min(F.length, gt + be);
    return Lt === F.length && (gt = Math.max(0, Lt - be)), F.slice(gt, Lt).map((W, H) => ({
      img: W,
      absIndex: gt + H
    }));
  }, [F, E, c, B]), hr = p.useMemo(() => U ? b(U) : [], [b, U]);
  return p.useEffect(() => {
    var be, at;
    if (l !== null) {
      if (B) {
        const gt = document.querySelector(".meld-viewer-thumbnail--active");
        gt && gt.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((be = document.activeElement) == null ? void 0 : be.tagName) === "CANVAS" && document.activeElement.blur(), (at = N.current) == null || at.focus();
    }
  }, [B, l]), {
    isFullscreen: O,
    showDetails: L,
    setShowDetails: P,
    showThumbnails: B,
    setShowThumbnailsOverride: z,
    isLoadingLineage: Ht,
    isJumping: C,
    isMenuOpen: j,
    setIsMenuOpen: M,
    activeShortcutKey: D,
    lastDeletedImages: de,
    setLastDeletedImages: Le,
    overlayRef: N,
    handleNext: X,
    handlePrevious: oe,
    handleDelete: ue,
    handleUpdateUserNotes: w,
    handleEditNotes: () => U && y(U),
    handleTagEdit: Tt,
    handleRestore: Z,
    handleUndo: Bt,
    handleRestoreWorkflow: async () => {
      if (!U) return;
      await x(U) && t({ type: "CLOSE_VIEWER" });
    },
    handleAddUnifiedLoader: async () => {
      if (!U) return;
      await _(U) && t({ type: "CLOSE_VIEWER" });
    },
    handleSendToWorkflow: () => {
      if (!U) return;
      f(U) && t({ type: "CLOSE_VIEWER" });
    },
    handleRunWithWorkflow: () => U && u(U),
    handleRunWithMask: (be) => U && m(U, be),
    handleEditSource: () => U && g(U),
    toggleFullscreen: K,
    currentIndex: E,
    currentThumbnails: F,
    image: U,
    windowedThumbnails: Ln,
    parentChain: hr
  };
}, vi = ({
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
  onEditTags: h,
  onEditNotes: v,
  onDelete: y,
  onRestore: k,
  showRestore: w,
  deleteLabel: x,
  showQuickShortcuts: _ = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: m = ""
}) => {
  const [g, b] = p.useState("left");
  p.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? b("right") : b("left"));
  }, [e, n]);
  const S = (L) => {
    switch (L) {
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
        return h;
      case "edit_notes":
        return v;
      case "restore_image":
        return k;
      case "delete_or_trash":
        return y;
      default:
        return null;
    }
  }, j = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((L) => L && L !== ""), M = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: M, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${m}`,
        onClick: (L) => {
          L.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(sg, { size: u })
      }
    ),
    _ && j.map((L, P) => {
      const I = Ff.find((C) => C.id === L);
      if (!I || !I.icon) return null;
      const z = I.icon, B = S(L);
      return !B || L === "restore_image" && !w ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${m}`,
          onClick: (C) => {
            C.stopPropagation(), B();
          },
          title: I.label,
          children: /* @__PURE__ */ s.jsx(z, { size: u })
        },
        `${L}-${P}`
      );
    }),
    e && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `meld-image-card__menu ${g === "right" ? "meld-image-card__menu--right" : ""}`,
        children: [
          {
            id: "add_unified_loader",
            label: "Add Unified Loader",
            icon: Mf,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Rf,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Df,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Tf,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: Lf,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: If,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Of,
            handler: h
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Af,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Pf,
            handler: d
          },
          ...w ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: zf,
              handler: k,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: x,
            icon: Ut,
            handler: y,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((L) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${L.className || ""}`,
            onMouseDown: (P) => P.stopPropagation(),
            onClick: (P) => {
              P.preventDefault(), P.stopPropagation(), L.handler(), t(!1);
            },
            children: [
              /* @__PURE__ */ s.jsx(L.icon, { size: 14, color: L.color }),
              /* @__PURE__ */ s.jsx("span", { children: L.label })
            ]
          },
          L.id
        ))
      }
    )
  ] });
}, hv = ({
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
}) }) : null, pv = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = p.useState("idle");
  p.useEffect(() => {
    c("idle");
  }, []);
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], h = d === "always" || d === "if_present" && e.user_notes;
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
            (v, y) => v.imgSrc && /* @__PURE__ */ s.jsx(
              "img",
              {
                src: v.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (k) => {
                  k.stopPropagation(), a({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: v.id || e.id,
                      mode: "lineage"
                    }
                  });
                },
                title: y === 0 ? "Source" : y === 1 ? "Grand-Source" : `Ancestor (S${y + 1})`,
                alt: "source thumb"
              },
              v.id || y
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
          /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-details-tags", children: e.tags.map((v) => /* @__PURE__ */ s.jsx("span", { className: "meld-viewer-details-tag", children: v }, v)) })
        ] }),
        h && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            i === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
          ] }),
          /* @__PURE__ */ s.jsx(
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
              children: e.user_notes || /* @__PURE__ */ s.jsx("span", { style: { color: "var(--meld-text-secondary)" }, children: "Add notes..." })
            }
          )
        ] })
      ]
    }
  );
}, tm = p.memo(
  ({
    thumb: e,
    viewerImageId: t,
    currentImage: n,
    dispatch: r,
    viewerMode: l,
    lightTableSlotId: a
  }) => {
    const o = e.id === t, i = typeof n.parent_id == "number" && n.parent_id === e.id, c = typeof e.parent_id == "number" && e.parent_id === n.id, d = mt(e, 64);
    return /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail-wrapper", children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `meld-viewer-thumbnail ${o ? "meld-viewer-thumbnail--active" : ""} ${i ? "meld-viewer-thumbnail--parent" : ""} ${c ? "meld-viewer-thumbnail--child" : ""}`,
        onClick: () => r({
          type: "OPEN_VIEWER",
          payload: {
            id: e.id,
            mode: l,
            // Preserve slotId in lighttable mode
            ...l === "lighttable" && a ? { slotId: a } : {}
          }
        }),
        title: e.filename,
        children: [
          /* @__PURE__ */ s.jsx("img", { src: d, alt: e.filename }),
          (i || c) && /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-viewer-thumbnail-relation-icon ${i ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`,
              title: i ? "Source Image" : "Derivative Image",
              children: i ? /* @__PURE__ */ s.jsx(uf, { size: 12 }) : /* @__PURE__ */ s.jsx(df, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
tm.displayName = "ThumbnailItem";
const gv = ({
  windowedThumbnails: e,
  viewerImageId: t,
  currentImage: n,
  dispatch: r,
  isLoadingLineage: l,
  isLoading: a,
  viewerMode: o,
  lightTableSlotId: i
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
  ) : e.map(({ img: c }) => /* @__PURE__ */ s.jsx(
    tm,
    {
      thumb: c,
      viewerImageId: t,
      currentImage: n,
      dispatch: r,
      viewerMode: o,
      lightTableSlotId: i
    },
    c.id
  )),
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(rl, { className: "animate-spin", size: 20 }) })
] }) });
function yv() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ge(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: h,
    isMenuOpen: v,
    setIsMenuOpen: y,
    activeShortcutKey: k,
    setLastDeletedImages: w,
    overlayRef: x,
    handleNext: _,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: m,
    handleRestore: g,
    handleRestoreWorkflow: b,
    handleAddUnifiedLoader: S,
    handleSendToWorkflow: j,
    handleRunWithWorkflow: M,
    handleRunWithMask: L,
    handleEditSource: P,
    handleDelete: I,
    toggleFullscreen: z,
    image: B,
    windowedThumbnails: C,
    parentChain: V
  } = mv({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), D = p.useRef(null), R = p.useRef(null), { executeWorkflow: N } = gi(), T = p.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!B) return null;
  const { viewerImageId: F, viewerMode: E } = e, A = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return me.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: x,
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
              onClick: (U) => U.stopPropagation(),
              children: [
                A && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: g,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(rl, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(mf, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(Xp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: z,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(lg, { size: 20 }) : /* @__PURE__ */ s.jsx(ng, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    vi,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: y,
                      menuRef: R,
                      settings: e.settings,
                      onAddUnifiedLoader: S,
                      onRestoreWorkflow: b,
                      onSendToWorkflow: j,
                      onRunWithWorkflow: M,
                      onRunWithMask: L,
                      onEditSource: P,
                      onEditTags: u,
                      onEditNotes: m,
                      onDelete: I,
                      deleteLabel: T,
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
                      children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                    }
                  )
                ] }),
                A && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: h,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(ff, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  h && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(rl, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: D,
                      src: hi(B),
                      alt: B.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${h ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                A && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: _,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(di, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  pv,
                  {
                    image: B,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: A,
                    parentChain: V,
                    dispatch: t,
                    onEditNotes: m
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  gv,
                  {
                    windowedThumbnails: C,
                    viewerImageId: F,
                    currentImage: B,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: E,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ s.jsx(hv, { settings: e.settings, activeShortcutKey: k })
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Bf,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (U, O) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: U,
                        targetLoaderNodeId: O
                      }
                    }), !1;
                  const K = e.activeModal.maskFilename;
                  for (const X of e.activeModal.images)
                    await N(U, X, K, O);
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            Vf,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (U) => {
                e.activeModal.type === "node_selection" && ll(e.activeModal.image, U);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Hf, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Qf,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: w
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Kf, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(jf, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Wf, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            $f,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            ks,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            ks,
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
                  const U = e.activeModal.currentIndex + 1;
                  U < e.activeModal.images.length ? t({
                    type: "OPEN_MODAL",
                    payload: {
                      ...e.activeModal,
                      currentIndex: U
                    }
                  }) : (t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" }));
                }
              },
              onClose: () => t({ type: "CLOSE_MODAL" })
            },
            e.activeModal.images[e.activeModal.currentIndex].id
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            Uf,
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
const vv = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = ge(), [a, o] = p.useState("gallery"), [i, c] = p.useState(""), d = e.searchQuery.trim() !== "", h = p.useRef(null), v = p.useRef(null), y = se((_) => _.buckets), k = p.useMemo(() => {
    const _ = /* @__PURE__ */ new Set();
    for (const f of Object.values(y))
      for (const u of f)
        _.add(Number(u));
    return _;
  }, [y]), w = p.useMemo(() => e.images.filter((_) => k.has(_.id) ? !1 : e.viewScope === "trash" ? _.exists !== !1 || e.settings["gallery.trash.show_missing"] : _.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !_.has_children)), [e.images, e.settings, e.viewScope, k, d]), x = w;
  return p.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (Q.log("GalleryPanel: Auto-loading more because all loaded images are hidden"), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), $s({
    onKeyDown: (_) => {
      if (_.key !== "Escape")
        return;
      const f = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || f || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), sl(_));
    }
  }), p.useEffect(() => {
    const _ = new IntersectionObserver(
      (u) => {
        if (u[0].isIntersecting) {
          if (e.isLoading) {
            Q.log("GalleryPanel: Intersection observed but already loading");
            return;
          }
          e.pagination.hasMore ? (Q.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : Q.log("GalleryPanel: Intersection observed but no more to load", {
            localCount: w.length,
            serverHasMore: e.pagination.hasMore
          });
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = h.current;
    return f && _.observe(f), () => {
      f && _.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    w.length,
    e.images.length
  ]), p.useEffect(() => {
    e.viewerImageId !== null && (v.current = e.viewerImageId);
  }, [e.viewerImageId]), {
    state: e,
    dispatch: t,
    refreshImages: n,
    loadMoreImages: r,
    updateSetting: l,
    viewMode: a,
    setViewMode: o,
    lastSearchQuery: i,
    setLastSearchQuery: c,
    localLimit: e.pagination.limit,
    displayedImages: w,
    visibleImages: x,
    isSearchActive: d,
    loadMoreRef: h
  };
}, wv = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ge(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Ws(e, t), o = e.selectedIds.size, [i, c] = p.useState(!1), [d, h] = p.useState(null), v = p.useRef(null), y = p.useRef(null), k = Yf("bulkActionBar");
  if (Ue({
    onEscape: () => c(!1),
    enabled: i
  }), al({
    enabled: i,
    insideRefs: [v, y],
    onOutside: () => c(!1)
  }), o === 0) return null;
  const w = e.viewScope === "trash", x = () => e.images.filter((j) => e.selectedIds.has(j.id)), _ = () => {
    if (i) {
      c(!1);
      return;
    }
    v.current && (h(v.current.getBoundingClientRect()), c(!0));
  }, f = (j) => {
    j(), c(!1);
  }, u = () => {
    const j = x(), M = /* @__PURE__ */ new Set();
    for (const L of j)
      if (L.tags)
        for (const P of L.tags)
          M.add(P);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(M)
      }
    });
  }, m = () => {
    const j = x();
    l(j);
  }, g = () => {
    const j = x();
    j.length > 0 && a(j, "run");
  }, b = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, S = /* @__PURE__ */ s.jsxs("div", { className: `meld-bulk-bar ${w ? "meld-bulk-bar--trash" : ""}`, children: [
    /* @__PURE__ */ s.jsxs("span", { className: "meld-bulk-bar__info", children: [
      o,
      " items selected"
    ] }),
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        ref: v,
        type: "button",
        className: "meld-bulk-bar__button meld-bulk-bar__button--action",
        onClick: _,
        children: [
          /* @__PURE__ */ s.jsx(rg, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
          /* @__PURE__ */ s.jsx(pe, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    ),
    i && d && /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: y,
        className: "meld-bulk-bar-menu",
        style: {
          bottom: window.innerHeight - d.top + 5,
          left: d.left
        },
        children: w ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore",
              onClick: () => f(r),
              children: [
                /* @__PURE__ */ s.jsx(rl, { size: 14 }),
                " Restore"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger",
              onClick: () => f(n),
              children: [
                /* @__PURE__ */ s.jsx(Ut, { size: 14 }),
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
              onClick: () => f(u),
              children: [
                /* @__PURE__ */ s.jsx(mr, { size: 14 }),
                " Edit Tags"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(m),
              children: [
                /* @__PURE__ */ s.jsx(ui, { size: 14 }),
                " Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(g),
              children: [
                /* @__PURE__ */ s.jsx(og, { size: 14 }),
                " Queue Workflow (Mask)"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(b),
              children: [
                /* @__PURE__ */ s.jsx(tl, { size: 14 }),
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
              onClick: () => f(n),
              children: [
                /* @__PURE__ */ s.jsx(Ut, { size: 14 }),
                " Move to Trash"
              ]
            }
          )
        ] })
      }
    )
  ] });
  return me.createPortal(S, k);
};
function An(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let h;
    n.key && ((i = n.debug) != null && i.call(n)) && (h = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((w, x) => r[x] !== w)))
      return l;
    r = v;
    let k;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (k = Date.now()), l = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const w = Math.round((Date.now() - h) * 100) / 100, x = Math.round((Date.now() - k) * 100) / 100, _ = x / 16, f = (u, m) => {
        for (u = String(u); u.length < m; )
          u = " " + u;
        return u;
      };
      console.info(
        `%c⏱ ${f(x, 5)} /${f(w, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * _, 120)
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
function Uc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const xv = (e, t) => Math.abs(e - t) < 1.01, _v = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, Vc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, kv = (e) => e, Sv = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, jv = (e, t) => {
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
  if (l(Vc(n)), !r.ResizeObserver)
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
      l(Vc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Bc = {
  passive: !0
}, Qc = typeof window > "u" ? !0 : "onscrollend" in window, bv = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && Qc ? () => {
  } : _v(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (h) => () => {
    const { horizontal: v, isRtl: y } = e.options;
    l = v ? n.scrollLeft * (y && -1 || 1) : n.scrollTop, a(), t(l, h);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Bc);
  const d = e.options.useScrollendEvent && Qc;
  return d && n.addEventListener("scrollend", c, Bc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, Ev = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Cv = (e, {
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
class Nv {
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
        getItemKey: kv,
        rangeExtractor: Sv,
        onChange: () => {
        },
        measureElement: Ev,
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
    }, this.maybeNotify = An(
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
    }, this.getMeasurementOptions = An(
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
    ), this.getMeasurements = An(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: l, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const y of this.laneAssignments.keys())
            y >= n && this.laneAssignments.delete(y);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((y) => {
          this.itemSizeCache.set(y.key, y.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const h = this.measurementsCache.slice(0, d), v = new Array(i).fill(
          void 0
        );
        for (let y = 0; y < d; y++) {
          const k = h[y];
          k && (v[k.lane] = y);
        }
        for (let y = d; y < n; y++) {
          const k = a(y), w = this.laneAssignments.get(y);
          let x, _;
          if (w !== void 0 && this.options.lanes > 1) {
            x = w;
            const g = v[x], b = g !== void 0 ? h[g] : void 0;
            _ = b ? b.end + this.options.gap : r + l;
          } else {
            const g = this.options.lanes === 1 ? h[y - 1] : this.getFurthestMeasurement(h, y);
            _ = g ? g.end + this.options.gap : r + l, x = g ? g.lane : y % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(y, x);
          }
          const f = c.get(k), u = typeof f == "number" ? f : this.options.estimateSize(y), m = _ + u;
          h[y] = {
            index: y,
            start: _,
            size: u,
            end: m,
            key: k,
            lane: x
          }, v[x] = y;
        }
        return this.measurementsCache = h, h;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = An(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? Mv({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = An(
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
    }, this.getVirtualItems = An(
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
        return Uc(
          r[nm(
            0,
            r.length - 1,
            (l) => Uc(r[l]).start,
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
        const h = this.getOffsetForIndex(n, d);
        if (!h) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [v, y] = h;
        this._scrollToOffset(v, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const k = () => {
            if (this.currentScrollToIndex !== n) return;
            const w = this.getScrollOffset(), x = this.getOffsetForIndex(n, y);
            if (!x) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            xv(x[0], w) || c(y);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(k) : k();
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
const nm = (e, t, n, r) => {
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
function Mv({
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
  let o = nm(
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
    for (; i < l && c.some((h) => h < n + t); ) {
      const h = e[i];
      c[h.lane] = h.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((h) => h >= n); ) {
      const h = e[o];
      d[h.lane] = h.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(l, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const Hc = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Iv({
  useFlushSync: e = !0,
  ...t
}) {
  const n = p.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? me.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = p.useState(
    () => new Nv(r)
  );
  return l.setOptions(r), Hc(() => l._didMount(), []), Hc(() => l._willUpdate()), l;
}
function Tv(e) {
  return Iv({
    observeElementRect: jv,
    observeElementOffset: bv,
    scrollToFn: Cv,
    ...e
  });
}
const rm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ge(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: h,
    handleRunWithWorkflow: v,
    handleRunWithMask: y,
    handleRestore: k,
    handleDelete: w,
    handleEditNotes: x,
    handleUpdateUserNotes: _
  } = Ws(t, n), { getParentChain: f } = em(t.images, t.settings), [u, m] = p.useState(null), [g, b] = p.useState(!1), [S, j] = p.useState(null), [M, L] = p.useState(!1), P = p.useRef(null);
  al({
    enabled: g,
    insideRefs: [P],
    onOutside: () => b(!1)
  });
  const I = async (Z, Bt, Qt = !1) => {
    try {
      await navigator.clipboard.writeText(Z), Qt ? (L(!0), setTimeout(() => L(!1), 2e3)) : (j(Bt), setTimeout(() => j(null), 2e3));
    } catch (Ht) {
      console.error("Failed to copy text: ", Ht);
    }
  }, z = p.useCallback(
    (Z) => {
      if (Z.key === "Escape") {
        if (u) {
          sl(Z), m(null);
          return;
        }
        g && (sl(Z), b(!1));
      }
    },
    [u, g]
  );
  $s({
    enabled: g || u !== null,
    onKeyDown: z
  });
  const B = f(e), V = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, D = t.settings["sidebar.thumbnail_size"] || 100, R = mt(e, Math.min(400, Math.round(D * 1.5)));
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: m,
    isMenuOpen: g,
    setIsMenuOpen: b,
    copiedLabel: S,
    popupCopied: M,
    menuRef: P,
    parentChain: B,
    displayFilename: V,
    imgSrc: R,
    handleCopy: I,
    handleClick: (Z) => {
      Z.shiftKey ? (Z.preventDefault(), Z.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Z.ctrlKey || Z.metaKey || t.selectedIds.size > 0 ? (Z.preventDefault(), Z.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (Z) => {
      Z.preventDefault(), Z.stopPropagation(), Z.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (Z) => {
      Z.shiftKey ? (Z.preventDefault(), Z.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Z.ctrlKey || Z.metaKey || t.selectedIds.size > 0 ? (Z.preventDefault(), Z.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (Z.preventDefault(), Z.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (Z) => {
      Z.target.closest("textarea, input, button, .meld-image-card__meta-content") || !Z.shiftKey && !Z.ctrlKey && !Z.metaKey && l || (Z.shiftKey || Z.ctrlKey || Z.metaKey || t.selectedIds.size > 0) && Z.preventDefault();
    },
    handleKeyDown: (Z) => {
      var Qt, Ht, Ln;
      ((Qt = document.activeElement) == null ? void 0 : Qt.tagName) === "INPUT" || ((Ht = document.activeElement) == null ? void 0 : Ht.tagName) === "TEXTAREA" || (Ln = document.activeElement) != null && Ln.isContentEditable || (Z.key === "Enter" || Z.key === " ") && (Z.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      x(e);
    },
    handleSendToWorkflow: () => {
      h(e);
    },
    handleRestore: () => {
      k(e);
    },
    handleDelete: () => {
      w(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (Z = "run") => y(e, Z),
    handleUpdateUserNotes: (Z) => _(e.id, Z),
    fetchFullImageDetails: r
  };
}, Lv = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => me.createPortal(
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-prompt-popup-overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-content", onClick: (a) => a.stopPropagation(), children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup-header", children: [
          /* @__PURE__ */ s.jsx("span", { children: e }),
          /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            l ? /* @__PURE__ */ s.jsx(ci, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(Kp, { className: "meld-prompt-popup-copy", size: 18, onClick: () => r(t) }),
            /* @__PURE__ */ s.jsx(pe, { className: "meld-prompt-popup-close", size: 18, onClick: n })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup-text", children: t })
      ] })
    }
  ),
  document.body
), lm = Jt.memo(({ image: e }) => {
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
    menuRef: h,
    parentChain: v,
    displayFilename: y,
    imgSrc: k,
    handleCopy: w,
    handleClick: x,
    handleSelectToggle: _,
    handleContainerClick: f,
    handleMouseDown: u,
    handleKeyDown: m,
    handleRestoreWorkflow: g,
    handleAddUnifiedLoader: b,
    handleEditSource: S,
    handleEditTags: j,
    handleEditNotes: M,
    handleSendToWorkflow: L,
    handleRestore: P,
    handleDelete: I,
    handleRunWithWorkflow: z,
    handleRunWithMask: B,
    fetchFullImageDetails: C
  } = rm(e), [V, D] = p.useState("idle");
  p.useEffect(() => {
    e.user_notes && V === "saving" && D("idle");
  }, [e.user_notes, V]);
  const R = (N) => {
    N.stopPropagation();
    let T = String(e.id);
    r && t.selectedIds.size > 0 && (T = Array.from(t.selectedIds).join(",")), N.dataTransfer.setData("text/plain", T), se.getState().setIsOpen(!0);
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-image-card ${r ? "meld-image-card--selected" : ""} ${o ? "meld-image-card--menu-open" : ""}`,
      onClick: f,
      onMouseDown: u,
      onKeyDown: m,
      role: "button",
      tabIndex: 0,
      draggable: !0,
      onDragStart: R,
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__thumbnail-wrapper", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: `meld-image-card__select-checkbox ${r ? "meld-image-card__select-checkbox--checked" : ""}`,
              onClick: _,
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
              src: k,
              className: "meld-image-card__thumbnail",
              alt: e.filename,
              loading: "lazy",
              draggable: !1,
              width: e.width || void 0,
              height: e.height || void 0,
              style: {
                aspectRatio: e.width && e.height ? `${e.width} / ${e.height}` : void 0
              },
              onMouseDown: u,
              onClick: (N) => {
                N.stopPropagation(), x(N);
              }
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && y,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
              (N, T) => N.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: N.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (F) => {
                    F.stopPropagation(), n({
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
                const T = await C(e.id);
                a({
                  title: "Model",
                  text: T.model_name || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Model" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (N) => {
                      N.stopPropagation();
                      const T = await C(e.id);
                      w(T.model_name || "-", "Model");
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
              onClick: async (N) => {
                N.stopPropagation();
                const T = await C(e.id);
                a({
                  title: "Positive Prompt",
                  text: T.positive_prompt || T.positive || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Positive" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (N) => {
                      N.stopPropagation();
                      const T = await C(e.id);
                      w(T.positive_prompt || T.positive || "-", "Positive");
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
              onClick: async (N) => {
                N.stopPropagation();
                const T = await C(e.id);
                a({
                  title: "Negative Prompt",
                  text: T.negative_prompt || T.negative || "-"
                });
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: `meld-image-card__meta-label meld-image-card__meta-label--copyable ${c === "Negative" ? "meld-image-card__meta-label--copied" : ""}`,
                    title: "Click to copy",
                    onClick: async (N) => {
                      N.stopPropagation();
                      const T = await C(e.id);
                      w(T.negative_prompt || T.negative || "-", "Negative");
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
              onClick: (N) => {
                N.stopPropagation(), j();
              },
              children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((N) => /* @__PURE__ */ s.jsx("span", { className: "meld-image-card__tag", children: N }, N)) : /* @__PURE__ */ s.jsx(
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
              V === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes-status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "meld-image-card__meta-content",
                onClick: (N) => {
                  N.stopPropagation(), M();
                },
                children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes-placeholder", children: "Add notes..." }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s.jsx(
          vi,
          {
            isMenuOpen: o,
            setIsMenuOpen: i,
            menuRef: h,
            settings: t.settings,
            onAddUnifiedLoader: b,
            onRestoreWorkflow: g,
            onSendToWorkflow: L,
            onRunWithWorkflow: z,
            onRunWithMask: (N) => B(N),
            onEditSource: S,
            onEditTags: j,
            onEditNotes: M,
            onRestore: P,
            showRestore: t.viewScope === "trash",
            onDelete: I,
            deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
          }
        ),
        l && /* @__PURE__ */ s.jsx(
          Lv,
          {
            title: l.title,
            text: l.text,
            onClose: () => a(null),
            onCopy: (N) => w(N, "", !0),
            isCopied: d
          }
        )
      ]
    }
  );
});
lm.displayName = "DetailedImageCard";
const sm = Jt.memo(({ image: e }) => {
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
    menuRef: h,
    state: v,
    handleAddUnifiedLoader: y,
    handleRestoreWorkflow: k,
    handleSendToWorkflow: w,
    handleRunWithWorkflow: x,
    handleRunWithMask: _,
    handleEditSource: f,
    handleEditTags: u,
    handleEditNotes: m,
    handleDelete: g,
    handleRestore: b
  } = rm(e), S = v.viewScope === "trash", j = S ? "Delete Permanently" : "Move to Trash", M = (L) => {
    L.stopPropagation();
    let P = String(e.id);
    t && v.selectedIds.size > 0 && (P = Array.from(v.selectedIds).join(",")), L.dataTransfer.setData("text/plain", P), se.getState().setIsOpen(!0);
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
      onDragStart: M,
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
              style: {
                aspectRatio: e.width && e.height ? `${e.width} / ${e.height}` : void 0
              },
              onMouseDown: l,
              onClick: (L) => {
                L.stopPropagation(), o(L);
              }
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(
          vi,
          {
            isMenuOpen: c,
            setIsMenuOpen: d,
            menuRef: h,
            settings: v.settings,
            onAddUnifiedLoader: y,
            onRestoreWorkflow: k,
            onSendToWorkflow: w,
            onRunWithWorkflow: x,
            onRunWithMask: _,
            onEditSource: f,
            onEditTags: u,
            onEditNotes: m,
            onDelete: g,
            onRestore: b,
            showRestore: S,
            deleteLabel: j,
            showQuickShortcuts: !1,
            variant: "thumbnail_overlay_top_right"
          }
        )
      ]
    }
  );
});
sm.displayName = "SimpleImageCard";
const Kc = ({ image: e }) => {
  const { state: t } = ge();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(sm, { image: e }) : /* @__PURE__ */ s.jsx(lm, { image: e });
}, ya = 6, Rv = 10, Dv = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  hasMore: a
}) => {
  const o = p.useRef(null), [i, c] = p.useState(300), d = t["sidebar.thumbnail_size"] || 100, h = t["gallery.view_mode"] === "grid_only";
  p.useEffect(() => {
    const f = o.current;
    if (!f) return;
    const u = () => {
      c(f.clientWidth);
    };
    u();
    const m = new ResizeObserver(u);
    return m.observe(f), () => m.disconnect();
  }, []);
  const v = d + 10, y = h ? Math.max(
    1,
    Math.floor((i - Rv * 2 + ya) / (v + ya))
  ) : 1, k = h ? Math.ceil(e.length / y) : e.length, w = h ? d + 14 : d + 40, x = Tv({
    count: k,
    getScrollElement: () => o.current,
    estimateSize: () => w,
    overscan: 5,
    getItemKey: (f) => {
      var u;
      return h ? `row-${f}-${y}` : ((u = e[f]) == null ? void 0 : u.id) ?? f;
    }
  });
  p.useEffect(() => {
    if (r === null) return;
    const f = e.findIndex((m) => m.id === r);
    if (f < 0) return;
    const u = h ? Math.floor(f / y) : f;
    x.scrollToIndex(u, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, h, y, x]);
  const _ = x.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${d}px`
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `meld-gallery__list ${h ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${x.getTotalSize()}px`,
              position: "relative"
            },
            children: _.map((f) => {
              if (h) {
                const m = f.index * y, g = Math.min(m + y, e.length), b = e.slice(m, g);
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    ref: x.measureElement,
                    "data-index": f.index,
                    className: "meld-gallery__virtual-grid-row",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${f.start}px)`,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: ya,
                      alignItems: "flex-start"
                    },
                    children: b.map((S) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": S.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: S.width && S.height ? Math.min(d, d * S.width / S.height) + 10 : d + 10,
                              minWidth: d + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Kc, { image: S })
                          }
                        )
                      },
                      S.id
                    ))
                  },
                  f.key
                );
              }
              const u = e[f.index];
              return u ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: x.measureElement,
                  "data-index": f.index,
                  "data-image-id": u.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${f.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(Kc, { image: u })
                },
                f.key
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
              !l && !a && e.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__end", children: "End of gallery" })
            ]
          }
        )
      ]
    }
  );
}, Pv = () => {
  const {
    state: e,
    dispatch: t,
    refreshImages: n,
    updateSetting: r,
    viewMode: l,
    setViewMode: a,
    lastSearchQuery: o,
    setLastSearchQuery: i,
    displayedImages: c,
    visibleImages: d,
    isSearchActive: h,
    loadMoreRef: v
  } = vv(), y = se((j) => j.isOpen), k = se((j) => j.setIsOpen), w = se((j) => j.buckets), x = Object.values(w).some(
    (j) => j && j.length > 0
  );
  Q.log("GalleryPanel: isLightTableOpen =", y);
  const [_, f] = p.useState(!1), [u, m] = p.useState(null), g = p.useRef(null), b = p.useCallback(() => {
    g.current && (m(g.current.getBoundingClientRect()), f(!0));
  }, []), S = p.useCallback(
    (j) => {
      t({ type: "SET_SEARCH_QUERY", payload: j }), i(j), a("search"), f(!1);
    },
    [t, i, a]
  );
  return Q.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: d.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (j) => {
        j.dataTransfer.types.includes("application/meld-lt-source-slot") && (j.preventDefault(), j.dataTransfer.dropEffect = "move");
      },
      onDrop: (j) => {
        const M = j.dataTransfer.getData("application/meld-lt-source-slot");
        if (M) {
          j.preventDefault();
          const L = j.dataTransfer.getData("text/plain");
          if (L) {
            const P = L.split(","), I = [];
            P.forEach((z) => {
              if (z) {
                const B = z.trim();
                se.getState().removeFromBucket(M, B);
                const C = Number(B);
                Number.isNaN(C) || I.push(C);
              }
            }), I.length > 0 && t({ type: "DESELECT_IMAGES", payload: I });
          }
        }
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__header", children: [
          e.viewScope === "trash" ? /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-indicator", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__trash-label", children: [
              /* @__PURE__ */ s.jsx(Ut, { size: 14 }),
              /* @__PURE__ */ s.jsx("span", { children: "Trash Bin" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "meld-gallery__trash-toggle", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.settings["gallery.trash.show_missing"] || !1,
                  onChange: (j) => r("gallery.trash.show_missing", j.target.checked)
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
                  /* @__PURE__ */ s.jsx(pe, { size: 14 }),
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
                  color: h ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: h ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(Mn, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: g,
                type: "button",
                onClick: b,
                style: {
                  background: "none",
                  border: "none",
                  color: _ ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(cr, { size: 14, fill: _ ? "var(--brand-yellow, #ffd700)" : "none" })
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
                children: /* @__PURE__ */ s.jsx(mr, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  const M = (e.settings["gallery.view_mode"] || "grid_details") === "grid_details" ? "grid_only" : "grid_details";
                  r("gallery.view_mode", M);
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(Jp, { size: 14 }) : /* @__PURE__ */ s.jsx(mf, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  Q.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    y,
                    "to",
                    !y
                  ), k(!y);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: y ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ s.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ s.jsx(
                    ag,
                    {
                      size: 14,
                      fill: y ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: y ? 1 : 0.8 }
                    }
                  ),
                  !y && x && /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(tl, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(rl, { size: 14, className: e.isLoading ? "animate-spin" : "" })
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
                children: /* @__PURE__ */ s.jsx(pf, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(rv, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Ly, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "tags" ? /* @__PURE__ */ s.jsx(
            lv,
            {
              onClose: () => a("gallery"),
              onSearch: (j) => {
                t({ type: "SET_SEARCH_QUERY", payload: j }), a("search");
              }
            }
          ) : e.isLoading && c.length === 0 ? /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              children: /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading images..." })
            }
          ) : d.length === 0 ? /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-gallery__list-wrapper",
              style: {
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              children: /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No images found." })
            }
          ) : /* @__PURE__ */ s.jsx(
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
                Dv,
                {
                  visibleImages: d,
                  settings: e.settings,
                  loadMoreRef: v,
                  viewerImageId: e.viewerImageId,
                  isLoading: e.isLoading,
                  hasMore: e.pagination.hasMore
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(wv, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(yv, {}),
        /* @__PURE__ */ s.jsx(Ty, {}),
        _ && /* @__PURE__ */ s.jsx(
          ev,
          {
            anchorRect: u,
            onClose: () => f(!1),
            onSelect: S
          }
        ),
        /* @__PURE__ */ s.jsx($y, {})
      ]
    }
  );
};
Gc.registerExtension({
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
const Ov = document.getElementById("meld-gallery-style");
if (!Ov) {
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
let Al = null, it = null;
Gc.registerExtension({
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
    Oy();
    try {
      const n = await _f();
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
      }, te.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), te.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: n.detail }));
      }), te.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: n.detail })), (r = e.ui.meld) == null || r.refresh(), Q.log("Import completed.");
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
                  await wf({
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
              galleryRoot: Al,
              galleryContainer: it
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), it || (Q.log("galleryContainer not found, creating new one"), it = document.createElement("div"), it.id = "meld-gallery-container", it.style.height = "100%", it.style.width = "100%", it.style.display = "flex", it.style.flexDirection = "column", it.style.overflow = "hidden"), n.contains(it) || (Q.log("Appending galleryContainer to el"), n.appendChild(it)), Al ? Q.log("Gallery root already exists, React should handle re-render if needed") : (Q.log("Creating new gallery root"), Al = sf(it), Al.render(
              Jt.createElement(Gg, null, Jt.createElement(Pv))
            ));
          }
        });
      } catch (n) {
        console.error("Error during sidebar registration:", n);
      }
    }
  }
});
