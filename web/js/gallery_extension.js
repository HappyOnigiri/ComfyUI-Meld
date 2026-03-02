import { api as te } from "/scripts/api.js";
import { app as Hc } from "/scripts/app.js";
function cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kc = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol = Symbol.for("react.element"), dm = Symbol.for("react.portal"), um = Symbol.for("react.fragment"), fm = Symbol.for("react.strict_mode"), mm = Symbol.for("react.profiler"), hm = Symbol.for("react.provider"), pm = Symbol.for("react.context"), gm = Symbol.for("react.forward_ref"), ym = Symbol.for("react.suspense"), vm = Symbol.for("react.memo"), wm = Symbol.for("react.lazy"), vi = Symbol.iterator;
function xm(e) {
  return e === null || typeof e != "object" ? null : (e = vi && e[vi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Gc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, qc = Object.assign, Yc = {};
function ur(e, t, n) {
  this.props = e, this.context = t, this.refs = Yc, this.updater = n || Gc;
}
ur.prototype.isReactComponent = {};
ur.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ur.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xc() {
}
Xc.prototype = ur.prototype;
function po(e, t, n) {
  this.props = e, this.context = t, this.refs = Yc, this.updater = n || Gc;
}
var go = po.prototype = new Xc();
go.constructor = po;
qc(go, ur.prototype);
go.isPureReactComponent = !0;
var wi = Array.isArray, Zc = Object.prototype.hasOwnProperty, yo = { current: null }, Jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ed(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Zc.call(t, r) && !Jc.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: ol, type: e, key: a, ref: o, props: l, _owner: yo.current };
}
function _m(e, t) {
  return { $$typeof: ol, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function vo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ol;
}
function km(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var xi = /\/+/g;
function Us(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? km("" + e.key) : t.toString(36);
}
function Al(e, t, n, r, l) {
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
        case dm:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Us(o, 0) : r, wi(l) ? (n = "", e != null && (n = e.replace(xi, "$&/") + "/"), Al(l, t, n, "", function(d) {
    return d;
  })) : l != null && (vo(l) && (l = _m(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(xi, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", wi(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Us(a, i);
    o += Al(a, t, n, c, l);
  }
  else if (c = xm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Us(a, i++), o += Al(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function pl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Al(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function Sm(e) {
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
var Qe = { current: null }, zl = { transition: null }, jm = { ReactCurrentDispatcher: Qe, ReactCurrentBatchConfig: zl, ReactCurrentOwner: yo };
function td() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: pl, forEach: function(e, t, n) {
  pl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return pl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return pl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!vo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = ur;
re.Fragment = um;
re.Profiler = mm;
re.PureComponent = po;
re.StrictMode = fm;
re.Suspense = ym;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm;
re.act = td;
re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = qc({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = yo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) Zc.call(t, c) && !Jc.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
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
  return e = { $$typeof: pm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hm, _context: e }, e.Consumer = e;
};
re.createElement = ed;
re.createFactory = function(e) {
  var t = ed.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: gm, render: e };
};
re.isValidElement = vo;
re.lazy = function(e) {
  return { $$typeof: wm, _payload: { _status: -1, _result: e }, _init: Sm };
};
re.memo = function(e, t) {
  return { $$typeof: vm, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = zl.transition;
  zl.transition = {};
  try {
    e();
  } finally {
    zl.transition = t;
  }
};
re.unstable_act = td;
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
Kc.exports = re;
var h = Kc.exports;
const Jt = /* @__PURE__ */ cm(h);
var nd = { exports: {} }, st = {}, rd = { exports: {} }, ld = {};
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
      var E = F - 1 >>> 1, z = N[E];
      if (0 < l(z, T)) N[E] = T, N[F] = z, F = E;
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
      e: for (var E = 0, z = N.length, U = z >>> 1; E < U; ) {
        var O = 2 * (E + 1) - 1, K = N[O], J = O + 1, oe = N[J];
        if (0 > l(K, F)) J < z && 0 > l(oe, K) ? (N[E] = oe, N[J] = F, E = J) : (N[E] = K, N[O] = F, E = O);
        else if (J < z && 0 > l(oe, F)) N[E] = oe, N[J] = F, E = J;
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
  var c = [], d = [], m = 1, v = null, y = 3, S = !1, w = !1, x = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var T = n(d); T !== null; ) {
      if (T.callback === null) r(d);
      else if (T.startTime <= N) r(d), T.sortIndex = T.expirationTime, t(c, T);
      else break;
      T = n(d);
    }
  }
  function g(N) {
    if (x = !1, p(N), !w) if (n(c) !== null) w = !0, D(j);
    else {
      var T = n(d);
      T !== null && L(g, T.startTime - N);
    }
  }
  function j(N, T) {
    w = !1, x && (x = !1, f(M), M = -1), S = !0;
    var F = y;
    try {
      for (p(T), v = n(c); v !== null && (!(v.expirationTime > T) || N && !I()); ) {
        var E = v.callback;
        if (typeof E == "function") {
          v.callback = null, y = v.priorityLevel;
          var z = E(v.expirationTime <= T);
          T = e.unstable_now(), typeof z == "function" ? v.callback = z : v === n(c) && r(c), p(T);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var U = !0;
      else {
        var O = n(d);
        O !== null && L(g, O.startTime - T), U = !1;
      }
      return U;
    } finally {
      v = null, y = F, S = !1;
    }
  }
  var k = !1, b = null, M = -1, P = 5, R = -1;
  function I() {
    return !(e.unstable_now() - R < P);
  }
  function A() {
    if (b !== null) {
      var N = e.unstable_now();
      R = N;
      var T = !0;
      try {
        T = b(!0, N);
      } finally {
        T ? B() : (k = !1, b = null);
      }
    } else k = !1;
  }
  var B;
  if (typeof u == "function") B = function() {
    u(A);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), V = C.port2;
    C.port1.onmessage = A, B = function() {
      V.postMessage(null);
    };
  } else B = function() {
    _(A, 0);
  };
  function D(N) {
    b = N, k || (k = !0, B());
  }
  function L(N, T) {
    M = _(function() {
      N(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    w || S || (w = !0, D(j));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < N ? Math.floor(1e3 / N) : 5;
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
        var z = -1;
        break;
      case 2:
        z = 250;
        break;
      case 5:
        z = 1073741823;
        break;
      case 4:
        z = 1e4;
        break;
      default:
        z = 5e3;
    }
    return z = F + z, N = { id: m++, callback: T, priorityLevel: N, startTime: F, expirationTime: z, sortIndex: -1 }, F > E ? (N.sortIndex = F, t(d, N), n(c) === null && N === n(d) && (x ? (f(M), M = -1) : x = !0, L(g, F - E))) : (N.sortIndex = z, t(c, N), w || S || (w = !0, D(j))), N;
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
})(ld);
rd.exports = ld;
var bm = rd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Em = h, lt = bm;
function $(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var sd = /* @__PURE__ */ new Set(), zr = {};
function In(e, t) {
  rr(e, t), rr(e + "Capture", t);
}
function rr(e, t) {
  for (zr[e] = t, e = 0; e < t.length; e++) sd.add(t[e]);
}
var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), va = Object.prototype.hasOwnProperty, Cm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _i = {}, ki = {};
function Nm(e) {
  return va.call(ki, e) ? !0 : va.call(_i, e) ? !1 : Cm.test(e) ? ki[e] = !0 : (_i[e] = !0, !1);
}
function Mm(e, t, n, r) {
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
function Im(e, t, n, r) {
  if (t === null || typeof t > "u" || Mm(e, t, n, r)) return !0;
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
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Im(t, n, l, r) && (n = null), r || l === null ? Nm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gl = Symbol.for("react.element"), Fn = Symbol.for("react.portal"), Wn = Symbol.for("react.fragment"), ko = Symbol.for("react.strict_mode"), wa = Symbol.for("react.profiler"), ad = Symbol.for("react.provider"), od = Symbol.for("react.context"), So = Symbol.for("react.forward_ref"), xa = Symbol.for("react.suspense"), _a = Symbol.for("react.suspense_list"), jo = Symbol.for("react.memo"), qt = Symbol.for("react.lazy"), id = Symbol.for("react.offscreen"), Si = Symbol.iterator;
function gr(e) {
  return e === null || typeof e != "object" ? null : (e = Si && e[Si] || e["@@iterator"], typeof e == "function" ? e : null);
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
function Tm(e) {
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
    case Wn:
      return "Fragment";
    case Fn:
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
    case od:
      return (e.displayName || "Context") + ".Consumer";
    case ad:
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
function Lm(e) {
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
function cd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Rm(e) {
  var t = cd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function yl(e) {
  e._valueTracker || (e._valueTracker = Rm(e));
}
function dd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = cd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Yl(e) {
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
function ji(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = un(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ud(e, t) {
  t = t.checked, t != null && _o(e, "checked", t, !1);
}
function ja(e, t) {
  ud(e, t);
  var n = un(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ba(e, t.type, n) : t.hasOwnProperty("defaultValue") && ba(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function bi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ba(e, t, n) {
  (t !== "number" || Yl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Xn(e, t, n, r) {
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
function Ei(e, t) {
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
function fd(e, t) {
  var n = un(t.value), r = un(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ci(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function md(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? md(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var vl, hd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (vl = vl || document.createElement("div"), vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, Dm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function(e) {
  Dm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mr[t] = Mr[e];
  });
});
function pd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px";
}
function gd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = pd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Pm = je({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Na(e, t) {
  if (t) {
    if (Pm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e));
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
var Ta = null, Zn = null, Jn = null;
function Ni(e) {
  if (e = dl(e)) {
    if (typeof Ta != "function") throw Error($(280));
    var t = e.stateNode;
    t && (t = Es(t), Ta(e.stateNode, e.type, t));
  }
}
function yd(e) {
  Zn ? Jn ? Jn.push(e) : Jn = [e] : Zn = e;
}
function vd() {
  if (Zn) {
    var e = Zn, t = Jn;
    if (Jn = Zn = null, Ni(e), t) for (e = 0; e < t.length; e++) Ni(t[e]);
  }
}
function wd(e, t) {
  return e(t);
}
function xd() {
}
var Hs = !1;
function _d(e, t, n) {
  if (Hs) return e(t, n);
  Hs = !0;
  try {
    return wd(e, t, n);
  } finally {
    Hs = !1, (Zn !== null || Jn !== null) && (xd(), vd());
  }
}
function Wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Es(n);
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
function Om(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (m) {
    this.onError(m);
  }
}
var Ir = !1, Xl = null, Zl = !1, Ra = null, Am = { onError: function(e) {
  Ir = !0, Xl = e;
} };
function zm(e, t, n, r, l, a, o, i, c) {
  Ir = !1, Xl = null, Om.apply(Am, arguments);
}
function Fm(e, t, n, r, l, a, o, i, c) {
  if (zm.apply(this, arguments), Ir) {
    if (Ir) {
      var d = Xl;
      Ir = !1, Xl = null;
    } else throw Error($(198));
    Zl || (Zl = !0, Ra = d);
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
function kd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Mi(e) {
  if (Tn(e) !== e) throw Error($(188));
}
function Wm(e) {
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
        if (a === n) return Mi(l), e;
        if (a === r) return Mi(l), t;
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
function Sd(e) {
  return e = Wm(e), e !== null ? jd(e) : null;
}
function jd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bd = lt.unstable_scheduleCallback, Ii = lt.unstable_cancelCallback, $m = lt.unstable_shouldYield, Um = lt.unstable_requestPaint, Ce = lt.unstable_now, Vm = lt.unstable_getCurrentPriorityLevel, Eo = lt.unstable_ImmediatePriority, Ed = lt.unstable_UserBlockingPriority, Jl = lt.unstable_NormalPriority, Bm = lt.unstable_LowPriority, Cd = lt.unstable_IdlePriority, ks = null, Nt = null;
function Qm(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
    Nt.onCommitFiberRoot(ks, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var kt = Math.clz32 ? Math.clz32 : Gm, Hm = Math.log, Km = Math.LN2;
function Gm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Hm(e) / Km | 0) | 0;
}
var wl = 64, xl = 4194304;
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
function es(e, t) {
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
function qm(e, t) {
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
function Ym(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - kt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = qm(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Da(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Nd() {
  var e = wl;
  return wl <<= 1, !(wl & 4194240) && (wl = 64), e;
}
function Ks(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function il(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function Xm(e, t) {
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
var de = 0;
function Md(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Id, No, Td, Ld, Rd, Pa = !1, _l = [], nn = null, rn = null, ln = null, $r = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), Xt = [], Zm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ti(e, t) {
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
function Jm(e, t, n, r, l) {
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
function Dd(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = kd(n), t !== null) {
          e.blockedOn = t, Rd(e.priority, function() {
            Td(n);
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
function Fl(e) {
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
function Li(e, t, n) {
  Fl(e) && n.delete(t);
}
function eh() {
  Pa = !1, nn !== null && Fl(nn) && (nn = null), rn !== null && Fl(rn) && (rn = null), ln !== null && Fl(ln) && (ln = null), $r.forEach(Li), Ur.forEach(Li);
}
function wr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Pa || (Pa = !0, lt.unstable_scheduleCallback(lt.unstable_NormalPriority, eh)));
}
function Vr(e) {
  function t(l) {
    return wr(l, e);
  }
  if (0 < _l.length) {
    wr(_l[0], e);
    for (var n = 1; n < _l.length; n++) {
      var r = _l[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (nn !== null && wr(nn, e), rn !== null && wr(rn, e), ln !== null && wr(ln, e), $r.forEach(t), Ur.forEach(t), n = 0; n < Xt.length; n++) r = Xt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xt.length && (n = Xt[0], n.blockedOn === null); ) Dd(n), n.blockedOn === null && Xt.shift();
}
var er = Vt.ReactCurrentBatchConfig, ts = !0;
function th(e, t, n, r) {
  var l = de, a = er.transition;
  er.transition = null;
  try {
    de = 1, Mo(e, t, n, r);
  } finally {
    de = l, er.transition = a;
  }
}
function nh(e, t, n, r) {
  var l = de, a = er.transition;
  er.transition = null;
  try {
    de = 4, Mo(e, t, n, r);
  } finally {
    de = l, er.transition = a;
  }
}
function Mo(e, t, n, r) {
  if (ts) {
    var l = Oa(e, t, n, r);
    if (l === null) ra(e, t, r, ns, n), Ti(e, r);
    else if (Jm(l, e, t, n, r)) r.stopPropagation();
    else if (Ti(e, r), t & 4 && -1 < Zm.indexOf(e)) {
      for (; l !== null; ) {
        var a = dl(l);
        if (a !== null && Id(a), a = Oa(e, t, n, r), a === null && ra(e, t, r, ns, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else ra(e, t, r, null, n);
  }
}
var ns = null;
function Oa(e, t, n, r) {
  if (ns = null, e = bo(r), e = wn(e), e !== null) if (t = Tn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = kd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ns = e, null;
}
function Pd(e) {
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
      switch (Vm()) {
        case Eo:
          return 1;
        case Ed:
          return 4;
        case Jl:
        case Bm:
          return 16;
        case Cd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, Io = null, Wl = null;
function Od() {
  if (Wl) return Wl;
  var e, t = Io, n = t.length, r, l = "value" in en ? en.value : en.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return Wl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function $l(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function kl() {
  return !0;
}
function Ri() {
  return !1;
}
function at(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? kl : Ri, this.isPropagationStopped = Ri, this;
  }
  return je(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kl);
  }, persist: function() {
  }, isPersistent: kl }), t;
}
var fr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, To = at(fr), cl = je({}, fr, { view: 0, detail: 0 }), rh = at(cl), Gs, qs, xr, Ss = je({}, cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Lo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (Gs = e.screenX - xr.screenX, qs = e.screenY - xr.screenY) : qs = Gs = 0, xr = e), Gs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : qs;
} }), Di = at(Ss), lh = je({}, Ss, { dataTransfer: 0 }), sh = at(lh), ah = je({}, cl, { relatedTarget: 0 }), Ys = at(ah), oh = je({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ih = at(oh), ch = je({}, fr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), dh = at(ch), uh = je({}, fr, { data: 0 }), Pi = at(uh), fh = {
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
}, mh = {
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
}, hh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ph(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hh[e]) ? !!t[e] : !1;
}
function Lo() {
  return ph;
}
var gh = je({}, cl, { key: function(e) {
  if (e.key) {
    var t = fh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = $l(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Lo, charCode: function(e) {
  return e.type === "keypress" ? $l(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? $l(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), yh = at(gh), vh = je({}, Ss, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oi = at(vh), wh = je({}, cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Lo }), xh = at(wh), _h = je({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), kh = at(_h), Sh = je({}, Ss, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), jh = at(Sh), bh = [9, 13, 27, 32], Ro = zt && "CompositionEvent" in window, Tr = null;
zt && "documentMode" in document && (Tr = document.documentMode);
var Eh = zt && "TextEvent" in window && !Tr, Ad = zt && (!Ro || Tr && 8 < Tr && 11 >= Tr), Ai = " ", zi = !1;
function zd(e, t) {
  switch (e) {
    case "keyup":
      return bh.indexOf(t.keyCode) !== -1;
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
function Fd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var $n = !1;
function Ch(e, t) {
  switch (e) {
    case "compositionend":
      return Fd(t);
    case "keypress":
      return t.which !== 32 ? null : (zi = !0, Ai);
    case "textInput":
      return e = t.data, e === Ai && zi ? null : e;
    default:
      return null;
  }
}
function Nh(e, t) {
  if ($n) return e === "compositionend" || !Ro && zd(e, t) ? (e = Od(), Wl = Io = en = null, $n = !1, e) : null;
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
      return Ad && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Fi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mh[e.type] : t === "textarea";
}
function Wd(e, t, n, r) {
  yd(r), t = rs(t, "onChange"), 0 < t.length && (n = new To("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Lr = null, Br = null;
function Ih(e) {
  Xd(e, 0);
}
function js(e) {
  var t = Bn(e);
  if (dd(t)) return e;
}
function Th(e, t) {
  if (e === "change") return t;
}
var $d = !1;
if (zt) {
  var Xs;
  if (zt) {
    var Zs = "oninput" in document;
    if (!Zs) {
      var Wi = document.createElement("div");
      Wi.setAttribute("oninput", "return;"), Zs = typeof Wi.oninput == "function";
    }
    Xs = Zs;
  } else Xs = !1;
  $d = Xs && (!document.documentMode || 9 < document.documentMode);
}
function $i() {
  Lr && (Lr.detachEvent("onpropertychange", Ud), Br = Lr = null);
}
function Ud(e) {
  if (e.propertyName === "value" && js(Br)) {
    var t = [];
    Wd(t, Br, e, bo(e)), _d(Ih, t);
  }
}
function Lh(e, t, n) {
  e === "focusin" ? ($i(), Lr = t, Br = n, Lr.attachEvent("onpropertychange", Ud)) : e === "focusout" && $i();
}
function Rh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return js(Br);
}
function Dh(e, t) {
  if (e === "click") return js(t);
}
function Ph(e, t) {
  if (e === "input" || e === "change") return js(t);
}
function Oh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jt = typeof Object.is == "function" ? Object.is : Oh;
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
function Ui(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vi(e, t) {
  var n = Ui(e);
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
    n = Ui(n);
  }
}
function Vd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Bd() {
  for (var e = window, t = Yl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yl(e.document);
  }
  return t;
}
function Do(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ah(e) {
  var t = Bd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Vd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Do(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Vi(n, a);
        var o = Vi(
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
var zh = zt && "documentMode" in document && 11 >= document.documentMode, Un = null, Aa = null, Rr = null, za = !1;
function Bi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  za || Un == null || Un !== Yl(r) || (r = Un, "selectionStart" in r && Do(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Rr && Qr(Rr, r) || (Rr = r, r = rs(Aa, "onSelect"), 0 < r.length && (t = new To("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Un)));
}
function Sl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vn = { animationend: Sl("Animation", "AnimationEnd"), animationiteration: Sl("Animation", "AnimationIteration"), animationstart: Sl("Animation", "AnimationStart"), transitionend: Sl("Transition", "TransitionEnd") }, Js = {}, Qd = {};
zt && (Qd = document.createElement("div").style, "AnimationEvent" in window || (delete Vn.animationend.animation, delete Vn.animationiteration.animation, delete Vn.animationstart.animation), "TransitionEvent" in window || delete Vn.transitionend.transition);
function bs(e) {
  if (Js[e]) return Js[e];
  if (!Vn[e]) return e;
  var t = Vn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qd) return Js[e] = t[n];
  return e;
}
var Hd = bs("animationend"), Kd = bs("animationiteration"), Gd = bs("animationstart"), qd = bs("transitionend"), Yd = /* @__PURE__ */ new Map(), Qi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mn(e, t) {
  Yd.set(e, t), In(t, [e]);
}
for (var ea = 0; ea < Qi.length; ea++) {
  var ta = Qi[ea], Fh = ta.toLowerCase(), Wh = ta[0].toUpperCase() + ta.slice(1);
  mn(Fh, "on" + Wh);
}
mn(Hd, "onAnimationEnd");
mn(Kd, "onAnimationIteration");
mn(Gd, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(qd, "onTransitionEnd");
rr("onMouseEnter", ["mouseout", "mouseover"]);
rr("onMouseLeave", ["mouseout", "mouseover"]);
rr("onPointerEnter", ["pointerout", "pointerover"]);
rr("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $h = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
function Hi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Fm(r, t, void 0, e), e.currentTarget = null;
}
function Xd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Hi(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        Hi(l, i, d), a = c;
      }
    }
  }
  if (Zl) throw e = Ra, Zl = !1, Ra = null, e;
}
function ve(e, t) {
  var n = t[Va];
  n === void 0 && (n = t[Va] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Zd(t, e, 2, !1), n.add(r));
}
function na(e, t, n) {
  var r = 0;
  t && (r |= 4), Zd(n, e, r, t);
}
var jl = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
  if (!e[jl]) {
    e[jl] = !0, sd.forEach(function(n) {
      n !== "selectionchange" && ($h.has(n) || na(n, !1, e), na(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jl] || (t[jl] = !0, na("selectionchange", !1, t));
  }
}
function Zd(e, t, n, r) {
  switch (Pd(t)) {
    case 1:
      var l = th;
      break;
    case 4:
      l = nh;
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
  _d(function() {
    var d = a, m = bo(n), v = [];
    e: {
      var y = Yd.get(e);
      if (y !== void 0) {
        var S = To, w = e;
        switch (e) {
          case "keypress":
            if ($l(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = yh;
            break;
          case "focusin":
            w = "focus", S = Ys;
            break;
          case "focusout":
            w = "blur", S = Ys;
            break;
          case "beforeblur":
          case "afterblur":
            S = Ys;
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
            S = Di;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = sh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = xh;
            break;
          case Hd:
          case Kd:
          case Gd:
            S = ih;
            break;
          case qd:
            S = kh;
            break;
          case "scroll":
            S = rh;
            break;
          case "wheel":
            S = jh;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = dh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Oi;
        }
        var x = (t & 4) !== 0, _ = !x && e === "scroll", f = x ? y !== null ? y + "Capture" : null : y;
        x = [];
        for (var u = d, p; u !== null; ) {
          p = u;
          var g = p.stateNode;
          if (p.tag === 5 && g !== null && (p = g, f !== null && (g = Wr(u, f), g != null && x.push(Kr(u, g, p)))), _) break;
          u = u.return;
        }
        0 < x.length && (y = new S(y, w, null, n, m), v.push({ event: y, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", y && n !== Ia && (w = n.relatedTarget || n.fromElement) && (wn(w) || w[Ft])) break e;
        if ((S || y) && (y = m.window === m ? m : (y = m.ownerDocument) ? y.defaultView || y.parentWindow : window, S ? (w = n.relatedTarget || n.toElement, S = d, w = w ? wn(w) : null, w !== null && (_ = Tn(w), w !== _ || w.tag !== 5 && w.tag !== 6) && (w = null)) : (S = null, w = d), S !== w)) {
          if (x = Di, g = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (x = Oi, g = "onPointerLeave", f = "onPointerEnter", u = "pointer"), _ = S == null ? y : Bn(S), p = w == null ? y : Bn(w), y = new x(g, u + "leave", S, n, m), y.target = _, y.relatedTarget = p, g = null, wn(m) === d && (x = new x(f, u + "enter", w, n, m), x.target = p, x.relatedTarget = _, g = x), _ = g, S && w) t: {
            for (x = S, f = w, u = 0, p = x; p; p = An(p)) u++;
            for (p = 0, g = f; g; g = An(g)) p++;
            for (; 0 < u - p; ) x = An(x), u--;
            for (; 0 < p - u; ) f = An(f), p--;
            for (; u--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = An(x), f = An(f);
            }
            x = null;
          }
          else x = null;
          S !== null && Ki(v, y, S, x, !1), w !== null && _ !== null && Ki(v, _, w, x, !0);
        }
      }
      e: {
        if (y = d ? Bn(d) : window, S = y.nodeName && y.nodeName.toLowerCase(), S === "select" || S === "input" && y.type === "file") var j = Th;
        else if (Fi(y)) if ($d) j = Ph;
        else {
          j = Rh;
          var k = Lh;
        }
        else (S = y.nodeName) && S.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (j = Dh);
        if (j && (j = j(e, d))) {
          Wd(v, j, n, m);
          break e;
        }
        k && k(e, y, d), e === "focusout" && (k = y._wrapperState) && k.controlled && y.type === "number" && ba(y, "number", y.value);
      }
      switch (k = d ? Bn(d) : window, e) {
        case "focusin":
          (Fi(k) || k.contentEditable === "true") && (Un = k, Aa = d, Rr = null);
          break;
        case "focusout":
          Rr = Aa = Un = null;
          break;
        case "mousedown":
          za = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          za = !1, Bi(v, n, m);
          break;
        case "selectionchange":
          if (zh) break;
        case "keydown":
        case "keyup":
          Bi(v, n, m);
      }
      var b;
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
      else $n ? zd(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M && (Ad && n.locale !== "ko" && ($n || M !== "onCompositionStart" ? M === "onCompositionEnd" && $n && (b = Od()) : (en = m, Io = "value" in en ? en.value : en.textContent, $n = !0)), k = rs(d, M), 0 < k.length && (M = new Pi(M, e, null, n, m), v.push({ event: M, listeners: k }), b ? M.data = b : (b = Fd(n), b !== null && (M.data = b)))), (b = Eh ? Ch(e, n) : Nh(e, n)) && (d = rs(d, "onBeforeInput"), 0 < d.length && (m = new Pi("onBeforeInput", "beforeinput", null, n, m), v.push({ event: m, listeners: d }), m.data = b));
    }
    Xd(v, t);
  });
}
function Kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Wr(e, n), a != null && r.unshift(Kr(e, a, l)), a = Wr(e, t), a != null && r.push(Kr(e, a, l))), e = e.return;
  }
  return r;
}
function An(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ki(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Wr(n, a), c != null && o.unshift(Kr(n, c, i))) : l || (c = Wr(n, a), c != null && o.push(Kr(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Uh = /\r\n?/g, Vh = /\u0000|\uFFFD/g;
function Gi(e) {
  return (typeof e == "string" ? e : "" + e).replace(Uh, `
`).replace(Vh, "");
}
function bl(e, t, n) {
  if (t = Gi(t), Gi(e) !== t && n) throw Error($(425));
}
function ls() {
}
var Fa = null, Wa = null;
function $a(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ua = typeof setTimeout == "function" ? setTimeout : void 0, Bh = typeof clearTimeout == "function" ? clearTimeout : void 0, qi = typeof Promise == "function" ? Promise : void 0, Qh = typeof queueMicrotask == "function" ? queueMicrotask : typeof qi < "u" ? function(e) {
  return qi.resolve(null).then(e).catch(Hh);
} : Ua;
function Hh(e) {
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
function Yi(e) {
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
var mr = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + mr, Gr = "__reactProps$" + mr, Ft = "__reactContainer$" + mr, Va = "__reactEvents$" + mr, Kh = "__reactListeners$" + mr, Gh = "__reactHandles$" + mr;
function wn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[Ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Yi(e); e !== null; ) {
        if (n = e[Ct]) return n;
        e = Yi(e);
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
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function Es(e) {
  return e[Gr] || null;
}
var Ba = [], Qn = -1;
function hn(e) {
  return { current: e };
}
function we(e) {
  0 > Qn || (e.current = Ba[Qn], Ba[Qn] = null, Qn--);
}
function he(e, t) {
  Qn++, Ba[Qn] = e.current, e.current = t;
}
var fn = {}, $e = hn(fn), Xe = hn(!1), jn = fn;
function lr(e, t) {
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
function ss() {
  we(Xe), we($e);
}
function Xi(e, t, n) {
  if ($e.current !== fn) throw Error($(168));
  he($e, t), he(Xe, n);
}
function Jd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error($(108, Lm(e) || "Unknown", l));
  return je({}, n, r);
}
function as(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fn, jn = $e.current, he($e, e), he(Xe, Xe.current), !0;
}
function Zi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n ? (e = Jd(e, t, jn), r.__reactInternalMemoizedMergedChildContext = e, we(Xe), we($e), he($e, e)) : we(Xe), he(Xe, n);
}
var Dt = null, Cs = !1, sa = !1;
function eu(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function qh(e) {
  Cs = !0, eu(e);
}
function pn() {
  if (!sa && Dt !== null) {
    sa = !0;
    var e = 0, t = de;
    try {
      var n = Dt;
      for (de = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dt = null, Cs = !1;
    } catch (l) {
      throw Dt !== null && (Dt = Dt.slice(e + 1)), bd(Eo, pn), l;
    } finally {
      de = t, sa = !1;
    }
  }
  return null;
}
var Hn = [], Kn = 0, os = null, is = 0, ct = [], dt = 0, bn = null, Pt = 1, Ot = "";
function yn(e, t) {
  Hn[Kn++] = is, Hn[Kn++] = os, os = e, is = t;
}
function tu(e, t, n) {
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
  e.return !== null && (yn(e, 1), tu(e, 1, 0));
}
function Oo(e) {
  for (; e === os; ) os = Hn[--Kn], Hn[Kn] = null, is = Hn[--Kn], Hn[Kn] = null;
  for (; e === bn; ) bn = ct[--dt], ct[dt] = null, Ot = ct[--dt], ct[dt] = null, Pt = ct[--dt], ct[dt] = null;
}
var rt = null, nt = null, xe = !1, xt = null;
function nu(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ji(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = sn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bn !== null ? { id: Pt, overflow: Ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, rt = e, nt = null, !0) : !1;
    default:
      return !1;
  }
}
function Qa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ha(e) {
  if (xe) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Ji(e, t)) {
        if (Qa(e)) throw Error($(418));
        t = sn(n.nextSibling);
        var r = rt;
        t && Ji(e, t) ? nu(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, rt = e);
      }
    } else {
      if (Qa(e)) throw Error($(418));
      e.flags = e.flags & -4097 | 2, xe = !1, rt = e;
    }
  }
}
function ec(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  rt = e;
}
function El(e) {
  if (e !== rt) return !1;
  if (!xe) return ec(e), xe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps)), t && (t = nt)) {
    if (Qa(e)) throw ru(), Error($(418));
    for (; t; ) nu(e, t), t = sn(t.nextSibling);
  }
  if (ec(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = sn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function ru() {
  for (var e = nt; e; ) e = sn(e.nextSibling);
}
function sr() {
  nt = rt = null, xe = !1;
}
function Ao(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var Yh = Vt.ReactCurrentBatchConfig;
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
function Cl(e, t) {
  throw e = Object.prototype.toString.call(t), Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function tc(e) {
  var t = e._init;
  return t(e._payload);
}
function lu(e) {
  function t(f, u) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [u], f.flags |= 16) : p.push(u);
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
  function a(f, u, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < u ? (f.flags |= 2, u) : p) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, p, g) {
    return u === null || u.tag !== 6 ? (u = fa(p, f.mode, g), u.return = f, u) : (u = l(u, p), u.return = f, u);
  }
  function c(f, u, p, g) {
    var j = p.type;
    return j === Wn ? m(f, u, p.props.children, g, p.key) : u !== null && (u.elementType === j || typeof j == "object" && j !== null && j.$$typeof === qt && tc(j) === u.type) ? (g = l(u, p.props), g.ref = _r(f, u, p), g.return = f, g) : (g = Gl(p.type, p.key, p.props, null, f.mode, g), g.ref = _r(f, u, p), g.return = f, g);
  }
  function d(f, u, p, g) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== p.containerInfo || u.stateNode.implementation !== p.implementation ? (u = ma(p, f.mode, g), u.return = f, u) : (u = l(u, p.children || []), u.return = f, u);
  }
  function m(f, u, p, g, j) {
    return u === null || u.tag !== 7 ? (u = Sn(p, f.mode, g, j), u.return = f, u) : (u = l(u, p), u.return = f, u);
  }
  function v(f, u, p) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = fa("" + u, f.mode, p), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case gl:
          return p = Gl(u.type, u.key, u.props, null, f.mode, p), p.ref = _r(f, null, u), p.return = f, p;
        case Fn:
          return u = ma(u, f.mode, p), u.return = f, u;
        case qt:
          var g = u._init;
          return v(f, g(u._payload), p);
      }
      if (Er(u) || gr(u)) return u = Sn(u, f.mode, p, null), u.return = f, u;
      Cl(f, u);
    }
    return null;
  }
  function y(f, u, p, g) {
    var j = u !== null ? u.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return j !== null ? null : i(f, u, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case gl:
          return p.key === j ? c(f, u, p, g) : null;
        case Fn:
          return p.key === j ? d(f, u, p, g) : null;
        case qt:
          return j = p._init, y(
            f,
            u,
            j(p._payload),
            g
          );
      }
      if (Er(p) || gr(p)) return j !== null ? null : m(f, u, p, g, null);
      Cl(f, p);
    }
    return null;
  }
  function S(f, u, p, g, j) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(p) || null, i(u, f, "" + g, j);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case gl:
          return f = f.get(g.key === null ? p : g.key) || null, c(u, f, g, j);
        case Fn:
          return f = f.get(g.key === null ? p : g.key) || null, d(u, f, g, j);
        case qt:
          var k = g._init;
          return S(f, u, p, k(g._payload), j);
      }
      if (Er(g) || gr(g)) return f = f.get(p) || null, m(u, f, g, j, null);
      Cl(u, g);
    }
    return null;
  }
  function w(f, u, p, g) {
    for (var j = null, k = null, b = u, M = u = 0, P = null; b !== null && M < p.length; M++) {
      b.index > M ? (P = b, b = null) : P = b.sibling;
      var R = y(f, b, p[M], g);
      if (R === null) {
        b === null && (b = P);
        break;
      }
      e && b && R.alternate === null && t(f, b), u = a(R, u, M), k === null ? j = R : k.sibling = R, k = R, b = P;
    }
    if (M === p.length) return n(f, b), xe && yn(f, M), j;
    if (b === null) {
      for (; M < p.length; M++) b = v(f, p[M], g), b !== null && (u = a(b, u, M), k === null ? j = b : k.sibling = b, k = b);
      return xe && yn(f, M), j;
    }
    for (b = r(f, b); M < p.length; M++) P = S(b, f, M, p[M], g), P !== null && (e && P.alternate !== null && b.delete(P.key === null ? M : P.key), u = a(P, u, M), k === null ? j = P : k.sibling = P, k = P);
    return e && b.forEach(function(I) {
      return t(f, I);
    }), xe && yn(f, M), j;
  }
  function x(f, u, p, g) {
    var j = gr(p);
    if (typeof j != "function") throw Error($(150));
    if (p = j.call(p), p == null) throw Error($(151));
    for (var k = j = null, b = u, M = u = 0, P = null, R = p.next(); b !== null && !R.done; M++, R = p.next()) {
      b.index > M ? (P = b, b = null) : P = b.sibling;
      var I = y(f, b, R.value, g);
      if (I === null) {
        b === null && (b = P);
        break;
      }
      e && b && I.alternate === null && t(f, b), u = a(I, u, M), k === null ? j = I : k.sibling = I, k = I, b = P;
    }
    if (R.done) return n(
      f,
      b
    ), xe && yn(f, M), j;
    if (b === null) {
      for (; !R.done; M++, R = p.next()) R = v(f, R.value, g), R !== null && (u = a(R, u, M), k === null ? j = R : k.sibling = R, k = R);
      return xe && yn(f, M), j;
    }
    for (b = r(f, b); !R.done; M++, R = p.next()) R = S(b, f, M, R.value, g), R !== null && (e && R.alternate !== null && b.delete(R.key === null ? M : R.key), u = a(R, u, M), k === null ? j = R : k.sibling = R, k = R);
    return e && b.forEach(function(A) {
      return t(f, A);
    }), xe && yn(f, M), j;
  }
  function _(f, u, p, g) {
    if (typeof p == "object" && p !== null && p.type === Wn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case gl:
          e: {
            for (var j = p.key, k = u; k !== null; ) {
              if (k.key === j) {
                if (j = p.type, j === Wn) {
                  if (k.tag === 7) {
                    n(f, k.sibling), u = l(k, p.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (k.elementType === j || typeof j == "object" && j !== null && j.$$typeof === qt && tc(j) === k.type) {
                  n(f, k.sibling), u = l(k, p.props), u.ref = _r(f, k, p), u.return = f, f = u;
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            p.type === Wn ? (u = Sn(p.props.children, f.mode, g, p.key), u.return = f, f = u) : (g = Gl(p.type, p.key, p.props, null, f.mode, g), g.ref = _r(f, u, p), g.return = f, f = g);
          }
          return o(f);
        case Fn:
          e: {
            for (k = p.key; u !== null; ) {
              if (u.key === k) if (u.tag === 4 && u.stateNode.containerInfo === p.containerInfo && u.stateNode.implementation === p.implementation) {
                n(f, u.sibling), u = l(u, p.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = ma(p, f.mode, g), u.return = f, f = u;
          }
          return o(f);
        case qt:
          return k = p._init, _(f, u, k(p._payload), g);
      }
      if (Er(p)) return w(f, u, p, g);
      if (gr(p)) return x(f, u, p, g);
      Cl(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, u !== null && u.tag === 6 ? (n(f, u.sibling), u = l(u, p), u.return = f, f = u) : (n(f, u), u = fa(p, f.mode, g), u.return = f, f = u), o(f)) : n(f, u);
  }
  return _;
}
var ar = lu(!0), su = lu(!1), cs = hn(null), ds = null, Gn = null, zo = null;
function Fo() {
  zo = Gn = ds = null;
}
function Wo(e) {
  var t = cs.current;
  we(cs), e._currentValue = t;
}
function Ka(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function tr(e, t) {
  ds = e, zo = Gn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ye = !0), e.firstContext = null);
}
function ht(e) {
  var t = e._currentValue;
  if (zo !== e) if (e = { context: e, memoizedValue: t, next: null }, Gn === null) {
    if (ds === null) throw Error($(308));
    Gn = e, ds.dependencies = { lanes: 0, firstContext: e };
  } else Gn = Gn.next = e;
  return t;
}
var xn = null;
function $o(e) {
  xn === null ? xn = [e] : xn.push(e);
}
function au(e, t, n, r) {
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
function ou(e, t) {
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
function Ul(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Co(e, n);
  }
}
function nc(e, t) {
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
function us(e, t, n, r) {
  var l = e.updateQueue;
  Yt = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== o && (i === null ? m.firstBaseUpdate = d : i.next = d, m.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = l.baseState;
    o = 0, m = d = c = null, i = a;
    do {
      var y = i.lane, S = i.eventTime;
      if ((r & y) === y) {
        m !== null && (m = m.next = {
          eventTime: S,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, x = i;
          switch (y = t, S = n, x.tag) {
            case 1:
              if (w = x.payload, typeof w == "function") {
                v = w.call(S, v, y);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = x.payload, y = typeof w == "function" ? w.call(S, v, y) : w, y == null) break e;
              v = je({}, v, y);
              break e;
            case 2:
              Yt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, y = l.effects, y === null ? l.effects = [i] : y.push(i));
      } else S = { eventTime: S, lane: y, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (d = m = S, c = v) : m = m.next = S, o |= y;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        y = i, i = y.next, y.next = null, l.lastBaseUpdate = y, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (c = v), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    Cn |= o, e.lanes = o, e.memoizedState = v;
  }
}
function rc(e, t, n) {
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
function or() {
  we(Mt), we(qr), we(Yr);
}
function iu(e) {
  _n(Yr.current);
  var t = _n(Mt.current), n = Ca(t, e.type);
  t !== n && (he(qr, e), he(Mt, n));
}
function Bo(e) {
  qr.current === e && (we(Mt), we(qr));
}
var ke = hn(0);
function fs(e) {
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
var Vl = Vt.ReactCurrentDispatcher, oa = Vt.ReactCurrentBatchConfig, En = 0, Se = null, Ie = null, Re = null, ms = !1, Dr = !1, Xr = 0, Xh = 0;
function ze() {
  throw Error($(321));
}
function Ho(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!jt(e[n], t[n])) return !1;
  return !0;
}
function Ko(e, t, n, r, l, a) {
  if (En = a, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vl.current = e === null || e.memoizedState === null ? tp : np, e = n(r, l), Dr) {
    a = 0;
    do {
      if (Dr = !1, Xr = 0, 25 <= a) throw Error($(301));
      a += 1, Re = Ie = null, t.updateQueue = null, Vl.current = rp, e = n(r, l);
    } while (Dr);
  }
  if (Vl.current = hs, t = Ie !== null && Ie.next !== null, En = 0, Re = Ie = Se = null, ms = !1, t) throw Error($(300));
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
      var m = d.lane;
      if ((En & m) === m) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: m,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, Se.lanes |= m, Cn |= m;
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
function cu() {
}
function du(e, t) {
  var n = Se, r = pt(), l = t(), a = !jt(r.memoizedState, l);
  if (a && (r.memoizedState = l, Ye = !0), r = r.queue, qo(mu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Jr(9, fu.bind(null, n, r, l, t), void 0, null), De === null) throw Error($(349));
    En & 30 || uu(n, t, l);
  }
  return l;
}
function uu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function fu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, hu(t) && pu(e);
}
function mu(e, t, n) {
  return n(function() {
    hu(t) && pu(e);
  });
}
function hu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function pu(e) {
  var t = Wt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function lc(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ep.bind(null, Se, e), [t.memoizedState, e];
}
function Jr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function gu() {
  return pt().memoizedState;
}
function Bl(e, t, n, r) {
  var l = Et();
  Se.flags |= e, l.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ns(e, t, n, r) {
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
function sc(e, t) {
  return Bl(8390656, 8, e, t);
}
function qo(e, t) {
  return Ns(2048, 8, e, t);
}
function yu(e, t) {
  return Ns(4, 2, e, t);
}
function vu(e, t) {
  return Ns(4, 4, e, t);
}
function wu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function xu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ns(4, 4, wu.bind(null, t, e), n);
}
function Yo() {
}
function _u(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ku(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Su(e, t, n) {
  return En & 21 ? (jt(n, t) || (n = Nd(), Se.lanes |= n, Cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ye = !0), e.memoizedState = n);
}
function Zh(e, t) {
  var n = de;
  de = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = oa.transition;
  oa.transition = {};
  try {
    e(!1), t();
  } finally {
    de = n, oa.transition = r;
  }
}
function ju() {
  return pt().memoizedState;
}
function Jh(e, t, n) {
  var r = cn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, bu(e)) Eu(t, n);
  else if (n = au(e, t, n, r), n !== null) {
    var l = Be();
    St(n, e, r, l), Cu(n, t, r);
  }
}
function ep(e, t, n) {
  var r = cn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bu(e)) Eu(t, l);
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
    n = au(e, t, l, r), n !== null && (l = Be(), St(n, e, r, l), Cu(n, t, r));
  }
}
function bu(e) {
  var t = e.alternate;
  return e === Se || t !== null && t === Se;
}
function Eu(e, t) {
  Dr = ms = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Cu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Co(e, n);
  }
}
var hs = { readContext: ht, useCallback: ze, useContext: ze, useEffect: ze, useImperativeHandle: ze, useInsertionEffect: ze, useLayoutEffect: ze, useMemo: ze, useReducer: ze, useRef: ze, useState: ze, useDebugValue: ze, useDeferredValue: ze, useTransition: ze, useMutableSource: ze, useSyncExternalStore: ze, useId: ze, unstable_isNewReconciler: !1 }, tp = { readContext: ht, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ht, useEffect: sc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Bl(
    4194308,
    4,
    wu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Bl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Bl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Jh.bind(null, Se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: lc, useDebugValue: Yo, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = lc(!1), t = e[0];
  return e = Zh.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Se, l = Et();
  if (xe) {
    if (n === void 0) throw Error($(407));
    n = n();
  } else {
    if (n = t(), De === null) throw Error($(349));
    En & 30 || uu(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, sc(mu.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, Jr(9, fu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = De.identifierPrefix;
  if (xe) {
    var n = Ot, r = Pt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Xh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, np = {
  readContext: ht,
  useCallback: _u,
  useContext: ht,
  useEffect: qo,
  useImperativeHandle: xu,
  useInsertionEffect: yu,
  useLayoutEffect: vu,
  useMemo: ku,
  useReducer: ia,
  useRef: gu,
  useState: function() {
    return ia(Zr);
  },
  useDebugValue: Yo,
  useDeferredValue: function(e) {
    var t = pt();
    return Su(t, Ie.memoizedState, e);
  },
  useTransition: function() {
    var e = ia(Zr)[0], t = pt().memoizedState;
    return [e, t];
  },
  useMutableSource: cu,
  useSyncExternalStore: du,
  useId: ju,
  unstable_isNewReconciler: !1
}, rp = { readContext: ht, useCallback: _u, useContext: ht, useEffect: qo, useImperativeHandle: xu, useInsertionEffect: yu, useLayoutEffect: vu, useMemo: ku, useReducer: ca, useRef: gu, useState: function() {
  return ca(Zr);
}, useDebugValue: Yo, useDeferredValue: function(e) {
  var t = pt();
  return Ie === null ? t.memoizedState = e : Su(t, Ie.memoizedState, e);
}, useTransition: function() {
  var e = ca(Zr)[0], t = pt().memoizedState;
  return [e, t];
}, useMutableSource: cu, useSyncExternalStore: du, useId: ju, unstable_isNewReconciler: !1 };
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
var Ms = { isMounted: function(e) {
  return (e = e._reactInternals) ? Tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), l = cn(e), a = At(r, l);
  a.payload = t, n != null && (a.callback = n), t = an(e, a, l), t !== null && (St(t, e, l, r), Ul(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Be(), l = cn(e), a = At(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = an(e, a, l), t !== null && (St(t, e, l, r), Ul(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Be(), r = cn(e), l = At(n, r);
  l.tag = 2, t != null && (l.callback = t), t = an(e, l, r), t !== null && (St(t, e, r, n), Ul(t, e, r));
} };
function ac(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Qr(n, r) || !Qr(l, a) : !0;
}
function Nu(e, t, n) {
  var r = !1, l = fn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = ht(a) : (l = Ze(t) ? jn : $e.current, r = t.contextTypes, a = (r = r != null) ? lr(e, l) : fn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ms, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function oc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ms.enqueueReplaceState(t, t.state, null);
}
function qa(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Uo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = ht(a) : (a = Ze(t) ? jn : $e.current, l.context = lr(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Ga(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ms.enqueueReplaceState(l, l.state, null), us(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ir(e, t) {
  try {
    var n = "", r = t;
    do
      n += Tm(r), r = r.return;
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
var lp = typeof WeakMap == "function" ? WeakMap : Map;
function Mu(e, t, n) {
  n = At(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    gs || (gs = !0, ao = r), Ya(e, t);
  }, n;
}
function Iu(e, t, n) {
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
function ic(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lp();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = vp.bind(null, e, t, n), t.then(e, e));
}
function cc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dc(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = At(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e);
}
var sp = Vt.ReactCurrentOwner, Ye = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? su(t, null, n, r) : ar(t, e.child, n, r);
}
function uc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return tr(t, l), r = Ko(e, t, n, r, a, l), n = Go(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (xe && n && Po(t), t.flags |= 1, Ve(e, t, r, l), t.child);
}
function fc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !li(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Tu(e, t, a, r, l)) : (e = Gl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Qr, n(o, r) && e.ref === t.ref) return $t(e, t, l);
  }
  return t.flags |= 1, e = dn(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Tu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Qr(a, r) && e.ref === t.ref) if (Ye = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ye = !0);
    else return t.lanes = e.lanes, $t(e, t, l);
  }
  return Xa(e, t, n, r, l);
}
function Lu(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, he(Yn, tt), tt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, he(Yn, tt), tt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, he(Yn, tt), tt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, he(Yn, tt), tt |= r;
  return Ve(e, t, l, n), t.child;
}
function Ru(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Xa(e, t, n, r, l) {
  var a = Ze(n) ? jn : $e.current;
  return a = lr(t, a), tr(t, l), n = Ko(e, t, n, r, a, l), r = Go(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (xe && r && Po(t), t.flags |= 1, Ve(e, t, n, l), t.child);
}
function mc(e, t, n, r, l) {
  if (Ze(n)) {
    var a = !0;
    as(t);
  } else a = !1;
  if (tr(t, l), t.stateNode === null) Ql(e, t), Nu(t, n, r), qa(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = ht(d) : (d = Ze(n) ? jn : $e.current, d = lr(t, d));
    var m = n.getDerivedStateFromProps, v = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && oc(t, o, r, d), Yt = !1;
    var y = t.memoizedState;
    o.state = y, us(t, r, o, l), c = t.memoizedState, i !== r || y !== c || Xe.current || Yt ? (typeof m == "function" && (Ga(t, n, m, r), c = t.memoizedState), (i = Yt || ac(t, n, i, r, y, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, ou(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : vt(t.type, i), o.props = d, v = t.pendingProps, y = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = ht(c) : (c = Ze(n) ? jn : $e.current, c = lr(t, c));
    var S = n.getDerivedStateFromProps;
    (m = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || y !== c) && oc(t, o, r, c), Yt = !1, y = t.memoizedState, o.state = y, us(t, r, o, l);
    var w = t.memoizedState;
    i !== v || y !== w || Xe.current || Yt ? (typeof S == "function" && (Ga(t, n, S, r), w = t.memoizedState), (d = Yt || ac(t, n, d, r, y, w, c) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Za(e, t, n, r, a, l);
}
function Za(e, t, n, r, l, a) {
  Ru(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Zi(t, n, !1), $t(e, t, a);
  r = t.stateNode, sp.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ar(t, e.child, null, a), t.child = ar(t, null, i, a)) : Ve(e, t, i, a), t.memoizedState = r.state, l && Zi(t, n, !0), t.child;
}
function Du(e) {
  var t = e.stateNode;
  t.pendingContext ? Xi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xi(e, t.context, !1), Vo(e, t.containerInfo);
}
function hc(e, t, n, r, l) {
  return sr(), Ao(l), t.flags |= 256, Ve(e, t, n, r), t.child;
}
var Ja = { dehydrated: null, treeContext: null, retryLane: 0 };
function eo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pu(e, t, n) {
  var r = t.pendingProps, l = ke.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), he(ke, l & 1), e === null)
    return Ha(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Ls(o, r, 0, null), e = Sn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = eo(n), t.memoizedState = Ja, e) : Xo(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return ap(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = dn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = dn(i, a) : (a = Sn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? eo(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Ja, r;
  }
  return a = e.child, e = a.sibling, r = dn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Xo(e, t) {
  return t = Ls({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Nl(e, t, n, r) {
  return r !== null && Ao(r), ar(t, e.child, null, n), e = Xo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ap(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = da(Error($(422))), Nl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Ls({ mode: "visible", children: r.children }, l, 0, null), a = Sn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && ar(t, e.child, null, o), t.child.memoizedState = eo(o), t.memoizedState = Ja, a);
  if (!(t.mode & 1)) return Nl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error($(419)), r = da(a, r, void 0), Nl(e, t, o, r);
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
    return ri(), r = da(Error($(421))), Nl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = wp.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, nt = sn(l.nextSibling), rt = t, xe = !0, xt = null, e !== null && (ct[dt++] = Pt, ct[dt++] = Ot, ct[dt++] = bn, Pt = e.id, Ot = e.overflow, bn = t), t = Xo(t, r.children), t.flags |= 4096, t);
}
function pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ka(e.return, t, n);
}
function ua(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Ou(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Ve(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && pc(e, n, t);
      else if (e.tag === 19) pc(e, n, t);
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
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && fs(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ua(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && fs(e) === null) {
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
function Ql(e, t) {
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
function op(e, t, n) {
  switch (t.tag) {
    case 3:
      Du(t), sr();
      break;
    case 5:
      iu(t);
      break;
    case 1:
      Ze(t.type) && as(t);
      break;
    case 4:
      Vo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      he(cs, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (he(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Pu(e, t, n) : (he(ke, ke.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      he(ke, ke.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ou(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), he(ke, ke.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Lu(e, t, n);
  }
  return $t(e, t, n);
}
var Au, to, zu, Fu;
Au = function(e, t) {
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
zu = function(e, t, n, r) {
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
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ls);
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
Fu = function(e, t, n, r) {
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
function ip(e, t, n) {
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
      return Ze(t.type) && ss(), Fe(t), null;
    case 3:
      return r = t.stateNode, or(), we(Xe), we($e), Qo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (El(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (co(xt), xt = null))), to(e, t), Fe(t), null;
    case 5:
      Bo(t);
      var l = _n(Yr.current);
      if (n = t.type, e !== null && t.stateNode != null) zu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Fe(t), null;
        }
        if (e = _n(Mt.current), El(t)) {
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
              ji(r, a), ve("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ve("invalid", r);
              break;
            case "textarea":
              Ei(r, a), ve("invalid", r);
          }
          Na(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && bl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && bl(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : zr.hasOwnProperty(o) && i != null && o === "onScroll" && ve("scroll", r);
          }
          switch (n) {
            case "input":
              yl(r), bi(r, a, !0);
              break;
            case "textarea":
              yl(r), Ci(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = ls);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = md(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ct] = t, e[Gr] = r, Au(e, t, !1, !1), t.stateNode = e;
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
                ji(e, r), l = Sa(e, r), ve("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = je({}, r, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                Ei(e, r), l = Ea(e, r), ve("invalid", e);
                break;
              default:
                l = r;
            }
            Na(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? gd(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && hd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Fr(e, c) : typeof c == "number" && Fr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (zr.hasOwnProperty(a) ? c != null && a === "onScroll" && ve("scroll", e) : c != null && _o(e, a, c, o));
            }
            switch (n) {
              case "input":
                yl(e), bi(e, r, !1);
                break;
              case "textarea":
                yl(e), Ci(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Xn(e, !!r.multiple, a, !1) : r.defaultValue != null && Xn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ls);
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
      if (e && t.stateNode != null) Fu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (n = _n(Yr.current), _n(Mt.current), El(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (a = r.nodeValue !== n) && (e = rt, e !== null)) switch (e.tag) {
            case 3:
              bl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && bl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return Fe(t), null;
    case 13:
      if (we(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (xe && nt !== null && t.mode & 1 && !(t.flags & 128)) ru(), sr(), t.flags |= 98560, a = !1;
        else if (a = El(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error($(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error($(317));
            a[Ct] = t;
          } else sr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Fe(t), a = !1;
        } else xt !== null && (co(xt), xt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Te === 0 && (Te = 3) : ri())), t.updateQueue !== null && (t.flags |= 4), Fe(t), null);
    case 4:
      return or(), to(e, t), e === null && Hr(t.stateNode.containerInfo), Fe(t), null;
    case 10:
      return Wo(t.type._context), Fe(t), null;
    case 17:
      return Ze(t.type) && ss(), Fe(t), null;
    case 19:
      if (we(ke), a = t.memoizedState, a === null) return Fe(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) kr(a, !1);
      else {
        if (Te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = fs(e), o !== null) {
            for (t.flags |= 128, kr(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return he(ke, ke.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ce() > cr && (t.flags |= 128, r = !0, kr(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = fs(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !xe) return Fe(t), null;
        } else 2 * Ce() - a.renderingStartTime > cr && n !== 1073741824 && (t.flags |= 128, r = !0, kr(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ce(), t.sibling = null, n = ke.current, he(ke, r ? n & 1 | 2 : n & 1), t) : (Fe(t), null);
    case 22:
    case 23:
      return ni(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? tt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function cp(e, t) {
  switch (Oo(t), t.tag) {
    case 1:
      return Ze(t.type) && ss(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return or(), we(Xe), we($e), Qo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Bo(t), null;
    case 13:
      if (we(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error($(340));
        sr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return we(ke), null;
    case 4:
      return or(), null;
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
var Ml = !1, We = !1, dp = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function qn(e, t) {
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
var gc = !1;
function up(e, t) {
  if (Fa = ts, e = Bd(), Do(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, m = 0, v = e, y = null;
        t: for (; ; ) {
          for (var S; v !== n || l !== 0 && v.nodeType !== 3 || (i = o + l), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (S = v.firstChild) !== null; )
            y = v, v = S;
          for (; ; ) {
            if (v === e) break t;
            if (y === n && ++d === l && (i = o), y === a && ++m === r && (c = o), (S = v.nextSibling) !== null) break;
            v = y, y = v.parentNode;
          }
          v = S;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wa = { focusedElem: e, selectionRange: n }, ts = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
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
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
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
  return w = gc, gc = !1, w;
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
function Is(e, t) {
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
function Wu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Wu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Gr], delete t[Va], delete t[Kh], delete t[Gh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $u(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || $u(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ls));
  else if (r !== 4 && (e = e.child, e !== null)) for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), e = e.sibling;
}
function so(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), e = e.sibling;
}
var Pe = null, wt = !1;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) Uu(e, t, n), n = n.sibling;
}
function Uu(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
    Nt.onCommitFiberUnmount(ks, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      We || qn(n, t);
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
      if (!We && (qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
function vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dp()), t.forEach(function(r) {
      var l = xp.bind(null, e, r);
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
      Uu(a, o, l), Pe = null, wt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ee(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Vu(t, e), t = t.sibling;
}
function Vu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (yt(t, e), bt(e), r & 4) {
        try {
          Pr(3, e, e.return), Is(3, e);
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
      yt(t, e), bt(e), r & 512 && n !== null && qn(n, n.return);
      break;
    case 5:
      if (yt(t, e), bt(e), r & 512 && n !== null && qn(n, n.return), e.flags & 32) {
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
          i === "input" && a.type === "radio" && a.name != null && ud(l, a), Ma(i, o);
          var d = Ma(i, a);
          for (o = 0; o < c.length; o += 2) {
            var m = c[o], v = c[o + 1];
            m === "style" ? gd(l, v) : m === "dangerouslySetInnerHTML" ? hd(l, v) : m === "children" ? Fr(l, v) : _o(l, m, v, d);
          }
          switch (i) {
            case "input":
              ja(l, a);
              break;
            case "textarea":
              fd(l, a);
              break;
            case "select":
              var y = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var S = a.value;
              S != null ? Xn(l, !!a.multiple, S, !1) : y !== !!a.multiple && (a.defaultValue != null ? Xn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Xn(l, !!a.multiple, a.multiple ? [] : "", !1));
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
      yt(t, e), bt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (ei = Ce())), r & 4 && vc(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (We = (d = We) || m, yt(t, e), We = d) : yt(t, e), bt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (G = e, m = e.child; m !== null; ) {
          for (v = G = m; G !== null; ) {
            switch (y = G, S = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pr(4, y, y.return);
                break;
              case 1:
                qn(y, y.return);
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
                qn(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  xc(v);
                  continue;
                }
            }
            S !== null ? (S.return = y, G = S) : xc(v);
          }
          m = m.sibling;
        }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                l = v.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = pd("display", o));
              } catch (x) {
                Ee(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (m === null) try {
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
            m === v && (m = null), v = v.return;
          }
          m === v && (m = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      yt(t, e), bt(e), r & 4 && vc(e);
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
          if ($u(n)) {
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
          var a = yc(e);
          so(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = yc(e);
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
function fp(e, t, n) {
  G = e, Bu(e);
}
function Bu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var l = G, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Ml;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || We;
        i = Ml;
        var d = We;
        if (Ml = o, (We = c) && !d) for (G = l; G !== null; ) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null ? _c(l) : c !== null ? (c.return = o, G = c) : _c(l);
        for (; a !== null; ) G = a, Bu(a), a = a.sibling;
        G = l, Ml = i, We = d;
      }
      wc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, G = a) : wc(e);
  }
}
function wc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            We || Is(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !We) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && rc(t, a, r);
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
              rc(t, o, n);
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
                  var v = m.dehydrated;
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
function xc(e) {
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
function _c(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Is(4, t);
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
var mp = Math.ceil, ps = Vt.ReactCurrentDispatcher, Zo = Vt.ReactCurrentOwner, ft = Vt.ReactCurrentBatchConfig, ae = 0, De = null, Me = null, Oe = 0, tt = 0, Yn = hn(0), Te = 0, el = null, Cn = 0, Ts = 0, Jo = 0, Or = null, Ge = null, ei = 0, cr = 1 / 0, Rt = null, gs = !1, ao = null, on = null, Il = !1, tn = null, ys = 0, Ar = 0, oo = null, Hl = -1, Kl = 0;
function Be() {
  return ae & 6 ? Ce() : Hl !== -1 ? Hl : Hl = Ce();
}
function cn(e) {
  return e.mode & 1 ? ae & 2 && Oe !== 0 ? Oe & -Oe : Yh.transition !== null ? (Kl === 0 && (Kl = Nd()), Kl) : (e = de, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Pd(e.type)), e) : 1;
}
function St(e, t, n, r) {
  if (50 < Ar) throw Ar = 0, oo = null, Error($(185));
  il(e, n, r), (!(ae & 2) || e !== De) && (e === De && (!(ae & 2) && (Ts |= n), Te === 4 && Zt(e, Oe)), Je(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (cr = Ce() + 500, Cs && pn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  Ym(e, t);
  var r = es(e, e === De ? Oe : 0);
  if (r === 0) n !== null && Ii(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ii(n), t === 1) e.tag === 0 ? qh(kc.bind(null, e)) : eu(kc.bind(null, e)), Qh(function() {
      !(ae & 6) && pn();
    }), n = null;
    else {
      switch (Md(r)) {
        case 1:
          n = Eo;
          break;
        case 4:
          n = Ed;
          break;
        case 16:
          n = Jl;
          break;
        case 536870912:
          n = Cd;
          break;
        default:
          n = Jl;
      }
      n = Zu(n, Qu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Qu(e, t) {
  if (Hl = -1, Kl = 0, ae & 6) throw Error($(327));
  var n = e.callbackNode;
  if (nr() && e.callbackNode !== n) return null;
  var r = es(e, e === De ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vs(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = Ku();
    (De !== e || Oe !== t) && (Rt = null, cr = Ce() + 500, kn(e, t));
    do
      try {
        gp();
        break;
      } catch (i) {
        Hu(e, i);
      }
    while (!0);
    Fo(), ps.current = a, ae = l, Me !== null ? t = 0 : (De = null, Oe = 0, t = Te);
  }
  if (t !== 0) {
    if (t === 2 && (l = Da(e), l !== 0 && (r = l, t = io(e, l))), t === 1) throw n = el, kn(e, 0), Zt(e, r), Je(e, Ce()), n;
    if (t === 6) Zt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !hp(l) && (t = vs(e, r), t === 2 && (a = Da(e), a !== 0 && (r = a, t = io(e, a))), t === 1)) throw n = el, kn(e, 0), Zt(e, r), Je(e, Ce()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          vn(e, Ge, Rt);
          break;
        case 3:
          if (Zt(e, r), (r & 130023424) === r && (t = ei + 500 - Ce(), 10 < t)) {
            if (es(e, 0) !== 0) break;
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
          if (r = l, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * mp(r / 1960)) - r, 10 < r) {
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
  return Je(e, Ce()), e.callbackNode === n ? Qu.bind(null, e) : null;
}
function io(e, t) {
  var n = Or;
  return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = vs(e, t), e !== 2 && (t = Ge, Ge = n, t !== null && co(t)), e;
}
function co(e) {
  Ge === null ? Ge = e : Ge.push.apply(Ge, e);
}
function hp(e) {
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
  for (t &= ~Jo, t &= ~Ts, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function kc(e) {
  if (ae & 6) throw Error($(327));
  nr();
  var t = es(e, 0);
  if (!(t & 1)) return Je(e, Ce()), null;
  var n = vs(e, t);
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
    ae = n, ae === 0 && (cr = Ce() + 500, Cs && pn());
  }
}
function Nn(e) {
  tn !== null && tn.tag === 0 && !(ae & 6) && nr();
  var t = ae;
  ae |= 1;
  var n = ft.transition, r = de;
  try {
    if (ft.transition = null, de = 1, e) return e();
  } finally {
    de = r, ft.transition = n, ae = t, !(ae & 6) && pn();
  }
}
function ni() {
  tt = Yn.current, we(Yn);
}
function kn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Bh(n)), Me !== null) for (n = Me.return; n !== null; ) {
    var r = n;
    switch (Oo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ss();
        break;
      case 3:
        or(), we(Xe), we($e), Qo();
        break;
      case 5:
        Bo(r);
        break;
      case 4:
        or();
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
  if (De = e, Me = e = dn(e.current, null), Oe = tt = t, Te = 0, el = null, Jo = Ts = Cn = 0, Ge = Or = null, xn !== null) {
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
function Hu(e, t) {
  do {
    var n = Me;
    try {
      if (Fo(), Vl.current = hs, ms) {
        for (var r = Se.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ms = !1;
      }
      if (En = 0, Re = Ie = Se = null, Dr = !1, Xr = 0, Zo.current = null, n === null || n.return === null) {
        Te = 1, el = t, Me = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = Oe, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, m = i, v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var y = m.alternate;
            y ? (m.updateQueue = y.updateQueue, m.memoizedState = y.memoizedState, m.lanes = y.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var S = cc(o);
          if (S !== null) {
            S.flags &= -257, dc(S, o, i, a, t), S.mode & 1 && ic(a, d, t), t = S, c = d;
            var w = t.updateQueue;
            if (w === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(c), t.updateQueue = x;
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              ic(a, d, t), ri();
              break e;
            }
            c = Error($(426));
          }
        } else if (xe && i.mode & 1) {
          var _ = cc(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), dc(_, o, i, a, t), Ao(ir(c, i));
            break e;
          }
        }
        a = c = ir(c, i), Te !== 4 && (Te = 2), Or === null ? Or = [a] : Or.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Mu(a, c, t);
              nc(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, p = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (on === null || !on.has(p)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var g = Iu(a, i, t);
                nc(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      qu(n);
    } catch (j) {
      t = j, Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ku() {
  var e = ps.current;
  return ps.current = hs, e === null ? hs : e;
}
function ri() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4), De === null || !(Cn & 268435455) && !(Ts & 268435455) || Zt(De, Oe);
}
function vs(e, t) {
  var n = ae;
  ae |= 2;
  var r = Ku();
  (De !== e || Oe !== t) && (Rt = null, kn(e, t));
  do
    try {
      pp();
      break;
    } catch (l) {
      Hu(e, l);
    }
  while (!0);
  if (Fo(), ae = n, ps.current = r, Me !== null) throw Error($(261));
  return De = null, Oe = 0, Te;
}
function pp() {
  for (; Me !== null; ) Gu(Me);
}
function gp() {
  for (; Me !== null && !$m(); ) Gu(Me);
}
function Gu(e) {
  var t = Xu(e.alternate, e, tt);
  e.memoizedProps = e.pendingProps, t === null ? qu(e) : Me = t, Zo.current = null;
}
function qu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = cp(n, t), n !== null) {
        n.flags &= 32767, Me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Te = 6, Me = null;
        return;
      }
    } else if (n = ip(n, t, tt), n !== null) {
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
  var r = de, l = ft.transition;
  try {
    ft.transition = null, de = 1, yp(e, t, n, r);
  } finally {
    ft.transition = l, de = r;
  }
  return null;
}
function yp(e, t, n, r) {
  do
    nr();
  while (tn !== null);
  if (ae & 6) throw Error($(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error($(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (Xm(e, a), e === De && (Me = De = null, Oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Il || (Il = !0, Zu(Jl, function() {
    return nr(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = de;
    de = 1;
    var i = ae;
    ae |= 4, Zo.current = null, up(e, n), Vu(n, e), Ah(Wa), ts = !!Fa, Wa = Fa = null, e.current = n, fp(n), Um(), ae = i, de = o, ft.transition = a;
  } else e.current = n;
  if (Il && (Il = !1, tn = e, ys = l), a = e.pendingLanes, a === 0 && (on = null), Qm(n.stateNode), Je(e, Ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (gs) throw gs = !1, e = ao, ao = null, e;
  return ys & 1 && e.tag !== 0 && nr(), a = e.pendingLanes, a & 1 ? e === oo ? Ar++ : (Ar = 0, oo = e) : Ar = 0, pn(), null;
}
function nr() {
  if (tn !== null) {
    var e = Md(ys), t = ft.transition, n = de;
    try {
      if (ft.transition = null, de = 16 > e ? 16 : e, tn === null) var r = !1;
      else {
        if (e = tn, tn = null, ys = 0, ae & 6) throw Error($(331));
        var l = ae;
        for (ae |= 4, G = e.current; G !== null; ) {
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
                      Pr(8, m, a);
                  }
                  var v = m.child;
                  if (v !== null) v.return = m, G = v;
                  else for (; G !== null; ) {
                    m = G;
                    var y = m.sibling, S = m.return;
                    if (Wu(m), m === d) {
                      G = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = S, G = y;
                      break;
                    }
                    G = S;
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
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, G = p;
          else e: for (o = u; G !== null; ) {
            if (i = G, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Is(9, i);
              }
            } catch (j) {
              Ee(i, i.return, j);
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
          Nt.onPostCommitFiberRoot(ks, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      de = n, ft.transition = t;
    }
  }
  return !1;
}
function Sc(e, t, n) {
  t = ir(n, t), t = Mu(e, t, 1), e = an(e, t, 1), t = Be(), e !== null && (il(e, 1, t), Je(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Sc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (on === null || !on.has(r))) {
        e = ir(n, e), e = Iu(t, e, 1), t = an(t, e, 1), e = Be(), t !== null && (il(t, 1, e), Je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function vp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Be(), e.pingedLanes |= e.suspendedLanes & n, De === e && (Oe & n) === n && (Te === 4 || Te === 3 && (Oe & 130023424) === Oe && 500 > Ce() - ei ? kn(e, 0) : Jo |= n), Je(e, t);
}
function Yu(e, t) {
  t === 0 && (e.mode & 1 ? (t = xl, xl <<= 1, !(xl & 130023424) && (xl = 4194304)) : t = 1);
  var n = Be();
  e = Wt(e, t), e !== null && (il(e, t, n), Je(e, n));
}
function wp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Yu(e, n);
}
function xp(e, t) {
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
  r !== null && r.delete(t), Yu(e, n);
}
var Xu;
Xu = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) Ye = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ye = !1, op(e, t, n);
    Ye = !!(e.flags & 131072);
  }
  else Ye = !1, xe && t.flags & 1048576 && tu(t, is, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ql(e, t), e = t.pendingProps;
      var l = lr(t, $e.current);
      tr(t, n), l = Ko(null, t, r, e, l, n);
      var a = Go();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ze(r) ? (a = !0, as(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Uo(t), l.updater = Ms, t.stateNode = l, l._reactInternals = t, qa(t, r, e, n), t = Za(null, t, r, !0, a, n)) : (t.tag = 0, xe && a && Po(t), Ve(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ql(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = kp(r), e = vt(r, e), l) {
          case 0:
            t = Xa(null, t, r, e, n);
            break e;
          case 1:
            t = mc(null, t, r, e, n);
            break e;
          case 11:
            t = uc(null, t, r, e, n);
            break e;
          case 14:
            t = fc(null, t, r, vt(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), mc(e, t, r, l, n);
    case 3:
      e: {
        if (Du(t), e === null) throw Error($(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, ou(e, t), us(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = ir(Error($(423)), t), t = hc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = ir(Error($(424)), t), t = hc(e, t, r, n, l);
          break e;
        } else for (nt = sn(t.stateNode.containerInfo.firstChild), rt = t, xe = !0, xt = null, n = su(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (sr(), r === l) {
            t = $t(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return iu(t), e === null && Ha(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, $a(r, l) ? o = null : a !== null && $a(r, a) && (t.flags |= 32), Ru(e, t), Ve(e, t, o, n), t.child;
    case 6:
      return e === null && Ha(t), null;
    case 13:
      return Pu(e, t, n);
    case 4:
      return Vo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : Ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), uc(e, t, r, l, n);
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, he(cs, r._currentValue), r._currentValue = o, a !== null) if (jt(a.value, o)) {
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
                    var m = d.pending;
                    m === null ? c.next = c : (c.next = m.next, m.next = c), d.pending = c;
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
      return l = t.type, r = t.pendingProps.children, tr(t, n), l = ht(l), r = r(l), t.flags |= 1, Ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = vt(r, t.pendingProps), l = vt(r.type, l), fc(e, t, r, l, n);
    case 15:
      return Tu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Ql(e, t), t.tag = 1, Ze(r) ? (e = !0, as(t)) : e = !1, tr(t, n), Nu(t, r, l), qa(t, r, l, n), Za(null, t, r, !0, e, n);
    case 19:
      return Ou(e, t, n);
    case 22:
      return Lu(e, t, n);
  }
  throw Error($(156, t.tag));
};
function Zu(e, t) {
  return bd(e, t);
}
function _p(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new _p(e, t, n, r);
}
function li(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function kp(e) {
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
function Gl(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") li(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Wn:
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
    case id:
      return Ls(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ad:
          o = 10;
          break e;
        case od:
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
function Ls(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = id, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function fa(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function ma(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Sp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ks(0), this.expirationTimes = Ks(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ks(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function si(e, t, n, r, l, a, o, i, c) {
  return e = new Sp(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Uo(a), e;
}
function jp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ju(e) {
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
    if (Ze(n)) return Jd(e, n, t);
  }
  return t;
}
function ef(e, t, n, r, l, a, o, i, c) {
  return e = si(n, r, !0, e, l, a, o, i, c), e.context = Ju(null), n = e.current, r = Be(), l = cn(n), a = At(r, l), a.callback = t ?? null, an(n, a, l), e.current.lanes = l, il(e, l, r), Je(e, r), e;
}
function Rs(e, t, n, r) {
  var l = t.current, a = Be(), o = cn(l);
  return n = Ju(n), t.context === null ? t.context = n : t.pendingContext = n, t = At(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(l, t, o), e !== null && (St(e, l, o, a), Ul(e, l, o)), o;
}
function ws(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ai(e, t) {
  jc(e, t), (e = e.alternate) && jc(e, t);
}
function bp() {
  return null;
}
var tf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function oi(e) {
  this._internalRoot = e;
}
Ds.prototype.render = oi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  Rs(e, t, null, null);
};
Ds.prototype.unmount = oi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function() {
      Rs(null, e, null, null);
    }), t[Ft] = null;
  }
};
function Ds(e) {
  this._internalRoot = e;
}
Ds.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ld();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++) ;
    Xt.splice(n, 0, e), n === 0 && Dd(e);
  }
};
function ii(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ps(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function bc() {
}
function Ep(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = ws(o);
        a.call(d);
      };
    }
    var o = ef(t, r, e, 0, null, !1, !1, "", bc);
    return e._reactRootContainer = o, e[Ft] = o.current, Hr(e.nodeType === 8 ? e.parentNode : e), Nn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = ws(c);
      i.call(d);
    };
  }
  var c = si(e, 0, !1, null, null, !1, !1, "", bc);
  return e._reactRootContainer = c, e[Ft] = c.current, Hr(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
    Rs(t, c, n, r);
  }), c;
}
function Os(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = ws(o);
        i.call(c);
      };
    }
    Rs(t, o, e, l);
  } else o = Ep(n, t, e, l, r);
  return ws(o);
}
Id = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cr(t.pendingLanes);
        n !== 0 && (Co(t, n | 1), Je(t, Ce()), !(ae & 6) && (cr = Ce() + 500, pn()));
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
Td = function(e) {
  if (e.tag === 13) {
    var t = cn(e), n = Wt(e, t);
    if (n !== null) {
      var r = Be();
      St(n, e, t, r);
    }
    ai(e, t);
  }
};
Ld = function() {
  return de;
};
Rd = function(e, t) {
  var n = de;
  try {
    return de = e, t();
  } finally {
    de = n;
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
            var l = Es(r);
            if (!l) throw Error($(90));
            dd(r), ja(r, l);
          }
        }
      }
      break;
    case "textarea":
      fd(e, n);
      break;
    case "select":
      t = n.value, t != null && Xn(e, !!n.multiple, t, !1);
  }
};
wd = ti;
xd = Nn;
var Cp = { usingClientEntryPoint: !1, Events: [dl, Bn, Es, yd, vd, ti] }, Sr = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Np = { bundleType: Sr.bundleType, version: Sr.version, rendererPackageName: Sr.rendererPackageName, rendererConfig: Sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Sd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Sr.findFiberByHostInstance || bp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tl.isDisabled && Tl.supportsFiber) try {
    ks = Tl.inject(Np), Nt = Tl;
  } catch {
  }
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cp;
st.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ii(t)) throw Error($(200));
  return jp(e, t, null, n);
};
st.createRoot = function(e, t) {
  if (!ii(e)) throw Error($(299));
  var n = !1, r = "", l = tf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = si(e, 1, !1, null, null, n, !1, r, l), e[Ft] = t.current, Hr(e.nodeType === 8 ? e.parentNode : e), new oi(t);
};
st.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error($(188)) : (e = Object.keys(e).join(","), Error($(268, e)));
  return e = Sd(t), e = e === null ? null : e.stateNode, e;
};
st.flushSync = function(e) {
  return Nn(e);
};
st.hydrate = function(e, t, n) {
  if (!Ps(t)) throw Error($(200));
  return Os(null, e, t, !0, n);
};
st.hydrateRoot = function(e, t, n) {
  if (!ii(e)) throw Error($(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = tf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ef(t, null, e, 1, n ?? null, l, !1, a, o), e[Ft] = t.current, Hr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ds(t);
};
st.render = function(e, t, n) {
  if (!Ps(t)) throw Error($(200));
  return Os(null, e, t, !1, n);
};
st.unmountComponentAtNode = function(e) {
  if (!Ps(e)) throw Error($(40));
  return e._reactRootContainer ? (Nn(function() {
    Os(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
st.unstable_batchedUpdates = ti;
st.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ps(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return Os(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function nf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nf);
    } catch (e) {
      console.error(e);
    }
}
nf(), nd.exports = st;
var ce = nd.exports, rf, Ec = ce;
rf = Ec.createRoot, Ec.hydrateRoot;
var lf = { exports: {} }, As = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mp = h, Ip = Symbol.for("react.element"), Tp = Symbol.for("react.fragment"), Lp = Object.prototype.hasOwnProperty, Rp = Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function sf(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Lp.call(t, r) && !Dp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Ip, type: e, key: a, ref: o, props: l, _owner: Rp.current };
}
As.Fragment = Tp;
As.jsx = sf;
As.jsxs = sf;
lf.exports = As;
var s = lf.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pp = {
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
const Op = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Z = (e, t) => {
  const n = h.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, m) => h.createElement(
      "svg",
      {
        ref: m,
        ...Pp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Op(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, y]) => h.createElement(v, y)),
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
const af = Z("AlertCircle", [
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
const Ap = Z("AlertTriangle", [
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
const of = Z("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = Z("ArrowUpDown", [
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
const cf = Z("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = Z("Box", [
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
const Wp = Z("Calendar", [
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
const $p = Z("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = Z("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = Z("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = Z("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = Z("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = Z("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = Z("Download", [
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
const Qp = Z("Eraser", [
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
const ui = Z("FileJson", [
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
const Hp = Z("FileText", [
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
const Kp = Z("Folder", [
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
const Gp = Z("Info", [
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
const qp = Z("Lasso", [
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
const uf = Z("LayoutGrid", [
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
const Yp = Z("LayoutList", [
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
const Xp = Z("Link2Off", [
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
const Zp = Z("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cc = Z("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = Z("Maximize", [
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
const eg = Z("Menu", [
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
const tg = Z("Minimize", [
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
const ng = Z("MoreVertical", [
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
const rg = Z("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff = Z("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = Z("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = Z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = Z("RefreshCw", [
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
const lg = Z("ScanLine", [
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
const Mn = Z("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mf = Z("Settings", [
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
const hf = Z("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = Z("Star", [
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
const sg = Z("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = Z("Tag", [
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
const Ut = Z("Trash2", [
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
const ag = Z("Trash", [
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
const og = Z("Type", [
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
const ig = Z("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = Z("Upload", [
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
const dg = Z("Workflow", [
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
const pe = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ug = Z("ZoomIn", [
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
const fg = Z("ZoomOut", [
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
const mg = async () => {
  const e = await te.fetchApi("/meld/home-dir");
  return (await le(e)).home;
}, Ue = ({
  onEscape: e,
  enabled: t = !0,
  capture: n = !0
}) => {
  h.useEffect(() => {
    if (!t) return;
    const r = (l) => {
      l.key === "Escape" && (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation(), e());
    };
    return window.addEventListener("keydown", r, { capture: n }), () => window.removeEventListener("keydown", r, { capture: n });
  }, [e, t, n]);
};
let xs = !1;
const hg = (e) => {
  xs = e, xs && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, pg = (...e) => {
  xs && console.log("[Meld]", ...e);
}, gg = (...e) => {
  xs && console.warn("[Meld]", ...e);
}, yg = (...e) => {
  console.error("[Meld]", ...e);
}, H = {
  log: pg,
  warn: gg,
  error: yg,
  init: hg
}, ql = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return le(a);
}, pf = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return le(t);
}, vg = async (e, t = !1) => {
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
}, gf = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return le(t);
}, Nc = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await le(n);
}, wg = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(
    `/meld/suggest-parents?id=${e}${n}`
  );
  try {
    return await le(r);
  } catch {
    return [];
  }
}, fi = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await le(t);
  } catch {
    return [];
  }
}, xg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await le(n);
}, _g = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return le(n);
}, yf = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await le(r);
}, kg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return le(t);
}, Sg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return le(t);
}, jg = async (e, t) => {
  const n = await te.fetchApi("/meld/api/download/zip", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, removeMetadata: t })
  });
  if (!n.ok)
    throw new Error("Failed to download ZIP");
  const r = await n.blob(), l = window.URL.createObjectURL(r), a = document.createElement("a");
  a.href = l, a.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(l), document.body.removeChild(a);
}, bg = async (e, t) => {
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
}, Eg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return le(r);
}, Cg = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return le(e);
}, Ng = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return le(e);
}, Mg = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return le(e);
}, Ig = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return le(e);
}, Tg = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await le(n);
}, Mc = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await le(t);
}, Lg = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await le(r);
}, Rg = {
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
}, vf = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await le(t);
  } catch (t) {
    return console.error("Failed to fetch settings, using defaults", t), Rg;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Dg = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await le(n);
}, Pg = async () => {
  const e = await te.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return le(e);
};
function jr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const Og = (e, t) => {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = jr(
        e.images.filter((o) => !n.has(o.id))
      ), l = jr(
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
function wf(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const Ag = (e, t) => {
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
      const n = t.payload, r = wf(n);
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
}, zg = (e, t) => {
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
      const n = e.images.findIndex(
        (i) => i.id === e.lastSelectedId
      ), r = e.images.findIndex(
        (i) => i.id === t.payload
      );
      if (n === -1 || r === -1)
        return e;
      const [l, a] = [
        Math.min(n, r),
        Math.max(n, r)
      ], o = new Set(e.selectedIds);
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
}, Fg = (e, t) => {
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
function Ic(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const Wg = (e, t) => {
  var n, r, l, a, o;
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !i.some((m) => m.id === c)) {
        const m = e.images.find((v) => v.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        m ? d = m : c = null;
      }
      return {
        ...e,
        viewerImageId: c,
        viewerFallbackImage: d
      };
    }
    case "OPEN_VIEWER": {
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, m = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, v = wf(i), y = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((S) => S.id === c);
      return {
        ...e,
        viewerImageId: c,
        viewerMode: d,
        viewerLightTableSlotId: m,
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Ic(
        e,
        (l = t.payload) == null ? void 0 : l.currentList
      );
      if (e.viewerImageId === null || d.length === 0)
        return e;
      const m = d.findIndex(
        (S) => S.id === e.viewerImageId
      );
      if (m === -1 || m === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || m === d.length - 1 && !c)
        return e;
      const v = (m + 1) % d.length, y = d[v];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Ic(
        e,
        (o = t.payload) == null ? void 0 : o.currentList
      );
      if (e.viewerImageId === null || d.length === 0)
        return e;
      const m = d.findIndex(
        (S) => S.id === e.viewerImageId
      );
      if (m === -1 || m === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || m === 0 && !c)
        return e;
      const v = (m - 1 + d.length) % d.length, y = d[v];
      return y ? {
        ...e,
        viewerImageId: y.id
      } : e;
    }
    default:
      return e;
  }
}, $g = [
  Wg,
  Og,
  zg,
  Ag,
  Fg
];
function Ug(e, t) {
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
  } : $g.reduce((n, r) => r(n, t), e);
}
const Vg = {
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
function Bg(e, t) {
  return Ug(e, t);
}
const xf = h.createContext(void 0), Qg = ({
  children: e
}) => {
  const [t, n] = h.useReducer(Bg, Vg), r = h.useRef(t.images.length), l = h.useRef(0), a = h.useRef(/* @__PURE__ */ new Map());
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = h.useCallback(
    async (w, x, _) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let p = w;
      for (; p < Math.min(x, f) && _ === l.current; )
        try {
          const g = Math.min(u, f - p);
          H.log("Background fetch: starting chunk", {
            offset: p,
            limit: g
          });
          const j = await ql(
            p,
            g,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: j }), p += j.images.length, j.images.length === 0 || p >= j.total))
            break;
          await new Promise((k) => setTimeout(k, 300));
        } catch (g) {
          H.error("Background fetch failed", g);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now(), x = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      H.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await ql(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), p = performance.now() - w;
      H.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, x);
    } catch (_) {
      H.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [
    t.searchQuery,
    t.viewScope,
    t.settings,
    o
  ]), c = h.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now();
    try {
      const x = r.current, _ = t.searchQuery.trim() !== "", f = t.pagination.limit;
      H.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: f,
        isSearch: _
      });
      const u = await ql(
        x,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), p = performance.now() - w;
      H.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: p.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (x) {
      H.error("loadMoreImages: fetch failed", x), n({
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
  ]), d = h.useCallback(async () => {
    try {
      const w = await Ig();
      n({ type: "SET_FAVORITES", payload: w });
    } catch (w) {
      H.error("Failed to load favorites", w);
    }
  }, []), m = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds), _ = t.images.filter(
      (f) => t.selectedIds.has(f.id)
    ).some(
      (f) => f.parent_id || f.has_children
    );
    n({
      type: "OPEN_MODAL",
      payload: {
        type: "delete_confirm",
        imageIds: w,
        hasLineage: _,
        isPermanent: t.viewScope === "trash"
      }
    });
  }, [t.selectedIds, t.images, t.viewScope]), v = h.useCallback(async () => {
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
  }, [t.selectedIds, t.viewScope]), y = h.useCallback(
    async (w, x) => {
      try {
        await Dg(w, x), n({ type: "SET_SETTINGS", payload: { [w]: x } });
      } catch (_) {
        n({
          type: "SET_ERROR",
          payload: _ instanceof Error ? _.message : String(_)
        });
      }
    },
    []
  ), S = h.useCallback(
    async (w) => {
      const x = t.images.find((p) => p.id === w);
      if (x && !x.is_minimal)
        return x;
      const _ = t.lineageImages.find((p) => p.id === w);
      if (_ && !_.is_minimal)
        return _;
      const f = a.current.get(w);
      if (f)
        return f;
      const u = (async () => {
        try {
          H.log("fetchFullImageDetails: fetching full data", { id: w });
          const p = await pf(w);
          return n({ type: "UPDATE_IMAGE", payload: p }), p;
        } finally {
          a.current.delete(w);
        }
      })();
      return a.current.set(w, u), u;
    },
    [t.images, t.lineageImages]
  );
  return h.useEffect(() => {
    (async () => {
      try {
        const x = await vf();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        H.error("Failed to load settings", x);
      }
    })();
  }, []), h.useEffect(() => {
    d();
  }, [d]), h.useEffect(() => {
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
  }, [i, t.scanStatus.progress.total]), h.useEffect(() => {
    i();
  }, [i]), /* @__PURE__ */ s.jsx(
    xf.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: m,
        restoreSelected: v,
        updateSetting: y,
        fetchFullImageDetails: S
      },
      children: e
    }
  );
}, ge = () => {
  const e = h.useContext(xf);
  if (e === void 0)
    throw new Error("useGallery must be used within a GalleryProvider");
  return e;
}, mt = (e, t = 200) => {
  if (!e.filename) return "";
  const n = encodeURIComponent, r = n(e.type || "output"), l = n(e.subfolder ?? "");
  return `/api/meld/view-thumb?${`filename=${n(e.filename)}&type=${r}&subfolder=${l}&size=${t}`}`;
}, mi = (e) => {
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
}, hi = async () => {
  const e = await te.fetchApi("/meld/tags");
  return le(e);
}, Hg = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return le(t);
}, Kg = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await le(t);
}, Gg = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await le(n);
}, qg = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  });
  if (!n.ok)
    throw new Error("Failed to upload image");
  return await n.json();
}, Yg = async (e, t, n = !1, r) => {
  const l = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await le(l);
  } catch (a) {
    return console.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, Xg = async (e, t, n, r) => {
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
}, Zg = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await le(r)).count;
  } catch {
    return 0;
  }
}, Jg = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await le(t);
}, ey = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await le(e);
}, _f = () => {
  const { dispatch: e } = ge(), [t, n] = h.useState(() => {
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
  h.useEffect(() => {
    const { tags: C, ...V } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(V));
  }, [t]);
  const [r, l] = h.useState([]), [a, o] = h.useState([]), [i, c] = h.useState(0), [d, m] = h.useState(!1), [v, y] = h.useState([]), [S, w] = h.useState(""), [x, _] = h.useState(!1), [f, u] = h.useState(null), p = h.useRef(!1), g = (C) => {
    C.target === C.currentTarget && (p.current = !0);
  }, j = (C) => {
    C.target === C.currentTarget && p.current && e({ type: "CLOSE_MODAL" }), p.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const V = await mg();
        n((D) => D.custom_path ? D : { ...D, custom_path: V });
      } catch (V) {
        H.error("Failed to fetch home directory:", V);
      }
    })();
  }, []), h.useEffect(() => {
    const C = new AbortController();
    return (async () => {
      const D = t.type === "custom" ? t.custom_path : t.subfolder;
      if (H.log(
        `loadFolders started. Path: "${D}", Type: "${t.type}"`
      ), t.type === "custom" && !D) {
        H.log("Custom path is empty, skipping load."), l([]), o([]), c(0);
        return;
      }
      m(!0);
      const L = D, N = t.type;
      try {
        H.log("Step 1: Fast load starting...");
        const T = await Yg(
          t.type,
          D,
          !0,
          C.signal
        );
        if (C.signal.aborted) {
          H.log("Step 1: Aborted.");
          return;
        }
        H.log(
          `Step 1 complete. Found ${T.folders.length} folders, ${T.images.length} images.`
        ), l(T.folders), o(T.images), c(null);
        const F = T.folders.map((E) => E.name);
        F.length > 0 && (H.log(
          `Step 2: Metadata fetch starting for ${F.length} folders...`
        ), Xg(
          N,
          L,
          F,
          C.signal
        ).then((E) => {
          if (C.signal.aborted) {
            H.log("Step 2: Aborted.");
            return;
          }
          H.log("Step 2: Metadata fetch complete."), l(
            (z) => z.map((U) => {
              const O = E[U.name];
              return O ? { ...U, count: O.count, preview: O.preview } : U;
            })
          );
        }).catch((E) => {
          E.name !== "AbortError" && H.error("Step 2: Metadata fetch failed:", E);
        })), H.log("Step 3: Path image count starting..."), Zg(N, L, C.signal).then((E) => {
          if (C.signal.aborted) {
            H.log("Step 3: Aborted.");
            return;
          }
          H.log(`Step 3: Path image count complete: ${E}`), c(E);
        }).catch((E) => {
          E.name !== "AbortError" && H.error("Step 3: Path image count failed:", E);
        });
      } catch (T) {
        if (T.name === "AbortError") {
          H.log("Request aborted.");
          return;
        }
        H.error("Failed to load folders:", T), l([]), o([]), c(0);
      } finally {
        C.signal.aborted || m(!1);
      }
    })(), () => {
      C.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const k = h.useCallback(async () => {
    _(!0);
    try {
      const C = await hi();
      y(C);
    } catch (C) {
      H.error("Failed to fetch tags:", C);
    } finally {
      _(!1);
    }
  }, []);
  h.useEffect(() => {
    k();
  }, [k]), Ue({
    onEscape: h.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const b = h.useMemo(() => v.filter(
    (C) => C.name.toLowerCase().includes(S.toLowerCase()) && !t.tags.includes(C.name)
  ), [v, S, t.tags]), M = (C) => {
    const V = C.trim();
    V && !t.tags.includes(V) && (n({ ...t, tags: [...t.tags, V] }), w(""));
  }, P = (C) => {
    n({ ...t, tags: t.tags.filter((V) => V !== C) });
  }, R = (C) => {
    C.key === "Enter" && S.trim() && (C.preventDefault(), M(S.trim()));
  }, I = async () => {
    try {
      await Jg(t), e({
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
      H.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, A = (C) => {
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
  return ce.createPortal(
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: j,
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
                            onClick: () => P(C),
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
                            value: S,
                            onChange: (C) => w(C.target.value),
                            onKeyDown: R
                          }
                        ),
                        S.trim() && !t.tags.includes(S.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => M(S),
                            children: /* @__PURE__ */ s.jsx(zs, { size: 14 })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: x ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : b.length === 0 ? S && /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-suggestions-empty", children: [
                        "New tag: ",
                        S
                      ] }) : b.map((C) => /* @__PURE__ */ s.jsx(
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
                            /* @__PURE__ */ s.jsx(df, { size: 16 }),
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
                          onClick: () => A(C.name),
                          children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-folder-icon-wrapper", children: C.preview ? /* @__PURE__ */ s.jsx(
                              "img",
                              {
                                className: "meld-folder-preview",
                                src: mt(C.preview, 64),
                                alt: ""
                              }
                            ) : /* @__PURE__ */ s.jsx(Kp, { size: 16 }) }),
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
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-import-preview-content",
                  onClick: (C) => C.stopPropagation(),
                  children: [
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
                      /* @__PURE__ */ s.jsx(
                        "img",
                        {
                          src: mt(f, 400),
                          alt: f.filename
                        }
                      )
                    ] }),
                    /* @__PURE__ */ s.jsx("div", { className: "meld-import-preview-info", children: f.filename })
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
}, ty = ({
  imageIds: e,
  onSuccess: t,
  onClose: n
}) => {
  const [r, l] = h.useState("zip"), [a, o] = h.useState(!1), [i, c] = h.useState(!1), d = h.useRef(!1), m = (S) => {
    S.target === S.currentTarget && (d.current = !0);
  }, v = (S) => {
    S.target === S.currentTarget && d.current && (i || n()), d.current = !1;
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
        await jg(e, a);
      else
        for (const S of e)
          await bg(S, a), await new Promise((w) => setTimeout(w, 200));
      n(), t == null || t();
    } catch (S) {
      console.error("Download failed:", S), alert("Failed to download images.");
    } finally {
      c(!1);
    }
  };
  return ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: v,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (S) => S.stopPropagation(), children: [
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
                        onChange: (S) => o(S.target.checked),
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
}, Tc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, m) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const y = t;
      t = m ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((S) => S(t, y));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, ny = (e) => e ? Tc(e) : Tc, ry = (e) => e;
function ly(e, t = ry) {
  const n = Jt.useSyncExternalStore(
    e.subscribe,
    Jt.useCallback(() => t(e.getState()), [e, t]),
    Jt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Jt.useDebugValue(n), n;
}
const sy = (e) => {
  const t = ny(e), n = (r) => ly(t, r);
  return Object.assign(n, t), n;
}, ay = (e) => sy;
function oy(e, t) {
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
}, iy = (e, t) => (n, r, l) => {
  let a = {
    storage: oy(() => window.localStorage),
    partialize: (_) => _,
    version: 0,
    merge: (_, f) => ({
      ...f,
      ..._
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let m = a.storage;
  if (!m)
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
    return m.setItem(a.name, {
      state: _,
      version: a.version
    });
  }, y = l.setState;
  l.setState = (_, f) => (y(_, f), v());
  const S = e(
    (..._) => (n(..._), v()),
    r,
    l
  );
  l.getInitialState = () => S;
  let w;
  const x = () => {
    var _, f;
    if (!m) return;
    const u = ++i;
    o = !1, c.forEach((g) => {
      var j;
      return g((j = r()) != null ? j : S);
    });
    const p = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (_ = r()) != null ? _ : S)) || void 0;
    return fo(m.getItem.bind(m))(a.name).then((g) => {
      if (g)
        if (typeof g.version == "number" && g.version !== a.version) {
          if (a.migrate) {
            const j = a.migrate(
              g.state,
              g.version
            );
            return j instanceof Promise ? j.then((k) => [!0, k]) : [!0, j];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, g.state];
      return [!1, void 0];
    }).then((g) => {
      var j;
      if (u !== i)
        return;
      const [k, b] = g;
      if (w = a.merge(
        b,
        (j = r()) != null ? j : S
      ), n(w, !0), k)
        return v();
    }).then(() => {
      u === i && (p == null || p(w, void 0), w = r(), o = !0, d.forEach((g) => g(w)));
    }).catch((g) => {
      u === i && (p == null || p(void 0, g));
    });
  };
  return l.persist = {
    setOptions: (_) => {
      a = {
        ...a,
        ..._
      }, _.storage && (m = _.storage);
    },
    clearStorage: () => {
      m == null || m.removeItem(a.name);
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
  }, a.skipHydration || x(), w || S;
}, cy = iy, dy = [
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
let Ll = null;
const se = ay()(
  cy(
    (e) => ({
      isOpen: !1,
      slots: dy,
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
          const m = d.filter((v) => !l.has(v));
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
      showToast: (t, n = "info") => {
        Ll && clearTimeout(Ll), e({ toastMessage: t, toastType: n }), Ll = setTimeout(() => {
          e({ toastMessage: null }), Ll = null;
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
), kf = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return le(e);
}, Sf = async (e) => {
  const t = await te.fetchApi(
    `/meld/workflow/raw?name=${encodeURIComponent(e)}`
  );
  return le(t);
}, pi = () => ({ executeWorkflow: h.useCallback(
  async (t, n, r, l) => {
    var S, w, x, _, f, u, p;
    H.log("[Meld] executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await Sf(t);
    H.log("[Meld] Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    const d = (g) => {
      if (!g) return !1;
      const j = g.replace(/\s+/g, "");
      return j === "MeldImageLoader" || j === "LoadImage";
    };
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const j = a.nodes.find(
          (k) => d(k.type)
        );
        j && (o = String(j.id));
      }
      const g = a.nodes.find(
        (j) => {
          var k;
          return ((k = j.type) == null ? void 0 : k.replace(/\s+/g, "")) === "LoadImageMask";
        }
      );
      g && (i = String(g.id));
    } else {
      if (!o)
        for (const g in a) {
          const j = a[g];
          if (d(j.class_type)) {
            o = g;
            break;
          }
        }
      for (const g in a)
        if (((S = a[g].class_type) == null ? void 0 : S.replace(/\s+/g, "")) === "LoadImageMask") {
          i = g;
          break;
        }
    }
    if (H.log("[Meld] Node IDs found:", {
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
      const g = window.app, j = t.replace(/\.json$/i, "");
      let k = !1;
      const b = document.querySelectorAll(".workflow-tab");
      for (const R of Array.from(b)) {
        const I = R.querySelector(".workflow-label"), A = ((w = I == null ? void 0 : I.textContent) == null ? void 0 : w.trim()) || ((x = R.textContent) == null ? void 0 : x.trim()) || "";
        if (A === j || A === t || A.startsWith(`${j} `) || A.startsWith(`${j}•`)) {
          R.click(), k = !0;
          break;
        }
      }
      k || await g.loadGraphData(a, !0, !0, t), await new Promise((R) => setTimeout(R, 200));
      const M = g.graph._nodes;
      H.log("[Meld] Active graph nodes count:", M.length);
      const P = M.find(
        (R) => String(R.id) === o || d(R.type)
      );
      if (P) {
        const R = (_ = P.widgets) == null ? void 0 : _.find((I) => I.name === "image");
        H.log("[Meld] Updating loader node widget:", {
          nodeId: P.id,
          type: P.type,
          imagePath: m
        }), R && (R.value = m, typeof R.callback == "function" && R.callback(m));
      } else
        console.warn(
          "[Meld] Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const R = M.find(
          (I) => {
            var A;
            return String(I.id) === i || ((A = I.type) == null ? void 0 : A.replace(/\s+/g, "")) === "LoadImageMask";
          }
        );
        if (H.log("[Meld] Updating mask node widget:", {
          nodeId: R == null ? void 0 : R.id,
          maskFilename: r
        }), R) {
          const I = (f = R.widgets) == null ? void 0 : f.find(
            (B) => B.name === "image"
          );
          I && (I.value = `${r} [temp]`);
          const A = (u = R.widgets) == null ? void 0 : u.find(
            (B) => B.name === "channel"
          );
          A && (A.value = "red");
        } else
          console.warn(
            "[Meld] LoadImageMask not found in active graph after loading"
          );
      }
      g.graph.setDirtyCanvas(!0, !0);
      try {
        await g.queuePrompt(0);
        return;
      } catch (R) {
        throw console.error("Failed to queue workflow:", R), new Error(
          "Failed to queue workflow. Check the console for details."
        );
      }
    }
    const v = JSON.parse(JSON.stringify(a));
    v[o].inputs.image = m, r && i && (v[i].inputs.image = `${r} [temp]`, v[i].inputs.channel = "red");
    const y = await te.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: v,
        client_id: te.clientId
      })
    });
    if (!y.ok) {
      const g = await y.json();
      throw new Error(((p = g.error) == null ? void 0 : p.message) || "Failed to queue workflow");
    }
    return await y.json();
  },
  []
) });
function uy(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function ll(e, t) {
  var c, d;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  const r = uy(e), l = (m) => {
    if (!m) return !1;
    const v = m.replace(/\s+/g, "").toLowerCase();
    return v === "meldimageloader" || v === "loadimage";
  }, a = n.graph._nodes.filter(
    (m) => l(m.type)
  );
  if (a.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let o = a[0];
  if (t) {
    const m = a.find(
      (v) => String(v.id) === t
    );
    m && (o = m);
  }
  const i = o.widgets.find(
    (m) => m.name === "image"
  );
  return i && (i.value = r, typeof i.callback == "function" && i.callback(r)), (d = (c = n.graph).afterChange) == null || d.call(c), n.graph.setDirtyCanvas(!0, !0), { ok: !0 };
}
const fy = () => {
  const { dispatch: e } = ge();
  return { injectMaskToGraph: h.useCallback(
    (n, r) => {
      var m, v;
      H.log("[Meld-Debug] injectMaskToGraph called with:", r), ll(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return H.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      const a = l.graph._nodes.filter(
        (y) => y.type === "LoadImageMask"
      );
      if (a.length === 0)
        return H.log(
          "[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"
        ), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0], i = o.widgets.find(
        (y) => y.name === "image"
      ), c = `${r} [temp]`;
      H.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find(
        (y) => y.name === "channel"
      );
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (m = l.graph).afterChange) == null || v.call(m), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Rl(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function my(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = mo(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let m = 0; m < r * l; m++)
    d[m] = c.data[m * 4] > 128 ? 255 : 0;
  return { ...e, data: d };
}
function mo(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c], m = c * 4;
    d > 0 ? (i[m] = t[0], i[m + 1] = t[1], i[m + 2] = t[2], i[m + 3] = n) : (i[m] = 0, i[m + 1] = 0, i[m + 2] = 0, i[m + 3] = 0);
  }
  return o;
}
function hy(e) {
  return e.data.every((t) => t === 0);
}
const Lc = (e) => e === "rect" || e === "ellipse" || e === "lasso", _s = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = ge(), i = h.useMemo(() => a.images.find((W) => W.id === e) ?? a.lineageImages.find((W) => W.id === e) ?? se.getState().images[String(e)], [a.images, a.lineageImages, e]), c = h.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: m } = fy(), { executeWorkflow: v } = pi();
  Ue({ onEscape: l });
  const y = h.useRef(null), S = h.useRef(null), w = h.useRef(null), x = h.useRef(null), [_, f] = h.useState(!1), [u, p] = h.useState(() => {
    const W = localStorage.getItem("meld-mask-tool");
    return Lc(W) ? W : "rect";
  });
  h.useEffect(() => {
    Lc(u) && localStorage.setItem("meld-mask-tool", u);
  }, [u]);
  const [g, j] = h.useState({ x: 0, y: 0 }), [k, b] = h.useState({ x: 0, y: 0 }), [M, P] = h.useState([]), [R, I] = h.useState(null), [A, B] = h.useState(!1), [C, V] = h.useState(1), [D, L] = h.useState({ x: 0, y: 0 }), [N, T] = h.useState(!1), [F, E] = h.useState(!1), z = h.useRef(null), U = h.useCallback(() => {
    const W = w.current, Q = S.current;
    if (!W || !Q) return null;
    const ee = Q.getBoundingClientRect(), q = W.naturalWidth, ne = W.naturalHeight;
    if (!q || !ne) return null;
    const ie = q / ne, Ne = ee.width / ee.height;
    let me, _e, ye = 0, et = 0;
    return ie > Ne ? (me = ee.width, _e = ee.width / ie, et = (ee.height - _e) / 2) : (_e = ee.height, me = ee.height * ie, ye = (ee.width - me) / 2), {
      left: ye,
      top: et,
      width: me,
      height: _e
    };
  }, []), O = h.useCallback(
    (W, Q, ee, q) => {
      if (!W) return Q;
      const ne = W.getBoundingClientRect(), ie = ne.width / 2, Ne = ne.height / 2, me = {
        x: (ie - Q.x) / ee,
        y: (Ne - Q.y) / ee
      };
      return { x: ie - me.x * q, y: Ne - me.y * q };
    },
    []
  ), K = h.useCallback(() => {
    V((W) => {
      const Q = Math.min(W * 1.2, 20);
      return L(
        (ee) => O(S.current, ee, W, Q)
      ), Q;
    });
  }, [O]), J = h.useCallback(() => {
    V((W) => {
      const Q = Math.max(0.1, W / 1.2);
      return L(
        (ee) => O(S.current, ee, W, Q)
      ), Q;
    });
  }, [O]), oe = h.useCallback(() => {
    const W = y.current;
    if (!W) return;
    const Q = W.getContext("2d");
    if (!Q) return;
    Q.clearRect(0, 0, W.width, W.height);
    const ee = getComputedStyle(document.documentElement), q = ee.getPropertyValue("--comfy-input-bg-active") || ee.getPropertyValue("--comfy-input-bg") || ee.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", ne = U();
    if (x.current && ne && (Q.save(), Q.globalAlpha = 0.5, Q.drawImage(
      x.current,
      ne.left,
      ne.top,
      ne.width,
      ne.height
    ), Q.restore()), _) {
      const ie = Math.min(g.x, k.x), Ne = Math.min(g.y, k.y), me = Math.abs(g.x - k.x), _e = Math.abs(g.y - k.y);
      if (Q.save(), Q.globalAlpha = 0.3, Q.fillStyle = q, Q.strokeStyle = "white", Q.lineWidth = 2, Q.setLineDash([5, 5]), Q.beginPath(), u === "rect")
        Q.rect(ie, Ne, me, _e);
      else if (u === "ellipse") {
        const ye = ie + me / 2, et = Ne + _e / 2;
        Q.ellipse(ye, et, me / 2, _e / 2, 0, 0, 2 * Math.PI);
      } else if (u === "lasso" && M.length > 1) {
        Q.moveTo(M[0].x, M[0].y);
        for (let ye = 1; ye < M.length; ye++)
          Q.lineTo(M[ye].x, M[ye].y);
        Q.closePath();
      }
      Q.fill(), Q.globalAlpha = 1, Q.stroke(), Q.restore();
    }
  }, [
    _,
    g,
    k,
    u,
    M,
    U
  ]), [ue, Le] = h.useState([]), fe = h.useMemo(() => ue.length > 0 ? ue[ue.length - 1] : w.current ? Rl(
    w.current.naturalWidth,
    w.current.naturalHeight
  ) : null, [ue]);
  h.useEffect(() => {
    var W;
    (W = w.current) != null && W.naturalWidth && ue.length === 0 && Le([
      Rl(
        w.current.naturalWidth,
        w.current.naturalHeight
      )
    ]);
  }, [ue.length]);
  const Tt = h.useCallback(() => {
    var W;
    (W = w.current) != null && W.naturalWidth && ue.length === 0 && Le([
      Rl(
        w.current.naturalWidth,
        w.current.naturalHeight
      )
    ]);
  }, [ue.length]), X = h.useRef(!1), Bt = h.useRef(0), Qt = (W) => {
    W.target === W.currentTarget && (X.current = !0);
  }, Ht = (W) => {
    W.target === W.currentTarget && X.current && !_ && l(), X.current = !1;
  };
  h.useEffect(() => {
    if (!fe) return;
    x.current || (x.current = document.createElement("canvas"));
    const W = x.current;
    W.width = fe.width, W.height = fe.height;
    const Q = W.getContext("2d");
    if (!Q) return;
    const ee = mo(fe, [255, 255, 255], 255);
    Q.putImageData(ee, 0, 0), oe();
  }, [fe, oe]), h.useEffect(() => {
    _ && oe();
  }, [_, oe]), h.useEffect(() => {
    const W = S.current;
    if (!W) return;
    const Q = (ee) => {
      ee.preventDefault();
      const q = ee.deltaY > 0 ? 1 / 1.1 : 1.1;
      V((ne) => {
        const ie = Math.min(Math.max(0.1, ne * q), 20);
        return L((Ne) => {
          const me = W.getBoundingClientRect(), _e = ee.clientX - me.left, ye = ee.clientY - me.top, et = {
            x: (_e - Ne.x) / ne,
            y: (ye - Ne.y) / ne
          };
          return {
            x: _e - et.x * ie,
            y: ye - et.y * ie
          };
        }), ie;
      });
    };
    return W.addEventListener("wheel", Q, { passive: !1 }), () => W.removeEventListener("wheel", Q);
  }, []), h.useEffect(() => {
    if (!F) return;
    const W = (ee) => {
      if (z.current) {
        const q = ee.clientX - z.current.clientX, ne = ee.clientY - z.current.clientY;
        L({
          x: z.current.panX + q,
          y: z.current.panY + ne
        });
      }
    }, Q = () => {
      E(!1), z.current = null;
    };
    return window.addEventListener("mousemove", W), window.addEventListener("mouseup", Q), () => {
      window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", Q);
    };
  }, [F]), h.useEffect(() => {
    const W = () => {
      S.current && y.current && (y.current.width = S.current.clientWidth, y.current.height = S.current.clientHeight, oe());
    }, Q = new ResizeObserver(W);
    return S.current && Q.observe(S.current), W(), () => Q.disconnect();
  }, [oe]);
  const Ln = (W) => {
    var ye;
    const Q = W.button === 2, ee = W.button === 1, q = N && W.button === 0;
    if (Q || ee || q) {
      W.preventDefault(), W.stopPropagation(), z.current = {
        panX: D.x,
        panY: D.y,
        clientX: W.clientX,
        clientY: W.clientY
      }, E(!0);
      return;
    }
    if (W.button !== 0 || _ || A || Date.now() - Bt.current < 100)
      return;
    W.preventDefault();
    const ne = U(), ie = (ye = S.current) == null ? void 0 : ye.getBoundingClientRect();
    if (!ne || !ie) return;
    f(!0);
    const Ne = {
      x: (W.clientX - ie.left - D.x) / C,
      y: (W.clientY - ie.top - D.y) / C
    }, me = Math.max(
      ne.left,
      Math.min(Ne.x, ne.left + ne.width)
    ), _e = Math.max(
      ne.top,
      Math.min(Ne.y, ne.top + ne.height)
    );
    j({ x: me, y: _e }), b({ x: me, y: _e }), P(u === "lasso" ? [{ x: me, y: _e }] : []), I(null);
  };
  h.useEffect(() => {
    if (!_) return;
    const W = (ee) => {
      var _e;
      const q = U(), ne = (_e = S.current) == null ? void 0 : _e.getBoundingClientRect();
      if (!q || !ne) return;
      const ie = {
        x: (ee.clientX - ne.left - D.x) / C,
        y: (ee.clientY - ne.top - D.y) / C
      }, Ne = Math.max(
        q.left,
        Math.min(ie.x, q.left + q.width)
      ), me = Math.max(
        q.top,
        Math.min(ie.y, q.top + q.height)
      );
      b({ x: Ne, y: me }), u === "lasso" && P((ye) => [...ye, { x: Ne, y: me }]);
    }, Q = (ee) => {
      var ie;
      const q = U(), ne = (ie = S.current) == null ? void 0 : ie.getBoundingClientRect();
      if (q && ne && fe && w.current) {
        const Ne = {
          x: (ee.clientX - ne.left - D.x) / C,
          y: (ee.clientY - ne.top - D.y) / C
        }, me = Math.max(
          q.left,
          Math.min(Ne.x, q.left + q.width)
        ), _e = Math.max(
          q.top,
          Math.min(Ne.y, q.top + q.height)
        ), ye = Math.min(g.x, me), et = Math.min(g.y, _e), Rn = Math.abs(g.x - me), $s = Math.abs(g.y - _e), rm = u === "lasso";
        if (Rn > 5 || $s > 5 || rm && M.length > 2) {
          const lm = w.current.naturalWidth, sm = w.current.naturalHeight, Dn = lm / q.width, Pn = sm / q.height, am = my(fe, (gn) => {
            if (u === "rect") {
              const On = (ye - q.left) * Dn, Kt = (et - q.top) * Pn, ml = Rn * Dn, hl = $s * Pn;
              gn.rect(On, Kt, ml, hl);
            } else if (u === "ellipse") {
              const On = (ye - q.left) * Dn, Kt = (et - q.top) * Pn, ml = Rn * Dn, hl = $s * Pn, om = On + ml / 2, im = Kt + hl / 2;
              gn.ellipse(
                om,
                im,
                ml / 2,
                hl / 2,
                0,
                0,
                2 * Math.PI
              );
            } else if (u === "lasso" && M.length > 2) {
              const On = M[0];
              gn.moveTo(
                (On.x - q.left) * Dn,
                (On.y - q.top) * Pn
              );
              for (let Kt = 1; Kt < M.length; Kt++)
                gn.lineTo(
                  (M[Kt].x - q.left) * Dn,
                  (M[Kt].y - q.top) * Pn
                );
              gn.closePath();
            }
          });
          Le((gn) => [...gn, am]);
        }
      }
      Bt.current = Date.now(), f(!1), P([]);
    };
    return window.addEventListener("mousemove", W), window.addEventListener("mouseup", Q), () => {
      window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", Q);
    };
  }, [
    _,
    g.x,
    g.y,
    U,
    fe,
    u,
    M,
    D.x,
    D.y,
    C
  ]);
  const pr = h.useCallback(() => {
    ue.length > 1 && Le((W) => W.slice(0, -1));
  }, [ue.length]);
  h.useEffect(() => {
    const W = (q) => {
      if (!q) return !1;
      const ne = q, ie = ne.tagName;
      return ie === "INPUT" || ie === "TEXTAREA" || ie === "BUTTON" || ie === "SELECT" || ie === "A" || ne.isContentEditable || ne.tabIndex != null && ne.tabIndex >= 0;
    }, Q = (q) => {
      q.code === "Space" && !q.repeat && (W(q.target) || (q.preventDefault(), T(!0))), (q.metaKey || q.ctrlKey) && q.key.toLowerCase() === "z" && !q.shiftKey ? (q.preventDefault(), q.stopPropagation(), q.stopImmediatePropagation(), pr()) : q.key === "Escape" && (q.preventDefault(), q.stopPropagation(), q.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, ee = (q) => {
      q.code === "Space" && (W(q.target) || (q.preventDefault(), T(!1)));
    };
    return window.addEventListener("keydown", Q, { capture: !0 }), window.addEventListener("keyup", ee, { capture: !0 }), () => {
      window.removeEventListener("keydown", Q, { capture: !0 }), window.removeEventListener("keyup", ee, { capture: !0 });
    };
  }, [pr, l]);
  const fl = () => {
    if (w.current) {
      const W = Rl(
        w.current.naturalWidth,
        w.current.naturalHeight
      );
      Le((Q) => [...Q, W]);
    }
  }, be = async () => {
    if (!fe || !w.current) return null;
    B(!0);
    try {
      const { width: W, height: Q } = fe, ee = document.createElement("canvas");
      ee.width = W, ee.height = Q;
      const q = ee.getContext("2d");
      if (!q) return null;
      const ne = mo(fe, [255, 255, 255], 255);
      q.putImageData(ne, 0, 0);
      const ie = await new Promise(
        (Rn) => ee.toBlob(Rn, "image/png")
      );
      if (!ie) return null;
      const me = `meld_mask_${Date.now()}.png`, _e = new File([ie], me, { type: "image/png" }), ye = new FormData();
      ye.append("image", _e), ye.append("type", "temp"), ye.append("overwrite", "true");
      const et = await te.fetchApi("/upload/image", {
        method: "POST",
        body: ye
      });
      return et.ok ? (await et.json()).name : null;
    } catch (W) {
      return console.error("[Meld] Error uploading mask:", W), null;
    } finally {
      B(!1);
    }
  }, ot = async () => {
    if (!d) return;
    const W = await be();
    W && m(d, W) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
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
  }, Lt = h.useMemo(
    () => fe && !hy(fe),
    [fe]
  );
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
                    onClick: () => p("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(hf, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "ellipse" ? "active" : ""}`,
                    onClick: () => p("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(Vp, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "lasso" ? "active" : ""}`,
                    onClick: () => p("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(qp, { size: 18 }),
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
                    onClick: J,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ s.jsx(fg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      V(1), L({ x: 0, y: 0 });
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
                    children: /* @__PURE__ */ s.jsx(ug, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: S,
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
                            src: mi(d),
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
                      onClick: ot,
                      disabled: !Lt || A,
                      type: "button",
                      children: [
                        A ? /* @__PURE__ */ s.jsx(Cc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(ci, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Send" })
                      ]
                    }
                  ) : /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--run",
                      onClick: gt,
                      disabled: !Lt || A,
                      type: "button",
                      children: [
                        A ? /* @__PURE__ */ s.jsx(Cc, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(nl, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: pr,
                      disabled: ue.length <= 1 || A,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(ig, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: fl,
                      disabled: !Lt || A,
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
}, jf = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, Dl = (e) => e.replace(/^["']|["']$/g, ""), py = (e) => e.trim() ? jf(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, gy = (e, t) => {
  const n = jf(e), r = {
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
      const o = Dl(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = Dl(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = Dl(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = Dl(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, yy = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = h.useState("Gallery"), [a, o] = h.useState({
    ...e.settings
  }), [i, c] = h.useState(
    {}
  ), [d, m] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, y] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [S, w] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, _] = h.useState(e.settings["viewer.thumbnail_window_size"].toString()), [f, u] = h.useState(e.settings["gallery.trash_retention_days"].toString()), [p, g] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [j, k] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, M] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [P, R] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [
    I,
    A
  ] = h.useState(
    e.settings["fullscreen.details.max_positive_prompt_lines"].toString()
  ), [
    B,
    C
  ] = h.useState(
    e.settings["fullscreen.details.max_negative_prompt_lines"].toString()
  ), [V, D] = h.useState(
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
        (J) => a[J] !== e.settings[J] && !i[J]
      );
      if (K.length > 0)
        for (const J of K)
          await n(J, a[J]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (K, J) => {
      o((oe) => ({
        ...oe,
        [K]: !J
      }));
    },
    handleNumberChange: (K, J, oe, ue) => {
      K === "gallery.initial_load_count" ? m(J) : K === "gallery.max_load_count" ? y(J) : K === "gallery.lineage_max_depth" ? w(J) : K === "viewer.thumbnail_window_size" ? _(J) : K === "gallery.trash_retention_days" ? u(J) : K === "gallery.auto_link_phash_threshold" ? g(J) : K === "gallery.suggest_phash_threshold" ? k(J) : K === "viewer.details.max_positive_prompt_lines" ? M(J) : K === "viewer.details.max_negative_prompt_lines" ? R(J) : K === "fullscreen.details.max_positive_prompt_lines" ? A(J) : K === "fullscreen.details.max_negative_prompt_lines" ? C(J) : K === "sidebar.thumbnail_size" && D(J);
      const Le = Number.parseInt(J, 10);
      if (!Number.isNaN(Le)) {
        let fe = Le;
        oe !== void 0 && fe < oe && (fe = oe), ue !== void 0 && fe > ue && (fe = ue), o((Tt) => ({
          ...Tt,
          [K]: fe
        }));
      }
    },
    handleNumberBlur: (K) => {
      K.key === "gallery.initial_load_count" ? m(
        a["gallery.initial_load_count"].toString()
      ) : K.key === "gallery.max_load_count" ? y(a["gallery.max_load_count"].toString()) : K.key === "gallery.lineage_max_depth" ? w(
        a["gallery.lineage_max_depth"].toString()
      ) : K.key === "viewer.thumbnail_window_size" ? _(
        a["viewer.thumbnail_window_size"].toString()
      ) : K.key === "gallery.trash_retention_days" ? u(
        a["gallery.trash_retention_days"].toString()
      ) : K.key === "gallery.auto_link_phash_threshold" ? g(
        a["gallery.auto_link_phash_threshold"].toString()
      ) : K.key === "gallery.suggest_phash_threshold" ? k(
        a["gallery.suggest_phash_threshold"].toString()
      ) : K.key === "viewer.details.max_positive_prompt_lines" ? M(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : K.key === "viewer.details.max_negative_prompt_lines" ? R(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : K.key === "fullscreen.details.max_positive_prompt_lines" ? A(
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
              await Pg(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (K) {
              console.error("Failed to clear thumbnail cache:", K), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (K) => py(K),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: S,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: j,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: P,
    fullscreenMaxPositivePromptLinesInput: I,
    fullscreenMaxNegativePromptLinesInput: B,
    thumbnailSizeInput: V
  };
}, Y = ({
  label: e,
  description: t,
  children: n
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), vy = ({
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
    /* @__PURE__ */ s.jsx(
      Y,
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
    /* @__PURE__ */ s.jsx(
      Y,
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
function It({
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
function bf() {
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
function Ef(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Cf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Nf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function Mf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(bf, {})
  ] });
}
function If(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Tf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(bf, {})
  ] });
}
function Lf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Rf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Df(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Pf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Of = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Ef
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: If
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Tf
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Nf },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: Mf
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Cf
  },
  { id: "edit_tags", label: "Edit Tags", icon: Rf },
  { id: "edit_notes", label: "Edit Notes", icon: Df },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Lf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Pf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Ut }
], wy = ({
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
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
      Y,
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
      Y,
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
    /* @__PURE__ */ s.jsx(Y, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      Y,
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
            children: Of.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), xy = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
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
] }), _y = ({
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
            " - Send to Light Table (Example:",
            " ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:keep" }),
            ", ",
            /* @__PURE__ */ s.jsx("code", { children: "lt:refine" }),
            ",",
            " ",
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
              onChange: (m) => {
                t((v) => ({
                  ...v,
                  [c]: m.target.value
                }));
              },
              onBlur: () => {
                const m = l(
                  e[c] || ""
                );
                r((v) => ({
                  ...v,
                  [c]: !m
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
}, ky = ({
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
  suggestPhashThresholdInput: m
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
            onChange: (v) => t(
              "gallery.auto_link_phash_threshold",
              v.target.value,
              0,
              100
            ),
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
            value: m,
            min: 0,
            max: 100,
            onChange: (v) => t(
              "gallery.suggest_phash_threshold",
              v.target.value,
              0,
              100
            ),
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
            onChange: (v) => t(
              "gallery.lineage_max_depth",
              v.target.value,
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
            onChange: (v) => t(
              "gallery.trash_retention_days",
              v.target.value,
              0,
              365
            ),
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
] }), Sy = ({
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
      Y,
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
    /* @__PURE__ */ s.jsx(
      Y,
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
    /* @__PURE__ */ s.jsx(
      Y,
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
    /* @__PURE__ */ s.jsx(
      Y,
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
      Y,
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
] }), Af = () => {
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
    handleViewTrash: v,
    handleClearThumbnailCache: y,
    validateShortcut: S,
    // Input states
    initialLoadCountInput: w,
    maxLoadCountInput: x,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: f,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: p,
    suggestPhashThresholdInput: g,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: b,
    fullscreenMaxNegativePromptLinesInput: M,
    thumbnailSizeInput: P
  } = yy();
  Ue({ onEscape: o });
  const R = h.useRef(!1), I = (V) => {
    V.target === V.currentTarget && (R.current = !0);
  }, A = (V) => {
    V.target === V.currentTarget && R.current && o(), R.current = !1;
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
          ky,
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
            autoLinkPhashThresholdInput: p,
            suggestPhashThresholdInput: g
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          wy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: P,
            initialLoadCountInput: w,
            maxLoadCountInput: x
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          Sy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailWindowSizeInput: f,
            maxPositivePromptLinesInput: j,
            maxNegativePromptLinesInput: k
          }
        );
      case "Full Screen":
        return /* @__PURE__ */ s.jsx(
          vy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            maxPositivePromptLinesInput: b,
            maxNegativePromptLinesInput: M
          }
        );
      case "Shortcuts":
        return /* @__PURE__ */ s.jsx(
          _y,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: S,
            handleToggle: i,
            handleResetShortcuts: m
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(xy, {});
      default:
        return null;
    }
  };
  return ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: A,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-settings-modal",
            onClick: (V) => V.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: o,
                    children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                  }
                )
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
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, _t = "none", sl = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, qe = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, jy = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || e.isContentEditable;
}, zf = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = ge(), [o, i] = h.useState([]), [c, d] = h.useState(t), [m, v] = h.useState(""), [y, S] = h.useState(!0), [w, x] = h.useState(!1), _ = h.useRef(null), f = e.length > 1, u = h.useRef(!1), p = (I) => {
    I.target === I.currentTarget && (u.current = !0);
  }, g = (I) => {
    I.target === I.currentTarget && u.current && n(), u.current = !1;
  }, j = h.useCallback(async () => {
    S(!0);
    try {
      const I = await hi();
      i(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      S(!1);
    }
  }, []);
  h.useEffect(() => {
    j();
  }, [j]), h.useEffect(() => {
    _.current && _.current.focus();
  }, []), Ue({ onEscape: n });
  const k = h.useMemo(() => o.filter(
    (I) => I.name.toLowerCase().includes(m.toLowerCase()) && !c.includes(I.name)
  ), [o, m, c]), b = (I) => {
    const A = I.trim();
    if (A.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    A && !c.includes(A) && (d([...c, A]), v(""));
  }, M = (I) => {
    d(c.filter((A) => A !== I));
  }, P = async () => {
    x(!0);
    try {
      if (f) {
        const I = c.filter((B) => !t.includes(B)), A = t.filter(
          (B) => !c.includes(B)
        );
        await yf(e, I, A);
      } else
        await xg(e[0], c);
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (I) {
      console.error("Failed to update tags:", I), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, R = (I) => {
    I.key === "Enter" && m.trim() && (qe(I), b(m.trim()));
  };
  return ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: p,
        onMouseUp: g,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (I) => I.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(hr, { size: 18 }),
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
                    value: m,
                    onChange: (I) => v(I.target.value),
                    onKeyDown: R
                  }
                ),
                m.trim() && !c.includes(m.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(m),
                    children: [
                      /* @__PURE__ */ s.jsx(zs, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: y ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? m ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : k.map((I) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => b(I.name),
                  children: I.name
                },
                I.id
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
                onClick: P,
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
}, Fs = (e, t) => {
  const n = h.useCallback(async (x) => uo(x), []), r = h.useCallback(
    async (x, _, f) => {
      await yf(x, _, f);
    },
    []
  ), l = h.useCallback(async (x) => {
    try {
      const _ = await kg(x.id);
      return _.workflow ? (await window.app.loadGraphData(
        _.workflow
      ), H.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (_) {
      return H.error("Error restoring workflow:", _), alert("Failed to restore workflow."), !1;
    }
  }, []), a = h.useCallback(async (x) => {
    try {
      const _ = await Sg(x.id), f = _.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", u = window.app, g = window.LiteGraph.createNode(f);
      if (!g)
        return console.error(`Node type ${f} not found.`), alert(
          `Node type ${f} not found. Please make sure the Meld Unified Loader node is installed.`
        ), !1;
      const j = _.is_flux ? {
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
        for (const [P, R] of Object.entries(j)) {
          const I = _[P];
          if (I != null && I !== "") {
            const A = g.widgets.find(
              (B) => B.name === R
            );
            A && (A.value = I);
          }
        }
        const M = g.widgets.find(
          (P) => P.name === "control_after_generate"
        );
        M && (M.value = "fixed");
      }
      const k = u.canvas.ds.offset, b = u.canvas.ds.scale;
      return g.pos = [(-k[0] + 400) / b, (-k[1] + 300) / b], u.graph.add(g), u.canvas.selectNode(g), u.canvas.centerOnNode(g), !0;
    } catch (_) {
      return console.error("Error adding Unified Loader:", _), alert("Failed to load settings."), !1;
    }
  }, []), o = h.useCallback(
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
  ), i = h.useCallback(
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
  ), c = h.useCallback(
    (x) => {
      t({
        type: "OPEN_MODAL",
        payload: { type: "parent_selection", imageId: x.id }
      });
    },
    [t]
  ), d = h.useCallback(
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
        const j = g.replace(/\s+/g, "").toLowerCase();
        return j === "meldimageloader" || j === "loadimage";
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
            nodes: u.map(
              (g) => ({
                id: String(g.id),
                type: g.type,
                title: g.title
              })
            ),
            onSelect: (g) => {
              ll(x, g);
            }
          }
        }), !0;
      const p = ll(x);
      return p.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: p.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), m = h.useCallback(
    (x) => {
      const _ = Array.isArray(x) ? x : [x];
      t({
        type: "OPEN_MODAL",
        payload: { type: "workflow_selection", images: _ }
      });
    },
    [t]
  ), v = h.useCallback(
    async (x, _ = "run") => {
      var u;
      H.log("[Meld] handleRunWithMask called", x, _);
      const f = Array.isArray(x) ? x : [x];
      if (_ === "apply") {
        const p = window.app, g = ((u = p == null ? void 0 : p.graph) == null ? void 0 : u._nodes) || [];
        H.log(
          "[Meld] Current graph nodes:",
          g.map((b) => ({
            id: b.id,
            type: b.type
          }))
        );
        const j = g.some(
          (b) => b.type === "LoadImageMask"
        ), k = g.some(
          (b) => b.type === "MeldImageLoader" || b.type === "LoadImage" || b.type === "Load Image"
        );
        if (H.log("[Meld] Nodes found:", { hasMaskNode: j, hasLoaderNode: k }), !j || !k) {
          const b = [];
          k || b.push("'Meld Image Loader'"), j || b.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${b.join(" and ")}. Please add them to use the Mask Tool.`
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
        if (!(await kf()).some(
          (j) => j.valid && j.mask_count >= 1
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
      } catch (p) {
        console.error("[Meld] Error checking workflows:", p);
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
  ), y = h.useCallback(
    async (x, _) => {
      try {
        const f = x.id, p = (await uo([f])).restored_ids || [f];
        t({ type: "REMOVE_IMAGES", payload: p }), _ == null || _();
      } catch (f) {
        t({
          type: "SET_ERROR",
          payload: f instanceof Error ? f.message : String(f)
        });
      }
    },
    [t]
  ), S = h.useCallback(
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
  ), w = h.useCallback(
    async (x, _) => {
      try {
        const f = await _g(
          x,
          _
        );
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
    handleRunWithWorkflow: m,
    handleRunWithMask: v,
    handleRestore: y,
    handleDelete: S,
    handleEditNotes: i,
    handleUpdateUserNotes: w
  };
}, Ff = ({
  imageId: e,
  initialNotes: t,
  onClose: n
}) => {
  const { state: r, dispatch: l } = ge(), { handleUpdateUserNotes: a } = Fs(r, l), [o, i] = h.useState(t), [c, d] = h.useState(!1), m = h.useRef(null), v = h.useRef(!1), y = (x) => {
    x.target === x.currentTarget && (v.current = !0);
  }, S = (x) => {
    x.target === x.currentTarget && v.current && n(), v.current = !1;
  };
  h.useEffect(() => {
    m.current && m.current.focus();
  }, []);
  const w = h.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (x) {
      console.error("Failed to update notes:", x), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return h.useEffect(() => {
    const x = (_) => {
      _.key === "Enter" && (_.ctrlKey || _.metaKey) && _.target === m.current && (_.preventDefault(), _.stopPropagation(), _.stopImmediatePropagation(), w());
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => {
      window.removeEventListener("keydown", x, {
        capture: !0
      });
    };
  }, [w]), Ue({ onEscape: n }), ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: S,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(sg, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(pe, { size: 20 }) })
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
}, Wf = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ge(), l = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Ue({ onEscape: l });
  const a = h.useRef(!1), o = h.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = h.useCallback(
    (c) => {
      c.target === c.currentTarget && a.current && l(), a.current = !1;
    },
    [l]
  );
  return ce.createPortal(
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
                    children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
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
                      /* @__PURE__ */ s.jsx(nl, { size: 12 })
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
}, $f = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var D;
  const { dispatch: l } = ge(), [a, o] = h.useState([]), [i, c] = h.useState(!0), [d, m] = h.useState(null), [v, y] = h.useState(!1), [S, w] = h.useState(null), [x, _] = h.useState({}), [f, u] = h.useState({}), [p, g] = h.useState(""), j = h.useRef(null), k = h.useMemo(() => a.map((L) => {
    let N = L.valid, T = L.reason;
    return r && L.mask_count === 0 && (N = !1, T = "No 'Load Image (as Mask)' node found."), { ...L, valid: N, reason: T };
  }).sort((L, N) => L.valid !== N.valid ? L.valid ? -1 : 1 : L.name.localeCompare(N.name)), [a, r]), b = h.useMemo(() => {
    if (!p.trim()) return k;
    const L = p.toLowerCase();
    return k.filter(
      (N) => N.name.toLowerCase().includes(L)
    );
  }, [k, p]), M = h.useCallback(async () => {
    try {
      c(!0);
      const L = await kf();
      o(L), m(null);
    } catch (L) {
      m(L instanceof Error ? L.message : String(L));
    } finally {
      c(!1);
    }
  }, []);
  h.useEffect(() => {
    M();
  }, [M]), h.useEffect(() => {
    !i && j.current && j.current.focus();
  }, [i]);
  const P = h.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  Ue({ onEscape: P });
  const R = h.useRef(!1), I = h.useCallback((L) => {
    L.target === L.currentTarget && (R.current = !0);
  }, []), A = h.useCallback(
    (L) => {
      L.target === L.currentTarget && R.current && P(), R.current = !1;
    },
    [P]
  ), B = async (L, N) => {
    if (!v)
      try {
        y(!0);
        const T = await t(L, N);
        n == null || n(), T !== !1 && P();
      } catch (T) {
        m(T instanceof Error ? T.message : String(T)), y(!1);
      }
  }, C = async (L) => {
    if (!(x[L] || f[L]))
      try {
        u((E) => ({ ...E, [L]: !0 }));
        const N = await Sf(L), T = [], F = (E) => {
          if (!E) return !1;
          const z = E.replace(/\s+/g, "").toLowerCase();
          return r ? z === "loadimagemask" : z === "meldimageloader" || z === "loadimage";
        };
        if (N.nodes && Array.isArray(N.nodes)) {
          H.log(
            "[Meld] Extracting nodes from UI format workflow",
            N.nodes.length
          );
          for (const E of N.nodes)
            F(E.type) && (H.log(
              "[Meld] Found target node (UI):",
              E.id,
              E.type,
              E.title
            ), T.push({
              id: String(E.id),
              type: E.type || "",
              title: E.title
            }));
        } else {
          H.log("[Meld] Extracting nodes from API format workflow");
          for (const E in N) {
            const z = N[E];
            z && typeof z == "object" && F(z.class_type) && (H.log(
              "[Meld] Found target node (API):",
              E,
              z.class_type
            ), T.push({
              id: E,
              type: z.class_type || ""
            }));
          }
        }
        T.length === 0 && console.warn(
          "[Meld] No loader nodes found in workflow JSON despite count > 0"
        ), _((E) => ({ ...E, [L]: T }));
      } catch (N) {
        console.error("Failed to fetch workflow nodes:", N);
      } finally {
        u((N) => ({ ...N, [L]: !1 }));
      }
  }, V = (L) => {
    if (!L.valid || v) return;
    if ((r ? L.mask_count : L.loader_count + L.load_image_count) <= 1) {
      B(L.name);
      return;
    }
    S === L.name ? w(null) : (w(L.name), C(L.name));
  };
  return ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: I,
        onMouseUp: A,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (L) => L.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(ui, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: P,
                    children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(af, { size: 20 }),
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
                      /* @__PURE__ */ s.jsx(Mn, { className: "meld-tag-search-icon", size: 16 }),
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          ref: j,
                          type: "text",
                          className: "meld-tag-search-input",
                          placeholder: "Search workflows...",
                          value: p,
                          onChange: (L) => g(L.target.value)
                        }
                      ),
                      p && /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-tag-item__btn",
                          onClick: () => {
                            var L;
                            g(""), (L = j.current) == null || L.focus();
                          },
                          style: { padding: "4px" },
                          children: /* @__PURE__ */ s.jsx(pe, { size: 14 })
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
                ) : b.map((L) => {
                  const N = r ? L.mask_count : L.loader_count + L.load_image_count, T = S === L.name, F = x[L.name] || [], E = f[L.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${L.valid ? "" : "meld-workflow-item--invalid"} ${T ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => V(L),
                        title: L.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: L.name }),
                            !L.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: L.reason }),
                            L.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: N > 1 ? `Multiple loaders found (${N})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${L.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          L.valid && N <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (z) => {
                                z.stopPropagation(), B(L.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(nl, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          L.valid && N > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn-primary meld-btn-small",
                              disabled: v,
                              onClick: (z) => {
                                z.stopPropagation(), V(L);
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
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: F.map((z) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => B(L.name, z.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: z.title || z.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                z.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(nl, { size: 12 })
                          ]
                        },
                        z.id
                      )) })
                    ] }) })
                  ] }, L.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn-secondary",
                  onClick: P,
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
}, by = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => {
  const r = h.useRef(null), l = h.useRef(null);
  return Ue({ onEscape: n }), h.useEffect(() => {
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
  await vg(e, t), se.getState().removeImages(e);
}, Uf = ({
  imageIds: e,
  hasLineage: t,
  isPermanent: n = !1,
  onSuccess: r
}) => {
  const { state: l, dispatch: a } = ge(), o = h.useRef(!0);
  h.useEffect(() => () => {
    o.current = !1;
  }, []);
  const i = h.useMemo(
    () => l.searchQuery.toLowerCase().includes("has_derivatives:yes") || l.searchQuery.toLowerCase().includes("has_derivatives:true") || l.searchQuery.toLowerCase().includes("has_derivatives:1"),
    [l.searchQuery]
  ), c = h.useMemo(
    () => l.searchQuery.trim() !== "",
    [l.searchQuery]
  ), d = h.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (se.getState().buckets[l.viewerLightTableSlotId] || []).map((g) => {
    const j = Number.parseInt(g, 10);
    return l.images.find((k) => k.id === j) || l.lineageImages.find((k) => k.id === j) || null;
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
  ]), m = h.useRef(l.viewerImageId);
  h.useEffect(() => {
    m.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const v = h.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Ue({ onEscape: v });
  const y = h.useRef(!1), S = h.useCallback((u) => {
    u.target === u.currentTarget && (y.current = !0);
  }, []), w = h.useCallback(
    (u) => {
      u.target === u.currentTarget && y.current && v(), y.current = !1;
    },
    [v]
  ), x = h.useCallback(
    (u) => {
      if (!o.current) return;
      const p = m.current;
      if (p === null || !u.has(p))
        return;
      const g = d.findIndex(
        (k) => k.id === p
      );
      if (g === -1) return;
      let j = !1;
      for (let k = g + 1; k < d.length; k++)
        if (!u.has(d[k].id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: d[k].id,
              mode: l.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
            }
          }), j = !0;
          break;
        }
      if (!j) {
        for (let k = g - 1; k >= 0; k--)
          if (!u.has(d[k].id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: d[k].id,
                mode: l.viewerMode,
                // Preserve slotId in lighttable mode to stay within the slot
                ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
              }
            }), j = !0;
            break;
          }
      }
      j || a({ type: "CLOSE_VIEWER" });
    },
    [l.viewerMode, l.viewerLightTableSlotId, d, a]
  ), _ = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const g = new Set(e), j = d.filter(
        (k) => g.has(k.id)
      );
      if (x(g), await ho(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(j), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (g) {
      a({
        type: "SET_ERROR",
        payload: g instanceof Error ? g.message : String(g)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, f = async () => {
    var u, p;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const g = new Set(e);
      for (const k of e) {
        const b = await fi(k);
        if (!o.current) return;
        for (const M of b)
          g.add(M.id);
      }
      const j = d.filter(
        (k) => g.has(k.id)
      );
      if (x(g), await ho(
        Array.from(g),
        n
      ), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((p = (u = l.activeModal).onSuccess) == null || p.call(u)), !n && r && r(j), a({
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
  return ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: S,
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
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-modal-close",
                    onClick: v,
                    children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
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
                            Ap,
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
                    onClick: v,
                    children: "Cancel"
                  }
                ),
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
}, Vf = ({ message: e }) => {
  const { dispatch: t } = ge(), n = h.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Ue({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(af, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "meld-modal-close",
          onClick: n,
          type: "button",
          children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
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
}, Bf = ({
  imageId: e
}) => {
  const { state: t, dispatch: n, refreshImages: r } = ge(), [l, a] = h.useState([]), [o, i] = h.useState(!0), [c, d] = h.useState(!1), m = h.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Ue({ onEscape: m });
  const v = h.useRef(!1), y = (k) => {
    k.target === k.currentTarget && (v.current = !0);
  }, S = (k) => {
    k.target === k.currentTarget && v.current && m(), v.current = !1;
  }, w = t.images.find((k) => k.id === e), x = h.useCallback(async () => {
    i(!0);
    try {
      const k = t.settings["gallery.suggest_phash_threshold"], b = await wg(e, k);
      a(b);
    } catch (k) {
      console.error("Failed to load suggestions:", k);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    x();
  }, [x]);
  const _ = async (k) => {
    if (k == null) {
      console.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!w || k === w.parent_id) && !(w.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Nc(e, k), await pf(e), await r(), m();
      } catch (b) {
        console.error("Failed to link parent:", b);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Nc(e, null), await r(), m();
      } catch (k) {
        console.error("Failed to remove source:", k), alert("Failed to remove source image.");
      }
  }, u = async (k) => {
    i(!0);
    try {
      const b = await qg(k), { id: M } = await gf({
        filename: b.name,
        subfolder: b.subfolder || "",
        type: b.type || "input"
      });
      if (M === e) {
        alert(
          "Uploaded image is identical to the current image. Cannot set as source."
        );
        return;
      }
      await _(M);
    } catch (b) {
      console.error("Failed to upload/register image:", b);
    } finally {
      i(!1);
    }
  }, p = (k) => {
    k.preventDefault(), k.stopPropagation(), d(!1);
    const b = k.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && u(b);
  };
  if (!w) return null;
  const g = l.filter((k) => k.is_source_match), j = l.filter((k) => !k.is_source_match);
  return ce.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: y,
        onMouseUp: S,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
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
                children: /* @__PURE__ */ s.jsx(pe, { size: 20 })
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
                        /* @__PURE__ */ s.jsx(Zp, { size: 16, color: "var(--meld-accent-color)" }),
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
                      children: /* @__PURE__ */ s.jsx(Xp, { size: 16 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "div",
              {
                className: `meld-drop-zone ${c ? "meld-drop-zone--active" : ""}`,
                onDragEnter: (k) => {
                  k.preventDefault(), k.stopPropagation(), d(!0);
                },
                onDragOver: (k) => {
                  k.preventDefault(), k.stopPropagation(), k.dataTransfer.dropEffect = "copy", d(!0);
                },
                onDragLeave: (k) => {
                  k.preventDefault(), k.stopPropagation(), d(!1);
                },
                onDrop: p,
                children: [
                  /* @__PURE__ */ s.jsx(cg, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              g.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: g.map((k) => {
                  const b = k.id === w.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && _(k.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            src: mt(k, 64),
                            alt: k.filename
                          }
                        ),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: k.filename }),
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
                    k.id
                  );
                }) })
              ] }),
              /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Visual Matches (pHash)" }),
                j.length > 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: j.map((k) => {
                  const b = k.id === w.parent_id;
                  return /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: `meld-suggestion-card ${b ? "meld-suggestion-card--current" : ""}`,
                      onClick: () => !b && _(k.id),
                      style: {
                        cursor: b ? "default" : "pointer",
                        ...b ? {
                          borderColor: "var(--meld-accent-color)",
                          boxShadow: "0 0 0 2px var(--meld-accent-color)"
                        } : {}
                      },
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "img",
                          {
                            src: mt(k, 64),
                            alt: k.filename
                          }
                        ),
                        /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestion-info", children: [
                          /* @__PURE__ */ s.jsx("span", { className: "meld-suggestion-filename", children: k.filename }),
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
                                  Math.round((64 - k.distance) / 64 * 100),
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
                    k.id
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
}, Ey = () => {
  const { state: e, dispatch: t } = ge(), n = e.toastMessage;
  return h.useEffect(() => {
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
}, Cy = () => {
  const { state: e, dispatch: t } = ge(), { executeWorkflow: n } = pi();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      $f,
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
      Wf,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && ll(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && ce.createPortal(
      /* @__PURE__ */ s.jsx(Bf, { imageId: e.activeModal.imageId }),
      document.body
    ),
    e.activeModal.type === "import" && ce.createPortal(/* @__PURE__ */ s.jsx(_f, {}), document.body),
    e.activeModal.type === "settings" && ce.createPortal(/* @__PURE__ */ s.jsx(Af, {}), document.body),
    e.activeModal.type === "tag_edit" && ce.createPortal(
      /* @__PURE__ */ s.jsx(
        zf,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && ce.createPortal(
      /* @__PURE__ */ s.jsx(Vf, { message: e.activeModal.message }),
      document.body
    ),
    e.activeModal.type === "delete_confirm" && ce.createPortal(
      /* @__PURE__ */ s.jsx(
        Uf,
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
    e.activeModal.type === "mask_editor" && ce.createPortal(
      /* @__PURE__ */ s.jsx(
        _s,
        {
          imageId: e.activeModal.imageId,
          mode: e.activeModal.mode,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "mask_sequence_step" && ce.createPortal(
      /* @__PURE__ */ s.jsx(
        _s,
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
    e.activeModal.type === "note_edit" && ce.createPortal(
      /* @__PURE__ */ s.jsx(
        Ff,
        {
          imageId: e.activeModal.imageId,
          initialNotes: e.activeModal.notes,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "download_options" && ce.createPortal(
      /* @__PURE__ */ s.jsx(
        ty,
        {
          imageIds: e.activeModal.imageIds,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.confirmModal && ce.createPortal(
      /* @__PURE__ */ s.jsx(
        by,
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
    e.toastMessage && ce.createPortal(/* @__PURE__ */ s.jsx(Ey, {}), document.body)
  ] });
}, Ny = () => {
  const { state: e, dispatch: t } = ge(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await ey(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
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
        children: /* @__PURE__ */ s.jsx(hf, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished-compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx($p, { size: 14, className: "meld-success-icon" }),
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
}, gi = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, My = Object.keys(gi), Rc = /* @__PURE__ */ new Map(), Dc = "data-meld-portal-root";
let ha = null, pa = null;
const Pc = ".comfyui-body-bottom";
function Oc(e) {
  var n, r, l, a;
  const t = `[${Dc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (i.nodeType !== Node.ELEMENT_NODE) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Dc) || (r = c.querySelector) != null && r.call(c, t) || (l = c.matches) != null && l.call(c, Pc) || (a = c.querySelector) != null && a.call(c, Pc)) return !0;
  }
  return !1;
}
function Iy(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function Ty(e) {
  const t = gi[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function Qf(e) {
  const t = gi[e], n = Rc.get(e) ?? Ty(e);
  Rc.set(e, n);
  const r = Iy(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function Hf() {
  for (const e of My)
    Qf(e);
}
function Ac() {
  pa === null && (pa = requestAnimationFrame(() => {
    pa = null, Hf();
  }));
}
function Kf(e) {
  return Qf(e);
}
function Ly() {
  ha || typeof document > "u" || !document.body || (Hf(), ha = new MutationObserver((e) => {
    for (const t of e) {
      if (Oc(t.addedNodes)) {
        Ac();
        return;
      }
      if (Oc(t.removedNodes)) {
        Ac();
        return;
      }
    }
  }), ha.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const Ws = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  h.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, Ry = () => {
  const { state: e } = ge(), t = se((a) => a.slots), n = se((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, l = h.useCallback(
    (a) => {
      if (jy())
        return;
      const o = e.selectedIds;
      if (!o || o.size === 0)
        return;
      const i = t.find(
        (c) => c.shortcutKey.toLowerCase() === a.key.toLowerCase()
      );
      i && (sl(a), o.forEach((c) => {
        n(i.id, String(c));
      }));
    },
    [t, n, e.selectedIds]
  );
  Ws({ onKeyDown: l, enabled: r });
}, Gf = ({
  message: e,
  onConfirm: t,
  onCancel: n
}) => (Ue({ onEscape: n }), /* @__PURE__ */ s.jsx(
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
  const l = (r == null ? void 0 : r.capture) ?? !0, a = (r == null ? void 0 : r.ignoreNonPrimary) ?? !0, o = h.useRef(t), i = h.useRef(n);
  h.useEffect(() => {
    o.current = t;
  }, [t]), h.useEffect(() => {
    i.current = n;
  }, [n]), h.useEffect(() => {
    if (!e) return;
    const c = (d) => {
      if (a && (d.pointerType === "mouse" && d.button !== 0 || !d.isPrimary))
        return;
      const m = d.target;
      if (!(m instanceof Node))
        return;
      o.current.some((y) => {
        const S = y.current;
        return S ? S.contains(m) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: l }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: l
      });
    };
  }, [e, l, a]);
}, Dy = (e, t, n, r, l) => {
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
        H.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, Py = ({ config: e }) => {
  var F;
  const t = se((E) => E.buckets), n = se((E) => E.slots), r = se((E) => E.images), l = n.length, { state: a, dispatch: o } = ge(), [i, c] = h.useState(!1), [d, m] = h.useState(!1), [v, y] = h.useState(!1), [S, w] = h.useState(e.label), [x, _] = h.useState(e.color), [f, u] = h.useState([]), [p, g] = h.useState(null), j = h.useRef(null), k = h.useRef(null);
  al({
    enabled: i,
    insideRefs: [k],
    onOutside: () => c(!1)
  }), al({
    enabled: v,
    insideRefs: [j],
    onOutside: () => y(!1)
  });
  const b = t[e.id] || [], M = b.length, P = b.map((E) => {
    const z = Number(E);
    let U = a.images.find((O) => O.id === z);
    return U || (U = a.lineageImages.find((O) => O.id === z)), U || (U = r[E]), U;
  }).filter(Boolean);
  h.useEffect(() => {
    u((E) => {
      const z = E.filter((U) => b.includes(String(U)));
      return z.length !== E.length ? z : E;
    });
  }, [b]);
  const R = f.filter(
    (E) => b.includes(String(E))
  ), I = R.length > 0, A = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.add("drag-over");
  }, B = (E) => {
    E.currentTarget.classList.remove("drag-over");
  }, C = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.remove("drag-over");
    const z = E.dataTransfer.getData("text/plain");
    z && z.split(",").forEach((O) => {
      if (O) {
        const K = O.trim(), J = Number(K);
        let oe = a.images.find((ue) => ue.id === J);
        oe || (oe = a.lineageImages.find(
          (ue) => ue.id === J
        )), se.getState().addToBucket(e.id, K, oe);
      }
    });
  }, V = (E, z) => {
    E.stopPropagation();
    let U = [z];
    R.includes(z) ? U = R : (u([z]), g(z)), E.dataTransfer.setData("text/plain", U.join(",")), E.dataTransfer.setData("application/meld-lt-source-slot", e.id), E.dataTransfer.effectAllowed = "move";
  }, D = (E, z) => {
    if (E.dataTransfer.dropEffect === "none") {
      const U = R.includes(z) ? R : [z];
      U.forEach((O) => {
        se.getState().removeFromBucket(e.id, String(O));
      }), u((O) => O.filter((K) => !U.includes(K)));
    }
  }, L = (E) => {
    if (M === 0) return;
    const z = {
      type: E
    }, U = I ? R : b.map(Number);
    if (U.length === 0) return;
    const O = U.map((oe) => P.find((ue) => ue.id === oe)).filter(Boolean), K = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Dy(
      z,
      U,
      O,
      o,
      () => {
        se.getState().showToast(K[E] ?? "Done");
      }
    );
  }, N = () => {
    se.getState().clearBucket(e.id), se.getState().showToast(`Tab "${e.label}" cleared`), m(!1);
  }, T = () => {
    const E = se.getState();
    E.slots.length <= 1 || (E.removeSlot(e.id), se.getState().showToast(`Tab "${e.label}" deleted`));
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-lt-slot-panel",
      style: { "--slot-color": e.color },
      onDragOver: A,
      onDragLeave: B,
      onDrop: C,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: M === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : P.map((E) => {
          const z = mt(E);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-lt-slot-panel__image-wrapper${R.includes(E.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (U) => {
                if (U.ctrlKey || U.metaKey)
                  u(
                    (O) => O.includes(E.id) ? O.filter((K) => K !== E.id) : [...O, E.id]
                  ), g(E.id);
                else if (U.shiftKey && p !== null) {
                  const O = P.findIndex(
                    (J) => J.id === E.id
                  ), K = P.findIndex(
                    (J) => J.id === p
                  );
                  if (O !== -1 && K !== -1) {
                    const J = Math.min(O, K), oe = Math.max(O, K), ue = P.slice(J, oe + 1).map((Le) => Le.id);
                    u(
                      (Le) => Array.from(/* @__PURE__ */ new Set([...Le, ...ue]))
                    );
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
              children: /* @__PURE__ */ s.jsx("img", { src: z, alt: E.filename, draggable: !1 })
            },
            E.id
          );
        }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__actions", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__action-menu-wrapper", ref: j, children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__action-btn",
                onClick: () => y(!v),
                disabled: M === 0,
                title: "Actions",
                children: [
                  I ? `Action (${R.length})` : "Action",
                  /* @__PURE__ */ s.jsx(Up, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: hr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: ui
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: dg
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
                onMouseDown: (z) => z.stopPropagation(),
                onClick: () => {
                  "disabled" in E && E.disabled || (L(E.type), y(!1));
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
              onClick: () => m(!0),
              title: "Clear Tab",
              disabled: M === 0,
              children: /* @__PURE__ */ s.jsx(Qp, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-wrapper", ref: k, children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-lt-slot__menu-btn",
                onClick: () => c(!i),
                title: "Tab Settings",
                children: /* @__PURE__ */ s.jsx(mf, { size: 14 })
              }
            ),
            i && /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-popover", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-lt-slot__settings-row", children: [
                /* @__PURE__ */ s.jsx("label", { htmlFor: `slot-label-${e.id}`, children: "Tab Label:" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    id: `slot-label-${e.id}`,
                    value: S,
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
                          value: x.startsWith("var") ? ((F = x.match(
                            /#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
                          )) == null ? void 0 : F[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(x) ? x : "#9ca3af",
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
                    const E = se.getState(), z = S.trim();
                    if (!z) {
                      E.showToast(
                        "Error: Tab label cannot be empty",
                        "error"
                      );
                      return;
                    }
                    if (E.slots.some(
                      (O) => O.id !== e.id && (O.label.toLowerCase() === z.toLowerCase() || O.id.toLowerCase() === z.toLowerCase())
                    )) {
                      E.showToast(
                        `Error: "${z}" is already in use`,
                        "error"
                      );
                      return;
                    }
                    E.updateSlot(e.id, {
                      label: z,
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
          Gf,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: N,
            onCancel: () => m(!1)
          }
        )
      ]
    }
  );
}, Oy = () => {
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
}, Ay = () => {
  var S;
  Ry();
  const e = se((w) => w.isOpen), t = se((w) => w.slots), n = se((w) => w.buckets), r = se((w) => w.setIsOpen), { state: l } = ge(), [a, o] = h.useState(((S = t[0]) == null ? void 0 : S.id) || "keep"), i = Kf("lightTable"), [c, d] = h.useState(!1);
  if (!e) return null;
  const m = () => {
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
              f && f.split(",").forEach((p) => {
                if (p) {
                  const g = p.trim(), j = l.images.find(
                    (k) => String(k.id) === g
                  );
                  se.getState().addToBucket(w.id, g, j);
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
          children: /* @__PURE__ */ s.jsx(zs, { size: 16 })
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
            /* @__PURE__ */ s.jsx(ag, { size: 14 }),
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
        children: /* @__PURE__ */ s.jsx(Py, { config: w })
      },
      w.id
    )) }),
    c && /* @__PURE__ */ s.jsx(
      Gf,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => d(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(Oy, {})
  ] });
  return ce.createPortal(y, i);
}, qf = () => {
  const { state: e, refreshFavorites: t } = ge(), [n, r] = h.useState(!1), [l, a] = h.useState(null), [o, i] = h.useState("info"), [c, d] = h.useState(null), [m, v] = h.useState(""), [y, S] = h.useState("");
  h.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const w = h.useCallback(
    async (u, p, g) => {
      u.stopPropagation();
      const j = `Are you sure you want to delete the favorite "${g}"?`;
      if (window.confirm(j))
        try {
          await Mc(p), await t();
        } catch (k) {
          H.error("Failed to delete favorite", k);
        }
    },
    [t]
  ), x = h.useCallback(
    (u, p) => {
      u.stopPropagation(), d(p), v(p.name), S(p.query);
    },
    []
  ), _ = h.useCallback(async () => {
    if (!(!c || !m.trim() || !y.trim()))
      try {
        r(!0), await Lg(
          c.id,
          m,
          y
        ), await t(), d(null);
      } catch (u) {
        H.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, m, y, t]), f = h.useCallback(async () => {
    if (!e.searchQuery || n) return;
    if (e.favorites.some(
      (p) => p.query === e.searchQuery
    )) {
      const p = e.favorites.find((g) => g.query === e.searchQuery);
      if (p) {
        r(!0);
        try {
          await Mc(p.id), await t();
        } catch (g) {
          H.error("Failed to delete favorite:", g);
        } finally {
          r(!1);
        }
      }
      return;
    }
    r(!0);
    try {
      await Tg(e.searchQuery, e.searchQuery), await t();
    } catch (p) {
      H.error("Failed to save favorite:", p);
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
    editFavoriteName: m,
    setEditFavoriteName: v,
    editFavoriteQuery: y,
    setEditFavoriteQuery: S,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: _,
    handleSaveFavorite: f,
    setToastMessage: (u, p = "info") => {
      a(u), i(p);
    }
  };
}, Yf = ({
  fav: e,
  onSelect: t,
  onEdit: n,
  onDelete: r
}) => {
  const [l, a] = h.useState(!1), [o, i] = h.useState(!1), [c, d] = h.useState(!1);
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
                  children: /* @__PURE__ */ s.jsx(ff, { size: 14 })
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
                  children: /* @__PURE__ */ s.jsx(Ut, { size: 14 })
                }
              )
            ]
          }
        )
      ]
    }
  );
}, zy = "_menu_jab2z_1", Fy = "_header_jab2z_14", Wy = "_title_jab2z_23", $y = "_count_jab2z_32", Uy = "_list_jab2z_37", Vy = "_toast_jab2z_46", By = "_editTitle_jab2z_56", Qy = "_form_jab2z_62", Hy = "_fieldGroup_jab2z_69", Ky = "_label_jab2z_75", Gy = "_input_jab2z_81", qy = "_textarea_jab2z_82", Ke = {
  menu: zy,
  header: Fy,
  title: Wy,
  count: $y,
  list: Uy,
  toast: Vy,
  editTitle: By,
  form: Qy,
  fieldGroup: Hy,
  label: Ky,
  input: Gy,
  textarea: qy
}, Yy = ({
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
    editFavoriteQuery: m,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: y,
    handleEditFavorite: S,
    handleSaveEditFavorite: w
  } = qf(), [x, _] = h.useState({ top: 0, left: 0 }), f = h.useRef(null), u = h.useRef(null);
  return Ue({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), al({
    enabled: !!e && !o,
    insideRefs: [f],
    onOutside: () => t()
  }), h.useEffect(() => {
    if (e) {
      let j = e.left;
      const k = e.bottom + 5;
      j + 300 > window.innerWidth - 10 && (j = window.innerWidth - 300 - 10), j < 10 && (j = 10), _({ top: k, left: j });
    }
  }, [e]), h.useEffect(() => {
    o && u.current && u.current.focus();
  }, [o]), e ? ce.createPortal(
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
                  dr,
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
            /* @__PURE__ */ s.jsx("div", { className: Ke.list, children: r.favorites.map((p) => /* @__PURE__ */ s.jsx(
              Yf,
              {
                fav: p,
                onSelect: (g) => {
                  n(g), t();
                },
                onEdit: S,
                onDelete: y
              },
              p.id
            )) }),
            a && /* @__PURE__ */ s.jsx("div", { className: Ke.toast, children: a })
          ]
        }
      ),
      o && /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "meld-modal-overlay meld-favorites-edit-modal-overlay",
          onMouseDown: (p) => {
            p.target === p.currentTarget && i(null);
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "meld-modal-content meld-modal-content--small",
              onClick: (p) => p.stopPropagation(),
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                  /* @__PURE__ */ s.jsxs("h2", { className: Ke.editTitle, children: [
                    /* @__PURE__ */ s.jsx(dr, { size: 20, color: "var(--meld-accent-color)" }),
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
                    /* @__PURE__ */ s.jsx(
                      "label",
                      {
                        htmlFor: "edit-favorite-name-ctx",
                        className: Ke.label,
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
                        onChange: (p) => d(p.target.value),
                        placeholder: "Favorite Name",
                        className: Ke.input,
                        onKeyDown: (p) => {
                          p.key === "Enter" && (qe(p), w()), p.key === "Escape" && (qe(p), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: Ke.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx(
                      "label",
                      {
                        htmlFor: "edit-favorite-query-ctx",
                        className: Ke.label,
                        children: "Search Query"
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: m,
                        onChange: (p) => v(p.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: Ke.textarea,
                        onKeyDown: (p) => {
                          p.key === "Enter" && !p.shiftKey && (qe(p), w()), p.key === "Escape" && (qe(p), i(null));
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
  ) : null;
}, Pl = (e) => {
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
}, Xy = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = h.useState(e.searchQuery), [a, o] = h.useState([]), [i, c] = h.useState(!1), [d, m] = h.useState([]), [v, y] = h.useState([]), S = e.settings["search.show_all_keywords"], [w, x] = h.useState(-1), [_, f] = h.useState(null), u = h.useRef(null), p = h.useRef(e.searchQuery), g = h.useCallback(async () => {
    if (v.length > 0) return;
    const D = await Ng();
    y(D);
  }, [v.length]);
  h.useEffect(() => {
    Mg().then((D) => {
      f(D);
    }), S && g();
  }, [g, S]);
  const j = h.useMemo(() => {
    if (!_) return null;
    const D = _.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${D}):(.*)$`, "i");
  }, [_]), k = h.useCallback(() => {
    const D = !S;
    D && g(), n("search.show_all_keywords", D);
  }, [S, g, n]), b = r !== p.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      m([]);
      return;
    }
    Cg().then((D) => {
      m(D);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    l(e.searchQuery), p.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var D;
    (D = u.current) == null || D.focus();
  }, []);
  const M = h.useCallback(
    (D, L = !0) => {
      p.current !== D && (H.log("SearchBar: triggering search", { query: D }), t({ type: "SET_SEARCH_QUERY", payload: D }), L && c(!1), p.current = D);
    },
    [t]
  );
  h.useEffect(() => {
    const D = setTimeout(async () => {
      if (r === p.current)
        return;
      if (!e.settings["search.input_suggest"] || !j) {
        o([]), c(!1);
        return;
      }
      const L = Pl(r), N = L[L.length - 1];
      if (N) {
        const T = N.match(j);
        if (T) {
          const F = T[1].toLowerCase();
          let E = T[2];
          E.startsWith('"') && (E = E.substring(1)), E.endsWith('"') && (E = E.substring(0, E.length - 1));
          const z = await Eg(E, F);
          o(z), c(z.length > 0), x(-1);
        } else {
          const F = N.replace(/^([-!])/, "").toLowerCase();
          if (F && _) {
            const E = _.all_prefixes.filter((z) => z.startsWith(F)).map((z) => ({
              type: z,
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
  }, [
    r,
    e.settings["search.input_suggest"],
    j,
    _
  ]);
  const P = h.useCallback(
    (D) => {
      var U;
      const L = Pl(r), T = (L.pop() || "").match(/^([-!])/), F = T ? T[1] : "", z = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(D.type);
      if (D.value === "") {
        const O = `${[...L, `${F}${D.type}:`].join(" ").trim()}`;
        l(O);
      } else {
        const O = z ? D.value : `"${D.value}"`, K = `${[
          ...L,
          `${F}${D.type}:${O}`
        ].join(" ").trim()} `;
        l(K), o([]), c(!1);
      }
      (U = u.current) == null || U.focus();
    },
    [r, _]
  ), R = (D) => {
    if (D.key === "Enter")
      qe(D), i && w >= 0 ? P(a[w]) : M(r);
    else if (D.key === "Tab") {
      if (i && a.length > 0) {
        qe(D);
        const L = w >= 0 ? w : 0;
        P(a[L]);
      }
    } else D.key === "ArrowDown" ? i && (qe(D), x((L) => Math.min(L + 1, a.length - 1))) : D.key === "ArrowUp" ? i && (qe(D), x((L) => Math.max(L - 1, -1))) : D.key === "Escape" && (qe(D), c(!1));
  }, I = h.useCallback(() => {
    l(""), M("");
  }, [M]), A = h.useCallback(
    (D, L, N = !1) => {
      var fe;
      const T = Pl(r), F = T[T.length - 1] || "";
      let E = !1;
      const z = F.replace(/^([-!])/, "").toLowerCase();
      z && D.toLowerCase().startsWith(z) && (E = !0);
      const U = F.match(/^([-!])/), O = E && U ? U[1] : "";
      if (E && T.pop(), N) {
        const Tt = [...T, `${O}${D}:`].filter(Boolean).join(" ");
        l(Tt), (fe = u.current) == null || fe.focus();
        return;
      }
      const oe = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(D) ? L : `"${L}"`, ue = `${O}${D}:${oe}`, Le = [...T, ue].filter(Boolean).join(" ");
      l(Le), M(Le);
    },
    [r, M, _]
  ), B = h.useCallback(
    (D) => {
      l(D), D || M("");
    },
    [M]
  ), C = h.useCallback(() => {
    if (r === p.current || !j)
      return;
    const D = Pl(r), L = D[D.length - 1];
    if (!L) return;
    const N = !!L.match(j), T = L.replace(/^([-!])/, "").toLowerCase(), F = T && (_ == null ? void 0 : _.all_prefixes.some((E) => E.startsWith(T)));
    (N || F) && c(!0);
  }, [r, j, _]), V = h.useCallback(() => {
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
    showAllKeywords: S,
    toggleShowAllKeywords: k,
    selectedIndex: w,
    setSelectedIndex: x,
    inputRef: u,
    isQueryChanged: b,
    handleSearch: M,
    handleKeyDown: R,
    applySuggestion: P,
    clearSearch: I,
    applySearchSuggestion: A,
    handleInputChange: B,
    handleInputFocus: C,
    handleInputBlur: V
  };
}, zc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(hr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Fp, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(og, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Wp, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(cf, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(of, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(Hp, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(zp, { size: 12 });
    default:
      return null;
  }
}, Zy = ({
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
  applySearchSuggestion: v,
  favorites: y,
  onSelectFavorite: S,
  onEditFavorite: w,
  onDeleteFavorite: x
}) => {
  const _ = (g, j, k) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(g.type, g.value, k === "all"),
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
            children: zc(g.type)
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
        k !== "all" && /* @__PURE__ */ s.jsx(
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
    `${k}-${g.type}:${g.value}:${j}`
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
      children: t.map((g, j) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (k) => {
            k.preventDefault(), l(g);
          },
          onMouseEnter: () => r(j),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            cursor: "pointer",
            backgroundColor: j === n ? "var(--comfy-input-bg-active, rgba(59, 130, 246, 0.15))" : "transparent",
            borderBottom: "1px solid var(--comfy-menu-border, #2a2a2a)",
            borderLeft: j === n ? "3px solid var(--meld-accent-color, #3b82f6)" : "3px solid transparent",
            transition: "all 0.1s ease-out"
          },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transform: j === n ? "translateX(2px)" : "none",
                transition: "transform 0.1s ease-out"
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    style: {
                      color: j === n ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-secondary)",
                      display: "flex",
                      transition: "color 0.1s"
                    },
                    children: zc(g.type)
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
            children: i.map(
              (g, j) => _(g, j, "quick")
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
                  children: Array.from(new Set(c.map((g) => g.type))).map(
                    (g, j) => _({ type: g, value: "" }, j, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), p = () => y.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(dr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
              Yf,
              {
                fav: g,
                onSelect: S,
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
        p()
      ]
    }
  );
}, Jy = () => {
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
    setSelectedIndex: m,
    inputRef: v,
    isQueryChanged: y,
    handleSearch: S,
    handleKeyDown: w,
    applySuggestion: x,
    clearSearch: _,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: p,
    handleInputBlur: g
  } = Xy(), {
    isSaving: j,
    toastMessage: k,
    toastType: b,
    editingFavorite: M,
    setEditingFavorite: P,
    editFavoriteName: R,
    setEditFavoriteName: I,
    editFavoriteQuery: A,
    setEditFavoriteQuery: B,
    handleDeleteFavorite: C,
    handleEditFavorite: V,
    handleSaveEditFavorite: D,
    handleSaveFavorite: L,
    setToastMessage: N
  } = qf(), T = async () => {
    if (e.favorites.some(
      (K) => K.query === e.searchQuery
    )) {
      N("This query is already in your favorites.", "error");
      return;
    }
    await L();
  };
  Ue({
    onEscape: () => P(null),
    enabled: !!M
  });
  const F = h.useRef(null), E = h.useRef(!1);
  h.useEffect(() => {
    M && F.current && F.current.focus();
  }, [M]);
  const z = (O) => {
    O.target === O.currentTarget && (E.current = !0);
  }, U = (O) => {
    O.target === O.currentTarget && E.current && P(null), E.current = !1;
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
                    border: b === "error" ? "1px solid var(--brand-red, #ff4c4c)" : "1px solid var(--comfy-menu-border, #444)",
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
                    /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => S(t),
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
                        onClick: T,
                        disabled: j,
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
                          dr,
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
                Zy,
                {
                  showSuggestions: l,
                  suggestions: r,
                  selectedIndex: d,
                  setSelectedIndex: m,
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
                    n(O), S(O);
                  },
                  onEditFavorite: V,
                  onDeleteFavorite: C
                }
              )
            ]
          }
        ),
        M && ce.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: z,
              onMouseUp: U,
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (O) => O.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs(
                        "h2",
                        {
                          style: { display: "flex", alignItems: "center", gap: "10px" },
                          children: [
                            /* @__PURE__ */ s.jsx(dr, { size: 20, color: "var(--meld-accent-color)" }),
                            "Edit Favorite"
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => P(null),
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
                                    value: R,
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
                                      O.key === "Enter" && (qe(O), D()), O.key === "Escape" && (qe(O), P(null));
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
                                    value: A,
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
                                      O.key === "Enter" && !O.shiftKey && (qe(O), D()), O.key === "Escape" && (qe(O), P(null));
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
                          onClick: () => P(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn-primary",
                          onClick: D,
                          disabled: j || !R.trim() || !A.trim(),
                          children: j ? "Saving..." : "Save Changes"
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
}, ev = ({
  onClose: e,
  onSearch: t
}) => {
  const [n, r] = h.useState([]), [l, a] = h.useState(!0), [o, i] = h.useState(""), [c, d] = h.useState(""), [m, v] = h.useState(!1), [y, S] = h.useState(null), [w, x] = h.useState(""), [_, f] = h.useState(!1), u = h.useRef(null), p = h.useCallback(async () => {
    a(!0);
    try {
      const I = await hi();
      r(I);
    } catch (I) {
      console.error("Failed to fetch tags:", I);
    } finally {
      a(!1);
    }
  }, []);
  h.useEffect(() => {
    p();
  }, [p]), h.useEffect(() => {
    y !== null && u.current && (u.current.focus(), u.current.select());
  }, [y]);
  const g = async (I) => {
    I.preventDefault();
    const A = c.trim();
    if (!(!A || m)) {
      if (A.toLowerCase() === _t) {
        alert(
          `Tag name '${_t}' is reserved for search and cannot be used.`
        );
        return;
      }
      if (n.some((B) => B.name.toLowerCase() === A.toLowerCase())) {
        alert(`Tag "${A}" already exists.`);
        return;
      }
      v(!0);
      try {
        await Hg(A), d(""), await p();
      } catch (B) {
        console.error("Failed to add tag:", B);
      } finally {
        v(!1);
      }
    }
  }, j = async (I, A) => {
    if (confirm(`Are you sure you want to delete tag "${A}"?`))
      try {
        await Kg(I), await p();
      } catch (B) {
        console.error("Failed to delete tag:", B);
      }
  }, k = (I) => {
    S(I.id), x(I.name);
  }, b = () => {
    S(null), x("");
  }, M = async (I) => {
    I.preventDefault();
    const A = w.trim();
    if (!A || y === null || _) return;
    if (A.toLowerCase() === _t) {
      alert(
        `Tag name '${_t}' is reserved for search and cannot be used.`
      );
      return;
    }
    const B = n.find((C) => C.id === y);
    if (B && B.name === A) {
      b();
      return;
    }
    if (n.some(
      (C) => C.id !== y && C.name.toLowerCase() === A.toLowerCase()
    )) {
      alert(`Tag "${A}" already exists.`);
      return;
    }
    f(!0);
    try {
      await Gg(y, A), b(), await p();
    } catch (C) {
      console.error("Failed to rename tag:", C), alert(C instanceof Error ? C.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, P = (I) => {
    t(`tag:${I}`);
  }, R = h.useMemo(() => n.filter(
    (I) => I.name.toLowerCase().includes(o.toLowerCase())
  ), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(hr, { size: 16 }),
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
              /* @__PURE__ */ s.jsx(zs, { size: 14 }),
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
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: R.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : R.map((I) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: y === I.id ? /* @__PURE__ */ s.jsxs(
        "form",
        {
          className: "meld-tag-rename-form",
          onSubmit: M,
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                ref: u,
                className: "meld-tag-rename-input",
                value: w,
                onChange: (A) => x(A.target.value),
                onKeyDown: (A) => A.key === "Escape" && b()
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
                onClick: b,
                disabled: _,
                children: /* @__PURE__ */ s.jsx(pe, { size: 14 })
              }
            )
          ]
        }
      ) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: I.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => P(I.name),
              children: /* @__PURE__ */ s.jsx(Mn, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => k(I),
              children: /* @__PURE__ */ s.jsx(ff, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => j(I.id, I.name),
              children: /* @__PURE__ */ s.jsx(Ut, { size: 14 })
            }
          )
        ] })
      ] }) }, I.id)) })
    ] })
  ] });
}, ga = 56, Xf = (e, t) => {
  const n = h.useCallback(async (l) => fi(l), []), r = h.useCallback(
    (l) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (l.ancestors && l.ancestors.length > 0)
        return l.ancestors.slice(0, a).map((m) => ({
          id: m.id,
          imgSrc: mt(m, ga)
        }));
      const o = l.parent_id;
      if (!o || !l.parent_filename) return [];
      const i = e.find((m) => m.id === o);
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
        const m = r(i);
        return [d, ...m].slice(0, a);
      }
      return [d];
    },
    [t, e]
  );
  return { getParentChain: r, fetchLineage: n };
}, Fc = ({
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
}, tv = ({
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
  handleNext: m,
  handlePrevious: v,
  handleEditTags: y,
  handleRestore: S,
  fetchLineage: w,
  restoreImages: x,
  bulkUpdateImageTags: _
}) => {
  const [f, u] = h.useState(null), [p, g] = h.useState(null), j = h.useCallback(
    async (I = !1) => {
      if (!n) return;
      const A = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!I && A === "confirm") {
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
        if (A === "lineage") {
          V = await w(n.id);
          for (const D of V)
            C.add(D.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null || (await ho(
          Array.from(C),
          B
        ), !d.isMountedRef.current || d.viewerImageIdRef.current === null))
          return;
        if (Fc({
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
          ], L = /* @__PURE__ */ new Map();
          for (const T of D)
            L.set(T.id, T);
          const N = Array.from(C).map((T) => {
            const F = L.get(T);
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
  ), k = h.useCallback(() => {
    n && y(n);
  }, [y, n]), b = h.useCallback(async () => {
    n && (l.length > 1 ? m() : t({ type: "CLOSE_VIEWER" }), await S(n));
  }, [l.length, t, m, S, n]), M = h.useCallback(async () => {
    if (!f || f.length === 0) return;
    const I = f.map((A) => A.id);
    try {
      const A = await x(I);
      if (!d.isMountedRef.current) return;
      const B = A.restored_ids || I, C = new Set(B), V = f.filter(
        (L) => C.has(L.id)
      );
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
    } catch (A) {
      t({
        type: "SET_ERROR",
        payload: A instanceof Error ? A.message : String(A)
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
  ]), P = h.useCallback(async () => {
    if (f && f.length > 0) {
      await M();
      return;
    }
    if (!p || p.type !== "tags")
      return;
    const { imageId: I, addTags: A, removeTags: B } = p;
    try {
      await _([I], A, B);
      const C = (o === "lineage" ? i : c).find((V) => V.id === I);
      if (C) {
        const V = [...C.tags];
        for (const L of A)
          V.includes(L) || V.push(L);
        const D = V.filter((L) => !B.includes(L));
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
    p,
    i,
    _,
    e.viewerLightTableSlotId,
    o
  ]), R = h.useCallback(
    async (I) => {
      if (!I || !n) return;
      const A = n.id, B = [...n.tags], C = gy(I, n), {
        addTags: V,
        removeTags: D,
        isDeleted: L,
        moveNext: N,
        movePrev: T,
        sendToLtSlot: F
      } = C;
      if (F) {
        const E = se.getState(), z = E.slots.find(
          (U) => U.id.toLowerCase() === F.toLowerCase() || U.label.toLowerCase() === F.toLowerCase()
        );
        z ? (E.addToBucket(z.id, String(A), n), E.showToast(`Sent to ${z.label}`), L || Fc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([A]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [A]
        })) : (E.showToast(
          `Error: Light Table slot "${F}" not found`,
          "error"
        ), console.warn(
          `Attempted to send to non-existent LT slot: ${F}`
        ));
      }
      if (V.length > 0 || D.length > 0)
        try {
          await _([A], V, D);
          const E = [...B];
          for (const U of V)
            E.includes(U) || E.push(U);
          const z = E.filter((U) => !D.includes(U));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: A, tags: z }
          }), g({
            type: "tags",
            imageId: A,
            addTags: [...D],
            removeTags: [...V]
          }), u(null);
        } catch (E) {
          console.error("Failed to update tags via shortcut:", E), t({
            type: "SET_ERROR",
            payload: E instanceof Error ? E.message : String(E)
          });
        }
      L ? await j(!0) : N ? m() : T && await v();
    },
    [
      a,
      l,
      t,
      _,
      j,
      m,
      v,
      n,
      e.viewerLightTableSlotId,
      o
    ]
  );
  return {
    lastDeletedImages: f,
    setLastDeletedImages: u,
    handleDelete: j,
    handleTagEditAction: k,
    handleRestoreAction: b,
    handleUndo: P,
    executeCommand: R
  };
}, nv = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, l] = h.useState(!1), a = h.useCallback(
    (o) => {
      o && "stopPropagation" in o && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        console.error(
          `Error attempting to enable full-screen mode: ${c.message}`
        );
      }));
    },
    [e]
  );
  return h.useEffect(() => {
    const o = () => {
      const i = !!document.fullscreenElement;
      l(i), n(i ? t["fullscreen.show_details_by_default"] : t["viewer.show_details_by_default"]);
    };
    return document.addEventListener("fullscreenchange", o), () => {
      document.removeEventListener("fullscreenchange", o);
    };
  }, [t, n]), { isFullscreen: r, toggleFullscreen: a };
}, rv = ({
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
  handleUndo: m,
  handleTagEditAction: v,
  handleRestoreAction: y,
  executeCommand: S,
  setShowDetails: w,
  setActiveShortcutKey: x
}) => {
  const _ = h.useCallback(
    (f) => {
      if (!(f.target instanceof HTMLElement))
        return;
      const u = f.target, p = u.tagName === "INPUT" || u.tagName === "TEXTAREA" || u.isContentEditable;
      if (p && f.key !== "Escape") {
        f.key === "Enter" && (f.ctrlKey || f.metaKey) && f.preventDefault();
        return;
      }
      if (e === null || t !== "none")
        return;
      const g = f.key === "Delete" || f.key === "Backspace", j = f.key === "ArrowRight" || f.key === "ArrowLeft" || f.key === "ArrowDown" || f.key === "ArrowUp", k = [
        "f",
        "F",
        "i",
        "I",
        "t",
        "T",
        "r",
        "R",
        "Enter"
      ].includes(f.key), b = f.key === "Escape", M = (f.ctrlKey || f.metaKey) && (f.key === "z" || f.key === "Z" || f.code === "KeyZ"), P = /^[0-9]$/.test(f.key) && !f.ctrlKey && !f.metaKey && !f.altKey && f.code !== "KeyZ";
      if (g || j || k || b || M || P)
        if (!p || b)
          sl(f);
        else
          return;
      else
        return;
      if (b)
        document.fullscreenElement ? document.exitFullscreen() : l({ type: "CLOSE_VIEWER" });
      else if (j)
        f.key === "ArrowRight" || f.key === "ArrowDown" ? i() : c();
      else if (k && (f.key === "f" || f.key === "F" || f.key === "Enter"))
        o(f);
      else if (k && (f.key === "i" || f.key === "I"))
        w((R) => !R);
      else if (k && (f.key === "t" || f.key === "T"))
        v();
      else if (k && (f.key === "r" || f.key === "R") && n === "trash")
        y();
      else if (g)
        d();
      else if (M)
        m();
      else if (P && !p) {
        const R = `viewer.shortcut.${f.key}`, I = r[R];
        typeof I == "string" && I && (x(f.key), setTimeout(() => {
          a.current && x(null);
        }, 500), S(I));
      }
    },
    [
      t,
      l,
      S,
      d,
      i,
      c,
      y,
      v,
      m,
      a,
      x,
      w,
      r,
      o,
      n,
      e
    ]
  );
  Ws({
    enabled: e !== null,
    onKeyDown: _
  });
}, lv = ({
  viewerMode: e,
  viewerImageId: t,
  lineageLength: n,
  dispatch: r,
  isMountedRef: l
}) => {
  const [a, o] = h.useState(!1), i = h.useRef(0);
  return h.useEffect(() => {
    let c = !1;
    if (e === "lineage" && t !== null && n === 0) {
      const d = ++i.current;
      o(!0), fi(t).then((m) => {
        !c && l.current && d === i.current && r({ type: "SET_LINEAGE", payload: m });
      }).catch((m) => {
        console.error("Failed to fetch lineage:", m);
      }).finally(() => {
        !c && l.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, l, n, t, e]), { isLoadingLineage: a };
}, sv = ({
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
  mountRefs: m
}) => {
  const v = a === "lighttable" ? r : void 0, y = h.useCallback(() => {
    e({
      type: "NEXT_IMAGE",
      payload: { isFullscreen: t, currentList: v }
    });
  }, [v, e, t]), S = h.useCallback(async () => {
    const w = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (l === 0 && a === "gallery" && o.hasMore && !c && w) {
      d(!0);
      try {
        const x = o.limit, _ = o.total, f = Math.max(0, _ - x), u = await ql(
          f,
          x,
          i
        );
        if (!m.isMountedRef.current || (e({ type: "APPEND_IMAGES", payload: u }), m.viewerImageIdRef.current === null)) return;
        if (u.images.length > 0) {
          const p = u.images[u.images.length - 1];
          e({
            type: "OPEN_VIEWER",
            payload: { id: p.id, mode: "gallery" }
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
    m,
    o,
    i,
    d,
    n,
    a
  ]);
  return { handleNext: y, handlePrevious: S };
};
function av(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] : t[n + 1];
  return { prevId: a ? l || !r ? null : t[t.length - 1] : t[n - 1], nextId: i };
}
const ov = ({
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
  h.useEffect(() => {
    o !== "gallery" || e === null || i || !a || n === -1 || n >= t.length - 15 && c();
  }, [
    n,
    t.length,
    a,
    i,
    c,
    e,
    o
  ]), h.useEffect(() => {
    if (e === null || t.length === 0) return;
    const m = t.map((_) => _.id), v = m.indexOf(e);
    if (v === -1) return;
    const y = r ? l["fullscreen.loop"] : l["viewer.loop"], { prevId: S, nextId: w } = av({
      ids: m,
      index: v,
      loopEnabled: y,
      hasMore: a && o === "gallery"
    }), x = setTimeout(() => {
      const _ = [S, w].filter(
        (f) => f !== null && f !== e
      );
      _.length !== 0 && Promise.allSettled(_.map((f) => d(f))).then(
        (f) => {
          for (const u of f)
            u.status === "rejected" && H.warn(
              "Prefetching adjacent image details failed",
              u.reason
            );
        }
      );
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
  ]), h.useEffect(() => {
    if (e === null || t.length === 0 || n === -1) return;
    const m = [
      n + 1,
      n + 2,
      n - 1
    ], v = setTimeout(() => {
      for (const y of m)
        if (y >= 0 && y < t.length) {
          const S = t[y], w = new Image();
          w.src = mi(S);
        }
    }, 150);
    return () => clearTimeout(v);
  }, [n, t, e]);
};
function iv(e) {
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
const cv = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var fl;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: m,
    handleEditTags: v,
    handleEditNotes: y,
    handleRestore: S,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: _,
    handleSendToWorkflow: f,
    handleRunWithWorkflow: u,
    handleRunWithMask: p,
    handleEditSource: g
  } = Fs(e, t), { getParentChain: j, fetchLineage: k } = Xf(a, c), [b, M] = h.useState(!1), [P, R] = h.useState(
    c["viewer.show_details_by_default"]
  ), [I, A] = h.useState(null), B = I ?? c["viewer.show_thumbnails"], [C, V] = h.useState(!1), [D, L] = h.useState(
    null
  ), N = h.useRef(null), T = {
    isMountedRef: h.useRef(!0),
    viewerImageIdRef: h.useRef(l)
  };
  h.useEffect(() => (T.isMountedRef.current = !0, () => {
    T.isMountedRef.current = !1;
  }), [T.isMountedRef]), h.useEffect(() => {
    T.viewerImageIdRef.current = l;
  }, [T.viewerImageIdRef, l]);
  const F = h.useMemo(() => {
    const be = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const ot = se.getState(), gt = ot.buckets[e.viewerLightTableSlotId] || [], Lt = new Map(a.map((Q) => [Q.id, Q])), W = new Map(i.map((Q) => [Q.id, Q]));
      return gt.map((Q) => {
        const ee = Number.parseInt(Q, 10);
        return Lt.get(ee) || W.get(ee) || ot.images[Q] || iv(ee);
      });
    }
    return o === "lineage" ? i : a.filter(
      (ot) => ot.exists !== !1 && (c["gallery.show_parent_images"] || be || !ot.has_children)
    );
  }, [
    o,
    e.viewerLightTableSlotId,
    i,
    a,
    c,
    e.searchQuery
  ]), E = l === null ? -1 : F.findIndex((be) => be.id === l), U = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? F : a).find((be) => be.id === l) || (l === ((fl = e.viewerFallbackImage) == null ? void 0 : fl.id) ? e.viewerFallbackImage : void 0), { isFullscreen: O, toggleFullscreen: K } = nv({
    overlayRef: N,
    settings: c,
    setShowDetails: R
  }), { handleNext: J, handlePrevious: oe } = sv({
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
    lastDeletedImages: ue,
    setLastDeletedImages: Le,
    handleDelete: fe,
    handleTagEditAction: Tt,
    handleRestoreAction: X,
    handleUndo: Bt,
    executeCommand: Qt
  } = tv({
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
    handleNext: J,
    handlePrevious: oe,
    handleEditTags: v,
    handleRestore: S,
    fetchLineage: k,
    restoreImages: d,
    bulkUpdateImageTags: m
  }), { isLoadingLineage: Ht } = lv({
    viewerMode: o,
    viewerImageId: l,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: T.isMountedRef
  });
  rv({
    viewerImageId: l,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: T.isMountedRef,
    toggleFullscreen: K,
    handleNext: J,
    handlePrevious: oe,
    handleDelete: () => {
      fe();
    },
    handleUndo: Bt,
    handleTagEditAction: Tt,
    handleRestoreAction: X,
    executeCommand: Qt,
    setShowDetails: R,
    setActiveShortcutKey: L
  }), h.useEffect(() => {
    l !== null && r(l).catch((be) => {
      console.error("Failed to fetch full image details for viewer:", be);
    });
  }, [r, l]), ov({
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
  const Ln = h.useMemo(() => {
    if (!B || E === -1) return [];
    const be = c["viewer.thumbnail_window_size"], ot = Math.floor(be / 2);
    let gt = Math.max(0, E - ot);
    const Lt = Math.min(F.length, gt + be);
    return Lt === F.length && (gt = Math.max(0, Lt - be)), F.slice(gt, Lt).map((W, Q) => ({
      img: W,
      absIndex: gt + Q
    }));
  }, [F, E, c, B]), pr = h.useMemo(() => U ? j(U) : [], [j, U]);
  return h.useEffect(() => {
    var be, ot;
    if (l !== null) {
      if (B) {
        const gt = document.querySelector(
          ".meld-viewer-thumbnail--active"
        );
        gt && gt.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((be = document.activeElement) == null ? void 0 : be.tagName) === "CANVAS" && document.activeElement.blur(), (ot = N.current) == null || ot.focus();
    }
  }, [B, l]), {
    isFullscreen: O,
    showDetails: P,
    setShowDetails: R,
    showThumbnails: B,
    setShowThumbnailsOverride: A,
    isLoadingLineage: Ht,
    isJumping: C,
    isMenuOpen: b,
    setIsMenuOpen: M,
    activeShortcutKey: D,
    lastDeletedImages: ue,
    setLastDeletedImages: Le,
    overlayRef: N,
    handleNext: J,
    handlePrevious: oe,
    handleDelete: fe,
    handleUpdateUserNotes: w,
    handleEditNotes: () => U && y(U),
    handleTagEdit: Tt,
    handleRestore: X,
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
    handleRunWithMask: (be) => U && p(U, be),
    handleEditSource: () => U && g(U),
    toggleFullscreen: K,
    currentIndex: E,
    currentThumbnails: F,
    image: U,
    windowedThumbnails: Ln,
    parentChain: pr
  };
}, yi = ({
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
  onEditNotes: v,
  onDelete: y,
  onRestore: S,
  showRestore: w,
  deleteLabel: x,
  showQuickShortcuts: _ = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: p = ""
}) => {
  const [g, j] = h.useState("left");
  h.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? j("right") : j("left"));
  }, [e, n]);
  const k = (P) => {
    switch (P) {
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
        return v;
      case "restore_image":
        return S;
      case "delete_or_trash":
        return y;
      default:
        return null;
    }
  }, b = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((P) => P && P !== ""), M = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: M, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${p}`,
        onClick: (P) => {
          P.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(ng, { size: u })
      }
    ),
    _ && b.map((P, R) => {
      const I = Of.find((C) => C.id === P);
      if (!I || !I.icon) return null;
      const A = I.icon, B = k(P);
      return !B || P === "restore_image" && !w ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${p}`,
          onClick: (C) => {
            C.stopPropagation(), B();
          },
          title: I.label,
          children: /* @__PURE__ */ s.jsx(A, { size: u })
        },
        `${P}-${R}`
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
            icon: Ef,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: If,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Tf,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Nf,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: Mf,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Cf,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Rf,
            handler: m
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Df,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Lf,
            handler: d
          },
          ...w ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: Pf,
              handler: S,
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
        ].map((P) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${P.className || ""}`,
            onMouseDown: (R) => R.stopPropagation(),
            onClick: (R) => {
              R.preventDefault(), R.stopPropagation(), P.handler(), t(!1);
            },
            children: [
              /* @__PURE__ */ s.jsx(P.icon, { size: 14, color: P.color }),
              /* @__PURE__ */ s.jsx("span", { children: P.label })
            ]
          },
          P.id
        ))
      }
    )
  ] });
}, dv = ({
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
}) }) : null, uv = ({
  image: e,
  isFullscreen: t,
  settings: n,
  showIcons: r,
  parentChain: l,
  dispatch: a,
  onEditNotes: o
}) => {
  const [i, c] = h.useState("idle");
  h.useEffect(() => {
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
            (v, y) => v.imgSrc && /* @__PURE__ */ s.jsx(
              "img",
              {
                src: v.imgSrc,
                className: "meld-lineage-badge__parent-thumb",
                style: { cursor: "pointer" },
                loading: "lazy",
                onClick: (S) => {
                  S.stopPropagation(), a({
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
        m && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
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
}, Zf = h.memo(
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
              children: i ? /* @__PURE__ */ s.jsx(cf, { size: 12 }) : /* @__PURE__ */ s.jsx(of, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
Zf.displayName = "ThumbnailItem";
const fv = ({
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
    Zf,
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
function mv() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ge(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: m,
    isMenuOpen: v,
    setIsMenuOpen: y,
    activeShortcutKey: S,
    setLastDeletedImages: w,
    overlayRef: x,
    handleNext: _,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: p,
    handleRestore: g,
    handleRestoreWorkflow: j,
    handleAddUnifiedLoader: k,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: M,
    handleRunWithMask: P,
    handleEditSource: R,
    handleDelete: I,
    toggleFullscreen: A,
    image: B,
    windowedThumbnails: C,
    parentChain: V
  } = cv({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), D = h.useRef(null), L = h.useRef(null), { executeWorkflow: N } = pi(), T = h.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!B) return null;
  const { viewerImageId: F, viewerMode: E } = e, z = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
  return ce.createPortal(
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
                z && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
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
                      children: /* @__PURE__ */ s.jsx(uf, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(Gp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: A,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(tg, { size: 20 }) : /* @__PURE__ */ s.jsx(Jp, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    yi,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: y,
                      menuRef: L,
                      settings: e.settings,
                      onAddUnifiedLoader: k,
                      onRestoreWorkflow: j,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: M,
                      onRunWithMask: P,
                      onEditSource: R,
                      onEditTags: u,
                      onEditNotes: p,
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
                z && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: m,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(df, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  m && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(rl, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: D,
                      src: mi(B),
                      alt: B.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${m ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                z && /* @__PURE__ */ s.jsx(
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
                  uv,
                  {
                    image: B,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: z,
                    parentChain: V,
                    dispatch: t,
                    onEditNotes: p
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  fv,
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
                /* @__PURE__ */ s.jsx(
                  dv,
                  {
                    settings: e.settings,
                    activeShortcutKey: S
                  }
                )
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            $f,
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
                  for (const J of e.activeModal.images)
                    await N(
                      U,
                      J,
                      K,
                      O
                    );
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            Wf,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (U) => {
                e.activeModal.type === "node_selection" && ll(e.activeModal.image, U);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(Vf, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            Uf,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: w
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(Bf, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(_f, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(Af, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            zf,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            _s,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            _s,
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
            Ff,
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
const hv = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = ge(), [a, o] = h.useState("gallery"), [i, c] = h.useState(""), d = e.searchQuery.trim() !== "", m = h.useRef(null), v = h.useRef(null), y = se((_) => _.buckets), S = h.useMemo(() => {
    const _ = /* @__PURE__ */ new Set();
    for (const f of Object.values(y))
      for (const u of f)
        _.add(Number(u));
    return _;
  }, [y]), w = h.useMemo(() => e.images.filter((_) => S.has(_.id) ? !1 : e.viewScope === "trash" ? _.exists !== !1 || e.settings["gallery.trash.show_missing"] : _.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !_.has_children)), [
    e.images,
    e.settings,
    e.viewScope,
    S,
    d
  ]), x = w;
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (H.log(
      "GalleryPanel: Auto-loading more because all loaded images are hidden"
    ), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), Ws({
    onKeyDown: (_) => {
      if (_.key !== "Escape")
        return;
      const f = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || f || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), sl(_));
    }
  }), h.useEffect(() => {
    const _ = new IntersectionObserver(
      (u) => {
        if (u[0].isIntersecting) {
          if (e.isLoading) {
            H.log(
              "GalleryPanel: Intersection observed but already loading"
            );
            return;
          }
          e.pagination.hasMore ? (H.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : H.log(
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
    return f && _.observe(f), () => {
      f && _.unobserve(f);
    };
  }, [
    r,
    e.isLoading,
    e.pagination.hasMore,
    w.length,
    e.images.length
  ]), h.useEffect(() => {
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
    loadMoreRef: m
  };
}, pv = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ge(), { handleRunWithWorkflow: l, handleRunWithMask: a } = Fs(
    e,
    t
  ), o = e.selectedIds.size, [i, c] = h.useState(!1), [d, m] = h.useState(null), v = h.useRef(null), y = h.useRef(null), S = Kf("bulkActionBar");
  if (Ue({
    onEscape: () => c(!1),
    enabled: i
  }), al({
    enabled: i,
    insideRefs: [v, y],
    onOutside: () => c(!1)
  }), o === 0) return null;
  const w = e.viewScope === "trash", x = () => e.images.filter((b) => e.selectedIds.has(b.id)), _ = () => {
    if (i) {
      c(!1);
      return;
    }
    v.current && (m(v.current.getBoundingClientRect()), c(!0));
  }, f = (b) => {
    b(), c(!1);
  }, u = () => {
    const b = x(), M = /* @__PURE__ */ new Set();
    for (const P of b)
      if (P.tags)
        for (const R of P.tags)
          M.add(R);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(M)
      }
    });
  }, p = () => {
    const b = x();
    l(b);
  }, g = () => {
    const b = x();
    b.length > 0 && a(b, "run");
  }, j = () => {
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "download_options",
        imageIds: Array.from(e.selectedIds)
      }
    });
  }, k = /* @__PURE__ */ s.jsxs(
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
            ref: v,
            type: "button",
            className: "meld-bulk-bar__button meld-bulk-bar__button--action",
            onClick: _,
            children: [
              /* @__PURE__ */ s.jsx(
                eg,
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
                    /* @__PURE__ */ s.jsx(hr, { size: 14 }),
                    " Edit Tags"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => f(p),
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
                    /* @__PURE__ */ s.jsx(lg, { size: 14 }),
                    " Queue Workflow (Mask)"
                  ]
                }
              ),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  type: "button",
                  className: "meld-bulk-bar-menu__item",
                  onClick: () => f(j),
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
      ]
    }
  );
  return ce.createPortal(k, S);
};
function zn(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let m;
    n.key && ((i = n.debug) != null && i.call(n)) && (m = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((w, x) => r[x] !== w)))
      return l;
    r = v;
    let S;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (S = Date.now()), l = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const w = Math.round((Date.now() - m) * 100) / 100, x = Math.round((Date.now() - S) * 100) / 100, _ = x / 16, f = (u, p) => {
        for (u = String(u); u.length < p; )
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
function Wc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const gv = (e, t) => Math.abs(e - t) < 1.01, yv = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, $c = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, vv = (e) => e, wv = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, xv = (e, t) => {
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
  if (l($c(n)), !r.ResizeObserver)
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
      l($c(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Uc = {
  passive: !0
}, Vc = typeof window > "u" ? !0 : "onscrollend" in window, _v = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && Vc ? () => {
  } : yv(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (m) => () => {
    const { horizontal: v, isRtl: y } = e.options;
    l = v ? n.scrollLeft * (y && -1 || 1) : n.scrollTop, a(), t(l, m);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Uc);
  const d = e.options.useScrollendEvent && Vc;
  return d && n.addEventListener("scrollend", c, Uc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, kv = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Sv = (e, {
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
class jv {
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
        getItemKey: vv,
        rangeExtractor: wv,
        onChange: () => {
        },
        measureElement: kv,
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
    }, this.maybeNotify = zn(
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
    }, this.getMeasurementOptions = zn(
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
    ), this.getMeasurements = zn(
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
        const m = this.measurementsCache.slice(0, d), v = new Array(i).fill(
          void 0
        );
        for (let y = 0; y < d; y++) {
          const S = m[y];
          S && (v[S.lane] = y);
        }
        for (let y = d; y < n; y++) {
          const S = a(y), w = this.laneAssignments.get(y);
          let x, _;
          if (w !== void 0 && this.options.lanes > 1) {
            x = w;
            const g = v[x], j = g !== void 0 ? m[g] : void 0;
            _ = j ? j.end + this.options.gap : r + l;
          } else {
            const g = this.options.lanes === 1 ? m[y - 1] : this.getFurthestMeasurement(m, y);
            _ = g ? g.end + this.options.gap : r + l, x = g ? g.lane : y % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(y, x);
          }
          const f = c.get(S), u = typeof f == "number" ? f : this.options.estimateSize(y), p = _ + u;
          m[y] = {
            index: y,
            start: _,
            size: u,
            end: p,
            key: S,
            lane: x
          }, v[x] = y;
        }
        return this.measurementsCache = m, m;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = zn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? bv({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = zn(
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
    }, this.getVirtualItems = zn(
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
        return Wc(
          r[Jf(
            0,
            r.length - 1,
            (l) => Wc(r[l]).start,
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
        const [v, y] = m;
        this._scrollToOffset(v, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const S = () => {
            if (this.currentScrollToIndex !== n) return;
            const w = this.getScrollOffset(), x = this.getOffsetForIndex(n, y);
            if (!x) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            gv(x[0], w) || c(y);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(S) : S();
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
const Jf = (e, t, n, r) => {
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
function bv({
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
  let o = Jf(
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
const Bc = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function Ev({
  useFlushSync: e = !0,
  ...t
}) {
  const n = h.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? ce.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = h.useState(
    () => new jv(r)
  );
  return l.setOptions(r), Bc(() => l._didMount(), []), Bc(() => l._willUpdate()), l;
}
function Cv(e) {
  return Ev({
    observeElementRect: xv,
    observeElementOffset: _v,
    scrollToFn: Sv,
    ...e
  });
}
const em = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ge(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: m,
    handleRunWithWorkflow: v,
    handleRunWithMask: y,
    handleRestore: S,
    handleDelete: w,
    handleEditNotes: x,
    handleUpdateUserNotes: _
  } = Fs(t, n), { getParentChain: f } = Xf(t.images, t.settings), [u, p] = h.useState(null), [g, j] = h.useState(!1), [k, b] = h.useState(null), [M, P] = h.useState(!1), R = h.useRef(null);
  al({
    enabled: g,
    insideRefs: [R],
    onOutside: () => j(!1)
  });
  const I = async (X, Bt, Qt = !1) => {
    try {
      await navigator.clipboard.writeText(X), Qt ? (P(!0), setTimeout(() => P(!1), 2e3)) : (b(Bt), setTimeout(() => b(null), 2e3));
    } catch (Ht) {
      console.error("Failed to copy text: ", Ht);
    }
  }, A = h.useCallback(
    (X) => {
      if (X.key === "Escape") {
        if (u) {
          sl(X), p(null);
          return;
        }
        g && (sl(X), j(!1));
      }
    },
    [u, g]
  );
  Ws({
    enabled: g || u !== null,
    onKeyDown: A
  });
  const B = f(e), V = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, D = t.settings["sidebar.thumbnail_size"] || 100, L = mt(
    e,
    Math.min(400, Math.round(D * 1.5))
  );
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: p,
    isMenuOpen: g,
    setIsMenuOpen: j,
    copiedLabel: k,
    popupCopied: M,
    menuRef: R,
    parentChain: B,
    displayFilename: V,
    imgSrc: L,
    handleCopy: I,
    handleClick: (X) => {
      X.shiftKey ? (X.preventDefault(), X.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : X.ctrlKey || X.metaKey || t.selectedIds.size > 0 ? (X.preventDefault(), X.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id });
    },
    handleSelectToggle: (X) => {
      X.preventDefault(), X.stopPropagation(), X.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id });
    },
    handleContainerClick: (X) => {
      X.shiftKey ? (X.preventDefault(), X.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : X.ctrlKey || X.metaKey || t.selectedIds.size > 0 ? (X.preventDefault(), X.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (X.preventDefault(), X.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleMouseDown: (X) => {
      X.target.closest(
        "textarea, input, button, .meld-image-card__meta-content"
      ) || !X.shiftKey && !X.ctrlKey && !X.metaKey && l || (X.shiftKey || X.ctrlKey || X.metaKey || t.selectedIds.size > 0) && X.preventDefault();
    },
    handleKeyDown: (X) => {
      var Qt, Ht, Ln;
      ((Qt = document.activeElement) == null ? void 0 : Qt.tagName) === "INPUT" || ((Ht = document.activeElement) == null ? void 0 : Ht.tagName) === "TEXTAREA" || (Ln = document.activeElement) != null && Ln.isContentEditable || (X.key === "Enter" || X.key === " ") && (X.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      m(e);
    },
    handleRestore: () => {
      S(e);
    },
    handleDelete: () => {
      w(e);
    },
    handleRunWithWorkflow: () => {
      v(e);
    },
    handleRunWithMask: (X = "run") => y(e, X),
    handleUpdateUserNotes: (X) => _(e.id, X),
    fetchFullImageDetails: r
  };
}, Nv = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => ce.createPortal(
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
                l ? /* @__PURE__ */ s.jsx(ci, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(
                  Bp,
                  {
                    className: "meld-prompt-popup-copy",
                    size: 18,
                    onClick: () => r(t)
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  pe,
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
), tm = Jt.memo(
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
      parentChain: v,
      displayFilename: y,
      imgSrc: S,
      handleCopy: w,
      handleClick: x,
      handleSelectToggle: _,
      handleContainerClick: f,
      handleMouseDown: u,
      handleKeyDown: p,
      handleRestoreWorkflow: g,
      handleAddUnifiedLoader: j,
      handleEditSource: k,
      handleEditTags: b,
      handleEditNotes: M,
      handleSendToWorkflow: P,
      handleRestore: R,
      handleDelete: I,
      handleRunWithWorkflow: A,
      handleRunWithMask: B,
      fetchFullImageDetails: C
    } = em(e), [V, D] = h.useState("idle");
    h.useEffect(() => {
      e.user_notes && V === "saving" && D("idle");
    }, [e.user_notes, V]);
    const L = (N) => {
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
        onKeyDown: p,
        role: "button",
        tabIndex: 0,
        draggable: !0,
        onDragStart: L,
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
                src: S,
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
                        w(
                          T.positive_prompt || T.positive || "-",
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
                        w(
                          T.negative_prompt || T.negative || "-",
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
                onClick: (N) => {
                  N.stopPropagation(), b();
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
            yi,
            {
              isMenuOpen: o,
              setIsMenuOpen: i,
              menuRef: m,
              settings: t.settings,
              onAddUnifiedLoader: j,
              onRestoreWorkflow: g,
              onSendToWorkflow: P,
              onRunWithWorkflow: A,
              onRunWithMask: (N) => B(N),
              onEditSource: k,
              onEditTags: b,
              onEditNotes: M,
              onRestore: R,
              showRestore: t.viewScope === "trash",
              onDelete: I,
              deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
            }
          ),
          l && /* @__PURE__ */ s.jsx(
            Nv,
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
  }
);
tm.displayName = "DetailedImageCard";
const nm = Jt.memo(
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
      state: v,
      handleAddUnifiedLoader: y,
      handleRestoreWorkflow: S,
      handleSendToWorkflow: w,
      handleRunWithWorkflow: x,
      handleRunWithMask: _,
      handleEditSource: f,
      handleEditTags: u,
      handleEditNotes: p,
      handleDelete: g,
      handleRestore: j
    } = em(e), k = v.viewScope === "trash", b = k ? "Delete Permanently" : "Move to Trash", M = (P) => {
      P.stopPropagation();
      let R = String(e.id);
      t && v.selectedIds.size > 0 && (R = Array.from(v.selectedIds).join(",")), P.dataTransfer.setData("text/plain", R), se.getState().setIsOpen(!0);
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
                onClick: (P) => {
                  P.stopPropagation(), o(P);
                }
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            yi,
            {
              isMenuOpen: c,
              setIsMenuOpen: d,
              menuRef: m,
              settings: v.settings,
              onAddUnifiedLoader: y,
              onRestoreWorkflow: S,
              onSendToWorkflow: w,
              onRunWithWorkflow: x,
              onRunWithMask: _,
              onEditSource: f,
              onEditTags: u,
              onEditNotes: p,
              onDelete: g,
              onRestore: j,
              showRestore: k,
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
nm.displayName = "SimpleImageCard";
const Qc = ({ image: e }) => {
  const { state: t } = ge();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(nm, { image: e }) : /* @__PURE__ */ s.jsx(tm, { image: e });
}, ya = 6, Mv = 10, Iv = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  hasMore: a
}) => {
  const o = h.useRef(null), [i, c] = h.useState(300), d = t["sidebar.thumbnail_size"] || 100, m = t["gallery.view_mode"] === "grid_only";
  h.useEffect(() => {
    const f = o.current;
    if (!f) return;
    const u = () => {
      c(f.clientWidth);
    };
    u();
    const p = new ResizeObserver(u);
    return p.observe(f), () => p.disconnect();
  }, []);
  const v = d + 10, y = m ? Math.max(
    1,
    Math.floor(
      (i - Mv * 2 + ya) / (v + ya)
    )
  ) : 1, S = m ? Math.ceil(e.length / y) : e.length, w = m ? d + 14 : d + 40, x = Cv({
    count: S,
    getScrollElement: () => o.current,
    estimateSize: () => w,
    overscan: 5,
    getItemKey: (f) => {
      var u;
      return m ? `row-${f}-${y}` : ((u = e[f]) == null ? void 0 : u.id) ?? f;
    }
  });
  h.useEffect(() => {
    if (r === null) return;
    const f = e.findIndex((p) => p.id === r);
    if (f < 0) return;
    const u = m ? Math.floor(f / y) : f;
    x.scrollToIndex(u, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, m, y, x]);
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
            className: `meld-gallery__list ${m ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${x.getTotalSize()}px`,
              position: "relative"
            },
            children: _.map((f) => {
              if (m) {
                const p = f.index * y, g = Math.min(
                  p + y,
                  e.length
                ), j = e.slice(p, g);
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
                    children: j.map((k) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": k.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: k.width && k.height ? Math.min(
                                d,
                                d * k.width / k.height
                              ) + 10 : d + 10,
                              minWidth: d + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Qc, { image: k })
                          }
                        )
                      },
                      k.id
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
                  children: /* @__PURE__ */ s.jsx(Qc, { image: u })
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
}, Tv = () => {
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
    isSearchActive: m,
    loadMoreRef: v
  } = hv(), y = se((b) => b.isOpen), S = se((b) => b.setIsOpen), w = se((b) => b.buckets), x = Object.values(w).some((b) => b && b.length > 0);
  H.log("GalleryPanel: isLightTableOpen =", y);
  const [_, f] = h.useState(!1), [u, p] = h.useState(null), g = h.useRef(null), j = h.useCallback(() => {
    g.current && (p(
      g.current.getBoundingClientRect()
    ), f(!0));
  }, []), k = h.useCallback(
    (b) => {
      t({ type: "SET_SEARCH_QUERY", payload: b }), i(b), a("search"), f(!1);
    },
    [t, i, a]
  );
  return H.log("GalleryPanel: rendering", {
    imageCount: e.images.length,
    displayedCount: c.length,
    visibleCount: d.length,
    isLoading: e.isLoading,
    activeModal: e.activeModal.type
  }), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `meld-gallery ${e.viewScope === "trash" ? "meld-gallery--trash" : ""}`,
      onDragOver: (b) => {
        b.dataTransfer.types.includes(
          "application/meld-lt-source-slot"
        ) && (b.preventDefault(), b.dataTransfer.dropEffect = "move");
      },
      onDrop: (b) => {
        const M = b.dataTransfer.getData(
          "application/meld-lt-source-slot"
        );
        if (M) {
          b.preventDefault();
          const P = b.dataTransfer.getData("text/plain");
          if (P) {
            const R = P.split(","), I = [];
            R.forEach((A) => {
              if (A) {
                const B = A.trim();
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
                  onChange: (b) => r("gallery.trash.show_missing", b.target.checked)
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
                  color: m ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: m ? "bold" : "normal"
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
                onClick: j,
                style: {
                  background: "none",
                  border: "none",
                  color: _ ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Favorites",
                children: /* @__PURE__ */ s.jsx(
                  dr,
                  {
                    size: 14,
                    fill: _ ? "var(--brand-yellow, #ffd700)" : "none"
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
                children: /* @__PURE__ */ s.jsx(hr, { size: 14 })
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(Yp, { size: 14 }) : /* @__PURE__ */ s.jsx(uf, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  H.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    y,
                    "to",
                    !y
                  ), S(!y);
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
                    rg,
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
                children: /* @__PURE__ */ s.jsx(
                  rl,
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
                children: /* @__PURE__ */ s.jsx(mf, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(Jy, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Ny, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "tags" ? /* @__PURE__ */ s.jsx(
            ev,
            {
              onClose: () => a("gallery"),
              onSearch: (b) => {
                t({ type: "SET_SEARCH_QUERY", payload: b }), a("search");
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
                Iv,
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
          /* @__PURE__ */ s.jsx(pv, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(mv, {}),
        /* @__PURE__ */ s.jsx(Cy, {}),
        _ && /* @__PURE__ */ s.jsx(
          Yy,
          {
            anchorRect: u,
            onClose: () => f(!1),
            onSelect: k
          }
        ),
        /* @__PURE__ */ s.jsx(Ay, {})
      ]
    }
  );
};
Hc.registerExtension({
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
const Lv = document.getElementById(
  "meld-gallery-style"
);
if (!Lv) {
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
let Ol = null, it = null;
Hc.registerExtension({
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
    Ly();
    try {
      const n = await vf();
      H.init(n.dev_mode), H.log("Settings received:", n);
    } catch (n) {
      console.error("[Meld] Failed to fetch settings", n), H.init(!1);
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
        ), (r = e.ui.meld) == null || r.refresh(), H.log("Import completed.");
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
                  await gf({
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
            H.log("render called", {
              el: n,
              galleryRoot: Ol,
              galleryContainer: it
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), it || (H.log("galleryContainer not found, creating new one"), it = document.createElement("div"), it.id = "meld-gallery-container", it.style.height = "100%", it.style.width = "100%", it.style.display = "flex", it.style.flexDirection = "column", it.style.overflow = "hidden"), n.contains(it) || (H.log("Appending galleryContainer to el"), n.appendChild(it)), Ol ? H.log(
              "[Meld] Gallery root already exists, React should handle re-render if needed"
            ) : (H.log("Creating new gallery root"), Ol = rf(it), Ol.render(
              Jt.createElement(
                Qg,
                null,
                Jt.createElement(Tv)
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
