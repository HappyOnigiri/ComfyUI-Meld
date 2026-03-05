import { api as te } from "/scripts/api.js";
import { app as Zc } from "/scripts/app.js";
var ew = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _m(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jc = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul = Symbol.for("react.element"), km = Symbol.for("react.portal"), Sm = Symbol.for("react.fragment"), jm = Symbol.for("react.strict_mode"), bm = Symbol.for("react.profiler"), Em = Symbol.for("react.provider"), Cm = Symbol.for("react.context"), Nm = Symbol.for("react.forward_ref"), Mm = Symbol.for("react.suspense"), Im = Symbol.for("react.memo"), Tm = Symbol.for("react.lazy"), _i = Symbol.iterator;
function Lm(e) {
  return e === null || typeof e != "object" ? null : (e = _i && e[_i] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ed = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, td = Object.assign, nd = {};
function mr(e, t, n) {
  this.props = e, this.context = t, this.refs = nd, this.updater = n || ed;
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
mr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rd() {
}
rd.prototype = mr.prototype;
function go(e, t, n) {
  this.props = e, this.context = t, this.refs = nd, this.updater = n || ed;
}
var yo = go.prototype = new rd();
yo.constructor = go;
td(yo, mr.prototype);
yo.isPureReactComponent = !0;
var ki = Array.isArray, ld = Object.prototype.hasOwnProperty, vo = { current: null }, sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ad(e, t, n) {
  var r, l = {}, a = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) ld.call(t, r) && !sd.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var c = Array(i), d = 0; d < i; d++) c[d] = arguments[d + 2];
    l.children = c;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: ul, type: e, key: a, ref: o, props: l, _owner: vo.current };
}
function Rm(e, t) {
  return { $$typeof: ul, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ul;
}
function Dm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Si = /\/+/g;
function Vs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dm("" + e.key) : t.toString(36);
}
function Wl(e, t, n, r, l) {
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
        case ul:
        case km:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Vs(o, 0) : r, ki(l) ? (n = "", e != null && (n = e.replace(Si, "$&/") + "/"), Wl(l, t, n, "", function(d) {
    return d;
  })) : l != null && (wo(l) && (l = Rm(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Si, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", ki(e)) for (var i = 0; i < e.length; i++) {
    a = e[i];
    var c = r + Vs(a, i);
    o += Wl(a, t, n, c, l);
  }
  else if (c = Lm(e), typeof c == "function") for (e = c.call(e), i = 0; !(a = e.next()).done; ) a = a.value, c = r + Vs(a, i++), o += Wl(a, t, n, c, l);
  else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function vl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Wl(e, r, "", "", function(a) {
    return t.call(n, a, l++);
  }), r;
}
function Pm(e) {
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
var He = { current: null }, $l = { transition: null }, Om = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: $l, ReactCurrentOwner: vo };
function od() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: vl, forEach: function(e, t, n) {
  vl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return vl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return vl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!wo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = mr;
re.Fragment = Sm;
re.Profiler = bm;
re.PureComponent = go;
re.StrictMode = jm;
re.Suspense = Mm;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Om;
re.act = od;
re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = td({}, e.props), l = e.key, a = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = vo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (c in t) ld.call(t, c) && !sd.hasOwnProperty(c) && (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var d = 0; d < c; d++) i[d] = arguments[d + 2];
    r.children = i;
  }
  return { $$typeof: ul, type: e.type, key: l, ref: a, props: r, _owner: o };
};
re.createContext = function(e) {
  return e = { $$typeof: Cm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Em, _context: e }, e.Consumer = e;
};
re.createElement = ad;
re.createFactory = function(e) {
  var t = ad.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: Nm, render: e };
};
re.isValidElement = wo;
re.lazy = function(e) {
  return { $$typeof: Tm, _payload: { _status: -1, _result: e }, _init: Pm };
};
re.memo = function(e, t) {
  return { $$typeof: Im, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = $l.transition;
  $l.transition = {};
  try {
    e();
  } finally {
    $l.transition = t;
  }
};
re.unstable_act = od;
re.useCallback = function(e, t) {
  return He.current.useCallback(e, t);
};
re.useContext = function(e) {
  return He.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return He.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return He.current.useEffect(e, t);
};
re.useId = function() {
  return He.current.useId();
};
re.useImperativeHandle = function(e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function(e, t) {
  return He.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return He.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return He.current.useMemo(e, t);
};
re.useReducer = function(e, t, n) {
  return He.current.useReducer(e, t, n);
};
re.useRef = function(e) {
  return He.current.useRef(e);
};
re.useState = function(e) {
  return He.current.useState(e);
};
re.useSyncExternalStore = function(e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function() {
  return He.current.useTransition();
};
re.version = "18.3.1";
Jc.exports = re;
var h = Jc.exports;
const en = /* @__PURE__ */ _m(h);
var id = { exports: {} }, st = {}, cd = { exports: {} }, dd = {};
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
  function t(I, L) {
    var W = I.length;
    I.push(L);
    e: for (; 0 < W; ) {
      var E = W - 1 >>> 1, F = I[E];
      if (0 < l(F, L)) I[E] = L, I[W] = F, W = E;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var L = I[0], W = I.pop();
    if (W !== L) {
      I[0] = W;
      e: for (var E = 0, F = I.length, U = F >>> 1; E < U; ) {
        var A = 2 * (E + 1) - 1, K = I[A], Z = A + 1, oe = I[Z];
        if (0 > l(K, W)) Z < F && 0 > l(oe, K) ? (I[E] = oe, I[Z] = W, E = Z) : (I[E] = K, I[A] = W, E = A);
        else if (Z < F && 0 > l(oe, W)) I[E] = oe, I[Z] = W, E = Z;
        else break e;
      }
    }
    return L;
  }
  function l(I, L) {
    var W = I.sortIndex - L.sortIndex;
    return W !== 0 ? W : I.id - L.id;
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
  var c = [], d = [], p = 1, v = null, g = 3, S = !1, w = !1, x = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(I) {
    for (var L = n(d); L !== null; ) {
      if (L.callback === null) r(d);
      else if (L.startTime <= I) r(d), L.sortIndex = L.expirationTime, t(c, L);
      else break;
      L = n(d);
    }
  }
  function y(I) {
    if (x = !1, m(I), !w) if (n(c) !== null) w = !0, P(j);
    else {
      var L = n(d);
      L !== null && R(y, L.startTime - I);
    }
  }
  function j(I, L) {
    w = !1, x && (x = !1, f(M), M = -1), S = !0;
    var W = g;
    try {
      for (m(L), v = n(c); v !== null && (!(v.expirationTime > L) || I && !N()); ) {
        var E = v.callback;
        if (typeof E == "function") {
          v.callback = null, g = v.priorityLevel;
          var F = E(v.expirationTime <= L);
          L = e.unstable_now(), typeof F == "function" ? v.callback = F : v === n(c) && r(c), m(L);
        } else r(c);
        v = n(c);
      }
      if (v !== null) var U = !0;
      else {
        var A = n(d);
        A !== null && R(y, A.startTime - L), U = !1;
      }
      return U;
    } finally {
      v = null, g = W, S = !1;
    }
  }
  var k = !1, b = null, M = -1, T = 5, D = -1;
  function N() {
    return !(e.unstable_now() - D < T);
  }
  function z() {
    if (b !== null) {
      var I = e.unstable_now();
      D = I;
      var L = !0;
      try {
        L = b(!0, I);
      } finally {
        L ? B() : (k = !1, b = null);
      }
    } else k = !1;
  }
  var B;
  if (typeof u == "function") B = function() {
    u(z);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), Q = C.port2;
    C.port1.onmessage = z, B = function() {
      Q.postMessage(null);
    };
  } else B = function() {
    _(z, 0);
  };
  function P(I) {
    b = I, k || (k = !0, B());
  }
  function R(I, L) {
    M = _(function() {
      I(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    w || S || (w = !0, P(j));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(I) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = g;
    }
    var W = g;
    g = L;
    try {
      return I();
    } finally {
      g = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, L) {
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
    var W = g;
    g = I;
    try {
      return L();
    } finally {
      g = W;
    }
  }, e.unstable_scheduleCallback = function(I, L, W) {
    var E = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? E + W : E) : W = E, I) {
      case 1:
        var F = -1;
        break;
      case 2:
        F = 250;
        break;
      case 5:
        F = 1073741823;
        break;
      case 4:
        F = 1e4;
        break;
      default:
        F = 5e3;
    }
    return F = W + F, I = { id: p++, callback: L, priorityLevel: I, startTime: W, expirationTime: F, sortIndex: -1 }, W > E ? (I.sortIndex = W, t(d, I), n(c) === null && I === n(d) && (x ? (f(M), M = -1) : x = !0, R(y, W - E))) : (I.sortIndex = F, t(c, I), w || S || (w = !0, P(j))), I;
  }, e.unstable_shouldYield = N, e.unstable_wrapCallback = function(I) {
    var L = g;
    return function() {
      var W = g;
      g = L;
      try {
        return I.apply(this, arguments);
      } finally {
        g = W;
      }
    };
  };
})(dd);
cd.exports = dd;
var zm = cd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Am = h, lt = zm;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ud = /* @__PURE__ */ new Set(), Ur = {};
function Rn(e, t) {
  sr(e, t), sr(e + "Capture", t);
}
function sr(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) ud.add(t[e]);
}
var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wa = Object.prototype.hasOwnProperty, Fm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ji = {}, bi = {};
function Wm(e) {
  return wa.call(bi, e) ? !0 : wa.call(ji, e) ? !1 : Fm.test(e) ? bi[e] = !0 : (ji[e] = !0, !1);
}
function $m(e, t, n, r) {
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
function Um(e, t, n, r) {
  if (t === null || typeof t > "u" || $m(e, t, n, r)) return !0;
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
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new Ke(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xo = /[\-:]([a-z])/g;
function _o(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    xo,
    _o
  );
  Ae[t] = new Ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(xo, _o);
  Ae[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(xo, _o);
  Ae[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ko(e, t, n, r) {
  var l = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Um(t, n, l, r) && (n = null), r || l === null ? Wm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = Am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, wl = Symbol.for("react.element"), Wn = Symbol.for("react.portal"), $n = Symbol.for("react.fragment"), So = Symbol.for("react.strict_mode"), xa = Symbol.for("react.profiler"), fd = Symbol.for("react.provider"), md = Symbol.for("react.context"), jo = Symbol.for("react.forward_ref"), _a = Symbol.for("react.suspense"), ka = Symbol.for("react.suspense_list"), bo = Symbol.for("react.memo"), Yt = Symbol.for("react.lazy"), pd = Symbol.for("react.offscreen"), Ei = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object" ? null : (e = Ei && e[Ei] || e["@@iterator"], typeof e == "function" ? e : null);
}
var je = Object.assign, Bs;
function Nr(e) {
  if (Bs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Bs = t && t[1] || "";
  }
  return `
` + Bs + e;
}
var Qs = !1;
function Hs(e, t) {
  if (!e || Qs) return "";
  Qs = !0;
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
    Qs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Nr(e) : "";
}
function Vm(e) {
  switch (e.tag) {
    case 5:
      return Nr(e.type);
    case 16:
      return Nr("Lazy");
    case 13:
      return Nr("Suspense");
    case 19:
      return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Hs(e.type, !1), e;
    case 11:
      return e = Hs(e.type.render, !1), e;
    case 1:
      return e = Hs(e.type, !0), e;
    default:
      return "";
  }
}
function Sa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case Wn:
      return "Portal";
    case xa:
      return "Profiler";
    case So:
      return "StrictMode";
    case _a:
      return "Suspense";
    case ka:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case md:
      return (e.displayName || "Context") + ".Consumer";
    case fd:
      return (e._context.displayName || "Context") + ".Provider";
    case jo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case bo:
      return t = e.displayName || null, t !== null ? t : Sa(e.type) || "Memo";
    case Yt:
      t = e._payload, e = e._init;
      try {
        return Sa(e(t));
      } catch {
      }
  }
  return null;
}
function Bm(e) {
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
      return Sa(t);
    case 8:
      return t === So ? "StrictMode" : "Mode";
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
function fn(e) {
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
function hd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Qm(e) {
  var t = hd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function xl(e) {
  e._valueTracker || (e._valueTracker = Qm(e));
}
function gd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = hd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Jl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ja(e, t) {
  var n = t.checked;
  return je({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ci(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = fn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function yd(e, t) {
  t = t.checked, t != null && ko(e, "checked", t, !1);
}
function ba(e, t) {
  yd(e, t);
  var n = fn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ea(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ea(e, t.type, fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ni(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ea(e, t, n) {
  (t !== "number" || Jl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function Zn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ca(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return je({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Mi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: fn(n) };
}
function vd(e, t) {
  var n = fn(t.value), r = fn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ii(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Na(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? wd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var _l, xd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (_l = _l || document.createElement("div"), _l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _l.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Lr = {
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
}, Hm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lr).forEach(function(e) {
  Hm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Lr[t] = Lr[e];
  });
});
function _d(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Lr.hasOwnProperty(e) && Lr[e] ? ("" + t).trim() : t + "px";
}
function kd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = _d(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Km = je({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ma(e, t) {
  if (t) {
    if (Km[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function Ia(e, t) {
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
var Ta = null;
function Eo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var La = null, Jn = null, er = null;
function Ti(e) {
  if (e = pl(e)) {
    if (typeof La != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = Ns(t), La(e.stateNode, e.type, t));
  }
}
function Sd(e) {
  Jn ? er ? er.push(e) : er = [e] : Jn = e;
}
function jd() {
  if (Jn) {
    var e = Jn, t = er;
    if (er = Jn = null, Ti(e), t) for (e = 0; e < t.length; e++) Ti(t[e]);
  }
}
function bd(e, t) {
  return e(t);
}
function Ed() {
}
var Ks = !1;
function Cd(e, t, n) {
  if (Ks) return e(t, n);
  Ks = !0;
  try {
    return bd(e, t, n);
  } finally {
    Ks = !1, (Jn !== null || er !== null) && (Ed(), jd());
  }
}
function Br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ns(n);
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
  if (n && typeof n != "function") throw Error(V(231, t, typeof n));
  return n;
}
var Ra = !1;
if (At) try {
  var xr = {};
  Object.defineProperty(xr, "passive", { get: function() {
    Ra = !0;
  } }), window.addEventListener("test", xr, xr), window.removeEventListener("test", xr, xr);
} catch {
  Ra = !1;
}
function Gm(e, t, n, r, l, a, o, i, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (p) {
    this.onError(p);
  }
}
var Rr = !1, es = null, ts = !1, Da = null, qm = { onError: function(e) {
  Rr = !0, es = e;
} };
function Ym(e, t, n, r, l, a, o, i, c) {
  Rr = !1, es = null, Gm.apply(qm, arguments);
}
function Xm(e, t, n, r, l, a, o, i, c) {
  if (Ym.apply(this, arguments), Rr) {
    if (Rr) {
      var d = es;
      Rr = !1, es = null;
    } else throw Error(V(198));
    ts || (ts = !0, Da = d);
  }
}
function Dn(e) {
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
function Nd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Li(e) {
  if (Dn(e) !== e) throw Error(V(188));
}
function Zm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Dn(e), t === null) throw Error(V(188));
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
        if (a === n) return Li(l), e;
        if (a === r) return Li(l), t;
        a = a.sibling;
      }
      throw Error(V(188));
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
        if (!o) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function Md(e) {
  return e = Zm(e), e !== null ? Id(e) : null;
}
function Id(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Id(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Td = lt.unstable_scheduleCallback, Ri = lt.unstable_cancelCallback, Jm = lt.unstable_shouldYield, ep = lt.unstable_requestPaint, Ce = lt.unstable_now, tp = lt.unstable_getCurrentPriorityLevel, Co = lt.unstable_ImmediatePriority, Ld = lt.unstable_UserBlockingPriority, ns = lt.unstable_NormalPriority, np = lt.unstable_LowPriority, Rd = lt.unstable_IdlePriority, js = null, Nt = null;
function rp(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
    Nt.onCommitFiberRoot(js, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var kt = Math.clz32 ? Math.clz32 : ap, lp = Math.log, sp = Math.LN2;
function ap(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (lp(e) / sp | 0) | 0;
}
var kl = 64, Sl = 4194304;
function Ir(e) {
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
function rs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, a = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Ir(i) : (a &= o, a !== 0 && (r = Ir(a)));
  } else o = n & ~l, o !== 0 ? r = Ir(o) : a !== 0 && (r = Ir(a));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function op(e, t) {
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
function ip(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
    var o = 31 - kt(a), i = 1 << o, c = l[o];
    c === -1 ? (!(i & n) || i & r) && (l[o] = op(i, t)) : c <= t && (e.expiredLanes |= i), a &= ~i;
  }
}
function Pa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dd() {
  var e = kl;
  return kl <<= 1, !(kl & 4194240) && (kl = 64), e;
}
function Gs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
}
function cp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - kt(n), a = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a;
  }
}
function No(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ce = 0;
function Pd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Od, Mo, zd, Ad, Fd, Oa = !1, jl = [], rn = null, ln = null, sn = null, Qr = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), Zt = [], dp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Di(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      Qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hr.delete(t.pointerId);
  }
}
function _r(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [l] }, t !== null && (t = pl(t), t !== null && Mo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function up(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return rn = _r(rn, e, t, n, r, l), !0;
    case "dragenter":
      return ln = _r(ln, e, t, n, r, l), !0;
    case "mouseover":
      return sn = _r(sn, e, t, n, r, l), !0;
    case "pointerover":
      var a = l.pointerId;
      return Qr.set(a, _r(Qr.get(a) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return a = l.pointerId, Hr.set(a, _r(Hr.get(a) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Wd(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Nd(n), t !== null) {
          e.blockedOn = t, Fd(e.priority, function() {
            zd(n);
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
function Ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = za(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ta = r, n.target.dispatchEvent(r), Ta = null;
    } else return t = pl(n), t !== null && Mo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Pi(e, t, n) {
  Ul(e) && n.delete(t);
}
function fp() {
  Oa = !1, rn !== null && Ul(rn) && (rn = null), ln !== null && Ul(ln) && (ln = null), sn !== null && Ul(sn) && (sn = null), Qr.forEach(Pi), Hr.forEach(Pi);
}
function kr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Oa || (Oa = !0, lt.unstable_scheduleCallback(lt.unstable_NormalPriority, fp)));
}
function Kr(e) {
  function t(l) {
    return kr(l, e);
  }
  if (0 < jl.length) {
    kr(jl[0], e);
    for (var n = 1; n < jl.length; n++) {
      var r = jl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rn !== null && kr(rn, e), ln !== null && kr(ln, e), sn !== null && kr(sn, e), Qr.forEach(t), Hr.forEach(t), n = 0; n < Zt.length; n++) r = Zt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && (n = Zt[0], n.blockedOn === null); ) Wd(n), n.blockedOn === null && Zt.shift();
}
var tr = Vt.ReactCurrentBatchConfig, ls = !0;
function mp(e, t, n, r) {
  var l = ce, a = tr.transition;
  tr.transition = null;
  try {
    ce = 1, Io(e, t, n, r);
  } finally {
    ce = l, tr.transition = a;
  }
}
function pp(e, t, n, r) {
  var l = ce, a = tr.transition;
  tr.transition = null;
  try {
    ce = 4, Io(e, t, n, r);
  } finally {
    ce = l, tr.transition = a;
  }
}
function Io(e, t, n, r) {
  if (ls) {
    var l = za(e, t, n, r);
    if (l === null) la(e, t, r, ss, n), Di(e, r);
    else if (up(l, e, t, n, r)) r.stopPropagation();
    else if (Di(e, r), t & 4 && -1 < dp.indexOf(e)) {
      for (; l !== null; ) {
        var a = pl(l);
        if (a !== null && Od(a), a = za(e, t, n, r), a === null && la(e, t, r, ss, n), a === l) break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else la(e, t, r, null, n);
  }
}
var ss = null;
function za(e, t, n, r) {
  if (ss = null, e = Eo(r), e = kn(e), e !== null) if (t = Dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Nd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ss = e, null;
}
function $d(e) {
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
      switch (tp()) {
        case Co:
          return 1;
        case Ld:
          return 4;
        case ns:
        case np:
          return 16;
        case Rd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null, To = null, Vl = null;
function Ud() {
  if (Vl) return Vl;
  var e, t = To, n = t.length, r, l = "value" in tn ? tn.value : tn.textContent, a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[a - r]; r++) ;
  return Vl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Bl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function bl() {
  return !0;
}
function Oi() {
  return !1;
}
function at(e) {
  function t(n, r, l, a, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? bl : Oi, this.isPropagationStopped = Oi, this;
  }
  return je(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bl);
  }, persist: function() {
  }, isPersistent: bl }), t;
}
var pr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Lo = at(pr), ml = je({}, pr, { view: 0, detail: 0 }), hp = at(ml), qs, Ys, Sr, bs = je({}, ml, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ro, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (qs = e.screenX - Sr.screenX, Ys = e.screenY - Sr.screenY) : Ys = qs = 0, Sr = e), qs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ys;
} }), zi = at(bs), gp = je({}, bs, { dataTransfer: 0 }), yp = at(gp), vp = je({}, ml, { relatedTarget: 0 }), Xs = at(vp), wp = je({}, pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xp = at(wp), _p = je({}, pr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), kp = at(_p), Sp = je({}, pr, { data: 0 }), Ai = at(Sp), jp = {
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
}, bp = {
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
}, Ep = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Cp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ep[e]) ? !!t[e] : !1;
}
function Ro() {
  return Cp;
}
var Np = je({}, ml, { key: function(e) {
  if (e.key) {
    var t = jp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Bl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ro, charCode: function(e) {
  return e.type === "keypress" ? Bl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Bl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Mp = at(Np), Ip = je({}, bs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fi = at(Ip), Tp = je({}, ml, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ro }), Lp = at(Tp), Rp = je({}, pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dp = at(Rp), Pp = je({}, bs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Op = at(Pp), zp = [9, 13, 27, 32], Do = At && "CompositionEvent" in window, Dr = null;
At && "documentMode" in document && (Dr = document.documentMode);
var Ap = At && "TextEvent" in window && !Dr, Vd = At && (!Do || Dr && 8 < Dr && 11 >= Dr), Wi = " ", $i = !1;
function Bd(e, t) {
  switch (e) {
    case "keyup":
      return zp.indexOf(t.keyCode) !== -1;
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
function Qd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function Fp(e, t) {
  switch (e) {
    case "compositionend":
      return Qd(t);
    case "keypress":
      return t.which !== 32 ? null : ($i = !0, Wi);
    case "textInput":
      return e = t.data, e === Wi && $i ? null : e;
    default:
      return null;
  }
}
function Wp(e, t) {
  if (Un) return e === "compositionend" || !Do && Bd(e, t) ? (e = Ud(), Vl = To = tn = null, Un = !1, e) : null;
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
      return Vd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $p = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ui(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$p[e.type] : t === "textarea";
}
function Hd(e, t, n, r) {
  Sd(r), t = as(t, "onChange"), 0 < t.length && (n = new Lo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Pr = null, Gr = null;
function Up(e) {
  ru(e, 0);
}
function Es(e) {
  var t = Qn(e);
  if (gd(t)) return e;
}
function Vp(e, t) {
  if (e === "change") return t;
}
var Kd = !1;
if (At) {
  var Zs;
  if (At) {
    var Js = "oninput" in document;
    if (!Js) {
      var Vi = document.createElement("div");
      Vi.setAttribute("oninput", "return;"), Js = typeof Vi.oninput == "function";
    }
    Zs = Js;
  } else Zs = !1;
  Kd = Zs && (!document.documentMode || 9 < document.documentMode);
}
function Bi() {
  Pr && (Pr.detachEvent("onpropertychange", Gd), Gr = Pr = null);
}
function Gd(e) {
  if (e.propertyName === "value" && Es(Gr)) {
    var t = [];
    Hd(t, Gr, e, Eo(e)), Cd(Up, t);
  }
}
function Bp(e, t, n) {
  e === "focusin" ? (Bi(), Pr = t, Gr = n, Pr.attachEvent("onpropertychange", Gd)) : e === "focusout" && Bi();
}
function Qp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Es(Gr);
}
function Hp(e, t) {
  if (e === "click") return Es(t);
}
function Kp(e, t) {
  if (e === "input" || e === "change") return Es(t);
}
function Gp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jt = typeof Object.is == "function" ? Object.is : Gp;
function qr(e, t) {
  if (jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!wa.call(t, l) || !jt(e[l], t[l])) return !1;
  }
  return !0;
}
function Qi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hi(e, t) {
  var n = Qi(e);
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
    n = Qi(n);
  }
}
function qd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Yd() {
  for (var e = window, t = Jl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jl(e.document);
  }
  return t;
}
function Po(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function qp(e) {
  var t = Yd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && qd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Po(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, a = Math.min(r.start, l);
        r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Hi(n, a);
        var o = Hi(
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
var Yp = At && "documentMode" in document && 11 >= document.documentMode, Vn = null, Aa = null, Or = null, Fa = !1;
function Ki(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fa || Vn == null || Vn !== Jl(r) || (r = Vn, "selectionStart" in r && Po(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Or && qr(Or, r) || (Or = r, r = as(Aa, "onSelect"), 0 < r.length && (t = new Lo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Vn)));
}
function El(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Bn = { animationend: El("Animation", "AnimationEnd"), animationiteration: El("Animation", "AnimationIteration"), animationstart: El("Animation", "AnimationStart"), transitionend: El("Transition", "TransitionEnd") }, ea = {}, Xd = {};
At && (Xd = document.createElement("div").style, "AnimationEvent" in window || (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation), "TransitionEvent" in window || delete Bn.transitionend.transition);
function Cs(e) {
  if (ea[e]) return ea[e];
  if (!Bn[e]) return e;
  var t = Bn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xd) return ea[e] = t[n];
  return e;
}
var Zd = Cs("animationend"), Jd = Cs("animationiteration"), eu = Cs("animationstart"), tu = Cs("transitionend"), nu = /* @__PURE__ */ new Map(), Gi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pn(e, t) {
  nu.set(e, t), Rn(t, [e]);
}
for (var ta = 0; ta < Gi.length; ta++) {
  var na = Gi[ta], Xp = na.toLowerCase(), Zp = na[0].toUpperCase() + na.slice(1);
  pn(Xp, "on" + Zp);
}
pn(Zd, "onAnimationEnd");
pn(Jd, "onAnimationIteration");
pn(eu, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(tu, "onTransitionEnd");
sr("onMouseEnter", ["mouseout", "mouseover"]);
sr("onMouseLeave", ["mouseout", "mouseover"]);
sr("onPointerEnter", ["pointerout", "pointerover"]);
sr("onPointerLeave", ["pointerout", "pointerover"]);
Rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
function qi(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Xm(r, t, void 0, e), e.currentTarget = null;
}
function ru(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], c = i.instance, d = i.currentTarget;
        if (i = i.listener, c !== a && l.isPropagationStopped()) break e;
        qi(l, i, d), a = c;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], c = i.instance, d = i.currentTarget, i = i.listener, c !== a && l.isPropagationStopped()) break e;
        qi(l, i, d), a = c;
      }
    }
  }
  if (ts) throw e = Da, ts = !1, Da = null, e;
}
function ye(e, t) {
  var n = t[Ba];
  n === void 0 && (n = t[Ba] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (lu(t, e, 2, !1), n.add(r));
}
function ra(e, t, n) {
  var r = 0;
  t && (r |= 4), lu(n, e, r, t);
}
var Cl = "_reactListening" + Math.random().toString(36).slice(2);
function Yr(e) {
  if (!e[Cl]) {
    e[Cl] = !0, ud.forEach(function(n) {
      n !== "selectionchange" && (Jp.has(n) || ra(n, !1, e), ra(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cl] || (t[Cl] = !0, ra("selectionchange", !1, t));
  }
}
function lu(e, t, n, r) {
  switch ($d(t)) {
    case 1:
      var l = mp;
      break;
    case 4:
      l = pp;
      break;
    default:
      l = Io;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ra || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function la(e, t, n, r, l) {
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
        if (o = kn(i), o === null) return;
        if (c = o.tag, c === 5 || c === 6) {
          r = a = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Cd(function() {
    var d = a, p = Eo(n), v = [];
    e: {
      var g = nu.get(e);
      if (g !== void 0) {
        var S = Lo, w = e;
        switch (e) {
          case "keypress":
            if (Bl(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Mp;
            break;
          case "focusin":
            w = "focus", S = Xs;
            break;
          case "focusout":
            w = "blur", S = Xs;
            break;
          case "beforeblur":
          case "afterblur":
            S = Xs;
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
            S = zi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = yp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Lp;
            break;
          case Zd:
          case Jd:
          case eu:
            S = xp;
            break;
          case tu:
            S = Dp;
            break;
          case "scroll":
            S = hp;
            break;
          case "wheel":
            S = Op;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = kp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Fi;
        }
        var x = (t & 4) !== 0, _ = !x && e === "scroll", f = x ? g !== null ? g + "Capture" : null : g;
        x = [];
        for (var u = d, m; u !== null; ) {
          m = u;
          var y = m.stateNode;
          if (m.tag === 5 && y !== null && (m = y, f !== null && (y = Br(u, f), y != null && x.push(Xr(u, y, m)))), _) break;
          u = u.return;
        }
        0 < x.length && (g = new S(g, w, null, n, p), v.push({ event: g, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", g && n !== Ta && (w = n.relatedTarget || n.fromElement) && (kn(w) || w[Ft])) break e;
        if ((S || g) && (g = p.window === p ? p : (g = p.ownerDocument) ? g.defaultView || g.parentWindow : window, S ? (w = n.relatedTarget || n.toElement, S = d, w = w ? kn(w) : null, w !== null && (_ = Dn(w), w !== _ || w.tag !== 5 && w.tag !== 6) && (w = null)) : (S = null, w = d), S !== w)) {
          if (x = zi, y = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (x = Fi, y = "onPointerLeave", f = "onPointerEnter", u = "pointer"), _ = S == null ? g : Qn(S), m = w == null ? g : Qn(w), g = new x(y, u + "leave", S, n, p), g.target = _, g.relatedTarget = m, y = null, kn(p) === d && (x = new x(f, u + "enter", w, n, p), x.target = m, x.relatedTarget = _, y = x), _ = y, S && w) t: {
            for (x = S, f = w, u = 0, m = x; m; m = An(m)) u++;
            for (m = 0, y = f; y; y = An(y)) m++;
            for (; 0 < u - m; ) x = An(x), u--;
            for (; 0 < m - u; ) f = An(f), m--;
            for (; u--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = An(x), f = An(f);
            }
            x = null;
          }
          else x = null;
          S !== null && Yi(v, g, S, x, !1), w !== null && _ !== null && Yi(v, _, w, x, !0);
        }
      }
      e: {
        if (g = d ? Qn(d) : window, S = g.nodeName && g.nodeName.toLowerCase(), S === "select" || S === "input" && g.type === "file") var j = Vp;
        else if (Ui(g)) if (Kd) j = Kp;
        else {
          j = Qp;
          var k = Bp;
        }
        else (S = g.nodeName) && S.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (j = Hp);
        if (j && (j = j(e, d))) {
          Hd(v, j, n, p);
          break e;
        }
        k && k(e, g, d), e === "focusout" && (k = g._wrapperState) && k.controlled && g.type === "number" && Ea(g, "number", g.value);
      }
      switch (k = d ? Qn(d) : window, e) {
        case "focusin":
          (Ui(k) || k.contentEditable === "true") && (Vn = k, Aa = d, Or = null);
          break;
        case "focusout":
          Or = Aa = Vn = null;
          break;
        case "mousedown":
          Fa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Fa = !1, Ki(v, n, p);
          break;
        case "selectionchange":
          if (Yp) break;
        case "keydown":
        case "keyup":
          Ki(v, n, p);
      }
      var b;
      if (Do) e: {
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
      else Un ? Bd(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M && (Vd && n.locale !== "ko" && (Un || M !== "onCompositionStart" ? M === "onCompositionEnd" && Un && (b = Ud()) : (tn = p, To = "value" in tn ? tn.value : tn.textContent, Un = !0)), k = as(d, M), 0 < k.length && (M = new Ai(M, e, null, n, p), v.push({ event: M, listeners: k }), b ? M.data = b : (b = Qd(n), b !== null && (M.data = b)))), (b = Ap ? Fp(e, n) : Wp(e, n)) && (d = as(d, "onBeforeInput"), 0 < d.length && (p = new Ai("onBeforeInput", "beforeinput", null, n, p), v.push({ event: p, listeners: d }), p.data = b));
    }
    ru(v, t);
  });
}
function Xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function as(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, a = l.stateNode;
    l.tag === 5 && a !== null && (l = a, a = Br(e, n), a != null && r.unshift(Xr(e, a, l)), a = Br(e, t), a != null && r.push(Xr(e, a, l))), e = e.return;
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
function Yi(e, t, n, r, l) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, c = i.alternate, d = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 && d !== null && (i = d, l ? (c = Br(n, a), c != null && o.unshift(Xr(n, c, i))) : l || (c = Br(n, a), c != null && o.push(Xr(n, c, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var eh = /\r\n?/g, th = /\u0000|\uFFFD/g;
function Xi(e) {
  return (typeof e == "string" ? e : "" + e).replace(eh, `
`).replace(th, "");
}
function Nl(e, t, n) {
  if (t = Xi(t), Xi(e) !== t && n) throw Error(V(425));
}
function os() {
}
var Wa = null, $a = null;
function Ua(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Va = typeof setTimeout == "function" ? setTimeout : void 0, nh = typeof clearTimeout == "function" ? clearTimeout : void 0, Zi = typeof Promise == "function" ? Promise : void 0, rh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zi < "u" ? function(e) {
  return Zi.resolve(null).then(e).catch(lh);
} : Va;
function lh(e) {
  setTimeout(function() {
    throw e;
  });
}
function sa(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Kr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Kr(t);
}
function an(e) {
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
function Ji(e) {
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
var hr = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + hr, Zr = "__reactProps$" + hr, Ft = "__reactContainer$" + hr, Ba = "__reactEvents$" + hr, sh = "__reactListeners$" + hr, ah = "__reactHandles$" + hr;
function kn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ft] || n[Ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ji(e); e !== null; ) {
        if (n = e[Ct]) return n;
        e = Ji(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function pl(e) {
  return e = e[Ct] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function Ns(e) {
  return e[Zr] || null;
}
var Qa = [], Hn = -1;
function hn(e) {
  return { current: e };
}
function ve(e) {
  0 > Hn || (e.current = Qa[Hn], Qa[Hn] = null, Hn--);
}
function pe(e, t) {
  Hn++, Qa[Hn] = e.current, e.current = t;
}
var mn = {}, Ve = hn(mn), Ze = hn(!1), Cn = mn;
function ar(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, a;
  for (a in n) l[a] = t[a];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function is() {
  ve(Ze), ve(Ve);
}
function ec(e, t, n) {
  if (Ve.current !== mn) throw Error(V(168));
  pe(Ve, t), pe(Ze, n);
}
function su(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(V(108, Bm(e) || "Unknown", l));
  return je({}, n, r);
}
function cs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mn, Cn = Ve.current, pe(Ve, e), pe(Ze, Ze.current), !0;
}
function tc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = su(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, ve(Ze), ve(Ve), pe(Ve, e)) : ve(Ze), pe(Ze, n);
}
var Dt = null, Ms = !1, aa = !1;
function au(e) {
  Dt === null ? Dt = [e] : Dt.push(e);
}
function oh(e) {
  Ms = !0, au(e);
}
function gn() {
  if (!aa && Dt !== null) {
    aa = !0;
    var e = 0, t = ce;
    try {
      var n = Dt;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Dt = null, Ms = !1;
    } catch (l) {
      throw Dt !== null && (Dt = Dt.slice(e + 1)), Td(Co, gn), l;
    } finally {
      ce = t, aa = !1;
    }
  }
  return null;
}
var Kn = [], Gn = 0, ds = null, us = 0, ct = [], dt = 0, Nn = null, Pt = 1, Ot = "";
function xn(e, t) {
  Kn[Gn++] = us, Kn[Gn++] = ds, ds = e, us = t;
}
function ou(e, t, n) {
  ct[dt++] = Pt, ct[dt++] = Ot, ct[dt++] = Nn, Nn = e;
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
function Oo(e) {
  e.return !== null && (xn(e, 1), ou(e, 1, 0));
}
function zo(e) {
  for (; e === ds; ) ds = Kn[--Gn], Kn[Gn] = null, us = Kn[--Gn], Kn[Gn] = null;
  for (; e === Nn; ) Nn = ct[--dt], ct[dt] = null, Ot = ct[--dt], ct[dt] = null, Pt = ct[--dt], ct[dt] = null;
}
var rt = null, nt = null, xe = !1, xt = null;
function iu(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function nc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = an(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, rt = e, nt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Nn !== null ? { id: Pt, overflow: Ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, rt = e, nt = null, !0) : !1;
    default:
      return !1;
  }
}
function Ha(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ka(e) {
  if (xe) {
    var t = nt;
    if (t) {
      var n = t;
      if (!nc(e, t)) {
        if (Ha(e)) throw Error(V(418));
        t = an(n.nextSibling);
        var r = rt;
        t && nc(e, t) ? iu(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, rt = e);
      }
    } else {
      if (Ha(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, xe = !1, rt = e;
    }
  }
}
function rc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  rt = e;
}
function Ml(e) {
  if (e !== rt) return !1;
  if (!xe) return rc(e), xe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ua(e.type, e.memoizedProps)), t && (t = nt)) {
    if (Ha(e)) throw cu(), Error(V(418));
    for (; t; ) iu(e, t), t = an(t.nextSibling);
  }
  if (rc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = an(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function cu() {
  for (var e = nt; e; ) e = an(e.nextSibling);
}
function or() {
  nt = rt = null, xe = !1;
}
function Ao(e) {
  xt === null ? xt = [e] : xt.push(e);
}
var ih = Vt.ReactCurrentBatchConfig;
function jr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var l = r, a = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[a] : i[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e != "string") throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function Il(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function lc(e) {
  var t = e._init;
  return t(e._payload);
}
function du(e) {
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
    return f = un(f, u), f.index = 0, f.sibling = null, f;
  }
  function a(f, u, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < u ? (f.flags |= 2, u) : m) : (f.flags |= 2, u)) : (f.flags |= 1048576, u);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, u, m, y) {
    return u === null || u.tag !== 6 ? (u = ma(m, f.mode, y), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function c(f, u, m, y) {
    var j = m.type;
    return j === $n ? p(f, u, m.props.children, y, m.key) : u !== null && (u.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Yt && lc(j) === u.type) ? (y = l(u, m.props), y.ref = jr(f, u, m), y.return = f, y) : (y = Xl(m.type, m.key, m.props, null, f.mode, y), y.ref = jr(f, u, m), y.return = f, y);
  }
  function d(f, u, m, y) {
    return u === null || u.tag !== 4 || u.stateNode.containerInfo !== m.containerInfo || u.stateNode.implementation !== m.implementation ? (u = pa(m, f.mode, y), u.return = f, u) : (u = l(u, m.children || []), u.return = f, u);
  }
  function p(f, u, m, y, j) {
    return u === null || u.tag !== 7 ? (u = En(m, f.mode, y, j), u.return = f, u) : (u = l(u, m), u.return = f, u);
  }
  function v(f, u, m) {
    if (typeof u == "string" && u !== "" || typeof u == "number") return u = ma("" + u, f.mode, m), u.return = f, u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case wl:
          return m = Xl(u.type, u.key, u.props, null, f.mode, m), m.ref = jr(f, null, u), m.return = f, m;
        case Wn:
          return u = pa(u, f.mode, m), u.return = f, u;
        case Yt:
          var y = u._init;
          return v(f, y(u._payload), m);
      }
      if (Mr(u) || wr(u)) return u = En(u, f.mode, m, null), u.return = f, u;
      Il(f, u);
    }
    return null;
  }
  function g(f, u, m, y) {
    var j = u !== null ? u.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return j !== null ? null : i(f, u, "" + m, y);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case wl:
          return m.key === j ? c(f, u, m, y) : null;
        case Wn:
          return m.key === j ? d(f, u, m, y) : null;
        case Yt:
          return j = m._init, g(
            f,
            u,
            j(m._payload),
            y
          );
      }
      if (Mr(m) || wr(m)) return j !== null ? null : p(f, u, m, y, null);
      Il(f, m);
    }
    return null;
  }
  function S(f, u, m, y, j) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(m) || null, i(u, f, "" + y, j);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case wl:
          return f = f.get(y.key === null ? m : y.key) || null, c(u, f, y, j);
        case Wn:
          return f = f.get(y.key === null ? m : y.key) || null, d(u, f, y, j);
        case Yt:
          var k = y._init;
          return S(f, u, m, k(y._payload), j);
      }
      if (Mr(y) || wr(y)) return f = f.get(m) || null, p(u, f, y, j, null);
      Il(u, y);
    }
    return null;
  }
  function w(f, u, m, y) {
    for (var j = null, k = null, b = u, M = u = 0, T = null; b !== null && M < m.length; M++) {
      b.index > M ? (T = b, b = null) : T = b.sibling;
      var D = g(f, b, m[M], y);
      if (D === null) {
        b === null && (b = T);
        break;
      }
      e && b && D.alternate === null && t(f, b), u = a(D, u, M), k === null ? j = D : k.sibling = D, k = D, b = T;
    }
    if (M === m.length) return n(f, b), xe && xn(f, M), j;
    if (b === null) {
      for (; M < m.length; M++) b = v(f, m[M], y), b !== null && (u = a(b, u, M), k === null ? j = b : k.sibling = b, k = b);
      return xe && xn(f, M), j;
    }
    for (b = r(f, b); M < m.length; M++) T = S(b, f, M, m[M], y), T !== null && (e && T.alternate !== null && b.delete(T.key === null ? M : T.key), u = a(T, u, M), k === null ? j = T : k.sibling = T, k = T);
    return e && b.forEach(function(N) {
      return t(f, N);
    }), xe && xn(f, M), j;
  }
  function x(f, u, m, y) {
    var j = wr(m);
    if (typeof j != "function") throw Error(V(150));
    if (m = j.call(m), m == null) throw Error(V(151));
    for (var k = j = null, b = u, M = u = 0, T = null, D = m.next(); b !== null && !D.done; M++, D = m.next()) {
      b.index > M ? (T = b, b = null) : T = b.sibling;
      var N = g(f, b, D.value, y);
      if (N === null) {
        b === null && (b = T);
        break;
      }
      e && b && N.alternate === null && t(f, b), u = a(N, u, M), k === null ? j = N : k.sibling = N, k = N, b = T;
    }
    if (D.done) return n(
      f,
      b
    ), xe && xn(f, M), j;
    if (b === null) {
      for (; !D.done; M++, D = m.next()) D = v(f, D.value, y), D !== null && (u = a(D, u, M), k === null ? j = D : k.sibling = D, k = D);
      return xe && xn(f, M), j;
    }
    for (b = r(f, b); !D.done; M++, D = m.next()) D = S(b, f, M, D.value, y), D !== null && (e && D.alternate !== null && b.delete(D.key === null ? M : D.key), u = a(D, u, M), k === null ? j = D : k.sibling = D, k = D);
    return e && b.forEach(function(z) {
      return t(f, z);
    }), xe && xn(f, M), j;
  }
  function _(f, u, m, y) {
    if (typeof m == "object" && m !== null && m.type === $n && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case wl:
          e: {
            for (var j = m.key, k = u; k !== null; ) {
              if (k.key === j) {
                if (j = m.type, j === $n) {
                  if (k.tag === 7) {
                    n(f, k.sibling), u = l(k, m.props.children), u.return = f, f = u;
                    break e;
                  }
                } else if (k.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Yt && lc(j) === k.type) {
                  n(f, k.sibling), u = l(k, m.props), u.ref = jr(f, k, m), u.return = f, f = u;
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            m.type === $n ? (u = En(m.props.children, f.mode, y, m.key), u.return = f, f = u) : (y = Xl(m.type, m.key, m.props, null, f.mode, y), y.ref = jr(f, u, m), y.return = f, f = y);
          }
          return o(f);
        case Wn:
          e: {
            for (k = m.key; u !== null; ) {
              if (u.key === k) if (u.tag === 4 && u.stateNode.containerInfo === m.containerInfo && u.stateNode.implementation === m.implementation) {
                n(f, u.sibling), u = l(u, m.children || []), u.return = f, f = u;
                break e;
              } else {
                n(f, u);
                break;
              }
              else t(f, u);
              u = u.sibling;
            }
            u = pa(m, f.mode, y), u.return = f, f = u;
          }
          return o(f);
        case Yt:
          return k = m._init, _(f, u, k(m._payload), y);
      }
      if (Mr(m)) return w(f, u, m, y);
      if (wr(m)) return x(f, u, m, y);
      Il(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, u !== null && u.tag === 6 ? (n(f, u.sibling), u = l(u, m), u.return = f, f = u) : (n(f, u), u = ma(m, f.mode, y), u.return = f, f = u), o(f)) : n(f, u);
  }
  return _;
}
var ir = du(!0), uu = du(!1), fs = hn(null), ms = null, qn = null, Fo = null;
function Wo() {
  Fo = qn = ms = null;
}
function $o(e) {
  var t = fs.current;
  ve(fs), e._currentValue = t;
}
function Ga(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function nr(e, t) {
  ms = e, Fo = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), e.firstContext = null);
}
function pt(e) {
  var t = e._currentValue;
  if (Fo !== e) if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
    if (ms === null) throw Error(V(308));
    qn = e, ms.dependencies = { lanes: 0, firstContext: e };
  } else qn = qn.next = e;
  return t;
}
var Sn = null;
function Uo(e) {
  Sn === null ? Sn = [e] : Sn.push(e);
}
function fu(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Uo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Wt(e, r);
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function Vo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function mu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function zt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function on(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ae & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Wt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Uo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Wt(e, n);
}
function Ql(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, No(e, n);
  }
}
function sc(e, t) {
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
function ps(e, t, n, r) {
  var l = e.updateQueue;
  Xt = !1;
  var a = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var c = i, d = c.next;
    c.next = null, o === null ? a = d : o.next = d, o = c;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, i = p.lastBaseUpdate, i !== o && (i === null ? p.firstBaseUpdate = d : i.next = d, p.lastBaseUpdate = c));
  }
  if (a !== null) {
    var v = l.baseState;
    o = 0, p = d = c = null, i = a;
    do {
      var g = i.lane, S = i.eventTime;
      if ((r & g) === g) {
        p !== null && (p = p.next = {
          eventTime: S,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, x = i;
          switch (g = t, S = n, x.tag) {
            case 1:
              if (w = x.payload, typeof w == "function") {
                v = w.call(S, v, g);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = x.payload, g = typeof w == "function" ? w.call(S, v, g) : w, g == null) break e;
              v = je({}, v, g);
              break e;
            case 2:
              Xt = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [i] : g.push(i));
      } else S = { eventTime: S, lane: g, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, p === null ? (d = p = S, c = v) : p = p.next = S, o |= g;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        g = i, i = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
      }
    } while (!0);
    if (p === null && (c = v), l.baseState = c, l.firstBaseUpdate = d, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    In |= o, e.lanes = o, e.memoizedState = v;
  }
}
function ac(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(V(191, l));
      l.call(r);
    }
  }
}
var hl = {}, Mt = hn(hl), Jr = hn(hl), el = hn(hl);
function jn(e) {
  if (e === hl) throw Error(V(174));
  return e;
}
function Bo(e, t) {
  switch (pe(el, t), pe(Jr, e), pe(Mt, hl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Na(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Na(t, e);
  }
  ve(Mt), pe(Mt, t);
}
function cr() {
  ve(Mt), ve(Jr), ve(el);
}
function pu(e) {
  jn(el.current);
  var t = jn(Mt.current), n = Na(t, e.type);
  t !== n && (pe(Jr, e), pe(Mt, n));
}
function Qo(e) {
  Jr.current === e && (ve(Mt), ve(Jr));
}
var ke = hn(0);
function hs(e) {
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
var oa = [];
function Ho() {
  for (var e = 0; e < oa.length; e++) oa[e]._workInProgressVersionPrimary = null;
  oa.length = 0;
}
var Hl = Vt.ReactCurrentDispatcher, ia = Vt.ReactCurrentBatchConfig, Mn = 0, Se = null, Ie = null, De = null, gs = !1, zr = !1, tl = 0, ch = 0;
function We() {
  throw Error(V(321));
}
function Ko(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!jt(e[n], t[n])) return !1;
  return !0;
}
function Go(e, t, n, r, l, a) {
  if (Mn = a, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hl.current = e === null || e.memoizedState === null ? mh : ph, e = n(r, l), zr) {
    a = 0;
    do {
      if (zr = !1, tl = 0, 25 <= a) throw Error(V(301));
      a += 1, De = Ie = null, t.updateQueue = null, Hl.current = hh, e = n(r, l);
    } while (zr);
  }
  if (Hl.current = ys, t = Ie !== null && Ie.next !== null, Mn = 0, De = Ie = Se = null, gs = !1, t) throw Error(V(300));
  return e;
}
function qo() {
  var e = tl !== 0;
  return tl = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? Se.memoizedState = De = e : De = De.next = e, De;
}
function ht() {
  if (Ie === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = De === null ? Se.memoizedState : De.next;
  if (t !== null) De = t, Ie = e;
  else {
    if (e === null) throw Error(V(310));
    Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, De === null ? Se.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function nl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ca(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(V(311));
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
      var p = d.lane;
      if ((Mn & p) === p) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var v = {
          lane: p,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        c === null ? (i = c = v, o = r) : c = c.next = v, Se.lanes |= p, In |= p;
      }
      d = d.next;
    } while (d !== null && d !== a);
    c === null ? o = r : c.next = i, jt(r, t.memoizedState) || (Xe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      a = l.lane, Se.lanes |= a, In |= a, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function da(e) {
  var t = ht(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      a = e(a, o.action), o = o.next;
    while (o !== l);
    jt(a, t.memoizedState) || (Xe = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
  }
  return [a, r];
}
function hu() {
}
function gu(e, t) {
  var n = Se, r = ht(), l = t(), a = !jt(r.memoizedState, l);
  if (a && (r.memoizedState = l, Xe = !0), r = r.queue, Yo(wu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, rl(9, vu.bind(null, n, r, l, t), void 0, null), Pe === null) throw Error(V(349));
    Mn & 30 || yu(n, t, l);
  }
  return l;
}
function yu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, xu(t) && _u(e);
}
function wu(e, t, n) {
  return n(function() {
    xu(t) && _u(e);
  });
}
function xu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function _u(e) {
  var t = Wt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function oc(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nl, lastRenderedState: e }, t.queue = e, e = e.dispatch = fh.bind(null, Se, e), [t.memoizedState, e];
}
function rl(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ku() {
  return ht().memoizedState;
}
function Kl(e, t, n, r) {
  var l = Et();
  Se.flags |= e, l.memoizedState = rl(1 | t, n, void 0, r === void 0 ? null : r);
}
function Is(e, t, n, r) {
  var l = ht();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ie !== null) {
    var o = Ie.memoizedState;
    if (a = o.destroy, r !== null && Ko(r, o.deps)) {
      l.memoizedState = rl(t, n, a, r);
      return;
    }
  }
  Se.flags |= e, l.memoizedState = rl(1 | t, n, a, r);
}
function ic(e, t) {
  return Kl(8390656, 8, e, t);
}
function Yo(e, t) {
  return Is(2048, 8, e, t);
}
function Su(e, t) {
  return Is(4, 2, e, t);
}
function ju(e, t) {
  return Is(4, 4, e, t);
}
function bu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Eu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Is(4, 4, bu.bind(null, t, e), n);
}
function Xo() {
}
function Cu(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ko(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Nu(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ko(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Mu(e, t, n) {
  return Mn & 21 ? (jt(n, t) || (n = Dd(), Se.lanes |= n, In |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Xe = !0), e.memoizedState = n);
}
function dh(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ia.transition;
  ia.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, ia.transition = r;
  }
}
function Iu() {
  return ht().memoizedState;
}
function uh(e, t, n) {
  var r = dn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Tu(e)) Lu(t, n);
  else if (n = fu(e, t, n, r), n !== null) {
    var l = Qe();
    St(n, e, r, l), Ru(n, t, r);
  }
}
function fh(e, t, n) {
  var r = dn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tu(e)) Lu(t, l);
  else {
    var a = e.alternate;
    if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, i = a(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, jt(i, o)) {
        var c = t.interleaved;
        c === null ? (l.next = l, Uo(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = fu(e, t, l, r), n !== null && (l = Qe(), St(n, e, r, l), Ru(n, t, r));
  }
}
function Tu(e) {
  var t = e.alternate;
  return e === Se || t !== null && t === Se;
}
function Lu(e, t) {
  zr = gs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ru(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, No(e, n);
  }
}
var ys = { readContext: pt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, mh = { readContext: pt, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: pt, useEffect: ic, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Kl(
    4194308,
    4,
    bu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Kl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Kl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = uh.bind(null, Se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: oc, useDebugValue: Xo, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = oc(!1), t = e[0];
  return e = dh.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Se, l = Et();
  if (xe) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), Pe === null) throw Error(V(349));
    Mn & 30 || yu(r, t, n);
  }
  l.memoizedState = n;
  var a = { value: n, getSnapshot: t };
  return l.queue = a, ic(wu.bind(
    null,
    r,
    a,
    e
  ), [e]), r.flags |= 2048, rl(9, vu.bind(null, r, a, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = Pe.identifierPrefix;
  if (xe) {
    var n = Ot, r = Pt;
    n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = tl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = ch++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ph = {
  readContext: pt,
  useCallback: Cu,
  useContext: pt,
  useEffect: Yo,
  useImperativeHandle: Eu,
  useInsertionEffect: Su,
  useLayoutEffect: ju,
  useMemo: Nu,
  useReducer: ca,
  useRef: ku,
  useState: function() {
    return ca(nl);
  },
  useDebugValue: Xo,
  useDeferredValue: function(e) {
    var t = ht();
    return Mu(t, Ie.memoizedState, e);
  },
  useTransition: function() {
    var e = ca(nl)[0], t = ht().memoizedState;
    return [e, t];
  },
  useMutableSource: hu,
  useSyncExternalStore: gu,
  useId: Iu,
  unstable_isNewReconciler: !1
}, hh = { readContext: pt, useCallback: Cu, useContext: pt, useEffect: Yo, useImperativeHandle: Eu, useInsertionEffect: Su, useLayoutEffect: ju, useMemo: Nu, useReducer: da, useRef: ku, useState: function() {
  return da(nl);
}, useDebugValue: Xo, useDeferredValue: function(e) {
  var t = ht();
  return Ie === null ? t.memoizedState = e : Mu(t, Ie.memoizedState, e);
}, useTransition: function() {
  var e = da(nl)[0], t = ht().memoizedState;
  return [e, t];
}, useMutableSource: hu, useSyncExternalStore: gu, useId: Iu, unstable_isNewReconciler: !1 };
function vt(e, t) {
  if (e && e.defaultProps) {
    t = je({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : je({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ts = { isMounted: function(e) {
  return (e = e._reactInternals) ? Dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), l = dn(e), a = zt(r, l);
  a.payload = t, n != null && (a.callback = n), t = on(e, a, l), t !== null && (St(t, e, l, r), Ql(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qe(), l = dn(e), a = zt(r, l);
  a.tag = 1, a.payload = t, n != null && (a.callback = n), t = on(e, a, l), t !== null && (St(t, e, l, r), Ql(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qe(), r = dn(e), l = zt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = on(e, l, r), t !== null && (St(t, e, r, n), Ql(t, e, r));
} };
function cc(e, t, n, r, l, a, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !qr(n, r) || !qr(l, a) : !0;
}
function Du(e, t, n) {
  var r = !1, l = mn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = pt(a) : (l = Je(t) ? Cn : Ve.current, r = t.contextTypes, a = (r = r != null) ? ar(e, l) : mn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ts, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t;
}
function dc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ts.enqueueReplaceState(t, t.state, null);
}
function Ya(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Vo(e);
  var a = t.contextType;
  typeof a == "object" && a !== null ? l.context = pt(a) : (a = Je(t) ? Cn : Ve.current, l.context = ar(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (qa(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ts.enqueueReplaceState(l, l.state, null), ps(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function dr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Vm(r), r = r.return;
    while (r);
    var l = n;
  } catch (a) {
    l = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ua(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var gh = typeof WeakMap == "function" ? WeakMap : Map;
function Pu(e, t, n) {
  n = zt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ws || (ws = !0, oo = r), Xa(e, t);
  }, n;
}
function Ou(e, t, n) {
  n = zt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Xa(e, t);
    };
  }
  var a = e.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
    Xa(e, t), typeof r != "function" && (cn === null ? cn = /* @__PURE__ */ new Set([this]) : cn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function uc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Ih.bind(null, e, t, n), t.then(e, e));
}
function fc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function mc(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, on(n, t, 1))), n.lanes |= 1), e);
}
var yh = Vt.ReactCurrentOwner, Xe = !1;
function Be(e, t, n, r) {
  t.child = e === null ? uu(t, null, n, r) : ir(t, e.child, n, r);
}
function pc(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return nr(t, l), r = Go(e, t, n, r, a, l), n = qo(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (xe && n && Oo(t), t.flags |= 1, Be(e, t, r, l), t.child);
}
function hc(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" && !si(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, zu(e, t, a, r, l)) : (e = Xl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (a = e.child, !(e.lanes & l)) {
    var o = a.memoizedProps;
    if (n = n.compare, n = n !== null ? n : qr, n(o, r) && e.ref === t.ref) return $t(e, t, l);
  }
  return t.flags |= 1, e = un(a, r), e.ref = t.ref, e.return = t, t.child = e;
}
function zu(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (qr(a, r) && e.ref === t.ref) if (Xe = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Xe = !0);
    else return t.lanes = e.lanes, $t(e, t, l);
  }
  return Za(e, t, n, r, l);
}
function Au(e, t, n) {
  var r = t.pendingProps, l = r.children, a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, pe(Xn, tt), tt |= n;
  else {
    if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, pe(Xn, tt), tt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, pe(Xn, tt), tt |= r;
  }
  else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, pe(Xn, tt), tt |= r;
  return Be(e, t, l, n), t.child;
}
function Fu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Za(e, t, n, r, l) {
  var a = Je(n) ? Cn : Ve.current;
  return a = ar(t, a), nr(t, l), n = Go(e, t, n, r, a, l), r = qo(), e !== null && !Xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, $t(e, t, l)) : (xe && r && Oo(t), t.flags |= 1, Be(e, t, n, l), t.child);
}
function gc(e, t, n, r, l) {
  if (Je(n)) {
    var a = !0;
    cs(t);
  } else a = !1;
  if (nr(t, l), t.stateNode === null) Gl(e, t), Du(t, n, r), Ya(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var c = o.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = pt(d) : (d = Je(n) ? Cn : Ve.current, d = ar(t, d));
    var p = n.getDerivedStateFromProps, v = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || c !== d) && dc(t, o, r, d), Xt = !1;
    var g = t.memoizedState;
    o.state = g, ps(t, r, o, l), c = t.memoizedState, i !== r || g !== c || Ze.current || Xt ? (typeof p == "function" && (qa(t, n, p, r), c = t.memoizedState), (i = Xt || cc(t, n, i, r, g, c, d)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), o.props = r, o.state = c, o.context = d, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, mu(e, t), i = t.memoizedProps, d = t.type === t.elementType ? i : vt(t.type, i), o.props = d, v = t.pendingProps, g = o.context, c = n.contextType, typeof c == "object" && c !== null ? c = pt(c) : (c = Je(n) ? Cn : Ve.current, c = ar(t, c));
    var S = n.getDerivedStateFromProps;
    (p = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== v || g !== c) && dc(t, o, r, c), Xt = !1, g = t.memoizedState, o.state = g, ps(t, r, o, l);
    var w = t.memoizedState;
    i !== v || g !== w || Ze.current || Xt ? (typeof S == "function" && (qa(t, n, S, r), w = t.memoizedState), (d = Xt || cc(t, n, d, r, g, w, c) || !1) ? (p || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, c), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, c)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = c, r = d) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ja(e, t, n, r, a, l);
}
function Ja(e, t, n, r, l, a) {
  Fu(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && tc(t, n, !1), $t(e, t, a);
  r = t.stateNode, yh.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ir(t, e.child, null, a), t.child = ir(t, null, i, a)) : Be(e, t, i, a), t.memoizedState = r.state, l && tc(t, n, !0), t.child;
}
function Wu(e) {
  var t = e.stateNode;
  t.pendingContext ? ec(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ec(e, t.context, !1), Bo(e, t.containerInfo);
}
function yc(e, t, n, r, l) {
  return or(), Ao(l), t.flags |= 256, Be(e, t, n, r), t.child;
}
var eo = { dehydrated: null, treeContext: null, retryLane: 0 };
function to(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $u(e, t, n) {
  var r = t.pendingProps, l = ke.current, a = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), pe(ke, l & 1), e === null)
    return Ka(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Ds(o, r, 0, null), e = En(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = to(n), t.memoizedState = eo, e) : Zo(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return vh(e, t, o, r, i, l, n);
  if (a) {
    a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = un(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = un(i, a) : (a = En(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? to(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = eo, r;
  }
  return a = e.child, e = a.sibling, r = un(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Zo(e, t) {
  return t = Ds({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Tl(e, t, n, r) {
  return r !== null && Ao(r), ir(t, e.child, null, n), e = Zo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function vh(e, t, n, r, l, a, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ua(Error(V(422))), Tl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = Ds({ mode: "visible", children: r.children }, l, 0, null), a = En(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && ir(t, e.child, null, o), t.child.memoizedState = to(o), t.memoizedState = eo, a);
  if (!(t.mode & 1)) return Tl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, a = Error(V(419)), r = ua(a, r, void 0), Tl(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, Xe || i) {
    if (r = Pe, r !== null) {
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
    return li(), r = ua(Error(V(421))), Tl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Th.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, nt = an(l.nextSibling), rt = t, xe = !0, xt = null, e !== null && (ct[dt++] = Pt, ct[dt++] = Ot, ct[dt++] = Nn, Pt = e.id, Ot = e.overflow, Nn = t), t = Zo(t, r.children), t.flags |= 4096, t);
}
function vc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ga(e.return, t, n);
}
function fa(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l);
}
function Uu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, a = r.tail;
  if (Be(e, t, r.children, n), r = ke.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && vc(e, n, t);
      else if (e.tag === 19) vc(e, n, t);
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
  if (pe(ke, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && hs(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), fa(t, !1, l, n, a);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && hs(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      fa(t, !0, n, null, a);
      break;
    case "together":
      fa(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Gl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = un(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function wh(e, t, n) {
  switch (t.tag) {
    case 3:
      Wu(t), or();
      break;
    case 5:
      pu(t);
      break;
    case 1:
      Je(t.type) && cs(t);
      break;
    case 4:
      Bo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      pe(fs, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (pe(ke, ke.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? $u(e, t, n) : (pe(ke, ke.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      pe(ke, ke.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Uu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), pe(ke, ke.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Au(e, t, n);
  }
  return $t(e, t, n);
}
var Vu, no, Bu, Qu;
Vu = function(e, t) {
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
no = function() {
};
Bu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, jn(Mt.current);
    var a = null;
    switch (n) {
      case "input":
        l = ja(e, l), r = ja(e, r), a = [];
        break;
      case "select":
        l = je({}, l, { value: void 0 }), r = je({}, r, { value: void 0 }), a = [];
        break;
      case "textarea":
        l = Ca(e, l), r = Ca(e, r), a = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = os);
    }
    Ma(n, r);
    var o;
    n = null;
    for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
      var i = l[d];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ur.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (i = l != null ? l[d] : void 0, r.hasOwnProperty(d) && c !== i && (c != null || i != null)) if (d === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in c) c.hasOwnProperty(o) && i[o] !== c[o] && (n || (n = {}), n[o] = c[o]);
      } else n || (a || (a = []), a.push(
        d,
        n
      )), n = c;
      else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, i = i ? i.__html : void 0, c != null && i !== c && (a = a || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (a = a || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Ur.hasOwnProperty(d) ? (c != null && d === "onScroll" && ye("scroll", e), a || i === c || (a = [])) : (a = a || []).push(d, c));
    }
    n && (a = a || []).push("style", n);
    var d = a;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Qu = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function br(e, t) {
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
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function xh(e, t, n) {
  var r = t.pendingProps;
  switch (zo(t), t.tag) {
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
      return Je(t.type) && is(), $e(t), null;
    case 3:
      return r = t.stateNode, cr(), ve(Ze), ve(Ve), Ho(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ml(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (uo(xt), xt = null))), no(e, t), $e(t), null;
    case 5:
      Qo(t);
      var l = jn(el.current);
      if (n = t.type, e !== null && t.stateNode != null) Bu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return $e(t), null;
        }
        if (e = jn(Mt.current), Ml(t)) {
          r = t.stateNode, n = t.type;
          var a = t.memoizedProps;
          switch (r[Ct] = t, r[Zr] = a, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tr.length; l++) ye(Tr[l], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye(
                "error",
                r
              ), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              Ci(r, a), ye("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!a.multiple }, ye("invalid", r);
              break;
            case "textarea":
              Mi(r, a), ye("invalid", r);
          }
          Ma(n, a), l = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var i = a[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && Nl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && Nl(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Ur.hasOwnProperty(o) && i != null && o === "onScroll" && ye("scroll", r);
          }
          switch (n) {
            case "input":
              xl(r), Ni(r, a, !0);
              break;
            case "textarea":
              xl(r), Ii(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = os);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ct] = t, e[Zr] = r, Vu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ia(n, r), n) {
              case "dialog":
                ye("cancel", e), ye("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tr.length; l++) ye(Tr[l], e);
                l = r;
                break;
              case "source":
                ye("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ye(
                  "error",
                  e
                ), ye("load", e), l = r;
                break;
              case "details":
                ye("toggle", e), l = r;
                break;
              case "input":
                Ci(e, r), l = ja(e, r), ye("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = je({}, r, { value: void 0 }), ye("invalid", e);
                break;
              case "textarea":
                Mi(e, r), l = Ca(e, r), ye("invalid", e);
                break;
              default:
                l = r;
            }
            Ma(n, l), i = l;
            for (a in i) if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "style" ? kd(e, c) : a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && xd(e, c)) : a === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Vr(e, c) : typeof c == "number" && Vr(e, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ur.hasOwnProperty(a) ? c != null && a === "onScroll" && ye("scroll", e) : c != null && ko(e, a, c, o));
            }
            switch (n) {
              case "input":
                xl(e), Ni(e, r, !1);
                break;
              case "textarea":
                xl(e), Ii(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, a = r.value, a != null ? Zn(e, !!r.multiple, a, !1) : r.defaultValue != null && Zn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = os);
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
      if (e && t.stateNode != null) Qu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = jn(el.current), jn(Mt.current), Ml(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (a = r.nodeValue !== n) && (e = rt, e !== null)) switch (e.tag) {
            case 3:
              Nl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Nl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (ve(ke), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (xe && nt !== null && t.mode & 1 && !(t.flags & 128)) cu(), or(), t.flags |= 98560, a = !1;
        else if (a = Ml(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!a) throw Error(V(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(V(317));
            a[Ct] = t;
          } else or(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), a = !1;
        } else xt !== null && (uo(xt), xt = null), a = !0;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ke.current & 1 ? Te === 0 && (Te = 3) : li())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return cr(), no(e, t), e === null && Yr(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return $o(t.type._context), $e(t), null;
    case 17:
      return Je(t.type) && is(), $e(t), null;
    case 19:
      if (ve(ke), a = t.memoizedState, a === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, o = a.rendering, o === null) if (r) br(a, !1);
      else {
        if (Te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = hs(e), o !== null) {
            for (t.flags |= 128, br(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return pe(ke, ke.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        a.tail !== null && Ce() > ur && (t.flags |= 128, r = !0, br(a, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = hs(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), br(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !xe) return $e(t), null;
        } else 2 * Ce() - a.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128, r = !0, br(a, !1), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ce(), t.sibling = null, n = ke.current, pe(ke, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return ri(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? tt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function _h(e, t) {
  switch (zo(t), t.tag) {
    case 1:
      return Je(t.type) && is(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return cr(), ve(Ze), ve(Ve), Ho(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Qo(t), null;
    case 13:
      if (ve(ke), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        or();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ve(ke), null;
    case 4:
      return cr(), null;
    case 10:
      return $o(t.type._context), null;
    case 22:
    case 23:
      return ri(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ll = !1, Ue = !1, kh = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function Yn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ee(e, t, r);
  }
  else n.current = null;
}
function ro(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var wc = !1;
function Sh(e, t) {
  if (Wa = ls, e = Yd(), Po(e)) {
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
        var o = 0, i = -1, c = -1, d = 0, p = 0, v = e, g = null;
        t: for (; ; ) {
          for (var S; v !== n || l !== 0 && v.nodeType !== 3 || (i = o + l), v !== a || r !== 0 && v.nodeType !== 3 || (c = o + r), v.nodeType === 3 && (o += v.nodeValue.length), (S = v.firstChild) !== null; )
            g = v, v = S;
          for (; ; ) {
            if (v === e) break t;
            if (g === n && ++d === l && (i = o), g === a && ++p === r && (c = o), (S = v.nextSibling) !== null) break;
            v = g, g = v.parentNode;
          }
          v = S;
        }
        n = i === -1 || c === -1 ? null : { start: i, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($a = { focusedElem: e, selectionRange: n }, ls = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
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
          throw Error(V(163));
      }
    } catch (y) {
      Ee(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return w = wc, wc = !1, w;
}
function Ar(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        l.destroy = void 0, a !== void 0 && ro(t, n, a);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ls(e, t) {
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
function lo(e) {
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
function Hu(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Hu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Zr], delete t[Ba], delete t[sh], delete t[ah])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ku(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ku(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function so(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = os));
  else if (r !== 4 && (e = e.child, e !== null)) for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), e = e.sibling;
}
function ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ao(e, t, n), e = e.sibling; e !== null; ) ao(e, t, n), e = e.sibling;
}
var Oe = null, wt = !1;
function qt(e, t, n) {
  for (n = n.child; n !== null; ) Gu(e, t, n), n = n.sibling;
}
function Gu(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
    Nt.onCommitFiberUnmount(js, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ue || Yn(n, t);
    case 6:
      var r = Oe, l = wt;
      Oe = null, qt(e, t, n), Oe = r, wt = l, Oe !== null && (wt ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null && (wt ? (e = Oe, n = n.stateNode, e.nodeType === 8 ? sa(e.parentNode, n) : e.nodeType === 1 && sa(e, n), Kr(e)) : sa(Oe, n.stateNode));
      break;
    case 4:
      r = Oe, l = wt, Oe = n.stateNode.containerInfo, wt = !0, qt(e, t, n), Oe = r, wt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var a = l, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && ro(n, t, o), l = l.next;
        } while (l !== r);
      }
      qt(e, t, n);
      break;
    case 1:
      if (!Ue && (Yn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        Ee(n, t, i);
      }
      qt(e, t, n);
      break;
    case 21:
      qt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, qt(e, t, n), Ue = r) : qt(e, t, n);
      break;
    default:
      qt(e, t, n);
  }
}
function _c(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kh()), t.forEach(function(r) {
      var l = Lh.bind(null, e, r);
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
            Oe = i.stateNode, wt = !1;
            break e;
          case 3:
            Oe = i.stateNode.containerInfo, wt = !0;
            break e;
          case 4:
            Oe = i.stateNode.containerInfo, wt = !0;
            break e;
        }
        i = i.return;
      }
      if (Oe === null) throw Error(V(160));
      Gu(a, o, l), Oe = null, wt = !1;
      var c = l.alternate;
      c !== null && (c.return = null), l.return = null;
    } catch (d) {
      Ee(l, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) qu(t, e), t = t.sibling;
}
function qu(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (yt(t, e), bt(e), r & 4) {
        try {
          Ar(3, e, e.return), Ls(3, e);
        } catch (x) {
          Ee(e, e.return, x);
        }
        try {
          Ar(5, e, e.return);
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 1:
      yt(t, e), bt(e), r & 512 && n !== null && Yn(n, n.return);
      break;
    case 5:
      if (yt(t, e), bt(e), r & 512 && n !== null && Yn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Vr(l, "");
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var a = e.memoizedProps, o = n !== null ? n.memoizedProps : a, i = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          i === "input" && a.type === "radio" && a.name != null && yd(l, a), Ia(i, o);
          var d = Ia(i, a);
          for (o = 0; o < c.length; o += 2) {
            var p = c[o], v = c[o + 1];
            p === "style" ? kd(l, v) : p === "dangerouslySetInnerHTML" ? xd(l, v) : p === "children" ? Vr(l, v) : ko(l, p, v, d);
          }
          switch (i) {
            case "input":
              ba(l, a);
              break;
            case "textarea":
              vd(l, a);
              break;
            case "select":
              var g = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!a.multiple;
              var S = a.value;
              S != null ? Zn(l, !!a.multiple, S, !1) : g !== !!a.multiple && (a.defaultValue != null ? Zn(
                l,
                !!a.multiple,
                a.defaultValue,
                !0
              ) : Zn(l, !!a.multiple, a.multiple ? [] : "", !1));
          }
          l[Zr] = a;
        } catch (x) {
          Ee(e, e.return, x);
        }
      }
      break;
    case 6:
      if (yt(t, e), bt(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
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
        Kr(t.containerInfo);
      } catch (x) {
        Ee(e, e.return, x);
      }
      break;
    case 4:
      yt(t, e), bt(e);
      break;
    case 13:
      yt(t, e), bt(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (ti = Ce())), r & 4 && _c(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (d = Ue) || p, yt(t, e), Ue = d) : yt(t, e), bt(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !p && e.mode & 1) for (G = e, p = e.child; p !== null; ) {
          for (v = G = p; G !== null; ) {
            switch (g = G, S = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ar(4, g, g.return);
                break;
              case 1:
                Yn(g, g.return);
                var w = g.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (x) {
                    Ee(r, n, x);
                  }
                }
                break;
              case 5:
                Yn(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Sc(v);
                  continue;
                }
            }
            S !== null ? (S.return = g, G = S) : Sc(v);
          }
          p = p.sibling;
        }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                l = v.stateNode, d ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = v.stateNode, c = v.memoizedProps.style, o = c != null && c.hasOwnProperty("display") ? c.display : null, i.style.display = _d("display", o));
              } catch (x) {
                Ee(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (p === null) try {
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
            p === v && (p = null), v = v.return;
          }
          p === v && (p = null), v.sibling.return = v.return, v = v.sibling;
        }
      }
      break;
    case 19:
      yt(t, e), bt(e), r & 4 && _c(e);
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
          if (Ku(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Vr(l, ""), r.flags &= -33);
          var a = xc(e);
          ao(e, a, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = xc(e);
          so(e, i, o);
          break;
        default:
          throw Error(V(161));
      }
    } catch (c) {
      Ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jh(e, t, n) {
  G = e, Yu(e);
}
function Yu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var l = G, a = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Ll;
      if (!o) {
        var i = l.alternate, c = i !== null && i.memoizedState !== null || Ue;
        i = Ll;
        var d = Ue;
        if (Ll = o, (Ue = c) && !d) for (G = l; G !== null; ) o = G, c = o.child, o.tag === 22 && o.memoizedState !== null ? jc(l) : c !== null ? (c.return = o, G = c) : jc(l);
        for (; a !== null; ) G = a, Yu(a), a = a.sibling;
        G = l, Ll = i, Ue = d;
      }
      kc(e);
    } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, G = a) : kc(e);
  }
}
function kc(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ue || Ls(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && ac(t, a, r);
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
              ac(t, o, n);
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
                var p = d.memoizedState;
                if (p !== null) {
                  var v = p.dehydrated;
                  v !== null && Kr(v);
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
            throw Error(V(163));
        }
        Ue || t.flags & 512 && lo(t);
      } catch (g) {
        Ee(t, t.return, g);
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
function Sc(e) {
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
function jc(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ls(4, t);
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
            lo(t);
          } catch (c) {
            Ee(t, a, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            lo(t);
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
var bh = Math.ceil, vs = Vt.ReactCurrentDispatcher, Jo = Vt.ReactCurrentOwner, ft = Vt.ReactCurrentBatchConfig, ae = 0, Pe = null, Me = null, ze = 0, tt = 0, Xn = hn(0), Te = 0, ll = null, In = 0, Rs = 0, ei = 0, Fr = null, qe = null, ti = 0, ur = 1 / 0, Rt = null, ws = !1, oo = null, cn = null, Rl = !1, nn = null, xs = 0, Wr = 0, io = null, ql = -1, Yl = 0;
function Qe() {
  return ae & 6 ? Ce() : ql !== -1 ? ql : ql = Ce();
}
function dn(e) {
  return e.mode & 1 ? ae & 2 && ze !== 0 ? ze & -ze : ih.transition !== null ? (Yl === 0 && (Yl = Dd()), Yl) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $d(e.type)), e) : 1;
}
function St(e, t, n, r) {
  if (50 < Wr) throw Wr = 0, io = null, Error(V(185));
  fl(e, n, r), (!(ae & 2) || e !== Pe) && (e === Pe && (!(ae & 2) && (Rs |= n), Te === 4 && Jt(e, ze)), et(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (ur = Ce() + 500, Ms && gn()));
}
function et(e, t) {
  var n = e.callbackNode;
  ip(e, t);
  var r = rs(e, e === Pe ? ze : 0);
  if (r === 0) n !== null && Ri(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ri(n), t === 1) e.tag === 0 ? oh(bc.bind(null, e)) : au(bc.bind(null, e)), rh(function() {
      !(ae & 6) && gn();
    }), n = null;
    else {
      switch (Pd(r)) {
        case 1:
          n = Co;
          break;
        case 4:
          n = Ld;
          break;
        case 16:
          n = ns;
          break;
        case 536870912:
          n = Rd;
          break;
        default:
          n = ns;
      }
      n = lf(n, Xu.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Xu(e, t) {
  if (ql = -1, Yl = 0, ae & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (rr() && e.callbackNode !== n) return null;
  var r = rs(e, e === Pe ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = _s(e, r);
  else {
    t = r;
    var l = ae;
    ae |= 2;
    var a = Ju();
    (Pe !== e || ze !== t) && (Rt = null, ur = Ce() + 500, bn(e, t));
    do
      try {
        Nh();
        break;
      } catch (i) {
        Zu(e, i);
      }
    while (!0);
    Wo(), vs.current = a, ae = l, Me !== null ? t = 0 : (Pe = null, ze = 0, t = Te);
  }
  if (t !== 0) {
    if (t === 2 && (l = Pa(e), l !== 0 && (r = l, t = co(e, l))), t === 1) throw n = ll, bn(e, 0), Jt(e, r), et(e, Ce()), n;
    if (t === 6) Jt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Eh(l) && (t = _s(e, r), t === 2 && (a = Pa(e), a !== 0 && (r = a, t = co(e, a))), t === 1)) throw n = ll, bn(e, 0), Jt(e, r), et(e, Ce()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          _n(e, qe, Rt);
          break;
        case 3:
          if (Jt(e, r), (r & 130023424) === r && (t = ti + 500 - Ce(), 10 < t)) {
            if (rs(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Qe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Va(_n.bind(null, e, qe, Rt), t);
            break;
          }
          _n(e, qe, Rt);
          break;
        case 4:
          if (Jt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - kt(r);
            a = 1 << o, o = t[o], o > l && (l = o), r &= ~a;
          }
          if (r = l, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Va(_n.bind(null, e, qe, Rt), r);
            break;
          }
          _n(e, qe, Rt);
          break;
        case 5:
          _n(e, qe, Rt);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return et(e, Ce()), e.callbackNode === n ? Xu.bind(null, e) : null;
}
function co(e, t) {
  var n = Fr;
  return e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256), e = _s(e, t), e !== 2 && (t = qe, qe = n, t !== null && uo(t)), e;
}
function uo(e) {
  qe === null ? qe = e : qe.push.apply(qe, e);
}
function Eh(e) {
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
function Jt(e, t) {
  for (t &= ~ei, t &= ~Rs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - kt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function bc(e) {
  if (ae & 6) throw Error(V(327));
  rr();
  var t = rs(e, 0);
  if (!(t & 1)) return et(e, Ce()), null;
  var n = _s(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pa(e);
    r !== 0 && (t = r, n = co(e, r));
  }
  if (n === 1) throw n = ll, bn(e, 0), Jt(e, t), et(e, Ce()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, _n(e, qe, Rt), et(e, Ce()), null;
}
function ni(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (ur = Ce() + 500, Ms && gn());
  }
}
function Tn(e) {
  nn !== null && nn.tag === 0 && !(ae & 6) && rr();
  var t = ae;
  ae |= 1;
  var n = ft.transition, r = ce;
  try {
    if (ft.transition = null, ce = 1, e) return e();
  } finally {
    ce = r, ft.transition = n, ae = t, !(ae & 6) && gn();
  }
}
function ri() {
  tt = Xn.current, ve(Xn);
}
function bn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, nh(n)), Me !== null) for (n = Me.return; n !== null; ) {
    var r = n;
    switch (zo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && is();
        break;
      case 3:
        cr(), ve(Ze), ve(Ve), Ho();
        break;
      case 5:
        Qo(r);
        break;
      case 4:
        cr();
        break;
      case 13:
        ve(ke);
        break;
      case 19:
        ve(ke);
        break;
      case 10:
        $o(r.type._context);
        break;
      case 22:
      case 23:
        ri();
    }
    n = n.return;
  }
  if (Pe = e, Me = e = un(e.current, null), ze = tt = t, Te = 0, ll = null, ei = Rs = In = 0, qe = Fr = null, Sn !== null) {
    for (t = 0; t < Sn.length; t++) if (n = Sn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, a = n.pending;
      if (a !== null) {
        var o = a.next;
        a.next = l, r.next = o;
      }
      n.pending = r;
    }
    Sn = null;
  }
  return e;
}
function Zu(e, t) {
  do {
    var n = Me;
    try {
      if (Wo(), Hl.current = ys, gs) {
        for (var r = Se.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        gs = !1;
      }
      if (Mn = 0, De = Ie = Se = null, zr = !1, tl = 0, Jo.current = null, n === null || n.return === null) {
        Te = 1, ll = t, Me = null;
        break;
      }
      e: {
        var a = e, o = n.return, i = n, c = t;
        if (t = ze, i.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var d = c, p = i, v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var g = p.alternate;
            g ? (p.updateQueue = g.updateQueue, p.memoizedState = g.memoizedState, p.lanes = g.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var S = fc(o);
          if (S !== null) {
            S.flags &= -257, mc(S, o, i, a, t), S.mode & 1 && uc(a, d, t), t = S, c = d;
            var w = t.updateQueue;
            if (w === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(c), t.updateQueue = x;
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              uc(a, d, t), li();
              break e;
            }
            c = Error(V(426));
          }
        } else if (xe && i.mode & 1) {
          var _ = fc(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), mc(_, o, i, a, t), Ao(dr(c, i));
            break e;
          }
        }
        a = c = dr(c, i), Te !== 4 && (Te = 2), Fr === null ? Fr = [a] : Fr.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var f = Pu(a, c, t);
              sc(a, f);
              break e;
            case 1:
              i = c;
              var u = a.type, m = a.stateNode;
              if (!(a.flags & 128) && (typeof u.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (cn === null || !cn.has(m)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var y = Ou(a, i, t);
                sc(a, y);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      tf(n);
    } catch (j) {
      t = j, Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ju() {
  var e = vs.current;
  return vs.current = ys, e === null ? ys : e;
}
function li() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4), Pe === null || !(In & 268435455) && !(Rs & 268435455) || Jt(Pe, ze);
}
function _s(e, t) {
  var n = ae;
  ae |= 2;
  var r = Ju();
  (Pe !== e || ze !== t) && (Rt = null, bn(e, t));
  do
    try {
      Ch();
      break;
    } catch (l) {
      Zu(e, l);
    }
  while (!0);
  if (Wo(), ae = n, vs.current = r, Me !== null) throw Error(V(261));
  return Pe = null, ze = 0, Te;
}
function Ch() {
  for (; Me !== null; ) ef(Me);
}
function Nh() {
  for (; Me !== null && !Jm(); ) ef(Me);
}
function ef(e) {
  var t = rf(e.alternate, e, tt);
  e.memoizedProps = e.pendingProps, t === null ? tf(e) : Me = t, Jo.current = null;
}
function tf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _h(n, t), n !== null) {
        n.flags &= 32767, Me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Te = 6, Me = null;
        return;
      }
    } else if (n = xh(n, t, tt), n !== null) {
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
function _n(e, t, n) {
  var r = ce, l = ft.transition;
  try {
    ft.transition = null, ce = 1, Mh(e, t, n, r);
  } finally {
    ft.transition = l, ce = r;
  }
  return null;
}
function Mh(e, t, n, r) {
  do
    rr();
  while (nn !== null);
  if (ae & 6) throw Error(V(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var a = n.lanes | n.childLanes;
  if (cp(e, a), e === Pe && (Me = Pe = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Rl || (Rl = !0, lf(ns, function() {
    return rr(), null;
  })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
    a = ft.transition, ft.transition = null;
    var o = ce;
    ce = 1;
    var i = ae;
    ae |= 4, Jo.current = null, Sh(e, n), qu(n, e), qp($a), ls = !!Wa, $a = Wa = null, e.current = n, jh(n), ep(), ae = i, ce = o, ft.transition = a;
  } else e.current = n;
  if (Rl && (Rl = !1, nn = e, xs = l), a = e.pendingLanes, a === 0 && (cn = null), rp(n.stateNode), et(e, Ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ws) throw ws = !1, e = oo, oo = null, e;
  return xs & 1 && e.tag !== 0 && rr(), a = e.pendingLanes, a & 1 ? e === io ? Wr++ : (Wr = 0, io = e) : Wr = 0, gn(), null;
}
function rr() {
  if (nn !== null) {
    var e = Pd(xs), t = ft.transition, n = ce;
    try {
      if (ft.transition = null, ce = 16 > e ? 16 : e, nn === null) var r = !1;
      else {
        if (e = nn, nn = null, xs = 0, ae & 6) throw Error(V(331));
        var l = ae;
        for (ae |= 4, G = e.current; G !== null; ) {
          var a = G, o = a.child;
          if (G.flags & 16) {
            var i = a.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var d = i[c];
                for (G = d; G !== null; ) {
                  var p = G;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ar(8, p, a);
                  }
                  var v = p.child;
                  if (v !== null) v.return = p, G = v;
                  else for (; G !== null; ) {
                    p = G;
                    var g = p.sibling, S = p.return;
                    if (Hu(p), p === d) {
                      G = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = S, G = g;
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
                Ar(9, a, a.return);
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
                  Ls(9, i);
              }
            } catch (j) {
              Ee(i, i.return, j);
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
        if (ae = l, gn(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
          Nt.onPostCommitFiberRoot(js, e);
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
function Ec(e, t, n) {
  t = dr(n, t), t = Pu(e, t, 1), e = on(e, t, 1), t = Qe(), e !== null && (fl(e, 1, t), et(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Ec(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ec(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cn === null || !cn.has(r))) {
        e = dr(n, e), e = Ou(t, e, 1), t = on(t, e, 1), e = Qe(), t !== null && (fl(t, 1, e), et(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ih(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (ze & n) === n && (Te === 4 || Te === 3 && (ze & 130023424) === ze && 500 > Ce() - ti ? bn(e, 0) : ei |= n), et(e, t);
}
function nf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Sl, Sl <<= 1, !(Sl & 130023424) && (Sl = 4194304)) : t = 1);
  var n = Qe();
  e = Wt(e, t), e !== null && (fl(e, t, n), et(e, n));
}
function Th(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), nf(e, n);
}
function Lh(e, t) {
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
      throw Error(V(314));
  }
  r !== null && r.delete(t), nf(e, n);
}
var rf;
rf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Xe = !1, wh(e, t, n);
    Xe = !!(e.flags & 131072);
  }
  else Xe = !1, xe && t.flags & 1048576 && ou(t, us, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Gl(e, t), e = t.pendingProps;
      var l = ar(t, Ve.current);
      nr(t, n), l = Go(null, t, r, e, l, n);
      var a = qo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (a = !0, cs(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Vo(t), l.updater = Ts, t.stateNode = l, l._reactInternals = t, Ya(t, r, e, n), t = Ja(null, t, r, !0, a, n)) : (t.tag = 0, xe && a && Oo(t), Be(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Gl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Dh(r), e = vt(r, e), l) {
          case 0:
            t = Za(null, t, r, e, n);
            break e;
          case 1:
            t = gc(null, t, r, e, n);
            break e;
          case 11:
            t = pc(null, t, r, e, n);
            break e;
          case 14:
            t = hc(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(V(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Za(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), gc(e, t, r, l, n);
    case 3:
      e: {
        if (Wu(t), e === null) throw Error(V(387));
        r = t.pendingProps, a = t.memoizedState, l = a.element, mu(e, t), ps(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          l = dr(Error(V(423)), t), t = yc(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = dr(Error(V(424)), t), t = yc(e, t, r, n, l);
          break e;
        } else for (nt = an(t.stateNode.containerInfo.firstChild), rt = t, xe = !0, xt = null, n = uu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (or(), r === l) {
            t = $t(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pu(t), e === null && Ka(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Ua(r, l) ? o = null : a !== null && Ua(r, a) && (t.flags |= 32), Fu(e, t), Be(e, t, o, n), t.child;
    case 6:
      return e === null && Ka(t), null;
    case 13:
      return $u(e, t, n);
    case 4:
      return Bo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ir(t, null, r, n) : Be(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), pc(e, t, r, l, n);
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, pe(fs, r._currentValue), r._currentValue = o, a !== null) if (jt(a.value, o)) {
          if (a.children === l.children && !Ze.current) {
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
                  c = zt(-1, n & -n), c.tag = 2;
                  var d = a.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var p = d.pending;
                    p === null ? c.next = c : (c.next = p.next, p.next = c), d.pending = c;
                  }
                }
                a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Ga(
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
            if (o = a.return, o === null) throw Error(V(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ga(o, n, t), o = a.sibling;
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
        Be(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, nr(t, n), l = pt(l), r = r(l), t.flags |= 1, Be(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = vt(r, t.pendingProps), l = vt(r.type, l), hc(e, t, r, l, n);
    case 15:
      return zu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Gl(e, t), t.tag = 1, Je(r) ? (e = !0, cs(t)) : e = !1, nr(t, n), Du(t, r, l), Ya(t, r, l, n), Ja(null, t, r, !0, e, n);
    case 19:
      return Uu(e, t, n);
    case 22:
      return Au(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function lf(e, t) {
  return Td(e, t);
}
function Rh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new Rh(e, t, n, r);
}
function si(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Dh(e) {
  if (typeof e == "function") return si(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === jo) return 11;
    if (e === bo) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Xl(e, t, n, r, l, a) {
  var o = 2;
  if (r = e, typeof e == "function") si(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case $n:
      return En(n.children, l, a, t);
    case So:
      o = 8, l |= 8;
      break;
    case xa:
      return e = ut(12, n, t, l | 2), e.elementType = xa, e.lanes = a, e;
    case _a:
      return e = ut(13, n, t, l), e.elementType = _a, e.lanes = a, e;
    case ka:
      return e = ut(19, n, t, l), e.elementType = ka, e.lanes = a, e;
    case pd:
      return Ds(n, l, a, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fd:
          o = 10;
          break e;
        case md:
          o = 9;
          break e;
        case jo:
          o = 11;
          break e;
        case bo:
          o = 14;
          break e;
        case Yt:
          o = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = ut(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t;
}
function En(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function Ds(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = pd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ma(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function pa(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ph(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gs(0), this.expirationTimes = Gs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gs(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ai(e, t, n, r, l, a, o, i, c) {
  return e = new Ph(e, t, n, i, c), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ut(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vo(a), e;
}
function Oh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Wn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sf(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return su(e, n, t);
  }
  return t;
}
function af(e, t, n, r, l, a, o, i, c) {
  return e = ai(n, r, !0, e, l, a, o, i, c), e.context = sf(null), n = e.current, r = Qe(), l = dn(n), a = zt(r, l), a.callback = t ?? null, on(n, a, l), e.current.lanes = l, fl(e, l, r), et(e, r), e;
}
function Ps(e, t, n, r) {
  var l = t.current, a = Qe(), o = dn(l);
  return n = sf(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(a, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = on(l, t, o), e !== null && (St(e, l, o, a), Ql(e, l, o)), o;
}
function ks(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oi(e, t) {
  Cc(e, t), (e = e.alternate) && Cc(e, t);
}
function zh() {
  return null;
}
var of = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ii(e) {
  this._internalRoot = e;
}
Os.prototype.render = ii.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Ps(e, t, null, null);
};
Os.prototype.unmount = ii.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function() {
      Ps(null, e, null, null);
    }), t[Ft] = null;
  }
};
function Os(e) {
  this._internalRoot = e;
}
Os.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ad();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++) ;
    Zt.splice(n, 0, e), n === 0 && Wd(e);
  }
};
function ci(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Nc() {
}
function Ah(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var d = ks(o);
        a.call(d);
      };
    }
    var o = af(t, r, e, 0, null, !1, !1, "", Nc);
    return e._reactRootContainer = o, e[Ft] = o.current, Yr(e.nodeType === 8 ? e.parentNode : e), Tn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var d = ks(c);
      i.call(d);
    };
  }
  var c = ai(e, 0, !1, null, null, !1, !1, "", Nc);
  return e._reactRootContainer = c, e[Ft] = c.current, Yr(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    Ps(t, c, n, r);
  }), c;
}
function As(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var c = ks(o);
        i.call(c);
      };
    }
    Ps(t, o, e, l);
  } else o = Ah(n, t, e, l, r);
  return ks(o);
}
Od = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ir(t.pendingLanes);
        n !== 0 && (No(t, n | 1), et(t, Ce()), !(ae & 6) && (ur = Ce() + 500, gn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = Wt(e, 1);
        if (r !== null) {
          var l = Qe();
          St(r, e, 1, l);
        }
      }), oi(e, 1);
  }
};
Mo = function(e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = Qe();
      St(t, e, 134217728, n);
    }
    oi(e, 134217728);
  }
};
zd = function(e) {
  if (e.tag === 13) {
    var t = dn(e), n = Wt(e, t);
    if (n !== null) {
      var r = Qe();
      St(n, e, t, r);
    }
    oi(e, t);
  }
};
Ad = function() {
  return ce;
};
Fd = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
La = function(e, t, n) {
  switch (t) {
    case "input":
      if (ba(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ns(r);
            if (!l) throw Error(V(90));
            gd(r), ba(r, l);
          }
        }
      }
      break;
    case "textarea":
      vd(e, n);
      break;
    case "select":
      t = n.value, t != null && Zn(e, !!n.multiple, t, !1);
  }
};
bd = ni;
Ed = Tn;
var Fh = { usingClientEntryPoint: !1, Events: [pl, Qn, Ns, Sd, jd, ni] }, Er = { findFiberByHostInstance: kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Wh = { bundleType: Er.bundleType, version: Er.version, rendererPackageName: Er.rendererPackageName, rendererConfig: Er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Md(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Er.findFiberByHostInstance || zh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dl.isDisabled && Dl.supportsFiber) try {
    js = Dl.inject(Wh), Nt = Dl;
  } catch {
  }
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fh;
st.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ci(t)) throw Error(V(200));
  return Oh(e, t, null, n);
};
st.createRoot = function(e, t) {
  if (!ci(e)) throw Error(V(299));
  var n = !1, r = "", l = of;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ai(e, 1, !1, null, null, n, !1, r, l), e[Ft] = t.current, Yr(e.nodeType === 8 ? e.parentNode : e), new ii(t);
};
st.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = Md(t), e = e === null ? null : e.stateNode, e;
};
st.flushSync = function(e) {
  return Tn(e);
};
st.hydrate = function(e, t, n) {
  if (!zs(t)) throw Error(V(200));
  return As(null, e, t, !0, n);
};
st.hydrateRoot = function(e, t, n) {
  if (!ci(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, l = !1, a = "", o = of;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = af(t, null, e, 1, n ?? null, l, !1, a, o), e[Ft] = t.current, Yr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Os(t);
};
st.render = function(e, t, n) {
  if (!zs(t)) throw Error(V(200));
  return As(null, e, t, !1, n);
};
st.unmountComponentAtNode = function(e) {
  if (!zs(e)) throw Error(V(40));
  return e._reactRootContainer ? (Tn(function() {
    As(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ft] = null;
    });
  }), !0) : !1;
};
st.unstable_batchedUpdates = ni;
st.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zs(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return As(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function cf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cf);
    } catch (e) {
      console.error(e);
    }
}
cf(), id.exports = st;
var me = id.exports, df, Mc = me;
df = Mc.createRoot, Mc.hydrateRoot;
var uf = { exports: {} }, Fs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $h = h, Uh = Symbol.for("react.element"), Vh = Symbol.for("react.fragment"), Bh = Object.prototype.hasOwnProperty, Qh = $h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hh = { key: !0, ref: !0, __self: !0, __source: !0 };
function ff(e, t, n) {
  var r, l = {}, a = null, o = null;
  n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Bh.call(t, r) && !Hh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Uh, type: e, key: a, ref: o, props: l, _owner: Qh.current };
}
Fs.Fragment = Vh;
Fs.jsx = ff;
Fs.jsxs = ff;
uf.exports = Fs;
var s = uf.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Kh = {
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
const Gh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), J = (e, t) => {
  const n = h.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: o,
      className: i = "",
      children: c,
      ...d
    }, p) => h.createElement(
      "svg",
      {
        ref: p,
        ...Kh,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(a) * 24 / Number(l) : a,
        className: ["lucide", `lucide-${Gh(e)}`, i].join(" "),
        ...d
      },
      [
        ...t.map(([v, g]) => h.createElement(v, g)),
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
const mf = J("AlertCircle", [
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
const qh = J("AlertTriangle", [
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
const pf = J("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh = J("ArrowUpDown", [
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
const hf = J("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = J("Box", [
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
const Zh = J("Calendar", [
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
const Jh = J("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = J("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = J("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gf = J("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ui = J("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tg = J("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = J("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = J("Download", [
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
const rg = J("Eraser", [
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
const fi = J("FileJson", [
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
const lg = J("FileText", [
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
const sg = J("Folder", [
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
const ag = J("Info", [
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
const og = J("Lasso", [
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
const yf = J("LayoutGrid", [
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
const ig = J("LayoutList", [
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
const cg = J("Link2Off", [
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
const dg = J("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = J("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ug = J("Maximize", [
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
const fg = J("Menu", [
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
const mg = J("Minimize", [
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
const pg = J("MoreVertical", [
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
const hg = J("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vf = J("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = J("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = J("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = J("RefreshCw", [
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
const gg = J("ScanLine", [
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
const Ln = J("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wf = J("Settings", [
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
const xf = J("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = J("Star", [
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
const yg = J("StickyNote", [
  ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z", key: "qazsjp" }],
  ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4", key: "40519r" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = J("Tag", [
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
const vg = J("Trash", [
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
const wg = J("Type", [
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
const xg = J("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = J("Upload", [
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
const kg = J("Workflow", [
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
const he = J("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = J("ZoomIn", [
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
const jg = J("ZoomOut", [
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
const _f = (e) => typeof e == "object" && e !== null, Tc = (e) => {
  if (typeof e == "string")
    return e;
  if (_f(e) && typeof e.message == "string")
    return e.message;
};
async function mi(e) {
  let t;
  try {
    t = await e.json();
  } catch {
    throw e.ok ? new Error("Failed to parse JSON response") : new Error(`${e.status} ${e.statusText}`);
  }
  if (!e.ok) {
    let n = `${e.status} ${e.statusText}`;
    if (_f(t)) {
      const r = "error" in t ? t.error : void 0, l = Tc(r), a = "message" in t ? Tc(t.message) : void 0;
      n = l ?? a ?? n;
    }
    throw new Error(n);
  }
  return t;
}
const bg = async () => {
  const e = await te.fetchApi("/meld/home-dir");
  return (await le(e)).home;
}, Le = ({
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
let Ss = !1;
const Eg = (e) => {
  Ss = e, Ss && console.log("[Meld] Logger initialized in DEV mode (MELD_DEV=true).");
}, Cg = (...e) => {
  Ss && console.log("[Meld]", ...e);
}, Ng = (...e) => {
  Ss && console.warn("[Meld]", ...e);
}, Mg = (...e) => {
  console.error("[Meld]", ...e);
}, O = {
  log: Cg,
  warn: Ng,
  error: Mg,
  init: Eg
}, Zl = async (e = 0, t = 30, n = "", r = "default", l = !1) => {
  const a = await te.fetchApi(
    `/meld/list?offset=${e}&limit=${t}&query=${encodeURIComponent(n)}&view=${r}${l ? "&minimal=true" : ""}`
  );
  return le(a);
}, kf = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/details`);
  return le(t);
}, Ig = async (e, t = !1) => {
  const n = await te.fetchApi("/meld/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ids: e,
      permanent: t
    })
  });
  await le(n);
}, fo = async (e) => {
  const t = await te.fetchApi("/meld/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids: e })
  });
  return le(t);
}, Sf = async (e) => {
  const t = await te.fetchApi("/meld/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  return le(t);
}, Lc = async (e, t) => {
  const n = await te.fetchApi("/meld/link-parent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ childId: e, parentId: t })
  });
  await le(n);
}, Tg = async (e, t) => {
  const n = t !== void 0 ? `&threshold=${t}` : "", r = await te.fetchApi(`/meld/suggest-parents?id=${e}${n}`);
  try {
    return await le(r);
  } catch {
    return [];
  }
}, pi = async (e) => {
  const t = await te.fetchApi(`/meld/lineage?id=${e}`);
  try {
    return await le(t);
  } catch {
    return [];
  }
}, Lg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, tags: t })
  });
  await le(n);
}, Rg = async (e, t) => {
  const n = await te.fetchApi("/meld/image-notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, userNotes: t })
  });
  return le(n);
}, jf = async (e, t, n) => {
  const r = await te.fetchApi("/meld/bulk-image-tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageIds: e, addTags: t, removeTags: n })
  });
  await le(r);
}, Dg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/workflow`);
  return le(t);
}, Pg = async (e) => {
  const t = await te.fetchApi(`/meld/image/${e}/snapshot_data`);
  return le(t);
}, Og = (e, t) => {
  let n = e.replace(/\\/g, "/").split("/").pop() ?? "";
  return n = n.replace(/\.\./g, "").replace(/[\x00-\x1f\x7f]/g, "").trim(), !n || n.length > 255 ? t : n;
}, bf = async (e, t, n, r, l) => {
  const a = await te.fetchApi("/meld/api/download/raw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageId: e, removeMetadata: t, resizeMode: n, resizeValue: r, resizeFilter: l })
  });
  if (!a.ok)
    throw new Error(`Failed to fetch image ${e}`);
  const o = `image_${e}.png`, i = a.headers.get("Content-Disposition");
  let c = o;
  if (i != null && i.includes("filename=")) {
    const p = i.match(/filename="?([^"]+)"?/);
    p != null && p[1] && (c = Og(p[1], o));
  }
  return { blob: await a.blob(), filename: c };
}, Rc = 500, Dc = 2 * 1024 * 1024 * 1024, zg = async (e, t, n, r, l, a) => {
  const o = (await import("./jszip.min.js").then((x) => x.j)).default, i = new o(), c = e.length, d = /* @__PURE__ */ new Set();
  let p = 0, v = 0;
  for (const x of e) {
    a == null || a(p, c);
    const { blob: _, filename: f } = await bf(
      x,
      t,
      n,
      r,
      l
    );
    if (p >= Rc)
      throw new Error(
        `ZIP entry limit reached (${Rc} files). Please reduce the number of images.`
      );
    if (v += _.size, v > Dc)
      throw new Error(
        `ZIP size limit reached (${Dc / 1024 / 1024 / 1024} GB). Please reduce the number of images.`
      );
    let u = f;
    if (d.has(u)) {
      const m = u.lastIndexOf("."), y = m > 0 ? u.slice(0, m) : u, j = m > 0 ? u.slice(m) : "";
      let k = 2;
      for (; d.has(u); )
        u = `${y}_${k}${j}`, k++;
    }
    d.add(u), i.file(u, _), p += 1;
  }
  a == null || a(c, c);
  const g = await i.generateAsync({ type: "blob" }), S = window.URL.createObjectURL(g), w = document.createElement("a");
  w.href = S, w.download = `meld_images_${Date.now()}.zip`, document.body.appendChild(w), w.click(), window.URL.revokeObjectURL(S), document.body.removeChild(w);
}, Ag = async (e, t, n, r, l) => {
  const { blob: a, filename: o } = await bf(
    e,
    t,
    n,
    r,
    l
  ), i = window.URL.createObjectURL(a), c = document.createElement("a");
  c.href = i, c.download = o, document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(i), document.body.removeChild(c);
}, Fg = async (e, t) => {
  const n = `/meld/suggest?query=${encodeURIComponent(e)}${t ? `&type=${t}` : ""}`, r = await te.fetchApi(n);
  return le(r);
}, Wg = async () => {
  const e = await te.fetchApi("/meld/search-suggestions");
  return le(e);
}, $g = async () => {
  const e = await te.fetchApi("/meld/search-keywords");
  return le(e);
}, Ug = async () => {
  const e = await te.fetchApi("/meld/search-config");
  return le(e);
}, Vg = async () => {
  const e = await te.fetchApi("/meld/favorites");
  return le(e);
}, Bg = async (e, t) => {
  const n = await te.fetchApi("/meld/favorites", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, query: t })
  });
  await le(n);
}, Pc = async (e) => {
  const t = await te.fetchApi("/meld/favorites/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e })
  });
  await le(t);
}, Qg = async (e, t, n) => {
  const r = await te.fetchApi("/meld/favorites/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t, query: n })
  });
  await le(r);
}, Hg = {
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
}, Ef = async () => {
  let e;
  try {
    const t = await te.fetchApi("/meld/settings");
    e = await le(t);
  } catch (t) {
    return O.error("Failed to fetch settings, using defaults", t), Hg;
  }
  return typeof e["sidebar.show_filename"] == "boolean" && (e["sidebar.show_filename"] = e["sidebar.show_filename"] ? "filename" : "none"), typeof e["viewer.details.show_filename"] == "boolean" && (e["viewer.details.show_filename"] = e["viewer.details.show_filename"] ? "filename" : "none"), typeof e["fullscreen.details.show_filename"] == "boolean" && (e["fullscreen.details.show_filename"] = e["fullscreen.details.show_filename"] ? "filename" : "none"), e;
}, Kg = async (e, t) => {
  const n = await te.fetchApi("/meld/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: e, value: t })
  });
  await le(n);
}, Gg = async () => {
  const e = await te.fetchApi("/meld/clear-thumbnail-cache", {
    method: "POST"
  });
  return le(e);
};
function Cr(e) {
  return Array.from(new Map(e.map((t) => [t.id, t])).values());
}
const qg = (e, t) => {
  switch (t.type) {
    case "SET_FAVORITES":
      return {
        ...e,
        favorites: t.payload
      };
    case "REMOVE_IMAGES": {
      const n = new Set(t.payload), r = Cr(e.images.filter((o) => !n.has(o.id))), l = Cr(
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
      const n = [...e.images, ...t.payload], r = Cr(n).sort(
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
      const { images: n, total: r, offset: l } = t.payload, a = Cr(n);
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
      const { images: n, total: r, offset: l } = t.payload, a = [...e.images, ...n], o = Cr(a);
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
function Cf(e) {
  if (typeof e == "number")
    return !1;
  const t = e.initialMaskMode;
  return t ? t === "apply" || t === "run" ? t : t === !0 ? "run" : !1 : !1;
}
const Yg = (e, t) => {
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
      const n = t.payload, r = Cf(n);
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
}, Xg = (e, t) => {
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
    case "SELECT_ALL": {
      const n = e.images[0];
      return {
        ...e,
        selectedIds: new Set(e.images.map((r) => r.id)),
        lastSelectedId: n ? n.id : null
      };
    }
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
}, Zg = (e, t) => {
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
function Oc(e, t) {
  const n = e.searchQuery.trim() !== "";
  return e.viewerMode === "lighttable" && e.viewerLightTableSlotId ? t ?? [] : e.viewerMode === "lineage" && e.lineageImages.length > 0 ? e.lineageImages : e.images.filter(
    (r) => r.exists !== !1 && (e.settings["gallery.show_parent_images"] || n || !r.has_children)
  );
}
const Jg = (e, t) => {
  var n, r, l, a, o;
  switch (t.type) {
    case "SET_IMAGES": {
      const { images: i } = t.payload;
      let c = e.viewerImageId, d = null;
      if (e.viewerMode === "gallery" && c !== null && !i.some((p) => p.id === c)) {
        const p = e.images.find((v) => v.id === c) || (((n = e.viewerFallbackImage) == null ? void 0 : n.id) === c ? e.viewerFallbackImage : void 0);
        p ? d = p : c = null;
      }
      return {
        ...e,
        viewerImageId: c,
        viewerFallbackImage: d
      };
    }
    case "OPEN_VIEWER": {
      const i = t.payload, c = typeof i == "number" ? i : i.id, d = typeof i == "number" ? "gallery" : i.mode, p = typeof i != "number" && i.mode === "lighttable" ? i.slotId : null, v = Cf(i), g = e.viewerMode === "lineage" && d === "lineage" && e.lineageImages.some((S) => S.id === c);
      return {
        ...e,
        viewerImageId: c,
        viewerMode: d,
        viewerLightTableSlotId: p,
        viewerInitialMaskMode: v,
        lineageImages: g ? e.lineageImages : []
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
      const c = ((r = t.payload) == null ? void 0 : r.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Oc(e, (l = t.payload) == null ? void 0 : l.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const p = d.findIndex((S) => S.id === e.viewerImageId);
      if (p === -1 || p === d.length - 1 && e.viewerMode === "gallery" && e.pagination.hasMore || p === d.length - 1 && !c)
        return e;
      const v = (p + 1) % d.length, g = d[v];
      return g ? {
        ...e,
        viewerImageId: g.id
      } : e;
    }
    case "PREVIOUS_IMAGE": {
      const c = ((a = t.payload) == null ? void 0 : a.isFullscreen) ?? !1 ? e.settings["fullscreen.loop"] : e.settings["viewer.loop"], d = Oc(e, (o = t.payload) == null ? void 0 : o.currentList);
      if (e.viewerImageId === null || d.length === 0) return e;
      const p = d.findIndex((S) => S.id === e.viewerImageId);
      if (p === -1 || p === 0 && e.viewerMode === "gallery" && e.pagination.hasMore || p === 0 && !c)
        return e;
      const v = (p - 1 + d.length) % d.length, g = d[v];
      return g ? {
        ...e,
        viewerImageId: g.id
      } : e;
    }
    default:
      return e;
  }
}, ey = [
  Jg,
  qg,
  Xg,
  Yg,
  Zg
];
function ty(e, t) {
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
  } : ey.reduce((n, r) => r(n, t), e);
}
const ny = {
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
function ry(e, t) {
  return ty(e, t);
}
const Nf = h.createContext(void 0), ly = ({ children: e }) => {
  const [t, n] = h.useReducer(ry, ny), r = h.useRef(t.images.length), l = h.useRef(0), a = h.useRef(/* @__PURE__ */ new Map());
  h.useEffect(() => {
    r.current = t.images.length;
  }, [t.images.length]);
  const o = h.useCallback(
    async (w, x, _) => {
      const f = t.settings["gallery.max_load_count"], u = 200;
      let m = w;
      for (; m < Math.min(x, f) && _ === l.current; )
        try {
          const y = Math.min(u, f - m);
          O.log("Background fetch: starting chunk", {
            offset: m,
            limit: y
          });
          const j = await Zl(
            m,
            y,
            t.searchQuery,
            t.viewScope,
            !0
            // minimal mode
          );
          if (_ !== l.current || (n({ type: "APPEND_IMAGES", payload: j }), m += j.images.length, j.images.length === 0 || m >= j.total)) break;
          await new Promise((k) => setTimeout(k, 300));
        } catch (y) {
          O.error("Background fetch failed", y);
          break;
        }
    },
    [t.searchQuery, t.viewScope, t.settings]
  ), i = h.useCallback(async () => {
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now(), x = ++l.current;
    try {
      const _ = t.searchQuery.trim() !== "", f = t.settings["gallery.initial_load_count"];
      O.log("refreshImages: starting initial fetch", {
        isSearch: _,
        fetchLimit: f,
        query: t.searchQuery,
        scope: t.viewScope
      });
      const u = await Zl(
        0,
        f,
        t.searchQuery,
        t.viewScope,
        !1
        // not minimal for initial load
      ), m = performance.now() - w;
      O.log("refreshImages: initial fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "SET_IMAGES", payload: u }), u.total > f && o(f, u.total, x);
    } catch (_) {
      O.error("refreshImages: fetch failed", _), n({
        type: "SET_ERROR",
        payload: _ instanceof Error ? _.message : String(_)
      });
    }
  }, [t.searchQuery, t.viewScope, t.settings, o]), c = h.useCallback(async () => {
    if (t.isLoading || !t.pagination.hasMore) return;
    n({ type: "SET_LOADING", payload: !0 });
    const w = performance.now();
    try {
      const x = r.current, _ = t.searchQuery.trim() !== "", f = t.pagination.limit;
      O.log("loadMoreImages: starting fetch", {
        nextOffset: x,
        fetchLimit: f,
        isSearch: _
      });
      const u = await Zl(
        x,
        f,
        t.searchQuery,
        t.viewScope,
        !0
        // use minimal mode for scroll-triggered loads
      ), m = performance.now() - w;
      O.log("loadMoreImages: fetch complete", {
        count: u.images.length,
        total: u.total,
        offset: u.offset,
        durationMs: m.toFixed(2)
      }), n({ type: "APPEND_IMAGES", payload: u });
    } catch (x) {
      O.error("loadMoreImages: fetch failed", x), n({
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
      const w = await Vg();
      n({ type: "SET_FAVORITES", payload: w });
    } catch (w) {
      O.error("Failed to load favorites", w);
    }
  }, []), p = h.useCallback(async () => {
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
  }, [t.selectedIds, t.images, t.viewScope]), v = h.useCallback(async () => {
    if (t.selectedIds.size === 0) return;
    const w = Array.from(t.selectedIds);
    try {
      n({ type: "SET_LOADING", payload: !0 });
      const _ = (await fo(w)).restored_ids || w;
      t.viewScope === "trash" && n({ type: "REMOVE_IMAGES", payload: _ }), n({ type: "CLEAR_SELECTION" }), n({ type: "SET_LOADING", payload: !1 });
    } catch (x) {
      n({
        type: "SET_ERROR",
        payload: x instanceof Error ? x.message : String(x)
      });
    }
  }, [t.selectedIds, t.viewScope]), g = h.useCallback(
    async (w, x) => {
      try {
        await Kg(w, x), n({ type: "SET_SETTINGS", payload: { [w]: x } });
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
          O.log("fetchFullImageDetails: fetching full data", { id: w });
          const m = await kf(w);
          return n({ type: "UPDATE_IMAGE", payload: m }), m;
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
        const x = await Ef();
        n({ type: "SET_SETTINGS", payload: x });
      } catch (x) {
        O.error("Failed to load settings", x);
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
    Nf.Provider,
    {
      value: {
        state: t,
        dispatch: n,
        refreshImages: i,
        loadMoreImages: c,
        refreshFavorites: d,
        deleteSelected: p,
        restoreSelected: v,
        updateSetting: g,
        fetchFullImageDetails: S
      },
      children: e
    }
  );
}, ge = () => {
  const e = h.useContext(Nf);
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
}, gi = async () => {
  const e = await te.fetchApi("/meld/tags");
  return le(e);
}, sy = async (e) => {
  const t = await te.fetchApi("/meld/tags", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  });
  return le(t);
}, ay = async (e) => {
  const t = await te.fetchApi(`/meld/tags?id=${e}`, {
    method: "DELETE"
  });
  await le(t);
}, oy = async (e, t) => {
  const n = await te.fetchApi("/meld/tags/rename", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: e, name: t })
  });
  await le(n);
}, iy = (e) => {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return typeof t.name == "string" && typeof t.subfolder == "string" && typeof t.type == "string";
}, cy = async (e) => {
  const t = new FormData();
  t.append("image", e);
  const n = await te.fetchApi("/upload/image", {
    method: "POST",
    body: t
  }), r = await mi(n);
  if (!iy(r))
    throw new Error("Invalid upload image response shape");
  return r;
}, dy = async (e, t, n = !1, r) => {
  const l = await te.fetchApi(
    `/meld/folders?type=${e}&path=${encodeURIComponent(t)}&fast=${n}`,
    { signal: r }
  );
  try {
    return await le(l);
  } catch (a) {
    return O.error("Failed to fetch folders", a), { folders: [], images: [], image_count: 0 };
  }
}, uy = async (e, t, n, r) => {
  if (n.length === 0) return {};
  const l = await te.fetchApi(
    `/meld/folder-metadata?type=${e}&path=${encodeURIComponent(t)}&folders=${encodeURIComponent(n.join(","))}`,
    { signal: r }
  );
  try {
    return await le(l);
  } catch (a) {
    return O.error("Failed to fetch folder metadata", a), {};
  }
}, fy = async (e, t, n) => {
  const r = await te.fetchApi(
    `/meld/path-image-count?type=${e}&path=${encodeURIComponent(t)}`,
    { signal: n }
  );
  try {
    return (await le(r)).count;
  } catch {
    return 0;
  }
}, my = async (e) => {
  const t = await te.fetchApi("/meld/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  });
  await le(t);
}, py = async () => {
  const e = await te.fetchApi("/meld/scan/cancel", {
    method: "POST"
  });
  await le(e);
}, Mf = () => {
  const { dispatch: e } = ge(), [t, n] = h.useState(() => {
    const C = localStorage.getItem("meld-import-config"), Q = {
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
        const P = JSON.parse(C);
        return { ...Q, ...P, tags: [] };
      } catch {
        return Q;
      }
    return Q;
  });
  h.useEffect(() => {
    const { tags: C, ...Q } = t;
    localStorage.setItem("meld-import-config", JSON.stringify(Q));
  }, [t]);
  const [r, l] = h.useState([]), [a, o] = h.useState([]), [i, c] = h.useState(0), [d, p] = h.useState(!1), [v, g] = h.useState([]), [S, w] = h.useState(""), [x, _] = h.useState(!1), [f, u] = h.useState(null), m = h.useRef(!1), y = (C) => {
    C.target === C.currentTarget && (m.current = !0);
  }, j = (C) => {
    C.target === C.currentTarget && m.current && e({ type: "CLOSE_MODAL" }), m.current = !1;
  };
  h.useEffect(() => {
    (async () => {
      try {
        const Q = await bg();
        n((P) => P.custom_path ? P : { ...P, custom_path: Q });
      } catch (Q) {
        O.error("Failed to fetch home directory:", Q);
      }
    })();
  }, []), h.useEffect(() => {
    const C = new AbortController();
    return (async () => {
      const P = t.type === "custom" ? t.custom_path : t.subfolder;
      if (O.log(`loadFolders started. Path: "${P}", Type: "${t.type}"`), t.type === "custom" && !P) {
        O.log("Custom path is empty, skipping load."), l([]), o([]), c(0), p(!1);
        return;
      }
      p(!0);
      const R = P, I = t.type;
      try {
        O.log("Step 1: Fast load starting...");
        const L = await dy(t.type, P, !0, C.signal);
        if (C.signal.aborted) {
          O.log("Step 1: Aborted.");
          return;
        }
        O.log(
          `Step 1 complete. Found ${L.folders.length} folders, ${L.images.length} images.`
        ), l(L.folders), o(L.images), c(null);
        const W = L.folders.map((E) => E.name);
        W.length > 0 && (O.log(`Step 2: Metadata fetch starting for ${W.length} folders...`), uy(I, R, W, C.signal).then((E) => {
          if (C.signal.aborted) {
            O.log("Step 2: Aborted.");
            return;
          }
          O.log("Step 2: Metadata fetch complete."), l(
            (F) => F.map((U) => {
              const A = E[U.name];
              return A ? { ...U, count: A.count, preview: A.preview } : U;
            })
          );
        }).catch((E) => {
          E.name !== "AbortError" && O.error("Step 2: Metadata fetch failed:", E);
        })), O.log("Step 3: Path image count starting..."), fy(I, R, C.signal).then((E) => {
          if (C.signal.aborted) {
            O.log("Step 3: Aborted.");
            return;
          }
          O.log(`Step 3: Path image count complete: ${E}`), c(E);
        }).catch((E) => {
          E.name !== "AbortError" && O.error("Step 3: Path image count failed:", E);
        });
      } catch (L) {
        if (L.name === "AbortError") {
          O.log("Request aborted.");
          return;
        }
        O.error("Failed to load folders:", L), l([]), o([]), c(0);
      } finally {
        C.signal.aborted || p(!1);
      }
    })(), () => {
      C.abort();
    };
  }, [t.type, t.subfolder, t.custom_path]);
  const k = h.useCallback(async () => {
    _(!0);
    try {
      const C = await gi();
      g(C);
    } catch (C) {
      O.error("Failed to fetch tags:", C);
    } finally {
      _(!1);
    }
  }, []);
  h.useEffect(() => {
    k();
  }, [k]), Le({
    onEscape: h.useCallback(() => {
      f ? u(null) : e({ type: "CLOSE_MODAL" });
    }, [f, e])
  });
  const b = h.useMemo(() => v.filter(
    (C) => C.name.toLowerCase().includes(S.toLowerCase()) && !t.tags.includes(C.name)
  ), [v, S, t.tags]), M = (C) => {
    const Q = C.trim();
    Q && !t.tags.includes(Q) && (n({ ...t, tags: [...t.tags, Q] }), w(""));
  }, T = (C) => {
    n({ ...t, tags: t.tags.filter((Q) => Q !== C) });
  }, D = (C) => {
    C.key === "Enter" && S.trim() && (C.preventDefault(), M(S.trim()));
  }, N = async () => {
    try {
      await my(t), e({
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
      O.error("Failed to start scan:", C), alert(`Failed to start scan: ${C}`);
    }
  }, z = (C) => {
    if (t.type === "custom") {
      const Q = t.custom_path.includes("\\") ? "\\" : "/", P = t.custom_path.endsWith(Q) ? `${t.custom_path}${C}` : `${t.custom_path}${Q}${C}`;
      n({ ...t, custom_path: P });
    } else {
      const Q = t.subfolder ? `${t.subfolder}/${C}` : C;
      n({ ...t, subfolder: Q });
    }
  }, B = () => {
    if (t.type === "custom") {
      const C = t.custom_path.includes("\\") ? "\\" : "/", Q = t.custom_path.split(C);
      if (Q.length > 1) {
        Q.pop();
        let P = Q.join(C);
        P === "" && C === "/" && (P = "/"), n({ ...t, custom_path: P });
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
        onMouseDown: y,
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
                      children: /* @__PURE__ */ s.jsx(he, { size: 20 })
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
                    /* @__PURE__ */ s.jsx("div", { className: "meld-form-group--checkbox", children: /* @__PURE__ */ s.jsxs("label", { children: [
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
                            onClick: () => T(C),
                            children: /* @__PURE__ */ s.jsx(he, { size: 12 })
                          }
                        )
                      ] }, C)) }),
                      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                        /* @__PURE__ */ s.jsx(Ln, { size: 14, className: "meld-tag-search-icon" }),
                        /* @__PURE__ */ s.jsx(
                          "input",
                          {
                            id: "import-tags",
                            type: "text",
                            className: "meld-tag-search-input",
                            placeholder: "Search or create tag...",
                            value: S,
                            onChange: (C) => w(C.target.value),
                            onKeyDown: D
                          }
                        ),
                        S.trim() && !t.tags.includes(S.trim()) && /* @__PURE__ */ s.jsx(
                          "button",
                          {
                            type: "button",
                            className: "meld-tag-add-btn",
                            onClick: () => M(S),
                            children: /* @__PURE__ */ s.jsx(Ws, { size: 14 })
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
                        className: "meld-btn meld-btn--primary",
                        onClick: N,
                        style: { width: "100%" },
                        children: [
                          /* @__PURE__ */ s.jsx(al, { size: 16 }),
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
                            /* @__PURE__ */ s.jsx(gf, { size: 16 }),
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
                            ) : /* @__PURE__ */ s.jsx(sg, { size: 16 }) }),
                            /* @__PURE__ */ s.jsx("span", { className: "meld-folder-name", children: C.name }),
                            /* @__PURE__ */ s.jsx(
                              "span",
                              {
                                className: `meld-folder-count ${C.count === null ? "meld-folder-count--loading" : ""}`,
                                children: C.count !== null ? `${C.count} total` : "..."
                              }
                            ),
                            /* @__PURE__ */ s.jsx(ui, { size: 14 })
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
                      children: /* @__PURE__ */ s.jsx(he, { size: 24 })
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
}, If = "meld-download-options", hy = [
  { value: "lanczos", label: "Lanczos (high quality)" },
  { value: "bicubic", label: "Bicubic" },
  { value: "bilinear", label: "Bilinear" },
  { value: "box", label: "Box" },
  { value: "hamming", label: "Hamming" },
  { value: "nearest", label: "Nearest (pixel art)" }
];
function gy() {
  try {
    const e = localStorage.getItem(If);
    if (e) {
      const t = JSON.parse(e), n = t.removeMetadata, r = n === !0 || n === "true" || typeof n == "number" && n === 1, a = ["none", "percent", "max_edge"].includes(t.resizeMode) ? t.resizeMode : "none", o = typeof t.resizeValue == "number" && t.resizeValue > 0 ? t.resizeValue : 100, c = [
        "lanczos",
        "bicubic",
        "bilinear",
        "box",
        "hamming",
        "nearest"
      ].includes(t.resizeFilter) ? t.resizeFilter : "lanczos";
      return {
        format: t.format === "raw" ? "raw" : "zip",
        removeMetadata: r,
        resizeMode: a,
        resizeValue: o,
        resizeFilter: c
      };
    }
  } catch {
  }
  return {
    format: "zip",
    removeMetadata: !1,
    resizeMode: "none",
    resizeValue: 100,
    resizeFilter: "lanczos"
  };
}
function yy(e) {
  try {
    localStorage.setItem(If, JSON.stringify(e));
  } catch {
  }
}
const vy = ({ imageIds: e, onSuccess: t, onClose: n }) => {
  const [r, l] = h.useState(() => gy()), { format: a, removeMetadata: o, resizeMode: i, resizeValue: c, resizeFilter: d } = r, [p, v] = h.useState(!1), [g, S] = h.useState(null), [w, x] = h.useState(String(c)), _ = h.useRef(!1);
  h.useEffect(() => {
    yy(r);
  }, [r]), h.useEffect(() => {
    x(String(c));
  }, [c]);
  const f = (T) => {
    T.target === T.currentTarget && (_.current = !0);
  }, u = (T) => {
    T.target === T.currentTarget && _.current && (p || n()), _.current = !1;
  };
  Le({
    onEscape: () => {
      p || n();
    }
  });
  const m = (T) => {
    x(T);
    const D = Number(T);
    if (!Number.isFinite(D) || D <= 0)
      return;
    const B = Math.min(i === "percent" ? 99 : 99999, Math.max(1, Math.round(D)));
    l((C) => ({ ...C, resizeValue: B }));
  }, y = async () => {
    if (e.length === 0) {
      n();
      return;
    }
    v(!0);
    const T = e.length;
    S({ current: 0, total: T });
    try {
      if (a === "zip")
        await zg(
          e,
          o,
          i,
          c,
          d,
          (D, N) => {
            S({ current: D, total: N });
          }
        );
      else {
        let D = 0;
        for (const N of e)
          S({ current: D, total: T }), await Ag(
            N,
            o,
            i,
            c,
            d
          ), D += 1, S({ current: D, total: T }), await new Promise((z) => requestAnimationFrame(() => z()));
      }
      n(), t == null || t();
    } catch (D) {
      O.error("Download failed:", D), alert("Failed to download images.");
    } finally {
      v(!1), S(null);
    }
  }, j = i === "percent" ? "%" : "px", k = 1, b = i === "percent" ? 99 : 99999, M = i === "percent" ? "1-99" : "Max edge (px)";
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: f,
        onMouseUp: u,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (T) => T.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(sl, { size: 18 }),
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
                disabled: p,
                children: /* @__PURE__ */ s.jsx(he, { size: 20 })
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
                          checked: a === "zip",
                          onChange: () => l((T) => ({ ...T, format: "zip" })),
                          disabled: p
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
                          checked: a === "raw",
                          onChange: () => l((T) => ({ ...T, format: "raw" })),
                          disabled: p
                        }
                      ),
                      "Raw (Multiple Files)"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { style: { marginBottom: "20px" }, children: [
              /* @__PURE__ */ s.jsx(
                "label",
                {
                  htmlFor: "resize-value",
                  style: {
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "bold"
                  },
                  children: "Resize"
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [
                /* @__PURE__ */ s.jsxs(
                  "label",
                  {
                    style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "resizeMode",
                          value: "none",
                          checked: i === "none",
                          onChange: () => l((T) => ({ ...T, resizeMode: "none" })),
                          disabled: p
                        }
                      ),
                      "No resize"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "label",
                  {
                    style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "resizeMode",
                          value: "percent",
                          checked: i === "percent",
                          onChange: () => l((T) => ({ ...T, resizeMode: "percent", resizeValue: 50 })),
                          disabled: p
                        }
                      ),
                      "Resize (percentage)"
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "label",
                  {
                    style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
                    children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "radio",
                          name: "resizeMode",
                          value: "max_edge",
                          checked: i === "max_edge",
                          onChange: () => l((T) => ({ ...T, resizeMode: "max_edge", resizeValue: 1024 })),
                          disabled: p
                        }
                      ),
                      "Resize (max edge)"
                    ]
                  }
                )
              ] }),
              i !== "none" && /* @__PURE__ */ s.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "10px",
                    paddingLeft: "4px"
                  },
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        type: "number",
                        id: "resize-value",
                        min: k,
                        max: b,
                        step: 1,
                        value: w,
                        placeholder: M,
                        onChange: (T) => m(T.target.value),
                        disabled: p,
                        style: {
                          width: "100px",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          border: "1px solid var(--border-color, #555)",
                          background: "var(--comfy-input-bg, #1a1a1a)",
                          color: "inherit",
                          fontSize: "14px"
                        }
                      }
                    ),
                    /* @__PURE__ */ s.jsx("span", { style: { fontSize: "13px" }, children: j }),
                    i === "percent" && /* @__PURE__ */ s.jsx("span", { style: { fontSize: "12px", color: "var(--meld-text-secondary)" }, children: "(1-99)" }),
                    i === "max_edge" && /* @__PURE__ */ s.jsx("span", { style: { fontSize: "12px", color: "var(--meld-text-secondary)" }, children: "(max edge px)" })
                  ]
                }
              ),
              i !== "none" && /* @__PURE__ */ s.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "10px",
                    paddingLeft: "4px"
                  },
                  children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "resize-filter", style: { fontSize: "13px" }, children: "Algorithm:" }),
                    /* @__PURE__ */ s.jsx(
                      "select",
                      {
                        id: "resize-filter",
                        value: d,
                        onChange: (T) => l((D) => ({
                          ...D,
                          resizeFilter: T.target.value
                        })),
                        disabled: p,
                        style: {
                          padding: "4px 8px",
                          borderRadius: "4px",
                          border: "1px solid var(--border-color, #555)",
                          background: "var(--comfy-input-bg, #1a1a1a)",
                          color: "inherit",
                          fontSize: "13px"
                        },
                        children: hy.map((T) => /* @__PURE__ */ s.jsx("option", { value: T.value, children: T.label }, T.value))
                      }
                    )
                  ]
                }
              )
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
                        checked: o,
                        onChange: (T) => l((D) => ({ ...D, removeMetadata: T.target.checked })),
                        disabled: p
                      }
                    ),
                    "Remove metadata (ComfyUI workflow data) from downloaded images"
                  ]
                }
              )
            ] })
          ] }),
          p && g && /* @__PURE__ */ s.jsxs(
            "div",
            {
              style: {
                padding: "12px 20px",
                borderTop: "1px solid var(--border-color, #555)"
              },
              children: [
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                      fontSize: "13px"
                    },
                    children: [
                      /* @__PURE__ */ s.jsx("span", { children: `${g.total} images - Processing ${g.current + 1 > g.total ? g.total : g.current + 1} of ${g.total}...` }),
                      /* @__PURE__ */ s.jsxs("span", { style: { color: "var(--meld-text-secondary)" }, children: [
                        Math.round(g.current / Math.max(1, g.total) * 100),
                        "%"
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    role: "progressbar",
                    "aria-label": "Download progress",
                    "aria-valuemin": 0,
                    "aria-valuemax": g.total,
                    "aria-valuenow": Math.round(
                      g.current / Math.max(1, g.total) * 100
                    ),
                    style: {
                      width: "100%",
                      height: "4px",
                      background: "var(--comfy-input-bg, #1a1a1a)",
                      borderRadius: "2px",
                      overflow: "hidden"
                    },
                    children: /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        style: {
                          height: "100%",
                          borderRadius: "2px",
                          transition: "width 0.3s ease",
                          width: `${g.current / Math.max(1, g.total) * 100}%`,
                          background: "var(--meld-accent, #4a9eff)"
                        }
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--secondary",
                onClick: n,
                disabled: p,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: y,
                disabled: p,
                style: { display: "flex", alignItems: "center", gap: "8px" },
                children: p && g ? `Downloading ${Math.min(g.current + 1, g.total)}/${g.total}...` : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx(sl, { size: 16 }),
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
}, zc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, p) => {
    const v = typeof d == "function" ? d(t) : d;
    if (!Object.is(v, t)) {
      const g = t;
      t = p ?? (typeof v != "object" || v === null) ? v : Object.assign({}, t, v), n.forEach((S) => S(t, g));
    }
  }, l = () => t, i = { setState: r, getState: l, getInitialState: () => c, subscribe: (d) => (n.add(d), () => n.delete(d)) }, c = t = e(r, l, i);
  return i;
}, wy = (e) => e ? zc(e) : zc, xy = (e) => e;
function _y(e, t = xy) {
  const n = en.useSyncExternalStore(
    e.subscribe,
    en.useCallback(() => t(e.getState()), [e, t]),
    en.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return en.useDebugValue(n), n;
}
const ky = (e) => {
  const t = wy(e), n = (r) => _y(t, r);
  return Object.assign(n, t), n;
}, Sy = (e) => ky;
function jy(e, t) {
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
const mo = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return mo(r)(n);
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
        return mo(r)(n);
      }
    };
  }
}, by = (e, t) => (n, r, l) => {
  let a = {
    storage: jy(() => window.localStorage),
    partialize: (_) => _,
    version: 0,
    merge: (_, f) => ({
      ...f,
      ..._
    }),
    ...t
  }, o = !1, i = 0;
  const c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  let p = a.storage;
  if (!p)
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
    return p.setItem(a.name, {
      state: _,
      version: a.version
    });
  }, g = l.setState;
  l.setState = (_, f) => (g(_, f), v());
  const S = e(
    (..._) => (n(..._), v()),
    r,
    l
  );
  l.getInitialState = () => S;
  let w;
  const x = () => {
    var _, f;
    if (!p) return;
    const u = ++i;
    o = !1, c.forEach((y) => {
      var j;
      return y((j = r()) != null ? j : S);
    });
    const m = ((f = a.onRehydrateStorage) == null ? void 0 : f.call(a, (_ = r()) != null ? _ : S)) || void 0;
    return mo(p.getItem.bind(p))(a.name).then((y) => {
      if (y)
        if (typeof y.version == "number" && y.version !== a.version) {
          if (a.migrate) {
            const j = a.migrate(
              y.state,
              y.version
            );
            return j instanceof Promise ? j.then((k) => [!0, k]) : [!0, j];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, y.state];
      return [!1, void 0];
    }).then((y) => {
      var j;
      if (u !== i)
        return;
      const [k, b] = y;
      if (w = a.merge(
        b,
        (j = r()) != null ? j : S
      ), n(w, !0), k)
        return v();
    }).then(() => {
      u === i && (m == null || m(w, void 0), w = r(), o = !0, d.forEach((y) => y(w)));
    }).catch((y) => {
      u === i && (m == null || m(void 0, y));
    });
  };
  return l.persist = {
    setOptions: (_) => {
      a = {
        ...a,
        ..._
      }, _.storage && (p = _.storage);
    },
    clearStorage: () => {
      p == null || p.removeItem(a.name);
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
}, Ey = by, Cy = [
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
let Pl = null;
const se = Sy()(
  Ey(
    (e) => ({
      isOpen: !1,
      slots: Cy,
      buckets: {},
      images: {},
      toastMessage: null,
      toastType: "info",
      setIsOpen: (t) => e({ isOpen: t }),
      addToBucket: (t, n, r) => e((l) => {
        const a = { ...l.buckets };
        for (const c in a) {
          const d = a[c] ?? [];
          a[c] = d.filter((p) => p !== n);
        }
        a[t] || (a[t] = []);
        const o = a[t] ?? [];
        o.includes(n) || (a[t] = [...o, n]);
        const i = { ...l.images };
        return r && (i[n] = r), { buckets: a, images: i };
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
          const p = d.filter((v) => !l.has(v));
          p.length !== d.length && (a[c] = p, o = !0);
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
        Pl && clearTimeout(Pl), e({ toastMessage: t, toastType: n }), Pl = setTimeout(() => {
          e({ toastMessage: null }), Pl = null;
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
), Tf = async () => {
  const e = await te.fetchApi("/meld/workflows");
  return le(e);
}, Lf = async (e) => {
  const t = await te.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(e)}`);
  return le(t);
}, Rf = (e) => e ? e.replace(/\s+/g, "").toLowerCase() : "", lr = (e) => {
  const t = Rf(e);
  return t === "meldimageloader" || t === "loadimage";
}, $r = (e) => Rf(e) === "loadimagemask", Ny = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && t !== null && "id" in t && "type" in t
), yi = () => ({ executeWorkflow: h.useCallback(
  async (t, n, r, l) => {
    var x, _, f, u, m;
    O.log("executeWorkflow called:", {
      workflowName: t,
      imageId: n.id,
      maskFilename: r,
      targetLoaderNodeId: l
    });
    const a = await Lf(t);
    O.log("Workflow fetched:", t);
    let o = l || null, i = null, c = !1;
    if (a.nodes && Array.isArray(a.nodes)) {
      if (c = !0, !o) {
        const j = a.nodes.find((k) => lr(k.type));
        j && (o = String(j.id));
      }
      const y = a.nodes.find((j) => $r(j.type));
      y && (i = String(y.id));
    } else {
      if (!o)
        for (const y in a) {
          const j = a[y];
          if (lr(j.class_type)) {
            o = y;
            break;
          }
        }
      for (const y in a) {
        const j = a[y];
        if ($r(j.class_type)) {
          i = y;
          break;
        }
      }
    }
    if (O.log("Node IDs found:", {
      loaderNodeId: o,
      maskNodeId: i,
      isUIFormat: c
    }), !o)
      throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
    if (r && !i)
      throw O.warn("Mask filename provided but no mask node found in workflow JSON"), new Error(
        "Load Image (as Mask) node not found in the selected workflow, but a mask was provided."
      );
    let d = n.filename;
    if (n.subfolder && (d = `${n.subfolder}/${n.filename}`), n.type && n.type !== "input" && (d = `${d} [${n.type}]`), c) {
      const y = window.app;
      if (typeof y != "object" || y === null || !("graph" in y))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const j = y;
      if (!j.graph || !Ny(j.graph._nodes))
        throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
      const k = t.replace(/\.json$/i, "");
      let b = !1;
      const M = document.querySelectorAll(".workflow-tab");
      for (const N of Array.from(M)) {
        const z = N.querySelector(".workflow-label"), B = ((x = z == null ? void 0 : z.textContent) == null ? void 0 : x.trim()) || ((_ = N.textContent) == null ? void 0 : _.trim()) || "";
        if (B === k || B === t || B.startsWith(`${k} `) || B.startsWith(`${k}•`)) {
          N.click(), b = !0;
          break;
        }
      }
      b || await j.loadGraphData(a, !0, !0, t), await new Promise((N) => setTimeout(N, 200));
      const T = j.graph._nodes;
      O.log("Active graph nodes count:", T.length);
      const D = T.find(
        (N) => String(N.id) === o || lr(N.type)
      );
      if (D) {
        const N = (f = D.widgets) == null ? void 0 : f.find((z) => z.name === "image");
        O.log("Updating loader node widget:", {
          nodeId: D.id,
          type: D.type,
          imagePath: d
        }), N && (N.value = d, typeof N.callback == "function" && N.callback(d));
      } else
        O.warn(
          "Loader node (MeldImageLoader/LoadImage) not found in active graph after loading"
        );
      if (r) {
        const N = T.find(
          (z) => String(z.id) === i || $r(z.type)
        );
        if (O.log("Updating mask node widget:", {
          nodeId: N == null ? void 0 : N.id,
          maskFilename: r
        }), N) {
          const z = (u = N.widgets) == null ? void 0 : u.find((C) => C.name === "image");
          z && (z.value = `${r} [temp]`);
          const B = (m = N.widgets) == null ? void 0 : m.find((C) => C.name === "channel");
          B && (B.value = "red");
        } else
          O.warn("LoadImageMask not found in active graph after loading");
      }
      j.graph.setDirtyCanvas(!0, !0);
      try {
        if (typeof j.queuePrompt != "function")
          throw new Error("queuePrompt is not available.");
        await j.queuePrompt(0);
        return;
      } catch (N) {
        throw O.error("Failed to queue workflow:", N), new Error("Failed to queue workflow. Check logs for details.");
      }
    }
    const p = JSON.parse(JSON.stringify(a));
    p[o].inputs.image = d, r && i && (p[i].inputs.image = `${r} [temp]`, p[i].inputs.channel = "red");
    const v = window.api;
    if (!(typeof v == "object" && v !== null && "fetchApi" in v && typeof v.fetchApi == "function"))
      throw new Error("ComfyUI API is not available. Please reload ComfyUI and try again.");
    const S = v, w = await S.fetchApi("/prompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: p,
        client_id: typeof S.clientId == "string" ? S.clientId : void 0
      })
    });
    return mi(w);
  },
  []
) }), Df = (e) => !!(e && Array.isArray(e.widgets));
function My(e) {
  let t = e.filename;
  return e.subfolder && (t = `${e.subfolder}/${e.filename}`), e.type && e.type !== "input" && (t = `${t} [${e.type}]`), t;
}
function il(e, t) {
  var i, c;
  const n = window.app;
  if (!(n != null && n.graph))
    return { ok: !1, reason: "no_app_graph" };
  if (!Array.isArray(n.graph._nodes))
    return { ok: !1, reason: "no_loader_node" };
  const r = My(e), l = n.graph._nodes.filter((d) => lr(d.type));
  if (l.length === 0)
    return { ok: !1, reason: "no_loader_node" };
  let a = l[0];
  if (t) {
    const d = l.find((p) => String(p.id) === t);
    d && (a = d);
  }
  if (!Df(a))
    return { ok: !1, reason: "no_widgets" };
  const o = a.widgets.find((d) => d.name === "image");
  return o ? (o.value = r, typeof o.callback == "function" && o.callback(r), (c = (i = n.graph).afterChange) == null || c.call(i), n.graph.setDirtyCanvas(!0, !0), { ok: !0 }) : { ok: !1, reason: "no_image_widget" };
}
const Iy = () => {
  const { dispatch: e } = ge();
  return { injectMaskToGraph: h.useCallback(
    (n, r) => {
      var p, v;
      O.log("[Meld-Debug] injectMaskToGraph called with:", r), il(n);
      const l = window.app;
      if (!(l != null && l.graph))
        return O.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found"), !1;
      if (!Array.isArray(l.graph._nodes))
        return O.log("[Meld-Debug] injectMaskToGraph: comfyApp.graph._nodes is not an array"), !1;
      const a = l.graph._nodes.filter((g) => $r(g.type));
      if (a.length === 0)
        return O.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph"), e({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Load Image (as Mask)' node found in the current workflow."
          }
        }), !1;
      const o = a[0];
      if (!o)
        return !1;
      if (!Df(o))
        return O.log("[Meld-Debug] injectMaskToGraph: target mask node has no widgets", o.id), !1;
      const i = o.widgets.find((g) => g.name === "image"), c = `${r} [temp]`;
      O.log(
        "[Meld-Debug] injectMaskToGraph: Updating node",
        o.id,
        "widget 'image' with",
        c
      ), i && (i.value = c, typeof i.callback == "function" && i.callback(c));
      const d = o.widgets.find((g) => g.name === "channel");
      return d && (d.value = "red", typeof d.callback == "function" && d.callback("red")), (v = (p = l.graph).afterChange) == null || v.call(p), l.graph.setDirtyCanvas(!0, !0), !0;
    },
    [e]
  ) };
};
function Ol(e, t) {
  return {
    data: new Uint8ClampedArray(e * t).fill(0),
    width: e,
    height: t
  };
}
function Ty(e, t, n = 255) {
  const { width: r, height: l } = e, a = document.createElement("canvas");
  a.width = r, a.height = l;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return e;
  const i = po(e, [255, 255, 255], 255);
  o.putImageData(i, 0, 0), o.fillStyle = n > 0 ? "white" : "black", o.beginPath(), t(o), o.fill();
  const c = o.getImageData(0, 0, r, l), d = new Uint8ClampedArray(r * l);
  for (let p = 0; p < r * l; p++) {
    const v = c.data[p * 4] ?? 0;
    d[p] = v > 128 ? 255 : 0;
  }
  return { ...e, data: d };
}
function po(e, t = [255, 255, 255], n = 255) {
  const { data: r, width: l, height: a } = e, o = new ImageData(l, a), i = o.data;
  for (let c = 0; c < r.length; c++) {
    const d = r[c] ?? 0, p = c * 4;
    d > 0 ? (i[p] = t[0], i[p + 1] = t[1], i[p + 2] = t[2], i[p + 3] = n) : (i[p] = 0, i[p + 1] = 0, i[p + 2] = 0, i[p + 3] = 0);
  }
  return o;
}
function Ly(e) {
  return e.data.every((t) => t === 0);
}
const Ac = (e) => e === "rect" || e === "ellipse" || e === "lasso", vi = ({
  imageId: e,
  mode: t,
  sequenceData: n,
  onSuccess: r,
  onClose: l
}) => {
  const { state: a, dispatch: o } = ge(), i = h.useMemo(() => a.images.find(($) => $.id === e) ?? a.lineageImages.find(($) => $.id === e) ?? se.getState().images[String(e)], [a.images, a.lineageImages, e]), c = h.useRef(void 0);
  i && (c.current = i);
  const d = i ?? c.current, { injectMaskToGraph: p } = Iy(), { executeWorkflow: v } = yi();
  Le({ onEscape: l });
  const g = h.useRef(null), S = h.useRef(null), w = h.useRef(null), x = h.useRef(null), [_, f] = h.useState(!1), [u, m] = h.useState(() => {
    const $ = localStorage.getItem("meld-mask-tool");
    return Ac($) ? $ : "rect";
  });
  h.useEffect(() => {
    Ac(u) && localStorage.setItem("meld-mask-tool", u);
  }, [u]);
  const [y, j] = h.useState({ x: 0, y: 0 }), [k, b] = h.useState({ x: 0, y: 0 }), [M, T] = h.useState([]), [D, N] = h.useState(null), [z, B] = h.useState(!1), [C, Q] = h.useState(1), [P, R] = h.useState({ x: 0, y: 0 }), [I, L] = h.useState(!1), [W, E] = h.useState(!1), F = h.useRef(null), U = h.useCallback(() => {
    const $ = w.current, H = S.current;
    if (!$ || !H) return null;
    const ee = H.getBoundingClientRect(), q = $.naturalWidth, ne = $.naturalHeight;
    if (!q || !ne) return null;
    const ie = q / ne, Ne = ee.width / ee.height;
    let fe, _e, we = 0, Fe = 0;
    return ie > Ne ? (fe = ee.width, _e = ee.width / ie, Fe = (ee.height - _e) / 2) : (_e = ee.height, fe = ee.height * ie, we = (ee.width - fe) / 2), {
      left: we,
      top: Fe,
      width: fe,
      height: _e
    };
  }, []), A = h.useCallback(
    ($, H, ee, q) => {
      if (!$) return H;
      const ne = $.getBoundingClientRect(), ie = ne.width / 2, Ne = ne.height / 2, fe = {
        x: (ie - H.x) / ee,
        y: (Ne - H.y) / ee
      };
      return { x: ie - fe.x * q, y: Ne - fe.y * q };
    },
    []
  ), K = h.useCallback(() => {
    Q(($) => {
      const H = Math.min($ * 1.2, 20);
      return R((ee) => A(S.current, ee, $, H)), H;
    });
  }, [A]), Z = h.useCallback(() => {
    Q(($) => {
      const H = Math.max(0.1, $ / 1.2);
      return R((ee) => A(S.current, ee, $, H)), H;
    });
  }, [A]), oe = h.useCallback(() => {
    const $ = g.current;
    if (!$) return;
    const H = $.getContext("2d");
    if (!H) return;
    H.clearRect(0, 0, $.width, $.height);
    const ee = getComputedStyle(document.documentElement), q = ee.getPropertyValue("--comfy-input-bg-active") || ee.getPropertyValue("--comfy-input-bg") || ee.getPropertyValue("--bg-color") || "var(--comfy-input-bg)", ne = U();
    if (x.current && ne && (H.save(), H.globalAlpha = 0.5, H.drawImage(
      x.current,
      ne.left,
      ne.top,
      ne.width,
      ne.height
    ), H.restore()), _) {
      const ie = Math.min(y.x, k.x), Ne = Math.min(y.y, k.y), fe = Math.abs(y.x - k.x), _e = Math.abs(y.y - k.y);
      if (H.save(), H.globalAlpha = 0.3, H.fillStyle = q, H.strokeStyle = "white", H.lineWidth = 2, H.setLineDash([5, 5]), H.beginPath(), u === "rect")
        H.rect(ie, Ne, fe, _e);
      else if (u === "ellipse") {
        const we = ie + fe / 2, Fe = Ne + _e / 2;
        H.ellipse(we, Fe, fe / 2, _e / 2, 0, 0, 2 * Math.PI);
      } else if (u === "lasso" && M.length > 1) {
        const we = M[0];
        if (we) {
          H.moveTo(we.x, we.y);
          for (let Fe = 1; Fe < M.length; Fe++) {
            const Kt = M[Fe];
            Kt && H.lineTo(Kt.x, Kt.y);
          }
          H.closePath();
        }
      }
      H.fill(), H.globalAlpha = 1, H.stroke(), H.restore();
    }
  }, [_, y, k, u, M, U]), [de, Re] = h.useState([]), ue = h.useMemo(() => de.length > 0 ? de[de.length - 1] : w.current ? Ol(w.current.naturalWidth, w.current.naturalHeight) : null, [de]);
  h.useEffect(() => {
    var $;
    ($ = w.current) != null && $.naturalWidth && de.length === 0 && Re([
      Ol(w.current.naturalWidth, w.current.naturalHeight)
    ]);
  }, [de.length]);
  const Tt = h.useCallback(() => {
    var $;
    ($ = w.current) != null && $.naturalWidth && de.length === 0 && Re([
      Ol(w.current.naturalWidth, w.current.naturalHeight)
    ]);
  }, [de.length]), Y = h.useRef(!1), Bt = h.useRef(0), Qt = ($) => {
    $.target === $.currentTarget && (Y.current = !0);
  }, Ht = ($) => {
    $.target === $.currentTarget && Y.current && !_ && l(), Y.current = !1;
  };
  h.useEffect(() => {
    if (!ue) return;
    x.current || (x.current = document.createElement("canvas"));
    const $ = x.current;
    $.width = ue.width, $.height = ue.height;
    const H = $.getContext("2d");
    if (!H) return;
    const ee = po(ue, [255, 255, 255], 255);
    H.putImageData(ee, 0, 0), oe();
  }, [ue, oe]), h.useEffect(() => {
    _ && oe();
  }, [_, oe]), h.useEffect(() => {
    const $ = S.current;
    if (!$) return;
    const H = (ee) => {
      ee.preventDefault();
      const q = ee.deltaY > 0 ? 1 / 1.1 : 1.1;
      Q((ne) => {
        const ie = Math.min(Math.max(0.1, ne * q), 20);
        return R((Ne) => {
          const fe = $.getBoundingClientRect(), _e = ee.clientX - fe.left, we = ee.clientY - fe.top, Fe = {
            x: (_e - Ne.x) / ne,
            y: (we - Ne.y) / ne
          };
          return {
            x: _e - Fe.x * ie,
            y: we - Fe.y * ie
          };
        }), ie;
      });
    };
    return $.addEventListener("wheel", H, { passive: !1 }), () => $.removeEventListener("wheel", H);
  }, []), h.useEffect(() => {
    if (!W) return;
    const $ = (ee) => {
      if (F.current) {
        const q = ee.clientX - F.current.clientX, ne = ee.clientY - F.current.clientY;
        R({
          x: F.current.panX + q,
          y: F.current.panY + ne
        });
      }
    }, H = () => {
      E(!1), F.current = null;
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", H), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", H);
    };
  }, [W]), h.useEffect(() => {
    const $ = () => {
      S.current && g.current && (g.current.width = S.current.clientWidth, g.current.height = S.current.clientHeight, oe());
    }, H = new ResizeObserver($);
    return S.current && H.observe(S.current), $(), () => H.disconnect();
  }, [oe]);
  const Pn = ($) => {
    var we;
    const H = $.button === 2, ee = $.button === 1, q = I && $.button === 0;
    if (H || ee || q) {
      $.preventDefault(), $.stopPropagation(), F.current = {
        panX: P.x,
        panY: P.y,
        clientX: $.clientX,
        clientY: $.clientY
      }, E(!0);
      return;
    }
    if ($.button !== 0 || _ || z || Date.now() - Bt.current < 100)
      return;
    $.preventDefault();
    const ne = U(), ie = (we = S.current) == null ? void 0 : we.getBoundingClientRect();
    if (!ne || !ie) return;
    f(!0);
    const Ne = {
      x: ($.clientX - ie.left - P.x) / C,
      y: ($.clientY - ie.top - P.y) / C
    }, fe = Math.max(ne.left, Math.min(Ne.x, ne.left + ne.width)), _e = Math.max(ne.top, Math.min(Ne.y, ne.top + ne.height));
    j({ x: fe, y: _e }), b({ x: fe, y: _e }), T(u === "lasso" ? [{ x: fe, y: _e }] : []), N(null);
  };
  h.useEffect(() => {
    if (!_) return;
    const $ = (ee) => {
      var _e;
      const q = U(), ne = (_e = S.current) == null ? void 0 : _e.getBoundingClientRect();
      if (!q || !ne) return;
      const ie = {
        x: (ee.clientX - ne.left - P.x) / C,
        y: (ee.clientY - ne.top - P.y) / C
      }, Ne = Math.max(q.left, Math.min(ie.x, q.left + q.width)), fe = Math.max(q.top, Math.min(ie.y, q.top + q.height));
      b({ x: Ne, y: fe }), u === "lasso" && T((we) => [...we, { x: Ne, y: fe }]);
    }, H = (ee) => {
      var ie;
      const q = U(), ne = (ie = S.current) == null ? void 0 : ie.getBoundingClientRect();
      if (q && ne && ue && w.current) {
        const Ne = {
          x: (ee.clientX - ne.left - P.x) / C,
          y: (ee.clientY - ne.top - P.y) / C
        }, fe = Math.max(q.left, Math.min(Ne.x, q.left + q.width)), _e = Math.max(q.top, Math.min(Ne.y, q.top + q.height)), we = Math.min(y.x, fe), Fe = Math.min(y.y, _e), Kt = Math.abs(y.x - fe), vr = Math.abs(y.y - _e), hm = u === "lasso";
        if (Kt > 5 || vr > 5 || hm && M.length > 2) {
          const gm = w.current.naturalWidth, ym = w.current.naturalHeight, On = gm / q.width, zn = ym / q.height, vm = Ty(ue, (yn) => {
            if (u === "rect") {
              const vn = (we - q.left) * On, wn = (Fe - q.top) * zn, Gt = Kt * On, yl = vr * zn;
              yn.rect(vn, wn, Gt, yl);
            } else if (u === "ellipse") {
              const vn = (we - q.left) * On, wn = (Fe - q.top) * zn, Gt = Kt * On, yl = vr * zn, wm = vn + Gt / 2, xm = wn + yl / 2;
              yn.ellipse(wm, xm, Gt / 2, yl / 2, 0, 0, 2 * Math.PI);
            } else if (u === "lasso" && M.length > 2) {
              const vn = M[0];
              if (!vn) return;
              yn.moveTo(
                (vn.x - q.left) * On,
                (vn.y - q.top) * zn
              );
              for (let wn = 1; wn < M.length; wn++) {
                const Gt = M[wn];
                Gt && yn.lineTo((Gt.x - q.left) * On, (Gt.y - q.top) * zn);
              }
              yn.closePath();
            }
          });
          Re((yn) => [...yn, vm]);
        }
      }
      Bt.current = Date.now(), f(!1), T([]);
    };
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", H), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", H);
    };
  }, [
    _,
    y.x,
    y.y,
    U,
    ue,
    u,
    M,
    P.x,
    P.y,
    C
  ]);
  const yr = h.useCallback(() => {
    de.length > 1 && Re(($) => $.slice(0, -1));
  }, [de.length]);
  h.useEffect(() => {
    const $ = (q) => {
      if (!q) return !1;
      const ne = q, ie = ne.tagName;
      return ie === "INPUT" || ie === "TEXTAREA" || ie === "BUTTON" || ie === "SELECT" || ie === "A" || ne.isContentEditable || ne.tabIndex != null && ne.tabIndex >= 0;
    }, H = (q) => {
      q.code === "Space" && !q.repeat && ($(q.target) || (q.preventDefault(), L(!0))), (q.metaKey || q.ctrlKey) && q.key.toLowerCase() === "z" && !q.shiftKey ? (q.preventDefault(), q.stopPropagation(), q.stopImmediatePropagation(), yr()) : q.key === "Escape" && (q.preventDefault(), q.stopPropagation(), q.stopImmediatePropagation(), l(), document.fullscreenElement && document.exitFullscreen().catch(() => {
      }));
    }, ee = (q) => {
      q.code === "Space" && ($(q.target) || (q.preventDefault(), L(!1)));
    };
    return window.addEventListener("keydown", H, { capture: !0 }), window.addEventListener("keyup", ee, { capture: !0 }), () => {
      window.removeEventListener("keydown", H, { capture: !0 }), window.removeEventListener("keyup", ee, { capture: !0 });
    };
  }, [yr, l]);
  const gl = () => {
    if (w.current) {
      const $ = Ol(
        w.current.naturalWidth,
        w.current.naturalHeight
      );
      Re((H) => [...H, $]);
    }
  }, be = async () => {
    if (!ue || !w.current) return null;
    B(!0);
    try {
      const { width: $, height: H } = ue, ee = document.createElement("canvas");
      ee.width = $, ee.height = H;
      const q = ee.getContext("2d");
      if (!q) return null;
      const ne = po(ue, [255, 255, 255], 255);
      q.putImageData(ne, 0, 0);
      const ie = await new Promise(
        (vr) => ee.toBlob(vr, "image/png")
      );
      if (!ie) return null;
      const fe = `meld_mask_${Date.now()}.png`, _e = new File([ie], fe, { type: "image/png" }), we = new FormData();
      we.append("image", _e), we.append("type", "temp"), we.append("overwrite", "true");
      const Fe = await te.fetchApi("/upload/image", {
        method: "POST",
        body: we
      });
      return (await mi(Fe)).name ?? null;
    } catch ($) {
      return O.error("Error uploading mask:", $), null;
    } finally {
      B(!1);
    }
  }, ot = async () => {
    if (!d) return;
    const $ = await be();
    $ && p(d, $) && (l(), o({ type: "CLOSE_VIEWER" }), r == null || r());
  }, gt = async () => {
    if (!d) return;
    const $ = await be();
    $ && (t === "run_sequence" && n ? (await v(
      n.workflowName,
      d,
      $,
      n.targetLoaderNodeId
    ), r == null || r()) : o({
      type: "OPEN_MODAL",
      payload: {
        type: "workflow_selection",
        images: [d],
        maskFilename: $,
        onSuccess: r
      }
    }));
  }, Lt = h.useMemo(() => ue && !Ly(ue), [ue]);
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
          onClick: ($) => $.stopPropagation(),
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
              /* @__PURE__ */ s.jsx("h3", { children: "Select Mask Area" }),
              /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: l, type: "button", children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-body", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-mask-editor-tool-selector", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "rect" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => m("rect"),
                    type: "button",
                    title: "Rectangle Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(xf, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Rect" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "ellipse" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => m("ellipse"),
                    type: "button",
                    title: "Ellipse Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(tg, { size: 18 }),
                      /* @__PURE__ */ s.jsx("span", { children: "Ellipse" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: `meld-mask-tool-btn ${u === "lasso" ? "meld-mask-tool-btn--active" : ""}`,
                    onClick: () => m("lasso"),
                    type: "button",
                    title: "Lasso Tool",
                    children: [
                      /* @__PURE__ */ s.jsx(og, { size: 18 }),
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
                    onClick: Z,
                    type: "button",
                    title: "Zoom Out",
                    "aria-label": "Zoom Out",
                    children: /* @__PURE__ */ s.jsx(jg, { size: 18 })
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "meld-mask-tool-btn",
                    onClick: () => {
                      Q(1), R({ x: 0, y: 0 });
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
                    children: /* @__PURE__ */ s.jsx(Sg, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: S,
                  className: "meld-mask-editor-canvas-container",
                  onMouseDown: Pn,
                  onContextMenu: ($) => $.preventDefault(),
                  role: "presentation",
                  style: {
                    cursor: W ? "grabbing" : I ? "grab" : "crosshair"
                  },
                  children: /* @__PURE__ */ s.jsxs(
                    "div",
                    {
                      className: "meld-mask-editor-transform-layer",
                      style: {
                        transform: `translate(${P.x}px, ${P.y}px) scale(${C})`,
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
                            onDragStart: ($) => $.preventDefault(),
                            onLoad: Tt
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "canvas",
                          {
                            ref: g,
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
                      onClick: ot,
                      disabled: !Lt || z,
                      type: "button",
                      children: [
                        z ? /* @__PURE__ */ s.jsx(Ic, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(di, { size: 16 }),
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
                        z ? /* @__PURE__ */ s.jsx(Ic, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ s.jsx(al, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: t === "run_sequence" && n ? n.currentIndex === n.totalCount - 1 ? "Queue (Last)" : `Queue (${n.currentIndex + 1}/${n.totalCount})` : "Queue" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--undo",
                      onClick: yr,
                      disabled: de.length <= 1 || z,
                      type: "button",
                      title: "Undo last area",
                      children: [
                        /* @__PURE__ */ s.jsx(xg, { size: 16 }),
                        /* @__PURE__ */ s.jsx("span", { children: "Undo" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(
                    "button",
                    {
                      className: "meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel",
                      onClick: gl,
                      disabled: !Lt || z,
                      type: "button",
                      title: "Clear all areas",
                      children: [
                        /* @__PURE__ */ s.jsx(he, { size: 16 }),
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
}, Pf = ({
  images: e,
  currentIndex: t,
  workflowName: n,
  targetLoaderNodeId: r,
  onSuccess: l,
  onClose: a
}) => {
  Le({ onEscape: a });
  const o = e[t];
  return h.useEffect(() => {
    o || a();
  }, [o, a]), o ? /* @__PURE__ */ s.jsx(
    vi,
    {
      imageId: o.id,
      mode: "run_sequence",
      sequenceData: {
        workflowName: n,
        targetLoaderNodeId: r,
        currentIndex: t,
        totalCount: e.length
      },
      onSuccess: l,
      onClose: a
    },
    o.id
  ) : null;
}, Of = (e) => {
  const t = /(?:[^\s"']+|"[^"]*"|'[^']*')+/g;
  return e.trim().match(t) || [];
}, zl = (e) => e.replace(/^["']|["']$/g, ""), Ry = (e) => e.trim() ? Of(e).every((n) => !!(n === "next" || n === "prev" || n === "delete" || n.startsWith("tag:") && n.length > 4 || n.startsWith("-tag:") && n.length > 5 || n.startsWith("tag-toggle:") && n.length > 11 || n.startsWith("lt:") && n.length > 3)) : !0, Dy = (e, t) => {
  const n = Of(e), r = {
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
      const o = zl(a.substring(4));
      o && !r.addTags.includes(o) && r.addTags.push(o);
    } else if (a.startsWith("-tag:")) {
      const o = zl(a.substring(5));
      o && !r.removeTags.includes(o) && r.removeTags.push(o);
    } else if (a.startsWith("tag-toggle:")) {
      const o = zl(a.substring(11));
      o && (t ? l.includes(o) ? r.removeTags.includes(o) || r.removeTags.push(o) : r.addTags.includes(o) || r.addTags.push(o) : r.toggleTags.includes(o) || r.toggleTags.push(o));
    } else if (a === "next")
      r.moveNext = !0;
    else if (a === "prev")
      r.movePrev = !0;
    else if (a === "delete")
      r.isDeleted = !0;
    else if (a.startsWith("lt:")) {
      const o = zl(a.substring(3));
      o && (r.sendToLtSlot = o);
    }
  return r;
}, Py = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = h.useState("Gallery"), [a, o] = h.useState({
    ...e.settings
  }), [i, c] = h.useState({}), [d, p] = h.useState(
    e.settings["gallery.initial_load_count"].toString()
  ), [v, g] = h.useState(
    e.settings["gallery.max_load_count"].toString()
  ), [S, w] = h.useState(
    e.settings["gallery.lineage_max_depth"].toString()
  ), [x, _] = h.useState(
    e.settings["viewer.thumbnail_window_size"].toString()
  ), [f, u] = h.useState(
    e.settings["gallery.trash_retention_days"].toString()
  ), [m, y] = h.useState(
    e.settings["gallery.auto_link_phash_threshold"].toString()
  ), [j, k] = h.useState(
    e.settings["gallery.suggest_phash_threshold"].toString()
  ), [b, M] = h.useState(
    e.settings["viewer.details.max_positive_prompt_lines"].toString()
  ), [T, D] = h.useState(
    e.settings["viewer.details.max_negative_prompt_lines"].toString()
  ), [N, z] = h.useState(e.settings["fullscreen.details.max_positive_prompt_lines"].toString()), [B, C] = h.useState(e.settings["fullscreen.details.max_negative_prompt_lines"].toString()), [Q, P] = h.useState(
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
        (Z) => a[Z] !== e.settings[Z] && !i[Z]
      );
      if (K.length > 0)
        for (const Z of K)
          await n(Z, a[Z]);
      t({ type: "CLOSE_MODAL" });
    },
    handleToggle: (K, Z) => {
      o((oe) => ({
        ...oe,
        [K]: !Z
      }));
    },
    handleNumberChange: (K, Z, oe, de) => {
      K === "gallery.initial_load_count" ? p(Z) : K === "gallery.max_load_count" ? g(Z) : K === "gallery.lineage_max_depth" ? w(Z) : K === "viewer.thumbnail_window_size" ? _(Z) : K === "gallery.trash_retention_days" ? u(Z) : K === "gallery.auto_link_phash_threshold" ? y(Z) : K === "gallery.suggest_phash_threshold" ? k(Z) : K === "viewer.details.max_positive_prompt_lines" ? M(Z) : K === "viewer.details.max_negative_prompt_lines" ? D(Z) : K === "fullscreen.details.max_positive_prompt_lines" ? z(Z) : K === "fullscreen.details.max_negative_prompt_lines" ? C(Z) : K === "sidebar.thumbnail_size" && P(Z);
      const Re = Number.parseInt(Z, 10);
      if (!Number.isNaN(Re)) {
        let ue = Re;
        oe !== void 0 && ue < oe && (ue = oe), de !== void 0 && ue > de && (ue = de), o((Tt) => ({
          ...Tt,
          [K]: ue
        }));
      }
    },
    handleNumberBlur: (K) => {
      !K || !K.key || (K.key === "gallery.initial_load_count" ? p(a["gallery.initial_load_count"].toString()) : K.key === "gallery.max_load_count" ? g(a["gallery.max_load_count"].toString()) : K.key === "gallery.lineage_max_depth" ? w(a["gallery.lineage_max_depth"].toString()) : K.key === "viewer.thumbnail_window_size" ? _(a["viewer.thumbnail_window_size"].toString()) : K.key === "gallery.trash_retention_days" ? u(a["gallery.trash_retention_days"].toString()) : K.key === "gallery.auto_link_phash_threshold" ? y(a["gallery.auto_link_phash_threshold"].toString()) : K.key === "gallery.suggest_phash_threshold" ? k(a["gallery.suggest_phash_threshold"].toString()) : K.key === "viewer.details.max_positive_prompt_lines" ? M(
        a["viewer.details.max_positive_prompt_lines"].toString()
      ) : K.key === "viewer.details.max_negative_prompt_lines" ? D(
        a["viewer.details.max_negative_prompt_lines"].toString()
      ) : K.key === "fullscreen.details.max_positive_prompt_lines" ? z(
        a["fullscreen.details.max_positive_prompt_lines"].toString()
      ) : K.key === "fullscreen.details.max_negative_prompt_lines" ? C(
        a["fullscreen.details.max_negative_prompt_lines"].toString()
      ) : K.key === "sidebar.thumbnail_size" && P(a["sidebar.thumbnail_size"].toString()));
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
              await Gg(), t({
                type: "SHOW_TOAST",
                payload: "Thumbnail cache cleared"
              });
            } catch (K) {
              O.error("Failed to clear thumbnail cache:", K), t({
                type: "SET_ERROR",
                payload: "Failed to clear thumbnail cache"
              });
            }
          }
        }
      });
    },
    validateShortcut: (K) => typeof K != "string" ? !1 : Ry(K),
    // Input states
    initialLoadCountInput: d,
    maxLoadCountInput: v,
    lineageMaxDepthInput: S,
    thumbnailWindowSizeInput: x,
    trashRetentionDaysInput: f,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: j,
    maxPositivePromptLinesInput: b,
    maxNegativePromptLinesInput: T,
    fullscreenMaxPositivePromptLinesInput: N,
    fullscreenMaxNegativePromptLinesInput: B,
    thumbnailSizeInput: Q
  };
}, X = ({ label: e, description: t, children: n }) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-item__info", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__label", children: e }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__description", children: t })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "meld-settings-item__control", children: n })
] }), Oy = ({
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
    /* @__PURE__ */ s.jsx(X, { label: "Show Model", description: "Display model name in fullscreen details.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
    /* @__PURE__ */ s.jsx(X, { label: "Show Tags", description: "Display tags in fullscreen details.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
function zf() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8", stroke: "var(--meld-icon-halo, transparent)", strokeWidth: 4 }),
    /* @__PURE__ */ s.jsx("path", { d: "M18 16.6v2.8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.6 18h2.8" })
  ] });
}
function Af(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14 8l4 4-4 4" })
  ] });
}
function Ff(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M4.5 5.5h7l2 2h6v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 15h3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 12l3 0" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 10.5l3 1.5-3 1.5" })
  ] });
}
function Wf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" })
  ] });
}
function $f(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M6 12h8" }),
    /* @__PURE__ */ s.jsx("path", { d: "M12 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16 8l4 4-4 4" }),
    /* @__PURE__ */ s.jsx(zf, {})
  ] });
}
function Uf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" })
  ] });
}
function Vf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "4.5", width: "15", height: "15", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 12h7" }),
    /* @__PURE__ */ s.jsx("path", { d: "M13 9l3 3-3 3" }),
    /* @__PURE__ */ s.jsx(zf, {})
  ] });
}
function Bf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("rect", { x: "4.5", y: "6", width: "12.5", height: "10.5", rx: "2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M7.5 13l2-2 2 2 2.5-3 2.5 3" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5l5-5" }),
    /* @__PURE__ */ s.jsx("path", { d: "M16.5 19.5l3-3" })
  ] });
}
function Qf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M20 12l-8 8-9-9v-5a2 2 0 0 1 2-2h5z" }),
    /* @__PURE__ */ s.jsx("circle", { cx: "7.5", cy: "8.5", r: "1" })
  ] });
}
function Hf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5h-8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-3-4z" }),
    /* @__PURE__ */ s.jsx("path", { d: "M15.5 4.5v4h4" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 11h6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 15h6" })
  ] });
}
function Kf(e) {
  return /* @__PURE__ */ s.jsxs(It, { ...e, children: [
    /* @__PURE__ */ s.jsx("path", { d: "M7 7h10" }),
    /* @__PURE__ */ s.jsx("path", { d: "M9 7v-2h6v2" }),
    /* @__PURE__ */ s.jsx("path", { d: "M8 7l1 12h6l1-12" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 13.5a3.5 3.5 0 1 1-1.2-2.6" }),
    /* @__PURE__ */ s.jsx("path", { d: "M14.5 9.5v3h-3" })
  ] });
}
const Gf = [
  { id: "", label: "None", icon: null },
  {
    id: "add_unified_loader",
    label: "Add Unified Loader",
    icon: Af
  },
  {
    id: "send_to_workflow",
    label: "Send to Workflow",
    icon: Uf
  },
  {
    id: "send_to_workflow_mask",
    label: "Send to Workflow (Mask)",
    icon: Vf
  },
  { id: "queue_workflow", label: "Queue Workflow", icon: Wf },
  {
    id: "queue_workflow_mask",
    label: "Queue Workflow (Mask)",
    icon: $f
  },
  {
    id: "restore_full_workflow",
    label: "Restore Full Workflow",
    icon: Ff
  },
  { id: "edit_tags", label: "Edit Tags", icon: Qf },
  { id: "edit_notes", label: "Edit Notes", icon: Hf },
  {
    id: "edit_source_image",
    label: "Edit Source Image",
    icon: Bf
  },
  {
    id: "restore_image",
    label: "Restore Image (Trash)",
    icon: Kf
  },
  { id: "delete_or_trash", label: "Delete / Trash", icon: Ut }
], zy = ({
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
    /* @__PURE__ */ s.jsx(X, { label: "Show Model", description: "Display the model name on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    /* @__PURE__ */ s.jsx(X, { label: "Show Positive", description: "Display the positive prompt on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    /* @__PURE__ */ s.jsx(X, { label: "Show Negative", description: "Display the negative prompt on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
    /* @__PURE__ */ s.jsx(X, { label: "Show User Notes", description: "Display user notes on the card.", children: /* @__PURE__ */ s.jsxs(
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
    /* @__PURE__ */ s.jsx(X, { label: "Show Tags", description: "Display tags on the card.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
      {
        label: `Quick Shortcut Slot ${c}`,
        description: `Choose an action for shortcut slot ${c}.`,
        children: /* @__PURE__ */ s.jsx(
          "select",
          {
            className: "meld-select",
            value: e[`gallery.quick_shortcut.${c}`],
            onChange: (d) => t((p) => ({
              ...p,
              [`gallery.quick_shortcut.${c}`]: d.target.value
            })),
            children: Gf.map((d) => /* @__PURE__ */ s.jsx("option", { value: d.id, children: d.label }, d.id))
          }
        )
      },
      c
    ))
  ] })
] }), Ay = () => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list meld-information-tab", children: [
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
] }), Fy = ({
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
        X,
        {
          label: `Shortcut ${d === 9 ? 0 : d + 1} (Key: ${d === 9 ? 0 : d + 1})`,
          description: `Command to execute when pressing '${d === 9 ? 0 : d + 1}' in View/Full Screen mode.`,
          children: /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              className: `meld-text-input ${n[c] ? "meld-text-input--error" : ""}`,
              value: e[c] || "",
              onChange: (p) => {
                t((v) => ({
                  ...v,
                  [c]: p.target.value
                }));
              },
              onBlur: () => {
                const p = l(e[c] || "");
                r((v) => ({
                  ...v,
                  [c]: !p
                }));
              }
            }
          )
        },
        c
      )),
      /* @__PURE__ */ s.jsx(
        X,
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
      X,
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
}, Wy = ({
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
  suggestPhashThresholdInput: p
}) => /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-list", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-group", children: [
    /* @__PURE__ */ s.jsx("div", { className: "meld-settings-group-title", children: "Image Matching" }),
    /* @__PURE__ */ s.jsx(
      X,
      {
        label: "Source Matching Strategy",
        description: "Algorithm used to identify the source image.",
        children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            className: "meld-select",
            value: e["gallery.matching_strategy"],
            onChange: (v) => l((g) => ({
              ...g,
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
      X,
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
      X,
      {
        label: "Source Suggestion Threshold (%)",
        description: "Minimum similarity percentage for showing candidates in manual 'Add Source' dialog (0-100). Default: 82%. Permissive enough to find ancestors.",
        children: /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "number",
            className: "meld-number-input",
            value: p,
            min: 0,
            max: 100,
            onChange: (v) => t("gallery.suggest_phash_threshold", v.target.value, 0, 100),
            onBlur: () => n({ key: "gallery.suggest_phash_threshold" })
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
] }), $y = ({
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
      X,
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
      X,
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
      X,
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
      X,
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
      X,
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
    /* @__PURE__ */ s.jsx(X, { label: "Delete Mode", description: "Choose how images are deleted in view mode.", children: /* @__PURE__ */ s.jsxs(
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
      X,
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
      X,
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
    /* @__PURE__ */ s.jsx(X, { label: "Show Dimensions", description: "Display dimensions in the details panel.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      X,
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
      X,
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
    /* @__PURE__ */ s.jsx(X, { label: "Show Model", description: "Display model name in the details panel.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
      X,
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
      X,
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
      X,
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
    /* @__PURE__ */ s.jsx(X, { label: "Show User Notes", description: "Display user notes in the details panel.", children: /* @__PURE__ */ s.jsxs(
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
      X,
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
    /* @__PURE__ */ s.jsx(X, { label: "Show Tags", description: "Display tags in the details panel.", children: /* @__PURE__ */ s.jsxs("label", { className: "meld-switch", children: [
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
] }), qf = () => {
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
    handleResetShortcuts: p,
    handleViewTrash: v,
    handleClearThumbnailCache: g,
    validateShortcut: S,
    // Input states
    initialLoadCountInput: w,
    maxLoadCountInput: x,
    lineageMaxDepthInput: _,
    thumbnailWindowSizeInput: f,
    trashRetentionDaysInput: u,
    autoLinkPhashThresholdInput: m,
    suggestPhashThresholdInput: y,
    maxPositivePromptLinesInput: j,
    maxNegativePromptLinesInput: k,
    fullscreenMaxPositivePromptLinesInput: b,
    fullscreenMaxNegativePromptLinesInput: M,
    thumbnailSizeInput: T
  } = Py();
  Le({ onEscape: o });
  const D = h.useRef(!1), N = (Q) => {
    Q.target === Q.currentTarget && (D.current = !0);
  }, z = (Q) => {
    Q.target === Q.currentTarget && D.current && o(), D.current = !1;
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
          Wy,
          {
            localSettings: n,
            handleNumberChange: c,
            handleNumberBlur: d,
            handleToggle: i,
            setLocalSettings: r,
            handleViewTrash: v,
            handleClearThumbnailCache: g,
            lineageMaxDepthInput: _,
            trashRetentionDaysInput: u,
            autoLinkPhashThresholdInput: m,
            suggestPhashThresholdInput: y
          }
        );
      case "Gallery":
        return /* @__PURE__ */ s.jsx(
          zy,
          {
            localSettings: n,
            setLocalSettings: r,
            handleToggle: i,
            handleNumberChange: c,
            handleNumberBlur: d,
            thumbnailSizeInput: T,
            initialLoadCountInput: w,
            maxLoadCountInput: x
          }
        );
      case "View":
        return /* @__PURE__ */ s.jsx(
          $y,
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
          Oy,
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
          Fy,
          {
            localSettings: n,
            setLocalSettings: r,
            shortcutErrors: l,
            setShortcutErrors: a,
            validateShortcut: S,
            handleToggle: i,
            handleResetShortcuts: p
          }
        );
      case "Information":
        return /* @__PURE__ */ s.jsx(Ay, {});
      default:
        return null;
    }
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: N,
        onMouseUp: z,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content meld-settings-modal", onClick: (Q) => Q.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsx("h2", { children: "Settings" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-modal-close",
                onClick: o,
                "aria-label": "Close",
                children: /* @__PURE__ */ s.jsx(he, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-settings-layout", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-settings-sidebar", children: /* @__PURE__ */ s.jsx("div", { className: "meld-tabs", children: B.map((Q) => /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: `meld-tab ${e === Q.id ? "active" : ""}`,
                onClick: () => t(Q.id),
                children: Q.label
              },
              Q.id
            )) }) }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: C() })
          ] })
        ] })
      }
    ),
    document.fullscreenElement || document.body
  );
}, _t = "none", cl = (e) => {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}, Ye = (e) => {
  e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
}, Uy = () => {
  const e = document.activeElement;
  if (!(e instanceof HTMLElement))
    return !1;
  const t = e.tagName;
  return t === "INPUT" || t === "TEXTAREA" || !!e.isContentEditable;
}, Yf = ({
  imageIds: e,
  initialTags: t,
  onClose: n,
  onSuccess: r
}) => {
  const { dispatch: l, refreshImages: a } = ge(), [o, i] = h.useState([]), [c, d] = h.useState(t), [p, v] = h.useState(""), [g, S] = h.useState(!0), [w, x] = h.useState(!1), _ = h.useRef(null), f = e.length > 1, u = h.useRef(!1), m = (N) => {
    N.target === N.currentTarget && (u.current = !0);
  }, y = (N) => {
    N.target === N.currentTarget && u.current && n(), u.current = !1;
  }, j = h.useCallback(async () => {
    S(!0);
    try {
      const N = await gi();
      i(N);
    } catch (N) {
      O.error("Failed to fetch tags:", N);
    } finally {
      S(!1);
    }
  }, []);
  h.useEffect(() => {
    j();
  }, [j]), h.useEffect(() => {
    _.current && _.current.focus();
  }, []), Le({ onEscape: n });
  const k = h.useMemo(() => o.filter(
    (N) => N.name.toLowerCase().includes(p.toLowerCase()) && !c.includes(N.name)
  ), [o, p, c]), b = (N) => {
    const z = N.trim();
    if (z.toLowerCase() === _t) {
      alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
      return;
    }
    z && !c.includes(z) && (d([...c, z]), v(""));
  }, M = (N) => {
    d(c.filter((z) => z !== N));
  }, T = async () => {
    x(!0);
    try {
      if (f) {
        const N = c.filter((B) => !t.includes(B)), z = t.filter((B) => !c.includes(B));
        await jf(e, N, z);
      } else {
        const N = e[0];
        if (N === void 0)
          throw new Error("No image selected");
        await Lg(N, c);
      }
      await a(), l({ type: "CLEAR_SELECTION" }), r == null || r(), n();
    } catch (N) {
      O.error("Failed to update tags:", N), alert("Failed to update tags.");
    } finally {
      x(!1);
    }
  }, D = (N) => {
    N.key === "Enter" && p.trim() && (Ye(N), b(p.trim()));
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: m,
        onMouseUp: y,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (N) => N.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(gr, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: f ? `Edit Tags (${e.length} images)` : "Edit Tags" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
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
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-selected", children: c.length === 0 ? /* @__PURE__ */ s.jsx("span", { className: "meld-tag-edit-empty", children: "No tags selected" }) : c.map((N) => /* @__PURE__ */ s.jsxs("span", { className: "meld-tag-edit-badge", children: [
                N,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-edit-remove",
                    onClick: () => M(N),
                    children: /* @__PURE__ */ s.jsx(he, { size: 12 })
                  }
                )
              ] }, N)) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-edit-section", children: [
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-edit-label", children: "Add Tags" }),
              /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
                /* @__PURE__ */ s.jsx(Ln, { size: 14, className: "meld-tag-search-icon" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "meld-tag-search-input",
                    placeholder: "Search or create new tag...",
                    value: p,
                    onChange: (N) => v(N.target.value),
                    onKeyDown: D
                  }
                ),
                p.trim() && !c.includes(p.trim()) && /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "meld-tag-add-btn",
                    onClick: () => b(p),
                    children: [
                      /* @__PURE__ */ s.jsx(Ws, { size: 14 }),
                      "Create"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions", children: g ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-loading", children: "Loading..." }) : k.length === 0 ? p ? /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No existing tags match. Press Enter to create." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-suggestions-empty", children: "No more tags available." }) : k.map((N) => /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-tag-suggestion-item",
                  onClick: () => b(N.name),
                  children: N.name
                },
                N.id
              )) })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-footer", children: [
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
                onClick: T,
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
}, $s = (e, t) => {
  const n = h.useCallback(async (x) => fo(x), []), r = h.useCallback(
    async (x, _, f) => {
      await jf(x, _, f);
    },
    []
  ), l = h.useCallback(async (x) => {
    try {
      const _ = await Dg(x.id);
      return _.workflow ? (await window.app.loadGraphData(_.workflow), O.log("Workflow restored successfully from Meld"), !0) : (alert("No workflow information is saved for this image."), !1);
    } catch (_) {
      return O.error("Error restoring workflow:", _), alert("Failed to restore workflow."), !1;
    }
  }, []), a = h.useCallback(async (x) => {
    try {
      const _ = await Pg(x.id), f = _.is_flux ? "MeldUnifiedFluxLoader" : "MeldUnifiedLoader", u = window.app, m = window.LiteGraph;
      if (!u.graph || !u.canvas || !m)
        return alert("ComfyUI graph is not ready. Please open a workflow first."), !1;
      const y = m.createNode(f);
      if (!y)
        return O.error(`Node type ${f} not found.`), alert(
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
      if (y.widgets) {
        for (const [T, D] of Object.entries(j)) {
          const N = _[T];
          if (N != null && N !== "") {
            const z = y.widgets.find((B) => B.name === D);
            z && (z.value = N);
          }
        }
        const M = y.widgets.find((T) => T.name === "control_after_generate");
        M && (M.value = "fixed");
      }
      const k = u.canvas.ds.offset, b = u.canvas.ds.scale;
      return y.pos = [(-k[0] + 400) / b, (-k[1] + 300) / b], u.graph.add(y), u.canvas.selectNode(y), u.canvas.centerOnNode(y), !0;
    } catch (_) {
      return O.error("Error adding Unified Loader:", _), alert("Failed to load settings."), !1;
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
      const f = _.graph._nodes.filter((m) => lr(m.type));
      if (f.length === 0)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "error",
            message: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
          }
        }), !1;
      if (f.length > 1)
        return t({
          type: "OPEN_MODAL",
          payload: {
            type: "node_selection",
            image: x,
            nodes: f.map((m) => ({
              id: String(m.id),
              type: m.type ?? "",
              title: m.title
            })),
            onSelect: (m) => {
              il(x, m);
            }
          }
        }), !0;
      const u = il(x);
      return u.ok ? !0 : (t({
        type: "OPEN_MODAL",
        payload: {
          type: "error",
          message: u.reason === "no_app_graph" ? "No active workflow graph found. Please open a workflow first." : u.reason === "no_widgets" || u.reason === "no_image_widget" ? "The selected loader node does not expose an image widget." : "No 'Meld Image Loader' or 'Load Image' node found in the current workflow."
        }
      }), !1);
    },
    [t]
  ), p = h.useCallback(
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
      O.log("handleRunWithMask called", x, _);
      const f = Array.isArray(x) ? x : [x];
      if (_ === "apply") {
        const m = window.app, y = ((u = m == null ? void 0 : m.graph) == null ? void 0 : u._nodes) || [];
        O.log(
          "Current graph nodes:",
          y.map((M) => ({
            id: M.id,
            type: M.type ?? ""
          }))
        );
        const j = y.some((M) => $r(M.type)), k = y.some((M) => lr(M.type));
        if (O.log("Nodes found:", { hasMaskNode: j, hasLoaderNode: k }), !j || !k) {
          const M = [];
          k || M.push("'Meld Image Loader'"), j || M.push("'Load Image (as Mask)'"), t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: `Required nodes missing in current workflow: ${M.join(" and ")}. Please add them to use the Mask Tool.`
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
        const b = f[0];
        if (!b) {
          t({
            type: "OPEN_MODAL",
            payload: {
              type: "error",
              message: "No images selected"
            }
          });
          return;
        }
        t({
          type: "OPEN_MODAL",
          payload: { type: "mask_editor", imageId: b.id, mode: _ }
        });
        return;
      }
      try {
        if (!(await Tf()).some((j) => j.valid && j.mask_count >= 1)) {
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
        O.error("[Meld] Error checking workflows:", m);
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
  ), g = h.useCallback(
    async (x, _) => {
      try {
        const f = x.id, m = (await fo([f])).restored_ids || [f];
        t({ type: "REMOVE_IMAGES", payload: m }), _ == null || _();
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
        const f = await Rg(x, _);
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
    handleRunWithWorkflow: p,
    handleRunWithMask: v,
    handleRestore: g,
    handleDelete: S,
    handleEditNotes: i,
    handleUpdateUserNotes: w
  };
}, Xf = ({ imageId: e, initialNotes: t, onClose: n }) => {
  const { state: r, dispatch: l } = ge(), { handleUpdateUserNotes: a } = $s(r, l), [o, i] = h.useState(t), [c, d] = h.useState(!1), p = h.useRef(null), v = h.useRef(!1), g = (x) => {
    x.target === x.currentTarget && (v.current = !0);
  }, S = (x) => {
    x.target === x.currentTarget && v.current && n(), v.current = !1;
  };
  h.useEffect(() => {
    p.current && p.current.focus();
  }, []);
  const w = h.useCallback(async () => {
    d(!0);
    try {
      await a(e, o), n();
    } catch (x) {
      O.error("Failed to update notes:", x), alert("Failed to update notes.");
    } finally {
      d(!1);
    }
  }, [a, e, o, n]);
  return h.useEffect(() => {
    const x = (_) => {
      _.key === "Enter" && (_.ctrlKey || _.metaKey) && _.target === p.current && (_.preventDefault(), _.stopPropagation(), _.stopImmediatePropagation(), w());
    };
    return window.addEventListener("keydown", x, { capture: !0 }), () => {
      window.removeEventListener("keydown", x, {
        capture: !0
      });
    };
  }, [w]), Le({ onEscape: n }), me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: S,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (x) => x.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
              /* @__PURE__ */ s.jsx(yg, { size: 18 }),
              /* @__PURE__ */ s.jsx("h3", { style: { margin: 0 }, children: "Edit Notes" })
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: n, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: "meld-note-edit-section", children: [
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                ref: p,
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
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: n, children: "Cancel" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                className: "meld-btn meld-btn--primary",
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
}, Zf = ({
  image: e,
  nodes: t,
  onSelect: n
}) => {
  const { dispatch: r } = ge(), l = h.useCallback(() => {
    r({ type: "CLOSE_MODAL" });
  }, [r]);
  Le({ onEscape: l });
  const a = h.useRef(!1), o = h.useCallback((c) => {
    c.target === c.currentTarget && (a.current = !0);
  }, []), i = h.useCallback(
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: l, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
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
                      /* @__PURE__ */ s.jsx(al, { size: 12 })
                    ]
                  },
                  c.id
                )) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: l, children: "Cancel" }) })
            ]
          }
        )
      }
    ),
    document.fullscreenElement || document.body
  );
}, Jf = ({
  images: e,
  onExecute: t,
  onSuccess: n,
  isMaskMode: r
}) => {
  var P;
  const { dispatch: l } = ge(), [a, o] = h.useState([]), [i, c] = h.useState(!0), [d, p] = h.useState(null), [v, g] = h.useState(!1), [S, w] = h.useState(null), [x, _] = h.useState({}), [f, u] = h.useState({}), [m, y] = h.useState(""), j = h.useRef(null), k = h.useMemo(() => a.map((R) => {
    let I = R.valid, L = R.reason;
    return r && R.mask_count === 0 && (I = !1, L = "No 'Load Image (as Mask)' node found."), { ...R, valid: I, reason: L };
  }).sort((R, I) => R.valid !== I.valid ? R.valid ? -1 : 1 : R.name.localeCompare(I.name)), [a, r]), b = h.useMemo(() => {
    if (!m.trim()) return k;
    const R = m.toLowerCase();
    return k.filter((I) => I.name.toLowerCase().includes(R));
  }, [k, m]), M = h.useCallback(async () => {
    try {
      c(!0);
      const R = await Tf();
      o(R), p(null);
    } catch (R) {
      p(R instanceof Error ? R.message : String(R));
    } finally {
      c(!1);
    }
  }, []);
  h.useEffect(() => {
    M();
  }, [M]), h.useEffect(() => {
    !i && j.current && j.current.focus();
  }, [i]);
  const T = h.useCallback(() => {
    l({ type: "CLOSE_MODAL" });
  }, [l]);
  Le({ onEscape: T });
  const D = h.useRef(!1), N = h.useCallback((R) => {
    R.target === R.currentTarget && (D.current = !0);
  }, []), z = h.useCallback(
    (R) => {
      R.target === R.currentTarget && D.current && T(), D.current = !1;
    },
    [T]
  ), B = async (R, I) => {
    if (!v)
      try {
        g(!0);
        const L = await t(R, I);
        n == null || n(), L !== !1 && T();
      } catch (L) {
        p(L instanceof Error ? L.message : String(L)), g(!1);
      }
  }, C = async (R) => {
    if (!(x[R] || f[R]))
      try {
        u((E) => ({ ...E, [R]: !0 }));
        const I = await Lf(R), L = [], W = (E) => {
          if (!E) return !1;
          const F = E.replace(/\s+/g, "").toLowerCase();
          return r ? F === "loadimagemask" : F === "meldimageloader" || F === "loadimage";
        };
        if (I.nodes && Array.isArray(I.nodes)) {
          O.log("Extracting nodes from UI format workflow", I.nodes.length);
          for (const E of I.nodes)
            W(E.type) && (O.log("Found target node (UI):", E.id, E.type, E.title), L.push({
              id: String(E.id),
              type: E.type || "",
              title: E.title
            }));
        } else {
          O.log("Extracting nodes from API format workflow");
          for (const E in I) {
            const F = I[E];
            F && typeof F == "object" && W(F.class_type) && (O.log("Found target node (API):", E, F.class_type), L.push({
              id: E,
              type: F.class_type || ""
            }));
          }
        }
        L.length === 0 && O.warn("No loader nodes found in workflow JSON despite count > 0"), _((E) => ({ ...E, [R]: L }));
      } catch (I) {
        O.error("Failed to fetch workflow nodes:", I);
      } finally {
        u((I) => ({ ...I, [R]: !1 }));
      }
  }, Q = (R) => {
    if (!R.valid || v) return;
    if ((r ? R.mask_count : R.loader_count + R.load_image_count) <= 1) {
      B(R.name);
      return;
    }
    S === R.name ? w(null) : (w(R.name), C(R.name));
  };
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: N,
        onMouseUp: z,
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "meld-modal-content meld-modal-content--large",
            onClick: (R) => R.stopPropagation(),
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(fi, { size: 20, color: "var(--meld-accent-color)" }),
                  "Queue via Workflow"
                ] }),
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: T, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", style: { minHeight: "300px" }, children: i ? /* @__PURE__ */ s.jsxs("div", { className: "meld-loading-container", children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner" }),
                /* @__PURE__ */ s.jsx("span", { children: "Loading workflows..." })
              ] }) : d ? /* @__PURE__ */ s.jsxs("div", { className: "meld-error-container", children: [
                /* @__PURE__ */ s.jsx(mf, { size: 20 }),
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
                      /* @__PURE__ */ s.jsx("strong", { children: e.length > 1 ? `${e.length} images` : (P = e[0]) == null ? void 0 : P.filename }),
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
                  /* @__PURE__ */ s.jsx(Ln, { className: "meld-tag-search-icon", size: 16 }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      ref: j,
                      type: "text",
                      className: "meld-tag-search-input",
                      placeholder: "Search workflows...",
                      value: m,
                      onChange: (R) => y(R.target.value)
                    }
                  ),
                  m && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-tag-item__btn",
                      onClick: () => {
                        var R;
                        y(""), (R = j.current) == null || R.focus();
                      },
                      style: { padding: "4px" },
                      children: /* @__PURE__ */ s.jsx(he, { size: 14 })
                    }
                  )
                ] }),
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
                ) : b.map((R) => {
                  const I = r ? R.mask_count : R.loader_count + R.load_image_count, L = S === R.name, W = x[R.name] || [], E = f[R.name];
                  return /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item-container", children: [
                    /* @__PURE__ */ s.jsxs(
                      "div",
                      {
                        className: `meld-workflow-item ${R.valid ? "" : "meld-workflow-item--invalid"} ${L ? "meld-workflow-item--expanded" : ""}`,
                        onClick: () => Q(R),
                        title: R.reason || "Click to select",
                        children: [
                          /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-item__info", children: [
                            /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__name", children: R.name }),
                            !R.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__reason", children: R.reason }),
                            R.valid && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-item__supports", children: I > 1 ? `Multiple loaders found (${I})` : r ? "Supports: Load Image (as Mask)" : `Supports: ${R.loader_count > 0 ? "Meld Loader" : "Load Image"}` })
                          ] }),
                          R.valid && I <= 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (F) => {
                                F.stopPropagation(), B(R.name);
                              },
                              children: [
                                /* @__PURE__ */ s.jsx(al, { size: 14 }),
                                v ? "Queuing..." : "Queue"
                              ]
                            }
                          ),
                          R.valid && I > 1 && /* @__PURE__ */ s.jsxs(
                            "button",
                            {
                              type: "button",
                              className: "meld-btn meld-btn--primary meld-btn-small",
                              disabled: v,
                              onClick: (F) => {
                                F.stopPropagation(), Q(R);
                              },
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              },
                              children: [
                                L ? "Close" : "Select Node",
                                /* @__PURE__ */ s.jsx(
                                  ui,
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
                    L && /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker", children: E ? /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-picker__loading", children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-loading-spinner meld-loading-spinner--small" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Loading nodes..." })
                    ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__label", children: "Select target loader node:" }),
                      /* @__PURE__ */ s.jsx("div", { className: "meld-workflow-node-picker__list", children: W.map((F) => /* @__PURE__ */ s.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "meld-workflow-node-item",
                          disabled: v,
                          onClick: () => B(R.name, F.id),
                          children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "meld-workflow-node-item__info", children: [
                              /* @__PURE__ */ s.jsx("span", { className: "meld-workflow-node-item__title", children: F.title || F.type }),
                              /* @__PURE__ */ s.jsxs("span", { className: "meld-workflow-node-item__id", children: [
                                "#",
                                F.id
                              ] })
                            ] }),
                            /* @__PURE__ */ s.jsx(al, { size: 12 })
                          ]
                        },
                        F.id
                      )) })
                    ] }) })
                  ] }, R.name);
                })
              ] }) }),
              /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  className: "meld-btn meld-btn--secondary",
                  onClick: T,
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
}, Vy = ({ message: e, onConfirm: t, onCancel: n }) => {
  const r = h.useRef(null), l = h.useRef(null);
  return Le({ onEscape: n }), h.useEffect(() => {
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
        const c = i.item(0), d = i.item(i.length - 1);
        if (!c || !d) return;
        o.shiftKey ? document.activeElement === c && (d.focus(), o.preventDefault()) : document.activeElement === d && (c.focus(), o.preventDefault());
      }
    };
    return document.addEventListener("keydown", a, { capture: !0 }), () => {
      document.removeEventListener("keydown", a, { capture: !0 }), l.current && typeof l.current.focus == "function" && l.current.focus();
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
  await Ig(e, t), se.getState().removeImages(e);
}, em = ({
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
  ), c = h.useMemo(() => l.searchQuery.trim() !== "", [l.searchQuery]), d = h.useMemo(() => l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? (se.getState().buckets[l.viewerLightTableSlotId] || []).map((y) => {
    const j = Number.parseInt(y, 10);
    return l.images.find((k) => k.id === j) || l.lineageImages.find((k) => k.id === j) || null;
  }).filter((y) => y !== null) : l.viewerMode === "lineage" && l.lineageImages.length > 0 ? l.lineageImages : l.images.filter(
    (u) => u.exists !== !1 && (l.settings["gallery.show_parent_images"] && !c || !u.has_children || i)
  ), [
    l.viewerMode,
    l.viewerLightTableSlotId,
    l.lineageImages,
    l.images,
    l.settings,
    c,
    i
  ]), p = h.useRef(l.viewerImageId);
  h.useEffect(() => {
    p.current = l.viewerImageId;
  }, [l.viewerImageId]);
  const v = h.useCallback(() => {
    a({ type: "CLOSE_MODAL" });
  }, [a]);
  Le({ onEscape: v });
  const g = h.useRef(!1), S = h.useCallback((u) => {
    u.target === u.currentTarget && (g.current = !0);
  }, []), w = h.useCallback(
    (u) => {
      u.target === u.currentTarget && g.current && v(), g.current = !1;
    },
    [v]
  ), x = h.useCallback(
    (u) => {
      if (!o.current) return;
      const m = p.current;
      if (m === null || !u.has(m))
        return;
      const y = d.findIndex(
        (k) => k.id === m
      );
      if (y === -1) return;
      let j = !1;
      for (let k = y + 1; k < d.length; k++) {
        const b = d[k];
        if (b && !u.has(b.id)) {
          a({
            type: "OPEN_VIEWER",
            payload: {
              id: b.id,
              mode: l.viewerMode,
              // Preserve slotId in lighttable mode to stay within the slot
              ...l.viewerMode === "lighttable" && l.viewerLightTableSlotId ? { slotId: l.viewerLightTableSlotId } : {}
            }
          }), j = !0;
          break;
        }
      }
      if (!j)
        for (let k = y - 1; k >= 0; k--) {
          const b = d[k];
          if (b && !u.has(b.id)) {
            a({
              type: "OPEN_VIEWER",
              payload: {
                id: b.id,
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
    var u, m;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const y = new Set(e), j = d.filter((k) => y.has(k.id));
      if (x(y), await ho(e, n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(j), a({ type: "REMOVE_IMAGES", payload: e }), a({ type: "CLEAR_SELECTION" }), a({ type: "CLOSE_MODAL" });
    } catch (y) {
      a({
        type: "SET_ERROR",
        payload: y instanceof Error ? y.message : String(y)
      });
    } finally {
      a({ type: "SET_LOADING", payload: !1 });
    }
  }, f = async () => {
    var u, m;
    try {
      a({ type: "SET_LOADING", payload: !0 });
      const y = new Set(e);
      for (const k of e) {
        const b = await pi(k);
        if (!o.current) return;
        for (const M of b)
          y.add(M.id);
      }
      const j = d.filter((k) => y.has(k.id));
      if (x(y), await ho(Array.from(y), n), !o.current) return;
      l.activeModal.type === "delete_confirm" && ((m = (u = l.activeModal).onSuccess) == null || m.call(u)), !n && r && r(j), a({
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
  return me.createPortal(
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: v, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
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
                            qh,
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
                /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn meld-btn--secondary", onClick: v, children: "Cancel" }),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--danger",
                      onClick: _,
                      children: n ? "Delete Permanently" : "Move to Trash"
                    }
                  ),
                  t && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--danger",
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
}, tm = ({ message: e }) => {
  const { dispatch: t } = ge(), n = h.useCallback(() => {
    t({ type: "CLOSE_MODAL" });
  }, [t]);
  return Le({ onEscape: n }), /* @__PURE__ */ s.jsx("div", { className: "meld-modal-overlay", onClick: n, children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(mf, { size: 20, color: "var(--meld-danger-color)" }),
        /* @__PURE__ */ s.jsx("h2", { children: "Error" })
      ] }),
      /* @__PURE__ */ s.jsx("button", { className: "meld-modal-close", onClick: n, type: "button", children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsx("div", { style: { padding: "20px 0", textAlign: "center", fontSize: "14px" }, children: e }) }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-modal-footer", children: /* @__PURE__ */ s.jsx("button", { className: "meld-btn meld-btn--primary", onClick: n, type: "button", children: "OK" }) })
  ] }) });
}, nm = ({ imageId: e }) => {
  const { state: t, dispatch: n, refreshImages: r } = ge(), [l, a] = h.useState([]), [o, i] = h.useState(!0), [c, d] = h.useState(!1), p = h.useCallback(() => {
    n({ type: "CLOSE_MODAL" });
  }, [n]);
  Le({ onEscape: p });
  const v = h.useRef(!1), g = (k) => {
    k.target === k.currentTarget && (v.current = !0);
  }, S = (k) => {
    k.target === k.currentTarget && v.current && p(), v.current = !1;
  }, w = t.images.find((k) => k.id === e), x = h.useCallback(async () => {
    i(!0);
    try {
      const k = t.settings["gallery.suggest_phash_threshold"], b = await Tg(e, k);
      a(b);
    } catch (k) {
      O.error("Failed to load suggestions:", k);
    } finally {
      i(!1);
    }
  }, [e, t.settings]);
  h.useEffect(() => {
    x();
  }, [x]);
  const _ = async (k) => {
    if (k == null) {
      O.error("handleSelect: parentId is undefined or null");
      return;
    }
    if (!(!w || k === w.parent_id) && !(w.parent_id && !confirm("Are you sure you want to change the source image?")))
      try {
        await Lc(e, k), await kf(e), await r(), p();
      } catch (b) {
        O.error("Failed to link parent:", b);
      }
  }, f = async () => {
    if (confirm("Are you sure you want to remove the source image relationship?"))
      try {
        await Lc(e, null), await r(), p();
      } catch (k) {
        O.error("Failed to remove source:", k), alert("Failed to remove source image.");
      }
  }, u = async (k) => {
    i(!0);
    try {
      const b = await cy(k), { id: M } = await Sf({
        filename: b.name,
        subfolder: b.subfolder || "",
        type: b.type || "input"
      });
      if (M === e) {
        alert("Uploaded image is identical to the current image. Cannot set as source.");
        return;
      }
      await _(M);
    } catch (b) {
      O.error("Failed to upload/register image:", b);
    } finally {
      i(!1);
    }
  }, m = (k) => {
    k.preventDefault(), k.stopPropagation(), d(!1);
    const b = k.dataTransfer.files[0];
    b != null && b.type.startsWith("image/") && u(b);
  };
  if (!w) return null;
  const y = l.filter((k) => k.is_source_match), j = l.filter((k) => !k.is_source_match);
  return me.createPortal(
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-modal-overlay",
        onMouseDown: g,
        onMouseUp: S,
        children: /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-content", onClick: (k) => k.stopPropagation(), children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
            /* @__PURE__ */ s.jsxs("h2", { children: [
              "Select Source for #",
              w.id
            ] }),
            /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-modal-close", onClick: p, children: /* @__PURE__ */ s.jsx(he, { size: 20 }) })
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
                        /* @__PURE__ */ s.jsx(dg, { size: 16, color: "var(--meld-accent-color)" }),
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
                      className: "meld-btn meld-btn--danger meld-btn--sm",
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
                      children: /* @__PURE__ */ s.jsx(cg, { size: 16 })
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
                onDrop: m,
                children: [
                  /* @__PURE__ */ s.jsx(_g, { size: 32 }),
                  /* @__PURE__ */ s.jsx("p", { children: "Drop an image file here to set it as source" })
                ]
              }
            ),
            o ? /* @__PURE__ */ s.jsx("div", { className: "meld-modal-loading", children: "Loading suggestions..." }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-suggestions-container", children: [
              y.length > 0 && /* @__PURE__ */ s.jsxs("section", { children: [
                /* @__PURE__ */ s.jsx("h3", { children: "Source Matches (from metadata)" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-suggestion-grid", children: y.map((k) => {
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
                        /* @__PURE__ */ s.jsx("img", { src: mt(k, 64), alt: k.filename }),
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
                        /* @__PURE__ */ s.jsx("img", { src: mt(k, 64), alt: k.filename }),
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
                                  "Match: ",
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
}, By = () => {
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
}, Qy = () => {
  const { state: e, dispatch: t } = ge(), { executeWorkflow: n } = yi();
  return e.viewerImageId !== null ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
      Jf,
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
      Zf,
      {
        image: e.activeModal.image,
        nodes: e.activeModal.nodes,
        onSelect: (r) => {
          e.activeModal.type === "node_selection" && il(e.activeModal.image, r);
        }
      }
    ),
    e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(nm, { imageId: e.activeModal.imageId }),
    e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Mf, {}),
    e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(qf, {}),
    e.activeModal.type === "tag_edit" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        Yf,
        {
          imageIds: e.activeModal.imageIds,
          initialTags: e.activeModal.tags,
          onSuccess: e.activeModal.onSuccess,
          onClose: () => t({ type: "CLOSE_MODAL" })
        }
      ),
      document.body
    ),
    e.activeModal.type === "error" && me.createPortal(/* @__PURE__ */ s.jsx(tm, { message: e.activeModal.message }), document.body),
    e.activeModal.type === "delete_confirm" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        em,
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
        vi,
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
        Pf,
        {
          images: e.activeModal.images,
          currentIndex: e.activeModal.currentIndex,
          workflowName: e.activeModal.workflowName,
          targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
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
        }
      ),
      document.body
    ),
    e.activeModal.type === "note_edit" && me.createPortal(
      /* @__PURE__ */ s.jsx(
        Xf,
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
        vy,
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
        Vy,
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
    e.toastMessage && me.createPortal(/* @__PURE__ */ s.jsx(By, {}), document.body)
  ] });
}, Hy = () => {
  const { state: e, dispatch: t } = ge(), { scanStatus: n } = e;
  if (!n.isRunning && !n.isFinished)
    return null;
  const r = async () => {
    try {
      await py(), t({ type: "SET_SCAN_STATUS", payload: { shouldCancel: !0 } });
    } catch (p) {
      O.error("Failed to cancel scan:", p);
    }
  }, l = () => {
    t({
      type: "SET_SCAN_STATUS",
      payload: { isFinished: !1, isRunning: !1 }
    });
  }, a = n.progress.phase === "linking", { current: o, total: i } = n.progress, c = i > 0 ? o / i : 0, d = a ? 50 + Math.round(c * 50) : Math.round(c * 50);
  return /* @__PURE__ */ s.jsx("div", { className: "meld-import-progress-sidebar", children: n.isRunning ? /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-progress--compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-info", children: [
      /* @__PURE__ */ s.jsx("div", { className: "meld-scan__status-text--compact", children: n.shouldCancel ? /* @__PURE__ */ s.jsx("span", { className: "meld-scan__status--cancelling", children: "Cancelling..." }) : a ? /* @__PURE__ */ s.jsx("span", { children: "Linking..." }) : /* @__PURE__ */ s.jsx("span", { children: "Scanning..." }) }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-progress-stats--compact", children: [
        n.progress.current,
        " / ",
        n.progress.total
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-progress-container--compact", children: /* @__PURE__ */ s.jsx("div", { className: "meld-progress-bar", style: { width: `${d}%` } }) }),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: "meld-btn--stop--compact",
        disabled: n.shouldCancel,
        onClick: r,
        title: "Stop Scan",
        children: /* @__PURE__ */ s.jsx(xf, { size: 12, fill: "currentColor" })
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "meld-scan-finished--compact", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-finished-info", children: [
      /* @__PURE__ */ s.jsx(Jh, { size: 14, className: "meld-success-icon" }),
      /* @__PURE__ */ s.jsxs("span", { className: "meld-finished-text", children: [
        "Done! ",
        n.newCount,
        " new, ",
        n.updatedCount,
        " updated"
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("button", { type: "button", className: "meld-btn--ok--compact", onClick: l, children: "OK" })
  ] }) });
}, wi = {
  lightTable: {
    id: "meld-light-table-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  },
  bulkActionBar: {
    id: "meld-bulk-bar-portal",
    preferredParentSelector: ".comfyui-body-bottom"
  }
}, Ky = Object.keys(wi), Fc = /* @__PURE__ */ new Map(), Wc = "data-meld-portal-root";
let ha = null, ga = null;
const $c = ".comfyui-body-bottom";
function Uc(e) {
  var n, r, l, a;
  const t = `[${Wc}]`;
  for (let o = 0; o < e.length; o++) {
    const i = e.item(o);
    if (!i || i.nodeType !== Node.ELEMENT_NODE) continue;
    const c = i;
    if ((n = c.hasAttribute) != null && n.call(c, Wc) || (r = c.querySelector) != null && r.call(c, t) || (l = c.matches) != null && l.call(c, $c) || (a = c.querySelector) != null && a.call(c, $c)) return !0;
  }
  return !1;
}
function Gy(e) {
  const t = document.querySelector(e);
  return t instanceof HTMLElement ? t : document.body;
}
function qy(e) {
  const t = wi[e], n = document.getElementById(t.id);
  if (n instanceof HTMLDivElement)
    return n.dataset.meldPortalRoot = e, n;
  const r = document.createElement("div");
  return r.id = t.id, r.dataset.meldPortalRoot = e, r;
}
function rm(e) {
  const t = wi[e], n = Fc.get(e) ?? qy(e);
  Fc.set(e, n);
  const r = Gy(t.preferredParentSelector);
  return (n.parentElement !== r || !document.contains(n)) && r.appendChild(n), n;
}
function lm() {
  for (const e of Ky)
    rm(e);
}
function Vc() {
  ga === null && (ga = requestAnimationFrame(() => {
    ga = null, lm();
  }));
}
function sm(e) {
  return rm(e);
}
function Yy() {
  ha || typeof document > "u" || !document.body || (lm(), ha = new MutationObserver((e) => {
    for (const t of e) {
      if (Uc(t.addedNodes)) {
        Vc();
        return;
      }
      if (Uc(t.removedNodes)) {
        Vc();
        return;
      }
    }
  }), ha.observe(document.body, {
    childList: !0,
    subtree: !0
  }));
}
const Us = ({
  onKeyDown: e,
  enabled: t = !0
}) => {
  h.useEffect(() => {
    if (t)
      return window.addEventListener("keydown", e, { capture: !0 }), () => {
        window.removeEventListener("keydown", e, { capture: !0 });
      };
  }, [e, t]);
}, Xy = () => {
  const { state: e } = ge(), t = se((a) => a.slots), n = se((a) => a.addToBucket), r = t.length > 0 && e.selectedIds.size > 0, l = h.useCallback(
    (a) => {
      if (Uy())
        return;
      const o = e.selectedIds;
      if (!o || o.size === 0)
        return;
      const i = t.find((c) => c.shortcutKey.toLowerCase() === a.key.toLowerCase());
      i && (cl(a), o.forEach((c) => {
        n(i.id, String(c));
      }));
    },
    [t, n, e.selectedIds]
  );
  Us({ onKeyDown: l, enabled: r });
}, am = ({ message: e, onConfirm: t, onCancel: n }) => (Le({ onEscape: n }), /* @__PURE__ */ s.jsx(
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
)), dl = ({
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
      const p = d.target;
      if (!(p instanceof Node))
        return;
      o.current.some((g) => {
        const S = g.current;
        return S ? S.contains(p) : !1;
      }) || i.current(d);
    };
    return window.addEventListener("pointerdown", c, { capture: l }), () => {
      window.removeEventListener("pointerdown", c, {
        capture: l
      });
    };
  }, [e, l, a]);
}, Zy = (e, t, n, r, l) => {
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
        O.warn("move_folder action is not yet implemented"), l == null || l();
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
        O.log(`Action ${e.type} executed on ${t.length} images`);
        break;
    }
}, Jy = ({ config: e }) => {
  var W;
  const t = se((E) => E.buckets), n = se((E) => E.slots), r = se((E) => E.images), l = n.length, { state: a, dispatch: o } = ge(), [i, c] = h.useState(!1), [d, p] = h.useState(!1), [v, g] = h.useState(!1), [S, w] = h.useState(e.label), [x, _] = h.useState(e.color), [f, u] = h.useState([]), [m, y] = h.useState(null), j = h.useRef(null), k = h.useRef(null);
  dl({
    enabled: i,
    insideRefs: [k],
    onOutside: () => c(!1)
  }), dl({
    enabled: v,
    insideRefs: [j],
    onOutside: () => g(!1)
  });
  const b = t[e.id] || [], M = b.length, T = b.map((E) => {
    const F = Number(E);
    let U = a.images.find((A) => A.id === F);
    return U || (U = a.lineageImages.find((A) => A.id === F)), U || (U = r[E]), U;
  }).filter(Boolean);
  h.useEffect(() => {
    u((E) => {
      const F = E.filter((U) => b.includes(String(U)));
      return F.length !== E.length ? F : E;
    });
  }, [b]);
  const D = f.filter((E) => b.includes(String(E))), N = D.length > 0, z = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.add("drag-over");
  }, B = (E) => {
    E.currentTarget.classList.remove("drag-over");
  }, C = (E) => {
    E.preventDefault(), E.stopPropagation(), E.currentTarget.classList.remove("drag-over");
    const F = E.dataTransfer.getData("text/plain");
    F && F.split(",").forEach((A) => {
      if (A) {
        const K = A.trim(), Z = Number(K);
        let oe = a.images.find((de) => de.id === Z);
        oe || (oe = a.lineageImages.find((de) => de.id === Z)), se.getState().addToBucket(e.id, K, oe);
      }
    });
  }, Q = (E, F) => {
    E.stopPropagation();
    let U = [F];
    D.includes(F) ? U = D : (u([F]), y(F)), E.dataTransfer.setData("text/plain", U.join(",")), E.dataTransfer.setData("application/meld-lt-source-slot", e.id), E.dataTransfer.effectAllowed = "move";
  }, P = (E, F) => {
    if (E.dataTransfer.dropEffect === "none") {
      const U = D.includes(F) ? D : [F];
      U.forEach((A) => {
        se.getState().removeFromBucket(e.id, String(A));
      }), u((A) => A.filter((K) => !U.includes(K)));
    }
  }, R = (E) => {
    if (M === 0) return;
    const F = {
      type: E
    }, U = N ? D : b.map(Number);
    if (U.length === 0) return;
    const A = U.map((oe) => T.find((de) => de.id === oe)).filter(Boolean), K = {
      edit_tags: "Tags updated",
      delete: "Delete initiated",
      move_folder: "Moved to folder",
      queue_workflow: "Queued Workflow",
      run_with_mask: "Opened Mask Editor",
      download: "Opened Download Options"
    };
    Zy(F, U, A, o, () => {
      se.getState().showToast(K[E] ?? "Done");
    });
  }, I = () => {
    se.getState().clearBucket(e.id), se.getState().showToast(`Tab "${e.label}" cleared`), p(!1);
  }, L = () => {
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
        /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__images", children: M === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot-panel__empty", children: "Drag & Drop images here" }) : T.map((E) => {
          const F = mt(E);
          return /* @__PURE__ */ s.jsx(
            "div",
            {
              className: `meld-lt-slot-panel__image-wrapper${D.includes(E.id) ? " selected" : ""}`,
              draggable: !0,
              onClick: (U) => {
                if (U.ctrlKey || U.metaKey)
                  u(
                    (A) => A.includes(E.id) ? A.filter((K) => K !== E.id) : [...A, E.id]
                  ), y(E.id);
                else if (U.shiftKey && m !== null) {
                  const A = T.findIndex((Z) => Z.id === E.id), K = T.findIndex((Z) => Z.id === m);
                  if (A !== -1 && K !== -1) {
                    const Z = Math.min(A, K), oe = Math.max(A, K), de = T.slice(Z, oe + 1).map((Re) => Re.id);
                    u((Re) => Array.from(/* @__PURE__ */ new Set([...Re, ...de])));
                  }
                  y(E.id);
                } else
                  u([]), y(null), o({
                    type: "OPEN_VIEWER",
                    payload: {
                      id: E.id,
                      mode: "lighttable",
                      slotId: e.id
                    }
                  });
              },
              onDragStart: (U) => Q(U, E.id),
              onDragEnd: (U) => P(U, E.id),
              children: /* @__PURE__ */ s.jsx("img", { src: F, alt: E.filename, draggable: !1 })
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
                onClick: () => g(!v),
                disabled: M === 0,
                title: "Actions",
                children: [
                  N ? `Action (${D.length})` : "Action",
                  /* @__PURE__ */ s.jsx(eg, { size: 12 })
                ]
              }
            ),
            v && /* @__PURE__ */ s.jsx("div", { className: "meld-lt-slot__action-menu", children: [
              {
                type: "edit_tags",
                label: "Edit Tags",
                icon: gr
              },
              {
                type: "queue_workflow",
                label: "Queue Workflow",
                icon: fi
              },
              {
                type: "run_with_mask",
                label: "Queue Workflow (Mask)",
                icon: kg
              },
              {
                type: "download",
                label: "Download",
                icon: sl
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
                onMouseDown: (F) => F.stopPropagation(),
                onClick: () => {
                  "disabled" in E && E.disabled || (R(E.type), g(!1));
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
              onClick: () => p(!0),
              title: "Clear Tab",
              disabled: M === 0,
              children: /* @__PURE__ */ s.jsx(rg, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(wf, { size: 14 })
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
                          value: x.startsWith("var") ? ((W = x.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)) == null ? void 0 : W[0]) ?? "#9ca3af" : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(x) ? x : "#9ca3af",
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
                    const E = se.getState(), F = S.trim();
                    if (!F) {
                      E.showToast("Error: Tab label cannot be empty", "error");
                      return;
                    }
                    if (E.slots.some(
                      (A) => A.id !== e.id && (A.label.toLowerCase() === F.toLowerCase() || A.id.toLowerCase() === F.toLowerCase())
                    )) {
                      E.showToast(`Error: "${F}" is already in use`, "error");
                      return;
                    }
                    E.updateSlot(e.id, {
                      label: F,
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
                  onClick: L,
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
          am,
          {
            message: `Clear all items in the "${e.label}" tab?`,
            onConfirm: I,
            onCancel: () => p(!1)
          }
        )
      ]
    }
  );
}, ev = () => {
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
}, tv = () => {
  var S;
  Xy();
  const e = se((w) => w.isOpen), t = se((w) => w.setIsOpen), [n, r] = h.useState(!1);
  Le({
    onEscape: () => t(!1),
    enabled: e && !n
  }), h.useEffect(() => {
    e || r(!1);
  }, [e]);
  const l = se((w) => w.slots), a = se((w) => w.buckets), { state: o } = ge(), [i, c] = h.useState(((S = l[0]) == null ? void 0 : S.id) || "keep"), d = sm("lightTable");
  if (!e) return null;
  const p = () => {
    const w = `slot_${Date.now().toString(36)}`;
    se.getState().addSlot({
      id: w,
      label: `Tab ${l.length + 1}`,
      color: "var(--meld-text-secondary, #9ca3af)",
      shortcutKey: ""
    }), c(w);
  }, v = () => {
    l.forEach((w) => {
      se.getState().clearBucket(w.id);
    }), se.getState().showToast("All tabs cleared"), r(!1);
  }, g = /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-light-table__tabs", children: [
      l.map((w) => {
        var x;
        return /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "button",
            className: `meld-light-table__tab ${i === w.id ? "meld-light-table__tab--active" : ""}`,
            onClick: () => c(w.id),
            style: { "--tab-color": w.color },
            onDragOver: (_) => {
              _.preventDefault(), c(w.id);
            },
            onDrop: (_) => {
              _.preventDefault();
              const f = _.dataTransfer.getData("text/plain");
              f && f.split(",").forEach((m) => {
                if (m) {
                  const y = m.trim(), j = o.images.find((k) => String(k.id) === y);
                  se.getState().addToBucket(w.id, y, j);
                }
              });
            },
            children: [
              w.label,
              "  (",
              ((x = a[w.id]) == null ? void 0 : x.length) || 0,
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
          onClick: p,
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
          children: /* @__PURE__ */ s.jsx(Ws, { size: 16 })
        }
      ),
      /* @__PURE__ */ s.jsx("div", { style: { flex: 1 } }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          type: "button",
          className: "meld-light-table__clear-btn",
          onClick: () => r(!0),
          title: "Clear All Tabs",
          children: [
            /* @__PURE__ */ s.jsx(vg, { size: 14 }),
            /* @__PURE__ */ s.jsx("span", { children: "Clear All" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-light-table__close-btn",
          onClick: () => t(!1),
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
          children: /* @__PURE__ */ s.jsx(he, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "meld-light-table__content", children: l.map((w) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "meld-light-table__tab-panel",
        style: { display: i === w.id ? "block" : "none" },
        children: /* @__PURE__ */ s.jsx(Jy, { config: w })
      },
      w.id
    )) }),
    n && /* @__PURE__ */ s.jsx(
      am,
      {
        message: "Are you sure you want to clear all items in all tabs?",
        onConfirm: v,
        onCancel: () => r(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(ev, {})
  ] });
  return me.createPortal(g, d);
}, om = () => {
  const { state: e, refreshFavorites: t } = ge(), [n, r] = h.useState(!1), [l, a] = h.useState(null), [o, i] = h.useState("info"), [c, d] = h.useState(null), [p, v] = h.useState(""), [g, S] = h.useState("");
  h.useEffect(() => {
    if (l) {
      const u = setTimeout(() => a(null), 3e3);
      return () => clearTimeout(u);
    }
  }, [l]);
  const w = h.useCallback(
    async (u, m, y) => {
      u.stopPropagation();
      const j = `Are you sure you want to delete the favorite "${y}"?`;
      if (window.confirm(j))
        try {
          await Pc(m), await t();
        } catch (k) {
          O.error("Failed to delete favorite", k);
        }
    },
    [t]
  ), x = h.useCallback((u, m) => {
    u.stopPropagation(), d(m), v(m.name), S(m.query);
  }, []), _ = h.useCallback(async () => {
    if (!(!c || !p.trim() || !g.trim()))
      try {
        r(!0), await Qg(c.id, p, g), await t(), d(null);
      } catch (u) {
        O.error("Failed to update favorite", u), a("Failed to update favorite."), i("error");
      } finally {
        r(!1);
      }
  }, [c, p, g, t]), f = h.useCallback(async () => {
    if (!e.searchQuery || n) return !1;
    if (e.favorites.some((m) => m.query === e.searchQuery)) {
      const m = e.favorites.find((y) => y.query === e.searchQuery);
      if (m) {
        r(!0);
        try {
          return await Pc(m.id), await t(), !0;
        } catch (y) {
          return O.error("Failed to delete favorite:", y), !1;
        } finally {
          r(!1);
        }
      }
      return !1;
    }
    r(!0);
    try {
      return await Bg(e.searchQuery, e.searchQuery), await t(), !0;
    } catch (m) {
      return O.error("Failed to save favorite:", m), !1;
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
    editFavoriteName: p,
    setEditFavoriteName: v,
    editFavoriteQuery: g,
    setEditFavoriteQuery: S,
    handleDeleteFavorite: w,
    handleEditFavorite: x,
    handleSaveEditFavorite: _,
    handleSaveFavorite: f,
    setToastMessage: (u, m = "info") => {
      a(u), i(m);
    }
  };
}, im = ({ fav: e, onSelect: t, onEdit: n, onDelete: r }) => {
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
                  onClick: (p) => n(p, e),
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
                  children: /* @__PURE__ */ s.jsx(vf, { size: 14 })
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
}, nv = "_menu_jab2z_1", rv = "_header_jab2z_14", lv = "_title_jab2z_23", sv = "_count_jab2z_32", av = "_list_jab2z_37", ov = "_toast_jab2z_46", iv = "_editTitle_jab2z_56", cv = "_form_jab2z_62", dv = "_fieldGroup_jab2z_69", uv = "_label_jab2z_75", fv = "_input_jab2z_81", mv = "_textarea_jab2z_82", Ge = {
  menu: nv,
  header: rv,
  title: lv,
  count: sv,
  list: av,
  toast: ov,
  editTitle: iv,
  form: cv,
  fieldGroup: dv,
  label: uv,
  input: fv,
  textarea: mv
}, pv = ({
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
    editFavoriteQuery: p,
    setEditFavoriteQuery: v,
    handleDeleteFavorite: g,
    handleEditFavorite: S,
    handleSaveEditFavorite: w
  } = om(), [x, _] = h.useState({ top: 0, left: 0 }), f = h.useRef(null), u = h.useRef(null);
  return Le({
    onEscape: () => {
      o ? i(null) : t();
    },
    enabled: !0
  }), dl({
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
  }, [o]), e ? me.createPortal(
    /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: f,
          className: `${Ge.menu} meld-favorites-context-menu`,
          style: {
            top: x.top,
            left: x.left
          },
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: Ge.header, children: [
              /* @__PURE__ */ s.jsxs("div", { className: Ge.title, children: [
                /* @__PURE__ */ s.jsx(
                  fr,
                  {
                    size: 14,
                    color: "var(--brand-yellow, #ffd700)",
                    fill: "var(--brand-yellow, #ffd700)"
                  }
                ),
                "Favorites"
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: Ge.count, children: [
                r.favorites.length,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: Ge.list, children: r.favorites.map((m) => /* @__PURE__ */ s.jsx(
              im,
              {
                fav: m,
                onSelect: (y) => {
                  n(y), t();
                },
                onEdit: S,
                onDelete: g
              },
              m.id
            )) }),
            a && /* @__PURE__ */ s.jsx("div", { className: Ge.toast, children: a })
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
                  /* @__PURE__ */ s.jsxs("h2", { className: Ge.editTitle, children: [
                    /* @__PURE__ */ s.jsx(fr, { size: 20, color: "var(--meld-accent-color)" }),
                    "Edit Favorite"
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-modal-close",
                      onClick: () => i(null),
                      children: /* @__PURE__ */ s.jsx(he, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-modal-body", children: /* @__PURE__ */ s.jsxs("div", { className: Ge.form, children: [
                  /* @__PURE__ */ s.jsxs("div", { className: Ge.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-name-ctx", className: Ge.label, children: "Name" }),
                    /* @__PURE__ */ s.jsx(
                      "input",
                      {
                        id: "edit-favorite-name-ctx",
                        ref: u,
                        type: "text",
                        value: c,
                        onChange: (m) => d(m.target.value),
                        placeholder: "Favorite Name",
                        className: Ge.input,
                        onKeyDown: (m) => {
                          m.key === "Enter" && (Ye(m), w()), m.key === "Escape" && (Ye(m), i(null));
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: Ge.fieldGroup, children: [
                    /* @__PURE__ */ s.jsx("label", { htmlFor: "edit-favorite-query-ctx", className: Ge.label, children: "Search Query" }),
                    /* @__PURE__ */ s.jsx(
                      "textarea",
                      {
                        id: "edit-favorite-query-ctx",
                        value: p,
                        onChange: (m) => v(m.target.value),
                        placeholder: "Search Query",
                        rows: 3,
                        className: Ge.textarea,
                        onKeyDown: (m) => {
                          m.key === "Enter" && !m.shiftKey && (Ye(m), w()), m.key === "Escape" && (Ye(m), i(null));
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
                      className: "meld-btn meld-btn--secondary",
                      onClick: () => i(null),
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      type: "button",
                      className: "meld-btn meld-btn--primary",
                      onClick: w,
                      disabled: l || !c.trim() || !p.trim(),
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
}, Al = (e) => {
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
}, hv = () => {
  const { state: e, dispatch: t, updateSetting: n } = ge(), [r, l] = h.useState(e.searchQuery), [a, o] = h.useState([]), [i, c] = h.useState(!1), [d, p] = h.useState([]), [v, g] = h.useState([]), S = e.settings["search.show_all_keywords"], [w, x] = h.useState(-1), [_, f] = h.useState(null), u = h.useRef(null), m = h.useRef(e.searchQuery), y = h.useCallback(async () => {
    if (v.length > 0) return;
    const P = await $g();
    g(P);
  }, [v.length]);
  h.useEffect(() => {
    Ug().then((P) => {
      f(P);
    }), S && y();
  }, [y, S]);
  const j = h.useMemo(() => {
    if (!_) return null;
    const P = _.all_prefixes.join("|");
    return new RegExp(`^[-!]?(${P}):(.*)$`, "i");
  }, [_]), k = h.useCallback(() => {
    const P = !S;
    P && y(), n("search.show_all_keywords", P);
  }, [S, y, n]), b = r !== m.current;
  h.useEffect(() => {
    if (!e.settings["search.quick_suggestions"]) {
      p([]);
      return;
    }
    Wg().then((P) => {
      p(P);
    });
  }, [e.settings["search.quick_suggestions"]]), h.useEffect(() => {
    l(e.searchQuery), m.current = e.searchQuery;
  }, [e.searchQuery]), h.useEffect(() => {
    var P;
    (P = u.current) == null || P.focus();
  }, []);
  const M = h.useCallback(
    (P, R = !0) => {
      m.current !== P && (O.log("SearchBar: triggering search", { query: P }), t({ type: "SET_SEARCH_QUERY", payload: P }), R && c(!1), m.current = P);
    },
    [t]
  );
  h.useEffect(() => {
    const P = setTimeout(async () => {
      if (r === m.current)
        return;
      if (!e.settings["search.input_suggest"] || !j) {
        o([]), c(!1);
        return;
      }
      const R = Al(r), I = R[R.length - 1];
      if (I) {
        const L = I.match(j);
        if (L) {
          const W = L[1];
          let E = L[2];
          if (!W || E === void 0) {
            o([]), c(!1);
            return;
          }
          const F = W.toLowerCase();
          E.startsWith('"') && (E = E.substring(1)), E.endsWith('"') && (E = E.substring(0, E.length - 1));
          const U = await Fg(E, F);
          o(U), c(U.length > 0), x(-1);
        } else {
          const W = I.replace(/^([-!])/, "").toLowerCase();
          if (W && _) {
            const E = _.all_prefixes.filter((F) => F.startsWith(W)).map((F) => ({
              type: F,
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
    return () => clearTimeout(P);
  }, [r, e.settings["search.input_suggest"], j, _]);
  const T = h.useCallback(
    (P) => {
      var U;
      if (!P) return;
      const R = Al(r), L = (R.pop() || "").match(/^([-!])/), W = L ? L[1] : "", F = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(P.type);
      if (P.value === "") {
        const A = `${[...R, `${W}${P.type}:`].join(" ").trim()}`;
        l(A);
      } else {
        const A = F ? P.value : `"${P.value}"`, K = `${[...R, `${W}${P.type}:${A}`].join(" ").trim()} `;
        l(K), o([]), c(!1);
      }
      (U = u.current) == null || U.focus();
    },
    [r, _]
  ), D = (P) => {
    if (P)
      if (P.key === "Enter")
        if (Ye(P), i && w >= 0) {
          const R = a[w];
          R && T(R);
        } else
          M(r);
      else if (P.key === "Tab") {
        if (i && a.length > 0) {
          Ye(P);
          const R = w >= 0 ? w : 0, I = a[R];
          I && T(I);
        }
      } else P.key === "ArrowDown" ? i && (Ye(P), x((R) => Math.min(R + 1, a.length - 1))) : P.key === "ArrowUp" ? i && (Ye(P), x((R) => Math.max(R - 1, -1))) : P.key === "Escape" && (Ye(P), c(!1));
  }, N = h.useCallback(() => {
    l(""), M("");
  }, [M]), z = h.useCallback(
    (P, R, I = !1) => {
      var ue;
      if (!P) return;
      const L = Al(r), W = L[L.length - 1] || "";
      let E = !1;
      const F = W.replace(/^([-!])/, "").toLowerCase();
      F && P.toLowerCase().startsWith(F) && (E = !0);
      const U = W.match(/^([-!])/), A = E && U ? U[1] : "";
      if (E && L.pop(), I) {
        const Tt = [...L, `${A}${P}:`].filter(Boolean).join(" ");
        l(Tt), (ue = u.current) == null || ue.focus();
        return;
      }
      const oe = ((_ == null ? void 0 : _.no_quote_prefixes) || []).includes(P) ? R : `"${R}"`, de = `${A}${P}:${oe}`, Re = [...L, de].filter(Boolean).join(" ");
      l(Re), M(Re);
    },
    [r, M, _]
  ), B = h.useCallback(
    (P) => {
      l(P), P || M("");
    },
    [M]
  ), C = h.useCallback(() => {
    if (r === m.current || !j) return;
    const P = Al(r), R = P[P.length - 1];
    if (!R) return;
    const I = !!R.match(j), L = R.replace(/^([-!])/, "").toLowerCase(), W = L && (_ == null ? void 0 : _.all_prefixes.some((E) => E.startsWith(L)));
    (I || W) && c(!0);
  }, [r, j, _]), Q = h.useCallback(() => {
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
    handleKeyDown: D,
    applySuggestion: T,
    clearSearch: N,
    applySearchSuggestion: z,
    handleInputChange: B,
    handleInputFocus: C,
    handleInputBlur: Q
  };
}, Bc = (e) => {
  switch (e) {
    case "tag":
      return /* @__PURE__ */ s.jsx(gr, { size: 12 });
    case "model":
      return /* @__PURE__ */ s.jsx(Xh, { size: 12 });
    case "pos":
    case "neg":
      return /* @__PURE__ */ s.jsx(wg, { size: 12 });
    case "date":
    case "after":
    case "before":
      return /* @__PURE__ */ s.jsx(Zh, { size: 12 });
    case "has_source":
      return /* @__PURE__ */ s.jsx(hf, { size: 12 });
    case "has_derivatives":
      return /* @__PURE__ */ s.jsx(pf, { size: 12 });
    case "note":
      return /* @__PURE__ */ s.jsx(lg, { size: 12 });
    case "sort":
      return /* @__PURE__ */ s.jsx(Yh, { size: 12 });
    default:
      return null;
  }
}, gv = ({
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
  toggleShowAllKeywords: p,
  applySearchSuggestion: v,
  favorites: g,
  onSelectFavorite: S,
  onEditFavorite: w,
  onDeleteFavorite: x
}) => {
  const _ = (y, j, k) => /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      onClick: () => v(y.type, y.value, k === "all"),
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
        b.currentTarget.style.backgroundColor = "var(--comfy-input-bg, #2a2a2a)", b.currentTarget.style.borderColor = "var(--comfy-menu-border, #333)", b.currentTarget.style.color = "var(--meld-text-color)";
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "span",
          {
            style: {
              display: "flex",
              color: "var(--meld-text-secondary)"
            },
            children: Bc(y.type)
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
        k !== "all" && /* @__PURE__ */ s.jsx(
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
    `${k}-${y.type}:${y.value}:${j}`
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
      children: t.map((y, j) => /* @__PURE__ */ s.jsx(
        "div",
        {
          onMouseDown: (k) => {
            k.preventDefault(), l(y);
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
                    children: Bc(y.type)
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
                      color: y.value === _t ? "var(--meld-accent-color, #3b82f6)" : "var(--meld-text-color)",
                      fontSize: "14px",
                      fontWeight: y.value === _t ? "bold" : "normal"
                    },
                    children: y.value === _t ? y.type === "tag" ? `Untagged (${_t})` : `No ${y.type} (${_t})` : y.value
                  }
                )
              ]
            }
          )
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
            children: i.map((y, j) => _(y, j, "quick"))
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
                    (y, j) => _({ type: y, value: "" }, j, "all")
                  )
                }
              )
            ]
          }
        )
      ]
    }
  ), m = () => g.length === 0 || a && a === o ? null : /* @__PURE__ */ s.jsxs(
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
              /* @__PURE__ */ s.jsx(fr, { size: 12, fill: "var(--meld-text-secondary)" }),
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
            children: g.map((y) => /* @__PURE__ */ s.jsx(
              im,
              {
                fav: y,
                onSelect: S,
                onEdit: w,
                onDelete: x
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
        f(),
        u(),
        m()
      ]
    }
  );
}, yv = () => {
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
    setSelectedIndex: p,
    inputRef: v,
    isQueryChanged: g,
    handleSearch: S,
    handleKeyDown: w,
    applySuggestion: x,
    clearSearch: _,
    applySearchSuggestion: f,
    handleInputChange: u,
    handleInputFocus: m,
    handleInputBlur: y
  } = hv(), {
    isSaving: j,
    toastMessage: k,
    toastType: b,
    editingFavorite: M,
    setEditingFavorite: T,
    editFavoriteName: D,
    setEditFavoriteName: N,
    editFavoriteQuery: z,
    setEditFavoriteQuery: B,
    handleDeleteFavorite: C,
    handleEditFavorite: Q,
    handleSaveEditFavorite: P,
    handleSaveFavorite: R,
    setToastMessage: I
  } = om(), L = async () => {
    const A = e.favorites.some((Z) => Z.query === e.searchQuery);
    await R() && I(
      A ? "Removed from favorites." : "Added to favorites.",
      "info"
    );
  };
  Le({
    onEscape: () => T(null),
    enabled: !!M
  });
  const W = h.useRef(null), E = h.useRef(!1);
  h.useEffect(() => {
    M && W.current && W.current.focus();
  }, [M]);
  const F = (A) => {
    A.target === A.currentTarget && (E.current = !0);
  }, U = (A) => {
    A.target === A.currentTarget && E.current && T(null), E.current = !1;
  };
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "meld-search-container",
      style: { display: "flex", flexDirection: "column", gap: "8px", flex: 1 },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-search-bar-wrapper", style: { position: "relative", width: "100%" }, children: [
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
                      background: g ? "var(--meld-accent-color, #3b82f6)" : "var(--comfy-input-bg-active, rgba(255,255,255,0.03))",
                      border: g ? "1px solid var(--meld-border-color, rgba(255,255,255,0.2))" : "1px solid transparent",
                      cursor: "pointer",
                      padding: "6px 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      flexShrink: 0,
                      borderRadius: "4px",
                      transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: g ? "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))" : "none"
                    },
                    onMouseEnter: (A) => {
                      A.currentTarget.style.transform = "translateY(-1px)", g ? (A.currentTarget.style.filter = "brightness(1.15)", A.currentTarget.style.boxShadow = "0 4px 12px var(--meld-accent-glow-hover, rgba(59, 130, 246, 0.5)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : A.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.08))";
                    },
                    onMouseLeave: (A) => {
                      A.currentTarget.style.transform = "none", g ? (A.currentTarget.style.filter = "none", A.currentTarget.style.boxShadow = "0 2px 8px var(--meld-accent-glow, rgba(59, 130, 246, 0.4)), inset 0 1px 0 var(--meld-border-color, rgba(255,255,255,0.2))") : A.currentTarget.style.backgroundColor = "var(--comfy-input-bg-active, rgba(255,255,255,0.03))";
                    },
                    onMouseDown: (A) => {
                      A.currentTarget.style.transform = "translateY(1px)", A.currentTarget.style.boxShadow = "none";
                    },
                    onMouseUp: (A) => {
                      A.currentTarget.style.transform = "translateY(-1px)";
                    },
                    title: "Search (Enter)",
                    children: [
                      /* @__PURE__ */ s.jsx(
                        Ln,
                        {
                          size: 16,
                          color: g ? "var(--meld-text-color, #fff)" : "var(--meld-text-secondary)",
                          style: {
                            transition: "color 0.2s",
                            filter: g ? "drop-shadow(0 1px 2px var(--meld-shadow-color, rgba(0,0,0,0.2)))" : "none"
                          }
                        }
                      ),
                      g && /* @__PURE__ */ s.jsx(
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
                    onChange: (A) => u(A.target.value),
                    onKeyDown: w,
                    onBlur: y,
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
                    disabled: j,
                    title: e.favorites.some((A) => A.query === e.searchQuery) ? "Remove from Favorites" : "Add to Favorites",
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
                      fr,
                      {
                        size: 16,
                        color: e.favorites.some((A) => A.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                        fill: e.favorites.some((A) => A.query === e.searchQuery) ? "var(--brand-yellow, #ffd700)" : "none"
                      }
                    )
                  }
                ),
                t && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: _,
                    "aria-label": "Clear search",
                    style: {
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ s.jsx(he, { size: 16, color: "var(--meld-text-secondary)" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsx(
            gv,
            {
              showSuggestions: l,
              suggestions: r,
              selectedIndex: d,
              setSelectedIndex: p,
              applySuggestion: x,
              inputValue: t,
              searchQuery: e.searchQuery,
              searchSuggestions: a,
              allKeywords: o,
              showAllKeywords: i,
              toggleShowAllKeywords: c,
              applySearchSuggestion: f,
              favorites: e.favorites,
              onSelectFavorite: (A) => {
                n(A), S(A);
              },
              onEditFavorite: Q,
              onDeleteFavorite: C
            }
          )
        ] }),
        M && me.createPortal(
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "meld-modal-overlay meld-search-edit-modal-overlay",
              onMouseDown: F,
              onMouseUp: U,
              children: /* @__PURE__ */ s.jsxs(
                "div",
                {
                  className: "meld-modal-content meld-modal-content--small",
                  onClick: (A) => A.stopPropagation(),
                  children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "meld-modal-header", children: [
                      /* @__PURE__ */ s.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ s.jsx(fr, { size: 20, color: "var(--meld-accent-color)" }),
                        "Edit Favorite"
                      ] }),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-modal-close",
                          onClick: () => T(null),
                          children: /* @__PURE__ */ s.jsx(he, { size: 20 })
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
                                    ref: W,
                                    type: "text",
                                    value: D,
                                    onChange: (A) => N(A.target.value),
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
                                    onKeyDown: (A) => {
                                      A.key === "Enter" && (Ye(A), P()), A.key === "Escape" && (Ye(A), T(null));
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
                                    onChange: (A) => B(A.target.value),
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
                                    onKeyDown: (A) => {
                                      A.key === "Enter" && !A.shiftKey && (Ye(A), P()), A.key === "Escape" && (Ye(A), T(null));
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
                          className: "meld-btn meld-btn--secondary",
                          onClick: () => T(null),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          type: "button",
                          className: "meld-btn meld-btn--primary",
                          onClick: P,
                          disabled: j || !D.trim() || !z.trim(),
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
}, vv = ({ onClose: e, onSearch: t }) => {
  const [n, r] = h.useState([]), [l, a] = h.useState(!0), [o, i] = h.useState(""), [c, d] = h.useState(""), [p, v] = h.useState(!1), [g, S] = h.useState(null), [w, x] = h.useState(""), [_, f] = h.useState(!1), u = h.useRef(null), m = h.useCallback(async () => {
    a(!0);
    try {
      const N = await gi();
      r(N);
    } catch (N) {
      O.error("Failed to fetch tags:", N);
    } finally {
      a(!1);
    }
  }, []);
  h.useEffect(() => {
    m();
  }, [m]), h.useEffect(() => {
    g !== null && u.current && (u.current.focus(), u.current.select());
  }, [g]);
  const y = async (N) => {
    N.preventDefault();
    const z = c.trim();
    if (!(!z || p)) {
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
        await sy(z), d(""), await m();
      } catch (B) {
        O.error("Failed to add tag:", B);
      } finally {
        v(!1);
      }
    }
  }, j = async (N, z) => {
    if (confirm(`Are you sure you want to delete tag "${z}"?`))
      try {
        await ay(N), await m();
      } catch (B) {
        O.error("Failed to delete tag:", B);
      }
  }, k = (N) => {
    S(N.id), x(N.name);
  }, b = () => {
    S(null), x("");
  }, M = async (N) => {
    N.preventDefault();
    const z = w.trim();
    if (!z || g === null || _) return;
    if (z.toLowerCase() === _t) {
      alert(`Tag name '${_t}' is reserved for search and cannot be used.`);
      return;
    }
    const B = n.find((C) => C.id === g);
    if (B && B.name === z) {
      b();
      return;
    }
    if (n.some((C) => C.id !== g && C.name.toLowerCase() === z.toLowerCase())) {
      alert(`Tag "${z}" already exists.`);
      return;
    }
    f(!0);
    try {
      await oy(g, z), b(), await m();
    } catch (C) {
      O.error("Failed to rename tag:", C), alert(C instanceof Error ? C.message : "Failed to rename tag");
    } finally {
      f(!1);
    }
  }, T = (N) => {
    t(`tag:${N}`);
  }, D = h.useMemo(() => n.filter((N) => N.name.toLowerCase().includes(o.toLowerCase())), [n, o]);
  return /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-view", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-manager-header", children: [
      /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ s.jsx(gr, { size: 16 }),
        /* @__PURE__ */ s.jsx("h3", { style: { margin: 0, fontSize: "14px" }, children: "Tag Manager" })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: "meld-tag-manager-close",
          onClick: e,
          title: "Close and return to gallery",
          children: /* @__PURE__ */ s.jsx(he, { size: 16 })
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
            onChange: (N) => d(N.target.value),
            disabled: p
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            type: "submit",
            className: "meld-btn meld-btn--primary",
            style: { padding: "4px 12px", height: "34px" },
            disabled: !c.trim() || p,
            children: [
              /* @__PURE__ */ s.jsx(Ws, { size: 14 }),
              "Add"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-search-container", children: [
        /* @__PURE__ */ s.jsx(Ln, { size: 14, className: "meld-tag-search-icon" }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            className: "meld-tag-search-input",
            placeholder: "Filter tags...",
            value: o,
            onChange: (N) => i(N.target.value)
          }
        )
      ] }),
      l ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__loading", children: "Loading tags..." }) : /* @__PURE__ */ s.jsx("div", { className: "meld-tag-list", children: D.length === 0 ? /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__empty", children: "No tags found." }) : D.map((N) => /* @__PURE__ */ s.jsx("div", { className: "meld-tag-item", children: g === N.id ? /* @__PURE__ */ s.jsxs("form", { className: "meld-tag-rename-form", onSubmit: M, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            ref: u,
            className: "meld-tag-rename-input",
            value: w,
            onChange: (z) => x(z.target.value),
            onKeyDown: (z) => z.key === "Escape" && b()
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "submit",
            className: "meld-tag-item__btn meld-tag-item__btn--save",
            title: "Save",
            disabled: _ || !w.trim(),
            children: /* @__PURE__ */ s.jsx(di, { size: 14 })
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
            children: /* @__PURE__ */ s.jsx(he, { size: 14 })
          }
        )
      ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "meld-tag-item__name", children: N.name }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-tag-item__actions", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Search by this tag",
              onClick: () => T(N.name),
              children: /* @__PURE__ */ s.jsx(Ln, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn",
              title: "Rename tag",
              onClick: () => k(N),
              children: /* @__PURE__ */ s.jsx(vf, { size: 14 })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              type: "button",
              className: "meld-tag-item__btn meld-tag-item__btn--delete",
              title: "Delete tag",
              onClick: () => j(N.id, N.name),
              children: /* @__PURE__ */ s.jsx(Ut, { size: 14 })
            }
          )
        ] })
      ] }) }, N.id)) })
    ] })
  ] });
}, ya = 56, cm = (e, t) => {
  const n = h.useCallback(async (l) => pi(l), []), r = h.useCallback(
    (l) => {
      const a = t["gallery.lineage_max_depth"];
      if (a === 0) return [];
      if (l.ancestors && l.ancestors.length > 0)
        return l.ancestors.slice(0, a).map((p) => ({
          id: p.id,
          imgSrc: mt(p, ya)
        }));
      const o = l.parent_id;
      if (!o || !l.parent_filename) return [];
      const i = e.find((p) => p.id === o);
      let c = null;
      if (i ? c = mt(i, ya) : c = mt(
        {
          filename: l.parent_filename,
          subfolder: l.parent_subfolder || "",
          type: l.parent_type
        },
        ya
      ), !c) return [];
      const d = {
        id: o || null,
        imgSrc: c
      };
      if (i && a > 1) {
        const p = r(i);
        return [d, ...p].slice(0, a);
      }
      return [d];
    },
    [t, e]
  );
  return { getParentChain: r, fetchLineage: n };
}, Qc = ({
  currentThumbnails: e,
  currentIndex: t,
  removedIds: n,
  viewerMode: r,
  viewerLightTableSlotId: l,
  dispatch: a,
  removeImageIds: o
}) => {
  let i = null;
  for (let c = t + 1; c < e.length; c++) {
    const d = e[c];
    if (d && !n.has(d.id)) {
      i = d.id;
      break;
    }
  }
  if (i === null)
    for (let c = t - 1; c >= 0; c--) {
      const d = e[c];
      if (d && !n.has(d.id)) {
        i = d.id;
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
}, wv = ({
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
  handleNext: p,
  handlePrevious: v,
  handleEditTags: g,
  handleRestore: S,
  fetchLineage: w,
  restoreImages: x,
  bulkUpdateImageTags: _
}) => {
  const [f, u] = h.useState(null), [m, y] = h.useState(
    null
  ), j = h.useCallback(
    async (N = !1) => {
      if (!n) return;
      const z = r ? e.settings["fullscreen.delete_mode"] : e.settings["viewer.delete_mode"];
      if (!N && z === "confirm") {
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
        let Q = [];
        if (z === "lineage") {
          Q = await w(n.id);
          for (const P of Q)
            C.add(P.id);
        }
        if (!d.isMountedRef.current || d.viewerImageIdRef.current === null || (await ho(Array.from(C), B), !d.isMountedRef.current || d.viewerImageIdRef.current === null))
          return;
        if (Qc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: C,
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: Array.from(C)
        }), !B) {
          const P = [
            ...l,
            ...Q,
            ...i,
            ...c
          ], R = /* @__PURE__ */ new Map();
          for (const L of P)
            R.set(L.id, L);
          const I = Array.from(C).map((L) => {
            const W = R.get(L);
            return W || {
              id: L,
              filename: `deleted_${L}`,
              subfolder: "",
              type: "custom",
              created_at: 0,
              positive: "",
              negative: "",
              tags: []
            };
          });
          u(I), y(null);
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
    n && g(n);
  }, [g, n]), b = h.useCallback(async () => {
    n && (l.length > 1 ? p() : t({ type: "CLOSE_VIEWER" }), await S(n));
  }, [l.length, t, p, S, n]), M = h.useCallback(async () => {
    if (!f || f.length === 0) return;
    const N = f.map((z) => z.id);
    try {
      const z = await x(N);
      if (!d.isMountedRef.current) return;
      const B = z.restored_ids || N, C = new Set(B), Q = f.filter((R) => C.has(R.id));
      if (Q.length > 0 && t({ type: "ADD_IMAGES", payload: Q }), e.viewScope === "trash" && t({ type: "REMOVE_IMAGES", payload: B }), u(null), !d.isMountedRef.current) return;
      const P = B[0];
      P !== void 0 && t({
        type: "OPEN_VIEWER",
        payload: {
          id: P,
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
  ]), T = h.useCallback(async () => {
    if (f && f.length > 0) {
      await M();
      return;
    }
    if (!m || m.type !== "tags")
      return;
    const { imageId: N, addTags: z, removeTags: B } = m;
    try {
      await _([N], z, B);
      const C = (o === "lineage" ? i : c).find(
        (Q) => Q.id === N
      );
      if (C) {
        const Q = [...C.tags];
        for (const R of z)
          Q.includes(R) || Q.push(R);
        const P = Q.filter((R) => !B.includes(R));
        t({
          type: "UPDATE_IMAGE",
          payload: { ...C, tags: P }
        }), t({
          type: "OPEN_VIEWER",
          payload: {
            id: N,
            mode: o,
            ...o === "lighttable" && e.viewerLightTableSlotId ? { slotId: e.viewerLightTableSlotId } : {}
          }
        });
      }
      y(null);
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
  ]), D = h.useCallback(
    async (N) => {
      if (!N || typeof N != "string" || !n) return;
      const z = n.id, B = [...n.tags], C = Dy(N, n), { addTags: Q, removeTags: P, isDeleted: R, moveNext: I, movePrev: L, sendToLtSlot: W } = C;
      if (W) {
        const E = se.getState(), F = E.slots.find(
          (U) => U.id.toLowerCase() === W.toLowerCase() || U.label.toLowerCase() === W.toLowerCase()
        );
        F ? (E.addToBucket(F.id, String(z), n), E.showToast(`Sent to ${F.label}`), R || Qc({
          currentThumbnails: l,
          currentIndex: a,
          removedIds: /* @__PURE__ */ new Set([z]),
          viewerMode: o,
          viewerLightTableSlotId: e.viewerLightTableSlotId,
          dispatch: t,
          removeImageIds: [z]
        })) : (E.showToast(`Error: Light Table slot "${W}" not found`, "error"), O.warn(`Attempted to send to non-existent LT slot: ${W}`));
      }
      if (Q.length > 0 || P.length > 0)
        try {
          await _([z], Q, P);
          const E = [...B];
          for (const U of Q)
            E.includes(U) || E.push(U);
          const F = E.filter((U) => !P.includes(U));
          t({
            type: "UPDATE_IMAGE",
            payload: { ...n, id: z, tags: F }
          }), y({
            type: "tags",
            imageId: z,
            addTags: [...P],
            removeTags: [...Q]
          }), u(null);
        } catch (E) {
          O.error("Failed to update tags via shortcut:", E), t({
            type: "SET_ERROR",
            payload: E instanceof Error ? E.message : String(E)
          });
        }
      R ? await j(!0) : I ? p() : L && await v();
    },
    [
      a,
      l,
      t,
      _,
      j,
      p,
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
    handleUndo: T,
    executeCommand: D
  };
}, xv = ({
  overlayRef: e,
  settings: t,
  setShowDetails: n
}) => {
  const [r, l] = h.useState(!1), a = h.useCallback(
    (o) => {
      o && typeof o.stopPropagation == "function" && o.stopPropagation();
      const i = e.current;
      i && (document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen().catch((c) => {
        O.error(`Error attempting to enable full-screen mode: ${c.message}`);
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
}, _v = ({
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
  handleUndo: p,
  handleTagEditAction: v,
  handleRestoreAction: g,
  executeCommand: S,
  setShowDetails: w,
  setActiveShortcutKey: x
}) => {
  const _ = h.useCallback(
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
      const y = f.key === "Delete" || f.key === "Backspace", j = f.key === "ArrowRight" || f.key === "ArrowLeft" || f.key === "ArrowDown" || f.key === "ArrowUp", k = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(f.key), b = f.key === "Escape", M = (f.ctrlKey || f.metaKey) && (f.key === "z" || f.key === "Z" || f.code === "KeyZ"), T = /^[0-9]$/.test(f.key) && !f.ctrlKey && !f.metaKey && !f.altKey && f.code !== "KeyZ";
      if (y || j || k || b || M || T)
        if (!m || b)
          cl(f);
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
        w((D) => !D);
      else if (k && (f.key === "t" || f.key === "T"))
        v();
      else if (k && (f.key === "r" || f.key === "R") && n === "trash")
        g();
      else if (y)
        d();
      else if (M)
        p();
      else if (T && !m) {
        const D = `viewer.shortcut.${f.key}`, N = r[D];
        typeof N == "string" && N && (x(f.key), setTimeout(() => {
          a.current && x(null);
        }, 500), S(N));
      }
    },
    [
      t,
      l,
      S,
      d,
      i,
      c,
      g,
      v,
      p,
      a,
      x,
      w,
      r,
      o,
      n,
      e
    ]
  );
  Us({
    enabled: e !== null,
    onKeyDown: _
  });
}, kv = ({
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
      o(!0), pi(t).then((p) => {
        !c && l.current && d === i.current && r({ type: "SET_LINEAGE", payload: p });
      }).catch((p) => {
        O.error("Failed to fetch lineage:", p);
      }).finally(() => {
        !c && l.current && d === i.current && o(!1);
      });
    }
    return () => {
      c = !0;
    };
  }, [r, l, n, t, e]), { isLoadingLineage: a };
}, Sv = ({
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
  mountRefs: p
}) => {
  const v = a === "lighttable" ? r : void 0, g = h.useCallback(() => {
    e({
      type: "NEXT_IMAGE",
      payload: { isFullscreen: t, currentList: v }
    });
  }, [v, e, t]), S = h.useCallback(async () => {
    const w = t ? n["fullscreen.loop"] : n["viewer.loop"];
    if (l === 0 && a === "gallery" && o.hasMore && !c && w) {
      d(!0);
      try {
        const x = o.limit, _ = o.total, f = Math.max(0, _ - x), u = await Zl(f, x, i);
        if (!p.isMountedRef.current || (e({ type: "APPEND_IMAGES", payload: u }), p.viewerImageIdRef.current === null)) return;
        if (u.images.length > 0) {
          const m = u.images.at(-1);
          if (!m) return;
          e({
            type: "OPEN_VIEWER",
            payload: { id: m.id, mode: "gallery" }
          });
        }
      } catch (x) {
        O.error("Failed to jump to end:", x);
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
    p,
    o,
    i,
    d,
    n,
    a
  ]);
  return { handleNext: g, handlePrevious: S };
};
function jv(e) {
  const { ids: t, index: n, loopEnabled: r, hasMore: l } = e;
  if (t.length === 0 || n < 0 || n >= t.length)
    return { prevId: null, nextId: null };
  const a = n === 0, i = n === t.length - 1 ? l || !r ? null : t[0] ?? null : t[n + 1] ?? null;
  return { prevId: a ? l || !r ? null : t[t.length - 1] ?? null : t[n - 1] ?? null, nextId: i };
}
const bv = ({
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
    const p = t.map((_) => _.id), v = p.indexOf(e);
    if (v === -1) return;
    const g = r ? l["fullscreen.loop"] : l["viewer.loop"], { prevId: S, nextId: w } = jv({
      ids: p,
      index: v,
      loopEnabled: g,
      hasMore: a && o === "gallery"
    }), x = setTimeout(() => {
      const _ = [S, w].filter(
        (f) => f !== null && f !== e
      );
      _.length !== 0 && Promise.allSettled(_.map((f) => d(f))).then((f) => {
        for (const u of f)
          u.status === "rejected" && O.warn("Prefetching adjacent image details failed", u.reason);
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
  ]), h.useEffect(() => {
    if (e === null || t.length === 0 || n === -1) return;
    const p = [n + 1, n + 2, n - 1], v = setTimeout(() => {
      for (const g of p)
        if (g >= 0 && g < t.length) {
          const S = t[g];
          if (!S) continue;
          const w = new Image();
          w.src = hi(S);
        }
    }, 150);
    return () => clearTimeout(v);
  }, [n, t, e]);
};
function Ev(e) {
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
const Cv = ({
  state: e,
  dispatch: t,
  loadMoreImages: n,
  fetchFullImageDetails: r
}) => {
  var gl;
  const { viewerImageId: l, images: a, viewerMode: o, lineageImages: i, settings: c } = e, {
    restoreImages: d,
    bulkUpdateImageTags: p,
    handleEditTags: v,
    handleEditNotes: g,
    handleRestore: S,
    handleUpdateUserNotes: w,
    handleRestoreWorkflow: x,
    handleAddUnifiedLoader: _,
    handleSendToWorkflow: f,
    handleRunWithWorkflow: u,
    handleRunWithMask: m,
    handleEditSource: y
  } = $s(e, t), { getParentChain: j, fetchLineage: k } = cm(a, c), [b, M] = h.useState(!1), [T, D] = h.useState(c["viewer.show_details_by_default"]), [N, z] = h.useState(null), B = N ?? c["viewer.show_thumbnails"], [C, Q] = h.useState(!1), [P, R] = h.useState(null), I = h.useRef(null), L = {
    isMountedRef: h.useRef(!0),
    viewerImageIdRef: h.useRef(l)
  };
  h.useEffect(() => (L.isMountedRef.current = !0, () => {
    L.isMountedRef.current = !1;
  }), [L.isMountedRef]), h.useEffect(() => {
    L.viewerImageIdRef.current = l;
  }, [L.viewerImageIdRef, l]);
  const W = h.useMemo(() => {
    const be = e.searchQuery.trim() !== "";
    if (o === "lighttable" && e.viewerLightTableSlotId) {
      const ot = se.getState(), gt = ot.buckets[e.viewerLightTableSlotId] || [], Lt = new Map(a.map((H) => [H.id, H])), $ = new Map(i.map((H) => [H.id, H]));
      return gt.map((H) => {
        const ee = Number.parseInt(H, 10);
        return Lt.get(ee) || $.get(ee) || ot.images[H] || Ev(ee);
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
  ]), E = l === null ? -1 : W.findIndex((be) => be.id === l), U = (o === "lineage" && i.length > 0 ? i : o === "lighttable" ? W : a).find((be) => be.id === l) || (l === ((gl = e.viewerFallbackImage) == null ? void 0 : gl.id) ? e.viewerFallbackImage : void 0), { isFullscreen: A, toggleFullscreen: K } = xv({
    overlayRef: I,
    settings: c,
    setShowDetails: D
  }), { handleNext: Z, handlePrevious: oe } = Sv({
    dispatch: t,
    isFullscreen: A,
    settings: c,
    currentThumbnails: W,
    currentIndex: E,
    viewerMode: o,
    pagination: e.pagination,
    searchQuery: e.searchQuery,
    isJumping: C,
    setIsJumping: Q,
    mountRefs: L
  }), {
    lastDeletedImages: de,
    setLastDeletedImages: Re,
    handleDelete: ue,
    handleTagEditAction: Tt,
    handleRestoreAction: Y,
    handleUndo: Bt,
    executeCommand: Qt
  } = wv({
    state: e,
    dispatch: t,
    image: U,
    isFullscreen: A,
    currentThumbnails: W,
    currentIndex: E,
    viewerMode: o,
    lineageImages: i,
    images: a,
    mountRefs: L,
    handleNext: Z,
    handlePrevious: oe,
    handleEditTags: v,
    handleRestore: S,
    fetchLineage: k,
    restoreImages: d,
    bulkUpdateImageTags: p
  }), { isLoadingLineage: Ht } = kv({
    viewerMode: o,
    viewerImageId: l,
    lineageLength: i.length,
    dispatch: t,
    isMountedRef: L.isMountedRef
  });
  _v({
    viewerImageId: l,
    activeModalType: e.activeModal.type,
    viewScope: e.viewScope,
    settings: c,
    dispatch: t,
    isMountedRef: L.isMountedRef,
    toggleFullscreen: K,
    handleNext: Z,
    handlePrevious: oe,
    handleDelete: () => {
      ue();
    },
    handleUndo: Bt,
    handleTagEditAction: Tt,
    handleRestoreAction: Y,
    executeCommand: Qt,
    setShowDetails: D,
    setActiveShortcutKey: R
  }), h.useEffect(() => {
    l !== null && r(l).catch((be) => {
      O.error("Failed to fetch full image details for viewer:", be);
    });
  }, [r, l]), bv({
    viewerImageId: l,
    currentThumbnails: W,
    currentIndex: E,
    isFullscreen: A,
    settings: c,
    hasMore: e.pagination.hasMore,
    viewerMode: o,
    isLoading: e.isLoading,
    loadMoreImages: n,
    fetchFullImageDetails: r
  });
  const Pn = h.useMemo(() => {
    if (!B || E === -1) return [];
    const be = c["viewer.thumbnail_window_size"], ot = Math.floor(be / 2);
    let gt = Math.max(0, E - ot);
    const Lt = Math.min(W.length, gt + be);
    return Lt === W.length && (gt = Math.max(0, Lt - be)), W.slice(gt, Lt).map(($, H) => ({
      img: $,
      absIndex: gt + H
    }));
  }, [W, E, c, B]), yr = h.useMemo(() => U ? j(U) : [], [j, U]);
  return h.useEffect(() => {
    var be, ot;
    if (l !== null) {
      if (B) {
        const gt = document.querySelector(".meld-viewer-thumbnail--active");
        gt && gt.scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "center"
        });
      }
      ((be = document.activeElement) == null ? void 0 : be.tagName) === "CANVAS" && document.activeElement.blur(), (ot = I.current) == null || ot.focus();
    }
  }, [B, l]), {
    isFullscreen: A,
    showDetails: T,
    setShowDetails: D,
    showThumbnails: B,
    setShowThumbnailsOverride: z,
    isLoadingLineage: Ht,
    isJumping: C,
    isMenuOpen: b,
    setIsMenuOpen: M,
    activeShortcutKey: P,
    lastDeletedImages: de,
    setLastDeletedImages: Re,
    overlayRef: I,
    handleNext: Z,
    handlePrevious: oe,
    handleDelete: ue,
    handleUpdateUserNotes: w,
    handleEditNotes: () => U && g(U),
    handleTagEdit: Tt,
    handleRestore: Y,
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
    handleEditSource: () => U && y(U),
    toggleFullscreen: K,
    currentIndex: E,
    currentThumbnails: W,
    image: U,
    windowedThumbnails: Pn,
    parentChain: yr
  };
}, xi = ({
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
  onEditTags: p,
  onEditNotes: v,
  onDelete: g,
  onRestore: S,
  showRestore: w,
  deleteLabel: x,
  showQuickShortcuts: _ = !0,
  variant: f = "default",
  iconSize: u = 16,
  buttonClassName: m = ""
}) => {
  const [y, j] = h.useState("left");
  h.useEffect(() => {
    e && n.current && (n.current.getBoundingClientRect().left < 200 ? j("right") : j("left"));
  }, [e, n]);
  const k = (T) => {
    switch (T) {
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
        return p;
      case "edit_notes":
        return v;
      case "restore_image":
        return S;
      case "delete_or_trash":
        return g;
      default:
        return null;
    }
  }, b = [
    r["gallery.quick_shortcut.1"],
    r["gallery.quick_shortcut.2"],
    r["gallery.quick_shortcut.3"]
  ].filter((T) => T && T !== ""), M = [
    "meld-image-card__menu-container",
    f === "thumbnail_overlay_top_right" && "meld-image-card__menu-container--thumbnail-overlay"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs("div", { className: M, ref: n, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        className: `meld-image-card__menu-btn ${m}`,
        onClick: (T) => {
          T.stopPropagation(), t(!e);
        },
        title: "Menu",
        children: /* @__PURE__ */ s.jsx(pg, { size: u })
      }
    ),
    _ && b.map((T, D) => {
      const N = Gf.find((C) => C.id === T);
      if (!N || !N.icon) return null;
      const z = N.icon, B = k(T);
      return !B || T === "restore_image" && !w ? null : /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          className: `meld-image-card__menu-btn ${m}`,
          onClick: (C) => {
            C.stopPropagation(), B();
          },
          title: N.label,
          children: /* @__PURE__ */ s.jsx(z, { size: u })
        },
        `${T}-${D}`
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
            icon: Af,
            handler: l
          },
          {
            id: "send_to_workflow",
            label: "Send to Workflow",
            icon: Uf,
            handler: o
          },
          {
            id: "send_to_workflow_mask",
            label: "Send to Workflow (Mask)",
            icon: Vf,
            handler: () => c("apply")
          },
          {
            id: "queue_workflow",
            label: "Queue Workflow",
            icon: Wf,
            handler: i
          },
          {
            id: "queue_workflow_mask",
            label: "Queue Workflow (Mask)",
            icon: $f,
            handler: () => c("run")
          },
          {
            id: "restore_full_workflow",
            label: "Restore Full Workflow",
            icon: Ff,
            handler: a
          },
          {
            id: "edit_tags",
            label: "Edit Tags",
            icon: Qf,
            handler: p
          },
          {
            id: "edit_notes",
            label: "Edit Notes",
            icon: Hf,
            handler: v
          },
          {
            id: "edit_source_image",
            label: "Edit Source Image",
            icon: Bf,
            handler: d
          },
          ...w ? [
            {
              id: "restore_image",
              label: "Restore Image",
              icon: Kf,
              handler: S,
              color: "var(--meld-accent-color)"
            }
          ] : [],
          {
            id: "delete_or_trash",
            label: x,
            icon: Ut,
            handler: g,
            className: "meld-image-card__menu-item--danger",
            color: "var(--meld-danger-color)"
          }
        ].map((T) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `meld-image-card__menu-item ${T.className || ""}`,
            onMouseDown: (D) => D.stopPropagation(),
            onClick: (D) => {
              D.preventDefault(), D.stopPropagation(), T.handler(), t(!1);
            },
            children: [
              /* @__PURE__ */ s.jsx(T.icon, { size: 14, color: T.color }),
              /* @__PURE__ */ s.jsx("span", { children: T.label })
            ]
          },
          T.id
        ))
      }
    )
  ] });
}, Nv = ({
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
}) }) : null, Mv = ({
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
  const d = t ? n["fullscreen.details.show_user_notes"] : n["viewer.details.show_user_notes"], p = d === "always" || d === "if_present" && e.user_notes;
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
            (v, g) => v.imgSrc && /* @__PURE__ */ s.jsx(
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
                title: g === 0 ? "Source" : g === 1 ? "Grand-Source" : `Ancestor (S${g + 1})`,
                alt: "source thumb"
              },
              v.id || g
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
        p && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-item meld-viewer-details-item--notes", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-details-label", children: [
            "Notes",
            i === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes__status", children: "Saving..." })
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
}, dm = h.memo(
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
              children: i ? /* @__PURE__ */ s.jsx(hf, { size: 12 }) : /* @__PURE__ */ s.jsx(pf, { size: 12 })
            }
          )
        ]
      }
    ) });
  }
);
dm.displayName = "ThumbnailItem";
const Iv = ({
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
    dm,
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
  o === "gallery" && a && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-thumbnail meld-viewer-thumbnail--loading", children: /* @__PURE__ */ s.jsx(ol, { className: "animate-spin", size: 20 }) })
] }) });
function Tv() {
  const { state: e, dispatch: t, loadMoreImages: n, fetchFullImageDetails: r } = ge(), {
    isFullscreen: l,
    showDetails: a,
    setShowDetails: o,
    showThumbnails: i,
    setShowThumbnailsOverride: c,
    isLoadingLineage: d,
    isJumping: p,
    isMenuOpen: v,
    setIsMenuOpen: g,
    activeShortcutKey: S,
    setLastDeletedImages: w,
    overlayRef: x,
    handleNext: _,
    handlePrevious: f,
    handleTagEdit: u,
    handleEditNotes: m,
    handleRestore: y,
    handleRestoreWorkflow: j,
    handleAddUnifiedLoader: k,
    handleSendToWorkflow: b,
    handleRunWithWorkflow: M,
    handleRunWithMask: T,
    handleEditSource: D,
    handleDelete: N,
    toggleFullscreen: z,
    image: B,
    windowedThumbnails: C,
    parentChain: Q
  } = Cv({
    state: e,
    dispatch: t,
    loadMoreImages: n,
    fetchFullImageDetails: r
  }), P = h.useRef(null), R = h.useRef(null), { executeWorkflow: I } = yi(), L = h.useMemo(() => e.viewScope === "trash" ? "Delete Permanently" : "Move to Trash", [e.viewScope]);
  if (!B) return null;
  const { viewerImageId: W, viewerMode: E } = e, F = l ? e.settings["fullscreen.show_icons"] : e.settings["viewer.show_icons"];
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
                F && /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-actions", children: [
                  e.viewScope === "trash" && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn meld-viewer-action-btn--restore",
                      onClick: y,
                      type: "button",
                      title: "Restore Image",
                      children: /* @__PURE__ */ s.jsx(ol, { size: 20 })
                    }
                  ),
                  !l && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => c(!i),
                      type: "button",
                      title: i ? "Hide Thumbnails" : "Show Thumbnails",
                      children: /* @__PURE__ */ s.jsx(yf, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: () => o(!a),
                      type: "button",
                      title: a ? "Hide Details (I)" : "Show Details (I)",
                      children: /* @__PURE__ */ s.jsx(ag, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      className: "meld-viewer-action-btn",
                      onClick: z,
                      type: "button",
                      title: l ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)",
                      children: l ? /* @__PURE__ */ s.jsx(mg, { size: 20 }) : /* @__PURE__ */ s.jsx(ug, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    xi,
                    {
                      isMenuOpen: v,
                      setIsMenuOpen: g,
                      menuRef: R,
                      settings: e.settings,
                      onAddUnifiedLoader: k,
                      onRestoreWorkflow: j,
                      onSendToWorkflow: b,
                      onRunWithWorkflow: M,
                      onRunWithMask: T,
                      onEditSource: D,
                      onEditTags: u,
                      onEditNotes: m,
                      onDelete: N,
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
                      children: /* @__PURE__ */ s.jsx(he, { size: 20 })
                    }
                  )
                ] }),
                F && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--prev",
                    onClick: f,
                    type: "button",
                    disabled: p,
                    title: "Previous (Left/Up)",
                    children: /* @__PURE__ */ s.jsx(gf, { size: 32 })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "meld-viewer-image-container", children: [
                  p && /* @__PURE__ */ s.jsx("div", { className: "meld-viewer-loading-overlay", children: /* @__PURE__ */ s.jsx(ol, { className: "animate-spin", size: 48 }) }),
                  /* @__PURE__ */ s.jsx(
                    "img",
                    {
                      ref: P,
                      src: hi(B),
                      alt: B.filename,
                      className: `meld-viewer-image meld-viewer-image--${e.settings[l ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${p ? "meld-viewer-image--loading" : ""}`,
                      fetchpriority: "high"
                    }
                  )
                ] }),
                F && /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    className: "meld-viewer-nav meld-viewer-nav--next",
                    onClick: _,
                    type: "button",
                    title: "Next (Right/Down)",
                    children: /* @__PURE__ */ s.jsx(ui, { size: 32 })
                  }
                ),
                a && /* @__PURE__ */ s.jsx(
                  Mv,
                  {
                    image: B,
                    isFullscreen: l,
                    settings: e.settings,
                    showIcons: F,
                    parentChain: Q,
                    dispatch: t,
                    onEditNotes: m
                  }
                ),
                !l && i && e.settings["viewer.thumbnail_window_size"] > 1 && /* @__PURE__ */ s.jsx(
                  Iv,
                  {
                    windowedThumbnails: C,
                    viewerImageId: W,
                    currentImage: B,
                    dispatch: t,
                    isLoadingLineage: d,
                    isLoading: e.isLoading,
                    viewerMode: E,
                    lightTableSlotId: e.viewerLightTableSlotId
                  }
                ),
                /* @__PURE__ */ s.jsx(Nv, { settings: e.settings, activeShortcutKey: S })
              ]
            }
          ),
          e.activeModal.type === "workflow_selection" && /* @__PURE__ */ s.jsx(
            Jf,
            {
              images: e.activeModal.images,
              isMaskMode: !!e.activeModal.maskFilename || !!e.activeModal.isMaskSequence,
              onExecute: async (U, A) => {
                if (e.activeModal.type === "workflow_selection") {
                  if (e.activeModal.isMaskSequence)
                    return t({
                      type: "OPEN_MODAL",
                      payload: {
                        type: "mask_sequence_step",
                        images: e.activeModal.images,
                        currentIndex: 0,
                        workflowName: U,
                        targetLoaderNodeId: A
                      }
                    }), !1;
                  const K = e.activeModal.maskFilename;
                  for (const Z of e.activeModal.images)
                    await I(U, Z, K, A);
                  t({ type: "CLOSE_MODAL" }), t({ type: "CLOSE_VIEWER" });
                }
              }
            }
          ),
          e.activeModal.type === "node_selection" && /* @__PURE__ */ s.jsx(
            Zf,
            {
              image: e.activeModal.image,
              nodes: e.activeModal.nodes,
              onSelect: (U) => {
                e.activeModal.type === "node_selection" && il(e.activeModal.image, U);
              }
            }
          ),
          e.activeModal.type === "error" && /* @__PURE__ */ s.jsx(tm, { message: e.activeModal.message }),
          e.activeModal.type === "delete_confirm" && /* @__PURE__ */ s.jsx(
            em,
            {
              imageIds: e.activeModal.imageIds,
              hasLineage: e.activeModal.hasLineage,
              isPermanent: e.activeModal.isPermanent,
              onSuccess: w
            }
          ),
          e.activeModal.type === "parent_selection" && /* @__PURE__ */ s.jsx(nm, { imageId: e.activeModal.imageId }),
          e.activeModal.type === "import" && /* @__PURE__ */ s.jsx(Mf, {}),
          e.activeModal.type === "settings" && /* @__PURE__ */ s.jsx(qf, {}),
          e.activeModal.type === "tag_edit" && /* @__PURE__ */ s.jsx(
            Yf,
            {
              imageIds: e.activeModal.imageIds,
              initialTags: e.activeModal.tags,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_editor" && /* @__PURE__ */ s.jsx(
            vi,
            {
              imageId: e.activeModal.imageId,
              mode: e.activeModal.mode,
              onClose: () => t({ type: "CLOSE_MODAL" })
            }
          ),
          e.activeModal.type === "mask_sequence_step" && /* @__PURE__ */ s.jsx(
            Pf,
            {
              images: e.activeModal.images,
              currentIndex: e.activeModal.currentIndex,
              workflowName: e.activeModal.workflowName,
              targetLoaderNodeId: e.activeModal.targetLoaderNodeId,
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
            }
          ),
          e.activeModal.type === "note_edit" && /* @__PURE__ */ s.jsx(
            Xf,
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
const Lv = () => {
  const { state: e, dispatch: t, refreshImages: n, loadMoreImages: r, updateSetting: l } = ge(), [a, o] = h.useState("gallery"), [i, c] = h.useState(""), d = e.searchQuery.trim() !== "", p = h.useRef(null), v = h.useRef(null), g = se((_) => _.buckets), S = h.useMemo(() => {
    const _ = /* @__PURE__ */ new Set();
    for (const f of Object.values(g))
      for (const u of f)
        _.add(Number(u));
    return _;
  }, [g]), w = h.useMemo(() => e.images.filter((_) => S.has(_.id) ? !1 : e.viewScope === "trash" ? _.exists !== !1 || e.settings["gallery.trash.show_missing"] : _.exists !== !1 && (e.settings["gallery.show_parent_images"] || d || !_.has_children)), [e.images, e.settings, e.viewScope, S, d]), x = w;
  return h.useEffect(() => {
    !e.isLoading && e.pagination.hasMore && e.images.length > 0 && w.length === 0 && (O.log("GalleryPanel: Auto-loading more because all loaded images are hidden"), r());
  }, [
    e.isLoading,
    e.pagination.hasMore,
    e.images.length,
    w.length,
    r
  ]), Us({
    onKeyDown: (_) => {
      if (_.key !== "Escape")
        return;
      const f = !!document.querySelector(
        '[role="dialog"][aria-modal="true"], [role="alertdialog"][aria-modal="true"], .meld-modal-overlay'
      );
      e.activeModal.type !== "none" || f || e.selectedIds.size !== 0 && (t({ type: "CLEAR_SELECTION" }), cl(_));
    }
  }), h.useEffect(() => {
    const _ = new IntersectionObserver(
      (u) => {
        const m = u[0];
        if (m && m.isIntersecting) {
          if (e.isLoading) {
            O.log("GalleryPanel: Intersection observed but already loading");
            return;
          }
          e.pagination.hasMore ? (O.log(
            "GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
            {
              offset: e.images.length,
              hasMore: e.pagination.hasMore
            }
          ), r()) : O.log("GalleryPanel: Intersection observed but no more to load", {
            localCount: w.length,
            serverHasMore: e.pagination.hasMore
          });
        }
      },
      { threshold: 0, rootMargin: "800px" }
    ), f = p.current;
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
    loadMoreRef: p
  };
}, Rv = () => {
  const { state: e, dispatch: t, deleteSelected: n, restoreSelected: r } = ge(), { handleRunWithWorkflow: l, handleRunWithMask: a } = $s(e, t), o = e.selectedIds.size, [i, c] = h.useState(!1), [d, p] = h.useState(null), v = h.useRef(null), g = h.useRef(null), S = sm("bulkActionBar");
  if (Le({
    onEscape: () => c(!1),
    enabled: i
  }), dl({
    enabled: i,
    insideRefs: [v, g],
    onOutside: () => c(!1)
  }), o === 0) return null;
  const w = e.viewScope === "trash", x = () => e.images.filter((b) => e.selectedIds.has(b.id)), _ = () => {
    if (i) {
      c(!1);
      return;
    }
    v.current && (p(v.current.getBoundingClientRect()), c(!0));
  }, f = (b) => {
    b(), c(!1);
  }, u = () => {
    const b = x(), M = /* @__PURE__ */ new Set();
    for (const T of b)
      if (T.tags)
        for (const D of T.tags)
          M.add(D);
    t({
      type: "OPEN_MODAL",
      payload: {
        type: "tag_edit",
        imageIds: Array.from(e.selectedIds),
        tags: Array.from(M)
      }
    });
  }, m = () => {
    const b = x();
    l(b);
  }, y = () => {
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
  }, k = /* @__PURE__ */ s.jsxs("div", { className: `meld-bulk-bar ${w ? "meld-bulk-bar--trash" : ""}`, children: [
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
          /* @__PURE__ */ s.jsx(fg, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
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
          /* @__PURE__ */ s.jsx(he, { size: 16, style: { marginRight: "8px", verticalAlign: "middle" } }),
          "Cancel"
        ]
      }
    ),
    i && d && /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: g,
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
                /* @__PURE__ */ s.jsx(ol, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(gr, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(fi, { size: 14 }),
                " Queue Workflow"
              ]
            }
          ),
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              type: "button",
              className: "meld-bulk-bar-menu__item",
              onClick: () => f(y),
              children: [
                /* @__PURE__ */ s.jsx(gg, { size: 14 }),
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
                /* @__PURE__ */ s.jsx(sl, { size: 14 }),
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
  return me.createPortal(k, S);
};
function Fn(e, t, n) {
  let r = n.initialDeps ?? [], l, a = !0;
  function o() {
    var i, c, d;
    let p;
    n.key && ((i = n.debug) != null && i.call(n)) && (p = Date.now());
    const v = e();
    if (!(v.length !== r.length || v.some((w, x) => r[x] !== w)))
      return l;
    r = v;
    let S;
    if (n.key && ((c = n.debug) != null && c.call(n)) && (S = Date.now()), l = t(...v), n.key && ((d = n.debug) != null && d.call(n))) {
      const w = Math.round((Date.now() - p) * 100) / 100, x = Math.round((Date.now() - S) * 100) / 100, _ = x / 16, f = (u, m) => {
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
function Hc(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Dv = (e, t) => Math.abs(e - t) < 1.01, Pv = (e, t, n) => {
  let r;
  return function(...l) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, l), n);
  };
}, Kc = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Ov = (e) => e, zv = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let l = t; l <= n; l++)
    r.push(l);
  return r;
}, Av = (e, t) => {
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
  if (l(Kc(n)), !r.ResizeObserver)
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
      l(Kc(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(n, { box: "border-box" }), () => {
    a.unobserve(n);
  };
}, Gc = {
  passive: !0
}, qc = typeof window > "u" ? !0 : "onscrollend" in window, Fv = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let l = 0;
  const a = e.options.useScrollendEvent && qc ? () => {
  } : Pv(
    r,
    () => {
      t(l, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (p) => () => {
    const { horizontal: v, isRtl: g } = e.options;
    l = v ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, a(), t(l, p);
  }, i = o(!0), c = o(!1);
  n.addEventListener("scroll", i, Gc);
  const d = e.options.useScrollendEvent && qc;
  return d && n.addEventListener("scrollend", c, Gc), () => {
    n.removeEventListener("scroll", i), d && n.removeEventListener("scrollend", c);
  };
}, Wv = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, $v = (e, {
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
class Uv {
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
        getItemKey: Ov,
        rangeExtractor: zv,
        onChange: () => {
        },
        measureElement: Wv,
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
    }, this.maybeNotify = Fn(
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
    }, this.getMeasurementOptions = Fn(
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
    ), this.getMeasurements = Fn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: l, getItemKey: a, enabled: o, lanes: i }, c) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n)
          for (const g of this.laneAssignments.keys())
            g >= n && this.laneAssignments.delete(g);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = !1);
        const p = this.measurementsCache.slice(0, d), v = new Array(i).fill(
          void 0
        );
        for (let g = 0; g < d; g++) {
          const S = p[g];
          S && (v[S.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const S = a(g), w = this.laneAssignments.get(g);
          let x, _;
          if (w !== void 0 && this.options.lanes > 1) {
            x = w;
            const y = v[x], j = y !== void 0 ? p[y] : void 0;
            _ = j ? j.end + this.options.gap : r + l;
          } else {
            const y = this.options.lanes === 1 ? p[g - 1] : this.getFurthestMeasurement(p, g);
            _ = y ? y.end + this.options.gap : r + l, x = y ? y.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, x);
          }
          const f = c.get(S), u = typeof f == "number" ? f : this.options.estimateSize(g), m = _ + u;
          p[g] = {
            index: g,
            start: _,
            size: u,
            end: m,
            key: S,
            lane: x
          }, v[x] = g;
        }
        return this.measurementsCache = p, p;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Fn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, l, a) => this.range = n.length > 0 && r > 0 ? Vv({
        measurements: n,
        outerSize: r,
        scrollOffset: l,
        lanes: a
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Fn(
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
    }, this.getVirtualItems = Fn(
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
        return Hc(
          r[um(
            0,
            r.length - 1,
            (l) => Hc(r[l]).start,
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
        const p = this.getOffsetForIndex(n, d);
        if (!p) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [v, g] = p;
        this._scrollToOffset(v, { adjustments: void 0, behavior: l }), this.targetWindow.requestAnimationFrame(() => {
          if (!this.targetWindow) return;
          const S = () => {
            if (this.currentScrollToIndex !== n) return;
            const w = this.getScrollOffset(), x = this.getOffsetForIndex(n, g);
            if (!x) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            Dv(x[0], w) || c(g);
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
const um = (e, t, n, r) => {
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
function Vv({
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
  let o = um(
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
    for (; i < l && c.some((p) => p < n + t); ) {
      const p = e[i];
      c[p.lane] = p.end, i++;
    }
    const d = Array(r).fill(n + t);
    for (; o >= 0 && d.some((p) => p >= n); ) {
      const p = e[o];
      d[p.lane] = p.start, o--;
    }
    o = Math.max(0, o - o % r), i = Math.min(l, i + (r - 1 - i % r));
  }
  return { startIndex: o, endIndex: i };
}
const Yc = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function Bv({
  useFlushSync: e = !0,
  ...t
}) {
  const n = h.useReducer(() => ({}), {})[1], r = {
    ...t,
    onChange: (a, o) => {
      var i;
      e && o ? me.flushSync(n) : n(), (i = t.onChange) == null || i.call(t, a, o);
    }
  }, [l] = h.useState(
    () => new Uv(r)
  );
  return l.setOptions(r), Yc(() => l._didMount(), []), Yc(() => l._willUpdate()), l;
}
function Qv(e) {
  return Bv({
    observeElementRect: Av,
    observeElementOffset: Fv,
    scrollToFn: $v,
    ...e
  });
}
const fm = (e) => {
  const { state: t, dispatch: n, fetchFullImageDetails: r } = ge(), l = t.selectedIds.has(e.id), a = t.settings["gallery.view_mode"] || "grid_details", {
    handleRestoreWorkflow: o,
    handleAddUnifiedLoader: i,
    handleEditSource: c,
    handleEditTags: d,
    handleSendToWorkflow: p,
    handleRunWithWorkflow: v,
    handleRunWithMask: g,
    handleRestore: S,
    handleDelete: w,
    handleEditNotes: x,
    handleUpdateUserNotes: _
  } = $s(t, n), { getParentChain: f } = cm(t.images, t.settings), [u, m] = h.useState(null), [y, j] = h.useState(!1), [k, b] = h.useState(null), [M, T] = h.useState(!1), D = h.useRef(null);
  dl({
    enabled: y,
    insideRefs: [D],
    onOutside: () => j(!1)
  });
  const N = async (Y, Bt, Qt = !1) => {
    try {
      await navigator.clipboard.writeText(Y), Qt ? (T(!0), setTimeout(() => T(!1), 2e3)) : (b(Bt), setTimeout(() => b(null), 2e3));
    } catch (Ht) {
      O.error("Failed to copy text: ", Ht);
    }
  }, z = h.useCallback(
    (Y) => {
      if (Y.key === "Escape") {
        if (u) {
          cl(Y), m(null);
          return;
        }
        y && (cl(Y), j(!1));
      }
    },
    [u, y]
  );
  Us({
    enabled: y || u !== null,
    onKeyDown: z
  });
  const B = f(e), Q = t.settings["sidebar.show_filename"] === "filepath" ? `${e.type !== "custom" ? `${e.type}/` : ""}${e.subfolder ? `${e.subfolder}/` : ""}${e.filename}` : e.filename, P = t.settings["sidebar.thumbnail_size"] || 100, R = mt(e, Math.min(400, Math.round(P * 1.5)));
  return {
    state: t,
    dispatch: n,
    isSelected: l,
    viewMode: a,
    popupContent: u,
    setPopupContent: m,
    isMenuOpen: y,
    setIsMenuOpen: j,
    copiedLabel: k,
    popupCopied: M,
    menuRef: D,
    parentChain: B,
    displayFilename: Q,
    imgSrc: R,
    handleCopy: N,
    handleClick: (Y) => {
      !Y || typeof Y.preventDefault != "function" || (Y.shiftKey ? (Y.preventDefault(), Y.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Y.ctrlKey || Y.metaKey || t.selectedIds.size > 0 ? (Y.preventDefault(), Y.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : n({ type: "OPEN_VIEWER", payload: e.id }));
    },
    handleSelectToggle: (Y) => {
      !Y || typeof Y.preventDefault != "function" || (Y.preventDefault(), Y.stopPropagation(), Y.shiftKey ? n({ type: "SELECT_RANGE", payload: e.id }) : n({ type: "TOGGLE_SELECT", payload: e.id }));
    },
    handleContainerClick: (Y) => {
      !Y || typeof Y.preventDefault != "function" || (Y.shiftKey ? (Y.preventDefault(), Y.stopPropagation(), n({ type: "SELECT_RANGE", payload: e.id })) : Y.ctrlKey || Y.metaKey || t.selectedIds.size > 0 ? (Y.preventDefault(), Y.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })) : (Y.preventDefault(), Y.stopPropagation(), n({ type: "TOGGLE_SELECT", payload: e.id })));
    },
    handleMouseDown: (Y) => {
      !Y || typeof Y.preventDefault != "function" || !Y.target || Y.target instanceof Element && Y.target.closest("textarea, input, button, .meld-image-card__meta-content") || !Y.shiftKey && !Y.ctrlKey && !Y.metaKey && l || (Y.shiftKey || Y.ctrlKey || Y.metaKey || t.selectedIds.size > 0) && Y.preventDefault();
    },
    handleKeyDown: (Y) => {
      var Qt, Ht, Pn;
      !Y || typeof Y.preventDefault != "function" || ((Qt = document.activeElement) == null ? void 0 : Qt.tagName) === "INPUT" || ((Ht = document.activeElement) == null ? void 0 : Ht.tagName) === "TEXTAREA" || (Pn = document.activeElement) != null && Pn.isContentEditable || (Y.key === "Enter" || Y.key === " ") && (Y.preventDefault(), n({ type: "TOGGLE_SELECT", payload: e.id }));
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
      p(e);
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
    handleRunWithMask: (Y = "run") => g(e, Y),
    handleUpdateUserNotes: (Y) => _(e.id, Y),
    fetchFullImageDetails: r
  };
}, Hv = ({
  title: e,
  text: t,
  onClose: n,
  onCopy: r,
  isCopied: l
}) => (Le({ onEscape: n }), me.createPortal(
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: "meld-prompt-popup__overlay",
      onClick: (a) => {
        a.stopPropagation(), n();
      },
      children: /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup__content", onClick: (a) => a.stopPropagation(), children: [
        /* @__PURE__ */ s.jsxs("div", { className: "meld-prompt-popup__header", children: [
          /* @__PURE__ */ s.jsx("span", { children: e }),
          /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            l ? /* @__PURE__ */ s.jsx(di, { size: 18, style: { color: "var(--meld-success-color)" } }) : /* @__PURE__ */ s.jsx(ng, { className: "meld-prompt-popup__copy", size: 18, onClick: () => r(t) }),
            /* @__PURE__ */ s.jsx(he, { className: "meld-prompt-popup__close", size: 18, onClick: n })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "meld-prompt-popup__text", children: t })
      ] })
    }
  ),
  document.body
)), mm = en.memo(({ image: e }) => {
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
    menuRef: p,
    parentChain: v,
    displayFilename: g,
    imgSrc: S,
    handleCopy: w,
    handleClick: x,
    handleSelectToggle: _,
    handleContainerClick: f,
    handleMouseDown: u,
    handleKeyDown: m,
    handleRestoreWorkflow: y,
    handleAddUnifiedLoader: j,
    handleEditSource: k,
    handleEditTags: b,
    handleEditNotes: M,
    handleSendToWorkflow: T,
    handleRestore: D,
    handleDelete: N,
    handleRunWithWorkflow: z,
    handleRunWithMask: B,
    fetchFullImageDetails: C
  } = fm(e), [Q, P] = h.useState("idle");
  h.useEffect(() => {
    e.user_notes && Q === "saving" && P("idle");
  }, [e.user_notes, Q]);
  const R = (I) => {
    I.stopPropagation();
    let L = String(e.id);
    r && t.selectedIds.size > 0 && (L = Array.from(t.selectedIds).join(",")), I.dataTransfer.setData("text/plain", L), se.getState().setIsOpen(!0);
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
              onClick: (I) => {
                I.stopPropagation(), x(I);
              }
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__details", children: [
          (t.settings["sidebar.show_filename"] !== "none" || t.settings["sidebar.show_dimensions"]) && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__filename", children: [
            t.settings["sidebar.show_filename"] !== "none" && g,
            t.settings["sidebar.show_filename"] !== "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && ` (${e.width} x ${e.height})`,
            t.settings["sidebar.show_filename"] === "none" && t.settings["sidebar.show_dimensions"] && e.width && e.height && `${e.width} x ${e.height}`
          ] }),
          t.settings["gallery.show_parent_image"] && v.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "meld-image-card__lineage-v2", children: [
            /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Source" }),
            /* @__PURE__ */ s.jsx("div", { className: "meld-lineage-thumbs", children: v.map(
              (I, L) => I.imgSrc && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: I.imgSrc,
                  className: "meld-lineage-badge__parent-thumb",
                  loading: "lazy",
                  onClick: (W) => {
                    W.stopPropagation(), n({
                      type: "OPEN_VIEWER",
                      payload: {
                        id: I.id || e.id,
                        mode: "lineage"
                      }
                    });
                  },
                  title: L === 0 ? "Source" : L === 1 ? "Grand-Source" : `Ancestor (S${L + 1})`,
                  alt: "source thumb"
                },
                I.id || L
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
              onClick: async (I) => {
                I.stopPropagation();
                const L = await C(e.id);
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
                    onClick: async (I) => {
                      I.stopPropagation();
                      const L = await C(e.id);
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
              onClick: async (I) => {
                I.stopPropagation();
                const L = await C(e.id);
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
                    onClick: async (I) => {
                      I.stopPropagation();
                      const L = await C(e.id);
                      w(L.positive_prompt || L.positive || "-", "Positive");
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
              onClick: async (I) => {
                I.stopPropagation();
                const L = await C(e.id);
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
                    onClick: async (I) => {
                      I.stopPropagation();
                      const L = await C(e.id);
                      w(L.negative_prompt || L.negative || "-", "Negative");
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
              onClick: (I) => {
                I.stopPropagation(), b();
              },
              children: [
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__meta-label", children: "Tags" }),
                /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__tags", children: e.tags && e.tags.length > 0 ? e.tags.map((I) => /* @__PURE__ */ s.jsx("span", { className: "meld-image-card__tag", children: I }, I)) : /* @__PURE__ */ s.jsx(
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
              Q === "saving" && /* @__PURE__ */ s.jsx("span", { className: "meld-notes__status", children: "Saving..." })
            ] }),
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "meld-image-card__meta-content",
                onClick: (I) => {
                  I.stopPropagation(), M();
                },
                children: /* @__PURE__ */ s.jsx("div", { className: "meld-image-card__notes-preview", children: e.user_notes || /* @__PURE__ */ s.jsx("span", { className: "meld-notes__placeholder", children: "Add notes..." }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s.jsx(
          xi,
          {
            isMenuOpen: o,
            setIsMenuOpen: i,
            menuRef: p,
            settings: t.settings,
            onAddUnifiedLoader: j,
            onRestoreWorkflow: y,
            onSendToWorkflow: T,
            onRunWithWorkflow: z,
            onRunWithMask: (I) => B(I),
            onEditSource: k,
            onEditTags: b,
            onEditNotes: M,
            onRestore: D,
            showRestore: t.viewScope === "trash",
            onDelete: N,
            deleteLabel: t.viewScope === "trash" ? "Delete Permanently" : "Move to Trash"
          }
        ),
        l && /* @__PURE__ */ s.jsx(
          Hv,
          {
            title: l.title,
            text: l.text,
            onClose: () => a(null),
            onCopy: (I) => w(I, "", !0),
            isCopied: d
          }
        )
      ]
    }
  );
});
mm.displayName = "DetailedImageCard";
const pm = en.memo(({ image: e }) => {
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
    menuRef: p,
    state: v,
    handleAddUnifiedLoader: g,
    handleRestoreWorkflow: S,
    handleSendToWorkflow: w,
    handleRunWithWorkflow: x,
    handleRunWithMask: _,
    handleEditSource: f,
    handleEditTags: u,
    handleEditNotes: m,
    handleDelete: y,
    handleRestore: j
  } = fm(e), k = v.viewScope === "trash", b = k ? "Delete Permanently" : "Move to Trash", M = (T) => {
    T.stopPropagation();
    let D = String(e.id);
    t && v.selectedIds.size > 0 && (D = Array.from(v.selectedIds).join(",")), T.dataTransfer.setData("text/plain", D), se.getState().setIsOpen(!0);
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
              onClick: (T) => {
                T.stopPropagation(), o(T);
              }
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(
          xi,
          {
            isMenuOpen: c,
            setIsMenuOpen: d,
            menuRef: p,
            settings: v.settings,
            onAddUnifiedLoader: g,
            onRestoreWorkflow: S,
            onSendToWorkflow: w,
            onRunWithWorkflow: x,
            onRunWithMask: _,
            onEditSource: f,
            onEditTags: u,
            onEditNotes: m,
            onDelete: y,
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
});
pm.displayName = "SimpleImageCard";
const Xc = ({ image: e }) => {
  const { state: t } = ge();
  return (t.settings["gallery.view_mode"] || "grid_details") === "grid_only" ? /* @__PURE__ */ s.jsx(pm, { image: e }) : /* @__PURE__ */ s.jsx(mm, { image: e });
}, va = 6, Kv = 10, Gv = ({
  visibleImages: e,
  settings: t,
  loadMoreRef: n,
  viewerImageId: r,
  isLoading: l,
  hasMore: a
}) => {
  const o = h.useRef(null), [i, c] = h.useState(300), [d, p] = h.useState(!0), v = t["sidebar.thumbnail_size"] || 100, g = t["gallery.view_mode"] === "grid_only";
  h.useEffect(() => {
    const m = o.current;
    if (!m) return;
    const y = () => {
      c(m.clientWidth);
    };
    y();
    const j = new ResizeObserver(y);
    return j.observe(m), () => j.disconnect();
  }, []), h.useEffect(() => {
    const m = o.current;
    if (!m) return;
    if (typeof IntersectionObserver > "u") {
      p(!0);
      return;
    }
    const y = new IntersectionObserver(
      (j) => {
        const k = j[0];
        k && p(k.isIntersecting);
      },
      { threshold: 0 }
    );
    return y.observe(m), () => y.disconnect();
  }, []);
  const S = v + 10, w = g ? Math.max(
    1,
    Math.floor((i - Kv * 2 + va) / (S + va))
  ) : 1, x = g ? Math.ceil(e.length / w) : e.length, _ = g ? v + 14 : v + 40, f = Qv({
    count: x,
    getScrollElement: () => o.current,
    estimateSize: () => _,
    overscan: 5,
    enabled: d,
    getItemKey: (m) => {
      var y;
      return g ? `row-${m}-${w}` : ((y = e[m]) == null ? void 0 : y.id) ?? m;
    }
  });
  h.useEffect(() => {
    if (r === null) return;
    const m = e.findIndex((j) => j.id === r);
    if (m < 0) return;
    const y = g ? Math.floor(m / w) : m;
    f.scrollToIndex(y, {
      align: "center",
      behavior: "smooth"
    });
  }, [r, e, g, w, f]);
  const u = f.getVirtualItems();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: o,
      className: "meld-gallery__list-scroll",
      style: {
        "--meld-thumbnail-size": `${v}px`
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `meld-gallery__list ${g ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`,
            style: {
              height: `${f.getTotalSize()}px`,
              position: "relative"
            },
            children: u.map((m) => {
              if (g) {
                const j = m.index * w, k = Math.min(j + w, e.length), b = e.slice(j, k);
                return /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    ref: f.measureElement,
                    "data-index": m.index,
                    className: "meld-gallery__virtual-grid-row",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${m.start}px)`,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: va,
                      alignItems: "flex-start"
                    },
                    children: b.map((M) => /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        "data-image-id": M.id,
                        style: {
                          width: "auto",
                          flexShrink: 0,
                          display: "inline-block"
                        },
                        children: /* @__PURE__ */ s.jsx(
                          "div",
                          {
                            style: {
                              width: M.width && M.height ? Math.min(v, v * M.width / M.height) + 10 : v + 10,
                              minWidth: v + 10
                            },
                            children: /* @__PURE__ */ s.jsx(Xc, { image: M })
                          }
                        )
                      },
                      M.id
                    ))
                  },
                  m.key
                );
              }
              const y = e[m.index];
              return y ? /* @__PURE__ */ s.jsx(
                "div",
                {
                  ref: f.measureElement,
                  "data-index": m.index,
                  "data-image-id": y.id,
                  className: "meld-gallery__virtual-row",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${m.start}px)`
                  },
                  children: /* @__PURE__ */ s.jsx(Xc, { image: y })
                },
                m.key
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
}, qv = () => {
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
    isSearchActive: p,
    loadMoreRef: v
  } = Lv(), g = se((b) => b.isOpen), S = se((b) => b.setIsOpen), w = se((b) => b.buckets), x = Object.values(w).some(
    (b) => b && b.length > 0
  );
  O.log("GalleryPanel: isLightTableOpen =", g);
  const [_, f] = h.useState(!1), [u, m] = h.useState(null), y = h.useRef(null), j = h.useCallback(() => {
    y.current && (m(y.current.getBoundingClientRect()), f(!0));
  }, []), k = h.useCallback(
    (b) => {
      t({ type: "SET_SEARCH_QUERY", payload: b }), i(b), a("search"), f(!1);
    },
    [t, i, a]
  );
  return O.log("GalleryPanel: rendering", {
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
        b.dataTransfer.types.includes("application/meld-lt-source-slot") && (b.preventDefault(), b.dataTransfer.dropEffect = "move");
      },
      onDrop: (b) => {
        const M = b.dataTransfer.getData("application/meld-lt-source-slot");
        if (M) {
          b.preventDefault();
          const T = b.dataTransfer.getData("text/plain");
          if (T) {
            const D = T.split(","), N = [];
            D.forEach((z) => {
              if (z) {
                const B = z.trim();
                se.getState().removeFromBucket(M, B);
                const C = Number(B);
                Number.isNaN(C) || N.push(C);
              }
            }), N.length > 0 && t({ type: "DESELECT_IMAGES", payload: N });
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
                  /* @__PURE__ */ s.jsx(he, { size: 14 }),
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
                  color: p ? "var(--meld-success-color)" : l === "search" ? "var(--meld-text-color)" : "var(--meld-text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: p ? "bold" : "normal"
                },
                title: "Search",
                children: /* @__PURE__ */ s.jsx(Ln, { size: 14 })
              }
            ),
            e.favorites.length > 0 && /* @__PURE__ */ s.jsx(
              "button",
              {
                ref: y,
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
                children: /* @__PURE__ */ s.jsx(fr, { size: 14, fill: _ ? "var(--brand-yellow, #ffd700)" : "none" })
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
                children: /* @__PURE__ */ s.jsx(gr, { size: 14 })
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
                children: e.settings["gallery.view_mode"] === "grid_only" ? /* @__PURE__ */ s.jsx(ig, { size: 14 }) : /* @__PURE__ */ s.jsx(yf, { size: 14 })
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  O.log(
                    "GalleryPanel: Toggle Light Table clicked, from",
                    g,
                    "to",
                    !g
                  ), S(!g);
                },
                style: {
                  background: "none",
                  border: "none",
                  color: g ? "var(--brand-yellow, #ffd700)" : "var(--meld-text-secondary)",
                  position: "relative",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center"
                },
                title: "Light Table",
                children: /* @__PURE__ */ s.jsxs("div", { style: { position: "relative" }, children: [
                  /* @__PURE__ */ s.jsx(
                    hg,
                    {
                      size: 14,
                      fill: g ? "var(--brand-yellow, #ffd700)" : "none",
                      style: { opacity: g ? 1 : 0.8 }
                    }
                  ),
                  !g && x && /* @__PURE__ */ s.jsx(
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
                children: /* @__PURE__ */ s.jsx(sl, { size: 14 })
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
                children: /* @__PURE__ */ s.jsx(ol, { size: 14, className: e.isLoading ? "animate-spin" : "" })
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
                children: /* @__PURE__ */ s.jsx(wf, { size: 14 })
              }
            )
          ] }),
          l === "search" && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__search-wrapper", children: /* @__PURE__ */ s.jsx(yv, {}) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "meld-gallery__content", children: [
          /* @__PURE__ */ s.jsx(Hy, {}),
          e.error && /* @__PURE__ */ s.jsx("div", { className: "meld-gallery__error", children: e.error }),
          l === "tags" ? /* @__PURE__ */ s.jsx(
            vv,
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
                Gv,
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
          /* @__PURE__ */ s.jsx(Rv, {})
        ] }),
        e.viewerImageId !== null && /* @__PURE__ */ s.jsx(Tv, {}),
        /* @__PURE__ */ s.jsx(Qy, {}),
        _ && /* @__PURE__ */ s.jsx(
          pv,
          {
            anchorRect: u,
            onClose: () => f(!1),
            onSelect: k
          }
        ),
        /* @__PURE__ */ s.jsx(tv, {})
      ]
    }
  );
};
Zc.registerExtension({
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
const Yv = document.getElementById("meld-gallery-style");
if (!Yv) {
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
let Fl = null, it = null;
Zc.registerExtension({
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
    Yy();
    try {
      const n = await Ef();
      O.init(n.dev_mode), O.log("Settings received:", n);
    } catch (n) {
      O.error("Failed to fetch settings", n), O.init(!1);
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
            O.error("Error toggling sidebar:", r);
          }
        }
      }, te.addEventListener("meld-image-saved", () => {
        var n;
        (n = e.ui.meld) == null || n.refresh();
      }), te.addEventListener("meld-scan-progress", (n) => {
        window.dispatchEvent(new CustomEvent("meld-scan-progress", { detail: n.detail }));
      }), te.addEventListener("meld-scan-finished", (n) => {
        var r;
        window.dispatchEvent(new CustomEvent("meld-scan-finished", { detail: n.detail })), (r = e.ui.meld) == null || r.refresh(), O.log("Import completed.");
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
                  await Sf({
                    filename: l.filename,
                    subfolder: l.subfolder,
                    type: l.type
                  });
                } catch (a) {
                  O.error("Failed to auto-register image:", a);
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
            O.log("render called", {
              el: n,
              galleryRoot: Fl,
              galleryContainer: it
            }), n.style.height = "100%", n.style.overflow = "hidden";
            let r = n.parentElement;
            for (; r && !r.classList.contains("sidebar-content-container"); )
              r.style.height = "100%", r.style.overflow = "hidden", r = r.parentElement;
            r && (r.style.overflow = "hidden"), it || (O.log("galleryContainer not found, creating new one"), it = document.createElement("div"), it.id = "meld-gallery-container", it.style.height = "100%", it.style.width = "100%", it.style.display = "flex", it.style.flexDirection = "column", it.style.overflow = "hidden"), n.contains(it) || (O.log("Appending galleryContainer to el"), n.appendChild(it)), Fl ? O.log("Gallery root already exists, React should handle re-render if needed") : (O.log("Creating new gallery root"), Fl = df(it), Fl.render(
              en.createElement(ly, null, en.createElement(qv))
            ));
          }
        });
      } catch (n) {
        O.error("Error during sidebar registration:", n);
      }
    }
  }
});
export {
  ew as c,
  _m as g
};
